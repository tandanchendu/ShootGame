System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/cjs-loader.mjs",[],(function(e){return{execute:function(){e("default",new(function(){function e(){this._registry={},this._moduleCache={}}var r=e.prototype;return r.define=function(e,r,t){this._registry[e]={factory:r,resolveMap:t}},r.require=function(e){return this._require(e)},r.throwInvalidWrapper=function(e,r){throw new Error("Module '"+e+"' imported from '"+r+"' is expected be an ESM-wrapped CommonJS module but it doesn't.")},r._require=function(e,r){var t=this._moduleCache[e];if(t)return t.exports;var o={id:e,exports:{}};return this._moduleCache[e]=o,this._tryModuleLoad(o,e),o.exports},r._resolve=function(e,r){return this._resolveFromInfos(e,r)||this._throwUnresolved(e,r)},r._resolveFromInfos=function(e,r){var t,o;return e in cjsInfos?e:r&&null!=(t=null==(o=cjsInfos[r])?void 0:o.resolveCache[e])?t:void 0},r._tryModuleLoad=function(e,r){var t=!0;try{this._load(e,r),t=!1}finally{t&&delete this._moduleCache[r]}},r._load=function(e,r){var t=this._loadWrapper(r),o=t.factory,n=t.resolveMap,i=this._createRequire(e),u=n?this._createRequireWithResolveMap("function"==typeof n?n():n,i):i;o(e.exports,u,e)},r._loadWrapper=function(e){return e in this._registry?this._registry[e]:this._loadHostProvidedModules(e)},r._loadHostProvidedModules=function(e){return{factory:function(r,t,o){if("undefined"==typeof require)throw new Error("Current environment does not provide a require() for requiring '"+e+"'.");try{o.exports=require(e)}catch(r){throw new Error("Exception thrown when calling host defined require('"+e+"').",{cause:r})}}}},r._createRequire=function(e){var r=this;return function(t){return r._require(t,e)}},r._createRequireWithResolveMap=function(e,r){return function(t){var o=e[t];if(o)return r(o);throw new Error("Unresolved specifier "+t)}},r._throwUnresolved=function(e,r){throw new Error("Unable to resolve "+e+" from "+parent+".")},e}()))}}}));

System.register("chunks:///_virtual/index-minimal.js",["./cjs-loader.mjs","./writer.js","./writer_buffer.js","./reader.js","./reader_buffer.js","./minimal2.js","./rpc.js","./roots.js"],(function(r,e){var t,i,n,f,u,c,a,s;return{setters:[function(r){t=r.default},function(r){i=r.__cjsMetaURL},function(r){n=r.__cjsMetaURL},function(r){f=r.__cjsMetaURL},function(r){u=r.__cjsMetaURL},function(r){c=r.__cjsMetaURL},function(r){a=r.__cjsMetaURL},function(r){s=r.__cjsMetaURL}],execute:function(){var o=r("__cjsMetaURL",e.meta.url);t.define(o,(function(r,e,t,i,n){var f=r;function u(){f.util._configure(),f.Writer._configure(f.BufferWriter),f.Reader._configure(f.BufferReader)}f.build="minimal",f.Writer=e("./writer"),f.BufferWriter=e("./writer_buffer"),f.Reader=e("./reader"),f.BufferReader=e("./reader_buffer"),f.util=e("./util/minimal"),f.rpc=e("./rpc"),f.roots=e("./roots"),f.configure=u,u(),t.exports}),(function(){return{"./writer":i,"./writer_buffer":n,"./reader":f,"./reader_buffer":u,"./util/minimal":c,"./rpc":a,"./roots":s}}))}}}));

System.register("chunks:///_virtual/index.js",["./cjs-loader.mjs"],(function(e,n){var t;return{setters:[function(e){t=e.default}],execute:function(){var r=e("__cjsMetaURL",n.meta.url);t.define(r,(function(e,n,t,r,u){t.exports=function(e,n){var t=new Array(arguments.length-1),r=0,u=2,l=!0;for(;u<arguments.length;)t[r++]=arguments[u++];return new Promise((function(u,a){t[r]=function(e){if(l)if(l=!1,e)a(e);else{for(var n=new Array(arguments.length-1),t=0;t<n.length;)n[t++]=arguments[t];u.apply(null,n)}};try{e.apply(n||null,t)}catch(e){l&&(l=!1,a(e))}}))},t.exports}),{})}}}));

