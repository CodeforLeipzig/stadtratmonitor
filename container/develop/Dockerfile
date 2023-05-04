# ~~~~~~~~~~~~~~~~~~~~~
# ~~~ DEVELOP IMAGE ~~~
# ~~~~~~~~~~~~~~~~~~~~~

FROM base AS development

RUN bundle config without test
RUN bundle update
RUN bundle install

WORKDIR /home/srm/app/

EXPOSE 3000
CMD bundle exec puma -C /home/srm/app/config/puma.rb