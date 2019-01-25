#!/bin/sh

# VARIABLES

# DO NOT INCLUDE WWW IN THE DOMAIN NAME
DOMAIN=yourdomain.org

# Add install sources
sudo apt install curl software-properties-common git -y
# MongoDB
curl https://www.mongodb.org/static/pgp/server-4.0.asc | sudo apt-key add -
sudo sh -c "echo 'deb http://repo.mongodb.org/apt/debian stretch/mongodb-org/4.0 main' >> /etc/apt/sources.list.d/mongodb-org-4.0.list"
# NodeJS
curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -

sudo apt update

# Install MongoDB
sudo apt install mongodb-org -y
sudo systemctl enable mongod
sudo systemctl start mongod

# Install NodeJS
sudo apt-get install -y nodejs

cd
cd skilltree
git clone https://github.com/nokia/skilltree.git

# mongose
npm install mongoose

# Express
npm install express --save

---mongo---
#show dbs
#use skilltreenew
#db.createCollection("users")
#db.createCollection("skills")

mongoimport --db skilltreenew --collection skills --file assets/json/skills.json --jsonArray
mongoimport --db skilltreenew --collection trees --file assets/json/trees.json --jsonArray
mongoimport --db skilltreenew --collection categories --file assets/json/categories.json --jsonArray


sudo npm install pm2 -g
pm2 start app.js --watch
sudo pm2 startup systemd


# NGINX link: https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-debian-9
# If you use APACHE: https://www.digitalocean.com/community/tutorials/how-to-secure-apache-with-let-s-encrypt-on-debian-9
# https://www.digitalocean.com/community/tutorials/how-to-install-the-apache-web-server-on-debian-9
# sudo systemctl enable apache2


# APACHE
if [ $1 = "Apache" ]
then
  echo "Installing Apache"
  sudo apt install apache2 python-certbot-apache -y
  # sudo nano /etc/apache2/sites-available/$DOMAIN.conf
  sudo sh -c "echo 'ServerName $DOMAIN;' >> /etc/apache2/sites-available/$DOMAIN.conf"
  sudo apache2ctl configtest
  sudo certbot --apache -d $DOMAIN -d www.$DOMAIN
  sudo a2enmod proxy
  sudo a2enmod proxy_http
else
  # sudo nano /etc/apt/sources.list
  sudo sh -c "echo 'deb http://deb.debian.org/debian stretch-backports main contrib non-free' >> /etc/apt/sources.list"
  sudo sh -c "echo 'deb-src http://deb.debian.org/debian stretch-backports main contrib non-free' >> /etc/apt/sources.list"
  sudo apt update
  sudo apt install python-certbot-nginx -y -t stretch-backports
  sudo certbot --nginx -d $DOMAIN -d $DOMAIN
fi

chmod 755 /etc/letsencrypt/live/
chmod 755 /etc/letsencrypt/archive/

# https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-debian-9
