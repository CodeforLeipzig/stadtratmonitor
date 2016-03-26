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
