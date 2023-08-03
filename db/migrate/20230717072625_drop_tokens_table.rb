class DropTokensTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :tokens
  end
end
