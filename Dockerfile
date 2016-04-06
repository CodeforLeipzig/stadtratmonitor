FROM ruby:2.2
RUN apt-get update && apt-get install -y build-essential zlib1g-dev libsqlite3-dev nodejs nodejs-legacy npm

RUN npm install phantomjs-prebuilt
RUN ln -sf /node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs /usr/local/bin/

RUN mkdir -p /app

WORKDIR /tmp

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install

ADD . /app
WORKDIR /app

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
