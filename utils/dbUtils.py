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

