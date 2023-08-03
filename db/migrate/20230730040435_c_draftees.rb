class CDraftees < ActiveRecord::Migration[7.0]
  def change
    create_table :draftees do |t|
      t.string :full_name
      t.string :current_team
      t.integer :jersey_number
      t.string :position
      t.integer :round
      t.integer :overall_pick
      t.string :hand
      t.integer :team_id

      t.timestamps
    end
  end
end
