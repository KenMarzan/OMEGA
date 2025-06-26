from flask import Blueprint, request, jsonify
from modules.orders.orders_model import (
    get_orders, get_order_by_id, get_orders_by_user, add_order, update_order_status
)
from modules.products.products_model import get_product_by_id, update_product
from modules.users.users_model import get_user_by_id

orders_bp = Blueprint('orders', __name__)

@orders_bp.route('/', methods=['GET'])
def list_all_orders():
    try:
        return jsonify(get_orders())
    except Exception as e:
        return jsonify({"error": f"Failed to retrieve orders: {str(e)}"}), 500

@orders_bp.route('/', methods=['POST'])
def create_order():
    data = request.json
    user_id = data.get('user_id') # Customer ID
    product_id = data.get('product_id')
    quantity = data.get('quantity')

    if not all([user_id, product_id, quantity is not None]):
        return jsonify({"error": "Missing required fields"}), 400
    
    try:
        user = get_user_by_id(user_id)
        if not user or user['role'] != 'customer':
            return jsonify({"error": "User does not exist or is not a customer"}), 403

        product = get_product_by_id(product_id)
        if not product:
            return jsonify({"error": "Product not found"}), 404
        if product['stock'] < quantity:
            return jsonify({"error": "Not enough stock available"}), 400

        new_order = add_order(user_id, product_id, quantity)
        update_product(product_id, stock=product['stock'] - quantity)
        return jsonify({"message": "Order placed successfully", "order": new_order}), 201
    except Exception as e:
        return jsonify({"error": f"Failed to create order: {str(e)}"}), 500

@orders_bp.route('/<int:order_id>', methods=['GET'])
def get_order(order_id):
    try:
        order = get_order_by_id(order_id)
        if order:
            return jsonify(order)
        return jsonify({"error": "Order not found"}), 404
    except Exception as e:
        return jsonify({"error": f"Failed to retrieve order: {str(e)}"}), 500

@orders_bp.route('/<int:order_id>/status', methods=['PUT'])
def update_order(order_id):
    data = request.json
    new_status = data.get('status')
    if not new_status:
        return jsonify({"error": "New status is required"}), 400

    updated_order = update_order_status(order_id, new_status)
    if updated_order:
        return jsonify({"message": "Order status updated", "order": updated_order})
    return jsonify({"error": "Order not found"}), 404

@orders_bp.route('/by_user/<int:user_id>', methods=['GET'])
def get_user_orders(user_id):
    orders = get_orders_by_user(user_id)