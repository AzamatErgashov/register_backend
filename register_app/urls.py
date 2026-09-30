from django.urls import path
from .views import main, get_information

urlpatterns = [
    path('', main, name="main"),
    path('deps/', get_information, name="deps-list")
]
