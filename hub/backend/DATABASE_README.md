# Database Documentation

## Overview
The backend now uses SQLite database instead of in-memory lists for persistent data storage. All models have been migrated to use proper database queries.

## Database Schema

### Tables

#### users
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `username` (TEXT UNIQUE NOT NULL)
- `password_hash` (TEXT NOT NULL)
- `role` (TEXT NOT NULL DEFAULT 'customer')

#### farmers
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `user_id` (INTEGER NOT NULL) - Foreign key to users.id
- `farm_name` (TEXT NOT NULL)
- `location` (TEXT NOT NULL)

#### products
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `farmer_id` (INTEGER NOT NULL) - Foreign key to farmers.id
- `name` (TEXT NOT NULL)
- `description` (TEXT)
- `price` (REAL NOT NULL)
- `stock` (INTEGER NOT NULL DEFAULT 0)

#### orders
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `user_id` (INTEGER NOT NULL) - Foreign key to users.id
- `product_id` (INTEGER NOT NULL) - Foreign key to products.id
- `quantity` (INTEGER NOT NULL)
- `status` (TEXT NOT NULL DEFAULT 'pending')
- `created_at` (TIMESTAMP DEFAULT CURRENT_TIMESTAMP)

#### government_officials
- `id` (INTEGER PRIMARY KEY AUTOINCREMENT)
- `user_id` (INTEGER NOT NULL) - Foreign key to users.id
- `department` (TEXT NOT NULL)

## Setup Instructions

### 1. Initialize Database
The database is automatically initialized when the Flask app starts. Tables are created if they don't exist.

### 2. Seed Initial Data
Run the seeding script to populate test data:
```bash
python seed_data.py
```

### 3. Start the Server
```bash
python app.py
# or
python start_server.py
```

### 4. Test the Setup
```bash
# Test database models
python test_database.py

# Test API endpoints (requires server to be running)
python test_api.py
```

## API Endpoints

### Database Management
- `GET /database/` - Initialize database tables
- `GET /database/status` - Check database status and list tables

### Users
- `GET /users/` - List all users
- `POST /users/register` - Register new user
- `POST /users/login` - User login

### Farmers
- `GET /farmers/` - List all farmers
- `GET /farmers/<id>` - Get farmer by ID
- `POST /farmers/` - Create new farmer

### Products
- `GET /products/` - List all products
- `GET /products/<id>` - Get product by ID
- `GET /products/by_farmer/<farmer_id>` - Get products by farmer
- `POST /products/` - Create new product
- `PUT /products/<id>` - Update product
- `DELETE /products/<id>` - Delete product

### Orders
- `GET /orders/` - List all orders
- `GET /orders/<id>` - Get order by ID
- `GET /orders/by_user/<user_id>` - Get orders by user
- `POST /orders/` - Create new order
- `PUT /orders/<id>/status` - Update order status

### Government
- `GET /government/dashboard/<user_id>` - Get dashboard statistics for government officials

## Database Features

### Connection Management
- Uses Flask's `g` object for request-scoped database connections
- Automatic connection cleanup after each request
- Row factory for dict-like access to query results

### Error Handling
- Database transactions with rollback on errors
- Try-catch blocks in model functions
- Proper error messages returned to API clients

### Data Integrity
- Foreign key constraints between tables
- Unique constraints (e.g., username)
- Default values for optional fields

## Migration Summary

### Completed Migrations
✅ **Users Model**: Migrated from `USERS_DB` list to SQLite `users` table
✅ **Farmers Model**: Migrated from `FARMERS_DB` list to SQLite `farmers` table  
✅ **Products Model**: Migrated from `PRODUCTS_DB` list to SQLite `products` table
✅ **Orders Model**: Migrated from `ORDERS_DB` list to SQLite `orders` table
✅ **Government Model**: Migrated from `GOV_OFFICIALS_DB` list to SQLite `government_officials` table

### Model Functions Updated
All CRUD operations now use proper SQL queries:
- `get_*()` - SELECT queries with proper joins
- `add_*()` - INSERT queries with error handling
- `update_*()` - UPDATE queries with dynamic field updates
- `delete_*()` - DELETE queries with confirmation

### Blueprint Registration
All blueprints now registered in app.py:
- users_bp
- farmers_bp
- products_bp
- orders_bp ✅ (newly added)
- government_bp ✅ (newly added)

## Testing

### Sample Test Data
The `seed_data.py` script creates:
- 4 test users (customer, 2 farmers, 1 government official)
- 2 farms with different locations
- 4 products from different farmers
- 2 sample orders

### Test Users
- **john_customer** (password: password123) - Customer role
- **jane_farmer** (password: password123) - Farmer role  
- **alice_farmer** (password: password123) - Farmer role
- **bob_gov** (password: password123) - Government role

## Database File Location
The SQLite database file is located at:
`hub/backend/database/database.db`

## Environment Variables
No additional environment variables needed for database. Flask automatically handles the SQLite connection.

## Backup and Recovery
Since using SQLite, the entire database is in a single file. To backup:
1. Copy `database/database.db` file
2. To restore, replace the file and restart the server

---

🎉 **Database migration complete!** All models now use persistent SQLite storage with proper error handling, relationships, and API integration.
