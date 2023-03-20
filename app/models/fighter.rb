class Fighter < ApplicationRecord
    has_many :fight1s, class_name: 'Fight', foreign_key: 'fighter1_id'
    has_many :fight2s, class_name: 'Fight', foreign_key: 'fighter2_id'
    has_many :events, through: :fights
    
    belongs_to :gym
    belongs_to :division

    validates :first_name,:last_name,:email,:gender,:gym_id,:status, presence: true
end
