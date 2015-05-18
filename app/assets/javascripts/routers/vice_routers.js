window.app.config([
  '$stateProvider', '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('user_vice', {
        url: '/user_vices/{id}',
        templateUrl: 'user_vices/_show.html',
        controller: 'UserVicesController',
        resolve: {
          userVice: ['vices', '$stateParams', function (vices, $stateParams){
            return vices.get($stateParams.id);
          }]
        }
      }).
      state('user_vice_checkin', { 
        url: '/user_vices/{id}/checkin',
        templateUrl: 'user_vices/_checkin.html',
        controller: 'UserVicesController',
        resolve: {
          userVice: ['vices', '$stateParams', function (vices, $stateParams) {
            return vices.get($stateParams.id);
          }]
        }
      });
  }
]);
