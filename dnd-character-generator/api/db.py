from flask_sqlalchemy import SQLAlchemy
import api.py
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = flase

db = SQLAlchemy(app)
app = Flask(__name__)

class users(db.Model):
    _id = db.Column("id", db.Interger, pirmary_key=True)
    name = db.Column(db.String(32))
    email = db.Column(db.String(320))
    test = db.Column(db.String(32))
    loginonly = db.Column(db.Bool)
    
    def __init__(self, name, test):
        self.name = name
        self.email = email
    
with app.ap_context():
    db.create_all()