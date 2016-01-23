config = {
  host: ENV.fetch('ELASTICSEARCH_URL', 'http://localhost:9200')
}
Elasticsearch::Model.client = Elasticsearch::Client.new(config)
