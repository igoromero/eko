(function() {
  'use strict';

  angular
    .module('eko')
    .config(RoutesConfig);

    function RoutesConfig($routeProvider, $locationProvider) {

      $routeProvider
      .when('/dashboard', {
        templateUrl: 'views/partials/panel.html',
        controller: 'panelController',
        controllerAs: 'panel'
      })
      .when('/no/', {
        templateUrl: 'views/no/partials/no.html', 
        controller: 'noController', 
        controllerAs: 'no'
      })
      .when('/no/new', {
        templateUrl: 'views/no/partials/new.html',
        controller: 'noController', 
        controllerAs: 'no'

      })
      .otherwise({
        redirectTo: '/dashboard'
      });
    }
})();