System.register("chunks:///_virtual/index2.js",["./cjs-loader.mjs"],(function(r,e){var t;return{setters:[function(r){t=r.default}],execute:function(){var a=r("__cjsMetaURL",e.meta.url);t.define(a,(function(r,e,t,a,n){var i=r;i.length=function(r){var e=r.length;if(!e)return 0;for(var t=0;--e%4>1&&"="===r.charAt(e);)++t;return Math.ceil(3*r.length)/4-t};for(var o=new Array(64),c=new Array(123),s=0;s<64;)c[o[s]=s<26?s+65:s<52?s+71:s<62?s-4:s-59|43]=s++;i.encode=function(r,e,t){for(var a,n=null,i=[],c=0,s=0;e<t;){var u=r[e++];switch(s){case 0:i[c++]=o[u>>2],a=(3&u)<<4,s=1;break;case 1:i[c++]=o[a|u>>4],a=(15&u)<<2,s=2;break;case 2:i[c++]=o[a|u>>6],i[c++]=o[63&u],s=0}c>8191&&((n||(n=[])).push(String.fromCharCode.apply(String,i)),c=0)}return s&&(i[c++]=o[a],i[c++]=61,1===s&&(i[c++]=61)),n?(c&&n.push(String.fromCharCode.apply(String,i.slice(0,c))),n.join("")):String.fromCharCode.apply(String,i.slice(0,c))};var u="invalid encoding";i.decode=function(r,e,t){for(var a,n=t,i=0,o=0;o<r.length;){var s=r.charCodeAt(o++);if(61===s&&i>1)break;if(void 0===(s=c[s]))throw Error(u);switch(i){case 0:a=s,i=1;break;case 1:e[t++]=a<<2|(48&s)>>4,a=s,i=2;break;case 2:e[t++]=(15&a)<<4|(60&s)>>2,a=s,i=3;break;case 3:e[t++]=(3&a)<<6|s,i=0}}if(1===i)throw Error(u);return t-n},i.test=function(r){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(r)},t.exports}),{})}}}));

System.register("chunks:///_virtual/index3.js",["./cjs-loader.mjs"],(function(t,e){var s;return{setters:[function(t){s=t.default}],execute:function(){var i=t("__cjsMetaURL",e.meta.url);s.define(i,(function(t,e,s,i,n){function r(){this._listeners={}}s.exports=r,r.prototype.on=function(t,e,s){return(this._listeners[t]||(this._listeners[t]=[])).push({fn:e,ctx:s||this}),this},r.prototype.off=function(t,e){if(void 0===t)this._listeners={};else if(void 0===e)this._listeners[t]=[];else for(var s=this._listeners[t],i=0;i<s.length;)s[i].fn===e?s.splice(i,1):++i;return this},r.prototype.emit=function(t){var e=this._listeners[t];if(e){for(var s=[],i=1;i<arguments.length;)s.push(arguments[i++]);for(i=0;i<e.length;)e[i].fn.apply(e[i++].ctx,s)}return this},s.exports}),{})}}}));

System.register("chunks:///_virtual/index4.js",["./cjs-loader.mjs"],(function(r,t){var e;return{setters:[function(r){e=r.default}],execute:function(){var n=r("__cjsMetaURL",t.meta.url);e.define(n,(function(r,t,e,n,o){var a=r;a.length=function(r){for(var t=0,e=0,n=0;n<r.length;++n)(e=r.charCodeAt(n))<128?t+=1:e<2048?t+=2:55296==(64512&e)&&56320==(64512&r.charCodeAt(n+1))?(++n,t+=4):t+=3;return t},a.read=function(r,t,e){if(e-t<1)return"";for(var n,o=null,a=[],i=0;t<e;)(n=r[t++])<128?a[i++]=n:n>191&&n<224?a[i++]=(31&n)<<6|63&r[t++]:n>239&&n<365?(n=((7&n)<<18|(63&r[t++])<<12|(63&r[t++])<<6|63&r[t++])-65536,a[i++]=55296+(n>>10),a[i++]=56320+(1023&n)):a[i++]=(15&n)<<12|(63&r[t++])<<6|63&r[t++],i>8191&&((o||(o=[])).push(String.fromCharCode.apply(String,a)),i=0);return o?(i&&o.push(String.fromCharCode.apply(String,a.slice(0,i))),o.join("")):String.fromCharCode.apply(String,a.slice(0,i))},a.write=function(r,t,e){for(var n,o,a=e,i=0;i<r.length;++i)(n=r.charCodeAt(i))<128?t[e++]=n:n<2048?(t[e++]=n>>6|192,t[e++]=63&n|128):55296==(64512&n)&&56320==(64512&(o=r.charCodeAt(i+1)))?(n=65536+((1023&n)<<10)+(1023&o),++i,t[e++]=n>>18|240,t[e++]=n>>12&63|128,t[e++]=n>>6&63|128,t[e++]=63&n|128):(t[e++]=n>>12|224,t[e++]=n>>6&63|128,t[e++]=63&n|128);return e-a},e.exports}),{})}}}));

System.register("chunks:///_virtual/index5.js",["./cjs-loader.mjs"],(function(e,t){var n;return{setters:[function(e){n=e.default}],execute:function(){var r=e("__cjsMetaURL",t.meta.url);n.define(r,(function(e,t,n,r,u){n.exports=function(e,t,n){var r=n||8192,u=r>>>1,c=null,i=r;return function(n){if(n<1||n>u)return e(n);i+n>r&&(c=e(r),i=0);var s=t.call(c,i,i+=n);return 7&i&&(i=1+(7|i)),s}},n.exports}),{})}}}));

