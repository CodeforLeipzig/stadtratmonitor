FROM ruby:3.2.2

RUN apt-get update && apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -

RUN apt-get update && apt-get install -y ruby ruby-dev ruby-bundler \
  build-essential zlib1g-dev libsqlite3-dev libxml2-dev libxslt1-dev pkg-config nodejs
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

ENV DOCKERIZE_VERSION v0.6.1
RUN curl -sSLO https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY ./docker-entrypoint.sh /
RUN chmod +x docker-entrypoint.sh

RUN mkdir -p /home/srm/tmp
#COPY Gemfile.lock /home/srm/tmp/Gemfile.lock

ARG USER_ID=1000
RUN groupadd srm && useradd --uid $USER_ID -g srm srm

WORKDIR /home/srm/

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

ENV NODE_VERSION 18.16.0
ENV NVM_DIR /home/srm/.nvm
RUN \
    . ~/.nvm/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default;

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN gem install bundler

WORKDIR /
RUN mkdir -p /home/srm/build/
WORKDIR /home/srm/build/

COPY bin/ bin/
COPY Gemfile Gemfile
COPY config/ config/
COPY config.ru config.ru
COPY package.json package.json

RUN npm install -g yarn sass
RUN bundle update
RUN bundle install

WORKDIR /
RUN mkdir -p /home/srm/app/
VOLUME /home/srm/app/
RUN chown -R srm:srm /home/srm/

USER srm
EXPOSE 3000
CMD bundle exec puma -C /home/srm/build/config/puma.rb