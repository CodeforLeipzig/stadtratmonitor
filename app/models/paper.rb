# frozen_string_literal: true

require 'elasticsearch/model'
require 'json'
require 'parseable_date_validator'

class Paper < ActiveRecord::Base
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  validates :name,         presence: true, length: { maximum: 1000 }
  validates :url,          presence: true,
                           length: { maximum: 1000 },
                           uniqueness: true, # TODO: use unique index instead
                           url: true
  validates :reference,    presence: true, length: { maximum: 100 }
  validates :body,         presence: true, length: { maximum: 100 }
  validates :content,      presence: true, length: { maximum: 100_000 }
  validates :originator,   presence: true, length: { maximum: 300 }
  validates :paper_type,   presence: true, length: { maximum: 50 }
  validates :published_at, presence: true, parseable_date: true
  validates :resolution,   length: { maximum: 30_000 }

  index_name ['srm', Rails.env, base_class.to_s.pluralize.underscore].join('_')

  settings index: {
    number_of_shards: 1,
    analysis: {
      filter: {
        german_stop: {
          type: 'stop',
          stopwords: '_german_'
        },
        german_stemmer: {
          type: 'stemmer',
          language: 'light_german'
        },
        german_decompounder: {
          type: 'hyphenation_decompounder',
          word_list_path: 'analysis/dictionary-de.txt',
          hyphenation_patterns_path: 'analysis/de_DR.xml',
          only_longest_match: true,
          min_subword_size: 4
        }
      },
      analyzer: {
        german: {
          tokenizer: 'standard',
          filter: %w[
            lowercase
            german_stop
            german_decompounder
            german_normalization
            german_stemmer
          ]
        }
      }
    }
  } do
    mappings dynamic: false do
      indexes :name, type: :text, analyzer: 'german'
      indexes :content, type: :text, analyzer: 'german'
      indexes :resolution, type: :text, analyzer: 'german'
      indexes :reference, type: :keyword, index: true
      indexes :paper_type, type: :keyword, index: true
      indexes :published_at, type: :date, index: true
      indexes :originator, type: :keyword, index: true
    end
  end

  def split_originator
    originator.split(/\d\.\s/).reject(&:blank?) || originator
  end

  def as_indexed_json(_options = {})
    as_json.merge(originator: split_originator)
  end

  class << self
    def import_from_json(json_string)
      old_count = count
      JSON.parse(json_string).each do |record|
        content = truncate(record['content'], 99998)
        attributes = {
          body: record['body'],
          content: content,
          name: record['name'],
          resolution: record['resolution'],
          originator: record['originator'],
          paper_type: record['paper_type'],
          published_at: record['published_at'],
          reference: record['reference'],
          url: record['url']
        }
        record = find_or_initialize_by(url: attributes[:url])
        out = record.update(attributes)
        if !out
          puts "Not imported #{attributes[:name]}: #{record.errors.messages}"
        end
      end
      puts "Imported #{count - old_count} Papers!"
    end

    # use DSL to define search queries
    # see https://github.com/elastic/elasticsearch-ruby/tree/master/elasticsearch-dsl
    # and https://github.com/elastic/elasticsearch-rails/tree/master/elasticsearch-rails/lib/rails/templates
    def search(search_definition)
      Rails.logger.debug "Query: #{search_definition.to_json}"
      __elasticsearch__.search(search_definition)
    end

    def reset_index!
      __elasticsearch__.create_index! force: true
      all.each { |p| p.__elasticsearch__.index_document }
    end
  end
end