System.register("chunks:///_virtual/index6.js",["./cjs-loader.mjs"],(function(e,t){var n;return{setters:[function(e){n=e.default}],execute:function(){var r=e("__cjsMetaURL",t.meta.url);n.define(r,(function(e,t,n,r,o){function a(e){return"undefined"!=typeof Float32Array?function(){var t=new Float32Array([-0]),n=new Uint8Array(t.buffer),r=128===n[3];function o(e,r,o){t[0]=e,r[o]=n[0],r[o+1]=n[1],r[o+2]=n[2],r[o+3]=n[3]}function a(e,r,o){t[0]=e,r[o]=n[3],r[o+1]=n[2],r[o+2]=n[1],r[o+3]=n[0]}function u(e,r){return n[0]=e[r],n[1]=e[r+1],n[2]=e[r+2],n[3]=e[r+3],t[0]}function i(e,r){return n[3]=e[r],n[2]=e[r+1],n[1]=e[r+2],n[0]=e[r+3],t[0]}e.writeFloatLE=r?o:a,e.writeFloatBE=r?a:o,e.readFloatLE=r?u:i,e.readFloatBE=r?i:u}():function(){function t(e,t,n,r){var o=t<0?1:0;if(o&&(t=-t),0===t)e(1/t>0?0:2147483648,n,r);else if(isNaN(t))e(2143289344,n,r);else if(t>34028234663852886e22)e((o<<31|2139095040)>>>0,n,r);else if(t<11754943508222875e-54)e((o<<31|Math.round(t/1401298464324817e-60))>>>0,n,r);else{var a=Math.floor(Math.log(t)/Math.LN2);e((o<<31|a+127<<23|8388607&Math.round(t*Math.pow(2,-a)*8388608))>>>0,n,r)}}function n(e,t,n){var r=e(t,n),o=2*(r>>31)+1,a=r>>>23&255,u=8388607&r;return 255===a?u?NaN:o*(1/0):0===a?1401298464324817e-60*o*u:o*Math.pow(2,a-150)*(u+8388608)}e.writeFloatLE=t.bind(null,u),e.writeFloatBE=t.bind(null,i),e.readFloatLE=n.bind(null,l),e.readFloatBE=n.bind(null,f)}(),"undefined"!=typeof Float64Array?function(){var t=new Float64Array([-0]),n=new Uint8Array(t.buffer),r=128===n[7];function o(e,r,o){t[0]=e,r[o]=n[0],r[o+1]=n[1],r[o+2]=n[2],r[o+3]=n[3],r[o+4]=n[4],r[o+5]=n[5],r[o+6]=n[6],r[o+7]=n[7]}function a(e,r,o){t[0]=e,r[o]=n[7],r[o+1]=n[6],r[o+2]=n[5],r[o+3]=n[4],r[o+4]=n[3],r[o+5]=n[2],r[o+6]=n[1],r[o+7]=n[0]}function u(e,r){return n[0]=e[r],n[1]=e[r+1],n[2]=e[r+2],n[3]=e[r+3],n[4]=e[r+4],n[5]=e[r+5],n[6]=e[r+6],n[7]=e[r+7],t[0]}function i(e,r){return n[7]=e[r],n[6]=e[r+1],n[5]=e[r+2],n[4]=e[r+3],n[3]=e[r+4],n[2]=e[r+5],n[1]=e[r+6],n[0]=e[r+7],t[0]}e.writeDoubleLE=r?o:a,e.writeDoubleBE=r?a:o,e.readDoubleLE=r?u:i,e.readDoubleBE=r?i:u}():function(){function t(e,t,n,r,o,a){var u=r<0?1:0;if(u&&(r=-r),0===r)e(0,o,a+t),e(1/r>0?0:2147483648,o,a+n);else if(isNaN(r))e(0,o,a+t),e(2146959360,o,a+n);else if(r>17976931348623157e292)e(0,o,a+t),e((u<<31|2146435072)>>>0,o,a+n);else{var i;if(r<22250738585072014e-324)e((i=r/5e-324)>>>0,o,a+t),e((u<<31|i/4294967296)>>>0,o,a+n);else{var l=Math.floor(Math.log(r)/Math.LN2);1024===l&&(l=1023),e(4503599627370496*(i=r*Math.pow(2,-l))>>>0,o,a+t),e((u<<31|l+1023<<20|1048576*i&1048575)>>>0,o,a+n)}}}function n(e,t,n,r,o){var a=e(r,o+t),u=e(r,o+n),i=2*(u>>31)+1,l=u>>>20&2047,f=4294967296*(1048575&u)+a;return 2047===l?f?NaN:i*(1/0):0===l?5e-324*i*f:i*Math.pow(2,l-1075)*(f+4503599627370496)}e.writeDoubleLE=t.bind(null,u,0,4),e.writeDoubleBE=t.bind(null,i,4,0),e.readDoubleLE=n.bind(null,l,0,4),e.readDoubleBE=n.bind(null,f,4,0)}(),e}function u(e,t,n){t[n]=255&e,t[n+1]=e>>>8&255,t[n+2]=e>>>16&255,t[n+3]=e>>>24}function i(e,t,n){t[n]=e>>>24,t[n+1]=e>>>16&255,t[n+2]=e>>>8&255,t[n+3]=255&e}function l(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0}function f(e,t){return(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}n.exports=a(a),n.exports,n.exports.writeFloatLE,n.exports.writeFloatBE,n.exports.readFloatLE,n.exports.readFloatBE,n.exports.writeDoubleLE,n.exports.writeDoubleBE,n.exports.readDoubleLE,n.exports.readDoubleBE}),{})}}}));

System.register("chunks:///_virtual/index7.js",["./cjs-loader.mjs"],(function(exports,module){var loader;return{setters:[function(e){loader=e.default}],execute:function(){var __cjsMetaURL=exports("__cjsMetaURL",module.meta.url);loader.define(__cjsMetaURL,(function(exports,require,module,__filename,__dirname){function inquire(moduleName){try{var mod=eval("quire".replace(/^/,"re"))(moduleName);if(mod&&(mod.length||Object.keys(mod).length))return mod}catch(e){}return null}module.exports=inquire,module.exports}),{})}}}));

System.register("chunks:///_virtual/longbits.js",["./cjs-loader.mjs","./minimal2.js"],(function(t,i){var n,o;return{setters:[function(t){n=t.default},function(t){o=t.__cjsMetaURL}],execute:function(){var r=t("__cjsMetaURL",i.meta.url);n.define(r,(function(t,i,n,o,r){n.exports=h;var e=i("../util/minimal");function h(t,i){this.lo=t>>>0,this.hi=i>>>0}var s=h.zero=new h(0,0);s.toNumber=function(){return 0},s.zzEncode=s.zzDecode=function(){return this},s.length=function(){return 1};var u=h.zeroHash="\0\0\0\0\0\0\0\0";h.fromNumber=function(t){if(0===t)return s;var i=t<0;i&&(t=-t);var n=t>>>0,o=(t-n)/4294967296>>>0;return i&&(o=~o>>>0,n=~n>>>0,++n>4294967295&&(n=0,++o>4294967295&&(o=0))),new h(n,o)},h.from=function(t){if("number"==typeof t)return h.fromNumber(t);if(e.isString(t)){if(!e.Long)return h.fromNumber(parseInt(t,10));t=e.Long.fromString(t)}return t.low||t.high?new h(t.low>>>0,t.high>>>0):s},h.prototype.toNumber=function(t){if(!t&&this.hi>>>31){var i=1+~this.lo>>>0,n=~this.hi>>>0;return i||(n=n+1>>>0),-(i+4294967296*n)}return this.lo+4294967296*this.hi},h.prototype.toLong=function(t){return e.Long?new e.Long(0|this.lo,0|this.hi,Boolean(t)):{low:0|this.lo,high:0|this.hi,unsigned:Boolean(t)}};var l=String.prototype.charCodeAt;h.fromHash=function(t){return t===u?s:new h((l.call(t,0)|l.call(t,1)<<8|l.call(t,2)<<16|l.call(t,3)<<24)>>>0,(l.call(t,4)|l.call(t,5)<<8|l.call(t,6)<<16|l.call(t,7)<<24)>>>0)},h.prototype.toHash=function(){return String.fromCharCode(255&this.lo,this.lo>>>8&255,this.lo>>>16&255,this.lo>>>24,255&this.hi,this.hi>>>8&255,this.hi>>>16&255,this.hi>>>24)},h.prototype.zzEncode=function(){var t=this.hi>>31;return this.hi=((this.hi<<1|this.lo>>>31)^t)>>>0,this.lo=(this.lo<<1^t)>>>0,this},h.prototype.zzDecode=function(){var t=-(1&this.lo);return this.lo=((this.lo>>>1|this.hi<<31)^t)>>>0,this.hi=(this.hi>>>1^t)>>>0,this},h.prototype.length=function(){var t=this.lo,i=(this.lo>>>28|this.hi<<4)>>>0,n=this.hi>>>24;return 0===n?0===i?t<16384?t<128?1:2:t<2097152?3:4:i<16384?i<128?5:6:i<2097152?7:8:n<128?9:10},n.exports}),(function(){return{"../util/minimal":o}}))}}}));

System.register("chunks:///_virtual/minimal.js",["./cjs-loader.mjs","./index-minimal.js"],(function(n,e){var i,t;return{setters:[function(n){i=n.default},function(n){t=n.__cjsMetaURL}],execute:function(){var r=n("__cjsMetaURL",e.meta.url);i.define(r,(function(n,e,i,t,r){i.exports=e("./src/index-minimal"),i.exports}),(function(){return{"./src/index-minimal":t}}))}}}));

System.register("chunks:///_virtual/minimal2.js",["./cjs-loader.mjs","./index.js","./index2.js","./index3.js","./index6.js","./index7.js","./index4.js","./index5.js","./longbits.js"],(function(e,r){var t,n,o,f,i,u,s,a,c;return{setters:[function(e){t=e.default},function(e){n=e.__cjsMetaURL},function(e){o=e.__cjsMetaURL},function(e){f=e.__cjsMetaURL},function(e){i=e.__cjsMetaURL},function(e){u=e.__cjsMetaURL},function(e){s=e.__cjsMetaURL},function(e){a=e.__cjsMetaURL},function(e){c=e.__cjsMetaURL}],execute:function(){var l=e("__cjsMetaURL",r.meta.url);t.define(l,(function(e,r,t,n,o){var f=e;function i(e,r,t){for(var n=Object.keys(r),o=0;o<n.length;++o)void 0!==e[n[o]]&&t||(e[n[o]]=r[n[o]]);return e}function u(e){function r(e,t){if(!(this instanceof r))return new r(e,t);Object.defineProperty(this,"message",{get:function(){return e}}),Error.captureStackTrace?Error.captureStackTrace(this,r):Object.defineProperty(this,"stack",{value:(new Error).stack||""}),t&&i(this,t)}return r.prototype=Object.create(Error.prototype,{constructor:{value:r,writable:!0,enumerable:!1,configurable:!0},name:{get:function(){return e},set:void 0,enumerable:!1,configurable:!0},toString:{value:function(){return this.name+": "+this.message},writable:!0,enumerable:!1,configurable:!0}}),r}f.asPromise=r("@protobufjs/aspromise"),f.base64=r("@protobufjs/base64"),f.EventEmitter=r("@protobufjs/eventemitter"),f.float=r("@protobufjs/float"),f.inquire=r("@protobufjs/inquire"),f.utf8=r("@protobufjs/utf8"),f.pool=r("@protobufjs/pool"),f.LongBits=r("./longbits"),f.isNode=Boolean("undefined"!=typeof global&&global&&global.process&&global.process.versions&&global.process.versions.node),f.global=f.isNode&&global||"undefined"!=typeof window&&window||"undefined"!=typeof self&&self||this,f.emptyArray=Object.freeze?Object.freeze([]):[],f.emptyObject=Object.freeze?Object.freeze({}):{},f.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},f.isString=function(e){return"string"==typeof e||e instanceof String},f.isObject=function(e){return e&&"object"==typeof e},f.isset=f.isSet=function(e,r){var t=e[r];return!(null==t||!e.hasOwnProperty(r))&&("object"!=typeof t||(Array.isArray(t)?t.length:Object.keys(t).length)>0)},f.Buffer=function(){try{var e=f.inquire("buffer").Buffer;return e.prototype.utf8Write?e:null}catch(e){return null}}(),f._Buffer_from=null,f._Buffer_allocUnsafe=null,f.newBuffer=function(e){return"number"==typeof e?f.Buffer?f._Buffer_allocUnsafe(e):new f.Array(e):f.Buffer?f._Buffer_from(e):"undefined"==typeof Uint8Array?e:new Uint8Array(e)},f.Array="undefined"!=typeof Uint8Array?Uint8Array:Array,f.Long=f.global.dcodeIO&&f.global.dcodeIO.Long||f.global.Long||f.inquire("long"),f.key2Re=/^true|false|0|1$/,f.key32Re=/^-?(?:0|[1-9][0-9]*)$/,f.key64Re=/^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/,f.longToHash=function(e){return e?f.LongBits.from(e).toHash():f.LongBits.zeroHash},f.longFromHash=function(e,r){var t=f.LongBits.fromHash(e);return f.Long?f.Long.fromBits(t.lo,t.hi,r):t.toNumber(Boolean(r))},f.merge=i,f.lcFirst=function(e){return e.charAt(0).toLowerCase()+e.substring(1)},f.newError=u,f.ProtocolError=u("ProtocolError"),f.oneOfGetter=function(e){for(var r={},t=0;t<e.length;++t)r[e[t]]=1;return function(){for(var e=Object.keys(this),t=e.length-1;t>-1;--t)if(1===r[e[t]]&&void 0!==this[e[t]]&&null!==this[e[t]])return e[t]}},f.oneOfSetter=function(e){return function(r){for(var t=0;t<e.length;++t)e[t]!==r&&delete this[e[t]]}},f.toJSONOptions={longs:String,enums:String,bytes:String,json:!0},f._configure=function(){var e=f.Buffer;e?(f._Buffer_from=e.from!==Uint8Array.from&&e.from||function(r,t){return new e(r,t)},f._Buffer_allocUnsafe=e.allocUnsafe||function(r){return new e(r)}):f._Buffer_from=f._Buffer_allocUnsafe=null},t.exports}),(function(){return{"@protobufjs/aspromise":n,"@protobufjs/base64":o,"@protobufjs/eventemitter":f,"@protobufjs/float":i,"@protobufjs/inquire":u,"@protobufjs/utf8":s,"@protobufjs/pool":a,"./longbits":c}}))}}}));

