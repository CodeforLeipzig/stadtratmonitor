require 'date'

xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Search results"
    xml.description "Papers matching search criteria"
    xml.link root_url

    @papers.each do |doc|
      xml.item do
        xml.title doc.name
        xml.description truncate(doc.content, length: 768)
        xml.pubDate DateTime.parse(doc.published_at).to_date.to_s(:rfc822)
        xml.creator doc.originator
        xml.category doc.paper_type
        xml.category doc.resolution
        xml.link doc.url
        xml.guid doc.url
      end
    end
  end
end