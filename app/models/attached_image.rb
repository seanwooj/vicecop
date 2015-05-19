class AttachedImage < ActiveRecord::Base
  belongs_to :attachable, :polymorphic => true

  has_attached_file :image, :styles => { :thumb => '200x200', :medium => '300x300' }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  def image_url
    image.url
  end

  def thumbnail_url
    image.url(:thumb)
  end
end
