module SearchHelper
  def facet_list(facets)
    return unless facets.present?
    content_tag(:ul) do
      facets.each do |facet|
        concat content_tag(:li,
                           "#{facet.term} (#{facet.count})",
                           class: "facet"
                          )
      end
    end
  end

  def filter_select(name, desc, facets, selected)
    capture do
      concat(label name, desc)
      concat(
        select_tag name,
          options_from_collection_for_select(facets, :term, :term, selected),
          include_blank: true,
          onchange: "this.form.submit();"
      )
    end
  end

end
