from django.contrib import admin
from django.urls import path

from weather_report import main

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', main.landing, name='index'),
    path('choose_page_01', main.choose_01, name='choose_01'),
    path('choose_page_02', main.choose_02, name='choose_02'),
    path('indoor_page', main.indoor_page, name='indoor'),
    path('outdoor_page', main.outdoor_page, name='outdoor'),
    path('set_everything', main.set_everything),
    path('weather', main.weather_like, name='weather'),
]