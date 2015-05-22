window.app = angular.module('app', [
  'templates', 'ui.router', 'Devise', 'ngAnimate', 'ngFileUpload'
]);

// not sure where else to put this. it makes sense to go somewhere in the main run block

window.app.run(function(){
  $(function(){
    $('.navbar-collapse').click('li', function (evt) {
      $('.navbar-collapse').collapse('hide');
    });
  });
});