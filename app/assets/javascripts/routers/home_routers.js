window.app.config([
  '$stateProvider', '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/_home.html',
        controller: 'HomeController',
        resolve: {
          userVicesPromise: ['vices', function (vices) {
            return vices.getAllForUser();
          }]
        }
      });

    $urlRouterProvider.otherwise('home');
  }
]);
