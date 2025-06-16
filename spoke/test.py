from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    message = "What's Up Anigrow"
    user_input = ""

    if request.method == 'POST':
        user_input = request.form.get('user_input')
        message = f"You typed:<br><pre>{user_input}</pre>"

    return f'''
        <html>
            <head>
                <title>Text Box Example</title>
            </head>
            <body>
                <h1>{message}</h1>
                <form method="POST">
                    <textarea name="user_input" rows="10" cols="60" placeholder="Type a lot here..."></textarea><br>
                    <input type="submit" value="Submit">
                </form>
            </body>
        </html>
    '''

if __name__ == "__main__":
    app.run(debug=True)
