# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


vices = Vice.create([{:name => 'smoking'}, {:name => 'eating off diet'}])
user_vices = UserVice.create([{:user_id => 1, :vice_id => 1}, {:user_id => 1, :vice_id => 2}])