System.register("chunks:///_virtual/reader_buffer.js",["./cjs-loader.mjs","./reader.js","./minimal2.js"],(function(t,e){var i,r,n;return{setters:[function(t){i=t.default},function(t){r=t.__cjsMetaURL},function(t){n=t.__cjsMetaURL}],execute:function(){var s=t("__cjsMetaURL",e.meta.url);i.define(s,(function(t,e,i,r,n){i.exports=u;var s=e("./reader");(u.prototype=Object.create(s.prototype)).constructor=u;var o=e("./util/minimal");function u(t){s.call(this,t)}u._configure=function(){o.Buffer&&(u.prototype._slice=o.Buffer.prototype.slice)},u.prototype.string=function(){var t=this.uint32();return this.buf.utf8Slice?this.buf.utf8Slice(this.pos,this.pos=Math.min(this.pos+t,this.len)):this.buf.toString("utf-8",this.pos,this.pos=Math.min(this.pos+t,this.len))},u._configure(),i.exports}),(function(){return{"./reader":r,"./util/minimal":n}}))}}}));

System.register("chunks:///_virtual/reader.js",["./cjs-loader.mjs","./minimal2.js"],(function(t,i){var s,r;return{setters:[function(t){s=t.default},function(t){r=t.__cjsMetaURL}],execute:function(){var o=t("__cjsMetaURL",i.meta.url);s.define(o,(function(t,i,s,r,o){s.exports=p;var n,e=i("./util/minimal"),h=e.LongBits,u=e.utf8;function f(t,i){return RangeError("index out of range: "+t.pos+" + "+(i||1)+" > "+t.len)}function p(t){this.buf=t,this.pos=0,this.len=t.length}var l,a="undefined"!=typeof Uint8Array?function(t){if(t instanceof Uint8Array||Array.isArray(t))return new p(t);throw Error("illegal buffer")}:function(t){if(Array.isArray(t))return new p(t);throw Error("illegal buffer")},c=function(){return e.Buffer?function(t){return(p.create=function(t){return e.Buffer.isBuffer(t)?new n(t):a(t)})(t)}:a};function b(){var t=new h(0,0),i=0;if(!(this.len-this.pos>4)){for(;i<3;++i){if(this.pos>=this.len)throw f(this);if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t}return t.lo=(t.lo|(127&this.buf[this.pos++])<<7*i)>>>0,t}for(;i<4;++i)if(t.lo=(t.lo|(127&this.buf[this.pos])<<7*i)>>>0,this.buf[this.pos++]<128)return t;if(t.lo=(t.lo|(127&this.buf[this.pos])<<28)>>>0,t.hi=(t.hi|(127&this.buf[this.pos])>>4)>>>0,this.buf[this.pos++]<128)return t;if(i=0,this.len-this.pos>4){for(;i<5;++i)if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}else for(;i<5;++i){if(this.pos>=this.len)throw f(this);if(t.hi=(t.hi|(127&this.buf[this.pos])<<7*i+3)>>>0,this.buf[this.pos++]<128)return t}throw Error("invalid varint encoding")}function y(t,i){return(t[i-4]|t[i-3]<<8|t[i-2]<<16|t[i-1]<<24)>>>0}function w(){if(this.pos+8>this.len)throw f(this,8);return new h(y(this.buf,this.pos+=4),y(this.buf,this.pos+=4))}p.create=c(),p.prototype._slice=e.Array.prototype.subarray||e.Array.prototype.slice,p.prototype.uint32=(l=4294967295,function(){if(l=(127&this.buf[this.pos])>>>0,this.buf[this.pos++]<128)return l;if(l=(l|(127&this.buf[this.pos])<<7)>>>0,this.buf[this.pos++]<128)return l;if(l=(l|(127&this.buf[this.pos])<<14)>>>0,this.buf[this.pos++]<128)return l;if(l=(l|(127&this.buf[this.pos])<<21)>>>0,this.buf[this.pos++]<128)return l;if(l=(l|(15&this.buf[this.pos])<<28)>>>0,this.buf[this.pos++]<128)return l;if((this.pos+=5)>this.len)throw this.pos=this.len,f(this,10);return l}),p.prototype.int32=function(){return 0|this.uint32()},p.prototype.sint32=function(){var t=this.uint32();return t>>>1^-(1&t)|0},p.prototype.bool=function(){return 0!==this.uint32()},p.prototype.fixed32=function(){if(this.pos+4>this.len)throw f(this,4);return y(this.buf,this.pos+=4)},p.prototype.sfixed32=function(){if(this.pos+4>this.len)throw f(this,4);return 0|y(this.buf,this.pos+=4)},p.prototype.float=function(){if(this.pos+4>this.len)throw f(this,4);var t=e.float.readFloatLE(this.buf,this.pos);return this.pos+=4,t},p.prototype.double=function(){if(this.pos+8>this.len)throw f(this,4);var t=e.float.readDoubleLE(this.buf,this.pos);return this.pos+=8,t},p.prototype.bytes=function(){var t=this.uint32(),i=this.pos,s=this.pos+t;if(s>this.len)throw f(this,t);if(this.pos+=t,Array.isArray(this.buf))return this.buf.slice(i,s);if(i===s){var r=e.Buffer;return r?r.alloc(0):new this.buf.constructor(0)}return this._slice.call(this.buf,i,s)},p.prototype.string=function(){var t=this.bytes();return u.read(t,0,t.length)},p.prototype.skip=function(t){if("number"==typeof t){if(this.pos+t>this.len)throw f(this,t);this.pos+=t}else do{if(this.pos>=this.len)throw f(this)}while(128&this.buf[this.pos++]);return this},p.prototype.skipType=function(t){switch(t){case 0:this.skip();break;case 1:this.skip(8);break;case 2:this.skip(this.uint32());break;case 3:for(;4!=(t=7&this.uint32());)this.skipType(t);break;case 5:this.skip(4);break;default:throw Error("invalid wire type "+t+" at offset "+this.pos)}return this},p._configure=function(t){n=t,p.create=c(),n._configure();var i=e.Long?"toLong":"toNumber";e.merge(p.prototype,{int64:function(){return b.call(this)[i](!1)},uint64:function(){return b.call(this)[i](!0)},sint64:function(){return b.call(this).zzDecode()[i](!1)},fixed64:function(){return w.call(this)[i](!0)},sfixed64:function(){return w.call(this)[i](!1)}})},s.exports}),(function(){return{"./util/minimal":r}}))}}}));

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js",[],(function(t){return{execute:function(){function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,u(n.key),n)}}function n(e,r){return(n=t("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t}))(e,r)}function o(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function u(t){var e=a(t,"string");return"symbol"==typeof e?e:String(e)}t({applyDecoratedDescriptor:function(t,e,r,n,o){var i={};Object.keys(n).forEach((function(t){i[t]=n[t]})),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0);i=r.slice().reverse().reduce((function(r,n){return n(t,e,r)||r}),i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0);void 0===i.initializer&&(Object.defineProperty(t,e,i),i=null);return i},arrayLikeToArray:i,assertThisInitialized:function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t},asyncToGenerator:function(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}},createClass:function(t,e,n){e&&r(t.prototype,e);n&&r(t,n);return Object.defineProperty(t,"prototype",{writable:!1}),t},createForOfIteratorHelperLoose:function(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=o(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},inheritsLoose:function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)},initializerDefineProperty:function(t,e,r,n){if(!r)return;Object.defineProperty(t,e,{enumerable:r.enumerable,configurable:r.configurable,writable:r.writable,value:r.initializer?r.initializer.call(n):void 0})},regeneratorRuntime:function(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
t("regeneratorRuntime",(function(){return e}));var e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),u=new P(n||[]);return o(a,"_invoke",{value:x(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var h={};function p(){}function y(){}function v(){}var d={};l(d,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==r&&n.call(m,a)&&(d=m);var b=v.prototype=p.prototype=Object.create(d);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return y.prototype=v,o(b,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(L.prototype),l(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new L(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=_,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e},setPrototypeOf:n,toPrimitive:a,toPropertyKey:u,unsupportedIterableToArray:o})}}}));

