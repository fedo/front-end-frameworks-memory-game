(ns ^:figwheel-always fefwmega-om.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [fefwmega-core.game :as game]
            [sablono.core :as sab :include-macros true]))

(enable-console-print!)

(def app-state (atom {:text "Hello world!"}))

(om/root
  (fn [data owner]
    (reify om/IRender
      (render [_]
        (println (game/new-game))
        (sab/html [:div.mdl-layout__container
                   [:div.mdl-layout.mdl-js-layout.mdl-layout--fixed-header
                    [:header.mdl-layout__header.is-casting-shadow
                     [:div.mdl-layout__header-row
                      [:span.mdl-layout-title "Front-End Frameworks Memory Game"]]]]]))))
  app-state
  {:target (. js/document (getElementById "app"))})


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )

