FactoryGirl.define do
  factory :paper do
    name         { Faker::Lorem.sentence }
    url          { Faker::Internet.url("ris.example.org") }
    reference    "MyString"
    body         "leipzig"
    published_at "2015-07-20 21:16:53"
    scraped_at   "2015-07-20 21:16:53"
    paper_type   "Verwaltungsstandpunkt"
    originator   { Faker::Name.name }
    resolution   { Faker::Lorem.paragraph(3) }
    content      "-------------------------------\n\n "  # oh well...
  end
end
