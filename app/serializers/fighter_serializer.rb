class FighterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :nickname, :email, :gender, :wins, :losses, :draw, :headshot, :insta, :status, :gym_id, :division_id
  # , :gym_name, :division_name

  belongs_to :gym
  belongs_to :division
  # has_many :fights, serializer: FightSerializer
  # has_many :events, through: :fights, serializer: EventSerializer

  # def gym_name
  #   object.gym.name
  # end

  # def division_name
  #   object.division.name
  # end
end
