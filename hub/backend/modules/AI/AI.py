from flask import Flask, request
import google.generativeai as genai

# REPLACE THIS with your actual API key from https://makersuite.google.com/app/apikey
API_KEY = "AIzaSyBmcG287aHq7zOKJSxdeh_MWhV9I4WNzTU"

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    user_input = ""
    gemini_response = "What's Up Anigrow"

    if request.method == 'POST':
        user_input = request.form.get('user_input')
        try:
            response = model.generate_content(user_input)
            gemini_response = response.text
        except Exception as e:
            gemini_response = f"Error: {e}"

    return f'''
        <html>
            <head><title>Talk to Gemini</title></head>
            <body>
                <h1>Gemini Says:</h1>
                <div style="border:1px solid #ccc; padding:10px; width:80%; max-width:800px;">
                    <pre>{gemini_response}</pre>
                </div>
                <form method="POST" style="margin-top:20px;">
                    <textarea name="user_input" rows="10" cols="80" placeholder="Ask Gemini anything..."></textarea><br>
                    <input type="submit" value="Submit">
                </form>
            </body>
        </html>
    '''

if __name__ == "__main__":
    app.run(debug=True)