class SearchController < ApplicationController
  def index
    @result = if params[:q].present?
      # TODO: Add pagination
      Paper.search(params[:q]).records
    end
  end
end
