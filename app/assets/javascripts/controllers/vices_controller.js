window.app.controller('VicesController', [
  '$scope', 'vices', 'vice',
  function ($scope, vices, vice) {
    $scope.vice = vice;
    
    $scope.addUserVice = function () {
      vices.addUserVice(vice.id);
    };
  }
]);