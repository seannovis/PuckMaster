require 'rest-client'
require 'json'
require 'bcrypt'
require 'faker'

# response = RestClient.get "https://statsapi.web.nhl.com/api/v1/draft"
# draft = JSON.parse(response)

# positions = ["Center", "Left Wing", "Right Wing", "Goalie", "Defenseman"]
# hands = ["Right", "Left"]

# draft["drafts"].each do |draftee|
#     draftee["rounds"].each do |round|
#       round["picks"].each do |pick|
#         Draftee.create(
#             full_name: pick["prospect"]["fullName"],
#             current_team: pick["team"]["name"],
#             jersey_number: rand(1..99),
#             position: positions.sample,
#             round: pick["round"],
#             overall_pick: pick["pickOverall"],
#             hand: hands.sample,
#             team_id: pick["team"]["id"]
#         )
#       end
#     end
# end


# response = RestClient.get "https://statsapi.web.nhl.com/api/v1/standings"
# stats = JSON.parse(response)

# stats["records"].each do |record|
#     record["teamRecords"].each do |team|
#     Stat.create(
#         wins: team["leagueRecord"]["wins"],
#         losses: team["leagueRecord"]["losses"],
#         ot: team["leagueRecord"]["ot"],
#         points: team["points"],
#         perecentage: team["pointsPercentage"],
#         conference_rank: team["conferenceRank"],
#         team_id: team["team"]["id"],
#         goals_scored: team["goalsScored"],
#         goals_conceded: team["goalsAgainst"]
#     )
#     end
# end





# response = RestClient.get "https://statsapi.web.nhl.com/api/v1/teams"
# teams = JSON.parse(response)

# image_directory = "/images/"  

# teams["teams"].each do |team|
#   image_filename = "team_#{team["id"]}.png"  
#   image_url = image_directory + image_filename
  
#   Team.create(
#     id: team["id"],
#     name: team["name"],
#     venue: team["venue"]["name"],
#     founded: team["firstYearOfPlay"],
#     division: team["division"]["name"],
#     conference: team["conference"]["name"],
#     image_url: image_url
#   )
# end













# teams_response = RestClient.get "https://statsapi.web.nhl.com/api/v1/teams"
# teams_data = JSON.parse(teams_response)
# teams = teams_data["teams"].map { |team| team["name"] }

# team_id = 1
# while team_id <= 55
#   team_response = RestClient.get "https://statsapi.web.nhl.com/api/v1/teams/#{team_id}"
#   team_data = JSON.parse(team_response)

#   if team_data["active"]
#     player_response = RestClient.get "https://statsapi.web.nhl.com/api/v1/teams/#{team_id}/roster"
#     players_data = JSON.parse(player_response)

#     players_data["roster"].each do |player_data|
#       Player.create(
#         full_name: player_data["person"]["fullName"],
#         current_team: team_data["teams"]["name"],
#         jersey_number: player_data["jerseyNumber"],
#         position: player_data["position"]["name"],
#         previous_teams: teams.sample(rand(0..2)).join(', '),
#         hand: hands.sample,
#         active: true,
#         team_id: team_id
#       )
#     end
#   end

#   team_id += 1
# end




# Team.create(
#   id: 1,
#   name: 'New Jersey Devils',
#   venue: 'Prudential Center',
#   founded: 1982,
#   division: 'Metropolitan',
#   conference: 'Eastern',
#   image_url: '/images/team_1.png'
# )

# Team.create(
#   id: 2,
#   name: 'New York Islanders',
#   venue: 'UBS Arena',
#   founded: 1972,
#   division: 'Metropolitan',
#   conference: 'Eastern',
#   image_url: '/images/team_2.png'
# )

# Team.create(
#   id: 3,
#   name: 'New York Rangers',
#   venue: 'Madison Square Garden',
#   founded: 1926,
#   division: 'Metropolitan',
#   conference: 'Eastern',
#   image_url: '/images/team_3.png'
# )

# Team.create(
#   id: 4,
#   name: 'Philadelphia Flyers',
#   venue: 'Wells Fargo Center',
#   founded: 1967,
#   division: 'Metropolitan',
#   conference: 'Eastern',
#   image_url: '/images/team_4.png'
# )

# Team.create(
#   id: 5,
#   name: 'Pittsburgh Penguins',
#   venue: 'PPG Paints Arena',
#   founded: 1967,
#   division: 'Metropolitan',
#   conference: 'Eastern',
#   image_url: '/images/team_5.png'
# )

# Team.create(
#   id: 6,
#   name: 'Boston Bruins',
#   venue: 'TD Garden',
#   founded: 1924,
#   division: 'Atlantic',
#   conference: 'Eastern',
#   image_url: '/images/team_6.png'
# )

