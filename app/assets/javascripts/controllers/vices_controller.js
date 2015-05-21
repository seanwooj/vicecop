window.app.controller('VicesController', [
  '$scope', 'vices', 'vice', 'userVice',
  function ($scope, vices, vice, userVice) {
    $scope.vice = vice;
    // the resolve in vice/show for userVice calls the index action
    // in user_vices controller.rb -- which returns an array.
    // because of this, we should grab the first item in the array,
    // which should be the only item.
    $scope.userVice = userVice[0];
    
    $scope.addUserVice = function () {
      vices.addUserVice(vice.id).then(function (res){
        $scope.userVice = res.data;
      })
    };

    $scope.deactivateUserVice = function () {
      $scope.userVice = vices.deactivateUserVice($scope.userVice.id);
    };
  }
]);