require 'csv'

class Paper < ActiveRecord::Base
  class << self
    def import_from_csv(csv_string)
      CSV.parse(csv_string, headers: true) do |row|
        attributes = {
          name: row['name'],
          url: row['url'],
          reference: row['reference'],
          paper_type: row['paper_type'],
          originator: row['originator'],
          published_at: row['published_at'],
        }
        create!(attributes)
      end
    end
  end
end
