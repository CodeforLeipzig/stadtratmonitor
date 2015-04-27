namespace :import_papers do

  desc 'Import Paper records from CSV'
  task :from_morph => :environment do |t, args|
    require 'open-uri'
    api_key = ENV['MORPH_API_KEY']
    uri = URI.parse "https://api.morph.io/ahx/city_council_leipzig_recent_papers/data.json?key=#{api_key}&query=select%20*%20from%20%27data%27"
    puts "Download files from #{uri}…"
    Paper.import_from_json(uri.read)
  end
end
