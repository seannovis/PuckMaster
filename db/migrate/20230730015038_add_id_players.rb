class AddIdPlayers < ActiveRecord::Migration[7.0]
  def change
    add_column :players, :team_id, :integer
  end
end
