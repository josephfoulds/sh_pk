import requests

def translate(text):
    r = requests.post('https://api.funtranslations.com/translate/shakespeare.json', data={"text":text})
    return(r.json()["contents"]["translated"])
