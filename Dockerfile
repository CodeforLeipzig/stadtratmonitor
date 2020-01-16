FROM ruby:2.5.7
RUN gem install bundler

# Add google package repository for google chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list

RUN apt-get update && \
  apt-get install -y build-essential zlib1g-dev libsqlite3-dev nodejs npm \
  libxml2-dev libxslt1-dev pkg-config google-chrome-stable

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
