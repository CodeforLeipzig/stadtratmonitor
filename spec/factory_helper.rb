module FactoryHelper

  PAPER_TYPES = [
    "Verwaltungsstandpunkt",
    "Anfrage",
    "Beschlussvorlage",
    "Änderungsantrag",
    "Antrag",
    "Neufassung",
    "Informationsvorlage",
    "Einwohneranfrage",
    "Petition",
    "schriftliche Antwort zur Anfrage",
    "Wichtige Angelegenheit",
    "Eilentscheidung",
    "Dringliche Anfrage"
  ]

  def self.paper_type
    PAPER_TYPES.sample
  end

end
