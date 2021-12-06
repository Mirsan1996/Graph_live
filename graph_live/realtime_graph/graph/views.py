from django.shortcuts import render
from multiprocessing import Process
from threading import Thread

def cliente():
    import graph.suscriptor

def index(request):
    threads = []
    threads.append(Thread(target=cliente))
    for thread in threads:
        thread.start()
    return render(request, 'base.html', context={'text': 'Hola'})
