from database.db_connection import get_db
from flask import g

def get_products():
    """Get all products from database"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM products ORDER BY id')
    products = cursor.fetchall()
    return [dict(product) for product in products]

def get_product_by_id(product_id):
    """Get a product by ID from database"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM products WHERE id = ?', (product_id,))
    product = cursor.fetchone()
    return dict(product) if product else None

def get_products_by_farmer(farmer_id):
    """Get products by farmer ID from database"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM products WHERE farmer_id = ?', (farmer_id,))
    products = cursor.fetchall()
    return [dict(product) for product in products]

def add_product(farmer_id, name, description, price, stock):
    """Add a new product to database"""
    db = get_db()
    cursor = db.cursor()
    try:
        cursor.execute(
            'INSERT INTO products (farmer_id, name, description, price, stock) VALUES (?, ?, ?, ?, ?)',
            (farmer_id, name, description, price, stock)
        )
        db.commit()
        product_id = cursor.lastrowid
        return get_product_by_id(product_id)
    except Exception as e:
        db.rollback()
        raise e

def update_product(product_id, name=None, description=None, price=None, stock=None):
    """Update an existing product in database"""
    db = get_db()
    cursor = db.cursor()
    
    # Build dynamic update query
    update_fields = []
    update_values = []
    
    if name is not None:
        update_fields.append('name = ?')
        update_values.append(name)
    if description is not None:
        update_fields.append('description = ?')
        update_values.append(description)
    if price is not None:
        update_fields.append('price = ?')
        update_values.append(price)
    if stock is not None:
        update_fields.append('stock = ?')
        update_values.append(stock)
    
    if not update_fields:
        return get_product_by_id(product_id)
    
    update_values.append(product_id)
    query = f'UPDATE products SET {", ".join(update_fields)} WHERE id = ?'
    
    try:
        cursor.execute(query, update_values)
        db.commit()
        if cursor.rowcount > 0:
            return get_product_by_id(product_id)
        return None
    except Exception as e:
        db.rollback()
        raise e

def delete_product(product_id):
    """Delete a product from database"""
    db = get_db()
    cursor = db.cursor()
    try:
        cursor.execute('DELETE FROM products WHERE id = ?', (product_id,))
        db.commit()
        return cursor.rowcount > 0
    except Exception as e:
        db.rollback()
        raise e