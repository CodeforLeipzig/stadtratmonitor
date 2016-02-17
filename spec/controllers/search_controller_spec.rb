require 'rails_helper'

RSpec.describe SearchController, type: :controller, elasticsearch: true do

  describe "GET #index" do
    it "returns http success" do
      get :index, body: 'leipzig'
      expect(response).to have_http_status(:success)
    end

    it "assigns @search_definition with default sort order" do
      search = PaperSearch.new(sort_by: 'score')
      get :index, body: 'leipzig'
      expect(assigns(:search_definition).attributes).to eq(search.attributes)
    end

    it "renders the index template" do
      get :index, body: 'leipzig'
      expect(response).to render_template(:index)
    end

  end

end
