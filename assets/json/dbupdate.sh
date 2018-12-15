#!/bin/bash
echo "Drop current skills, trees and categories collections & update from JSON?"
read
echo -e "use skilltreenew'\n'db.trees.drop()'\n'db.skills.drop()'\n'db.categories.drop()" > dropcollections.js
mongo < dropcollections.js

mongoimport --db skilltreenew --collection skills --file skills.json --jsonArray
mongoimport --db skilltreenew --collection trees --file trees.json --jsonArray
mongoimport --db skilltreenew --collection categories --file categories.json --jsonArray
