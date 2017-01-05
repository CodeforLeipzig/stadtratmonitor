require 'rails_helper'
require 'pp'

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

  scenario "With empty query displays all documents" do
    visit search_path body: "leipzig"
    expect(page).to have_selector("ul#search_results")
    expect(page).to have_content("#{@papers.size} Dokumente in der Datenbank")
  end

  scenario "Search results are paginated" do
    visit search_path body: "leipzig"
    expect(page).to have_css("li.search-result", count: 10)
    expect(page).to have_css("div#pagination")
    within("div#pagination") do
      expect(page).to have_css("li", count: 4) # two pages + next + last
      expect(page).to have_css("li.current", text: "1")
      expect(page).to have_link("2")
      expect(page).to have_link("Weiter")
      expect(page).to have_link("Ende")
    end

    page.find("div#pagination").click_link("2")
    expect(page).to have_css("li.search-result", count: 1)
    within("div#pagination") do
      expect(page).to have_css("li.current", text: "2")
    end
  end

  scenario "Search results have basic information" do
    visit search_path body: "leipzig"
    paper = @papers.first
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(paper.name)

    resultSubEntry = resultEntry.find("li.current", match: :first)
    linkName = getLinkName(paper)
    expect(resultSubEntry).to have_link(linkName, href: paper.url)
  end

  def getLinkName(paper)
    dateStr = I18n.l(paper.published_at.to_date)
    originatorStr = (paper.originator.kind_of?(Array) ?
      paper.originator.join(", ") : paper.originator)
    return "#{dateStr}: #{paper.paper_type} von #{originatorStr}"
  end

  scenario "Finds papers by name" do
    paper = FactoryGirl.create(:paper, name: "Opendata als default")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "Opendata"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(paper.name)

    resultSubEntry = resultEntry.find("li.current", match: :first)
    linkName = getLinkName(paper)
    expect(resultSubEntry).to have_link(linkName, href: paper.url)
  end

  scenario "Finds papers by content" do
    paper = FactoryGirl.create(:paper,
                                name: "Opendata als default",
                                content: "Alle Verwaltungsdokumente werden als Opendata veröffentlicht"
                                )
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "Verwaltungsdokumente"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(paper.name)

    resultSubEntry = resultEntry.find("li.current", match: :first)
    linkName = getLinkName(paper)
    expect(resultSubEntry).to have_link(linkName, href: paper.url)
  end

  scenario "Papers with common reference id in search result ordered by date" do
    mainPaper = FactoryGirl.create(:paper, published_at: '2016-12-19T19:00:00',
      name: "Opendata als default", reference: "VI-0815")
    newPaper = FactoryGirl.create(:paper, published_at: '2016-12-23T12:00:00',
        name: "Opendata als optional", reference: "VI-0815-ÄA-01")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "default"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(mainPaper.name)

    resultSubEntry1 = resultEntry.find("li.current", match: :first)
    linkName1 = getLinkName(mainPaper)
    expect(resultSubEntry1).to have_link(linkName1, href: mainPaper.url)

    resultSubEntries = resultEntry.find("ul").all("li")
    linkName2 = getLinkName(newPaper)
    expect(resultSubEntries[1]).to have_link(linkName2, href: newPaper.url)
  end

  scenario "Papers with common reference id in search result ordered by ref" do
    mainPaper = FactoryGirl.create(:paper, published_at: '2016-12-19T19:00:00',
      name: "Opendata als default", reference: "VI-0815")
    newPaper1 = FactoryGirl.create(:paper, published_at: '2016-12-23T12:00:00',
        name: "Opendata als optional", reference: "VI-0815-ÄA-02")
    newPaper2 = FactoryGirl.create(:paper, published_at: '2016-12-23T12:00:00',
            name: "Opendata als optional", reference: "VI-0815-ÄA-01")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "default"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)

    resultSubEntries = resultEntry.find("ul").all("li")
    linkName1 = getLinkName(newPaper1)
    expect(resultSubEntries[2]).to have_link(linkName1, href: newPaper1.url)
    linkName2 = getLinkName(newPaper2)
    expect(resultSubEntries[1]).to have_link(linkName2, href: newPaper2.url)
  end

  scenario "Papers with common reference id handled also for missing prefix" do
    mainPaper = FactoryGirl.create(:paper, published_at: '2016-12-19T19:00:00',
      name: "Opendata als default", reference: "VI-0815")
    newPaper1 = FactoryGirl.create(:paper, published_at: '2016-12-23T12:00:00',
        name: "Opendata als optional", reference: "VI-0815-NF-01")
    newPaper1Change = FactoryGirl.create(:paper, published_at: '2016-12-23T12:00:00',
            name: "Opendata als nicht optional", reference: "-0815-NF-01-ÄA-01")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "default"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)

    resultSubEntries = resultEntry.find("ul").all("li")
    linkName1 = getLinkName(newPaper1)
    expect(resultSubEntries[2]).to have_link(linkName1, href: newPaper1.url)
    linkName2 = getLinkName(newPaper1Change)
    expect(resultSubEntries[1]).to have_link(linkName2, href: newPaper1Change.url)
  end

  scenario "Finds 'Testen' with search 'Test'" do
    paper = FactoryGirl.create(:paper, name: "Testen")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "Test"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(paper.name)
  end

  scenario "Finds 'Test' with search 'Testen'" do
    paper = FactoryGirl.create(:paper, name: "Test")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "Testen"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(paper.name)
  end

  scenario "Finds 'Fahrräderverleih' with search 'Fahrrad'" do
    paper = FactoryGirl.create(:paper, name: "Fahrräderverleih")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "Fahrrad"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(paper.name)
  end

  scenario "Finds 'Fahrräderverleih' with search 'Fahrräder'" do
    paper = FactoryGirl.create(:paper, name: "Fahrräderverleih")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "Fahrräder"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(paper.name)
  end

  scenario "Finds 'Fahrräderverleih' with search 'Verleih'" do
    paper = FactoryGirl.create(:paper, name: "Fahrräderverleih")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "Verleih"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(paper.name)
  end

  scenario "Finds 'Fahrräderverleih' with search 'Autoverleih'" do
    paper = FactoryGirl.create(:paper, name: "Fahrräderverleih")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "Autoverleih"}
    expect(page).to have_content("1 Dokument in der Datenbank")
    resultEntry = page.find("li.search-result", match: :first)
    expect(resultEntry).to have_content(paper.name)
  end

  scenario "Finds no 'Fahrrad' with search 'Rad'" do
    paper = FactoryGirl.create(:paper, name: "Fahrrad")
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: "leipzig", paper_search: {query: "Rad"}
    expect(page).to have_content("0 Dokumente in der Datenbank")
  end

end
