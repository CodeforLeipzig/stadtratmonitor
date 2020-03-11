require_relative '../factory_helper'

FactoryBot.define do
  factory :paper do
    name                 { Faker::Lorem.sentence }
    sequence(:url)       { |n| Faker::Internet.url(host: "ris.example.org", path: "/paper-#{n}.html") }
    sequence(:reference) { |n| FactoryHelper.reference(n) }
    body                 { "leipzig" }
    published_at         { "2015-07-20 21:16:53" }
    scraped_at           { "2015-07-20 21:16:53" }
    paper_type           { FactoryHelper.paper_type }
    originator           { Faker::Name.name }
    resolution           { Faker::Lorem.paragraph(sentence_count: 3) }
    content              { "-------------------------------\n\n " }
  end
end
