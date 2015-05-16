window.app.controller('HomeController', [
  '$scope', 'vices',
  function ($scope, vices) {
    $scope.vices = vices.vices;
  }
]);