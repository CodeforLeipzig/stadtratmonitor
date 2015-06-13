class SearchController < ApplicationController
  def index
    @response = Paper.search(params[:q])
    @papers = @response.page(params[:page]).results
    @paper_type_facets = @response.response['aggregations']['paper_types']['buckets'].map {|h| [ h['key'], h['doc_count']] }
  end
end
