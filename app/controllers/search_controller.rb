class SearchController < ApplicationController
  def index
    @show_search_result = params[:q].present?
    papers_found = if @show_search_result
      Paper.search(params[:q])
    else
      Paper.order(published_at: :desc)
    end
    @papers_count = @show_search_result ? papers_found.results.total : papers_found.count
    @papers = papers_found.page(params[:page])
  end
end
