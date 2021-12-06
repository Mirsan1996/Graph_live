import json
from dateutil import parser
from asyncio import sleep
from channels.generic.websocket import AsyncWebsocketConsumer
import mysql.connector
from datetime import datetime

mydb = mysql.connector.connect(
                host='172.20.108.32',
                user='Miranda',
                password='SqlAdmin',
                database='iot2040'
            )

cur = mydb.cursor()
cur.execute("SELECT fecha FROM database_numero ORDER BY id DESC LIMIT 1;")
fecha = [i[0] for i in cur.fetchall()]
fecha2=str(fecha[0])
print (fecha2)