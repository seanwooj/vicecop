window.app.controller('AuthController', [
  '$state', 'Auth', '$scope',
  function ($state, Auth, $scope) {
    $scope.login = function () {
      Auth.login($scope.user).then(function () {
      $state.go('home');
      }, shakeIt );
    }

    $scope.register = function () {
      Auth.register($scope.user).then(function () {
        $state.go('home');
      });
    };

    var shakeIt = function () {
      // NOT GOOD. SHOULN'T DO
      // turn this into a directive ASAP.
      // I don't know how to do this yet.
      // CHANGE THIS CHANGE THIS
      $('.form-group').addClass('shake shake-horizontal');
      setTimeout(function(){
        $('.form-group').removeClass('shake shake-horizontal');
      }, 500);
    }
  }
]);