import sys
import os

# Add the parent directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app import create_app

# Create the Flask app
app = create_app('production')

# This is the main entry point for Vercel
# Vercel will call this app object
application = app

if __name__ == "__main__":
    app.run()
