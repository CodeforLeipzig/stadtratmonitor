# ~~~~~~~~~~~~~~~~~~~~
# ~~~ DEPLOY IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~

FROM code.cozy.town/codeforleipzig/stadtratmonitor/base:latest

WORKDIR /home/srm/app/

USER srm
EXPOSE 3000
CMD bundle exec puma -C /app/config/puma.rb