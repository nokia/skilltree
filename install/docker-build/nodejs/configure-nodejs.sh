#!/bin/sh

[ ${DBADDRESS} ] && sed -i "s?localhost?${DBADDRESS}?g" /skilltree/config.js

exec "$@"
