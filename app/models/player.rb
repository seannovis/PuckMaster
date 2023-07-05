class Player < ApplicationRecord
    belongs_to :team

    validates :team_id, presence: true
    validates :full_name, presence: true, uniqueness: true
    validates :jersey_number, presence: true
    validates :position, presence: true

end
