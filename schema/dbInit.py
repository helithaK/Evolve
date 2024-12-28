from utils.dbUtils import getDBConnection


def dbInitialize():
    connection = getDBConnection()
    with connection.cursor() as cursor:
        cursor.execute(open("schema/db.sql", "r").read())
        connection.commit()
