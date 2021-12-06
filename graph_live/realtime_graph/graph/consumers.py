import json
from asyncio import sleep
from channels.generic.websocket import AsyncWebsocketConsumer
import mysql.connector
from itertools import count
import cgi
from multiprocessing import Process
from threading import Thread


def cliente():
    import graph.suscriptor

form = cgi.FieldStorage()

#input("TEST:")
class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        for i in range(30):
            numero = 2040
            user = "iot" + str(numero)

            mydb = mysql.connector.connect(
                host='127.0.0.1',
                user='Daniel',
                password='Miranda-643092',
                database='iot2040'
            )
            cur = mydb.cursor()
            cur.execute("SELECT numero FROM database_numero ORDER BY id DESC LIMIT 20;")
            valor = [i[0] for i in cur.fetchall()]
            cur.execute("SELECT fecha FROM database_numero ORDER BY id DESC LIMIT 2;")
            fecha= [i[0] for i in cur.fetchall()]
            fecha2= str(fecha[0])
            var=[valor,fecha2]
            await self.send(json.dumps({'value': var}))
            await sleep(0.001)

        for a in count(0):
            user = "iot2040"
            mydb = mysql.connector.connect(
                host='127.0.0.1',
                user='Daniel',
                password='Miranda-643092',
                database='iot2040'
            )
            cur = mydb.cursor()
            cur.execute("SELECT numero FROM database_numero ORDER BY id DESC LIMIT 20;")
            valor = [i[0] for i in cur.fetchall()]
            cur.execute("SELECT fecha FROM database_numero ORDER BY id DESC LIMIT 2;")
            fecha = [i[0] for i in cur.fetchall()]
            fecha2 = str(fecha[0])
            var = [valor, fecha2]
            await self.send(json.dumps({'value': var}))
            await sleep(1)
