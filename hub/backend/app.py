from flask import Flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
import os
from config import config_by_name
from database.db_connection import init_app, database_bp



def create_app(config_name=None):
    current_config_name = config_name or os.environ.get('FLASK_CONFIG', 'development')
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_by_name[current_config_name])

    init_app(app)
    app.register_blueprint(database_bp, url_prefix='/database')

    from modules.farmers.farmers_routes import farmers_bp
    from modules.products.products_routes import products_bp
    from modules.users.users_routes import users_bp
    from modules.orders.orders_routes import orders_bp
    from modules.government.government_routes import government_bp

    app.register_blueprint(farmers_bp, url_prefix='/farmers')
    app.register_blueprint(products_bp, url_prefix='/products')
    app.register_blueprint(users_bp, url_prefix='/users')
    app.register_blueprint(orders_bp, url_prefix='/orders')
    app.register_blueprint(government_bp, url_prefix='/government')

    @app.route('/')
    def index():
        return {'message': 'API is running'}

    return app


if __name__ == '__main__':
    app = create_app() 
    app.run(host='0.0.0.0', port=5000)