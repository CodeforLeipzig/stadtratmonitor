require 'rails_helper'

RSpec.describe SearchController, type: :controller, elasticsearch: true do

  describe "GET #index" do
    it "returns http success" do
      get :index, body: 'leipzig'
      expect(response).to have_http_status(:success)
    end
  end

end
