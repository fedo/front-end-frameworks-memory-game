(function() {
  'use strict';

  angular
    .module('fefwmegaAngularjs1')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1438799835762;
    vm.showToastr = showToastr;

    vm.FrontEndFrameworksMemoryGame = FrontEndFrameworksMemoryGame;
    vm.game = FrontEndFrameworksMemoryGame.newGame();
    console.log("new game" + JSON.stringify(vm.game));
    vm.flipTile = function(game, line, column){
      console.log("flip tile");
      vm.game = FrontEndFrameworksMemoryGame.flipTile(game, line, column);
      console.log("flipTile" + JSON.stringify(vm.game));
    };

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
