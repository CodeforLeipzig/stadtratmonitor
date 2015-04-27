class SearchController < ApplicationController
  def index
    @show_search_result = params[:q].present?
    @papers = if @show_search_result
      Paper.search(params[:q]).page(params[:page]).results
    else
      Paper.order(published_at: :desc).page(params[:page])
    end
  end
end
