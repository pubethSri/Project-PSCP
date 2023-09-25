from django.shortcuts import render
from . import weather_report


def index(request):
    data = weather_report.index()
    html = render(request, 'index.html', data)
    return html
