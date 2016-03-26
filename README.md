# Stadtratmonitor

## Usage / Features

The Stadtratmonitor Leipzig is a lightweight user interface for performing full text searches against paper contents issued to the city council of Leipzig. Note, this solution uses the data from [Ratsinformationssystem Leipzig](https://ratsinfo.leipzig.de/bi/allris.net.asp) that also offers [text search capabilities](https://ratsinfo.leipzig.de/bi/yw010.asp). 

### Sorting
 * Sort by date, paper was issued
![Papers sorted by publishing date](https://cloud.githubusercontent.com/assets/994131/14060246/b29c0356-f35e-11e5-837a-2106dd274694.JPG)
 * Sort by relevance, e.g. how often the search keyword appears inside the title resp. the content of the paper
![Papers sorted by relevance](https://cloud.githubusercontent.com/assets/994131/14060257/f7491002-f35e-11e5-9d39-f36b81c35c33.JPG)
### Filtering
 * By paper type
![Filter by paper type](https://cloud.githubusercontent.com/assets/994131/14060263/28c9d800-f35f-11e5-8c56-e8d208d85916.JPG)
 * By originator
![Filter by originator](https://cloud.githubusercontent.com/assets/994131/14060267/4fa539a6-f35f-11e5-981e-2467daf2dee2.JPG)
### Staying up-to-date
 * Subscribing
  * [Firefox RSS extension](https://addons.mozilla.org/en-US/firefox/addon/rss-feed-icon-in-navbar/)
  * [Google Chrome RSS extension](https://chrome.google.com/webstore/detail/rss-subscription-extensio/nlbjncdgjeocebhnmkbbbdekmmmcbfjd?hl=de)
 * Reading
  * [Google Chrome Extension](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp)
  * ...

[![Build Status](https://travis-ci.org/CodeforLeipzig/stadtratmonitor.png?branch=master)](https://travis-ci.org/CodeforLeipzig/stadtratmonitor) [![Coverage Status](https://coveralls.io/repos/github/CodeforLeipzig/stadtratmonitor/badge.svg?branch=master)](https://coveralls.io/github/CodeforLeipzig/stadtratmonitor?branch=master) [![Code Climate](https://codeclimate.com/github/CodeforLeipzig/stadtratmonitor/badges/gpa.svg)](https://codeclimate.com/github/CodeforLeipzig/stadtratmonitor)

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
