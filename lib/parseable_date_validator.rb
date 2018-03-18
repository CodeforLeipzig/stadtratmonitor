class ParseableDateValidator < ActiveModel::EachValidator

  def validate_each(record, attribute, value)
    raw_value = record.read_attribute_before_type_cast(attribute)
    return nil if raw_value.nil?
    Date.parse(raw_value.to_json)
    nil
  rescue ArgumentError => e
    record.errors[attribute] << (options[:message] || I18n.t("errors.messages.unparseable_date"))
  end

end
