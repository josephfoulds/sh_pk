# sh_pk

sh_pk ("Shakespearean Pokemon") is a technical assessment for TrueLayer

## Overview
Project is implemented using Python-Django backend and React frontend, with the Django code modularized into a backend app for exposing the required endpoints, and a main app for serving the React SPA.

React is compiled via Webpack and served as a static JS package by Django.

## Installation
### Virtual Environment
@@TODO

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
