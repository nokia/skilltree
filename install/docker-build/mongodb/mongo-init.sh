#!/bin/bash

#here we must start mongodb outside of Docker to do the import
mongod &
MONGOPID=$!

mongoimport --db skilltreenew --collection skills --file /skilltree/assets/json/skills.json --jsonArray
mongoimport --db skilltreenew --collection trees --file /skilltree/assets/json/trees.json --jsonArray
mongoimport --db skilltreenew --collection categories --file /skilltree/assets/json/categories.json --jsonArray

#stop mongodb...
kill ${MONGOPID}
COUNTER=0
while ps -p ${MONGOPID}
do
  ((COUNTER++))
  [ $COUNTER -gt 10 ] && exit 1
  sleep 1
done

#...and let Docker to start it as a daemon
exec "$@"
