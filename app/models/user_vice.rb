class UserVice < ActiveRecord::Base
  belongs_to :user
  belongs_to :vice

  has_many :checkins, :dependent => :destroy

  def last_checkin_time
    unless checkins.empty?
      checkins.last.created_at
    else
      created_at
    end
  end

  def seconds_since_last_checkin
    Time.now - last_checkin_time
  end

  def minutes_since_last_checkin
    seconds_since_last_checkin / 60
  end

  def hours_since_last_checkin
    minutes_since_last_checkin / 60
  end

  def days_since_last_checkin
    hours_since_last_checkin / 24
  end

end
