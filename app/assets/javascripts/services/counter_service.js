window.app.factory('counterService', ['$interval', function($interval) {
  return function(userVice) {
    var counterObject = {};

    // this is ugly as sin, but at least it is encapsulated for now.
    // at somepoint need to clean it up.
    var last_checkin_time = moment(userVice.last_checkin_time);
    $interval(function(){
      counterObject.days_since = moment().diff( last_checkin_time, 'days' );
      var days_in_hours_since = counterObject.days_since * 24
      counterObject.hours_since = moment().diff( last_checkin_time, 'hours' ) - days_in_hours_since;
      var hours_in_minutes_since = days_in_hours_since * 60 + counterObject.hours_since * 60
      counterObject.minutes_since =  moment().diff( last_checkin_time, 'minutes' ) - hours_in_minutes_since;
      var minutes_in_seconds_since = hours_in_minutes_since * 60 + counterObject.minutes_since * 60
      counterObject.seconds_since =  moment().diff( last_checkin_time, 'seconds' ) - minutes_in_seconds_since;
    }, 1000);

    return counterObject;
  }

}]);