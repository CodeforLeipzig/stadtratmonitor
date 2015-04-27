class SearchController < ApplicationController
  def index
    @show_search_result = params[:q].present?
    @papers = if @show_search_result
      # TODO: Add pagination
      Paper.search(params[:q]).records
    else
      Paper.last(30)
    end
  end
end
