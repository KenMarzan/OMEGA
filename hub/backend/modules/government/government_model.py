GOV_OFFICIALS_DB = [
    {"id": 1, "user_id": 3, "department": "Department of Agriculture"}, # user_id 3 corresponds to 'gov1' in users_model
]

next_gov_id = len(GOV_OFFICIALS_DB) + 1

def get_gov_officials():
    """Returns a list of all mock government officials."""
    return GOV_OFFICIALS_DB

def get_gov_official_by_user_id(user_id):
    """
    Finds a government official profile by their associated user ID.
    This is useful for verifying if a user has a government role.
    """
    return next((g for g in GOV_OFFICIALS_DB if g["user_id"] == user_id), None)