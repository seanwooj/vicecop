window.app.controller('UserVicesController', [
  '$scope', 'vices', 'userVice', '$stateParams', '$state', 'Upload', 'imageResizingService',
  function ($scope, vices, userVice, $stateParams, $state, Upload, imageResizingService) {
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
          if (file.type.match(/image.*/)) {
            file = imageResizingService(file, function (file){

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

            });
          }


        }
      }
    };

    // BUG - for whatever reason, this does not show up as adding the location
    // in checkins.html.haml -- even though there is a hide. only shows up once clicked.
    // however, this ensures that when the user clicks on the button, there is a response
    // in the UX to show that location has been added.
    $scope.addLocation();

  }
]);