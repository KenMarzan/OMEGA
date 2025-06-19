FARMERS_DB = [
    {"id": 1, "user_id": 2, "farm_name": "Green Acres Farm", "location": "Sariaya, Quezon"},
]
next_farmer_id = len(FARMERS_DB) + 1

def get_farmers():
    return FARMERS_DB

def get_farmer_by_id(farmer_id):
    return next((f for f in FARMERS_DB if f["id"] == farmer_id), None)

def get_farmer_by_user_id(user_id):
    return next((f for f in FARMERS_DB if f["user_id"] == user_id), None)

def add_farmer(user_id, farm_name, location):
    global next_farmer_id
    new_farmer = {"id": next_farmer_id, "user_id": user_id, "farm_name": farm_name, "location": location}
    FARMERS_DB.append(new_farmer)
    next_farmer_id += 1
    return new_farmer