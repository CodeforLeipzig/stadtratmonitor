class CreateImporters < ActiveRecord::Migration[4.2]
  def change
    create_table :importers do |t|
      t.string :url
      t.timestamps null: false
    end
  end
end
