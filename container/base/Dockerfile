# ~~~~~~~~~~~~~~~~~~
# ~~~ BASE IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~

FROM docker.io/ruby:3.4.8-alpine3.23

RUN apk update && apk add \
    build-base \
    curl \
    linux-headers \
    nodejs \
    npm

ENV DOCKERIZE_VERSION v0.9.9
RUN curl -sSLO https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

ARG USER_ID=1000
RUN addgroup srm && \
    adduser --disabled-password --uid $USER_ID --ingroup srm srm

RUN mkdir -p /app/

WORKDIR /app/

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
COPY package.json package.json

RUN npm install -g yarn sass
RUN bundle config without development test
RUN bundle install