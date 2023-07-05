class CreateStats < ActiveRecord::Migration[7.0]
  def change
    create_table :stats do |t|
      t.string :team
      t.integer :wins
      t.integer :losses
      t.integer :ot
      t.integer :points
      t.float :perecentage
      t.integer :conference_rank

      t.timestamps
    end
  end
end
