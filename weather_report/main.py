from django.http import JsonResponse
from django.shortcuts import render

from . import weather_app

SELECTED = {"province": "", "amphoe": ""}


def landing(request):
    return render(request, 'index.html')


def main_page(request):
    return render(request, 'main.html')


def indoor_page(request):
    return render(request, 'indoor.html')


def outdoor_page(request):
    return render(request, 'outdoor.html')


def set_everything(request):
    data = request.GET
    SELECTED.update({"province": data.get('province'),
                     "amphoe": data.get('amphoe')})
    print(SELECTED)
    return JsonResponse({})


def weather_like(request):
    good_or_bad = weather_app.index(SELECTED.get("province"), SELECTED.get("amphoe"))
    print("this")
    if good_or_bad is True:
        use = 'nice_weather'
    else:
        use = 'bad_weather'
    page = use + '.html'
    return render(request, page, SELECTED)
