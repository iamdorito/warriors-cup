class FightSerializer < ActiveModel::Serializer
  attributes :id, :fighter1_id, :fighter2_id, :event_id, :fighter1, :fighter2, :event
  
  # belongs_to :fighter1, serializer: FighterSerializer
  # belongs_to :fighter2, serializer: FighterSerializer
  # belongs_to :event, serializer: EventSerializer
end
