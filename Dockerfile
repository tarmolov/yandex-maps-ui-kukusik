FROM ubuntu:20.04

WORKDIR /home/app

ENV TZ=Europe/Moscow
ENV DEBIAN_FRONTEND=noninteractive
ENV DEBFULLNAME="Kukusik"
ENV DEBEMAIL=kukusik@kukusik.ru

RUN apt-get update
RUN apt-get install -y curl devscripts cdbs nginx vim
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g pm2

# set environment type
RUN mkdir -p /etc/yandex
RUN echo production > /etc/yandex/environment.type

# nginx config for serving static files
RUN echo '\
server {\n\
    listen 8082;\n\
    \n\
    location / {\n\
        root /usr/local/www/static;\n\
        autoindex off;\n\
    }\n\
}' >> /etc/nginx/sites-available/static.conf
RUN ln -s /etc/nginx/sites-available/static.conf /etc/nginx/sites-enabled/static.conf
RUN service nginx restart
