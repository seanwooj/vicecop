window.app.controller('AddUserVicesController', [
  '$scope', 'vices',
  function ($scope, vices) {
    $scope.vices = vices.vices;
    

  }
]);