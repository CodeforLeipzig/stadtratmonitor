class SearchController < ApplicationController
  def index
    @result = if params[:q].present?
      es = Elasticsearch::Client.new
      es.search index: 'loris', q: params[:q]
    end
  end
end
