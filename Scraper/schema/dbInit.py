from webscraping.utils import getDBConnection


def dbInitialize():
    connection = getDBConnection()
    with connection.cursor() as cursor:
        cursor.execute(open("schema/db.sql", "r").read())  # Path to your SQL schema file
        connection.commit()
        print("success")

if __name__ == "__main__":
    dbInitialize()