require 'opensearch'

config = {
  host: ENV.fetch('OPENSEARCH_URL', 'http://localhost:9215'),
  transport_options: { request: { timeout: 5 } },
  log: Rails.env.development?
}
OPENSEARCH_CLIENT =OpenSearch::Client.new(config)
