require 'test_helper'

class PaperTest < ActiveSupport::TestCase

  context "Validations" do
    should validate_presence_of(:body)
    should validate_presence_of(:content)
    should validate_presence_of(:name)
    should validate_presence_of(:originator)
    should validate_presence_of(:paper_type)
    should validate_presence_of(:reference)
    should validate_presence_of(:url)
    should validate_presence_of(:published_at)
  end

end
