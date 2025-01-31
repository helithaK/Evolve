import os
import time
import psycopg2
from psycopg2 import OperationalError
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Access environment variables
HOST = os.environ['HOST']
USER = os.environ['USER']
DATABASE = os.environ['DATABASE']
PORT = os.environ['PORT']
PASSWORD = os.environ['PASSWORD']


def getDBConnection():
    retries = 5
    for _ in range(retries):
        try:
            connection = psycopg2.connect(
                host=HOST, 
                database=DATABASE, 
                user=USER, 
                password=PASSWORD, 
                port=5432
            )
            return connection
        except OperationalError as e:
            print(f"Database connection failed: {e}")
            time.sleep(5)  # Wait before retrying
    raise Exception("Unable to connect to the database after several attempts")


# def getShopId(name, address, number, logo_link):
#     connection = getDBConnection()
#     cursor = connection.cursor()
#     cursor.execute('''SELECT * FROM shop WHERE name = %s''', (name,))
#     id = cursor.fetchall()
#     connection.commit()
#     if len(id) > 0:
#         print(id)
#         return id
#     else:
#         cursor.execute('''
#             INSERT INTO shop (
#                 name, 
#                 address, 
#                 phone_number, 
#                 logo_link
#                 ) VALUES (%s, %s, %s, %s) 
#                     RETURNING id''',
#                        (name, address, number, logo_link))
#         connection.commit()
#         id = cursor.fetchall()
#         print(id)
#         cursor.close()
#         connection.close()
#         return id
