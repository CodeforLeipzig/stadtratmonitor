require 'json'

class Paper < ActiveRecord::Base
  class << self
    def import_from_json(json_string)
      JSON.parse(json_string).each do |record|
        attributes = {
          name: record['name'],
          url: record['url'],
          reference: record['reference'],
          paper_type: record['paper_type'],
          originator: record['originator'],
          published_at: record['published_at'],
        }
        create!(attributes)
      end
    end
  end
end
