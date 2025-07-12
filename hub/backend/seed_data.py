#!/usr/bin/env python3
"""
Database seeding script to populate initial test data
"""
import sqlite3
import os
from werkzeug.security import generate_password_hash

DATABASE_PATH = os.path.join(os.path.dirname(__file__), 'database', 'database.db')

def seed_database():
    """Seed the database with initial test data"""
    print("Seeding database with initial data...")
    
    with sqlite3.connect(DATABASE_PATH) as db:
        db.row_factory = sqlite3.Row
        cursor = db.cursor()
        
        # Clear existing data (optional - for fresh start)
        cursor.execute('DELETE FROM orders')
        cursor.execute('DELETE FROM products')
        cursor.execute('DELETE FROM government_officials')
        cursor.execute('DELETE FROM farmers')
        cursor.execute('DELETE FROM users')
        
        # Insert test users
        users_data = [
            ('juan_customer', generate_password_hash('password123'), 'customer'),
            ('maria_farmer', generate_password_hash('password123'), 'farmer'),
            ('carlos_gov', generate_password_hash('password123'), 'government'),
            ('ana_farmer', generate_password_hash('password123'), 'farmer'),
        ]
        
        cursor.executemany(
            'INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)',
            users_data
        )
        
        # Get user IDs
        cursor.execute('SELECT id, username FROM users')
        users = {row['username']: row['id'] for row in cursor.fetchall()}
        
        # Insert farmers
        farmers_data = [
            (users['maria_farmer'], 'Bukid ng Pag-asa Farm', 'Nueva Ecija'),
            (users['ana_farmer'], 'Masaganang Ani Organic Farm', 'Laguna'),
        ]
        
        cursor.executemany(
            'INSERT INTO farmers (user_id, farm_name, location) VALUES (?, ?, ?)',
            farmers_data
        )
        
        # Get farmer IDs
        cursor.execute('SELECT id, user_id FROM farmers')
        farmers = {row['user_id']: row['id'] for row in cursor.fetchall()}
        
        # Insert products
        products_data = [
            (farmers[users['maria_farmer']], 'Organic Rice (Jasmine)', 'Premium organic jasmine rice from Nueva Ecija', 55.00, 100),
            (farmers[users['maria_farmer']], 'Fresh Corn (White)', 'Sweet white corn kernels freshly harvested', 25.00, 80),
            (farmers[users['ana_farmer']], 'Organic Coconuts', 'Fresh coconuts from Laguna plantations', 15.00, 60),
            (farmers[users['ana_farmer']], 'Ripe Bananas (Saba)', 'Premium Saba bananas ready to eat', 35.00, 40),
        ]
        
        cursor.executemany(
            'INSERT INTO products (farmer_id, name, description, price, stock) VALUES (?, ?, ?, ?, ?)',
            products_data
        )
        
        # Get product IDs
        cursor.execute('SELECT id, name FROM products')
        products = {row['name']: row['id'] for row in cursor.fetchall()}
        
        # Insert government officials
        gov_data = [
            (users['carlos_gov'], 'Department of Agriculture - Philippines'),
        ]
        
        cursor.executemany(
            'INSERT INTO government_officials (user_id, department) VALUES (?, ?)',
            gov_data
        )
        
        # Insert sample orders
        orders_data = [
            (users['juan_customer'], products['Organic Rice (Jasmine)'], 2, 'pending'),
            (users['juan_customer'], products['Ripe Bananas (Saba)'], 1, 'completed'),
        ]
        
        cursor.executemany(
            'INSERT INTO orders (user_id, product_id, quantity, status) VALUES (?, ?, ?, ?)',
            orders_data
        )
        
        db.commit()
        print("Database seeded successfully!")
        
        # Print summary
        cursor.execute('SELECT COUNT(*) as count FROM users')
        user_count = cursor.fetchone()['count']
        cursor.execute('SELECT COUNT(*) as count FROM farmers')
        farmer_count = cursor.fetchone()['count']
        cursor.execute('SELECT COUNT(*) as count FROM products')
        product_count = cursor.fetchone()['count']
        cursor.execute('SELECT COUNT(*) as count FROM orders')
        order_count = cursor.fetchone()['count']
        
        print(f"Seeded {user_count} users, {farmer_count} farmers, {product_count} products, {order_count} orders")

if __name__ == '__main__':
    seed_database()
