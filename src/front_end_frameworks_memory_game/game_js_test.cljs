(ns ^:figwheel-load front-end-frameworks-memory-game.game-js-test
  (:require [cljs.test :refer-macros [deftest is]]
            [front-end-frameworks-memory-game.game :refer [new-game flip-tile reset-picked-tiles get-picked-tiles-coordinates]]))


(deftest new-game-js
  (is (= (js->clj (.newGame js/FrontEndFrameworksMemoryGame) :keywordize-keys true)
        (js->clj #js {:cards #js [#js [#js {:value 1} #js {:value 1}]
                                  #js [#js {:value 0} #js {:value 0}]]} :keywordize-keys true))))


