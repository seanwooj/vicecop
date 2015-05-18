window.app.controller('UserVicesController', [
  '$scope', 'vices', 'userVice',
  function ($scope, vices, userVice) {
    $scope.userVice = userVice;
  }
]);