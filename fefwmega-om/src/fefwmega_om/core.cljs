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
                       (into [:div.page-content]
                         (vector
                           (map-indexed
                             (fn [line-idx line]
                               (into [:div.mdl-grid.mdl-grid--no-spacing
                                      {:style {:display "table"
                                               :margin "0 auto"}}]
                                 (vector (map-indexed
                                           (fn [column-idx card]
                                             (let [top-padding "90px"
                                                   calc-height (fn [n-columns unit]
                                                                 (str (/ 100 n-columns) unit))
                                                   adjust-height (fn [n-lines]
                                                                   (str "calc(" (/ 100 n-lines) "vh - " (str (/ 64 n-lines)) "px)"))]
                                               [:div.mdl-typography--text-center
                                              {:style
                                               {:display :inline-block
                                                :max-height (adjust-height (count cards))
                                                :max-width  (adjust-height (count cards))
                                                :height     (calc-height (count cards) "vw")
                                                :width      (calc-height (count cards) "vw")}
                                               :on-click
                                               #(om/update! app-state [:game]
                                                 (let
                                                   [game (game/pick-card (-> app-state :game) line-idx column-idx)]
                                                   (println game)
                                                   game))}
                                              [:div (str (-> card :selected))]
                                              (let
                                                [src (str "images/logos/"
                                                       (get images (:value card)))]
                                                [:img {:style
                                                       {:height "100%"
                                                        :max-width "100%"}
                                                       :src
                                                       (if (or (-> card :flipped)
                                                               (-> card :picked))
                                                         src
                                                         "images/card-bg.png")}]
                                                )]))
                                           line))))
                             cards)))]]])))))
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

