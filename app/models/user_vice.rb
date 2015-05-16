class UserVice < ActiveRecord::Base
  belongs_to :user
  belongs_to :vice

  def to_json(options = {})
    super(options.merge(:include => :vice))
  end
end
