require 'test_helper'

class PaperTest < ActiveSupport::TestCase

  context "Validations" do
    should validate_presence_of(:name)
    should validate_length_of(:name).is_at_most(1000)

    should validate_presence_of(:url)
    should validate_length_of(:url).is_at_most(1000)
    context "URL uniqueness" do
      subject { FactoryBot.build(:paper) }
      should validate_uniqueness_of(:url)
    end
    should "validate url format sane" do
      expected_error = "ist keine gültige URL"
      paper = FactoryBot.build(:paper, url: "wtf")
      assert_not paper.valid?, "Expected paper to not be valid with invalid URL"
      assert_not paper.errors[:url].empty?
      assert paper.errors[:url].include?(expected_error), "Expected #{paper.errors[:url]} to include \"#{expected_error}\""
    end

    should validate_presence_of(:reference)
    should validate_length_of(:reference).is_at_most(100)

    should validate_presence_of(:body)
    should validate_length_of(:body).is_at_most(100)

    should validate_presence_of(:content)
    should validate_length_of(:content).is_at_most(100_000)

    should validate_presence_of(:originator)
    should validate_length_of(:originator).is_at_most(300)

    should validate_presence_of(:paper_type)
    should validate_length_of(:paper_type).is_at_most(50)

    context "published_at" do
      should validate_presence_of(:published_at)
      should "validate date is parseable" do
        expected_error = "ist kein gültiges Datum"
        paper = FactoryBot.build(:paper, published_at: "fubar")
        assert_not paper.valid?
        assert_not paper.errors[:published_at].empty?
        assert paper.errors[:published_at].include?(expected_error), "Expected #{paper.errors[:published_at]} to include \"#{expected_error}\""
      end
    end

    should validate_length_of(:resolution).is_at_most(30_000)
  end

end
