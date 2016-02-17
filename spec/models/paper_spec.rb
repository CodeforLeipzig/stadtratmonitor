require 'rails_helper'

RSpec.describe Paper do
  context "Validations" do
    it { should validate_presence_of(:name) }
  end
end
