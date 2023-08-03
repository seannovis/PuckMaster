class ChangePlayers < ActiveRecord::Migration[7.0]
  def change
    add_column :players, :current_team, :string
    add_column :players, :previous_teams, :string
    add_column :players, :hand, :string
    add_column :players, :active, :boolean, default: true

    add_column :draftees, :current_team, :string
    add_column :draftees, :jersey_number, :string
    add_column :draftees, :position, :string
    add_column :draftees, :hand, :string
    remove_column :draftees, :team
    remove_column :draftees, :year
    remove_column :draftees, :round_pick

  end
end
