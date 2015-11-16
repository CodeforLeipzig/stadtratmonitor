RSpec.configure do |config|
  config.before :each, elasticsearch: true do
    Paper.__elasticsearch__.create_index!(force: true)
    sleep 2
  end
end
