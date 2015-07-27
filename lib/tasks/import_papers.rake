desc 'Import Paper records from setup importers'
task import_papers: :environment do
  require 'open-uri'
  Importer.all.each do |importer|
    uri = URI.parse(importer.url)
    Paper.import_from_json(uri.read)
  end
end
