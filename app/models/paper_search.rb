class PaperSearch < ActiveRecord::Base

  def to_definition
    options = {paper_type: paper_type, originator: originator, sort_by: sort_by}
    PaperSearch.definition(query, options)
  end

  def self.definition(q, options={})
    Elasticsearch::DSL::Search.search do

      sort do
        if options[:sort_by] == 'date'
          by :published_at, order: 'desc'
        end
        by '_score'
      end

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

      # apply filter after aggregations
      post_filter do
        bool do
          must { term paper_type: options[:paper_type] } if options[:paper_type].present?
          must { term originator: options[:originator] } if options[:originator].present?
          # catchall when no filters set
          must { match_all } unless (options[:paper_type].present? || options[:originator].present?)
        end
      end

      aggregation :paper_types do
        # filter by originator
        f = Elasticsearch::DSL::Search::Filters::Bool.new
        f.must { match_all }
        f.must { term originator: options[:originator] } if options[:originator].present?
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
        f.must { term paper_type: options[:paper_type] } if options[:paper_type].present?
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
