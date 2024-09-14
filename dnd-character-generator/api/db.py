from flask_sqlalchemy import SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = flase

db = SQLAlchemy(app)

class users(db.Model):
    _id = db.Column("id", db.Interger, pirmary_key=True)
    name = db.Column(db.String(32))
    email = db.Column(db.String(320)
    passw = db.Column(db.String(32))
    
    def __init__(self, name, passw)