#!/bin/bash

plugin -install elasticsearch-analysis-decompound --url http://xbib.org/repository/org/xbib/elasticsearch/plugin/elasticsearch-analysis-decompound/1.7.1.3/elasticsearch-analysis-decompound-1.7.1.3-plugin.zip

exec /docker-entrypoint.sh elasticsearch