# Team.create(
#   id: 7,
#   name: 'Buffalo Sabres',
#   venue: 'KeyBank Center',
#   founded: 1970,
#   division: 'Atlantic',
#   conference: 'Eastern',
#   image_url: '/images/team_7.png'
# )

# Team.create(
#   id: 8,
#   name: 'Montréal Canadiens',
#   venue: 'Bell Centre',
#   founded: 1909,
#   division: 'Atlantic',
#   conference: 'Eastern',
#   image_url: '/images/team_8.png'
# )

# Team.create(
#   id: 9,
#   name: 'Ottawa Senators',
#   venue: 'Canadian Tire Centre',
#   founded: 1990,
#   division: 'Atlantic',
#   conference: 'Eastern',
#   image_url: '/images/team_9.png'
# )

# Team.create(
#   id: 10,
#   name: 'Toronto Maple Leafs',
#   venue: 'Scotiabank Arena',
#   founded: 1917,
#   division: 'Atlantic',
#   conference: 'Eastern',
#   image_url: '/images/team_10.png'
# )

# Team.create(
#   id: 12,
#   name: 'Carolina Hurricanes',
#   venue: 'PNC Arena',
#   founded: 1979,
#   division: 'Metropolitan',
#   conference: 'Eastern',
#   image_url: '/images/team_12.png'
# )

# Team.create(
#   id: 13,
#   name: 'Florida Panthers',
#   venue: 'FLA Live Arena',
#   founded: 1993,
#   division: 'Atlantic',
#   conference: 'Eastern',
#   image_url: '/images/team_13.png'
# )

# Team.create(
#   id: 14,
#   name: 'Tampa Bay Lightning',
#   venue: 'AMALIE Arena',
#   founded: 1991,
#   division: 'Atlantic',
#   conference: 'Eastern',
#   image_url: '/images/team_14.png'
# )

# Team.create(
#   id: 15,
#   name: 'Washington Capitals',
#   venue: 'Capital One Arena',
#   founded: 1974,
#   division: 'Metropolitan',
#   conference: 'Eastern',
#   image_url: '/images/team_15.png'
# )

# Team.create(
#   id: 16,
#   name: 'Chicago Blackhawks',
#   venue: 'United Center',
#   founded: 1926,
#   division: 'Central',
#   conference: 'Western',
#   image_url: '/images/team_16.png'
# )

# Team.create(
#   id: 17,
#   name: 'Detroit Red Wings',
#   venue: 'Little Caesars Arena',
#   founded: 1926,
#   division: 'Atlantic',
#   conference: 'Eastern',
#   image_url: '/images/team_17.png'
# )

# Team.create(
#   id: 18,
#   name: 'Nashville Predators',
#   venue: 'Bridgestone Arena',
#   founded: 1997,
#   division: 'Central',
#   conference: 'Western',
#   image_url: '/images/team_18.png'
# )

# Team.create(
#   id: 19,
#   name: 'St. Louis Blues',
#   venue: 'Enterprise Center',
#   founded: 1967,
#   division: 'Central',
#   conference: 'Western',
#   image_url: '/images/team_19.png'
# )

# Team.create(
#   id: 20,
#   name: 'Calgary Flames',
#   venue: 'Scotiabank Saddledome',
#   founded: 1980,
#   division: 'Pacific',
#   conference: 'Western',
#   image_url: '/images/team_20.png'
# )

# Team.create(
#   id: 21,
#   name: 'Colorado Avalanche',
#   venue: 'Ball Arena',
#   founded: 1979,
#   division: 'Central',
#   conference: 'Western',
#   image_url: '/images/team_21.png'
# )

# Team.create(
#   id: 22,
#   name: 'Edmonton Oilers',
#   venue: 'Rogers Place',
#   founded: 1979,
#   division: 'Pacific',
#   conference: 'Western',
#   image_url: '/images/team_22.png'
# )

# Team.create(
#   id: 23,
#   name: 'Vancouver Canucks',
#   venue: 'Rogers Arena',
#   founded: 1970,
#   division: 'Pacific',
#   conference: 'Western',
#   image_url: '/images/team_23.png'
# )

# Team.create(
#   id: 24,
#   name: 'Anaheim Ducks',
#   venue: 'Honda Center',
#   founded: 1993,
#   division: 'Pacific',
#   conference: 'Western',
#   image_url: '/images/team_24.png'
# )

