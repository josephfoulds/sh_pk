from django.shortcuts import render
from django.views import View
from django.http import HttpResponse, JsonResponse

from backend.api.pokeapi.api import get_species
from backend.api.funtranslations.api import translate

# /backend/
def index(request):
	# Return a status code indicating that this is an invalid request
    return HttpResponse(status=400)

# GET /backend/pokemon/
# GET /backend/pokemon/[name]
class Pokemon(View):
    def get(self, request, name=None):

    	# Return a status code indicating that this is an invalid request if no name is passed
        if not name:
            return HttpResponse(status=400)

        # Retrieve the species information from the pokeapi
        description = get_species(name)

        # Retrieve the translation information from the funtranslations API
        translation = translate(description)

        # Package the information into a JSON and return it to the client
        return JsonResponse({"name": name, "description":translation})