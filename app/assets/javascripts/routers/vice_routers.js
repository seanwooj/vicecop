window.app.config([
  '$stateProvider', '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('user_vices', {
        url: '/user_vices/{id}',
        templateUrl: 'user_vices/_show.html',
        controller: 'UserVicesController',
        resolve: {
          userVice: ['vices', '$stateParams', function (vices, $stateParams){
            return vices.get($stateParams.id);
          }]
        }
      });
  }
]);
