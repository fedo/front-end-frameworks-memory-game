// Compiled by ClojureScript 1.7.28 {}
goog.provide('front_end_frameworks_memory_game.test_runner');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('front_end_frameworks_memory_game.game_test');
goog.require('front_end_frameworks_memory_game.game_js_test');
cljs.core.enable_console_print_BANG_.call(null);
front_end_frameworks_memory_game.test_runner.run = (function front_end_frameworks_memory_game$test_runner$run(){
return cljs.test.run_block.call(null,(function (){var env24501 = cljs.test.empty_env.call(null);
var summary24502 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
cljs.test.set_env_BANG_.call(null,env24501);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"front-end-frameworks-memory-game.test-runner","front-end-frameworks-memory-game.test-runner",323119265,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__19524__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__19524__auto__,env24501,summary24502))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__19524__auto__,env24501,summary24502))
], null));
})());
});})(env24501,summary24502))
,((function (env24501,summary24502){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"front-end-frameworks-memory-game.test-runner","front-end-frameworks-memory-game.test-runner",323119265,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env24501,summary24502))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary24502,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary24502),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env24501,summary24502))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
cljs.test.set_env_BANG_.call(null,env24501);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-test","front-end-frameworks-memory-game.game-test",-1196093593,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__19524__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__19524__auto__,env24501,summary24502))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return front_end_frameworks_memory_game.game_test.get_picked_tiles_coordinates_test;},new cljs.core.Symbol("front-end-frameworks-memory-game.game-test","get-picked-tiles-coordinates-test","front-end-frameworks-memory-game.game-test/get-picked-tiles-coordinates-test",1131692446,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-test","front-end-frameworks-memory-game.game-test",-1196093593,null),new cljs.core.Symbol(null,"get-picked-tiles-coordinates-test","get-picked-tiles-coordinates-test",-451029255,null),"src/front_end_frameworks_memory_game/game_test.cljs",43,null,null,22,cljs.core.List.EMPTY,null,(cljs.core.truth_(front_end_frameworks_memory_game.game_test.get_picked_tiles_coordinates_test)?front_end_frameworks_memory_game.game_test.get_picked_tiles_coordinates_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return front_end_frameworks_memory_game.game_test.reset_picked_tiles_test;},new cljs.core.Symbol("front-end-frameworks-memory-game.game-test","reset-picked-tiles-test","front-end-frameworks-memory-game.game-test/reset-picked-tiles-test",-1996994749,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-test","front-end-frameworks-memory-game.game-test",-1196093593,null),new cljs.core.Symbol(null,"reset-picked-tiles-test","reset-picked-tiles-test",773895270,null),"src/front_end_frameworks_memory_game/game_test.cljs",33,null,null,31,cljs.core.List.EMPTY,null,(cljs.core.truth_(front_end_frameworks_memory_game.game_test.reset_picked_tiles_test)?front_end_frameworks_memory_game.game_test.reset_picked_tiles_test.cljs$lang$test:null)])),new cljs.core.Var(function(){return front_end_frameworks_memory_game.game_test.game_flow_1;},new cljs.core.Symbol("front-end-frameworks-memory-game.game-test","game-flow-1","front-end-frameworks-memory-game.game-test/game-flow-1",-420708033,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-test","front-end-frameworks-memory-game.game-test",-1196093593,null),new cljs.core.Symbol(null,"game-flow-1","game-flow-1",79961634,null),"src/front_end_frameworks_memory_game/game_test.cljs",21,null,null,41,cljs.core.List.EMPTY,null,(cljs.core.truth_(front_end_frameworks_memory_game.game_test.game_flow_1)?front_end_frameworks_memory_game.game_test.game_flow_1.cljs$lang$test:null)])),new cljs.core.Var(function(){return front_end_frameworks_memory_game.game_test.double_pick;},new cljs.core.Symbol("front-end-frameworks-memory-game.game-test","double-pick","front-end-frameworks-memory-game.game-test/double-pick",171162428,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-test","front-end-frameworks-memory-game.game-test",-1196093593,null),new cljs.core.Symbol(null,"double-pick","double-pick",-199611887,null),"src/front_end_frameworks_memory_game/game_test.cljs",21,null,null,47,cljs.core.List.EMPTY,null,(cljs.core.truth_(front_end_frameworks_memory_game.game_test.double_pick)?front_end_frameworks_memory_game.game_test.double_pick.cljs$lang$test:null)])),new cljs.core.Var(function(){return front_end_frameworks_memory_game.game_test.correct_flip;},new cljs.core.Symbol("front-end-frameworks-memory-game.game-test","correct-flip","front-end-frameworks-memory-game.game-test/correct-flip",47991833,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-test","front-end-frameworks-memory-game.game-test",-1196093593,null),new cljs.core.Symbol(null,"correct-flip","correct-flip",-521864442,null),"src/front_end_frameworks_memory_game/game_test.cljs",22,null,null,55,cljs.core.List.EMPTY,null,(cljs.core.truth_(front_end_frameworks_memory_game.game_test.correct_flip)?front_end_frameworks_memory_game.game_test.correct_flip.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__19524__auto__,env24501,summary24502))
], null));
})());
});})(env24501,summary24502))
,((function (env24501,summary24502){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-test","front-end-frameworks-memory-game.game-test",-1196093593,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env24501,summary24502))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary24502,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary24502),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env24501,summary24502))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
cljs.test.set_env_BANG_.call(null,env24501);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game","front-end-frameworks-memory-game.game",1198287371,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__19524__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__19524__auto__,env24501,summary24502))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__19524__auto__,env24501,summary24502))
], null));
})());
});})(env24501,summary24502))
,((function (env24501,summary24502){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game","front-end-frameworks-memory-game.game",1198287371,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env24501,summary24502))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary24502,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary24502),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env24501,summary24502))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
cljs.test.set_env_BANG_.call(null,env24501);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"front-end-frameworks-memory-game.core","front-end-frameworks-memory-game.core",-1175518637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__19524__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__19524__auto__,env24501,summary24502))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__19524__auto__,env24501,summary24502))
], null));
})());
});})(env24501,summary24502))
,((function (env24501,summary24502){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"front-end-frameworks-memory-game.core","front-end-frameworks-memory-game.core",-1175518637,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env24501,summary24502))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary24502,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary24502),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env24501,summary24502))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
cljs.test.set_env_BANG_.call(null,env24501);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-js-test","front-end-frameworks-memory-game.game-js-test",98905821,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__19524__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__19524__auto__,env24501,summary24502))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return front_end_frameworks_memory_game.game_js_test.new_game_js;},new cljs.core.Symbol("front-end-frameworks-memory-game.game-js-test","new-game-js","front-end-frameworks-memory-game.game-js-test/new-game-js",1412038636,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-js-test","front-end-frameworks-memory-game.game-js-test",98905821,null),new cljs.core.Symbol(null,"new-game-js","new-game-js",-1989412327,null),"src/front_end_frameworks_memory_game/game_js_test.cljs",21,null,null,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(front_end_frameworks_memory_game.game_js_test.new_game_js)?front_end_frameworks_memory_game.game_js_test.new_game_js.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__19524__auto__,env24501,summary24502){
return (function (){
if((env__19524__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__19524__auto__,env24501,summary24502))
], null));
})());
});})(env24501,summary24502))
,((function (env24501,summary24502){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.with_meta(new cljs.core.Symbol(null,"front-end-frameworks-memory-game.game-js-test","front-end-frameworks-memory-game.game-js-test",98905821,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175),true], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env24501,summary24502))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary24502,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary24502),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env24501,summary24502))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env24501,summary24502){
return (function (){
cljs.test.set_env_BANG_.call(null,env24501);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary24502));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary24502),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env24501,summary24502))
], null));
})());
});
goog.exportSymbol('front_end_frameworks_memory_game.test_runner.run', front_end_frameworks_memory_game.test_runner.run);

//# sourceMappingURL=test_runner.js.map?rel=1438815270984