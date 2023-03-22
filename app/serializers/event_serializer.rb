class EventSerializer < ActiveModel::Serializer
  attributes :id, :event_number, :name, :location, :date, :poster_img, :fights

  # has_many :fights, serializer: FightSerializer
  # has_many :fighters, through: :fights, serializer: FighterSerializer
end
