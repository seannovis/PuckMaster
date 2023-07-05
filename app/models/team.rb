class Team < ApplicationRecord
    has_many :players
    has_many :draftees
    has_one :stat

end
