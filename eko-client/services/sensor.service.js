(function () {
  'use strict';
  angular
    .module('eko')
    .service('SensorService', SensorService);

  SensorService.$inject = ['$http', '$q'];

  function SensorService($http, $q) {
    var url = 'http://52.67.66.143:2500/v1/registros/';

    function _getSensor(sensor) {
      return $http.get(url + sensor).then((response) => {
          return response.data;
      }).catch((err) => {
          return err.data;
      });
    };

    return {
      getSensor: _getSensor
    };
  }
})();
