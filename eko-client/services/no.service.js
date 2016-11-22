(function() {
  angular 
    .module('eko')
    .service('NoService', NoService);

    NoService.$inject = ['$http'];

    function NoService($http) {
      var urlCrud = 'http://52.67.66.143:2500/v1/nos';
      var urlInfo = 'http://52.67.66.143:2500/v1/registros/nos';

      function _registerNo(data) {
        return $http.post(urlCrud, data).then((response) => {
          return response.data;
        }).catch((err) => { 
          return err.data;
        });
      }

      function _getNos() {
        return $http.get(urlCrud).then((response) => {
          return response.data;
        }).catch((err) => {
          return err.data;
        });
      }

      function _getInfoNos() {
        return $http.get(urlInfo).then((response) => {
          return response.data;
        }).catch((err) => {
          return err.data;
        });
      }

      return {
        registerNo: _registerNo, 
        getNos: _getNos,
        getInfoNos: _getInfoNos
      };
    }
})();