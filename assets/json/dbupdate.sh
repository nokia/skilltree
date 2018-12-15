#!/bin/bash
mongoimport --db skilltreenew --collection skills --file assets/json/skills.json --jsonArray
mongoimport --db skilltreenew --collection trees --file assets/json/trees.json --jsonArray
mongoimport --db skilltreenew --collection categories --file assets/json/categories.json --jsonArray
