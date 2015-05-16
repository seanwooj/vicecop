window.app.controller('AuthController', [
  '$state', 'Auth', '$scope',
  function ($state, Auth, $scope) {
    $scope.login = function () {
      Auth.login($scope.user).then(function () {
      $state.go('home');
      });
    }

    $scope.register = function () {
      Auth.register($scope.user).then(function () {
        $state.go('home');
      });
    };
  }
]);