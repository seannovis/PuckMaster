class CreateTeams < ActiveRecord::Migration[7.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :venue
      t.string :founded
      t.string :division
      t.string :conference

      t.timestamps
    end
  end
end
