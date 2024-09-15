import time
import os
from time import sleep
from flask import Flask, render_template, redirect, request, session, url_for
from flask_sqlalchemy import SQLAlchemy
from propelauth_flask import init_auth


app = Flask(__name__)
app.secret_key = "umm_the_desk_is"
file_path_users = os.path.abspath(os.getcwd())+"/db/users.db"

################################## DB stuff ####################################
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+file_path_users
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)






class users(db.Model):
    _id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(32))
    email = db.Column(db.String(320))
    loginonly = db.Column(db.Boolean)
    
    def __init__(self, _id, name, email, loginonly):
        self._id = _id
        self.name = name 
        self.email = email
        self.loginonly = loginonly
        
with app.app_context():
    db.create_all()

############################## auth stuff #####################

auth = init_auth(
    "https://93765821396.propelauthtest.com",
    "c1879b86355b06b8cb74f54077536b38d31da87b2d53465ae18fa86fad78c31e510eb575f920a8c9f52051f534c8b015"
    )










#######################backend stuff #######################








@app.route('/')
def home():
    return("hi")
@app.route('/time')
def get_time():
    return {'time': time.time()}

@app.route('/hello_world')
def hello_world():
    return 7
    
    
    

@app.route('/login', methods=["POST", "GET"])
def login():
    if request.method =="POST":
        user = request.form["name"]
        session["user"] = user
        return redirect(url_for("mypage"))
    else:
        return render_template("dbtest.html")

@app.route("/mypage")
@auth.require_user
def mypage():
    if "user" in session:
        user = session["user"]
        return f"<h1>hi, {user}. this is editable<h/1>"
    else:
        return redirect(url_for("login"))
        
        
        
@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("login"))
    
    
@app.route("/user/<username>")
def userpage(username):
    if "user" in session and username == session["user"]:
        return redirect(url_for("mypage"))
     # add in auth function
    else:
        userpage_private = db.session.execute(db.select(users.loginonly).where(users.name == username)).scalar()
        userpage_email = db.session.execute(db.select(users.email).where(users.name == username)).scalar()
        return {"privacy":userpage_private,
                "email":userpage_email}
        
        
        
            
    
if __name__ == "__main__":
    app.run(debug=True)