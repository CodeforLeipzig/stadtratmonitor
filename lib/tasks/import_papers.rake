desc 'Import Paper records from setup importers'
task import_papers: :environment do
  require 'open-uri'
  OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
  api_key = Rails.application.config_for(:morph)['key']
  uri = URI.parse("https://api.morph.io/jrlover/city_council_leipzig_recent_papers/data.json?key=#{api_key}&query=select%20*%20from%20%27data%27")
  Paper.import_from_json(uri.read)
end

desc 'Import Paper records from Oparl documents in JSONLine format from IMPORT_PATH=(path/to/file)'
task import_oparl:  :environment do
  path = ENV['IMPORT_PATH']
  count = 0
  errors = 0
  before = Paper.count
  File.foreach(path) do |line|
    result = Paper.import_from_oparl(line)
    errors +=1 if result.nil?
    count += 1
  end
  after = Paper.count
  puts "Total: #{count} Success: #{count - errors} Errors: #{errors} New: #{after - before}"
end
