#!/bin/bash

./bin/elasticsearch-plugin install http://xbib.org/repository/org/xbib/elasticsearch/plugin/elasticsearch-analysis-decompound/5.4.3.0/elasticsearch-analysis-decompound-5.4.3.0-plugin.zip

exec /docker-entrypoint.sh elasticsearch
