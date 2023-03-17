class Fighter < ApplicationRecord
    has_many :fight1s, class_name: 'Fight', foreign_key: 'fighter1_id'
    has_many :fight2s, class_name: 'Fight', foreign_key: 'fighter2_id'
    has_many :events, through: :fights
end
