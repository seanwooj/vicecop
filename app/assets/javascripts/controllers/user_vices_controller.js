window.app.controller('UserVicesController', [
  '$scope', 'vices', 'userVice', '$stateParams', '$state', 'Upload',
  function ($scope, vices, userVice, $stateParams, $state, Upload) {
    $scope.userVice = userVice;
    $scope.moment = moment;

    $scope.addCheckin = function () {
      if (!$scope.note) { return ;}
      vices.addCheckin($stateParams.id, {
        note: $scope.note,
        image: $scope.image,
        latitude: $scope.latitude,
        longitude: $scope.longitude
      })
      .success(function (checkin) {
        $scope.userVice.checkins.push(checkin);
        $state.go('user_vice', {id: $stateParams.id});
      });
      $scope.note = '';
    };

    $scope.addLocation = function () {
      // NEED TO ADD SOME SORT OF BLOCK TO SUBMISSION
      // UNTIL GEOLOCATION FINISHES OR FAILS.
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position){
          $scope.latitude = position.coords.latitude;
          $scope.longitude = position.coords.longitude;
        });
      } else {
        alert('Geolocation not available! Sorry :(');
      }
      
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