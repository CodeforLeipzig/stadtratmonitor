class SearchController < ApplicationController
  def index
    @paper_type = params[:paper_type]
    @originator = params[:originator]
    options = params.slice(:paper_type, :originator)

    @response = Paper.search(params[:q], options)
    @papers = @response.page(params[:page]).results
    @paper_type_facets = @response.response['aggregations']['paper_types']['buckets']
    @originator_facets = @response.response['aggregations']['originators']['buckets']
  end
end
