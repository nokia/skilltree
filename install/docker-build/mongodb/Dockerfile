FROM mongo
MAINTAINER tamas.biro@nokia.com

ADD mongo-init.sh /sbin
RUN chmod 775 /sbin/mongo-init.sh

RUN apt-get update -y
RUN apt-get install -y git
RUN mkdir -p /skilltree
RUN git clone https://github.com/nokia/skilltree.git /skilltree

ENTRYPOINT ["/sbin/mongo-init.sh"]
CMD ["mongod","--bind_ip_all"]
