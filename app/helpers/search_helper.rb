module SearchHelper
  def facet_list(facets)
    return unless facets.present?
    content_tag(:ul) do
      facets.each do |term, count|
        concat content_tag(:li,
                           "#{term} (#{count})",
                           class: "facet"
                          )
      end
    end
  end
end
