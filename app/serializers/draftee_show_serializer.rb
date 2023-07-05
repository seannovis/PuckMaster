class DrafteeShowSerializer < ActiveModel::Serializer
  attributes :full_name, :team, :year, :round, :round_pick, :overall_pick
  
  belongs_to :team, serializer: DrafteeTeamSerializer
end
