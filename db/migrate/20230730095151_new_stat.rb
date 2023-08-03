class NewStat < ActiveRecord::Migration[7.0]
  def change
    create_table :stats do |t|
      t.integer :wins
      t.integer :losses
      t.integer :ot
      t.integer :points
      t.float :perecentage
      t.integer :conference_rank
      t.integer :goals_scored
      t.integer :goals_conceded
      t.integer :team_id

      t.timestamps
    end
  end
end
