FROM opensearchproject/opensearch:3.4.0

RUN \
  mkdir -p /usr/share/opensearch/config/analysis && \
  pushd /usr/share/opensearch/config/analysis && \
  curl -sSLO https://github.com/uschindler/german-decompounder/raw/master/de_DR.xml && \
  curl -sSLO https://github.com/uschindler/german-decompounder/raw/master/dictionary-de.txt && \
  popd
