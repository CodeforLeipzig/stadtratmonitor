class SearchController < ApplicationController
  def index
    @papers = Paper.search(params[:q]).page(params[:page]).results
  end
end
