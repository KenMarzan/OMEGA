PRODUCTS_DB = [
    {"id": 1, "farmer_id": 1, "name": "Organic Tomatoes", "description": "Fresh from the farm", "price": 120.00, "stock": 50},
    {"id": 2, "farmer_id": 1, "name": "Free-Range Eggs", "description": "Dozen, brown eggs", "price": 90.00, "stock": 10},
]
next_product_id = len(PRODUCTS_DB) + 1

def get_products():
    return PRODUCTS_DB

def get_product_by_id(product_id):
    return next((p for p in PRODUCTS_DB if p["id"] == product_id), None)

def get_products_by_farmer(farmer_id):
    return [p for p in PRODUCTS_DB if p["farmer_id"] == farmer_id]

def add_product(farmer_id, name, description, price, stock):
    global next_product_id
    new_product = {
        "id": next_product_id,
        "farmer_id": farmer_id,
        "name": name,
        "description": description,
        "price": price,
        "stock": stock
    }
    PRODUCTS_DB.append(new_product)
    next_product_id += 1
    return new_product

def update_product(product_id, name=None, description=None, price=None, stock=None):
    product = get_product_by_id(product_id)
    if product:
        if name is not None: product['name'] = name
        if description is not None: product['description'] = description
        if price is not None: product['price'] = price
        if stock is not None: product['stock'] = stock
        return product
    return None

def delete_product(product_id):
    global PRODUCTS_DB
    original_len = len(PRODUCTS_DB)
    PRODUCTS_DB = [p for p in PRODUCTS_DB if p["id"] != product_id]
    return len(PRODUCTS_DB) < original_len