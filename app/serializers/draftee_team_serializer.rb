class DrafteeTeamSerializer < ActiveModel::Serializer
  attributes :name, :venue, :founded, :division, :conference
  has_many :draftees, serializer: DrafteeSerializer
end
