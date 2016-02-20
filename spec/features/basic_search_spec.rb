require 'rails_helper'

RSpec.feature "Basic search", type: :feature, elasticsearch: true do

  before(:each) do
    @papers = FactoryGirl.create_list(:paper, 11)
    Paper.__elasticsearch__.refresh_index!
  end

  scenario "It displays the search form" do
    visit search_path body: "leipzig"
    expect(page).to have_content("Stadtratmonitor")
    expect(page).to have_field("paper_search_query")
    expect(page).to have_select("Typ")
    expect(page).to have_select("Einreicher")
    expect(page).to have_selector("label", text: "Sortierung")
    expect(page).to have_field("paper_search_sort_by_date", type: "radio")
    expect(page).to have_field("paper_search_sort_by_score", type: "radio")
  end

  scenario "It displays a list of search results" do
    visit search_path body: "leipzig"
    expect(page).to have_selector("ul#search_results")
    expect(page).to have_css("li.search-result", count: 10)
    expect(page).to have_content("#{@papers.size} Dokumente in der Datenbank")
  end

end
