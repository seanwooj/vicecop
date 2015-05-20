window.app.factory('vices', [
  '$http',
  function ($http) {
    var o = {
      getAllForUser: function () {
        $http.get('/user_vices.json').success(function (data) {
          angular.copy(data, o.userVices);
        });
      },

      getAllVices: function () {
        $http.get('/vices.json').success(function (data) {
          angular.copy(data, o.vices);
        });
      },

      getVice: function (id) {
        return $http.get('/vices/' + id + '.json').then(function (res) {
          return res.data;
        });
      },

      get: function (id) {
        return $http.get('/user_vices/' + id + '.json').then(function (res) {
          return res.data;
        });
      },

      addCheckin: function (id, checkin) {
        return $http.post('/user_vices/' + id + '/checkins.json', checkin);
      },

      addUserVice: function(id) {
        // On the rails controller side, this should find a uservice if it already exists
        // and reactivate it.
        return $http.post('/user_vices.json', {vice_id: id});
      },

      userVices: [],

      vices: []
    }

    return o;
  }
]);