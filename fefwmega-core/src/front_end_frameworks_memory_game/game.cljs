(ns front-end-frameworks-memory-game.game)


(defn console-debug
  [& args]
  (.debug js/console (str "[cljs-memory-game] " (apply str args))))


(defn new-game []
  {:cards [[{:value 1} {:value 1}]
           [{:value 0} {:value 0}]]})


(defn get-picked-tiles-coordinates
  [game]
  (reduce-kv (fn [picks line tiles]
               ;(console-debug (str "line=" line ", tiles= " tiles))
               (reduce-kv (fn [picks column tile]
                            ;(console-debug (str "column=" column ", tile= " tile))
                            (if (:picked tile)
                              (conj picks [line column])
                              picks)) picks tiles)) [] (get game :cards)))


(defn tiles-matching?
  [t1 t2]
  (= (:value t1) (:value t2)))


(defn pick-first
  [game [line column]]
  (do (console-debug "first pick")
      (assoc-in game [:cards line column :picked] true)))


(defn pick-second [game [line2 column2] [line1 column1]]
  (let [first-picked-tile (get-in game [:cards line1 column1])
        second-picked-tile (get-in game [:cards line2 column2])]
    (do (console-debug "second pick")
        (if (tiles-matching? first-picked-tile second-picked-tile)
          (do (console-debug "tiles matching")
              (-> game
                (update-in [:cards line1 column1] dissoc :picked)
                (assoc-in [:cards line1 column1 :flipped] true)
                (assoc-in [:cards line2 column2 :flipped] true)))

          (do (console-debug "tiles not matching")
              (-> game
                (assoc-in [:cards line2 column2 :picked] true)))))))


(defn reset-picked-tiles
  [game picked]
  (reduce (fn [game [line column]]
            (console-debug (str "reset-picked-tiles " line "," column))
            (update-in game [:cards line column] dissoc :picked)) game picked))


(defn flip-tile
  [game line column]
  (console-debug (str "flip-tile: game=" game " flip " line "," column))
  (let [tile (get-in game [:cards line column])
        picked (get-picked-tiles-coordinates game)
        _ (console-debug (str "Already picked: " picked))]
    (cond (:picked tile)
          (do (console-debug "already picked, no op") game)

          (:flipped tile)
          (do (console-debug "already flipped, no op") game)

          (every? nil? (map #(% tile) [:picked :flipped]))
          (cond
            (= 0 (count picked))
            (pick-first game [line column])

            (= 1 (count picked))
            (pick-second game [line column] (first picked))

            (= 2 (count picked))
            (-> game
              (reset-picked-tiles picked)
              (pick-first [line column]))

            :default
            (do (console-debug "flip-tile unhandled, no op") game))

          :default
          (do (console-debug "flip-tile unhandled, no op") game))))


(aset js/window "FrontEndFrameworksMemoryGame"
  #js{"newGame" #(clj->js (new-game))
      "flipTile" #(clj->js (flip-tile (js->clj %1 :keywordize-keys true) %2 %3))})


