#!/bin/bash
echo "Drop current skills, trees and categories collections & update from JSON?"
read
echo -e "use skilltreenew\ndb.trees.drop()\ndb.skills.drop()\ndb.categories.drop()\n" > dropcollections.js
mongo < dropcollections.js

mongoimport --db skilltreenew --collection skills --file skills.json --jsonArray
mongoimport --db skilltreenew --collection trees --file trees.json --jsonArray
mongoimport --db skilltreenew --collection categories --file categories.json --jsonArray
