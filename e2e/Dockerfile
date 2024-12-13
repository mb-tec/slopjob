FROM cypress/included:13.16.1
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY cypress.config.js .
COPY cypress .

ENV CI=1
RUN npm ci
RUN npx cypress verify
RUN npx cypress run --browser chrome



#ENTRYPOINT ["tail", "-f", "/dev/null"]









#FROM php:8.2-apache
#FROM ubuntu:latest

#RUN set -ex; \
#  apt-get update && \
#  apt-get install -y --no-install-recommends npm;
#
#RUN set -ex; \
#  npm cache clean -f && \
#  npm install -g n && \
#  n stable && \
#  npm install --global cypress;
#
#SHELL ["/bin/bash", "-c"]

#WORKDIR /var/www