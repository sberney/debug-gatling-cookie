from flask import Flask, request
app = Flask(__name__)

@app.route('/admin-page')
def some_route():
    if not request.cookies.has_key('IdentityCookie'):
        return 'authorization required', 401
    elif 'admin' != request.cookies['IdentityCookie']:
        return 'forbidden', 403
    else:
        return 'super secret info'

@app.route('/')
def index():
    return app.send_static_file('auth.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=1139)
