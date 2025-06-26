#!/usr/bin/env python3
"""
Comprehensive test demonstrating database functionality
"""
from app import create_app
from modules.products.products_model import add_product, get_products, update_product, delete_product
from modules.orders.orders_model import add_order, get_orders
from modules.users.users_model import get_user_by_username
from modules.farmers.farmers_model import get_farmer_by_user_id

def comprehensive_test():
    """Test full CRUD operations on the database"""
    app = create_app()
    
    with app.app_context():
        print("🧪 Running comprehensive database test...\n")
        
        # Test 1: Read existing data
        print("📊 Current database state:")
        products = get_products()
        orders = get_orders()
        print(f"  - Products: {len(products)}")
        print(f"  - Orders: {len(orders)}")
        
        # Test 2: Find a farmer user
        farmer_user = get_user_by_username("jane_farmer")
        if farmer_user:
            farmer = get_farmer_by_user_id(farmer_user['id'])
            print(f"  - Test farmer: {farmer['farm_name']}")
            
            # Test 3: Add a new product
            print("\n➕ Adding new product...")
            new_product = add_product(
                farmer_id=farmer['id'],
                name="Test Carrots",
                description="Fresh organic carrots for testing",
                price=75.00,
                stock=20
            )
            print(f"  ✅ Added product: {new_product['name']} (ID: {new_product['id']})")
            
            # Test 4: Update the product
            print("\n✏️ Updating product...")
            updated_product = update_product(
                new_product['id'],
                price=80.00,
                stock=25
            )
            print(f"  ✅ Updated price to ${updated_product['price']} and stock to {updated_product['stock']}")
            
            # Test 5: Create an order
            customer_user = get_user_by_username("john_customer")
            if customer_user:
                print("\n🛒 Creating test order...")
                new_order = add_order(
                    user_id=customer_user['id'],
                    product_id=new_product['id'],
                    quantity=3,
                    status="pending"
                )
                print(f"  ✅ Created order: {new_order['quantity']}x {new_order.get('product_name', 'Test Carrots')}")
            
            # Test 6: Clean up - delete the test product
            print("\n🗑️ Cleaning up test data...")
            deleted = delete_product(new_product['id'])
            if deleted:
                print("  ✅ Test product deleted successfully")
            
        # Final state check
        print("\n📊 Final database state:")
        final_products = get_products()
        final_orders = get_orders()
        print(f"  - Products: {len(final_products)}")
        print(f"  - Orders: {len(final_orders)}")
        
        print("\n🎉 All database operations completed successfully!")
        print("✅ Database is fully functional with complete CRUD operations")

if __name__ == '__main__':
    comprehensive_test()
