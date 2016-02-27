RSpec.configure do |config|
  config.before :each, elasticsearch: true do
    Paper.__elasticsearch__.create_index!(force: true)
    Elasticsearch::Model.client.cluster.health wait_for_status: "yellow"
  end
end
