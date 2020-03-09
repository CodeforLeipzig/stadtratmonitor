# frozen_string_literal: true

require 'date'

xml.instruct! :xml, version: '1.0'
xml.rss :version => '2.0', 'xmlns:dc' => 'http://purl.org/dc/elements/1.1/' do
  xml.channel do
    xml.title 'Search results'
    xml.description 'Papers matching search criteria'

    @papers.each do |doc|
      xml.item do
        xml.title doc.name
        unless doc.content.blank?
          xml.description do
            xml.cdata! truncate(doc.content.sub('------------------------------- ', ''), length: 768)
          end
        end
        unless doc.published_at.blank?
          xml.pubDate DateTime.parse(doc.published_at).utc.strftime('%a, %d %b %Y %H:%M:%S %z')
          end
        doc.originator.each do |originator|
          xml.dc :creator do
            xml.cdata! originator
          end
        end
        unless doc.paper_type.blank?
          xml.category do
            xml.cdata! doc.paper_type
          end
        end
        xml.link doc.url
        xml.guid doc.url
      end
    end
  end
end
