require 'rest-client'
require 'json'

# response = RestClient.get "https://statsapi.web.nhl.com/api/v1/teams"
# teams = JSON.parse(response)

# teams["teams"].each do |team|
#     Team.create(
#         id: team["id"],
#         name: team["name"],
#         venue: team["venue"]["name"],
#         founded: team["firstYearOfPlay"],
#         division: team["division"]["name"],
#         conference: team["conference"]["name"]
#     )
# end

# response = RestClient.get "https://statsapi.web.nhl.com/api/v1/draft"
# draft = JSON.parse(response)

# draft["drafts"].each do |draftee|
#     draftee["rounds"].each do |round|
#       round["picks"].each do |pick|
#         Draftee.create(
#             full_name: pick["prospect"]["fullName"],
#             team: pick["team"]["name"],
#             year: pick["year"],
#             round: pick["round"],
#             round_pick: pick["pickInRound"],
#             overall_pick: pick["pickOverall"],
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


# loop do
#     team_id = 1
#     response = RestClient.get "https://statsapi.web.nhl.com/api/v1/teams/#{team_id}/roster"
#     roster = JSON.parse(response)

#     if roster["roster"]
#         roster["roster"].each do |player|
#             Player.create(
#                 full_name: player["person"]["fullName"],
#                 jersey_number: player["jerseyNumber"],
#                 position: player["position"]["name"],
#                 team_id: team_id
#             )
#         end
#     else 
#         next
#     end
#     team_id += 1
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