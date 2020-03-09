# frozen_string_literal: true

require 'rails_helper'
require 'pp'

RSpec.feature 'Basic search', type: :feature, elasticsearch: true do
  before(:each) do
    @papers = FactoryBot.create_list(:paper, 11)
    Paper.__elasticsearch__.refresh_index!
  end

  scenario 'It displays the search form' do
    visit search_path body: 'leipzig'
    expect(page).to have_content('Stadtratmonitor')
    expect(page).to have_field('paper_search_query')
    expect(page).to have_select('Typ')
    expect(page).to have_select('Einreicher')
    expect(page).to have_selector('label', text: 'Sortierung')
    expect(page).to have_field('paper_search_sort_by_date', type: 'radio')
    expect(page).to have_field('paper_search_sort_by_score', type: 'radio')
  end

  scenario 'With empty query displays all documents' do
    visit search_path body: 'leipzig'
    expect(page).to have_selector('ul#search_results')
    expect(page).to have_content("#{@papers.size} Dokumente in der Datenbank")
  end

  scenario 'Search results are paginated' do
    visit search_path body: 'leipzig'
    expect(page).to have_css('li.search-result', count: 10)
    expect(page).to have_css('div#pagination')
    within('div#pagination') do
      expect(page).to have_css('li', count: 4) # two pages + next + last
      expect(page).to have_css('li.current', text: '1')
      expect(page).to have_link('2')
      expect(page).to have_link('Weiter')
      expect(page).to have_link('Ende')
    end

    page.find('div#pagination').click_link('2')
    expect(page).to have_css('li.search-result', count: 1)
    within('div#pagination') do
      expect(page).to have_css('li.current', text: '2')
    end
  end

  scenario 'Search results have basic information' do
    visit search_path body: 'leipzig'
    paper = @papers.first
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(paper.name)

    result_subentry = result_entry.find('li.current', match: :first)
    linkname = get_linkname(paper)
    expect(result_subentry).to have_link(linkname, href: paper.url)
  end

  def get_linkname(paper)
    date = I18n.l(paper.published_at.to_date)
    originator = (paper.originator.is_a?(Array) ?
      paper.originator.join(', ') : paper.originator)
    "#{date}: #{paper.paper_type} von #{originator}"
  end

  scenario 'Finds papers by name' do
    paper = FactoryBot.create(:paper, name: 'Opendata als default')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'Opendata' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(paper.name)

    result_subentry = result_entry.find('li.current', match: :first)
    linkname = get_linkname(paper)
    expect(result_subentry).to have_link(linkname, href: paper.url)
  end

  scenario 'Finds papers by content' do
    paper = FactoryBot.create(:paper,
                              name: 'Opendata als default',
                              content: 'Alle Verwaltungsdokumente werden als Opendata veröffentlicht')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'Verwaltungsdokumente' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(paper.name)

    result_subentry = result_entry.find('li.current', match: :first)
    linkname = get_linkname(paper)
    expect(result_subentry).to have_link(linkname, href: paper.url)
  end

  scenario 'Papers with common reference id in search result ordered by date' do
    main_paper = FactoryBot.create(:paper, published_at: '2016-12-19T19:00:00',
                                           name: 'Opendata als default', reference: 'VI-0815')
    new_paper = FactoryBot.create(:paper, published_at: '2016-12-23T12:00:00',
                                          name: 'Opendata als optional', reference: 'VI-0815-ÄA-01')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'default' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(main_paper.name)

    result_subentry1 = result_entry.find('li.current', match: :first)
    linkname1 = get_linkname(main_paper)
    expect(result_subentry1).to have_link(linkname1, href: main_paper.url)

    result_subentries = result_entry.find('ul').all('li')
    linkname2 = get_linkname(new_paper)
    expect(result_subentries[0]).to have_link(linkname2, href: new_paper.url)
    expect(result_subentries[1]).to have_link(linkname1, href: main_paper.url)
  end

  scenario 'Papers with common reference id in search result ordered by ref' do
    main_paper = FactoryBot.create(:paper, published_at: '2016-12-19T19:00:00',
                                           name: 'Opendata als default', reference: 'VI-0815')
    new_paper1 = FactoryBot.create(:paper, published_at: '2016-12-23T12:00:00',
                                           name: 'Opendata als optional', reference: 'VI-0815-ÄA-02')
    new_paper2 = FactoryBot.create(:paper, published_at: '2016-12-23T12:00:00',
                                           name: 'Opendata als optional', reference: 'VI-0815-ÄA-01')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'default' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)

    result_subentries = result_entry.find('ul').all('li')
    linkname1 = get_linkname(new_paper1)
    expect(result_subentries[0]).to have_link(linkname1, href: new_paper1.url)
    linkname2 = get_linkname(new_paper2)
    expect(result_subentries[1]).to have_link(linkname2, href: new_paper2.url)
    linkname3 = get_linkname(main_paper)
    expect(result_subentries[2]).to have_link(linkname3, href: main_paper.url)
  end

  scenario 'Papers with common reference id handled also for missing prefix' do
    main_paper = FactoryBot.create(:paper, published_at: '2016-12-19T19:00:00',
                                           name: 'Opendata als default', reference: 'VI-0815')
    new_paper1 = FactoryBot.create(:paper, published_at: '2016-12-23T12:00:00',
                                           name: 'Opendata als optional', reference: 'VI-0815-NF-01')
    new_paper2 = FactoryBot.create(:paper, published_at: '2016-12-23T12:00:00',
                                           name: 'Opendata als nicht optional', reference: '-0815-NF-01-ÄA-01')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'default' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)

    result_subentries = result_entry.find('ul').all('li')
    linkname1 = get_linkname(new_paper1)
    expect(result_subentries[0]).to have_link(linkname1, href: new_paper1.url)
    linkname2 = get_linkname(new_paper2)
    expect(result_subentries[1]).to have_link(linkname2, href: new_paper2.url)
    linkname3 = get_linkname(main_paper)
    expect(result_subentries[2]).to have_link(linkname3, href: main_paper.url)
  end

  scenario "Finds 'Testen' with search 'Test'" do
    paper = FactoryBot.create(:paper, name: 'Testen')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'Test' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(paper.name)
  end

  scenario "Finds 'Test' with search 'Testen'" do
    paper = FactoryBot.create(:paper, name: 'Test')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'Testen' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(paper.name)
  end

  scenario "Finds 'Fahrräderverleih' with search 'Fahrrad'" do
    paper = FactoryBot.create(:paper, name: 'Fahrräderverleih')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'Fahrrad' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(paper.name)
  end

  scenario "Finds 'Fahrräderverleih' with search 'Fahrräder'" do
    paper = FactoryBot.create(:paper, name: 'Fahrräderverleih')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'Fahrräder' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(paper.name)
  end

  scenario "Finds 'Fahrräderverleih' with search 'Verleih'" do
    paper = FactoryBot.create(:paper, name: 'Fahrräderverleih')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'Verleih' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(paper.name)
  end

  scenario "Finds 'Fahrräderverleih' with search 'Autoverleih'" do
    paper = FactoryBot.create(:paper, name: 'Fahrräderverleih')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'Autoverleih' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(paper.name)
  end

  scenario "Finds no 'Fahrrad' with search 'Rad'" do
    paper = FactoryBot.create(:paper, name: 'Fahrrad')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'Rad' }
    expect(page).to have_content('0 Dokumente in der Datenbank')
  end

  scenario 'Papers with reference id having slash is escaped' do
    main_paper = FactoryBot.create(:paper, published_at: '2016-12-19T19:00:00',
                                           name: 'Opendata als default', reference: 'VI-00768/14')
    new_paper = FactoryBot.create(:paper, published_at: '2016-12-23T12:00:00',
                                          name: 'Opendata als optional', reference: 'VI-00768/14-ÄA-01')
    Paper.__elasticsearch__.refresh_index!
    visit search_path body: 'leipzig', paper_search: { query: 'default' }
    expect(page).to have_content('1 Dokument in der Datenbank')
    result_entry = page.find('li.search-result', match: :first)
    expect(result_entry).to have_content(main_paper.name)

    result_subentry1 = result_entry.find('li.current', match: :first)
    linkname1 = get_linkname(main_paper)
    expect(result_subentry1).to have_link(linkname1, href: main_paper.url)

    result_subentries = result_entry.find('ul').all('li')
    linkname2 = get_linkname(new_paper)
    expect(result_subentries[0]).to have_link(linkname2, href: new_paper.url)
    expect(result_subentries[1]).to have_link(linkname1, href: main_paper.url)
  end
end
