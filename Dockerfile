FROM ruby:2.5
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash - && apt-get update && \
  apt-get install -y build-essential zlib1g-dev libsqlite3-dev nodejs npm \
  libxml2-dev libxslt1-dev pkg-config \
  libqtwebkit4 libqtwebkit-dev libqt4-dev xvfb

RUN mkdir -p /app

WORKDIR /tmp

COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN bundle config build.nokogiri --use-system-libraries
RUN bundle install

ADD . /app
WORKDIR /app

COPY ./docker-entrypoint.sh /
RUN chmod +x docker-entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["rails", "server", "-b", "0.0.0.0"]
