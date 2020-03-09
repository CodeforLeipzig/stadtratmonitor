# frozen_string_literal: true

class User < ActiveRecord::Base
  def self.find_or_create_from_auth_hash(hash)
    User.find_or_create_by(email: hash['info']['email'])
  end
end
