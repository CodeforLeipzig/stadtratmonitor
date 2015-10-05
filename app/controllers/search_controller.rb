SearchFacet = Struct.new("SearchFacet", :term, :count) do
  def term_with_count
    "#{term} (#{count})"
  end
end


class SearchController < ApplicationController
  def index
    @search_definition = PaperSearch.new(query: params[:q],
                                         paper_type: params[:paper_type],
                                         originator: params[:originator],
                                         sort_by: params[:sort_by])

    @response = Paper.search(@search_definition)
    @papers = @response.page(params[:page]).results
    @paper_type_facets = extract_facets('paper_types')
    @originator_facets = extract_facets('originators')
  end

  private

  def extract_facets(name)
    @response.
      response['aggregations'][name.to_s][name.to_s]['buckets'].
      map {|m| SearchFacet.new(m['key'], m['doc_count'])}
  end

end
