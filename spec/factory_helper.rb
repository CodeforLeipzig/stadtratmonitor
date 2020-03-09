# frozen_string_literal: true

module FactoryHelper
  PAPER_TYPES = [
    'Verwaltungsstandpunkt',
    'Anfrage',
    'Beschlussvorlage',
    'Änderungsantrag',
    'Antrag',
    'Neufassung',
    'Informationsvorlage',
    'Einwohneranfrage',
    'Petition',
    'schriftliche Antwort zur Anfrage',
    'Wichtige Angelegenheit',
    'Eilentscheidung',
    'Dringliche Anfrage'
  ].freeze

  def self.paper_type
    PAPER_TYPES.sample
  end

  REFERENCE = 'A-%05i/16'

  def self.reference(seq)
    REFERENCE % seq
  end
end
