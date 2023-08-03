class CreateAdminTokens < ActiveRecord::Migration[7.0]
  def change
    create_table :admin_tokens do |t|
      t.string :token
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
