SearchFacet = Struct.new("SearchFacet", :term, :count) do
  def term_with_count
    "#{term} (#{count})"
  end
end


class SearchController < ApplicationController
  def index
    @search_definition = PaperSearch.new(search_params)
    @search_definition.sort_by ||= "date"

    execute_search
  end

  def show
    @search_definition = PaperSearch.find params[:id]
    execute_search
    render action: "index"
  end

  private

  def execute_search
    @response = Paper.search(@search_definition.to_definition)
    @papers = @response.page(params[:page]).results
    @sub = Hash.new
    @papers.each do |paper|
      unless paper.reference.nil? && paper.reference.contains("-")
        segments = paper.reference.split("-")
        id = (paper.reference.start_with?("VI-") && segments.count > 2 ?
          segments[2] : segments[1])
        escaped_chars = Regexp.escape('\\+-*:()[]{}&!?^|\/')
        sanitized_id = id.gsub(/([#{escaped_chars}])/, '\\\\\1')
        ['AND', 'OR', 'NOT'].each do |reserved|
          escaped_reserved = reserved.split('').map { |c| "\\#{c}" }.join('')
          sanitized_id = sanitized_id.gsub('/\s*\b(#{reserved.upcase})\b\s*/',
            " #{escaped_reserved} ")
        end
        @sub_search_definition = Elasticsearch::DSL::Search.search do
          query do
            query_string do
          	  query "*" + sanitized_id + "*"
              fields ["reference"]
            end
          end

          sort do
            by :published_at, order: 'desc'
            by :reference, order: 'asc'
          end
        end
        @sub_papers = Paper.search(@sub_search_definition)
        @sub[paper.reference] = @sub_papers
      end
    end
    @paper_type_facets = extract_facets('paper_types')
    @originator_facets = extract_facets('originators')
  end

  def search_params
    params.fetch(:paper_search, {}).permit(:query, :paper_type, :originator, :sort_by)
  end

  def extract_facets(name)
    @response.
      response['aggregations'][name.to_s][name.to_s]['buckets'].
      map {|m| SearchFacet.new(m['key'], m['doc_count'])}
  end

end
