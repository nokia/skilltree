#!/bin/bash
mongoimport --db skilltreenew --collection skills --file skills.json --jsonArray
mongoimport --db skilltreenew --collection trees --file trees.json --jsonArray
mongoimport --db skilltreenew --collection categories --file categories.json --jsonArray
