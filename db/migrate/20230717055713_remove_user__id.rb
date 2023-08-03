class RemoveUserId < ActiveRecord::Migration[7.0]
  def change
    remove_column :tokens, :user_id
  end
end
