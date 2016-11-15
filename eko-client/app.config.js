(function() {
  'use strict';

  angular
    .module('eko')
    .config(config);

    function config(gmLibraryProvider) {
      gmLibraryProvider.configure({
        language: 'pt'
      });
    }
})();
