class CreateAttachedImages < ActiveRecord::Migration
  def change
    create_table :attached_images do |t|
      t.integer :attachable_id
      t.string :attachable_type

      t.timestamps null: false
    end

    add_index :attached_images, :attachable_id
  end
end
