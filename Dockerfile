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
RUN chown -R srm:srm /home/srm
USER srm

WORKDIR /home/srm

RUN git clone https://github.com/sstephenson/rbenv.git .rbenv
RUN git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build

RUN echo 'export PATH="/home/srm/.rbenv/bin:$PATH"' >> .bashrc && echo 'eval "$(~/.rbenv/bin/rbenv init -)"' >> .bashrc && . ~/.bashrc
RUN /home/srm/.rbenv/bin/rbenv install 3.2.2
RUN /home/srm/.rbenv/bin/rbenv rehash
RUN /home/srm/.rbenv/bin/rbenv global 3.2.2


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

RUN mkdir -p /home/srm/app
ADD . /home/srm/app
USER root
RUN chown -R srm:srm /home/srm/app

USER srm
WORKDIR /home/srm/app

RUN bundle config build.nokogiri --use-system-libraries
RUN bundle update
RUN bundle install

COPY package.json package.json
USER root
RUN chown -R srm:srm package.json
USER srm

RUN npm install -g yarn sass

EXPOSE 3000
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["bundle", "exec", "puma" "-C", "config/puma.rb"]
