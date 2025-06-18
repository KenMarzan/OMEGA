from flask import Flask
import os
from config import config_by_name

def create_app(config_name=None):
    current_config_name = config_name or os.environ.get('FLASK_CONFIG', 'development')
    app = Flask(__name__)
    app.config.from_object(config_by_name[current_config_name])
    @app.route('/')
    def hello_world():
        return "Hello, World!"
    return app

if __name__ == '__main__':
    app = create_app() 
    app.run(host='0.0.0.0', port=5000)