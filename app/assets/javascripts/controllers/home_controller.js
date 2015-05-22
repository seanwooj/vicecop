window.app.controller('HomeController', [
  '$scope', 'vices', 'Auth', '$state',
  function ($scope, vices, Auth, $state) {

    // ensure that the user is authorized. if not, go home.
    // at some point would like to move this up to a higher
    // scope to cover all places wed like to ensure a user
    // is logged in.

    Auth.currentUser().then(function (user) {
      $scope.vices = vices.userVices;
    }, function () {
      $state.go('login');
    });
      
  }
]);