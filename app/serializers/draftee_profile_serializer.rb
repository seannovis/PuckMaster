class DrafteeProfileSerializer < ActiveModel::Serializer
  attributes :full_name, :current_team, :position, :jersey_number, :round, :overall_pick, :hand
end
