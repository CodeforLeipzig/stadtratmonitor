class CreatePapers < ActiveRecord::Migration[4.2]
  def change
    create_table :papers do |t|
      t.string :name
      t.string :url
      t.string :reference
      t.string :name
      t.string :body
      t.datetime :published_at
      t.datetime :scraped_at
      t.string :paper_type
      t.string :originator
      t.text :resolution
      t.text :content

      t.timestamps
    end

    add_index(:papers, :reference)
    add_index(:papers, :originator)
    add_index(:papers, :body)
    add_index(:papers, %i[reference body], unique: true)
  end
end
