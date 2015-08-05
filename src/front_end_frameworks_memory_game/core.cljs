(ns ^:figwheel-always front-end-frameworks-memory-game.core
  (:require))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(def app-state (atom {:text "Hello world!"}))


(defn new-game []
  {:cards [[{:value 1} {:value 1}]
           [{:value 0} {:value 0}]]})


(defn get-picked-tiles-coordinates
  [game]
  (reduce-kv (fn [picks line tiles]
               ;(println (str "line=" line ", tiles= " tiles))
               (reduce-kv (fn [picks column tile]
                            ;(println (str "column=" column ", tile= " tile))
                            (if (:picked tile)
                              (conj picks [line column])
                              picks)) picks tiles)) [] (get game :cards)))


(defn tiles-matching?
  [t1 t2]
  (= (:value t1) (:value t2)))


(defn pick-first
  [game [line row]]
  (do (println "first pick")
      (assoc-in game [:cards line row :picked] true)))

(defn pick-second [game [line2 row2] [line1 row1]]
  (let [first-picked-tile (get-in game [:cards line1 row1])
        second-picked-tile (get-in game [:cards line2 row2])]
    (do (println "second pick")
        (if (tiles-matching? first-picked-tile second-picked-tile)
              (do (println "tiles matching")
                  (-> game
                (update-in [:cards line1 row1] dissoc :picked)
                (assoc-in  [:cards line1 row1 :flipped] true)
                (assoc-in  [:cards line2 row2 :flipped] true)))

              (do (println "tiles not matching")
                (-> game
                (assoc-in [:cards line2 row2 :picked] true)))))))

(defn reset-picked-tiles
  [game picked]
  (reduce (fn [game [line column]]
            (println (str "reset-picked-tiles " line "," column))
            (update-in game [:cards line column] dissoc :picked)) game picked))

(defn flip-tile
  [game line row]
  (println (str "game=" game " flip " line "," row))
  (let [tile (get-in game [:cards line row])
        picked (get-picked-tiles-coordinates game)
        _ (println (str "Already picked: " picked))]
    (cond (:picked tile)
          (do (println "already picked, no op") game)

          (:flipped tile)
          (do (println "already flipped, no op") game)

          (every? nil? (map #(% tile) [:picked :flipped]))
          (cond
            (= 0 (count picked))
            (pick-first game [line row])

            (= 1 (count picked))
            (pick-second game [line row] (first picked))

            (= 2 (count picked))
            (-> game
              (reset-picked-tiles picked)
              (pick-first [line row]))

            :default
            (do (println "flip-tile unhandled, no op") game))

          :default
          (do (println "flip-tile unhandled, no op") game))))


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
               (flip-tile 0 1)))))
