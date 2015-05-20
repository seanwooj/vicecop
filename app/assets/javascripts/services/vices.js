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

      userVices: [],

      vices: []
    }

    return o;
  }
]);