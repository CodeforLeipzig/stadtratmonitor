# Stadtratmonitor

**Offical site:** https://stadtratmonitor.leipzig.codefor.de/

## Usage / Features

The Stadtratmonitor Leipzig is a lightweight user interface for performing full text searches against paper contents issued to the city council of Leipzig. Note, this solution uses the data from [Ratsinformationssystem Leipzig](https://ratsinformation.leipzig.de/allris_leipzig_public/) that also offers [text search capabilities](https://ratsinformation.leipzig.de/allris_leipzig_public/vo040).

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
#### General
 * Subscribing
  * [Google Chrome RSS extension](https://chrome.google.com/webstore/detail/rss-subscription-extensio/nlbjncdgjeocebhnmkbbbdekmmmcbfjd?hl=de)
  * [Firefox RSS extension](https://addons.mozilla.org/en-US/firefox/addon/rss-feed-icon-in-navbar/)
 * Reading
  * [Google Chrome Extension](https://chrome.google.com/webstore/detail/rss-feed-reader/pnjaodmkngahhkoihejjehlcdlnohgmp)
  * [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/simple-rss-reader-srr)
  * [RSSOWL](http://www.rssowl.org/)

#### Example using Firefox and RSSOWL
Click on the newsfeed icon in the address bar
![Abonnieren mit Firefox](https://cloud.githubusercontent.com/assets/994131/14060508/fe7f4514-f366-11e5-85ae-2fa2e50b91ea.JPG)

Copy the URL from the address bar
![RSS URL in Firefox](https://cloud.githubusercontent.com/assets/994131/14060515/30140e98-f367-11e5-9c77-86ba626e3c1b.JPG)

Create a new Feed in RSSOWL and paste the just copied URL in the form
![RSSOWL Feed](https://cloud.githubusercontent.com/assets/8532690/14472067/bbc5a64e-00f1-11e6-8e3e-551067b508e3.png)

When updating the feed in RSSOWL (or any other RSS reader of your choice) time after time all new papers matching the search query criteria will appear.

## Setup

There are two ways to run this app: using a local development setup, or using
docker.

### Local machine setup
1. Install Ruby, Bundler, Elasticsearch
2. Start Elasticsearch: `elasticsearch`
3. Setup Rails app: `bundle && bundle exec rake db:setup`
4. See "Importing data" below
5. Start Rails server: `bundle exec rails s`
6. Open [http://localhost:3000](http://localhost:3000)

### Using docker

1. Install docker and docker-compose: https://docs.docker.com/compose/install/
2. Start the app: `docker-compose up`
3. Initialize the database: `docker exec stadtratmonitor-web sh -c "rake db:setup && rake import_papers && rake index:rebuild"`
4. Open [http://localhost:3000](http://localhost:3000)

```
rake assets:clean
rake assets:clobber
rake tmp:clear

npm install -g sass
#rails css:install:bootstrap
#rails javascript:install:esbuild
rake assets:precompile
```


### Importing data via allris-scraper (optional)
1. You can use [our allris-scraper](https://github.com/CodeforLeipzig/allris-scraper) to download the papers (resp. their links) from the [OPARL](https://oparl.org/) API, this will produce an input.json file
2. Put this input.json to a public web server and set the URL to this file then in:
   `app/controllers/import_controller.rb` and `lib/tasks/import_papers.rake`

### Running tests

Assuming docker and docker-compose is installed:

1. `docker-compose run web bin/run-tests`
