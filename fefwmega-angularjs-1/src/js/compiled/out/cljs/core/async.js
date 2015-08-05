// Compiled by ClojureScript 1.7.28 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27620 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27620 = (function (fn_handler,f,meta27621){
this.fn_handler = fn_handler;
this.f = f;
this.meta27621 = meta27621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27622,meta27621__$1){
var self__ = this;
var _27622__$1 = this;
return (new cljs.core.async.t27620(self__.fn_handler,self__.f,meta27621__$1));
});

cljs.core.async.t27620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27622){
var self__ = this;
var _27622__$1 = this;
return self__.meta27621;
});

cljs.core.async.t27620.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27621","meta27621",-692110822,null)], null);
});

cljs.core.async.t27620.cljs$lang$type = true;

cljs.core.async.t27620.cljs$lang$ctorStr = "cljs.core.async/t27620";

cljs.core.async.t27620.cljs$lang$ctorPrWriter = (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t27620");
});

cljs.core.async.__GT_t27620 = (function cljs$core$async$fn_handler_$___GT_t27620(fn_handler__$1,f__$1,meta27621){
return (new cljs.core.async.t27620(fn_handler__$1,f__$1,meta27621));
});

}

return (new cljs.core.async.t27620(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args27625 = [];
var len__17482__auto___27628 = arguments.length;
var i__17483__auto___27629 = (0);
while(true){
if((i__17483__auto___27629 < len__17482__auto___27628)){
args27625.push((arguments[i__17483__auto___27629]));

var G__27630 = (i__17483__auto___27629 + (1));
i__17483__auto___27629 = G__27630;
continue;
} else {
}
break;
}

var G__27627 = args27625.length;
switch (G__27627) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27625.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args27632 = [];
var len__17482__auto___27635 = arguments.length;
var i__17483__auto___27636 = (0);
while(true){
if((i__17483__auto___27636 < len__17482__auto___27635)){
args27632.push((arguments[i__17483__auto___27636]));

var G__27637 = (i__17483__auto___27636 + (1));
i__17483__auto___27636 = G__27637;
continue;
} else {
}
break;
}

var G__27634 = args27632.length;
switch (G__27634) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27632.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27639 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27639);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27639,ret){
return (function (){
return fn1.call(null,val_27639);
});})(val_27639,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args27640 = [];
var len__17482__auto___27643 = arguments.length;
var i__17483__auto___27644 = (0);
while(true){
if((i__17483__auto___27644 < len__17482__auto___27643)){
args27640.push((arguments[i__17483__auto___27644]));

var G__27645 = (i__17483__auto___27644 + (1));
i__17483__auto___27644 = G__27645;
continue;
} else {
}
break;
}

var G__27642 = args27640.length;
switch (G__27642) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27640.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17327__auto___27647 = n;
var x_27648 = (0);
while(true){
if((x_27648 < n__17327__auto___27647)){
(a[x_27648] = (0));

var G__27649 = (x_27648 + (1));
x_27648 = G__27649;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27650 = (i + (1));
i = G__27650;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27654 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27654 = (function (alt_flag,flag,meta27655){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27655 = meta27655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27656,meta27655__$1){
var self__ = this;
var _27656__$1 = this;
return (new cljs.core.async.t27654(self__.alt_flag,self__.flag,meta27655__$1));
});})(flag))
;

cljs.core.async.t27654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27656){
var self__ = this;
var _27656__$1 = this;
return self__.meta27655;
});})(flag))
;

cljs.core.async.t27654.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27654.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27655","meta27655",-1088727049,null)], null);
});})(flag))
;

cljs.core.async.t27654.cljs$lang$type = true;

cljs.core.async.t27654.cljs$lang$ctorStr = "cljs.core.async/t27654";

cljs.core.async.t27654.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t27654");
});})(flag))
;

cljs.core.async.__GT_t27654 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27654(alt_flag__$1,flag__$1,meta27655){
return (new cljs.core.async.t27654(alt_flag__$1,flag__$1,meta27655));
});})(flag))
;

}

return (new cljs.core.async.t27654(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27660 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27660 = (function (alt_handler,flag,cb,meta27661){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27661 = meta27661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27662,meta27661__$1){
var self__ = this;
var _27662__$1 = this;
return (new cljs.core.async.t27660(self__.alt_handler,self__.flag,self__.cb,meta27661__$1));
});

cljs.core.async.t27660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27662){
var self__ = this;
var _27662__$1 = this;
return self__.meta27661;
});

cljs.core.async.t27660.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27661","meta27661",1701469165,null)], null);
});

cljs.core.async.t27660.cljs$lang$type = true;

cljs.core.async.t27660.cljs$lang$ctorStr = "cljs.core.async/t27660";

cljs.core.async.t27660.cljs$lang$ctorPrWriter = (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t27660");
});

cljs.core.async.__GT_t27660 = (function cljs$core$async$alt_handler_$___GT_t27660(alt_handler__$1,flag__$1,cb__$1,meta27661){
return (new cljs.core.async.t27660(alt_handler__$1,flag__$1,cb__$1,meta27661));
});

}

