USERS_DB = [
    {"id": 1, "username": "customer1", "password_hash": "pass1", "role": "customer"},
    {"id": 2, "username": "farmer1", "password_hash": "pass2", "role": "farmer"},
    {"id": 3, "username": "gov1", "password_hash": "pass3", "role": "government"},
]
next_user_id = len(USERS_DB) + 1 

def get_users():
    return USERS_DB

def get_user_by_id(user_id):
    return next((u for u in USERS_DB if u["id"] == user_id), None)

def get_user_by_username(username):
    return next((u for u in USERS_DB if u["username"] == username), None)

def add_user(username, password_hash, role):
    global next_user_id
    new_user = {"id": next_user_id, "username": username, "password_hash": password_hash, "role": role}
    USERS_DB.append(new_user)
    next_user_id += 1
    return new_user