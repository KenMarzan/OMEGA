from database.db_connection import get_db

def get_farmers():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT id, user_id, farm_name, location FROM farmers')
    rows = cursor.fetchall()
    return [dict(row) for row in rows]

def get_farmer_by_id(farmer_id):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT id, user_id, farm_name, location FROM farmers WHERE id = ?', (farmer_id,))
    row = cursor.fetchone()
    return dict(row) if row else None

def get_farmer_by_user_id(user_id):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT id, user_id, farm_name, location FROM farmers WHERE user_id = ?', (user_id,))
    row = cursor.fetchone()
    return dict(row) if row else None

def add_farmer(user_id, farm_name, location):
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        'INSERT INTO farmers (user_id, farm_name, location) VALUES (?, ?, ?)',
        (user_id, farm_name, location)
    )
    db.commit()
    farmer_id = cursor.lastrowid
    return get_farmer_by_id(farmer_id)