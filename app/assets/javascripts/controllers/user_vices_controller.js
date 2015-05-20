window.app.controller('UserVicesController', [
  '$scope', 'vices', 'userVice', '$stateParams', '$state', 'Upload',
  function ($scope, vices, userVice, $stateParams, $state, Upload) {
    $scope.userVice = userVice;
    $scope.moment = moment;

    $scope.addCheckin = function () {
      if (!$scope.note) { return ;}
      vices.addCheckin($stateParams.id, {
        note: $scope.note,
        image: $scope.image
      })
      .success(function (checkin) {
        $scope.userVice.checkins.push(checkin);
        $state.go('user_vice', {id: $stateParams.id});
      });
      $scope.note = '';
    };


    // FROM
    // https://github.com/danialfarid/ng-file-upload
    $scope.$watch('files', function () {
      $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
      if ( files && files.length ) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          Upload.upload({
            url: '/attached_images.json',
            file: file,
            fields: {name: file.name}
          })
          .progress(function (evt) {
            $scope.progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          })
          .success(function(data, status, headers, config) {
            $scope.image = data;
          });
        }
      }
    }

  }
]);