class UserVice < ActiveRecord::Base
  belongs_to :user
  belongs_to :vice

  has_many :checkins

  def to_json(options = {})
    super(options.merge(:include => [:vice, :checkins]))
  end
end
