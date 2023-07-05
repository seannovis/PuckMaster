class StatTeamSerializer < ActiveModel::Serializer
  attributes :name, :venue, :founded, :division, :conference
  has_one :stat, serializer: StatSerializer
end

