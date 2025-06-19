from flask import Blueprint, request, jsonify
from modules.products.products_model import (
    get_products, get_product_by_id, get_products_by_farmer,
    add_product, update_product, delete_product
)
from modules.farmers.farmers_model import get_farmer_by_id

products_bp = Blueprint('products', __name__)

@products_bp.route('/', methods=['GET'])
def list_all_products():
    return jsonify(get_products())

@products_bp.route('/', methods=['POST'])
def create_product():
    data = request.json
    farmer_id = data.get('farmer_id')
    name = data.get('name')
    description = data.get('description')
    price = data.get('price')
    stock = data.get('stock')

    if not all([farmer_id, name, description, price, stock is not None]):
        return jsonify({"error": "Missing required fields"}), 400
    if not get_farmer_by_id(farmer_id):
        return jsonify({"error": "Farmer not found"}), 404

    new_product = add_product(farmer_id, name, description, price, stock)
    return jsonify({"message": "Product created", "product": new_product}), 201

@products_bp.route('/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = get_product_by_id(product_id)
    if product:
        return jsonify(product)
    return jsonify({"error": "Product not found"}), 404

@products_bp.route('/<int:product_id>', methods=['PUT'])
def update_product_route(product_id):
    data = request.json
    updated_product = update_product(
        product_id,
        name=data.get('name'),
        description=data.get('description'),
        price=data.get('price'),
        stock=data.get('stock')
    )
    if updated_product:
        return jsonify({"message": "Product updated", "product": updated_product})
    return jsonify({"error": "Product not found"}), 404

@products_bp.route('/<int:product_id>', methods=['DELETE'])
def delete_product_route(product_id):
    if delete_product(product_id):
        return jsonify({"message": "Product deleted"}), 204
    return jsonify({"error": "Product not found"}), 404

@products_bp.route('/by_farmer/<int:farmer_id>', methods=['GET'])
def get_products_of_farmer(farmer_id):
    products = get_products_by_farmer(farmer_id)
    if products:
        return jsonify(products)
    return jsonify({"message": "No products found for this farmer"}), 404