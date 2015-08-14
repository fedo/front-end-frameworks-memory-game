(ns ^:figwheel-always fefwmega-core.test-runner
  (:require [cljs.test :refer-macros [run-all-tests]]
            [fefwmega-core.game-test :as game-test]
            [fefwmega-core.game-js-test :as game-js-test]))

(enable-console-print!)

(defn ^:export run
  []
  (run-all-tests #"fefwmega-core.*"))