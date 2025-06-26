#!/usr/bin/env python3
"""
Test script to verify database functionality
"""
from app import create_app
from modules.products.products_model import get_products
from modules.orders.orders_model import get_orders
from modules.users.users_model import get_users
from modules.farmers.farmers_model import get_farmers

def test_database():
    """Test database models"""
    app = create_app()
    
    with app.app_context():
        print("Testing database models...")
        
        # Test users
        users = get_users()
        print(f"\nUsers ({len(users)}):")
        for user in users:
            print(f"  - {user['username']} ({user['role']})")
        
        # Test farmers
        farmers = get_farmers()
        print(f"\nFarmers ({len(farmers)}):")
        for farmer in farmers:
            print(f"  - {farmer['farm_name']} in {farmer['location']}")
        
        # Test products
        products = get_products()
        print(f"\nProducts ({len(products)}):")
        for product in products:
            print(f"  - {product['name']}: ${product['price']} (Stock: {product['stock']})")
        
        # Test orders
        orders = get_orders()
        print(f"\nOrders ({len(orders)}):")
        for order in orders:
            print(f"  - Order #{order['id']}: {order.get('username', 'Unknown')} ordered {order['quantity']}x {order.get('product_name', 'Unknown')} - {order['status']}")
        
        print("\n✅ All database models working correctly!")

if __name__ == '__main__':
    test_database()
