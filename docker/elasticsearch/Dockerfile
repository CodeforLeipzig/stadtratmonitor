FROM docker.elastic.co/elasticsearch/elasticsearch:7.10.2

RUN \
  mkdir -p /usr/share/elasticsearch/config/analysis && \
  pushd /usr/share/elasticsearch/config/analysis && \
  curl -sSLO https://github.com/uschindler/german-decompounder/raw/master/de_DR.xml && \
  curl -sSLO https://github.com/uschindler/german-decompounder/raw/master/dictionary-de.txt && \
  popd
