class CreateDraftees < ActiveRecord::Migration[7.0]
  def change
    create_table :draftees do |t|
      t.string :full_name
      t.string :team
      t.string :year
      t.integer :round
      t.integer :round_pick
      t.integer :overall_pick
      t.integer :team_id

      t.timestamps
    end
  end
end
