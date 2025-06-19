import os
import psycopg2
from psycopg2 import pool

DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://user:password@localhost:5432/mydatabase")

try:
    connection_pool = psycopg2.pool.SimpleConnectionPool(
        1, 10, dsn=DATABASE_URL
    )
except Exception as e:
    print(f"Error creating connection pool: {e}")
    connection_pool = None

def get_connection():
    if connection_pool:
        return connection_pool.getconn()
    else:
        raise Exception("Connection pool is not initialized.")

def release_connection(conn):
    if connection_pool and conn:
        connection_pool.putconn(conn)

def close_all_connections():
    if connection_pool:
        connection_pool.closeall()  