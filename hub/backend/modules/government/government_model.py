from database.db_connection import get_db
from flask import g

def get_gov_officials():
    """Get all government officials from database"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute('''
        SELECT g.*, u.username 
        FROM government_officials g 
        LEFT JOIN users u ON g.user_id = u.id 
        ORDER BY g.id
    ''')
    officials = cursor.fetchall()
    return [dict(official) for official in officials]

def get_gov_official_by_user_id(user_id):
    """Get government official by user ID from database"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute('''
        SELECT g.*, u.username 
        FROM government_officials g 
        LEFT JOIN users u ON g.user_id = u.id 
        WHERE g.user_id = ?
    ''', (user_id,))
    official = cursor.fetchone()
    return dict(official) if official else None

def get_gov_official_by_id(official_id):
    """Get government official by ID from database"""
    db = get_db()
    cursor = db.cursor()
    cursor.execute('''
        SELECT g.*, u.username 
        FROM government_officials g 
        LEFT JOIN users u ON g.user_id = u.id 
        WHERE g.id = ?
    ''', (official_id,))
    official = cursor.fetchone()
    return dict(official) if official else None

def add_gov_official(user_id, department):
    """Add a new government official to database"""
    db = get_db()
    cursor = db.cursor()
    try:
        cursor.execute(
            'INSERT INTO government_officials (user_id, department) VALUES (?, ?)',
            (user_id, department)
        )
        db.commit()
        official_id = cursor.lastrowid
        return get_gov_official_by_id(official_id)
    except Exception as e:
        db.rollback()
        raise e