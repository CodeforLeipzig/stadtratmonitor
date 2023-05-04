# ~~~~~~~~~~~~~~~~~~~~~
# ~~~ TEST IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~~

FROM base AS testing

RUN bundle update
RUN bundle install

WORKDIR /home/srm/app/

EXPOSE 3000
CMD bundle exec puma -C /home/srm/app/config/puma.rb