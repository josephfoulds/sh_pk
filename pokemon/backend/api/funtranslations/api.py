import requests
import os

def translate(text):
    headers = {
        "X-FunTranslations-Api-Secret": os.getenv('FT_API')
    }
    
    r = requests.post('https://api.funtranslations.com/translate/shakespeare.json', data={"text":text}, headers=headers)
    return(r.json()["contents"]["translated"])
