from django.contrib import admin
from django.urls import path

from weather_report import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index.webpage1, name='page1'),
    path('page2', index.webpage2, name='page2'),
    path('page3', index.webpage3, name='page3'),
    path('dropsearch', index.dropsearch, name='dropsearch'),
    path('weather_app', index.weather_calc, name='weather_index'),
    path('get_request', index.get_request),
]