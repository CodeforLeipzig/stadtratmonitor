# ~~~~~~~~~~~~~~~~~~~~~
# ~~~ TEST IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~~

FROM code.cozy.town/codeforleipzig/stadtratmonitor:latest-base

RUN bundle update
RUN bundle install

WORKDIR /home/srm/app/

EXPOSE 3000
CMD bundle exec puma -C /app/config/puma.rb