# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2015_10_10_070158) do
  create_table "importers", force: :cascade do |t|
    t.string "url"
    t.datetime "created_at", precision: nil, null: false
    t.datetime "updated_at", precision: nil, null: false
  end

  create_table "paper_searches", force: :cascade do |t|
    t.string "query"
    t.string "paper_type"
    t.string "originator"
    t.string "sort_by"
  end

  create_table "papers", force: :cascade do |t|
    t.string "url"
    t.string "reference"
    t.string "name"
    t.string "body"
    t.datetime "published_at", precision: nil
    t.datetime "scraped_at", precision: nil
    t.string "paper_type"
    t.string "originator"
    t.text "resolution"
    t.text "content"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["body"], name: "index_papers_on_body"
    t.index ["originator"], name: "index_papers_on_originator"
    t.index ["reference", "body"], name: "index_papers_on_reference_and_body", unique: true
    t.index ["reference"], name: "index_papers_on_reference"
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.datetime "created_at", precision: nil
    t.datetime "updated_at", precision: nil
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
