#!/usr/bin/env bash
# start-server.sh
(cd pokemon/pokemon; python manage.py migrate; python manage.py collectstatic; gunicorn pokemon.wsgi --user www-data --bind 0.0.0.0:8010 --workers 3) &
nginx -g "daemon off;"