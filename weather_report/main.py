from django.http import JsonResponse
from django.shortcuts import render

from . import weather_app

SELECTED = {"province": "", "amphoe": ""}
CHOICE = ""


def landing(request):
    return render(request, 'index.html')


def choose_01(request):
    global CHOICE
    CHOICE = "IN"
    return render(request, 'choose-indoor.html')


def choose_02(request):
    global CHOICE
    CHOICE = "OUT"
    return render(request, 'choose-outdoor.html')


def indoor_page(request):
    return render(request, 'indoor.html')


def outdoor_page(request):
    return render(request, 'outdoor.html')


def set_everything(request):
    data = request.GET
    SELECTED.update({"province": data.get('province'),
                     "amphoe": data.get('amphoe')})
    return JsonResponse({})


def weather_like(request):
    good_or_bad = weather_app.index(SELECTED.get("province"), SELECTED.get("amphoe"), CHOICE)
    if good_or_bad[0] is True:
        use = 'nice_weather'
        data = {"valid": "ตากเลยครับ"}
    else:
        use = 'bad_weather'
        data = {"valid": "ระวังฝนครับ"}
    data.update(good_or_bad[1])
    page = use + '.html'
    return render(request, page, data)
