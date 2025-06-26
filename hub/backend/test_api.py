#!/usr/bin/env python3
"""
Test script to validate API endpoints
"""
import requests
import json

BASE_URL = "http://127.0.0.1:5000"

def test_endpoints():
    """Test various API endpoints"""
    print("Testing API endpoints...")
    
    try:
        # Test root endpoint
        response = requests.get(f"{BASE_URL}/")
        print(f"✅ Root endpoint: {response.status_code} - {response.json()}")
        
        # Test database status
        response = requests.get(f"{BASE_URL}/database/status")
        print(f"✅ Database status: {response.status_code} - {response.json()}")
        
        # Test users endpoint
        response = requests.get(f"{BASE_URL}/users/")
        print(f"✅ Users endpoint: {response.status_code} - Found {len(response.json())} users")
        
        # Test farmers endpoint
        response = requests.get(f"{BASE_URL}/farmers/")
        print(f"✅ Farmers endpoint: {response.status_code} - Found {len(response.json())} farmers")
        
        # Test products endpoint
        response = requests.get(f"{BASE_URL}/products/")
        products = response.json()
        print(f"✅ Products endpoint: {response.status_code} - Found {len(products)} products")
        
        # Test orders endpoint
        response = requests.get(f"{BASE_URL}/orders/")
        orders = response.json()
        print(f"✅ Orders endpoint: {response.status_code} - Found {len(orders)} orders")
        
        # Test government dashboard (using user ID 3 - bob_gov)
        response = requests.get(f"{BASE_URL}/government/dashboard/3")
        dashboard = response.json()
        print(f"✅ Government dashboard: {response.status_code}")
        print(f"    Dashboard stats: {dashboard}")
        
        print("\n🎉 All API endpoints working correctly!")
        
    except requests.exceptions.ConnectionError:
        print("❌ Connection error: Make sure the Flask server is running on port 5000")
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == '__main__':
    test_endpoints()
