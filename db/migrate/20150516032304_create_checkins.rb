class CreateCheckins < ActiveRecord::Migration
  def change
    create_table :checkins do |t|
      t.references :user
      t.references :user_vice
      t.string :address
      t.float :latitude
      t.float :longitude
      t.text :note

      t.timestamps null: false
    end
  end
end
