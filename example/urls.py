# example/urls.py
from django.urls import path
from example.views import index
from . import views


urlpatterns = [
    path('', index),
    path('request', views.request)
]