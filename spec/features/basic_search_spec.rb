require 'rails_helper'

RSpec.feature "Basic search", type: :feature, elasticsearch: true do
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

  scenario "It displays the search results" do
    visit search_path body: "leipzig"
    expect(page).to have_selector("ul#search_results")
  end

end
