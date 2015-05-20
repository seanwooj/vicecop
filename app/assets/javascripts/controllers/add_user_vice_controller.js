window.app.controller('AddUserVicesController', [
  '$scope', 'vices',
  function ($scope, vices) {
    $scope.vices = vices.vices;

    $scope.makeParam = function () {
      if ( $scope.viceSearch ) {
        $scope.viceNameParam = jQuery.param({vice_name: $scope.viceSearch});
      } else {
        $scope.viceNameParam = '';
      }
    };
  }
]);