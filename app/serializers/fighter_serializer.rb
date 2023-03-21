class FighterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :nickname, :email, :gender, :wins, :losses, :draw, :headshot, :insta,:gym_name, :division_name,:status

  def gym_name
    object.gym.name
  end

  def division_name
    object.division.name
  end
end
