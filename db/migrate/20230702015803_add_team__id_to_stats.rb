class AddTeamIdToStats < ActiveRecord::Migration[7.0]
  def change
    add_column :stats, :team_id, :integer
  end
end
