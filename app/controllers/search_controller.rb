class SearchController < ApplicationController
  def index
    @show_search_result = params[:q].present?
    papers_found = if @show_search_result
      Paper.search(params[:q]).records
    else
      Paper
    end
    @papers_count = @show_search_result ? papers_found.results.total : papers_found.count
    @papers = papers_found.order(published_at: :desc).page(params[:page])
  end
end
