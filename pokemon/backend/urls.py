from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),

    # pokemon endpoints
    path('pokemon/', views.Pokemon.as_view()),
    path('pokemon/<str:name>/', views.Pokemon.as_view()),
]