class DefaultAdd < ActiveRecord::Migration[7.0]

  def up
    change_column_default :users, :bio, from: "", to: "As an avid NHL fan, I find sheer excitement in the thrilling battles that unfold on the icy arena. The adrenaline rush of each game, the remarkable skills of the players, and the camaraderie among fellow fans create an unmatched experience. With unwavering dedication, I cheer for my team, dreaming of the day they'll lift the Stanley Cup, and the joy it will bring to all of us who share this passion. 🏒🥅🏆"
    change_column_default :users, :icon, from: "", to: "../images/icon.png"
  end

  def down
    change_column_default :users, :bio, from: "As an avid NHL fan, I find sheer excitement in the thrilling battles that unfold on the icy arena. The adrenaline rush of each game, the remarkable skills of the players, and the camaraderie among fellow fans create an unmatched experience. With unwavering dedication, I cheer for my team, dreaming of the day they'll lift the Stanley Cup, and the joy it will bring to all of us who share this passion. 🏒🥅🏆", to: ""
    change_column_default :users, :icon, from: "../images/icon.png", to: ""
  end
end
