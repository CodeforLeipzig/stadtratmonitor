desc 'Import Paper records from setup importers'
task import_papers: :environment do
  require 'open-uri'
  #OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
  #api_key = Rails.application.config_for(:morph)['key']
  input = File.read("input.json")
  Paper.import_from_json(input)
end
