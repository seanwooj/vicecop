window.app = angular.module('app', [
  'templates',
  'ui.router'
]);

window.app.config([
  '$httpProvider', function ($httpProvider) {
    return $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);

window.app.run(function (){
  return console.log('angular app running');
});