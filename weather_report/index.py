from django.http import JsonResponse
from django.shortcuts import render

from . import weather_app


def weather_calc(request):
    data = weather_app.index()
    html = render(request, 'index.html', data)
    return html

def webpage1(request):
    return render(request, 'page1.html')

def webpage2(request):
    return render(request, 'page2.html')

def webpage3(request):
    return render(request, 'page3.html')

def dropsearch(request):
    return render(request, 'DropSearch.html')

def get_request(request):
    printout = request.GET.get('sent_data')
    print(printout)
    return JsonResponse({'input': printout})