System.register("chunks:///_virtual/roots.js",["./cjs-loader.mjs"],(function(e,t){var r;return{setters:[function(e){r=e.default}],execute:function(){var s=e("__cjsMetaURL",t.meta.url);r.define(s,(function(e,t,r,s,n){r.exports={},r.exports}),{})}}}));

System.register("chunks:///_virtual/rpc.js",["./cjs-loader.mjs","./service.js"],(function(e,r){var t,c;return{setters:[function(e){t=e.default},function(e){c=e.__cjsMetaURL}],execute:function(){var n=e("__cjsMetaURL",r.meta.url);t.define(n,(function(e,r,t,c,n){e.Service=r("./rpc/service"),t.exports}),(function(){return{"./rpc/service":c}}))}}}));

System.register("chunks:///_virtual/service.js",["./cjs-loader.mjs","./minimal2.js"],(function(e,t){var r,i;return{setters:[function(e){r=e.default},function(e){i=e.__cjsMetaURL}],execute:function(){var n=e("__cjsMetaURL",t.meta.url);r.define(n,(function(e,t,r,i,n){r.exports=u;var o=t("../util/minimal");function u(e,t,r){if("function"!=typeof e)throw TypeError("rpcImpl must be a function");o.EventEmitter.call(this),this.rpcImpl=e,this.requestDelimited=Boolean(t),this.responseDelimited=Boolean(r)}(u.prototype=Object.create(o.EventEmitter.prototype)).constructor=u,u.prototype.rpcCall=function e(t,r,i,n,u){if(!n)throw TypeError("request must be specified");var c=this;if(!u)return o.asPromise(e,c,t,r,i,n);if(c.rpcImpl)try{return c.rpcImpl(t,r[c.requestDelimited?"encodeDelimited":"encode"](n).finish(),(function(e,r){if(e)return c.emit("error",e,t),u(e);if(null!==r){if(!(r instanceof i))try{r=i[c.responseDelimited?"decodeDelimited":"decode"](r)}catch(e){return c.emit("error",e,t),u(e)}return c.emit("data",r,t),u(null,r)}c.end(!0)}))}catch(e){return c.emit("error",e,t),void setTimeout((function(){u(e)}),0)}else setTimeout((function(){u(Error("already ended"))}),0)},u.prototype.end=function(e){return this.rpcImpl&&(e||this.rpcImpl(null,null,null),this.rpcImpl=null,this.emit("end").off()),this},r.exports}),(function(){return{"../util/minimal":i}}))}}}));

