import os

import psycopg2
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
    connection = psycopg2.connect(
        host=HOST,
        port=PORT,
        database=DATABASE,
        user=USER,
        password=PASSWORD,
    )
    return connection


def getShopId(name, address, number, logo_link):
    connection = getDBConnection()
    cursor = connection.cursor()
    cursor.execute('''SELECT * FROM shop WHERE name = %s''', (name,))
    id = cursor.fetchall()
    connection.commit()
    if len(id) > 0:
        print(id)
        return id
    else:
        cursor.execute('''
            INSERT INTO shop (
                name, 
                address, 
                phone_number, 
                logo_link
                ) VALUES (%s, %s, %s, %s) 
                    RETURNING id''',
                       (name, address, number, logo_link))
        connection.commit()
        id = cursor.fetchall()
        print(id)
        cursor.close()
        connection.close()
        return id
