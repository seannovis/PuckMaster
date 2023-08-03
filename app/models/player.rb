class Player < ApplicationRecord
    belongs_to :team

    validates :current_team, presence: true
    validates :full_name, presence: true, uniqueness: true
    validates :jersey_number, presence: true
    validates :position, presence: true
    validates :hand, presence: true

end
