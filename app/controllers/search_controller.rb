class SearchController < ApplicationController
  def index
    @paper_type = params[:paper_type]
    @originator = params[:originator]

    @show_search_result = @show_filters = params[:q].present?
    papers_found = if @show_search_result
      Paper.search(params[:q]).records
    else
      Paper.all
    end
 
    if @show_filters

      @paper_types_found = papers_found.map(&:paper_type).uniq
      @originators_found = papers_found.map(&:originator).uniq

      if @paper_type.present?
        papers_found = papers_found.where(paper_type: @paper_type)
      end

      if @originator.present?
        papers_found = papers_found.where(originator: @originator)
      end
    end

    @papers_count = papers_found.page(params[:page]).total_count
    @papers = papers_found.page(params[:page])
                # Fixme Pagination
                #order(published_at: :desc).
                # page(params[:page])


    end
end
