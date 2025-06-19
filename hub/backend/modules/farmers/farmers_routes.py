from flask import Blueprint, request, jsonify
from modules.farmers.farmers_model import get_farmers, get_farmer_by_id, add_farmer, get_farmer_by_user_id
from modules.users.users_model import get_user_by_id 

farmers_bp = Blueprint('farmers', __name__)

@farmers_bp.route('/', methods=['GET'])
def list_farmers():
    return jsonify(get_farmers())

@farmers_bp.route('/<int:farmer_id>', methods=['GET'])
def get_farmer(farmer_id):
    farmer = get_farmer_by_id(farmer_id)
    if farmer:
        return jsonify(farmer)
    return jsonify({"error": "Farmer not found"}), 404

@farmers_bp.route('/register', methods=['POST'])
def register_farmer_profile():
    data = request.json
    user_id = data.get('user_id')
    farm_name = data.get('farm_name')
    location = data.get('location')

    if not user_id or not farm_name or not location:
        return jsonify({"error": "user_id, farm_name, and location are required"}), 400

    user = get_user_by_id(user_id)
    if not user or user['role'] != 'farmer':
        return jsonify({"error": "User does not exist or is not a farmer"}), 403
    if get_farmer_by_user_id(user_id):
        return jsonify({"error": "Farmer profile already exists for this user"}), 409

    new_farmer = add_farmer(user_id, farm_name, location)
    return jsonify({"message": "Farmer profile created", "farmer": new_farmer}), 201