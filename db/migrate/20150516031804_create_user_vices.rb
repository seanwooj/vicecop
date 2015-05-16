class CreateUserVices < ActiveRecord::Migration
  def change
    create_table :user_vices do |t|
      t.references :user
      t.references :vice

      t.timestamps null: false
    end
  end
end
