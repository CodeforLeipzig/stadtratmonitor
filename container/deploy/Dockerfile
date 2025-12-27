# ~~~~~~~~~~~~~~~~~~~~
# ~~~ DEPLOY IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~

FROM base:latest

WORKDIR /

USER srm
EXPOSE 3000
CMD bundle exec puma -C /app/config/puma.rb