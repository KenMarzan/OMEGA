from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from modules.users.users_model import get_users, get_user_by_id, get_user_by_username, add_user

users_bp = Blueprint('users', __name__)

@users_bp.route('/', methods=['GET'])
def list_users():
    return jsonify(get_users())

@users_bp.route('/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = get_user_by_id(user_id)
    if user:
        return jsonify(user)
    return jsonify({"error": "User not found"}), 404

@users_bp.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password') # In real app, hash this!
    role = data.get('role', 'customer') # Default role

    if not username or not password:
        return jsonify({"error": "Username and password are required"}), 400
    if get_user_by_username(username):
        return jsonify({"error": "Username already exists"}), 409

    password_hash = generate_password_hash(password)
    new_user = add_user(username, password_hash, role) # password_hash is just password for prototype
    return jsonify({"message": "User registered successfully", "user": new_user}), 201

@users_bp.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = get_user_by_username(username)
    if user and check_password_hash(user['password_hash'], password): # Super simple check for prototype
        return jsonify({"message": "Login successful", "user_id": user['id'], "role": user['role']})
    return jsonify({"error": "Invalid credentials"}), 401