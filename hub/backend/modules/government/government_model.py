GOV_OFFICIALS_DB = [
    {"id": 1, "user_id": 3, "department": "Department of Agriculture"},
]

next_gov_id = len(GOV_OFFICIALS_DB) + 1

def get_gov_officials():
    return GOV_OFFICIALS_DB

def get_gov_official_by_user_id(user_id):
    return next((g for g in GOV_OFFICIALS_DB if g["user_id"] == user_id), None)