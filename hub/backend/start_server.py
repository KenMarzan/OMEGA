#!/usr/bin/env python3
"""
Test script to start Flask server
"""
from app import create_app

if __name__ == '__main__':
    app = create_app()
    print("Starting Flask application...")
    print("Database initialized and ready!")
    print("Available endpoints:")
    print("  - http://127.0.0.1:5000/ (API status)")
    print("  - http://127.0.0.1:5000/database/ (Database status)")
    print("  - http://127.0.0.1:5000/users/ (Users)")
    print("  - http://127.0.0.1:5000/farmers/ (Farmers)")
    print("  - http://127.0.0.1:5000/products/ (Products)")
    print("  - http://127.0.0.1:5000/orders/ (Orders)")
    print("  - http://127.0.0.1:5000/government/dashboard/<user_id> (Government dashboard)")
    app.run(host='127.0.0.1', port=5000, debug=True)
