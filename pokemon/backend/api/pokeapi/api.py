import requests

# Used to clean the string from newline and formfeed
def clean_string(input_string):
    return input_string.replace('\n', ' ').replace('\f', ' ')

# Retrieve pokemon species information from the PokeAPI
def get_species(name):
    try:
        r = requests.get('https://pokeapi.co/api/v2/pokemon-species/'+name)
        if (r.status_code != 200):
            return (r.status_code, None)
    except:
        return (500, None)
    
    try:
        # Parse the json and return the description of the pokemon
        json = r.json()
        return(200, clean_string(json["flavor_text_entries"][0]["flavor_text"]))
    except:
        return (404, None)