import requests

def clean_string(input_string):
    return input_string.replace('\n', ' ').replace('\f', ' ')

def get_species(name):
    r = requests.get('https://pokeapi.co/api/v2/pokemon-species/'+name)
    json = r.json()
    return(clean_string(json["flavor_text_entries"][0]["flavor_text"]))