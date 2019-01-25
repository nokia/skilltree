FROM keymetrics/pm2:latest-alpine
MAINTAINER tamas.biro@nokia.com

ADD configure-nodejs.sh /sbin
RUN chmod 755 /sbin/configure-nodejs.sh
RUN apk add git sed
RUN mkdir -p /skilltree
RUN git clone https://github.com/nokia/skilltree.git /skilltree
RUN npm install mongoose
RUN npm install express --save

WORKDIR /skilltree
ENTRYPOINT ["/sbin/configure-nodejs.sh"]
CMD ["pm2-runtime", "./app.js"]
