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
      .otherwise({
        redirectTo: '/dashboard'
      });
    }
})();
