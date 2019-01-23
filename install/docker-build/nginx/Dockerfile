FROM nginx
MAINTAINER tamas.biro@nokia.com

RUN mkdir -p /templates
ADD nginx.conf /templates
ADD nginx.conf.nossl /templates
ADD configure-nginx.sh /templates
RUN chmod 755 /templates/configure-nginx.sh

ENTRYPOINT ["/templates/configure-nginx.sh"]
CMD ["nginx", "-g", "daemon off;"]
