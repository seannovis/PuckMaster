class DropPlayersTables < ActiveRecord::Migration[7.0]
  def change
    drop_table :players_tables

  end
end