# Team.create(
#   id: 25,
#   name: 'Dallas Stars',
#   venue: 'American Airlines Center',
#   founded: 1967,
#   division: 'Central',
#   conference: 'Western',
#   image_url: '/images/team_25.png'
# )

# Team.create(
#   id: 26,
#   name: 'Los Angeles Kings',
#   venue: 'Crypto.com Arena',
#   founded: 1967,
#   division: 'Pacific',
#   conference: 'Western',
#   image_url: '/images/team_26.png'
# )

# Team.create(
#   id: 28,
#   name: 'San Jose Sharks',
#   venue: 'SAP Center at San Jose',
#   founded: 1990,
#   division: 'Pacific',
#   conference: 'Western',
#   image_url: '/images/team_28.png'
# )

# Team.create(
#   id: 29,
#   name: 'Columbus Blue Jackets',
#   venue: 'Nationwide Arena',
#   founded: 1997,
#   division: 'Metropolitan',
#   conference: 'Eastern',
#   image_url: '/images/team_29.png'
# )

# Team.create(
#   id: 30,
#   name: 'Minnesota Wild',
#   venue: 'Xcel Energy Center',
#   founded: 1997,
#   division: 'Central',
#   conference: 'Western',
#   image_url: '/images/team_30.png'
# )

# Team.create(
#   id: 52,
#   name: 'Winnipeg Jets',
#   venue: 'Canada Life Centre',
#   founded: 2011,
#   division: 'Central',
#   conference: 'Western',
#   image_url: '/images/team_52.png'
# )

# Team.create(
#   id: 53,
#   name: 'Arizona Coyotes',
#   venue: 'Mullett Arena',
#   founded: 1979,
#   division: 'Central',
#   conference: 'Western',
#   image_url: '/images/team_53.png'
# )

# Team.create(
#   id: 54,
#   name: 'Vegas Golden Knights',
#   venue: 'T-Mobile Arena',
#   founded: 2016,
#   division: 'Pacific',
#   conference: 'Western',
#   image_url: '/images/team_54.png'
# )

# Team.create(
#   id: 55,
#   name: 'Seattle Kraken',
#   venue: 'Climate Pledge Arena',
#   founded: 2021,
#   division: 'Pacific',
#   conference: 'Western',
#   image_url: '/images/team_55.png'
# )

