goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../front_end_frameworks_memory_game/game.js", ['front_end_frameworks_memory_game.game'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../cljs/pprint.js", ['cljs.pprint'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer', 'clojure.string']);
goog.addDependency("../cljs/test.js", ['cljs.test'], ['cljs.core', 'cljs.pprint', 'clojure.string']);
goog.addDependency("../front_end_frameworks_memory_game/core.js", ['front_end_frameworks_memory_game.core'], ['cljs.core', 'front_end_frameworks_memory_game.game']);
goog.addDependency("../front_end_frameworks_memory_game/game_test.js", ['front_end_frameworks_memory_game.game_test'], ['cljs.core', 'front_end_frameworks_memory_game.game', 'cljs.test']);
goog.addDependency("../front_end_frameworks_memory_game/test_runner.js", ['front_end_frameworks_memory_game.test_runner'], ['front_end_frameworks_memory_game.game_test', 'cljs.core', 'cljs.test']);
