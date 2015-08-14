(ns ^:figwheel-load fefwmega-core.game-js-test
  (:require [cljs.test :refer-macros [deftest is]]
            [fefwmega-core.game :refer [new-game pick-card reset-picked-cards get-picked-cards-coordinates]]))


(deftest new-game-js
  (is (= (js->clj (.newGame js/FrontEndFrameworksMemoryGame) :keywordize-keys true)
        (js->clj #js {:cards #js [#js [#js {:value 1} #js {:value 1}]
                                  #js [#js {:value 0} #js {:value 0}]]} :keywordize-keys true))))


