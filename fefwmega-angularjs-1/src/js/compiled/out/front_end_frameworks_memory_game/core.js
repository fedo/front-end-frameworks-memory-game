// Compiled by ClojureScript 1.7.28 {}
goog.provide('front_end_frameworks_memory_game.core');
goog.require('cljs.core');
goog.require('front_end_frameworks_memory_game.game');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
front_end_frameworks_memory_game.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
front_end_frameworks_memory_game.core.on_js_reload = (function front_end_frameworks_memory_game$core$on_js_reload(){
var game = front_end_frameworks_memory_game.game.new_game.call(null);
cljs.core.println.call(null,"### New Game game=",game);

return cljs.core.println.call(null,front_end_frameworks_memory_game.game.flip_tile.call(null,front_end_frameworks_memory_game.game.flip_tile.call(null,front_end_frameworks_memory_game.game.flip_tile.call(null,front_end_frameworks_memory_game.game.flip_tile.call(null,front_end_frameworks_memory_game.game.flip_tile.call(null,front_end_frameworks_memory_game.game.flip_tile.call(null,front_end_frameworks_memory_game.game.flip_tile.call(null,game,(0),(0)),(1),(0)),(0),(1)),(0),(0)),(0),(1)),(1),(1)),(1),(0)));
});
