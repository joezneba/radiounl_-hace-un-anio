angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.radioUniversitaria', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/radioUniversitaria.html',
        controller: 'radioUniversitariaCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.quienesSomos', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/quienesSomos.html',
        controller: 'quienesSomosCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});