return (new cljs.core.async.t27660(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27663_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27663_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27664_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27664_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16443__auto__ = wport;
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27665 = (i + (1));
i = G__27665;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16443__auto__ = ret;
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16431__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16431__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16431__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17489__auto__ = [];
var len__17482__auto___27671 = arguments.length;
var i__17483__auto___27672 = (0);
while(true){
if((i__17483__auto___27672 < len__17482__auto___27671)){
args__17489__auto__.push((arguments[i__17483__auto___27672]));

var G__27673 = (i__17483__auto___27672 + (1));
i__17483__auto___27672 = G__27673;
continue;
} else {
}
break;
}

var argseq__17490__auto__ = ((((1) < args__17489__auto__.length))?(new cljs.core.IndexedSeq(args__17489__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17490__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27668){
var map__27669 = p__27668;
var map__27669__$1 = ((((!((map__27669 == null)))?((((map__27669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27669):map__27669);
var opts = map__27669__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27666){
var G__27667 = cljs.core.first.call(null,seq27666);
var seq27666__$1 = cljs.core.next.call(null,seq27666);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27667,seq27666__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args27674 = [];
var len__17482__auto___27724 = arguments.length;
var i__17483__auto___27725 = (0);
while(true){
if((i__17483__auto___27725 < len__17482__auto___27724)){
args27674.push((arguments[i__17483__auto___27725]));

var G__27726 = (i__17483__auto___27725 + (1));
i__17483__auto___27725 = G__27726;
continue;
} else {
}
break;
}

var G__27676 = args27674.length;
switch (G__27676) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27674.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20627__auto___27728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___27728){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___27728){
return (function (state_27700){
var state_val_27701 = (state_27700[(1)]);
if((state_val_27701 === (7))){
var inst_27696 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27702_27729 = state_27700__$1;
(statearr_27702_27729[(2)] = inst_27696);

(statearr_27702_27729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (1))){
var state_27700__$1 = state_27700;
var statearr_27703_27730 = state_27700__$1;
(statearr_27703_27730[(2)] = null);

(statearr_27703_27730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (4))){
var inst_27679 = (state_27700[(7)]);
var inst_27679__$1 = (state_27700[(2)]);
var inst_27680 = (inst_27679__$1 == null);
var state_27700__$1 = (function (){var statearr_27704 = state_27700;
(statearr_27704[(7)] = inst_27679__$1);

return statearr_27704;
})();
if(cljs.core.truth_(inst_27680)){
var statearr_27705_27731 = state_27700__$1;
(statearr_27705_27731[(1)] = (5));

} else {
var statearr_27706_27732 = state_27700__$1;
(statearr_27706_27732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (13))){
var state_27700__$1 = state_27700;
var statearr_27707_27733 = state_27700__$1;
(statearr_27707_27733[(2)] = null);

(statearr_27707_27733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (6))){
var inst_27679 = (state_27700[(7)]);
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27700__$1,(11),to,inst_27679);
} else {
if((state_val_27701 === (3))){
var inst_27698 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27700__$1,inst_27698);
} else {
if((state_val_27701 === (12))){
var state_27700__$1 = state_27700;
var statearr_27708_27734 = state_27700__$1;
(statearr_27708_27734[(2)] = null);

(statearr_27708_27734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (2))){
var state_27700__$1 = state_27700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27700__$1,(4),from);
} else {
if((state_val_27701 === (11))){
var inst_27689 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
if(cljs.core.truth_(inst_27689)){
var statearr_27709_27735 = state_27700__$1;
(statearr_27709_27735[(1)] = (12));

} else {
var statearr_27710_27736 = state_27700__$1;
(statearr_27710_27736[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (9))){
var state_27700__$1 = state_27700;
var statearr_27711_27737 = state_27700__$1;
(statearr_27711_27737[(2)] = null);

(statearr_27711_27737[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (5))){
var state_27700__$1 = state_27700;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27712_27738 = state_27700__$1;
(statearr_27712_27738[(1)] = (8));

} else {
var statearr_27713_27739 = state_27700__$1;
(statearr_27713_27739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (14))){
var inst_27694 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27714_27740 = state_27700__$1;
(statearr_27714_27740[(2)] = inst_27694);

(statearr_27714_27740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (10))){
var inst_27686 = (state_27700[(2)]);
var state_27700__$1 = state_27700;
var statearr_27715_27741 = state_27700__$1;
(statearr_27715_27741[(2)] = inst_27686);

(statearr_27715_27741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27701 === (8))){
var inst_27683 = cljs.core.async.close_BANG_.call(null,to);
var state_27700__$1 = state_27700;
var statearr_27716_27742 = state_27700__$1;
(statearr_27716_27742[(2)] = inst_27683);

(statearr_27716_27742[(1)] = (10));


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
});})(c__20627__auto___27728))
;
return ((function (switch__20562__auto__,c__20627__auto___27728){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_27720 = [null,null,null,null,null,null,null,null];
(statearr_27720[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_27720[(1)] = (1));

return statearr_27720;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_27700){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_27700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e27721){if((e27721 instanceof Object)){
var ex__20566__auto__ = e27721;
var statearr_27722_27743 = state_27700;
(statearr_27722_27743[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27744 = state_27700;
state_27700 = G__27744;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_27700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_27700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___27728))
})();
var state__20629__auto__ = (function (){var statearr_27723 = f__20628__auto__.call(null);
(statearr_27723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___27728);

return statearr_27723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___27728))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27928){
var vec__27929 = p__27928;
var v = cljs.core.nth.call(null,vec__27929,(0),null);
var p = cljs.core.nth.call(null,vec__27929,(1),null);
var job = vec__27929;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20627__auto___28111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___28111,res,vec__27929,v,p,job,jobs,results){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___28111,res,vec__27929,v,p,job,jobs,results){
return (function (state_27934){
var state_val_27935 = (state_27934[(1)]);
if((state_val_27935 === (1))){
var state_27934__$1 = state_27934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27934__$1,(2),res,v);
} else {
if((state_val_27935 === (2))){
var inst_27931 = (state_27934[(2)]);
var inst_27932 = cljs.core.async.close_BANG_.call(null,res);
var state_27934__$1 = (function (){var statearr_27936 = state_27934;
(statearr_27936[(7)] = inst_27931);

return statearr_27936;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27934__$1,inst_27932);
} else {
return null;
}
}
});})(c__20627__auto___28111,res,vec__27929,v,p,job,jobs,results))
;
return ((function (switch__20562__auto__,c__20627__auto___28111,res,vec__27929,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0 = (function (){
var statearr_27940 = [null,null,null,null,null,null,null,null];
(statearr_27940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__);

(statearr_27940[(1)] = (1));

return statearr_27940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1 = (function (state_27934){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_27934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e27941){if((e27941 instanceof Object)){
var ex__20566__auto__ = e27941;
var statearr_27942_28112 = state_27934;
(statearr_27942_28112[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28113 = state_27934;
state_27934 = G__28113;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = function(state_27934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1.call(this,state_27934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___28111,res,vec__27929,v,p,job,jobs,results))
})();
var state__20629__auto__ = (function (){var statearr_27943 = f__20628__auto__.call(null);
(statearr_27943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___28111);

return statearr_27943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___28111,res,vec__27929,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27944){
var vec__27945 = p__27944;
var v = cljs.core.nth.call(null,vec__27945,(0),null);
var p = cljs.core.nth.call(null,vec__27945,(1),null);
var job = vec__27945;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17327__auto___28114 = n;
var __28115 = (0);
while(true){
if((__28115 < n__17327__auto___28114)){
var G__27946_28116 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27946_28116) {
case "compute":
var c__20627__auto___28118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28115,c__20627__auto___28118,G__27946_28116,n__17327__auto___28114,jobs,results,process,async){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (__28115,c__20627__auto___28118,G__27946_28116,n__17327__auto___28114,jobs,results,process,async){
return (function (state_27959){
var state_val_27960 = (state_27959[(1)]);
if((state_val_27960 === (1))){
var state_27959__$1 = state_27959;
var statearr_27961_28119 = state_27959__$1;
(statearr_27961_28119[(2)] = null);

(statearr_27961_28119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (2))){
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27959__$1,(4),jobs);
} else {
if((state_val_27960 === (3))){
var inst_27957 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27959__$1,inst_27957);
} else {
if((state_val_27960 === (4))){
var inst_27949 = (state_27959[(2)]);
var inst_27950 = process.call(null,inst_27949);
var state_27959__$1 = state_27959;
if(cljs.core.truth_(inst_27950)){
var statearr_27962_28120 = state_27959__$1;
(statearr_27962_28120[(1)] = (5));

} else {
var statearr_27963_28121 = state_27959__$1;
(statearr_27963_28121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (5))){
var state_27959__$1 = state_27959;
var statearr_27964_28122 = state_27959__$1;
(statearr_27964_28122[(2)] = null);

(statearr_27964_28122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (6))){
var state_27959__$1 = state_27959;
var statearr_27965_28123 = state_27959__$1;
(statearr_27965_28123[(2)] = null);

(statearr_27965_28123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27960 === (7))){
var inst_27955 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27966_28124 = state_27959__$1;
(statearr_27966_28124[(2)] = inst_27955);

(statearr_27966_28124[(1)] = (3));


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
});})(__28115,c__20627__auto___28118,G__27946_28116,n__17327__auto___28114,jobs,results,process,async))
;
return ((function (__28115,switch__20562__auto__,c__20627__auto___28118,G__27946_28116,n__17327__auto___28114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0 = (function (){
var statearr_27970 = [null,null,null,null,null,null,null];
(statearr_27970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__);

(statearr_27970[(1)] = (1));

return statearr_27970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1 = (function (state_27959){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_27959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e27971){if((e27971 instanceof Object)){
var ex__20566__auto__ = e27971;
var statearr_27972_28125 = state_27959;
(statearr_27972_28125[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28126 = state_27959;
state_27959 = G__28126;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = function(state_27959){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1.call(this,state_27959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__;
})()
;})(__28115,switch__20562__auto__,c__20627__auto___28118,G__27946_28116,n__17327__auto___28114,jobs,results,process,async))
})();
var state__20629__auto__ = (function (){var statearr_27973 = f__20628__auto__.call(null);
(statearr_27973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___28118);

return statearr_27973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(__28115,c__20627__auto___28118,G__27946_28116,n__17327__auto___28114,jobs,results,process,async))
);


break;
case "async":
var c__20627__auto___28127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28115,c__20627__auto___28127,G__27946_28116,n__17327__auto___28114,jobs,results,process,async){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (__28115,c__20627__auto___28127,G__27946_28116,n__17327__auto___28114,jobs,results,process,async){
return (function (state_27986){
var state_val_27987 = (state_27986[(1)]);
if((state_val_27987 === (1))){
var state_27986__$1 = state_27986;
var statearr_27988_28128 = state_27986__$1;
(statearr_27988_28128[(2)] = null);

(statearr_27988_28128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (2))){
var state_27986__$1 = state_27986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27986__$1,(4),jobs);
} else {
if((state_val_27987 === (3))){
var inst_27984 = (state_27986[(2)]);
var state_27986__$1 = state_27986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27986__$1,inst_27984);
} else {
if((state_val_27987 === (4))){
var inst_27976 = (state_27986[(2)]);
var inst_27977 = async.call(null,inst_27976);
var state_27986__$1 = state_27986;
if(cljs.core.truth_(inst_27977)){
var statearr_27989_28129 = state_27986__$1;
(statearr_27989_28129[(1)] = (5));

} else {
var statearr_27990_28130 = state_27986__$1;
(statearr_27990_28130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (5))){
var state_27986__$1 = state_27986;
var statearr_27991_28131 = state_27986__$1;
(statearr_27991_28131[(2)] = null);

(statearr_27991_28131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (6))){
var state_27986__$1 = state_27986;
var statearr_27992_28132 = state_27986__$1;
(statearr_27992_28132[(2)] = null);

(statearr_27992_28132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27987 === (7))){
var inst_27982 = (state_27986[(2)]);
var state_27986__$1 = state_27986;
var statearr_27993_28133 = state_27986__$1;
(statearr_27993_28133[(2)] = inst_27982);

(statearr_27993_28133[(1)] = (3));


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
});})(__28115,c__20627__auto___28127,G__27946_28116,n__17327__auto___28114,jobs,results,process,async))
;
return ((function (__28115,switch__20562__auto__,c__20627__auto___28127,G__27946_28116,n__17327__auto___28114,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0 = (function (){
var statearr_27997 = [null,null,null,null,null,null,null];
(statearr_27997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__);

(statearr_27997[(1)] = (1));

return statearr_27997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1 = (function (state_27986){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_27986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e27998){if((e27998 instanceof Object)){
var ex__20566__auto__ = e27998;
var statearr_27999_28134 = state_27986;
(statearr_27999_28134[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28135 = state_27986;
state_27986 = G__28135;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = function(state_27986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1.call(this,state_27986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__;
})()
;})(__28115,switch__20562__auto__,c__20627__auto___28127,G__27946_28116,n__17327__auto___28114,jobs,results,process,async))
})();
var state__20629__auto__ = (function (){var statearr_28000 = f__20628__auto__.call(null);
(statearr_28000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___28127);

return statearr_28000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(__28115,c__20627__auto___28127,G__27946_28116,n__17327__auto___28114,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28136 = (__28115 + (1));
__28115 = G__28136;
continue;
} else {
}
break;
}

var c__20627__auto___28137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___28137,jobs,results,process,async){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___28137,jobs,results,process,async){
return (function (state_28022){
var state_val_28023 = (state_28022[(1)]);
if((state_val_28023 === (1))){
var state_28022__$1 = state_28022;
var statearr_28024_28138 = state_28022__$1;
(statearr_28024_28138[(2)] = null);

(statearr_28024_28138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28023 === (2))){
var state_28022__$1 = state_28022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28022__$1,(4),from);
} else {
if((state_val_28023 === (3))){
var inst_28020 = (state_28022[(2)]);
var state_28022__$1 = state_28022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28022__$1,inst_28020);
} else {
if((state_val_28023 === (4))){
var inst_28003 = (state_28022[(7)]);
var inst_28003__$1 = (state_28022[(2)]);
var inst_28004 = (inst_28003__$1 == null);
var state_28022__$1 = (function (){var statearr_28025 = state_28022;
(statearr_28025[(7)] = inst_28003__$1);

return statearr_28025;
})();
if(cljs.core.truth_(inst_28004)){
var statearr_28026_28139 = state_28022__$1;
(statearr_28026_28139[(1)] = (5));

} else {
var statearr_28027_28140 = state_28022__$1;
(statearr_28027_28140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28023 === (5))){
var inst_28006 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28022__$1 = state_28022;
var statearr_28028_28141 = state_28022__$1;
(statearr_28028_28141[(2)] = inst_28006);

(statearr_28028_28141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28023 === (6))){
var inst_28003 = (state_28022[(7)]);
var inst_28008 = (state_28022[(8)]);
var inst_28008__$1 = cljs.core.async.chan.call(null,(1));
var inst_28009 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28010 = [inst_28003,inst_28008__$1];
var inst_28011 = (new cljs.core.PersistentVector(null,2,(5),inst_28009,inst_28010,null));
var state_28022__$1 = (function (){var statearr_28029 = state_28022;
(statearr_28029[(8)] = inst_28008__$1);

return statearr_28029;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28022__$1,(8),jobs,inst_28011);
} else {
if((state_val_28023 === (7))){
var inst_28018 = (state_28022[(2)]);
var state_28022__$1 = state_28022;
var statearr_28030_28142 = state_28022__$1;
(statearr_28030_28142[(2)] = inst_28018);

(statearr_28030_28142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28023 === (8))){
var inst_28008 = (state_28022[(8)]);
var inst_28013 = (state_28022[(2)]);
var state_28022__$1 = (function (){var statearr_28031 = state_28022;
(statearr_28031[(9)] = inst_28013);

return statearr_28031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28022__$1,(9),results,inst_28008);
} else {
if((state_val_28023 === (9))){
var inst_28015 = (state_28022[(2)]);
var state_28022__$1 = (function (){var statearr_28032 = state_28022;
(statearr_28032[(10)] = inst_28015);

return statearr_28032;
})();
var statearr_28033_28143 = state_28022__$1;
(statearr_28033_28143[(2)] = null);

(statearr_28033_28143[(1)] = (2));


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
});})(c__20627__auto___28137,jobs,results,process,async))
;
return ((function (switch__20562__auto__,c__20627__auto___28137,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0 = (function (){
var statearr_28037 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28037[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__);

(statearr_28037[(1)] = (1));

return statearr_28037;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1 = (function (state_28022){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_28022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e28038){if((e28038 instanceof Object)){
var ex__20566__auto__ = e28038;
var statearr_28039_28144 = state_28022;
(statearr_28039_28144[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28145 = state_28022;
state_28022 = G__28145;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = function(state_28022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1.call(this,state_28022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___28137,jobs,results,process,async))
})();
var state__20629__auto__ = (function (){var statearr_28040 = f__20628__auto__.call(null);
(statearr_28040[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___28137);

return statearr_28040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___28137,jobs,results,process,async))
);


var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__,jobs,results,process,async){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__,jobs,results,process,async){
return (function (state_28078){
var state_val_28079 = (state_28078[(1)]);
if((state_val_28079 === (7))){
var inst_28074 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28080_28146 = state_28078__$1;
(statearr_28080_28146[(2)] = inst_28074);

(statearr_28080_28146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (20))){
var state_28078__$1 = state_28078;
var statearr_28081_28147 = state_28078__$1;
(statearr_28081_28147[(2)] = null);

(statearr_28081_28147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (1))){
var state_28078__$1 = state_28078;
var statearr_28082_28148 = state_28078__$1;
(statearr_28082_28148[(2)] = null);

(statearr_28082_28148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (4))){
var inst_28043 = (state_28078[(7)]);
var inst_28043__$1 = (state_28078[(2)]);
var inst_28044 = (inst_28043__$1 == null);
var state_28078__$1 = (function (){var statearr_28083 = state_28078;
(statearr_28083[(7)] = inst_28043__$1);

return statearr_28083;
})();
if(cljs.core.truth_(inst_28044)){
var statearr_28084_28149 = state_28078__$1;
(statearr_28084_28149[(1)] = (5));

} else {
var statearr_28085_28150 = state_28078__$1;
(statearr_28085_28150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (15))){
var inst_28056 = (state_28078[(8)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28078__$1,(18),to,inst_28056);
} else {
if((state_val_28079 === (21))){
var inst_28069 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28086_28151 = state_28078__$1;
(statearr_28086_28151[(2)] = inst_28069);

(statearr_28086_28151[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (13))){
var inst_28071 = (state_28078[(2)]);
var state_28078__$1 = (function (){var statearr_28087 = state_28078;
(statearr_28087[(9)] = inst_28071);

return statearr_28087;
})();
var statearr_28088_28152 = state_28078__$1;
(statearr_28088_28152[(2)] = null);

(statearr_28088_28152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (6))){
var inst_28043 = (state_28078[(7)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28078__$1,(11),inst_28043);
} else {
if((state_val_28079 === (17))){
var inst_28064 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
if(cljs.core.truth_(inst_28064)){
var statearr_28089_28153 = state_28078__$1;
(statearr_28089_28153[(1)] = (19));

} else {
var statearr_28090_28154 = state_28078__$1;
(statearr_28090_28154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (3))){
var inst_28076 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28078__$1,inst_28076);
} else {
if((state_val_28079 === (12))){
var inst_28053 = (state_28078[(10)]);
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28078__$1,(14),inst_28053);
} else {
if((state_val_28079 === (2))){
var state_28078__$1 = state_28078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28078__$1,(4),results);
} else {
if((state_val_28079 === (19))){
var state_28078__$1 = state_28078;
var statearr_28091_28155 = state_28078__$1;
(statearr_28091_28155[(2)] = null);

(statearr_28091_28155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (11))){
var inst_28053 = (state_28078[(2)]);
var state_28078__$1 = (function (){var statearr_28092 = state_28078;
(statearr_28092[(10)] = inst_28053);

return statearr_28092;
})();
var statearr_28093_28156 = state_28078__$1;
(statearr_28093_28156[(2)] = null);

(statearr_28093_28156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (9))){
var state_28078__$1 = state_28078;
var statearr_28094_28157 = state_28078__$1;
(statearr_28094_28157[(2)] = null);

(statearr_28094_28157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (5))){
var state_28078__$1 = state_28078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28095_28158 = state_28078__$1;
(statearr_28095_28158[(1)] = (8));

} else {
var statearr_28096_28159 = state_28078__$1;
(statearr_28096_28159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (14))){
var inst_28056 = (state_28078[(8)]);
var inst_28058 = (state_28078[(11)]);
var inst_28056__$1 = (state_28078[(2)]);
var inst_28057 = (inst_28056__$1 == null);
var inst_28058__$1 = cljs.core.not.call(null,inst_28057);
var state_28078__$1 = (function (){var statearr_28097 = state_28078;
(statearr_28097[(8)] = inst_28056__$1);

(statearr_28097[(11)] = inst_28058__$1);

return statearr_28097;
})();
if(inst_28058__$1){
var statearr_28098_28160 = state_28078__$1;
(statearr_28098_28160[(1)] = (15));

} else {
var statearr_28099_28161 = state_28078__$1;
(statearr_28099_28161[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (16))){
var inst_28058 = (state_28078[(11)]);
var state_28078__$1 = state_28078;
var statearr_28100_28162 = state_28078__$1;
(statearr_28100_28162[(2)] = inst_28058);

(statearr_28100_28162[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (10))){
var inst_28050 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28101_28163 = state_28078__$1;
(statearr_28101_28163[(2)] = inst_28050);

(statearr_28101_28163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (18))){
var inst_28061 = (state_28078[(2)]);
var state_28078__$1 = state_28078;
var statearr_28102_28164 = state_28078__$1;
(statearr_28102_28164[(2)] = inst_28061);

(statearr_28102_28164[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28079 === (8))){
var inst_28047 = cljs.core.async.close_BANG_.call(null,to);
var state_28078__$1 = state_28078;
var statearr_28103_28165 = state_28078__$1;
(statearr_28103_28165[(2)] = inst_28047);

(statearr_28103_28165[(1)] = (10));


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
});})(c__20627__auto__,jobs,results,process,async))
;
return ((function (switch__20562__auto__,c__20627__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0 = (function (){
var statearr_28107 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__);

(statearr_28107[(1)] = (1));

return statearr_28107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1 = (function (state_28078){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_28078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e28108){if((e28108 instanceof Object)){
var ex__20566__auto__ = e28108;
var statearr_28109_28166 = state_28078;
(statearr_28109_28166[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28167 = state_28078;
state_28078 = G__28167;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__ = function(state_28078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1.call(this,state_28078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20563__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__,jobs,results,process,async))
})();
var state__20629__auto__ = (function (){var statearr_28110 = f__20628__auto__.call(null);
(statearr_28110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_28110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__,jobs,results,process,async))
);

return c__20627__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args28168 = [];
var len__17482__auto___28171 = arguments.length;
var i__17483__auto___28172 = (0);
while(true){
if((i__17483__auto___28172 < len__17482__auto___28171)){
args28168.push((arguments[i__17483__auto___28172]));

var G__28173 = (i__17483__auto___28172 + (1));
i__17483__auto___28172 = G__28173;
continue;
} else {
}
break;
}

var G__28170 = args28168.length;
switch (G__28170) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28168.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args28175 = [];
var len__17482__auto___28178 = arguments.length;
var i__17483__auto___28179 = (0);
while(true){
if((i__17483__auto___28179 < len__17482__auto___28178)){
args28175.push((arguments[i__17483__auto___28179]));

var G__28180 = (i__17483__auto___28179 + (1));
i__17483__auto___28179 = G__28180;
continue;
} else {
}
break;
}

var G__28177 = args28175.length;
switch (G__28177) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28175.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args28182 = [];
var len__17482__auto___28235 = arguments.length;
var i__17483__auto___28236 = (0);
while(true){
if((i__17483__auto___28236 < len__17482__auto___28235)){
args28182.push((arguments[i__17483__auto___28236]));

var G__28237 = (i__17483__auto___28236 + (1));
i__17483__auto___28236 = G__28237;
continue;
} else {
}
break;
}

var G__28184 = args28182.length;
switch (G__28184) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28182.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20627__auto___28239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___28239,tc,fc){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___28239,tc,fc){
return (function (state_28210){
var state_val_28211 = (state_28210[(1)]);
if((state_val_28211 === (7))){
var inst_28206 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
var statearr_28212_28240 = state_28210__$1;
(statearr_28212_28240[(2)] = inst_28206);

(statearr_28212_28240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (1))){
var state_28210__$1 = state_28210;
var statearr_28213_28241 = state_28210__$1;
(statearr_28213_28241[(2)] = null);

(statearr_28213_28241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (4))){
var inst_28187 = (state_28210[(7)]);
var inst_28187__$1 = (state_28210[(2)]);
var inst_28188 = (inst_28187__$1 == null);
var state_28210__$1 = (function (){var statearr_28214 = state_28210;
(statearr_28214[(7)] = inst_28187__$1);

return statearr_28214;
})();
if(cljs.core.truth_(inst_28188)){
var statearr_28215_28242 = state_28210__$1;
(statearr_28215_28242[(1)] = (5));

} else {
var statearr_28216_28243 = state_28210__$1;
(statearr_28216_28243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (13))){
var state_28210__$1 = state_28210;
var statearr_28217_28244 = state_28210__$1;
(statearr_28217_28244[(2)] = null);

(statearr_28217_28244[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (6))){
var inst_28187 = (state_28210[(7)]);
var inst_28193 = p.call(null,inst_28187);
var state_28210__$1 = state_28210;
if(cljs.core.truth_(inst_28193)){
var statearr_28218_28245 = state_28210__$1;
(statearr_28218_28245[(1)] = (9));

} else {
var statearr_28219_28246 = state_28210__$1;
(statearr_28219_28246[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (3))){
var inst_28208 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28210__$1,inst_28208);
} else {
if((state_val_28211 === (12))){
var state_28210__$1 = state_28210;
var statearr_28220_28247 = state_28210__$1;
(statearr_28220_28247[(2)] = null);

(statearr_28220_28247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (2))){
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28210__$1,(4),ch);
} else {
if((state_val_28211 === (11))){
var inst_28187 = (state_28210[(7)]);
var inst_28197 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28210__$1,(8),inst_28197,inst_28187);
} else {
if((state_val_28211 === (9))){
var state_28210__$1 = state_28210;
var statearr_28221_28248 = state_28210__$1;
(statearr_28221_28248[(2)] = tc);

(statearr_28221_28248[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (5))){
var inst_28190 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28191 = cljs.core.async.close_BANG_.call(null,fc);
var state_28210__$1 = (function (){var statearr_28222 = state_28210;
(statearr_28222[(8)] = inst_28190);

return statearr_28222;
})();
var statearr_28223_28249 = state_28210__$1;
(statearr_28223_28249[(2)] = inst_28191);

(statearr_28223_28249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (14))){
var inst_28204 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
var statearr_28224_28250 = state_28210__$1;
(statearr_28224_28250[(2)] = inst_28204);

(statearr_28224_28250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (10))){
var state_28210__$1 = state_28210;
var statearr_28225_28251 = state_28210__$1;
(statearr_28225_28251[(2)] = fc);

(statearr_28225_28251[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28211 === (8))){
var inst_28199 = (state_28210[(2)]);
var state_28210__$1 = state_28210;
if(cljs.core.truth_(inst_28199)){
var statearr_28226_28252 = state_28210__$1;
(statearr_28226_28252[(1)] = (12));

} else {
var statearr_28227_28253 = state_28210__$1;
(statearr_28227_28253[(1)] = (13));

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
});})(c__20627__auto___28239,tc,fc))
;
return ((function (switch__20562__auto__,c__20627__auto___28239,tc,fc){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_28231 = [null,null,null,null,null,null,null,null,null];
(statearr_28231[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_28231[(1)] = (1));

return statearr_28231;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_28210){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_28210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e28232){if((e28232 instanceof Object)){
var ex__20566__auto__ = e28232;
var statearr_28233_28254 = state_28210;
(statearr_28233_28254[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28255 = state_28210;
state_28210 = G__28255;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_28210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_28210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___28239,tc,fc))
})();
var state__20629__auto__ = (function (){var statearr_28234 = f__20628__auto__.call(null);
(statearr_28234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___28239);

return statearr_28234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___28239,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__){
return (function (state_28302){
var state_val_28303 = (state_28302[(1)]);
if((state_val_28303 === (1))){
var inst_28288 = init;
var state_28302__$1 = (function (){var statearr_28304 = state_28302;
(statearr_28304[(7)] = inst_28288);

return statearr_28304;
})();
var statearr_28305_28320 = state_28302__$1;
(statearr_28305_28320[(2)] = null);

(statearr_28305_28320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (2))){
var state_28302__$1 = state_28302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28302__$1,(4),ch);
} else {
if((state_val_28303 === (3))){
var inst_28300 = (state_28302[(2)]);
var state_28302__$1 = state_28302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28302__$1,inst_28300);
} else {
if((state_val_28303 === (4))){
var inst_28291 = (state_28302[(8)]);
var inst_28291__$1 = (state_28302[(2)]);
var inst_28292 = (inst_28291__$1 == null);
var state_28302__$1 = (function (){var statearr_28306 = state_28302;
(statearr_28306[(8)] = inst_28291__$1);

return statearr_28306;
})();
if(cljs.core.truth_(inst_28292)){
var statearr_28307_28321 = state_28302__$1;
(statearr_28307_28321[(1)] = (5));

} else {
var statearr_28308_28322 = state_28302__$1;
(statearr_28308_28322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (5))){
var inst_28288 = (state_28302[(7)]);
var state_28302__$1 = state_28302;
var statearr_28309_28323 = state_28302__$1;
(statearr_28309_28323[(2)] = inst_28288);

(statearr_28309_28323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (6))){
var inst_28288 = (state_28302[(7)]);
var inst_28291 = (state_28302[(8)]);
var inst_28295 = f.call(null,inst_28288,inst_28291);
var inst_28288__$1 = inst_28295;
var state_28302__$1 = (function (){var statearr_28310 = state_28302;
(statearr_28310[(7)] = inst_28288__$1);

return statearr_28310;
})();
var statearr_28311_28324 = state_28302__$1;
(statearr_28311_28324[(2)] = null);

(statearr_28311_28324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28303 === (7))){
var inst_28298 = (state_28302[(2)]);
var state_28302__$1 = state_28302;
var statearr_28312_28325 = state_28302__$1;
(statearr_28312_28325[(2)] = inst_28298);

(statearr_28312_28325[(1)] = (3));


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
});})(c__20627__auto__))
;
return ((function (switch__20562__auto__,c__20627__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20563__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20563__auto____0 = (function (){
var statearr_28316 = [null,null,null,null,null,null,null,null,null];
(statearr_28316[(0)] = cljs$core$async$reduce_$_state_machine__20563__auto__);

(statearr_28316[(1)] = (1));

return statearr_28316;
});
var cljs$core$async$reduce_$_state_machine__20563__auto____1 = (function (state_28302){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_28302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e28317){if((e28317 instanceof Object)){
var ex__20566__auto__ = e28317;
var statearr_28318_28326 = state_28302;
(statearr_28318_28326[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28327 = state_28302;
state_28302 = G__28327;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20563__auto__ = function(state_28302){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20563__auto____1.call(this,state_28302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20563__auto____0;
cljs$core$async$reduce_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20563__auto____1;
return cljs$core$async$reduce_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__))
})();
var state__20629__auto__ = (function (){var statearr_28319 = f__20628__auto__.call(null);
(statearr_28319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_28319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__))
);

return c__20627__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args28328 = [];
var len__17482__auto___28380 = arguments.length;
var i__17483__auto___28381 = (0);
while(true){
if((i__17483__auto___28381 < len__17482__auto___28380)){
args28328.push((arguments[i__17483__auto___28381]));

var G__28382 = (i__17483__auto___28381 + (1));
i__17483__auto___28381 = G__28382;
continue;
} else {
}
break;
}

var G__28330 = args28328.length;
switch (G__28330) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28328.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__){
return (function (state_28355){
var state_val_28356 = (state_28355[(1)]);
if((state_val_28356 === (7))){
var inst_28337 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28357_28384 = state_28355__$1;
(statearr_28357_28384[(2)] = inst_28337);

(statearr_28357_28384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (1))){
var inst_28331 = cljs.core.seq.call(null,coll);
var inst_28332 = inst_28331;
var state_28355__$1 = (function (){var statearr_28358 = state_28355;
(statearr_28358[(7)] = inst_28332);

return statearr_28358;
})();
var statearr_28359_28385 = state_28355__$1;
(statearr_28359_28385[(2)] = null);

(statearr_28359_28385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (4))){
var inst_28332 = (state_28355[(7)]);
var inst_28335 = cljs.core.first.call(null,inst_28332);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28355__$1,(7),ch,inst_28335);
} else {
if((state_val_28356 === (13))){
var inst_28349 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28360_28386 = state_28355__$1;
(statearr_28360_28386[(2)] = inst_28349);

(statearr_28360_28386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (6))){
var inst_28340 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
if(cljs.core.truth_(inst_28340)){
var statearr_28361_28387 = state_28355__$1;
(statearr_28361_28387[(1)] = (8));

} else {
var statearr_28362_28388 = state_28355__$1;
(statearr_28362_28388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (3))){
var inst_28353 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28355__$1,inst_28353);
} else {
if((state_val_28356 === (12))){
var state_28355__$1 = state_28355;
var statearr_28363_28389 = state_28355__$1;
(statearr_28363_28389[(2)] = null);

(statearr_28363_28389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (2))){
var inst_28332 = (state_28355[(7)]);
var state_28355__$1 = state_28355;
if(cljs.core.truth_(inst_28332)){
var statearr_28364_28390 = state_28355__$1;
(statearr_28364_28390[(1)] = (4));

} else {
var statearr_28365_28391 = state_28355__$1;
(statearr_28365_28391[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (11))){
var inst_28346 = cljs.core.async.close_BANG_.call(null,ch);
var state_28355__$1 = state_28355;
var statearr_28366_28392 = state_28355__$1;
(statearr_28366_28392[(2)] = inst_28346);

(statearr_28366_28392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (9))){
var state_28355__$1 = state_28355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28367_28393 = state_28355__$1;
(statearr_28367_28393[(1)] = (11));

} else {
var statearr_28368_28394 = state_28355__$1;
(statearr_28368_28394[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (5))){
var inst_28332 = (state_28355[(7)]);
var state_28355__$1 = state_28355;
var statearr_28369_28395 = state_28355__$1;
(statearr_28369_28395[(2)] = inst_28332);

(statearr_28369_28395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (10))){
var inst_28351 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28370_28396 = state_28355__$1;
(statearr_28370_28396[(2)] = inst_28351);

(statearr_28370_28396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (8))){
var inst_28332 = (state_28355[(7)]);
var inst_28342 = cljs.core.next.call(null,inst_28332);
var inst_28332__$1 = inst_28342;
var state_28355__$1 = (function (){var statearr_28371 = state_28355;
(statearr_28371[(7)] = inst_28332__$1);

return statearr_28371;
})();
var statearr_28372_28397 = state_28355__$1;
(statearr_28372_28397[(2)] = null);

(statearr_28372_28397[(1)] = (2));


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
});})(c__20627__auto__))
;
return ((function (switch__20562__auto__,c__20627__auto__){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_28376 = [null,null,null,null,null,null,null,null];
(statearr_28376[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_28376[(1)] = (1));

return statearr_28376;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_28355){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_28355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e28377){if((e28377 instanceof Object)){
var ex__20566__auto__ = e28377;
var statearr_28378_28398 = state_28355;
(statearr_28378_28398[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28399 = state_28355;
state_28355 = G__28399;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_28355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_28355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__))
})();
var state__20629__auto__ = (function (){var statearr_28379 = f__20628__auto__.call(null);
(statearr_28379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_28379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__))
);

return c__20627__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17079__auto__ = (((_ == null))?null:_);
var m__17080__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,_);
} else {
var m__17080__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17079__auto__ = (((m == null))?null:m);
var m__17080__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17080__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17079__auto__ = (((m == null))?null:m);
var m__17080__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,m,ch);
} else {
var m__17080__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17079__auto__ = (((m == null))?null:m);
var m__17080__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,m);
} else {
var m__17080__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28625 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28625 = (function (mult,ch,cs,meta28626){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28626 = meta28626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28627,meta28626__$1){
var self__ = this;
var _28627__$1 = this;
return (new cljs.core.async.t28625(self__.mult,self__.ch,self__.cs,meta28626__$1));
});})(cs))
;

cljs.core.async.t28625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28627){
var self__ = this;
var _28627__$1 = this;
return self__.meta28626;
});})(cs))
;

cljs.core.async.t28625.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28625.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28625.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28625.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28625.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28625.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28626","meta28626",-979470726,null)], null);
});})(cs))
;

cljs.core.async.t28625.cljs$lang$type = true;

cljs.core.async.t28625.cljs$lang$ctorStr = "cljs.core.async/t28625";

cljs.core.async.t28625.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t28625");
});})(cs))
;

cljs.core.async.__GT_t28625 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28625(mult__$1,ch__$1,cs__$1,meta28626){
return (new cljs.core.async.t28625(mult__$1,ch__$1,cs__$1,meta28626));
});})(cs))
;

}

return (new cljs.core.async.t28625(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20627__auto___28846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___28846,cs,m,dchan,dctr,done){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___28846,cs,m,dchan,dctr,done){
return (function (state_28758){
var state_val_28759 = (state_28758[(1)]);
if((state_val_28759 === (7))){
var inst_28754 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28760_28847 = state_28758__$1;
(statearr_28760_28847[(2)] = inst_28754);

(statearr_28760_28847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (20))){
var inst_28659 = (state_28758[(7)]);
var inst_28669 = cljs.core.first.call(null,inst_28659);
var inst_28670 = cljs.core.nth.call(null,inst_28669,(0),null);
var inst_28671 = cljs.core.nth.call(null,inst_28669,(1),null);
var state_28758__$1 = (function (){var statearr_28761 = state_28758;
(statearr_28761[(8)] = inst_28670);

return statearr_28761;
})();
if(cljs.core.truth_(inst_28671)){
var statearr_28762_28848 = state_28758__$1;
(statearr_28762_28848[(1)] = (22));

} else {
var statearr_28763_28849 = state_28758__$1;
(statearr_28763_28849[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (27))){
var inst_28699 = (state_28758[(9)]);
var inst_28706 = (state_28758[(10)]);
var inst_28630 = (state_28758[(11)]);
var inst_28701 = (state_28758[(12)]);
var inst_28706__$1 = cljs.core._nth.call(null,inst_28699,inst_28701);
var inst_28707 = cljs.core.async.put_BANG_.call(null,inst_28706__$1,inst_28630,done);
var state_28758__$1 = (function (){var statearr_28764 = state_28758;
(statearr_28764[(10)] = inst_28706__$1);

return statearr_28764;
})();
if(cljs.core.truth_(inst_28707)){
var statearr_28765_28850 = state_28758__$1;
(statearr_28765_28850[(1)] = (30));

} else {
var statearr_28766_28851 = state_28758__$1;
(statearr_28766_28851[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (1))){
var state_28758__$1 = state_28758;
var statearr_28767_28852 = state_28758__$1;
(statearr_28767_28852[(2)] = null);

(statearr_28767_28852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (24))){
var inst_28659 = (state_28758[(7)]);
var inst_28676 = (state_28758[(2)]);
var inst_28677 = cljs.core.next.call(null,inst_28659);
var inst_28639 = inst_28677;
var inst_28640 = null;
var inst_28641 = (0);
var inst_28642 = (0);
var state_28758__$1 = (function (){var statearr_28768 = state_28758;
(statearr_28768[(13)] = inst_28640);

(statearr_28768[(14)] = inst_28642);

(statearr_28768[(15)] = inst_28641);

(statearr_28768[(16)] = inst_28639);

(statearr_28768[(17)] = inst_28676);

return statearr_28768;
})();
var statearr_28769_28853 = state_28758__$1;
(statearr_28769_28853[(2)] = null);

(statearr_28769_28853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (39))){
var state_28758__$1 = state_28758;
var statearr_28773_28854 = state_28758__$1;
(statearr_28773_28854[(2)] = null);

(statearr_28773_28854[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (4))){
var inst_28630 = (state_28758[(11)]);
var inst_28630__$1 = (state_28758[(2)]);
var inst_28631 = (inst_28630__$1 == null);
var state_28758__$1 = (function (){var statearr_28774 = state_28758;
(statearr_28774[(11)] = inst_28630__$1);

return statearr_28774;
})();
if(cljs.core.truth_(inst_28631)){
var statearr_28775_28855 = state_28758__$1;
(statearr_28775_28855[(1)] = (5));

} else {
var statearr_28776_28856 = state_28758__$1;
(statearr_28776_28856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (15))){
var inst_28640 = (state_28758[(13)]);
var inst_28642 = (state_28758[(14)]);
var inst_28641 = (state_28758[(15)]);
var inst_28639 = (state_28758[(16)]);
var inst_28655 = (state_28758[(2)]);
var inst_28656 = (inst_28642 + (1));
var tmp28770 = inst_28640;
var tmp28771 = inst_28641;
var tmp28772 = inst_28639;
var inst_28639__$1 = tmp28772;
var inst_28640__$1 = tmp28770;
var inst_28641__$1 = tmp28771;
var inst_28642__$1 = inst_28656;
var state_28758__$1 = (function (){var statearr_28777 = state_28758;
(statearr_28777[(13)] = inst_28640__$1);

(statearr_28777[(14)] = inst_28642__$1);

(statearr_28777[(15)] = inst_28641__$1);

(statearr_28777[(18)] = inst_28655);

(statearr_28777[(16)] = inst_28639__$1);

return statearr_28777;
})();
var statearr_28778_28857 = state_28758__$1;
(statearr_28778_28857[(2)] = null);

(statearr_28778_28857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (21))){
var inst_28680 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28782_28858 = state_28758__$1;
(statearr_28782_28858[(2)] = inst_28680);

(statearr_28782_28858[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (31))){
var inst_28706 = (state_28758[(10)]);
var inst_28710 = done.call(null,null);
var inst_28711 = cljs.core.async.untap_STAR_.call(null,m,inst_28706);
var state_28758__$1 = (function (){var statearr_28783 = state_28758;
(statearr_28783[(19)] = inst_28710);

return statearr_28783;
})();
var statearr_28784_28859 = state_28758__$1;
(statearr_28784_28859[(2)] = inst_28711);

(statearr_28784_28859[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (32))){
var inst_28699 = (state_28758[(9)]);
var inst_28698 = (state_28758[(20)]);
var inst_28700 = (state_28758[(21)]);
var inst_28701 = (state_28758[(12)]);
var inst_28713 = (state_28758[(2)]);
var inst_28714 = (inst_28701 + (1));
var tmp28779 = inst_28699;
var tmp28780 = inst_28698;
var tmp28781 = inst_28700;
var inst_28698__$1 = tmp28780;
var inst_28699__$1 = tmp28779;
var inst_28700__$1 = tmp28781;
var inst_28701__$1 = inst_28714;
var state_28758__$1 = (function (){var statearr_28785 = state_28758;
(statearr_28785[(9)] = inst_28699__$1);

(statearr_28785[(20)] = inst_28698__$1);

(statearr_28785[(21)] = inst_28700__$1);

(statearr_28785[(22)] = inst_28713);

(statearr_28785[(12)] = inst_28701__$1);

return statearr_28785;
})();
var statearr_28786_28860 = state_28758__$1;
(statearr_28786_28860[(2)] = null);

(statearr_28786_28860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (40))){
var inst_28726 = (state_28758[(23)]);
var inst_28730 = done.call(null,null);
var inst_28731 = cljs.core.async.untap_STAR_.call(null,m,inst_28726);
var state_28758__$1 = (function (){var statearr_28787 = state_28758;
(statearr_28787[(24)] = inst_28730);

return statearr_28787;
})();
var statearr_28788_28861 = state_28758__$1;
(statearr_28788_28861[(2)] = inst_28731);

(statearr_28788_28861[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (33))){
var inst_28717 = (state_28758[(25)]);
var inst_28719 = cljs.core.chunked_seq_QMARK_.call(null,inst_28717);
var state_28758__$1 = state_28758;
if(inst_28719){
var statearr_28789_28862 = state_28758__$1;
(statearr_28789_28862[(1)] = (36));

} else {
var statearr_28790_28863 = state_28758__$1;
(statearr_28790_28863[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (13))){
var inst_28649 = (state_28758[(26)]);
var inst_28652 = cljs.core.async.close_BANG_.call(null,inst_28649);
var state_28758__$1 = state_28758;
var statearr_28791_28864 = state_28758__$1;
(statearr_28791_28864[(2)] = inst_28652);

(statearr_28791_28864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (22))){
var inst_28670 = (state_28758[(8)]);
var inst_28673 = cljs.core.async.close_BANG_.call(null,inst_28670);
var state_28758__$1 = state_28758;
var statearr_28792_28865 = state_28758__$1;
(statearr_28792_28865[(2)] = inst_28673);

(statearr_28792_28865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (36))){
var inst_28717 = (state_28758[(25)]);
var inst_28721 = cljs.core.chunk_first.call(null,inst_28717);
var inst_28722 = cljs.core.chunk_rest.call(null,inst_28717);
var inst_28723 = cljs.core.count.call(null,inst_28721);
var inst_28698 = inst_28722;
var inst_28699 = inst_28721;
var inst_28700 = inst_28723;
var inst_28701 = (0);
var state_28758__$1 = (function (){var statearr_28793 = state_28758;
(statearr_28793[(9)] = inst_28699);

(statearr_28793[(20)] = inst_28698);

(statearr_28793[(21)] = inst_28700);

(statearr_28793[(12)] = inst_28701);

return statearr_28793;
})();
var statearr_28794_28866 = state_28758__$1;
(statearr_28794_28866[(2)] = null);

(statearr_28794_28866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (41))){
var inst_28717 = (state_28758[(25)]);
var inst_28733 = (state_28758[(2)]);
var inst_28734 = cljs.core.next.call(null,inst_28717);
var inst_28698 = inst_28734;
var inst_28699 = null;
var inst_28700 = (0);
var inst_28701 = (0);
var state_28758__$1 = (function (){var statearr_28795 = state_28758;
(statearr_28795[(9)] = inst_28699);

(statearr_28795[(27)] = inst_28733);

(statearr_28795[(20)] = inst_28698);

(statearr_28795[(21)] = inst_28700);

(statearr_28795[(12)] = inst_28701);

return statearr_28795;
})();
var statearr_28796_28867 = state_28758__$1;
(statearr_28796_28867[(2)] = null);

(statearr_28796_28867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (43))){
var state_28758__$1 = state_28758;
var statearr_28797_28868 = state_28758__$1;
(statearr_28797_28868[(2)] = null);

(statearr_28797_28868[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (29))){
var inst_28742 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28798_28869 = state_28758__$1;
(statearr_28798_28869[(2)] = inst_28742);

(statearr_28798_28869[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (44))){
var inst_28751 = (state_28758[(2)]);
var state_28758__$1 = (function (){var statearr_28799 = state_28758;
(statearr_28799[(28)] = inst_28751);

return statearr_28799;
})();
var statearr_28800_28870 = state_28758__$1;
(statearr_28800_28870[(2)] = null);

(statearr_28800_28870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (6))){
var inst_28690 = (state_28758[(29)]);
var inst_28689 = cljs.core.deref.call(null,cs);
var inst_28690__$1 = cljs.core.keys.call(null,inst_28689);
var inst_28691 = cljs.core.count.call(null,inst_28690__$1);
var inst_28692 = cljs.core.reset_BANG_.call(null,dctr,inst_28691);
var inst_28697 = cljs.core.seq.call(null,inst_28690__$1);
var inst_28698 = inst_28697;
var inst_28699 = null;
var inst_28700 = (0);
var inst_28701 = (0);
var state_28758__$1 = (function (){var statearr_28801 = state_28758;
(statearr_28801[(29)] = inst_28690__$1);

(statearr_28801[(9)] = inst_28699);

(statearr_28801[(20)] = inst_28698);

(statearr_28801[(21)] = inst_28700);

(statearr_28801[(12)] = inst_28701);

(statearr_28801[(30)] = inst_28692);

return statearr_28801;
})();
var statearr_28802_28871 = state_28758__$1;
(statearr_28802_28871[(2)] = null);

(statearr_28802_28871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (28))){
var inst_28698 = (state_28758[(20)]);
var inst_28717 = (state_28758[(25)]);
var inst_28717__$1 = cljs.core.seq.call(null,inst_28698);
var state_28758__$1 = (function (){var statearr_28803 = state_28758;
(statearr_28803[(25)] = inst_28717__$1);

return statearr_28803;
})();
if(inst_28717__$1){
var statearr_28804_28872 = state_28758__$1;
(statearr_28804_28872[(1)] = (33));

} else {
var statearr_28805_28873 = state_28758__$1;
(statearr_28805_28873[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (25))){
var inst_28700 = (state_28758[(21)]);
var inst_28701 = (state_28758[(12)]);
var inst_28703 = (inst_28701 < inst_28700);
var inst_28704 = inst_28703;
var state_28758__$1 = state_28758;
if(cljs.core.truth_(inst_28704)){
var statearr_28806_28874 = state_28758__$1;
(statearr_28806_28874[(1)] = (27));

} else {
var statearr_28807_28875 = state_28758__$1;
(statearr_28807_28875[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (34))){
var state_28758__$1 = state_28758;
var statearr_28808_28876 = state_28758__$1;
(statearr_28808_28876[(2)] = null);

(statearr_28808_28876[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (17))){
var state_28758__$1 = state_28758;
var statearr_28809_28877 = state_28758__$1;
(statearr_28809_28877[(2)] = null);

(statearr_28809_28877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (3))){
var inst_28756 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28758__$1,inst_28756);
} else {
if((state_val_28759 === (12))){
var inst_28685 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28810_28878 = state_28758__$1;
(statearr_28810_28878[(2)] = inst_28685);

(statearr_28810_28878[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (2))){
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28758__$1,(4),ch);
} else {
if((state_val_28759 === (23))){
var state_28758__$1 = state_28758;
var statearr_28811_28879 = state_28758__$1;
(statearr_28811_28879[(2)] = null);

(statearr_28811_28879[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (35))){
var inst_28740 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28812_28880 = state_28758__$1;
(statearr_28812_28880[(2)] = inst_28740);

(statearr_28812_28880[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (19))){
var inst_28659 = (state_28758[(7)]);
var inst_28663 = cljs.core.chunk_first.call(null,inst_28659);
var inst_28664 = cljs.core.chunk_rest.call(null,inst_28659);
var inst_28665 = cljs.core.count.call(null,inst_28663);
var inst_28639 = inst_28664;
var inst_28640 = inst_28663;
var inst_28641 = inst_28665;
var inst_28642 = (0);
var state_28758__$1 = (function (){var statearr_28813 = state_28758;
(statearr_28813[(13)] = inst_28640);

(statearr_28813[(14)] = inst_28642);

(statearr_28813[(15)] = inst_28641);

(statearr_28813[(16)] = inst_28639);

return statearr_28813;
})();
var statearr_28814_28881 = state_28758__$1;
(statearr_28814_28881[(2)] = null);

(statearr_28814_28881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (11))){
var inst_28659 = (state_28758[(7)]);
var inst_28639 = (state_28758[(16)]);
var inst_28659__$1 = cljs.core.seq.call(null,inst_28639);
var state_28758__$1 = (function (){var statearr_28815 = state_28758;
(statearr_28815[(7)] = inst_28659__$1);

return statearr_28815;
})();
if(inst_28659__$1){
var statearr_28816_28882 = state_28758__$1;
(statearr_28816_28882[(1)] = (16));

} else {
var statearr_28817_28883 = state_28758__$1;
(statearr_28817_28883[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (9))){
var inst_28687 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28818_28884 = state_28758__$1;
(statearr_28818_28884[(2)] = inst_28687);

(statearr_28818_28884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (5))){
var inst_28637 = cljs.core.deref.call(null,cs);
var inst_28638 = cljs.core.seq.call(null,inst_28637);
var inst_28639 = inst_28638;
var inst_28640 = null;
var inst_28641 = (0);
var inst_28642 = (0);
var state_28758__$1 = (function (){var statearr_28819 = state_28758;
(statearr_28819[(13)] = inst_28640);

(statearr_28819[(14)] = inst_28642);

(statearr_28819[(15)] = inst_28641);

(statearr_28819[(16)] = inst_28639);

return statearr_28819;
})();
var statearr_28820_28885 = state_28758__$1;
(statearr_28820_28885[(2)] = null);

(statearr_28820_28885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (14))){
var state_28758__$1 = state_28758;
var statearr_28821_28886 = state_28758__$1;
(statearr_28821_28886[(2)] = null);

(statearr_28821_28886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (45))){
var inst_28748 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28822_28887 = state_28758__$1;
(statearr_28822_28887[(2)] = inst_28748);

(statearr_28822_28887[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (26))){
var inst_28690 = (state_28758[(29)]);
var inst_28744 = (state_28758[(2)]);
var inst_28745 = cljs.core.seq.call(null,inst_28690);
var state_28758__$1 = (function (){var statearr_28823 = state_28758;
(statearr_28823[(31)] = inst_28744);

return statearr_28823;
})();
if(inst_28745){
var statearr_28824_28888 = state_28758__$1;
(statearr_28824_28888[(1)] = (42));

} else {
var statearr_28825_28889 = state_28758__$1;
(statearr_28825_28889[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (16))){
var inst_28659 = (state_28758[(7)]);
var inst_28661 = cljs.core.chunked_seq_QMARK_.call(null,inst_28659);
var state_28758__$1 = state_28758;
if(inst_28661){
var statearr_28826_28890 = state_28758__$1;
(statearr_28826_28890[(1)] = (19));

} else {
var statearr_28827_28891 = state_28758__$1;
(statearr_28827_28891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (38))){
var inst_28737 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28828_28892 = state_28758__$1;
(statearr_28828_28892[(2)] = inst_28737);

(statearr_28828_28892[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (30))){
var state_28758__$1 = state_28758;
var statearr_28829_28893 = state_28758__$1;
(statearr_28829_28893[(2)] = null);

(statearr_28829_28893[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (10))){
var inst_28640 = (state_28758[(13)]);
var inst_28642 = (state_28758[(14)]);
var inst_28648 = cljs.core._nth.call(null,inst_28640,inst_28642);
var inst_28649 = cljs.core.nth.call(null,inst_28648,(0),null);
var inst_28650 = cljs.core.nth.call(null,inst_28648,(1),null);
var state_28758__$1 = (function (){var statearr_28830 = state_28758;
(statearr_28830[(26)] = inst_28649);

return statearr_28830;
})();
if(cljs.core.truth_(inst_28650)){
var statearr_28831_28894 = state_28758__$1;
(statearr_28831_28894[(1)] = (13));

} else {
var statearr_28832_28895 = state_28758__$1;
(statearr_28832_28895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (18))){
var inst_28683 = (state_28758[(2)]);
var state_28758__$1 = state_28758;
var statearr_28833_28896 = state_28758__$1;
(statearr_28833_28896[(2)] = inst_28683);

(statearr_28833_28896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (42))){
var state_28758__$1 = state_28758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28758__$1,(45),dchan);
} else {
if((state_val_28759 === (37))){
var inst_28717 = (state_28758[(25)]);
var inst_28630 = (state_28758[(11)]);
var inst_28726 = (state_28758[(23)]);
var inst_28726__$1 = cljs.core.first.call(null,inst_28717);
var inst_28727 = cljs.core.async.put_BANG_.call(null,inst_28726__$1,inst_28630,done);
var state_28758__$1 = (function (){var statearr_28834 = state_28758;
(statearr_28834[(23)] = inst_28726__$1);

return statearr_28834;
})();
if(cljs.core.truth_(inst_28727)){
var statearr_28835_28897 = state_28758__$1;
(statearr_28835_28897[(1)] = (39));

} else {
var statearr_28836_28898 = state_28758__$1;
(statearr_28836_28898[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28759 === (8))){
var inst_28642 = (state_28758[(14)]);
var inst_28641 = (state_28758[(15)]);
var inst_28644 = (inst_28642 < inst_28641);
var inst_28645 = inst_28644;
var state_28758__$1 = state_28758;
if(cljs.core.truth_(inst_28645)){
var statearr_28837_28899 = state_28758__$1;
(statearr_28837_28899[(1)] = (10));

} else {
var statearr_28838_28900 = state_28758__$1;
(statearr_28838_28900[(1)] = (11));

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
}
}
});})(c__20627__auto___28846,cs,m,dchan,dctr,done))
;
return ((function (switch__20562__auto__,c__20627__auto___28846,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20563__auto__ = null;
var cljs$core$async$mult_$_state_machine__20563__auto____0 = (function (){
var statearr_28842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28842[(0)] = cljs$core$async$mult_$_state_machine__20563__auto__);

(statearr_28842[(1)] = (1));

return statearr_28842;
});
var cljs$core$async$mult_$_state_machine__20563__auto____1 = (function (state_28758){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_28758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e28843){if((e28843 instanceof Object)){
var ex__20566__auto__ = e28843;
var statearr_28844_28901 = state_28758;
(statearr_28844_28901[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28902 = state_28758;
state_28758 = G__28902;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20563__auto__ = function(state_28758){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20563__auto____1.call(this,state_28758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20563__auto____0;
cljs$core$async$mult_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20563__auto____1;
return cljs$core$async$mult_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___28846,cs,m,dchan,dctr,done))
})();
var state__20629__auto__ = (function (){var statearr_28845 = f__20628__auto__.call(null);
(statearr_28845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___28846);

return statearr_28845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___28846,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args28903 = [];
var len__17482__auto___28906 = arguments.length;
var i__17483__auto___28907 = (0);
while(true){
if((i__17483__auto___28907 < len__17482__auto___28906)){
args28903.push((arguments[i__17483__auto___28907]));

var G__28908 = (i__17483__auto___28907 + (1));
i__17483__auto___28907 = G__28908;
continue;
} else {
}
break;
}

var G__28905 = args28903.length;
switch (G__28905) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28903.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17079__auto__ = (((m == null))?null:m);
var m__17080__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,m,ch);
} else {
var m__17080__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17079__auto__ = (((m == null))?null:m);
var m__17080__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,m,ch);
} else {
var m__17080__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17079__auto__ = (((m == null))?null:m);
var m__17080__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,m);
} else {
var m__17080__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17079__auto__ = (((m == null))?null:m);
var m__17080__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,m,state_map);
} else {
var m__17080__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17079__auto__ = (((m == null))?null:m);
var m__17080__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,m,mode);
} else {
var m__17080__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17489__auto__ = [];
var len__17482__auto___28922 = arguments.length;
var i__17483__auto___28923 = (0);
while(true){
if((i__17483__auto___28923 < len__17482__auto___28922)){
args__17489__auto__.push((arguments[i__17483__auto___28923]));

var G__28924 = (i__17483__auto___28923 + (1));
i__17483__auto___28923 = G__28924;
continue;
} else {
}
break;
}

var argseq__17490__auto__ = ((((3) < args__17489__auto__.length))?(new cljs.core.IndexedSeq(args__17489__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17490__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28916){
var map__28917 = p__28916;
var map__28917__$1 = ((((!((map__28917 == null)))?((((map__28917.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28917.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28917):map__28917);
var opts = map__28917__$1;
var statearr_28919_28925 = state;
(statearr_28919_28925[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28917,map__28917__$1,opts){
return (function (val){
var statearr_28920_28926 = state;
(statearr_28920_28926[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28917,map__28917__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28921_28927 = state;
(statearr_28921_28927[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28912){
var G__28913 = cljs.core.first.call(null,seq28912);
var seq28912__$1 = cljs.core.next.call(null,seq28912);
var G__28914 = cljs.core.first.call(null,seq28912__$1);
var seq28912__$2 = cljs.core.next.call(null,seq28912__$1);
var G__28915 = cljs.core.first.call(null,seq28912__$2);
var seq28912__$3 = cljs.core.next.call(null,seq28912__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28913,G__28914,G__28915,seq28912__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29091 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29091 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29092){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29092 = meta29092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29093,meta29092__$1){
var self__ = this;
var _29093__$1 = this;
return (new cljs.core.async.t29091(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29092__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29093){
var self__ = this;
var _29093__$1 = this;
return self__.meta29092;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29091.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29091.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29091.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29091.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29091.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29091.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29091.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29091.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29092","meta29092",1624930441,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29091.cljs$lang$type = true;

cljs.core.async.t29091.cljs$lang$ctorStr = "cljs.core.async/t29091";

cljs.core.async.t29091.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t29091");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29091 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29091(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29092){
return (new cljs.core.async.t29091(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29092));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29091(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20627__auto___29254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29191){
var state_val_29192 = (state_29191[(1)]);
if((state_val_29192 === (7))){
var inst_29109 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29193_29255 = state_29191__$1;
(statearr_29193_29255[(2)] = inst_29109);

(statearr_29193_29255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (20))){
var inst_29121 = (state_29191[(7)]);
var state_29191__$1 = state_29191;
var statearr_29194_29256 = state_29191__$1;
(statearr_29194_29256[(2)] = inst_29121);

(statearr_29194_29256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (27))){
var state_29191__$1 = state_29191;
var statearr_29195_29257 = state_29191__$1;
(statearr_29195_29257[(2)] = null);

(statearr_29195_29257[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (1))){
var inst_29097 = (state_29191[(8)]);
var inst_29097__$1 = calc_state.call(null);
var inst_29099 = (inst_29097__$1 == null);
var inst_29100 = cljs.core.not.call(null,inst_29099);
var state_29191__$1 = (function (){var statearr_29196 = state_29191;
(statearr_29196[(8)] = inst_29097__$1);

return statearr_29196;
})();
if(inst_29100){
var statearr_29197_29258 = state_29191__$1;
(statearr_29197_29258[(1)] = (2));

} else {
var statearr_29198_29259 = state_29191__$1;
(statearr_29198_29259[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (24))){
var inst_29151 = (state_29191[(9)]);
var inst_29165 = (state_29191[(10)]);
var inst_29144 = (state_29191[(11)]);
var inst_29165__$1 = inst_29144.call(null,inst_29151);
var state_29191__$1 = (function (){var statearr_29199 = state_29191;
(statearr_29199[(10)] = inst_29165__$1);

return statearr_29199;
})();
if(cljs.core.truth_(inst_29165__$1)){
var statearr_29200_29260 = state_29191__$1;
(statearr_29200_29260[(1)] = (29));

} else {
var statearr_29201_29261 = state_29191__$1;
(statearr_29201_29261[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (4))){
var inst_29112 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29112)){
var statearr_29202_29262 = state_29191__$1;
(statearr_29202_29262[(1)] = (8));

} else {
var statearr_29203_29263 = state_29191__$1;
(statearr_29203_29263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (15))){
var inst_29138 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29138)){
var statearr_29204_29264 = state_29191__$1;
(statearr_29204_29264[(1)] = (19));

} else {
var statearr_29205_29265 = state_29191__$1;
(statearr_29205_29265[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (21))){
var inst_29143 = (state_29191[(12)]);
var inst_29143__$1 = (state_29191[(2)]);
var inst_29144 = cljs.core.get.call(null,inst_29143__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29145 = cljs.core.get.call(null,inst_29143__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29146 = cljs.core.get.call(null,inst_29143__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29191__$1 = (function (){var statearr_29206 = state_29191;
(statearr_29206[(13)] = inst_29145);

(statearr_29206[(12)] = inst_29143__$1);

(statearr_29206[(11)] = inst_29144);

return statearr_29206;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29191__$1,(22),inst_29146);
} else {
if((state_val_29192 === (31))){
var inst_29173 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29173)){
var statearr_29207_29266 = state_29191__$1;
(statearr_29207_29266[(1)] = (32));

} else {
var statearr_29208_29267 = state_29191__$1;
(statearr_29208_29267[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (32))){
var inst_29150 = (state_29191[(14)]);
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29191__$1,(35),out,inst_29150);
} else {
if((state_val_29192 === (33))){
var inst_29143 = (state_29191[(12)]);
var inst_29121 = inst_29143;
var state_29191__$1 = (function (){var statearr_29209 = state_29191;
(statearr_29209[(7)] = inst_29121);

return statearr_29209;
})();
var statearr_29210_29268 = state_29191__$1;
(statearr_29210_29268[(2)] = null);

(statearr_29210_29268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (13))){
var inst_29121 = (state_29191[(7)]);
var inst_29128 = inst_29121.cljs$lang$protocol_mask$partition0$;
var inst_29129 = (inst_29128 & (64));
var inst_29130 = inst_29121.cljs$core$ISeq$;
var inst_29131 = (inst_29129) || (inst_29130);
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29131)){
var statearr_29211_29269 = state_29191__$1;
(statearr_29211_29269[(1)] = (16));

} else {
var statearr_29212_29270 = state_29191__$1;
(statearr_29212_29270[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (22))){
var inst_29151 = (state_29191[(9)]);
var inst_29150 = (state_29191[(14)]);
var inst_29149 = (state_29191[(2)]);
var inst_29150__$1 = cljs.core.nth.call(null,inst_29149,(0),null);
var inst_29151__$1 = cljs.core.nth.call(null,inst_29149,(1),null);
var inst_29152 = (inst_29150__$1 == null);
var inst_29153 = cljs.core._EQ_.call(null,inst_29151__$1,change);
var inst_29154 = (inst_29152) || (inst_29153);
var state_29191__$1 = (function (){var statearr_29213 = state_29191;
(statearr_29213[(9)] = inst_29151__$1);

(statearr_29213[(14)] = inst_29150__$1);

return statearr_29213;
})();
if(cljs.core.truth_(inst_29154)){
var statearr_29214_29271 = state_29191__$1;
(statearr_29214_29271[(1)] = (23));

} else {
var statearr_29215_29272 = state_29191__$1;
(statearr_29215_29272[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (36))){
var inst_29143 = (state_29191[(12)]);
var inst_29121 = inst_29143;
var state_29191__$1 = (function (){var statearr_29216 = state_29191;
(statearr_29216[(7)] = inst_29121);

return statearr_29216;
})();
var statearr_29217_29273 = state_29191__$1;
(statearr_29217_29273[(2)] = null);

(statearr_29217_29273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (29))){
var inst_29165 = (state_29191[(10)]);
var state_29191__$1 = state_29191;
var statearr_29218_29274 = state_29191__$1;
(statearr_29218_29274[(2)] = inst_29165);

(statearr_29218_29274[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (6))){
var state_29191__$1 = state_29191;
var statearr_29219_29275 = state_29191__$1;
(statearr_29219_29275[(2)] = false);

(statearr_29219_29275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (28))){
var inst_29161 = (state_29191[(2)]);
var inst_29162 = calc_state.call(null);
var inst_29121 = inst_29162;
var state_29191__$1 = (function (){var statearr_29220 = state_29191;
(statearr_29220[(15)] = inst_29161);

(statearr_29220[(7)] = inst_29121);

return statearr_29220;
})();
var statearr_29221_29276 = state_29191__$1;
(statearr_29221_29276[(2)] = null);

(statearr_29221_29276[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (25))){
var inst_29187 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29222_29277 = state_29191__$1;
(statearr_29222_29277[(2)] = inst_29187);

(statearr_29222_29277[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (34))){
var inst_29185 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29223_29278 = state_29191__$1;
(statearr_29223_29278[(2)] = inst_29185);

(statearr_29223_29278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (17))){
var state_29191__$1 = state_29191;
var statearr_29224_29279 = state_29191__$1;
(statearr_29224_29279[(2)] = false);

(statearr_29224_29279[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (3))){
var state_29191__$1 = state_29191;
var statearr_29225_29280 = state_29191__$1;
(statearr_29225_29280[(2)] = false);

(statearr_29225_29280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (12))){
var inst_29189 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29191__$1,inst_29189);
} else {
if((state_val_29192 === (2))){
var inst_29097 = (state_29191[(8)]);
var inst_29102 = inst_29097.cljs$lang$protocol_mask$partition0$;
var inst_29103 = (inst_29102 & (64));
var inst_29104 = inst_29097.cljs$core$ISeq$;
var inst_29105 = (inst_29103) || (inst_29104);
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29105)){
var statearr_29226_29281 = state_29191__$1;
(statearr_29226_29281[(1)] = (5));

} else {
var statearr_29227_29282 = state_29191__$1;
(statearr_29227_29282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (23))){
var inst_29150 = (state_29191[(14)]);
var inst_29156 = (inst_29150 == null);
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29156)){
var statearr_29228_29283 = state_29191__$1;
(statearr_29228_29283[(1)] = (26));

} else {
var statearr_29229_29284 = state_29191__$1;
(statearr_29229_29284[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (35))){
var inst_29176 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29176)){
var statearr_29230_29285 = state_29191__$1;
(statearr_29230_29285[(1)] = (36));

} else {
var statearr_29231_29286 = state_29191__$1;
(statearr_29231_29286[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (19))){
var inst_29121 = (state_29191[(7)]);
var inst_29140 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29121);
var state_29191__$1 = state_29191;
var statearr_29232_29287 = state_29191__$1;
(statearr_29232_29287[(2)] = inst_29140);

(statearr_29232_29287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (11))){
var inst_29121 = (state_29191[(7)]);
var inst_29125 = (inst_29121 == null);
var inst_29126 = cljs.core.not.call(null,inst_29125);
var state_29191__$1 = state_29191;
if(inst_29126){
var statearr_29233_29288 = state_29191__$1;
(statearr_29233_29288[(1)] = (13));

} else {
var statearr_29234_29289 = state_29191__$1;
(statearr_29234_29289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (9))){
var inst_29097 = (state_29191[(8)]);
var state_29191__$1 = state_29191;
var statearr_29235_29290 = state_29191__$1;
(statearr_29235_29290[(2)] = inst_29097);

(statearr_29235_29290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (5))){
var state_29191__$1 = state_29191;
var statearr_29236_29291 = state_29191__$1;
(statearr_29236_29291[(2)] = true);

(statearr_29236_29291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (14))){
var state_29191__$1 = state_29191;
var statearr_29237_29292 = state_29191__$1;
(statearr_29237_29292[(2)] = false);

(statearr_29237_29292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (26))){
var inst_29151 = (state_29191[(9)]);
var inst_29158 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29151);
var state_29191__$1 = state_29191;
var statearr_29238_29293 = state_29191__$1;
(statearr_29238_29293[(2)] = inst_29158);

(statearr_29238_29293[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (16))){
var state_29191__$1 = state_29191;
var statearr_29239_29294 = state_29191__$1;
(statearr_29239_29294[(2)] = true);

(statearr_29239_29294[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (38))){
var inst_29181 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29240_29295 = state_29191__$1;
(statearr_29240_29295[(2)] = inst_29181);

(statearr_29240_29295[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (30))){
var inst_29151 = (state_29191[(9)]);
var inst_29145 = (state_29191[(13)]);
var inst_29144 = (state_29191[(11)]);
var inst_29168 = cljs.core.empty_QMARK_.call(null,inst_29144);
var inst_29169 = inst_29145.call(null,inst_29151);
var inst_29170 = cljs.core.not.call(null,inst_29169);
var inst_29171 = (inst_29168) && (inst_29170);
var state_29191__$1 = state_29191;
var statearr_29241_29296 = state_29191__$1;
(statearr_29241_29296[(2)] = inst_29171);

(statearr_29241_29296[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (10))){
var inst_29097 = (state_29191[(8)]);
var inst_29117 = (state_29191[(2)]);
var inst_29118 = cljs.core.get.call(null,inst_29117,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29119 = cljs.core.get.call(null,inst_29117,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29120 = cljs.core.get.call(null,inst_29117,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29121 = inst_29097;
var state_29191__$1 = (function (){var statearr_29242 = state_29191;
(statearr_29242[(16)] = inst_29119);

(statearr_29242[(7)] = inst_29121);

(statearr_29242[(17)] = inst_29118);

(statearr_29242[(18)] = inst_29120);

return statearr_29242;
})();
var statearr_29243_29297 = state_29191__$1;
(statearr_29243_29297[(2)] = null);

(statearr_29243_29297[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (18))){
var inst_29135 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29244_29298 = state_29191__$1;
(statearr_29244_29298[(2)] = inst_29135);

(statearr_29244_29298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (37))){
var state_29191__$1 = state_29191;
var statearr_29245_29299 = state_29191__$1;
(statearr_29245_29299[(2)] = null);

(statearr_29245_29299[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29192 === (8))){
var inst_29097 = (state_29191[(8)]);
var inst_29114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29097);
var state_29191__$1 = state_29191;
var statearr_29246_29300 = state_29191__$1;
(statearr_29246_29300[(2)] = inst_29114);

(statearr_29246_29300[(1)] = (10));


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
});})(c__20627__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20562__auto__,c__20627__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20563__auto__ = null;
var cljs$core$async$mix_$_state_machine__20563__auto____0 = (function (){
var statearr_29250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29250[(0)] = cljs$core$async$mix_$_state_machine__20563__auto__);

(statearr_29250[(1)] = (1));

return statearr_29250;
});
var cljs$core$async$mix_$_state_machine__20563__auto____1 = (function (state_29191){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_29191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e29251){if((e29251 instanceof Object)){
var ex__20566__auto__ = e29251;
var statearr_29252_29301 = state_29191;
(statearr_29252_29301[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29302 = state_29191;
state_29191 = G__29302;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20563__auto__ = function(state_29191){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20563__auto____1.call(this,state_29191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20563__auto____0;
cljs$core$async$mix_$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20563__auto____1;
return cljs$core$async$mix_$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20629__auto__ = (function (){var statearr_29253 = f__20628__auto__.call(null);
(statearr_29253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___29254);

return statearr_29253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___29254,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17079__auto__ = (((p == null))?null:p);
var m__17080__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17080__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17079__auto__ = (((p == null))?null:p);
var m__17080__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,p,v,ch);
} else {
var m__17080__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args29305 = [];
var len__17482__auto___29308 = arguments.length;
var i__17483__auto___29309 = (0);
while(true){
if((i__17483__auto___29309 < len__17482__auto___29308)){
args29305.push((arguments[i__17483__auto___29309]));

var G__29310 = (i__17483__auto___29309 + (1));
i__17483__auto___29309 = G__29310;
continue;
} else {
}
break;
}

var G__29307 = args29305.length;
switch (G__29307) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29305.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17079__auto__ = (((p == null))?null:p);
var m__17080__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,p);
} else {
var m__17080__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17079__auto__ = (((p == null))?null:p);
var m__17080__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17079__auto__)]);
if(!((m__17080__auto__ == null))){
return m__17080__auto__.call(null,p,v);
} else {
var m__17080__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17080__auto____$1 == null))){
return m__17080__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args29313 = [];
var len__17482__auto___29438 = arguments.length;
var i__17483__auto___29439 = (0);
while(true){
if((i__17483__auto___29439 < len__17482__auto___29438)){
args29313.push((arguments[i__17483__auto___29439]));

var G__29440 = (i__17483__auto___29439 + (1));
i__17483__auto___29439 = G__29440;
continue;
} else {
}
break;
}

var G__29315 = args29313.length;
switch (G__29315) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29313.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16443__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16443__auto__)){
return or__16443__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16443__auto__,mults){
return (function (p1__29312_SHARP_){
if(cljs.core.truth_(p1__29312_SHARP_.call(null,topic))){
return p1__29312_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29312_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16443__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29316 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29316 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29317){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29317 = meta29317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29318,meta29317__$1){
var self__ = this;
var _29318__$1 = this;
return (new cljs.core.async.t29316(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29317__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29318){
var self__ = this;
var _29318__$1 = this;
return self__.meta29317;
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29316.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29316.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29316.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29317","meta29317",1102032845,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t29316.cljs$lang$type = true;

cljs.core.async.t29316.cljs$lang$ctorStr = "cljs.core.async/t29316";

cljs.core.async.t29316.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t29316");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29316 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t29316(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29317){
return (new cljs.core.async.t29316(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29317));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29316(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20627__auto___29442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___29442,mults,ensure_mult,p){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___29442,mults,ensure_mult,p){
return (function (state_29390){
var state_val_29391 = (state_29390[(1)]);
if((state_val_29391 === (7))){
var inst_29386 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29392_29443 = state_29390__$1;
(statearr_29392_29443[(2)] = inst_29386);

(statearr_29392_29443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (20))){
var state_29390__$1 = state_29390;
var statearr_29393_29444 = state_29390__$1;
(statearr_29393_29444[(2)] = null);

(statearr_29393_29444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (1))){
var state_29390__$1 = state_29390;
var statearr_29394_29445 = state_29390__$1;
(statearr_29394_29445[(2)] = null);

(statearr_29394_29445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (24))){
var inst_29369 = (state_29390[(7)]);
var inst_29378 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29369);
var state_29390__$1 = state_29390;
var statearr_29395_29446 = state_29390__$1;
(statearr_29395_29446[(2)] = inst_29378);

(statearr_29395_29446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (4))){
var inst_29321 = (state_29390[(8)]);
var inst_29321__$1 = (state_29390[(2)]);
var inst_29322 = (inst_29321__$1 == null);
var state_29390__$1 = (function (){var statearr_29396 = state_29390;
(statearr_29396[(8)] = inst_29321__$1);

return statearr_29396;
})();
if(cljs.core.truth_(inst_29322)){
var statearr_29397_29447 = state_29390__$1;
(statearr_29397_29447[(1)] = (5));

} else {
var statearr_29398_29448 = state_29390__$1;
(statearr_29398_29448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (15))){
var inst_29363 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29399_29449 = state_29390__$1;
(statearr_29399_29449[(2)] = inst_29363);

(statearr_29399_29449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (21))){
var inst_29383 = (state_29390[(2)]);
var state_29390__$1 = (function (){var statearr_29400 = state_29390;
(statearr_29400[(9)] = inst_29383);

return statearr_29400;
})();
var statearr_29401_29450 = state_29390__$1;
(statearr_29401_29450[(2)] = null);

(statearr_29401_29450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (13))){
var inst_29345 = (state_29390[(10)]);
var inst_29347 = cljs.core.chunked_seq_QMARK_.call(null,inst_29345);
var state_29390__$1 = state_29390;
if(inst_29347){
var statearr_29402_29451 = state_29390__$1;
(statearr_29402_29451[(1)] = (16));

} else {
var statearr_29403_29452 = state_29390__$1;
(statearr_29403_29452[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (22))){
var inst_29375 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
if(cljs.core.truth_(inst_29375)){
var statearr_29404_29453 = state_29390__$1;
(statearr_29404_29453[(1)] = (23));

} else {
var statearr_29405_29454 = state_29390__$1;
(statearr_29405_29454[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (6))){
var inst_29321 = (state_29390[(8)]);
var inst_29369 = (state_29390[(7)]);
var inst_29371 = (state_29390[(11)]);
var inst_29369__$1 = topic_fn.call(null,inst_29321);
var inst_29370 = cljs.core.deref.call(null,mults);
var inst_29371__$1 = cljs.core.get.call(null,inst_29370,inst_29369__$1);
var state_29390__$1 = (function (){var statearr_29406 = state_29390;
(statearr_29406[(7)] = inst_29369__$1);

(statearr_29406[(11)] = inst_29371__$1);

return statearr_29406;
})();
if(cljs.core.truth_(inst_29371__$1)){
var statearr_29407_29455 = state_29390__$1;
(statearr_29407_29455[(1)] = (19));

} else {
var statearr_29408_29456 = state_29390__$1;
(statearr_29408_29456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (25))){
var inst_29380 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29409_29457 = state_29390__$1;
(statearr_29409_29457[(2)] = inst_29380);

(statearr_29409_29457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (17))){
var inst_29345 = (state_29390[(10)]);
var inst_29354 = cljs.core.first.call(null,inst_29345);
var inst_29355 = cljs.core.async.muxch_STAR_.call(null,inst_29354);
var inst_29356 = cljs.core.async.close_BANG_.call(null,inst_29355);
var inst_29357 = cljs.core.next.call(null,inst_29345);
var inst_29331 = inst_29357;
var inst_29332 = null;
var inst_29333 = (0);
var inst_29334 = (0);
var state_29390__$1 = (function (){var statearr_29410 = state_29390;
(statearr_29410[(12)] = inst_29331);

(statearr_29410[(13)] = inst_29334);

(statearr_29410[(14)] = inst_29333);

(statearr_29410[(15)] = inst_29332);

(statearr_29410[(16)] = inst_29356);

return statearr_29410;
})();
var statearr_29411_29458 = state_29390__$1;
(statearr_29411_29458[(2)] = null);

(statearr_29411_29458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (3))){
var inst_29388 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29390__$1,inst_29388);
} else {
if((state_val_29391 === (12))){
var inst_29365 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29412_29459 = state_29390__$1;
(statearr_29412_29459[(2)] = inst_29365);

(statearr_29412_29459[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (2))){
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29390__$1,(4),ch);
} else {
if((state_val_29391 === (23))){
var state_29390__$1 = state_29390;
var statearr_29413_29460 = state_29390__$1;
(statearr_29413_29460[(2)] = null);

(statearr_29413_29460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (19))){
var inst_29321 = (state_29390[(8)]);
var inst_29371 = (state_29390[(11)]);
var inst_29373 = cljs.core.async.muxch_STAR_.call(null,inst_29371);
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29390__$1,(22),inst_29373,inst_29321);
} else {
if((state_val_29391 === (11))){
var inst_29331 = (state_29390[(12)]);
var inst_29345 = (state_29390[(10)]);
var inst_29345__$1 = cljs.core.seq.call(null,inst_29331);
var state_29390__$1 = (function (){var statearr_29414 = state_29390;
(statearr_29414[(10)] = inst_29345__$1);

return statearr_29414;
})();
if(inst_29345__$1){
var statearr_29415_29461 = state_29390__$1;
(statearr_29415_29461[(1)] = (13));

} else {
var statearr_29416_29462 = state_29390__$1;
(statearr_29416_29462[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (9))){
var inst_29367 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29417_29463 = state_29390__$1;
(statearr_29417_29463[(2)] = inst_29367);

(statearr_29417_29463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (5))){
var inst_29328 = cljs.core.deref.call(null,mults);
var inst_29329 = cljs.core.vals.call(null,inst_29328);
var inst_29330 = cljs.core.seq.call(null,inst_29329);
var inst_29331 = inst_29330;
var inst_29332 = null;
var inst_29333 = (0);
var inst_29334 = (0);
var state_29390__$1 = (function (){var statearr_29418 = state_29390;
(statearr_29418[(12)] = inst_29331);

(statearr_29418[(13)] = inst_29334);

(statearr_29418[(14)] = inst_29333);

(statearr_29418[(15)] = inst_29332);

return statearr_29418;
})();
var statearr_29419_29464 = state_29390__$1;
(statearr_29419_29464[(2)] = null);

(statearr_29419_29464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (14))){
var state_29390__$1 = state_29390;
var statearr_29423_29465 = state_29390__$1;
(statearr_29423_29465[(2)] = null);

(statearr_29423_29465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (16))){
var inst_29345 = (state_29390[(10)]);
var inst_29349 = cljs.core.chunk_first.call(null,inst_29345);
var inst_29350 = cljs.core.chunk_rest.call(null,inst_29345);
var inst_29351 = cljs.core.count.call(null,inst_29349);
var inst_29331 = inst_29350;
var inst_29332 = inst_29349;
var inst_29333 = inst_29351;
var inst_29334 = (0);
var state_29390__$1 = (function (){var statearr_29424 = state_29390;
(statearr_29424[(12)] = inst_29331);

(statearr_29424[(13)] = inst_29334);

(statearr_29424[(14)] = inst_29333);

(statearr_29424[(15)] = inst_29332);

return statearr_29424;
})();
var statearr_29425_29466 = state_29390__$1;
(statearr_29425_29466[(2)] = null);

(statearr_29425_29466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (10))){
var inst_29331 = (state_29390[(12)]);
var inst_29334 = (state_29390[(13)]);
var inst_29333 = (state_29390[(14)]);
var inst_29332 = (state_29390[(15)]);
var inst_29339 = cljs.core._nth.call(null,inst_29332,inst_29334);
var inst_29340 = cljs.core.async.muxch_STAR_.call(null,inst_29339);
var inst_29341 = cljs.core.async.close_BANG_.call(null,inst_29340);
var inst_29342 = (inst_29334 + (1));
var tmp29420 = inst_29331;
var tmp29421 = inst_29333;
var tmp29422 = inst_29332;
var inst_29331__$1 = tmp29420;
var inst_29332__$1 = tmp29422;
var inst_29333__$1 = tmp29421;
var inst_29334__$1 = inst_29342;
var state_29390__$1 = (function (){var statearr_29426 = state_29390;
(statearr_29426[(12)] = inst_29331__$1);

(statearr_29426[(13)] = inst_29334__$1);

(statearr_29426[(14)] = inst_29333__$1);

(statearr_29426[(15)] = inst_29332__$1);

(statearr_29426[(17)] = inst_29341);

return statearr_29426;
})();
var statearr_29427_29467 = state_29390__$1;
(statearr_29427_29467[(2)] = null);

(statearr_29427_29467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (18))){
var inst_29360 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29428_29468 = state_29390__$1;
(statearr_29428_29468[(2)] = inst_29360);

(statearr_29428_29468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (8))){
var inst_29334 = (state_29390[(13)]);
var inst_29333 = (state_29390[(14)]);
var inst_29336 = (inst_29334 < inst_29333);
var inst_29337 = inst_29336;
var state_29390__$1 = state_29390;
if(cljs.core.truth_(inst_29337)){
var statearr_29429_29469 = state_29390__$1;
(statearr_29429_29469[(1)] = (10));

} else {
var statearr_29430_29470 = state_29390__$1;
(statearr_29430_29470[(1)] = (11));

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
});})(c__20627__auto___29442,mults,ensure_mult,p))
;
return ((function (switch__20562__auto__,c__20627__auto___29442,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_29434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29434[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_29434[(1)] = (1));

return statearr_29434;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_29390){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_29390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e29435){if((e29435 instanceof Object)){
var ex__20566__auto__ = e29435;
var statearr_29436_29471 = state_29390;
(statearr_29436_29471[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29472 = state_29390;
state_29390 = G__29472;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_29390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_29390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___29442,mults,ensure_mult,p))
})();
var state__20629__auto__ = (function (){var statearr_29437 = f__20628__auto__.call(null);
(statearr_29437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___29442);

return statearr_29437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___29442,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args29473 = [];
var len__17482__auto___29476 = arguments.length;
var i__17483__auto___29477 = (0);
while(true){
if((i__17483__auto___29477 < len__17482__auto___29476)){
args29473.push((arguments[i__17483__auto___29477]));

var G__29478 = (i__17483__auto___29477 + (1));
i__17483__auto___29477 = G__29478;
continue;
} else {
}
break;
}

var G__29475 = args29473.length;
switch (G__29475) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29473.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args29480 = [];
var len__17482__auto___29483 = arguments.length;
var i__17483__auto___29484 = (0);
while(true){
if((i__17483__auto___29484 < len__17482__auto___29483)){
args29480.push((arguments[i__17483__auto___29484]));

var G__29485 = (i__17483__auto___29484 + (1));
i__17483__auto___29484 = G__29485;
continue;
} else {
}
break;
}

var G__29482 = args29480.length;
switch (G__29482) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29480.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args29487 = [];
var len__17482__auto___29558 = arguments.length;
var i__17483__auto___29559 = (0);
while(true){
if((i__17483__auto___29559 < len__17482__auto___29558)){
args29487.push((arguments[i__17483__auto___29559]));

var G__29560 = (i__17483__auto___29559 + (1));
i__17483__auto___29559 = G__29560;
continue;
} else {
}
break;
}

var G__29489 = args29487.length;
switch (G__29489) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29487.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20627__auto___29562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___29562,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___29562,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29528){
var state_val_29529 = (state_29528[(1)]);
if((state_val_29529 === (7))){
var state_29528__$1 = state_29528;
var statearr_29530_29563 = state_29528__$1;
(statearr_29530_29563[(2)] = null);

(statearr_29530_29563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (1))){
var state_29528__$1 = state_29528;
var statearr_29531_29564 = state_29528__$1;
(statearr_29531_29564[(2)] = null);

(statearr_29531_29564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (4))){
var inst_29492 = (state_29528[(7)]);
var inst_29494 = (inst_29492 < cnt);
var state_29528__$1 = state_29528;
if(cljs.core.truth_(inst_29494)){
var statearr_29532_29565 = state_29528__$1;
(statearr_29532_29565[(1)] = (6));

} else {
var statearr_29533_29566 = state_29528__$1;
(statearr_29533_29566[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (15))){
var inst_29524 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29534_29567 = state_29528__$1;
(statearr_29534_29567[(2)] = inst_29524);

(statearr_29534_29567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (13))){
var inst_29517 = cljs.core.async.close_BANG_.call(null,out);
var state_29528__$1 = state_29528;
var statearr_29535_29568 = state_29528__$1;
(statearr_29535_29568[(2)] = inst_29517);

(statearr_29535_29568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (6))){
var state_29528__$1 = state_29528;
var statearr_29536_29569 = state_29528__$1;
(statearr_29536_29569[(2)] = null);

(statearr_29536_29569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (3))){
var inst_29526 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29528__$1,inst_29526);
} else {
if((state_val_29529 === (12))){
var inst_29514 = (state_29528[(8)]);
var inst_29514__$1 = (state_29528[(2)]);
var inst_29515 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29514__$1);
var state_29528__$1 = (function (){var statearr_29537 = state_29528;
(statearr_29537[(8)] = inst_29514__$1);

return statearr_29537;
})();
if(cljs.core.truth_(inst_29515)){
var statearr_29538_29570 = state_29528__$1;
(statearr_29538_29570[(1)] = (13));

} else {
var statearr_29539_29571 = state_29528__$1;
(statearr_29539_29571[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (2))){
var inst_29491 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29492 = (0);
var state_29528__$1 = (function (){var statearr_29540 = state_29528;
(statearr_29540[(9)] = inst_29491);

(statearr_29540[(7)] = inst_29492);

return statearr_29540;
})();
var statearr_29541_29572 = state_29528__$1;
(statearr_29541_29572[(2)] = null);

(statearr_29541_29572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (11))){
var inst_29492 = (state_29528[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29528,(10),Object,null,(9));
var inst_29501 = chs__$1.call(null,inst_29492);
var inst_29502 = done.call(null,inst_29492);
var inst_29503 = cljs.core.async.take_BANG_.call(null,inst_29501,inst_29502);
var state_29528__$1 = state_29528;
var statearr_29542_29573 = state_29528__$1;
(statearr_29542_29573[(2)] = inst_29503);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29528__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (9))){
var inst_29492 = (state_29528[(7)]);
var inst_29505 = (state_29528[(2)]);
var inst_29506 = (inst_29492 + (1));
var inst_29492__$1 = inst_29506;
var state_29528__$1 = (function (){var statearr_29543 = state_29528;
(statearr_29543[(10)] = inst_29505);

(statearr_29543[(7)] = inst_29492__$1);

return statearr_29543;
})();
var statearr_29544_29574 = state_29528__$1;
(statearr_29544_29574[(2)] = null);

(statearr_29544_29574[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (5))){
var inst_29512 = (state_29528[(2)]);
var state_29528__$1 = (function (){var statearr_29545 = state_29528;
(statearr_29545[(11)] = inst_29512);

return statearr_29545;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29528__$1,(12),dchan);
} else {
if((state_val_29529 === (14))){
var inst_29514 = (state_29528[(8)]);
var inst_29519 = cljs.core.apply.call(null,f,inst_29514);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29528__$1,(16),out,inst_29519);
} else {
if((state_val_29529 === (16))){
var inst_29521 = (state_29528[(2)]);
var state_29528__$1 = (function (){var statearr_29546 = state_29528;
(statearr_29546[(12)] = inst_29521);

return statearr_29546;
})();
var statearr_29547_29575 = state_29528__$1;
(statearr_29547_29575[(2)] = null);

(statearr_29547_29575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (10))){
var inst_29496 = (state_29528[(2)]);
var inst_29497 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29528__$1 = (function (){var statearr_29548 = state_29528;
(statearr_29548[(13)] = inst_29496);

return statearr_29548;
})();
var statearr_29549_29576 = state_29528__$1;
(statearr_29549_29576[(2)] = inst_29497);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29528__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29529 === (8))){
var inst_29510 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29550_29577 = state_29528__$1;
(statearr_29550_29577[(2)] = inst_29510);

(statearr_29550_29577[(1)] = (5));


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
});})(c__20627__auto___29562,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20562__auto__,c__20627__auto___29562,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_29554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29554[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_29554[(1)] = (1));

return statearr_29554;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_29528){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_29528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e29555){if((e29555 instanceof Object)){
var ex__20566__auto__ = e29555;
var statearr_29556_29578 = state_29528;
(statearr_29556_29578[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29579 = state_29528;
state_29528 = G__29579;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_29528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_29528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___29562,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20629__auto__ = (function (){var statearr_29557 = f__20628__auto__.call(null);
(statearr_29557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___29562);

return statearr_29557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___29562,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args29581 = [];
var len__17482__auto___29637 = arguments.length;
var i__17483__auto___29638 = (0);
while(true){
if((i__17483__auto___29638 < len__17482__auto___29637)){
args29581.push((arguments[i__17483__auto___29638]));

var G__29639 = (i__17483__auto___29638 + (1));
i__17483__auto___29638 = G__29639;
continue;
} else {
}
break;
}

var G__29583 = args29581.length;
switch (G__29583) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29581.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20627__auto___29641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___29641,out){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___29641,out){
return (function (state_29613){
var state_val_29614 = (state_29613[(1)]);
if((state_val_29614 === (7))){
var inst_29592 = (state_29613[(7)]);
var inst_29593 = (state_29613[(8)]);
var inst_29592__$1 = (state_29613[(2)]);
var inst_29593__$1 = cljs.core.nth.call(null,inst_29592__$1,(0),null);
var inst_29594 = cljs.core.nth.call(null,inst_29592__$1,(1),null);
var inst_29595 = (inst_29593__$1 == null);
var state_29613__$1 = (function (){var statearr_29615 = state_29613;
(statearr_29615[(7)] = inst_29592__$1);

(statearr_29615[(8)] = inst_29593__$1);

(statearr_29615[(9)] = inst_29594);

return statearr_29615;
})();
if(cljs.core.truth_(inst_29595)){
var statearr_29616_29642 = state_29613__$1;
(statearr_29616_29642[(1)] = (8));

} else {
var statearr_29617_29643 = state_29613__$1;
(statearr_29617_29643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (1))){
var inst_29584 = cljs.core.vec.call(null,chs);
var inst_29585 = inst_29584;
var state_29613__$1 = (function (){var statearr_29618 = state_29613;
(statearr_29618[(10)] = inst_29585);

return statearr_29618;
})();
var statearr_29619_29644 = state_29613__$1;
(statearr_29619_29644[(2)] = null);

(statearr_29619_29644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (4))){
var inst_29585 = (state_29613[(10)]);
var state_29613__$1 = state_29613;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29613__$1,(7),inst_29585);
} else {
if((state_val_29614 === (6))){
var inst_29609 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29620_29645 = state_29613__$1;
(statearr_29620_29645[(2)] = inst_29609);

(statearr_29620_29645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (3))){
var inst_29611 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29613__$1,inst_29611);
} else {
if((state_val_29614 === (2))){
var inst_29585 = (state_29613[(10)]);
var inst_29587 = cljs.core.count.call(null,inst_29585);
var inst_29588 = (inst_29587 > (0));
var state_29613__$1 = state_29613;
if(cljs.core.truth_(inst_29588)){
var statearr_29622_29646 = state_29613__$1;
(statearr_29622_29646[(1)] = (4));

} else {
var statearr_29623_29647 = state_29613__$1;
(statearr_29623_29647[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (11))){
var inst_29585 = (state_29613[(10)]);
var inst_29602 = (state_29613[(2)]);
var tmp29621 = inst_29585;
var inst_29585__$1 = tmp29621;
var state_29613__$1 = (function (){var statearr_29624 = state_29613;
(statearr_29624[(10)] = inst_29585__$1);

(statearr_29624[(11)] = inst_29602);

return statearr_29624;
})();
var statearr_29625_29648 = state_29613__$1;
(statearr_29625_29648[(2)] = null);

(statearr_29625_29648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (9))){
var inst_29593 = (state_29613[(8)]);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29613__$1,(11),out,inst_29593);
} else {
if((state_val_29614 === (5))){
var inst_29607 = cljs.core.async.close_BANG_.call(null,out);
var state_29613__$1 = state_29613;
var statearr_29626_29649 = state_29613__$1;
(statearr_29626_29649[(2)] = inst_29607);

(statearr_29626_29649[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (10))){
var inst_29605 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29627_29650 = state_29613__$1;
(statearr_29627_29650[(2)] = inst_29605);

(statearr_29627_29650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (8))){
var inst_29585 = (state_29613[(10)]);
var inst_29592 = (state_29613[(7)]);
var inst_29593 = (state_29613[(8)]);
var inst_29594 = (state_29613[(9)]);
var inst_29597 = (function (){var cs = inst_29585;
var vec__29590 = inst_29592;
var v = inst_29593;
var c = inst_29594;
return ((function (cs,vec__29590,v,c,inst_29585,inst_29592,inst_29593,inst_29594,state_val_29614,c__20627__auto___29641,out){
return (function (p1__29580_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29580_SHARP_);
});
;})(cs,vec__29590,v,c,inst_29585,inst_29592,inst_29593,inst_29594,state_val_29614,c__20627__auto___29641,out))
})();
var inst_29598 = cljs.core.filterv.call(null,inst_29597,inst_29585);
var inst_29585__$1 = inst_29598;
var state_29613__$1 = (function (){var statearr_29628 = state_29613;
(statearr_29628[(10)] = inst_29585__$1);

return statearr_29628;
})();
var statearr_29629_29651 = state_29613__$1;
(statearr_29629_29651[(2)] = null);

(statearr_29629_29651[(1)] = (2));


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
});})(c__20627__auto___29641,out))
;
return ((function (switch__20562__auto__,c__20627__auto___29641,out){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_29633 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29633[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_29633[(1)] = (1));

return statearr_29633;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_29613){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_29613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e29634){if((e29634 instanceof Object)){
var ex__20566__auto__ = e29634;
var statearr_29635_29652 = state_29613;
(statearr_29635_29652[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29634;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29653 = state_29613;
state_29613 = G__29653;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_29613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_29613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___29641,out))
})();
var state__20629__auto__ = (function (){var statearr_29636 = f__20628__auto__.call(null);
(statearr_29636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___29641);

return statearr_29636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___29641,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args29654 = [];
var len__17482__auto___29703 = arguments.length;
var i__17483__auto___29704 = (0);
while(true){
if((i__17483__auto___29704 < len__17482__auto___29703)){
args29654.push((arguments[i__17483__auto___29704]));

var G__29705 = (i__17483__auto___29704 + (1));
i__17483__auto___29704 = G__29705;
continue;
} else {
}
break;
}

var G__29656 = args29654.length;
switch (G__29656) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29654.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20627__auto___29707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___29707,out){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___29707,out){
return (function (state_29680){
var state_val_29681 = (state_29680[(1)]);
if((state_val_29681 === (7))){
var inst_29662 = (state_29680[(7)]);
var inst_29662__$1 = (state_29680[(2)]);
var inst_29663 = (inst_29662__$1 == null);
var inst_29664 = cljs.core.not.call(null,inst_29663);
var state_29680__$1 = (function (){var statearr_29682 = state_29680;
(statearr_29682[(7)] = inst_29662__$1);

return statearr_29682;
})();
if(inst_29664){
var statearr_29683_29708 = state_29680__$1;
(statearr_29683_29708[(1)] = (8));

} else {
var statearr_29684_29709 = state_29680__$1;
(statearr_29684_29709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (1))){
var inst_29657 = (0);
var state_29680__$1 = (function (){var statearr_29685 = state_29680;
(statearr_29685[(8)] = inst_29657);

return statearr_29685;
})();
var statearr_29686_29710 = state_29680__$1;
(statearr_29686_29710[(2)] = null);

(statearr_29686_29710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (4))){
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(7),ch);
} else {
if((state_val_29681 === (6))){
var inst_29675 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29687_29711 = state_29680__$1;
(statearr_29687_29711[(2)] = inst_29675);

(statearr_29687_29711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (3))){
var inst_29677 = (state_29680[(2)]);
var inst_29678 = cljs.core.async.close_BANG_.call(null,out);
var state_29680__$1 = (function (){var statearr_29688 = state_29680;
(statearr_29688[(9)] = inst_29677);

return statearr_29688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29680__$1,inst_29678);
} else {
if((state_val_29681 === (2))){
var inst_29657 = (state_29680[(8)]);
var inst_29659 = (inst_29657 < n);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29659)){
var statearr_29689_29712 = state_29680__$1;
(statearr_29689_29712[(1)] = (4));

} else {
var statearr_29690_29713 = state_29680__$1;
(statearr_29690_29713[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (11))){
var inst_29657 = (state_29680[(8)]);
var inst_29667 = (state_29680[(2)]);
var inst_29668 = (inst_29657 + (1));
var inst_29657__$1 = inst_29668;
var state_29680__$1 = (function (){var statearr_29691 = state_29680;
(statearr_29691[(8)] = inst_29657__$1);

(statearr_29691[(10)] = inst_29667);

return statearr_29691;
})();
var statearr_29692_29714 = state_29680__$1;
(statearr_29692_29714[(2)] = null);

(statearr_29692_29714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (9))){
var state_29680__$1 = state_29680;
var statearr_29693_29715 = state_29680__$1;
(statearr_29693_29715[(2)] = null);

(statearr_29693_29715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (5))){
var state_29680__$1 = state_29680;
var statearr_29694_29716 = state_29680__$1;
(statearr_29694_29716[(2)] = null);

(statearr_29694_29716[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (10))){
var inst_29672 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29695_29717 = state_29680__$1;
(statearr_29695_29717[(2)] = inst_29672);

(statearr_29695_29717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (8))){
var inst_29662 = (state_29680[(7)]);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29680__$1,(11),out,inst_29662);
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
});})(c__20627__auto___29707,out))
;
return ((function (switch__20562__auto__,c__20627__auto___29707,out){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_29699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29699[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_29699[(1)] = (1));

return statearr_29699;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_29680){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_29680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e29700){if((e29700 instanceof Object)){
var ex__20566__auto__ = e29700;
var statearr_29701_29718 = state_29680;
(statearr_29701_29718[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29719 = state_29680;
state_29680 = G__29719;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_29680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_29680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___29707,out))
})();
var state__20629__auto__ = (function (){var statearr_29702 = f__20628__auto__.call(null);
(statearr_29702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___29707);

return statearr_29702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___29707,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29727 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29727 = (function (map_LT_,f,ch,meta29728){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29728 = meta29728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29729,meta29728__$1){
var self__ = this;
var _29729__$1 = this;
return (new cljs.core.async.t29727(self__.map_LT_,self__.f,self__.ch,meta29728__$1));
});

cljs.core.async.t29727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29729){
var self__ = this;
var _29729__$1 = this;
return self__.meta29728;
});

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29730 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29730 = (function (map_LT_,f,ch,meta29728,_,fn1,meta29731){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29728 = meta29728;
this._ = _;
this.fn1 = fn1;
this.meta29731 = meta29731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29732,meta29731__$1){
var self__ = this;
var _29732__$1 = this;
return (new cljs.core.async.t29730(self__.map_LT_,self__.f,self__.ch,self__.meta29728,self__._,self__.fn1,meta29731__$1));
});})(___$1))
;

cljs.core.async.t29730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29732){
var self__ = this;
var _29732__$1 = this;
return self__.meta29731;
});})(___$1))
;

cljs.core.async.t29730.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29720_SHARP_){
return f1.call(null,(((p1__29720_SHARP_ == null))?null:self__.f.call(null,p1__29720_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29730.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29728","meta29728",-2076867072,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t29727","cljs.core.async/t29727",-638499001,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29731","meta29731",1386093131,null)], null);
});})(___$1))
;

cljs.core.async.t29730.cljs$lang$type = true;

cljs.core.async.t29730.cljs$lang$ctorStr = "cljs.core.async/t29730";

cljs.core.async.t29730.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t29730");
});})(___$1))
;

cljs.core.async.__GT_t29730 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29730(map_LT___$1,f__$1,ch__$1,meta29728__$1,___$2,fn1__$1,meta29731){
return (new cljs.core.async.t29730(map_LT___$1,f__$1,ch__$1,meta29728__$1,___$2,fn1__$1,meta29731));
});})(___$1))
;

}

return (new cljs.core.async.t29730(self__.map_LT_,self__.f,self__.ch,self__.meta29728,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16431__auto__ = ret;
if(cljs.core.truth_(and__16431__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16431__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29728","meta29728",-2076867072,null)], null);
});

cljs.core.async.t29727.cljs$lang$type = true;

cljs.core.async.t29727.cljs$lang$ctorStr = "cljs.core.async/t29727";

cljs.core.async.t29727.cljs$lang$ctorPrWriter = (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t29727");
});

cljs.core.async.__GT_t29727 = (function cljs$core$async$map_LT__$___GT_t29727(map_LT___$1,f__$1,ch__$1,meta29728){
return (new cljs.core.async.t29727(map_LT___$1,f__$1,ch__$1,meta29728));
});

}

return (new cljs.core.async.t29727(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29736 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29736 = (function (map_GT_,f,ch,meta29737){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29737 = meta29737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29738,meta29737__$1){
var self__ = this;
var _29738__$1 = this;
return (new cljs.core.async.t29736(self__.map_GT_,self__.f,self__.ch,meta29737__$1));
});

cljs.core.async.t29736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29738){
var self__ = this;
var _29738__$1 = this;
return self__.meta29737;
});

cljs.core.async.t29736.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29736.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29736.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29736.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29737","meta29737",-1458847965,null)], null);
});

cljs.core.async.t29736.cljs$lang$type = true;

cljs.core.async.t29736.cljs$lang$ctorStr = "cljs.core.async/t29736";

cljs.core.async.t29736.cljs$lang$ctorPrWriter = (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t29736");
});

cljs.core.async.__GT_t29736 = (function cljs$core$async$map_GT__$___GT_t29736(map_GT___$1,f__$1,ch__$1,meta29737){
return (new cljs.core.async.t29736(map_GT___$1,f__$1,ch__$1,meta29737));
});

}

return (new cljs.core.async.t29736(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29742 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29742 = (function (filter_GT_,p,ch,meta29743){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29743 = meta29743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29744,meta29743__$1){
var self__ = this;
var _29744__$1 = this;
return (new cljs.core.async.t29742(self__.filter_GT_,self__.p,self__.ch,meta29743__$1));
});

cljs.core.async.t29742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29744){
var self__ = this;
var _29744__$1 = this;
return self__.meta29743;
});

cljs.core.async.t29742.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29742.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29742.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29742.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29743","meta29743",235587354,null)], null);
});

cljs.core.async.t29742.cljs$lang$type = true;

cljs.core.async.t29742.cljs$lang$ctorStr = "cljs.core.async/t29742";

cljs.core.async.t29742.cljs$lang$ctorPrWriter = (function (this__17022__auto__,writer__17023__auto__,opt__17024__auto__){
return cljs.core._write.call(null,writer__17023__auto__,"cljs.core.async/t29742");
});

cljs.core.async.__GT_t29742 = (function cljs$core$async$filter_GT__$___GT_t29742(filter_GT___$1,p__$1,ch__$1,meta29743){
return (new cljs.core.async.t29742(filter_GT___$1,p__$1,ch__$1,meta29743));
});

}

return (new cljs.core.async.t29742(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args29745 = [];
var len__17482__auto___29789 = arguments.length;
var i__17483__auto___29790 = (0);
while(true){
if((i__17483__auto___29790 < len__17482__auto___29789)){
args29745.push((arguments[i__17483__auto___29790]));

var G__29791 = (i__17483__auto___29790 + (1));
i__17483__auto___29790 = G__29791;
continue;
} else {
}
break;
}

var G__29747 = args29745.length;
switch (G__29747) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29745.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20627__auto___29793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___29793,out){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___29793,out){
return (function (state_29768){
var state_val_29769 = (state_29768[(1)]);
if((state_val_29769 === (7))){
var inst_29764 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
var statearr_29770_29794 = state_29768__$1;
(statearr_29770_29794[(2)] = inst_29764);

(statearr_29770_29794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (1))){
var state_29768__$1 = state_29768;
var statearr_29771_29795 = state_29768__$1;
(statearr_29771_29795[(2)] = null);

(statearr_29771_29795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (4))){
var inst_29750 = (state_29768[(7)]);
var inst_29750__$1 = (state_29768[(2)]);
var inst_29751 = (inst_29750__$1 == null);
var state_29768__$1 = (function (){var statearr_29772 = state_29768;
(statearr_29772[(7)] = inst_29750__$1);

return statearr_29772;
})();
if(cljs.core.truth_(inst_29751)){
var statearr_29773_29796 = state_29768__$1;
(statearr_29773_29796[(1)] = (5));

} else {
var statearr_29774_29797 = state_29768__$1;
(statearr_29774_29797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (6))){
var inst_29750 = (state_29768[(7)]);
var inst_29755 = p.call(null,inst_29750);
var state_29768__$1 = state_29768;
if(cljs.core.truth_(inst_29755)){
var statearr_29775_29798 = state_29768__$1;
(statearr_29775_29798[(1)] = (8));

} else {
var statearr_29776_29799 = state_29768__$1;
(statearr_29776_29799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (3))){
var inst_29766 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29768__$1,inst_29766);
} else {
if((state_val_29769 === (2))){
var state_29768__$1 = state_29768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29768__$1,(4),ch);
} else {
if((state_val_29769 === (11))){
var inst_29758 = (state_29768[(2)]);
var state_29768__$1 = state_29768;
var statearr_29777_29800 = state_29768__$1;
(statearr_29777_29800[(2)] = inst_29758);

(statearr_29777_29800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (9))){
var state_29768__$1 = state_29768;
var statearr_29778_29801 = state_29768__$1;
(statearr_29778_29801[(2)] = null);

(statearr_29778_29801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (5))){
var inst_29753 = cljs.core.async.close_BANG_.call(null,out);
var state_29768__$1 = state_29768;
var statearr_29779_29802 = state_29768__$1;
(statearr_29779_29802[(2)] = inst_29753);

(statearr_29779_29802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (10))){
var inst_29761 = (state_29768[(2)]);
var state_29768__$1 = (function (){var statearr_29780 = state_29768;
(statearr_29780[(8)] = inst_29761);

return statearr_29780;
})();
var statearr_29781_29803 = state_29768__$1;
(statearr_29781_29803[(2)] = null);

(statearr_29781_29803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29769 === (8))){
var inst_29750 = (state_29768[(7)]);
var state_29768__$1 = state_29768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29768__$1,(11),out,inst_29750);
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
});})(c__20627__auto___29793,out))
;
return ((function (switch__20562__auto__,c__20627__auto___29793,out){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_29785 = [null,null,null,null,null,null,null,null,null];
(statearr_29785[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_29785[(1)] = (1));

return statearr_29785;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_29768){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_29768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e29786){if((e29786 instanceof Object)){
var ex__20566__auto__ = e29786;
var statearr_29787_29804 = state_29768;
(statearr_29787_29804[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29805 = state_29768;
state_29768 = G__29805;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_29768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_29768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___29793,out))
})();
var state__20629__auto__ = (function (){var statearr_29788 = f__20628__auto__.call(null);
(statearr_29788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___29793);

return statearr_29788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___29793,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args29806 = [];
var len__17482__auto___29809 = arguments.length;
var i__17483__auto___29810 = (0);
while(true){
if((i__17483__auto___29810 < len__17482__auto___29809)){
args29806.push((arguments[i__17483__auto___29810]));

var G__29811 = (i__17483__auto___29810 + (1));
i__17483__auto___29810 = G__29811;
continue;
} else {
}
break;
}

var G__29808 = args29806.length;
switch (G__29808) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29806.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20627__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto__){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto__){
return (function (state_29978){
var state_val_29979 = (state_29978[(1)]);
if((state_val_29979 === (7))){
var inst_29974 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_29980_30021 = state_29978__$1;
(statearr_29980_30021[(2)] = inst_29974);

(statearr_29980_30021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (20))){
var inst_29944 = (state_29978[(7)]);
var inst_29955 = (state_29978[(2)]);
var inst_29956 = cljs.core.next.call(null,inst_29944);
var inst_29930 = inst_29956;
var inst_29931 = null;
var inst_29932 = (0);
var inst_29933 = (0);
var state_29978__$1 = (function (){var statearr_29981 = state_29978;
(statearr_29981[(8)] = inst_29955);

(statearr_29981[(9)] = inst_29930);

(statearr_29981[(10)] = inst_29931);

(statearr_29981[(11)] = inst_29933);

(statearr_29981[(12)] = inst_29932);

return statearr_29981;
})();
var statearr_29982_30022 = state_29978__$1;
(statearr_29982_30022[(2)] = null);

(statearr_29982_30022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (1))){
var state_29978__$1 = state_29978;
var statearr_29983_30023 = state_29978__$1;
(statearr_29983_30023[(2)] = null);

(statearr_29983_30023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (4))){
var inst_29919 = (state_29978[(13)]);
var inst_29919__$1 = (state_29978[(2)]);
var inst_29920 = (inst_29919__$1 == null);
var state_29978__$1 = (function (){var statearr_29984 = state_29978;
(statearr_29984[(13)] = inst_29919__$1);

return statearr_29984;
})();
if(cljs.core.truth_(inst_29920)){
var statearr_29985_30024 = state_29978__$1;
(statearr_29985_30024[(1)] = (5));

} else {
var statearr_29986_30025 = state_29978__$1;
(statearr_29986_30025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (15))){
var state_29978__$1 = state_29978;
var statearr_29990_30026 = state_29978__$1;
(statearr_29990_30026[(2)] = null);

(statearr_29990_30026[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (21))){
var state_29978__$1 = state_29978;
var statearr_29991_30027 = state_29978__$1;
(statearr_29991_30027[(2)] = null);

(statearr_29991_30027[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (13))){
var inst_29930 = (state_29978[(9)]);
var inst_29931 = (state_29978[(10)]);
var inst_29933 = (state_29978[(11)]);
var inst_29932 = (state_29978[(12)]);
var inst_29940 = (state_29978[(2)]);
var inst_29941 = (inst_29933 + (1));
var tmp29987 = inst_29930;
var tmp29988 = inst_29931;
var tmp29989 = inst_29932;
var inst_29930__$1 = tmp29987;
var inst_29931__$1 = tmp29988;
var inst_29932__$1 = tmp29989;
var inst_29933__$1 = inst_29941;
var state_29978__$1 = (function (){var statearr_29992 = state_29978;
(statearr_29992[(9)] = inst_29930__$1);

(statearr_29992[(14)] = inst_29940);

(statearr_29992[(10)] = inst_29931__$1);

(statearr_29992[(11)] = inst_29933__$1);

(statearr_29992[(12)] = inst_29932__$1);

return statearr_29992;
})();
var statearr_29993_30028 = state_29978__$1;
(statearr_29993_30028[(2)] = null);

(statearr_29993_30028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (22))){
var state_29978__$1 = state_29978;
var statearr_29994_30029 = state_29978__$1;
(statearr_29994_30029[(2)] = null);

(statearr_29994_30029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (6))){
var inst_29919 = (state_29978[(13)]);
var inst_29928 = f.call(null,inst_29919);
var inst_29929 = cljs.core.seq.call(null,inst_29928);
var inst_29930 = inst_29929;
var inst_29931 = null;
var inst_29932 = (0);
var inst_29933 = (0);
var state_29978__$1 = (function (){var statearr_29995 = state_29978;
(statearr_29995[(9)] = inst_29930);

(statearr_29995[(10)] = inst_29931);

(statearr_29995[(11)] = inst_29933);

(statearr_29995[(12)] = inst_29932);

return statearr_29995;
})();
var statearr_29996_30030 = state_29978__$1;
(statearr_29996_30030[(2)] = null);

(statearr_29996_30030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (17))){
var inst_29944 = (state_29978[(7)]);
var inst_29948 = cljs.core.chunk_first.call(null,inst_29944);
var inst_29949 = cljs.core.chunk_rest.call(null,inst_29944);
var inst_29950 = cljs.core.count.call(null,inst_29948);
var inst_29930 = inst_29949;
var inst_29931 = inst_29948;
var inst_29932 = inst_29950;
var inst_29933 = (0);
var state_29978__$1 = (function (){var statearr_29997 = state_29978;
(statearr_29997[(9)] = inst_29930);

(statearr_29997[(10)] = inst_29931);

(statearr_29997[(11)] = inst_29933);

(statearr_29997[(12)] = inst_29932);

return statearr_29997;
})();
var statearr_29998_30031 = state_29978__$1;
(statearr_29998_30031[(2)] = null);

(statearr_29998_30031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (3))){
var inst_29976 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29978__$1,inst_29976);
} else {
if((state_val_29979 === (12))){
var inst_29964 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_29999_30032 = state_29978__$1;
(statearr_29999_30032[(2)] = inst_29964);

(statearr_29999_30032[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (2))){
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29978__$1,(4),in$);
} else {
if((state_val_29979 === (23))){
var inst_29972 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_30000_30033 = state_29978__$1;
(statearr_30000_30033[(2)] = inst_29972);

(statearr_30000_30033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (19))){
var inst_29959 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_30001_30034 = state_29978__$1;
(statearr_30001_30034[(2)] = inst_29959);

(statearr_30001_30034[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (11))){
var inst_29930 = (state_29978[(9)]);
var inst_29944 = (state_29978[(7)]);
var inst_29944__$1 = cljs.core.seq.call(null,inst_29930);
var state_29978__$1 = (function (){var statearr_30002 = state_29978;
(statearr_30002[(7)] = inst_29944__$1);

return statearr_30002;
})();
if(inst_29944__$1){
var statearr_30003_30035 = state_29978__$1;
(statearr_30003_30035[(1)] = (14));

} else {
var statearr_30004_30036 = state_29978__$1;
(statearr_30004_30036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (9))){
var inst_29966 = (state_29978[(2)]);
var inst_29967 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29978__$1 = (function (){var statearr_30005 = state_29978;
(statearr_30005[(15)] = inst_29966);

return statearr_30005;
})();
if(cljs.core.truth_(inst_29967)){
var statearr_30006_30037 = state_29978__$1;
(statearr_30006_30037[(1)] = (21));

} else {
var statearr_30007_30038 = state_29978__$1;
(statearr_30007_30038[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (5))){
var inst_29922 = cljs.core.async.close_BANG_.call(null,out);
var state_29978__$1 = state_29978;
var statearr_30008_30039 = state_29978__$1;
(statearr_30008_30039[(2)] = inst_29922);

(statearr_30008_30039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (14))){
var inst_29944 = (state_29978[(7)]);
var inst_29946 = cljs.core.chunked_seq_QMARK_.call(null,inst_29944);
var state_29978__$1 = state_29978;
if(inst_29946){
var statearr_30009_30040 = state_29978__$1;
(statearr_30009_30040[(1)] = (17));

} else {
var statearr_30010_30041 = state_29978__$1;
(statearr_30010_30041[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (16))){
var inst_29962 = (state_29978[(2)]);
var state_29978__$1 = state_29978;
var statearr_30011_30042 = state_29978__$1;
(statearr_30011_30042[(2)] = inst_29962);

(statearr_30011_30042[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29979 === (10))){
var inst_29931 = (state_29978[(10)]);
var inst_29933 = (state_29978[(11)]);
var inst_29938 = cljs.core._nth.call(null,inst_29931,inst_29933);
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29978__$1,(13),out,inst_29938);
} else {
if((state_val_29979 === (18))){
var inst_29944 = (state_29978[(7)]);
var inst_29953 = cljs.core.first.call(null,inst_29944);
var state_29978__$1 = state_29978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29978__$1,(20),out,inst_29953);
} else {
if((state_val_29979 === (8))){
var inst_29933 = (state_29978[(11)]);
var inst_29932 = (state_29978[(12)]);
var inst_29935 = (inst_29933 < inst_29932);
var inst_29936 = inst_29935;
var state_29978__$1 = state_29978;
if(cljs.core.truth_(inst_29936)){
var statearr_30012_30043 = state_29978__$1;
(statearr_30012_30043[(1)] = (10));

} else {
var statearr_30013_30044 = state_29978__$1;
(statearr_30013_30044[(1)] = (11));

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
});})(c__20627__auto__))
;
return ((function (switch__20562__auto__,c__20627__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20563__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20563__auto____0 = (function (){
var statearr_30017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30017[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20563__auto__);

(statearr_30017[(1)] = (1));

return statearr_30017;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20563__auto____1 = (function (state_29978){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_29978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e30018){if((e30018 instanceof Object)){
var ex__20566__auto__ = e30018;
var statearr_30019_30045 = state_29978;
(statearr_30019_30045[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30046 = state_29978;
state_29978 = G__30046;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20563__auto__ = function(state_29978){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20563__auto____1.call(this,state_29978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20563__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20563__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto__))
})();
var state__20629__auto__ = (function (){var statearr_30020 = f__20628__auto__.call(null);
(statearr_30020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto__);

return statearr_30020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto__))
);

return c__20627__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args30047 = [];
var len__17482__auto___30050 = arguments.length;
var i__17483__auto___30051 = (0);
while(true){
if((i__17483__auto___30051 < len__17482__auto___30050)){
args30047.push((arguments[i__17483__auto___30051]));

var G__30052 = (i__17483__auto___30051 + (1));
i__17483__auto___30051 = G__30052;
continue;
} else {
}
break;
}

var G__30049 = args30047.length;
switch (G__30049) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30047.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args30054 = [];
var len__17482__auto___30057 = arguments.length;
var i__17483__auto___30058 = (0);
while(true){
if((i__17483__auto___30058 < len__17482__auto___30057)){
args30054.push((arguments[i__17483__auto___30058]));

var G__30059 = (i__17483__auto___30058 + (1));
i__17483__auto___30058 = G__30059;
continue;
} else {
}
break;
}

var G__30056 = args30054.length;
switch (G__30056) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30054.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args30061 = [];
var len__17482__auto___30112 = arguments.length;
var i__17483__auto___30113 = (0);
while(true){
if((i__17483__auto___30113 < len__17482__auto___30112)){
args30061.push((arguments[i__17483__auto___30113]));

var G__30114 = (i__17483__auto___30113 + (1));
i__17483__auto___30113 = G__30114;
continue;
} else {
}
break;
}

var G__30063 = args30061.length;
switch (G__30063) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30061.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20627__auto___30116 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___30116,out){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___30116,out){
return (function (state_30087){
var state_val_30088 = (state_30087[(1)]);
if((state_val_30088 === (7))){
var inst_30082 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30089_30117 = state_30087__$1;
(statearr_30089_30117[(2)] = inst_30082);

(statearr_30089_30117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (1))){
var inst_30064 = null;
var state_30087__$1 = (function (){var statearr_30090 = state_30087;
(statearr_30090[(7)] = inst_30064);

return statearr_30090;
})();
var statearr_30091_30118 = state_30087__$1;
(statearr_30091_30118[(2)] = null);

(statearr_30091_30118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (4))){
var inst_30067 = (state_30087[(8)]);
var inst_30067__$1 = (state_30087[(2)]);
var inst_30068 = (inst_30067__$1 == null);
var inst_30069 = cljs.core.not.call(null,inst_30068);
var state_30087__$1 = (function (){var statearr_30092 = state_30087;
(statearr_30092[(8)] = inst_30067__$1);

return statearr_30092;
})();
if(inst_30069){
var statearr_30093_30119 = state_30087__$1;
(statearr_30093_30119[(1)] = (5));

} else {
var statearr_30094_30120 = state_30087__$1;
(statearr_30094_30120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (6))){
var state_30087__$1 = state_30087;
var statearr_30095_30121 = state_30087__$1;
(statearr_30095_30121[(2)] = null);

(statearr_30095_30121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (3))){
var inst_30084 = (state_30087[(2)]);
var inst_30085 = cljs.core.async.close_BANG_.call(null,out);
var state_30087__$1 = (function (){var statearr_30096 = state_30087;
(statearr_30096[(9)] = inst_30084);

return statearr_30096;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30087__$1,inst_30085);
} else {
if((state_val_30088 === (2))){
var state_30087__$1 = state_30087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30087__$1,(4),ch);
} else {
if((state_val_30088 === (11))){
var inst_30067 = (state_30087[(8)]);
var inst_30076 = (state_30087[(2)]);
var inst_30064 = inst_30067;
var state_30087__$1 = (function (){var statearr_30097 = state_30087;
(statearr_30097[(7)] = inst_30064);

(statearr_30097[(10)] = inst_30076);

return statearr_30097;
})();
var statearr_30098_30122 = state_30087__$1;
(statearr_30098_30122[(2)] = null);

(statearr_30098_30122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (9))){
var inst_30067 = (state_30087[(8)]);
var state_30087__$1 = state_30087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30087__$1,(11),out,inst_30067);
} else {
if((state_val_30088 === (5))){
var inst_30067 = (state_30087[(8)]);
var inst_30064 = (state_30087[(7)]);
var inst_30071 = cljs.core._EQ_.call(null,inst_30067,inst_30064);
var state_30087__$1 = state_30087;
if(inst_30071){
var statearr_30100_30123 = state_30087__$1;
(statearr_30100_30123[(1)] = (8));

} else {
var statearr_30101_30124 = state_30087__$1;
(statearr_30101_30124[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (10))){
var inst_30079 = (state_30087[(2)]);
var state_30087__$1 = state_30087;
var statearr_30102_30125 = state_30087__$1;
(statearr_30102_30125[(2)] = inst_30079);

(statearr_30102_30125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30088 === (8))){
var inst_30064 = (state_30087[(7)]);
var tmp30099 = inst_30064;
var inst_30064__$1 = tmp30099;
var state_30087__$1 = (function (){var statearr_30103 = state_30087;
(statearr_30103[(7)] = inst_30064__$1);

return statearr_30103;
})();
var statearr_30104_30126 = state_30087__$1;
(statearr_30104_30126[(2)] = null);

(statearr_30104_30126[(1)] = (2));


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
});})(c__20627__auto___30116,out))
;
return ((function (switch__20562__auto__,c__20627__auto___30116,out){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_30108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30108[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_30108[(1)] = (1));

return statearr_30108;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_30087){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_30087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e30109){if((e30109 instanceof Object)){
var ex__20566__auto__ = e30109;
var statearr_30110_30127 = state_30087;
(statearr_30110_30127[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30128 = state_30087;
state_30087 = G__30128;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_30087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_30087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___30116,out))
})();
var state__20629__auto__ = (function (){var statearr_30111 = f__20628__auto__.call(null);
(statearr_30111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___30116);

return statearr_30111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___30116,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args30129 = [];
var len__17482__auto___30199 = arguments.length;
var i__17483__auto___30200 = (0);
while(true){
if((i__17483__auto___30200 < len__17482__auto___30199)){
args30129.push((arguments[i__17483__auto___30200]));

var G__30201 = (i__17483__auto___30200 + (1));
i__17483__auto___30200 = G__30201;
continue;
} else {
}
break;
}

var G__30131 = args30129.length;
switch (G__30131) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30129.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20627__auto___30203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___30203,out){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___30203,out){
return (function (state_30169){
var state_val_30170 = (state_30169[(1)]);
if((state_val_30170 === (7))){
var inst_30165 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30171_30204 = state_30169__$1;
(statearr_30171_30204[(2)] = inst_30165);

(statearr_30171_30204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (1))){
var inst_30132 = (new Array(n));
var inst_30133 = inst_30132;
var inst_30134 = (0);
var state_30169__$1 = (function (){var statearr_30172 = state_30169;
(statearr_30172[(7)] = inst_30134);

(statearr_30172[(8)] = inst_30133);

return statearr_30172;
})();
var statearr_30173_30205 = state_30169__$1;
(statearr_30173_30205[(2)] = null);

(statearr_30173_30205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (4))){
var inst_30137 = (state_30169[(9)]);
var inst_30137__$1 = (state_30169[(2)]);
var inst_30138 = (inst_30137__$1 == null);
var inst_30139 = cljs.core.not.call(null,inst_30138);
var state_30169__$1 = (function (){var statearr_30174 = state_30169;
(statearr_30174[(9)] = inst_30137__$1);

return statearr_30174;
})();
if(inst_30139){
var statearr_30175_30206 = state_30169__$1;
(statearr_30175_30206[(1)] = (5));

} else {
var statearr_30176_30207 = state_30169__$1;
(statearr_30176_30207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (15))){
var inst_30159 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30177_30208 = state_30169__$1;
(statearr_30177_30208[(2)] = inst_30159);

(statearr_30177_30208[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (13))){
var state_30169__$1 = state_30169;
var statearr_30178_30209 = state_30169__$1;
(statearr_30178_30209[(2)] = null);

(statearr_30178_30209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (6))){
var inst_30134 = (state_30169[(7)]);
var inst_30155 = (inst_30134 > (0));
var state_30169__$1 = state_30169;
if(cljs.core.truth_(inst_30155)){
var statearr_30179_30210 = state_30169__$1;
(statearr_30179_30210[(1)] = (12));

} else {
var statearr_30180_30211 = state_30169__$1;
(statearr_30180_30211[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (3))){
var inst_30167 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30169__$1,inst_30167);
} else {
if((state_val_30170 === (12))){
var inst_30133 = (state_30169[(8)]);
var inst_30157 = cljs.core.vec.call(null,inst_30133);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30169__$1,(15),out,inst_30157);
} else {
if((state_val_30170 === (2))){
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30169__$1,(4),ch);
} else {
if((state_val_30170 === (11))){
var inst_30149 = (state_30169[(2)]);
var inst_30150 = (new Array(n));
var inst_30133 = inst_30150;
var inst_30134 = (0);
var state_30169__$1 = (function (){var statearr_30181 = state_30169;
(statearr_30181[(10)] = inst_30149);

(statearr_30181[(7)] = inst_30134);

(statearr_30181[(8)] = inst_30133);

return statearr_30181;
})();
var statearr_30182_30212 = state_30169__$1;
(statearr_30182_30212[(2)] = null);

(statearr_30182_30212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (9))){
var inst_30133 = (state_30169[(8)]);
var inst_30147 = cljs.core.vec.call(null,inst_30133);
var state_30169__$1 = state_30169;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30169__$1,(11),out,inst_30147);
} else {
if((state_val_30170 === (5))){
var inst_30142 = (state_30169[(11)]);
var inst_30134 = (state_30169[(7)]);
var inst_30137 = (state_30169[(9)]);
var inst_30133 = (state_30169[(8)]);
var inst_30141 = (inst_30133[inst_30134] = inst_30137);
var inst_30142__$1 = (inst_30134 + (1));
var inst_30143 = (inst_30142__$1 < n);
var state_30169__$1 = (function (){var statearr_30183 = state_30169;
(statearr_30183[(11)] = inst_30142__$1);

(statearr_30183[(12)] = inst_30141);

return statearr_30183;
})();
if(cljs.core.truth_(inst_30143)){
var statearr_30184_30213 = state_30169__$1;
(statearr_30184_30213[(1)] = (8));

} else {
var statearr_30185_30214 = state_30169__$1;
(statearr_30185_30214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (14))){
var inst_30162 = (state_30169[(2)]);
var inst_30163 = cljs.core.async.close_BANG_.call(null,out);
var state_30169__$1 = (function (){var statearr_30187 = state_30169;
(statearr_30187[(13)] = inst_30162);

return statearr_30187;
})();
var statearr_30188_30215 = state_30169__$1;
(statearr_30188_30215[(2)] = inst_30163);

(statearr_30188_30215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (10))){
var inst_30153 = (state_30169[(2)]);
var state_30169__$1 = state_30169;
var statearr_30189_30216 = state_30169__$1;
(statearr_30189_30216[(2)] = inst_30153);

(statearr_30189_30216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30170 === (8))){
var inst_30142 = (state_30169[(11)]);
var inst_30133 = (state_30169[(8)]);
var tmp30186 = inst_30133;
var inst_30133__$1 = tmp30186;
var inst_30134 = inst_30142;
var state_30169__$1 = (function (){var statearr_30190 = state_30169;
(statearr_30190[(7)] = inst_30134);

(statearr_30190[(8)] = inst_30133__$1);

return statearr_30190;
})();
var statearr_30191_30217 = state_30169__$1;
(statearr_30191_30217[(2)] = null);

(statearr_30191_30217[(1)] = (2));


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
});})(c__20627__auto___30203,out))
;
return ((function (switch__20562__auto__,c__20627__auto___30203,out){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_30195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30195[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_30195[(1)] = (1));

return statearr_30195;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_30169){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_30169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e30196){if((e30196 instanceof Object)){
var ex__20566__auto__ = e30196;
var statearr_30197_30218 = state_30169;
(statearr_30197_30218[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30219 = state_30169;
state_30169 = G__30219;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_30169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_30169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___30203,out))
})();
var state__20629__auto__ = (function (){var statearr_30198 = f__20628__auto__.call(null);
(statearr_30198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___30203);

return statearr_30198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___30203,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args30220 = [];
var len__17482__auto___30294 = arguments.length;
var i__17483__auto___30295 = (0);
while(true){
if((i__17483__auto___30295 < len__17482__auto___30294)){
args30220.push((arguments[i__17483__auto___30295]));

var G__30296 = (i__17483__auto___30295 + (1));
i__17483__auto___30295 = G__30296;
continue;
} else {
}
break;
}

var G__30222 = args30220.length;
switch (G__30222) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30220.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20627__auto___30298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20627__auto___30298,out){
return (function (){
var f__20628__auto__ = (function (){var switch__20562__auto__ = ((function (c__20627__auto___30298,out){
return (function (state_30264){
var state_val_30265 = (state_30264[(1)]);
if((state_val_30265 === (7))){
var inst_30260 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30266_30299 = state_30264__$1;
(statearr_30266_30299[(2)] = inst_30260);

(statearr_30266_30299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (1))){
var inst_30223 = [];
var inst_30224 = inst_30223;
var inst_30225 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30264__$1 = (function (){var statearr_30267 = state_30264;
(statearr_30267[(7)] = inst_30225);

(statearr_30267[(8)] = inst_30224);

return statearr_30267;
})();
var statearr_30268_30300 = state_30264__$1;
(statearr_30268_30300[(2)] = null);

(statearr_30268_30300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (4))){
var inst_30228 = (state_30264[(9)]);
var inst_30228__$1 = (state_30264[(2)]);
var inst_30229 = (inst_30228__$1 == null);
var inst_30230 = cljs.core.not.call(null,inst_30229);
var state_30264__$1 = (function (){var statearr_30269 = state_30264;
(statearr_30269[(9)] = inst_30228__$1);

return statearr_30269;
})();
if(inst_30230){
var statearr_30270_30301 = state_30264__$1;
(statearr_30270_30301[(1)] = (5));

} else {
var statearr_30271_30302 = state_30264__$1;
(statearr_30271_30302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (15))){
var inst_30254 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30272_30303 = state_30264__$1;
(statearr_30272_30303[(2)] = inst_30254);

(statearr_30272_30303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (13))){
var state_30264__$1 = state_30264;
var statearr_30273_30304 = state_30264__$1;
(statearr_30273_30304[(2)] = null);

(statearr_30273_30304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (6))){
var inst_30224 = (state_30264[(8)]);
var inst_30249 = inst_30224.length;
var inst_30250 = (inst_30249 > (0));
var state_30264__$1 = state_30264;
if(cljs.core.truth_(inst_30250)){
var statearr_30274_30305 = state_30264__$1;
(statearr_30274_30305[(1)] = (12));

} else {
var statearr_30275_30306 = state_30264__$1;
(statearr_30275_30306[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (3))){
var inst_30262 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30264__$1,inst_30262);
} else {
if((state_val_30265 === (12))){
var inst_30224 = (state_30264[(8)]);
var inst_30252 = cljs.core.vec.call(null,inst_30224);
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30264__$1,(15),out,inst_30252);
} else {
if((state_val_30265 === (2))){
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30264__$1,(4),ch);
} else {
if((state_val_30265 === (11))){
var inst_30232 = (state_30264[(10)]);
var inst_30228 = (state_30264[(9)]);
var inst_30242 = (state_30264[(2)]);
var inst_30243 = [];
var inst_30244 = inst_30243.push(inst_30228);
var inst_30224 = inst_30243;
var inst_30225 = inst_30232;
var state_30264__$1 = (function (){var statearr_30276 = state_30264;
(statearr_30276[(11)] = inst_30242);

(statearr_30276[(12)] = inst_30244);

(statearr_30276[(7)] = inst_30225);

(statearr_30276[(8)] = inst_30224);

return statearr_30276;
})();
var statearr_30277_30307 = state_30264__$1;
(statearr_30277_30307[(2)] = null);

(statearr_30277_30307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (9))){
var inst_30224 = (state_30264[(8)]);
var inst_30240 = cljs.core.vec.call(null,inst_30224);
var state_30264__$1 = state_30264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30264__$1,(11),out,inst_30240);
} else {
if((state_val_30265 === (5))){
var inst_30232 = (state_30264[(10)]);
var inst_30228 = (state_30264[(9)]);
var inst_30225 = (state_30264[(7)]);
var inst_30232__$1 = f.call(null,inst_30228);
var inst_30233 = cljs.core._EQ_.call(null,inst_30232__$1,inst_30225);
var inst_30234 = cljs.core.keyword_identical_QMARK_.call(null,inst_30225,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30235 = (inst_30233) || (inst_30234);
var state_30264__$1 = (function (){var statearr_30278 = state_30264;
(statearr_30278[(10)] = inst_30232__$1);

return statearr_30278;
})();
if(cljs.core.truth_(inst_30235)){
var statearr_30279_30308 = state_30264__$1;
(statearr_30279_30308[(1)] = (8));

} else {
var statearr_30280_30309 = state_30264__$1;
(statearr_30280_30309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (14))){
var inst_30257 = (state_30264[(2)]);
var inst_30258 = cljs.core.async.close_BANG_.call(null,out);
var state_30264__$1 = (function (){var statearr_30282 = state_30264;
(statearr_30282[(13)] = inst_30257);

return statearr_30282;
})();
var statearr_30283_30310 = state_30264__$1;
(statearr_30283_30310[(2)] = inst_30258);

(statearr_30283_30310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (10))){
var inst_30247 = (state_30264[(2)]);
var state_30264__$1 = state_30264;
var statearr_30284_30311 = state_30264__$1;
(statearr_30284_30311[(2)] = inst_30247);

(statearr_30284_30311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30265 === (8))){
var inst_30232 = (state_30264[(10)]);
var inst_30228 = (state_30264[(9)]);
var inst_30224 = (state_30264[(8)]);
var inst_30237 = inst_30224.push(inst_30228);
var tmp30281 = inst_30224;
var inst_30224__$1 = tmp30281;
var inst_30225 = inst_30232;
var state_30264__$1 = (function (){var statearr_30285 = state_30264;
(statearr_30285[(7)] = inst_30225);

(statearr_30285[(8)] = inst_30224__$1);

(statearr_30285[(14)] = inst_30237);

return statearr_30285;
})();
var statearr_30286_30312 = state_30264__$1;
(statearr_30286_30312[(2)] = null);

(statearr_30286_30312[(1)] = (2));


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
});})(c__20627__auto___30298,out))
;
return ((function (switch__20562__auto__,c__20627__auto___30298,out){
return (function() {
var cljs$core$async$state_machine__20563__auto__ = null;
var cljs$core$async$state_machine__20563__auto____0 = (function (){
var statearr_30290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30290[(0)] = cljs$core$async$state_machine__20563__auto__);

(statearr_30290[(1)] = (1));

return statearr_30290;
});
var cljs$core$async$state_machine__20563__auto____1 = (function (state_30264){
while(true){
var ret_value__20564__auto__ = (function (){try{while(true){
var result__20565__auto__ = switch__20562__auto__.call(null,state_30264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20565__auto__;
}
break;
}
}catch (e30291){if((e30291 instanceof Object)){
var ex__20566__auto__ = e30291;
var statearr_30292_30313 = state_30264;
(statearr_30292_30313[(5)] = ex__20566__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20564__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30314 = state_30264;
state_30264 = G__30314;
continue;
} else {
return ret_value__20564__auto__;
}
break;
}
});
cljs$core$async$state_machine__20563__auto__ = function(state_30264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20563__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20563__auto____1.call(this,state_30264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20563__auto____0;
cljs$core$async$state_machine__20563__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20563__auto____1;
return cljs$core$async$state_machine__20563__auto__;
})()
;})(switch__20562__auto__,c__20627__auto___30298,out))
})();
var state__20629__auto__ = (function (){var statearr_30293 = f__20628__auto__.call(null);
(statearr_30293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20627__auto___30298);

return statearr_30293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20629__auto__);
});})(c__20627__auto___30298,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1438815275849