class PlayerTeamSerializer < ActiveModel::Serializer
  attributes :name, :venue, :founded, :division, :conference
  has_many :players, serializer: PlayerSerializer
end
