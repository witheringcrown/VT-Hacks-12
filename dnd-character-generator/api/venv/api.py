from Flask import flask

app = Flask(__name__)

@app.route('/time')
def get_time():
    return {'time': time.time()}