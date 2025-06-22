from flask import Flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
import os
from config import config_by_name



def create_app(config_name=None):
    current_config_name = config_name or os.environ.get('FLASK_CONFIG', 'development')
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_by_name[current_config_name])

    from modules.farmers.farmers_routes import farmers_bp
    from modules.products.products_routes import products_bp
    from modules.users.users_routes import users_bp

    app.register_blueprint(farmers_bp, url_prefix='/farmers')
    app.register_blueprint(products_bp, url_prefix='/products')
    app.register_blueprint(users_bp, url_prefix='/users')

    @app.route('/')
    def index():
        return {'message': 'API is running'}

    return app


if __name__ == '__main__':
    app = create_app() 
    app.run(host='0.0.0.0', port=5000)