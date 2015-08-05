// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__26801_SHARP_,p2__26802_SHARP_){
var and__16431__auto__ = p1__26801_SHARP_;
if(cljs.core.truth_(and__16431__auto__)){
return p2__26802_SHARP_;
} else {
return and__16431__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16443__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16443__auto__){
return or__16443__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16443__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16443__auto__){
return or__16443__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16443__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17341__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17341__auto__,method_table__17337__auto__,prefer_table__17338__auto__,method_cache__17339__auto__,cached_hierarchy__17340__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26803){
var map__26804 = p__26803;
var map__26804__$1 = ((((!((map__26804 == null)))?((((map__26804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26804):map__26804);
var file = cljs.core.get.call(null,map__26804__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26806){
var map__26807 = p__26806;
var map__26807__$1 = ((((!((map__26807 == null)))?((((map__26807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26807):map__26807);
var namespace = cljs.core.get.call(null,map__26807__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17341__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17341__auto__,method_table__17337__auto__,prefer_table__17338__auto__,method_cache__17339__auto__,cached_hierarchy__17340__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26809){if((e26809 instanceof Error)){
var e = e26809;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26809;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args26810 = [];
var len__17482__auto___26813 = arguments.length;
var i__17483__auto___26814 = (0);
while(true){
if((i__17483__auto___26814 < len__17482__auto___26813)){
args26810.push((arguments[i__17483__auto___26814]));

var G__26815 = (i__17483__auto___26814 + (1));
i__17483__auto___26814 = G__26815;
continue;
} else {
}
break;
}

var G__26812 = args26810.length;
switch (G__26812) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26810.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26817,callback){
var map__26820 = p__26817;
var map__26820__$1 = ((((!((map__26820 == null)))?((((map__26820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26820):map__26820);
var file_msg = map__26820__$1;
var request_url = cljs.core.get.call(null,map__26820__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26820,map__26820__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26820,map__26820__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26822){
var map__26825 = p__26822;
var map__26825__$1 = ((((!((map__26825 == null)))?((((map__26825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26825):map__26825);
var file_msg = map__26825__$1;
var namespace = cljs.core.get.call(null,map__26825__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__26825__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16443__auto__ = meta_data;
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16431__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16431__auto__){
var or__16443__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
var or__16443__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16443__auto____$1)){
return or__16443__auto____$1;
} else {
var and__16431__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16431__auto____$1){
var or__16443__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16443__auto____$2){
return or__16443__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16431__auto____$1;
}
}
}
} else {
return and__16431__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26827,callback){
var map__26830 = p__26827;
var map__26830__$1 = ((((!((map__26830 == null)))?((((map__26830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26830):map__26830);
var file_msg = map__26830__$1;
var request_url = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26830__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20627__auto___26918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___26918,out){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___26918,out){
return (function (state_26900){
var state_val_26901 = (state_26900[(1)]);
if((state_val_26901 === (1))){
var inst_26878 = cljs.core.nth.call(null,files,(0),null);
var inst_26879 = cljs.core.nthnext.call(null,files,(1));
var inst_26880 = files;
var state_26900__$1 = (function (){var statearr_26902 = state_26900;
(statearr_26902[(7)] = inst_26879);

(statearr_26902[(8)] = inst_26878);

(statearr_26902[(9)] = inst_26880);

return statearr_26902;
})();
var statearr_26903_26919 = state_26900__$1;
(statearr_26903_26919[(2)] = null);

(statearr_26903_26919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (2))){
var inst_26883 = (state_26900[(10)]);
var inst_26880 = (state_26900[(9)]);
var inst_26883__$1 = cljs.core.nth.call(null,inst_26880,(0),null);
var inst_26884 = cljs.core.nthnext.call(null,inst_26880,(1));
var inst_26885 = (inst_26883__$1 == null);
var inst_26886 = cljs.core.not.call(null,inst_26885);
var state_26900__$1 = (function (){var statearr_26904 = state_26900;
(statearr_26904[(10)] = inst_26883__$1);

(statearr_26904[(11)] = inst_26884);

return statearr_26904;
})();
if(inst_26886){
var statearr_26905_26920 = state_26900__$1;
(statearr_26905_26920[(1)] = (4));

} else {
var statearr_26906_26921 = state_26900__$1;
(statearr_26906_26921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (3))){
var inst_26898 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26900__$1,inst_26898);
} else {
if((state_val_26901 === (4))){
var inst_26883 = (state_26900[(10)]);
var inst_26888 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26883);
var state_26900__$1 = state_26900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26900__$1,(7),inst_26888);
} else {
if((state_val_26901 === (5))){
var inst_26894 = cljs.core.async.close_BANG_.call(null,out);
var state_26900__$1 = state_26900;
var statearr_26907_26922 = state_26900__$1;
(statearr_26907_26922[(2)] = inst_26894);

(statearr_26907_26922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (6))){
var inst_26896 = (state_26900[(2)]);
var state_26900__$1 = state_26900;
var statearr_26908_26923 = state_26900__$1;
(statearr_26908_26923[(2)] = inst_26896);

(statearr_26908_26923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26901 === (7))){
var inst_26884 = (state_26900[(11)]);
var inst_26890 = (state_26900[(2)]);
var inst_26891 = cljs.core.async.put_BANG_.call(null,out,inst_26890);
var inst_26880 = inst_26884;
var state_26900__$1 = (function (){var statearr_26909 = state_26900;
(statearr_26909[(12)] = inst_26891);

(statearr_26909[(9)] = inst_26880);

return statearr_26909;
})();
var statearr_26910_26924 = state_26900__$1;
(statearr_26910_26924[(2)] = null);

(statearr_26910_26924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20627__auto___26918,out))
;
return ((function (switch__20562__auto__,c__20627__auto___26918,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto____0 = (function (){
var statearr_26914 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26914[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto__);

(statearr_26914[(1)] = (1));

return statearr_26914;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto____1 = (function (state_26900){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_26900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e26915){if((e26915 instanceof Object)){
var ex__20566__auto__ = e26915;
var statearr_26916_26925 = state_26900;
(statearr_26916_26925[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26926 = state_26900;
state_26900 = G__26926;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto__ = function(state_26900){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto____1.call(this,state_26900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___26918,out))
})();
var state__20629__auto__ = (function (){var statearr_26917 = f__20628__auto__.call(null);
(statearr_26917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___26918);

return statearr_26917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___26918,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__26927,p__26928){
var map__26933 = p__26927;
var map__26933__$1 = ((((!((map__26933 == null)))?((((map__26933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26933):map__26933);
var opts = map__26933__$1;
var url_rewriter = cljs.core.get.call(null,map__26933__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__26934 = p__26928;
var map__26934__$1 = ((((!((map__26934 == null)))?((((map__26934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26934):map__26934);
var file_msg = map__26934__$1;
var file = cljs.core.get.call(null,map__26934__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26937,opts){
var map__26941 = p__26937;
var map__26941__$1 = ((((!((map__26941 == null)))?((((map__26941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26941):map__26941);
var eval_body__$1 = cljs.core.get.call(null,map__26941__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16431__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16431__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16431__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26943){var e = e26943;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26948,p__26949){
var map__27177 = p__26948;
var map__27177__$1 = ((((!((map__27177 == null)))?((((map__27177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27177):map__27177);
var opts = map__27177__$1;
var before_jsload = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__27177__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__27178 = p__26949;
var map__27178__$1 = ((((!((map__27178 == null)))?((((map__27178.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27178.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27178):map__27178);
var msg = map__27178__$1;
var files = cljs.core.get.call(null,map__27178__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function (state_27319){
var state_val_27320 = (state_27319[(1)]);
if((state_val_27320 === (7))){
var inst_27192 = (state_27319[(7)]);
var inst_27195 = (state_27319[(8)]);
var inst_27193 = (state_27319[(9)]);
var inst_27194 = (state_27319[(10)]);
var inst_27200 = cljs.core._nth.call(null,inst_27193,inst_27195);
var inst_27201 = figwheel.client.file_reloading.eval_body.call(null,inst_27200,opts);
var inst_27202 = (inst_27195 + (1));
var tmp27321 = inst_27192;
var tmp27322 = inst_27193;
var tmp27323 = inst_27194;
var inst_27192__$1 = tmp27321;
var inst_27193__$1 = tmp27322;
var inst_27194__$1 = tmp27323;
var inst_27195__$1 = inst_27202;
var state_27319__$1 = (function (){var statearr_27324 = state_27319;
(statearr_27324[(7)] = inst_27192__$1);

(statearr_27324[(8)] = inst_27195__$1);

(statearr_27324[(9)] = inst_27193__$1);

(statearr_27324[(10)] = inst_27194__$1);

(statearr_27324[(11)] = inst_27201);

return statearr_27324;
})();
var statearr_27325_27404 = state_27319__$1;
(statearr_27325_27404[(2)] = null);

(statearr_27325_27404[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (20))){
var inst_27237 = (state_27319[(12)]);
var inst_27238 = (state_27319[(13)]);
var inst_27241 = (state_27319[(14)]);
var inst_27244 = (state_27319[(15)]);
var inst_27242 = (state_27319[(16)]);
var inst_27247 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27249 = (function (){var all_files = inst_27237;
var files_SINGLEQUOTE_ = inst_27238;
var res_SINGLEQUOTE_ = inst_27241;
var res = inst_27242;
var files_not_loaded = inst_27244;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27247,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function (p__27248){
var map__27326 = p__27248;
var map__27326__$1 = ((((!((map__27326 == null)))?((((map__27326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27326):map__27326);
var namespace = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27247,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
})();
var inst_27250 = cljs.core.map.call(null,inst_27249,inst_27242);
var inst_27251 = cljs.core.pr_str.call(null,inst_27250);
var inst_27252 = figwheel.client.utils.log.call(null,inst_27251);
var inst_27253 = (function (){var all_files = inst_27237;
var files_SINGLEQUOTE_ = inst_27238;
var res_SINGLEQUOTE_ = inst_27241;
var res = inst_27242;
var files_not_loaded = inst_27244;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27247,inst_27249,inst_27250,inst_27251,inst_27252,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27247,inst_27249,inst_27250,inst_27251,inst_27252,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
})();
var inst_27254 = setTimeout(inst_27253,(10));
var state_27319__$1 = (function (){var statearr_27328 = state_27319;
(statearr_27328[(17)] = inst_27252);

(statearr_27328[(18)] = inst_27247);

return statearr_27328;
})();
var statearr_27329_27405 = state_27319__$1;
(statearr_27329_27405[(2)] = inst_27254);

(statearr_27329_27405[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (27))){
var state_27319__$1 = state_27319;
var statearr_27330_27406 = state_27319__$1;
(statearr_27330_27406[(2)] = false);

(statearr_27330_27406[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (1))){
var inst_27184 = (state_27319[(19)]);
var inst_27181 = before_jsload.call(null,files);
var inst_27182 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27183 = (function (){return ((function (inst_27184,inst_27181,inst_27182,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function (p1__26944_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26944_SHARP_);
});
;})(inst_27184,inst_27181,inst_27182,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
})();
var inst_27184__$1 = cljs.core.filter.call(null,inst_27183,files);
var inst_27185 = cljs.core.not_empty.call(null,inst_27184__$1);
var state_27319__$1 = (function (){var statearr_27331 = state_27319;
(statearr_27331[(20)] = inst_27182);

(statearr_27331[(19)] = inst_27184__$1);

(statearr_27331[(21)] = inst_27181);

return statearr_27331;
})();
if(cljs.core.truth_(inst_27185)){
var statearr_27332_27407 = state_27319__$1;
(statearr_27332_27407[(1)] = (2));

} else {
var statearr_27333_27408 = state_27319__$1;
(statearr_27333_27408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (24))){
var state_27319__$1 = state_27319;
var statearr_27334_27409 = state_27319__$1;
(statearr_27334_27409[(2)] = null);

(statearr_27334_27409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (39))){
var state_27319__$1 = state_27319;
var statearr_27335_27410 = state_27319__$1;
(statearr_27335_27410[(2)] = null);

(statearr_27335_27410[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (4))){
var inst_27229 = (state_27319[(2)]);
var inst_27230 = (function (){return ((function (inst_27229,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function (p1__26945_SHARP_){
var and__16431__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26945_SHARP_);
if(cljs.core.truth_(and__16431__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26945_SHARP_));
} else {
return and__16431__auto__;
}
});
;})(inst_27229,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
})();
var inst_27231 = cljs.core.filter.call(null,inst_27230,files);
var state_27319__$1 = (function (){var statearr_27336 = state_27319;
(statearr_27336[(22)] = inst_27231);

(statearr_27336[(23)] = inst_27229);

return statearr_27336;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27337_27411 = state_27319__$1;
(statearr_27337_27411[(1)] = (16));

} else {
var statearr_27338_27412 = state_27319__$1;
(statearr_27338_27412[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (15))){
var inst_27219 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27339_27413 = state_27319__$1;
(statearr_27339_27413[(2)] = inst_27219);

(statearr_27339_27413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (21))){
var state_27319__$1 = state_27319;
var statearr_27340_27414 = state_27319__$1;
(statearr_27340_27414[(2)] = null);

(statearr_27340_27414[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (31))){
var inst_27276 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27341_27415 = state_27319__$1;
(statearr_27341_27415[(2)] = inst_27276);

(statearr_27341_27415[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (32))){
var inst_27264 = (state_27319[(24)]);
var inst_27281 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27264);
var state_27319__$1 = state_27319;
var statearr_27342_27416 = state_27319__$1;
(statearr_27342_27416[(2)] = inst_27281);

(statearr_27342_27416[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (40))){
var inst_27287 = (state_27319[(25)]);
var inst_27305 = (state_27319[(2)]);
var inst_27306 = cljs.core.not_empty.call(null,inst_27287);
var state_27319__$1 = (function (){var statearr_27343 = state_27319;
(statearr_27343[(26)] = inst_27305);

return statearr_27343;
})();
if(cljs.core.truth_(inst_27306)){
var statearr_27344_27417 = state_27319__$1;
(statearr_27344_27417[(1)] = (41));

} else {
var statearr_27345_27418 = state_27319__$1;
(statearr_27345_27418[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (33))){
var inst_27264 = (state_27319[(24)]);
var state_27319__$1 = state_27319;
var statearr_27346_27419 = state_27319__$1;
(statearr_27346_27419[(2)] = inst_27264);

(statearr_27346_27419[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (13))){
var inst_27205 = (state_27319[(27)]);
var inst_27209 = cljs.core.chunk_first.call(null,inst_27205);
var inst_27210 = cljs.core.chunk_rest.call(null,inst_27205);
var inst_27211 = cljs.core.count.call(null,inst_27209);
var inst_27192 = inst_27210;
var inst_27193 = inst_27209;
var inst_27194 = inst_27211;
var inst_27195 = (0);
var state_27319__$1 = (function (){var statearr_27347 = state_27319;
(statearr_27347[(7)] = inst_27192);

(statearr_27347[(8)] = inst_27195);

(statearr_27347[(9)] = inst_27193);

(statearr_27347[(10)] = inst_27194);

return statearr_27347;
})();
var statearr_27348_27420 = state_27319__$1;
(statearr_27348_27420[(2)] = null);

(statearr_27348_27420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (22))){
var inst_27244 = (state_27319[(15)]);
var inst_27257 = (state_27319[(2)]);
var inst_27258 = cljs.core.not_empty.call(null,inst_27244);
var state_27319__$1 = (function (){var statearr_27349 = state_27319;
(statearr_27349[(28)] = inst_27257);

return statearr_27349;
})();
if(cljs.core.truth_(inst_27258)){
var statearr_27350_27421 = state_27319__$1;
(statearr_27350_27421[(1)] = (23));

} else {
var statearr_27351_27422 = state_27319__$1;
(statearr_27351_27422[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (36))){
var state_27319__$1 = state_27319;
var statearr_27352_27423 = state_27319__$1;
(statearr_27352_27423[(2)] = null);

(statearr_27352_27423[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (41))){
var inst_27287 = (state_27319[(25)]);
var inst_27308 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27287);
var inst_27309 = cljs.core.pr_str.call(null,inst_27308);
var inst_27310 = [cljs.core.str("not required: "),cljs.core.str(inst_27309)].join('');
var inst_27311 = figwheel.client.utils.log.call(null,inst_27310);
var state_27319__$1 = state_27319;
var statearr_27353_27424 = state_27319__$1;
(statearr_27353_27424[(2)] = inst_27311);

(statearr_27353_27424[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (43))){
var inst_27314 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27354_27425 = state_27319__$1;
(statearr_27354_27425[(2)] = inst_27314);

(statearr_27354_27425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (29))){
var state_27319__$1 = state_27319;
var statearr_27355_27426 = state_27319__$1;
(statearr_27355_27426[(2)] = true);

(statearr_27355_27426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (6))){
var inst_27226 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27356_27427 = state_27319__$1;
(statearr_27356_27427[(2)] = inst_27226);

(statearr_27356_27427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (28))){
var inst_27279 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
if(cljs.core.truth_(inst_27279)){
var statearr_27357_27428 = state_27319__$1;
(statearr_27357_27428[(1)] = (32));

} else {
var statearr_27358_27429 = state_27319__$1;
(statearr_27358_27429[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (25))){
var inst_27317 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27319__$1,inst_27317);
} else {
if((state_val_27320 === (34))){
var inst_27285 = (state_27319[(29)]);
var inst_27284 = (state_27319[(2)]);
var inst_27285__$1 = cljs.core.get.call(null,inst_27284,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27286 = cljs.core.get.call(null,inst_27284,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27287 = cljs.core.get.call(null,inst_27284,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27288 = cljs.core.not_empty.call(null,inst_27285__$1);
var state_27319__$1 = (function (){var statearr_27359 = state_27319;
(statearr_27359[(29)] = inst_27285__$1);

(statearr_27359[(25)] = inst_27287);

(statearr_27359[(30)] = inst_27286);

return statearr_27359;
})();
if(cljs.core.truth_(inst_27288)){
var statearr_27360_27430 = state_27319__$1;
(statearr_27360_27430[(1)] = (35));

} else {
var statearr_27361_27431 = state_27319__$1;
(statearr_27361_27431[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (17))){
var inst_27231 = (state_27319[(22)]);
var state_27319__$1 = state_27319;
var statearr_27362_27432 = state_27319__$1;
(statearr_27362_27432[(2)] = inst_27231);

(statearr_27362_27432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (3))){
var state_27319__$1 = state_27319;
var statearr_27363_27433 = state_27319__$1;
(statearr_27363_27433[(2)] = null);

(statearr_27363_27433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (12))){
var inst_27222 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27364_27434 = state_27319__$1;
(statearr_27364_27434[(2)] = inst_27222);

(statearr_27364_27434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (2))){
var inst_27184 = (state_27319[(19)]);
var inst_27191 = cljs.core.seq.call(null,inst_27184);
var inst_27192 = inst_27191;
var inst_27193 = null;
var inst_27194 = (0);
var inst_27195 = (0);
var state_27319__$1 = (function (){var statearr_27365 = state_27319;
(statearr_27365[(7)] = inst_27192);

(statearr_27365[(8)] = inst_27195);

(statearr_27365[(9)] = inst_27193);

(statearr_27365[(10)] = inst_27194);

return statearr_27365;
})();
var statearr_27366_27435 = state_27319__$1;
(statearr_27366_27435[(2)] = null);

(statearr_27366_27435[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (23))){
var inst_27264 = (state_27319[(24)]);
var inst_27237 = (state_27319[(12)]);
var inst_27238 = (state_27319[(13)]);
var inst_27241 = (state_27319[(14)]);
var inst_27244 = (state_27319[(15)]);
var inst_27242 = (state_27319[(16)]);
var inst_27260 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27263 = (function (){var all_files = inst_27237;
var files_SINGLEQUOTE_ = inst_27238;
var res_SINGLEQUOTE_ = inst_27241;
var res = inst_27242;
var files_not_loaded = inst_27244;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27264,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27260,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function (p__27262){
var map__27367 = p__27262;
var map__27367__$1 = ((((!((map__27367 == null)))?((((map__27367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27367):map__27367);
var meta_data = cljs.core.get.call(null,map__27367__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27264,inst_27237,inst_27238,inst_27241,inst_27244,inst_27242,inst_27260,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
})();
var inst_27264__$1 = cljs.core.group_by.call(null,inst_27263,inst_27244);
var inst_27266 = (inst_27264__$1 == null);
var inst_27267 = cljs.core.not.call(null,inst_27266);
var state_27319__$1 = (function (){var statearr_27369 = state_27319;
(statearr_27369[(24)] = inst_27264__$1);

(statearr_27369[(31)] = inst_27260);

return statearr_27369;
})();
if(inst_27267){
var statearr_27370_27436 = state_27319__$1;
(statearr_27370_27436[(1)] = (26));

} else {
var statearr_27371_27437 = state_27319__$1;
(statearr_27371_27437[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (35))){
var inst_27285 = (state_27319[(29)]);
var inst_27290 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27285);
var inst_27291 = cljs.core.pr_str.call(null,inst_27290);
var inst_27292 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27291)].join('');
var inst_27293 = figwheel.client.utils.log.call(null,inst_27292);
var state_27319__$1 = state_27319;
var statearr_27372_27438 = state_27319__$1;
(statearr_27372_27438[(2)] = inst_27293);

(statearr_27372_27438[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (19))){
var inst_27237 = (state_27319[(12)]);
var inst_27238 = (state_27319[(13)]);
var inst_27241 = (state_27319[(14)]);
var inst_27242 = (state_27319[(16)]);
var inst_27241__$1 = (state_27319[(2)]);
var inst_27242__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27241__$1);
var inst_27243 = (function (){var all_files = inst_27237;
var files_SINGLEQUOTE_ = inst_27238;
var res_SINGLEQUOTE_ = inst_27241__$1;
var res = inst_27242__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27237,inst_27238,inst_27241,inst_27242,inst_27241__$1,inst_27242__$1,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function (p1__26947_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26947_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27237,inst_27238,inst_27241,inst_27242,inst_27241__$1,inst_27242__$1,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
})();
var inst_27244 = cljs.core.filter.call(null,inst_27243,inst_27241__$1);
var inst_27245 = cljs.core.not_empty.call(null,inst_27242__$1);
var state_27319__$1 = (function (){var statearr_27373 = state_27319;
(statearr_27373[(14)] = inst_27241__$1);

(statearr_27373[(15)] = inst_27244);

(statearr_27373[(16)] = inst_27242__$1);

return statearr_27373;
})();
if(cljs.core.truth_(inst_27245)){
var statearr_27374_27439 = state_27319__$1;
(statearr_27374_27439[(1)] = (20));

} else {
var statearr_27375_27440 = state_27319__$1;
(statearr_27375_27440[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (11))){
var state_27319__$1 = state_27319;
var statearr_27376_27441 = state_27319__$1;
(statearr_27376_27441[(2)] = null);

(statearr_27376_27441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (9))){
var inst_27224 = (state_27319[(2)]);
var state_27319__$1 = state_27319;
var statearr_27377_27442 = state_27319__$1;
(statearr_27377_27442[(2)] = inst_27224);

(statearr_27377_27442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (5))){
var inst_27195 = (state_27319[(8)]);
var inst_27194 = (state_27319[(10)]);
var inst_27197 = (inst_27195 < inst_27194);
var inst_27198 = inst_27197;
var state_27319__$1 = state_27319;
if(cljs.core.truth_(inst_27198)){
var statearr_27378_27443 = state_27319__$1;
(statearr_27378_27443[(1)] = (7));

} else {
var statearr_27379_27444 = state_27319__$1;
(statearr_27379_27444[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (14))){
var inst_27205 = (state_27319[(27)]);
var inst_27214 = cljs.core.first.call(null,inst_27205);
var inst_27215 = figwheel.client.file_reloading.eval_body.call(null,inst_27214,opts);
var inst_27216 = cljs.core.next.call(null,inst_27205);
var inst_27192 = inst_27216;
var inst_27193 = null;
var inst_27194 = (0);
var inst_27195 = (0);
var state_27319__$1 = (function (){var statearr_27380 = state_27319;
(statearr_27380[(7)] = inst_27192);

(statearr_27380[(8)] = inst_27195);

(statearr_27380[(9)] = inst_27193);

(statearr_27380[(32)] = inst_27215);

(statearr_27380[(10)] = inst_27194);

return statearr_27380;
})();
var statearr_27381_27445 = state_27319__$1;
(statearr_27381_27445[(2)] = null);

(statearr_27381_27445[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (26))){
var inst_27264 = (state_27319[(24)]);
var inst_27269 = inst_27264.cljs$lang$protocol_mask$partition0$;
var inst_27270 = (inst_27269 & (64));
var inst_27271 = inst_27264.cljs$core$ISeq$;
var inst_27272 = (inst_27270) || (inst_27271);
var state_27319__$1 = state_27319;
if(cljs.core.truth_(inst_27272)){
var statearr_27382_27446 = state_27319__$1;
(statearr_27382_27446[(1)] = (29));

} else {
var statearr_27383_27447 = state_27319__$1;
(statearr_27383_27447[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (16))){
var inst_27231 = (state_27319[(22)]);
var inst_27233 = (function (){var all_files = inst_27231;
return ((function (all_files,inst_27231,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function (p1__26946_SHARP_){
return cljs.core.update_in.call(null,p1__26946_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27231,state_val_27320,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
})();
var inst_27234 = cljs.core.map.call(null,inst_27233,inst_27231);
var state_27319__$1 = state_27319;
var statearr_27384_27448 = state_27319__$1;
(statearr_27384_27448[(2)] = inst_27234);

(statearr_27384_27448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (38))){
var inst_27286 = (state_27319[(30)]);
var inst_27299 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27286);
var inst_27300 = cljs.core.pr_str.call(null,inst_27299);
var inst_27301 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27300)].join('');
var inst_27302 = figwheel.client.utils.log.call(null,inst_27301);
var state_27319__$1 = state_27319;
var statearr_27385_27449 = state_27319__$1;
(statearr_27385_27449[(2)] = inst_27302);

(statearr_27385_27449[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (30))){
var state_27319__$1 = state_27319;
var statearr_27386_27450 = state_27319__$1;
(statearr_27386_27450[(2)] = false);

(statearr_27386_27450[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (10))){
var inst_27205 = (state_27319[(27)]);
var inst_27207 = cljs.core.chunked_seq_QMARK_.call(null,inst_27205);
var state_27319__$1 = state_27319;
if(inst_27207){
var statearr_27387_27451 = state_27319__$1;
(statearr_27387_27451[(1)] = (13));

} else {
var statearr_27388_27452 = state_27319__$1;
(statearr_27388_27452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (18))){
var inst_27237 = (state_27319[(12)]);
var inst_27238 = (state_27319[(13)]);
var inst_27237__$1 = (state_27319[(2)]);
var inst_27238__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27237__$1);
var inst_27239 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27238__$1);
var state_27319__$1 = (function (){var statearr_27389 = state_27319;
(statearr_27389[(12)] = inst_27237__$1);

(statearr_27389[(13)] = inst_27238__$1);

return statearr_27389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27319__$1,(19),inst_27239);
} else {
if((state_val_27320 === (42))){
var state_27319__$1 = state_27319;
var statearr_27390_27453 = state_27319__$1;
(statearr_27390_27453[(2)] = null);

(statearr_27390_27453[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (37))){
var inst_27286 = (state_27319[(30)]);
var inst_27296 = (state_27319[(2)]);
var inst_27297 = cljs.core.not_empty.call(null,inst_27286);
var state_27319__$1 = (function (){var statearr_27391 = state_27319;
(statearr_27391[(33)] = inst_27296);

return statearr_27391;
})();
if(cljs.core.truth_(inst_27297)){
var statearr_27392_27454 = state_27319__$1;
(statearr_27392_27454[(1)] = (38));

} else {
var statearr_27393_27455 = state_27319__$1;
(statearr_27393_27455[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27320 === (8))){
var inst_27192 = (state_27319[(7)]);
var inst_27205 = (state_27319[(27)]);
var inst_27205__$1 = cljs.core.seq.call(null,inst_27192);
var state_27319__$1 = (function (){var statearr_27394 = state_27319;
(statearr_27394[(27)] = inst_27205__$1);

return statearr_27394;
})();
if(inst_27205__$1){
var statearr_27395_27456 = state_27319__$1;
(statearr_27395_27456[(1)] = (10));

} else {
var statearr_27396_27457 = state_27319__$1;
(statearr_27396_27457[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
;
return ((function (switch__20562__auto__,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto____0 = (function (){
var statearr_27400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27400[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto__);

(statearr_27400[(1)] = (1));

return statearr_27400;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto____1 = (function (state_27319){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_27319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e27401){if((e27401 instanceof Object)){
var ex__20566__auto__ = e27401;
var statearr_27402_27458 = state_27319;
(statearr_27402_27458[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27459 = state_27319;
state_27319 = G__27459;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto__ = function(state_27319){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto____1.call(this,state_27319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
})();
var state__20629__auto__ = (function (){var statearr_27403 = f__20628__auto__.call(null);
(statearr_27403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_27403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__,map__27177,map__27177__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27178,map__27178__$1,msg,files))
);

return c__20627__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27462,link){
var map__27465 = p__27462;
var map__27465__$1 = ((((!((map__27465 == null)))?((((map__27465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27465):map__27465);
var file = cljs.core.get.call(null,map__27465__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__27465,map__27465__$1,file){
return (function (p1__27460_SHARP_,p2__27461_SHARP_){
if(cljs.core._EQ_.call(null,p1__27460_SHARP_,p2__27461_SHARP_)){
return p1__27460_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__27465,map__27465__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27471){
var map__27472 = p__27471;
var map__27472__$1 = ((((!((map__27472 == null)))?((((map__27472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27472):map__27472);
var match_length = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27472__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27467_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27467_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args27474 = [];
var len__17482__auto___27477 = arguments.length;
var i__17483__auto___27478 = (0);
while(true){
if((i__17483__auto___27478 < len__17482__auto___27477)){
args27474.push((arguments[i__17483__auto___27478]));

var G__27479 = (i__17483__auto___27478 + (1));
i__17483__auto___27478 = G__27479;
continue;
} else {
}
break;
}

var G__27476 = args27474.length;
switch (G__27476) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27474.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27481){
var map__27484 = p__27481;
var map__27484__$1 = ((((!((map__27484 == null)))?((((map__27484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27484):map__27484);
var f_data = map__27484__$1;
var file = cljs.core.get.call(null,map__27484__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__27484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16443__auto__ = request_url;
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27486,files_msg){
var map__27509 = p__27486;
var map__27509__$1 = ((((!((map__27509 == null)))?((((map__27509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27509):map__27509);
var opts = map__27509__$1;
var on_cssload = cljs.core.get.call(null,map__27509__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27511_27531 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27512_27532 = null;
var count__27513_27533 = (0);
var i__27514_27534 = (0);
while(true){
if((i__27514_27534 < count__27513_27533)){
var f_27535 = cljs.core._nth.call(null,chunk__27512_27532,i__27514_27534);
figwheel.client.file_reloading.reload_css_file.call(null,f_27535);

var G__27536 = seq__27511_27531;
var G__27537 = chunk__27512_27532;
var G__27538 = count__27513_27533;
var G__27539 = (i__27514_27534 + (1));
seq__27511_27531 = G__27536;
chunk__27512_27532 = G__27537;
count__27513_27533 = G__27538;
i__27514_27534 = G__27539;
continue;
} else {
var temp__4425__auto___27540 = cljs.core.seq.call(null,seq__27511_27531);
if(temp__4425__auto___27540){
var seq__27511_27541__$1 = temp__4425__auto___27540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27511_27541__$1)){
var c__17227__auto___27542 = cljs.core.chunk_first.call(null,seq__27511_27541__$1);
var G__27543 = cljs.core.chunk_rest.call(null,seq__27511_27541__$1);
var G__27544 = c__17227__auto___27542;
var G__27545 = cljs.core.count.call(null,c__17227__auto___27542);
var G__27546 = (0);
seq__27511_27531 = G__27543;
chunk__27512_27532 = G__27544;
count__27513_27533 = G__27545;
i__27514_27534 = G__27546;
continue;
} else {
var f_27547 = cljs.core.first.call(null,seq__27511_27541__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27547);

var G__27548 = cljs.core.next.call(null,seq__27511_27541__$1);
var G__27549 = null;
var G__27550 = (0);
var G__27551 = (0);
seq__27511_27531 = G__27548;
chunk__27512_27532 = G__27549;
count__27513_27533 = G__27550;
i__27514_27534 = G__27551;
continue;
}
} else {
}
}
break;
}

var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__,map__27509,map__27509__$1,opts,on_cssload){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__,map__27509,map__27509__$1,opts,on_cssload){
return (function (state_27521){
var state_val_27522 = (state_27521[(1)]);
if((state_val_27522 === (1))){
var inst_27515 = cljs.core.async.timeout.call(null,(100));
var state_27521__$1 = state_27521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27521__$1,(2),inst_27515);
} else {
if((state_val_27522 === (2))){
var inst_27517 = (state_27521[(2)]);
var inst_27518 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27519 = on_cssload.call(null,inst_27518);
var state_27521__$1 = (function (){var statearr_27523 = state_27521;
(statearr_27523[(7)] = inst_27517);

return statearr_27523;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27521__$1,inst_27519);
} else {
return null;
}
}
});})(c__20627__auto__,map__27509,map__27509__$1,opts,on_cssload))
;
return ((function (switch__20562__auto__,c__20627__auto__,map__27509,map__27509__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto____0 = (function (){
var statearr_27527 = [null,null,null,null,null,null,null,null];
(statearr_27527[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto__);

(statearr_27527[(1)] = (1));

return statearr_27527;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto____1 = (function (state_27521){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_27521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e27528){if((e27528 instanceof Object)){
var ex__20566__auto__ = e27528;
var statearr_27529_27552 = state_27521;
(statearr_27529_27552[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27553 = state_27521;
state_27521 = G__27553;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto__ = function(state_27521){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto____1.call(this,state_27521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__,map__27509,map__27509__$1,opts,on_cssload))
})();
var state__20629__auto__ = (function (){var statearr_27530 = f__20628__auto__.call(null);
(statearr_27530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_27530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__,map__27509,map__27509__$1,opts,on_cssload))
);

return c__20627__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1438815274572