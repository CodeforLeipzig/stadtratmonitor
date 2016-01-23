namespace :index do
  desc 'Rebuild elasticsearch index for Paper model'
  task rebuild: :environment do
    Paper.reset_index!
  end
end
