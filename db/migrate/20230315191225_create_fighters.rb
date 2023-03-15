class CreateFighters < ActiveRecord::Migration[7.0]
  def change
    create_table :fighters do |t|
      t.string :first_name
      t.string :last_name
      t.string :nickname
      t.string :email
      t.string :gym_id
      t.integer :wins
      t.integer :losses
      t.integer :draw
      t.string :headshot
      t.string :insta
      t.string :status
      t.string :password_digest

      t.timestamps
    end
    add_index :fighters, :email, unique: true
  end
end
