// Compiled by ClojureScript 1.7.28 {}
goog.provide('front_end_frameworks_memory_game.game');
goog.require('cljs.core');
front_end_frameworks_memory_game.game.new_game = (function front_end_frameworks_memory_game$game$new_game(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null)], null)], null);
});
front_end_frameworks_memory_game.game.get_picked_tiles_coordinates = (function front_end_frameworks_memory_game$game$get_picked_tiles_coordinates(game){
return cljs.core.reduce_kv.call(null,(function (picks,line,tiles){
return cljs.core.reduce_kv.call(null,(function (picks__$1,column,tile){
if(cljs.core.truth_(new cljs.core.Keyword(null,"picked","picked",-1140535747).cljs$core$IFn$_invoke$arity$1(tile))){
return cljs.core.conj.call(null,picks__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null));
} else {
return picks__$1;
}
}),picks,tiles);
}),cljs.core.PersistentVector.EMPTY,cljs.core.get.call(null,game,new cljs.core.Keyword(null,"cards","cards",169174038)));
});
front_end_frameworks_memory_game.game.tiles_matching_QMARK_ = (function front_end_frameworks_memory_game$game$tiles_matching_QMARK_(t1,t2){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t1),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(t2));
});
front_end_frameworks_memory_game.game.pick_first = (function front_end_frameworks_memory_game$game$pick_first(game,p__6693){
var vec__6695 = p__6693;
var line = cljs.core.nth.call(null,vec__6695,(0),null);
var column = cljs.core.nth.call(null,vec__6695,(1),null);
cljs.core.println.call(null,"first pick");

return cljs.core.assoc_in.call(null,game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),line,column,new cljs.core.Keyword(null,"picked","picked",-1140535747)], null),true);
});
front_end_frameworks_memory_game.game.pick_second = (function front_end_frameworks_memory_game$game$pick_second(game,p__6696,p__6697){
var vec__6700 = p__6696;
var line2 = cljs.core.nth.call(null,vec__6700,(0),null);
var column2 = cljs.core.nth.call(null,vec__6700,(1),null);
var vec__6701 = p__6697;
var line1 = cljs.core.nth.call(null,vec__6701,(0),null);
var column1 = cljs.core.nth.call(null,vec__6701,(1),null);
var first_picked_tile = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),line1,column1], null));
var second_picked_tile = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),line2,column2], null));
cljs.core.println.call(null,"second pick");

if(cljs.core.truth_(front_end_frameworks_memory_game.game.tiles_matching_QMARK_.call(null,first_picked_tile,second_picked_tile))){
cljs.core.println.call(null,"tiles matching");

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),line1,column1], null),cljs.core.dissoc,new cljs.core.Keyword(null,"picked","picked",-1140535747)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),line1,column1,new cljs.core.Keyword(null,"flipped","flipped",567173306)], null),true),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),line2,column2,new cljs.core.Keyword(null,"flipped","flipped",567173306)], null),true);
} else {
cljs.core.println.call(null,"tiles not matching");

return cljs.core.assoc_in.call(null,game,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),line2,column2,new cljs.core.Keyword(null,"picked","picked",-1140535747)], null),true);
}
});
front_end_frameworks_memory_game.game.reset_picked_tiles = (function front_end_frameworks_memory_game$game$reset_picked_tiles(game,picked){
return cljs.core.reduce.call(null,(function (game__$1,p__6704){
var vec__6705 = p__6704;
var line = cljs.core.nth.call(null,vec__6705,(0),null);
var column = cljs.core.nth.call(null,vec__6705,(1),null);
cljs.core.println.call(null,[cljs.core.str("reset-picked-tiles "),cljs.core.str(line),cljs.core.str(","),cljs.core.str(column)].join(''));

return cljs.core.update_in.call(null,game__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),line,column], null),cljs.core.dissoc,new cljs.core.Keyword(null,"picked","picked",-1140535747));
}),game,picked);
});
front_end_frameworks_memory_game.game.flip_tile = (function front_end_frameworks_memory_game$game$flip_tile(game,line,column){
cljs.core.println.call(null,[cljs.core.str("flip-tile: game="),cljs.core.str(game),cljs.core.str(" flip "),cljs.core.str(line),cljs.core.str(","),cljs.core.str(column)].join(''));

var tile = cljs.core.get_in.call(null,game,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038),line,column], null));
var picked = front_end_frameworks_memory_game.game.get_picked_tiles_coordinates.call(null,game);
var _ = cljs.core.println.call(null,[cljs.core.str("Already picked: "),cljs.core.str(picked)].join(''));
if(cljs.core.truth_(new cljs.core.Keyword(null,"picked","picked",-1140535747).cljs$core$IFn$_invoke$arity$1(tile))){
cljs.core.println.call(null,"already picked, no op");

return game;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"flipped","flipped",567173306).cljs$core$IFn$_invoke$arity$1(tile))){
cljs.core.println.call(null,"already flipped, no op");

return game;
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (tile,picked,_){
return (function (p1__6706_SHARP_){
return p1__6706_SHARP_.call(null,tile);
});})(tile,picked,_))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"picked","picked",-1140535747),new cljs.core.Keyword(null,"flipped","flipped",567173306)], null)))){
if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,picked))){
return front_end_frameworks_memory_game.game.pick_first.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null));
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,picked))){
return front_end_frameworks_memory_game.game.pick_second.call(null,game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null),cljs.core.first.call(null,picked));
} else {
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,picked))){
return front_end_frameworks_memory_game.game.pick_first.call(null,front_end_frameworks_memory_game.game.reset_picked_tiles.call(null,game,picked),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column], null));
} else {
cljs.core.println.call(null,"flip-tile unhandled, no op");

return game;

}
}
}
} else {
cljs.core.println.call(null,"flip-tile unhandled, no op");

return game;

}
}
}
});
(window["FrontEndFrameworksMemoryGame"] = {"newGame": (function (){
return cljs.core.clj__GT_js.call(null,front_end_frameworks_memory_game.game.new_game.call(null));
}), "flipTile": (function (p1__6707_SHARP_,p2__6708_SHARP_,p3__6709_SHARP_){
cljs.core.println.call(null,p1__6707_SHARP_);

return cljs.core.clj__GT_js.call(null,front_end_frameworks_memory_game.game.flip_tile.call(null,cljs.core.js__GT_clj.call(null,p1__6707_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)),p2__6708_SHARP_,p3__6709_SHARP_));
})});
