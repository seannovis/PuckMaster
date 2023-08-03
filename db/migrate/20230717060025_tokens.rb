class Tokens < ActiveRecord::Migration[7.0]
  def change
    create_table "tokens", force: :cascade do |t|
      t.string "admin_token"
      t.boolean "active", default: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end    
  end
end
