# modules/users/user_schemas.py
from marshmallow import Schema, fields, validate

class UserCreateSchema(Schema):
    """Schema for validating user creation requests."""
    username = fields.String(required=True, validate=validate.Length(min=3, max=80))
    email = fields.Email(required=True)
    password = fields.String(required=True, load_only=True, validate=validate.Length(min=6)) # load_only=True means it won't be serialized in responses

class UserResponseSchema(Schema):
    """Schema for serializing user data in responses."""
    id = fields.Integer(dump_only=True) # dump_only=True means it's only for output
    username = fields.String(required=True)
    email = fields.Email(required=True)
    created_at = fields.DateTime(dump_only=True) # Assuming your model has this field

user_create_schema = UserCreateSchema()
user_response_schema = UserResponseSchema()
users_response_schema = UserResponseSchema(many=True) 