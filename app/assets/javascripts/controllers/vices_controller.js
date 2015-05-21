window.app.controller('VicesController', [
  '$scope', 'vices', 'vice', 'userVice',
  function ($scope, vices, vice, userVice) {
    $scope.vice = vice;
    $scope.userVice = userVice;
    
    $scope.addUserVice = function () {
      vices.addUserVice(vice.id);
    };

    $scope.deactivateUserVice = function () {
      vices.deactivateUserVice(vice.id);
    };
  }
]);