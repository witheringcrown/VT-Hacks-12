import time
from time import sleep
from flask import Flask, render_template, redirect, request, session, url_for

app = Flask(__name__)
app.secret_key = "umm_the_desk_is"

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
    
    
if __name__ == "__main__":
    app.run(debug=True)