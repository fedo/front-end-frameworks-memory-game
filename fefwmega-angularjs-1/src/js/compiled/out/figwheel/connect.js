// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('front_end_frameworks_memory_game.test_runner');
goog.require('front_end_frameworks_memory_game.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__30473__delegate = function (x){
if(cljs.core.truth_(front_end_frameworks_memory_game.test_runner.run)){
return cljs.core.apply.call(null,front_end_frameworks_memory_game.test_runner.run,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'front-end-frameworks-memory-game.test-runner/run' is missing");
}
};
var G__30473 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__30474__i = 0, G__30474__a = new Array(arguments.length -  0);
while (G__30474__i < G__30474__a.length) {G__30474__a[G__30474__i] = arguments[G__30474__i + 0]; ++G__30474__i;}
  x = new cljs.core.IndexedSeq(G__30474__a,0);
} 
return G__30473__delegate.call(this,x);};
G__30473.cljs$lang$maxFixedArity = 0;
G__30473.cljs$lang$applyTo = (function (arglist__30475){
var x = cljs.core.seq(arglist__30475);
return G__30473__delegate(x);
});
G__30473.cljs$core$IFn$_invoke$arity$variadic = G__30473__delegate;
return G__30473;
})()
,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1438815276829