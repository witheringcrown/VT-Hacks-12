import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_time():
    return {'time': time.time()}

@app.route('/hello_world')
def hello_world():
    return 7