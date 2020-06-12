from django.shortcuts import render
from django.views import View
from django.http import HttpResponse

from backend.api.pokeapi.api import get_species
from backend.api.funtranslations.api import translate

def index(request):
    return HttpResponse("Not yet implemented")

class Pokemon(View):
    def get(self, request, name=None):
        if not name:
            return HttpResponse("Not yet implemented")

        description = get_species(name)
        translation = translate(description)
        return HttpResponse(translation)