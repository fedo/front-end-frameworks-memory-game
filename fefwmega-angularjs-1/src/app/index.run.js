(function() {
  'use strict';

  angular
    .module('fefwmegaAngularjs1')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
