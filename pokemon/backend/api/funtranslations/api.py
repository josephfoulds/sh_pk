import requests
import os

# Retrieve translation text from the FunTranslations
def translate(text):
	# Pull in the API key from environment variables and set it in the headers
	# nb: Not required, but rate limiting for free accounts was slowing me down so purchased a plan
    headers = {
        "X-FunTranslations-Api-Secret": os.getenv('FT_API')
    }
    
    r = requests.post('https://api.funtranslations.com/translate/shakespeare.json', data={"text":text}, headers=headers)

    # Parse the json and return the translated content
    return(r.json()["contents"]["translated"])
