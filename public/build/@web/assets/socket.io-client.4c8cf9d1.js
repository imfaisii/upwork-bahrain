import{p as V}from"./parseuri.1963fa84.js";import{s as R}from"./socket.io-parser.6220f9fe.js";import{l as Y}from"./engine.io-client.915a8ff3.js";import{c as T}from"./component-emitter.72d4fec7.js";import{t as Q}from"./to-array.b41ea466.js";import{c as j}from"./component-bind.d6d60fa3.js";import{p as U}from"./parseqs.ede9f166.js";import{h as Z}from"./has-binary2.8a78c161.js";import{i as G}from"./indexof.a4b72e6b.js";import{b as W}from"./backo2.46430cfe.js";var S={exports:{}},F={exports:{}},O={exports:{}},k=1e3,w=k*60,A=w*60,_=A*24,H=_*365.25,X=function(e,t){t=t||{};var n=typeof e;if(n==="string"&&e.length>0)return x(e);if(n==="number"&&isNaN(e)===!1)return t.long?te(e):ee(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function x(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!!t){var n=parseFloat(t[1]),a=(t[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return n*H;case"days":case"day":case"d":return n*_;case"hours":case"hour":case"hrs":case"hr":case"h":return n*A;case"minutes":case"minute":case"mins":case"min":case"m":return n*w;case"seconds":case"second":case"secs":case"sec":case"s":return n*k;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function ee(e){return e>=_?Math.round(e/_)+"d":e>=A?Math.round(e/A)+"h":e>=w?Math.round(e/w)+"m":e>=k?Math.round(e/k)+"s":e+"ms"}function te(e){return B(e,_,"day")||B(e,A,"hour")||B(e,w,"minute")||B(e,k,"second")||e+" ms"}function B(e,t,n){if(!(e<t))return e<t*1.5?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}(function(e,t){t=e.exports=a.debug=a.default=a,t.coerce=u,t.disable=d,t.enable=m,t.enabled=g,t.humanize=X,t.instances=[],t.names=[],t.skips=[],t.formatters={};function n(i){var r=0,c;for(c in i)r=(r<<5)-r+i.charCodeAt(c),r|=0;return t.colors[Math.abs(r)%t.colors.length]}function a(i){var r;function c(){if(!!c.enabled){var s=c,o=+new Date,p=o-(r||o);s.diff=p,s.prev=r,s.curr=o,r=o;for(var h=new Array(arguments.length),C=0;C<h.length;C++)h[C]=arguments[C];h[0]=t.coerce(h[0]),typeof h[0]!="string"&&h.unshift("%O");var E=0;h[0]=h[0].replace(/%([a-zA-Z%])/g,function(N,J){if(N==="%%")return N;E++;var M=t.formatters[J];if(typeof M=="function"){var K=h[E];N=M.call(s,K),h.splice(E,1),E--}return N}),t.formatArgs.call(s,h);var L=c.log||t.log||console.log.bind(console);L.apply(s,h)}}return c.namespace=i,c.enabled=t.enabled(i),c.useColors=t.useColors(),c.color=n(i),c.destroy=l,typeof t.init=="function"&&t.init(c),t.instances.push(c),c}function l(){var i=t.instances.indexOf(this);return i!==-1?(t.instances.splice(i,1),!0):!1}function m(i){t.save(i),t.names=[],t.skips=[];var r,c=(typeof i=="string"?i:"").split(/[\s,]+/),s=c.length;for(r=0;r<s;r++)!c[r]||(i=c[r].replace(/\*/g,".*?"),i[0]==="-"?t.skips.push(new RegExp("^"+i.substr(1)+"$")):t.names.push(new RegExp("^"+i+"$")));for(r=0;r<t.instances.length;r++){var o=t.instances[r];o.enabled=t.enabled(o.namespace)}}function d(){t.enable("")}function g(i){if(i[i.length-1]==="*")return!0;var r,c;for(r=0,c=t.skips.length;r<c;r++)if(t.skips[r].test(i))return!1;for(r=0,c=t.names.length;r<c;r++)if(t.names[r].test(i))return!0;return!1}function u(i){return i instanceof Error?i.stack||i.message:i}})(O,O.exports);(function(e,t){t=e.exports=O.exports,t.log=l,t.formatArgs=a,t.save=m,t.load=d,t.useColors=n,t.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:g(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function n(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}t.formatters.j=function(u){try{return JSON.stringify(u)}catch(i){return"[UnexpectedJSONParseError]: "+i.message}};function a(u){var i=this.useColors;if(u[0]=(i?"%c":"")+this.namespace+(i?" %c":" ")+u[0]+(i?"%c ":" ")+"+"+t.humanize(this.diff),!!i){var r="color: "+this.color;u.splice(1,0,r,"color: inherit");var c=0,s=0;u[0].replace(/%[a-zA-Z%]/g,function(o){o!=="%%"&&(c++,o==="%c"&&(s=c))}),u.splice(s,0,r)}}function l(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function m(u){try{u==null?t.storage.removeItem("debug"):t.storage.debug=u}catch{}}function d(){var u;try{u=t.storage.debug}catch{}return!u&&typeof process<"u"&&"env"in process&&(u={}.DEBUG),u}t.enable(d());function g(){try{return window.localStorage}catch{}}})(F,F.exports);var ne=V,q=F.exports("socket.io-client:url"),oe=ie;function ie(e,t){var n=e;t=t||typeof location<"u"&&location,e==null&&(e=t.protocol+"//"+t.host),typeof e=="string"&&(e.charAt(0)==="/"&&(e.charAt(1)==="/"?e=t.protocol+e:e=t.host+e),/^(https?|wss?):\/\//.test(e)||(q("protocol-less url %s",e),typeof t<"u"?e=t.protocol+"//"+e:e="https://"+e),q("parse %s",e),n=ne(e)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var a=n.host.indexOf(":")!==-1,l=a?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+l+":"+n.port,n.href=n.protocol+"://"+l+(t&&t.port===n.port?"":":"+n.port),n}var D={exports:{}},$=re;function re(e,t,n){return e.on(t,n),{destroy:function(){e.removeListener(t,n)}}}(function(e,t){var n=R,a=T.exports,l=Q,m=$,d=j,g=F.exports("socket.io-client:socket"),u=U,i=Z;e.exports=s;var r={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},c=a.prototype.emit;function s(o,p,h){this.io=o,this.nsp=p,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,this.flags={},h&&h.query&&(this.query=h.query),this.io.autoConnect&&this.open()}a(s.prototype),s.prototype.subEvents=function(){if(!this.subs){var o=this.io;this.subs=[m(o,"open",d(this,"onopen")),m(o,"packet",d(this,"onpacket")),m(o,"close",d(this,"onclose"))]}},s.prototype.open=s.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.reconnecting||this.io.open(),this.io.readyState==="open"&&this.onopen(),this.emit("connecting"),this)},s.prototype.send=function(){var o=l(arguments);return o.unshift("message"),this.emit.apply(this,o),this},s.prototype.emit=function(o){if(r.hasOwnProperty(o))return c.apply(this,arguments),this;var p=l(arguments),h={type:(this.flags.binary!==void 0?this.flags.binary:i(p))?n.BINARY_EVENT:n.EVENT,data:p};return h.options={},h.options.compress=!this.flags||this.flags.compress!==!1,typeof p[p.length-1]=="function"&&(g("emitting packet with ack id %d",this.ids),this.acks[this.ids]=p.pop(),h.id=this.ids++),this.connected?this.packet(h):this.sendBuffer.push(h),this.flags={},this},s.prototype.packet=function(o){o.nsp=this.nsp,this.io.packet(o)},s.prototype.onopen=function(){if(g("transport is open - connecting"),this.nsp!=="/")if(this.query){var o=typeof this.query=="object"?u.encode(this.query):this.query;g("sending connect packet with query %s",o),this.packet({type:n.CONNECT,query:o})}else this.packet({type:n.CONNECT})},s.prototype.onclose=function(o){g("close (%s)",o),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",o)},s.prototype.onpacket=function(o){var p=o.nsp===this.nsp,h=o.type===n.ERROR&&o.nsp==="/";if(!(!p&&!h))switch(o.type){case n.CONNECT:this.onconnect();break;case n.EVENT:this.onevent(o);break;case n.BINARY_EVENT:this.onevent(o);break;case n.ACK:this.onack(o);break;case n.BINARY_ACK:this.onack(o);break;case n.DISCONNECT:this.ondisconnect();break;case n.ERROR:this.emit("error",o.data);break}},s.prototype.onevent=function(o){var p=o.data||[];g("emitting event %j",p),o.id!=null&&(g("attaching ack callback to event"),p.push(this.ack(o.id))),this.connected?c.apply(this,p):this.receiveBuffer.push(p)},s.prototype.ack=function(o){var p=this,h=!1;return function(){if(!h){h=!0;var C=l(arguments);g("sending ack %j",C),p.packet({type:i(C)?n.BINARY_ACK:n.ACK,id:o,data:C})}}},s.prototype.onack=function(o){var p=this.acks[o.id];typeof p=="function"?(g("calling ack %s with %j",o.id,o.data),p.apply(this,o.data),delete this.acks[o.id]):g("bad ack %s",o.id)},s.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emitBuffered(),this.emit("connect")},s.prototype.emitBuffered=function(){var o;for(o=0;o<this.receiveBuffer.length;o++)c.apply(this,this.receiveBuffer[o]);for(this.receiveBuffer=[],o=0;o<this.sendBuffer.length;o++)this.packet(this.sendBuffer[o]);this.sendBuffer=[]},s.prototype.ondisconnect=function(){g("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},s.prototype.destroy=function(){if(this.subs){for(var o=0;o<this.subs.length;o++)this.subs[o].destroy();this.subs=null}this.io.destroy(this)},s.prototype.close=s.prototype.disconnect=function(){return this.connected&&(g("performing disconnect (%s)",this.nsp),this.packet({type:n.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},s.prototype.compress=function(o){return this.flags.compress=o,this},s.prototype.binary=function(o){return this.flags.binary=o,this}})(D);var se=Y.exports,ce=D.exports,ae=T.exports,fe=R,v=$,b=j,y=F.exports("socket.io-client:manager"),z=G,he=W,P=Object.prototype.hasOwnProperty,I=f;function f(e,t){if(!(this instanceof f))return new f(e,t);e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.nsps={},this.subs=[],this.opts=t,this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor(t.randomizationFactor||.5),this.backoff=new he({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this.readyState="closed",this.uri=e,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[];var n=t.parser||fe;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this.autoConnect=t.autoConnect!==!1,this.autoConnect&&this.open()}f.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var e in this.nsps)P.call(this.nsps,e)&&this.nsps[e].emit.apply(this.nsps[e],arguments)};f.prototype.updateSocketIds=function(){for(var e in this.nsps)P.call(this.nsps,e)&&(this.nsps[e].id=this.generateId(e))};f.prototype.generateId=function(e){return(e==="/"?"":e+"#")+this.engine.id};ae(f.prototype);f.prototype.reconnection=function(e){return arguments.length?(this._reconnection=!!e,this):this._reconnection};f.prototype.reconnectionAttempts=function(e){return arguments.length?(this._reconnectionAttempts=e,this):this._reconnectionAttempts};f.prototype.reconnectionDelay=function(e){return arguments.length?(this._reconnectionDelay=e,this.backoff&&this.backoff.setMin(e),this):this._reconnectionDelay};f.prototype.randomizationFactor=function(e){return arguments.length?(this._randomizationFactor=e,this.backoff&&this.backoff.setJitter(e),this):this._randomizationFactor};f.prototype.reconnectionDelayMax=function(e){return arguments.length?(this._reconnectionDelayMax=e,this.backoff&&this.backoff.setMax(e),this):this._reconnectionDelayMax};f.prototype.timeout=function(e){return arguments.length?(this._timeout=e,this):this._timeout};f.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()};f.prototype.open=f.prototype.connect=function(e,t){if(y("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;y("opening %s",this.uri),this.engine=se(this.uri,this.opts);var n=this.engine,a=this;this.readyState="opening",this.skipReconnect=!1;var l=v(n,"open",function(){a.onopen(),e&&e()}),m=v(n,"error",function(u){if(y("connect_error"),a.cleanup(),a.readyState="closed",a.emitAll("connect_error",u),e){var i=new Error("Connection error");i.data=u,e(i)}else a.maybeReconnectOnOpen()});if(this._timeout!==!1){var d=this._timeout;y("connect attempt will timeout after %d",d),d===0&&l.destroy();var g=setTimeout(function(){y("connect attempt timed out after %d",d),l.destroy(),n.close(),n.emit("error","timeout"),a.emitAll("connect_timeout",d)},d);this.subs.push({destroy:function(){clearTimeout(g)}})}return this.subs.push(l),this.subs.push(m),this};f.prototype.onopen=function(){y("open"),this.cleanup(),this.readyState="open",this.emit("open");var e=this.engine;this.subs.push(v(e,"data",b(this,"ondata"))),this.subs.push(v(e,"ping",b(this,"onping"))),this.subs.push(v(e,"pong",b(this,"onpong"))),this.subs.push(v(e,"error",b(this,"onerror"))),this.subs.push(v(e,"close",b(this,"onclose"))),this.subs.push(v(this.decoder,"decoded",b(this,"ondecoded")))};f.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")};f.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)};f.prototype.ondata=function(e){this.decoder.add(e)};f.prototype.ondecoded=function(e){this.emit("packet",e)};f.prototype.onerror=function(e){y("error",e),this.emitAll("error",e)};f.prototype.socket=function(e,t){var n=this.nsps[e];if(!n){n=new ce(this,e,t),this.nsps[e]=n;var a=this;n.on("connecting",l),n.on("connect",function(){n.id=a.generateId(e)}),this.autoConnect&&l()}function l(){~z(a.connecting,n)||a.connecting.push(n)}return n};f.prototype.destroy=function(e){var t=z(this.connecting,e);~t&&this.connecting.splice(t,1),!this.connecting.length&&this.close()};f.prototype.packet=function(e){y("writing packet %j",e);var t=this;e.query&&e.type===0&&(e.nsp+="?"+e.query),t.encoding?t.packetBuffer.push(e):(t.encoding=!0,this.encoder.encode(e,function(n){for(var a=0;a<n.length;a++)t.engine.write(n[a],e.options);t.encoding=!1,t.processPacketQueue()}))};f.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var e=this.packetBuffer.shift();this.packet(e)}};f.prototype.cleanup=function(){y("cleanup");for(var e=this.subs.length,t=0;t<e;t++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()};f.prototype.close=f.prototype.disconnect=function(){y("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,this.readyState==="opening"&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()};f.prototype.onclose=function(e){y("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",e),this._reconnection&&!this.skipReconnect&&this.reconnect()};f.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var e=this;if(this.backoff.attempts>=this._reconnectionAttempts)y("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var t=this.backoff.duration();y("will wait %dms before reconnect attempt",t),this.reconnecting=!0;var n=setTimeout(function(){e.skipReconnect||(y("attempting reconnect"),e.emitAll("reconnect_attempt",e.backoff.attempts),e.emitAll("reconnecting",e.backoff.attempts),!e.skipReconnect&&e.open(function(a){a?(y("reconnect attempt error"),e.reconnecting=!1,e.reconnect(),e.emitAll("reconnect_error",a.data)):(y("reconnect success"),e.onreconnect())}))},t);this.subs.push({destroy:function(){clearTimeout(n)}})}};f.prototype.onreconnect=function(){var e=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",e)};(function(e,t){var n=oe,a=R,l=I,m=F.exports("socket.io-client");e.exports=t=g;var d=t.managers={};function g(u,i){typeof u=="object"&&(i=u,u=void 0),i=i||{};var r=n(u),c=r.source,s=r.id,o=r.path,p=d[s]&&o in d[s].nsps,h=i.forceNew||i["force new connection"]||i.multiplex===!1||p,C;return h?(m("ignoring socket cache for %s",c),C=l(c,i)):(d[s]||(m("new io instance for %s",c),d[s]=l(c,i)),C=d[s]),r.query&&!i.query&&(i.query=r.query),C.socket(r.path,i)}t.protocol=a.protocol,t.connect=g,t.Manager=I,t.Socket=D.exports})(S,S.exports);const Fe=S.exports;export{Fe as i};