FROM cypress/included:13.16.1
#FROM php:8.2-apache
#FROM ubuntu:latest

RUN set -ex; \
  apt-get update && \
  apt-get install -y --no-install-recommends npm;

RUN set -ex; \
  npm cache clean -f && \
  npm install -g n && \
  n stable && \
  npm install --global cypress;

SHELL ["/bin/bash", "-c"]

#WORKDIR /var/www