(ns ^:figwheel-load fefwmega-core.game-test
  (:require [cljs.test :refer-macros [deftest is]]
            [fefwmega-core.game :refer [new-game pick-card reset-picked-cards get-picked-cards-coordinates]]))


(def game-a {:cards [[{:value "A"} {:value "B"} {:value "B"}]
                     [{:value "A"} {:value "C"} {:value "C"}]]})


(def game-default {:cards [[{:value "A"} {:value "B"}]
                           [{:value "A"} {:value "B"}]]})


(def game-1-picked-tile {:cards [[{:value "A" :picked true} {:value "B"}]
                                  [{:value "A"} {:value "B"}]]})


(def game-2-picked-tiles {:cards [[{:value "A" :picked true} {:value "B" :picked true}]
                                   [{:value "A"} {:value "B"}]]})


(deftest get-picked-tiles-coordinates-test
  (is (= (get-picked-cards-coordinates game-default)
        []))
  (is (= (get-picked-cards-coordinates game-1-picked-tile)
        [[0 0]]))
  (is (= (get-picked-cards-coordinates game-2-picked-tiles)
        [[0 0] [0 1]])))


(deftest reset-picked-tiles-test
  (is (= (reset-picked-cards game-1-picked-tile [[0 0]])
        game-default))
  (is (= (reset-picked-cards game-2-picked-tiles [[0 0] [0 1]])
        game-default)))


;; game


(deftest game-flow-1
  (is (= (pick-card game-a 0 0)
        {:cards [[{:value "A" :picked true} {:value "B"} {:value "B"}]
                 [{:value "A"} {:value "C"} {:value "C"}]]})))


(deftest double-pick
  (is (= (-> game-a
           (pick-card 0 0)
           (pick-card 0 0))
        {:cards [[{:value "A" :picked true} {:value "B"} {:value "B"}]
                 [{:value "A"} {:value "C"} {:value "C"}]]})))


(deftest correct-flip
  (is (= (-> game-a
           (pick-card 0 0)
           (pick-card 1 0))
        {:cards [[{:value "A" :flipped true} {:value "B"} {:value "B"}]
                 [{:value "A" :flipped true} {:value "C"} {:value "C"}]]})))