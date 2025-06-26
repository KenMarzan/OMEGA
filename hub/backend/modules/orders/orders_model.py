from database.db_connection import get_db
from flask import g

def get_orders():
    """Get all orders from database"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute('''
        SELECT o.*, p.name as product_name, u.username 
        FROM orders o 
        LEFT JOIN products p ON o.product_id = p.id 
        LEFT JOIN users u ON o.user_id = u.id 
        ORDER BY o.created_at DESC
    ''')
    orders = cursor.fetchall()
    return [dict(order) for order in orders]

def get_order_by_id(order_id):
    """Get an order by ID from database"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute('''
        SELECT o.*, p.name as product_name, u.username 
        FROM orders o 
        LEFT JOIN products p ON o.product_id = p.id 
        LEFT JOIN users u ON o.user_id = u.id 
        WHERE o.id = ?
    ''', (order_id,))
    order = cursor.fetchone()
    return dict(order) if order else None

def get_orders_by_user(user_id):
    """Get orders by user ID from database"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute('''
        SELECT o.*, p.name as product_name 
        FROM orders o 
        LEFT JOIN products p ON o.product_id = p.id 
        WHERE o.user_id = ? 
        ORDER BY o.created_at DESC
    ''', (user_id,))
    orders = cursor.fetchall()
    return [dict(order) for order in orders]

def add_order(user_id, product_id, quantity, status="pending"):
    """Add a new order to database"""
    db = get_db()
    cursor = db.cursor()
    try:
        cursor.execute(
            'INSERT INTO orders (user_id, product_id, quantity, status) VALUES (?, ?, ?, ?)',
            (user_id, product_id, quantity, status)
        )
        db.commit()
        order_id = cursor.lastrowid
        return get_order_by_id(order_id)
    except Exception as e:
        db.rollback()
        raise e

def update_order_status(order_id, new_status):
    """Update order status in database"""
    db = get_db()
    cursor = db.cursor()
    try:
        cursor.execute('UPDATE orders SET status = ? WHERE id = ?', (new_status, order_id))
        db.commit()
        if cursor.rowcount > 0:
            return get_order_by_id(order_id)
        return None
    except Exception as e:
        db.rollback()
        raise e