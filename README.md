# sh_pk

sh_pk ("Shakespearean Pokemon") is a technical assessment for TrueLayer

## Overview
Project is implemented using Python-Django backend and React frontend, with the Django code modularized into a backend app for exposing the required endpoints, and a main app for serving the React SPA.

React is compiled via Webpack and served as a static JS package by Django.

## Installation
### Option 1) Docker Hub
1) Pull the Docker image and run it
* `docker pull jfoulds/sh_pk; docker run -it -p 8000:8000 jfoulds/sh_pk`

Congratulations! sh_pk is now accessible at [http://127.0.0.1:8000](http://127.0.0.1:8000/)

### Option 2) Docker Build
1) Clone Github repository into your local environment
* `git clone https://github.com/josephfoulds/sh_pk`

2) Move into the repo root
* `cd sh_pk`

3) Build and run the Docker image
* `docker build -t sh_pk .; docker run -it -p 8000:8000 sh_pk`

*nb: Depending on your Docker configuration, you may need to run the above commands as root via sudo*

Congratulations! sh_pk is now accessible at [http://127.0.0.1:8000](http://127.0.0.1:8000/)

### Option 3) Virtual Environment
1) Clone Github repository into your local environment
* `git clone https://github.com/josephfoulds/sh_pk`

2) Move into the repo root
* `cd sh_pk`

3) Install requirements using pip
* `pip install -r requirements.txt`

4) Run the server
* `cd pokemon; python manage.py runserver`

Congratulations! sh_pk is now accessible at [http://127.0.0.1:8000](http://127.0.0.1:8000/)

## FunTranslations API Key
Optionally, to avoid the throttling limits, we can provide a FunTranslations API key using the FT_API environment variable.
For example, this can be passed to the Docker container using the following alternative run command:

3) Build and run the Docker image
* `docker build -t sh_pk .; docker run -it -e FT_API=[apikey] -p 8000:8000 sh_pk`

## Internal API
Backend API is implemented RESTful as per specification and accessible via the routes outlined below

### Pokemon Resources
* `GET /backend/[POKEMON]` - Retrieve translation for Pokemon specified

## Favorites
Favorites are stored as a JSON blob in local storage. Considering the limitations of the specification, this seemed a reasonable choice rather than storing server side and linking to sessions.

## Caching
Since the FunTranslations API is heavily throttled, caching has been implemented at two layers in the codebase

* **Client Side** - Search requests and server responses are cached in the frontend codebase to avoid hitting the server on repeated requests. Cache duration lasts for session duration.

* **Server Side** - Server side caching has been implemented using SQLite. All translations are cached for 24h and are lazy evicted. Lazy eviction seemed reasonable as we do not anticipate huge volume of use.

## Schema

|         Pokemon          |
| ------------------------ |
| id (primary key)         |
| name (CharField).        |
| description (CharField)  |
| creation (DateTimeField) |
