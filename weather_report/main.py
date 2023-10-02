from django.http import JsonResponse
from django.shortcuts import render

from . import weather_app


def landing(request):
    return render(request, 'index.html')


def main_page(request):
    return render(request, 'main.html')


def indoor_page(request):
    return render(request, 'indoor.html')


def outdoor_page(request):
    return render(request, 'outdoor.html')
