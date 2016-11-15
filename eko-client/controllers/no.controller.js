(function () {
  'use strict';

  angular
    .module('eko')
    .controller('noController', noController);

  noController.$inject = ['$mdToast'];

  function noController($mdToast) {
    var vm = this;
    vm.title = 'No';
    
    (function init() {
      configMaps();
      vm.node = {};
      vm.nodeArray = [1,2,3,4,5,6];
    })();

    function configMaps() {
      vm.optionsMaps = {
        center: [37, -122], 
        zoom: 4, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      vm.optionsMarkers = {
        draggable: true
      };
    }

    vm.save = function() {
      console.log(vm.node)
      $mdToast.show(
        $mdToast.simple()
        .textContent('Salvo com Sucesso')
        .position('top right')
        .hideDelay(3000)
      );
    }
  }
})();
