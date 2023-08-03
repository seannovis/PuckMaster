class DStatPlayer < ActiveRecord::Migration[7.0]
  def change
    drop_table :stats
    drop_table :players
  end
end
