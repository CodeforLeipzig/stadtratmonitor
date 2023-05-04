# ~~~~~~~~~~~~~~~~~~~~
# ~~~ DEPLOY IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~

FROM code.cozy.town/codeforleipzig/stadtratmonitor:latest-base

WORKDIR /home/srm/app/

USER srm
EXPOSE 3000
CMD bundle exec puma -C /home/srm/app/config/puma.rb