# ~~~~~~~~~~~~~~~~~~~~~
# ~~~ TEST IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~~

FROM code.cozy.town/codeforleipzig/stadtratmonitor/base:latest

RUN bundle install

WORKDIR /

EXPOSE 3000
CMD bundle exec puma -C /app/config/puma.rb