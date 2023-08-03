class NewPlayer < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :full_name
      t.string :current_team
      t.integer :jersey_number
      t.string :position
      t.string :previous_teams
      t.string :hand
      t.boolean :active, default: true
      t.integer :team_id

      t.timestamps
    end
  end
end
