class CreateTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :tokens do |t|
      t.string :admin_token
      t.integer :user_id
      t.boolean :active, null: false 

      t.timestamps
    end
  end
end
