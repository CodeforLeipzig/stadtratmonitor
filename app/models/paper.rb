require 'elasticsearch/model'
require 'json'

class Paper < ActiveRecord::Base
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  validates_presence_of :body, :content, :name, :originator, :paper_type, :reference, :url
  validates_presence_of :published_at, allow_nil: true
  validates :url, uniqueness: true

  settings index: { number_of_shards: 1 } do
    mappings dynamic: false do
      indexes :name, type: :string
      indexes :content, type: :string
      indexes :resolution, type: :string
      indexes :paper_type, type: :string, index: :not_analyzed
      indexes :originator, type: :string, index: :not_analyzed
    end
  end  

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
    def search(q, options={})
      @search_definition = Elasticsearch::DSL::Search.search do

        query do
          filtered do

            query do
              # search query
              unless q.blank?
                multi_match do
                  query q
                  fields ["name", "content"]
                end
              else
                match_all
              end
            end

            # filters
            filter do
              bool do
                must { term paper_type: options[:paper_type] } if options[:paper_type].present?
                must { term originator: options[:originator] } if options[:originator].present?
                # catchall when no filters set
                must { match_all } if options.keys.none? {|k| [:paper_type, :originator].include?(k) }
              end
            end

          end
        end

        aggregation :paper_types do
          terms do
            field 'paper_type'
          end
        end

        aggregation :originators do
          terms do
            field 'originator'
          end
        end

      end
      Rails.logger.debug "Query: #{@search_definition.to_json}"
      __elasticsearch__.search(@search_definition)
    end

    def reset_index!
      __elasticsearch__.create_index! force: true
      all.each {|p| p.__elasticsearch__.index_document }
    end

  end
end
