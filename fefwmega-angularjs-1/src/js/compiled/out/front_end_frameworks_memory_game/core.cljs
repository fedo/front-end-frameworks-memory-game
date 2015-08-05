(ns ^:figwheel-always front-end-frameworks-memory-game.core
  (:require [front-end-frameworks-memory-game.game :refer [new-game flip-tile]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload

(def app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
