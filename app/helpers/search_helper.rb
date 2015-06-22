module SearchHelper
  def facet_list(facets)
    return unless facets.present?
    content_tag(:ul) do
      facets.each do |facet|
        concat content_tag(:li,
                           "#{facet['key']} (#{facet['doc_count']})",
                           class: "facet"
                          )
      end
    end
  end
end
