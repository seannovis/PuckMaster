class Drop < ActiveRecord::Migration[7.0]
  def change
    drop_table :players
    drop_table :draftees
  end
end
