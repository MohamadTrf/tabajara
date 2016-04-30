angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.paginaInicial', {
    url: '/inicio',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paginaInicial.html',
        controller: 'paginaInicialCtrl'
      }
    }
  })

  .state('menu.instituiO', {
    url: '/etec',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instituiO.html',
        controller: 'instituiOCtrl'
      }
    }
  })

  .state('menu.faleConosco', {
    url: '/contato',
    views: {
      'side-menu21': {
        templateUrl: 'templates/faleConosco.html',
        controller: 'faleConoscoCtrl'
      }
    }
  })

  .state('menu.projetoFinal', {
    url: '/produto',
    views: {
      'side-menu21': {
        templateUrl: 'templates/projetoFinal.html',
        controller: 'projetoFinalCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/inicio')

  

});