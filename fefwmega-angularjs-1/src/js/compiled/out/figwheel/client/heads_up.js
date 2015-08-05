// Compiled by ClojureScript 1.7.28 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17489__auto__ = [];
var len__17482__auto___26503 = arguments.length;
var i__17483__auto___26504 = (0);
while(true){
if((i__17483__auto___26504 < len__17482__auto___26503)){
args__17489__auto__.push((arguments[i__17483__auto___26504]));

var G__26505 = (i__17483__auto___26504 + (1));
i__17483__auto___26504 = G__26505;
continue;
} else {
}
break;
}

var argseq__17490__auto__ = ((((2) < args__17489__auto__.length))?(new cljs.core.IndexedSeq(args__17489__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17490__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26495_26506 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26496_26507 = null;
var count__26497_26508 = (0);
var i__26498_26509 = (0);
while(true){
if((i__26498_26509 < count__26497_26508)){
var k_26510 = cljs.core._nth.call(null,chunk__26496_26507,i__26498_26509);
e.setAttribute(cljs.core.name.call(null,k_26510),cljs.core.get.call(null,attrs,k_26510));

var G__26511 = seq__26495_26506;
var G__26512 = chunk__26496_26507;
var G__26513 = count__26497_26508;
var G__26514 = (i__26498_26509 + (1));
seq__26495_26506 = G__26511;
chunk__26496_26507 = G__26512;
count__26497_26508 = G__26513;
i__26498_26509 = G__26514;
continue;
} else {
var temp__4425__auto___26515 = cljs.core.seq.call(null,seq__26495_26506);
if(temp__4425__auto___26515){
var seq__26495_26516__$1 = temp__4425__auto___26515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26495_26516__$1)){
var c__17227__auto___26517 = cljs.core.chunk_first.call(null,seq__26495_26516__$1);
var G__26518 = cljs.core.chunk_rest.call(null,seq__26495_26516__$1);
var G__26519 = c__17227__auto___26517;
var G__26520 = cljs.core.count.call(null,c__17227__auto___26517);
var G__26521 = (0);
seq__26495_26506 = G__26518;
chunk__26496_26507 = G__26519;
count__26497_26508 = G__26520;
i__26498_26509 = G__26521;
continue;
} else {
var k_26522 = cljs.core.first.call(null,seq__26495_26516__$1);
e.setAttribute(cljs.core.name.call(null,k_26522),cljs.core.get.call(null,attrs,k_26522));

var G__26523 = cljs.core.next.call(null,seq__26495_26516__$1);
var G__26524 = null;
var G__26525 = (0);
var G__26526 = (0);
seq__26495_26506 = G__26523;
chunk__26496_26507 = G__26524;
count__26497_26508 = G__26525;
i__26498_26509 = G__26526;
continue;
}
} else {
}
}
break;
}

var seq__26499_26527 = cljs.core.seq.call(null,children);
var chunk__26500_26528 = null;
var count__26501_26529 = (0);
var i__26502_26530 = (0);
while(true){
if((i__26502_26530 < count__26501_26529)){
var ch_26531 = cljs.core._nth.call(null,chunk__26500_26528,i__26502_26530);
e.appendChild(ch_26531);

var G__26532 = seq__26499_26527;
var G__26533 = chunk__26500_26528;
var G__26534 = count__26501_26529;
var G__26535 = (i__26502_26530 + (1));
seq__26499_26527 = G__26532;
chunk__26500_26528 = G__26533;
count__26501_26529 = G__26534;
i__26502_26530 = G__26535;
continue;
} else {
var temp__4425__auto___26536 = cljs.core.seq.call(null,seq__26499_26527);
if(temp__4425__auto___26536){
var seq__26499_26537__$1 = temp__4425__auto___26536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26499_26537__$1)){
var c__17227__auto___26538 = cljs.core.chunk_first.call(null,seq__26499_26537__$1);
var G__26539 = cljs.core.chunk_rest.call(null,seq__26499_26537__$1);
var G__26540 = c__17227__auto___26538;
var G__26541 = cljs.core.count.call(null,c__17227__auto___26538);
var G__26542 = (0);
seq__26499_26527 = G__26539;
chunk__26500_26528 = G__26540;
count__26501_26529 = G__26541;
i__26502_26530 = G__26542;
continue;
} else {
var ch_26543 = cljs.core.first.call(null,seq__26499_26537__$1);
e.appendChild(ch_26543);

var G__26544 = cljs.core.next.call(null,seq__26499_26537__$1);
var G__26545 = null;
var G__26546 = (0);
var G__26547 = (0);
seq__26499_26527 = G__26544;
chunk__26500_26528 = G__26545;
count__26501_26529 = G__26546;
i__26502_26530 = G__26547;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26492){
var G__26493 = cljs.core.first.call(null,seq26492);
var seq26492__$1 = cljs.core.next.call(null,seq26492);
var G__26494 = cljs.core.first.call(null,seq26492__$1);
var seq26492__$2 = cljs.core.next.call(null,seq26492__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26493,G__26494,seq26492__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17337__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17338__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17339__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17340__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17341__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17337__auto__,prefer_table__17338__auto__,method_cache__17339__auto__,cached_hierarchy__17340__auto__,hierarchy__17341__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17337__auto__,prefer_table__17338__auto__,method_cache__17339__auto__,cached_hierarchy__17340__auto__,hierarchy__17341__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17341__auto__,method_table__17337__auto__,prefer_table__17338__auto__,method_cache__17339__auto__,cached_hierarchy__17340__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26548 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26548.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26548.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26548.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26548);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26549,st_map){
var map__26554 = p__26549;
var map__26554__$1 = ((((!((map__26554 == null)))?((((map__26554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26554):map__26554);
var container_el = cljs.core.get.call(null,map__26554__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26554,map__26554__$1,container_el){
return (function (p__26556){
var vec__26557 = p__26556;
var k = cljs.core.nth.call(null,vec__26557,(0),null);
var v = cljs.core.nth.call(null,vec__26557,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26554,map__26554__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26558,dom_str){
var map__26561 = p__26558;
var map__26561__$1 = ((((!((map__26561 == null)))?((((map__26561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26561):map__26561);
var c = map__26561__$1;
var content_area_el = cljs.core.get.call(null,map__26561__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26563){
var map__26566 = p__26563;
var map__26566__$1 = ((((!((map__26566 == null)))?((((map__26566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26566):map__26566);
var content_area_el = cljs.core.get.call(null,map__26566__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__){
return (function (state_26609){
var state_val_26610 = (state_26609[(1)]);
if((state_val_26610 === (1))){
var inst_26594 = (state_26609[(7)]);
var inst_26594__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26595 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26596 = ["10px","10px","100%","68px","1.0"];
var inst_26597 = cljs.core.PersistentHashMap.fromArrays(inst_26595,inst_26596);
var inst_26598 = cljs.core.merge.call(null,inst_26597,style);
var inst_26599 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26594__$1,inst_26598);
var inst_26600 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26594__$1,msg);
var inst_26601 = cljs.core.async.timeout.call(null,(300));
var state_26609__$1 = (function (){var statearr_26611 = state_26609;
(statearr_26611[(8)] = inst_26600);

(statearr_26611[(7)] = inst_26594__$1);

(statearr_26611[(9)] = inst_26599);

return statearr_26611;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26609__$1,(2),inst_26601);
} else {
if((state_val_26610 === (2))){
var inst_26594 = (state_26609[(7)]);
var inst_26603 = (state_26609[(2)]);
var inst_26604 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26605 = ["auto"];
var inst_26606 = cljs.core.PersistentHashMap.fromArrays(inst_26604,inst_26605);
var inst_26607 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26594,inst_26606);
var state_26609__$1 = (function (){var statearr_26612 = state_26609;
(statearr_26612[(10)] = inst_26603);

return statearr_26612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26609__$1,inst_26607);
} else {
return null;
}
}
});})(c__20627__auto__))
;
return ((function (switch__20562__auto__,c__20627__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto____0 = (function (){
var statearr_26616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26616[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto__);

(statearr_26616[(1)] = (1));

return statearr_26616;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto____1 = (function (state_26609){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_26609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e26617){if((e26617 instanceof Object)){
var ex__20566__auto__ = e26617;
var statearr_26618_26620 = state_26609;
(statearr_26618_26620[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26621 = state_26609;
state_26609 = G__26621;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto__ = function(state_26609){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto____1.call(this,state_26609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__))
})();
var state__20629__auto__ = (function (){var statearr_26619 = f__20628__auto__.call(null);
(statearr_26619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_26619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__))
);

return c__20627__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__26623 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26623,(0),null);
var ln = cljs.core.nth.call(null,vec__26623,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26626 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26626,(0),null);
var file_line = cljs.core.nth.call(null,vec__26626,(1),null);
var file_column = cljs.core.nth.call(null,vec__26626,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26626,file_name,file_line,file_column){
return (function (p1__26624_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26624_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26626,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16443__auto__ = file_line;
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
var and__16431__auto__ = cause;
if(cljs.core.truth_(and__16431__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16431__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26629 = figwheel.client.heads_up.ensure_container.call(null);
var map__26629__$1 = ((((!((map__26629 == null)))?((((map__26629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26629):map__26629);
var content_area_el = cljs.core.get.call(null,map__26629__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__){
return (function (state_26677){
var state_val_26678 = (state_26677[(1)]);
if((state_val_26678 === (1))){
var inst_26660 = (state_26677[(7)]);
var inst_26660__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26661 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26662 = ["0.0"];
var inst_26663 = cljs.core.PersistentHashMap.fromArrays(inst_26661,inst_26662);
var inst_26664 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26660__$1,inst_26663);
var inst_26665 = cljs.core.async.timeout.call(null,(300));
var state_26677__$1 = (function (){var statearr_26679 = state_26677;
(statearr_26679[(8)] = inst_26664);

(statearr_26679[(7)] = inst_26660__$1);

return statearr_26679;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26677__$1,(2),inst_26665);
} else {
if((state_val_26678 === (2))){
var inst_26660 = (state_26677[(7)]);
var inst_26667 = (state_26677[(2)]);
var inst_26668 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26669 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26670 = cljs.core.PersistentHashMap.fromArrays(inst_26668,inst_26669);
var inst_26671 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26660,inst_26670);
var inst_26672 = cljs.core.async.timeout.call(null,(200));
var state_26677__$1 = (function (){var statearr_26680 = state_26677;
(statearr_26680[(9)] = inst_26671);

(statearr_26680[(10)] = inst_26667);

return statearr_26680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26677__$1,(3),inst_26672);
} else {
if((state_val_26678 === (3))){
var inst_26660 = (state_26677[(7)]);
var inst_26674 = (state_26677[(2)]);
var inst_26675 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26660,"");
var state_26677__$1 = (function (){var statearr_26681 = state_26677;
(statearr_26681[(11)] = inst_26674);

return statearr_26681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26677__$1,inst_26675);
} else {
return null;
}
}
}
});})(c__20627__auto__))
;
return ((function (switch__20562__auto__,c__20627__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20563__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20563__auto____0 = (function (){
var statearr_26685 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26685[(0)] = figwheel$client$heads_up$clear_$_state_machine__20563__auto__);

(statearr_26685[(1)] = (1));

return statearr_26685;
});
var figwheel$client$heads_up$clear_$_state_machine__20563__auto____1 = (function (state_26677){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_26677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e26686){if((e26686 instanceof Object)){
var ex__20566__auto__ = e26686;
var statearr_26687_26689 = state_26677;
(statearr_26687_26689[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26686;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26690 = state_26677;
state_26677 = G__26690;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20563__auto__ = function(state_26677){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20563__auto____1.call(this,state_26677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20563__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20563__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__))
})();
var state__20629__auto__ = (function (){var statearr_26688 = f__20628__auto__.call(null);
(statearr_26688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_26688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__))
);

return c__20627__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__){
return (function (state_26722){
var state_val_26723 = (state_26722[(1)]);
if((state_val_26723 === (1))){
var inst_26712 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26722__$1 = state_26722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26722__$1,(2),inst_26712);
} else {
if((state_val_26723 === (2))){
var inst_26714 = (state_26722[(2)]);
var inst_26715 = cljs.core.async.timeout.call(null,(400));
var state_26722__$1 = (function (){var statearr_26724 = state_26722;
(statearr_26724[(7)] = inst_26714);

return statearr_26724;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26722__$1,(3),inst_26715);
} else {
if((state_val_26723 === (3))){
var inst_26717 = (state_26722[(2)]);
var inst_26718 = figwheel.client.heads_up.clear.call(null);
var state_26722__$1 = (function (){var statearr_26725 = state_26722;
(statearr_26725[(8)] = inst_26717);

return statearr_26725;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26722__$1,(4),inst_26718);
} else {
if((state_val_26723 === (4))){
var inst_26720 = (state_26722[(2)]);
var state_26722__$1 = state_26722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26722__$1,inst_26720);
} else {
return null;
}
}
}
}
});})(c__20627__auto__))
;
return ((function (switch__20562__auto__,c__20627__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto____0 = (function (){
var statearr_26729 = [null,null,null,null,null,null,null,null,null];
(statearr_26729[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto__);

(statearr_26729[(1)] = (1));

return statearr_26729;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto____1 = (function (state_26722){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_26722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e26730){if((e26730 instanceof Object)){
var ex__20566__auto__ = e26730;
var statearr_26731_26733 = state_26722;
(statearr_26731_26733[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26734 = state_26722;
state_26722 = G__26734;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto__ = function(state_26722){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto____1.call(this,state_26722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__))
})();
var state__20629__auto__ = (function (){var statearr_26732 = f__20628__auto__.call(null);
(statearr_26732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_26732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__))
);

return c__20627__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1438815274217