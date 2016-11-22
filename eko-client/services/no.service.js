(function() {
  angular 
    .module('eko')
    .service('NoService', NoService);

    NoService.$inject = ['$http'];

    function NoService($http) {
      var url = 'http://52.67.66.143:2500/v1/nos';

      function _registerNo(data) {
        return $http.post(url, data).then((response) => {
          return response.data;
        }).catch((err) => { 
          return err.data;
        });
      }

      function _getNos() {
        return $http.get(url).then((response) => {
          return response.data;
        }).catch((err) => {
          return err.data;
        });
      }

      return {
        getNos: _getNos,
        registerNo: _registerNo
      };
    }
})();