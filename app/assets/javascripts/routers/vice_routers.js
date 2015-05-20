window.app.config([
  '$stateProvider', '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('add_user_vice',{
        url: '/user_vices/add',
        templateUrl: 'user_vices/_add.html',
        controller: 'AddUserVicesController',
        resolve: {
          vice: ['vices', function (vices) {
            return vices.getAllVices();
          }]
        }
      })
      .state('vice', {
        url: '/vices/{id}',
        templateUrl: 'vices/_show.html',
        controller: 'VicesController',
        resolve: {
          vice: ['vices', '$stateParams', function (vices, $stateParams) {
            return vices.getVice($stateParams.id);
          }],

          userVice: ['vices', '$stateParams', function (vices, $stateParams) {
            return vices.getAllForUserAndVice($stateParams.id);
          }]
        }
      })
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
