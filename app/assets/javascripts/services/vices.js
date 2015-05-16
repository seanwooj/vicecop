window.app.factory('vices', [
  '$http',
  function ($http) {
    var o = {
      getAllForUser: function () {
        $http.get('/user_vices.json').success(function (data) {
          angular.copy(data, o.vices)
        });
      },

      vices: []
    }

    return o;
  }
]);