class CreatePaperSearches < ActiveRecord::Migration
  def change
    create_table :paper_searches do |t|
      t.string :query
      t.string :paper_type
      t.string :originator
      t.string :sort_by
    end
  end
end
