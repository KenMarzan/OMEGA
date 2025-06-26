from werkzeug.security import generate_password_hash, check_password_hash
from database.db_connection import get_db

def get_users():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT id, username, password_hash, role FROM users')
    rows = cursor.fetchall()
    return [dict(row) for row in rows]

def get_user_by_id(user_id):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT id, username, password_hash, role FROM users WHERE id = ?', (user_id,))
    row = cursor.fetchone()
    return dict(row) if row else None

def get_user_by_username(username):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT id, username, password_hash, role FROM users WHERE username = ?', (username,))
    row = cursor.fetchone()
    return dict(row) if row else None

def add_user(username, password_hash, role):
    db = get_db()
    cursor = db.cursor()
    cursor.execute(
        'INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)',
        (username, password_hash, role)
    )
    db.commit()
    user_id = cursor.lastrowid
    return get_user_by_id(user_id)