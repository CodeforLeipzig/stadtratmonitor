FROM ruby:2.2
RUN apt-get update && apt-get install -y build-essential zlib1g-dev libsqlite3-dev nodejs nodejs-legacy

RUN mkdir -p /app

WORKDIR /tmp

RUN wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
RUN tar xvvjf phantomjs-2.1.1-linux-x86_64.tar.bz2
RUN ln -sf /tmp/phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle install

ADD . /app
WORKDIR /app

EXPOSE 3000
CMD ["rails", "server", "-b", "0.0.0.0"]
