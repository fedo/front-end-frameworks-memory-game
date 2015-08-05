(ns front-end-frameworks-memory-game.game)


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
  [game [line column]]
  (do (println "first pick")
      (assoc-in game [:cards line column :picked] true)))

(defn pick-second [game [line2 column2] [line1 column1]]
  (let [first-picked-tile (get-in game [:cards line1 column1])
        second-picked-tile (get-in game [:cards line2 column2])]
    (do (println "second pick")
        (if (tiles-matching? first-picked-tile second-picked-tile)
          (do (println "tiles matching")
              (-> game
                (update-in [:cards line1 column1] dissoc :picked)
                (assoc-in [:cards line1 column1 :flipped] true)
                (assoc-in [:cards line2 column2 :flipped] true)))

          (do (println "tiles not matching")
              (-> game
                (assoc-in [:cards line2 column2 :picked] true)))))))

(defn reset-picked-tiles
  [game picked]
  (reduce (fn [game [line column]]
            (println (str "reset-picked-tiles " line "," column))
            (update-in game [:cards line column] dissoc :picked)) game picked))

(defn flip-tile
  [game line column]
  (println (str "flip-tile: game=" game " flip " line "," column))
  (let [tile (get-in game [:cards line column])
        picked (get-picked-tiles-coordinates game)
        _ (println (str "Already picked: " picked))]
    (cond (:picked tile)
          (do (println "already picked, no op") game)

          (:flipped tile)
          (do (println "already flipped, no op") game)

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
            (do (println "flip-tile unhandled, no op") game))

          :default
          (do (println "flip-tile unhandled, no op") game))))

(aset js/window "FrontEndFrameworksMemoryGame"
  #js{"newGame" #(clj->js (new-game))
      "flipTile" #(do (println %1)
                   (clj->js (flip-tile (js->clj %1 {:keywordize-keys true}) %2 %3)))})


