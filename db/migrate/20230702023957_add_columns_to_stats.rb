class AddColumnsToStats < ActiveRecord::Migration[7.0]
  def change
    add_column :stats, :goals_scored, :integer
    add_column :stats, :goals_conceded, :integer
  end
end
