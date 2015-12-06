(ns fefwmega-core.game)


(defn console-debug
  [& args]
  (.debug js/console (str "[cljs-memory-game] " (apply str args))))





(defn new-game
  ([]
   (new-game 4 4))
  ([lines columns]
   (let [n-cards (* lines columns)
         values (shuffle (concat (range (/ n-cards 2)) (range (/ n-cards 2))))]
     {:cards (doall (mapv (fn [line]
                            (mapv (fn [column]
                                    {:value (nth values (+ column (* line columns)))})
                              (range columns)))
                      (range lines)))})))


(defn get-picked-cards-coordinates
  [game]
  (reduce-kv (fn [picks line cards]
               (reduce-kv (fn [picks column card]
                            (if (:picked card)
                              (conj picks [line column])
                              picks)) picks cards)) [] (get game :cards)))


(defn cards-matching?
  [t1 t2]
  (= (:value t1) (:value t2)))


(defn pick-first-card
  [game [line column]]
  (do (console-debug "pick-first-card: card=[" line "," column "]")
      (assoc-in game [:cards line column :picked] true)))


(defn pick-second-card [game [line2 column2] [line1 column1]]
  (let [picked-card-1 (get-in game [:cards line1 column1])
        picked-card-2 (get-in game [:cards line2 column2])]
    (do (console-debug "pick-second-card: card=[" line2 "," column2 "]")
        (if (cards-matching? picked-card-1 picked-card-2)
          (do (console-debug "pick-second-card: cards matching")
              (-> game
                (update-in [:cards line1 column1] dissoc :picked)
                (assoc-in [:cards line1 column1 :flipped] true)
                (assoc-in [:cards line2 column2 :flipped] true)))

          (do (console-debug "pick-second-card: cards not matching")
              (-> game
                (assoc-in [:cards line2 column2 :picked] true)))))))


(defn reset-picked-cards
  [game picked]
  (reduce (fn [game [line column]]
            (console-debug (str "reset-picked-tiles: card=[" line "," column "]"))
            (update-in game [:cards line column] dissoc :picked)) game picked))


(defn pick-card
  [game line column]
  (console-debug (str "pick-card: card=[" line "," column "] game=" game))
  (let [card (get-in game [:cards line column])
        picked (get-picked-cards-coordinates game)
        _ (console-debug (str "pick-card: picked-cards=" picked))]
    (cond (:picked card)
          (do (console-debug "pick-card: card already picked, nop") game)

          (:flipped card)
          (do (console-debug "pick-card: card already flipped, nop") game)

          (every? nil? (map #(% card) [:picked :flipped]))
          (cond
            (= 0 (count picked))
            (pick-first-card game [line column])

            (= 1 (count picked))
            (pick-second-card game [line column] (first picked))

            (= 2 (count picked))
            (-> game
              (reset-picked-cards picked)
              (pick-first-card [line column]))

            :default
            (do (console-debug "pick-card: unhandled, nop") game))

          :default
          (do (console-debug "pick-card: unhandled, nop") game))))


(aset js/window "FrontEndFrameworksMemoryGame"
  #js{"newGame"  #(clj->js (new-game))
      "flipTile" #(clj->js (pick-card (js->clj %1 :keywordize-keys true) %2 %3))})


