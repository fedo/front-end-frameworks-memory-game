(ns figwheel.connect (:require [front-end-frameworks-memory-game.test-runner] [front-end-frameworks-memory-game.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :on-jsload (fn [& x] (if js/front-end-frameworks-memory-game.test-runner.run (apply js/front-end-frameworks-memory-game.test-runner.run x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'front-end-frameworks-memory-game.test-runner/run' is missing"))), :websocket-url "ws://localhost:3449/figwheel-ws"})

