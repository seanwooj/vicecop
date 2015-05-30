window.app.controller('NewVicesController', [
  '$scope', 'vices', '$location', '$state',
  function ($scope, vices, $location, $state) {
    $scope.viceName = $location.search()['vice_name'];

    $scope.goBack = function () {
      window.history.back();
    };

    $scope.addVice = function(){
      vices.addVice({name: $scope.viceName}).then( function (res) {
        $state.go('user_vice', {id: res.data.id });
      } );
    }
  }
]);