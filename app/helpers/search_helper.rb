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

  def filter_select(builder, name, desc, facets, selected)
    capture do
      concat(builder.label name, desc)
      concat(
        builder.select name,
          options_from_collection_for_select(facets, :term, :term_with_count, selected),
          { include_blank: true },
          { onchange: "this.form.submit();" }
      )
    end
  end

end
