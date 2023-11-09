from django.http import JsonResponse
from django.shortcuts import render

from . import weather_app

SELECTED = {"province": "", "amphoe": ""}
DATA = {}
CHOICE = ""
PAGE = ""


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
    global PAGE
    info = request.GET
    SELECTED.update({"province": info.get('province'),
                     "amphoe": info.get('amphoe')})
    good_or_bad = weather_app.index(SELECTED.get("province"), SELECTED.get("amphoe"), CHOICE)
    if good_or_bad[0] is True:
        use = 'nice_weather'
        DATA.update({"valid": "ตากเลยครับ"})
    else:
        use = 'bad_weather'
        DATA.update({"valid": "ระวังฝนครับ"})
    DATA.update(good_or_bad[1])
    PAGE = use + '.html'
    return JsonResponse({})


def weather_like(request):
    return render(request, PAGE, DATA)
