(ns ^:figwheel-load front-end-frameworks-memory-game.game-test
  (:require [cljs.test :refer-macros [deftest is]]
            [front-end-frameworks-memory-game.game :refer [new-game flip-tile]]))


(def game-1 {:cards [[{:value "A"}{:value "B"}{:value "B"}
                      {:value "A"}{:value "C"}{:value "C"}]]})


(deftest game-flow-1
  (is (= (flip-tile game-1 0 0)
        {:cards [[{:value "A" :picked true}{:value "B"}{:value "B"}
                  {:value "A"}{:value "C"}{:value "C"}]]})))


(deftest double-pick
  (is (= (-> game-1
           (flip-tile 0 0)
           (flip-tile 0 0))
        {:cards [[{:value "A" :picked true}{:value "B"}{:value "B"}
                  {:value "A"}{:value "C"}{:value "C"}]]})))

(deftest correct-flip
  (is (= (-> game-1
           (flip-tile 0 0)
           (flip-tile 1 0))
        {:cards [[{:value "A" :flipped true}{:value "B"}{:value "B"}
                  {:value "A" :flipped true}{:value "C"}{:value "C"}]]})))