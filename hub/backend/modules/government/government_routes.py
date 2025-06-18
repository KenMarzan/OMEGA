from flask import Blueprint, jsonify, request
from modules.users.users_model import get_users
from modules.farmers.farmers_model import get_farmers
from modules.products.products_model import get_products
from modules.orders.orders_model import get_orders
from modules.government.government_model import get_gov_official_by_user_id

government_bp = Blueprint('government', __name__)

@government_bp.route('/dashboard/<int:user_id>', methods=['GET'])
def get_dashboard_stats(user_id):
    gov_official = get_gov_official_by_user_id(user_id)
    if not gov_official:
        return jsonify({"error": "Unauthorized: Not a recognized government official user ID"}), 403

    total_users = len(get_users())
    total_farmers = len(get_farmers())
    total_products = len(get_products())
    total_orders = len(get_orders())

    total_revenue = sum(
        o['quantity'] * next(
            (p['price'] for p in get_products() if p['id'] == o['product_id']), 0 # 0 if product not found (shouldn't happen)
        )
        for o in get_orders() if o['status'] == 'completed'
    )

    return jsonify({
        "total_users": total_users,
        "total_farmers": total_farmers,
        "total_products": total_products,
        "total_orders": total_orders,
        "total_revenue_completed_orders": round(total_revenue, 2) # Round to 2 decimal places
    })
