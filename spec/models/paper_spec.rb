# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Paper do
  context 'Validations' do
    it { should validate_presence_of(:name) }
    it { should validate_length_of(:name).is_at_most(1000) }

    it { should validate_presence_of(:url) }
    it { should validate_length_of(:url).is_at_most(1000) }

    context 'URL uniqueness' do
      subject { FactoryBot.build(:paper) }
      it { should validate_uniqueness_of(:url) }
    end

    it 'validate url format sane' do
      expected_error = 'ist keine gültige URL'
      paper = FactoryBot.build(:paper, url: 'wtf')
      expect(paper).not_to be_valid, 'Expected paper to not be valid with invalid URL'
      expect(paper.errors[:url]).not_to be_empty
      expect(paper.errors[:url]).to include(expected_error), "Expected #{paper.errors[:url]} to include \"#{expected_error}\""
    end

    it { should validate_presence_of(:reference) }
    it { should validate_length_of(:reference).is_at_most(100) }

    it { should validate_presence_of(:body) }
    it { should validate_length_of(:body).is_at_most(100) }

    it { should validate_presence_of(:content) }
    it { should validate_length_of(:content).is_at_most(100_000) }

    it { should validate_presence_of(:originator) }
    it { should validate_length_of(:originator).is_at_most(300) }

    it { should validate_presence_of(:paper_type) }
    it { should validate_length_of(:paper_type).is_at_most(50) }

    context 'published_at' do
      it { should validate_presence_of(:published_at) }
      it 'validate date is parseable' do
        expected_error = 'ist kein gültiges Datum'
        paper = FactoryBot.build(:paper, published_at: 'fubar')
        expect(paper).not_to be_valid
        expect(paper.errors[:published_at]).not_to be_empty
        expect(paper.errors[:published_at]).to include(expected_error), "Expected #{paper.errors[:published_at]} to include \"#{expected_error}\""
      end
    end

    it { should validate_length_of(:resolution).is_at_most(30_000) }
  end

  context 'Paper.import_from_oparl' do
    let(:oparl_paper_json) { File.read(Rails.root.join('spec/fixtures/oparl-paper.json')) }

    it 'creates a database record for the document' do
      expect { Paper.import_from_oparl(oparl_paper_json) }.to change { Paper.count }.by(1)
    end

    it 'populates the fields of the record correctly' do
      source = JSON.parse(oparl_paper_json)
      record = Paper.import_from_oparl(oparl_paper_json)
      mapping = {
        'name' => 'name',
        'body' => 'body',
        'paperType' => 'paper_type',
        'reference' => 'reference',
        'web' => 'url',
        'modified' => 'published_at',
        'leipzig:originator' => 'originator'
      }
      mapping.each do |source_field, target_field|
        expect(source[source_field]).to be_present, "#{source_field} not present in source"
        expect(record[target_field]).to eq(source[source_field])
      end
    end
  end
end
