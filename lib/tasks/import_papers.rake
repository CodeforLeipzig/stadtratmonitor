namespace :import_papers do

  desc 'Import Paper records from CSV'
  task :from_csv, [:csv_file] => :environment do |t, args|
    Paper.import_from_csv(File.read(args[:csv_file]))
  end
end
