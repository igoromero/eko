(function() {
  'use strict';

  angular
    .module('eko')
    .controller('noController', noController);

    noController.$inject = ['$timeout'];
    function noController($timeout) {
      var vm = this;
      vm.title = 'No'

      vm.user = null;
  vm.users = null;

  vm.loadUsers = function() {

      vm.users =  vm.users  || [
        { id: 1, name: 'Scooby Doo' },
        { id: 2, name: 'Shaggy Rodgers' },
        { id: 3, name: 'Fred Jones' },
        { id: 4, name: 'Daphne Blake' },
        { id: 5, name: 'Velma Dinkley' }
      ];
  };
    }
})();