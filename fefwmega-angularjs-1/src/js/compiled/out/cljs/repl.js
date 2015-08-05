// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26751_26765 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26752_26766 = null;
var count__26753_26767 = (0);
var i__26754_26768 = (0);
while(true){
if((i__26754_26768 < count__26753_26767)){
var f_26769 = cljs.core._nth.call(null,chunk__26752_26766,i__26754_26768);
cljs.core.println.call(null,"  ",f_26769);

var G__26770 = seq__26751_26765;
var G__26771 = chunk__26752_26766;
var G__26772 = count__26753_26767;
var G__26773 = (i__26754_26768 + (1));
seq__26751_26765 = G__26770;
chunk__26752_26766 = G__26771;
count__26753_26767 = G__26772;
i__26754_26768 = G__26773;
continue;
} else {
var temp__4425__auto___26774 = cljs.core.seq.call(null,seq__26751_26765);
if(temp__4425__auto___26774){
var seq__26751_26775__$1 = temp__4425__auto___26774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26751_26775__$1)){
var c__17227__auto___26776 = cljs.core.chunk_first.call(null,seq__26751_26775__$1);
var G__26777 = cljs.core.chunk_rest.call(null,seq__26751_26775__$1);
var G__26778 = c__17227__auto___26776;
var G__26779 = cljs.core.count.call(null,c__17227__auto___26776);
var G__26780 = (0);
seq__26751_26765 = G__26777;
chunk__26752_26766 = G__26778;
count__26753_26767 = G__26779;
i__26754_26768 = G__26780;
continue;
} else {
var f_26781 = cljs.core.first.call(null,seq__26751_26775__$1);
cljs.core.println.call(null,"  ",f_26781);

var G__26782 = cljs.core.next.call(null,seq__26751_26775__$1);
var G__26783 = null;
var G__26784 = (0);
var G__26785 = (0);
seq__26751_26765 = G__26782;
chunk__26752_26766 = G__26783;
count__26753_26767 = G__26784;
i__26754_26768 = G__26785;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26786 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16443__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26786);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26786)))?cljs.core.second.call(null,arglists_26786):arglists_26786));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26755 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26756 = null;
var count__26757 = (0);
var i__26758 = (0);
while(true){
if((i__26758 < count__26757)){
var vec__26759 = cljs.core._nth.call(null,chunk__26756,i__26758);
var name = cljs.core.nth.call(null,vec__26759,(0),null);
var map__26760 = cljs.core.nth.call(null,vec__26759,(1),null);
var map__26760__$1 = ((((!((map__26760 == null)))?((((map__26760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26760):map__26760);
var doc = cljs.core.get.call(null,map__26760__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26760__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26787 = seq__26755;
var G__26788 = chunk__26756;
var G__26789 = count__26757;
var G__26790 = (i__26758 + (1));
seq__26755 = G__26787;
chunk__26756 = G__26788;
count__26757 = G__26789;
i__26758 = G__26790;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26755);
if(temp__4425__auto__){
var seq__26755__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26755__$1)){
var c__17227__auto__ = cljs.core.chunk_first.call(null,seq__26755__$1);
var G__26791 = cljs.core.chunk_rest.call(null,seq__26755__$1);
var G__26792 = c__17227__auto__;
var G__26793 = cljs.core.count.call(null,c__17227__auto__);
var G__26794 = (0);
seq__26755 = G__26791;
chunk__26756 = G__26792;
count__26757 = G__26793;
i__26758 = G__26794;
continue;
} else {
var vec__26762 = cljs.core.first.call(null,seq__26755__$1);
var name = cljs.core.nth.call(null,vec__26762,(0),null);
var map__26763 = cljs.core.nth.call(null,vec__26762,(1),null);
var map__26763__$1 = ((((!((map__26763 == null)))?((((map__26763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26763):map__26763);
var doc = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26763__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26795 = cljs.core.next.call(null,seq__26755__$1);
var G__26796 = null;
var G__26797 = (0);
var G__26798 = (0);
seq__26755 = G__26795;
chunk__26756 = G__26796;
count__26757 = G__26797;
i__26758 = G__26798;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1438815274260