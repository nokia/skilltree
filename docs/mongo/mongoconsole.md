## Example MongoDB commands

From the shell, run:

```sh
mongo
```

List all values from the "users" collection:
```sh
use <dbasename>
```

## List skills in a nice list
```sh
db.skills.find({}, {name: 1, _id: 0})
```


#### Change field values in a collection

Change a string attribute for a single item (selected by "username"):
```sh
db.users.update({"username": "your_username"}, {$set: {"location": "newlocation"}})
```

Change a boolean attribute for all users:
```sh
db.users.update( { "willingToTeach" : false }, { $set:{ "willingToTeach" : true } }, { multi : true } );
```

## Assisted skill creation

#### TODO: Create JSON using jq

```sh
BASE_WIKI_URL="https://en.wikipedia.org/wiki/"
BASE_YT_URL="https://youtube.com"

# COLLECTIONS
SKILL_NAMES="SKILL_NAME"
SKILL_LEVELS=1
SKILL_DESC="Skill description"

JSON_STRING=$( jq -n \
                --arg wi "$BASE_WIKI_URL" \
                --arg yt "$BASE_YT_URL" \
                --arg sn "$SKILL_NAMES" \
                --arg sl "$SKILL_LEVELS" \
                --arg sd "$SKILL_DESC" \
                  '{name: $sn, level: $sl, description: $wi, url: $yt, urlLastAccessed: "N/A"  }' )
```

Import from JSON:
```sh
mongoimport --db skilltreenew --collection skills --file assets/json/skills_gen.json --jsonArray
```
