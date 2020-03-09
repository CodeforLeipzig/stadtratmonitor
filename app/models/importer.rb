# frozen_string_literal: true

class Importer < ActiveRecord::Base
  validates :url, presence: true, uniqueness: true
end
