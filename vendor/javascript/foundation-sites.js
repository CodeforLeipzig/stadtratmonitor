import e from"jquery";function _typeof(e){_typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};return _typeof(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){t&&_defineProperties(e.prototype,t);i&&_defineProperties(e,i);return e}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});t&&_setPrototypeOf(e,t)}function _getPrototypeOf(e){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)};return _getPrototypeOf(e)}function _setPrototypeOf(e,t){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){e.__proto__=t;return e};return _setPrototypeOf(e,t)}function _isNativeReflectConstruct(){if("undefined"===typeof Reflect||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if("function"===typeof Proxy)return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));return true}catch(e){return false}}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){if(t&&("object"===typeof t||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _createSuper(e){var t=_isNativeReflectConstruct();return function _createSuperInternal(){var i,n=_getPrototypeOf(e);if(t){var s=_getPrototypeOf(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return _possibleConstructorReturn(this,i)}}function _superPropBase(e,t){while(!Object.prototype.hasOwnProperty.call(e,t)){e=_getPrototypeOf(e);if(null===e)break}return e}function _get(e,t,i){_get="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function _get(e,t,i){var n=_superPropBase(e,t);if(n){var s=Object.getOwnPropertyDescriptor(n,t);return s.get?s.get.call(i):s.value}};return _get(e,t,i||e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n=[];var s=true;var a=false;var o,r;try{for(i=i.call(e);!(s=(o=i.next()).done);s=true){n.push(o.value);if(t&&n.length===t)break}}catch(e){a=true;r=e}finally{try{s||null==i.return||i.return()}finally{if(a)throw r}}return n}}function _unsupportedIterableToArray(e,t){if(e){if("string"===typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);return"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function rtl(){return"rtl"===e("html").attr("dir")}
/**
 * returns a random base-36 uid with namespacing
 * @function
 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
 * @returns {String} - unique id
 */function GetYoDigits(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6;var t=arguments.length>1?arguments[1]:void 0;var i="";var n="0123456789abcdefghijklmnopqrstuvwxyz";var s=n.length;for(var a=0;a<e;a++)i+=n[Math.floor(Math.random()*s)];return t?"".concat(i,"-").concat(t):i}
/**
 * Escape a string so it can be used as a regexp pattern
 * @function
 * @see https://stackoverflow.com/a/9310752/4317384
 *
 * @param {String} str - string to escape.
 * @returns {String} - escaped string
 */function RegExpEscape(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function transitionend(e){var t={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend"};var i,n=document.createElement("div");for(var s in t)"undefined"!==typeof n.style[s]&&(i=t[s]);if(i)return i;setTimeout((function(){e.triggerHandler("transitionend",[e])}),1);return"transitionend"}
/**
 * Return an event type to listen for window load.
 *
 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
 * If `handler` is passed, attach it to the event on `$elem`.
 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
 * @function
 *
 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
 * @param {Function} [] handler - function to attach to the event.
 * @returns {String} - event type that should or will be triggered.
 */function onLoad(t,i){var n="complete"===document.readyState;var s=(n?"_didLoad":"load")+".zf.util.onLoad";var a=function cb(){return t.triggerHandler(s)};if(t){i&&t.one(s,i);n?setTimeout(a):e(window).one("load",a)}return s}
/**
 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
 *
 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
 * the event is ignored.
 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
 *   (like by switching to an other window with [Alt]+[Tab]).
 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
 *   outside of the element it left.
 *
 * @function
 *
 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
 * @param {Object} [] options - object of options:
 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
 */function ignoreMousedisappear(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.ignoreLeaveWindow,s=void 0!==n&&n,a=i.ignoreReappear,o=void 0!==a&&a;return function leaveEventHandler(i){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];var l=t.bind.apply(t,[this,i].concat(a));if(null!==i.relatedTarget)return l();setTimeout((function leaveEventDebouncer(){if(!s&&document.hasFocus&&!document.hasFocus())return l();o||e(document).one("mouseenter",(function reenterEventHandler(t){if(!e(i.currentTarget).has(t.target).length){i.relatedTarget=t.target;l()}}))}),0)}}var t=Object.freeze({__proto__:null,rtl:rtl,GetYoDigits:GetYoDigits,RegExpEscape:RegExpEscape,transitionend:transitionend,onLoad:onLoad,ignoreMousedisappear:ignoreMousedisappear});window.matchMedia||(window.matchMedia=function(){var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),i=document.getElementsByTagName("script")[0],n=null;t.type="text/css";t.id="matchmediajs-test";i?i.parentNode.insertBefore(t,i):document.head.appendChild(t);n="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle;e={matchMedium:function matchMedium(e){var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";t.styleSheet?t.styleSheet.cssText=i:t.textContent=i;return"1px"===n.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}());var i={queries:[],current:"",_init:function _init(){if(true===this.isInitialized)return this;this.isInitialized=true;var t=this;var i=e("meta.foundation-mq");i.length||e('<meta class="foundation-mq" name="foundation-mq" content>').appendTo(document.head);var n=e(".foundation-mq").css("font-family");var s;s=parseStyleToObject(n);t.queries=[];for(var a in s)s.hasOwnProperty(a)&&t.queries.push({name:a,value:"only screen and (min-width: ".concat(s[a],")")});this.current=this._getCurrentSize();this._watcher()},_reInit:function _reInit(){this.isInitialized=false;this._init()},
/**
   * Checks if the screen is at least as wide as a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
   */
atLeast:function atLeast(e){var t=this.get(e);return!!t&&window.matchMedia(t).matches},
/**
   * Checks if the screen is within the given breakpoint.
   * If smaller than the breakpoint of larger than its upper limit it returns false.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` otherwise.
   */
only:function only(e){return e===this._getCurrentSize()},
/**
   * Checks if the screen is within a breakpoint or smaller.
   * @function
   * @param {String} size - Name of the breakpoint to check.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's larger.
   */
upTo:function upTo(e){var t=this.next(e);return!t||!this.atLeast(t)},
/**
   * Checks if the screen matches to a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
   */
is:function is(e){var t=e.trim().split(" ").filter((function(e){return!!e.length}));var i=_slicedToArray(t,2),n=i[0],s=i[1],a=void 0===s?"":s;if("only"===a)return this.only(n);if(!a||"up"===a)return this.atLeast(n);if("down"===a)return this.upTo(n);throw new Error('\n      Invalid breakpoint passed to MediaQuery.is().\n      Expected a breakpoint name formatted like "<size> <modifier>", got "'.concat(e,'".\n    '))},
/**
   * Gets the media query of a breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint to get.
   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
   */
get:function get(e){for(var t in this.queries)if(this.queries.hasOwnProperty(t)){var i=this.queries[t];if(e===i.name)return i.value}return null},
/**
   * Get the breakpoint following the given breakpoint.
   * @function
   * @param {String} size - Name of the breakpoint.
   * @returns {String|null} - The name of the following breakpoint, or `null` if the passed breakpoint was the last one.
   */
next:function next(e){var t=this;var i=this.queries.findIndex((function(i){return t._getQueryName(i)===e}));if(-1===i)throw new Error('\n        Unknown breakpoint "'.concat(e,'" passed to MediaQuery.next().\n        Ensure it is present in your Sass "$breakpoints" setting.\n      '));var n=this.queries[i+1];return n?n.name:null},
/**
   * Returns the name of the breakpoint related to the given value.
   * @function
   * @private
   * @param {String|Object} value - Breakpoint name or query object.
   * @returns {String} Name of the breakpoint.
   */
_getQueryName:function _getQueryName(e){if("string"===typeof e)return e;if("object"===_typeof(e))return e.name;throw new TypeError('\n      Invalid value passed to MediaQuery._getQueryName().\n      Expected a breakpoint name (String) or a breakpoint query (Object), got "'.concat(e,'" (').concat(_typeof(e),")\n    "))},
/**
   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
   * @function
   * @private
   * @returns {String} Name of the current breakpoint.
   */
_getCurrentSize:function _getCurrentSize(){var e;for(var t=0;t<this.queries.length;t++){var i=this.queries[t];window.matchMedia(i.value).matches&&(e=i)}return e&&this._getQueryName(e)},_watcher:function _watcher(){var t=this;e(window).on("resize.zf.trigger",(function(){var i=t._getCurrentSize(),n=t.current;if(i!==n){t.current=i;e(window).trigger("changed.zf.mediaquery",[i,n])}}))}};function parseStyleToObject(e){var t={};if("string"!==typeof e)return t;e=e.trim().slice(1,-1);if(!e)return t;t=e.split("&").reduce((function(e,t){var i=t.replace(/\+/g," ").split("=");var n=i[0];var s=i[1];n=decodeURIComponent(n);s="undefined"===typeof s?null:decodeURIComponent(s);e.hasOwnProperty(n)?Array.isArray(e[n])?e[n].push(s):e[n]=[e[n],s]:e[n]=s;return e}),{});return t}var n="6.7.5";var s={version:n,_plugins:{},_uuids:[],
/**
   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
   * @param {Object} plugin - The constructor of the plugin.
   */
plugin:function plugin(e,t){var i=t||functionName(e);var n=hyphenate(i);this._plugins[n]=this[i]=e},
/**
   * @function
   * Populates the _uuids array with pointers to each individual plugin instance.
   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
   * Also fires the initialization event for each plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @param {String} name - the name of the plugin, passed as a camelCased string.
   * @fires Plugin#init
   */
registerPlugin:function registerPlugin(e,t){var i=t?hyphenate(t):functionName(e.constructor).toLowerCase();e.uuid=GetYoDigits(6,i);e.$element.attr("data-".concat(i))||e.$element.attr("data-".concat(i),e.uuid);e.$element.data("zfPlugin")||e.$element.data("zfPlugin",e);e.$element.trigger("init.zf.".concat(i));this._uuids.push(e.uuid)},
/**
   * @function
   * Removes the plugins uuid from the _uuids array.
   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
   * Also fires the destroyed event for the plugin, consolidating repetitive code.
   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
   * @fires Plugin#destroyed
   */
unregisterPlugin:function unregisterPlugin(e){var t=hyphenate(functionName(e.$element.data("zfPlugin").constructor));this._uuids.splice(this._uuids.indexOf(e.uuid),1);e.$element.removeAttr("data-".concat(t)).removeData("zfPlugin").trigger("destroyed.zf.".concat(t));for(var i in e)"function"===typeof e[i]&&(e[i]=null)},
/**
   * @function
   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
   * @default If no argument is passed, reflow all currently active plugins.
   */
reInit:function reInit(t){var i=t instanceof e;try{if(i)t.each((function(){e(this).data("zfPlugin")._init()}));else{var n=_typeof(t),s=this,a={object:function object(t){t.forEach((function(t){t=hyphenate(t);e("[data-"+t+"]").foundation("_init")}))},string:function string(){t=hyphenate(t);e("[data-"+t+"]").foundation("_init")},undefined:function undefined$1(){this.object(Object.keys(s._plugins))}};a[n](t)}}catch(e){console.error(e)}finally{return t}},
/**
   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
   */
reflow:function reflow(t,i){"undefined"===typeof i?i=Object.keys(this._plugins):"string"===typeof i&&(i=[i]);var n=this;e.each(i,(function(i,s){var a=n._plugins[s];var o=e(t).find("[data-"+s+"]").addBack("[data-"+s+"]").filter((function(){return"undefined"===typeof e(this).data("zfPlugin")}));o.each((function(){var t=e(this),i={reflow:true};t.attr("data-options")&&t.attr("data-options").split(";").forEach((function(e){var t=e.split(":").map((function(e){return e.trim()}));t[0]&&(i[t[0]]=parseValue(t[1]))}));try{t.data("zfPlugin",new a(e(this),i))}catch(e){console.error(e)}finally{return}}))}))},getFnName:functionName,addToJquery:function addToJquery(){
/**
     * The Foundation jQuery method.
     * @param {String|Array} method - An action to perform on the current jQuery object.
     */
var t=function foundation(t){var n=_typeof(t),a=e(".no-js");a.length&&a.removeClass("no-js");if("undefined"===n){i._init();s.reflow(this)}else{if("string"!==n)throw new TypeError("We're sorry, ".concat(n," is not a valid parameter. You must use a string representing the method you wish to invoke."));var o=Array.prototype.slice.call(arguments,1);var r=this.data("zfPlugin");if("undefined"===typeof r||"undefined"===typeof r[t])throw new ReferenceError("We're sorry, '"+t+"' is not an available method for "+(r?functionName(r):"this element")+".");1===this.length?r[t].apply(r,o):this.each((function(i,n){r[t].apply(e(n).data("zfPlugin"),o)}))}return this};e.fn.foundation=t;return e}};s.util={
/**
   * Function for applying a debounce effect to a function call.
   * @function
   * @param {Function} func - Function to be called at end of timeout.
   * @param {Number} delay - Time in ms to delay the call of `func`.
   * @returns function
   */
throttle:function throttle(e,t){var i=null;return function(){var n=this,s=arguments;null===i&&(i=setTimeout((function(){e.apply(n,s);i=null}),t))}}};window.Foundation=s;(function(){Date.now&&window.Date.now||(window.Date.now=Date.now=function(){return(new Date).getTime()});var e=["webkit","moz"];for(var t=0;t<e.length&&!window.requestAnimationFrame;++t){var i=e[t];window.requestAnimationFrame=window[i+"RequestAnimationFrame"];window.cancelAnimationFrame=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var n=0;window.requestAnimationFrame=function(e){var t=Date.now();var i=Math.max(n+16,t);return setTimeout((function(){e(n=i)}),i-t)};window.cancelAnimationFrame=clearTimeout}window.performance&&window.performance.now||(window.performance={start:Date.now(),now:function now(){return Date.now()-this.start}})})();Function.prototype.bind||(Function.prototype.bind=function(e){if("function"!==typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=Array.prototype.slice.call(arguments,1),i=this,n=function fNOP(){},s=function fBound(){return i.apply(this instanceof n?this:e,t.concat(Array.prototype.slice.call(arguments)))};this.prototype&&(n.prototype=this.prototype);s.prototype=new n;return s});function functionName(e){if("undefined"===typeof Function.prototype.name){var t=/function\s([^(]{1,})\(/;var i=t.exec(e.toString());return i&&i.length>1?i[1].trim():""}return"undefined"===typeof e.prototype?e.constructor.name:e.prototype.constructor.name}function parseValue(e){return"true"===e||"false"!==e&&(isNaN(1*e)?e:parseFloat(e))}function hyphenate(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}var a={ImNotTouchingYou:ImNotTouchingYou,OverlapArea:OverlapArea,GetDimensions:GetDimensions,GetExplicitOffsets:GetExplicitOffsets};
/**
 * Compares the dimensions of an element to a container and determines collision events with container.
 * @function
 * @param {jQuery} element - jQuery object to test for collisions.
 * @param {jQuery} parent - jQuery object to use as bounding container.
 * @param {Boolean} lrOnly - set to true to check left and right values only.
 * @param {Boolean} tbOnly - set to true to check top and bottom values only.
 * @default if no parent object passed, detects collisions with `window`.
 * @returns {Boolean} - true if collision free, false if a collision in any direction.
 */function ImNotTouchingYou(e,t,i,n,s){return 0===OverlapArea(e,t,i,n,s)}function OverlapArea(e,t,i,n,s){var a,o,r,l,c=GetDimensions(e);if(t){var h=GetDimensions(t);o=h.height+h.offset.top-(c.offset.top+c.height);a=c.offset.top-h.offset.top;r=c.offset.left-h.offset.left;l=h.width+h.offset.left-(c.offset.left+c.width)}else{o=c.windowDims.height+c.windowDims.offset.top-(c.offset.top+c.height);a=c.offset.top-c.windowDims.offset.top;r=c.offset.left-c.windowDims.offset.left;l=c.windowDims.width-(c.offset.left+c.width)}o=s?0:Math.min(o,0);a=Math.min(a,0);r=Math.min(r,0);l=Math.min(l,0);return i?r+l:n?a+o:Math.sqrt(a*a+o*o+r*r+l*l)}
/**
 * Uses native methods to return an object of dimension values.
 * @function
 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
 * @returns {Object} - nested object of integer pixel values
 * TODO - if element is window, return only those values.
 */function GetDimensions(e){e=e.length?e[0]:e;if(e===window||e===document)throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");var t=e.getBoundingClientRect(),i=e.parentNode.getBoundingClientRect(),n=document.body.getBoundingClientRect(),s=window.pageYOffset,a=window.pageXOffset;return{width:t.width,height:t.height,offset:{top:t.top+s,left:t.left+a},parentDims:{width:i.width,height:i.height,offset:{top:i.top+s,left:i.left+a}},windowDims:{width:n.width,height:n.height,offset:{top:s,left:a}}}}
/**
 * Returns an object of top and left integer pixel values for dynamically rendered elements,
 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
 * you don't know alignment, but generally from
 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
 * @function
 * @param {jQuery} element - jQuery object for the element being positioned.
 * @param {jQuery} anchor - jQuery object for the element's anchor point.
 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
 * TODO alter/rewrite to work with `em` values as well/instead of pixels
 */function GetExplicitOffsets(e,t,i,n,s,a,o){var r=GetDimensions(e),l=t?GetDimensions(t):null;var c,h;if(null!==l){switch(i){case"top":c=l.offset.top-(r.height+s);break;case"bottom":c=l.offset.top+l.height+s;break;case"left":h=l.offset.left-(r.width+a);break;case"right":h=l.offset.left+l.width+a;break}switch(i){case"top":case"bottom":switch(n){case"left":h=l.offset.left+a;break;case"right":h=l.offset.left-r.width+l.width-a;break;case"center":h=o?a:l.offset.left+l.width/2-r.width/2+a;break}break;case"right":case"left":switch(n){case"bottom":c=l.offset.top-s+l.height-r.height;break;case"top":c=l.offset.top+s;break;case"center":c=l.offset.top+s+l.height/2-r.height/2;break}break}}return{top:c,left:h}}
/**
 * Runs a callback function when images are fully loaded.
 * @param {Object} images - Image(s) to check if loaded.
 * @param {Func} callback - Function to execute when image is fully loaded.
 */function onImagesLoaded(t,i){var n=t.length;0===n&&i();t.each((function(){if(this.complete&&"undefined"!==typeof this.naturalWidth)singleImageLoaded();else{var t=new Image;var i="load.zf.images error.zf.images";e(t).one(i,(function me(){e(this).off(i,me);singleImageLoaded()}));t.src=e(this).attr("src")}}));function singleImageLoaded(){n--;0===n&&i()}}var o={9:"TAB",13:"ENTER",27:"ESCAPE",32:"SPACE",35:"END",36:"HOME",37:"ARROW_LEFT",38:"ARROW_UP",39:"ARROW_RIGHT",40:"ARROW_DOWN"};var r={};function findFocusable(t){return!!t&&t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter((function(){return!(!e(this).is(":visible")||e(this).attr("tabindex")<0)})).sort((function(t,i){if(e(t).attr("tabindex")===e(i).attr("tabindex"))return 0;var n=parseInt(e(t).attr("tabindex"),10),s=parseInt(e(i).attr("tabindex"),10);return"undefined"===typeof e(t).attr("tabindex")&&s>0?1:"undefined"===typeof e(i).attr("tabindex")&&n>0?-1:0===n&&s>0?1:0===s&&n>0||n<s?-1:n>s?1:void 0}))}function parseKey(e){var t=o[e.which||e.keyCode]||String.fromCharCode(e.which).toUpperCase();t=t.replace(/\W+/,"");e.shiftKey&&(t="SHIFT_".concat(t));e.ctrlKey&&(t="CTRL_".concat(t));e.altKey&&(t="ALT_".concat(t));t=t.replace(/_$/,"");return t}var l={keys:getKeyCodes(o),
/**
   * Parses the (keyboard) event and returns a String that represents its key
   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
   * @param {Event} event - the event generated by the event handler
   * @return String key - String that represents the key pressed
   */
parseKey:parseKey,
/**
   * Handles the given (keyboard) event
   * @param {Event} event - the event generated by the event handler
   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
   * @param {Objects} functions - collection of functions that are to be executed
   */
handleKey:function handleKey(t,i,n){var s,a,o,l=r[i],c=this.parseKey(t);if(!l)return console.warn("Component not defined!");if(true!==t.zfIsKeyHandled){s="undefined"===typeof l.ltr?l:rtl()?e.extend({},l.ltr,l.rtl):e.extend({},l.rtl,l.ltr);a=s[c];o=n[a];if(o&&"function"===typeof o){var h=o.apply();t.zfIsKeyHandled=true;(n.handled||"function"===typeof n.handled)&&n.handled(h)}else(n.unhandled||"function"===typeof n.unhandled)&&n.unhandled()}},
/**
   * Finds all focusable elements within the given `$element`
   * @param {jQuery} $element - jQuery object to search within
   * @return {jQuery} $focusable - all focusable elements within `$element`
   */
findFocusable:findFocusable,
/**
   * Returns the component name name
   * @param {Object} component - Foundation component, e.g. Slider or Reveal
   * @return String componentName
   */
register:function register(e,t){r[e]=t},
/**
   * Traps the focus in the given element.
   * @param  {jQuery} $element  jQuery object to trap the foucs into.
   */
trapFocus:function trapFocus(e){var t=findFocusable(e),i=t.eq(0),n=t.eq(-1);e.on("keydown.zf.trapfocus",(function(e){if(e.target===n[0]&&"TAB"===parseKey(e)){e.preventDefault();i.focus()}else if(e.target===i[0]&&"SHIFT_TAB"===parseKey(e)){e.preventDefault();n.focus()}}))},
/**
   * Releases the trapped focus from the given element.
   * @param  {jQuery} $element  jQuery object to release the focus for.
   */
releaseFocus:function releaseFocus(e){e.off("keydown.zf.trapfocus")}};function getKeyCodes(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=e[i]);return t}var c=["mui-enter","mui-leave"];var h=["mui-enter-active","mui-leave-active"];var d={animateIn:function animateIn(e,t,i){animate(true,e,t,i)},animateOut:function animateOut(e,t,i){animate(false,e,t,i)}};function Move(e,t,i){var n,s,a=null;if(0!==e)n=window.requestAnimationFrame(move);else{i.apply(t);t.trigger("finished.zf.animate",[t]).triggerHandler("finished.zf.animate",[t])}function move(o){a||(a=o);s=o-a;i.apply(t);if(s<e)n=window.requestAnimationFrame(move,t);else{window.cancelAnimationFrame(n);t.trigger("finished.zf.animate",[t]).triggerHandler("finished.zf.animate",[t])}}}
/**
 * Animates an element in or out using a CSS transition class.
 * @function
 * @private
 * @param {Boolean} isIn - Defines if the animation is in or out.
 * @param {Object} element - jQuery or HTML object to animate.
 * @param {String} animation - CSS class to use.
 * @param {Function} cb - Callback to run when animation is finished.
 */function animate(t,i,n,s){i=e(i).eq(0);if(i.length){var a=t?c[0]:c[1];var o=t?h[0]:h[1];reset();i.addClass(n).css("transition","none");requestAnimationFrame((function(){i.addClass(a);t&&i.show()}));requestAnimationFrame((function(){i[0].offsetWidth;i.css("transition","").addClass(o)}));i.one(transitionend(i),finish)}function finish(){t||i.hide();reset();s&&s.apply(i)}function reset(){i[0].style.transitionDuration=0;i.removeClass("".concat(a," ").concat(o," ").concat(n))}}var u={Feather:function Feather(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"zf";t.attr("role","menubar");t.find("a").attr({role:"menuitem"});var n=t.find("li").attr({role:"none"}),s="is-".concat(i,"-submenu"),a="".concat(s,"-item"),o="is-".concat(i,"-submenu-parent"),r="accordion"!==i;n.each((function(){var t=e(this),n=t.children("ul");if(n.length){t.addClass(o);if(r){var l=t.children("a:first");l.attr({"aria-haspopup":true,"aria-label":l.attr("aria-label")||l.text()});"drilldown"===i&&t.attr({"aria-expanded":false})}n.addClass("submenu ".concat(s)).attr({"data-submenu":"",role:"menubar"});"drilldown"===i&&n.attr({"aria-hidden":true})}t.parent("[data-submenu]").length&&t.addClass("is-submenu-item ".concat(a))}))},Burn:function Burn(e,t){var i="is-".concat(t,"-submenu"),n="".concat(i,"-item"),s="is-".concat(t,"-submenu-parent");e.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(i," ").concat(n," ").concat(s," is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display","")}};function Timer(e,t,i){var n,s,a=this,o=t.duration,r=Object.keys(e.data())[0]||"timer",l=-1;this.isPaused=false;this.restart=function(){l=-1;clearTimeout(s);this.start()};this.start=function(){this.isPaused=false;clearTimeout(s);l=l<=0?o:l;e.data("paused",false);n=Date.now();s=setTimeout((function(){t.infinite&&a.restart();i&&"function"===typeof i&&i()}),l);e.trigger("timerstart.zf.".concat(r))};this.pause=function(){this.isPaused=true;clearTimeout(s);e.data("paused",true);var t=Date.now();l-=t-n;e.trigger("timerpaused.zf.".concat(r))}}var f={};var p,v,g,m,y=false,_=false;function onTouchEnd(t){this.removeEventListener("touchmove",onTouchMove);this.removeEventListener("touchend",onTouchEnd);if(!_){var i=e.Event("tap",m||t);e(this).trigger(i)}m=null;y=false;_=false}function onTouchMove(t){true===e.spotSwipe.preventDefault&&t.preventDefault();if(y){var i=t.touches[0].pageX;var n=p-i;var s;_=true;g=(new Date).getTime()-v;Math.abs(n)>=e.spotSwipe.moveThreshold&&g<=e.spotSwipe.timeThreshold&&(s=n>0?"left":"right");if(s){t.preventDefault();onTouchEnd.apply(this,arguments);e(this).trigger(e.Event("swipe",Object.assign({},t)),s).trigger(e.Event("swipe".concat(s),Object.assign({},t)))}}}function onTouchStart(t){if(1===t.touches.length){p=t.touches[0].pageX;m=t;y=true;_=false;v=(new Date).getTime();this.addEventListener("touchmove",onTouchMove,{passive:true===e.spotSwipe.preventDefault});this.addEventListener("touchend",onTouchEnd,false)}}function init(){this.addEventListener&&this.addEventListener("touchstart",onTouchStart,{passive:true})}var b=function(){function SpotSwipe(){_classCallCheck(this,SpotSwipe);this.version="1.0.0";this.enabled="ontouchstart"in document.documentElement;this.preventDefault=false;this.moveThreshold=75;this.timeThreshold=200;this._init()}_createClass(SpotSwipe,[{key:"_init",value:function _init(){e.event.special.swipe={setup:init};e.event.special.tap={setup:init};e.each(["left","up","down","right"],(function(){e.event.special["swipe".concat(this)]={setup:function setup(){e(this).on("swipe",e.noop)}}}))}}]);return SpotSwipe}();f.setupSpotSwipe=function(){e.spotSwipe=new b(e)};f.setupTouchHandler=function(){e.fn.addTouch=function(){this.each((function(i,n){e(n).bind("touchstart touchmove touchend touchcancel",(function(e){t(e)}))}));var t=function handleTouch(e){var t,i=e.changedTouches,n=i[0],s={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup"},a=s[e.type];if("MouseEvent"in window&&"function"===typeof window.MouseEvent)t=new window.MouseEvent(a,{bubbles:true,cancelable:true,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY});else{t=document.createEvent("MouseEvent");t.initMouseEvent(a,true,true,window,1,n.screenX,n.screenY,n.clientX,n.clientY,false,false,false,false,0,null)}n.target.dispatchEvent(t)}}};f.init=function(){if("undefined"===typeof e.spotSwipe){f.setupSpotSwipe(e);f.setupTouchHandler(e)}};var w=function(){var e=["WebKit","Moz","O","Ms",""];for(var t=0;t<e.length;t++)if("".concat(e[t],"MutationObserver")in window)return window["".concat(e[t],"MutationObserver")];return false}();var $=function triggers(t,i){t.data(i).split(" ").forEach((function(n){e("#".concat(n))["close"===i?"trigger":"triggerHandler"]("".concat(i,".zf.trigger"),[t])}))};var k={Listeners:{Basic:{},Global:{}},Initializers:{}};k.Listeners.Basic={openListener:function openListener(){$(e(this),"open")},closeListener:function closeListener(){var t=e(this).data("close");t?$(e(this),"close"):e(this).trigger("close.zf.trigger")},toggleListener:function toggleListener(){var t=e(this).data("toggle");t?$(e(this),"toggle"):e(this).trigger("toggle.zf.trigger")},closeableListener:function closeableListener(t){var i=e(this).data("closable");t.stopPropagation();""!==i?d.animateOut(e(this),i,(function(){e(this).trigger("closed.zf")})):e(this).fadeOut().trigger("closed.zf")},toggleFocusListener:function toggleFocusListener(){var t=e(this).data("toggle-focus");e("#".concat(t)).triggerHandler("toggle.zf.trigger",[e(this)])}};k.Initializers.addOpenListener=function(e){e.off("click.zf.trigger",k.Listeners.Basic.openListener);e.on("click.zf.trigger","[data-open]",k.Listeners.Basic.openListener)};k.Initializers.addCloseListener=function(e){e.off("click.zf.trigger",k.Listeners.Basic.closeListener);e.on("click.zf.trigger","[data-close]",k.Listeners.Basic.closeListener)};k.Initializers.addToggleListener=function(e){e.off("click.zf.trigger",k.Listeners.Basic.toggleListener);e.on("click.zf.trigger","[data-toggle]",k.Listeners.Basic.toggleListener)};k.Initializers.addCloseableListener=function(e){e.off("close.zf.trigger",k.Listeners.Basic.closeableListener);e.on("close.zf.trigger","[data-closeable], [data-closable]",k.Listeners.Basic.closeableListener)};k.Initializers.addToggleFocusListener=function(e){e.off("focus.zf.trigger blur.zf.trigger",k.Listeners.Basic.toggleFocusListener);e.on("focus.zf.trigger blur.zf.trigger","[data-toggle-focus]",k.Listeners.Basic.toggleFocusListener)};k.Listeners.Global={resizeListener:function resizeListener(t){w||t.each((function(){e(this).triggerHandler("resizeme.zf.trigger")}));t.attr("data-events","resize")},scrollListener:function scrollListener(t){w||t.each((function(){e(this).triggerHandler("scrollme.zf.trigger")}));t.attr("data-events","scroll")},closeMeListener:function closeMeListener(t,i){var n=t.namespace.split(".")[0];var s=e("[data-".concat(n,"]")).not('[data-yeti-box="'.concat(i,'"]'));s.each((function(){var t=e(this);t.triggerHandler("close.zf.trigger",[t])}))}};k.Initializers.addClosemeListener=function(t){var i=e("[data-yeti-box]"),n=["dropdown","tooltip","reveal"];t&&("string"===typeof t?n.push(t):"object"===_typeof(t)&&"string"===typeof t[0]?n=n.concat(t):console.error("Plugin names must be strings"));if(i.length){var s=n.map((function(e){return"closeme.zf.".concat(e)})).join(" ");e(window).off(s).on(s,k.Listeners.Global.closeMeListener)}};function debounceGlobalListener(t,i,n){var s,a=Array.prototype.slice.call(arguments,3);e(window).on(i,(function(){s&&clearTimeout(s);s=setTimeout((function(){n.apply(null,a)}),t||10)}))}k.Initializers.addResizeListener=function(t){var i=e("[data-resize]");i.length&&debounceGlobalListener(t,"resize.zf.trigger",k.Listeners.Global.resizeListener,i)};k.Initializers.addScrollListener=function(t){var i=e("[data-scroll]");i.length&&debounceGlobalListener(t,"scroll.zf.trigger",k.Listeners.Global.scrollListener,i)};k.Initializers.addMutationEventsListener=function(t){if(!w)return false;var i=t.find("[data-resize], [data-scroll], [data-mutate]");var n=function listeningElementsMutation(t){var i=e(t[0].target);switch(t[0].type){case"attributes":"scroll"===i.attr("data-events")&&"data-events"===t[0].attributeName&&i.triggerHandler("scrollme.zf.trigger",[i,window.pageYOffset]);"resize"===i.attr("data-events")&&"data-events"===t[0].attributeName&&i.triggerHandler("resizeme.zf.trigger",[i]);if("style"===t[0].attributeName){i.closest("[data-mutate]").attr("data-events","mutate");i.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[i.closest("[data-mutate]")])}break;case"childList":i.closest("[data-mutate]").attr("data-events","mutate");i.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger",[i.closest("[data-mutate]")]);break;default:return false}};if(i.length)for(var s=0;s<=i.length-1;s++){var a=new w(n);a.observe(i[s],{attributes:true,childList:true,characterData:false,subtree:true,attributeFilter:["data-events","style"]})}};k.Initializers.addSimpleListeners=function(){var t=e(document);k.Initializers.addOpenListener(t);k.Initializers.addCloseListener(t);k.Initializers.addToggleListener(t);k.Initializers.addCloseableListener(t);k.Initializers.addToggleFocusListener(t)};k.Initializers.addGlobalListeners=function(){var t=e(document);k.Initializers.addMutationEventsListener(t);k.Initializers.addResizeListener(250);k.Initializers.addScrollListener();k.Initializers.addClosemeListener()};k.init=function(t,i){onLoad(e(window),(function(){if(true!==e.triggersInitialized){k.Initializers.addSimpleListeners();k.Initializers.addGlobalListeners();e.triggersInitialized=true}}));if(i){i.Triggers=k;i.IHearYou=k.Initializers.addGlobalListeners}};var C=function(){function Plugin(e,t){_classCallCheck(this,Plugin);this._setup(e,t);var i=getPluginName(this);this.uuid=GetYoDigits(6,i);this.$element.attr("data-".concat(i))||this.$element.attr("data-".concat(i),this.uuid);this.$element.data("zfPlugin")||this.$element.data("zfPlugin",this);this.$element.trigger("init.zf.".concat(i))}_createClass(Plugin,[{key:"destroy",value:function destroy(){this._destroy();var e=getPluginName(this);this.$element.removeAttr("data-".concat(e)).removeData("zfPlugin").trigger("destroyed.zf.".concat(e));for(var t in this)this.hasOwnProperty(t)&&(this[t]=null)}}]);return Plugin}();function hyphenate$1(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function getPluginName(e){return hyphenate$1(e.className)}var z=function(t){_inherits(Abide,t);var i=_createSuper(Abide);function Abide(){_classCallCheck(this,Abide);return i.apply(this,arguments)}_createClass(Abide,[{key:"_setup",value:
/**
     * Creates a new instance of Abide.
     * @class
     * @name Abide
     * @fires Abide#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.$element=t;this.options=e.extend(true,{},Abide.defaults,this.$element.data(),i);this.isEnabled=true;this.formnovalidate=null;this.className="Abide";this._init()}},{key:"_init",value:function _init(){var t=this;this.$inputs=e.merge(this.$element.find("input").not('[type="submit"]'),this.$element.find("textarea, select"));this.$submits=this.$element.find('[type="submit"]');var i=this.$element.find("[data-abide-error]");if(this.options.a11yAttributes){this.$inputs.each((function(i,n){return t.addA11yAttributes(e(n))}));i.each((function(i,n){return t.addGlobalErrorA11yAttributes(e(n))}))}this._events()}},{key:"_events",value:function _events(){var t=this;this.$element.off(".abide").on("reset.zf.abide",(function(){t.resetForm()})).on("submit.zf.abide",(function(){return t.validateForm()}));this.$submits.off("click.zf.abide keydown.zf.abide").on("click.zf.abide keydown.zf.abide",(function(e){if(!e.key||" "===e.key||"Enter"===e.key){e.preventDefault();t.formnovalidate=null!==e.target.getAttribute("formnovalidate");t.$element.submit()}}));"fieldChange"===this.options.validateOn&&this.$inputs.off("change.zf.abide").on("change.zf.abide",(function(i){t.validateInput(e(i.target))}));this.options.liveValidate&&this.$inputs.off("input.zf.abide").on("input.zf.abide",(function(i){t.validateInput(e(i.target))}));this.options.validateOnBlur&&this.$inputs.off("blur.zf.abide").on("blur.zf.abide",(function(i){t.validateInput(e(i.target))}))}},{key:"_reflow",value:function _reflow(){this._init()}
/**
     * Checks whether the submitted form should be validated or not, consodering formnovalidate and isEnabled
     * @returns {Boolean}
     * @private
     */},{key:"_validationIsDisabled",value:function _validationIsDisabled(){return false===this.isEnabled||("boolean"===typeof this.formnovalidate?this.formnovalidate:!!this.$submits.length&&null!==this.$submits[0].getAttribute("formnovalidate"))}},{key:"enableValidation",value:function enableValidation(){this.isEnabled=true}},{key:"disableValidation",value:function disableValidation(){this.isEnabled=false}
/**
     * Checks whether or not a form element has the required attribute and if it's checked or not
     * @param {Object} element - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"requiredCheck",value:function requiredCheck(e){if(!e.attr("required"))return true;var t=true;switch(e[0].type){case"checkbox":t=e[0].checked;break;case"select":case"select-one":case"select-multiple":var i=e.find("option:selected");i.length&&i.val()||(t=false);break;default:e.val()&&e.val().length||(t=false)}return t}
/**
     * Get:
     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
     *   1. The element's direct sibling('s).
     *   2. The element's parent's children.
     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
     *
     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
     *
     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
     * @param {String[]} [failedValidators] - List of failed validators.
     * @returns {Object} jQuery object with the selector.
     */},{key:"findFormError",value:function findFormError(e,t){var i=this;var n=e.length?e[0].id:"";var s=e.siblings(this.options.formErrorSelector);s.length||(s=e.parent().find(this.options.formErrorSelector));n&&(s=s.add(this.$element.find('[data-form-error-for="'.concat(n,'"]'))));if(!!t){s=s.not("[data-form-error-on]");t.forEach((function(t){s=s.add(e.siblings('[data-form-error-on="'.concat(t,'"]')));s=s.add(i.$element.find('[data-form-error-for="'.concat(n,'"][data-form-error-on="').concat(t,'"]')))}))}return s}
/**
     * Get the first element in this order:
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findLabel",value:function findLabel(e){var t=e[0].id;var i=this.$element.find('label[for="'.concat(t,'"]'));return i.length?i:e.closest("label")}
/**
     * Get the set of labels associated with a set of radio els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findRadioLabels",value:function findRadioLabels(t){var i=this;var n=t.map((function(t,n){var s=n.id;var a=i.$element.find('label[for="'.concat(s,'"]'));a.length||(a=e(n).closest("label"));return a[0]}));return e(n)}
/**
     * Get the set of labels associated with a set of checkbox els in this order
     * 2. The <label> with the attribute `[for="someInputId"]`
     * 3. The `.closest()` <label>
     *
     * @param {Object} $el - jQuery object to check for required attribute
     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
     */},{key:"findCheckboxLabels",value:function findCheckboxLabels(t){var i=this;var n=t.map((function(t,n){var s=n.id;var a=i.$element.find('label[for="'.concat(s,'"]'));a.length||(a=e(n).closest("label"));return a[0]}));return e(n)}
/**
     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
     * @param {Object} $el - jQuery object to add the class to
     * @param {String[]} [failedValidators] - List of failed validators.
     */},{key:"addErrorClasses",value:function addErrorClasses(e,t){var i=this.findLabel(e);var n=this.findFormError(e,t);i.length&&i.addClass(this.options.labelErrorClass);n.length&&n.addClass(this.options.formErrorClass);e.addClass(this.options.inputErrorClass).attr({"data-invalid":"","aria-invalid":true});n.filter(":visible").length&&this.addA11yErrorDescribe(e,n)}
/**
     * Adds [for] and [role=alert] attributes to all form error targetting $el,
     * and [aria-describedby] attribute to $el toward the first form error.
     * @param {Object} $el - jQuery object
     */},{key:"addA11yAttributes",value:function addA11yAttributes(t){var i=this.findFormError(t);var n=i.filter("label");if(i.length){var s=i.filter(":visible").first();s.length&&this.addA11yErrorDescribe(t,s);if(n.filter("[for]").length<n.length){var a=t.attr("id");if("undefined"===typeof a){a=GetYoDigits(6,"abide-input");t.attr("id",a)}n.each((function(t,i){var n=e(i);"undefined"===typeof n.attr("for")&&n.attr("for",a)}))}i.each((function(t,i){var n=e(i);"undefined"===typeof n.attr("role")&&n.attr("role","alert")})).end()}}},{key:"addA11yErrorDescribe",value:function addA11yErrorDescribe(e,t){if("undefined"===typeof e.attr("aria-describedby")){var i=t.attr("id");if("undefined"===typeof i){i=GetYoDigits(6,"abide-error");t.attr("id",i)}e.attr("aria-describedby",i).data("abide-describedby",true)}}
/**
     * Adds [aria-live] attribute to the given global form error $el.
     * @param {Object} $el - jQuery object to add the attribute to
     */},{key:"addGlobalErrorA11yAttributes",value:function addGlobalErrorA11yAttributes(e){"undefined"===typeof e.attr("aria-live")&&e.attr("aria-live",this.options.a11yErrorLevel)}
/**
     * Remove CSS error classes etc from an entire radio button group
     * @param {String} groupName - A string that specifies the name of a radio button group
     *
     */},{key:"removeRadioErrorClasses",value:function removeRadioErrorClasses(e){var t=this.$element.find(':radio[name="'.concat(e,'"]'));var i=this.findRadioLabels(t);var n=this.findFormError(t);i.length&&i.removeClass(this.options.labelErrorClass);n.length&&n.removeClass(this.options.formErrorClass);t.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Remove CSS error classes etc from an entire checkbox group
     * @param {String} groupName - A string that specifies the name of a checkbox group
     *
     */},{key:"removeCheckboxErrorClasses",value:function removeCheckboxErrorClasses(e){var t=this.$element.find(':checkbox[name="'.concat(e,'"]'));var i=this.findCheckboxLabels(t);var n=this.findFormError(t);i.length&&i.removeClass(this.options.labelErrorClass);n.length&&n.removeClass(this.options.formErrorClass);t.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null})}
/**
     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
     * @param {Object} $el - jQuery object to remove the class from
     */},{key:"removeErrorClasses",value:function removeErrorClasses(e){if("radio"===e[0].type)return this.removeRadioErrorClasses(e.attr("name"));if("checkbox"===e[0].type)return this.removeCheckboxErrorClasses(e.attr("name"));var t=this.findLabel(e);var i=this.findFormError(e);t.length&&t.removeClass(this.options.labelErrorClass);i.length&&i.removeClass(this.options.formErrorClass);e.removeClass(this.options.inputErrorClass).attr({"data-invalid":null,"aria-invalid":null});e.data("abide-describedby")&&e.removeAttr("aria-describedby").removeData("abide-describedby")}
/**
     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
     * @fires Abide#invalid
     * @fires Abide#valid
     * @param {Object} element - jQuery object to validate, should be an HTML input
     * @returns {Boolean} goodToGo - If the input is valid or not.
     */},{key:"validateInput",value:function validateInput(t){var i=this;var n=this.requiredCheck(t),s=t.attr("data-validator"),a=[],o=true;if(this._validationIsDisabled())return true;if(t.is("[data-abide-ignore]")||t.is('[type="hidden"]')||t.is("[disabled]"))return true;switch(t[0].type){case"radio":this.validateRadio(t.attr("name"))||a.push("required");break;case"checkbox":this.validateCheckbox(t.attr("name"))||a.push("required");o=false;break;case"select":case"select-one":case"select-multiple":n||a.push("required");break;default:n||a.push("required");this.validateText(t)||a.push("pattern")}if(s){var r=!!t.attr("required");s.split(" ").forEach((function(e){i.options.validators[e](t,r,t.parent())||a.push(e)}))}t.attr("data-equalto")&&(this.options.validators.equalTo(t)||a.push("equalTo"));var l=0===a.length;var c=(l?"valid":"invalid")+".zf.abide";if(l){var h=this.$element.find('[data-equalto="'.concat(t.attr("id"),'"]'));if(h.length){var d=this;h.each((function(){e(this).val()&&d.validateInput(e(this))}))}}o&&(l?this.removeErrorClasses(t):this.addErrorClasses(t,a));t.trigger(c,[t]);return l}
/**
     * Goes through a form and if there are any invalid inputs, it will display the form error element
     * @returns {Boolean} noError - true if no errors were detected...
     * @fires Abide#formvalid
     * @fires Abide#forminvalid
     */},{key:"validateForm",value:function validateForm(){var t=this;var i=[];var n=this;var s;this.initialized||(this.initialized=true);if(this._validationIsDisabled()){this.formnovalidate=null;return true}this.$inputs.each((function(){if("checkbox"===e(this)[0].type){if(e(this).attr("name")===s)return true;s=e(this).attr("name")}i.push(n.validateInput(e(this)))}));var a=-1===i.indexOf(false);this.$element.find("[data-abide-error]").each((function(i,n){var s=e(n);t.options.a11yAttributes&&t.addGlobalErrorA11yAttributes(s);s.css("display",a?"none":"block")}));this.$element.trigger((a?"formvalid":"forminvalid")+".zf.abide",[this.$element]);return a}
/**
     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
     */},{key:"validateText",value:function validateText(e,t){t=t||e.attr("data-pattern")||e.attr("pattern")||e.attr("type");var i=e.val();var n=true;i.length&&(this.options.patterns.hasOwnProperty(t)?n=this.options.patterns[t].test(i):t!==e.attr("type")&&(n=new RegExp(t).test(i)));return n}
/**
     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
     * @param {String} groupName - A string that specifies the name of a radio button group
     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
     */},{key:"validateRadio",value:function validateRadio(t){var i=this.$element.find(':radio[name="'.concat(t,'"]'));var n=false,s=false;i.each((function(t,i){e(i).attr("required")&&(s=true)}));s||(n=true);n||i.each((function(t,i){e(i).prop("checked")&&(n=true)}));return n}
/**
     * Determines whether or a not a checkbox input is valid based on whether or not it is required and checked. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all checkboxes in its group.
     * @param {String} groupName - A string that specifies the name of a checkbox group
     * @returns {Boolean} Boolean value depends on whether or not at least one checkbox input has been checked (if it's required)
     */},{key:"validateCheckbox",value:function validateCheckbox(t){var i=this;var n=this.$element.find(':checkbox[name="'.concat(t,'"]'));var s=false,a=false,o=1,r=0;n.each((function(t,i){e(i).attr("required")&&(a=true)}));a||(s=true);if(!s){n.each((function(t,i){e(i).prop("checked")&&r++;"undefined"!==typeof e(i).attr("data-min-required")&&(o=parseInt(e(i).attr("data-min-required"),10))}));r>=o&&(s=true)}if(true!==this.initialized&&o>1)return true;n.each((function(t,n){s?i.removeErrorClasses(e(n)):i.addErrorClasses(e(n),["required"])}));return s}
/**
     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
     * @param {Object} $el - jQuery input element.
     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
     * @param {Boolean} required - self explanatory?
     * @returns {Boolean} - true if validations passed.
     */},{key:"matchValidation",value:function matchValidation(e,t,i){var n=this;i=!!i;var s=t.split(" ").map((function(t){return n.options.validators[t](e,i,e.parent())}));return-1===s.indexOf(false)}},{key:"resetForm",value:function resetForm(){var t=this.$element,i=this.options;e(".".concat(i.labelErrorClass),t).not("small").removeClass(i.labelErrorClass);e(".".concat(i.inputErrorClass),t).not("small").removeClass(i.inputErrorClass);e("".concat(i.formErrorSelector,".").concat(i.formErrorClass)).removeClass(i.formErrorClass);t.find("[data-abide-error]").css("display","none");e(":input",t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({"data-invalid":null,"aria-invalid":null});e(":input:radio",t).not("[data-abide-ignore]").prop("checked",false).attr({"data-invalid":null,"aria-invalid":null});e(":input:checkbox",t).not("[data-abide-ignore]").prop("checked",false).attr({"data-invalid":null,"aria-invalid":null});t.trigger("formreset.zf.abide",[t])}},{key:"_destroy",value:function _destroy(){var t=this;this.$element.off(".abide").find("[data-abide-error]").css("display","none");this.$inputs.off(".abide").each((function(){t.removeErrorClasses(e(this))}));this.$submits.off(".abide")}}]);return Abide}(C);z.defaults={
/**
   * The default event to validate inputs. Checkboxes and radios validate immediately.
   * Remove or change this value for manual validation.
   * @option
   * @type {?string}
   * @default 'fieldChange'
   */
validateOn:"fieldChange",
/**
   * Class to be applied to input labels on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-label'
   */
labelErrorClass:"is-invalid-label",
/**
   * Class to be applied to inputs on failed validation.
   * @option
   * @type {string}
   * @default 'is-invalid-input'
   */
inputErrorClass:"is-invalid-input",
/**
   * Class selector to use to target Form Errors for show/hide.
   * @option
   * @type {string}
   * @default '.form-error'
   */
formErrorSelector:".form-error",
/**
   * Class added to Form Errors on failed validation.
   * @option
   * @type {string}
   * @default 'is-visible'
   */
formErrorClass:"is-visible",
/**
   * If true, automatically insert when possible:
   * - `[aria-describedby]` on fields
   * - `[role=alert]` on form errors and `[for]` on form error labels
   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
   * @option
   * @type {boolean}
   * @default true
   */
a11yAttributes:true,
/**
   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
   * Options are: 'assertive', 'polite' and 'off'/null
   * @option
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   * @type {string}
   * @default 'assertive'
   */
a11yErrorLevel:"assertive",
/**
   * Set to true to validate text inputs on any value change.
   * @option
   * @type {boolean}
   * @default false
   */
liveValidate:false,
/**
   * Set to true to validate inputs on blur.
   * @option
   * @type {boolean}
   * @default false
   */
validateOnBlur:false,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,website:{test:function test(e){return z.defaults.patterns.domain.test(e)||z.defaults.patterns.url.test(e)}}},validators:{equalTo:function equalTo(t){return e("#".concat(t.attr("data-equalto"))).val()===t.val()}}};var T=function(t){_inherits(Accordion,t);var i=_createSuper(Accordion);function Accordion(){_classCallCheck(this,Accordion);return i.apply(this,arguments)}_createClass(Accordion,[{key:"_setup",value:
/**
     * Creates a new instance of an accordion.
     * @class
     * @name Accordion
     * @fires Accordion#init
     * @param {jQuery} element - jQuery object to make into an accordion.
     * @param {Object} options - a plain object with settings to override the default options.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Accordion.defaults,this.$element.data(),i);this.className="Accordion";this._init();l.register("Accordion",{ENTER:"toggle",SPACE:"toggle",ARROW_DOWN:"next",ARROW_UP:"previous",HOME:"first",END:"last"})}},{key:"_init",value:function _init(){var t=this;this._isInitializing=true;this.$tabs=this.$element.children("[data-accordion-item]");this.$tabs.each((function(t,i){var n=e(i),s=n.children("[data-tab-content]"),a=s[0].id||GetYoDigits(6,"accordion"),o=i.id?"".concat(i.id,"-label"):"".concat(a,"-label");n.find("a:first").attr({"aria-controls":a,id:o,"aria-expanded":false});s.attr({role:"region","aria-labelledby":o,"aria-hidden":true,id:a})}));var i=this.$element.find(".is-active").children("[data-tab-content]");if(i.length){this._initialAnchor=i.prev("a").attr("href");this._openSingleTab(i)}this._checkDeepLink=function(){var i=window.location.hash;if(!i.length){if(t._isInitializing)return;t._initialAnchor&&(i=t._initialAnchor)}var n=i&&e(i);var s=i&&t.$element.find('[href$="'.concat(i,'"]'));var a=!!(n.length&&s.length);if(a){n&&s&&s.length?s.parent("[data-accordion-item]").hasClass("is-active")||t._openSingleTab(n):t._closeAllTabs();t.options.deepLinkSmudge&&onLoad(e(window),(function(){var i=t.$element.offset();e("html, body").animate({scrollTop:i.top-t.options.deepLinkSmudgeOffset},t.options.deepLinkSmudgeDelay)}));t.$element.trigger("deeplink.zf.accordion",[s,n])}};this.options.deepLink&&this._checkDeepLink();this._events();this._isInitializing=false}},{key:"_events",value:function _events(){var t=this;this.$tabs.each((function(){var i=e(this);var n=i.children("[data-tab-content]");n.length&&i.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion",(function(e){e.preventDefault();t.toggle(n)})).on("keydown.zf.accordion",(function(e){l.handleKey(e,"Accordion",{toggle:function toggle(){t.toggle(n)},next:function next(){var e=i.next().find("a").focus();t.options.multiExpand||e.trigger("click.zf.accordion")},previous:function previous(){var e=i.prev().find("a").focus();t.options.multiExpand||e.trigger("click.zf.accordion")},first:function first(){var e=t.$tabs.first().find(".accordion-title").focus();t.options.multiExpand||e.trigger("click.zf.accordion")},last:function last(){var e=t.$tabs.last().find(".accordion-title").focus();t.options.multiExpand||e.trigger("click.zf.accordion")},handled:function handled(){e.preventDefault()}})}))}));this.options.deepLink&&e(window).on("hashchange",this._checkDeepLink)}
/**
     * Toggles the selected content pane's open/close state.
     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
     * @function
     */},{key:"toggle",value:function toggle(e){if(e.closest("[data-accordion]").is("[disabled]"))console.info("Cannot toggle an accordion that is disabled.");else{e.parent().hasClass("is-active")?this.up(e):this.down(e);if(this.options.deepLink){var t=e.prev("a").attr("href");this.options.updateHistory?history.pushState({},"",t):history.replaceState({},"",t)}}}
/**
     * Opens the accordion tab defined by `$target`.
     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     */},{key:"down",value:function down(e){e.closest("[data-accordion]").is("[disabled]")?console.info("Cannot call down on an accordion that is disabled."):this.options.multiExpand?this._openTab(e):this._openSingleTab(e)}
/**
     * Closes the tab defined by `$target`.
     * It may be ignored if the Accordion options don't allow it.
     *
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     */},{key:"up",value:function up(e){if(this.$element.is("[disabled]"))console.info("Cannot call up on an accordion that is disabled.");else{var t=e.parent();if(t.hasClass("is-active")){var i=t.siblings();(this.options.allowAllClosed||i.hasClass("is-active"))&&this._closeTab(e)}}}
/**
     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @function
     * @private
     */},{key:"_openSingleTab",value:function _openSingleTab(e){var t=this.$element.children(".is-active").children("[data-tab-content]");t.length&&this._closeTab(t.not(e));this._openTab(e)}
/**
     * Opens the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
     * @fires Accordion#down
     * @function
     * @private
     */},{key:"_openTab",value:function _openTab(t){var i=this;var n=t.parent();var s=t.attr("aria-labelledby");t.attr("aria-hidden",false);n.addClass("is-active");e("#".concat(s)).attr({"aria-expanded":true});t.finish().slideDown(this.options.slideSpeed,(function(){i.$element.trigger("down.zf.accordion",[t])}))}
/**
     * Closes the tab defined by `$target`.
     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
     * @fires Accordion#up
     * @function
     * @private
     */},{key:"_closeTab",value:function _closeTab(t){var i=this;var n=t.parent();var s=t.attr("aria-labelledby");t.attr("aria-hidden",true);n.removeClass("is-active");e("#".concat(s)).attr({"aria-expanded":false});t.finish().slideUp(this.options.slideSpeed,(function(){i.$element.trigger("up.zf.accordion",[t])}))}},{key:"_closeAllTabs",value:function _closeAllTabs(){var e=this.$element.children(".is-active").children("[data-tab-content]");e.length&&this._closeTab(e)}},{key:"_destroy",value:function _destroy(){this.$element.find("[data-tab-content]").stop(true).slideUp(0).css("display","");this.$element.find("a").off(".zf.accordion");this.options.deepLink&&e(window).off("hashchange",this._checkDeepLink)}}]);return Accordion}(C);T.defaults={
/**
   * Amount of time to animate the opening of an accordion pane.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,
/**
   * Allow the accordion to have multiple open panes.
   * @option
   * @type {boolean}
   * @default false
   */
multiExpand:false,
/**
   * Allow the accordion to close all panes.
   * @option
   * @type {boolean}
   * @default false
   */
allowAllClosed:false,
/**
   * Link the location hash to the open pane.
   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:false,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:false,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLinkSmudge` is enabled, the offset for scrollToTtop to prevent overlap by a sticky element at the top of the page
   * @option
   * @type {number}
   * @default 0
   */
deepLinkSmudgeOffset:0,
/**
   * If `deepLink` is enabled, update the browser history with the open accordion
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:false};var O=function(t){_inherits(AccordionMenu,t);var i=_createSuper(AccordionMenu);function AccordionMenu(){_classCallCheck(this,AccordionMenu);return i.apply(this,arguments)}_createClass(AccordionMenu,[{key:"_setup",value:
/**
     * Creates a new instance of an accordion menu.
     * @class
     * @name AccordionMenu
     * @fires AccordionMenu#init
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},AccordionMenu.defaults,this.$element.data(),i);this.className="AccordionMenu";this._init();l.register("AccordionMenu",{ENTER:"toggle",SPACE:"toggle",ARROW_RIGHT:"open",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"close",ESCAPE:"closeAll"})}},{key:"_init",value:function _init(){u.Feather(this.$element,"accordion");var t=this;this.$element.find("[data-submenu]").not(".is-active").slideUp(0);this.$element.attr({"aria-multiselectable":this.options.multiOpen});this.$menuLinks=this.$element.find(".is-accordion-submenu-parent");this.$menuLinks.each((function(){var i=this.id||GetYoDigits(6,"acc-menu-link"),n=e(this),s=n.children("[data-submenu]"),a=s[0].id||GetYoDigits(6,"acc-menu"),o=s.hasClass("is-active");if(t.options.parentLink){var r=n.children("a");r.clone().prependTo(s).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>')}if(t.options.submenuToggle){n.addClass("has-submenu-toggle");n.children("a").after('<button id="'+i+'" class="submenu-toggle" aria-controls="'+a+'" aria-expanded="'+o+'" title="'+t.options.submenuToggleText+'"><span class="submenu-toggle-text">'+t.options.submenuToggleText+"</span></button>")}else n.attr({"aria-controls":a,"aria-expanded":o,id:i});s.attr({"aria-labelledby":i,"aria-hidden":!o,role:"group",id:a})}));var i=this.$element.find(".is-active");i.length&&i.each((function(){t.down(e(this))}));this._events()}},{key:"_events",value:function _events(){var t=this;this.$element.find("li").each((function(){var i=e(this).children("[data-submenu]");i.length&&(t.options.submenuToggle?e(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu",(function(){t.toggle(i)})):e(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu",(function(e){e.preventDefault();t.toggle(i)})))})).on("keydown.zf.accordionMenu",(function(i){var n,s,a=e(this),o=a.parent("ul").children("li"),r=a.children("[data-submenu]");o.each((function(t){if(e(this).is(a)){n=o.eq(Math.max(0,t-1)).find("a").first();s=o.eq(Math.min(t+1,o.length-1)).find("a").first();e(this).children("[data-submenu]:visible").length&&(s=a.find("li:first-child").find("a").first());e(this).is(":first-child")?n=a.parents("li").first().find("a").first():n.parents("li").first().children("[data-submenu]:visible").length&&(n=n.parents("li").find("li:last-child").find("a").first());e(this).is(":last-child")&&(s=a.parents("li").first().next("li").find("a").first())}else;}));l.handleKey(i,"AccordionMenu",{open:function open(){if(r.is(":hidden")){t.down(r);r.find("li").first().find("a").first().focus()}},close:function close(){if(r.length&&!r.is(":hidden"))t.up(r);else if(a.parent("[data-submenu]").length){t.up(a.parent("[data-submenu]"));a.parents("li").first().find("a").first().focus()}},up:function up(){n.focus();return true},down:function down(){s.focus();return true},toggle:function toggle(){if(t.options.submenuToggle)return false;if(a.children("[data-submenu]").length){t.toggle(a.children("[data-submenu]"));return true}},closeAll:function closeAll(){t.hideAll()},handled:function handled(e){e&&i.preventDefault()}})}))}},{key:"hideAll",value:function hideAll(){this.up(this.$element.find("[data-submenu]"))}},{key:"showAll",value:function showAll(){this.down(this.$element.find("[data-submenu]"))}
/**
     * Toggles the open/close state of a submenu.
     * @function
     * @param {jQuery} $target - the submenu to toggle
     */},{key:"toggle",value:function toggle(e){e.is(":animated")||(e.is(":hidden")?this.down(e):this.up(e))}
/**
     * Opens the sub-menu defined by `$target`.
     * @param {jQuery} $target - Sub-menu to open.
     * @fires AccordionMenu#down
     */},{key:"down",value:function down(e){var t=this;if(!this.options.multiOpen){var i=e.parentsUntil(this.$element).add(e).add(e.find(".is-active"));var n=this.$element.find(".is-active").not(i);this.up(n)}e.addClass("is-active").attr({"aria-hidden":false});this.options.submenuToggle?e.prev(".submenu-toggle").attr({"aria-expanded":true}):e.parent(".is-accordion-submenu-parent").attr({"aria-expanded":true});e.slideDown(this.options.slideSpeed,(function(){t.$element.trigger("down.zf.accordionMenu",[e])}))}
/**
     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
     * @param {jQuery} $target - Sub-menu to close.
     * @fires AccordionMenu#up
     */},{key:"up",value:function up(e){var t=this;var i=e.find("[data-submenu]");var n=e.add(i);i.slideUp(0);n.removeClass("is-active").attr("aria-hidden",true);this.options.submenuToggle?n.prev(".submenu-toggle").attr("aria-expanded",false):n.parent(".is-accordion-submenu-parent").attr("aria-expanded",false);e.slideUp(this.options.slideSpeed,(function(){t.$element.trigger("up.zf.accordionMenu",[e])}))}},{key:"_destroy",value:function _destroy(){this.$element.find("[data-submenu]").slideDown(0).css("display","");this.$element.find("a").off("click.zf.accordionMenu");this.$element.find("[data-is-parent-link]").detach();if(this.options.submenuToggle){this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle");this.$element.find(".submenu-toggle").remove()}u.Burn(this.$element,"accordion")}}]);return AccordionMenu}(C);O.defaults={
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:false,
/**
   * Amount of time to animate the opening of a submenu in ms.
   * @option
   * @type {number}
   * @default 250
   */
slideSpeed:250,submenuToggle:false,submenuToggleText:"Toggle menu",
/**
   * Allow the menu to have multiple open panes.
   * @option
   * @type {boolean}
   * @default true
   */
multiOpen:true};var A=function(t){_inherits(Drilldown,t);var i=_createSuper(Drilldown);function Drilldown(){_classCallCheck(this,Drilldown);return i.apply(this,arguments)}_createClass(Drilldown,[{key:"_setup",value:
/**
     * Creates a new instance of a drilldown menu.
     * @class
     * @name Drilldown
     * @param {jQuery} element - jQuery object to make into an accordion menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Drilldown.defaults,this.$element.data(),i);this.className="Drilldown";this._init();l.register("Drilldown",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}},{key:"_init",value:function _init(){u.Feather(this.$element,"drilldown");this.options.autoApplyClass&&this.$element.addClass("drilldown");this.$element.attr({"aria-multiselectable":false});this.$submenuAnchors=this.$element.find("li.is-drilldown-submenu-parent").children("a");this.$submenus=this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role","group");this.$menuItems=this.$element.find("li").not(".js-drilldown-back").find("a");this.$currentMenu=this.$element;this.$element.attr("data-mutate",this.$element.attr("data-drilldown")||GetYoDigits(6,"drilldown"));this._prepareMenu();this._registerEvents();this._keyboardEvents()}},{key:"_prepareMenu",value:function _prepareMenu(){var t=this;this.$submenuAnchors.each((function(){var i=e(this);var n=i.parent();t.options.parentLink&&i.clone().prependTo(n.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="none"></li>');i.data("savedHref",i.attr("href")).removeAttr("href").attr("tabindex",0);i.children("[data-submenu]").attr({"aria-hidden":true,tabindex:0,role:"group"});t._events(i)}));this.$submenus.each((function(){var i=e(this),n=i.find(".js-drilldown-back");if(!n.length)switch(t.options.backButtonPosition){case"bottom":i.append(t.options.backButton);break;case"top":i.prepend(t.options.backButton);break;default:console.error("Unsupported backButtonPosition value '"+t.options.backButtonPosition+"'")}t._back(i)}));this.$submenus.addClass("invisible");this.options.autoHeight||this.$submenus.addClass("drilldown-submenu-cover-previous");if(!this.$element.parent().hasClass("is-drilldown")){this.$wrapper=e(this.options.wrapper).addClass("is-drilldown");this.options.animateHeight&&this.$wrapper.addClass("animate-height");this.$element.wrap(this.$wrapper)}this.$wrapper=this.$element.parent();this.$wrapper.css(this._getMaxDims())}},{key:"_resize",value:function _resize(){this.$wrapper.css({"max-width":"none","min-height":"none"});this.$wrapper.css(this._getMaxDims())}
/**
     * Adds event handlers to elements in the menu.
     * @function
     * @private
     * @param {jQuery} $elem - the current menu item to add handlers to.
     */},{key:"_events",value:function _events(t){var i=this;t.off("click.zf.drilldown").on("click.zf.drilldown",(function(n){e(n.target).parentsUntil("ul","li").hasClass("is-drilldown-submenu-parent")&&n.preventDefault();i._show(t.parent("li"));if(i.options.closeOnClick){var s=e("body");s.off(".zf.drilldown").on("click.zf.drilldown",(function(t){if(t.target!==i.$element[0]&&!e.contains(i.$element[0],t.target)){t.preventDefault();i._hideAll();s.off(".zf.drilldown")}}))}}))}},{key:"_registerEvents",value:function _registerEvents(){if(this.options.scrollTop){this._bindHandler=this._scrollTop.bind(this);this.$element.on("open.zf.drilldown hide.zf.drilldown close.zf.drilldown closed.zf.drilldown",this._bindHandler)}this.$element.on("mutateme.zf.trigger",this._resize.bind(this))}},{key:"_scrollTop",value:function _scrollTop(){var t=this;var i=""!==t.options.scrollTopElement?e(t.options.scrollTopElement):t.$element,n=parseInt(i.offset().top+t.options.scrollTopOffset,10);e("html, body").stop(true).animate({scrollTop:n},t.options.animationDuration,t.options.animationEasing,(function(){this===e("html")[0]&&t.$element.trigger("scrollme.zf.drilldown")}))}},{key:"_keyboardEvents",value:function _keyboardEvents(){var t=this;this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown",(function(i){var n,s,a=e(this),o=a.parent("li").parent("ul").children("li").children("a");o.each((function(t){if(e(this).is(a)){n=o.eq(Math.max(0,t-1));s=o.eq(Math.min(t+1,o.length-1))}else;}));l.handleKey(i,"Drilldown",{next:function next(){if(a.is(t.$submenuAnchors)){t._show(a.parent("li"));a.parent("li").one(transitionend(a),(function(){a.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}));return true}},previous:function previous(){t._hide(a.parent("li").parent("ul"));a.parent("li").parent("ul").one(transitionend(a),(function(){setTimeout((function(){a.parent("li").parent("ul").parent("li").children("a").first().focus()}),1)}));return true},up:function up(){n.focus();return!a.is(t.$element.find("> li:first-child > a"))},down:function down(){s.focus();return!a.is(t.$element.find("> li:last-child > a"))},close:function close(){if(!a.is(t.$element.find("> li > a"))){t._hide(a.parent().parent());a.parent().parent().siblings("a").focus()}},open:function open(){if(t.options.parentLink&&a.attr("href"))return false;if(!a.is(t.$menuItems)){t._hide(a.parent("li").parent("ul"));a.parent("li").parent("ul").one(transitionend(a),(function(){setTimeout((function(){a.parent("li").parent("ul").parent("li").children("a").first().focus()}),1)}));return true}if(a.is(t.$submenuAnchors)){t._show(a.parent("li"));a.parent("li").one(transitionend(a),(function(){a.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()}));return true}},handled:function handled(e){e&&i.preventDefault()}})}))}},{key:"_hideAll",value:function _hideAll(){var e=this;var t=this.$element.find(".is-drilldown-submenu.is-active");t.addClass("is-closing");t.parent().closest("ul").removeClass("invisible");if(this.options.autoHeight){var i=t.parent().closest("ul").data("calcHeight");this.$wrapper.css({height:i})}this.$element.trigger("close.zf.drilldown");t.one(transitionend(t),(function(){t.removeClass("is-active is-closing");e.$element.trigger("closed.zf.drilldown")}))}
/**
     * Adds event listener for each `back` button, and closes open menus.
     * @function
     * @fires Drilldown#back
     * @param {jQuery} $elem - the current sub-menu to add `back` event.
     */},{key:"_back",value:function _back(e){var t=this;e.off("click.zf.drilldown");e.children(".js-drilldown-back").on("click.zf.drilldown",(function(){t._hide(e);var i=e.parent("li").parent("ul").parent("li");i.length?t._show(i):t.$currentMenu=t.$element}))}},{key:"_menuLinkEvents",value:function _menuLinkEvents(){var e=this;this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown",(function(){setTimeout((function(){e._hideAll()}),0)}))}
/**
     * Sets the CSS classes for submenu to show it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setShowSubMenuClasses",value:function _setShowSubMenuClasses(e,t){e.addClass("is-active").removeClass("invisible").attr("aria-hidden",false);e.parent("li").attr("aria-expanded",true);true===t&&this.$element.trigger("open.zf.drilldown",[e])}
/**
     * Sets the CSS classes for submenu to hide it.
     * @function
     * @private
     * @param {jQuery} $elem - the target submenu (`ul` tag)
     * @param {boolean} trigger - trigger drilldown event
     */},{key:"_setHideSubMenuClasses",value:function _setHideSubMenuClasses(e,t){e.removeClass("is-active").addClass("invisible").attr("aria-hidden",true);e.parent("li").attr("aria-expanded",false);true===t&&e.trigger("hide.zf.drilldown",[e])}
/**
     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
     */},{key:"_showMenu",value:function _showMenu(t,i){var n=this;var s=this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');s.each((function(){n._setHideSubMenuClasses(e(this))}));this.$currentMenu=t;if(t.is("[data-drilldown]")){true===i&&t.find("li > a").first().focus();this.options.autoHeight&&this.$wrapper.css("height",t.data("calcHeight"))}else{var a=t.children().first().parentsUntil("[data-drilldown]","[data-submenu]");a.each((function(s){0===s&&n.options.autoHeight&&n.$wrapper.css("height",e(this).data("calcHeight"));var o=s===a.length-1;true===o&&e(this).one(transitionend(e(this)),(function(){true===i&&t.find("li > a").first().focus()}));n._setShowSubMenuClasses(e(this),o)}))}}
/**
     * Opens a submenu.
     * @function
     * @fires Drilldown#open
     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
     */},{key:"_show",value:function _show(e){var t=e.children("[data-submenu]");e.attr("aria-expanded",true);this.$currentMenu=t;e.parent().closest("ul").addClass("invisible");t.addClass("is-active visible").removeClass("invisible").attr("aria-hidden",false);this.options.autoHeight&&this.$wrapper.css({height:t.data("calcHeight")});this.$element.trigger("open.zf.drilldown",[e])}
/**
     * Hides a submenu
     * @function
     * @fires Drilldown#hide
     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
     */},{key:"_hide",value:function _hide(e){this.options.autoHeight&&this.$wrapper.css({height:e.parent().closest("ul").data("calcHeight")});e.parent().closest("ul").removeClass("invisible");e.parent("li").attr("aria-expanded",false);e.attr("aria-hidden",true);e.addClass("is-closing").one(transitionend(e),(function(){e.removeClass("is-active is-closing visible");e.blur().addClass("invisible")}));e.trigger("hide.zf.drilldown",[e])}},{key:"_getMaxDims",value:function _getMaxDims(){var t=0,i={},n=this;this.$submenus.add(this.$element).each((function(){var i=a.GetDimensions(this).height;t=i>t?i:t;n.options.autoHeight&&e(this).data("calcHeight",i)}));this.options.autoHeight?i.height=this.$currentMenu.data("calcHeight"):i["min-height"]="".concat(t,"px");i["max-width"]="".concat(this.$element[0].getBoundingClientRect().width,"px");return i}},{key:"_destroy",value:function _destroy(){e("body").off(".zf.drilldown");this.options.scrollTop&&this.$element.off(".zf.drilldown",this._bindHandler);this._hideAll();this.$element.off("mutateme.zf.trigger");u.Burn(this.$element,"drilldown");this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").off("transitionend otransitionend webkitTransitionEnd").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role");this.$submenuAnchors.each((function(){e(this).off(".zf.drilldown")}));this.$element.find("[data-is-parent-link]").detach();this.$submenus.removeClass("drilldown-submenu-cover-previous invisible");this.$element.find("a").each((function(){var t=e(this);t.removeAttr("tabindex");t.data("savedHref")&&t.attr("href",t.data("savedHref")).removeData("savedHref")}))}}]);return Drilldown}(C);A.defaults={
/**
   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
   * @option
   * @type {boolean}
   * @default true
   */
autoApplyClass:true,
/**
   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
   */
backButton:'<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
/**
   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
   * @option
   * @type {string}
   * @default top
   */
backButtonPosition:"top",
/**
   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
   * @option
   * @type {string}
   * @default '<div></div>'
   */
wrapper:"<div></div>",
/**
   * Adds the parent link to the submenu.
   * @option
   * @type {boolean}
   * @default false
   */
parentLink:false,
/**
   * Allow the menu to return to root list on body click.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:false,
/**
   * Allow the menu to auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
autoHeight:false,
/**
   * Animate the auto adjust height.
   * @option
   * @type {boolean}
   * @default false
   */
animateHeight:false,
/**
   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
   * @option
   * @type {boolean}
   * @default false
   */
scrollTop:false,
/**
   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
   * @option
   * @type {string}
   * @default ''
   */
scrollTopElement:"",
/**
   * ScrollTop offset
   * @option
   * @type {number}
   * @default 0
   */
scrollTopOffset:0,
/**
   * Scroll animation duration
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Scroll animation easing. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @see {@link https://api.jquery.com/animate|JQuery animate}
   * @default 'swing'
   */
animationEasing:"swing"};var S=["left","right","top","bottom"];var E=["top","bottom","center"];var x=["left","right","center"];var L={left:E,right:E,top:x,bottom:x};function nextItem(e,t){var i=t.indexOf(e);return i===t.length-1?t[0]:t[i+1]}var R=function(e){_inherits(Positionable,e);var t=_createSuper(Positionable);function Positionable(){_classCallCheck(this,Positionable);return t.apply(this,arguments)}_createClass(Positionable,[{key:"_init",value:function _init(){this.triedPositions={};this.position="auto"===this.options.position?this._getDefaultPosition():this.options.position;this.alignment="auto"===this.options.alignment?this._getDefaultAlignment():this.options.alignment;this.originalPosition=this.position;this.originalAlignment=this.alignment}},{key:"_getDefaultPosition",value:function _getDefaultPosition(){return"bottom"}},{key:"_getDefaultAlignment",value:function _getDefaultAlignment(){switch(this.position){case"bottom":case"top":return rtl()?"right":"left";case"left":case"right":return"bottom"}}},{key:"_reposition",value:function _reposition(){if(this._alignmentsExhausted(this.position)){this.position=nextItem(this.position,S);this.alignment=L[this.position][0]}else this._realign()}},{key:"_realign",value:function _realign(){this._addTriedPosition(this.position,this.alignment);this.alignment=nextItem(this.alignment,L[this.position])}},{key:"_addTriedPosition",value:function _addTriedPosition(e,t){this.triedPositions[e]=this.triedPositions[e]||[];this.triedPositions[e].push(t)}},{key:"_positionsExhausted",value:function _positionsExhausted(){var e=true;for(var t=0;t<S.length;t++)e=e&&this._alignmentsExhausted(S[t]);return e}},{key:"_alignmentsExhausted",value:function _alignmentsExhausted(e){return this.triedPositions[e]&&this.triedPositions[e].length===L[e].length}},{key:"_getVOffset",value:function _getVOffset(){return this.options.vOffset}},{key:"_getHOffset",value:function _getHOffset(){return this.options.hOffset}},{key:"_setPosition",value:function _setPosition(e,t,i){if("false"===e.attr("aria-expanded"))return false;if(!this.options.allowOverlap){this.position=this.originalPosition;this.alignment=this.originalAlignment}t.offset(a.GetExplicitOffsets(t,e,this.position,this.alignment,this._getVOffset(),this._getHOffset()));if(!this.options.allowOverlap){var n=1e8;var s={position:this.position,alignment:this.alignment};while(!this._positionsExhausted()){var o=a.OverlapArea(t,i,false,false,this.options.allowBottomOverlap);if(0===o)return;if(o<n){n=o;s={position:this.position,alignment:this.alignment}}this._reposition();t.offset(a.GetExplicitOffsets(t,e,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}this.position=s.position;this.alignment=s.alignment;t.offset(a.GetExplicitOffsets(t,e,this.position,this.alignment,this._getVOffset(),this._getHOffset()))}}}]);return Positionable}(C);R.defaults={
/**
   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown positionable first
   * try to position as defined by data-position and data-alignment, but
   * reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:false,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:true,
/**
   * Number of pixels the positionable should be separated vertically from anchor
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels the positionable should be separated horizontally from anchor
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0};var D=function(t){_inherits(Dropdown,t);var i=_createSuper(Dropdown);function Dropdown(){_classCallCheck(this,Dropdown);return i.apply(this,arguments)}_createClass(Dropdown,[{key:"_setup",value:
/**
     * Creates a new instance of a dropdown.
     * @class
     * @name Dropdown
     * @param {jQuery} element - jQuery object to make into a dropdown.
     *        Object should be of the dropdown panel, rather than its anchor.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Dropdown.defaults,this.$element.data(),i);this.className="Dropdown";f.init(e);k.init(e);this._init();l.register("Dropdown",{ENTER:"toggle",SPACE:"toggle",ESCAPE:"close"})}},{key:"_init",value:function _init(){var t=this.$element.attr("id");this.$anchors=e('[data-toggle="'.concat(t,'"]')).length?e('[data-toggle="'.concat(t,'"]')):e('[data-open="'.concat(t,'"]'));this.$anchors.attr({"aria-controls":t,"data-is-focus":false,"data-yeti-box":t,"aria-haspopup":true,"aria-expanded":false});this._setCurrentAnchor(this.$anchors.first());this.options.parentClass?this.$parent=this.$element.parents("."+this.options.parentClass):this.$parent=null;if("undefined"===typeof this.$element.attr("aria-labelledby")){"undefined"===typeof this.$currentAnchor.attr("id")&&this.$currentAnchor.attr("id",GetYoDigits(6,"dd-anchor"));this.$element.attr("aria-labelledby",this.$currentAnchor.attr("id"))}this.$element.attr({"aria-hidden":"true","data-yeti-box":t,"data-resize":t});_get(_getPrototypeOf(Dropdown.prototype),"_init",this).call(this);this._events()}},{key:"_getDefaultPosition",value:function _getDefaultPosition(){var e=this.$element[0].className.match(/(top|left|right|bottom)/g);return e?e[0]:"bottom"}},{key:"_getDefaultAlignment",value:function _getDefaultAlignment(){var e=/float-(\S+)/.exec(this.$currentAnchor.attr("class"));return e?e[1]:_get(_getPrototypeOf(Dropdown.prototype),"_getDefaultAlignment",this).call(this)}},{key:"_setPosition",value:function _setPosition(){this.$element.removeClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment));_get(_getPrototypeOf(Dropdown.prototype),"_setPosition",this).call(this,this.$currentAnchor,this.$element,this.$parent);this.$element.addClass("has-position-".concat(this.position," has-alignment-").concat(this.alignment))}
/**
     * Make it a current anchor.
     * Current anchor as the reference for the position of Dropdown panes.
     * @param {HTML} el - DOM element of the anchor.
     * @function
     * @private
     */},{key:"_setCurrentAnchor",value:function _setCurrentAnchor(t){this.$currentAnchor=e(t)}},{key:"_events",value:function _events(){var t=this,i="ontouchstart"in window||"undefined"!==typeof window.ontouchstart;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":this._setPosition.bind(this)});this.$anchors.off("click.zf.trigger").on("click.zf.trigger",(function(e){t._setCurrentAnchor(this);(false===t.options.forceFollow||i&&t.options.hover&&false===t.$element.hasClass("is-open"))&&e.preventDefault()}));if(this.options.hover){this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",(function(){t._setCurrentAnchor(this);var i=e("body").data();if("undefined"===typeof i.whatinput||"mouse"===i.whatinput){clearTimeout(t.timeout);t.timeout=setTimeout((function(){t.open();t.$anchors.data("hover",true)}),t.options.hoverDelay)}})).on("mouseleave.zf.dropdown",ignoreMousedisappear((function(){clearTimeout(t.timeout);t.timeout=setTimeout((function(){t.close();t.$anchors.data("hover",false)}),t.options.hoverDelay)})));this.options.hoverPane&&this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown",(function(){clearTimeout(t.timeout)})).on("mouseleave.zf.dropdown",ignoreMousedisappear((function(){clearTimeout(t.timeout);t.timeout=setTimeout((function(){t.close();t.$anchors.data("hover",false)}),t.options.hoverDelay)})))}this.$anchors.add(this.$element).on("keydown.zf.dropdown",(function(i){var n=e(this);l.handleKey(i,"Dropdown",{open:function open(){if(n.is(t.$anchors)&&!n.is("input, textarea")){t.open();t.$element.attr("tabindex",-1).focus();i.preventDefault()}},close:function close(){t.close();t.$anchors.focus()}})}))}},{key:"_addBodyHandler",value:function _addBodyHandler(){var t=e(document.body).not(this.$element),i=this;t.off("click.zf.dropdown tap.zf.dropdown").on("click.zf.dropdown tap.zf.dropdown",(function(e){if(!i.$anchors.is(e.target)&&!i.$anchors.find(e.target).length&&!i.$element.is(e.target)&&!i.$element.find(e.target).length){i.close();t.off("click.zf.dropdown tap.zf.dropdown")}}))}},{key:"open",value:function open(){this.$element.trigger("closeme.zf.dropdown",this.$element.attr("id"));this.$anchors.addClass("hover").attr({"aria-expanded":true});this.$element.addClass("is-opening");this._setPosition();this.$element.removeClass("is-opening").addClass("is-open").attr({"aria-hidden":false});if(this.options.autoFocus){var e=l.findFocusable(this.$element);e.length&&e.eq(0).focus()}this.options.closeOnClick&&this._addBodyHandler();this.options.trapFocus&&l.trapFocus(this.$element);this.$element.trigger("show.zf.dropdown",[this.$element])}},{key:"close",value:function close(){if(!this.$element.hasClass("is-open"))return false;this.$element.removeClass("is-open").attr({"aria-hidden":true});this.$anchors.removeClass("hover").attr("aria-expanded",false);this.$element.trigger("hide.zf.dropdown",[this.$element]);this.options.trapFocus&&l.releaseFocus(this.$element)}},{key:"toggle",value:function toggle(){if(this.$element.hasClass("is-open")){if(this.$anchors.data("hover"))return;this.close()}else this.open()}},{key:"_destroy",value:function _destroy(){this.$element.off(".zf.trigger").hide();this.$anchors.off(".zf.dropdown");e(document.body).off("click.zf.dropdown tap.zf.dropdown")}}]);return Dropdown}(R);D.defaults={
/**
   * Class that designates bounding container of Dropdown (default: window)
   * @option
   * @type {?string}
   * @default null
   */
parentClass:null,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 250
   */
hoverDelay:250,
/**
   * Allow submenus to open on hover events
   * @option
   * @type {boolean}
   * @default false
   */
hover:false,
/**
   * Don't close dropdown when hovering over dropdown pane
   * @option
   * @type {boolean}
   * @default false
   */
hoverPane:false,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Number of pixels between the dropdown pane and the triggering element on open.
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Position of dropdown. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
   * @option
   * @type {boolean}
   * @default false
   */
allowOverlap:false,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * @option
   * @type {boolean}
   * @default true
   */
allowBottomOverlap:true,
/**
   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:false,
/**
   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:false,
/**
   * Allows a click on the body to close the dropdown.
   * @option
   * @type {boolean}
   * @default false
   */
closeOnClick:false,
/**
   * If true the default action of the toggle (e.g. follow a link with href) gets executed on click. If hover option is also true the default action gets prevented on first click for mobile / touch devices and executed on second click.
   * @option
   * @type {boolean}
   * @default true
   */
forceFollow:true};var H=function(t){_inherits(DropdownMenu,t);var i=_createSuper(DropdownMenu);function DropdownMenu(){_classCallCheck(this,DropdownMenu);return i.apply(this,arguments)}_createClass(DropdownMenu,[{key:"_setup",value:
/**
     * Creates a new instance of DropdownMenu.
     * @class
     * @name DropdownMenu
     * @fires DropdownMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},DropdownMenu.defaults,this.$element.data(),i);this.className="DropdownMenu";f.init(e);this._init();l.register("DropdownMenu",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"up",ARROW_DOWN:"down",ARROW_LEFT:"previous",ESCAPE:"close"})}},{key:"_init",value:function _init(){u.Feather(this.$element,"dropdown");var e=this.$element.find("li.is-dropdown-submenu-parent");this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub");this.$menuItems=this.$element.find('li[role="none"]');this.$tabs=this.$element.children('li[role="none"]');this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass);if("auto"===this.options.alignment)if(this.$element.hasClass(this.options.rightClass)||rtl()||this.$element.parents(".top-bar-right").is("*")){this.options.alignment="right";e.addClass("opens-left")}else{this.options.alignment="left";e.addClass("opens-right")}else"right"===this.options.alignment?e.addClass("opens-left"):e.addClass("opens-right");this.changed=false;this._events()}},{key:"_isVertical",value:function _isVertical(){return"block"===this.$tabs.css("display")||"column"===this.$element.css("flex-direction")}},{key:"_isRtl",value:function _isRtl(){return this.$element.hasClass("align-right")||rtl()&&!this.$element.hasClass("align-left")}},{key:"_events",value:function _events(){var t=this,i="ontouchstart"in window||"undefined"!==typeof window.ontouchstart,n="is-dropdown-submenu-parent";var s=function handleClickFn(s){var a=e(s.target).parentsUntil("ul",".".concat(n)),o=a.hasClass(n),r="true"===a.attr("data-is-click"),l=a.children(".is-dropdown-submenu");if(o)if(r){if(!t.options.closeOnClick||!t.options.clickOpen&&!i||t.options.forceFollow&&i)return;s.stopImmediatePropagation();s.preventDefault();t._hide(a)}else{s.stopImmediatePropagation();s.preventDefault();t._show(l);a.add(a.parentsUntil(t.$element,".".concat(n))).attr("data-is-click",true)}};(this.options.clickOpen||i)&&this.$menuItems.on("click.zf.dropdownMenu touchstart.zf.dropdownMenu",s);t.options.closeOnClickInside&&this.$menuItems.on("click.zf.dropdownMenu",(function(){var i=e(this),s=i.hasClass(n);s||t._hide()}));i&&this.options.disableHoverOnTouch&&(this.options.disableHover=true);this.options.disableHover||this.$menuItems.on("mouseenter.zf.dropdownMenu",(function(){var i=e(this),s=i.hasClass(n);if(s){clearTimeout(i.data("_delay"));i.data("_delay",setTimeout((function(){t._show(i.children(".is-dropdown-submenu"))}),t.options.hoverDelay))}})).on("mouseleave.zf.dropdownMenu",ignoreMousedisappear((function(){var i=e(this),s=i.hasClass(n);if(s&&t.options.autoclose){if("true"===i.attr("data-is-click")&&t.options.clickOpen)return false;clearTimeout(i.data("_delay"));i.data("_delay",setTimeout((function(){t._hide(i)}),t.options.closingTime))}})));this.$menuItems.on("keydown.zf.dropdownMenu",(function(i){var n,s,a=e(i.target).parentsUntil("ul",'[role="none"]'),o=t.$tabs.index(a)>-1,r=o?t.$tabs:a.siblings("li").add(a);r.each((function(t){if(e(this).is(a)){n=r.eq(t-1);s=r.eq(t+1)}else;}));var c=function nextSibling(){s.children("a:first").focus();i.preventDefault()},h=function prevSibling(){n.children("a:first").focus();i.preventDefault()},d=function openSub(){var e=a.children("ul.is-dropdown-submenu");if(e.length){t._show(e);a.find("li > a:first").focus();i.preventDefault()}},u=function closeSub(){var e=a.parent("ul").parent("li");e.children("a:first").focus();t._hide(e);i.preventDefault()};var f={open:d,close:function close(){t._hide(t.$element);t.$menuItems.eq(0).children("a").focus();i.preventDefault()}};o?t._isVertical()?t._isRtl()?e.extend(f,{down:c,up:h,next:u,previous:d}):e.extend(f,{down:c,up:h,next:d,previous:u}):t._isRtl()?e.extend(f,{next:h,previous:c,down:d,up:u}):e.extend(f,{next:c,previous:h,down:d,up:u}):t._isRtl()?e.extend(f,{next:u,previous:d,down:c,up:h}):e.extend(f,{next:d,previous:u,down:c,up:h});l.handleKey(i,"DropdownMenu",f)}))}},{key:"_addBodyHandler",value:function _addBodyHandler(){var t=this;var i=e(document.body);this._removeBodyHandler();i.on("click.zf.dropdownMenu tap.zf.dropdownMenu",(function(i){var n=!!e(i.target).closest(t.$element).length;if(!n){t._hide();t._removeBodyHandler()}}))}},{key:"_removeBodyHandler",value:function _removeBodyHandler(){e(document.body).off("click.zf.dropdownMenu tap.zf.dropdownMenu")}
/**
     * Opens a dropdown pane, and checks for collisions first.
     * @param {jQuery} $sub - ul element that is a submenu to show
     * @function
     * @private
     * @fires DropdownMenu#show
     */},{key:"_show",value:function _show(t){var i=this.$tabs.index(this.$tabs.filter((function(i,n){return e(n).find(t).length>0})));var n=t.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");this._hide(n,i);t.css("visibility","hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");var s=a.ImNotTouchingYou(t,null,true);if(!s){var o="left"===this.options.alignment?"-right":"-left",r=t.parent(".is-dropdown-submenu-parent");r.removeClass("opens".concat(o)).addClass("opens-".concat(this.options.alignment));s=a.ImNotTouchingYou(t,null,true);s||r.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner");this.changed=true}t.css("visibility","");this.options.closeOnClick&&this._addBodyHandler();this.$element.trigger("show.zf.dropdownMenu",[t])}
/**
     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
     * @function
     * @param {jQuery} $elem - element with a submenu to hide
     * @param {Number} idx - index of the $tabs collection to hide
     * @fires DropdownMenu#hide
     * @private
     */},{key:"_hide",value:function _hide(e,t){var i;i=e&&e.length?e:"undefined"!==typeof t?this.$tabs.not((function(e){return e===t})):this.$element;var n=i.hasClass("is-active")||i.find(".is-active").length>0;if(n){var s=i.find("li.is-active");s.add(i).attr({"data-is-click":false}).removeClass("is-active");i.find("ul.js-dropdown-active").removeClass("js-dropdown-active");if(this.changed||i.find("opens-inner").length){var a="left"===this.options.alignment?"right":"left";i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(a));this.changed=false}clearTimeout(s.data("_delay"));this._removeBodyHandler();this.$element.trigger("hide.zf.dropdownMenu",[i])}}},{key:"_destroy",value:function _destroy(){this.$menuItems.off(".zf.dropdownMenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner");e(document.body).off(".zf.dropdownMenu");u.Burn(this.$element,"dropdown")}}]);return DropdownMenu}(C);H.defaults={
/**
   * Disallows hover events from opening submenus
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:false,
/**
   * Disallows hover on touch devices
   * @option
   * @type {boolean}
   * @default true
   */
disableHoverOnTouch:true,
/**
   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
   * @option
   * @type {boolean}
   * @default true
   */
autoclose:true,
/**
   * Amount of time to delay opening a submenu on hover event.
   * @option
   * @type {number}
   * @default 50
   */
hoverDelay:50,
/**
   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
   * @option
   * @type {boolean}
   * @default false
   */
clickOpen:false,
/**
   * Amount of time to delay closing a submenu on a mouseleave event.
   * @option
   * @type {number}
   * @default 500
   */
closingTime:500,
/**
   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow clicks on the body to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:true,
/**
   * Allow clicks on leaf anchor links to close any open submenus.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClickInside:true,
/**
   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'vertical'
   */
verticalClass:"vertical",
/**
   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
   * @option
   * @type {string}
   * @default 'align-right'
   */
rightClass:"align-right",
/**
   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
   * @option
   * @type {boolean}
   * @default true
   */
forceFollow:true};var M=function(t){_inherits(Equalizer,t);var n=_createSuper(Equalizer);function Equalizer(){_classCallCheck(this,Equalizer);return n.apply(this,arguments)}_createClass(Equalizer,[{key:"_setup",value:
/**
     * Creates a new instance of Equalizer.
     * @class
     * @name Equalizer
     * @fires Equalizer#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Equalizer.defaults,this.$element.data(),i);this.className="Equalizer";this._init()}},{key:"_init",value:function _init(){var t=this.$element.attr("data-equalizer")||"";var n=this.$element.find('[data-equalizer-watch="'.concat(t,'"]'));i._init();this.$watched=n.length?n:this.$element.find("[data-equalizer-watch]");this.$element.attr("data-resize",t||GetYoDigits(6,"eq"));this.$element.attr("data-mutate",t||GetYoDigits(6,"eq"));this.hasNested=this.$element.find("[data-equalizer]").length>0;this.isNested=this.$element.parentsUntil(document.body,"[data-equalizer]").length>0;this.isOn=false;this._bindHandler={onResizeMeBound:this._onResizeMe.bind(this),onPostEqualizedBound:this._onPostEqualized.bind(this)};var s=this.$element.find("img");var a;if(this.options.equalizeOn){a=this._checkMQ();e(window).on("changed.zf.mediaquery",this._checkMQ.bind(this))}else this._events();("undefined"!==typeof a&&false===a||"undefined"===typeof a)&&(s.length?onImagesLoaded(s,this._reflow.bind(this)):this._reflow())}},{key:"_pauseEvents",value:function _pauseEvents(){this.isOn=false;this.$element.off({".zf.equalizer":this._bindHandler.onPostEqualizedBound,"resizeme.zf.trigger":this._bindHandler.onResizeMeBound,"mutateme.zf.trigger":this._bindHandler.onResizeMeBound})}},{key:"_onResizeMe",value:function _onResizeMe(){this._reflow()}},{key:"_onPostEqualized",value:function _onPostEqualized(e){e.target!==this.$element[0]&&this._reflow()}},{key:"_events",value:function _events(){this._pauseEvents();if(this.hasNested)this.$element.on("postequalized.zf.equalizer",this._bindHandler.onPostEqualizedBound);else{this.$element.on("resizeme.zf.trigger",this._bindHandler.onResizeMeBound);this.$element.on("mutateme.zf.trigger",this._bindHandler.onResizeMeBound)}this.isOn=true}},{key:"_checkMQ",value:function _checkMQ(){var e=!i.is(this.options.equalizeOn);if(e){if(this.isOn){this._pauseEvents();this.$watched.css("height","auto")}}else this.isOn||this._events();return e}},{key:"_killswitch",value:function _killswitch(){}},{key:"_reflow",value:function _reflow(){if(!this.options.equalizeOnStack&&this._isStacked()){this.$watched.css("height","auto");return false}this.options.equalizeByRow?this.getHeightsByRow(this.applyHeightByRow.bind(this)):this.getHeights(this.applyHeight.bind(this))}},{key:"_isStacked",value:function _isStacked(){return!this.$watched[0]||!this.$watched[1]||this.$watched[0].getBoundingClientRect().top!==this.$watched[1].getBoundingClientRect().top}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} heights - An array of heights of children within Equalizer container
     */},{key:"getHeights",value:function getHeights(e){var t=[];for(var i=0,n=this.$watched.length;i<n;i++){this.$watched[i].style.height="auto";t.push(this.$watched[i].offsetHeight)}e(t)}
/**
     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
     * @param {Function} cb - A non-optional callback to return the heights array to.
     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     */},{key:"getHeightsByRow",value:function getHeightsByRow(t){var i=this.$watched.length?this.$watched.first().offset().top:0,n=[],s=0;n[s]=[];for(var a=0,o=this.$watched.length;a<o;a++){this.$watched[a].style.height="auto";var r=e(this.$watched[a]).offset().top;if(r!==i){s++;n[s]=[];i=r}n[s].push([this.$watched[a],this.$watched[a].offsetHeight])}for(var l=0,c=n.length;l<c;l++){var h=e(n[l]).map((function(){return this[1]})).get();var d=Math.max.apply(null,h);n[l].push(d)}t(n)}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
     * @param {array} heights - An array of heights of children within Equalizer container
     * @fires Equalizer#preequalized
     * @fires Equalizer#postequalized
     */},{key:"applyHeight",value:function applyHeight(e){var t=Math.max.apply(null,e);this.$element.trigger("preequalized.zf.equalizer");this.$watched.css("height",t);this.$element.trigger("postequalized.zf.equalizer")}
/**
     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
     * @fires Equalizer#preequalized
     * @fires Equalizer#preequalizedrow
     * @fires Equalizer#postequalizedrow
     * @fires Equalizer#postequalized
     */},{key:"applyHeightByRow",value:function applyHeightByRow(t){this.$element.trigger("preequalized.zf.equalizer");for(var i=0,n=t.length;i<n;i++){var s=t[i].length,a=t[i][s-1];if(s<=2)e(t[i][0][0]).css({height:"auto"});else{this.$element.trigger("preequalizedrow.zf.equalizer");for(var o=0,r=s-1;o<r;o++)e(t[i][o][0]).css({height:a});this.$element.trigger("postequalizedrow.zf.equalizer")}}this.$element.trigger("postequalized.zf.equalizer")}},{key:"_destroy",value:function _destroy(){this._pauseEvents();this.$watched.css("height","auto")}}]);return Equalizer}(C);M.defaults={
/**
   * Enable height equalization when stacked on smaller screens.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeOnStack:false,
/**
   * Enable height equalization row by row.
   * @option
   * @type {boolean}
   * @default false
   */
equalizeByRow:false,
/**
   * String representing the minimum breakpoint size the plugin should equalize heights on.
   * @option
   * @type {string}
   * @default ''
   */
equalizeOn:""};var P=function(t){_inherits(Interchange,t);var n=_createSuper(Interchange);function Interchange(){_classCallCheck(this,Interchange);return n.apply(this,arguments)}_createClass(Interchange,[{key:"_setup",value:
/**
     * Creates a new instance of Interchange.
     * @class
     * @name Interchange
     * @fires Interchange#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Interchange.defaults,this.$element.data(),i);this.rules=[];this.currentPath="";this.className="Interchange";k.init(e);this._init();this._events()}},{key:"_init",value:function _init(){i._init();var e=this.$element[0].id||GetYoDigits(6,"interchange");this.$element.attr({"data-resize":e,id:e});this._parseOptions();this._addBreakpoints();this._generateRules();this._reflow()}},{key:"_events",value:function _events(){var e=this;this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",(function(){return e._reflow()}))}},{key:"_reflow",value:function _reflow(){var e;for(var t in this.rules)if(this.rules.hasOwnProperty(t)){var i=this.rules[t];window.matchMedia(i.query).matches&&(e=i)}e&&this.replace(e.path)}},{key:"_parseOptions",value:function _parseOptions(){var e=["auto","src","background","html"];if("undefined"===typeof this.options.type)this.options.type="auto";else if(-1===e.indexOf(this.options.type)){console.warn('Warning: invalid value "'.concat(this.options.type,'" for Interchange option "type"'));this.options.type="auto"}}},{key:"_addBreakpoints",value:function _addBreakpoints(){for(var e in i.queries)if(i.queries.hasOwnProperty(e)){var t=i.queries[e];Interchange.SPECIAL_QUERIES[t.name]=t.value}}
/**
     * Checks the Interchange element for the provided media query + content pairings
     * @function
     * @private
     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
     */},{key:"_generateRules",value:function _generateRules(){var e=[];var t;t=this.options.rules?this.options.rules:this.$element.data("interchange");t="string"===typeof t?t.match(/\[.*?, .*?\]/g):t;for(var i in t)if(t.hasOwnProperty(i)){var n=t[i].slice(1,-1).split(", ");var s=n.slice(0,-1).join("");var a=n[n.length-1];Interchange.SPECIAL_QUERIES[a]&&(a=Interchange.SPECIAL_QUERIES[a]);e.push({path:s,query:a})}this.rules=e}
/**
     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
     * @function
     * @param {String} path - Path to the image or HTML partial.
     * @fires Interchange#replaced
     */},{key:"replace",value:function replace(t){var i=this;if(this.currentPath!==t){var n="replaced.zf.interchange";var s=this.options.type;"auto"===s&&(s="IMG"===this.$element[0].nodeName?"src":t.match(/\.(gif|jpe?g|png|svg|tiff)([?#].*)?/i)?"background":"html");if("src"===s)this.$element.attr("src",t).on("load",(function(){i.currentPath=t})).trigger(n);else if("background"===s){t=t.replace(/\(/g,"%28").replace(/\)/g,"%29");this.$element.css({"background-image":"url("+t+")"}).trigger(n)}else"html"===s&&e.get(t,(function(s){i.$element.html(s).trigger(n);e(s).foundation();i.currentPath=t}))}}},{key:"_destroy",value:function _destroy(){this.$element.off("resizeme.zf.trigger")}}]);return Interchange}(C);P.defaults={
/**
   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
   * @option
   * @type {?array}
   * @default null
   */
rules:null,
/**
   * Type of the responsive ressource to replace. It can take the following options:
   * - `auto` (default): choose the type according to the element tag or the ressource extension,
   * - `src`: replace the `[src]` attribute, recommended for images `<img>`.
   * - `background`: replace the `background-image` CSS property.
   * - `html`: replace the element content.
   * @option
   * @type {string}
   * @default 'auto'
   */
type:"auto"};P.SPECIAL_QUERIES={landscape:"screen and (orientation: landscape)",portrait:"screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"};var I=function(t){_inherits(SmoothScroll,t);var i=_createSuper(SmoothScroll);function SmoothScroll(){_classCallCheck(this,SmoothScroll);return i.apply(this,arguments)}_createClass(SmoothScroll,[{key:"_setup",value:
/**
     * Creates a new instance of SmoothScroll.
     * @class
     * @name SmoothScroll
     * @fires SmoothScroll#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},SmoothScroll.defaults,this.$element.data(),i);this.className="SmoothScroll";this._init()}},{key:"_init",value:function _init(){var e=this.$element[0].id||GetYoDigits(6,"smooth-scroll");this.$element.attr({id:e});this._events()}},{key:"_events",value:function _events(){this._linkClickListener=this._handleLinkClick.bind(this);this.$element.on("click.zf.smoothScroll",this._linkClickListener);this.$element.on("click.zf.smoothScroll",'a[href^="#"]',this._linkClickListener)}
/**
     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
     * @param {*} e - event
     * @function
     * @private
     */},{key:"_handleLinkClick",value:function _handleLinkClick(t){var i=this;if(e(t.currentTarget).is('a[href^="#"]')){var n=t.currentTarget.getAttribute("href");this._inTransition=true;SmoothScroll.scrollToLoc(n,this.options,(function(){i._inTransition=false}));t.preventDefault()}}},{key:"_destroy",value:function _destroy(){this.$element.off("click.zf.smoothScroll",this._linkClickListener);this.$element.off("click.zf.smoothScroll",'a[href^="#"]',this._linkClickListener)}}],[{key:"scrollToLoc",value:
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
     * @param {Object} options - The options to use.
     * @param {Function} callback - The callback function.
     * @static
     * @function
     */
function scrollToLoc(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:SmoothScroll.defaults;var n=arguments.length>2?arguments[2]:void 0;var s=e(t);if(!s.length)return false;var a=Math.round(s.offset().top-i.threshold/2-i.offset);e("html, body").stop(true).animate({scrollTop:a},i.animationDuration,i.animationEasing,(function(){"function"===typeof n&&n()}))}}]);return SmoothScroll}(C);I.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0};var q=function(t){_inherits(Magellan,t);var i=_createSuper(Magellan);function Magellan(){_classCallCheck(this,Magellan);return i.apply(this,arguments)}_createClass(Magellan,[{key:"_setup",value:
/**
     * Creates a new instance of Magellan.
     * @class
     * @name Magellan
     * @fires Magellan#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Magellan.defaults,this.$element.data(),i);this.className="Magellan";k.init(e);this._init();this.calcPoints()}},{key:"_init",value:function _init(){var t=this.$element[0].id||GetYoDigits(6,"magellan");this.$targets=e("[data-magellan-target]");this.$links=this.$element.find("a");this.$element.attr({"data-resize":t,"data-scroll":t,id:t});this.$active=e();this.scrollPos=parseInt(window.pageYOffset,10);this._events()}},{key:"calcPoints",value:function calcPoints(){var t=this,i=document.body,n=document.documentElement;this.points=[];this.winHeight=Math.round(Math.max(window.innerHeight,n.clientHeight));this.docHeight=Math.round(Math.max(i.scrollHeight,i.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight));this.$targets.each((function(){var i=e(this),n=Math.round(i.offset().top-t.options.threshold);i.targetPoint=n;t.points.push(n)}))}},{key:"_events",value:function _events(){var t=this;e(window).one("load",(function(){t.options.deepLinking&&location.hash&&t.scrollToLoc(location.hash);t.calcPoints();t._updateActive()}));t.onLoadListener=onLoad(e(window),(function(){t.$element.on({"resizeme.zf.trigger":t.reflow.bind(t),"scrollme.zf.trigger":t._updateActive.bind(t)}).on("click.zf.magellan",'a[href^="#"]',(function(e){e.preventDefault();var i=this.getAttribute("href");t.scrollToLoc(i)}))}));this._deepLinkScroll=function(){t.options.deepLinking&&t.scrollToLoc(window.location.hash)};e(window).on("hashchange",this._deepLinkScroll)}
/**
     * Function to scroll to a given location on the page.
     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
     * @function
     */},{key:"scrollToLoc",value:function scrollToLoc(e){this._inTransition=true;var t=this;var i={animationEasing:this.options.animationEasing,animationDuration:this.options.animationDuration,threshold:this.options.threshold,offset:this.options.offset};I.scrollToLoc(e,i,(function(){t._inTransition=false}))}},{key:"reflow",value:function reflow(){this.calcPoints();this._updateActive()}},{key:"_updateActive",value:function _updateActive(){var t=this;if(!this._inTransition){var i=parseInt(window.pageYOffset,10);var n=this.scrollPos>i;this.scrollPos=i;var s;if(i<this.points[0]-this.options.offset-(n?this.options.threshold:0));else if(i+this.winHeight===this.docHeight)s=this.points.length-1;else{var a=this.points.filter((function(e){return e-t.options.offset-(n?t.options.threshold:0)<=i}));s=a.length?a.length-1:0}var o=this.$active;var r="";if("undefined"!==typeof s){this.$active=this.$links.filter('[href="#'+this.$targets.eq(s).data("magellan-target")+'"]');this.$active.length&&(r=this.$active[0].getAttribute("href"))}else this.$active=e();var l=!(!this.$active.length&&!o.length)&&!this.$active.is(o);var c=r!==window.location.hash;if(l){o.removeClass(this.options.activeClass);this.$active.addClass(this.options.activeClass)}if(this.options.deepLinking&&c)if(window.history.pushState){var h=r||window.location.pathname+window.location.search;this.options.updateHistory?window.history.pushState({},"",h):window.history.replaceState({},"",h)}else window.location.hash=r;l&&this.$element.trigger("update.zf.magellan",[this.$active])}}},{key:"_destroy",value:function _destroy(){this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);if(this.options.deepLinking){var t=this.$active[0].getAttribute("href");window.location.hash.replace(t,"")}e(window).off("hashchange",this._deepLinkScroll);this.onLoadListener&&e(window).off(this.onLoadListener)}}]);return Magellan}(C);q.defaults={
/**
   * Amount of time, in ms, the animated scrolling should take between locations.
   * @option
   * @type {number}
   * @default 500
   */
animationDuration:500,
/**
   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
   * @option
   * @type {string}
   * @default 'linear'
   * @see {@link https://api.jquery.com/animate|Jquery animate}
   */
animationEasing:"linear",
/**
   * Number of pixels to use as a marker for location changes.
   * @option
   * @type {number}
   * @default 50
   */
threshold:50,
/**
   * Class applied to the active locations link on the magellan container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
activeClass:"is-active",
/**
   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
   * @option
   * @type {boolean}
   * @default false
   */
deepLinking:false,
/**
   * Update the browser history with the active link, if deep linking is enabled.
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:false,
/**
   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
   * @option
   * @type {number}
   * @default 0
   */
offset:0};var F=function(t){_inherits(OffCanvas,t);var n=_createSuper(OffCanvas);function OffCanvas(){_classCallCheck(this,OffCanvas);return n.apply(this,arguments)}_createClass(OffCanvas,[{key:"_setup",value:
/**
     * Creates a new instance of an off-canvas wrapper.
     * @class
     * @name OffCanvas
     * @fires OffCanvas#init
     * @param {Object} element - jQuery object to initialize.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,n){var s=this;this.className="OffCanvas";this.$element=t;this.options=e.extend({},OffCanvas.defaults,this.$element.data(),n);this.contentClasses={base:[],reveal:[]};this.$lastTrigger=e();this.$triggers=e();this.position="left";this.$content=e();this.nested=!!this.options.nested;this.$sticky=e();this.isInCanvas=false;e(["push","overlap"]).each((function(e,t){s.contentClasses.base.push("has-transition-"+t)}));e(["left","right","top","bottom"]).each((function(e,t){s.contentClasses.base.push("has-position-"+t);s.contentClasses.reveal.push("has-reveal-"+t)}));k.init(e);i._init();this._init();this._events();l.register("OffCanvas",{ESCAPE:"close"})}},{key:"_init",value:function _init(){var t=this.$element.attr("id");this.$element.attr("aria-hidden","true");this.options.contentId?this.$content=e("#"+this.options.contentId):this.$element.siblings("[data-off-canvas-content]").length?this.$content=this.$element.siblings("[data-off-canvas-content]").first():this.$content=this.$element.closest("[data-off-canvas-content]").first();this.options.contentId?this.options.contentId&&null===this.options.nested&&console.warn("Remember to use the nested option if using the content ID option!"):this.nested=0===this.$element.siblings("[data-off-canvas-content]").length;if(true===this.nested){this.options.transition="overlap";this.$element.removeClass("is-transition-push")}this.$element.addClass("is-transition-".concat(this.options.transition," is-closed"));this.$triggers=e(document).find('[data-open="'+t+'"], [data-close="'+t+'"], [data-toggle="'+t+'"]').attr("aria-expanded","false").attr("aria-controls",t);this.position=this.$element.is(".position-left, .position-top, .position-right, .position-bottom")?this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1]:this.position;if(true===this.options.contentOverlay){var i=document.createElement("div");var n="fixed"===e(this.$element).css("position")?"is-overlay-fixed":"is-overlay-absolute";i.setAttribute("class","js-off-canvas-overlay "+n);this.$overlay=e(i);"is-overlay-fixed"===n?e(this.$overlay).insertAfter(this.$element):this.$content.append(this.$overlay)}var s=new RegExp(RegExpEscape(this.options.revealClass)+"([^\\s]+)","g");var a=s.exec(this.$element[0].className);if(a){this.options.isRevealed=true;this.options.revealOn=this.options.revealOn||a[1]}if(true===this.options.isRevealed&&this.options.revealOn){this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));this._setMQChecker()}this.options.transitionTime&&this.$element.css("transition-duration",this.options.transitionTime);this.$sticky=this.$content.find("[data-off-canvas-sticky]");this.$sticky.length>0&&"push"===this.options.transition&&(this.options.contentScroll=false);var o=this.$element.attr("class").match(/\bin-canvas-for-(\w+)/);o&&2===o.length?this.options.inCanvasOn=o[1]:this.options.inCanvasOn&&this.$element.addClass("in-canvas-for-".concat(this.options.inCanvasOn));this.options.inCanvasOn&&this._checkInCanvas();this._removeContentClasses()}},{key:"_events",value:function _events(){var t=this;this.$element.off(".zf.trigger .zf.offCanvas").on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":this.close.bind(this),"toggle.zf.trigger":this.toggle.bind(this),"keydown.zf.offCanvas":this._handleKeyboard.bind(this)});if(true===this.options.closeOnClick){var i=this.options.contentOverlay?this.$overlay:this.$content;i.on({"click.zf.offCanvas":this.close.bind(this)})}this.options.inCanvasOn&&e(window).on("changed.zf.mediaquery",(function(){t._checkInCanvas()}))}},{key:"_setMQChecker",value:function _setMQChecker(){var t=this;this.onLoadListener=onLoad(e(window),(function(){i.atLeast(t.options.revealOn)&&t.reveal(true)}));e(window).on("changed.zf.mediaquery",(function(){i.atLeast(t.options.revealOn)?t.reveal(true):t.reveal(false)}))}},{key:"_checkInCanvas",value:function _checkInCanvas(){this.isInCanvas=i.atLeast(this.options.inCanvasOn);true===this.isInCanvas&&this.close()}
/**
     * Removes the CSS transition/position classes of the off-canvas content container.
     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_removeContentClasses",value:function _removeContentClasses(e){"boolean"!==typeof e?this.$content.removeClass(this.contentClasses.base.join(" ")):false===e&&this.$content.removeClass("has-reveal-".concat(this.position))}
/**
     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
     * Beforehand any transition/position class gets removed.
     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
     * @private
     */},{key:"_addContentClasses",value:function _addContentClasses(e){this._removeContentClasses(e);"boolean"!==typeof e?this.$content.addClass("has-transition-".concat(this.options.transition," has-position-").concat(this.position)):true===e&&this.$content.addClass("has-reveal-".concat(this.position))}},{key:"_fixStickyElements",value:function _fixStickyElements(){this.$sticky.each((function(t,i){var n=e(i);if("fixed"===n.css("position")){var s=parseInt(n.css("top"),10);n.data("offCanvasSticky",{top:s});var a=e(document).scrollTop()+s;n.css({top:"".concat(a,"px"),width:"100%",transition:"none"})}}))}},{key:"_unfixStickyElements",value:function _unfixStickyElements(){this.$sticky.each((function(t,i){var n=e(i);var s=n.data("offCanvasSticky");if("object"===_typeof(s)){n.css({top:"".concat(s.top,"px"),width:"",transition:""});n.data("offCanvasSticky","")}}))}
/**
     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
     * @param {Boolean} isRevealed - true if element should be revealed.
     * @function
     */},{key:"reveal",value:function reveal(e){if(e){this.close();this.isRevealed=true;this.$element.attr("aria-hidden","false");this.$element.off("open.zf.trigger toggle.zf.trigger");this.$element.removeClass("is-closed")}else{this.isRevealed=false;this.$element.attr("aria-hidden","true");this.$element.off("open.zf.trigger toggle.zf.trigger").on({"open.zf.trigger":this.open.bind(this),"toggle.zf.trigger":this.toggle.bind(this)});this.$element.addClass("is-closed")}this._addContentClasses(e)}},{key:"_stopScrolling",value:function _stopScrolling(){return false}
/**
     * Save current finger y-position
     * @param event
     * @private
     */},{key:"_recordScrollable",value:function _recordScrollable(e){var t=this;t.lastY=e.touches[0].pageY}
/**
     * Prevent further scrolling when it hits the edges
     * @param event
     * @private
     */},{key:"_preventDefaultAtEdges",value:function _preventDefaultAtEdges(e){var t=this;var i=e.data;var n=t.lastY-e.touches[0].pageY;t.lastY=e.touches[0].pageY;i._canScroll(n,t)||e.preventDefault()}
/**
     * Handle continuous scrolling of scrollbox
     * Don't bubble up to _preventDefaultAtEdges
     * @param event
     * @private
     */},{key:"_scrollboxTouchMoved",value:function _scrollboxTouchMoved(e){var t=this;var i=e.data;var n=t.closest("[data-off-canvas], [data-off-canvas-scrollbox-outer]");var s=t.lastY-e.touches[0].pageY;n.lastY=t.lastY=e.touches[0].pageY;e.stopPropagation();i._canScroll(s,t)||(i._canScroll(s,n)?n.scrollTop+=s:e.preventDefault())}
/**
     * Detect possibility of scrolling
     * @param delta
     * @param elem
     * @returns boolean
     * @private
     */},{key:"_canScroll",value:function _canScroll(e,t){var i=e<0;var n=e>0;var s=t.scrollTop>0;var a=t.scrollTop<t.scrollHeight-t.clientHeight;return i&&s||n&&a}
/**
     * Opens the off-canvas menu.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     * @fires OffCanvas#opened
     * @todo also trigger 'open' event?
     */},{key:"open",value:function open(t,i){var n=this;if(!(this.$element.hasClass("is-open")||this.isRevealed||this.isInCanvas)){var s=this;i&&(this.$lastTrigger=i);"top"===this.options.forceTo?window.scrollTo(0,0):"bottom"===this.options.forceTo&&window.scrollTo(0,document.body.scrollHeight);this.options.transitionTime&&"overlap"!==this.options.transition?this.$element.siblings("[data-off-canvas-content]").css("transition-duration",this.options.transitionTime):this.$element.siblings("[data-off-canvas-content]").css("transition-duration","");this.$element.addClass("is-open").removeClass("is-closed");this.$triggers.attr("aria-expanded","true");this.$element.attr("aria-hidden","false");this.$content.addClass("is-open-"+this.position);if(false===this.options.contentScroll){e("body").addClass("is-off-canvas-open").on("touchmove",this._stopScrolling);this.$element.on("touchstart",this._recordScrollable);this.$element.on("touchmove",this,this._preventDefaultAtEdges);this.$element.on("touchstart","[data-off-canvas-scrollbox]",this._recordScrollable);this.$element.on("touchmove","[data-off-canvas-scrollbox]",this,this._scrollboxTouchMoved)}true===this.options.contentOverlay&&this.$overlay.addClass("is-visible");true===this.options.closeOnClick&&true===this.options.contentOverlay&&this.$overlay.addClass("is-closable");true===this.options.autoFocus&&this.$element.one(transitionend(this.$element),(function(){if(s.$element.hasClass("is-open")){var e=s.$element.find("[data-autofocus]");e.length?e.eq(0).focus():s.$element.find("a, button").eq(0).focus()}}));if(true===this.options.trapFocus){this.$content.attr("tabindex","-1");l.trapFocus(this.$element)}"push"===this.options.transition&&this._fixStickyElements();this._addContentClasses();this.$element.trigger("opened.zf.offCanvas");this.$element.one(transitionend(this.$element),(function(){n.$element.trigger("openedEnd.zf.offCanvas")}))}}
/**
     * Closes the off-canvas menu.
     * @function
     * @param {Function} cb - optional cb to fire after closure.
     * @fires OffCanvas#close
     * @fires OffCanvas#closed
     */},{key:"close",value:function close(){var t=this;if(this.$element.hasClass("is-open")&&!this.isRevealed){this.$element.trigger("close.zf.offCanvas");this.$element.removeClass("is-open");this.$element.attr("aria-hidden","true");this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom");true===this.options.contentOverlay&&this.$overlay.removeClass("is-visible");true===this.options.closeOnClick&&true===this.options.contentOverlay&&this.$overlay.removeClass("is-closable");this.$triggers.attr("aria-expanded","false");this.$element.one(transitionend(this.$element),(function(){t.$element.addClass("is-closed");t._removeContentClasses();"push"===t.options.transition&&t._unfixStickyElements();if(false===t.options.contentScroll){e("body").removeClass("is-off-canvas-open").off("touchmove",t._stopScrolling);t.$element.off("touchstart",t._recordScrollable);t.$element.off("touchmove",t._preventDefaultAtEdges);t.$element.off("touchstart","[data-off-canvas-scrollbox]",t._recordScrollable);t.$element.off("touchmove","[data-off-canvas-scrollbox]",t._scrollboxTouchMoved)}if(true===t.options.trapFocus){t.$content.removeAttr("tabindex");l.releaseFocus(t.$element)}t.$element.trigger("closed.zf.offCanvas")}))}}
/**
     * Toggles the off-canvas menu open or closed.
     * @function
     * @param {Object} event - Event object passed from listener.
     * @param {jQuery} trigger - element that triggered the off-canvas to open.
     */},{key:"toggle",value:function toggle(e,t){this.$element.hasClass("is-open")?this.close(e,t):this.open(e,t)}},{key:"_handleKeyboard",value:function _handleKeyboard(e){var t=this;l.handleKey(e,"OffCanvas",{close:function close(){t.close();t.$lastTrigger.focus();return true},handled:function handled(){e.preventDefault()}})}},{key:"_destroy",value:function _destroy(){this.close();this.$element.off(".zf.trigger .zf.offCanvas");this.$overlay.off(".zf.offCanvas");this.onLoadListener&&e(window).off(this.onLoadListener)}}]);return OffCanvas}(C);F.defaults={
/**
   * Allow the user to click outside of the menu to close it.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:true,
/**
   * Adds an overlay on top of `[data-off-canvas-content]`.
   * @option
   * @type {boolean}
   * @default true
   */
contentOverlay:true,
/**
   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
   * @option
   * @type {?string}
   * @default null
   */
contentId:null,
/**
   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
   * @option
   * @type {boolean}
   * @default null
   */
nested:null,
/**
   * Enable/disable scrolling of the main content when an off canvas panel is open.
   * @option
   * @type {boolean}
   * @default true
   */
contentScroll:true,
/**
   * Amount of time the open and close transition requires, including the appropriate milliseconds (`ms`) or seconds (`s`) unit (e.g. `500ms`, `.75s`) If none selected, pulls from body style.
   * @option
   * @type {string}
   * @default null
   */
transitionTime:null,
/**
   * Type of transition for the OffCanvas menu. Options are 'push', 'detached' or 'slide'.
   * @option
   * @type {string}
   * @default push
   */
transition:"push",
/**
   * Force the page to scroll to top or bottom on open.
   * @option
   * @type {?string}
   * @default null
   */
forceTo:null,
/**
   * Allow the OffCanvas to remain open for certain breakpoints.
   * @option
   * @type {boolean}
   * @default false
   */
isRevealed:false,
/**
   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
   * @option
   * @type {?string}
   * @default null
   */
revealOn:null,
/**
   * Breakpoint at which the off-canvas gets moved into canvas content and acts as regular page element.
   * @option
   * @type {?string}
   * @default null
   */
inCanvasOn:null,
/**
   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
   * @option
   * @type {boolean}
   * @default true
   */
autoFocus:true,
/**
   * Class used to force an OffCanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
   * @option
   * @type {string}
   * @default reveal-for-
   * @todo improve the regex testing for this.
   */
revealClass:"reveal-for-",
/**
   * Triggers optional focus trapping when opening an OffCanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
   * @option
   * @type {boolean}
   * @default false
   */
trapFocus:false};var B=function(t){_inherits(Orbit,t);var i=_createSuper(Orbit);function Orbit(){_classCallCheck(this,Orbit);return i.apply(this,arguments)}_createClass(Orbit,[{key:"_setup",value:
/**
    * Creates a new instance of an orbit carousel.
    * @class
    * @name Orbit
    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
    * @param {Object} options - Overrides to the default plugin settings.
    */
function _setup(t,i){this.$element=t;this.options=e.extend({},Orbit.defaults,this.$element.data(),i);this.className="Orbit";f.init(e);this._init();l.register("Orbit",{ltr:{ARROW_RIGHT:"next",ARROW_LEFT:"previous"},rtl:{ARROW_LEFT:"next",ARROW_RIGHT:"previous"}})}},{key:"_init",value:function _init(){this._reset();this.$wrapper=this.$element.find(".".concat(this.options.containerClass));this.$slides=this.$element.find(".".concat(this.options.slideClass));var e=this.$element.find("img"),t=this.$slides.filter(".is-active"),i=this.$element[0].id||GetYoDigits(6,"orbit");this.$element.attr({"data-resize":i,id:i});t.length||this.$slides.eq(0).addClass("is-active");this.options.useMUI||this.$slides.addClass("no-motionui");e.length?onImagesLoaded(e,this._prepareForOrbit.bind(this)):this._prepareForOrbit();this.options.bullets&&this._loadBullets();this._events();this.options.autoPlay&&this.$slides.length>1&&this.geoSync();this.options.accessible&&this.$wrapper.attr("tabindex",0)}},{key:"_loadBullets",value:function _loadBullets(){this.$bullets=this.$element.find(".".concat(this.options.boxOfBullets)).find("button")}},{key:"geoSync",value:function geoSync(){var e=this;this.timer=new Timer(this.$element,{duration:this.options.timerDelay,infinite:false},(function(){e.changeSlide(true)}));this.timer.start()}},{key:"_prepareForOrbit",value:function _prepareForOrbit(){this._setWrapperHeight()}
/**
    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
    * @function
    * @private
    * @param {Function} cb - a callback function to fire when complete.
    */},{key:"_setWrapperHeight",value:function _setWrapperHeight(t){var i,n=0,s=0,a=this;this.$slides.each((function(){i=this.getBoundingClientRect().height;e(this).attr("data-slide",s);/mui/g.test(e(this)[0].className)||a.$slides.filter(".is-active")[0]===a.$slides.eq(s)[0]||e(this).css({display:"none"});n=i>n?i:n;s++}));if(s===this.$slides.length){this.$wrapper.css({height:n});t&&t(n)}}},{key:"_setSlideHeight",value:function _setSlideHeight(t){this.$slides.each((function(){e(this).css("max-height",t)}))}},{key:"_events",value:function _events(){var t=this;this.$element.off(".resizeme.zf.trigger").on({"resizeme.zf.trigger":this._prepareForOrbit.bind(this)});if(this.$slides.length>1){this.options.swipe&&this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit",(function(e){e.preventDefault();t.changeSlide(true)})).on("swiperight.zf.orbit",(function(e){e.preventDefault();t.changeSlide(false)}));if(this.options.autoPlay){this.$slides.on("click.zf.orbit",(function(){t.$element.data("clickedOn",!t.$element.data("clickedOn"));t.timer[t.$element.data("clickedOn")?"pause":"start"]()}));this.options.pauseOnHover&&this.$element.on("mouseenter.zf.orbit",(function(){t.timer.pause()})).on("mouseleave.zf.orbit",(function(){t.$element.data("clickedOn")||t.timer.start()}))}if(this.options.navButtons){var i=this.$element.find(".".concat(this.options.nextClass,", .").concat(this.options.prevClass));i.attr("tabindex",0).on("click.zf.orbit touchend.zf.orbit",(function(i){i.preventDefault();t.changeSlide(e(this).hasClass(t.options.nextClass))}))}this.options.bullets&&this.$bullets.on("click.zf.orbit touchend.zf.orbit",(function(){if(/is-active/g.test(this.className))return false;var i=e(this).data("slide"),n=i>t.$slides.filter(".is-active").data("slide"),s=t.$slides.eq(i);t.changeSlide(n,s,i)}));this.options.accessible&&this.$wrapper.add(this.$bullets).on("keydown.zf.orbit",(function(i){l.handleKey(i,"Orbit",{next:function next(){t.changeSlide(true)},previous:function previous(){t.changeSlide(false)},handled:function handled(){e(i.target).is(t.$bullets)&&t.$bullets.filter(".is-active").focus()}})}))}}},{key:"_reset",value:function _reset(){if("undefined"!==typeof this.$slides&&this.$slides.length>1){this.$element.off(".zf.orbit").find("*").off(".zf.orbit");this.options.autoPlay&&this.timer.restart();this.$slides.each((function(t){e(t).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()}));this.$slides.first().addClass("is-active").show();this.$element.trigger("slidechange.zf.orbit",[this.$slides.first()]);this.options.bullets&&this._updateBullets(0)}}
/**
    * Changes the current slide to a new one.
    * @function
    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
    * @fires Orbit#slidechange
    */},{key:"changeSlide",value:function changeSlide(e,t,i){if(this.$slides){var n=this.$slides.filter(".is-active").eq(0);if(/mui/g.test(n[0].className))return false;var s,a=this.$slides.first(),o=this.$slides.last(),r=e?"Right":"Left",l=e?"Left":"Right",c=this;s=t||(e?this.options.infiniteWrap?n.next(".".concat(this.options.slideClass)).length?n.next(".".concat(this.options.slideClass)):a:n.next(".".concat(this.options.slideClass)):this.options.infiniteWrap?n.prev(".".concat(this.options.slideClass)).length?n.prev(".".concat(this.options.slideClass)):o:n.prev(".".concat(this.options.slideClass)));if(s.length){this.$element.trigger("beforeslidechange.zf.orbit",[n,s]);if(this.options.bullets){i=i||this.$slides.index(s);this._updateBullets(i)}if(this.options.useMUI&&!this.$element.is(":hidden")){d.animateIn(s.addClass("is-active"),this.options["animInFrom".concat(r)],(function(){s.css({display:"block"}).attr("aria-live","polite")}));d.animateOut(n.removeClass("is-active"),this.options["animOutTo".concat(l)],(function(){n.removeAttr("aria-live");c.options.autoPlay&&!c.timer.isPaused&&c.timer.restart()}))}else{n.removeClass("is-active is-in").removeAttr("aria-live").hide();s.addClass("is-active is-in").attr("aria-live","polite").show();this.options.autoPlay&&!this.timer.isPaused&&this.timer.restart()}this.$element.trigger("slidechange.zf.orbit",[s])}}}
/**
    * Updates the active state of the bullets, if displayed.
    * Move the descriptor of the current slide `[data-slide-active-label]` to the newly active bullet.
    * If no `[data-slide-active-label]` is set, will move the exceeding `span` element.
    *
    * @function
    * @private
    * @param {Number} idx - the index of the current slide.
    */},{key:"_updateBullets",value:function _updateBullets(t){var i=this.$bullets.filter(".is-active");var n=this.$bullets.not(".is-active");var s=this.$bullets.eq(t);i.removeClass("is-active").blur();s.addClass("is-active");var a=i.children("[data-slide-active-label]").last();if(!a.length){var o=i.children("span");var r=n.toArray().map((function(t){return e(t).children("span").length}));if(r.every((function(e){return e<o.length}))){a=o.last();a.attr("data-slide-active-label","")}}if(a.length){a.detach();s.append(a)}}},{key:"_destroy",value:function _destroy(){this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()}}]);return Orbit}(C);B.defaults={
/**
  * Tells the JS to look for and loadBullets.
  * @option
   * @type {boolean}
  * @default true
  */
bullets:true,
/**
  * Tells the JS to apply event listeners to nav buttons
  * @option
   * @type {boolean}
  * @default true
  */
navButtons:true,
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-right'
  */
animInFromRight:"slide-in-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-right'
  */
animOutToRight:"slide-out-right",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-in-left'
  *
  */
animInFromLeft:"slide-in-left",
/**
  * motion-ui animation class to apply
  * @option
   * @type {string}
  * @default 'slide-out-left'
  */
animOutToLeft:"slide-out-left",
/**
  * Allows Orbit to automatically animate on page load.
  * @option
   * @type {boolean}
  * @default true
  */
autoPlay:true,
/**
  * Amount of time, in ms, between slide transitions
  * @option
   * @type {number}
  * @default 5000
  */
timerDelay:5e3,
/**
  * Allows Orbit to infinitely loop through the slides
  * @option
   * @type {boolean}
  * @default true
  */
infiniteWrap:true,
/**
  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
  * @option
   * @type {boolean}
  * @default true
  */
swipe:true,
/**
  * Allows the timing function to pause animation on hover.
  * @option
   * @type {boolean}
  * @default true
  */
pauseOnHover:true,
/**
  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
  * @option
   * @type {boolean}
  * @default true
  */
accessible:true,
/**
  * Class applied to the container of Orbit
  * @option
   * @type {string}
  * @default 'orbit-container'
  */
containerClass:"orbit-container",
/**
  * Class applied to individual slides.
  * @option
   * @type {string}
  * @default 'orbit-slide'
  */
slideClass:"orbit-slide",
/**
  * Class applied to the bullet container. You're welcome.
  * @option
   * @type {string}
  * @default 'orbit-bullets'
  */
boxOfBullets:"orbit-bullets",
/**
  * Class applied to the `next` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-next'
  */
nextClass:"orbit-next",
/**
  * Class applied to the `previous` navigation button.
  * @option
   * @type {string}
  * @default 'orbit-previous'
  */
prevClass:"orbit-previous",
/**
  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
  * @option
   * @type {boolean}
  * @default true
  */
useMUI:true};var N={dropdown:{cssClass:"dropdown",plugin:H},drilldown:{cssClass:"drilldown",plugin:A},accordion:{cssClass:"accordion-menu",plugin:O}};var G=function(t){_inherits(ResponsiveMenu,t);var n=_createSuper(ResponsiveMenu);function ResponsiveMenu(){_classCallCheck(this,ResponsiveMenu);return n.apply(this,arguments)}_createClass(ResponsiveMenu,[{key:"_setup",value:
/**
     * Creates a new instance of a responsive menu.
     * @class
     * @name ResponsiveMenu
     * @fires ResponsiveMenu#init
     * @param {jQuery} element - jQuery object to make into a dropdown menu.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t){this.$element=e(t);this.rules=this.$element.data("responsive-menu");this.currentMq=null;this.currentPlugin=null;this.className="ResponsiveMenu";this._init();this._events()}},{key:"_init",value:function _init(){i._init();if("string"===typeof this.rules){var t={};var n=this.rules.split(" ");for(var s=0;s<n.length;s++){var a=n[s].split("-");var o=a.length>1?a[0]:"small";var r=a.length>1?a[1]:a[0];null!==N[r]&&(t[o]=N[r])}this.rules=t}e.isEmptyObject(this.rules)||this._checkMediaQueries();this.$element.attr("data-mutate",this.$element.attr("data-mutate")||GetYoDigits(6,"responsive-menu"))}},{key:"_events",value:function _events(){var t=this;e(window).on("changed.zf.mediaquery",(function(){t._checkMediaQueries()}))}},{key:"_checkMediaQueries",value:function _checkMediaQueries(){var t,n=this;e.each(this.rules,(function(e){i.atLeast(e)&&(t=e)}));if(t&&!(this.currentPlugin instanceof this.rules[t].plugin)){e.each(N,(function(e,t){n.$element.removeClass(t.cssClass)}));this.$element.addClass(this.rules[t].cssClass);this.currentPlugin&&this.currentPlugin.destroy();this.currentPlugin=new this.rules[t].plugin(this.$element,{})}}},{key:"_destroy",value:function _destroy(){this.currentPlugin.destroy();e(window).off(".zf.ResponsiveMenu")}}]);return ResponsiveMenu}(C);G.defaults={};var W=function(t){_inherits(ResponsiveToggle,t);var n=_createSuper(ResponsiveToggle);function ResponsiveToggle(){_classCallCheck(this,ResponsiveToggle);return n.apply(this,arguments)}_createClass(ResponsiveToggle,[{key:"_setup",value:
/**
     * Creates a new instance of Tab Bar.
     * @class
     * @name ResponsiveToggle
     * @fires ResponsiveToggle#init
     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=e(t);this.options=e.extend({},ResponsiveToggle.defaults,this.$element.data(),i);this.className="ResponsiveToggle";this._init();this._events()}},{key:"_init",value:function _init(){i._init();var t=this.$element.data("responsive-toggle");t||console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar.");this.$targetMenu=e("#".concat(t));this.$toggler=this.$element.find("[data-toggle]").filter((function(){var i=e(this).data("toggle");return i===t||""===i}));this.options=e.extend({},this.options,this.$targetMenu.data());if(this.options.animate){var n=this.options.animate.split(" ");this.animationIn=n[0];this.animationOut=n[1]||null}this._update()}},{key:"_events",value:function _events(){this._updateMqHandler=this._update.bind(this);e(window).on("changed.zf.mediaquery",this._updateMqHandler);this.$toggler.on("click.zf.responsiveToggle",this.toggleMenu.bind(this))}},{key:"_update",value:function _update(){if(i.atLeast(this.options.hideFor)){this.$element.hide();this.$targetMenu.show()}else{this.$element.show();this.$targetMenu.hide()}}},{key:"toggleMenu",value:function toggleMenu(){var e=this;if(!i.atLeast(this.options.hideFor))if(this.options.animate)this.$targetMenu.is(":hidden")?d.animateIn(this.$targetMenu,this.animationIn,(function(){e.$element.trigger("toggled.zf.responsiveToggle");e.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")})):d.animateOut(this.$targetMenu,this.animationOut,(function(){e.$element.trigger("toggled.zf.responsiveToggle")}));else{this.$targetMenu.toggle(0);this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger");this.$element.trigger("toggled.zf.responsiveToggle")}}},{key:"_destroy",value:function _destroy(){this.$element.off(".zf.responsiveToggle");this.$toggler.off(".zf.responsiveToggle");e(window).off("changed.zf.mediaquery",this._updateMqHandler)}}]);return ResponsiveToggle}(C);W.defaults={
/**
   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
   * @option
   * @type {string}
   * @default 'medium'
   */
hideFor:"medium",
/**
   * To decide if the toggle should be animated or not.
   * @option
   * @type {boolean}
   * @default false
   */
animate:false};var Y=function(t){_inherits(Reveal,t);var n=_createSuper(Reveal);function Reveal(){_classCallCheck(this,Reveal);return n.apply(this,arguments)}_createClass(Reveal,[{key:"_setup",value:
/**
     * Creates a new instance of Reveal.
     * @class
     * @name Reveal
     * @param {jQuery} element - jQuery object to use for the modal.
     * @param {Object} options - optional parameters.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Reveal.defaults,this.$element.data(),i);this.className="Reveal";this._init();f.init(e);k.init(e);l.register("Reveal",{ESCAPE:"close"})}},{key:"_init",value:function _init(){var t=this;i._init();this.id=this.$element.attr("id");this.isActive=false;this.cached={mq:i.current};this.$anchor=e('[data-open="'.concat(this.id,'"]')).length?e('[data-open="'.concat(this.id,'"]')):e('[data-toggle="'.concat(this.id,'"]'));this.$anchor.attr({"aria-controls":this.id,"aria-haspopup":"dialog",tabindex:0});if(this.options.fullScreen||this.$element.hasClass("full")){this.options.fullScreen=true;this.options.overlay=false}this.options.overlay&&!this.$overlay&&(this.$overlay=this._makeOverlay(this.id));this.$element.attr({role:"dialog","aria-hidden":true,"data-yeti-box":this.id,"data-resize":this.id});if(this.$overlay)this.$element.detach().appendTo(this.$overlay);else{this.$element.detach().appendTo(e(this.options.appendTo));this.$element.addClass("without-overlay")}this._events();this.options.deepLink&&window.location.hash==="#".concat(this.id)&&(this.onLoadListener=onLoad(e(window),(function(){return t.open()})))}},{key:"_makeOverlay",value:function _makeOverlay(){var t="";this.options.additionalOverlayClasses&&(t=" "+this.options.additionalOverlayClasses);return e("<div></div>").addClass("reveal-overlay"+t).appendTo(this.options.appendTo)}},{key:"_updatePosition",value:function _updatePosition(){var t=this.$element.outerWidth();var i=e(window).width();var n=this.$element.outerHeight();var s=e(window).height();var a,o=null;a="auto"===this.options.hOffset?parseInt((i-t)/2,10):parseInt(this.options.hOffset,10);"auto"===this.options.vOffset?o=n>s?parseInt(Math.min(100,s/10),10):parseInt((s-n)/4,10):null!==this.options.vOffset&&(o=parseInt(this.options.vOffset,10));null!==o&&this.$element.css({top:o+"px"});if(!this.$overlay||"auto"!==this.options.hOffset){this.$element.css({left:a+"px"});this.$element.css({margin:"0px"})}}},{key:"_events",value:function _events(){var t=this;var i=this;this.$element.on({"open.zf.trigger":this.open.bind(this),"close.zf.trigger":function closeZfTrigger(n,s){if(n.target===i.$element[0]||e(n.target).parents("[data-closable]")[0]===s)return t.close.apply(t)},"toggle.zf.trigger":this.toggle.bind(this),"resizeme.zf.trigger":function resizemeZfTrigger(){i._updatePosition()}});this.options.closeOnClick&&this.options.overlay&&this.$overlay.off(".zf.reveal").on("click.zf.dropdown tap.zf.dropdown",(function(t){t.target!==i.$element[0]&&!e.contains(i.$element[0],t.target)&&e.contains(document,t.target)&&i.close()}));this.options.deepLink&&e(window).on("hashchange.zf.reveal:".concat(this.id),this._handleState.bind(this))}},{key:"_handleState",value:function _handleState(){window.location.hash!=="#"+this.id||this.isActive?this.close():this.open()}
/**
    * Disables the scroll when Reveal is shown to prevent the background from shifting
    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
    */},{key:"_disableScroll",value:function _disableScroll(t){t=t||e(window).scrollTop();e(document).height()>e(window).height()&&e("html").css("top",-t)}
/**
    * Reenables the scroll when Reveal closes
    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
    */},{key:"_enableScroll",value:function _enableScroll(t){t=t||parseInt(e("html").css("top"),10);if(e(document).height()>e(window).height()){e("html").css("top","");e(window).scrollTop(-t)}}},{key:"open",value:function open(){var t=this;var i="#".concat(this.id);this.options.deepLink&&window.location.hash!==i&&(window.history.pushState?this.options.updateHistory?window.history.pushState({},"",i):window.history.replaceState({},"",i):window.location.hash=i);this.$activeAnchor=e(document.activeElement).is(this.$anchor)?e(document.activeElement):this.$anchor;this.isActive=true;this.$element.css({visibility:"hidden"}).show().scrollTop(0);this.options.overlay&&this.$overlay.css({visibility:"hidden"}).show();this._updatePosition();this.$element.hide().css({visibility:""});if(this.$overlay){this.$overlay.css({visibility:""}).hide();this.$element.hasClass("fast")?this.$overlay.addClass("fast"):this.$element.hasClass("slow")&&this.$overlay.addClass("slow")}this.options.multipleOpened||this.$element.trigger("closeme.zf.reveal",this.id);0===e(".reveal:visible").length&&this._disableScroll();var n=this;if(this.options.animationIn){var s=function afterAnimation(){n.$element.attr({"aria-hidden":false,tabindex:-1}).focus();n._addGlobalClasses();l.trapFocus(n.$element)};this.options.overlay&&d.animateIn(this.$overlay,"fade-in");d.animateIn(this.$element,this.options.animationIn,(function(){if(t.$element){t.focusableElements=l.findFocusable(t.$element);s()}}))}else{this.options.overlay&&this.$overlay.show(0);this.$element.show(this.options.showDelay)}this.$element.attr({"aria-hidden":false,tabindex:-1}).focus();l.trapFocus(this.$element);this._addGlobalClasses();this._addGlobalListeners();this.$element.trigger("open.zf.reveal")}},{key:"_addGlobalClasses",value:function _addGlobalClasses(){var t=function updateScrollbarClass(){e("html").toggleClass("zf-has-scroll",!!(e(document).height()>e(window).height()))};this.$element.on("resizeme.zf.trigger.revealScrollbarListener",(function(){return t()}));t();e("html").addClass("is-reveal-open")}},{key:"_removeGlobalClasses",value:function _removeGlobalClasses(){this.$element.off("resizeme.zf.trigger.revealScrollbarListener");e("html").removeClass("is-reveal-open");e("html").removeClass("zf-has-scroll")}},{key:"_addGlobalListeners",value:function _addGlobalListeners(){var t=this;if(this.$element){this.focusableElements=l.findFocusable(this.$element);this.options.overlay||!this.options.closeOnClick||this.options.fullScreen||e("body").on("click.zf.dropdown tap.zf.dropdown",(function(i){i.target!==t.$element[0]&&!e.contains(t.$element[0],i.target)&&e.contains(document,i.target)&&t.close()}));this.options.closeOnEsc&&e(window).on("keydown.zf.reveal",(function(e){l.handleKey(e,"Reveal",{close:function close(){t.options.closeOnEsc&&t.close()}})}))}}},{key:"close",value:function close(){if(!this.isActive||!this.$element.is(":visible"))return false;var t=this;if(this.options.animationOut){this.options.overlay&&d.animateOut(this.$overlay,"fade-out");d.animateOut(this.$element,this.options.animationOut,finishUp)}else{this.$element.hide(this.options.hideDelay);this.options.overlay?this.$overlay.hide(0,finishUp):finishUp()}this.options.closeOnEsc&&e(window).off("keydown.zf.reveal");!this.options.overlay&&this.options.closeOnClick&&e("body").off("click.zf.dropdown tap.zf.dropdown");this.$element.off("keydown.zf.reveal");function finishUp(){var i=parseInt(e("html").css("top"),10);0===e(".reveal:visible").length&&t._removeGlobalClasses();l.releaseFocus(t.$element);t.$element.attr("aria-hidden",true);0===e(".reveal:visible").length&&t._enableScroll(i);t.$element.trigger("closed.zf.reveal")}this.options.resetOnClose&&this.$element.html(this.$element.html());this.isActive=false;if(t.options.deepLink&&window.location.hash==="#".concat(this.id))if(window.history.replaceState){var i=window.location.pathname+window.location.search;this.options.updateHistory?window.history.pushState({},"",i):window.history.replaceState("",document.title,i)}else window.location.hash="";this.$activeAnchor.focus()}},{key:"toggle",value:function toggle(){this.isActive?this.close():this.open()}},{key:"_destroy",value:function _destroy(){if(this.options.overlay){this.$element.appendTo(e(this.options.appendTo));this.$overlay.hide().off().remove()}this.$element.hide().off();this.$anchor.off(".zf");e(window).off(".zf.reveal:".concat(this.id));this.onLoadListener&&e(window).off(this.onLoadListener);0===e(".reveal:visible").length&&this._removeGlobalClasses()}}]);return Reveal}(C);Y.defaults={
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationIn:"",
/**
   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
   * @option
   * @type {string}
   * @default ''
   */
animationOut:"",
/**
   * Time, in ms, to delay the opening of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
showDelay:0,
/**
   * Time, in ms, to delay the closing of a modal after a click if no animation used.
   * @option
   * @type {number}
   * @default 0
   */
hideDelay:0,
/**
   * Allows a click on the body/overlay to close the modal.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnClick:true,
/**
   * Allows the modal to close if the user presses the `ESCAPE` key.
   * @option
   * @type {boolean}
   * @default true
   */
closeOnEsc:true,
/**
   * If true, allows multiple modals to be displayed at once.
   * @option
   * @type {boolean}
   * @default false
   */
multipleOpened:false,
/**
   * Distance, in pixels, the modal should push down from the top of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
vOffset:"auto",
/**
   * Distance, in pixels, the modal should push in from the side of the screen.
   * @option
   * @type {number|string}
   * @default auto
   */
hOffset:"auto",
/**
   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
   * @option
   * @type {boolean}
   * @default false
   */
fullScreen:false,
/**
   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
   * @option
   * @type {boolean}
   * @default true
   */
overlay:true,
/**
   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
   * @option
   * @type {boolean}
   * @default false
   */
resetOnClose:false,
/**
   * Link the location hash to the modal.
   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:false,updateHistory:false,
/**
  * Allows the modal to append to custom div.
  * @option
  * @type {string}
  * @default "body"
  */
appendTo:"body",
/**
   * Allows adding additional class names to the reveal overlay.
   * @option
   * @type {string}
   * @default ''
   */
additionalOverlayClasses:""};var j=function(t){_inherits(Slider,t);var i=_createSuper(Slider);function Slider(){_classCallCheck(this,Slider);return i.apply(this,arguments)}_createClass(Slider,[{key:"_setup",value:
/**
     * Creates a new instance of a slider control.
     * @class
     * @name Slider
     * @param {jQuery} element - jQuery object to make into a slider control.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Slider.defaults,this.$element.data(),i);this.className="Slider";this.initialized=false;f.init(e);k.init(e);this._init();l.register("Slider",{ltr:{ARROW_RIGHT:"increase",ARROW_UP:"increase",ARROW_DOWN:"decrease",ARROW_LEFT:"decrease",SHIFT_ARROW_RIGHT:"increaseFast",SHIFT_ARROW_UP:"increaseFast",SHIFT_ARROW_DOWN:"decreaseFast",SHIFT_ARROW_LEFT:"decreaseFast",HOME:"min",END:"max"},rtl:{ARROW_LEFT:"increase",ARROW_RIGHT:"decrease",SHIFT_ARROW_LEFT:"increaseFast",SHIFT_ARROW_RIGHT:"decreaseFast"}})}},{key:"_init",value:function _init(){this.inputs=this.$element.find("input");this.handles=this.$element.find("[data-slider-handle]");this.$handle=this.handles.eq(0);this.$input=this.inputs.length?this.inputs.eq(0):e("#".concat(this.$handle.attr("aria-controls")));this.$fill=this.$element.find("[data-slider-fill]").css(this.options.vertical?"height":"width",0);if(this.options.disabled||this.$element.hasClass(this.options.disabledClass)){this.options.disabled=true;this.$element.addClass(this.options.disabledClass)}if(!this.inputs.length){this.inputs=e().add(this.$input);this.options.binding=true}this._setInitAttr(0);if(this.handles[1]){this.options.doubleSided=true;this.$handle2=this.handles.eq(1);this.$input2=this.inputs.length>1?this.inputs.eq(1):e("#".concat(this.$handle2.attr("aria-controls")));this.inputs[1]||(this.inputs=this.inputs.add(this.$input2));this._setInitAttr(1)}this.setHandles();this._events();this.initialized=true}},{key:"setHandles",value:function setHandles(){var e=this;this.handles[1]?this._setHandlePos(this.$handle,this.inputs.eq(0).val(),(function(){e._setHandlePos(e.$handle2,e.inputs.eq(1).val())})):this._setHandlePos(this.$handle,this.inputs.eq(0).val())}},{key:"_reflow",value:function _reflow(){this.setHandles()}
/**
    * @function
    * @private
    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
    */},{key:"_pctOfBar",value:function _pctOfBar(e){var t=percent(e-this.options.start,this.options.end-this.options.start);switch(this.options.positionValueFunction){case"pow":t=this._logTransform(t);break;case"log":t=this._powTransform(t);break}return t.toFixed(2)}
/**
    * @function
    * @private
    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
    */},{key:"_value",value:function _value(e){switch(this.options.positionValueFunction){case"pow":e=this._powTransform(e);break;case"log":e=this._logTransform(e);break}var t;t=this.options.vertical?parseFloat(this.options.end)+e*(this.options.start-this.options.end):(this.options.end-this.options.start)*e+parseFloat(this.options.start);return t}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
    */},{key:"_logTransform",value:function _logTransform(e){return baseLog(this.options.nonLinearBase,e*(this.options.nonLinearBase-1)+1)}
/**
    * @function
    * @private
    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
    */},{key:"_powTransform",value:function _powTransform(e){return(Math.pow(this.options.nonLinearBase,e)-1)/(this.options.nonLinearBase-1)}
/**
     * Sets the position of the selected handle and fill bar.
     * @function
     * @private
     * @param {jQuery} $hndl - the selected handle to move.
     * @param {Number} location - floating point between the start and end values of the slider bar.
     * @param {Function} cb - callback function to fire on completion.
     * @fires Slider#moved
     * @fires Slider#changed
     */},{key:"_setHandlePos",value:function _setHandlePos(e,t,i){if(!this.$element.hasClass(this.options.disabledClass)){t=parseFloat(t);t<this.options.start?t=this.options.start:t>this.options.end&&(t=this.options.end);var n=this.options.doubleSided;if(n)if(0===this.handles.index(e)){var s=parseFloat(this.$handle2.attr("aria-valuenow"));t=t>=s?s-this.options.step:t}else{var a=parseFloat(this.$handle.attr("aria-valuenow"));t=t<=a?a+this.options.step:t}var o=this,r=this.options.vertical,l=r?"height":"width",c=r?"top":"left",h=e[0].getBoundingClientRect()[l],d=this.$element[0].getBoundingClientRect()[l],u=this._pctOfBar(t),f=(d-h)*u,p=(100*percent(f,d)).toFixed(this.options.decimal);t=parseFloat(t.toFixed(this.options.decimal));var v={};this._setValues(e,t);if(n){var g,m=0===this.handles.index(e),y=Math.floor(100*percent(h,d));if(m){v[c]="".concat(p,"%");g=parseFloat(this.$handle2[0].style[c])-p+y;i&&"function"===typeof i&&i()}else{var _=parseFloat(this.$handle[0].style[c]);g=p-(isNaN(_)?(this.options.initialStart-this.options.start)/((this.options.end-this.options.start)/100):_)+y}v["min-".concat(l)]="".concat(g,"%")}var b=this.$element.data("dragging")?1e3/60:this.options.moveTime;Move(b,e,(function(){isNaN(p)?e.css(c,"".concat(100*u,"%")):e.css(c,"".concat(p,"%"));o.options.doubleSided?o.$fill.css(v):o.$fill.css(l,"".concat(100*u,"%"))}));if(this.initialized){this.$element.one("finished.zf.animate",(function(){o.$element.trigger("moved.zf.slider",[e])}));clearTimeout(o.timeout);o.timeout=setTimeout((function(){o.$element.trigger("changed.zf.slider",[e])}),o.options.changedDelay)}}}
/**
     * Sets the initial attribute for the slider element.
     * @function
     * @private
     * @param {Number} idx - index of the current handle/input to use.
     */},{key:"_setInitAttr",value:function _setInitAttr(e){var t=0===e?this.options.initialStart:this.options.initialEnd;var i=this.inputs.eq(e).attr("id")||GetYoDigits(6,"slider");this.inputs.eq(e).attr({id:i,max:this.options.end,min:this.options.start,step:this.options.step});this.inputs.eq(e).val(t);this.handles.eq(e).attr({role:"slider","aria-controls":i,"aria-valuemax":this.options.end,"aria-valuemin":this.options.start,"aria-valuenow":t,"aria-orientation":this.options.vertical?"vertical":"horizontal",tabindex:0})}
/**
     * Sets the input and `aria-valuenow` values for the slider element.
     * @function
     * @private
     * @param {jQuery} $handle - the currently selected handle.
     * @param {Number} val - floating point of the new value.
     */},{key:"_setValues",value:function _setValues(e,t){var i=this.options.doubleSided?this.handles.index(e):0;this.inputs.eq(i).val(t);e.attr("aria-valuenow",t)}
/**
     * Handles events on the slider element.
     * Calculates the new location of the current handle.
     * If there are two handles and the bar was clicked, it determines which handle to move.
     * @function
     * @private
     * @param {Object} e - the `event` object passed from the listener.
     * @param {jQuery} $handle - the current handle to calculate for, if selected.
     * @param {Number} val - floating point number for the new value of the slider.
     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
     */},{key:"_handleEvent",value:function _handleEvent(t,i,n){var s;if(n)s=this._adjustValue(null,n);else{t.preventDefault();var a=this,o=this.options.vertical,r=o?"height":"width",l=o?"top":"left",c=o?t.pageY:t.pageX,h=this.$element[0].getBoundingClientRect()[r],d=o?e(window).scrollTop():e(window).scrollLeft();var u=this.$element.offset()[l];t.clientY===t.pageY&&(c+=d);var f=c-u;var p;p=f<0?0:f>h?h:f;var v=percent(p,h);s=this._value(v);rtl()&&!this.options.vertical&&(s=this.options.end-s);s=a._adjustValue(null,s);if(!i){var g=absPosition(this.$handle,l,p,r),m=absPosition(this.$handle2,l,p,r);i=g<=m?this.$handle:this.$handle2}}this._setHandlePos(i,s)}
/**
     * Adjustes value for handle in regard to step value. returns adjusted value
     * @function
     * @private
     * @param {jQuery} $handle - the selected handle.
     * @param {Number} value - value to adjust. used if $handle is falsy
     */},{key:"_adjustValue",value:function _adjustValue(e,t){var i,n,s,a,o=this.options.step,r=parseFloat(o/2);i=e?parseFloat(e.attr("aria-valuenow")):t;n=i>=0?i%o:o+i%o;s=i-n;a=s+o;if(0===n)return i;i=i>=s+r?a:s;return i}},{key:"_events",value:function _events(){this._eventsForHandle(this.$handle);this.handles[1]&&this._eventsForHandle(this.$handle2)}
/**
     * Adds event listeners a particular handle
     * @function
     * @private
     * @param {jQuery} $handle - the current handle to apply listeners to.
     */},{key:"_eventsForHandle",value:function _eventsForHandle(t){var i,n=this;var s=function handleChangeEvent(t){var i=n.inputs.index(e(this));n._handleEvent(t,n.handles.eq(i),e(this).val())};this.inputs.off("keyup.zf.slider").on("keyup.zf.slider",(function(e){13===e.keyCode&&s.call(this,e)}));this.inputs.off("change.zf.slider").on("change.zf.slider",s);this.options.clickSelect&&this.$element.off("click.zf.slider").on("click.zf.slider",(function(t){if(n.$element.data("dragging"))return false;e(t.target).is("[data-slider-handle]")||(n.options.doubleSided?n._handleEvent(t):n._handleEvent(t,n.$handle))}));if(this.options.draggable){this.handles.addTouch();var a=e("body");t.off("mousedown.zf.slider").on("mousedown.zf.slider",(function(s){t.addClass("is-dragging");n.$fill.addClass("is-dragging");n.$element.data("dragging",true);i=e(s.currentTarget);a.on("mousemove.zf.slider",(function(e){e.preventDefault();n._handleEvent(e,i)})).on("mouseup.zf.slider",(function(e){n._handleEvent(e,i);t.removeClass("is-dragging");n.$fill.removeClass("is-dragging");n.$element.data("dragging",false);a.off("mousemove.zf.slider mouseup.zf.slider")}))})).on("selectstart.zf.slider touchmove.zf.slider",(function(e){e.preventDefault()}))}t.off("keydown.zf.slider").on("keydown.zf.slider",(function(i){var s,a=e(this),o=(n.options.doubleSided&&n.handles.index(a),parseFloat(t.attr("aria-valuenow")));l.handleKey(i,"Slider",{decrease:function decrease(){s=o-n.options.step},increase:function increase(){s=o+n.options.step},decreaseFast:function decreaseFast(){s=o-10*n.options.step},increaseFast:function increaseFast(){s=o+10*n.options.step},min:function min(){s=n.options.start},max:function max(){s=n.options.end},handled:function handled(){i.preventDefault();n._setHandlePos(a,s)}})}))}},{key:"_destroy",value:function _destroy(){this.handles.off(".zf.slider");this.inputs.off(".zf.slider");this.$element.off(".zf.slider");clearTimeout(this.timeout)}}]);return Slider}(C);j.defaults={
/**
   * Minimum value for the slider scale.
   * @option
   * @type {number}
   * @default 0
   */
start:0,
/**
   * Maximum value for the slider scale.
   * @option
   * @type {number}
   * @default 100
   */
end:100,
/**
   * Minimum value change per change event.
   * @option
   * @type {number}
   * @default 1
   */
step:1,
/**
   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
   * @option
   * @type {number}
   * @default 0
   */
initialStart:0,
/**
   * Value at which the right handle/second input should be set to on initialization.
   * @option
   * @type {number}
   * @default 100
   */
initialEnd:100,
/**
   * Allows the input to be located outside the container and visible. Set to by the JS
   * @option
   * @type {boolean}
   * @default false
   */
binding:false,
/**
   * Allows the user to click/tap on the slider bar to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
clickSelect:true,
/**
   * Set to true and use the `vertical` class to change alignment to vertical.
   * @option
   * @type {boolean}
   * @default false
   */
vertical:false,
/**
   * Allows the user to drag the slider handle(s) to select a value.
   * @option
   * @type {boolean}
   * @default true
   */
draggable:true,
/**
   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
   * @option
   * @type {boolean}
   * @default false
   */
disabled:false,
/**
   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
   * @option
   * @type {boolean}
   * @default false
   */
doubleSided:false,
/**
   * Number of decimal places the plugin should go to for floating point precision.
   * @option
   * @type {number}
   * @default 2
   */
decimal:2,
/**
   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
   * @option
   * @type {number}
   * @default 200
   */
moveTime:200,
/**
   * Class applied to disabled sliders.
   * @option
   * @type {string}
   * @default 'disabled'
   */
disabledClass:"disabled",
/**
   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
   * @option
   * @type {boolean}
   * @default false
   */
invertVertical:false,
/**
   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
   * @option
   * @type {number}
   * @default 500
   */
changedDelay:500,
/**
  * Basevalue for non-linear sliders
  * @option
  * @type {number}
  * @default 5
  */
nonLinearBase:5,
/**
  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
  * @option
  * @type {string}
  * @default 'linear'
  */
positionValueFunction:"linear"};function percent(e,t){return e/t}function absPosition(e,t,i,n){return Math.abs(e.position()[t]+e[n]()/2-i)}function baseLog(e,t){return Math.log(t)/Math.log(e)}var U=function(t){_inherits(Sticky,t);var n=_createSuper(Sticky);function Sticky(){_classCallCheck(this,Sticky);return n.apply(this,arguments)}_createClass(Sticky,[{key:"_setup",value:
/**
     * Creates a new instance of a sticky thing.
     * @class
     * @name Sticky
     * @param {jQuery} element - jQuery object to make sticky.
     * @param {Object} options - options object passed when creating the element programmatically.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Sticky.defaults,this.$element.data(),i);this.className="Sticky";k.init(e);this._init()}},{key:"_init",value:function _init(){i._init();var t=this.$element.parent("[data-sticky-container]"),n=this.$element[0].id||GetYoDigits(6,"sticky"),s=this;if(t.length)this.$container=t;else{this.wasWrapped=true;this.$element.wrap(this.options.container);this.$container=this.$element.parent()}this.$container.addClass(this.options.containerClass);this.$element.addClass(this.options.stickyClass).attr({"data-resize":n,"data-mutate":n});""!==this.options.anchor&&e("#"+s.options.anchor).attr({"data-mutate":n});this.scrollCount=this.options.checkEvery;this.isStuck=false;this.onLoadListener=onLoad(e(window),(function(){s.containerHeight="none"===s.$element.css("display")?0:s.$element[0].getBoundingClientRect().height;s.$container.css("height",s.containerHeight);s.elemHeight=s.containerHeight;""!==s.options.anchor?s.$anchor=e("#"+s.options.anchor):s._parsePoints();s._setSizes((function(){var e=window.pageYOffset;s._calc(false,e);s.isStuck||s._removeSticky(!(e>=s.topPoint))}));s._events(n.split("-").reverse().join("-"))}))}},{key:"_parsePoints",value:function _parsePoints(){var t=""===this.options.topAnchor?1:this.options.topAnchor,i=""===this.options.btmAnchor?document.documentElement.scrollHeight:this.options.btmAnchor,n=[t,i],s={};for(var a=0,o=n.length;a<o&&n[a];a++){var r;if("number"===typeof n[a])r=n[a];else{var l=n[a].split(":"),c=e("#".concat(l[0]));r=c.offset().top;l[1]&&"bottom"===l[1].toLowerCase()&&(r+=c[0].getBoundingClientRect().height)}s[a]=r}this.points=s}
/**
     * Adds event handlers for the scrolling element.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_events",value:function _events(t){var i=this,n=this.scrollListener="scroll.zf.".concat(t);if(!this.isOn){if(this.canStick){this.isOn=true;e(window).off(n).on(n,(function(){if(0===i.scrollCount){i.scrollCount=i.options.checkEvery;i._setSizes((function(){i._calc(false,window.pageYOffset)}))}else{i.scrollCount--;i._calc(false,window.pageYOffset)}}))}this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger",(function(){i._eventsHandler(t)}));this.$element.on("mutateme.zf.trigger",(function(){i._eventsHandler(t)}));this.$anchor&&this.$anchor.on("mutateme.zf.trigger",(function(){i._eventsHandler(t)}))}}
/**
     * Handler for events.
     * @private
     * @param {String} id - pseudo-random id for unique scroll event listener.
     */},{key:"_eventsHandler",value:function _eventsHandler(e){var t=this,i=this.scrollListener="scroll.zf.".concat(e);t._setSizes((function(){t._calc(false);t.canStick?t.isOn||t._events(e):t.isOn&&t._pauseListeners(i)}))}
/**
     * Removes event handlers for scroll and change events on anchor.
     * @fires Sticky#pause
     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
     */},{key:"_pauseListeners",value:function _pauseListeners(t){this.isOn=false;e(window).off(t);this.$element.trigger("pause.zf.sticky")}
/**
     * Called on every `scroll` event and on `_init`
     * fires functions based on booleans and cached values
     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
     */},{key:"_calc",value:function _calc(e,t){e&&this._setSizes();if(!this.canStick){this.isStuck&&this._removeSticky(true);return false}t||(t=window.pageYOffset);t>=this.topPoint?t<=this.bottomPoint?this.isStuck||this._setSticky():this.isStuck&&this._removeSticky(false):this.isStuck&&this._removeSticky(true)}},{key:"_setSticky",value:function _setSticky(){var e=this,t=this.options.stickTo,i="top"===t?"marginTop":"marginBottom",n="top"===t?"bottom":"top",s={};s[i]="".concat(this.options[i],"em");s[t]=0;s[n]="auto";this.isStuck=true;this.$element.removeClass("is-anchored is-at-".concat(n)).addClass("is-stuck is-at-".concat(t)).css(s).trigger("sticky.zf.stuckto:".concat(t));this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",(function(){e._setSizes()}))}
/**
     * Causes the $element to become unstuck.
     * Removes `position: fixed;`, and helper classes.
     * Adds other helper classes.
     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
     * @fires Sticky#unstuckfrom
     * @private
     */},{key:"_removeSticky",value:function _removeSticky(e){var t=this.options.stickTo,i="top"===t,n={},s=(this.points?this.points[1]-this.points[0]:this.anchorHeight)-this.elemHeight,a=i?"marginTop":"marginBottom",o=e?"top":"bottom";n[a]=0;n.bottom="auto";n.top=e?0:s;this.isStuck=false;this.$element.removeClass("is-stuck is-at-".concat(t)).addClass("is-anchored is-at-".concat(o)).css(n).trigger("sticky.zf.unstuckfrom:".concat(o))}
/**
     * Sets the $element and $container sizes for plugin.
     * Calls `_setBreakPoints`.
     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
     * @private
     */},{key:"_setSizes",value:function _setSizes(e){this.canStick=i.is(this.options.stickyOn);this.canStick||e&&"function"===typeof e&&e();var t=this.$container[0].getBoundingClientRect().width,n=window.getComputedStyle(this.$container[0]),s=parseInt(n["padding-left"],10),a=parseInt(n["padding-right"],10);this.$anchor&&this.$anchor.length?this.anchorHeight=this.$anchor[0].getBoundingClientRect().height:this._parsePoints();this.$element.css({"max-width":"".concat(t-s-a,"px")});if(this.options.dynamicHeight||!this.containerHeight){var o=this.$element[0].getBoundingClientRect().height||this.containerHeight;o="none"===this.$element.css("display")?0:o;this.$container.css("height",o);this.containerHeight=o}this.elemHeight=this.containerHeight;if(!this.isStuck&&this.$element.hasClass("is-at-bottom")){var r=(this.points?this.points[1]-this.$container.offset().top:this.anchorHeight)-this.elemHeight;this.$element.css("top",r)}this._setBreakPoints(this.containerHeight,(function(){e&&"function"===typeof e&&e()}))}
/**
     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
     * @param {Function} cb - optional callback function to be called on completion.
     * @private
     */},{key:"_setBreakPoints",value:function _setBreakPoints(e,t){if(!this.canStick){if(!t||"function"!==typeof t)return false;t()}var i=emCalc(this.options.marginTop),n=emCalc(this.options.marginBottom),s=this.points?this.points[0]:this.$anchor.offset().top,a=this.points?this.points[1]:s+this.anchorHeight,o=window.innerHeight;if("top"===this.options.stickTo){s-=i;a-=e+i}else if("bottom"===this.options.stickTo){s-=o-(e+n);a-=o-n}this.topPoint=s;this.bottomPoint=a;t&&"function"===typeof t&&t()}},{key:"_destroy",value:function _destroy(){this._removeSticky(true);this.$element.removeClass("".concat(this.options.stickyClass," is-anchored is-at-top")).css({height:"",top:"",bottom:"","max-width":""}).off("resizeme.zf.trigger").off("mutateme.zf.trigger");this.$anchor&&this.$anchor.length&&this.$anchor.off("change.zf.sticky");this.scrollListener&&e(window).off(this.scrollListener);this.onLoadListener&&e(window).off(this.onLoadListener);this.wasWrapped?this.$element.unwrap():this.$container.removeClass(this.options.containerClass).css({height:""})}}]);return Sticky}(C);U.defaults={
/**
   * Customizable container template. Add your own classes for styling and sizing.
   * @option
   * @type {string}
   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
   */
container:"<div data-sticky-container></div>",
/**
   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
   * @option
   * @type {string}
   * @default 'top'
   */
stickTo:"top",
/**
   * If anchored to a single element, the id of that element.
   * @option
   * @type {string}
   * @default ''
   */
anchor:"",
/**
   * If using more than one element as anchor points, the id of the top anchor.
   * @option
   * @type {string}
   * @default ''
   */
topAnchor:"",
/**
   * If using more than one element as anchor points, the id of the bottom anchor.
   * @option
   * @type {string}
   * @default ''
   */
btmAnchor:"",
/**
   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginTop:1,
/**
   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
   * @option
   * @type {number}
   * @default 1
   */
marginBottom:1,
/**
   * Breakpoint string that is the minimum screen size an element should become sticky.
   * @option
   * @type {string}
   * @default 'medium'
   */
stickyOn:"medium",
/**
   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
   * @option
   * @type {string}
   * @default 'sticky'
   */
stickyClass:"sticky",
/**
   * Class applied to sticky container. Foundation defaults to `sticky-container`.
   * @option
   * @type {string}
   * @default 'sticky-container'
   */
containerClass:"sticky-container",
/**
   * If true (by default), keep the sticky container the same height as the element. Otherwise, the container height is set once and does not change.
   * @option
   * @type {boolean}
   * @default true
   */
dynamicHeight:true,
/**
   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
   * @option
   * @type {number}
   * @default -1
   */
checkEvery:-1};
/**
 * Helper function to calculate em values
 * @param Number {em} - number of em's to calculate into pixels
 */function emCalc(e){return parseInt(window.getComputedStyle(document.body,null).fontSize,10)*e}var K=function(t){_inherits(Tabs,t);var i=_createSuper(Tabs);function Tabs(){_classCallCheck(this,Tabs);return i.apply(this,arguments)}_createClass(Tabs,[{key:"_setup",value:
/**
     * Creates a new instance of tabs.
     * @class
     * @name Tabs
     * @fires Tabs#init
     * @param {jQuery} element - jQuery object to make into tabs.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Tabs.defaults,this.$element.data(),i);this.className="Tabs";this._init();l.register("Tabs",{ENTER:"open",SPACE:"open",ARROW_RIGHT:"next",ARROW_UP:"previous",ARROW_DOWN:"next",ARROW_LEFT:"previous"})}},{key:"_init",value:function _init(){var t=this;var i=this;this._isInitializing=true;this.$element.attr({role:"tablist"});this.$tabTitles=this.$element.find(".".concat(this.options.linkClass));this.$tabContent=e('[data-tabs-content="'.concat(this.$element[0].id,'"]'));this.$tabTitles.each((function(){var t=e(this),n=t.find("a"),s=t.hasClass("".concat(i.options.linkActiveClass)),a=n.attr("data-tabs-target")||n[0].hash.slice(1),o=n[0].id?n[0].id:"".concat(a,"-label"),r=e("#".concat(a));t.attr({role:"presentation"});n.attr({role:"tab","aria-controls":a,"aria-selected":s,id:o,tabindex:s?"0":"-1"});r.attr({role:"tabpanel","aria-labelledby":o});s&&(i._initialAnchor="#".concat(a));s||r.attr("aria-hidden","true");s&&i.options.autoFocus&&(i.onLoadListener=onLoad(e(window),(function(){e("html, body").animate({scrollTop:t.offset().top},i.options.deepLinkSmudgeDelay,(function(){n.focus()}))})))}));if(this.options.matchHeight){var n=this.$tabContent.find("img");n.length?onImagesLoaded(n,this._setHeight.bind(this)):this._setHeight()}this._checkDeepLink=function(){var i=window.location.hash;if(!i.length){if(t._isInitializing)return;t._initialAnchor&&(i=t._initialAnchor)}var n=i.indexOf("#")>=0?i.slice(1):i;var s=n&&e("#".concat(n));var a=i&&t.$element.find('[href$="'.concat(i,'"],[data-tabs-target="').concat(n,'"]')).first();var o=!!(s.length&&a.length);if(o){s&&s.length&&a&&a.length?t.selectTab(s,true):t._collapse();if(t.options.deepLinkSmudge){var r=t.$element.offset();e("html, body").animate({scrollTop:r.top-t.options.deepLinkSmudgeOffset},t.options.deepLinkSmudgeDelay)}t.$element.trigger("deeplink.zf.tabs",[a,s])}};this.options.deepLink&&this._checkDeepLink();this._events();this._isInitializing=false}},{key:"_events",value:function _events(){this._addKeyHandler();this._addClickHandler();this._setHeightMqHandler=null;if(this.options.matchHeight){this._setHeightMqHandler=this._setHeight.bind(this);e(window).on("changed.zf.mediaquery",this._setHeightMqHandler)}this.options.deepLink&&e(window).on("hashchange",this._checkDeepLink)}},{key:"_addClickHandler",value:function _addClickHandler(){var t=this;this.$element.off("click.zf.tabs").on("click.zf.tabs",".".concat(this.options.linkClass),(function(i){i.preventDefault();t._handleTabChange(e(this))}))}},{key:"_addKeyHandler",value:function _addKeyHandler(){var t=this;this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs",(function(i){if(9!==i.which){var n,s,a=e(this),o=a.parent("ul").children("li");o.each((function(i){if(e(this).is(a))if(t.options.wrapOnKeys){n=0===i?o.last():o.eq(i-1);s=i===o.length-1?o.first():o.eq(i+1)}else{n=o.eq(Math.max(0,i-1));s=o.eq(Math.min(i+1,o.length-1))}else;}));l.handleKey(i,"Tabs",{open:function open(){a.find('[role="tab"]').focus();t._handleTabChange(a)},previous:function previous(){n.find('[role="tab"]').focus();t._handleTabChange(n)},next:function next(){s.find('[role="tab"]').focus();t._handleTabChange(s)},handled:function handled(){i.preventDefault()}})}}))}
/**
     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
     * @param {jQuery} $target - Tab to open.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @fires Tabs#change
     * @function
     */},{key:"_handleTabChange",value:function _handleTabChange(e,t){if(e.hasClass("".concat(this.options.linkActiveClass)))this.options.activeCollapse&&this._collapse();else{var i=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass)),n=e.find('[role="tab"]'),s=n.attr("data-tabs-target"),a=s&&s.length?"#".concat(s):n[0].hash,o=this.$tabContent.find(a);this._collapseTab(i);this._openTab(e);this.options.deepLink&&!t&&(this.options.updateHistory?history.pushState({},"",a):history.replaceState({},"",a));this.$element.trigger("change.zf.tabs",[e,o]);o.find("[data-mutate]").trigger("mutateme.zf.trigger")}}
/**
     * Opens the tab `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to open.
     * @function
     */},{key:"_openTab",value:function _openTab(e){var t=e.find('[role="tab"]'),i=t.attr("data-tabs-target")||t[0].hash.slice(1),n=this.$tabContent.find("#".concat(i));e.addClass("".concat(this.options.linkActiveClass));t.attr({"aria-selected":"true",tabindex:"0"});n.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")}
/**
     * Collapses `$targetContent` defined by `$target`.
     * @param {jQuery} $target - Tab to collapse.
     * @function
     */},{key:"_collapseTab",value:function _collapseTab(t){var i=t.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({"aria-selected":"false",tabindex:-1});e("#".concat(i.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({"aria-hidden":"true"})}},{key:"_collapse",value:function _collapse(){var e=this.$element.find(".".concat(this.options.linkClass,".").concat(this.options.linkActiveClass));if(e.length){this._collapseTab(e);this.$element.trigger("collapse.zf.tabs",[e])}}
/**
     * Public method for selecting a content pane to display.
     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
     * @param {boolean} historyHandled - browser has already handled a history update
     * @function
     */},{key:"selectTab",value:function selectTab(e,t){var i,n;i="object"===_typeof(e)?e[0].id:e;if(i.indexOf("#")<0)n="#".concat(i);else{n=i;i=i.slice(1)}var s=this.$tabTitles.has('[href$="'.concat(n,'"],[data-tabs-target="').concat(i,'"]')).first();this._handleTabChange(s,t)}},{key:"_setHeight",value:function _setHeight(){var t=0,i=this;this.$tabContent&&this.$tabContent.find(".".concat(this.options.panelClass)).css("min-height","").each((function(){var n=e(this),s=n.hasClass("".concat(i.options.panelActiveClass));s||n.css({visibility:"hidden",display:"block"});var a=this.getBoundingClientRect().height;s||n.css({visibility:"",display:""});t=a>t?a:t})).css("min-height","".concat(t,"px"))}},{key:"_destroy",value:function _destroy(){this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide();this.options.matchHeight&&null!=this._setHeightMqHandler&&e(window).off("changed.zf.mediaquery",this._setHeightMqHandler);this.options.deepLink&&e(window).off("hashchange",this._checkDeepLink);this.onLoadListener&&e(window).off(this.onLoadListener)}}]);return Tabs}(C);K.defaults={
/**
   * Link the location hash to the active pane.
   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
   * @option
   * @type {boolean}
   * @default false
   */
deepLink:false,
/**
   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
   * @option
   * @type {boolean}
   * @default false
   */
deepLinkSmudge:false,
/**
   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
   * @option
   * @type {number}
   * @default 300
   */
deepLinkSmudgeDelay:300,
/**
   * If `deepLinkSmudge` is enabled, animation offset from the top for the deep link adjustment
   * @option
   * @type {number}
   * @default 0
   */
deepLinkSmudgeOffset:0,
/**
   * If `deepLink` is enabled, update the browser history with the open tab
   * @option
   * @type {boolean}
   * @default false
   */
updateHistory:false,
/**
   * Allows the window to scroll to content of active pane on load.
   * Not recommended if more than one tab panel per page.
   * @option
   * @type {boolean}
   * @default false
   */
autoFocus:false,
/**
   * Allows keyboard input to 'wrap' around the tab links.
   * @option
   * @type {boolean}
   * @default true
   */
wrapOnKeys:true,
/**
   * Allows the tab content panes to match heights if set to true.
   * @option
   * @type {boolean}
   * @default false
   */
matchHeight:false,
/**
   * Allows active tabs to collapse when clicked.
   * @option
   * @type {boolean}
   * @default false
   */
activeCollapse:false,
/**
   * Class applied to `li`'s in tab link list.
   * @option
   * @type {string}
   * @default 'tabs-title'
   */
linkClass:"tabs-title",
/**
   * Class applied to the active `li` in tab link list.
   * @option
   * @type {string}
   * @default 'is-active'
   */
linkActiveClass:"is-active",
/**
   * Class applied to the content containers.
   * @option
   * @type {string}
   * @default 'tabs-panel'
   */
panelClass:"tabs-panel",
/**
   * Class applied to the active content container.
   * @option
   * @type {string}
   * @default 'is-active'
   */
panelActiveClass:"is-active"};var V=function(t){_inherits(Toggler,t);var i=_createSuper(Toggler);function Toggler(){_classCallCheck(this,Toggler);return i.apply(this,arguments)}_createClass(Toggler,[{key:"_setup",value:
/**
     * Creates a new instance of Toggler.
     * @class
     * @name Toggler
     * @fires Toggler#init
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Toggler.defaults,t.data(),i);this.className="";this.className="Toggler";k.init(e);this._init();this._events()}},{key:"_init",value:function _init(){var t=this.$element[0].id,i=e('[data-open~="'.concat(t,'"], [data-close~="').concat(t,'"], [data-toggle~="').concat(t,'"]'));var n;if(this.options.animate){n=this.options.animate.split(" ");this.animationIn=n[0];this.animationOut=n[1]||null;i.attr("aria-expanded",!this.$element.is(":hidden"))}else{n=this.options.toggler;if("string"!==typeof n||!n.length)throw new Error("The 'toggler' option containing the target class is required, got \"".concat(n,'"'));this.className="."===n[0]?n.slice(1):n;i.attr("aria-expanded",this.$element.hasClass(this.className))}i.each((function(i,n){var s=e(n);var a=s.attr("aria-controls")||"";var o=new RegExp("\\b".concat(RegExpEscape(t),"\\b")).test(a);o||s.attr("aria-controls",a?"".concat(a," ").concat(t):t)}))}},{key:"_events",value:function _events(){this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger",this.toggle.bind(this))}},{key:"toggle",value:function toggle(){this[this.options.animate?"_toggleAnimate":"_toggleClass"]()}},{key:"_toggleClass",value:function _toggleClass(){this.$element.toggleClass(this.className);var e=this.$element.hasClass(this.className);e?this.$element.trigger("on.zf.toggler"):this.$element.trigger("off.zf.toggler");this._updateARIA(e);this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")}},{key:"_toggleAnimate",value:function _toggleAnimate(){var e=this;this.$element.is(":hidden")?d.animateIn(this.$element,this.animationIn,(function(){e._updateARIA(true);this.trigger("on.zf.toggler");this.find("[data-mutate]").trigger("mutateme.zf.trigger")})):d.animateOut(this.$element,this.animationOut,(function(){e._updateARIA(false);this.trigger("off.zf.toggler");this.find("[data-mutate]").trigger("mutateme.zf.trigger")}))}},{key:"_updateARIA",value:function _updateARIA(t){var i=this.$element[0].id;e('[data-open="'.concat(i,'"], [data-close="').concat(i,'"], [data-toggle="').concat(i,'"]')).attr({"aria-expanded":!!t})}},{key:"_destroy",value:function _destroy(){this.$element.off(".zf.toggler")}}]);return Toggler}(C);V.defaults={
/**
   * Class of the element to toggle. It can be provided with or without "."
   * @option
   * @type {string}
   */
toggler:void 0,
/**
   * Tells the plugin if the element should animated when toggled.
   * @option
   * @type {boolean}
   * @default false
   */
animate:false};var Q=function(t){_inherits(Tooltip,t);var n=_createSuper(Tooltip);function Tooltip(){_classCallCheck(this,Tooltip);return n.apply(this,arguments)}_createClass(Tooltip,[{key:"_setup",value:
/**
     * Creates a new instance of a Tooltip.
     * @class
     * @name Tooltip
     * @fires Tooltip#init
     * @param {jQuery} element - jQuery object to attach a tooltip to.
     * @param {Object} options - object to extend the default configuration.
     */
function _setup(t,i){this.$element=t;this.options=e.extend({},Tooltip.defaults,this.$element.data(),i);this.className="Tooltip";this.isActive=false;this.isClick=false;k.init(e);this._init()}},{key:"_init",value:function _init(){i._init();var t=this.$element.attr("aria-describedby")||GetYoDigits(6,"tooltip");this.options.tipText=this.options.tipText||this.$element.attr("title");this.template=this.options.template?e(this.options.template):this._buildTemplate(t);this.options.allowHtml?this.template.appendTo(document.body).html(this.options.tipText).hide():this.template.appendTo(document.body).text(this.options.tipText).hide();this.$element.attr({title:"","aria-describedby":t,"data-yeti-box":t,"data-toggle":t,"data-resize":t}).addClass(this.options.triggerClass);_get(_getPrototypeOf(Tooltip.prototype),"_init",this).call(this);this._events()}},{key:"_getDefaultPosition",value:function _getDefaultPosition(){var e=this.$element[0].className;this.$element[0]instanceof SVGElement&&(e=e.baseVal);var t=e.match(/\b(top|left|right|bottom)\b/g);return t?t[0]:"top"}},{key:"_getDefaultAlignment",value:function _getDefaultAlignment(){return"center"}},{key:"_getHOffset",value:function _getHOffset(){return"left"===this.position||"right"===this.position?this.options.hOffset+this.options.tooltipWidth:this.options.hOffset}},{key:"_getVOffset",value:function _getVOffset(){return"top"===this.position||"bottom"===this.position?this.options.vOffset+this.options.tooltipHeight:this.options.vOffset}},{key:"_buildTemplate",value:function _buildTemplate(t){var i="".concat(this.options.tooltipClass," ").concat(this.options.templateClasses).trim();var n=e("<div></div>").addClass(i).attr({role:"tooltip","aria-hidden":true,"data-is-active":false,"data-is-focus":false,id:t});return n}},{key:"_setPosition",value:function _setPosition(){_get(_getPrototypeOf(Tooltip.prototype),"_setPosition",this).call(this,this.$element,this.template)}},{key:"show",value:function show(){if("all"!==this.options.showOn&&!i.is(this.options.showOn))return false;var e=this;this.template.css("visibility","hidden").show();this._setPosition();this.template.removeClass("top bottom left right").addClass(this.position);this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-"+this.alignment);this.$element.trigger("closeme.zf.tooltip",this.template.attr("id"));this.template.attr({"data-is-active":true,"aria-hidden":false});e.isActive=true;this.template.stop().hide().css("visibility","").fadeIn(this.options.fadeInDuration,(function(){}));this.$element.trigger("show.zf.tooltip")}},{key:"hide",value:function hide(){var e=this;this.template.stop().attr({"aria-hidden":true,"data-is-active":false}).fadeOut(this.options.fadeOutDuration,(function(){e.isActive=false;e.isClick=false}));this.$element.trigger("hide.zf.tooltip")}},{key:"_events",value:function _events(){var e=this;var t="ontouchstart"in window||"undefined"!==typeof window.ontouchstart;var i=false;if(!t||!this.options.disableForTouch){this.options.disableHover||this.$element.on("mouseenter.zf.tooltip",(function(){e.isActive||(e.timeout=setTimeout((function(){e.show()}),e.options.hoverDelay))})).on("mouseleave.zf.tooltip",ignoreMousedisappear((function(){clearTimeout(e.timeout);(!i||e.isClick&&!e.options.clickOpen)&&e.hide()})));t&&this.$element.on("tap.zf.tooltip touchend.zf.tooltip",(function(){e.isActive?e.hide():e.show()}));this.options.clickOpen?this.$element.on("mousedown.zf.tooltip",(function(){if(e.isClick);else{e.isClick=true;!e.options.disableHover&&e.$element.attr("tabindex")||e.isActive||e.show()}})):this.$element.on("mousedown.zf.tooltip",(function(){e.isClick=true}));this.$element.on({"close.zf.trigger":this.hide.bind(this)});this.$element.on("focus.zf.tooltip",(function(){i=true;if(e.isClick){e.options.clickOpen||(i=false);return false}e.show()})).on("focusout.zf.tooltip",(function(){i=false;e.isClick=false;e.hide()})).on("resizeme.zf.trigger",(function(){e.isActive&&e._setPosition()}))}}},{key:"toggle",value:function toggle(){this.isActive?this.hide():this.show()}},{key:"_destroy",value:function _destroy(){this.$element.attr("title",this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box");this.template.remove()}}]);return Tooltip}(R);Q.defaults={
/**
   * Time, in ms, before a tooltip should open on hover.
   * @option
   * @type {number}
   * @default 200
   */
hoverDelay:200,
/**
   * Time, in ms, a tooltip should take to fade into view.
   * @option
   * @type {number}
   * @default 150
   */
fadeInDuration:150,
/**
   * Time, in ms, a tooltip should take to fade out of view.
   * @option
   * @type {number}
   * @default 150
   */
fadeOutDuration:150,
/**
   * Disables hover events from opening the tooltip if set to true
   * @option
   * @type {boolean}
   * @default false
   */
disableHover:false,
/**
   * Disable the tooltip for touch devices.
   * This can be useful to make elements with a tooltip on it trigger their
   * action on the first tap instead of displaying the tooltip.
   * @option
   * @type {booelan}
   * @default false
   */
disableForTouch:false,
/**
   * Optional addtional classes to apply to the tooltip template on init.
   * @option
   * @type {string}
   * @default ''
   */
templateClasses:"",
/**
   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
   * @option
   * @type {string}
   * @default 'tooltip'
   */
tooltipClass:"tooltip",
/**
   * Class applied to the tooltip anchor element.
   * @option
   * @type {string}
   * @default 'has-tip'
   */
triggerClass:"has-tip",
/**
   * Minimum breakpoint size at which to open the tooltip.
   * @option
   * @type {string}
   * @default 'small'
   */
showOn:"small",
/**
   * Custom template to be used to generate markup for tooltip.
   * @option
   * @type {string}
   * @default ''
   */
template:"",
/**
   * Text displayed in the tooltip template on open.
   * @option
   * @type {string}
   * @default ''
   */
tipText:"",touchCloseText:"Tap to close.",
/**
   * Allows the tooltip to remain open if triggered with a click or touch event.
   * @option
   * @type {boolean}
   * @default true
   */
clickOpen:true,
/**
   * Position of tooltip. Can be left, right, bottom, top, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
position:"auto",
/**
   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
   * @option
   * @type {string}
   * @default 'auto'
   */
alignment:"auto",
/**
   * Allow overlap of container/window. If false, tooltip will first try to
   * position as defined by data-position and data-alignment, but reposition if
   * it would cause an overflow.  @option
   * @type {boolean}
   * @default false
   */
allowOverlap:false,
/**
   * Allow overlap of only the bottom of the container. This is the most common
   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
   * screen but not otherwise influence or break out of the container.
   * Less common for tooltips.
   * @option
   * @type {boolean}
   * @default false
   */
allowBottomOverlap:false,
/**
   * Distance, in pixels, the template should push away from the anchor on the Y axis.
   * @option
   * @type {number}
   * @default 0
   */
vOffset:0,
/**
   * Distance, in pixels, the template should push away from the anchor on the X axis
   * @option
   * @type {number}
   * @default 0
   */
hOffset:0,
/**
   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
   * @option
   * @type {number}
   * @default 14
   */
tooltipHeight:14,
/**
   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
   * @option
   * @type {number}
   * @default 12
   */
tooltipWidth:12,
/**
  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
  * allowing HTML may open yourself up to XSS attacks.
  * @option
  * @type {boolean}
  * @default false
  */
allowHtml:false};var Z={tabs:{cssClass:"tabs",plugin:K,open:function open(e,t){return e.selectTab(t)},close:null,toggle:null},accordion:{cssClass:"accordion",plugin:T,open:function open(t,i){return t.down(e(i))},close:function close(t,i){return t.up(e(i))},toggle:function toggle(t,i){return t.toggle(e(i))}}};var X=function(t){_inherits(ResponsiveAccordionTabs,t);var n=_createSuper(ResponsiveAccordionTabs);function ResponsiveAccordionTabs(e,t){var i;_classCallCheck(this,ResponsiveAccordionTabs);i=n.call(this,e,t);return _possibleConstructorReturn(i,i.options.reflow&&i.storezfData||_assertThisInitialized(i))}
/**
   * Creates a new instance of a responsive accordion tabs.
   * @class
   * @name ResponsiveAccordionTabs
   * @fires ResponsiveAccordionTabs#init
   * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
   * @param {Object} options - Overrides to the default plugin settings.
   */_createClass(ResponsiveAccordionTabs,[{key:"_setup",value:function _setup(t,i){this.$element=e(t);this.$element.data("zfPluginBase",this);this.options=e.extend({},ResponsiveAccordionTabs.defaults,this.$element.data(),i);this.rules=this.$element.data("responsive-accordion-tabs");this.currentMq=null;this.currentRule=null;this.currentPlugin=null;this.className="ResponsiveAccordionTabs";this.$element.attr("id")||this.$element.attr("id",GetYoDigits(6,"responsiveaccordiontabs"));this._init();this._events()}},{key:"_init",value:function _init(){i._init();if("string"===typeof this.rules){var t={};var n=this.rules.split(" ");for(var s=0;s<n.length;s++){var a=n[s].split("-");var o=a.length>1?a[0]:"small";var r=a.length>1?a[1]:a[0];null!==Z[r]&&(t[o]=Z[r])}this.rules=t}this._getAllOptions();e.isEmptyObject(this.rules)||this._checkMediaQueries()}},{key:"_getAllOptions",value:function _getAllOptions(){var t=this;t.allOptions={};for(var i in Z)if(Z.hasOwnProperty(i)){var n=Z[i];try{var s=e("<ul></ul>");var a=new n.plugin(s,t.options);for(var o in a.options)if(a.options.hasOwnProperty(o)&&"zfPlugin"!==o){var r=a.options[o];t.allOptions[o]=r}a.destroy()}catch(e){console.warn("Warning: Problems getting Accordion/Tab options: ".concat(e))}}}},{key:"_events",value:function _events(){this._changedZfMediaQueryHandler=this._checkMediaQueries.bind(this);e(window).on("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}},{key:"_checkMediaQueries",value:function _checkMediaQueries(){var t,n=this;e.each(this.rules,(function(e){i.atLeast(e)&&(t=e)}));if(t&&!(this.currentPlugin instanceof this.rules[t].plugin)){e.each(Z,(function(e,t){n.$element.removeClass(t.cssClass)}));this.$element.addClass(this.rules[t].cssClass);if(this.currentPlugin){!this.currentPlugin.$element.data("zfPlugin")&&this.storezfData&&this.currentPlugin.$element.data("zfPlugin",this.storezfData);this.currentPlugin.destroy()}this._handleMarkup(this.rules[t].cssClass);this.currentRule=this.rules[t];this.currentPlugin=new this.currentRule.plugin(this.$element,this.options);this.storezfData=this.currentPlugin.$element.data("zfPlugin")}}},{key:"_handleMarkup",value:function _handleMarkup(t){var i=this,n="accordion";var s=e("[data-tabs-content="+this.$element.attr("id")+"]");s.length&&(n="tabs");if(n!==t){var a=i.allOptions.linkClass?i.allOptions.linkClass:"tabs-title";var o=i.allOptions.panelClass?i.allOptions.panelClass:"tabs-panel";this.$element.removeAttr("role");var r=this.$element.children("."+a+",[data-accordion-item]").removeClass(a).removeClass("accordion-item").removeAttr("data-accordion-item");var l=r.children("a").removeClass("accordion-title");if("tabs"===n){s=s.children("."+o).removeClass(o).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby");s.children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected")}else s=r.children("[data-tab-content]").removeClass("accordion-content");s.css({display:"",visibility:""});r.css({display:"",visibility:""});if("accordion"===t)s.each((function(t,n){e(n).appendTo(r.get(t)).addClass("accordion-content").attr("data-tab-content","").removeClass("is-active").css({height:""});e("[data-tabs-content="+i.$element.attr("id")+"]").after('<div id="tabs-placeholder-'+i.$element.attr("id")+'"></div>').detach();r.addClass("accordion-item").attr("data-accordion-item","");l.addClass("accordion-title")}));else if("tabs"===t){var c=e("[data-tabs-content="+i.$element.attr("id")+"]");var h=e("#tabs-placeholder-"+i.$element.attr("id"));if(h.length){c=e('<div class="tabs-content"></div>').insertAfter(h).attr("data-tabs-content",i.$element.attr("id"));h.remove()}else c=e('<div class="tabs-content"></div>').insertAfter(i.$element).attr("data-tabs-content",i.$element.attr("id"));s.each((function(t,i){var n=e(i).appendTo(c).addClass(o);var s=l.get(t).hash.slice(1);var a=e(i).attr("id")||GetYoDigits(6,"accordion");if(s!==a)if(""!==s)e(i).attr("id",s);else{s=a;e(i).attr("id",s);e(l.get(t)).attr("href",e(l.get(t)).attr("href").replace("#","")+"#"+s)}var h=e(r.get(t)).hasClass("is-active");h&&n.addClass("is-active")}));r.addClass(a)}}}
/**
     * Opens the plugin pane defined by `target`.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to open.
     * @see Accordion.down
     * @see Tabs.selectTab
     * @function
     */},{key:"open",value:function open(){if(this.currentRule&&"function"===typeof this.currentRule.open){var e;return(e=this.currentRule).open.apply(e,[this.currentPlugin].concat(Array.prototype.slice.call(arguments)))}}
/**
     * Closes the plugin pane defined by `target`. Not availaible for Tabs.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to close.
     * @see Accordion.up
     * @function
     */},{key:"close",value:function close(){if(this.currentRule&&"function"===typeof this.currentRule.close){var e;return(e=this.currentRule).close.apply(e,[this.currentPlugin].concat(Array.prototype.slice.call(arguments)))}}
/**
     * Toggles the plugin pane defined by `target`. Not availaible for Tabs.
     * @param {jQuery | String} target - jQuery object or string of the id of the pane to toggle.
     * @see Accordion.toggle
     * @function
     */},{key:"toggle",value:function toggle(){if(this.currentRule&&"function"===typeof this.currentRule.toggle){var e;return(e=this.currentRule).toggle.apply(e,[this.currentPlugin].concat(Array.prototype.slice.call(arguments)))}}},{key:"_destroy",value:function _destroy(){this.currentPlugin&&this.currentPlugin.destroy();e(window).off("changed.zf.mediaquery",this._changedZfMediaQueryHandler)}}]);return ResponsiveAccordionTabs}(C);X.defaults={};s.addToJquery(e);s.rtl=rtl;s.GetYoDigits=GetYoDigits;s.transitionend=transitionend;s.RegExpEscape=RegExpEscape;s.onLoad=onLoad;s.Box=a;s.onImagesLoaded=onImagesLoaded;s.Keyboard=l;s.MediaQuery=i;s.Motion=d;s.Move=Move;s.Nest=u;s.Timer=Timer;f.init(e);k.init(e,s);i._init();s.plugin(z,"Abide");s.plugin(T,"Accordion");s.plugin(O,"AccordionMenu");s.plugin(A,"Drilldown");s.plugin(D,"Dropdown");s.plugin(H,"DropdownMenu");s.plugin(M,"Equalizer");s.plugin(P,"Interchange");s.plugin(q,"Magellan");s.plugin(F,"OffCanvas");s.plugin(B,"Orbit");s.plugin(G,"ResponsiveMenu");s.plugin(W,"ResponsiveToggle");s.plugin(Y,"Reveal");s.plugin(j,"Slider");s.plugin(I,"SmoothScroll");s.plugin(U,"Sticky");s.plugin(K,"Tabs");s.plugin(V,"Toggler");s.plugin(Q,"Tooltip");s.plugin(X,"ResponsiveAccordionTabs");export{z as Abide,T as Accordion,O as AccordionMenu,a as Box,s as Core,t as CoreUtils,A as Drilldown,D as Dropdown,H as DropdownMenu,M as Equalizer,s as Foundation,P as Interchange,l as Keyboard,q as Magellan,i as MediaQuery,d as Motion,Move,u as Nest,F as OffCanvas,B as Orbit,X as ResponsiveAccordionTabs,G as ResponsiveMenu,W as ResponsiveToggle,Y as Reveal,j as Slider,I as SmoothScroll,U as Sticky,K as Tabs,Timer,V as Toggler,Q as Tooltip,f as Touch,k as Triggers,s as default,onImagesLoaded};

