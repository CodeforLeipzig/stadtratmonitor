# ~~~~~~~~~~~~~~~~~~~~~
# ~~~ TEST IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~~

FROM code.cozy.town/codeforleipzig/stadtratmonitor/base:latest

RUN bundle config without reset_dummy_group
RUN bundle install --prefer-local

WORKDIR /

EXPOSE 3000
CMD bundle exec puma -C /app/config/puma.rb