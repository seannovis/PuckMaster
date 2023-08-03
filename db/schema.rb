# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_08_01_035111) do
  create_table "admin_tokens", force: :cascade do |t|
    t.string "token"
    t.boolean "active", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "draftees", force: :cascade do |t|
    t.string "full_name"
    t.string "current_team"
    t.integer "jersey_number"
    t.string "position"
    t.integer "round"
    t.integer "overall_pick"
    t.string "hand"
    t.integer "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "full_name"
    t.string "current_team"
    t.integer "jersey_number"
    t.string "position"
    t.string "previous_teams"
    t.string "hand"
    t.boolean "active", default: true
    t.integer "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "stats", force: :cascade do |t|
    t.integer "wins"
    t.integer "losses"
    t.integer "ot"
    t.integer "points"
    t.float "perecentage"
    t.integer "conference_rank"
    t.integer "goals_scored"
    t.integer "goals_conceded"
    t.integer "team_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.string "venue"
    t.string "founded"
    t.string "division"
    t.string "conference"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "bio", default: "As an avid NHL fan, I find sheer excitement in the thrilling battles that unfold on the icy arena. The adrenaline rush of each game, the remarkable skills of the players, and the camaraderie among fellow fans create an unmatched experience. With unwavering dedication, I cheer for my team, dreaming of the day they'll lift the Stanley Cup, and the joy it will bring to all of us who share this passion. 🏒🥅🏆"
    t.string "icon", default: "../images/icon.png"
    t.string "token"
    t.boolean "admin", default: false
  end

end
