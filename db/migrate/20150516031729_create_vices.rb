class CreateVices < ActiveRecord::Migration
  def change
    create_table :vices do |t|
      t.string :name

      t.timestamps null: false
    end
    add_index :vices, :name, unique: true
  end
end
