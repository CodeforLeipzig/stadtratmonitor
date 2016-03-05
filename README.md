# Stadtratmonitor

[![Build Status](https://travis-ci.org/CodeforLeipzig/stadtratmonitor.png?branch=master)](https://travis-ci.org/CodeforLeipzig/stadtratmonitor) [![Coverage Status](https://coveralls.io/repos/github/jrlover/stadtratmonitor/badge.svg?branch=master)](https://coveralls.io/github/jrlover/stadtratmonitor?branch=master) [![Code Climate](https://codeclimate.com/github/CodeforLeipzig/stadtratmonitor/badges/gpa.svg)](https://codeclimate.com/github/CodeforLeipzig/stadtratmonitor)

## Setup

There are two ways to run this app: using a local development setup, or using
docker.

### Local machine setup
1. Install Ruby, Bundler, Elasticsearch
1. Start Elasticsearch: `elasticsearch`
1. Setup Rails app: `bundle && bundle exec rake db:setup`
1. See "Importing data" below
1. Start Rails server: `bundle exec rails s`
1. Visit [http://localhost:3000](http://localhost:3000)

### Using docker

1. Install docker and docker-compose: https://docs.docker.com/compose/install/
1. Start the app: `docker-compose up`
1. Initialize the database: `docker-compose run web rake db:setup`
1. See "Importing data" below
1. Get the address of the docker host: `docker-machine ip default`
1. Point your browser to: 'http://\<IP of docker host\>:3000'

### Importing data and building the index
1. Currently an API key for morph is required:
   `cp config/morph.yml.example config/morph.yml`
   Edit the morph.yml file and insert the Morph API key
1. Import the data from our scraper: `docker-compose run web rake import_papers`
1. Build the elasticsearch index: `docker-compose run web rake index:rebuild`
