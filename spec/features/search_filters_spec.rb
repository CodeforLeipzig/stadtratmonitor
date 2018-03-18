require 'rails_helper'

RSpec.feature "Search filters", type: :feature, elasticsearch: true do

  before(:each) do
    @antrag    = FactoryBot.create(:paper,
                                     paper_type: "Antrag",
                                     name: "Mehr Spielplätze in Leipzig",
                                     originator: "Dezernat Jugend, Soziales, Gesundheit und Schule"
                                    )
    @anfrage   = FactoryBot.create(:paper,
                                     paper_type: "Anfrage",
                                     originator: "CDU-Fraktion"
                                    )
    @vorlage_1 = FactoryBot.create(:paper,
                                     paper_type: "Vorlage",
                                     name: "Zustand der Spielplätze",
                                     originator: "Dezernat Jugend, Soziales, Gesundheit und Schule"
                                    )
    @vorlage_2 = FactoryBot.create(:paper,
                                     paper_type: "Vorlage",
                                     name: "Mehr Ampeln in der Innenstadt",
                                     originator: "Oberbürgermeister"
                                    )
    Paper.__elasticsearch__.refresh_index!
  end

  scenario "Displays paper types and their respective count witin the search results" do
    visit search_path body: "leipzig"
    paper_type_filter = page.find("select#paper_search_paper_type")
    expect(paper_type_filter).to have_css("option", text: "Antrag (1)")
    expect(paper_type_filter).to have_css("option", text: "Anfrage (1)")
    expect(paper_type_filter).to have_css("option", text: "Vorlage (2)")

    visit search_path body: "leipzig", paper_search: {query: "Spielplätze"}
    paper_type_filter = page.find("select#paper_search_paper_type")
    expect(paper_type_filter).to have_css("option", text: "Antrag (1)")
    expect(paper_type_filter).not_to have_css("option", text: "Anfrage")
    expect(paper_type_filter).to have_css("option", text: "Vorlage (1)")
  end

  scenario "Filtering by paper type", js: true do
    visit search_path body: "leipzig"
    expect(page).to have_css("li.search-result", count: 4)
    select "Antrag (1)", from: "Typ"
    expect(page).to have_css("li.search-result", count: 1, text: "Spielplätze")
  end

  scenario "Displays originators and their respective count within the search results" do
    visit search_path body: "leipzig"
    originator_filter = page.find("select#paper_search_originator")
    expect(originator_filter).to have_css("option", text: "CDU-Fraktion (1)")
    expect(originator_filter).to have_css("option", text: "Dezernat Jugend, Soziales, Gesundheit und Schule (2)")
    expect(originator_filter).to have_css("option", text: "Oberbürgermeister (1)")

    visit search_path body: "leipzig", paper_search: {query: "Spielplätze"}
    originator_filter = page.find("select#paper_search_originator")
    expect(originator_filter).to have_css("option", text: "Dezernat Jugend, Soziales, Gesundheit und Schule (2)")
    expect(originator_filter).not_to have_css("option", text: "Oberbürgermeister")
  end

  scenario "Filtering by originator", js: true do
    visit search_path body: "leipzig"
    expect(page).to have_css("li.search-result", count: 4)
    select "Oberbürgermeister (1)", from: "Einreicher"
    expect(page).to have_css("li.search-result", count: 1, text: "Ampeln")
  end

end
