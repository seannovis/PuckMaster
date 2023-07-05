class PlayerIdSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :jersey_number, :position
end
