# ~~~~~~~~~~~~~~~~~~~~~
# ~~~ DEVELOP IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~~

FROM code.cozy.town/codeforleipzig/stadtratmonitor/base:latest

RUN bundle config without test
RUN bundle install --prefer-local

WORKDIR /app/

EXPOSE 3000
CMD bundle exec puma -C /app/config/puma.rb