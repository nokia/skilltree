# Skill Tree

Skill tree is a web app to visualize skills, motivating people for self-development and supporting the culture of cooperation and knowledge sharing.

Main features:

  - Record your current skills and their levels in a visual form
  - Immediately see the self-development options ahead of you (increase awareness of skills, available help & trainings)
  - Inspire people to think about their future & create a personal learning plan with time-framed steps
  - Find people fast with a specific skill & willingness to share their knowledge (enhance collaboration)
  - Making it easy to offer/request training for a specific skill and a specific skill level (build p2p training culture)

## Tech

Skill Tree needs the following components to operate:

* [node.js] - An open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
* [Express] - A web framework for Node.js
* [MongoDB] - A free and open-source cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schemata.
* [Nginx] - A web server which can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.
* A GNU/Linux distribution, e.g. [Debian] or [Ubuntu].

## Installation

#### Debian 9

```sh
cd
mkdir skilltree
cd skilltree
wget https://raw.githubusercontent.com/sicambria/skilltree/master/install/skilltree_install_debian9.sh ; chmod +x skilltree_install_debian9.sh ; ./skilltree_install_debian9.sh
```

## Development

Want to contribute? Great!
You need an IDE of your choice, we recommend [Atom] or [Visual Studio Code].

For Atom, installing some plugins are helpful:

```sh
apm install emmet todo minimap pigments minimap-pigments linter file-icons git-diff atom-beautify ask-stack highlight-selected
```
After running the install script, setup your web server.
For Nginx:

```sh
cat /etc/nginx/sites-available/default
```

```sh
server {
        listen 443 ssl default_server;
        listen [::]:443 ssl default_server;

        ssl_certificate     /etc/letsencrypt/live/YOUR_DOMAIN.ORG/cert.pem;
        ssl_certificate_key /etc/letsencrypt/live/YOUR_DOMAIN.ORG/privkey.pem;

        location / {
                proxy_pass http://localhost:3000/;
        }
}

server {
        listen 80 default_server;
        listen [::]:80 default_server;
        return 301 https://$host$request_uri;
}
```

```sh
cd skilltree
node app.js
```

Alternatively, to keep up with changes automatically, install & use PM2 (recommended):
```sh
cd skilltree
pm2 create skilltree
```
To run:
```sh
pm2 start skilltree --watch
```
To query the status:
```sh
pm2 list
```

### License

BSD License 2.0


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [MongoDB]: <https://www.mongodb.com/>
   [Express]: <https://expressjs.com/>
   [Nginx]: <https://www.nginx.com/>
   [Visual Studio Code]: <https://code.visualstudio.com/>
   [Atom]: <https://github.com/atom/atom>
   [Debian]: <https://www.debian.org/>
   [Ubuntu]: <https://www.ubuntu.com/>
