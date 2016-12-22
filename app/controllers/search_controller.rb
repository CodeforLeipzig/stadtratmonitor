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
      @sub_search_definition = Elasticsearch::DSL::Search.search do
        query do
          query_string do
        	query "*" + (paper.reference.start_with?("VI-") ? paper.reference.split("-")[2] : paper.reference.split("-")[1]) + "*"
        	fields ["reference"]
          end
        end

        sort do
          by :published_at, order: 'asc'
          by :reference, order: 'asc'
        end 
      end
      @sub_papers = Paper.search(@sub_search_definition)
      @sub[paper.reference] = @sub_papers
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