System.register("chunks:///_virtual/writer_buffer.js",["./cjs-loader.mjs","./writer.js","./minimal2.js"],(function(t,e){var r,n,i;return{setters:[function(t){r=t.default},function(t){n=t.__cjsMetaURL},function(t){i=t.__cjsMetaURL}],execute:function(){var f=t("__cjsMetaURL",e.meta.url);r.define(f,(function(t,e,r,n,i){r.exports=o;var f=e("./writer");(o.prototype=Object.create(f.prototype)).constructor=o;var u=e("./util/minimal");function o(){f.call(this)}function s(t,e,r){t.length<40?u.utf8.write(t,e,r):e.utf8Write?e.utf8Write(t,r):e.write(t,r)}o._configure=function(){o.alloc=u._Buffer_allocUnsafe,o.writeBytesBuffer=u.Buffer&&u.Buffer.prototype instanceof Uint8Array&&"set"===u.Buffer.prototype.set.name?function(t,e,r){e.set(t,r)}:function(t,e,r){if(t.copy)t.copy(e,r,0,t.length);else for(var n=0;n<t.length;)e[r++]=t[n++]}},o.prototype.bytes=function(t){u.isString(t)&&(t=u._Buffer_from(t,"base64"));var e=t.length>>>0;return this.uint32(e),e&&this._push(o.writeBytesBuffer,e,t),this},o.prototype.string=function(t){var e=u.Buffer.byteLength(t);return this.uint32(e),e&&this._push(s,e,t),this},o._configure(),r.exports}),(function(){return{"./writer":n,"./util/minimal":i}}))}}}));

