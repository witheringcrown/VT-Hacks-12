# stores the screens/views of the website
from flask import Blueprint

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return "<h1>Hello World</h1>"
