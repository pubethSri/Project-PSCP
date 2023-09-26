from django.shortcuts import render
from django.http import JsonResponse
from . import weather_report


def index(request):
    data = weather_report.index()
    html = render(request, 'index.html', data)
    return html


def request(request):
    printout = request.GET.get('sent_data')
    print(printout)
    return JsonResponse({'input': printout})
