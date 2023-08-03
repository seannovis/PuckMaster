class CreatePlayersTable < ActiveRecord::Migration[7.0]
  def change
    create_table :players_tables do |t|
      t.string :full_name
      t.string :current_team
      t.integer :jersey_number
      t.string :position
      t.string :previous_teams
      t.string :hand
      t.boolean :active, default: true
       
      t.timestamps
    end
  end
end
