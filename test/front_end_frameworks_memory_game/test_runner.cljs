(ns ^:figwheel-always front-end-frameworks-memory-game.test-runner
  (:require [cljs.test :refer-macros [run-all-tests]]
            [front-end-frameworks-memory-game.game-test :as game-test]))

(enable-console-print!)

(defn ^:export run
  []
  (run-all-tests #"front-end-frameworks-memory-game.*"))