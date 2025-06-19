ORDERS_DB = [
    {"id": 1, "user_id": 1, "product_id": 1, "quantity": 2, "status": "pending"},
    {"id": 2, "user_id": 1, "product_id": 2, "quantity": 1, "status": "completed"},
]

next_order_id = len(ORDERS_DB) + 1

def get_orders():
    return ORDERS_DB

def get_order_by_id(order_id):
    return next((o for o in ORDERS_DB if o["id"] == order_id), None)

def get_orders_by_user(user_id):
    return [o for o in ORDERS_DB if o["user_id"] == user_id]

def add_order(user_id, product_id, quantity, status="pending"):
    global next_order_id
    new_order = {
        "id": next_order_id,
        "user_id": user_id,
        "product_id": product_id,
        "quantity": quantity,
        "status": status
    }
    ORDERS_DB.append(new_order)
    next_order_id += 1
    return new_order

def update_order_status(order_id, new_status):
    order = get_order_by_id(order_id)
    if order:
        order['status'] = new_status
        return order
    return None