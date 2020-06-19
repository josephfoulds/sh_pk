import datetime

from django.shortcuts import render
from django.views import View
from django.http import HttpResponse, JsonResponse

from backend.api.pokeapi.api import get_species
from backend.api.funtranslations.api import translate

from backend.models import Pokemon as PokemonModel

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

        # Lower case the name
        name=name.lower()

        # nb: Django will throw a DoesNotExist exception on cache miss
        try:
            # Retrieve from local cache
            pokemon = PokemonModel.objects.get(name=name)
            # Determine whether we should lazy-evict after 24h
            elapsed = datetime.datetime.now(datetime.timezone.utc) - pokemon.creation
            if (elapsed.total_seconds() >= 60*60*24):
                # Evict the cache
                pokemon.delete()
            else:
                return JsonResponse({"name": pokemon.name, "description":pokemon.description})
        except Exception:
            # Add some fancy error logging in here, but likely will happen on cache miss
            pass

        # Retrieve the species information from the pokeapi
        (response, description) = get_species(name)

        # Return through error response code if not HTTP200
        if (response != 200):
            return HttpResponse(status=response)

        # Retrieve the translation information from the funtranslations API
        (response, translation) = translate(description)

        # Return through error response code if not HTTP200
        if (response != 200):
            return HttpResponse(status=response)

        # Populate the cache
        pokemon = PokemonModel(name=name, description=translation)
        pokemon.save()

        # Package the information into a JSON and return it to the client
        return JsonResponse({"name": name, "description":translation})