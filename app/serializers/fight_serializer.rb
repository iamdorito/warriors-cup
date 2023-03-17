class FightSerializer < ActiveModel::Serializer
  attributes :id, :fighter_one_id, :fighter_two_id, :event_id
end
