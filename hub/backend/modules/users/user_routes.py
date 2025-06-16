from flask import Blueprint, request, jsonify
from modules.users.user_schemas import user_create_schema, user_response_schema, users_response_schema
from marshmallow import ValidationError
import logging

user_bp = Blueprint('users', __name__, url_prefix='/api/users')
logger = logging.getLogger(__name__)

# --- POST /api/users (Create User) ---
@user_bp.route('', methods=['POST'])
def create_user():
    logger.info("Received request to create user.")
    try:
        # 1. Parse and Validate Request Data (using schema)
        user_data = user_create_schema.load(request.get_json())
    except ValidationError as err:
        logger.warning(f"Validation error for create_user: {err.messages}")
        return jsonify({"errors": err.messages}), 400
    except Exception as e:
        logger.error(f"Error parsing request JSON: {e}")
        return jsonify({"error": "Invalid JSON format"}), 400

    try:
        # 2. Delegate to Business Logic (Service Layer)
        # new_user = UserService.create_user(user_data)
        # logger.info(f"User created: {new_user.username}")
        # 3. Serialize Response (using schema)
        # return user_response_schema.dump(new_user), 201
        return jsonify({"message": "User creation logic commented out"}), 201
    except ValueError as e: # Example for business logic validation errors
        logger.warning(f"Business logic error: {e}")
        return jsonify({"error": str(e)}), 409 # Conflict, e.g., email already exists
    except Exception as e:
        logger.exception("Unexpected error during user creation.")
        return jsonify({"error": "An internal server error occurred"}), 500

# --- GET /api/users (Get All Users) ---
@user_bp.route('', methods=['GET'])
def get_all_users():
    logger.info("Received request to get all users.")
    try:
        # 1. Delegate to Business Logic
        # users = UserService.get_all_users()
        # 2. Serialize Response (for a list of users)
        # return users_response_schema.dump(users), 200
        return jsonify({"message": "Get all users logic commented out"}), 200
    except Exception as e:
        logger.exception("Unexpected error getting all users.")
        return jsonify({"error": "An internal server error occurred"}), 500

# --- GET /api/users/<int:user_id> (Get Single User) ---
@user_bp.route('/<int:user_id>', methods=['GET'])
def get_user_by_id(user_id):
    logger.info(f"Received request for user ID: {user_id}")
    try:
        # 1. Delegate to Business Logic
        # user = UserService.get_user_by_id(user_id)
        # if user:
        #     # 2. Serialize Response
        #     return user_response_schema.dump(user), 200
        # else:
        #     logger.warning(f"User not found for ID: {user_id}")
        #     return jsonify({"error": "User not found"}), 404
        return jsonify({"message": "Get user by ID logic commented out"}), 200
    except Exception as e:
        logger.exception(f"Unexpected error getting user ID {user_id}.")
        return jsonify({"error": "An internal server error occurred"}), 500