class PlayerProfileSerializer < ActiveModel::Serializer
  attributes :full_name, :current_team, :position, :jersey_number, :previous_teams, :hand
end
