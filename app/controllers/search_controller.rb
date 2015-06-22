class SearchController < ApplicationController
  def index
    @paper_type = params[:paper_type]
    @originator = params[:originator]
    options = params.slice(:paper_type, :originator)

    @response = Paper.search(params[:q], options)
    @papers = @response.page(params[:page]).results
    @paper_type_facets = extract_facets('paper_types')
    @originator_facets = extract_facets('originators')
  end

  private

  def extract_facets(name)
    @response.
      response['aggregations'][name.to_s]['buckets'].
      # rewrite key => term, doc_count => count
      map {|m| Hashie::Mash.new term: m['key'], count: m['doc_count'] }
  end

end
