from django.contrib import admin
from django.urls import path

from weather_report import main

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', main.landing, name='index'),
    path('main_page', main.main_page, name='main'),
    path('indoor_page', main.indoor_page, name='indoor'),
    path('outdoor_page', main.outdoor_page, name='outdoor'),
]