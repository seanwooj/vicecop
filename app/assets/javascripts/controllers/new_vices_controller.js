window.app.controller('NewVicesController', [
  '$scope', 'vices', '$location',
  function ($scope, vices, $location) {
    $scope.viceName = $location.search()['vice_name'];

    $scope.addVice = function(){
      vices.addVice({name: $scope.viceName});
    }
  }
]);