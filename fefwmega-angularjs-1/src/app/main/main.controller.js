(function () {
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

    vm.FrontEndFrameworksMemoryGame = FrontEndFrameworksMemoryGame;
    vm.game = FrontEndFrameworksMemoryGame.newGame();

    vm.cardPictures = ["angularjs.png",
      "clojurescript.png",
      "css.png",
      "elm.png",
      "html.png",
      "javascript.png",
      "polymer.png",
      "react.png"];
    vm.getCardPicture = function (cardValue) {
      return "assets/images/logos/" + vm.cardPictures[cardValue];
    };

    console.log("new game" + JSON.stringify(vm.game));
    vm.flipTile = function (game, line, column) {
      console.log("[angularjs-1] flipTile: before (game=" + JSON.stringify(game) + ')');
      vm.game = FrontEndFrameworksMemoryGame.flipTile(game, line, column);
      console.log("[angularjs-1] flipTile: after=" + JSON.stringify(vm.game));
    };

    vm.cardStyle = {
      "max-height": "calc(25vh - 16px)",
      "max-width": "calc(25vh - 16px)",
      height: "25vw",
      width: "25vw"
    };

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function () {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function (awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