# Stat.create(
#   wins: 65,
#   losses: 12,
#   ot: 5,
#   points: 135,
#   perecentage: 0.823,
#   conference_rank: 1,
#   team_id: 6,
#   goals_scored: 305,
#   goals_conceded: 177
#   )
#   Stat.create(
#   wins: 52,
#   losses: 21,
#   ot: 9,
#   points: 113,
#   perecentage: 0.689,
#   conference_rank: 2,
#   team_id: 12,
#   goals_scored: 266,
#   goals_conceded: 213
#   )
#   Stat.create(
#   wins: 52,
#   losses: 22,
#   ot: 8,
#   points: 112,
#   perecentage: 0.683,
#   conference_rank: 3,
#   team_id: 1,
#   goals_scored: 291,
#   goals_conceded: 226
#   )
#   Stat.create(
#   wins: 50,
#   losses: 21,
#   ot: 11,
#   points: 111,
#   perecentage: 0.677,
#   conference_rank: 4,
#   team_id: 10,
#   goals_scored: 279,
#   goals_conceded: 222
#   )
#   Stat.create(
#   wins: 47,
#   losses: 22,
#   ot: 13,
#   points: 107,
#   perecentage: 0.652,
#   conference_rank: 5,
#   team_id: 3,
#   goals_scored: 277,
#   goals_conceded: 219
#   )
#   Stat.create(
#   wins: 46,
#   losses: 30,
#   ot: 6,
#   points: 98,
#   perecentage: 0.598,
#   conference_rank: 6,
#   team_id: 14,
#   goals_scored: 283,
#   goals_conceded: 254 
#   )
#   Stat.create(
#   wins: 42,
#   losses: 31,
#   ot: 9,
#   points: 93,
#   perecentage: 0.567,
#   conference_rank: 7,
#   team_id: 2,
#   goals_scored: 243,
#   goals_conceded: 222
#   )
#   Stat.create(
#   wins: 42,
#   losses: 32,
#   ot: 8,
#   points: 92,
#   perecentage: 0.561,
#   conference_rank: 8,
#   team_id: 13,
#   goals_scored: 290,
#   goals_conceded: 273
#   )
#   Stat.create(
#   wins: 40,
#   losses: 31,
#   ot: 11,
#   points: 91,
#   perecentage: 0.555,
#   conference_rank: 9,
#   team_id: 5,
#   goals_scored: 262,
#   goals_conceded: 264
#   )
#   Stat.create(
#   wins: 42,
#   losses: 33,
#   ot: 7,
#   points: 91,
#   perecentage: 0.555,
#   conference_rank: 10,
#   team_id: 7,
#   goals_scored: 296,
#   goals_conceded: 300
#   )
#   Stat.create(
#   wins: 39,
#   losses: 35,
#   ot: 8,
#   points: 86,
#   perecentage: 0.524,
#   conference_rank: 11,
#   team_id: 9,
#   goals_scored: 261,
#   goals_conceded: 271 
#   )
#   Stat.create(
#   wins: 35,
#   losses: 37,
#   ot: 10,
#   points: 80,
#   perecentage: 0.488,
#   conference_rank: 12,
#   team_id: 17,
#   goals_scored: 240,
#   goals_conceded: 279
#   )
#   Stat.create(
#   wins: 35,
#   losses: 37,
#   ot: 10,
#   points: 80,
#   perecentage: 0.488,
#   conference_rank: 13,
#   team_id: 15,
#   goals_scored: 255,
#   goals_conceded: 265
#   )
#   Stat.create(
#   wins: 31,
#   losses: 38,
#   ot: 13,
#   points: 75,
#   perecentage: 0.457,
#   conference_rank: 14,
#   team_id: 4,
#   goals_scored: 222,
#   goals_conceded: 277
#   )
#   Stat.create(
#   wins: 31,
#   losses: 45,
#   ot: 6,
#   points: 68,
#   perecentage: 0.415,
#   conference_rank: 15,
#   team_id: 8,
#   goals_scored: 232,
#   goals_conceded: 307
#   )
#   Stat.create(
#   wins: 25,
#   losses: 48,
#   ot: 9,
#   points: 59,
#   perecentage: 0.360,
#   conference_rank: 16,
#   team_id: 29,
#   goals_scored: 214,
#   goals_conceded: 330
#   )
#   Stat.create(
#   wins: 51,
#   losses: 22,
#   ot: 9,
#   points: 111,
#   perecentage: 0.677,
#   conference_rank: 1,
#   team_id: 54,
#   goals_scored: 272,
#   goals_conceded: 229
#   )
#   Stat.create(
#   wins: 50,
#   losses: 23,
#   ot: 9,
#   points: 109,
#   perecentage: 0.665,
#   conference_rank: 2,
#   team_id: 22,
#   goals_scored: 325,
#   goals_conceded: 260
#   )
#   Stat.create(
#   wins: 51,
#   losses: 24,
#   ot: 7,
#   points: 109,
#   perecentage: 0.665,
#   conference_rank: 3,
#   team_id: 21,
#   goals_scored: 280,
#   goals_conceded: 226
#   )
#   Stat.create(
#   wins: 47,
#   losses: 21,
#   ot: 14,
#   points: 108,
#   perecentage: 0.659,
#   conference_rank: 4,
#   team_id: 25,
#   goals_scored: 285,
#   goals_conceded: 218
#   )
#   Stat.create(
#   wins: 47,
#   losses: 25,
#   ot: 10,
#   points: 104,
#   perecentage: 0.634,
#   conference_rank: 5,
#   team_id: 26,
#   goals_scored: 280,
#   goals_conceded: 257
#   )
#   Stat.create(
#   wins: 46,
#   losses: 25,
#   ot: 11,
#   points: 103,
#   perecentage: 0.628,
#   conference_rank: 6,
#   team_id: 30,
#   goals_scored: 246,
#   goals_conceded: 225 
#   )
#   Stat.create(
#   wins: 46,
#   losses: 28,
#   ot: 8,
#   points: 100,
#   perecentage: 0.610,
#   conference_rank: 7,
#   team_id: 55,
#   goals_scored: 289,
#   goals_conceded: 256
#   )
#   Stat.create(
#   wins: 46,
#   losses: 33,
#   ot: 3,
#   points: 95,
#   perecentage: 0.579,
#   conference_rank: 8,
#   team_id: 52,
#   goals_scored: 247,
#   goals_conceded: 225
#   )
#   Stat.create(
#   wins: 38,
#   losses: 27,
#   ot: 17,
#   points: 93,
#   perecentage: 0.567,
#   conference_rank: 9,
#   team_id: 20,
#   goals_scored: 260,
#   goals_conceded: 252
#   )
#   Stat.create(
#   wins: 42,
#   losses: 32,
#   ot: 8,
#   points: 92,
#   perecentage: 0.561,
#   conference_rank: 10,
#   team_id: 18,
#   goals_scored: 229,
#   goals_conceded: 238
#   )
#   Stat.create(
#   wins: 38,
#   losses: 37,
#   ot: 7,
#   points: 83,
#   perecentage: 0.506,
#   conference_rank: 11,
#   team_id: 23,
#   goals_scored: 276,
#   goals_conceded: 298
#   )
#   Stat.create(
#   wins: 37,
#   losses: 38,
#   ot: 7,
#   points: 81,
#   perecentage: 0.494,
#   conference_rank: 12,
#   team_id: 19,
#   goals_scored: 263,
#   goals_conceded: 301 
#   )
#   Stat.create(
#   wins: 28,
#   losses: 40,
#   ot: 14,
#   points: 70,
#   perecentage: 0.427,
#   conference_rank: 13,
#   team_id: 53,
#   goals_scored: 228,
#   goals_conceded: 299
#   )
#   Stat.create(
#   wins: 22,
#   losses: 44,
#   ot: 16,
#   points: 60,
#   perecentage: 0.366,
#   conference_rank: 14,
#   team_id: 28,
#   goals_scored: 234,
#   goals_conceded: 321
#   )
#   Stat.create(
#   wins: 26,
#   losses: 49,
#   ot: 7,
#   points: 59,
#   perecentage: 0.369,
#   conference_rank: 15,
#   team_id: 16,
#   goals_scored: 204,
#   goals_conceded: 301
#   )
#   Stat.create(
#   wins: 23,
#   losses: 47,
#   ot: 12,
#   points: 58,
#   perecentage: 0.354,
#   conference_rank: 16,
#   team_id: 24,
#   goals_scored: 209,
#   goals_conceded: 338
#   )


