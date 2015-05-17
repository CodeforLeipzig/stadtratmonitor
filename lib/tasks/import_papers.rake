namespace :import_papers do
  desc 'Import Paper records from CSV'
  task :from_morph => :environment do
    require 'open-uri'
    Importer.all.each do |importer|
      uri = URI.parse(importer.url)
      Paper.import_from_json(uri.read)
    end
  end
end
