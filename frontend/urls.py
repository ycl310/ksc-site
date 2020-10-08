# frontend/urls.py

from django.urls import path

from .views import index, NewestsDetailView

urlpatterns = [
    path('', index),
    path('about', index),
    path('newsadmin', index),
    path('form', index)
]