SearchFacet = Struct.new("SearchFacet", :term, :count) do
  def term_with_count
    "#{term} (#{count})"
  end
end


class SearchController < ApplicationController
  def index
    @paper_type = params[:paper_type]
    @originator = params[:originator]
    options = params.slice(:paper_type, :originator)

    @show_filters = true

    @response = Paper.search(params[:q], options)
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
