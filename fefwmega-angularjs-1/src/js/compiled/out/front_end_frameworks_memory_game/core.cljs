(ns ^:figwheel-always front-end-frameworks-memory-game.core
  (:require [front-end-frameworks-memory-game.game :refer [new-game flip-tile]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(def app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (let [game (new-game)]
    (println "### New Game game=" game)
    (println (-> game
               (flip-tile 0 0)
               (flip-tile 1 0)
               (flip-tile 0 1)
               (flip-tile 0 0)
               (flip-tile 0 1)
               (flip-tile 1 1)
               (flip-tile 1 0)))))
