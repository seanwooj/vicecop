window.exampleApp.controller("ExampleCtrl", [
  '$scope', '$http',
  function ($scope, $http) {
    console.log('ExampleCtrl running');
    $http.get('/test').success(function (data){
      $scope.vices = data;
    });
  }
]);