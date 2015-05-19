window.app.controller('UserVicesController', [
  '$scope', 'vices', 'userVice', '$stateParams', '$state',
  function ($scope, vices, userVice, $stateParams, $state) {
    $scope.userVice = userVice;
    $scope.moment = moment;

    $scope.addCheckin = function () {
      if (!$scope.note) { return ;}
      vices.addCheckin($stateParams.id, {
        note: $scope.note
      })
      .success(function (checkin) {
        $scope.userVice.checkins.push(checkin);
        $state.go('user_vice', {id: $stateParams.id});
      });
      $scope.note = '';
    };
  }
]);