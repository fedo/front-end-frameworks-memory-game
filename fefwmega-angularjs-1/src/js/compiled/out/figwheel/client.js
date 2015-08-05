// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25702__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25702 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25703__i = 0, G__25703__a = new Array(arguments.length -  0);
while (G__25703__i < G__25703__a.length) {G__25703__a[G__25703__i] = arguments[G__25703__i + 0]; ++G__25703__i;}
  args = new cljs.core.IndexedSeq(G__25703__a,0);
} 
return G__25702__delegate.call(this,args);};
G__25702.cljs$lang$maxFixedArity = 0;
G__25702.cljs$lang$applyTo = (function (arglist__25704){
var args = cljs.core.seq(arglist__25704);
return G__25702__delegate(args);
});
G__25702.cljs$core$IFn$_invoke$arity$variadic = G__25702__delegate;
return G__25702;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25705){
var map__25708 = p__25705;
var map__25708__$1 = ((((!((map__25708 == null)))?((((map__25708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25708):map__25708);
var message = cljs.core.get.call(null,map__25708__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25708__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16443__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16431__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16431__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16431__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20627__auto___25838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___25838,ch){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___25838,ch){
return (function (state_25812){
var state_val_25813 = (state_25812[(1)]);
if((state_val_25813 === (7))){
var inst_25808 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
var statearr_25814_25839 = state_25812__$1;
(statearr_25814_25839[(2)] = inst_25808);

(statearr_25814_25839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (1))){
var state_25812__$1 = state_25812;
var statearr_25815_25840 = state_25812__$1;
(statearr_25815_25840[(2)] = null);

(statearr_25815_25840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (4))){
var inst_25776 = (state_25812[(7)]);
var inst_25776__$1 = (state_25812[(2)]);
var state_25812__$1 = (function (){var statearr_25816 = state_25812;
(statearr_25816[(7)] = inst_25776__$1);

return statearr_25816;
})();
if(cljs.core.truth_(inst_25776__$1)){
var statearr_25817_25841 = state_25812__$1;
(statearr_25817_25841[(1)] = (5));

} else {
var statearr_25818_25842 = state_25812__$1;
(statearr_25818_25842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (13))){
var state_25812__$1 = state_25812;
var statearr_25819_25843 = state_25812__$1;
(statearr_25819_25843[(2)] = null);

(statearr_25819_25843[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (6))){
var state_25812__$1 = state_25812;
var statearr_25820_25844 = state_25812__$1;
(statearr_25820_25844[(2)] = null);

(statearr_25820_25844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (3))){
var inst_25810 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25812__$1,inst_25810);
} else {
if((state_val_25813 === (12))){
var inst_25783 = (state_25812[(8)]);
var inst_25796 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25783);
var inst_25797 = cljs.core.first.call(null,inst_25796);
var inst_25798 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25797);
var inst_25799 = console.warn("Figwheel: Not loading code with warnings - ",inst_25798);
var state_25812__$1 = state_25812;
var statearr_25821_25845 = state_25812__$1;
(statearr_25821_25845[(2)] = inst_25799);

(statearr_25821_25845[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (2))){
var state_25812__$1 = state_25812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25812__$1,(4),ch);
} else {
if((state_val_25813 === (11))){
var inst_25792 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
var statearr_25822_25846 = state_25812__$1;
(statearr_25822_25846[(2)] = inst_25792);

(statearr_25822_25846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (9))){
var inst_25782 = (state_25812[(9)]);
var inst_25794 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25782,opts);
var state_25812__$1 = state_25812;
if(cljs.core.truth_(inst_25794)){
var statearr_25823_25847 = state_25812__$1;
(statearr_25823_25847[(1)] = (12));

} else {
var statearr_25824_25848 = state_25812__$1;
(statearr_25824_25848[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (5))){
var inst_25776 = (state_25812[(7)]);
var inst_25782 = (state_25812[(9)]);
var inst_25778 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25779 = (new cljs.core.PersistentArrayMap(null,2,inst_25778,null));
var inst_25780 = (new cljs.core.PersistentHashSet(null,inst_25779,null));
var inst_25781 = figwheel.client.focus_msgs.call(null,inst_25780,inst_25776);
var inst_25782__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25781);
var inst_25783 = cljs.core.first.call(null,inst_25781);
var inst_25784 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25782__$1,opts);
var state_25812__$1 = (function (){var statearr_25825 = state_25812;
(statearr_25825[(8)] = inst_25783);

(statearr_25825[(9)] = inst_25782__$1);

return statearr_25825;
})();
if(cljs.core.truth_(inst_25784)){
var statearr_25826_25849 = state_25812__$1;
(statearr_25826_25849[(1)] = (8));

} else {
var statearr_25827_25850 = state_25812__$1;
(statearr_25827_25850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (14))){
var inst_25802 = (state_25812[(2)]);
var state_25812__$1 = state_25812;
var statearr_25828_25851 = state_25812__$1;
(statearr_25828_25851[(2)] = inst_25802);

(statearr_25828_25851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (10))){
var inst_25804 = (state_25812[(2)]);
var state_25812__$1 = (function (){var statearr_25829 = state_25812;
(statearr_25829[(10)] = inst_25804);

return statearr_25829;
})();
var statearr_25830_25852 = state_25812__$1;
(statearr_25830_25852[(2)] = null);

(statearr_25830_25852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25813 === (8))){
var inst_25783 = (state_25812[(8)]);
var inst_25786 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25787 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25783);
var inst_25788 = cljs.core.async.timeout.call(null,(1000));
var inst_25789 = [inst_25787,inst_25788];
var inst_25790 = (new cljs.core.PersistentVector(null,2,(5),inst_25786,inst_25789,null));
var state_25812__$1 = state_25812;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25812__$1,(11),inst_25790);
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
});})(c__20627__auto___25838,ch))
;
return ((function (switch__20562__auto__,c__20627__auto___25838,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20563__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20563__auto____0 = (function (){
var statearr_25834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25834[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20563__auto__);

(statearr_25834[(1)] = (1));

return statearr_25834;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20563__auto____1 = (function (state_25812){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_25812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e25835){if((e25835 instanceof Object)){
var ex__20566__auto__ = e25835;
var statearr_25836_25853 = state_25812;
(statearr_25836_25853[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25854 = state_25812;
state_25812 = G__25854;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20563__auto__ = function(state_25812){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20563__auto____1.call(this,state_25812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20563__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20563__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___25838,ch))
})();
var state__20629__auto__ = (function (){var statearr_25837 = f__20628__auto__.call(null);
(statearr_25837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___25838);

return statearr_25837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___25838,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25855_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25855_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_25862 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25862){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25860 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25861 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25860,_STAR_print_newline_STAR_25861,base_path_25862){
return (function() { 
var G__25863__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25864__i = 0, G__25864__a = new Array(arguments.length -  0);
while (G__25864__i < G__25864__a.length) {G__25864__a[G__25864__i] = arguments[G__25864__i + 0]; ++G__25864__i;}
  args = new cljs.core.IndexedSeq(G__25864__a,0);
} 
return G__25863__delegate.call(this,args);};
G__25863.cljs$lang$maxFixedArity = 0;
G__25863.cljs$lang$applyTo = (function (arglist__25865){
var args = cljs.core.seq(arglist__25865);
return G__25863__delegate(args);
});
G__25863.cljs$core$IFn$_invoke$arity$variadic = G__25863__delegate;
return G__25863;
})()
;})(_STAR_print_fn_STAR_25860,_STAR_print_newline_STAR_25861,base_path_25862))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25861;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25860;
}}catch (e25859){if((e25859 instanceof Error)){
var e = e25859;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25862], null));
} else {
var e = e25859;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25862))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25866){
var map__25873 = p__25866;
var map__25873__$1 = ((((!((map__25873 == null)))?((((map__25873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25873):map__25873);
var opts = map__25873__$1;
var build_id = cljs.core.get.call(null,map__25873__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25873,map__25873__$1,opts,build_id){
return (function (p__25875){
var vec__25876 = p__25875;
var map__25877 = cljs.core.nth.call(null,vec__25876,(0),null);
var map__25877__$1 = ((((!((map__25877 == null)))?((((map__25877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25877):map__25877);
var msg = map__25877__$1;
var msg_name = cljs.core.get.call(null,map__25877__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25876,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25876,map__25877,map__25877__$1,msg,msg_name,_,map__25873,map__25873__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25876,map__25877,map__25877__$1,msg,msg_name,_,map__25873,map__25873__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25873,map__25873__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25883){
var vec__25884 = p__25883;
var map__25885 = cljs.core.nth.call(null,vec__25884,(0),null);
var map__25885__$1 = ((((!((map__25885 == null)))?((((map__25885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25885):map__25885);
var msg = map__25885__$1;
var msg_name = cljs.core.get.call(null,map__25885__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25884,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25887){
var map__25897 = p__25887;
var map__25897__$1 = ((((!((map__25897 == null)))?((((map__25897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25897):map__25897);
var on_compile_warning = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25897__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25897,map__25897__$1,on_compile_warning,on_compile_fail){
return (function (p__25899){
var vec__25900 = p__25899;
var map__25901 = cljs.core.nth.call(null,vec__25900,(0),null);
var map__25901__$1 = ((((!((map__25901 == null)))?((((map__25901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25901):map__25901);
var msg = map__25901__$1;
var msg_name = cljs.core.get.call(null,map__25901__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25900,(1));
var pred__25903 = cljs.core._EQ_;
var expr__25904 = msg_name;
if(cljs.core.truth_(pred__25903.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25904))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25903.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25904))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25897,map__25897__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__,msg_hist,msg_names,msg){
return (function (state_26105){
var state_val_26106 = (state_26105[(1)]);
if((state_val_26106 === (7))){
var inst_26039 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26107_26148 = state_26105__$1;
(statearr_26107_26148[(2)] = inst_26039);

(statearr_26107_26148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (20))){
var inst_26067 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26067)){
var statearr_26108_26149 = state_26105__$1;
(statearr_26108_26149[(1)] = (22));

} else {
var statearr_26109_26150 = state_26105__$1;
(statearr_26109_26150[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (27))){
var inst_26079 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26080 = figwheel.client.heads_up.display_warning.call(null,inst_26079);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26105__$1,(30),inst_26080);
} else {
if((state_val_26106 === (1))){
var inst_26027 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26027)){
var statearr_26110_26151 = state_26105__$1;
(statearr_26110_26151[(1)] = (2));

} else {
var statearr_26111_26152 = state_26105__$1;
(statearr_26111_26152[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (24))){
var inst_26095 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26112_26153 = state_26105__$1;
(statearr_26112_26153[(2)] = inst_26095);

(statearr_26112_26153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (4))){
var inst_26103 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26105__$1,inst_26103);
} else {
if((state_val_26106 === (15))){
var inst_26055 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26056 = figwheel.client.format_messages.call(null,inst_26055);
var inst_26057 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26058 = figwheel.client.heads_up.display_error.call(null,inst_26056,inst_26057);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26105__$1,(18),inst_26058);
} else {
if((state_val_26106 === (21))){
var inst_26097 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26113_26154 = state_26105__$1;
(statearr_26113_26154[(2)] = inst_26097);

(statearr_26113_26154[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (31))){
var inst_26086 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26105__$1,(34),inst_26086);
} else {
if((state_val_26106 === (32))){
var state_26105__$1 = state_26105;
var statearr_26114_26155 = state_26105__$1;
(statearr_26114_26155[(2)] = null);

(statearr_26114_26155[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (33))){
var inst_26091 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26115_26156 = state_26105__$1;
(statearr_26115_26156[(2)] = inst_26091);

(statearr_26115_26156[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (13))){
var inst_26045 = (state_26105[(2)]);
var inst_26046 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26047 = figwheel.client.format_messages.call(null,inst_26046);
var inst_26048 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26049 = figwheel.client.heads_up.display_error.call(null,inst_26047,inst_26048);
var state_26105__$1 = (function (){var statearr_26116 = state_26105;
(statearr_26116[(7)] = inst_26045);

return statearr_26116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26105__$1,(14),inst_26049);
} else {
if((state_val_26106 === (22))){
var inst_26069 = figwheel.client.heads_up.clear.call(null);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26105__$1,(25),inst_26069);
} else {
if((state_val_26106 === (29))){
var inst_26093 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26117_26157 = state_26105__$1;
(statearr_26117_26157[(2)] = inst_26093);

(statearr_26117_26157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (6))){
var inst_26035 = figwheel.client.heads_up.clear.call(null);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26105__$1,(9),inst_26035);
} else {
if((state_val_26106 === (28))){
var inst_26084 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26084)){
var statearr_26118_26158 = state_26105__$1;
(statearr_26118_26158[(1)] = (31));

} else {
var statearr_26119_26159 = state_26105__$1;
(statearr_26119_26159[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (25))){
var inst_26071 = (state_26105[(2)]);
var inst_26072 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26073 = figwheel.client.heads_up.display_warning.call(null,inst_26072);
var state_26105__$1 = (function (){var statearr_26120 = state_26105;
(statearr_26120[(8)] = inst_26071);

return statearr_26120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26105__$1,(26),inst_26073);
} else {
if((state_val_26106 === (34))){
var inst_26088 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26121_26160 = state_26105__$1;
(statearr_26121_26160[(2)] = inst_26088);

(statearr_26121_26160[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (17))){
var inst_26099 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26122_26161 = state_26105__$1;
(statearr_26122_26161[(2)] = inst_26099);

(statearr_26122_26161[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (3))){
var inst_26041 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26041)){
var statearr_26123_26162 = state_26105__$1;
(statearr_26123_26162[(1)] = (10));

} else {
var statearr_26124_26163 = state_26105__$1;
(statearr_26124_26163[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (12))){
var inst_26101 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26125_26164 = state_26105__$1;
(statearr_26125_26164[(2)] = inst_26101);

(statearr_26125_26164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (2))){
var inst_26029 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26029)){
var statearr_26126_26165 = state_26105__$1;
(statearr_26126_26165[(1)] = (5));

} else {
var statearr_26127_26166 = state_26105__$1;
(statearr_26127_26166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (23))){
var inst_26077 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26077)){
var statearr_26128_26167 = state_26105__$1;
(statearr_26128_26167[(1)] = (27));

} else {
var statearr_26129_26168 = state_26105__$1;
(statearr_26129_26168[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (19))){
var inst_26064 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26065 = figwheel.client.heads_up.append_message.call(null,inst_26064);
var state_26105__$1 = state_26105;
var statearr_26130_26169 = state_26105__$1;
(statearr_26130_26169[(2)] = inst_26065);

(statearr_26130_26169[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (11))){
var inst_26053 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26053)){
var statearr_26131_26170 = state_26105__$1;
(statearr_26131_26170[(1)] = (15));

} else {
var statearr_26132_26171 = state_26105__$1;
(statearr_26132_26171[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (9))){
var inst_26037 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26133_26172 = state_26105__$1;
(statearr_26133_26172[(2)] = inst_26037);

(statearr_26133_26172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (5))){
var inst_26031 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26105__$1,(8),inst_26031);
} else {
if((state_val_26106 === (14))){
var inst_26051 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26134_26173 = state_26105__$1;
(statearr_26134_26173[(2)] = inst_26051);

(statearr_26134_26173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (26))){
var inst_26075 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26135_26174 = state_26105__$1;
(statearr_26135_26174[(2)] = inst_26075);

(statearr_26135_26174[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (16))){
var inst_26062 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26105__$1 = state_26105;
if(cljs.core.truth_(inst_26062)){
var statearr_26136_26175 = state_26105__$1;
(statearr_26136_26175[(1)] = (19));

} else {
var statearr_26137_26176 = state_26105__$1;
(statearr_26137_26176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (30))){
var inst_26082 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26138_26177 = state_26105__$1;
(statearr_26138_26177[(2)] = inst_26082);

(statearr_26138_26177[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (10))){
var inst_26043 = figwheel.client.heads_up.clear.call(null);
var state_26105__$1 = state_26105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26105__$1,(13),inst_26043);
} else {
if((state_val_26106 === (18))){
var inst_26060 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26139_26178 = state_26105__$1;
(statearr_26139_26178[(2)] = inst_26060);

(statearr_26139_26178[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26106 === (8))){
var inst_26033 = (state_26105[(2)]);
var state_26105__$1 = state_26105;
var statearr_26140_26179 = state_26105__$1;
(statearr_26140_26179[(2)] = inst_26033);

(statearr_26140_26179[(1)] = (7));


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
});})(c__20627__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20562__auto__,c__20627__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto____0 = (function (){
var statearr_26144 = [null,null,null,null,null,null,null,null,null];
(statearr_26144[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto__);

(statearr_26144[(1)] = (1));

return statearr_26144;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto____1 = (function (state_26105){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_26105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e26145){if((e26145 instanceof Object)){
var ex__20566__auto__ = e26145;
var statearr_26146_26180 = state_26105;
(statearr_26146_26180[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26181 = state_26105;
state_26105 = G__26181;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto__ = function(state_26105){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto____1.call(this,state_26105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__,msg_hist,msg_names,msg))
})();
var state__20629__auto__ = (function (){var statearr_26147 = f__20628__auto__.call(null);
(statearr_26147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_26147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__,msg_hist,msg_names,msg))
);

return c__20627__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20627__auto___26244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___26244,ch){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___26244,ch){
return (function (state_26227){
var state_val_26228 = (state_26227[(1)]);
if((state_val_26228 === (1))){
var state_26227__$1 = state_26227;
var statearr_26229_26245 = state_26227__$1;
(statearr_26229_26245[(2)] = null);

(statearr_26229_26245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (2))){
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(4),ch);
} else {
if((state_val_26228 === (3))){
var inst_26225 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26227__$1,inst_26225);
} else {
if((state_val_26228 === (4))){
var inst_26215 = (state_26227[(7)]);
var inst_26215__$1 = (state_26227[(2)]);
var state_26227__$1 = (function (){var statearr_26230 = state_26227;
(statearr_26230[(7)] = inst_26215__$1);

return statearr_26230;
})();
if(cljs.core.truth_(inst_26215__$1)){
var statearr_26231_26246 = state_26227__$1;
(statearr_26231_26246[(1)] = (5));

} else {
var statearr_26232_26247 = state_26227__$1;
(statearr_26232_26247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (5))){
var inst_26215 = (state_26227[(7)]);
var inst_26217 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26215);
var state_26227__$1 = state_26227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26227__$1,(8),inst_26217);
} else {
if((state_val_26228 === (6))){
var state_26227__$1 = state_26227;
var statearr_26233_26248 = state_26227__$1;
(statearr_26233_26248[(2)] = null);

(statearr_26233_26248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (7))){
var inst_26223 = (state_26227[(2)]);
var state_26227__$1 = state_26227;
var statearr_26234_26249 = state_26227__$1;
(statearr_26234_26249[(2)] = inst_26223);

(statearr_26234_26249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26228 === (8))){
var inst_26219 = (state_26227[(2)]);
var state_26227__$1 = (function (){var statearr_26235 = state_26227;
(statearr_26235[(8)] = inst_26219);

return statearr_26235;
})();
var statearr_26236_26250 = state_26227__$1;
(statearr_26236_26250[(2)] = null);

(statearr_26236_26250[(1)] = (2));


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
});})(c__20627__auto___26244,ch))
;
return ((function (switch__20562__auto__,c__20627__auto___26244,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20563__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20563__auto____0 = (function (){
var statearr_26240 = [null,null,null,null,null,null,null,null,null];
(statearr_26240[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20563__auto__);

(statearr_26240[(1)] = (1));

return statearr_26240;
});
var figwheel$client$heads_up_plugin_$_state_machine__20563__auto____1 = (function (state_26227){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_26227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e26241){if((e26241 instanceof Object)){
var ex__20566__auto__ = e26241;
var statearr_26242_26251 = state_26227;
(statearr_26242_26251[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26252 = state_26227;
state_26227 = G__26252;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20563__auto__ = function(state_26227){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20563__auto____1.call(this,state_26227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20563__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20563__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___26244,ch))
})();
var state__20629__auto__ = (function (){var statearr_26243 = f__20628__auto__.call(null);
(statearr_26243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___26244);

return statearr_26243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___26244,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__){
return (function (state_26273){
var state_val_26274 = (state_26273[(1)]);
if((state_val_26274 === (1))){
var inst_26268 = cljs.core.async.timeout.call(null,(3000));
var state_26273__$1 = state_26273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26273__$1,(2),inst_26268);
} else {
if((state_val_26274 === (2))){
var inst_26270 = (state_26273[(2)]);
var inst_26271 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26273__$1 = (function (){var statearr_26275 = state_26273;
(statearr_26275[(7)] = inst_26270);

return statearr_26275;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26273__$1,inst_26271);
} else {
return null;
}
}
});})(c__20627__auto__))
;
return ((function (switch__20562__auto__,c__20627__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20563__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20563__auto____0 = (function (){
var statearr_26279 = [null,null,null,null,null,null,null,null];
(statearr_26279[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20563__auto__);

(statearr_26279[(1)] = (1));

return statearr_26279;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20563__auto____1 = (function (state_26273){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_26273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e26280){if((e26280 instanceof Object)){
var ex__20566__auto__ = e26280;
var statearr_26281_26283 = state_26273;
(statearr_26281_26283[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26284 = state_26273;
state_26273 = G__26284;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20563__auto__ = function(state_26273){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20563__auto____1.call(this,state_26273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20563__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20563__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__))
})();
var state__20629__auto__ = (function (){var statearr_26282 = f__20628__auto__.call(null);
(statearr_26282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_26282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__))
);

return c__20627__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26285){
var map__26292 = p__26285;
var map__26292__$1 = ((((!((map__26292 == null)))?((((map__26292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26292):map__26292);
var ed = map__26292__$1;
var formatted_exception = cljs.core.get.call(null,map__26292__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26292__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26292__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26294_26298 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26295_26299 = null;
var count__26296_26300 = (0);
var i__26297_26301 = (0);
while(true){
if((i__26297_26301 < count__26296_26300)){
var msg_26302 = cljs.core._nth.call(null,chunk__26295_26299,i__26297_26301);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26302);

var G__26303 = seq__26294_26298;
var G__26304 = chunk__26295_26299;
var G__26305 = count__26296_26300;
var G__26306 = (i__26297_26301 + (1));
seq__26294_26298 = G__26303;
chunk__26295_26299 = G__26304;
count__26296_26300 = G__26305;
i__26297_26301 = G__26306;
continue;
} else {
var temp__4425__auto___26307 = cljs.core.seq.call(null,seq__26294_26298);
if(temp__4425__auto___26307){
var seq__26294_26308__$1 = temp__4425__auto___26307;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26294_26308__$1)){
var c__17227__auto___26309 = cljs.core.chunk_first.call(null,seq__26294_26308__$1);
var G__26310 = cljs.core.chunk_rest.call(null,seq__26294_26308__$1);
var G__26311 = c__17227__auto___26309;
var G__26312 = cljs.core.count.call(null,c__17227__auto___26309);
var G__26313 = (0);
seq__26294_26298 = G__26310;
chunk__26295_26299 = G__26311;
count__26296_26300 = G__26312;
i__26297_26301 = G__26313;
continue;
} else {
var msg_26314 = cljs.core.first.call(null,seq__26294_26308__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26314);

var G__26315 = cljs.core.next.call(null,seq__26294_26308__$1);
var G__26316 = null;
var G__26317 = (0);
var G__26318 = (0);
seq__26294_26298 = G__26315;
chunk__26295_26299 = G__26316;
count__26296_26300 = G__26317;
i__26297_26301 = G__26318;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26319){
var map__26322 = p__26319;
var map__26322__$1 = ((((!((map__26322 == null)))?((((map__26322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26322):map__26322);
var w = map__26322__$1;
var message = cljs.core.get.call(null,map__26322__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16431__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16431__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16431__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26330 = cljs.core.seq.call(null,plugins);
var chunk__26331 = null;
var count__26332 = (0);
var i__26333 = (0);
while(true){
if((i__26333 < count__26332)){
var vec__26334 = cljs.core._nth.call(null,chunk__26331,i__26333);
var k = cljs.core.nth.call(null,vec__26334,(0),null);
var plugin = cljs.core.nth.call(null,vec__26334,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26336 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26330,chunk__26331,count__26332,i__26333,pl_26336,vec__26334,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26336.call(null,msg_hist);
});})(seq__26330,chunk__26331,count__26332,i__26333,pl_26336,vec__26334,k,plugin))
);
} else {
}

var G__26337 = seq__26330;
var G__26338 = chunk__26331;
var G__26339 = count__26332;
var G__26340 = (i__26333 + (1));
seq__26330 = G__26337;
chunk__26331 = G__26338;
count__26332 = G__26339;
i__26333 = G__26340;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26330);
if(temp__4425__auto__){
var seq__26330__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26330__$1)){
var c__17227__auto__ = cljs.core.chunk_first.call(null,seq__26330__$1);
var G__26341 = cljs.core.chunk_rest.call(null,seq__26330__$1);
var G__26342 = c__17227__auto__;
var G__26343 = cljs.core.count.call(null,c__17227__auto__);
var G__26344 = (0);
seq__26330 = G__26341;
chunk__26331 = G__26342;
count__26332 = G__26343;
i__26333 = G__26344;
continue;
} else {
var vec__26335 = cljs.core.first.call(null,seq__26330__$1);
var k = cljs.core.nth.call(null,vec__26335,(0),null);
var plugin = cljs.core.nth.call(null,vec__26335,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26345 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26330,chunk__26331,count__26332,i__26333,pl_26345,vec__26335,k,plugin,seq__26330__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26345.call(null,msg_hist);
});})(seq__26330,chunk__26331,count__26332,i__26333,pl_26345,vec__26335,k,plugin,seq__26330__$1,temp__4425__auto__))
);
} else {
}

var G__26346 = cljs.core.next.call(null,seq__26330__$1);
var G__26347 = null;
var G__26348 = (0);
var G__26349 = (0);
seq__26330 = G__26346;
chunk__26331 = G__26347;
count__26332 = G__26348;
i__26333 = G__26349;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args26350 = [];
var len__17482__auto___26353 = arguments.length;
var i__17483__auto___26354 = (0);
while(true){
if((i__17483__auto___26354 < len__17482__auto___26353)){
args26350.push((arguments[i__17483__auto___26354]));

var G__26355 = (i__17483__auto___26354 + (1));
i__17483__auto___26354 = G__26355;
continue;
} else {
}
break;
}

var G__26352 = args26350.length;
switch (G__26352) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26350.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17489__auto__ = [];
var len__17482__auto___26361 = arguments.length;
var i__17483__auto___26362 = (0);
while(true){
if((i__17483__auto___26362 < len__17482__auto___26361)){
args__17489__auto__.push((arguments[i__17483__auto___26362]));

var G__26363 = (i__17483__auto___26362 + (1));
i__17483__auto___26362 = G__26363;
continue;
} else {
}
break;
}

var argseq__17490__auto__ = ((((0) < args__17489__auto__.length))?(new cljs.core.IndexedSeq(args__17489__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17490__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26358){
var map__26359 = p__26358;
var map__26359__$1 = ((((!((map__26359 == null)))?((((map__26359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26359):map__26359);
var opts = map__26359__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26357){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26357));
});

//# sourceMappingURL=client.js.map?rel=1438815273769