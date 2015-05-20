window.app.controller('NewVicesController', [
  '$scope', 'vices', '$location',
  function ($scope, vices, $location) {
    $scope.viceName = $location.search()['vice_name'];
  }
]);