class PlayerSerializer < ActiveModel::Serializer
  attributes :full_name, :jersey_number, :position
end
