# frozen_string_literal: true

class PaperSearch < ActiveRecord::Base
  def to_definition
    options = { paper_type: paper_type, originator: originator, sort_by: sort_by }
    PaperSearch.definition(query, options)
  end

  def self.definition(q, options = {})
    Elasticsearch::DSL::Search.search do
      sort do
        by '_score' if options[:sort_by] == 'score'
        by :published_at, order: 'desc'
      end

      query do
        # search query
        if q.blank?
          match_all
        else
          multi_match do
            query q
            fields %w[name content]
          end
        end
      end

      # apply filter after aggregations
      post_filter do
        bool do
          if options[:paper_type].present?
            must { term paper_type: options[:paper_type] }
          end
          if options[:originator].present?
            must { term originator: options[:originator] }
          end
          # catchall when no filters set
          unless options[:paper_type].present? || options[:originator].present?
            must { match_all }
          end
        end
      end

      aggregation :paper_types do
        # filter by originator
        f = Elasticsearch::DSL::Search::Filters::Bool.new
        f.must { match_all }
        if options[:originator].present?
          f.must { term originator: options[:originator] }
        end
        filter f.to_hash do
          aggregation :paper_types do
            terms do
              field 'paper_type'
            end
          end
        end
      end

      aggregation :originators do
        # filter by paper_type
        f = Elasticsearch::DSL::Search::Filters::Bool.new
        f.must { match_all }
        if options[:paper_type].present?
          f.must { term paper_type: options[:paper_type] }
        end
        filter f.to_hash do
          aggregation :originators do
            terms do
              field 'originator'
            end
          end
        end
      end
    end
  end
end