10.times do
  token = BCrypt::Password.create(SecureRandom.hex(32))
  AdminToken.create(token: token)
end



# puts "seeding"

# hands = ["Right", "Left"]

# positions = ["Goalie", "Defenseman", "Center", "Right Wing", "Left Wing"]

# nhl_teams = {
#   "Anaheim Ducks" => 24,
#   "Arizona Coyotes" => 53,
#   "Boston Bruins" => 6,
#   "Buffalo Sabres" => 7,
#   "Calgary Flames" => 20,
#   "Carolina Hurricanes" => 12,
#   "Chicago Blackhawks" => 16,
#   "Colorado Avalanche" => 21,
#   "Columbus Blue Jackets" => 29,
#   "Dallas Stars" => 25,
#   "Detroit Red Wings" => 17,
#   "Edmonton Oilers" => 22,
#   "Florida Panthers" => 13,
#   "Los Angeles Kings" => 26,
#   "Minnesota Wild" => 30,
#   "Montréal Canadiens" => 8,
#   "Nashville Predators" => 18,
#   "New Jersey Devils" => 1,
#   "New York Islanders" => 2,
#   "New York Rangers" => 3,
#   "Ottawa Senators" => 9,
#   "Philadelphia Flyers" => 4,
#   "Pittsburgh Penguins" => 5,
#   "San Jose Sharks" => 28,
#   "Seattle Kraken" => 55,
#   "St. Louis Blues" => 19,
#   "Tampa Bay Lightning" => 14,
#   "Toronto Maple Leafs" => 10,
#   "Vancouver Canucks" => 23,
#   "Vegas Golden Knights" => 54,
#   "Washington Capitals" => 15,
#   "Winnipeg Jets" => 52
# }

# i = 193

# 32.times do 

#   random_team = nhl_teams.keys.sample
#   team_id = nhl_teams[random_team]
  

#   first_name = Faker::Name.unique.male_first_name
#   last_name = Faker::Name.last_name
#   name = "#{first_name} #{last_name}"

#   Draftee.create(
#     full_name: name,
#     current_team: random_team,
#     jersey_number: rand(1..99),
#     position: positions.sample,
#     round: 7,
#     overall_pick: i,
#     hand: hands.sample,
#     team_id: team_id
#   )

#   i += 1

# end

# 300.times do 

#   first_name = Faker::Name.unique.male_first_name
#   last_name = Faker::Name.last_name
#   name = "#{first_name} #{last_name}"

#   def random_previous_teams(teams)
#     num_previous_teams = rand(0..2)
#     teams.sample(num_previous_teams).join(', ')
#   end
  
#   random_team = nhl_teams.keys.sample
#   team_id = nhl_teams[random_team]
  
#   Player.create(
#   full_name: name,
#   current_team: random_team,
#   jersey_number: rand(1..99),
#   position: positions.sample,
#   previous_teams: random_previous_teams(nhl_teams.keys),
#   hand: hands.sample,
#   active: true,
#   team_id: team_id
# )
# end

puts "done"