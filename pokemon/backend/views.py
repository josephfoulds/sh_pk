from django.shortcuts import render
from django.views import View
from django.http import HttpResponse

def index(request):
    return HttpResponse("Not yet implemented")

class Pokemon(View):
    def get(self, request, name=None):
        return HttpResponse("Not yet implemented")