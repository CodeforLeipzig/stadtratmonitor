config = {
  host: ENV.fetch('OPENSEARCH_URL', 'http://localhost:9200')
}
client = OpenSearch::Client.new(config)
