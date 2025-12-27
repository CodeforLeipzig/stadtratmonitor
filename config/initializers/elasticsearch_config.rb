config = {
  host: ENV.fetch('OPENSEARCH_URL', 'http://localhost:9200')
}
Elasticsearch::Model.client = Elasticsearch::Client.new(config)
