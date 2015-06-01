require 'elasticsearch/model'
require 'json'

class Paper < ActiveRecord::Base
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  validates_presence_of :body, :content, :name, :originator, :paper_type, :reference, :url
  validates_presence_of :published_at, allow_nil: true
  validates :url, uniqueness: true

  class << self
    def import_from_json(json_string)
      old_count = count
      JSON.parse(json_string).each do |record|
        attributes = {
          body: record['body'],
          content: record['content'],
          name: record['name'],
          resolution: record['resolution'],
          originator: record['originator'],
          paper_type: record['paper_type'],
          published_at: record['published_at'],
          reference: record['reference'],
          url: record['url'],
        }
        record = find_or_initialize_by(url: attributes[:url])
        record.update_attributes(attributes)
      end
      puts "Imported #{count - old_count} Papers!"
    end

    # use DSL to define search queries
    # see https://github.com/elastic/elasticsearch-ruby/tree/master/elasticsearch-dsl
    # and https://github.com/elastic/elasticsearch-rails/tree/master/elasticsearch-rails/lib/rails/templates
    def search(q)
      @search_definition = Elasticsearch::DSL::Search.search do
        query do
          unless q.blank?
            multi_match do
              query q
              fields ["name", "content"]
            end
          else
            match_all
          end
        end
      end
      puts @search_definition.to_hash
      __elasticsearch__.search(@search_definition)
    end

  end
end
