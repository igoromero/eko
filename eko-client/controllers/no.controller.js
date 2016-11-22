(function () {
  'use strict';

  angular
    .module('eko')
    .controller('noController', noController);

  noController.$inject = ['$mdToast', 'NoService', '$scope'];

  function noController($mdToast, NoService, $scope) {
    var vm = this;
    vm.title = 'No';

    (function init() {
      configMaps();
      loadMarkers();
      vm.node = {};
      vm.nodeArray = [1, 2, 3, 4, 5, 6];
    })();

    function configMaps() {
      vm.options = {
        map: {
          center: [-14.203587041742852, -42.1953125],
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        },

        marker: {
          clickable: false,
          draggable: true
        }
      };

      vm.setNodeLocation = function(node, marker) {
      var position = marker.getPosition();
      node.lat = position.lat();
      node.lng = position.lng();
    };

    }

    vm.save = function () {
      var position = vm.node.data.position;
      NoService.registerNo({
        descricao: vm.node.descricao,
        lat: position.lat(),
        long: position.lng(),
        noid: vm.node.nodeSelected
      }).then(function () {
        $mdToast.show(
          $mdToast.simple()
          .textContent('Salvo com Sucesso')
          .position('bottom left')
          .hideDelay(3000)
        );
      }).catch(function () {
        $mdToast.show(
          $mdToast.simple()
          .textContent('OPS... algo de errado aconteceu ao tentar salvar!')
          .position('bottom left')
          .hideDelay(3000)
        );
      });
    }

    function loadMarkers() {
      NoService.getNos().then((data) => {
        vm.registeredNodes = data.nos;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
})();
