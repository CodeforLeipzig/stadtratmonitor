# ~~~~~~~~~~~~~~~~~~~~
# ~~~ DEPLOY IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~

FROM base AS deploy

WORKDIR /home/srm/app/

USER srm
EXPOSE 3000
CMD bundle exec puma -C /home/srm/app/config/puma.rb