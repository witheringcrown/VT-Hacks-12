import time
from flask import Flask

@app.route('/time')

def get_time():
    return {'time': time.time()}