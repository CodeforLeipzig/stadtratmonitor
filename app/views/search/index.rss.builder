xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Search results"
    xml.description "Papers matching search criteria"
    xml.link root_url

    @papers.each do |doc|
      xml.item do
        xml.title doc.name
        xml.description article.content[0, doc.content.length < 30 ? doc.content.length : 30]
        xml.pubDate doc.published_at.to_date.to_s(:rfc822)
        xml.link doc.url
        xml.guid doc.url
      end
    end
  end
end