from website import create_app

app = create_app()

# makes so the web server is run only
# from this file directly
if __name__ == '__main__':
    app.run(debug=True) # debug mode, turn off later

