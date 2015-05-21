class UserVice < ActiveRecord::Base
  belongs_to :user
  belongs_to :vice

  has_many :checkins, :dependent => :destroy

  def days_since_last_occurence
    if checkins
      (Date.today - checkins.last.created_at.to_date).to_i
    else
      nil
    end
  end

  def to_json(options = {})
    super(options.merge(:include => [:vice, :checkins]))
  end
end
