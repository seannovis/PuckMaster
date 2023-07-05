class DrafteeSerializer < ActiveModel::Serializer
  attributes :full_name, :team, :overall_pick

  belongs_to :team, serializer: DrafteeTeamSerializer
end
