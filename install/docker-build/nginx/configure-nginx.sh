#!/bin/bash

[ ${YOURDOMAIN} ] && sed -i "s?#YOURDOMAIN#?${YOURDOMAIN}?g" /templates/nginx.conf > /etc/nginx/nginx.conf || cp /templates/nginx.conf.nossl /etc/nginx/nginx.conf
[ ${BACKEND} ] && sed -i "s?#BACKEND#?${BACKEND}?g" /etc/nginx/nginx.conf || sed -i "s?#BACKEND#?localhost?g" /etc/nginx/nginx.conf

exec "$@"
