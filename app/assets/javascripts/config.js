window.app.config([
  '$stateProvider', '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'auth/_login.html',
        controller: 'AuthController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/_register.html',
        controller: 'AuthController'
      });
  }
]);
