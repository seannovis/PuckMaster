class StatSerializer < ActiveModel::Serializer
  attributes :wins, :losses, :ot, :points, :perecentage, :goals_scored, :goals_conceded, :conference_rank
end
