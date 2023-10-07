let e;function t(e,t,n,s){Object.defineProperty(e,t,{get:n,set:s,enumerable:!0,configurable:!0})}var n,s,r,i,o,a,l,c,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},u={},f={},d=h.parcelRequired7c6;null==d&&((d=function(e){if(e in u)return u[e].exports;if(e in f){var t=f[e];delete f[e];var n={id:e,exports:{}};return u[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){f[e]=t},h.parcelRequired7c6=d),d.register("fD2TE",function(e,t){var n=d("5oZN6"),s=d("i8H8Y"),r=d("3lftG"),i=d("3lObq"),o=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */function e(t){var o=new r(t),a=s(r.prototype.request,o);return(// Copy axios.prototype to instance
n.extend(a,r.prototype,o),// Copy context to instance
n.extend(a,o),// Factory for creating new instances
a.create=function(n){return e(i(t,n))},a)}(d("60F6R"));// Expose Axios class to allow class inheritance
o.Axios=r,// Expose Cancel & CancelToken
o.CanceledError=d("jEOVi"),o.CancelToken=d("1smNU"),o.isCancel=d("1yb7L"),o.VERSION=d("aDN1S").version,o.toFormData=d("1FVQ6"),// Expose AxiosError class
o.AxiosError=d("cuten"),// alias for CanceledError for backward compatibility
o.Cancel=o.CanceledError,// Expose all/spread
o.all=function(e){return Promise.all(e)},o.spread=d("iztpK"),// Expose isAxiosError
o.isAxiosError=d("68XNG"),e.exports=o,// Allow use of default import syntax in TypeScript
e.exports.default=o}),d.register("5oZN6",function(e,t){var n,s,r=d("i8H8Y"),i=Object.prototype.toString,o=(n=Object.create(null),function(e){var t=i.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return o(t)===e}}/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */function l(e){return Array.isArray(e)}/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */function c(e){return void 0===e}/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */var h=a("ArrayBuffer");/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */function u(e){return null!==e&&"object"==typeof e}/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */function f(e){if("object"!==o(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */var p=a("Date"),g=a("File"),m=a("Blob"),y=a("FileList");/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */function b(e){return"[object Function]"===i.call(e)}/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */var v=a("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */function E(e,t){// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),l(e))for(var n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else // Iterate over object keys
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}}// eslint-disable-next-line func-names
var w=(s="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return s&&e instanceof s});e.exports={isArray:l,isArrayBuffer:h,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||b(e.toString)&&e.toString()===t)},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer)},isString:/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */function(e){return"string"==typeof e},isNumber:/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */function(e){return"number"==typeof e},isObject:u,isPlainObject:f,isUndefined:c,isDate:p,isFile:g,isBlob:m,isFunction:b,isStream:/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */function(e){return u(e)&&b(e.pipe)},isURLSearchParams:v,isStandardBrowserEnv:/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:E,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */function e(){var t={};function n(n,s){f(t[s])&&f(n)?t[s]=e(t[s],n):f(n)?t[s]=e({},n):l(n)?t[s]=n.slice():t[s]=n}for(var s=0,r=arguments.length;s<r;s++)E(arguments[s],n);return t},extend:/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */function(e,t,n){return E(t,function(t,s){n&&"function"==typeof t?e[s]=r(t,n):e[s]=t}),e},trim:/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */function(e,t,n,s){e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */function(e,t,n){var s,r,i,o={};t=t||{};do{for(r=(s=Object.getOwnPropertyNames(e)).length;r-- >0;)o[i=s[r]]||(t[i]=e[i],o[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype)return t},kindOf:o,kindOfTest:a,endsWith:/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var s=e.indexOf(t,n);return -1!==s&&s===n},toArray:/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var n=Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:w,isFileList:y}}),d.register("i8H8Y",function(e,t){e.exports=function(e,t){return function(){for(var n=Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}}}),d.register("3lftG",function(e,t){var n=d("5oZN6"),s=d("9UacT"),r=d("44RNV"),i=d("5u3kf"),o=d("3lObq"),a=d("fqLK3"),l=d("agYr2"),c=l.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */function h(e){this.defaults=e,this.interceptors={request:new r,response:new r}}/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */h.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=o(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n,s=t.transitional;void 0!==s&&l.assertOptions(s,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);// filter out skipped interceptors
var r=[],a=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(a=a&&e.synchronous,r.unshift(e.fulfilled,e.rejected))});var h=[];if(this.interceptors.response.forEach(function(e){h.push(e.fulfilled,e.rejected)}),!a){var u=[i,void 0];for(Array.prototype.unshift.apply(u,r),u=u.concat(h),n=Promise.resolve(t);u.length;)n=n.then(u.shift(),u.shift());return n}for(var f=t;r.length;){var d=r.shift(),p=r.shift();try{f=d(f)}catch(e){p(e);break}}try{n=i(f)}catch(e){return Promise.reject(e)}for(;h.length;)n=n.then(h.shift(),h.shift());return n},h.prototype.getUri=function(e){return s(a((e=o(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)},// Provide aliases for supported request methods
n.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/h.prototype[e]=function(t,n){return this.request(o(n||{},{method:e,url:t,data:(n||{}).data}))}}),n.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(n,s,r){return this.request(o(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:s}))}}h.prototype[e]=t(),h.prototype[e+"Form"]=t(!0)}),e.exports=h}),d.register("9UacT",function(e,t){var n=d("5oZN6");function s(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */e.exports=function(e,t,r){/*eslint no-param-reassign:0*/if(!t)return e;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var i,o=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))}))}),i=o.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}}),d.register("44RNV",function(e,t){var n=d("5oZN6");function s(){this.handlers=[]}/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */s.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */s.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */s.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=s}),d.register("5u3kf",function(e,t){var n=d("5oZN6"),s=d("fk9qQ"),r=d("1yb7L"),i=d("60F6R"),o=d("jEOVi");/**
 * Throws a `CanceledError` if cancellation has been requested.
 */function a(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new o}/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */e.exports=function(e){return a(e),// Ensure headers exist
e.headers=e.headers||{},// Transform request data
e.data=s.call(e,e.data,e.headers,e.transformRequest),// Flatten headers
e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||i.adapter)(e).then(function(t){return a(e),// Transform response data
t.data=s.call(e,t.data,t.headers,e.transformResponse),t},function(t){return!r(t)&&(a(e),t&&t.response&&(t.response.data=s.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}}),d.register("fk9qQ",function(e,t){var n=d("5oZN6"),s=d("60F6R");/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */e.exports=function(e,t,r){var i=this||s;return /*eslint no-param-reassign:0*/n.forEach(r,function(n){e=n.call(i,e,t)}),e}}),d.register("60F6R",function(e,t){var n,s=d("4TNnu"),r=d("5oZN6"),i=d("1gAzy"),o=d("cuten"),a=d("45n2R"),l=d("1FVQ6"),c={"Content-Type":"application/x-www-form-urlencoded"};function h(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u={transitional:a,adapter:("undefined"!=typeof XMLHttpRequest?n=d("iUYGN"):void 0!==s&&"[object process]"===Object.prototype.toString.call(s)&&(n=d("iUYGN")),n),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e))return e;if(r.isArrayBufferView(e))return e.buffer;if(r.isURLSearchParams(e))return h(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,s=r.isObject(e),o=t&&t["Content-Type"];if((n=r.isFileList(e))||s&&"multipart/form-data"===o){var a=this.env&&this.env.FormData;return l(n?{"files[]":e}:e,a&&new a)}return s||"application/json"===o?(h(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||u.transitional,n=t&&t.silentJSONParsing,s=t&&t.forcedJSONParsing,i=!n&&"json"===this.responseType;if(i||s&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(i){if("SyntaxError"===e.name)throw o.from(e,o.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:d("g73yo")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(c)}),e.exports=u}),d.register("4TNnu",function(e,t){// shim for using process in browser
var n,s,r,i=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return n(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return n.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{s="function"==typeof clearTimeout?clearTimeout:a}catch(e){s=a}}();var c=[],h=!1,u=-1;function f(){h&&r&&(h=!1,r.length?c=r.concat(c):u=-1,c.length&&d())}function d(){if(!h){var e=l(f);h=!0;for(var t=c.length;t;){for(r=c,c=[];++u<t;)r&&r[u].run();u=-1,t=c.length}r=null,h=!1,function(e){if(s===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((s===a||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
s(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return s.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return s.call(this,e)}}}(e)}}// v8 likes predictible objects
function p(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||h||l(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}),d.register("1gAzy",function(e,t){var n=d("5oZN6");e.exports=function(e,t){n.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})}}),d.register("cuten",function(e,t){var n=d("5oZN6");/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */function s(e,t,n,s,r){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}n.inherits(s,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var r=s.prototype,i={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){i[e]={value:e}}),Object.defineProperties(s,i),Object.defineProperty(r,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
s.from=function(e,t,i,o,a,l){var c=Object.create(r);return n.toFlatObject(e,c,function(e){return e!==Error.prototype}),s.call(c,e.message,t,i,o,a),c.name=e.name,l&&Object.assign(c,l),c},e.exports=s}),d.register("45n2R",function(e,t){e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}}),d.register("1FVQ6",function(e,t){var n=d("ihoyg").Buffer,s=d("5oZN6");e.exports=/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/function(e,t){// eslint-disable-next-line no-param-reassign
t=t||new FormData;var r=[];function i(e){return null===e?"":s.isDate(e)?e.toISOString():s.isArrayBuffer(e)||s.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,o){if(s.isPlainObject(n)||s.isArray(n)){if(-1!==r.indexOf(n))throw Error("Circular reference detected in "+o);r.push(n),s.forEach(n,function(n,r){if(!s.isUndefined(n)){var a,l=o?o+"."+r:r;if(n&&!o&&"object"==typeof n){if(s.endsWith(r,"{}"))n=JSON.stringify(n);else if(s.endsWith(r,"[]")&&(a=s.toArray(n))){// eslint-disable-next-line func-names
a.forEach(function(e){s.isUndefined(e)||t.append(l,i(e))});return}}e(n,l)}}),r.pop()}else t.append(o,i(n))}(e),t}}),d.register("ihoyg",function(e,n){t(e.exports,"Buffer",function(){return s},function(e){return s=e}),t(e.exports,"INSPECT_MAX_BYTES",function(){return r},function(e){return r=e});var s,r,i=d("hqZtu"),o=d("5WQj6");let a="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function l(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
let t=new Uint8Array(e);return Object.setPrototypeOf(t,c.prototype),t}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function c(e,t,n){// Common case.
if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return f(e)}return h(e,t,n)}function h(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!c.isEncoding(t))throw TypeError("Unknown encoding: "+t);let n=0|y(e,t),s=l(n),r=s.write(e,t);return r!==n&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(s=s.slice(0,r)),s}(e,t);if(ArrayBuffer.isView(e))return function(e){if(F(e,Uint8Array)){let t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return p(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(F(e,ArrayBuffer)||e&&F(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(F(e,SharedArrayBuffer)||e&&F(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let s=e.valueOf&&e.valueOf();if(null!=s&&s!==e)return c.from(s,t,n);let r=function(e){var t;if(c.isBuffer(e)){let t=0|m(e.length),n=l(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t// eslint-disable-line no-self-compare
?l(0):p(e):"Buffer"===e.type&&Array.isArray(e.data)?p(e.data):void 0}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return c.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function u(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function f(e){return u(e),l(e<0?0:0|m(e))}function p(e){let t=e.length<0?0:0|m(e.length),n=l(t);for(let s=0;s<t;s+=1)n[s]=255&e[s];return n}function g(e,t,n){let s;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(s=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),c.prototype),s)}function m(e){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function y(e,t){if(c.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||F(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let n=e.length,s=arguments.length>2&&!0===arguments[2];if(!s&&0===n)return 0;// Use a for loop to avoid recursion
let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return k(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return j(e).length;default:if(r)return s?-1:k(e).length// assume utf8
;t=(""+t).toLowerCase(),r=!0}}function b(e,t,n){let s=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){let s=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>s)&&(n=s);let r="";for(let s=t;s<n;++s)r+=H[e[s]];return r}(this,t,n);case"utf8":case"utf-8":return O(this,t,n);case"ascii":return function(e,t,n){let s="";n=Math.min(e.length,n);for(let r=t;r<n;++r)s+=String.fromCharCode(127&e[r]);return s}(this,t,n);case"latin1":case"binary":return function(e,t,n){let s="";n=Math.min(e.length,n);for(let r=t;r<n;++r)s+=String.fromCharCode(e[r]);return s}(this,t,n);case"base64":var r,o;return r=t,o=n,0===r&&o===this.length?i.fromByteArray(this):i.fromByteArray(this.slice(r,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){let s=e.slice(t,n),r="";// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(let e=0;e<s.length-1;e+=2)r+=String.fromCharCode(s[e]+256*s[e+1]);return r}(this,t,n);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function v(e,t,n){let s=e[t];e[t]=e[n],e[n]=s}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function E(e,t,n,s,r){var i;// Empty buffer means no match
if(0===e.length)return -1;if("string"==typeof n?(s=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(i=n=+n// Coerce to Number.
)!=i&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return -1;n=e.length-1}else if(n<0){if(!r)return -1;n=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof t&&(t=c.from(t,s)),c.isBuffer(t))return(// Special case: looking for empty string/buffer always fails
0===t.length?-1:w(e,t,n,s,r));if("number"==typeof t)return(t&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):w(e,[t],n,s,r);throw TypeError("val must be string, number or Buffer")}function w(e,t,n,s,r){let i,o=1,a=e.length,l=t.length;if(void 0!==s&&("ucs2"===(s=String(s).toLowerCase())||"ucs-2"===s||"utf16le"===s||"utf-16le"===s)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,n/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(r){let s=-1;for(i=n;i<a;i++)if(c(e,i)===c(t,-1===s?0:i-s)){if(-1===s&&(s=i),i-s+1===l)return s*o}else -1!==s&&(i-=i-s),s=-1}else for(n+l>a&&(n=a-l),i=n;i>=0;i--){let n=!0;for(let s=0;s<l;s++)if(c(e,i+s)!==c(t,s)){n=!1;break}if(n)return i}return -1}function O(e,t,n){n=Math.min(e.length,n);let s=[],r=t;for(;r<n;){let t=e[r],i=null,o=t>239?4:t>223?3:t>191?2:1;if(r+o<=n){let n,s,a,l;switch(o){case 1:t<128&&(i=t);break;case 2:(192&(n=e[r+1]))==128&&(l=(31&t)<<6|63&n)>127&&(i=l);break;case 3:n=e[r+1],s=e[r+2],(192&n)==128&&(192&s)==128&&(l=(15&t)<<12|(63&n)<<6|63&s)>2047&&(l<55296||l>57343)&&(i=l);break;case 4:n=e[r+1],s=e[r+2],a=e[r+3],(192&n)==128&&(192&s)==128&&(192&a)==128&&(l=(15&t)<<18|(63&n)<<12|(63&s)<<6|63&a)>65535&&l<1114112&&(i=l)}}null===i?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
i=65533,o=1):i>65535&&(// encode to utf16 (surrogate pair dance)
i-=65536,s.push(i>>>10&1023|55296),i=56320|1023&i),s.push(i),r+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e)// avoid extra slice()
;// Decode in chunks to avoid "call stack size exceeded".
let n="",s=0;for(;s<t;)n+=String.fromCharCode.apply(String,e.slice(s,s+=4096));return n}(s)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function A(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function S(e,t,n,s,r,i){if(!c.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<i)throw RangeError('"value" argument is out of bounds');if(n+s>e.length)throw RangeError("Index out of range")}function T(e,t,n,s,r){I(t,s,r,e,n,7);let i=Number(t&BigInt(4294967295));e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,n}function C(e,t,n,s,r){I(t,s,r,e,n,7);let i=Number(t&BigInt(4294967295));e[n+7]=i,i>>=8,e[n+6]=i,i>>=8,e[n+5]=i,i>>=8,e[n+4]=i;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=o,o>>=8,e[n+2]=o,o>>=8,e[n+1]=o,o>>=8,e[n]=o,n+8}function R(e,t,n,s,r,i){if(n+s>e.length||n<0)throw RangeError("Index out of range")}function L(e,t,n,s,r){return t=+t,n>>>=0,r||R(e,t,n,4,34028234663852886e22,-34028234663852886e22),o.write(e,t,n,s,23,4),n+4}function N(e,t,n,s,r){return t=+t,n>>>=0,r||R(e,t,n,8,17976931348623157e292,-17976931348623157e292),o.write(e,t,n,s,52,8),n+8}s=c,r=50,/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */c.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),c.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(c.prototype,"parent",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.buffer}}),Object.defineProperty(c.prototype,"offset",{enumerable:!0,get:function(){if(c.isBuffer(this))return this.byteOffset}}),c.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/c.from=function(e,t,n){return h(e,t,n)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(c.prototype,Uint8Array.prototype),Object.setPrototypeOf(c,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/c.alloc=function(e,t,n){return(u(e),e<=0)?l(e):void 0!==t?"string"==typeof n?l(e).fill(t,n):l(e).fill(t):l(e)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */c.allocUnsafe=function(e){return f(e)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */c.allocUnsafeSlow=function(e){return f(e)},c.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==c.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},c.compare=function(e,t){if(F(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),F(t,Uint8Array)&&(t=c.from(t,t.offset,t.byteLength)),!c.isBuffer(e)||!c.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,s=t.length;for(let r=0,i=Math.min(n,s);r<i;++r)if(e[r]!==t[r]){n=e[r],s=t[r];break}return n<s?-1:s<n?1:0},c.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},c.concat=function(e,t){let n;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return c.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;let s=c.allocUnsafe(t),r=0;for(n=0;n<e.length;++n){let t=e[n];if(F(t,Uint8Array))r+t.length>s.length?(c.isBuffer(t)||(t=c.from(t)),t.copy(s,r)):Uint8Array.prototype.set.call(s,t,r);else if(c.isBuffer(t))t.copy(s,r);else throw TypeError('"list" argument must be an Array of Buffers');r+=t.length}return s},c.byteLength=y,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
c.prototype._isBuffer=!0,c.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)v(this,t,t+1);return this},c.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)v(this,t,t+3),v(this,t+1,t+2);return this},c.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)v(this,t,t+7),v(this,t+1,t+6),v(this,t+2,t+5),v(this,t+3,t+4);return this},c.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?O(this,0,e):b.apply(this,arguments)},c.prototype.toLocaleString=c.prototype.toString,c.prototype.equals=function(e){if(!c.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===c.compare(this,e)},c.prototype.inspect=function(){let e="",t=r;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},a&&(c.prototype[a]=c.prototype.inspect),c.prototype.compare=function(e,t,n,s,r){if(F(e,Uint8Array)&&(e=c.from(e,e.offset,e.byteLength)),!c.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===s&&(s=0),void 0===r&&(r=this.length),t<0||n>e.length||s<0||r>this.length)throw RangeError("out of range index");if(s>=r&&t>=n)return 0;if(s>=r)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,s>>>=0,r>>>=0,this===e)return 0;let i=r-s,o=n-t,a=Math.min(i,o),l=this.slice(s,r),h=e.slice(t,n);for(let e=0;e<a;++e)if(l[e]!==h[e]){i=l[e],o=h[e];break}return i<o?-1:o<i?1:0},c.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},c.prototype.indexOf=function(e,t,n){return E(this,e,t,n,!0)},c.prototype.lastIndexOf=function(e,t,n){return E(this,e,t,n,!1)},c.prototype.write=function(e,t,n,s){var r,i,o,a,l,c,h,u;// Buffer#write(string)
if(void 0===t)s="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)s=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===s&&(s="utf8")):(s=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===n||n>f)&&(n=f),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");s||(s="utf8");let d=!1;for(;;)switch(s){case"hex":return function(e,t,n,s){let r;n=Number(n)||0;let i=e.length-n;s?(s=Number(s))>i&&(s=i):s=i;let o=t.length;for(s>o/2&&(s=o/2),r=0;r<s;++r){let s=parseInt(t.substr(2*r,2),16);if(s!=s)break;e[n+r]=s}return r}(this,e,t,n);case"utf8":case"utf-8":return r=t,i=n,M(k(e,this.length-r),this,r,i);case"ascii":case"latin1":case"binary":return o=t,a=n,M(function(e){let t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(e),this,o,a);case"base64":// Warning: maxLength not taken into account in base64Write
return l=t,c=n,M(j(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,u=n,M(function(e,t){let n,s;let r=[];for(let i=0;i<e.length&&!((t-=2)<0);++i)s=(n=e.charCodeAt(i))>>8,r.push(n%256),r.push(s);return r}(e,this.length-h),this,h,u);default:if(d)throw TypeError("Unknown encoding: "+s);s=(""+s).toLowerCase(),d=!0}},c.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},c.prototype.slice=function(e,t){let n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);let s=this.subarray(e,t);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(s,c.prototype),s)},c.prototype.readUintLE=c.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||A(e,t,this.length);let s=this[e],r=1,i=0;for(;++i<t&&(r*=256);)s+=this[e+i]*r;return s},c.prototype.readUintBE=c.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||A(e,t,this.length);let s=this[e+--t],r=1;for(;t>0&&(r*=256);)s+=this[e+--t]*r;return s},c.prototype.readUint8=c.prototype.readUInt8=function(e,t){return e>>>=0,t||A(e,1,this.length),this[e]},c.prototype.readUint16LE=c.prototype.readUInt16LE=function(e,t){return e>>>=0,t||A(e,2,this.length),this[e]|this[e+1]<<8},c.prototype.readUint16BE=c.prototype.readUInt16BE=function(e,t){return e>>>=0,t||A(e,2,this.length),this[e]<<8|this[e+1]},c.prototype.readUint32LE=c.prototype.readUInt32LE=function(e,t){return e>>>=0,t||A(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},c.prototype.readUint32BE=c.prototype.readUInt32BE=function(e,t){return e>>>=0,t||A(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},c.prototype.readBigUInt64LE=q(function(e){P(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&D(e,this.length-8);let s=t+256*this[++e]+65536*this[++e]+16777216*this[++e],r=this[++e]+256*this[++e]+65536*this[++e]+16777216*n;return BigInt(s)+(BigInt(r)<<BigInt(32))}),c.prototype.readBigUInt64BE=q(function(e){P(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&D(e,this.length-8);let s=16777216*t+65536*this[++e]+256*this[++e]+this[++e],r=16777216*this[++e]+65536*this[++e]+256*this[++e]+n;return(BigInt(s)<<BigInt(32))+BigInt(r)}),c.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||A(e,t,this.length);let s=this[e],r=1,i=0;for(;++i<t&&(r*=256);)s+=this[e+i]*r;return s>=(r*=128)&&(s-=Math.pow(2,8*t)),s},c.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||A(e,t,this.length);let s=t,r=1,i=this[e+--s];for(;s>0&&(r*=256);)i+=this[e+--s]*r;return i>=(r*=128)&&(i-=Math.pow(2,8*t)),i},c.prototype.readInt8=function(e,t){return(e>>>=0,t||A(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},c.prototype.readInt16LE=function(e,t){e>>>=0,t||A(e,2,this.length);let n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt16BE=function(e,t){e>>>=0,t||A(e,2,this.length);let n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},c.prototype.readInt32LE=function(e,t){return e>>>=0,t||A(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},c.prototype.readInt32BE=function(e,t){return e>>>=0,t||A(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},c.prototype.readBigInt64LE=q(function(e){P(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&D(e,this.length-8);let s=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24// Overflow
);return(BigInt(s)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),c.prototype.readBigInt64BE=q(function(e){P(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&D(e,this.length-8);let s=(t<<24)+// Overflow
65536*this[++e]+256*this[++e]+this[++e];return(BigInt(s)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+n)}),c.prototype.readFloatLE=function(e,t){return e>>>=0,t||A(e,4,this.length),o.read(this,e,!0,23,4)},c.prototype.readFloatBE=function(e,t){return e>>>=0,t||A(e,4,this.length),o.read(this,e,!1,23,4)},c.prototype.readDoubleLE=function(e,t){return e>>>=0,t||A(e,8,this.length),o.read(this,e,!0,52,8)},c.prototype.readDoubleBE=function(e,t){return e>>>=0,t||A(e,8,this.length),o.read(this,e,!1,52,8)},c.prototype.writeUintLE=c.prototype.writeUIntLE=function(e,t,n,s){if(e=+e,t>>>=0,n>>>=0,!s){let s=Math.pow(2,8*n)-1;S(this,e,t,n,s,0)}let r=1,i=0;for(this[t]=255&e;++i<n&&(r*=256);)this[t+i]=e/r&255;return t+n},c.prototype.writeUintBE=c.prototype.writeUIntBE=function(e,t,n,s){if(e=+e,t>>>=0,n>>>=0,!s){let s=Math.pow(2,8*n)-1;S(this,e,t,n,s,0)}let r=n-1,i=1;for(this[t+r]=255&e;--r>=0&&(i*=256);)this[t+r]=e/i&255;return t+n},c.prototype.writeUint8=c.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,1,255,0),this[t]=255&e,t+1},c.prototype.writeUint16LE=c.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeUint16BE=c.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeUint32LE=c.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},c.prototype.writeUint32BE=c.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigUInt64LE=q(function(e,t=0){return T(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeBigUInt64BE=q(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),c.prototype.writeIntLE=function(e,t,n,s){if(e=+e,t>>>=0,!s){let s=Math.pow(2,8*n-1);S(this,e,t,n,s-1,-s)}let r=0,i=1,o=0;for(this[t]=255&e;++r<n&&(i*=256);)e<0&&0===o&&0!==this[t+r-1]&&(o=1),this[t+r]=(e/i>>0)-o&255;return t+n},c.prototype.writeIntBE=function(e,t,n,s){if(e=+e,t>>>=0,!s){let s=Math.pow(2,8*n-1);S(this,e,t,n,s-1,-s)}let r=n-1,i=1,o=0;for(this[t+r]=255&e;--r>=0&&(i*=256);)e<0&&0===o&&0!==this[t+r+1]&&(o=1),this[t+r]=(e/i>>0)-o&255;return t+n},c.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},c.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},c.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},c.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},c.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||S(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},c.prototype.writeBigInt64LE=q(function(e,t=0){return T(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),c.prototype.writeBigInt64BE=q(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),c.prototype.writeFloatLE=function(e,t,n){return L(this,e,t,!0,n)},c.prototype.writeFloatBE=function(e,t,n){return L(this,e,t,!1,n)},c.prototype.writeDoubleLE=function(e,t,n){return N(this,e,t,!0,n)},c.prototype.writeDoubleBE=function(e,t,n){return N(this,e,t,!1,n)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
c.prototype.copy=function(e,t,n,s){if(!c.isBuffer(e))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(n||(n=0),s||0===s||(s=this.length),t>=e.length&&(t=e.length),t||(t=0),s>0&&s<n&&(s=n),s===n||0===e.length||0===this.length)return 0;// Fatal error conditions
if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(s<0)throw RangeError("sourceEnd out of bounds");s>this.length&&(s=this.length),e.length-t<s-n&&(s=e.length-t+n);let r=s-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,s):Uint8Array.prototype.set.call(e,this.subarray(n,s),t),r},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
c.prototype.fill=function(e,t,n,s){let r;// Handle string cases:
if("string"==typeof e){if("string"==typeof t?(s=t,t=0,n=this.length):"string"==typeof n&&(s=n,n=this.length),void 0!==s&&"string"!=typeof s)throw TypeError("encoding must be a string");if("string"==typeof s&&!c.isEncoding(s))throw TypeError("Unknown encoding: "+s);if(1===e.length){let t=e.charCodeAt(0);("utf8"===s&&t<128||"latin1"===s)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));// Invalid ranges are not set to a default, so can range check early.
if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{let i=c.isBuffer(e)?e:c.from(e,s),o=i.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=i[r%o]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
let x={};function B(e,t,n){x[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
this.name=`${this.name} [${e}]`,// Access the stack to generate the error message including the error code
// from the name.
this.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function U(e){let t="",n=e.length,s="-"===e[0]?1:0;for(;n>=s+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function I(e,t,n,s,r,i){if(e>n||e<t){let s;let r="bigint"==typeof t?"n":"";throw s=i>3?0===t||t===BigInt(0)?`>= 0${r} and < 2${r} ** ${(i+1)*8}${r}`:`>= -(2${r} ** ${(i+1)*8-1}${r}) and < 2 ** ${(i+1)*8-1}${r}`:`>= ${t}${r} and <= ${n}${r}`,new x.ERR_OUT_OF_RANGE("value",s,e)}P(r,"offset"),(void 0===s[r]||void 0===s[r+i])&&D(r,s.length-(i+1))}function P(e,t){if("number"!=typeof e)throw new x.ERR_INVALID_ARG_TYPE(t,"number",e)}function D(e,t,n){if(Math.floor(e)!==e)throw P(e,n),new x.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new x.ERR_BUFFER_OUT_OF_BOUNDS;throw new x.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}B("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),B("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),B("ERR_OUT_OF_RANGE",function(e,t,n){let s=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>4294967296?r=U(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=U(r)),r+="n"),s+=` It must be ${t}. Received ${r}`},RangeError);// HELPER FUNCTIONS
// ================
let _=/[^+/0-9A-Za-z-_]/g;function k(e,t){let n;t=t||1/0;let s=e.length,r=null,i=[];for(let o=0;o<s;++o){// is surrogate component
if((n=e.charCodeAt(o))>55295&&n<57344){// last char was a lead
if(!r){// no lead yet
if(n>56319||o+1===s){// unexpected trail
(t-=3)>-1&&i.push(239,191,189);continue}// valid lead
r=n;continue}// 2 leads in a row
if(n<56320){(t-=3)>-1&&i.push(239,191,189),r=n;continue}// valid surrogate pair
n=(r-55296<<10|n-56320)+65536}else r&&(t-=3)>-1&&i.push(239,191,189);// encode utf8
if(r=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return i}function j(e){return i.toByteArray(function(e){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(e=// Node takes equal signs as end of the Base64 encoding
(e=e.split("=")[0]).trim().replace(_,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;e.length%4!=0;)e+="=";return e}(e))}function M(e,t,n,s){let r;for(r=0;r<s&&!(r+n>=t.length)&&!(r>=e.length);++r)t[r+n]=e[r];return r}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function F(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
let H=function(){let e="0123456789abcdef",t=Array(256);for(let n=0;n<16;++n){let s=16*n;for(let r=0;r<16;++r)t[s+r]=e[n]+e[r]}return t}();// Return not function with Error if BigInt not supported
function q(e){return"undefined"==typeof BigInt?V:e}function V(){throw Error("BigInt not supported")}}),d.register("hqZtu",function(e,n){t(e.exports,"toByteArray",function(){return s},function(e){return s=e}),t(e.exports,"fromByteArray",function(){return r},function(e){return r=e}),s=function(e){var t,n,s=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var n=e.indexOf("=");-1===n&&(n=t);var s=n===t?0:4-n%4;return[n,s]}(e),r=s[0],i=s[1],l=new a((r+i)*3/4-i),c=0,h=i>0?r-4:r;for(n=0;n<h;n+=4)t=o[e.charCodeAt(n)]<<18|o[e.charCodeAt(n+1)]<<12|o[e.charCodeAt(n+2)]<<6|o[e.charCodeAt(n+3)],l[c++]=t>>16&255,l[c++]=t>>8&255,l[c++]=255&t;return 2===i&&(t=o[e.charCodeAt(n)]<<2|o[e.charCodeAt(n+1)]>>4,l[c++]=255&t),1===i&&(t=o[e.charCodeAt(n)]<<10|o[e.charCodeAt(n+1)]<<4|o[e.charCodeAt(n+2)]>>2,l[c++]=t>>8&255,l[c++]=255&t),l},r=function(e){// go through the array every three bytes, we'll deal with trailing stuff later
for(var t,n=e.length,s=n%3// if we have 1 byte left, pad 2 bytes
,r=[],o=0,a=n-s;o<a;o+=16383// must be multiple of 3
)r.push(function(e,t,n){for(var s,r=[],o=t;o<n;o+=3)r.push(i[(s=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+i[s>>12&63]+i[s>>6&63]+i[63&s]);return r.join("")}(e,o,o+16383>a?a:o+16383));return 1===s?r.push(i[(t=e[n-1])>>2]+i[t<<4&63]+"=="):2===s&&r.push(i[(t=(e[n-2]<<8)+e[n-1])>>10]+i[t>>4&63]+i[t<<2&63]+"="),r.join("")};for(var s,r,i=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,h=l.length;c<h;++c)i[c]=l[c],o[l.charCodeAt(c)]=c;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63}),d.register("5WQj6",function(e,n){var s,r;t(e.exports,"read",function(){return s},function(e){return s=e}),t(e.exports,"write",function(){return r},function(e){return r=e}),s=function(e,t,n,s,r){var i,o,a=8*r-s-1,l=(1<<a)-1,c=l>>1,h=-7,u=n?r-1:0,f=n?-1:1,d=e[t+u];for(u+=f,i=d&(1<<-h)-1,d>>=-h,h+=a;h>0;i=256*i+e[t+u],u+=f,h-=8);for(o=i&(1<<-h)-1,i>>=-h,h+=s;h>0;o=256*o+e[t+u],u+=f,h-=8);if(0===i)i=1-c;else{if(i===l)return o?NaN:(d?-1:1)*(1/0);o+=Math.pow(2,s),i-=c}return(d?-1:1)*o*Math.pow(2,i-s)},r=function(e,t,n,s,r,i){var o,a,l,c=8*i-r-1,h=(1<<c)-1,u=h>>1,f=23===r?5960464477539062e-23:0,d=s?0:i-1,p=s?1:-1,g=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(a=isNaN(t)?1:0,o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+u>=1?t+=f/l:t+=f*Math.pow(2,1-u),t*l>=2&&(o++,l/=2),o+u>=h?(a=0,o=h):o+u>=1?(a=(t*l-1)*Math.pow(2,r),o+=u):(a=t*Math.pow(2,u-1)*Math.pow(2,r),o=0));r>=8;e[n+d]=255&a,d+=p,a/=256,r-=8);for(o=o<<r|a,c+=r;c>0;e[n+d]=255&o,d+=p,o/=256,c-=8);e[n+d-p]|=128*g}}),d.register("iUYGN",function(e,t){var n=d("5oZN6"),s=d("kVJ93"),r=d("knTPb"),i=d("9UacT"),o=d("fqLK3"),a=d("iy7Gh"),l=d("lP9mO"),c=d("45n2R"),h=d("cuten"),u=d("jEOVi"),f=d("ib3Gh");e.exports=function(e){return new Promise(function(t,d){var p,g=e.data,m=e.headers,y=e.responseType;function b(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(g)&&n.isStandardBrowserEnv()&&delete m["Content-Type"];var v=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){var E=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(E+":"+w)}var O=o(e.baseURL,e.url);function A(){if(v){// Prepare the response
var n="getAllResponseHeaders"in v?a(v.getAllResponseHeaders()):null;s(function(e){t(e),b()},function(e){d(e),b()},{data:y&&"text"!==y&&"json"!==y?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:n,config:e,request:v}),// Clean up request
v=null}}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(v.open(e.method.toUpperCase(),i(O,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
v.timeout=e.timeout,"onloadend"in v?v.onloadend=A:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(A)},// Handle browser request cancellation (as opposed to a manual cancellation)
v.onabort=function(){v&&(d(new h("Request aborted",h.ECONNABORTED,e,v)),// Clean up request
v=null)},// Handle low level network errors
v.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
d(new h("Network Error",h.ERR_NETWORK,e,v,v)),// Clean up request
v=null},// Handle timeout
v.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||c;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),d(new h(t,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,v)),// Clean up request
v=null},n.isStandardBrowserEnv()){// Add xsrf header
var S=(e.withCredentials||l(O))&&e.xsrfCookieName?r.read(e.xsrfCookieName):void 0;S&&(m[e.xsrfHeaderName]=S)}"setRequestHeader"in v&&n.forEach(m,function(e,t){void 0===g&&"content-type"===t.toLowerCase()?delete m[t]:v.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(v.withCredentials=!!e.withCredentials),y&&"json"!==y&&(v.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
p=function(e){v&&(d(!e||e&&e.type?new u:e),v.abort(),v=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),g||(g=null);var T=f(O);if(T&&-1===["http","https","file"].indexOf(T)){d(new h("Unsupported protocol "+T+":",h.ERR_BAD_REQUEST,e));return}// Send the request
v.send(g)})}}),d.register("kVJ93",function(e,t){var n=d("cuten");/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */e.exports=function(e,t,s){var r=s.config.validateStatus;!s.status||!r||r(s.status)?e(s):t(new n("Request failed with status code "+s.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))}}),d.register("knTPb",function(e,t){var n=d("5oZN6");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,s,r,i,o){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(s)&&a.push("expires="+new Date(s).toGMTString()),n.isString(r)&&a.push("path="+r),n.isString(i)&&a.push("domain="+i),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}),d.register("fqLK3",function(e,t){var n=d("dcv3J"),s=d("6GWhC");/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */e.exports=function(e,t){return e&&!n(t)?s(e,t):t}}),d.register("dcv3J",function(e,t){/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */e.exports=function(e){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}}),d.register("6GWhC",function(e,t){/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}}),d.register("iy7Gh",function(e,t){var n=d("5oZN6"),s=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */e.exports=function(e){var t,r,i,o={};return e&&n.forEach(e.split("\n"),function(e){i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t&&!(o[t]&&s.indexOf(t)>=0)&&("set-cookie"===t?o[t]=(o[t]?o[t]:[]).concat([r]):o[t]=o[t]?o[t]+", "+r:r)}),o}}),d.register("lP9mO",function(e,t){var n=d("5oZN6");e.exports=n.isStandardBrowserEnv()?// whether the request URL is of the same origin as current location.
function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),s=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function r(e){var n=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return t&&(// IE needs attribute set twice to normalize properties
s.setAttribute("href",n),n=s.href),s.setAttribute("href",n),{href:s.href,protocol:s.protocol?s.protocol.replace(/:$/,""):"",host:s.host,search:s.search?s.search.replace(/^\?/,""):"",hash:s.hash?s.hash.replace(/^#/,""):"",hostname:s.hostname,port:s.port,pathname:"/"===s.pathname.charAt(0)?s.pathname:"/"+s.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return e=r(window.location.href),function(t){var s=n.isString(t)?r(t):t;return s.protocol===e.protocol&&s.host===e.host}}():function(){return!0}}),d.register("jEOVi",function(e,t){var n=d("cuten");/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */function s(e){// eslint-disable-next-line no-eq-null,eqeqeq
n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}d("5oZN6").inherits(s,n,{__CANCEL__:!0}),e.exports=s}),d.register("ib3Gh",function(e,t){e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}}),d.register("g73yo",function(e,t){// eslint-disable-next-line strict
e.exports=null}),d.register("1yb7L",function(e,t){e.exports=function(e){return!!(e&&e.__CANCEL__)}}),d.register("3lObq",function(e,t){var n=d("5oZN6");/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */e.exports=function(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};var s={};function r(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function i(s){return n.isUndefined(t[s])?n.isUndefined(e[s])?void 0:r(void 0,e[s]):r(e[s],t[s])}// eslint-disable-next-line consistent-return
function o(e){if(!n.isUndefined(t[e]))return r(void 0,t[e])}// eslint-disable-next-line consistent-return
function a(s){return n.isUndefined(t[s])?n.isUndefined(e[s])?void 0:r(void 0,e[s]):r(void 0,t[s])}// eslint-disable-next-line consistent-return
function l(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var c={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l};return n.forEach(Object.keys(e).concat(Object.keys(t)),function(e){var t=c[e]||i,r=t(e);n.isUndefined(r)&&t!==l||(s[e]=r)}),s}}),d.register("agYr2",function(e,t){var n=d("aDN1S").version,s=d("cuten"),r={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach(function(e,t){r[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var i={};/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */r.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return function(n,r,a){if(!1===e)throw new s(o(r," has been removed"+(t?" in "+t:"")),s.ERR_DEPRECATED);return t&&!i[r]&&(i[r]=!0,// eslint-disable-next-line no-console
console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */function(e,t,n){if("object"!=typeof e)throw new s("options must be an object",s.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],a=t[o];if(a){var l=e[o],c=void 0===l||a(l,o,e);if(!0!==c)throw new s("option "+o+" must be "+c,s.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new s("Unknown option "+o,s.ERR_BAD_OPTION)}},validators:r}}),d.register("aDN1S",function(e,t){e.exports={version:"0.27.2"}}),d.register("1smNU",function(e,t){var n=d("jEOVi");/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */function s(e){if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});var t,s=this;// eslint-disable-next-line func-names
this.promise.then(function(e){if(s._listeners){var t,n=s._listeners.length;for(t=0;t<n;t++)s._listeners[t](e);s._listeners=null}}),// eslint-disable-next-line func-names
this.promise.then=function(e){// eslint-disable-next-line func-names
var t,n=new Promise(function(e){s.subscribe(e),t=e}).then(e);return n.cancel=function(){s.unsubscribe(t)},n},e(function(e){s.reason||(s.reason=new n(e),t(s.reason))})}/**
 * Throws a `CanceledError` if cancellation has been requested.
 */s.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},/**
 * Subscribe to the cancel signal
 */s.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]},/**
 * Unsubscribe from the cancel signal
 */s.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */s.source=function(){var e;return{token:new s(function(t){e=t}),cancel:e}},e.exports=s}),d.register("iztpK",function(e,t){/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */e.exports=function(e){return function(t){return e.apply(null,t)}}}),d.register("68XNG",function(e,t){var n=d("5oZN6");/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}});var p={};p=function(){function e(){return Math.random().toString(36).substring(2,10)}function t(e,t=50,n=!1){let s;return function(...r){let i=self,o=n&&!s;clearTimeout(s),s=setTimeout(()=>{s=null,n||e.apply(i,r)},t),o&&e.apply(i,r)}}function n(e,t){return JSON.stringify(e)===JSON.stringify(t)}class s{constructor(t){this.id="",this.style="",this.class=[],this.isMultiple=!1,this.isOpen=!1,this.isFullOpen=!1,this.intervalMove=null,t||(t={}),this.id="ss-"+e(),this.style=t.style||"",this.class=t.class||[],this.disabled=void 0!==t.disabled&&t.disabled,this.alwaysOpen=void 0!==t.alwaysOpen&&t.alwaysOpen,this.showSearch=void 0===t.showSearch||t.showSearch,this.searchPlaceholder=t.searchPlaceholder||"Search",this.searchText=t.searchText||"No Results",this.searchingText=t.searchingText||"Searching...",this.searchHighlight=void 0!==t.searchHighlight&&t.searchHighlight,this.closeOnSelect=void 0===t.closeOnSelect||t.closeOnSelect,this.contentLocation=t.contentLocation||document.body,this.contentPosition=t.contentPosition||"absolute",this.openPosition=t.openPosition||"auto",this.placeholderText=void 0!==t.placeholderText?t.placeholderText:"Select Value",this.allowDeselect=void 0!==t.allowDeselect&&t.allowDeselect,this.hideSelected=void 0!==t.hideSelected&&t.hideSelected,this.showOptionTooltips=void 0!==t.showOptionTooltips&&t.showOptionTooltips,this.minSelected=t.minSelected||0,this.maxSelected=t.maxSelected||1e3,this.timeoutDelay=t.timeoutDelay||200,this.maxValuesShown=t.maxValuesShown||20,this.maxValuesMessage=t.maxValuesMessage||"{number} selected"}}class r{constructor(t){if(this.id=t.id&&""!==t.id?t.id:e(),this.label=t.label||"",this.selectAll=void 0!==t.selectAll&&t.selectAll,this.selectAllText=t.selectAllText||"Select All",this.closable=t.closable||"off",this.options=[],t.options)for(let e of t.options)this.options.push(new i(e))}}class i{constructor(t){this.id=t.id&&""!==t.id?t.id:e(),this.value=void 0===t.value?t.text:t.value,this.text=t.text||"",this.html=t.html||"",this.selected=void 0!==t.selected&&t.selected,this.display=void 0===t.display||t.display,this.disabled=void 0!==t.disabled&&t.disabled,this.mandatory=void 0!==t.mandatory&&t.mandatory,this.placeholder=void 0!==t.placeholder&&t.placeholder,this.class=t.class||"",this.style=t.style||"",this.data=t.data||{}}}class o{constructor(e,t){this.selectType="single",this.data=[],this.selectType=e,this.setData(t)}validateDataArray(e){if(!Array.isArray(e))return Error("Data must be an array");for(let t of e)if(t instanceof r||"label"in t){if(!("label"in t))return Error("Optgroup must have a label");if("options"in t&&t.options)for(let e of t.options)return this.validateOption(e)}else if(t instanceof i||"text"in t)return this.validateOption(t);else return Error("Data object must be a valid optgroup or option");return null}validateOption(e){return"text"in e?null:Error("Option must have a text")}partialToFullData(e){let t=[];return e.forEach(e=>{if(e instanceof r||"label"in e){let n=[];"options"in e&&e.options&&e.options.forEach(e=>{n.push(new i(e))}),n.length>0&&t.push(new r(e))}(e instanceof i||"text"in e)&&t.push(new i(e))}),t}setData(e){this.data=this.partialToFullData(e),"single"===this.selectType&&this.setSelectedBy("value",this.getSelected())}getData(){return this.filter(null,!0)}getDataOptions(){return this.filter(null,!1)}addOption(e){this.setData(this.getData().concat(new i(e)))}setSelectedBy(e,t){let n=null,s=!1;for(let o of this.data){if(o instanceof r)for(let r of o.options)n||(n=r),r.selected=!s&&t.includes(r[e]),r.selected&&"single"===this.selectType&&(s=!0);o instanceof i&&(n||(n=o),o.selected=!s&&t.includes(o[e]),o.selected&&"single"===this.selectType&&(s=!0))}"single"===this.selectType&&n&&!s&&(n.selected=!0)}getSelected(){let e=this.getSelectedOptions(),t=[];return e.forEach(e=>{t.push(e.value)}),t}getSelectedOptions(){return this.filter(e=>e.selected,!1)}getSelectedIDs(){let e=this.getSelectedOptions(),t=[];return e.forEach(e=>{t.push(e.id)}),t}getOptgroupByID(e){for(let t of this.data)if(t instanceof r&&t.id===e)return t;return null}getOptionByID(e){let t=this.filter(t=>t.id===e,!1);return t.length?t[0]:null}search(e,t){return""===(e=e.trim())?this.getData():this.filter(n=>t(n,e),!0)}filter(e,t){let n=[];return this.data.forEach(s=>{if(s instanceof r){let o=[];if(s.options.forEach(s=>{(!e||e(s))&&(t?o.push(new i(s)):n.push(new i(s)))}),o.length>0){let e=new r(s);e.options=o,n.push(e)}}s instanceof i&&(!e||e(s))&&n.push(new i(s))}),n}getSelectType(){return this.selectType}}class a{constructor(e,t,n){this.classes={main:"ss-main",placeholder:"ss-placeholder",values:"ss-values",single:"ss-single",max:"ss-max",value:"ss-value",valueText:"ss-value-text",valueDelete:"ss-value-delete",valueOut:"ss-value-out",deselect:"ss-deselect",deselectPath:"M10,10 L90,90 M10,90 L90,10",arrow:"ss-arrow",arrowClose:"M10,30 L50,70 L90,30",arrowOpen:"M10,70 L50,30 L90,70",content:"ss-content",openAbove:"ss-open-above",openBelow:"ss-open-below",search:"ss-search",searchHighlighter:"ss-search-highlight",searching:"ss-searching",addable:"ss-addable",addablePath:"M50,10 L50,90 M10,50 L90,50",list:"ss-list",optgroup:"ss-optgroup",optgroupLabel:"ss-optgroup-label",optgroupLabelText:"ss-optgroup-label-text",optgroupActions:"ss-optgroup-actions",optgroupSelectAll:"ss-selectall",optgroupSelectAllBox:"M60,10 L10,10 L10,90 L90,90 L90,50",optgroupSelectAllCheck:"M30,45 L50,70 L90,10",optgroupClosable:"ss-closable",option:"ss-option",optionDelete:"M10,10 L90,90 M10,90 L90,10",highlighted:"ss-highlighted",open:"ss-open",close:"ss-close",selected:"ss-selected",error:"ss-error",disabled:"ss-disabled",hide:"ss-hide"},this.store=t,this.settings=e,this.callbacks=n,this.main=this.mainDiv(),this.content=this.contentDiv(),this.updateClassStyles(),this.updateAriaAttributes(),this.settings.contentLocation.appendChild(this.content.main)}enable(){this.main.main.classList.remove(this.classes.disabled),this.content.search.input.disabled=!1}disable(){this.main.main.classList.add(this.classes.disabled),this.content.search.input.disabled=!0}open(){this.main.arrow.path.setAttribute("d",this.classes.arrowOpen),this.main.main.classList.add("up"===this.settings.openPosition?this.classes.openAbove:this.classes.openBelow),this.main.main.setAttribute("aria-expanded","true"),this.moveContent();let e=this.store.getSelectedOptions();if(e.length){let t=e[e.length-1].id,n=this.content.list.querySelector('[data-id="'+t+'"]');n&&this.ensureElementInView(this.content.list,n)}}close(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.remove(this.classes.openBelow),this.main.main.setAttribute("aria-expanded","false"),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.main.arrow.path.setAttribute("d",this.classes.arrowClose)}updateClassStyles(){if(this.main.main.className="",this.main.main.removeAttribute("style"),this.content.main.className="",this.content.main.removeAttribute("style"),this.main.main.classList.add(this.classes.main),this.content.main.classList.add(this.classes.content),""!==this.settings.style&&(this.main.main.style.cssText=this.settings.style,this.content.main.style.cssText=this.settings.style),this.settings.class.length)for(let e of this.settings.class)""!==e.trim()&&(this.main.main.classList.add(e.trim()),this.content.main.classList.add(e.trim()));"relative"===this.settings.contentPosition&&this.content.main.classList.add("ss-"+this.settings.contentPosition)}updateAriaAttributes(){this.main.main.role="combobox",this.main.main.setAttribute("aria-haspopup","listbox"),this.main.main.setAttribute("aria-controls",this.content.main.id),this.main.main.setAttribute("aria-expanded","false"),this.content.main.setAttribute("role","listbox")}mainDiv(){var e;let t=document.createElement("div");t.dataset.id=this.settings.id,t.id=this.settings.id,t.tabIndex=0,t.onkeydown=e=>{switch(e.key){case"ArrowUp":case"ArrowDown":return this.callbacks.open(),"ArrowDown"===e.key?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Enter":case" ":this.callbacks.open();let t=this.content.list.querySelector("."+this.classes.highlighted);return t&&t.click(),!1;case"Escape":return this.callbacks.close(),!1}},t.onclick=e=>{this.settings.disabled||(this.settings.isOpen?this.callbacks.close():this.callbacks.open())};let n=document.createElement("div");n.classList.add(this.classes.values),t.appendChild(n);let s=document.createElement("div");s.classList.add(this.classes.deselect);let r=null===(e=this.store)||void 0===e?void 0:e.getSelectedOptions();!this.settings.allowDeselect||this.settings.isMultiple&&r&&r.length<=0?s.classList.add(this.classes.hide):s.classList.remove(this.classes.hide),s.onclick=e=>{if(e.stopPropagation(),this.settings.disabled)return;let t=!0,n=this.store.getSelectedOptions(),s=[];this.callbacks.beforeChange&&(t=!0===this.callbacks.beforeChange(s,n)),t&&(this.settings.isMultiple?(this.callbacks.setSelected([],!1),this.updateDeselectAll()):this.callbacks.setSelected([""],!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(s))};let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 100 100");let o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",this.classes.deselectPath),i.appendChild(o),s.appendChild(i),t.appendChild(s);let a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.classList.add(this.classes.arrow),a.setAttribute("viewBox","0 0 100 100");let l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("d",this.classes.arrowClose),this.settings.alwaysOpen&&a.classList.add(this.classes.hide),a.appendChild(l),t.appendChild(a),{main:t,values:n,deselect:{main:s,svg:i,path:o},arrow:{main:a,path:l}}}mainFocus(e){"click"!==e&&this.main.main.focus({preventScroll:!0})}placeholder(){let e=this.store.filter(e=>e.placeholder,!1),t=this.settings.placeholderText;e.length&&(""!==e[0].html?t=e[0].html:""!==e[0].text&&(t=e[0].text));let n=document.createElement("div");return n.classList.add(this.classes.placeholder),n.innerHTML=t,n}renderValues(){if(!this.settings.isMultiple){this.renderSingleValue();return}this.renderMultipleValues()}renderSingleValue(){let e=this.store.filter(e=>e.selected&&!e.placeholder,!1),t=e.length>0?e[0]:null;if(t){let e=document.createElement("div");e.classList.add(this.classes.single),t.html?e.innerHTML=t.html:e.innerText=t.text,this.main.values.innerHTML=e.outerHTML}else this.main.values.innerHTML=this.placeholder().outerHTML;this.settings.allowDeselect&&e.length?this.main.deselect.main.classList.remove(this.classes.hide):this.main.deselect.main.classList.add(this.classes.hide)}renderMultipleValues(){let e=this.main.values.childNodes,t=this.store.filter(e=>e.selected&&e.display,!1);if(0===t.length){this.main.values.innerHTML=this.placeholder().outerHTML;return}{let e=this.main.values.querySelector("."+this.classes.placeholder);e&&e.remove()}if(t.length>this.settings.maxValuesShown){let e=document.createElement("div");e.classList.add(this.classes.max),e.textContent=this.settings.maxValuesMessage.replace("{number}",t.length.toString()),this.main.values.innerHTML=e.outerHTML;return}{let e=this.main.values.querySelector("."+this.classes.max);e&&e.remove()}let n=[];for(let s=0;s<e.length;s++){let r=e[s],i=r.getAttribute("data-id");if(i){let e=t.filter(e=>e.id===i,!1);e.length||n.push(r)}}for(let e of n)e.classList.add(this.classes.valueOut),setTimeout(()=>{this.main.values.hasChildNodes()&&this.main.values.contains(e)&&this.main.values.removeChild(e)},100);e=this.main.values.childNodes;for(let n=0;n<t.length;n++){let s=!0;for(let r=0;r<e.length;r++)t[n].id===String(e[r].dataset.id)&&(s=!1);s&&(0===e.length?this.main.values.appendChild(this.multipleValue(t[n])):0===n?this.main.values.insertBefore(this.multipleValue(t[n]),e[n]):e[n-1].insertAdjacentElement("afterend",this.multipleValue(t[n])))}this.updateDeselectAll()}multipleValue(e){let t=document.createElement("div");t.classList.add(this.classes.value),t.dataset.id=e.id;let n=document.createElement("div");if(n.classList.add(this.classes.valueText),n.innerText=e.text,t.appendChild(n),!e.mandatory){let n=document.createElement("div");n.classList.add(this.classes.valueDelete),n.onclick=t=>{if(t.preventDefault(),t.stopPropagation(),this.settings.disabled)return;let n=!0,s=this.store.getSelectedOptions(),o=s.filter(t=>t.selected&&t.id!==e.id,!0);if((!this.settings.minSelected||!(o.length<this.settings.minSelected))&&(this.callbacks.beforeChange&&(n=!0===this.callbacks.beforeChange(o,s)),n)){let e=[];for(let t of o){if(t instanceof r)for(let n of t.options)e.push(n.value);t instanceof i&&e.push(t.value)}this.callbacks.setSelected(e,!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(o),this.updateDeselectAll()}};let s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","0 0 100 100");let o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",this.classes.optionDelete),s.appendChild(o),n.appendChild(s),t.appendChild(n)}return t}contentDiv(){let e=document.createElement("div");e.dataset.id=this.settings.id,e.id=this.settings.id;let t=this.searchDiv();e.appendChild(t.main);let n=this.listDiv();return e.appendChild(n),{main:e,search:t,list:n}}moveContent(){if("relative"===this.settings.contentPosition||"down"===this.settings.openPosition){this.moveContentBelow();return}if("up"===this.settings.openPosition){this.moveContentAbove();return}"up"===this.putContent()?this.moveContentAbove():this.moveContentBelow()}searchDiv(){let e=document.createElement("div"),n=document.createElement("input"),s=document.createElement("div");e.classList.add(this.classes.search);let r={main:e,input:n};if(this.settings.showSearch||(e.classList.add(this.classes.hide),n.readOnly=!0),n.type="search",n.placeholder=this.settings.searchPlaceholder,n.tabIndex=-1,n.setAttribute("aria-label",this.settings.searchPlaceholder),n.setAttribute("autocapitalize","off"),n.setAttribute("autocomplete","off"),n.setAttribute("autocorrect","off"),n.oninput=t(e=>{this.callbacks.search(e.target.value)},100),n.onkeydown=e=>{switch(e.key){case"ArrowUp":case"ArrowDown":return"ArrowDown"===e.key?this.highlight("down"):this.highlight("up"),!1;case"Tab":return this.callbacks.close(),!0;case"Escape":return this.callbacks.close(),!1;case"Enter":case" ":if(this.callbacks.addable&&e.ctrlKey)return s.click(),!1;{let e=this.content.list.querySelector("."+this.classes.highlighted);if(e)return e.click(),!1}return!0}},e.appendChild(n),this.callbacks.addable){s.classList.add(this.classes.addable);let t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 100 100");let n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("d",this.classes.addablePath),t.appendChild(n),s.appendChild(t),s.onclick=e=>{if(e.preventDefault(),e.stopPropagation(),!this.callbacks.addable)return;let t=this.content.search.input.value.trim();if(""===t){this.content.search.input.focus();return}let n=e=>{let t=new i(e);if(this.callbacks.addOption(t),this.settings.isMultiple){let e=this.store.getSelected();e.push(t.value),this.callbacks.setSelected(e,!0)}else this.callbacks.setSelected([t.value],!0);this.callbacks.search(""),this.settings.closeOnSelect&&setTimeout(()=>{this.callbacks.close()},100)},s=this.callbacks.addable(t);!1!==s&&null!=s&&(s instanceof Promise?s.then(e=>{"string"==typeof e?n({text:e,value:e}):n(e)}):"string"==typeof s?n({text:s,value:s}):n(s))},e.appendChild(s),r.addable={main:s,svg:t,path:n}}return r}searchFocus(){this.content.search.input.focus()}getOptions(e=!1,t=!1,n=!1){let s="."+this.classes.option;return e&&(s+=":not(."+this.classes.placeholder+")"),t&&(s+=":not(."+this.classes.disabled+")"),n&&(s+=":not(."+this.classes.hide+")"),Array.from(this.content.list.querySelectorAll(s))}highlight(e){let t=this.getOptions(!0,!0,!0);if(0!==t.length){if(1===t.length&&!t[0].classList.contains(this.classes.highlighted)){t[0].classList.add(this.classes.highlighted);return}for(let n=0;n<t.length;n++)if(t[n].classList.contains(this.classes.highlighted)){let s=t[n];s.classList.remove(this.classes.highlighted);let r=s.parentElement;if(r&&r.classList.contains(this.classes.open)){let e=r.querySelector("."+this.classes.optgroupLabel);e&&e.click()}let i=t["down"===e?n+1<t.length?n+1:0:n-1>=0?n-1:t.length-1];i.classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,i);let o=i.parentElement;if(o&&o.classList.contains(this.classes.close)){let e=o.querySelector("."+this.classes.optgroupLabel);e&&e.click()}return}t["down"===e?0:t.length-1].classList.add(this.classes.highlighted),this.ensureElementInView(this.content.list,t["down"===e?0:t.length-1])}}listDiv(){let e=document.createElement("div");return e.classList.add(this.classes.list),e}renderError(e){this.content.list.innerHTML="";let t=document.createElement("div");t.classList.add(this.classes.error),t.textContent=e,this.content.list.appendChild(t)}renderSearching(){this.content.list.innerHTML="";let e=document.createElement("div");e.classList.add(this.classes.searching),e.textContent=this.settings.searchingText,this.content.list.appendChild(e)}renderOptions(e){if(this.content.list.innerHTML="",0===e.length){let e=document.createElement("div");e.classList.add(this.classes.search),e.innerHTML=this.settings.searchText,this.content.list.appendChild(e);return}for(let t of e){if(t instanceof r){let e=document.createElement("div");e.classList.add(this.classes.optgroup);let n=document.createElement("div");n.classList.add(this.classes.optgroupLabel),e.appendChild(n);let s=document.createElement("div");s.classList.add(this.classes.optgroupLabelText),s.textContent=t.label,n.appendChild(s);let r=document.createElement("div");if(r.classList.add(this.classes.optgroupActions),n.appendChild(r),this.settings.isMultiple&&t.selectAll){let e=document.createElement("div");e.classList.add(this.classes.optgroupSelectAll);let n=!0;for(let e of t.options)if(!e.selected){n=!1;break}n&&e.classList.add(this.classes.selected);let s=document.createElement("span");s.textContent=t.selectAllText,e.appendChild(s);let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 100 100"),e.appendChild(i);let o=document.createElementNS("http://www.w3.org/2000/svg","path");o.setAttribute("d",this.classes.optgroupSelectAllBox),i.appendChild(o);let a=document.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",this.classes.optgroupSelectAllCheck),i.appendChild(a),e.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation();let s=this.store.getSelected();if(n){let e=s.filter(e=>{for(let n of t.options)if(e===n.value)return!1;return!0});this.callbacks.setSelected(e,!0);return}{let e=s.concat(t.options.map(e=>e.value));for(let e of t.options)this.store.getOptionByID(e.id)||this.callbacks.addOption(e);this.callbacks.setSelected(e,!0);return}}),r.appendChild(e)}if("off"!==t.closable){let s=document.createElement("div");s.classList.add(this.classes.optgroupClosable);let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 100 100"),i.classList.add(this.classes.arrow),s.appendChild(i);let o=document.createElementNS("http://www.w3.org/2000/svg","path");i.appendChild(o),t.options.some(e=>e.selected)||""!==this.content.search.input.value.trim()?(s.classList.add(this.classes.open),o.setAttribute("d",this.classes.arrowOpen)):"open"===t.closable?(e.classList.add(this.classes.open),o.setAttribute("d",this.classes.arrowOpen)):"close"===t.closable&&(e.classList.add(this.classes.close),o.setAttribute("d",this.classes.arrowClose)),n.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation(),e.classList.contains(this.classes.close)?(e.classList.remove(this.classes.close),e.classList.add(this.classes.open),o.setAttribute("d",this.classes.arrowOpen)):(e.classList.remove(this.classes.open),e.classList.add(this.classes.close),o.setAttribute("d",this.classes.arrowClose))}),r.appendChild(s)}for(let s of(e.appendChild(n),t.options))e.appendChild(this.option(s));this.content.list.appendChild(e)}t instanceof i&&this.content.list.appendChild(this.option(t))}}option(e){if(e.placeholder){let e=document.createElement("div");return e.classList.add(this.classes.option),e.classList.add(this.classes.hide),e}let t=document.createElement("div");return t.dataset.id=e.id,t.id=e.id,t.classList.add(this.classes.option),t.setAttribute("role","option"),e.class&&e.class.split(" ").forEach(e=>{t.classList.add(e)}),e.style&&(t.style.cssText=e.style),this.settings.searchHighlight&&""!==this.content.search.input.value.trim()?t.innerHTML=this.highlightText(""!==e.html?e.html:e.text,this.content.search.input.value,this.classes.searchHighlighter):""!==e.html?t.innerHTML=e.html:t.textContent=e.text,this.settings.showOptionTooltips&&t.textContent&&t.setAttribute("title",t.textContent),e.display||t.classList.add(this.classes.hide),e.disabled&&t.classList.add(this.classes.disabled),e.selected&&this.settings.hideSelected&&t.classList.add(this.classes.hide),e.selected?(t.classList.add(this.classes.selected),t.setAttribute("aria-selected","true"),this.main.main.setAttribute("aria-activedescendant",t.id)):(t.classList.remove(this.classes.selected),t.setAttribute("aria-selected","false")),t.addEventListener("click",t=>{t.preventDefault(),t.stopPropagation();let n=this.store.getSelected(),s=t.currentTarget,r=String(s.dataset.id);if(e.disabled||e.selected&&!this.settings.allowDeselect||this.settings.isMultiple&&this.settings.maxSelected<=n.length&&!e.selected||this.settings.isMultiple&&this.settings.minSelected>=n.length&&e.selected)return;let i=!1,o=this.store.getSelectedOptions(),a=[];this.settings.isMultiple&&(a=e.selected?o.filter(e=>e.id!==r):o.concat(e)),this.settings.isMultiple||(a=e.selected?[]:[e]),this.callbacks.beforeChange||(i=!0),this.callbacks.beforeChange&&(i=!1!==this.callbacks.beforeChange(a,o)),i&&(this.store.getOptionByID(r)||this.callbacks.addOption(e),this.callbacks.setSelected(a.map(e=>e.value),!1),this.settings.closeOnSelect&&this.callbacks.close(),this.callbacks.afterChange&&this.callbacks.afterChange(a))}),t}destroy(){this.main.main.remove(),this.content.main.remove()}highlightText(e,t,n){let s=RegExp("("+t.trim()+")(?![^<]*>[^<>]*</)","i");if(!e.match(s))return e;let r=e.match(s).index,i=r+e.match(s)[0].toString().length,o=e.substring(r,i);return e.replace(s,`<mark class="${n}">${o}</mark>`)}moveContentAbove(){let e=this.main.main.offsetHeight,t=this.content.main.offsetHeight;this.main.main.classList.remove(this.classes.openBelow),this.main.main.classList.add(this.classes.openAbove),this.content.main.classList.remove(this.classes.openBelow),this.content.main.classList.add(this.classes.openAbove);let n=this.main.main.getBoundingClientRect();this.content.main.style.margin="-"+(e+t-1)+"px 0px 0px 0px",this.content.main.style.top=n.top+n.height+window.scrollY+"px",this.content.main.style.left=n.left+window.scrollX+"px",this.content.main.style.width=n.width+"px"}moveContentBelow(){this.main.main.classList.remove(this.classes.openAbove),this.main.main.classList.add(this.classes.openBelow),this.content.main.classList.remove(this.classes.openAbove),this.content.main.classList.add(this.classes.openBelow);let e=this.main.main.getBoundingClientRect();this.content.main.style.margin="-1px 0px 0px 0px","relative"!==this.settings.contentPosition&&(this.content.main.style.top=e.top+e.height+window.scrollY+"px",this.content.main.style.left=e.left+window.scrollX+"px",this.content.main.style.width=e.width+"px")}ensureElementInView(e,t){let n=e.scrollTop+e.offsetTop,s=n+e.clientHeight,r=t.offsetTop,i=r+t.clientHeight;r<n?e.scrollTop-=n-r:i>s&&(e.scrollTop+=i-s)}putContent(){let e=this.main.main.offsetHeight,t=this.main.main.getBoundingClientRect(),n=this.content.main.offsetHeight,s=window.innerHeight-(t.top+e);return s<=n&&t.top>n?"up":"down"}updateDeselectAll(){if(!this.store||!this.settings)return;let e=this.store.getSelectedOptions(),t=e&&e.length>0,n=this.settings.isMultiple,s=this.settings.allowDeselect,r=this.main.deselect.main,i=this.classes.hide;s&&!(n&&!t)?r.classList.remove(i):r.classList.add(i)}}class l{constructor(e){this.listen=!1,this.observer=null,this.select=e,this.select.addEventListener("change",this.valueChange.bind(this),{passive:!0}),this.observer=new MutationObserver(this.observeCall.bind(this)),this.changeListen(!0)}enable(){this.select.disabled=!1}disable(){this.select.disabled=!0}hideUI(){this.select.tabIndex=-1,this.select.style.display="none",this.select.setAttribute("aria-hidden","true")}showUI(){this.select.removeAttribute("tabindex"),this.select.style.display="",this.select.removeAttribute("aria-hidden")}changeListen(e){this.listen=e,e&&this.observer&&this.observer.observe(this.select,{subtree:!0,childList:!0,attributes:!0}),!e&&this.observer&&this.observer.disconnect()}valueChange(e){return this.listen&&this.onValueChange&&this.onValueChange(this.getSelectedValues()),!0}observeCall(e){if(!this.listen)return;let t=!1,n=!1,s=!1;for(let r of e)r.target===this.select&&("disabled"===r.attributeName&&(n=!0),"class"===r.attributeName&&(t=!0)),("OPTGROUP"===r.target.nodeName||"OPTION"===r.target.nodeName)&&(s=!0);t&&this.onClassChange&&this.onClassChange(this.select.className.split(" ")),n&&this.onDisabledChange&&(this.changeListen(!1),this.onDisabledChange(this.select.disabled),this.changeListen(!0)),s&&this.onOptionsChange&&(this.changeListen(!1),this.onOptionsChange(this.getData()),this.changeListen(!0))}getData(){let e=[],t=this.select.childNodes;for(let n of t)"OPTGROUP"===n.nodeName&&e.push(this.getDataFromOptgroup(n)),"OPTION"===n.nodeName&&e.push(this.getDataFromOption(n));return e}getDataFromOptgroup(e){let t={id:e.id,label:e.label,selectAll:!!e.dataset&&"true"===e.dataset.selectall,selectAllText:e.dataset?e.dataset.selectalltext:"Select all",closable:e.dataset?e.dataset.closable:"off",options:[]},n=e.childNodes;for(let e of n)"OPTION"===e.nodeName&&t.options.push(this.getDataFromOption(e));return t}getDataFromOption(e){return{id:e.id,value:e.value,text:e.text,html:e.dataset&&e.dataset.html?e.dataset.html:"",selected:e.selected,display:"none"!==e.style.display,disabled:e.disabled,mandatory:!!e.dataset&&"true"===e.dataset.mandatory,placeholder:"true"===e.dataset.placeholder,class:e.className,style:e.style.cssText,data:e.dataset}}getSelectedValues(){let e=[],t=this.select.childNodes;for(let n of t){if("OPTGROUP"===n.nodeName){let t=n.childNodes;for(let n of t)"OPTION"===n.nodeName&&n.selected&&e.push(n.value)}"OPTION"===n.nodeName&&n.selected&&e.push(n.value)}return e}setSelected(e){this.changeListen(!1);let t=this.select.childNodes;for(let n of t){if("OPTGROUP"===n.nodeName){let t=n.childNodes;for(let n of t)"OPTION"===n.nodeName&&(n.selected=e.includes(n.value))}"OPTION"===n.nodeName&&(n.selected=e.includes(n.value))}this.changeListen(!0)}updateSelect(e,t,n){this.changeListen(!1),e&&(this.select.dataset.id=e),t&&(this.select.style.cssText=t),n&&(this.select.className="",n.forEach(e=>{""!==e.trim()&&this.select.classList.add(e.trim())})),this.changeListen(!0)}updateOptions(e){for(let t of(this.changeListen(!1),this.select.innerHTML="",e))t instanceof r&&this.select.appendChild(this.createOptgroup(t)),t instanceof i&&this.select.appendChild(this.createOption(t));this.select.dispatchEvent(new Event("change")),this.changeListen(!0)}createOptgroup(e){let t=document.createElement("optgroup");if(t.id=e.id,t.label=e.label,e.selectAll&&(t.dataset.selectAll="true"),"off"!==e.closable&&(t.dataset.closable=e.closable),e.options)for(let n of e.options)t.appendChild(this.createOption(n));return t}createOption(e){let t=document.createElement("option");return t.id=e.id,t.value=e.value,t.innerHTML=e.text,""!==e.html&&t.setAttribute("data-html",e.html),e.selected&&(t.selected=e.selected),e.disabled&&(t.disabled=!0),!1===e.display&&(t.style.display="none"),e.placeholder&&t.setAttribute("data-placeholder","true"),e.mandatory&&t.setAttribute("data-mandatory","true"),e.class&&e.class.split(" ").forEach(e=>{t.classList.add(e)}),e.data&&"object"==typeof e.data&&Object.keys(e.data).forEach(n=>{t.setAttribute("data-"+function(e){let t=e.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,e=>"-"+e.toLowerCase());return e[0]===e[0].toUpperCase()?t.substring(1):t}(n),e.data[n])}),t}destroy(){this.changeListen(!1),this.select.removeEventListener("change",this.valueChange.bind(this)),this.observer&&(this.observer.disconnect(),this.observer=null),delete this.select.dataset.id,this.showUI()}}return class{constructor(e){var n;if(this.events={search:void 0,searchFilter:(e,t)=>-1!==e.text.toLowerCase().indexOf(t.toLowerCase()),addable:void 0,beforeChange:void 0,afterChange:void 0,beforeOpen:void 0,afterOpen:void 0,beforeClose:void 0,afterClose:void 0},this.windowResize=t(()=>{(this.settings.isOpen||this.settings.isFullOpen)&&this.render.moveContent()}),this.windowScroll=t(()=>{(this.settings.isOpen||this.settings.isFullOpen)&&this.render.moveContent()}),this.documentClick=e=>{this.settings.isOpen&&e.target&&!function(e,t){function n(e,n){return n&&e&&e.classList&&e.classList.contains(n)||n&&e&&e.dataset&&e.dataset.id&&e.dataset.id===t?e:null}return n(e,t)||function e(t,s){return t&&t!==document?n(t,s)?t:e(t.parentNode,s):null}(e,t)}(e.target,this.settings.id)&&this.close(e.type)},this.windowVisibilityChange=()=>{document.hidden&&this.close()},this.selectEl="string"==typeof e.select?document.querySelector(e.select):e.select,!this.selectEl){e.events&&e.events.error&&e.events.error(Error("Could not find select element"));return}if("SELECT"!==this.selectEl.tagName){e.events&&e.events.error&&e.events.error(Error("Element isnt of type select"));return}this.selectEl.dataset.ssid&&this.destroy(),this.settings=new s(e.settings);let r=["afterChange","beforeOpen","afterOpen","beforeClose","afterClose"];for(let n in e.events)e.events.hasOwnProperty(n)&&(-1!==r.indexOf(n)?this.events[n]=t(e.events[n],100):this.events[n]=e.events[n]);this.settings.disabled=(null===(n=e.settings)||void 0===n?void 0:n.disabled)?e.settings.disabled:this.selectEl.disabled,this.settings.isMultiple=this.selectEl.multiple,this.settings.style=this.selectEl.style.cssText,this.settings.class=this.selectEl.className.split(" "),this.select=new l(this.selectEl),this.select.updateSelect(this.settings.id,this.settings.style,this.settings.class),this.select.hideUI(),this.select.onValueChange=e=>{this.setSelected(e)},this.select.onClassChange=e=>{this.settings.class=e,this.render.updateClassStyles()},this.select.onDisabledChange=e=>{e?this.disable():this.enable()},this.select.onOptionsChange=e=>{this.setData(e)},this.store=new o(this.settings.isMultiple?"multiple":"single",e.data?e.data:this.select.getData()),e.data&&this.select.updateOptions(this.store.getData());let i={open:this.open.bind(this),close:this.close.bind(this),addable:this.events.addable?this.events.addable:void 0,setSelected:this.setSelected.bind(this),addOption:this.addOption.bind(this),search:this.search.bind(this),beforeChange:this.events.beforeChange,afterChange:this.events.afterChange};this.render=new a(this.settings,this.store,i),this.render.renderValues(),this.render.renderOptions(this.store.getData());let c=this.selectEl.getAttribute("aria-label"),h=this.selectEl.getAttribute("aria-labelledby");c?this.render.main.main.setAttribute("aria-label",c):h&&this.render.main.main.setAttribute("aria-labelledby",h),this.selectEl.parentNode&&this.selectEl.parentNode.insertBefore(this.render.main.main,this.selectEl.nextSibling),document.addEventListener("click",this.documentClick),window.addEventListener("resize",this.windowResize,!1),"auto"===this.settings.openPosition&&window.addEventListener("scroll",this.windowScroll,!1),document.addEventListener("visibilitychange",this.windowVisibilityChange),this.settings.disabled&&this.disable(),this.settings.alwaysOpen&&this.open(),this.selectEl.slim=this}enable(){this.settings.disabled=!1,this.select.enable(),this.render.enable()}disable(){this.settings.disabled=!0,this.select.disable(),this.render.disable()}getData(){return this.store.getData()}setData(e){let t=this.store.getSelected(),s=this.store.validateDataArray(e);if(s){this.events.error&&this.events.error(s);return}this.store.setData(e);let r=this.store.getData();this.select.updateOptions(r),this.render.renderValues(),this.render.renderOptions(r),this.events.afterChange&&!n(t,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}getSelected(){return this.store.getSelected()}setSelected(e,t=!0){let s=this.store.getSelected();this.store.setSelectedBy("value",Array.isArray(e)?e:[e]);let r=this.store.getData();this.select.updateOptions(r),this.render.renderValues(),""!==this.render.content.search.input.value?this.search(this.render.content.search.input.value):this.render.renderOptions(r),t&&this.events.afterChange&&!n(s,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}addOption(e){let t=this.store.getSelected();this.store.getDataOptions().some(t=>{var n;return t.value===(null!==(n=e.value)&&void 0!==n?n:e.text)})||this.store.addOption(e);let s=this.store.getData();this.select.updateOptions(s),this.render.renderValues(),this.render.renderOptions(s),this.events.afterChange&&!n(t,this.store.getSelected())&&this.events.afterChange(this.store.getSelectedOptions())}open(){this.settings.disabled||this.settings.isOpen||(this.events.beforeOpen&&this.events.beforeOpen(),this.render.open(),this.settings.showSearch&&this.render.searchFocus(),this.settings.isOpen=!0,setTimeout(()=>{this.events.afterOpen&&this.events.afterOpen(),this.settings.isOpen&&(this.settings.isFullOpen=!0)},this.settings.timeoutDelay),"absolute"===this.settings.contentPosition&&(this.settings.intervalMove&&clearInterval(this.settings.intervalMove),this.settings.intervalMove=setInterval(this.render.moveContent.bind(this.render),500)))}close(e=null){this.settings.isOpen&&!this.settings.alwaysOpen&&(this.events.beforeClose&&this.events.beforeClose(),this.render.close(),""!==this.render.content.search.input.value&&this.search(""),this.render.mainFocus(e),this.settings.isOpen=!1,this.settings.isFullOpen=!1,setTimeout(()=>{this.events.afterClose&&this.events.afterClose()},this.settings.timeoutDelay),this.settings.intervalMove&&clearInterval(this.settings.intervalMove))}search(e){if(this.render.content.search.input.value!==e&&(this.render.content.search.input.value=e),!this.events.search){this.render.renderOptions(""===e?this.store.getData():this.store.search(e,this.events.searchFilter));return}this.render.renderSearching();let t=this.events.search(e,this.store.getSelectedOptions());if(t instanceof Promise){t.then(e=>{this.render.renderOptions(this.store.partialToFullData(e))}).catch(e=>{this.render.renderError("string"==typeof e?e:e.message)});return}Array.isArray(t)?this.render.renderOptions(this.store.partialToFullData(t)):this.render.renderError("Search event must return a promise or an array of data")}destroy(){document.removeEventListener("click",this.documentClick),window.removeEventListener("resize",this.windowResize,!1),"auto"===this.settings.openPosition&&window.removeEventListener("scroll",this.windowScroll,!1),document.removeEventListener("visibilitychange",this.windowVisibilityChange),this.store.setData([]),this.render.destroy(),this.select.destroy()}}}();const g={select:document.querySelector("select.breed-select"),settings:{placeholder:!0,placeholderText:"Cat Breeds",closeOnSelect:!0,maxValuesShown:10,timeoutDelay:2e3}};function m(e,t){return function(){return e.apply(t,arguments)}}// utils is a library of generic helper functions non-specific to axios
const{toString:y}=Object.prototype,{getPrototypeOf:b}=Object,v=(n=Object.create(null),e=>{let t=y.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())}),E=e=>(e=e.toLowerCase(),t=>v(t)===e),w=e=>t=>typeof t===e,{isArray:O}=Array,A=w("undefined"),S=E("ArrayBuffer"),T=w("string"),C=w("function"),R=w("number"),L=e=>null!==e&&"object"==typeof e,N=e=>{if("object"!==v(e))return!1;let t=b(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},x=E("Date"),B=E("File"),U=E("Blob"),I=E("FileList"),P=E("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function D(e,t,{allOwnKeys:n=!1}={}){let s,r;// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),O(e))for(s=0,r=e.length;s<r;s++)t.call(null,e[s],s,e);else{let r;// Iterate over object keys
let i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;for(s=0;s<o;s++)r=i[s],t.call(null,e[r],r,e)}}}function _(e,t){let n;t=t.toLowerCase();let s=Object.keys(e),r=s.length;for(;r-- >0;)if(t===(n=s[r]).toLowerCase())return n;return null}const k=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:h,j=e=>!A(e)&&e!==k,M=(s="undefined"!=typeof Uint8Array&&b(Uint8Array),e=>s&&e instanceof s),F=E("HTMLFormElement"),H=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),q=E("RegExp"),V=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),s={};D(n,(n,r)=>{let i;!1!==(i=t(n,r,e))&&(s[r]=i||n)}),Object.defineProperties(e,s)},z="abcdefghijklmnopqrstuvwxyz",$="0123456789",G={DIGIT:$,ALPHA:z,ALPHA_DIGIT:z+z.toUpperCase()+$},J=E("AsyncFunction");var K={isArray:O,isArrayBuffer:S,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!A(e)&&null!==e.constructor&&!A(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||C(e.append)&&("formdata"===(t=v(e))||// detect form-data instance
"object"===t&&C(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&S(e.buffer)},isString:T,isNumber:R,isBoolean:e=>!0===e||!1===e,isObject:L,isPlainObject:N,isUndefined:A,isDate:x,isFile:B,isBlob:U,isRegExp:q,isFunction:C,isStream:e=>L(e)&&C(e.pipe),isURLSearchParams:P,isTypedArray:M,isFileList:I,forEach:D,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function e(){let{caseless:t}=j(this)&&this||{},n={},s=(s,r)=>{let i=t&&_(n,r)||r;N(n[i])&&N(s)?n[i]=e(n[i],s):N(s)?n[i]=e({},s):O(s)?n[i]=s.slice():n[i]=s};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&D(arguments[e],s);return n},extend:(e,t,n,{allOwnKeys:s}={})=>(D(t,(t,s)=>{n&&C(t)?e[s]=m(t,n):e[s]=t},{allOwnKeys:s}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,s)=>{e.prototype=Object.create(t.prototype,s),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,s)=>{let r,i,o;let a={};// eslint-disable-next-line no-eq-null,eqeqeq
if(t=t||{},null==e)return t;do{for(i=(r=Object.getOwnPropertyNames(e)).length;i-- >0;)o=r[i],(!s||s(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=!1!==n&&b(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype)return t},kindOf:v,kindOfTest:E,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;let s=e.indexOf(t,n);return -1!==s&&s===n},toArray:e=>{if(!e)return null;if(O(e))return e;let t=e.length;if(!R(t))return null;let n=Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{let n;let s=e&&e[Symbol.iterator],r=s.call(e);for(;(n=r.next())&&!n.done;){let s=n.value;t.call(e,s[0],s[1])}},matchAll:(e,t)=>{let n;let s=[];for(;null!==(n=e.exec(t));)s.push(n);return s},isHTMLForm:F,hasOwnProperty:H,hasOwnProp:H,reduceDescriptors:V,freezeMethods:e=>{V(e,(t,n)=>{// skip restricted props in strict mode
if(C(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;let s=e[n];if(C(s)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},toObjectSet:(e,t)=>{let n={};return(e=>{e.forEach(e=>{n[e]=!0})})(O(e)?e:String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(e,t)=>Number.isFinite(e=+e)?e:t,findKey:_,global:k,isContextDefined:j,ALPHABET:G,generateString:(e=16,t=G.ALPHA_DIGIT)=>{let n="",{length:s}=t;for(;e--;)n+=t[Math.random()*s|0];return n},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(e){return!!(e&&C(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{let t=Array(10),n=(e,s)=>{if(L(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[s]=e;let r=O(e)?[]:{};return D(e,(e,t)=>{let i=n(e,s+1);A(i)||(r[t]=i)}),t[s]=void 0,r}}return e};return n(e,0)},isAsyncFn:J,isThenable:e=>e&&(L(e)||C(e))&&C(e.then)&&C(e.catch)};/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function W(e,t,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r)}K.inherits(W,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:K.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Y=W.prototype,Z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Z[e]={value:e}}),Object.defineProperties(W,Z),Object.defineProperty(Y,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
W.from=(e,t,n,s,r,i)=>{let o=Object.create(Y);return K.toFlatObject(e,o,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),W.call(o,e.message,t,n,s,r),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var X=d("ihoyg").Buffer;/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function Q(e){return K.isPlainObject(e)||K.isArray(e)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function ee(e){return K.endsWith(e,"[]")?e.slice(0,-2):e}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function et(e,t,n){return e?e.concat(t).map(function(e,t){return(// eslint-disable-next-line no-param-reassign
e=ee(e),!n&&t?"["+e+"]":e)}).join(n?".":""):t}const en=K.toFlatObject(K,{},null,function(e){return/^is[A-Z]/.test(e)});var es=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(e,t,n){if(!K.isObject(e))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
t=t||new FormData,// eslint-disable-next-line no-param-reassign
n=K.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){// eslint-disable-next-line no-eq-null,eqeqeq
return!K.isUndefined(t[e])});let s=n.metaTokens,r=n.visitor||h,i=n.dots,o=n.indexes,a=n.Blob||"undefined"!=typeof Blob&&Blob,l=a&&K.isSpecCompliantForm(t);if(!K.isFunction(r))throw TypeError("visitor must be a function");function c(e){if(null===e)return"";if(K.isDate(e))return e.toISOString();if(!l&&K.isBlob(e))throw new W("Blob is not supported. Use a Buffer instead.");return K.isArrayBuffer(e)||K.isTypedArray(e)?l&&"function"==typeof Blob?new Blob([e]):X.from(e):e}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function h(e,n,r){let a=e;if(e&&!r&&"object"==typeof e){if(K.endsWith(n,"{}"))// eslint-disable-next-line no-param-reassign
n=s?n:n.slice(0,-2),// eslint-disable-next-line no-param-reassign
e=JSON.stringify(e);else{var l;if(K.isArray(e)&&(l=e,K.isArray(l)&&!l.some(Q))||(K.isFileList(e)||K.endsWith(n,"[]"))&&(a=K.toArray(e)))return(// eslint-disable-next-line no-param-reassign
n=ee(n),a.forEach(function(e,s){K.isUndefined(e)||null===e||t.append(!0===o?et([n],s,i):null===o?n:n+"[]",c(e))}),!1)}}return!!Q(e)||(t.append(et(r,n,i),c(e)),!1)}let u=[],f=Object.assign(en,{defaultVisitor:h,convertValue:c,isVisitable:Q});if(!K.isObject(e))throw TypeError("data must be an object");return!function e(n,s){if(!K.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+s.join("."));u.push(n),K.forEach(n,function(n,i){let o=!(K.isUndefined(n)||null===n)&&r.call(t,n,K.isString(i)?i.trim():i,s,f);!0===o&&e(n,s?s.concat(i):[i])}),u.pop()}}(e),t};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function er(e){let t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function ei(e,t){this._pairs=[],e&&es(e,this,t)}const eo=ei.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function ea(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function el(e,t,n){let s;/*eslint no-param-reassign:0*/if(!t)return e;let r=n&&n.encode||ea,i=n&&n.serialize;if(s=i?i(t,n):K.isURLSearchParams(t)?t.toString():new ei(t,n).toString(r)){let t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}eo.append=function(e,t){this._pairs.push([e,t])},eo.toString=function(e){let t=e?function(t){return e.call(this,t,er)}:er;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};var ec=class{constructor(){this.handlers=[]}/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */eject(e){this.handlers[e]&&(this.handlers[e]=null)}/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */clear(){this.handlers&&(this.handlers=[])}/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */forEach(e){K.forEach(this.handlers,function(t){null!==t&&e(t)})}},eh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},eu="undefined"!=typeof URLSearchParams?URLSearchParams:ei,ef="undefined"!=typeof FormData?FormData:null,ed="undefined"!=typeof Blob?Blob:null;/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */const ep=("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&"undefined"!=typeof window&&"undefined"!=typeof document,eg="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var em={classes:{URLSearchParams:eu,FormData:ef,Blob:ed},isStandardBrowserEnv:ep,isStandardBrowserWebWorkerEnv:eg,protocols:["http","https","file","blob","url","data"]},ey=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(e){if(K.isFormData(e)&&K.isFunction(e.entries)){let t={};return K.forEachEntry(e,(e,n)=>{!function e(t,n,s,r){let i=t[r++],o=Number.isFinite(+i),a=r>=t.length;if(i=!i&&K.isArray(s)?s.length:i,a)return K.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!o;s[i]&&K.isObject(s[i])||(s[i]=[]);let l=e(t,n,s[i],r);return l&&K.isArray(s[i])&&(s[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(e){let t,n;let s={},r=Object.keys(e),i=r.length;for(t=0;t<i;t++)s[n=r[t]]=e[n];return s}(s[i])),!o}(K.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0]),n,t,0)}),t}return null};const eb={transitional:eh,adapter:["xhr","http"],transformRequest:[function(e,t){let n;let s=t.getContentType()||"",r=s.indexOf("application/json")>-1,i=K.isObject(e);i&&K.isHTMLForm(e)&&(e=new FormData(e));let o=K.isFormData(e);if(o)return r&&r?JSON.stringify(ey(e)):e;if(K.isArrayBuffer(e)||K.isBuffer(e)||K.isStream(e)||K.isFile(e)||K.isBlob(e))return e;if(K.isArrayBufferView(e))return e.buffer;if(K.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1){var a,l;return(a=e,l=this.formSerializer,es(a,new em.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,s){return em.isNode&&K.isBuffer(e)?(this.append(t,e.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},l))).toString()}if((n=K.isFileList(e))||s.indexOf("multipart/form-data")>-1){let t=this.env&&this.env.FormData;return es(n?{"files[]":e}:e,t&&new t,this.formSerializer)}}return i||r?(t.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(e,t,n){if(K.isString(e))try{return(0,JSON.parse)(e),K.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){let t=this.transitional||eb.transitional,n=t&&t.forcedJSONParsing,s="json"===this.responseType;if(e&&K.isString(e)&&(n&&!this.responseType||s)){let n=t&&t.silentJSONParsing;try{return JSON.parse(e)}catch(e){if(!n&&s){if("SyntaxError"===e.name)throw W.from(e,W.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:em.classes.FormData,Blob:em.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};K.forEach(["delete","get","head","post","put","patch"],e=>{eb.headers[e]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ev=K.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var /**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */eE=e=>{let t,n,s;let r={};return e&&e.split("\n").forEach(function(e){s=e.indexOf(":"),t=e.substring(0,s).trim().toLowerCase(),n=e.substring(s+1).trim(),!t||r[t]&&ev[t]||("set-cookie"===t?r[t]?r[t].push(n):r[t]=[n]:r[t]=r[t]?r[t]+", "+n:n)}),r};const ew=Symbol("internals");function eO(e){return e&&String(e).trim().toLowerCase()}function eA(e){return!1===e||null==e?e:K.isArray(e)?e.map(eA):String(e)}const eS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function eT(e,t,n,s,r){if(K.isFunction(s))return s.call(this,t,n);if(r&&(t=n),K.isString(t)){if(K.isString(s))return -1!==t.indexOf(s);if(K.isRegExp(s))return s.test(t)}}class eC{constructor(e){e&&this.set(e)}set(e,t,n){let s=this;function r(e,t,n){let r=eO(t);if(!r)throw Error("header name must be a non-empty string");let i=K.findKey(s,r);i&&void 0!==s[i]&&!0!==n&&(void 0!==n||!1===s[i])||(s[i||t]=eA(e))}let i=(e,t)=>K.forEach(e,(e,n)=>r(e,n,t));return K.isPlainObject(e)||e instanceof this.constructor?i(e,t):K.isString(e)&&(e=e.trim())&&!eS(e)?i(eE(e),t):null!=e&&r(t,e,n),this}get(e,t){if(e=eO(e)){let n=K.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(!0===t)return function(e){let t;let n=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;for(;t=s.exec(e);)n[t[1]]=t[2];return n}(e);if(K.isFunction(t))return t.call(this,e,n);if(K.isRegExp(t))return t.exec(e);throw TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=eO(e)){let n=K.findKey(this,e);return!!(n&&void 0!==this[n]&&(!t||eT(this,this[n],n,t)))}return!1}delete(e,t){let n=this,s=!1;function r(e){if(e=eO(e)){let r=K.findKey(n,e);r&&(!t||eT(n,n[r],r,t))&&(delete n[r],s=!0)}}return K.isArray(e)?e.forEach(r):r(e),s}clear(e){let t=Object.keys(this),n=t.length,s=!1;for(;n--;){let r=t[n];(!e||eT(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){let t=this,n={};return K.forEach(this,(s,r)=>{let i=K.findKey(n,r);if(i){t[i]=eA(s),delete t[r];return}let o=e?r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n):String(r).trim();o!==r&&delete t[r],t[o]=eA(s),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return K.forEach(this,(n,s)=>{null!=n&&!1!==n&&(t[s]=e&&K.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=this[ew]=this[ew]={accessors:{}},n=t.accessors,s=this.prototype;function r(e){let t=eO(e);n[t]||(!function(e,t){let n=K.toCamelCase(" "+t);["get","set","has"].forEach(s=>{Object.defineProperty(e,s+n,{value:function(e,n,r){return this[s].call(this,t,e,n,r)},configurable:!0})})}(s,e),n[t]=!0)}return K.isArray(e)?e.forEach(r):r(e),this}}function eR(e,t){let n=this||eb,s=t||n,r=eC.from(s.headers),i=s.data;return K.forEach(e,function(e){i=e.call(n,i,r.normalize(),t?t.status:void 0)}),r.normalize(),i}function eL(e){return!!(e&&e.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function eN(e,t,n){W.call(this,null==e?"canceled":e,W.ERR_CANCELED,t,n),this.name="CanceledError"}eC.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),K.reduceDescriptors(eC.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);// map `set` => `Set`
return{get:()=>e,set(e){this[n]=e}}}),K.freezeMethods(eC),K.inherits(eN,W,{__CANCEL__:!0});var ex=em.isStandardBrowserEnv?{write:function(e,t,n,s,r,i){let o=[];o.push(e+"="+encodeURIComponent(t)),K.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),K.isString(s)&&o.push("path="+s),K.isString(r)&&o.push("domain="+r),!0===i&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){let t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function eB(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e:t}var eU=em.isStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){let e;let t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function s(e){let s=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return t&&(// IE needs attribute set twice to normalize properties
n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return e=s(window.location.href),function(t){let n=K.isString(t)?s(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},eI=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(e,t){let n;e=e||10;let s=Array(e),r=Array(e),i=0,o=0;return t=void 0!==t?t:1e3,function(a){let l=Date.now(),c=r[o];n||(n=l),s[i]=a,r[i]=l;let h=o,u=0;for(;h!==i;)u+=s[h++],h%=e;if((i=(i+1)%e)===o&&(o=(o+1)%e),l-n<t)return;let f=c&&l-c;return f?Math.round(1e3*u/f):void 0}};function eP(e,t){let n=0,s=eI(50,250);return r=>{let i=r.loaded,o=r.lengthComputable?r.total:void 0,a=i-n,l=s(a),c=i<=o;n=i;let h={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-i)/l:void 0,event:r};h[t?"download":"upload"]=!0,e(h)}}const eD="undefined"!=typeof XMLHttpRequest;var e_=eD&&function(e){return new Promise(function(t,n){let s,r,i=e.data,o=eC.from(e.headers).normalize(),a=e.responseType;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}K.isFormData(i)&&(em.isStandardBrowserEnv||em.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.getContentType(/^\s*multipart\/form-data/)?K.isString(r=o.getContentType())&&o.setContentType(r.replace(/^\s*(multipart\/form-data);+/,"$1")):o.setContentType("multipart/form-data"));let c=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){let t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}let h=eB(e.baseURL,e.url);function u(){if(!c)return;// Prepare the response
let s=eC.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),r=a&&"text"!==a&&"json"!==a?c.response:c.responseText,i={data:r,status:c.status,statusText:c.statusText,headers:s,config:e,request:c};!function(e,t,n){let s=n.config.validateStatus;!n.status||!s||s(n.status)?e(n):t(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}(function(e){t(e),l()},function(e){n(e),l()},i),// Clean up request
c=null}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(c.open(e.method.toUpperCase(),el(h,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
c.timeout=e.timeout,"onloadend"in c?c.onloadend=u:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(u)},// Handle browser request cancellation (as opposed to a manual cancellation)
c.onabort=function(){c&&(n(new W("Request aborted",W.ECONNABORTED,e,c)),// Clean up request
c=null)},// Handle low level network errors
c.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
n(new W("Network Error",W.ERR_NETWORK,e,c)),// Clean up request
c=null},// Handle timeout
c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",s=e.transitional||eh;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new W(t,s.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,e,c)),// Clean up request
c=null},em.isStandardBrowserEnv){// Add xsrf header
let t=(e.withCredentials||eU(h))&&e.xsrfCookieName&&ex.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}// Remove Content-Type if data is undefined
void 0===i&&o.setContentType(null),"setRequestHeader"in c&&K.forEach(o.toJSON(),function(e,t){c.setRequestHeader(t,e)}),K.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),a&&"json"!==a&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",eP(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",eP(e.onUploadProgress)),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
s=t=>{c&&(n(!t||t.type?new eN(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));let f=function(e){let t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(h);if(f&&-1===em.protocols.indexOf(f)){n(new W("Unsupported protocol "+f+":",W.ERR_BAD_REQUEST,e));return}// Send the request
c.send(i||null)})};const ek={http:null,xhr:e_};K.forEach(ek,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){// eslint-disable-next-line no-empty
}Object.defineProperty(e,"adapterName",{value:t})}});const ej=e=>`- ${e}`,eM=e=>K.isFunction(e)||null===e||!1===e;var eF={getAdapter:e=>{let t,n;e=K.isArray(e)?e:[e];let{length:s}=e,r={};for(let i=0;i<s;i++){let s;if(n=t=e[i],!eM(t)&&void 0===(n=ek[(s=String(t)).toLowerCase()]))throw new W(`Unknown adapter '${s}'`);if(n)break;r[s||"#"+i]=n}if(!n){let e=Object.entries(r).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")),t=s?e.length>1?"since :\n"+e.map(ej).join("\n"):" "+ej(e[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+t,"ERR_NOT_SUPPORT")}return n},adapters:ek};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function eH(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new eN(null,e)}function eq(e){eH(e),e.headers=eC.from(e.headers),// Transform request data
e.data=eR.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);let t=eF.getAdapter(e.adapter||eb.adapter);return t(e).then(function(t){return eH(e),// Transform response data
t.data=eR.call(e,e.transformResponse,t),t.headers=eC.from(t.headers),t},function(t){return!eL(t)&&(eH(e),t&&t.response&&(t.response.data=eR.call(e,e.transformResponse,t.response),t.response.headers=eC.from(t.response.headers))),Promise.reject(t)})}const eV=e=>e instanceof eC?e.toJSON():e;function ez(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};let n={};function s(e,t,n){return K.isPlainObject(e)&&K.isPlainObject(t)?K.merge.call({caseless:n},e,t):K.isPlainObject(t)?K.merge({},t):K.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function r(e,t,n){return K.isUndefined(t)?K.isUndefined(e)?void 0:s(void 0,e,n):s(e,t,n)}// eslint-disable-next-line consistent-return
function i(e,t){if(!K.isUndefined(t))return s(void 0,t)}// eslint-disable-next-line consistent-return
function o(e,t){return K.isUndefined(t)?K.isUndefined(e)?void 0:s(void 0,e):s(void 0,t)}// eslint-disable-next-line consistent-return
function a(n,r,i){return i in t?s(n,r):i in e?s(void 0,n):void 0}let l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(e,t)=>r(eV(e),eV(t),!0)};return K.forEach(Object.keys(Object.assign({},e,t)),function(s){let i=l[s]||r,o=i(e[s],t[s],s);K.isUndefined(o)&&i!==a||(n[s]=o)}),n}const e$="1.5.1",eG={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach((e,t)=>{eG[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const eJ={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */eG.transitional=function(e,t,n){function s(e,t){return"[Axios v"+e$+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}// eslint-disable-next-line func-names
return(n,r,i)=>{if(!1===e)throw new W(s(r," has been removed"+(t?" in "+t:"")),W.ERR_DEPRECATED);return t&&!eJ[r]&&(eJ[r]=!0,// eslint-disable-next-line no-console
console.warn(s(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,i)}};var eK={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(e,t,n){if("object"!=typeof e)throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);let s=Object.keys(e),r=s.length;for(;r-- >0;){let i=s[r],o=t[i];if(o){let t=e[i],n=void 0===t||o(t,i,e);if(!0!==n)throw new W("option "+i+" must be "+n,W.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}},validators:eG};const eW=eK.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */class eY{constructor(e){this.defaults=e,this.interceptors={request:new ec,response:new ec}}/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */request(e,t){let n,s;"string"==typeof e?(t=t||{}).url=e:t=e||{},t=ez(this.defaults,t);let{transitional:r,paramsSerializer:i,headers:o}=t;void 0!==r&&eK.assertOptions(r,{silentJSONParsing:eW.transitional(eW.boolean),forcedJSONParsing:eW.transitional(eW.boolean),clarifyTimeoutError:eW.transitional(eW.boolean)},!1),null!=i&&(K.isFunction(i)?t.paramsSerializer={serialize:i}:eK.assertOptions(i,{encode:eW.function,serialize:eW.function},!0)),// Set config.method
t.method=(t.method||this.defaults.method||"get").toLowerCase();// Flatten headers
let a=o&&K.merge(o.common,o[t.method]);o&&K.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=eC.concat(a,o);// filter out skipped interceptors
let l=[],c=!0;this.interceptors.request.forEach(function(e){("function"!=typeof e.runWhen||!1!==e.runWhen(t))&&(c=c&&e.synchronous,l.unshift(e.fulfilled,e.rejected))});let h=[];this.interceptors.response.forEach(function(e){h.push(e.fulfilled,e.rejected)});let u=0;if(!c){let e=[eq.bind(this),void 0];for(e.unshift.apply(e,l),e.push.apply(e,h),s=e.length,n=Promise.resolve(t);u<s;)n=n.then(e[u++],e[u++]);return n}s=l.length;let f=t;for(u=0;u<s;){let e=l[u++],t=l[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{n=eq.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,s=h.length;u<s;)n=n.then(h[u++],h[u++]);return n}getUri(e){e=ez(this.defaults,e);let t=eB(e.baseURL,e.url);return el(t,e.params,e.paramsSerializer)}}K.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/eY.prototype[e]=function(t,n){return this.request(ez(n||{},{method:e,url:t,data:(n||{}).data}))}}),K.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/function t(t){return function(n,s,r){return this.request(ez(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:s}))}}eY.prototype[e]=t(),eY.prototype[e+"Form"]=t(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */class eZ{constructor(e){let t;if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});let n=this;// eslint-disable-next-line func-names
this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),// eslint-disable-next-line func-names
this.promise.then=e=>{let t;// eslint-disable-next-line func-names
let s=new Promise(e=>{n.subscribe(e),t=e}).then(e);return s.cancel=function(){n.unsubscribe(t)},s},e(function(e,s,r){n.reason||(n.reason=new eN(e,s,r),t(n.reason))})}/**
   * Throws a `CanceledError` if cancellation has been requested.
   */throwIfRequested(){if(this.reason)throw this.reason}/**
   * Subscribe to the cancel signal
   */subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}/**
   * Unsubscribe from the cancel signal
   */unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */static source(){let e;let t=new eZ(function(t){e=t});return{token:t,cancel:e}}}const eX={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eX).forEach(([e,t])=>{eX[t]=e});// Create the default instance to be exported
const eQ=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function e(t){let n=new eY(t),s=m(eY.prototype.request,n);return K.extend(s,eY.prototype,n,{allOwnKeys:!0}),K.extend(s,n,null,{allOwnKeys:!0}),// Factory for creating new instances
s.create=function(n){return e(ez(t,n))},s}(eb);// Expose Axios class to allow class inheritance
eQ.Axios=eY,// Expose Cancel & CancelToken
eQ.CanceledError=eN,eQ.CancelToken=eZ,eQ.isCancel=eL,eQ.VERSION=e$,eQ.toFormData=es,// Expose AxiosError class
eQ.AxiosError=W,// alias for CanceledError for backward compatibility
eQ.Cancel=eQ.CanceledError,// Expose all/spread
eQ.all=function(e){return Promise.all(e)},eQ.spread=function(e){return function(t){return e.apply(null,t)}},// Expose isAxiosError
eQ.isAxiosError=function(e){return K.isObject(e)&&!0===e.isAxiosError},// Expose mergeConfig
eQ.mergeConfig=ez,eQ.AxiosHeaders=eC,eQ.formToJSON=e=>ey(K.isHTMLForm(e)?new FormData(e):e),eQ.getAdapter=eF.getAdapter,eQ.HttpStatusCode=eX,eQ.default=eQ;// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const{Axios:e0,AxiosError:e1,CanceledError:e2,isCancel:e6,CancelToken:e5,VERSION:e3,all:e8,Cancel:e4,isAxiosError:e7,spread:e9,toFormData:te,AxiosHeaders:tt,HttpStatusCode:tn,formToJSON:ts,getAdapter:tr,mergeConfig:ti}=eQ;d("fD2TE"),"object"==typeof self?self.FormData:window.FormData,(r=a||(a={})).GET="GET",r.POST="POST",r.DELETE="DELETE",r.PATCH="PATCH",r.PUT="PUT",Function("try {return this===global;}catch(e){return false;}"),(i=l||(l={})).ABYSSINIAN="abys",i.AEGEAN="aege",i.AMERICAN_BOBTAIL="abob",i.AMERICAN_CURL="acur",i.AMERICAN_SHORTHAIR="asho",i.AMERICAN_WIREHAIR="awir",i.ARABIAN_MAU="amau",i.AUSTRALIAN_MIST="amis",i.BALINESE="bali",i.BAMBINO="bamb",i.BENGAL="beng",i.BIRMAN="birm",i.BOMBAY="bomb",i.BRITISH_LONGHAIR="bslo",i.BRITISH_SHORTHAIR="bsho",i.BURMESE="bure",i.BURMILLA="buri",i.CALIFORNIA_SPANGLED="cspa",i.CHANTILLY_TIFFANY="ctif",i.CHARTREUX="char",i.CHAUSIE="chau",i.CHEETOH="chee",i.COLORPOINT_SHORTHAIR="csho",i.CORNISH_REX="crex",i.CYMRIC="cymr",i.CYPRUS="cypr",i.DEVON_REX="drex",i.DONSKOY="dons",i.DRAGON_LI="lihu",i.EGYPTIAN_MAU="emau",i.EUROPEAN_BURMESE="ebur",i.EXOTIC_SHORTHAIR="esho",i.HAVANA_BROWN="hbro",i.HIMALAYAN="hima",i.JAPANESE_BOBTAIL="jbob",i.JAVANESE="java",i.KHAO_MANEE="khao",i.KORAT="kora",i.KURILIAN="kuri",i.LAPERM="lape",i.MAINE_COON="mcoo",i.MALAYAN="mala",i.MANX="manx",i.MUNCHKIN="munc",i.NEBELUNG="nebe",i.NORWEGIAN_FOREST_CAT="norw",i.OCICAT="ocic",i.ORIENTAL="orie",i.PERSIAN="pers",i.PIXIE_BOB="pixi",i.RAGAMUFFIN="raga",i.RAGDOLL="ragd",i.RUSSIAN_BLUE="rblu",i.SAVANNAH="sava",i.SCOTTISH_FOLD="sfol",i.SELKIRK_REX="srex",i.SIAMESE="siam",i.SIBERIAN="sibe",i.SINGAPURA="sing",i.SNOWSHOE="snow",i.SOMALI="soma",i.SPHYNX="sphy",i.TONKINESE="tonk",i.TOYGER="toyg",i.TURKISH_ANGORA="tang",i.TURKISH_VAN="tvan",i.YORK_CHOCOLATE="ycho",(o=c||(c={}))[o.HATS=1]="HATS",o[o.SPACE=2]="SPACE",o[o.SUNGLASSES=4]="SUNGLASSES",o[o.BOXES=5]="BOXES",o[o.TIES=7]="TIES",o[o.SINKS=14]="SINKS",o[o.CLOTHES=15]="CLOTHES";const to="https://api.thecatapi.com/v1";eQ.defaults.headers.common["x-api-key"]="live_hNeVtncoYhQORQAS6M1fUjhC25z26kfdSLTiO0dCs10SE7NPGdHbLN171ZujgRlw";const ta="live_hNeVtncoYhQORQAS6M1fUjhC25z26kfdSLTiO0dCs10SE7NPGdHbLN171ZujgRlw",tl={headers:{"x-api-key":ta}},tc=document.querySelector(".breed-select"),th=document.querySelector(".cat-info");// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
function tu(e){return e.map(e=>th.innerHTML=`
      <img src="${e.url}" alt="${e.name}" width="500">
      <h1>${e.name}</h1>
      <p>${e.description}</p>
      <p>${e.temperament}</p>`)}tc.addEventListener("change",function(e){e.preventDefault();let t=e.currentTarget.value;fetch(`${to}/images/search?breeds_ids=${t}&api_key=${ta}`,tl).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(tu).catch(e=>{console.log(e)}).finally()}),fetch(`${to}/breeds`,tl).then(e=>{if(!e.ok)throw Error(e.status);return e.json()}).then(e=>{var t;(function(e){e.map(e=>{let t=e.name,n=e.id,s=document.createElement("option");s.value=n,s.innerHTML=`${t}`,tc.appendChild(s)})}//# sourceMappingURL=index.f1a0091e.js.map
)(e),new((t=p)&&t.__esModule?t.default:t)(g)}).catch(e=>{console.log(e)});
//# sourceMappingURL=index.f1a0091e.js.map