System.register("chunks:///_virtual/writer.js",["./cjs-loader.mjs","./minimal2.js"],(function(t,n){var i,e;return{setters:[function(t){i=t.default},function(t){e=t.__cjsMetaURL}],execute:function(){var o=t("__cjsMetaURL",n.meta.url);i.define(o,(function(t,n,i,e,o){i.exports=c;var r,s=n("./util/minimal"),h=s.LongBits,u=s.base64,a=s.utf8;function l(t,n,i){this.fn=t,this.len=n,this.next=void 0,this.val=i}function p(){}function f(t){this.head=t.head,this.tail=t.tail,this.len=t.len,this.next=t.states}function c(){this.len=0,this.head=new l(p,0,0),this.tail=this.head,this.states=null}var y=function(){return s.Buffer?function(){return(c.create=function(){return new r})()}:function(){return new c}};function d(t,n,i){n[i]=255&t}function _(t,n){this.len=t,this.next=void 0,this.val=n}function v(t,n,i){for(;t.hi;)n[i++]=127&t.lo|128,t.lo=(t.lo>>>7|t.hi<<25)>>>0,t.hi>>>=7;for(;t.lo>127;)n[i++]=127&t.lo|128,t.lo=t.lo>>>7;n[i++]=t.lo}function x(t,n,i){n[i]=255&t,n[i+1]=t>>>8&255,n[i+2]=t>>>16&255,n[i+3]=t>>>24}c.create=y(),c.alloc=function(t){return new s.Array(t)},s.Array!==Array&&(c.alloc=s.pool(c.alloc,s.Array.prototype.subarray)),c.prototype._push=function(t,n,i){return this.tail=this.tail.next=new l(t,n,i),this.len+=n,this},_.prototype=Object.create(l.prototype),_.prototype.fn=function(t,n,i){for(;t>127;)n[i++]=127&t|128,t>>>=7;n[i]=t},c.prototype.uint32=function(t){return this.len+=(this.tail=this.tail.next=new _((t>>>=0)<128?1:t<16384?2:t<2097152?3:t<268435456?4:5,t)).len,this},c.prototype.int32=function(t){return t<0?this._push(v,10,h.fromNumber(t)):this.uint32(t)},c.prototype.sint32=function(t){return this.uint32((t<<1^t>>31)>>>0)},c.prototype.uint64=function(t){var n=h.from(t);return this._push(v,n.length(),n)},c.prototype.int64=c.prototype.uint64,c.prototype.sint64=function(t){var n=h.from(t).zzEncode();return this._push(v,n.length(),n)},c.prototype.bool=function(t){return this._push(d,1,t?1:0)},c.prototype.fixed32=function(t){return this._push(x,4,t>>>0)},c.prototype.sfixed32=c.prototype.fixed32,c.prototype.fixed64=function(t){var n=h.from(t);return this._push(x,4,n.lo)._push(x,4,n.hi)},c.prototype.sfixed64=c.prototype.fixed64,c.prototype.float=function(t){return this._push(s.float.writeFloatLE,4,t)},c.prototype.double=function(t){return this._push(s.float.writeDoubleLE,8,t)};var m=s.Array.prototype.set?function(t,n,i){n.set(t,i)}:function(t,n,i){for(var e=0;e<t.length;++e)n[i+e]=t[e]};c.prototype.bytes=function(t){var n=t.length>>>0;if(!n)return this._push(d,1,0);if(s.isString(t)){var i=c.alloc(n=u.length(t));u.decode(t,i,0),t=i}return this.uint32(n)._push(m,n,t)},c.prototype.string=function(t){var n=a.length(t);return n?this.uint32(n)._push(a.write,n,t):this._push(d,1,0)},c.prototype.fork=function(){return this.states=new f(this),this.head=this.tail=new l(p,0,0),this.len=0,this},c.prototype.reset=function(){return this.states?(this.head=this.states.head,this.tail=this.states.tail,this.len=this.states.len,this.states=this.states.next):(this.head=this.tail=new l(p,0,0),this.len=0),this},c.prototype.ldelim=function(){var t=this.head,n=this.tail,i=this.len;return this.reset().uint32(i),i&&(this.tail.next=t.next,this.tail=n,this.len+=i),this},c.prototype.finish=function(){for(var t=this.head.next,n=this.constructor.alloc(this.len),i=0;t;)t.fn(t.val,n,i),i+=t.len,t=t.next;return n},c._configure=function(t){r=t,c.create=y(),r._configure()},i.exports}),(function(){return{"./util/minimal":e}}))}}}));

} }; });