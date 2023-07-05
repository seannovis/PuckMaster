class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :venue, :founded, :division, :conference
end
