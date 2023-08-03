class DDraftees < ActiveRecord::Migration[7.0]
  def change
    drop_table :draftees
  end
end
