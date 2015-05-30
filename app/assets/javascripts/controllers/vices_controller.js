window.app.controller('VicesController', [
  '$scope', 'vices', 'vice', 'userVice', '$state',
  function ($scope, vices, vice, userVice, $state) {
    $scope.vice = vice;
    // the resolve in vice/show for userVice calls the index action
    // in user_vices controller.rb -- which returns an array.
    // because of this, we should grab the first item in the array,
    // which should be the only item.
    $scope.userVice = userVice[0];

    $scope.goBack = function () {
      window.history.back();
    };
    
    $scope.addUserVice = function () {
      vices.addUserVice(vice.id).then(function (res){
        $scope.userVice = res.data;
        $state.go('user_vice', {id: $scope.userVice.id});
      })
    };

    $scope.deactivateUserVice = function () {
      $scope.userVice = vices.deactivateUserVice($scope.userVice.id);
    };
  }
]);