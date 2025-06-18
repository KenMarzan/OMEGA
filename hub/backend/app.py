from flask import Flask, jsonify
from config import config_by_name
import os
import logging
from modules.users.user_routes import user_bp 

def create_app(config_name=None):
    if config_name is None:
        config_name = os.environ.get('FLASK_CONFIG', 'development')

    app = Flask(__name__)
    app.config.from_object(config_by_name[config_name])

    logging.basicConfig(level=getattr(logging, app.config['LOG_LEVEL'].upper()))
    app.logger.info(f"App running in {config_name} mode.")
    app.logger.info(f"Database URI: {app.config['SQLALCHEMY_DATABASE_URI']}")

    app.register_blueprint(user_bp)

    @app.route('/')
    def index():
        return "Welcome to the Backend API!"

    @app.errorhandler(404)
    def not_found(error):
        app.logger.warning(f"404 Not Found: {request.path}")
        return jsonify({"error": "Not Found", "message": "The requested URL was not found on the server."}), 404

    return app

if __name__ == '__main__':
    from dotenv import load_dotenv
    load_dotenv() # Load environment variables from .env
    app = create_app()
    app.run(host='0.0.0.0', port=5000) # Development server (not for production)