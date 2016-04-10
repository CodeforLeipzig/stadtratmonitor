require 'date'

xml.instruct! :xml, :version => "1.0"
xml.rss :version => "2.0", "xmlns:dc" => "http://purl.org/dc/elements/1.1/" do
  xml.channel do
    xml.title "Search results"
    xml.description "Papers matching search criteria"
    xml.link root_url

    @papers.each do |doc|
      xml.item do
        xml.title doc.name
        if !doc.content.blank?
        	xml.description truncate(doc.content, length: 768)
        end
	    if !doc.published_at.blank?
    	    xml.pubDate DateTime.parse(doc.published_at).strftime("%a, %d %b %Y %H:%M:%S %z")
        end
        doc.originator.each do |creator| 
        	xml['dc'].creator creator
        end
        if !doc.paper_type.blank?
	        xml.category doc.paper_type
        end
        if !doc.resolution.blank?
        	xml.category doc.resolution
        end
        xml.link doc.url
        xml.guid doc.url
      end
    end
  end
end