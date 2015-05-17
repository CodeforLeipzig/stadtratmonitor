class CreateImporters < ActiveRecord::Migration
  def change
    create_table :importers do |t|
      t.string :url
      t.timestamps null: false
    end
  end
end
