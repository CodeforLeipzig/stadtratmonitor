require 'rails_helper'

RSpec.feature "Search filters", type: :feature, elasticsearch: true do

  scenario "Filtering by paper type", js: true do
    paper_types = %w(Antrag Anfrage Beschlussvorlage)
    papers = paper_types.map do |t|
      FactoryGirl.create(:paper, paper_type: t)
    end
    Paper.__elasticsearch__.refresh_index!

    visit search_path body: "leipzig"
    expect(page).to have_css("li.search-result", count: 3)
    select "Antrag (1)", from: "Typ"
    expect(page).to have_css("li.search-result", count: 1)
  end

end
