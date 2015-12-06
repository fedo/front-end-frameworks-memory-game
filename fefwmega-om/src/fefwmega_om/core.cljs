(ns ^:figwheel-always fefwmega-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [fefwmega-core.game :as game]
            [sablono.core :as sab :include-macros true]))

(enable-console-print!)

(def app-state (atom {:text "Hello world!"
                      :game (game/new-game)}))

(def images
  ["angularjs.png"
   "clojurescript.png"
   "css.png"
   "elm.png"
   "html.png"
   "javascript.png"
   "polymer.png"
   "react.png"])

(defn card-component
  [data owner]
  (reify
    om/IRender
    (render [_]
      (let [{:keys [column-idx card]} data]))))


(om/root
  (fn [app-state owner]
    (reify om/IRender
      (render [_]
        (let [cards (-> app-state :game :cards)]
          (sab/html [:div.mdl-layout__container
                     [:div.mdl-layout.mdl-js-layout.mdl-layout--fixed-header.mdl-layout__header--transparent
                      [:header.mdl-layout__header.mdl-layout__header--transparent
                       [:div.mdl-layout__header-row
                        [:span.mdl-layout-title.mdl-color-text--red "FEFWMEGA"]]]
                      [:div.mdl-layout__drawer-button
                       [:i.material-icons "menu"]]
                      [:div.mdl-layout__content
                       (into [:div.ffmg-page-content]
                         (vector
                           (map-indexed
                             (fn [line-idx line]
                               (into [:div.ffmg-deck-row]
                                 (vector (map-indexed
                                           (fn [column-idx card]
                                             (let [top-padding 64
                                                   calc-height (fn [n-columns unit]
                                                                 (str (/ 100 n-columns) unit))
                                                   adjust-height (fn [n-lines]
                                                                   (str "calc(" (/ 100 n-lines) "vh - " (str (/ top-padding n-lines)) "px)"))]
                                               [:div.ffmg-deck-cell
                                                {:style
                                                 {:max-height (adjust-height (count cards))
                                                  :max-width  (adjust-height (count cards))
                                                  :height     (calc-height (count cards) "vw")
                                                  :width      (calc-height (count cards) "vw")}
                                                 :on-click
                                                 #(om/update! app-state [:game]
                                                   (let
                                                     [game (game/pick-card (-> app-state :game) line-idx column-idx)]
                                                     (println game)
                                                     game))}
                                                (let
                                                  [show-back? (or (-> card :flipped)
                                                                  (-> card :picked))
                                                   src (str "images/logos/"
                                                         (get images (:value card)))]
                                                  [:div.ffmg-card-wrapper
                                                   [:div.ffmg-card
                                                    {:class (when show-back? "flipped")}
                                                    [:figure.ffmg-card--front
                                                     [:img {:src "images/card-bg.png"}]]
                                                    [:figure.ffmg-card--back
                                                     [:img {:src src}]]]])]))
                                           line))))
                             cards)))]]])))))
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

