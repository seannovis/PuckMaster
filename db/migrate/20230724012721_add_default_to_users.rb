class AddDefaultToUsers < ActiveRecord::Migration[7.0]
  def change
    change_column_default :users, :bio, "Passionate NHL fan who lives for the thrill of icy battles and dreams of hoisting the Stanley Cup."
    change_column_default :users, :icon, "../images/icon.png"
  end
end
