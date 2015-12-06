(ns ^:figwheel-always fefwmega-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [fefwmega-core.game :as game]
            [sablono.core :as sab :include-macros true]))

(enable-console-print!)

(def app-state (atom {:text "Hello world!"
                      :game (game/new-game)}))

(def images
  ["angular.png" "browsersync.png" "gulp.png" "jasmine.png" "karma.png" "protractor.png"])


(om/root
  (fn [app-state owner]
    (reify om/IRender
      (render [_]
       (let [cards(-> app-state :game :cards)]
         (sab/html [:div.mdl-layout__container
                    [:div.mdl-layout.mdl-js-layout.mdl-layout--fixed-header
                     [:header.mdl-layout__header.is-casting-shadow
                      [:div.mdl-layout__header-row
                       [:span.mdl-layout-title "Front-End Frameworks Memory Game"]]]
                     [:div.mdl-layout__content
                      (into [:div.page-content]
                        (vector
                          (map-indexed
                            (fn [line-idx line]
                              (into [:div.mdl-grid.mdl-grid--no-spacing]
                                (vector (map-indexed
                                          (fn [column-idx card]
                                            [:div.mdl-typography--text-center
                                             {:style
                                                        {:height (str (/ 100 (count line)) "vw")
                                                         :width (str (/ 100 (count line)) "vw")}
                                              :on-click #(om/update! app-state [:game]
                                                          (let
                                                            [game (game/pick-card (-> app-state :game) line-idx column-idx)]
                                                            (println game)
                                                            game))}
                                             [:div (str (-> card :selected))]
                                             (let
                                               [src (str "images/"
                                                      (get images (:value card)))]
                                               [:img {:src (if (or (-> card :flipped)
                                                                   (-> card :picked))
                                                             src
                                                             "images/yeoman.png")}])])
                                          line))))
                            cards)))]]])) )))
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

