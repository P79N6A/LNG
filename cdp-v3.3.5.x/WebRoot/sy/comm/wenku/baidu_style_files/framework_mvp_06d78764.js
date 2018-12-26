F
		.module(
				"/static/common/lib/tangram/base/base.js",
				function(d, a) {
					var c, b = c = b || {
						version : "1.5.2.1"
					};
					b.guid = "$BAIDU$";
					b.$$ = window[b.guid] = window[b.guid] || {
						global : {}
					};
					b.ajax = b.ajax || {};
					b.fn = b.fn || {};
					b.fn.blank = function() {
					};
					b.ajax.request = function(k, o) {
						var i = o || {}, v = i.data || "", l = !(i.async === false), j = i.username
								|| "", e = i.password || "", h = (i.method || "GET")
								.toUpperCase(), g = i.headers || {}, n = i.timeout || 0, p = {}, s, w, m;
						function r() {
							if (m.readyState == 4) {
								try {
									var y = m.status
								} catch (x) {
									u("failure");
									return
								}
								u(y);
								if ((y >= 200 && y < 300) || y == 304
										|| y == 1223) {
									u("success")
								} else {
									u("failure")
								}
								window.setTimeout(function() {
									m.onreadystatechange = b.fn.blank;
									if (l) {
										m = null
									}
								}, 0)
							}
						}
						function q() {
							if (window.ActiveXObject) {
								try {
									return new ActiveXObject("Msxml2.XMLHTTP")
								} catch (x) {
									try {
										return new ActiveXObject(
												"Microsoft.XMLHTTP")
									} catch (x) {
									}
								}
							}
							if (window.XMLHttpRequest) {
								return new XMLHttpRequest()
							}
						}
						function u(z) {
							z = "on" + z;
							var y = p[z], A = b.ajax[z];
							if (y) {
								if (s) {
									clearTimeout(s)
								}
								if (z != "onsuccess") {
									y(m)
								} else {
									try {
										m.responseText
									} catch (x) {
										return y(m)
									}
									y(m, m.responseText)
								}
							} else {
								if (A) {
									if (z == "onsuccess") {
										return
									}
									A(m)
								}
							}
						}
						for (w in i) {
							p[w] = i[w]
						}
						g["X-Requested-With"] = "XMLHttpRequest";
						try {
							m = q();
							if (h == "GET") {
								if (v) {
									k += (k.indexOf("?") >= 0 ? "&" : "?") + v;
									v = null
								}
								if (i.noCache) {
									k += (k.indexOf("?") >= 0 ? "&" : "?")
											+ "b" + (+new Date) + "=1"
								}
							}
							if (j) {
								m.open(h, k, l, j, e)
							} else {
								m.open(h, k, l)
							}
							if (l) {
								m.onreadystatechange = r
							}
							if (h == "POST") {
								m
										.setRequestHeader(
												"Content-Type",
												(g["Content-Type"] || "application/x-www-form-urlencoded"))
							}
							for (w in g) {
								if (g.hasOwnProperty(w)) {
									m.setRequestHeader(w, g[w])
								}
							}
							u("beforerequest");
							if (n) {
								s = setTimeout(function() {
									m.onreadystatechange = b.fn.blank;
									m.abort();
									u("timeout")
								}, n)
							}
							m.send(v);
							if (!l) {
								r()
							}
						} catch (t) {
							u("failure")
						}
						return m
					};
					b.url = b.url || {};
					b.url.escapeSymbol = function(e) {
						return String(e).replace(
								/[#%&+=\/\\\ \\u3000\f\r\n\t]/g,
								function(g) {
									return "%"
											+ (256 + g.charCodeAt()).toString(
													16).substring(1)
													.toUpperCase()
								})
					};
					b.ajax.form = function(e, h) {
						h = h || {};
						var l = e.elements, s = l.length, g = e
								.getAttribute("method"), k = e
								.getAttribute("action"), y = h.replacer
								|| function(z, i) {
									return z
								}, v = {}, x = [], q, u, w, r, j, m, n, p, o;
						function t(i, z) {
							x.push(i + "=" + z)
						}
						for (q in h) {
							if (h.hasOwnProperty(q)) {
								v[q] = h[q]
							}
						}
						for (q = 0; q < s; q++) {
							u = l[q];
							r = u.name;
							if (!u.disabled && r) {
								w = u.type;
								j = b.url.escapeSymbol(u.value);
								switch (w) {
								case "radio":
								case "checkbox":
									if (!u.checked) {
										break
									}
								case "textarea":
								case "text":
								case "password":
								case "hidden":
								case "select-one":
									t(r, y(j, r));
									break;
								case "select-multiple":
									m = u.options;
									p = m.length;
									for (n = 0; n < p; n++) {
										o = m[n];
										if (o.selected) {
											t(r, y(o.value, r))
										}
									}
									break
								}
							}
						}
						v.data = x.join("&");
						v.method = e.getAttribute("method") || "GET";
						return b.ajax.request(k, v)
					};
					b.ajax.get = function(g, e) {
						return b.ajax.request(g, {
							onsuccess : e
						})
					};
					b.ajax.post = function(g, h, e) {
						return b.ajax.request(g, {
							onsuccess : e,
							method : "POST",
							data : h
						})
					};
					b.array = b.array || {};
					b.array.indexOf = function(j, g, i) {
						var e = j.length, h = g;
						i = i | 0;
						if (i < 0) {
							i = Math.max(0, e + i)
						}
						for (; i < e; i++) {
							if (i in j && j[i] === g) {
								return i
							}
						}
						return -1
					};
					b.array.contains = function(e, g) {
						return (b.array.indexOf(e, g) >= 0)
					};
					b.each = b.array.forEach = b.array.each = function(m, k, g) {
						var j, l, h, e = m.length;
						if ("function" == typeof k) {
							for (h = 0; h < e; h++) {
								l = m[h];
								j = k.call(g || m, l, h);
								if (j === false) {
									break
								}
							}
						}
						return m
					};
					b.array.empty = function(e) {
						e.length = 0
					};
					b.array.every = function(k, j, g) {
						var h = 0, e = k.length;
						for (; h < e; h++) {
							if (h in k && !j.call(g || k, k[h], h)) {
								return false
							}
						}
						return true
					};
					b.array.filter = function(n, l, j) {
						var h = [], g = 0, e = n.length, m, k;
						if ("function" == typeof l) {
							for (k = 0; k < e; k++) {
								m = n[k];
								if (true === l.call(j || n, m, k)) {
									h[g++] = m
								}
							}
						}
						return h
					};
					b.array.find = function(k, h) {
						var j, g, e = k.length;
						if ("function" == typeof h) {
							for (g = 0; g < e; g++) {
								j = k[g];
								if (true === h.call(k, j, g)) {
									return j
								}
							}
						}
						return null
					};
					b.array.hash = function(k, g) {
						var m = {}, j = g && g.length, h = 0, e = k.length;
						for (; h < e; h++) {
							m[k[h]] = (j && j > h) ? g[h] : true
						}
						return m
					};
					b.array.lastIndexOf = function(i, g, h) {
						var e = i.length;
						h = h | 0;
						if (!h || h >= e) {
							h = e - 1
						}
						if (h < 0) {
							h += e
						}
						for (; h >= 0; h--) {
							if (h in i && i[h] === g) {
								return h
							}
						}
						return -1
					};
					b.array.map = function(m, k, g) {
						var j = [], h = 0, e = m.length;
						for (; h < e; h++) {
							j[h] = k.call(g || m, m[h], h)
						}
						return j
					};
					b.array.reduce = function(m, h, j) {
						var g = 0, e = m.length, k = 0;
						if (arguments.length < 3) {
							for (; g < e; g++) {
								j = m[g++];
								k = 1;
								break
							}
							if (!k) {
								return
							}
						}
						for (; g < e; g++) {
							if (g in m) {
								j = h(j, m[g], g, m)
							}
						}
						return j
					};
					b.array.remove = function(h, g) {
						var e = h.length;
						while (e--) {
							if (e in h && h[e] === g) {
								h.splice(e, 1)
							}
						}
						return h
					};
					b.array.removeAt = function(g, e) {
						return g.splice(e, 1)[0]
					};
					b.array.some = function(k, j, g) {
						var h = 0, e = k.length;
						for (; h < e; h++) {
							if (h in k && j.call(g || k, k[h], h)) {
								return true
							}
						}
						return false
					};
					b.array.unique = function(k, l) {
						var g = k.length, e = k.slice(0), j, h;
						if ("function" != typeof l) {
							l = function(m, i) {
								return m === i
							}
						}
						while (--g > 0) {
							h = e[g];
							j = g;
							while (j--) {
								if (l(h, e[j])) {
									e.splice(g, 1);
									break
								}
							}
						}
						return e
					};
					b.async = b.async || {};
					b.object = b.object || {};
					b.extend = b.object.extend = function(h, e) {
						for ( var g in e) {
							if (e.hasOwnProperty(g)) {
								h[g] = e[g]
							}
						}
						return h
					};
					b.lang = b.lang || {};
					b.lang.isFunction = function(e) {
						return "[object Function]" == Object.prototype.toString
								.call(e)
					};
					b.async._isDeferred = function(g) {
						var e = b.lang.isFunction;
						return g && e(g.success) && e(g.then) && e(g.fail)
								&& e(g.cancel)
					};
					b.async.Deferred = function() {
						var g = this;
						b.extend(g, {
							_fired : 0,
							_firing : 0,
							_cancelled : 0,
							_resolveChain : [],
							_rejectChain : [],
							_result : [],
							_isError : 0
						});
						function e() {
							if (g._cancelled || g._firing) {
								return
							}
							if (g._nextDeferred) {
								g._nextDeferred.then(g._resolveChain[0],
										g._rejectChain[0]);
								return
							}
							g._firing = 1;
							var k = g._isError ? g._rejectChain
									: g._resolveChain, h = g._result[g._isError ? 1
									: 0];
							while (k[0] && (!g._cancelled)) {
								try {
									var i = k.shift().call(g, h);
									if (b.async._isDeferred(i)) {
										g._nextDeferred = i;
										[].push.apply(i._resolveChain,
												g._resolveChain);
										[].push.apply(i._rejectChain,
												g._rejectChain);
										k = g._resolveChain = [];
										g._rejectChain = []
									}
								} catch (j) {
									throw j
								} finally {
									g._fired = 1;
									g._firing = 0
								}
							}
						}
						g.resolve = g.fireSuccess = function(h) {
							g._result[0] = h;
							e();
							return g
						};
						g.reject = g.fireFail = function(h) {
							g._result[1] = h;
							g._isError = 1;
							e();
							return g
						};
						g.then = function(h, i) {
							g._resolveChain.push(h);
							g._rejectChain.push(i);
							if (g._fired) {
								e()
							}
							return g
						};
						g.success = function(h) {
							return g.then(h, b.fn.blank)
						};
						g.fail = function(h) {
							return g.then(b.fn.blank, h)
						};
						g.cancel = function() {
							g._cancelled = 1
						}
					};
					b.async.get = function(g) {
						var e = new b.async.Deferred();
						b.ajax.request(g, {
							onsuccess : function(i, h) {
								e.resolve({
									xhr : i,
									responseText : h
								})
							},
							onfailure : function(h) {
								e.reject({
									xhr : h
								})
							}
						});
						return e
					};
					b.async.post = function(g, h) {
						var e = new b.async.Deferred();
						b.ajax.request(g, {
							method : "POST",
							data : h,
							onsuccess : function(j, i) {
								e.resolve({
									xhr : j,
									responseText : i
								})
							},
							onfailure : function(i) {
								e.reject({
									xhr : i
								})
							}
						});
						return e
					};
					b.async.when = function(h, g, i) {
						if (b.async._isDeferred(h)) {
							h.then(g, i);
							return h
						}
						var e = new b.async.Deferred();
						e.then(g, i).resolve(h);
						return e
					};
					b.browser = b.browser || {};
					b.browser.chrome = /chrome\/(\d+\.\d+)/i
							.test(navigator.userAgent) ? +RegExp["\x241"]
							: undefined;
					b.browser.firefox = /firefox\/(\d+\.\d+)/i
							.test(navigator.userAgent) ? +RegExp["\x241"]
							: undefined;
					b.browser.ie = b.ie = /msie (\d+\.\d+)/i
							.test(navigator.userAgent) ? (document.documentMode || +RegExp["\x241"])
							: undefined;
					b.browser.isGecko = /gecko/i.test(navigator.userAgent)
							&& !/like gecko/i.test(navigator.userAgent);
					b.browser.isStrict = document.compatMode == "CSS1Compat";
					b.browser.isWebkit = /webkit/i.test(navigator.userAgent);
					try {
						if (/(\d+\.\d+)/.test(external.max_version)) {
							b.browser.maxthon = +RegExp["\x241"]
						}
					} catch (f) {
					}
					b.browser.opera = /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i
							.test(navigator.userAgent) ? +(RegExp["\x246"] || RegExp["\x242"])
							: undefined;
					(function() {
						var e = navigator.userAgent;
						b.browser.safari = /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i
								.test(e)
								&& !/chrome/i.test(e) ? +(RegExp["\x241"] || RegExp["\x242"])
								: undefined
					})();
					b.cookie = b.cookie || {};
					b.cookie._isValidKey = function(e) {
						return (new RegExp(
								'^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24'))
								.test(e)
					};
					b.cookie.getRaw = function(g) {
						if (b.cookie._isValidKey(g)) {
							var h = new RegExp("(^| )" + g + "=([^;]*)(;|\x24)"), e = h
									.exec(document.cookie);
							if (e) {
								return e[2] || null
							}
						}
						return null
					};
					b.cookie.get = function(e) {
						var g = b.cookie.getRaw(e);
						if ("string" == typeof g) {
							g = decodeURIComponent(g);
							return g
						}
						return null
					};
					b.cookie.setRaw = function(h, i, g) {
						if (!b.cookie._isValidKey(h)) {
							return
						}
						g = g || {};
						var e = g.expires;
						if ("number" == typeof g.expires) {
							e = new Date();
							e.setTime(e.getTime() + g.expires)
						}
						document.cookie = h + "=" + i
								+ (g.path ? "; path=" + g.path : "")
								+ (e ? "; expires=" + e.toGMTString() : "")
								+ (g.domain ? "; domain=" + g.domain : "")
								+ (g.secure ? "; secure" : "")
					};
					b.cookie.remove = function(g, e) {
						e = e || {};
						e.expires = new Date(0);
						b.cookie.setRaw(g, "", e)
					};
					b.cookie.set = function(g, h, e) {
						b.cookie.setRaw(g, encodeURIComponent(h), e)
					};
					b.date = b.date || {};
					b.number = b.number || {};
					b.number.pad = function(i, h) {
						var j = "", g = (i < 0), e = String(Math.abs(i));
						if (e.length < h) {
							j = (new Array(h - e.length + 1)).join("0")
						}
						return (g ? "-" : "") + j + e
					};
					b.date.format = function(e, k) {
						if ("string" != typeof k) {
							return e.toString()
						}
						function i(q, p) {
							k = k.replace(q, p)
						}
						var g = b.number.pad, l = e.getFullYear(), j = e
								.getMonth() + 1, o = e.getDate(), m = e
								.getHours(), h = e.getMinutes(), n = e
								.getSeconds();
						i(/yyyy/g, g(l, 4));
						i(/yy/g, g(parseInt(l.toString().slice(2), 10), 2));
						i(/MM/g, g(j, 2));
						i(/M/g, j);
						i(/dd/g, g(o, 2));
						i(/d/g, o);
						i(/HH/g, g(m, 2));
						i(/H/g, m);
						i(/hh/g, g(m % 12, 2));
						i(/h/g, m % 12);
						i(/mm/g, g(h, 2));
						i(/m/g, h);
						i(/ss/g, g(n, 2));
						i(/s/g, n);
						return k
					};
					b.date.parse = function(h) {
						var e = new RegExp(
								"^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+\x24");
						if ("string" == typeof h) {
							if (e.test(h) || isNaN(Date.parse(h))) {
								var j = h.split(/ |T/), g = j.length > 1 ? j[1]
										.split(/[^\d]/) : [ 0, 0, 0 ], i = j[0]
										.split(/[^\d]/);
								return new Date(i[0] - 0, i[1] - 1, i[2] - 0,
										g[0] - 0, g[1] - 0, g[2] - 0)
							} else {
								return new Date(h)
							}
						}
						return new Date()
					};
					b.dom = b.dom || {};
					b.dom.g = function(e) {
						if (!e) {
							return null
						}
						if ("string" == typeof e || e instanceof String) {
							return document.getElementById(e)
						} else {
							if (e.nodeName
									&& (e.nodeType == 1 || e.nodeType == 9)) {
								return e
							}
						}
						return null
					};
					b.g = b.G = b.dom.g;
					b.string = b.string || {};
					(function() {
						var e = new RegExp(
								"(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)",
								"g");
						b.string.trim = function(g) {
							return String(g).replace(e, "")
						}
					})();
					b.trim = b.string.trim;
					b.dom.addClass = function(m, n) {
						m = b.dom.g(m);
						var g = n.split(/\s+/), e = m.className, k = " " + e
								+ " ", j = 0, h = g.length;
						for (; j < h; j++) {
							if (k.indexOf(" " + g[j] + " ") < 0) {
								e += (e ? " " : "") + g[j]
							}
						}
						m.className = e;
						return m
					};
					b.addClass = b.dom.addClass;
					b.dom.children = function(g) {
						g = b.dom.g(g);
						for ( var e = [], h = g.firstChild; h; h = h.nextSibling) {
							if (h.nodeType == 1) {
								e.push(h)
							}
						}
						return e
					};
					b.lang.isString = function(e) {
						return "[object String]" == Object.prototype.toString
								.call(e)
					};
					b.isString = b.lang.isString;
					b.dom._g = function(e) {
						if (b.lang.isString(e)) {
							return document.getElementById(e)
						}
						return e
					};
					b._g = b.dom._g;
					b.dom.contains = function(e, h) {
						var i = b.dom._g;
						e = i(e);
						h = i(h);
						return e.contains ? e != h && e.contains(h) : !!(e
								.compareDocumentPosition(h) & 16)
					};
					b.dom._NAME_ATTRS = (function() {
						var e = {
							cellpadding : "cellPadding",
							cellspacing : "cellSpacing",
							colspan : "colSpan",
							rowspan : "rowSpan",
							valign : "vAlign",
							usemap : "useMap",
							frameborder : "frameBorder"
						};
						if (b.browser.ie < 8) {
							e["for"] = "htmlFor";
							e["class"] = "className"
						} else {
							e.htmlFor = "for";
							e.className = "class"
						}
						return e
					})();
					b.dom.setAttr = function(g, e, h) {
						g = b.dom.g(g);
						if ("style" == e) {
							g.style.cssText = h
						} else {
							e = b.dom._NAME_ATTRS[e] || e;
							g.setAttribute(e, h)
						}
						return g
					};
					b.setAttr = b.dom.setAttr;
					b.dom.setAttrs = function(h, e) {
						h = b.dom.g(h);
						for ( var g in e) {
							b.dom.setAttr(h, g, e[g])
						}
						return h
					};
					b.setAttrs = b.dom.setAttrs;
					b.dom.create = function(h, e) {
						var i = document.createElement(h), g = e || {};
						return b.dom.setAttrs(i, g)
					};
					b.lang.guid = function() {
						return "TANGRAM$" + b.$$._counter++
					};
					b.$$._counter = b.$$._counter || 1;
					b.lang.Class = function() {
						this.guid = b.lang.guid();
						!this.__decontrolled
								&& (b.$$._instances[this.guid] = this)
					};
					b.$$._instances = b.$$._instances || {};
					b.lang.Class.prototype.dispose = function() {
						delete b.$$._instances[this.guid];
						for ( var e in this) {
							typeof this[e] != "function" && delete this[e]
						}
						this.disposed = true
					};
					b.lang.Class.prototype.toString = function() {
						return "[object "
								+ (this.__type || this._className || "Object")
								+ "]"
					};
					window.baiduInstance = function(e) {
						return b.$$._instances[e]
					};
					b.lang.Class.prototype.un = b.lang.Class.prototype.removeEventListener = function(
							j, h) {
						var g, e = this.__listeners;
						if (!e) {
							return
						}
						if (typeof j == "undefined") {
							for (g in e) {
								delete e[g]
							}
							return
						}
						j.indexOf("on") && (j = "on" + j);
						if (typeof h == "undefined") {
							delete e[j]
						} else {
							if (e[j]) {
								typeof h == "string" && (h = e[j][h])
										&& delete e[j][h];
								for (g = e[j].length - 1; g >= 0; g--) {
									if (e[j][g] === h) {
										e[j].splice(g, 1)
									}
								}
							}
						}
					};
					b.lang.Event = function(e, g) {
						this.type = e;
						this.returnValue = true;
						this.target = g || null;
						this.currentTarget = null
					};
					b.lang.Class.prototype.fire = b.lang.Class.prototype.dispatchEvent = function(
							k, e) {
						b.lang.isString(k) && (k = new b.lang.Event(k));
						!this.__listeners && (this.__listeners = {});
						e = e || {};
						for ( var h in e) {
							k[h] = e[h]
						}
						var h, m, j = this, g = j.__listeners, l = k.type;
						k.target = k.target || (k.currentTarget = j);
						l.indexOf("on") && (l = "on" + l);
						typeof j[l] == "function" && j[l].apply(j, arguments);
						if (typeof g[l] == "object") {
							for (h = 0, m = g[l].length; h < m; h++) {
								g[l][h] && g[l][h].apply(j, arguments)
							}
						}
						return k.returnValue
					};
					b.lang.Class.prototype.on = b.lang.Class.prototype.addEventListener = function(
							k, j, h) {
						if (typeof j != "function") {
							return
						}
						!this.__listeners && (this.__listeners = {});
						var g, e = this.__listeners;
						k.indexOf("on") && (k = "on" + k);
						typeof e[k] != "object" && (e[k] = []);
						for (g = e[k].length - 1; g >= 0; g--) {
							if (e[k][g] === j) {
								return j
							}
						}
						e[k].push(j);
						h && typeof h == "string" && (e[k][h] = j);
						return j
					};
					b.lang.createSingle = function(g) {
						var h = new b.lang.Class();
						for ( var e in g) {
							h[e] = g[e]
						}
						return h
					};
					b.dom.ddManager = b.lang.createSingle({
						_targetsDroppingOver : {}
					});
					b.dom.getDocument = function(e) {
						e = b.dom.g(e);
						return e.nodeType == 9 ? e : e.ownerDocument
								|| e.document
					};
					b.dom.getComputedStyle = function(g, e) {
						g = b.dom._g(g);
						var i = b.dom.getDocument(g), h;
						if (i.defaultView && i.defaultView.getComputedStyle) {
							h = i.defaultView.getComputedStyle(g, null);
							if (h) {
								return h[e] || h.getPropertyValue(e)
							}
						}
						return ""
					};
					b.dom._styleFixer = b.dom._styleFixer || {};
					b.dom._styleFilter = b.dom._styleFilter || [];
					b.dom._styleFilter.filter = function(g, k, l) {
						for ( var e = 0, j = b.dom._styleFilter, h; h = j[e]; e++) {
							if (h = h[l]) {
								k = h(g, k)
							}
						}
						return k
					};
					b.string.toCamelCase = function(e) {
						if (e.indexOf("-") < 0 && e.indexOf("_") < 0) {
							return e
						}
						return e.replace(/[-_][^-_]/g, function(g) {
							return g.charAt(1).toUpperCase()
						})
					};
					b.dom.getStyle = function(h, g) {
						var j = b.dom;
						h = j.g(h);
						g = b.string.toCamelCase(g);
						var i = h.style[g]
								|| (h.currentStyle ? h.currentStyle[g] : "")
								|| j.getComputedStyle(h, g);
						if (!i || i == "auto") {
							var e = j._styleFixer[g];
							if (e) {
								i = e.get ? e.get(h, g, i) : b.dom.getStyle(h,
										e)
							}
						}
						if (e = j._styleFilter) {
							i = e.filter(g, i, "get")
						}
						return i
					};
					b.getStyle = b.dom.getStyle;
					b.event = b.event || {};
					b.event._listeners = b.event._listeners || [];
					b.event.on = function(g, j, l) {
						j = j.replace(/^on/i, "");
						g = b.dom._g(g);
						var k = function(n) {
							l.call(g, n)
						}, e = b.event._listeners, i = b.event._eventFilter, m, h = j;
						j = j.toLowerCase();
						if (i && i[j]) {
							m = i[j](g, j, k);
							h = m.type;
							k = m.listener
						}
						if (g.addEventListener) {
							g.addEventListener(h, k, false)
						} else {
							if (g.attachEvent) {
								g.attachEvent("on" + h, k)
							}
						}
						e[e.length] = [ g, j, l, k, h ];
						return g
					};
					b.on = b.event.on;
					b.page = b.page || {};
					b.page.getScrollTop = function() {
						var e = document;
						return window.pageYOffset
								|| e.documentElement.scrollTop
								|| e.body.scrollTop
					};
					b.page.getScrollLeft = function() {
						var e = document;
						return window.pageXOffset
								|| e.documentElement.scrollLeft
								|| e.body.scrollLeft
					};
					(function() {
						b.page.getMousePosition = function() {
							return {
								x : b.page.getScrollLeft() + e.x,
								y : b.page.getScrollTop() + e.y
							}
						};
						var e = {
							x : 0,
							y : 0
						};
						b.event.on(document, "onmousemove", function(g) {
							g = window.event || g;
							e.x = g.clientX;
							e.y = g.clientY
						})
					})();
					b.event.un = function(h, k, g) {
						h = b.dom._g(h);
						k = k.replace(/^on/i, "").toLowerCase();
						var n = b.event._listeners, i = n.length, j = !g, m, l, e;
						while (i--) {
							m = n[i];
							if (m[1] === k && m[0] === h && (j || m[2] === g)) {
								l = m[4];
								e = m[3];
								if (h.removeEventListener) {
									h.removeEventListener(l, e, false)
								} else {
									if (h.detachEvent) {
										h.detachEvent("on" + l, e)
									}
								}
								n.splice(i, 1)
							}
						}
						return h
					};
					b.un = b.event.un;
					b.event.preventDefault = function(e) {
						if (e.preventDefault) {
							e.preventDefault()
						} else {
							e.returnValue = false
						}
					};
					b.lang.isObject = function(e) {
						return "function" == typeof e
								|| !!(e && "object" == typeof e)
					};
					b.isObject = b.lang.isObject;
					(function() {
						var n, m, j, i, h, k, q, e, p, r;
						b.dom.drag = function(t, s) {
							if (!(n = b.dom.g(t))) {
								return false
							}
							m = b.object.extend({
								autoStop : true,
								capture : true,
								interval : 16
							}, s);
							e = k = parseInt(b.dom.getStyle(n, "left")) || 0;
							p = q = parseInt(b.dom.getStyle(n, "top")) || 0;
							setTimeout(
									function() {
										var u = b.page.getMousePosition();
										j = m.mouseEvent ? (b.page
												.getScrollLeft() + m.mouseEvent.clientX)
												: u.x;
										i = m.mouseEvent ? (b.page
												.getScrollTop() + m.mouseEvent.clientY)
												: u.y;
										clearInterval(h);
										h = setInterval(g, m.interval)
									}, 1);
							m.autoStop && b.event.on(document, "mouseup", o);
							b.event.on(document, "selectstart", l);
							if (m.capture && n.setCapture) {
								n.setCapture()
							} else {
								if (m.capture && window.captureEvents) {
									window.captureEvents(Event.MOUSEMOVE
											| Event.MOUSEUP)
								}
							}
							r = document.body.style.MozUserSelect;
							document.body.style.MozUserSelect = "none";
							b.lang.isFunction(m.ondragstart)
									&& m.ondragstart(n, m);
							return {
								stop : o,
								dispose : o,
								update : function(u) {
									b.object.extend(m, u)
								}
							}
						};
						function o() {
							clearInterval(h);
							if (m.capture && n.releaseCapture) {
								n.releaseCapture()
							} else {
								if (m.capture && window.captureEvents) {
									window.captureEvents(Event.MOUSEMOVE
											| Event.MOUSEUP)
								}
							}
							document.body.style.MozUserSelect = r;
							b.event.un(document, "selectstart", l);
							m.autoStop && b.event.un(document, "mouseup", o);
							b.lang.isFunction(m.ondragend)
									&& m.ondragend(n, m, {
										left : e,
										top : p
									})
						}
						function g(w) {
							var t = m.range || [], s = b.page
									.getMousePosition(), u = k + s.x - j, v = q
									+ s.y - i;
							if (b.lang.isObject(t) && t.length == 4) {
								u = Math.max(t[3], u);
								u = Math.min(t[1] - n.offsetWidth, u);
								v = Math.max(t[0], v);
								v = Math.min(t[2] - n.offsetHeight, v)
							}
							n.style.left = u + "px";
							n.style.top = v + "px";
							e = u;
							p = v;
							b.lang.isFunction(m.ondrag) && m.ondrag(n, m, {
								left : e,
								top : p
							})
						}
						function l(s) {
							return b.event.preventDefault(s, false)
						}
					})();
					b.dom.setStyle = function(h, g, i) {
						var j = b.dom, e;
						h = j.g(h);
						g = b.string.toCamelCase(g);
						if (e = j._styleFilter) {
							i = e.filter(g, i, "set")
						}
						e = j._styleFixer[g];
						(e && e.set) ? e.set(h, i, g) : (h.style[e || g] = i);
						return h
					};
					b.setStyle = b.dom.setStyle;
					b.dom.draggable = function(g, p) {
						p = b.object.extend({
							toggle : function() {
								return true
							}
						}, p);
						p.autoStop = true;
						g = b.dom.g(g);
						p.handler = p.handler || g;
						var e, n = [ "ondragstart", "ondrag", "ondragend" ], h = n.length - 1, j, o, l = {
							dispose : function() {
								o && o.stop();
								b.event.un(p.handler, "onmousedown", m);
								b.lang.Class.prototype.dispose.call(l)
							}
						}, k = this;
						if (e = b.dom.ddManager) {
							for (; h >= 0; h--) {
								j = n[h];
								p[j] = (function(i) {
									var q = p[i];
									return function() {
										b.lang.isFunction(q)
												&& q.apply(k, arguments);
										e.dispatchEvent(i, {
											DOM : g
										})
									}
								})(j)
							}
						}
						if (g) {
							function m(q) {
								var i = p.mouseEvent = window.event || q;
								p.mouseEvent = {
									clientX : i.clientX,
									clientY : i.clientY
								};
								if (i.button > 1
										|| (b.lang.isFunction(p.toggle) && !p
												.toggle())) {
									return
								}
								if (b.lang.isFunction(p.onbeforedragstart)) {
									p.onbeforedragstart(g)
								}
								o = b.dom.drag(g, p);
								l.stop = o.stop;
								l.update = o.update;
								b.event.preventDefault(i)
							}
							b.event.on(p.handler, "onmousedown", m)
						}
						return {
							cancel : function() {
								l.dispose()
							}
						}
					};
					b.dom.getPosition = function(e) {
						e = b.dom.g(e);
						var o = b.dom.getDocument(e), i = b.browser, l = b.dom.getStyle, h = i.isGecko > 0
								&& o.getBoxObjectFor
								&& l(e, "position") == "absolute"
								&& (e.style.top === "" || e.style.left === ""), m = {
							left : 0,
							top : 0
						}, k = (i.ie && !i.isStrict) ? o.body
								: o.documentElement, p, g;
						if (e == k) {
							return m
						}
						if (e.getBoundingClientRect) {
							g = e.getBoundingClientRect();
							m.left = Math.floor(g.left)
									+ Math.max(o.documentElement.scrollLeft,
											o.body.scrollLeft);
							m.top = Math.floor(g.top)
									+ Math.max(o.documentElement.scrollTop,
											o.body.scrollTop);
							m.left -= o.documentElement.clientLeft;
							m.top -= o.documentElement.clientTop;
							var n = o.body, q = parseInt(l(n, "borderLeftWidth")), j = parseInt(l(
									n, "borderTopWidth"));
							if (i.ie && !i.isStrict) {
								m.left -= isNaN(q) ? 2 : q;
								m.top -= isNaN(j) ? 2 : j
							}
						} else {
							p = e;
							do {
								m.left += p.offsetLeft;
								m.top += p.offsetTop;
								if (i.isWebkit > 0
										&& l(p, "position") == "fixed") {
									m.left += o.body.scrollLeft;
									m.top += o.body.scrollTop;
									break
								}
								p = p.offsetParent
							} while (p && p != e);
							if (i.opera > 0
									|| (i.isWebkit > 0 && l(e, "position") == "absolute")) {
								m.top -= o.body.offsetTop
							}
							p = e.offsetParent;
							while (p && p != o.body) {
								m.left -= p.scrollLeft;
								if (!i.opera || p.tagName != "TR") {
									m.top -= p.scrollTop
								}
								p = p.offsetParent
							}
						}
						return m
					};
					b.dom.intersect = function(n, m) {
						var l = b.dom.g, k = b.dom.getPosition, e = Math.max, i = Math.min;
						n = l(n);
						m = l(m);
						var j = k(n), h = k(m);
						return e(j.left, h.left) <= i(j.left + n.offsetWidth,
								h.left + m.offsetWidth)
								&& e(j.top, h.top) <= i(j.top + n.offsetHeight,
										h.top + m.offsetHeight)
					};
					b.dom.droppable = function(j, h) {
						h = h || {};
						var i = b.dom.ddManager, l = b.dom.g(j), g = b.lang
								.guid(), k = function(o) {
							var n = i._targetsDroppingOver, m = {
								trigger : o.DOM,
								reciever : l
							};
							if (b.dom.intersect(l, o.DOM)) {
								if (!n[g]) {
									(typeof h.ondropover == "function")
											&& h.ondropover.call(l, m);
									i.dispatchEvent("ondropover", m);
									n[g] = true
								}
							} else {
								if (n[g]) {
									(typeof h.ondropout == "function")
											&& h.ondropout.call(l, m);
									i.dispatchEvent("ondropout", m)
								}
								delete n[g]
							}
						}, e = function(n) {
							var m = {
								trigger : n.DOM,
								reciever : l
							};
							if (b.dom.intersect(l, n.DOM)) {
								typeof h.ondrop == "function"
										&& h.ondrop.call(l, m);
								i.dispatchEvent("ondrop", m)
							}
							delete i._targetsDroppingOver[g]
						};
						i.addEventListener("ondrag", k);
						i.addEventListener("ondragend", e);
						return {
							cancel : function() {
								i.removeEventListener("ondrag", k);
								i.removeEventListener("ondragend", e)
							}
						}
					};
					b.dom.empty = function(e) {
						e = b.dom.g(e);
						while (e.firstChild) {
							e.removeChild(e.firstChild)
						}
						return e
					};
					b.dom._matchNode = function(e, h, i) {
						e = b.dom.g(e);
						for ( var g = e[i]; g; g = g[h]) {
							if (g.nodeType == 1) {
								return g
							}
						}
						return null
					};
					b.dom.first = function(e) {
						return b.dom._matchNode(e, "nextSibling", "firstChild")
					};
					b.dom.getAttr = function(g, e) {
						g = b.dom.g(g);
						if ("style" == e) {
							return g.style.cssText
						}
						e = b.dom._NAME_ATTRS[e] || e;
						return g.getAttribute(e)
					};
					b.getAttr = b.dom.getAttr;
					b.dom.setStyles = function(g, h) {
						g = b.dom.g(g);
						for ( var e in h) {
							b.dom.setStyle(g, e, h[e])
						}
						return g
					};
					b.setStyles = b.dom.setStyles;
					b.page.getViewHeight = function() {
						var g = document, e = g.compatMode == "BackCompat" ? g.body
								: g.documentElement;
						return e.clientHeight
					};
					b.page.getViewWidth = function() {
						var g = document, e = g.compatMode == "BackCompat" ? g.body
								: g.documentElement;
						return e.clientWidth
					};
					b.dom._styleFilter[b.dom._styleFilter.length] = {
						set : function(e, g) {
							if (g.constructor == Number
									&& !/zIndex|fontWeight|opacity|zoom|lineHeight/i
											.test(e)) {
								g = g + "px"
							}
							return g
						}
					};
					b.dom.fixable = function(e, g) {
						var y = b.g(e), t = b.browser.ie && b.browser.ie <= 7 ? true
								: false, o = g.vertival || "top", w = g.horizontal
								|| "left", v = typeof g.autofix != "undefined" ? g.autofix
								: true, n, i, m = false, q = g.onrender
								|| new Function(), h = g.onupdate
								|| new Function(), p = g.onrelease
								|| new Function();
						if (!y) {
							return
						}
						n = l();
						i = {
							y : t ? (n.position == "static" ? b.dom
									.getPosition(y).top
									: b.dom.getPosition(y).top
											- b.dom.getPosition(y.parentNode).top)
									: y.offsetTop,
							x : t ? (n.position == "static" ? b.dom
									.getPosition(y).left
									: b.dom.getPosition(y).left
											- b.dom.getPosition(y.parentNode).left)
									: y.offsetLeft
						};
						b.extend(i, g.offset || {});
						v && x();
						function u() {
							return {
								top : o == "top" ? i.y : b.page.getViewHeight()
										- i.y - n.height,
								left : w == "left" ? i.x : b.page
										.getViewWidth()
										- i.x - n.width
							}
						}
						function r() {
							var z = u();
							y.style.setExpression("left",
									"eval((document.body.scrollLeft || document.documentElement.scrollLeft) + "
											+ z.left + ") + 'px'");
							y.style.setExpression("top",
									"eval((document.body.scrollTop || document.documentElement.scrollTop) + "
											+ z.top + ") + 'px'")
						}
						function l() {
							var z = {
								position : b.getStyle(y, "position"),
								height : function() {
									var A = b.getStyle(y, "height");
									return (A != "auto") ? (/\d+/.exec(A)[0])
											: y.offsetHeight
								}(),
								width : function() {
									var A = b.getStyle(y, "width");
									return (A != "auto") ? (/\d+/.exec(A)[0])
											: y.offsetWidth
								}()
							};
							j("top", z);
							j("left", z);
							j("bottom", z);
							j("right", z);
							return z
						}
						function j(A, B) {
							var z;
							if (B.position == "static") {
								B[A] = ""
							} else {
								z = b.getStyle(y, A);
								if (z == "auto" || z == "0px") {
									B[A] = ""
								} else {
									B[A] = z
								}
							}
						}
						function x() {
							if (m) {
								return
							}
							b.setStyles(y, {
								top : "",
								left : "",
								bottom : "",
								right : ""
							});
							if (!t) {
								var z = {
									position : "fixed"
								};
								z[o == "top" ? "top" : "bottom"] = i.y + "px";
								z[w == "left" ? "left" : "right"] = i.x + "px";
								b.setStyles(y, z)
							} else {
								b.setStyle(y, "position", "absolute");
								r()
							}
							q();
							m = true
						}
						function s() {
							if (!m) {
								return
							}
							var z = {
								position : n.position,
								left : n.left == "" ? "auto" : n.left,
								top : n.top == "" ? "auto" : n.top,
								bottom : n.bottom == "" ? "auto" : n.bottom,
								right : n.right == "" ? "auto" : n.right
							};
							if (t) {
								y.style.removeExpression("left");
								y.style.removeExpression("top")
							}
							b.setStyles(y, z);
							p();
							m = false
						}
						function k(z) {
							if (!z) {
								return
							}
							q = z.onrender || q;
							h = z.onupdate || h;
							p = z.onrelease || p;
							o = z.vertival || "top";
							w = z.horizontal || "left";
							b.extend(i, z.offset || {});
							h()
						}
						return {
							render : x,
							update : k,
							release : s
						}
					};
					b.dom.getAncestorBy = function(e, g) {
						e = b.dom.g(e);
						while ((e = e.parentNode) && e.nodeType == 1) {
							if (g(e)) {
								return e
							}
						}
						return null
					};
					b.dom.getAncestorByClass = function(e, g) {
						e = b.dom.g(e);
						g = new RegExp("(^|\\s)" + b.string.trim(g)
								+ "(\\s|\x24)");
						while ((e = e.parentNode) && e.nodeType == 1) {
							if (g.test(e.className)) {
								return e
							}
						}
						return null
					};
					b.dom.getAncestorByTag = function(g, e) {
						g = b.dom.g(g);
						e = e.toUpperCase();
						while ((g = g.parentNode) && g.nodeType == 1) {
							if (g.tagName == e) {
								return g
							}
						}
						return null
					};
					b.dom.getCurrentStyle = function(g, e) {
						g = b.dom.g(g);
						return g.style[e]
								|| (g.currentStyle ? g.currentStyle[e] : "")
								|| b.dom.getComputedStyle(g, e)
					};
					b.dom.getParent = function(e) {
						e = b.dom._g(e);
						return e.parentElement || e.parentNode || null
					};
					b.dom.getText = function(j) {
						var g = "", k, h = 0, e;
						j = b._g(j);
						if (j.nodeType === 3 || j.nodeType === 4) {
							g += j.nodeValue
						} else {
							if (j.nodeType !== 8) {
								k = j.childNodes;
								for (e = k.length; h < e; h++) {
									g += b.dom.getText(k[h])
								}
							}
						}
						return g
					};
					b.dom.getWindow = function(e) {
						e = b.dom.g(e);
						var g = b.dom.getDocument(e);
						return g.parentWindow || g.defaultView || null
					};
					b.dom.hasAttr = function(h, g) {
						h = b.g(h);
						var e = h.attributes.getNamedItem(g);
						return !!(e && e.specified)
					};
					b.dom.hasClass = function(h, i) {
						h = b.dom.g(h);
						if (!h || !h.className) {
							return false
						}
						var g = b.string.trim(i).split(/\s+/), e = g.length;
						i = h.className.split(/\s+/).join(" ");
						while (e--) {
							if (!(new RegExp("(^| )" + g[e] + "( |\x24)"))
									.test(i)) {
								return false
							}
						}
						return true
					};
					b.dom.hide = function(e) {
						e = b.dom.g(e);
						e.style.display = "none";
						return e
					};
					b.hide = b.dom.hide;
					b.dom.insertAfter = function(j, i) {
						var h, e;
						h = b.dom._g;
						j = h(j);
						i = h(i);
						e = i.parentNode;
						if (e) {
							e.insertBefore(j, i.nextSibling)
						}
						return j
					};
					b.dom.insertBefore = function(j, i) {
						var h, e;
						h = b.dom._g;
						j = h(j);
						i = h(i);
						e = i.parentNode;
						if (e) {
							e.insertBefore(j, i)
						}
						return j
					};
					b.dom.insertHTML = function(i, e, h) {
						i = b.dom.g(i);
						var g, j;
						if (i.insertAdjacentHTML && !b.browser.opera) {
							i.insertAdjacentHTML(e, h)
						} else {
							g = i.ownerDocument.createRange();
							e = e.toUpperCase();
							if (e == "AFTERBEGIN" || e == "BEFOREEND") {
								g.selectNodeContents(i);
								g.collapse(e == "AFTERBEGIN")
							} else {
								j = e == "BEFOREBEGIN";
								g[j ? "setStartBefore" : "setEndAfter"](i);
								g.collapse(j)
							}
							g.insertNode(g.createContextualFragment(h))
						}
						return i
					};
					b.insertHTML = b.dom.insertHTML;
					b.dom.last = function(e) {
						return b.dom._matchNode(e, "previousSibling",
								"lastChild")
					};
					b.dom.next = function(e) {
						return b.dom
								._matchNode(e, "nextSibling", "nextSibling")
					};
					b.dom.opacity = function(g, e) {
						g = b.dom.g(g);
						if (!b.browser.ie) {
							g.style.opacity = e;
							g.style.KHTMLOpacity = e
						} else {
							g.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity:"
									+ Math.floor(e * 100) + ")"
						}
					};
					b.dom.prev = function(e) {
						return b.dom._matchNode(e, "previousSibling",
								"previousSibling")
					};
					b.string.escapeReg = function(e) {
						return String(e).replace(
								new RegExp("([.*+?^=!:\x24{}()|[\\]/\\\\])",
										"g"), "\\\x241")
					};
					b.dom.q = function(n, k, g) {
						var o = [], j = b.string.trim, m, l, e, h;
						if (!(n = j(n))) {
							return o
						}
						if ("undefined" == typeof k) {
							k = document
						} else {
							k = b.dom.g(k);
							if (!k) {
								return o
							}
						}
						g && (g = j(g).toUpperCase());
						if (k.getElementsByClassName) {
							e = k.getElementsByClassName(n);
							m = e.length;
							for (l = 0; l < m; l++) {
								h = e[l];
								if (g && h.tagName != g) {
									continue
								}
								o[o.length] = h
							}
						} else {
							n = new RegExp("(^|\\s)" + b.string.escapeReg(n)
									+ "(\\s|\x24)");
							e = g ? k.getElementsByTagName(g) : (k.all || k
									.getElementsByTagName("*"));
							m = e.length;
							for (l = 0; l < m; l++) {
								h = e[l];
								n.test(h.className) && (o[o.length] = h)
							}
						}
						return o
					};
					b.q = b.Q = b.dom.q;
					/*
					 * ! Sizzle CSS Selector Engine Copyright 2011, The Dojo
					 * Foundation Released under the MIT, BSD, and GPL Licenses.
					 * More information: http://sizzlejs.com/
					 */
					(function() {
						var s = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, n = "sizcache"
								+ (Math.random() + "").replace(".", ""), t = 0, w = Object.prototype.toString, m = false, l = true, v = /\\/g, z = /\r\n/g, B = /\W/;
						[ 0, 0 ].sort(function() {
							l = false;
							return 0
						});
						var j = function(H, e, K, L) {
							K = K || [];
							e = e || document;
							var N = e;
							if (e.nodeType !== 1 && e.nodeType !== 9) {
								return []
							}
							if (!H || typeof H !== "string") {
								return K
							}
							var D, P, S, C, O, R, Q, J, G = true, E = j
									.isXML(e), I = [], M = H;
							do {
								s.exec("");
								D = s.exec(M);
								if (D) {
									M = D[3];
									I.push(D[1]);
									if (D[2]) {
										C = D[3];
										break
									}
								}
							} while (D);
							if (I.length > 1 && o.exec(H)) {
								if (I.length === 2 && p.relative[I[0]]) {
									P = x(I[0] + I[1], e, L)
								} else {
									P = p.relative[I[0]] ? [ e ] : j(I.shift(),
											e);
									while (I.length) {
										H = I.shift();
										if (p.relative[H]) {
											H += I.shift()
										}
										P = x(H, P, L)
									}
								}
							} else {
								if (!L && I.length > 1 && e.nodeType === 9
										&& !E && p.match.ID.test(I[0])
										&& !p.match.ID.test(I[I.length - 1])) {
									O = j.find(I.shift(), e, E);
									e = O.expr ? j.filter(O.expr, O.set)[0]
											: O.set[0]
								}
								if (e) {
									O = L ? {
										expr : I.pop(),
										set : q(L)
									} : j.find(I.pop(), I.length === 1
											&& (I[0] === "~" || I[0] === "+")
											&& e.parentNode ? e.parentNode : e,
											E);
									P = O.expr ? j.filter(O.expr, O.set)
											: O.set;
									if (I.length > 0) {
										S = q(P)
									} else {
										G = false
									}
									while (I.length) {
										R = I.pop();
										Q = R;
										if (!p.relative[R]) {
											R = ""
										} else {
											Q = I.pop()
										}
										if (Q == null) {
											Q = e
										}
										p.relative[R](S, Q, E)
									}
								} else {
									S = I = []
								}
							}
							if (!S) {
								S = P
							}
							if (!S) {
								j.error(R || H)
							}
							if (w.call(S) === "[object Array]") {
								if (!G) {
									K.push.apply(K, S)
								} else {
									if (e && e.nodeType === 1) {
										for (J = 0; S[J] != null; J++) {
											if (S[J]
													&& (S[J] === true || S[J].nodeType === 1
															&& j.contains(e,
																	S[J]))) {
												K.push(P[J])
											}
										}
									} else {
										for (J = 0; S[J] != null; J++) {
											if (S[J] && S[J].nodeType === 1) {
												K.push(P[J])
											}
										}
									}
								}
							} else {
								q(S, K)
							}
							if (C) {
								j(C, N, K, L);
								j.uniqueSort(K)
							}
							return K
						};
						j.uniqueSort = function(C) {
							if (u) {
								m = l;
								C.sort(u);
								if (m) {
									for ( var e = 1; e < C.length; e++) {
										if (C[e] === C[e - 1]) {
											C.splice(e--, 1)
										}
									}
								}
							}
							return C
						};
						j.matches = function(e, C) {
							return j(e, null, null, C)
						};
						j.matchesSelector = function(e, C) {
							return j(C, null, null, [ e ]).length > 0
						};
						j.find = function(J, e, K) {
							var I, D, G, E, H, C;
							if (!J) {
								return []
							}
							for (D = 0, G = p.order.length; D < G; D++) {
								H = p.order[D];
								if ((E = p.leftMatch[H].exec(J))) {
									C = E[1];
									E.splice(1, 1);
									if (C.substr(C.length - 1) !== "\\") {
										E[1] = (E[1] || "").replace(v, "");
										I = p.find[H](E, e, K);
										if (I != null) {
											J = J.replace(p.match[H], "");
											break
										}
									}
								}
							}
							if (!I) {
								I = typeof e.getElementsByTagName !== "undefined" ? e
										.getElementsByTagName("*")
										: []
							}
							return {
								set : I,
								expr : J
							}
						};
						j.filter = function(N, M, Q, G) {
							var I, e, L, S, P, C, E, H, O, D = N, R = [], K = M, J = M
									&& M[0] && j.isXML(M[0]);
							while (N && M.length) {
								for (L in p.filter) {
									if ((I = p.leftMatch[L].exec(N)) != null
											&& I[2]) {
										C = p.filter[L];
										E = I[1];
										e = false;
										I.splice(1, 1);
										if (E.substr(E.length - 1) === "\\") {
											continue
										}
										if (K === R) {
											R = []
										}
										if (p.preFilter[L]) {
											I = p.preFilter[L]
													(I, K, Q, R, G, J);
											if (!I) {
												e = S = true
											} else {
												if (I === true) {
													continue
												}
											}
										}
										if (I) {
											for (H = 0; (P = K[H]) != null; H++) {
												if (P) {
													S = C(P, I, H, K);
													O = G ^ S;
													if (Q && S != null) {
														if (O) {
															e = true
														} else {
															K[H] = false
														}
													} else {
														if (O) {
															R.push(P);
															e = true
														}
													}
												}
											}
										}
										if (S !== undefined) {
											if (!Q) {
												K = R
											}
											N = N.replace(p.match[L], "");
											if (!e) {
												return []
											}
											break
										}
									}
								}
								if (N === D) {
									if (e == null) {
										j.error(N)
									} else {
										break
									}
								}
								D = N
							}
							return K
						};
						j.error = function(e) {
							throw "Syntax error, unrecognized expression: " + e
						};
						var h = j.getText = function(G) {
							var D, E, e = G.nodeType, C = "";
							if (e) {
								if (e === 1) {
									if (typeof G.textContent === "string") {
										return G.textContent
									} else {
										if (typeof G.innerText === "string") {
											return G.innerText.replace(z, "")
										} else {
											for (G = G.firstChild; G; G = G.nextSibling) {
												C += h(G)
											}
										}
									}
								} else {
									if (e === 3 || e === 4) {
										return G.nodeValue
									}
								}
							} else {
								for (D = 0; (E = G[D]); D++) {
									if (E.nodeType !== 8) {
										C += h(E)
									}
								}
							}
							return C
						};
						var p = j.selectors = {
							order : [ "ID", "NAME", "TAG" ],
							match : {
								ID : /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
								CLASS : /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
								NAME : /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
								ATTR : /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
								TAG : /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
								CHILD : /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
								POS : /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
								PSEUDO : /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
							},
							leftMatch : {},
							attrMap : {
								"class" : "className",
								"for" : "htmlFor"
							},
							attrHandle : {
								href : function(e) {
									return e.getAttribute("href")
								},
								type : function(e) {
									return e.getAttribute("type")
								}
							},
							relative : {
								"+" : function(I, C) {
									var E = typeof C === "string", H = E
											&& !B.test(C), J = E && !H;
									if (H) {
										C = C.toLowerCase()
									}
									for ( var D = 0, e = I.length, G; D < e; D++) {
										if ((G = I[D])) {
											while ((G = G.previousSibling)
													&& G.nodeType !== 1) {
											}
											I[D] = J
													|| G
													&& G.nodeName.toLowerCase() === C ? G || false
													: G === C
										}
									}
									if (J) {
										j.filter(C, I, true)
									}
								},
								">" : function(I, C) {
									var H, G = typeof C === "string", D = 0, e = I.length;
									if (G && !B.test(C)) {
										C = C.toLowerCase();
										for (; D < e; D++) {
											H = I[D];
											if (H) {
												var E = H.parentNode;
												I[D] = E.nodeName.toLowerCase() === C ? E
														: false
											}
										}
									} else {
										for (; D < e; D++) {
											H = I[D];
											if (H) {
												I[D] = G ? H.parentNode
														: H.parentNode === C
											}
										}
										if (G) {
											j.filter(C, I, true)
										}
									}
								},
								"" : function(E, C, H) {
									var G, D = t++, e = y;
									if (typeof C === "string" && !B.test(C)) {
										C = C.toLowerCase();
										G = C;
										e = g
									}
									e("parentNode", C, D, E, G, H)
								},
								"~" : function(E, C, H) {
									var G, D = t++, e = y;
									if (typeof C === "string" && !B.test(C)) {
										C = C.toLowerCase();
										G = C;
										e = g
									}
									e("previousSibling", C, D, E, G, H)
								}
							},
							find : {
								ID : function(C, D, E) {
									if (typeof D.getElementById !== "undefined"
											&& !E) {
										var e = D.getElementById(C[1]);
										return e && e.parentNode ? [ e ] : []
									}
								},
								NAME : function(D, H) {
									if (typeof H.getElementsByName !== "undefined") {
										var C = [], G = H
												.getElementsByName(D[1]);
										for ( var E = 0, e = G.length; E < e; E++) {
											if (G[E].getAttribute("name") === D[1]) {
												C.push(G[E])
											}
										}
										return C.length === 0 ? null : C
									}
								},
								TAG : function(e, C) {
									if (typeof C.getElementsByTagName !== "undefined") {
										return C.getElementsByTagName(e[1])
									}
								}
							},
							preFilter : {
								CLASS : function(E, C, D, e, I, J) {
									E = " " + E[1].replace(v, "") + " ";
									if (J) {
										return E
									}
									for ( var G = 0, H; (H = C[G]) != null; G++) {
										if (H) {
											if (I
													^ (H.className && (" "
															+ H.className + " ")
															.replace(
																	/[\t\n\r]/g,
																	" ")
															.indexOf(E) >= 0)) {
												if (!D) {
													e.push(H)
												}
											} else {
												if (D) {
													C[G] = false
												}
											}
										}
									}
									return false
								},
								ID : function(e) {
									return e[1].replace(v, "")
								},
								TAG : function(C, e) {
									return C[1].replace(v, "").toLowerCase()
								},
								CHILD : function(e) {
									if (e[1] === "nth") {
										if (!e[2]) {
											j.error(e[0])
										}
										e[2] = e[2].replace(/^\+|\s*/g, "");
										var C = /(-?)(\d*)(?:n([+\-]?\d*))?/
												.exec(e[2] === "even" && "2n"
														|| e[2] === "odd"
														&& "2n+1"
														|| !/\D/.test(e[2])
														&& "0n+" + e[2] || e[2]);
										e[2] = (C[1] + (C[2] || 1)) - 0;
										e[3] = C[3] - 0
									} else {
										if (e[2]) {
											j.error(e[0])
										}
									}
									e[0] = t++;
									return e
								},
								ATTR : function(G, C, D, e, H, I) {
									var E = G[1] = G[1].replace(v, "");
									if (!I && p.attrMap[E]) {
										G[1] = p.attrMap[E]
									}
									G[4] = (G[4] || G[5] || "").replace(v, "");
									if (G[2] === "~=") {
										G[4] = " " + G[4] + " "
									}
									return G
								},
								PSEUDO : function(G, C, D, e, H) {
									if (G[1] === "not") {
										if ((s.exec(G[3]) || "").length > 1
												|| /^\w/.test(G[3])) {
											G[3] = j(G[3], null, null, C)
										} else {
											var E = j.filter(G[3], C, D,
													true ^ H);
											if (!D) {
												e.push.apply(e, E)
											}
											return false
										}
									} else {
										if (p.match.POS.test(G[0])
												|| p.match.CHILD.test(G[0])) {
											return true
										}
									}
									return G
								},
								POS : function(e) {
									e.unshift(true);
									return e
								}
							},
							filters : {
								enabled : function(e) {
									return e.disabled === false
											&& e.type !== "hidden"
								},
								disabled : function(e) {
									return e.disabled === true
								},
								checked : function(e) {
									return e.checked === true
								},
								selected : function(e) {
									if (e.parentNode) {
										e.parentNode.selectedIndex
									}
									return e.selected === true
								},
								parent : function(e) {
									return !!e.firstChild
								},
								empty : function(e) {
									return !e.firstChild
								},
								has : function(D, C, e) {
									return !!j(e[3], D).length
								},
								header : function(e) {
									return (/h\d/i).test(e.nodeName)
								},
								text : function(D) {
									var e = D.getAttribute("type"), C = D.type;
									return D.nodeName.toLowerCase() === "input"
											&& "text" === C
											&& (e === C || e === null)
								},
								radio : function(e) {
									return e.nodeName.toLowerCase() === "input"
											&& "radio" === e.type
								},
								checkbox : function(e) {
									return e.nodeName.toLowerCase() === "input"
											&& "checkbox" === e.type
								},
								file : function(e) {
									return e.nodeName.toLowerCase() === "input"
											&& "file" === e.type
								},
								password : function(e) {
									return e.nodeName.toLowerCase() === "input"
											&& "password" === e.type
								},
								submit : function(C) {
									var e = C.nodeName.toLowerCase();
									return (e === "input" || e === "button")
											&& "submit" === C.type
								},
								image : function(e) {
									return e.nodeName.toLowerCase() === "input"
											&& "image" === e.type
								},
								reset : function(C) {
									var e = C.nodeName.toLowerCase();
									return (e === "input" || e === "button")
											&& "reset" === C.type
								},
								button : function(C) {
									var e = C.nodeName.toLowerCase();
									return e === "input" && "button" === C.type
											|| e === "button"
								},
								input : function(e) {
									return (/input|select|textarea|button/i)
											.test(e.nodeName)
								},
								focus : function(e) {
									return e === e.ownerDocument.activeElement
								}
							},
							setFilters : {
								first : function(C, e) {
									return e === 0
								},
								last : function(D, C, e, E) {
									return C === E.length - 1
								},
								even : function(C, e) {
									return e % 2 === 0
								},
								odd : function(C, e) {
									return e % 2 === 1
								},
								lt : function(D, C, e) {
									return C < e[3] - 0
								},
								gt : function(D, C, e) {
									return C > e[3] - 0
								},
								nth : function(D, C, e) {
									return e[3] - 0 === C
								},
								eq : function(D, C, e) {
									return e[3] - 0 === C
								}
							},
							filter : {
								PSEUDO : function(D, J, I, K) {
									var e = J[1], C = p.filters[e];
									if (C) {
										return C(D, I, J, K)
									} else {
										if (e === "contains") {
											return (D.textContent
													|| D.innerText || h([ D ]) || "")
													.indexOf(J[3]) >= 0
										} else {
											if (e === "not") {
												var E = J[3];
												for ( var H = 0, G = E.length; H < G; H++) {
													if (E[H] === D) {
														return false
													}
												}
												return true
											} else {
												j.error(e)
											}
										}
									}
								},
								CHILD : function(D, G) {
									var E, M, I, L, e, H, K, J = G[1], C = D;
									switch (J) {
									case "only":
									case "first":
										while ((C = C.previousSibling)) {
											if (C.nodeType === 1) {
												return false
											}
										}
										if (J === "first") {
											return true
										}
										C = D;
									case "last":
										while ((C = C.nextSibling)) {
											if (C.nodeType === 1) {
												return false
											}
										}
										return true;
									case "nth":
										E = G[2];
										M = G[3];
										if (E === 1 && M === 0) {
											return true
										}
										I = G[0];
										L = D.parentNode;
										if (L && (L[n] !== I || !D.nodeIndex)) {
											H = 0;
											for (C = L.firstChild; C; C = C.nextSibling) {
												if (C.nodeType === 1) {
													C.nodeIndex = ++H
												}
											}
											L[n] = I
										}
										K = D.nodeIndex - M;
										if (E === 0) {
											return K === 0
										} else {
											return (K % E === 0 && K / E >= 0)
										}
									}
								},
								ID : function(C, e) {
									return C.nodeType === 1
											&& C.getAttribute("id") === e
								},
								TAG : function(C, e) {
									return (e === "*" && C.nodeType === 1)
											|| !!C.nodeName
											&& C.nodeName.toLowerCase() === e
								},
								CLASS : function(C, e) {
									return (" "
											+ (C.className || C
													.getAttribute("class")) + " ")
											.indexOf(e) > -1
								},
								ATTR : function(H, E) {
									var D = E[1], e = j.attr ? j.attr(H, D)
											: p.attrHandle[D] ? p.attrHandle[D]
													(H) : H[D] != null ? H[D]
													: H.getAttribute(D), I = e
											+ "", G = E[2], C = E[4];
									return e == null ? G === "!="
											: !G && j.attr ? e != null
													: G === "=" ? I === C
															: G === "*=" ? I
																	.indexOf(C) >= 0
																	: G === "~=" ? (" "
																			+ I + " ")
																			.indexOf(C) >= 0
																			: !C ? I
																					&& e !== false
																					: G === "!=" ? I !== C
																							: G === "^=" ? I
																									.indexOf(C) === 0
																									: G === "$=" ? I
																											.substr(I.length
																													- C.length) === C
																											: G === "|=" ? I === C
																													|| I
																															.substr(
																																	0,
																																	C.length + 1) === C
																															+ "-"
																													: false
								},
								POS : function(G, C, D, H) {
									var e = C[2], E = p.setFilters[e];
									if (E) {
										return E(G, D, C, H)
									}
								}
							}
						};
						var o = p.match.POS, i = function(C, e) {
							return "\\" + (e - 0 + 1)
						};
						for ( var k in p.match) {
							p.match[k] = new RegExp(p.match[k].source
									+ (/(?![^\[]*\])(?![^\(]*\))/.source));
							p.leftMatch[k] = new RegExp(
									/(^(?:.|\r|\n)*?)/.source
											+ p.match[k].source.replace(
													/\\(\d+)/g, i))
						}
						var q = function(C, e) {
							C = Array.prototype.slice.call(C, 0);
							if (e) {
								e.push.apply(e, C);
								return e
							}
							return C
						};
						try {
							Array.prototype.slice.call(
									document.documentElement.childNodes, 0)[0].nodeType
						} catch (A) {
							q = function(G, E) {
								var D = 0, C = E || [];
								if (w.call(G) === "[object Array]") {
									Array.prototype.push.apply(C, G)
								} else {
									if (typeof G.length === "number") {
										for ( var e = G.length; D < e; D++) {
											C.push(G[D])
										}
									} else {
										for (; G[D]; D++) {
											C.push(G[D])
										}
									}
								}
								return C
							}
						}
						var u, r;
						if (document.documentElement.compareDocumentPosition) {
							u = function(C, e) {
								if (C === e) {
									m = true;
									return 0
								}
								if (!C.compareDocumentPosition
										|| !e.compareDocumentPosition) {
									return C.compareDocumentPosition ? -1 : 1
								}
								return C.compareDocumentPosition(e) & 4 ? -1
										: 1
							}
						} else {
							u = function(K, J) {
								if (K === J) {
									m = true;
									return 0
								} else {
									if (K.sourceIndex && J.sourceIndex) {
										return K.sourceIndex - J.sourceIndex
									}
								}
								var H, C, D = [], e = [], G = K.parentNode, I = J.parentNode, L = G;
								if (G === I) {
									return r(K, J)
								} else {
									if (!G) {
										return -1
									} else {
										if (!I) {
											return 1
										}
									}
								}
								while (L) {
									D.unshift(L);
									L = L.parentNode
								}
								L = I;
								while (L) {
									e.unshift(L);
									L = L.parentNode
								}
								H = D.length;
								C = e.length;
								for ( var E = 0; E < H && E < C; E++) {
									if (D[E] !== e[E]) {
										return r(D[E], e[E])
									}
								}
								return E === H ? r(K, e[E], -1) : r(D[E], J, 1)
							};
							r = function(C, e, D) {
								if (C === e) {
									return D
								}
								var E = C.nextSibling;
								while (E) {
									if (E === e) {
										return -1
									}
									E = E.nextSibling
								}
								return 1
							}
						}
						(function() {
							var C = document.createElement("div"), D = "script"
									+ (new Date()).getTime(), e = document.documentElement;
							C.innerHTML = "<a name='" + D + "'/>";
							e.insertBefore(C, e.firstChild);
							if (document.getElementById(D)) {
								p.find.ID = function(G, H, I) {
									if (typeof H.getElementById !== "undefined"
											&& !I) {
										var E = H.getElementById(G[1]);
										return E ? E.id === G[1]
												|| typeof E.getAttributeNode !== "undefined"
												&& E.getAttributeNode("id").nodeValue === G[1] ? [ E ]
												: undefined
												: []
									}
								};
								p.filter.ID = function(H, E) {
									var G = typeof H.getAttributeNode !== "undefined"
											&& H.getAttributeNode("id");
									return H.nodeType === 1 && G
											&& G.nodeValue === E
								}
							}
							e.removeChild(C);
							e = C = null
						})();
						(function() {
							var e = document.createElement("div");
							e.appendChild(document.createComment(""));
							if (e.getElementsByTagName("*").length > 0) {
								p.find.TAG = function(C, H) {
									var G = H.getElementsByTagName(C[1]);
									if (C[1] === "*") {
										var E = [];
										for ( var D = 0; G[D]; D++) {
											if (G[D].nodeType === 1) {
												E.push(G[D])
											}
										}
										G = E
									}
									return G
								}
							}
							e.innerHTML = "<a href='#'></a>";
							if (e.firstChild
									&& typeof e.firstChild.getAttribute !== "undefined"
									&& e.firstChild.getAttribute("href") !== "#") {
								p.attrHandle.href = function(C) {
									return C.getAttribute("href", 2)
								}
							}
							e = null
						})();
						if (document.querySelectorAll) {
							(function() {
								var e = j, E = document.createElement("div"), D = "__sizzle__";
								E.innerHTML = "<p class='TEST'></p>";
								if (E.querySelectorAll
										&& E.querySelectorAll(".TEST").length === 0) {
									return
								}
								j = function(Q, H, L, P) {
									H = H || document;
									if (!P && !j.isXML(H)) {
										var O = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/
												.exec(Q);
										if (O
												&& (H.nodeType === 1 || H.nodeType === 9)) {
											if (O[1]) {
												return q(
														H
																.getElementsByTagName(Q),
														L)
											} else {
												if (O[2]
														&& p.find.CLASS
														&& H.getElementsByClassName) {
													return q(
															H
																	.getElementsByClassName(O[2]),
															L)
												}
											}
										}
										if (H.nodeType === 9) {
											if (Q === "body" && H.body) {
												return q([ H.body ], L)
											} else {
												if (O && O[3]) {
													var K = H
															.getElementById(O[3]);
													if (K && K.parentNode) {
														if (K.id === O[3]) {
															return q([ K ], L)
														}
													} else {
														return q([], L)
													}
												}
											}
											try {
												return q(H.querySelectorAll(Q),
														L)
											} catch (M) {
											}
										} else {
											if (H.nodeType === 1
													&& H.nodeName.toLowerCase() !== "object") {
												var I = H, J = H
														.getAttribute("id"), G = J
														|| D, S = H.parentNode, R = /^\s*[+~]/
														.test(Q);
												if (!J) {
													H.setAttribute("id", G)
												} else {
													G = G.replace(/'/g, "\\$&")
												}
												if (R && S) {
													H = H.parentNode
												}
												try {
													if (!R || S) {
														return q(
																H
																		.querySelectorAll("[id='"
																				+ G
																				+ "'] "
																				+ Q),
																L)
													}
												} catch (N) {
												} finally {
													if (!J) {
														I.removeAttribute("id")
													}
												}
											}
										}
									}
									return e(Q, H, L, P)
								};
								for ( var C in e) {
									j[C] = e[C]
								}
								E = null
							})()
						}
						(function() {
							var e = document.documentElement, D = e.matchesSelector
									|| e.mozMatchesSelector
									|| e.webkitMatchesSelector
									|| e.msMatchesSelector;
							if (D) {
								var G = !D.call(document.createElement("div"),
										"div"), C = false;
								try {
									D.call(document.documentElement,
											"[test!='']:sizzle")
								} catch (E) {
									C = true
								}
								j.matchesSelector = function(I, K) {
									K = K.replace(/\=\s*([^'"\]]*)\s*\]/g,
											"='$1']");
									if (!j.isXML(I)) {
										try {
											if (C || !p.match.PSEUDO.test(K)
													&& !/!=/.test(K)) {
												var H = D.call(I, K);
												if (H
														|| !G
														|| I.document
														&& I.document.nodeType !== 11) {
													return H
												}
											}
										} catch (J) {
										}
									}
									return j(K, null, null, [ I ]).length > 0
								}
							}
						})();
						(function() {
							var e = document.createElement("div");
							e.innerHTML = "<div class='test e'></div><div class='test'></div>";
							if (!e.getElementsByClassName
									|| e.getElementsByClassName("e").length === 0) {
								return
							}
							e.lastChild.className = "e";
							if (e.getElementsByClassName("e").length === 1) {
								return
							}
							p.order.splice(1, 0, "CLASS");
							p.find.CLASS = function(C, D, E) {
								if (typeof D.getElementsByClassName !== "undefined"
										&& !E) {
									return D.getElementsByClassName(C[1])
								}
							};
							e = null
						})();
						function g(C, I, H, L, J, K) {
							for ( var E = 0, D = L.length; E < D; E++) {
								var e = L[E];
								if (e) {
									var G = false;
									e = e[C];
									while (e) {
										if (e[n] === H) {
											G = L[e.sizset];
											break
										}
										if (e.nodeType === 1 && !K) {
											e[n] = H;
											e.sizset = E
										}
										if (e.nodeName.toLowerCase() === I) {
											G = e;
											break
										}
										e = e[C]
									}
									L[E] = G
								}
							}
						}
						function y(C, I, H, L, J, K) {
							for ( var E = 0, D = L.length; E < D; E++) {
								var e = L[E];
								if (e) {
									var G = false;
									e = e[C];
									while (e) {
										if (e[n] === H) {
											G = L[e.sizset];
											break
										}
										if (e.nodeType === 1) {
											if (!K) {
												e[n] = H;
												e.sizset = E
											}
											if (typeof I !== "string") {
												if (e === I) {
													G = true;
													break
												}
											} else {
												if (j.filter(I, [ e ]).length > 0) {
													G = e;
													break
												}
											}
										}
										e = e[C]
									}
									L[E] = G
								}
							}
						}
						if (document.documentElement.contains) {
							j.contains = function(C, e) {
								return C !== e
										&& (C.contains ? C.contains(e) : true)
							}
						} else {
							if (document.documentElement.compareDocumentPosition) {
								j.contains = function(C, e) {
									return !!(C.compareDocumentPosition(e) & 16)
								}
							} else {
								j.contains = function() {
									return false
								}
							}
						}
						j.isXML = function(e) {
							var C = (e ? e.ownerDocument || e : 0).documentElement;
							return C ? C.nodeName !== "HTML" : false
						};
						var x = function(D, e, I) {
							var H, J = [], G = "", K = e.nodeType ? [ e ] : e;
							while ((H = p.match.PSEUDO.exec(D))) {
								G += H[0];
								D = D.replace(p.match.PSEUDO, "")
							}
							D = p.relative[D] ? D + "*" : D;
							for ( var E = 0, C = K.length; E < C; E++) {
								j(D, K[E], J, I)
							}
							return j.filter(G, J)
						};
						b.dom.query = j
					})();
					(function() {
						var e = b.dom.ready = function() {
							var l = false, k = [], h;
							if (document.addEventListener) {
								h = function() {
									document.removeEventListener(
											"DOMContentLoaded", h, false);
									i()
								}
							} else {
								if (document.attachEvent) {
									h = function() {
										if (document.readyState === "complete") {
											document.detachEvent(
													"onreadystatechange", h);
											i()
										}
									}
								}
							}
							function i() {
								if (!i.isReady) {
									i.isReady = true;
									for ( var n = 0, m = k.length; n < m; n++) {
										k[n]()
									}
								}
							}
							function g() {
								try {
									document.documentElement.doScroll("left")
								} catch (m) {
									setTimeout(g, 1);
									return
								}
								i()
							}
							function j() {
								if (l) {
									return
								}
								l = true;
								if (document.readyState === "complete") {
									i.isReady = true
								} else {
									if (document.addEventListener) {
										document.addEventListener(
												"DOMContentLoaded", h, false);
										window.addEventListener("load", i,
												false)
									} else {
										if (document.attachEvent) {
											document.attachEvent(
													"onreadystatechange", h);
											window.attachEvent("onload", i);
											var m = false;
											try {
												m = window.frameElement == null
											} catch (n) {
											}
											if (document.documentElement.doScroll
													&& m) {
												g()
											}
										}
									}
								}
							}
							j();
							return function(m) {
								i.isReady ? m() : k.push(m)
							}
						}();
						e.isReady = false
					})();
					b.dom.remove = function(e) {
						e = b.dom._g(e);
						var g = e.parentNode;
						g && g.removeChild(e)
					};
					b.dom.removeClass = function(m, n) {
						m = b.dom.g(m);
						var k = m.className.split(/\s+/), o = n.split(/\s+/), g, e = o.length, h, l = 0;
						for (; l < e; ++l) {
							for (h = 0, g = k.length; h < g; ++h) {
								if (k[h] == o[l]) {
									k.splice(h, 1);
									break
								}
							}
						}
						m.className = k.join(" ");
						return m
					};
					b.removeClass = b.dom.removeClass;
					b.dom.removeStyle = function() {
						var g = document.createElement("DIV"), e, h = b.dom._g;
						if (g.style.removeProperty) {
							e = function(j, i) {
								j = h(j);
								j.style.removeProperty(i);
								return j
							}
						} else {
							if (g.style.removeAttribute) {
								e = function(j, i) {
									j = h(j);
									j.style.removeAttribute(b.string
											.toCamelCase(i));
									return j
								}
							}
						}
						g = null;
						return e
					}();
					b.object.each = function(j, h) {
						var g, e, i;
						if ("function" == typeof h) {
							for (e in j) {
								if (j.hasOwnProperty(e)) {
									i = j[e];
									g = h.call(j, i, e);
									if (g === false) {
										break
									}
								}
							}
						}
						return j
					};
					b.lang.isNumber = function(e) {
						return "[object Number]" == Object.prototype.toString
								.call(e)
								&& isFinite(e)
					};
					b.event.getTarget = function(e) {
						return e.target || e.srcElement
					};
					b.dom.setBorderBoxSize = function(h, g) {
						var e = {};
						g.width && (e.width = parseFloat(g.width));
						g.height && (e.height = parseFloat(g.height));
						function i(k, j) {
							return parseFloat(b.getStyle(k, j)) || 0
						}
						if (b.browser.isStrict) {
							if (g.width) {
								e.width = parseFloat(g.width)
										- i(h, "paddingLeft")
										- i(h, "paddingRight")
										- i(h, "borderLeftWidth")
										- i(h, "borderRightWidth");
								e.width < 0 && (e.width = 0)
							}
							if (g.height) {
								e.height = parseFloat(g.height)
										- i(h, "paddingTop")
										- i(h, "paddingBottom")
										- i(h, "borderTopWidth")
										- i(h, "borderBottomWidth");
								e.height < 0 && (e.height = 0)
							}
						}
						return b.dom.setStyles(h, e)
					};
					b.dom.setOuterHeight = b.dom.setBorderBoxHeight = function(
							g, e) {
						return b.dom.setBorderBoxSize(g, {
							height : e
						})
					};
					b.dom.setOuterWidth = b.dom.setBorderBoxWidth = function(e,
							g) {
						return b.dom.setBorderBoxSize(e, {
							width : g
						})
					};
					b.dom.resizable = function(i, l) {
						var E, r, n = {}, h, e = {}, w, C, z, g, j, p, t, x = false, o = false, A = {
							direction : [ "e", "s", "se" ],
							minWidth : 16,
							minHeight : 16,
							classPrefix : "tangram",
							directionHandlePosition : {}
						};
						if (!(E = b.dom.g(i))
								&& b.getStyle(E, "position") == "static") {
							return false
						}
						g = E.offsetParent;
						var s = b.getStyle(E, "position");
						r = b.extend(A, l);
						b.each([ "minHeight", "minWidth", "maxHeight",
								"maxWidth" ], function(G) {
							r[G] && (r[G] = parseFloat(r[G]))
						});
						w = [ r.minWidth || 0, r.maxWidth || Number.MAX_VALUE,
								r.minHeight || 0,
								r.maxHeight || Number.MAX_VALUE ];
						D();
						function D() {
							p = b.extend({
								e : {
									right : "-5px",
									top : "0px",
									width : "7px",
									height : E.offsetHeight
								},
								s : {
									left : "0px",
									bottom : "-5px",
									height : "7px",
									width : E.offsetWidth
								},
								n : {
									left : "0px",
									top : "-5px",
									height : "7px",
									width : E.offsetWidth
								},
								w : {
									left : "-5px",
									top : "0px",
									height : E.offsetHeight,
									width : "7px"
								},
								se : {
									right : "1px",
									bottom : "1px",
									height : "16px",
									width : "16px"
								},
								sw : {
									left : "1px",
									bottom : "1px",
									height : "16px",
									width : "16px"
								},
								ne : {
									right : "1px",
									top : "1px",
									height : "16px",
									width : "16px"
								},
								nw : {
									left : "1px",
									top : "1px",
									height : "16px",
									width : "16px"
								}
							}, r.directionHandlePosition);
							b.each(r.direction, function(G) {
								var H = r.classPrefix.split(" ");
								H[0] = H[0] + "-resizable-" + G;
								var J = b.dom.create("div", {
									className : H.join(" ")
								}), I = p[G];
								I.cursor = G + "-resize";
								I.position = "absolute";
								b.setStyles(J, I);
								J.key = G;
								J.style.MozUserSelect = "none";
								E.appendChild(J);
								n[G] = J;
								b.on(J, "mousedown", m)
							});
							x = false
						}
						function k() {
							j && y();
							b.object.each(n, function(G) {
								b.un(G, "mousedown", m);
								b.dom.remove(G)
							});
							x = true
						}
						function q(G) {
							if (!x) {
								r = b.extend(r, G || {});
								k();
								D()
							}
						}
						function m(I) {
							o && y();
							var H = b.event.getTarget(I), G = H.key;
							j = H;
							o = true;
							if (H.setCapture) {
								H.setCapture()
							} else {
								if (window.captureEvents) {
									window.captureEvents(Event.MOUSEMOVE
											| Event.MOUSEUP)
								}
							}
							z = b.getStyle(document.body, "cursor");
							b.setStyle(document.body, "cursor", G + "-resize");
							b.on(document.body, "mouseup", y);
							b.on(document.body, "selectstart", u);
							C = document.body.style.MozUserSelect;
							document.body.style.MozUserSelect = "none";
							var J = b.page.getMousePosition();
							e = v();
							t = setInterval(function() {
								B(G, J)
							}, 20);
							b.lang.isFunction(r.onresizestart)
									&& r.onresizestart();
							b.event.preventDefault(I)
						}
						function y() {
							if (j && j.releaseCapture) {
								j.releaseCapture()
							} else {
								if (window.releaseEvents) {
									window.releaseEvents(Event.MOUSEMOVE
											| Event.MOUSEUP)
								}
							}
							b.un(document.body, "mouseup", y);
							b.un(document, "selectstart", u);
							document.body.style.MozUserSelect = C;
							b.un(document.body, "selectstart", u);
							clearInterval(t);
							b.setStyle(document.body, "cursor", z);
							j = null;
							o = false;
							b.lang.isFunction(r.onresizeend) && r.onresizeend()
						}
						function B(H, N) {
							var M = b.page.getMousePosition(), I = e.width, G = e.height, L = e.top, K = e.left, J;
							if (H.indexOf("e") >= 0) {
								I = Math.max(M.x - N.x + e.width, w[0]);
								I = Math.min(I, w[1])
							} else {
								if (H.indexOf("w") >= 0) {
									I = Math.max(N.x - M.x + e.width, w[0]);
									I = Math.min(I, w[1]);
									K -= I - e.width
								}
							}
							if (H.indexOf("s") >= 0) {
								G = Math.max(M.y - N.y + e.height, w[2]);
								G = Math.min(G, w[3])
							} else {
								if (H.indexOf("n") >= 0) {
									G = Math.max(N.y - M.y + e.height, w[2]);
									G = Math.min(G, w[3]);
									L -= G - e.height
								}
							}
							J = {
								width : I,
								height : G,
								top : L,
								left : K
							};
							b.dom.setOuterHeight(E, G);
							b.dom.setOuterWidth(E, I);
							b.setStyles(E, {
								top : L,
								left : K
							});
							n.n && b.setStyle(n.n, "width", I);
							n.s && b.setStyle(n.s, "width", I);
							n.e && b.setStyle(n.e, "height", G);
							n.w && b.setStyle(n.w, "height", G);
							b.lang.isFunction(r.onresize) && r.onresize({
								current : J,
								original : e
							})
						}
						function u(G) {
							return b.event.preventDefault(G, false)
						}
						function v() {
							var G = b.dom.getPosition(E.offsetParent), H = b.dom
									.getPosition(E), J, I;
							if (s == "absolute") {
								J = H.top
										- (E.offsetParent == document.body ? 0
												: G.top);
								I = H.left
										- (E.offsetParent == document.body ? 0
												: G.left)
							} else {
								J = parseFloat(b.getStyle(E, "top"))
										|| -parseFloat(b.getStyle(E, "bottom"))
										|| 0;
								I = parseFloat(b.getStyle(E, "left"))
										|| -parseFloat(b.getStyle(E, "right"))
										|| 0
							}
							b.setStyles(E, {
								top : J,
								left : I
							});
							return {
								width : E.offsetWidth,
								height : E.offsetHeight,
								top : J,
								left : I
							}
						}
						return {
							cancel : k,
							update : q,
							enable : D
						}
					};
					b.dom.setPixel = function(g, e, h) {
						typeof h != "undefined"
								&& (b.dom.g(g).style[e] = h
										+ (!isNaN(h) ? "px" : ""))
					};
					b.dom.setPosition = function(g, e) {
						return b.dom.setStyles(g, {
							left : e.left
									- (parseFloat(b.dom.getStyle(g,
											"margin-left")) || 0),
							top : e.top
									- (parseFloat(b.dom.getStyle(g,
											"margin-top")) || 0)
						})
					};
					b.dom.show = function(e) {
						e = b.dom.g(e);
						e.style.display = "";
						return e
					};
					b.show = b.dom.show;
					b.dom.toggle = function(e) {
						e = b.dom.g(e);
						e.style.display = e.style.display == "none" ? ""
								: "none";
						return e
					};
					b.dom.toggleClass = function(e, g) {
						if (b.dom.hasClass(e, g)) {
							b.dom.removeClass(e, g)
						} else {
							b.dom.addClass(e, g)
						}
					};
					b.dom._styleFilter[b.dom._styleFilter.length] = {
						get : function(h, j) {
							if (/color/i.test(h) && j.indexOf("rgb(") != -1) {
								var k = j.split(",");
								j = "#";
								for ( var g = 0, e; e = k[g]; g++) {
									e = parseInt(e.replace(/[^\d]/gi, ""), 10)
											.toString(16);
									j += e.length == 1 ? "0" + e : e
								}
								j = j.toUpperCase()
							}
							return j
						}
					};
					b.dom._styleFixer.display = b.browser.ie
							&& b.browser.ie < 8 ? {
						set : function(e, g) {
							e = e.style;
							if (g == "inline-block") {
								e.display = "inline";
								e.zoom = 1
							} else {
								e.display = g
							}
						}
					}
							: b.browser.firefox && b.browser.firefox < 3 ? {
								set : function(e, g) {
									e.style.display = g == "inline-block" ? "-moz-inline-box"
											: g
								}
							}
									: null;
					b.dom._styleFixer["float"] = b.browser.ie ? "styleFloat"
							: "cssFloat";
					b.dom._styleFixer.opacity = b.browser.ie ? {
						get : function(e) {
							var g = e.style.filter;
							return g && g.indexOf("opacity=") >= 0 ? (parseFloat(g
									.match(/opacity=([^)]*)/)[1]) / 100)
									+ ""
									: "1"
						},
						set : function(e, h) {
							var g = e.style;
							g.filter = (g.filter || "").replace(
									/alpha\([^\)]*\)/gi, "")
									+ (h == 1 ? "" : "alpha(opacity=" + h * 100
											+ ")");
							g.zoom = 1
						}
					}
							: null;
					b.dom._styleFixer.width = b.dom._styleFixer.height = {
						get : function(g, e, h) {
							var e = e.replace(/^[a-z]/, function(j) {
								return j.toUpperCase()
							}), i = g["client" + e] || g["offset" + e];
							return i > 0 ? i + "px"
									: !h || h == "auto" ? 0 + "px" : i
						},
						set : function(g, h, e) {
							g.style[e] = h
						}
					};
					b.dom._styleFixer.textOverflow = (function() {
						var g = {};
						function e(j) {
							var k = j.length;
							if (k > 0) {
								k = j[k - 1];
								j.length--
							} else {
								k = null
							}
							return k
						}
						function h(j, k) {
							j[b.browser.firefox ? "textContent" : "innerText"] = k
						}
						function i(r, m, w) {
							var p = b.browser.ie ? r.currentStyle || r.style
									: getComputedStyle(r, null), v = p.fontWeight, u = "font-family:"
									+ p.fontFamily
									+ ";font-size:"
									+ p.fontSize
									+ ";word-spacing:"
									+ p.wordSpacing
									+ ";font-weight:"
									+ ((parseInt(v) || 0) == 401 ? 700 : v)
									+ ";font-style:"
									+ p.fontStyle
									+ ";font-variant:" + p.fontVariant, j = g[u];
							if (!j) {
								p = r
										.appendChild(document
												.createElement("div"));
								p.style.cssText = "float:left;" + u;
								j = g[u] = [];
								for ( var s = 0; s < 256; s++) {
									s == 32 ? (p.innerHTML = "&nbsp;") : h(p,
											String.fromCharCode(s));
									j[s] = p.offsetWidth
								}
								h(p, "\u4e00");
								j[256] = p.offsetWidth;
								h(p, "\u4e00\u4e00");
								j[257] = p.offsetWidth - j[256] * 2;
								j[258] = j[".".charCodeAt(0)] * 3 + j[257] * 3;
								r.removeChild(p)
							}
							for ( var q = r.firstChild, t = j[256], l = j[257], k = j[258], y = [], w = w ? k
									: 0; q; q = q.nextSibling) {
								if (m < w) {
									r.removeChild(q)
								} else {
									if (q.nodeType == 3) {
										for ( var s = 0, x = q.nodeValue, n = x.length; s < n; s++) {
											p = x.charCodeAt(s);
											y[y.length] = [ m, q, s ];
											m -= (s ? l : 0)
													+ (p < 256 ? j[p] : t);
											if (m < w) {
												break
											}
										}
									} else {
										p = q.tagName;
										if (p == "IMG" || p == "TABLE") {
											p = q;
											q = q.previousSibling;
											r.removeChild(p)
										} else {
											y[y.length] = [ m, q ];
											m -= q.offsetWidth
										}
									}
								}
							}
							if (m < w) {
								while (p = e(y)) {
									m = p[0];
									q = p[1];
									p = p[2];
									if (q.nodeType == 3) {
										if (m >= k) {
											q.nodeValue = q.nodeValue
													.substring(0, p)
													+ "...";
											return true
										} else {
											if (!p) {
												r.removeChild(q)
											}
										}
									} else {
										if (i(q, m, true)) {
											return true
										} else {
											r.removeChild(q)
										}
									}
								}
								r.innerHTML = ""
							}
						}
						return {
							get : function(l) {
								var k = b.browser, j = dom.getStyle;
								return (k.opera ? j("OTextOverflow")
										: k.firefox ? l._baiduOverflow
												: j("textOverflow"))
										|| "clip"
							},
							set : function(k, m) {
								var j = b.browser;
								if (k.tagName == "TD" || k.tagName == "TH"
										|| j.firefox) {
									k._baiduHTML
											&& (k.innerHTML = k._baiduHTML);
									if (m == "ellipsis") {
										k._baiduHTML = k.innerHTML;
										var n = document.createElement("div"), l = k
												.appendChild(n).offsetWidth;
										k.removeChild(n);
										i(k, l)
									} else {
										k._baiduHTML = ""
									}
								}
								n = k.style;
								j.opera ? (n.OTextOverflow = m)
										: j.firefox ? (k._baiduOverflow = m)
												: (n.textOverflow = m)
							}
						}
					})();
					b.lang.isArray = function(e) {
						return "[object Array]" == Object.prototype.toString
								.call(e)
					};
					b.lang.toArray = function(g) {
						if (g === null || g === undefined) {
							return []
						}
						if (b.lang.isArray(g)) {
							return g
						}
						if (typeof g.length !== "number"
								|| typeof g === "string"
								|| b.lang.isFunction(g)) {
							return [ g ]
						}
						if (g.item) {
							var e = g.length, h = new Array(e);
							while (e--) {
								h[e] = g[e]
							}
							return h
						}
						return [].slice.call(g)
					};
					b.fn.methodize = function(g, e) {
						return function() {
							return g.apply(this, [ (e ? this[e] : this) ]
									.concat([].slice.call(arguments)))
						}
					};
					b.fn.wrapReturnValue = function(e, h, g) {
						g = g | 0;
						return function() {
							var i = e.apply(this, arguments);
							if (!g) {
								return new h(i)
							}
							if (g > 0) {
								return new h(arguments[g - 1])
							}
							return i
						}
					};
					b.fn.multize = function(i, g, e) {
						var h = function() {
							var p = arguments[0], m = g ? h : i, k = [], o = [].slice
									.call(arguments, 0), l = 0, j, n;
							if (p instanceof Array) {
								for (j = p.length; l < j; l++) {
									o[0] = p[l];
									n = m.apply(this, o);
									if (e) {
										if (n) {
											k = k.concat(n)
										}
									} else {
										k.push(n)
									}
								}
								return k
							} else {
								return i.apply(this, arguments)
							}
						};
						return h
					};
					b.element = function(g) {
						var e = b._g(g);
						if (!e && b.dom.query) {
							e = b.dom.query(g)
						}
						return new b.element.Element(e)
					};
					b.e = b.element;
					b.element.Element = function(e) {
						if (!b.element._init) {
							b.element._makeChain();
							b.element._init = true
						}
						this._dom = (e.tagName || "").toLowerCase() == "select" ? [ e ]
								: b.lang.toArray(e)
					};
					b.element.Element.prototype.each = function(e) {
						b.array.each(this._dom, function(h, g) {
							e.call(h, h, g)
						})
					};
					b.element._toChainFunction = function(h, g, e) {
						return b.fn.methodize(b.fn.wrapReturnValue(b.fn
								.multize(h, 0, 1), b.element.Element, g),
								"_dom")
					};
					b.element._makeChain = function() {
						var g = b.element.Element.prototype, h = b.element._toChainFunction;
						b.each(("draggable droppable resizable fixable")
								.split(" "), function(i) {
							g[i] = h(b.dom[i], 1)
						});
						b
								.each(
										("remove getText contains getAttr getPosition getStyle hasClass intersect hasAttr getComputedStyle")
												.split(" "),
										function(i) {
											g[i] = g[i.replace(/^get[A-Z]/g, e)] = h(
													b.dom[i], -1)
										});
						b
								.each(
										("addClass empty hide show insertAfter insertBefore insertHTML removeClass setAttr setAttrs setStyle setStyles show toggleClass toggle next first getAncestorByClass getAncestorBy getAncestorByTag getDocument getParent getWindow last next prev g removeStyle setBorderBoxSize setOuterWidth setOuterHeight setBorderBoxWidth setBorderBoxHeight setPosition children query")
												.split(" "),
										function(i) {
											g[i] = g[i.replace(/^get[A-Z]/g, e)] = h(
													b.dom[i], 0)
										});
						g.q = g.Q = h(function(j, i) {
							return b.dom.q.apply(this, [ i, j ].concat([].slice
									.call(arguments, 2)))
						}, 0);
						b.each(("on un").split(" "), function(i) {
							g[i] = h(b.event[i], 0)
						});
						b
								.each(
										("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error")
												.split(" "), function(i) {
											g[i] = function(j) {
												return this.on(i, j)
											}
										});
						function e(i) {
							return i.charAt(3).toLowerCase()
						}
					};
					b.element.extend = function(g) {
						var h = b.element;
						b.object.each(g, function(i, e) {
							h.Element.prototype[e] = b.element
									._toChainFunction(i, -1)
						})
					};
					b.event.EventArg = function(h, j) {
						j = j || window;
						h = h || j.event;
						var i = j.document;
						this.target = (h.target) || h.srcElement;
						this.keyCode = h.which || h.keyCode;
						for ( var e in h) {
							var g = h[e];
							if ("function" != typeof g) {
								this[e] = g
							}
						}
						if (!this.pageX && this.pageX !== 0) {
							this.pageX = (h.clientX || 0)
									+ (i.documentElement.scrollLeft || i.body.scrollLeft);
							this.pageY = (h.clientY || 0)
									+ (i.documentElement.scrollTop || i.body.scrollTop)
						}
						this._event = h
					};
					b.event.EventArg.prototype.preventDefault = function() {
						if (this._event.preventDefault) {
							this._event.preventDefault()
						} else {
							this._event.returnValue = false
						}
						return this
					};
					b.event.EventArg.prototype.stopPropagation = function() {
						if (this._event.stopPropagation) {
							this._event.stopPropagation()
						} else {
							this._event.cancelBubble = true
						}
						return this
					};
					b.event.EventArg.prototype.stop = function() {
						return this.stopPropagation().preventDefault()
					};
					b.object.values = function(i) {
						var e = [], h = 0, g;
						for (g in i) {
							if (i.hasOwnProperty(g)) {
								e[h++] = i[g]
							}
						}
						return e
					};
					(function() {
						var i = b.browser, p = {
							keydown : 1,
							keyup : 1,
							keypress : 1
						}, e = {
							click : 1,
							dblclick : 1,
							mousedown : 1,
							mousemove : 1,
							mouseup : 1,
							mouseover : 1,
							mouseout : 1
						}, m = {
							abort : 1,
							blur : 1,
							change : 1,
							error : 1,
							focus : 1,
							load : i.ie ? 0 : 1,
							reset : 1,
							resize : 1,
							scroll : 1,
							select : 1,
							submit : 1,
							unload : i.ie ? 0 : 1
						}, k = {
							scroll : 1,
							resize : 1,
							reset : 1,
							submit : 1,
							change : 1,
							select : 1,
							error : 1,
							abort : 1
						}, o = {
							KeyEvents : [ "bubbles", "cancelable", "view",
									"ctrlKey", "altKey", "shiftKey", "metaKey",
									"keyCode", "charCode" ],
							MouseEvents : [ "bubbles", "cancelable", "view",
									"detail", "screenX", "screenY", "clientX",
									"clientY", "ctrlKey", "altKey", "shiftKey",
									"metaKey", "button", "relatedTarget" ],
							HTMLEvents : [ "bubbles", "cancelable" ],
							UIEvents : [ "bubbles", "cancelable", "view",
									"detail" ],
							Events : [ "bubbles", "cancelable" ]
						};
						b.object.extend(k, p);
						b.object.extend(k, e);
						function h(v, t) {
							var s = 0, r = v.length, u = {};
							for (; s < r; s++) {
								u[v[s]] = t[v[s]];
								delete t[v[s]]
							}
							return u
						}
						function j(t, s, r) {
							r = b.object.extend({}, r);
							var u = b.object.values(h(o[s], r)), v = document
									.createEvent(s);
							u.unshift(t);
							if ("KeyEvents" == s) {
								v.initKeyEvent.apply(v, u)
							} else {
								if ("MouseEvents" == s) {
									v.initMouseEvent.apply(v, u)
								} else {
									if ("UIEvents" == s) {
										v.initUIEvent.apply(v, u)
									} else {
										v.initEvent.apply(v, u)
									}
								}
							}
							b.object.extend(v, r);
							return v
						}
						function g(r) {
							var s;
							if (document.createEventObject) {
								s = document.createEventObject();
								b.object.extend(s, r)
							}
							return s
						}
						function l(u, r) {
							r = h(o.KeyEvents, r);
							var v;
							if (document.createEvent) {
								try {
									v = j(u, "KeyEvents", r)
								} catch (t) {
									try {
										v = j(u, "Events", r)
									} catch (s) {
										v = j(u, "UIEvents", r)
									}
								}
							} else {
								r.keyCode = r.charCode > 0 ? r.charCode
										: r.keyCode;
								v = g(r)
							}
							return v
						}
						function q(s, r) {
							r = h(o.MouseEvents, r);
							var t;
							if (document.createEvent) {
								t = j(s, "MouseEvents", r);
								if (r.relatedTarget && !t.relatedTarget) {
									if ("mouseout" == s.toLowerCase()) {
										t.toElement = r.relatedTarget
									} else {
										if ("mouseover" == s.toLowerCase()) {
											t.fromElement = r.relatedTarget
										}
									}
								}
							} else {
								r.button = r.button == 0 ? 1
										: r.button == 1 ? 4 : b.lang
												.isNumber(r.button) ? r.button
												: 0;
								t = g(r)
							}
							return t
						}
						function n(t, r) {
							r.bubbles = k.hasOwnProperty(t);
							r = h(o.HTMLEvents, r);
							var v;
							if (document.createEvent) {
								try {
									v = j(t, "HTMLEvents", r)
								} catch (u) {
									try {
										v = j(t, "UIEvents", r)
									} catch (s) {
										v = j(t, "Events", r)
									}
								}
							} else {
								v = g(r)
							}
							return v
						}
						b.event.fire = function(s, t, r) {
							var u;
							t = t.replace(/^on/i, "");
							s = b.dom._g(s);
							r = b.object.extend({
								bubbles : true,
								cancelable : true,
								view : window,
								detail : 1,
								screenX : 0,
								screenY : 0,
								clientX : 0,
								clientY : 0,
								ctrlKey : false,
								altKey : false,
								shiftKey : false,
								metaKey : false,
								keyCode : 0,
								charCode : 0,
								button : 0,
								relatedTarget : null
							}, r);
							if (p[t]) {
								u = l(t, r)
							} else {
								if (e[t]) {
									u = q(t, r)
								} else {
									if (m[t]) {
										u = n(t, r)
									} else {
										throw (new Error(t + " is not support!"))
									}
								}
							}
							if (u) {
								if (s.dispatchEvent) {
									s.dispatchEvent(u)
								} else {
									if (s.fireEvent) {
										s.fireEvent("on" + t, u)
									}
								}
							}
						}
					})();
					b.event.get = function(e, g) {
						return new b.event.EventArg(e, g)
					};
					b.event.getEvent = function(e) {
						if (window.event) {
							return window.event
						} else {
							var g = arguments.callee;
							do {
								if (/Event/.test(g.arguments[0])) {
									return g.arguments[0]
								}
							} while (g = g.caller);
							return null
						}
					};
					b.event.getKeyCode = function(e) {
						return e.which || e.keyCode
					};
					b.event.getPageX = function(g) {
						var e = g.pageX, h = document;
						if (!e && e !== 0) {
							e = (g.clientX || 0)
									+ (h.documentElement.scrollLeft || h.body.scrollLeft)
						}
						return e
					};
					b.event.getPageY = function(g) {
						var e = g.pageY, h = document;
						if (!e && e !== 0) {
							e = (g.clientY || 0)
									+ (h.documentElement.scrollTop || h.body.scrollTop)
						}
						return e
					};
					b.event.once = function(e, g, h) {
						e = b.dom._g(e);
						function i(j) {
							h.call(e, j);
							b.event.un(e, g, i)
						}
						b.event.on(e, g, i);
						return e
					};
					b.event.stopPropagation = function(e) {
						if (e.stopPropagation) {
							e.stopPropagation()
						} else {
							e.cancelBubble = true
						}
					};
					b.event.stop = function(g) {
						var h = b.event;
						h.stopPropagation(g);
						h.preventDefault(g)
					};
					b.event._eventFilter = b.event._eventFilter || {};
					b.event._eventFilter._crossElementBoundary = function(g, j) {
						var i = j.relatedTarget, h = j.currentTarget;
						if (i === false
								|| h == i
								|| (i && (i.prefix == "xul" || b.dom.contains(
										h, i)))) {
							return
						}
						return g.call(h, j)
					};
					b.fn.bind = function(g, e) {
						var h = arguments.length > 2 ? [].slice.call(arguments,
								2) : null;
						return function() {
							var j = b.lang.isString(g) ? e[g] : g, i = (h) ? h
									.concat([].slice.call(arguments, 0))
									: arguments;
							return j.apply(e || j, i)
						}
					};
					b.event._eventFilter.mouseenter = window.attachEvent ? null
							: function(e, g, h) {
								return {
									type : "mouseover",
									listener : b.fn
											.bind(
													b.event._eventFilter._crossElementBoundary,
													this, h)
								}
							};
					b.event._eventFilter.mouseleave = window.attachEvent ? null
							: function(e, g, h) {
								return {
									type : "mouseout",
									listener : b.fn
											.bind(
													b.event._eventFilter._crossElementBoundary,
													this, h)
								}
							};
					b.event._unload = function() {
						var h = b.event._listeners, e = h.length, g = !!window.removeEventListener, j, i;
						while (e--) {
							j = h[e];
							if (j[1] == "unload") {
								continue
							}
							if (!(i = j[0])) {
								continue
							}
							if (i.removeEventListener) {
								i.removeEventListener(j[1], j[3], false)
							} else {
								if (i.detachEvent) {
									i.detachEvent("on" + j[1], j[3])
								}
							}
						}
						if (g) {
							window.removeEventListener("unload",
									b.event._unload, false)
						} else {
							window.detachEvent("onunload", b.event._unload)
						}
					};
					if (window.attachEvent) {
						window.attachEvent("onunload", b.event._unload)
					} else {
						window.addEventListener("unload", b.event._unload,
								false)
					}
					b.fn.abstractMethod = function() {
						throw Error("unimplemented abstract method")
					};
					b.form = b.form || {};
					b.form.json = function(h, k) {
						var g = h.elements, k = k || function(v, i) {
							return v
						}, n = {}, t, p, u, j, e, s, r, q;
						function l(i, v) {
							var w = n[i];
							if (w) {
								w.push || (n[i] = [ w ]);
								n[i].push(v)
							} else {
								n[i] = v
							}
						}
						for ( var m = 0, o = g.length; m < o; m++) {
							t = g[m];
							u = t.name;
							if (!t.disabled && u) {
								p = t.type;
								j = b.url.escapeSymbol(t.value);
								switch (p) {
								case "radio":
								case "checkbox":
									if (!t.checked) {
										break
									}
								case "textarea":
								case "text":
								case "password":
								case "hidden":
								case "file":
								case "select-one":
									l(u, k(j, u));
									break;
								case "select-multiple":
									e = t.options;
									r = e.length;
									for (s = 0; s < r; s++) {
										q = e[s];
										if (q.selected) {
											l(u, k(q.value, u))
										}
									}
									break
								}
							}
						}
						return n
					};
					b.form.serialize = function(h, k) {
						var g = h.elements, k = k || function(v, i) {
							return v
						}, n = [], t, p, u, j, e, s, r, q;
						function l(i, v) {
							n.push(i + "=" + v)
						}
						for ( var m = 0, o = g.length; m < o; m++) {
							t = g[m];
							u = t.name;
							if (!t.disabled && u) {
								p = t.type;
								j = b.url.escapeSymbol(t.value);
								switch (p) {
								case "radio":
								case "checkbox":
									if (!t.checked) {
										break
									}
								case "textarea":
								case "text":
								case "password":
								case "hidden":
								case "file":
								case "select-one":
									l(u, k(j, u));
									break;
								case "select-multiple":
									e = t.options;
									r = e.length;
									for (s = 0; s < r; s++) {
										q = e[s];
										if (q.selected) {
											l(u, k(q.value, u))
										}
									}
									break
								}
							}
						}
						return n
					};
					b.global = b.global || {};
					window[b.guid].global = window[b.guid].global || {};
					(function() {
						var e = window[b.guid].global;
						b.global.get = function(g) {
							return e[g]
						}
					})();
					(function() {
						var e = window[b.guid].global;
						b.global.set = function(i, j, h) {
							var g = !h || (h && typeof e[i] == "undefined");
							g && (e[i] = j);
							return e[i]
						}
					})();
					b.global.getZIndex = function(e, h) {
						var g = b.global.get("zIndex");
						if (e) {
							g[e] = g[e] + (h || 1)
						}
						return g[e]
					};
					b.global.set("zIndex", {
						popup : 50000,
						dialog : 1000
					}, true);
					b.json = b.json || {};
					b.json.parse = function(e) {
						return (new Function("return (" + e + ")"))()
					};
					b.json.decode = b.json.parse;
					b.json.stringify = (function() {
						var g = {
							"\b" : "\\b",
							"\t" : "\\t",
							"\n" : "\\n",
							"\f" : "\\f",
							"\r" : "\\r",
							'"' : '\\"',
							"\\" : "\\\\"
						};
						function e(k) {
							if (/["\\\x00-\x1f]/.test(k)) {
								k = k.replace(/["\\\x00-\x1f]/g, function(l) {
									var m = g[l];
									if (m) {
										return m
									}
									m = l.charCodeAt();
									return "\\u00"
											+ Math.floor(m / 16).toString(16)
											+ (m % 16).toString(16)
								})
							}
							return '"' + k + '"'
						}
						function i(q) {
							var m = [ "[" ], n = q.length, k, o, p;
							for (o = 0; o < n; o++) {
								p = q[o];
								switch (typeof p) {
								case "undefined":
								case "function":
								case "unknown":
									break;
								default:
									if (k) {
										m.push(",")
									}
									m.push(b.json.stringify(p));
									k = 1
								}
							}
							m.push("]");
							return m.join("")
						}
						function h(k) {
							return k < 10 ? "0" + k : k
						}
						function j(k) {
							return '"' + k.getFullYear() + "-"
									+ h(k.getMonth() + 1) + "-"
									+ h(k.getDate()) + "T" + h(k.getHours())
									+ ":" + h(k.getMinutes()) + ":"
									+ h(k.getSeconds()) + '"'
						}
						return function(p) {
							switch (typeof p) {
							case "undefined":
								return "undefined";
							case "number":
								return isFinite(p) ? String(p) : "null";
							case "string":
								return e(p);
							case "boolean":
								return String(p);
							default:
								if (p === null) {
									return "null"
								} else {
									if (p instanceof Array) {
										return i(p)
									} else {
										if (p instanceof Date) {
											return j(p)
										} else {
											var l = [ "{" ], o = b.json.stringify, k, n;
											for ( var m in p) {
												if (Object.prototype.hasOwnProperty
														.call(p, m)) {
													n = p[m];
													switch (typeof n) {
													case "undefined":
													case "unknown":
													case "function":
														break;
													default:
														if (k) {
															l.push(",")
														}
														k = 1;
														l.push(o(m) + ":"
																+ o(n))
													}
												}
											}
											l.push("}");
											return l.join("")
										}
									}
								}
							}
						}
					})();
					b.json.encode = b.json.stringify;
					b.lang.Class.prototype.addEventListeners = function(h, j) {
						if (typeof j == "undefined") {
							for ( var g in h) {
								this.addEventListener(g, h[g])
							}
						} else {
							h = h.split(",");
							var g = 0, e = h.length, k;
							for (; g < e; g++) {
								this.addEventListener(b.trim(h[g]), j)
							}
						}
					};
					b.lang.createClass = function(g, o) {
						o = o || {};
						var m = o.superClass || b.lang.Class;
						var n = function() {
							var r = this;
							o.decontrolled && (r.__decontrolled = true);
							m.apply(r, arguments);
							for (p in n.options) {
								r[p] = n.options[p]
							}
							g.apply(r, arguments);
							for ( var p = 0, q = n["\x06r"]; q && p < q.length; p++) {
								q[p].apply(r, arguments)
							}
						};
						n.options = o.options || {};
						var e = function() {
						}, l = g.prototype;
						e.prototype = m.prototype;
						var j = n.prototype = new e();
						for ( var h in l) {
							j[h] = l[h]
						}
						var k = o.className || o.type;
						typeof k == "string" && (j.__type = k);
						j.constructor = l.constructor;
						n.extend = function(q) {
							for ( var p in q) {
								n.prototype[p] = q[p]
							}
							return n
						};
						return n
					};
					window[b.guid]._instances = window[b.guid]._instances || {};
					b.lang.decontrol = function(g) {
						var e = window[b.guid];
						e._instances && (delete e._instances[g])
					};
					b.lang.eventCenter = b.lang.eventCenter
							|| b.lang.createSingle();
					b.lang.getModule = function(g, h) {
						var i = g.split("."), j = h || window, e;
						for (; e = i.shift();) {
							if (j[e] != null) {
								j = j[e]
							} else {
								return null
							}
						}
						return j
					};
					b.lang.inherits = function(l, j, i) {
						var h, k, e = l.prototype, g = new Function();
						g.prototype = j.prototype;
						k = l.prototype = new g();
						for (h in e) {
							k[h] = e[h]
						}
						l.prototype.constructor = l;
						l.superClass = j.prototype;
						typeof i == "string" && (k.__type = i);
						l.extend = function(n) {
							for ( var m in n) {
								k[m] = n[m]
							}
							return l
						};
						return l
					};
					b.inherits = b.lang.inherits;
					b.lang.instance = function(e) {
						return window[b.guid]._instances[e] || null
					};
					b.lang.isBoolean = function(e) {
						return typeof e === "boolean"
					};
					b.lang.isDate = function(e) {
						return {}.toString.call(e) === "[object Date]"
								&& e.toString() !== "Invalid Date" && !isNaN(e)
					};
					b.lang.isElement = function(e) {
						return !!(e && e.nodeName && e.nodeType == 1)
					};
					b.lang.module = function(k, m, h) {
						var n = k.split("."), g = n.length - 1, j, l = 0;
						if (!h) {
							try {
								if (!(new RegExp(
										"^[a-zA-Z_\x24][a-zA-Z0-9_\x24]*\x24"))
										.test(n[0])) {
									throw ""
								}
								h = window["eval"](n[0]);
								l = 1
							} catch (o) {
								h = window
							}
						}
						for (; l < g; l++) {
							j = n[l];
							if (!h[j]) {
								h[j] = {}
							}
							h = h[j]
						}
						if (!h[n[g]]) {
							h[n[g]] = m
						}
					};
					b.lang.register = function(g, i, e) {
						var h = g["\x06r"] || (g["\x06r"] = []);
						h[h.length] = i;
						for ( var j in e) {
							g.prototype[j] = e[j]
						}
					};
					b.number.comma = function(g, e) {
						if (!e || e < 1) {
							e = 3
						}
						g = String(g).split(".");
						g[0] = g[0].replace(new RegExp("(\\d)(?=(\\d{" + e
								+ "})+$)", "ig"), "$1,");
						return g.join(".")
					};
					b.number.randomInt = function(g, e) {
						return Math.floor(Math.random() * (e - g + 1) + g)
					};
					b.object.isPlain = function(h) {
						var g = Object.prototype.hasOwnProperty, e;
						if (!h
								|| Object.prototype.toString.call(h) !== "[object Object]"
								|| !("isPrototypeOf" in h)) {
							return false
						}
						if (h.constructor
								&& !g.call(h, "constructor")
								&& !g.call(h.constructor.prototype,
										"isPrototypeOf")) {
							return false
						}
						for (e in h) {
						}
						return e === undefined || g.call(h, e)
					};
					b.object.clone = function(k) {
						var g = k, h, e;
						if (!k || k instanceof Number || k instanceof String
								|| k instanceof Boolean) {
							return g
						} else {
							if (b.lang.isArray(k)) {
								g = [];
								var j = 0;
								for (h = 0, e = k.length; h < e; h++) {
									g[j++] = b.object.clone(k[h])
								}
							} else {
								if (b.object.isPlain(k)) {
									g = {};
									for (h in k) {
										if (k.hasOwnProperty(h)) {
											g[h] = b.object.clone(k[h])
										}
									}
								}
							}
						}
						return g
					};
					b.object.isEmpty = function(g) {
						for ( var e in g) {
							return false
						}
						return true
					};
					b.object.keys = function(i) {
						var e = [], h = 0, g;
						for (g in i) {
							if (i.hasOwnProperty(g)) {
								e[h++] = g
							}
						}
						return e
					};
					b.object.map = function(i, h) {
						var g = {};
						for ( var e in i) {
							if (i.hasOwnProperty(e)) {
								g[e] = h(i[e], e)
							}
						}
						return g
					};
					(function() {
						var g = function(h) {
							return b.lang.isObject(h) && !b.lang.isFunction(h)
						};
						function e(l, k, j, i, h) {
							if (k.hasOwnProperty(j)) {
								if (h && g(l[j])) {
									b.object.merge(l[j], k[j], {
										overwrite : i,
										recursive : h
									})
								} else {
									if (i || !(j in l)) {
										l[j] = k[j]
									}
								}
							}
						}
						b.object.merge = function(n, h, p) {
							var k = 0, q = p || {}, m = q.overwrite, o = q.whiteList, j = q.recursive, l;
							if (o && o.length) {
								l = o.length;
								for (; k < l; ++k) {
									e(n, h, o[k], m, j)
								}
							} else {
								for (k in h) {
									e(n, h, k, m, j)
								}
							}
							return n
						}
					})();
					b.page.createStyleSheet = function(e) {
						var k = e || {}, i = k.document || document, h;
						if (b.browser.ie) {
							if (!k.url) {
								k.url = ""
							}
							return i.createStyleSheet(k.url, k.index)
						} else {
							h = "<style type='text/css'></style>";
							k.url
									&& (h = "<link type='text/css' rel='stylesheet' href='"
											+ k.url + "'/>");
							b.dom.insertHTML(i.getElementsByTagName("HEAD")[0],
									"beforeEnd", h);
							if (k.url) {
								return null
							}
							var g = i.styleSheets[i.styleSheets.length - 1], j = g.rules
									|| g.cssRules;
							return {
								self : g,
								rules : g.rules || g.cssRules,
								addRule : function(l, n, m) {
									if (g.addRule) {
										return g.addRule(l, n, m)
									} else {
										if (g.insertRule) {
											isNaN(m) && (m = j.length);
											return g.insertRule(l + "{" + n
													+ "}", m)
										}
									}
								},
								removeRule : function(l) {
									if (g.removeRule) {
										g.removeRule(l)
									} else {
										if (g.deleteRule) {
											isNaN(l) && (l = 0);
											g.deleteRule(l)
										}
									}
								}
							}
						}
					};
					b.page.getHeight = function() {
						var i = document, e = i.body, h = i.documentElement, g = i.compatMode == "BackCompat" ? e
								: i.documentElement;
						return Math.max(h.scrollHeight, e.scrollHeight,
								g.clientHeight)
					};
					b.page.getWidth = function() {
						var i = document, e = i.body, h = i.documentElement, g = i.compatMode == "BackCompat" ? e
								: i.documentElement;
						return Math.max(h.scrollWidth, e.scrollWidth,
								g.clientWidth)
					};
					b.page.lazyLoadImage = function(e) {
						e = e || {};
						e.preloadHeight = e.preloadHeight || 0;
						b.dom
								.ready(function() {
									var k = document
											.getElementsByTagName("IMG"), l = k, m = k.length, j = 0, p = h(), o = "data-tangram-ori-src", n;
									if (e.className) {
										l = [];
										for (; j < m; ++j) {
											if (b.dom.hasClass(k[j],
													e.className)) {
												l.push(k[j])
											}
										}
									}
									function h() {
										return b.page.getScrollTop()
												+ b.page.getViewHeight()
												+ e.preloadHeight
									}
									for (j = 0, m = l.length; j < m; ++j) {
										n = l[j];
										if (b.dom.getPosition(n).top > p) {
											n.setAttribute(o, n.src);
											e.placeHolder ? n.src = e.placeHolder
													: n.removeAttribute("src")
										}
									}
									var g = function() {
										var r = h(), t, u = true, s = 0, q = l.length;
										for (; s < q; ++s) {
											n = l[s];
											t = n.getAttribute(o);
											t && (u = false);
											if (b.dom.getPosition(n).top < r
													&& t) {
												n.src = t;
												n.removeAttribute(o);
												b.lang.isFunction(e.onlazyload)
														&& e.onlazyload(n)
											}
										}
										u && b.un(window, "scroll", g)
									};
									b.on(window, "scroll", g)
								})
					};
					b.page.load = function(h, o, j) {
						o = o || {};
						var m = b.page.load, e = m._cache = m._cache || {}, l = m._loadingCache = m._loadingCache
								|| {}, k = o.parallel;
						function i() {
							for ( var q = 0, p = h.length; q < p; ++q) {
								if (!e[h[q].url]) {
									setTimeout(arguments.callee, 10);
									return
								}
							}
							o.onload()
						}
						function g(r, t) {
							var s, q, p;
							switch (r.type.toLowerCase()) {
							case "css":
								s = document.createElement("link");
								s.setAttribute("rel", "stylesheet");
								s.setAttribute("type", "text/css");
								break;
							case "js":
								s = document.createElement("script");
								s.setAttribute("type", "text/javascript");
								s.setAttribute("charset", r.charset
										|| m.charset);
								break;
							case "html":
								s = document.createElement("iframe");
								s.frameBorder = "none";
								break;
							default:
								return
							}
							p = function() {
								if (!q
										&& (!this.readyState
												|| this.readyState === "loaded" || this.readyState === "complete")) {
									q = true;
									b.un(s, "load", p);
									b.un(s, "readystatechange", p);
									t.call(window, s)
								}
							};
							b.on(s, "load", p);
							b.on(s, "readystatechange", p);
							if (r.type == "css") {
								(function() {
									if (q) {
										return
									}
									try {
										s.sheet.cssRule
									} catch (u) {
										setTimeout(arguments.callee, 20);
										return
									}
									q = true;
									t.call(window, s)
								})()
							}
							s.href = s.src = r.url;
							document.getElementsByTagName("head")[0]
									.appendChild(s)
						}
						b.lang.isString(h) && (h = [ {
							url : h
						} ]);
						if (!(h && h.length)) {
							return
						}
						function n(r) {
							var q = r.url, s = !!k, p, t = function(u) {
								e[r.url] = u;
								delete l[r.url];
								if (b.lang.isFunction(r.onload)) {
									if (false === r.onload.call(window, u)) {
										return
									}
								}
								!k && m(h.slice(1), o, true);
								if ((!j) && b.lang.isFunction(o.onload)) {
									i()
								}
							};
							r.type = r.type
									|| q
											.replace(
													/^[^\?#]+\.(css|js|html)(\?|#| |$)[^\?#]*/i,
													"$1");
							r.requestType = r.requestType
									|| (r.type == "html" ? "ajax" : "dom");
							if (p = e[r.url]) {
								t(p);
								return s
							}
							if (!o.refresh && l[r.url]) {
								setTimeout(function() {
									n(r)
								}, 10);
								return s
							}
							l[r.url] = true;
							if (r.requestType.toLowerCase() == "dom") {
								g(r, t)
							} else {
								b.ajax.get(r.url, function(v, u) {
									t(u)
								})
							}
							return s
						}
						b.each(h, n)
					};
					b.page.load.charset = "UTF8";
					b.page.loadCssFile = function(g) {
						var e = document.createElement("link");
						e.setAttribute("rel", "stylesheet");
						e.setAttribute("type", "text/css");
						e.setAttribute("href", g);
						document.getElementsByTagName("head")[0].appendChild(e)
					};
					b.page.loadJsFile = function(g) {
						var e = document.createElement("script");
						e.setAttribute("type", "text/javascript");
						e.setAttribute("src", g);
						e.setAttribute("defer", "defer");
						document.getElementsByTagName("head")[0].appendChild(e)
					};
					b.platform = b.platform || {};
					b.platform.isAndroid = /android/i.test(navigator.userAgent);
					b.platform.isIpad = /ipad/i.test(navigator.userAgent);
					b.platform.isIphone = /iphone/i.test(navigator.userAgent);
					b.platform.isMacintosh = /macintosh/i
							.test(navigator.userAgent);
					b.platform.isWindows = /windows/i.test(navigator.userAgent);
					b.platform.isX11 = /x11/i.test(navigator.userAgent);
					b.sio = b.sio || {};
					b.sio._createScriptTag = function(g, e, h) {
						g.setAttribute("type", "text/javascript");
						h && g.setAttribute("charset", h);
						g.setAttribute("src", e);
						document.getElementsByTagName("head")[0].appendChild(g)
					};
					b.sio._removeScriptTag = function(g) {
						if (g.clearAttributes) {
							g.clearAttributes()
						} else {
							for ( var e in g) {
								if (g.hasOwnProperty(e)) {
									delete g[e]
								}
							}
						}
						if (g && g.parentNode) {
							g.parentNode.removeChild(g)
						}
						g = null
					};
					b.sio.callByBrowser = function(e, l, n) {
						var i = document.createElement("SCRIPT"), j = 0, o = n
								|| {}, h = o.charset, m = l || function() {
						}, k = o.timeOut || 0, g;
						i.onload = i.onreadystatechange = function() {
							if (j) {
								return
							}
							var p = i.readyState;
							if ("undefined" == typeof p || p == "loaded"
									|| p == "complete") {
								j = 1;
								try {
									m();
									clearTimeout(g)
								} finally {
									i.onload = i.onreadystatechange = null;
									b.sio._removeScriptTag(i)
								}
							}
						};
						if (k) {
							g = setTimeout(function() {
								i.onload = i.onreadystatechange = null;
								b.sio._removeScriptTag(i);
								o.onfailure && o.onfailure()
							}, k)
						}
						b.sio._createScriptTag(i, e, h)
					};
					b.sio.callByServer = function(e, r, s) {
						var n = document.createElement("SCRIPT"), m = "bd__cbs__", p, j, t = s
								|| {}, i = t.charset, k = t.queryField
								|| "callback", q = t.timeOut || 0, g, h = new RegExp(
								"(\\?|&)" + k + "=([^&]*)"), l;
						if (b.lang.isFunction(r)) {
							p = m
									+ Math.floor(Math.random() * 2147483648)
											.toString(36);
							window[p] = o(0)
						} else {
							if (b.lang.isString(r)) {
								p = r
							} else {
								if (l = h.exec(e)) {
									p = l[2]
								}
							}
						}
						if (q) {
							g = setTimeout(o(1), q)
						}
						e = e.replace(h, "\x241" + k + "=" + p);
						if (e.search(h) < 0) {
							e += (e.indexOf("?") < 0 ? "?" : "&") + k + "=" + p
						}
						b.sio._createScriptTag(n, e, i);
						function o(u) {
							return function() {
								try {
									if (u) {
										t.onfailure && t.onfailure()
									} else {
										r.apply(window, arguments);
										clearTimeout(g)
									}
									window[p] = null;
									delete window[p]
								} catch (v) {
								} finally {
									b.sio._removeScriptTag(n)
								}
							}
						}
					};
					b.sio.log = function(g) {
						var e = new Image(), h = "tangram_sio_log_"
								+ Math.floor(Math.random() * 2147483648)
										.toString(36);
						window[h] = e;
						e.onload = e.onerror = e.onabort = function() {
							e.onload = e.onerror = e.onabort = null;
							window[h] = null;
							e = null
						};
						e.src = g
					};
					b.string.decodeHTML = function(e) {
						var g = String(e).replace(/&quot;/g, '"').replace(
								/&lt;/g, "<").replace(/&gt;/g, ">").replace(
								/&amp;/g, "&");
						return g.replace(/&#([\d]+);/g, function(i, h) {
							return String.fromCharCode(parseInt(h, 10))
						})
					};
					b.decodeHTML = b.string.decodeHTML;
					b.string.encodeHTML = function(e) {
						return String(e).replace(/&/g, "&amp;").replace(/</g,
								"&lt;").replace(/>/g, "&gt;").replace(/"/g,
								"&quot;").replace(/'/g, "&#39;")
					};
					b.encodeHTML = b.string.encodeHTML;
					b.string.filterFormat = function(h, e) {
						var g = Array.prototype.slice.call(arguments, 1), i = Object.prototype.toString;
						if (g.length) {
							g = g.length == 1 ? (e !== null
									&& (/\[object Array\]|\[object Object\]/
											.test(i.call(e))) ? e : g) : g;
							return h
									.replace(
											/#\{(.+?)\}/g,
											function(k, n) {
												var p, m, l, j, o;
												if (!g) {
													return ""
												}
												p = n.split("|");
												m = g[p[0]];
												if ("[object Function]" == i
														.call(m)) {
													m = m(p[0])
												}
												for (l = 1, j = p.length; l < j; ++l) {
													o = b.string.filterFormat[p[l]];
													if ("[object Function]" == i
															.call(o)) {
														m = o(m)
													}
												}
												return (("undefined" == typeof m || m === null) ? ""
														: m)
											})
						}
						return h
					};
					b.string.filterFormat.escapeJs = function(k) {
						if (!k || "string" != typeof k) {
							return k
						}
						var j, e, g, h = [];
						for (j = 0, e = k.length; j < e; ++j) {
							g = k.charCodeAt(j);
							if (g > 255) {
								h.push(k.charAt(j))
							} else {
								h.push("\\x" + g.toString(16))
							}
						}
						return h.join("")
					};
					b.string.filterFormat.js = b.string.filterFormat.escapeJs;
					b.string.filterFormat.escapeString = function(e) {
						if (!e || "string" != typeof e) {
							return e
						}
						return e.replace(/["'<>\\\/`]/g, function(g) {
							return "&#" + g.charCodeAt(0) + ";"
						})
					};
					b.string.filterFormat.e = b.string.filterFormat.escapeString;
					b.string.filterFormat.toInt = function(e) {
						return parseInt(e, 10) || 0
					};
					b.string.filterFormat.i = b.string.filterFormat.toInt;
					b.string.format = function(h, e) {
						h = String(h);
						var g = Array.prototype.slice.call(arguments, 1), i = Object.prototype.toString;
						if (g.length) {
							g = g.length == 1 ? (e !== null
									&& (/\[object Array\]|\[object Object\]/
											.test(i.call(e))) ? e : g) : g;
							return h.replace(/#\{(.+?)\}/g, function(j, l) {
								var k = g[l];
								if ("[object Function]" == i.call(k)) {
									k = k(l)
								}
								return ("undefined" == typeof k ? "" : k)
							})
						}
						return h
					};
					b.format = b.string.format;
					(function() {
						var h = /^\#[\da-f]{6}$/i, g = /^rgb\((\d+), (\d+), (\d+)\)$/, e = {
							black : "#000000",
							silver : "#c0c0c0",
							gray : "#808080",
							white : "#ffffff",
							maroon : "#800000",
							red : "#ff0000",
							purple : "#800080",
							fuchsia : "#ff00ff",
							green : "#008000",
							lime : "#00ff00",
							olive : "#808000",
							yellow : "#ffff0",
							navy : "#000080",
							blue : "#0000ff",
							teal : "#008080",
							aqua : "#00ffff"
						};
						b.string.formatColor = function(k) {
							if (h.test(k)) {
								return k
							} else {
								if (g.test(k)) {
									for ( var o, n = 1, k = "#"; n < 4; n++) {
										o = parseInt(RegExp["\x24" + n])
												.toString(16);
										k += ("00" + o).substr(o.length)
									}
									return k
								} else {
									if (/^\#[\da-f]{3}$/.test(k)) {
										var m = k.charAt(1), l = k.charAt(2), j = k
												.charAt(3);
										return "#" + m + m + l + l + j + j
									} else {
										if (e[k]) {
											return e[k]
										}
									}
								}
							}
							return ""
						}
					})();
					b.string.getByteLength = function(e) {
						return String(e).replace(/[^\x00-\xff]/g, "ci").length
					};
					b.string.stripTags = function(e) {
						return String(e || "").replace(/<[^>]+>/g, "")
					};
					b.string.subByte = function(h, g, e) {
						h = String(h);
						e = e || "";
						if (g < 0 || b.string.getByteLength(h) <= g) {
							return h + e
						}
						h = h.substr(0, g).replace(/([^\x00-\xff])/g, "\x241 ")
								.substr(0, g).replace(/[^\x00-\xff]$/, "")
								.replace(/([^\x00-\xff]) /g, "\x241");
						return h + e
					};
					b.string.toHalfWidth = function(e) {
						return String(e)
								.replace(
										/[\uFF01-\uFF5E]/g,
										function(g) {
											return String.fromCharCode(g
													.charCodeAt(0) - 65248)
										}).replace(/\u3000/g, " ")
					};
					b.string.wbr = function(e) {
						return String(e).replace(
								/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi,
								"$&<wbr>").replace(/><wbr>/g, ">")
					};
					b.swf = b.swf || {};
					b.swf.version = (function() {
						var m = navigator;
						if (m.plugins && m.mimeTypes.length) {
							var j = m.plugins["Shockwave Flash"];
							if (j && j.description) {
								return j.description.replace(/([a-zA-Z]|\s)+/,
										"").replace(/(\s)+r/, ".")
										+ ".0"
							}
						} else {
							if (window.ActiveXObject && !window.opera) {
								for ( var h = 12; h >= 2; h--) {
									try {
										var l = new ActiveXObject(
												"ShockwaveFlash.ShockwaveFlash."
														+ h);
										if (l) {
											var g = l.GetVariable("$version");
											return g.replace(/WIN/g, "")
													.replace(/,/g, ".")
										}
									} catch (k) {
									}
								}
							}
						}
					})();
					b.swf.createHTML = function(x) {
						x = x || {};
						var p = b.swf.version, n = x.ver || "6.0.0", m, j, l, h, o, w, e = {}, t = b.string.encodeHTML;
						for (h in x) {
							e[h] = x[h]
						}
						x = e;
						if (p) {
							p = p.split(".");
							n = n.split(".");
							for (l = 0; l < 3; l++) {
								m = parseInt(p[l], 10);
								j = parseInt(n[l], 10);
								if (j < m) {
									break
								} else {
									if (j > m) {
										return ""
									}
								}
							}
						} else {
							return ""
						}
						var r = x.vars, q = [ "classid", "codebase", "id",
								"width", "height", "align" ];
						x.align = x.align || "middle";
						x.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000";
						x.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0";
						x.movie = x.url || "";
						delete x.vars;
						delete x.url;
						if ("string" == typeof r) {
							x.flashvars = r
						} else {
							var u = [];
							for (h in r) {
								w = r[h];
								u.push(h + "=" + encodeURIComponent(w))
							}
							x.flashvars = u.join("&")
						}
						var s = [ "<object " ];
						for (l = 0, o = q.length; l < o; l++) {
							w = q[l];
							s.push(" ", w, '="', t(x[w]), '"')
						}
						s.push(">");
						var g = {
							wmode : 1,
							scale : 1,
							quality : 1,
							play : 1,
							loop : 1,
							menu : 1,
							salign : 1,
							bgcolor : 1,
							base : 1,
							allowscriptaccess : 1,
							allownetworking : 1,
							allowfullscreen : 1,
							seamlesstabbing : 1,
							devicefont : 1,
							swliveconnect : 1,
							flashvars : 1,
							movie : 1
						};
						for (h in x) {
							w = x[h];
							h = h.toLowerCase();
							if (g[h] && (w || w === false || w === 0)) {
								s.push('<param name="' + h + '" value="' + t(w)
										+ '" />')
							}
						}
						x.src = x.movie;
						x.name = x.id;
						delete x.id;
						delete x.movie;
						delete x.classid;
						delete x.codebase;
						x.type = "application/x-shockwave-flash";
						x.pluginspage = "http://www.macromedia.com/go/getflashplayer";
						s.push("<embed");
						var v;
						for (h in x) {
							w = x[h];
							if (w || w === false || w === 0) {
								if ((new RegExp("^salign\x24", "i")).test(h)) {
									v = w;
									continue
								}
								s.push(" ", h, '="', t(w), '"')
							}
						}
						if (v) {
							s.push(' salign="', t(v), '"')
						}
						s.push("></embed></object>");
						return s.join("")
					};
					b.swf.create = function(e, h) {
						e = e || {};
						var g = b.swf.createHTML(e) || e.errorMessage || "";
						if (h && "string" == typeof h) {
							h = document.getElementById(h)
						}
						b.dom.insertHTML(h || document.body, "beforeEnd", g)
					};
					b.swf.getMovie = function(h) {
						var e = document[h], g;
						return b.browser.ie == 9 ? e && e.length ? (g = b.array
								.remove(b.lang.toArray(e), function(i) {
									return i.tagName.toLowerCase() != "embed"
								})).length == 1 ? g[0] : g : e : e || window[h]
					};
					b.swf.Proxy = function(k, h, i) {
						var g = this, e = this._flash = b.swf.getMovie(k), j;
						if (!h) {
							return this
						}
						j = setInterval(function() {
							try {
								if (e[h]) {
									g._initialized = true;
									clearInterval(j);
									if (i) {
										i()
									}
								}
							} catch (l) {
							}
						}, 100)
					};
					b.swf.Proxy.prototype.getFlash = function() {
						return this._flash
					};
					b.swf.Proxy.prototype.isReady = function() {
						return !!this._initialized
					};
					b.swf.Proxy.prototype.call = function(g, k) {
						try {
							var i = this.getFlash(), h = Array.prototype.slice
									.call(arguments);
							h.shift();
							if (i[g]) {
								i[g].apply(i, h)
							}
						} catch (j) {
						}
					};
					b.url.getQueryValue = function(g, h) {
						var i = new RegExp(
								"(^|&|\\?|#)" + b.string.escapeReg(h)
										+ "=([^&#]*)(&|\x24|#)", "");
						var e = g.match(i);
						if (e) {
							return e[2]
						}
						return null
					};
					b.url.jsonToQuery = function(h, j) {
						var e = [], i, g = j || function(k) {
							return b.url.escapeSymbol(k)
						};
						b.object.each(h, function(l, k) {
							if (b.lang.isArray(l)) {
								i = l.length;
								while (i--) {
									e.push(k + "=" + g(l[i], k))
								}
							} else {
								e.push(k + "=" + g(l, k))
							}
						});
						return e.join("&")
					};
					b.url.queryToJson = function(e) {
						var l = e.substr(e.lastIndexOf("?") + 1), h = l
								.split("&"), k = h.length, p = {}, j = 0, n, m, o, g;
						for (; j < k; j++) {
							if (!h[j]) {
								continue
							}
							g = h[j].split("=");
							n = g[0];
							m = g[1];
							o = p[n];
							if ("undefined" == typeof o) {
								p[n] = m
							} else {
								if (b.lang.isArray(o)) {
									o.push(m)
								} else {
									p[n] = [ o, m ]
								}
							}
						}
						return p
					};
					a = b;
					return a
				}, []);
F.module("/static/common/lib/fis/data/data.js", function(b, a) {
	var c = {};
	a.get = function(d) {
		return c[d]
	};
	a.set = function(e, f) {
		if ("string" == typeof e) {
			c[e] = f
		} else {
			for ( var d in e) {
				if (e.hasOwnProperty(d)) {
					c[d] = e[d]
				}
			}
		}
	};
	return a
}, []);
F
		.module(
				"/static/common/ui/js_core/login/login.js",
				function(require, exports) {
					var baidu = require("/static/common/lib/tangram/base/base.js"), D = require("/static/common/ui/js_core/dialog/dialog.js"), Data = require("/static/common/lib/fis/data/data.js"), log = require("/static/common/ui/js_core/log/log.js");
					var dialog = (function() {
						var created = null;
						return function() {
							if (!created) {
								created = D.dialogCreate()
							}
							return created
						}
					})();
					var SHOW_FILTEL = [
							"\u60a8\u7684\u8d26\u53f7\u56e0\u4e3a\u4e0a\u4f20\u4e86\u542b\u5e7f\u544a\u6027\u8d28\u7684\u6587\u6863\u800c\u88ab\u5c01\u7981\uff0c\u6682\u65f6\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c",
							"\u60a8\u7684\u8d26\u53f7\u56e0\u4e3a\u4e0a\u4f20\u4e86\u5927\u91cf\u4f4e\u8d28\u91cf\u7684\u6587\u6863\u800c\u88ab\u5c01\u7981\uff0c\u6682\u65f6\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c",
							"\u60a8\u7684\u8d26\u53f7\u56e0\u4e3a\u6d89\u5acc\u5237\u5206\u4f5c\u5f0a\u800c\u88ab\u5c01\u7981\uff0c\u6682\u65f6\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c",
							"\u60a8\u7684\u8d26\u53f7\u56e0\u4e3a\u4e0a\u4f20\u4e86\u5305\u542b\u8272\u60c5\u3001\u53cd\u52a8\u7b49\u4e0d\u5065\u5eb7\u5185\u5bb9\u7684\u6587\u6863\u800c\u88ab\u5c01\u7981\uff0c\u6682\u65f6\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c",
							"\u60a8\u7684\u8d26\u53f7\u56e0\u4e3a\u4e0a\u4f20\u4e86\u5305\u542b\u8fdd\u89c4\u5185\u5bb9\u7684\u6587\u6863\u800c\u88ab\u5c01\u7981\uff0c\u6682\u65f6\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c",
							"\u60a8\u7684\u5e10\u53f7\u56e0\u4e3a\u6076\u610f\u4e3e\u62a5\u800c\u88ab\u5c01\u7981\uff0c\u6682\u65f6\u4e0d\u80fd\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c" ];
					var login = {
						hide : function(reload) {
							if (parent.pop) {
								parent.pop.hide();
								if (reload) {
									parent.location.reload(true)
								}
							} else {
								history.go(-1)
							}
						},
						onLoginSuccess : function() {
							window.location.reload(true)
						},
						onLoginFailed : function() {
							window.location = "http://passport.baidu.com/v2/?login&tpl=do&u="
									+ escape("http://wenku.baidu.com/")
						},
						defalutLoginSuccess : function() {
							window.location.reload(true)
						},
						verlogin : function(hasLogin, notLogin, patchment,
								extObj, async) {
							var extObj = extObj || {};
							var WkInfo = Data.get("WkInfo") || {};
							async = (async === undefined) ? true : async;
							function onOk(req, hasLogin) {
								var res = eval("(" + req.responseText + ")");
								if (res[0]["isLogin"] == "1") {
									if (res[0]["isLock"] == "1") {
										var isNA = (res[0]["lockDay"] == 0) ? ""
												: "\uff0c\u5c01\u7981\u5929\u6570"
														+ res[0]["lockDay"]
														+ "\u5929\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u89e3\u5c01", lockReasonIndex = parseInt(res[0]["lockReason"]) - 1, msg = SHOW_FILTEL[lockReasonIndex]
												|| SHOW_FILTEL[4];
										dialog()
												.alert(
														{
															title : "\u63d0\u793a",
															content : "<p style='padding:0 20px;'>"
																	+ msg
																	+ isNA
																	+ "\u3002</p>",
															width : 440,
															height : 200
														})
									} else {
										if (WkInfo.UserInfo
												&& WkInfo.UserInfo.isLimit) {
											login.notifyToVerificationMail();
											return
										} else {
											if (WkInfo.UserInfo
													&& WkInfo.UserInfo.isNoUsername) {
												login.notifyToFillinUsername();
												return
											} else {
												if (hasLogin) {
													hasLogin()
												}
												return true
											}
										}
									}
								} else {
									if (hasLogin && extObj.actionName) {
										baidu.cookie.set("BAIDU_DOC_NACT",
												extObj.actionName)
									} else {
										if (hasLogin
												&& hasLogin.toString().indexOf(
														"location.href")) {
											baidu.cookie.set("BAIDU_DOC_NACT",
													"upload")
										}
									}
									login.log(hasLogin, patchment, extObj)
								}
								return false
							}
							baidu.ajax.request("/login?_t="
									+ (new Date()).getTime(), {
								async : async,
								onsuccess : function(req) {
									onOk(req, hasLogin)
								}
							})
						},
						check : function(hasLogin, notLogin, patchment, extObj) {
							var extObj = extObj || {};
							var WkInfo = Data.get("WkInfo") || {};
							function onOk(req, hasLogin, notLogin) {
								var res = eval("(" + req.responseText + ")");
								if (res[0]["isLogin"] == "1") {
									if (WkInfo.UserInfo
											&& WkInfo.UserInfo.isLimit) {
										login.notifyToVerificationMail();
										return
									} else {
										if (WkInfo.UserInfo
												&& WkInfo.UserInfo.isNoUsername) {
											login.notifyToFillinUsername();
											return
										} else {
											if (hasLogin) {
												hasLogin()
											}
											return true
										}
									}
								}
								if (notLogin) {
									notLogin()
								} else {
									login.log(hasLogin, patchment)
								}
								return false
							}
							baidu.ajax.get("/login?_t="
									+ (new Date()).getTime(), function(req) {
								onOk(req, hasLogin, notLogin)
							})
						},
						checksynch : function(hasLogin, notLogin, patchment) {
							function onOk(req, hasLogin, notLogin) {
								var res = eval("(" + req.responseText + ")");
								if (res[0]["isLogin"] == "1") {
									if (res[0]["isLock"] === "1") {
										var isNA = (res[0]["lockDay"] == 0) ? ""
												: "\uff0c\u5c01\u7981\u5929\u6570"
														+ res[0]["lockDay"]
														+ "\u5929\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\u89e3\u5c01", lockReasonIndex = parseInt(res[0]["lockReason"]) - 1, msg = SHOW_FILTEL[lockReasonIndex]
												|| SHOW_FILTEL[4];
										dialog()
												.pop(
														{
															title : "\u63d0\u793a",
															content : "<p>"
																	+ msg
																	+ isNA
																	+ "\u3002</p><br><input type='button' class='pop_btn_short' onclick='pop.hide()' value='\u786e \u5b9a'>",
															width : 440,
															height : 300
														});
										return false
									}
									if (hasLogin) {
										hasLogin()
									}
									return true
								}
								if (notLogin) {
									notLogin()
								} else {
									login.log(hasLogin, patchment)
								}
								return false
							}
							baidu.ajax.request("/login?_t="
									+ (new Date()).getTime(), {
								onsuccess : function(req) {
									onOk(req, hasLogin, notLogin)
								},
								method : "get",
								async : false
							})
						},
						log : function(onSucc, p, extObj) {
							if (onSucc) {
								login.onLoginSuccess = login.onSucc
							} else {
								login.onLoginSuccess = login.defalutLoginSuccess
							}
							if (!baidu.object.isEmpty(extObj)) {
								WkLogin.from = extObj
							} else {
								WkLogin.from = ""
							}
							WkLogin.show();
							var popLoginForm = baidu.dom.q("pass_login_form",
									"login-normal", "form")[0];
							if (popLoginForm) {
								var jumpUrlEl = popLoginForm.u
							}
							if (jumpUrlEl) {
								if (extObj && extObj.fromMod) {
									login.addSuccessLog(extObj.fromMod,
											jumpUrlEl)
								} else {
									jumpUrlEl.value = encodeURI(location.href)
											.replace(/#+$/g, "")
								}
							}
						},
						regiest : function() {
						},
						notifyToVerificationMail : function(oldurl) {
							oldurl = oldurl || "http://" + location.host
									+ location.pathname;
							var _msg = [
									'<div class="phv20">\u60a8\u7684email\u5c1a\u672a\u9a8c\u8bc1\uff0c\u9a8c\u8bc1\u6210\u529f\u540e\u5237\u65b0\u9875\u9762\u5373\u53ef\u7ee7\u7eed\u64cd\u4f5c\u3002',
									'<a href="https://passport.baidu.com/v2/?accountbindemail&tpl=do&u='
											+ encodeURIComponent(oldurl)
											+ '" target="_blank" onclick="location.reload(true)" style="color:#E87301">\u70b9\u51fb\u7acb\u5373\u9a8c\u8bc1</a></div>' ]
									.join("");
							dialog().pop({
								title : "\u63d0\u793a",
								content : _msg,
								width : 520,
								height : 160
							})
						},
						notifyToFillinUsername : function(action) {
							var action = action || "default";
							log.send("general", "showFillinUsername", {
								action : action
							});
							var _tmp = "?t=" + (new Date()).getTime()
									+ "&action=" + action;
							dialog()
									.pop(
											{
												title : "\u4eb2\u7231\u7684\u6587\u53cb\uff0c\u6709\u7528\u6237\u540d\u624d\u80fd\u8d21\u732e\u54e6\u3002\u7559\u4e0b\u559c\u6b22\u7684\u540d\u5b57\u5427\uff01",
												url : "/static/common/html/user_fillinUsername.html"
														+ _tmp,
												width : 560,
												height : 320
											})
						},
						addSuccessLog : function(fromMod, jumpUrlEl) {
							var jumpUrl = encodeURI(location.href).replace(
									/#.*$/g, ""), pathName = location.pathname;
							var pageType = {
								home : /^\/$/i,
								search : /^\/search/i,
								view : /^\/view\//i,
								zone : /^\/(edu|ppt|pro|form)\/index$/i
							};
							for ( var pageKey in pageType) {
								if (pageType.hasOwnProperty(pageKey)) {
									var pageItem = pageType[pageKey];
									if (pageItem.test(pathName)) {
										var pageData = "from_page=" + pageKey;
										jumpUrl = login.getConUrl(jumpUrl,
												pageData)
									}
								}
							}
							var modData = "from_mod=" + fromMod;
							jumpUrl = login.getConUrl(jumpUrl, modData);
							jumpUrlEl.value = jumpUrl
						},
						getConUrl : function(url, para) {
							var conSbl = (url.indexOf("?") == -1) ? "?" : "&";
							return url + conSbl + para
						}
					};
					exports.login = login;
					return exports
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/dialog/dialog.js",
						"/static/common/lib/fis/data/data.js",
						"/static/common/ui/js_core/log/log.js" ]);
F.module("/static/common/ui/js_core/log/log.js", function(e, c) {
	var d = e("/static/common/lib/tangram/base/base.js");
	var b = e("/static/common/ui/js_core/util/util.js");
	var f = d.sio.log;
	c.log = f;
	c.imageReq = f;
	var h = function(l, j, i) {
		var k = (new Date()).getTime();
		var m = [
				"http://" + location.host + "/tongji/" + l + ".html?type=" + j,
				"t=" + k ];
		if (i) {
			d.object.each(i, function(o, n) {
				m.push(n + "=" + o)
			})
		}
		//f(m.join("&"))
	};
	c.send = h;
	var a = function(j, l, i) {
		var k = (new Date()).getTime();
		var m = [ "http://nsclick.baidu.com/v.gif?pid=112",
				"url=" + encodeURIComponent(j), "type=" + l, "t=" + k ];
		d.object.each(i, function(o, n) {
			m.push(n + "=" + o)
		});
		f(m.join("&"))
	};
	c.nslog = a;
	if (!window.FEDEBUG) {
		b.errorCenter(function(l, j, m, k, i) {
			h("general", "errorCenter", {
				url : encodeURIComponent(j + "||" + l),
				msg : encodeURIComponent(m),
				eu : encodeURIComponent(k),
				line : encodeURIComponent(i)
			});
			return false
		});
		d.on(window, "load", function() {
			var k = 0, m = true, j = false, l, i;
			if (typeof document.hidden !== "undefined") {
				l = "hidden";
				i = "visibilitychange"
			} else {
				if (typeof document.mozHidden !== "undefined") {
					l = "mozHidden";
					i = "mozvisibilitychange"
				} else {
					if (typeof document.msHidden !== "undefined") {
						l = "msHidden";
						i = "msvisibilitychange"
					} else {
						if (typeof document.webkitHidden !== "undefined") {
							l = "webkitHidden";
							i = "webkitvisibilitychange"
						}
					}
				}
			}
			b.jpu(function(n) {
				if (n > 3) {
					k++
				} else {
					k = 0
				}
				if (k > 2) {
					if (m) {
						m = false;
						return false
					}
					k = 0;
					!j
							&& h("general", "jpu", {
								url : encodeURIComponent(location.href + "||"
										+ b.getBrowser)
							})
				}
			});
			if (l) {
				d.on(document, i, function() {
					var n = document[l];
					if (n) {
						j = true
					} else {
						j = false
					}
				})
			}
		})
	}
	var g = function() {
		b.delegate(document.body, ".logSend", "mousedown", function() {
			var l = this, i = "data-logsend", k = {
				send : h,
				nslog : a
			}, j = d.dom.getAttr(l, i);
			if (j) {
				j = d.json.parse(j) || {};
				d.object.each(j, function(n, m) {
					if (k[m]) {
					}
					k[m].apply(null, n)
				})
			}
		})
	};
	setTimeout(function() {
		g()
	}, 250);
	return c
}, [ "/static/common/lib/tangram/base/base.js",
		"/static/common/ui/js_core/util/util.js" ]);
F
		.module(
				"/static/common/ui/js_core/util/util.js",
				function(b, K) {
					var d = b("/static/common/lib/tangram/base/base.js");
					window.FEDEBUG = false;
					(function() {
						var X;
						var W = function W() {
						};
						var T = [ "assert", "clear", "count", "debug", "dir",
								"dirxml", "error", "exception", "group",
								"groupCollapsed", "groupEnd", "info", "log",
								"markTimeline", "profile", "profileEnd",
								"table", "time", "timeEnd", "timeStamp",
								"trace", "warn" ];
						var V = T.length;
						var e = (window.console = window.console || {});
						var U = window.FEDEBUG = window.FEDEBUG
								|| d.url
										.getQueryValue(location.href, "fedebug");
						while (V--) {
							X = T[V];
							if (!U || !e[X]) {
								e[X] = W
							}
						}
					}());
					try {
						document.execCommand("BackgroundImageCache", false,
								true)
					} catch (N) {
					}
					function A(e, W, U, V) {
						var T;
						return function() {
							var X = arguments;
							V = V || this;
							if (U && T) {
								T = clearTimeout(T)
							}
							T = T || setTimeout(function() {
								T = null;
								e.apply(V, X)
							}, W)
						}
					}
					var D = function(e, U, T) {
						return A(e, U, false, T)
					};
					K.throttle = D;
					var h = function(e, U, T) {
						return A(e, U, true, T)
					};
					K.debounce = h;
					var c = function(U, T) {
						var e = {};
						if (d.lang.isFunction(T)) {
							T = function(V) {
								return V
							}
						}
						return function() {
							var V = T.apply(this, arguments);
							return Object.prototype.hasOwnProperty.call(e, V) ? e[V]
									: (e[V] = U.apply(this, arguments))
						}
					};
					K.memoize = c;
					var B = function(W, Z, V, U) {
						Z = Z.replace(/^on/i, "");
						W = d.dom._g(W);
						var e = function(ab) {
							V.call(W, ab)
						}, aa = d.event._listeners, T = d.event._eventFilter, X, Y = Z;
						Z = Z.toLowerCase();
						if (T && T[Z]) {
							X = T[Z](W, Z, e);
							Y = X.type;
							e = X.listener
						}
						if (W.addEventListener) {
							W.addEventListener(Y, e, U)
						} else {
							if (W.attachEvent) {
								W.attachEvent("on" + Y, e)
							}
						}
						aa[aa.length] = [ W, Z, V, e, Y ];
						return W
					};
					var C = function(V, Z, U, T) {
						V = d.dom._g(V);
						Z = Z.replace(/^on/i, "").toLowerCase();
						var ab = d.event._listeners, W = ab.length, X = !U, aa, Y, e;
						while (W--) {
							aa = ab[W];
							if (aa[1] === Z && aa[0] === V
									&& (X || aa[2] === U)) {
								Y = aa[4];
								e = aa[3];
								if (V.removeEventListener) {
									V.removeEventListener(Y, e, T)
								} else {
									if (V.detachEvent) {
										V.detachEvent("on" + Y, e)
									}
								}
								ab.splice(W, 1)
							}
						}
						return V
					};
					var s = {
						submit : true,
						reset : true,
						change : true,
						select : true
					};
					var m = (function() {
						var V = s, W = {
							focus : "focusin",
							blur : "focusout"
						}, T = {
							focus : true,
							blur : true
						}, U = function(X) {
							return d.browser.ie && V[X]
						}, e = function(X) {
							return d.browser.ie && W[X] ? W[X] : X
						};
						return function(ac, Y, Z, ab) {
							var X = d.lang.isString, ae = d.lang.isFunction, ad = d.dom.query;
							if (U(Z)) {
								m(ac, Y, "focus", function(af) {
									C(this, Z);
									B(this, Z, function(ag) {
										return ab.call(this, ag)
									})
								});
								m(ac, Y, "blur", function(af) {
									C(this, Z)
								});
								return false
							}
							ac = X(ac) ? ad(ac)[0] : ac;
							var aa = X(Y) ? function(ag) {
								var af = ag.target;
								if (af.nodeType === 3) {
									af = af.parentNode
								}
								return d.array.find(ad(Y, ac),
										function(ai, ah) {
											return ai === af
													|| d.dom.contains(ai, af)
													&& !ai.disabled
										})
							} : (ae(Y) ? function(af) {
								return Y(af)
							} : function() {
							});
							Z = e(Z);
							B(ac, Z, function(ah) {
								var ai = d.event.get(ah), ag = aa(ai);
								if (ag) {
									var af = ab.call(ag, ai)
								}
							}, T[Z])
						}
					})();
					(function() {
						var e = false;
						d.event._eventFilter.input = window.attachEvent ? function(
								T, U, V) {
							return {
								type : "propertychange",
								listener : function(W) {
									if (e) {
										return false
									}
									if (W.propertyName
											&& W.propertyName.toLowerCase() === "value") {
										e = true;
										V(W);
										e = false
									}
								}
							}
						}
								: function(T, U, V) {
									return {
										type : "input",
										listener : V
									}
								};
						s.input = true
					})();
					K.delegate = m;
					var k = (function() {
						var e, T;
						d.un(window, "unload", function() {
							document.body.onresize = null;
							window.onresize = null
						});
						return function(U) {
							var V = e;
							e = function() {
								try {
									document.body.onresize = null;
									window.onresize = null;
									setTimeout(function() {
										if (d.browser.ie < 8) {
											document.body.onresize = h(e, 200)
										} else {
											window.onresize = h(e, 200)
										}
									}, 1)
								} catch (W) {
								}
								if (d.lang.isFunction(V)) {
									V()
								}
								U()
							};
							if (d.browser.ie < 8) {
								document.body.onresize = h(e, 200)
							} else {
								window.onresize = h(e, 200)
							}
						}
					})();
					K.windowResize = k;
					var u = function(U, e) {
						var T = U.cloneNode(false);
						T.innerHTML = e;
						U.parentNode.replaceChild(T, U);
						return T
					};
					K.setInnerHtml = u;
					var t = function(e, T) {
						if (document.body && "textContent" in document.body) {
							e.textContent = T
						} else {
							e.innerText = T
						}
					};
					K.setInnerText = t;
					var S = function(e) {
						if (document.body && "textContent" in document.body) {
							return e.textContent
						}
						return e.innerText || e.textContent || ""
					};
					K.getInnerText = S;
					var M = (function() {
						var e = document.createElement("div"), U = {
							option : [ 1, '<select multiple="multiple">',
									"</select>" ],
							optgroup : [ 1, '<select multiple="multiple">',
									"</select>" ],
							legend : [ 1, "<fieldset>", "</fieldset>" ],
							thead : [ 1, "<table>", "</table>" ],
							tbody : [ 1, "<table>", "</table>" ],
							tfoot : [ 1, "<table>", "</table>" ],
							tr : [ 2, "<table><tbody>", "</tbody></table>" ],
							td : [ 3, "<table><tbody><tr>",
									"</tr></tbody></table>" ],
							th : [ 3, "<table><tbody><tr>",
									"</tr></tbody></table>" ],
							col : [ 2, "<table><tbody></tbody><colgroup>",
									"</colgroup></table>" ],
							_default : [ 0, "", "" ]
						}, T = /<(\w+)/i;
						return function(Y, V, ac) {
							var X = (ac && ac.createElement("div")) || e, ab = X, ae = (T
									.exec(Y) || [ "", "" ])[1], Z = U[ae]
									|| U._default, aa = Z[0];
							X.innerHTML = Z[1] + Y + Z[2];
							while (aa--) {
								X = X.firstChild
							}
							var W = X.firstChild;
							if (!W || !V) {
								while (ab.firstChild) {
									ab.removeChild(ab.firstChild)
								}
								return W
							} else {
								ac = ac || document;
								var ad = ac.createDocumentFragment();
								while (W) {
									ad.appendChild(W);
									W = X.firstChild
								}
								return ad
							}
						}
					}());
					K.createDom = M;
					var f = (function() {
						var e = 1;
						return function(T) {
							var U = e++;
							return T ? T + U : U
						}
					})();
					K.uniqueId = f;
					var w = (function() {
						var e = [], T = "_da" + (new Date() - 0);
						return {
							hasData : function(V) {
								var U = V[T];
								return (!!U && !!e[U])
							},
							get : function(V, U) {
								if (U === undefined) {
									return V[T] || (V[T] = f("dom__"))
								}
								if (V[T] && e[V[T]]) {
									if (U) {
										return e[V[T]][U]
									} else {
										return e[V[T]]
									}
								}
							},
							set : function(X, W, Y) {
								var V = X[T] || (X[T] = f("dom__"));
								e[V] = e[V] || {};
								if (typeof W === "object") {
									for ( var U in W) {
										if (typeof U === "string") {
											e[V][U] = W[U]
										}
									}
								} else {
									e[V][W] = Y
								}
								return this
							},
							remove : function(W, V) {
								if (!W) {
									return this
								}
								var U = W[T] || (W[T] = f("dom__")), X;
								if (e[U]) {
									if (V !== undefined) {
										delete e[U][V]
									} else {
										e[U] = null
									}
								}
								return this
							}
						}
					})();
					K.domData = w;
					var I = function(Z, e, ac) {
						Z = d.g(Z);
						var ad = Z.className, T = ad.split(/\s+/), V = e
								.split(/\s+/), X = ac.split(/\s+/), ae, aa = V.length, U = X.length, ab, W, Y = 0;
						for (; Y < aa; ++Y) {
							for (W = 0, ae = T.length; W < ae; ++W) {
								if (T[W] == V[Y]) {
									T.splice(W, 1);
									break
								}
							}
						}
						ab = " " + T.join(" ") + " ";
						Y = 0;
						for (; Y < U; Y++) {
							if (ab.indexOf(" " + X[Y] + " ") < 0) {
								ab += (ab ? " " : "") + X[Y]
							}
						}
						Z.className = ab;
						return Z
					};
					K.replaceClass = I;
					var G = function(V, W, Y) {
						V = d.g(V);
						var U = V.style, X = function(aa) {
							return typeof aa !== "undefined"
						}, Z = {
							display : true
						};
						if ("filters" in V
								&& (typeof W === "string" ? /opacity/i.test(W)
										: X(W.opacity))) {
							U.zoom = 1;
							U.filter = (U.filter || "").replace(
									/alpha\([^)]*\)/, "")
									+ "alpha(opacity="
									+ (X(W.opacity) ? W.opacity : Y)
									* 100
									+ ")"
						}
						if (X(U.cssText)) {
							var e = U.cssText;
							if (d.lang.isObject(W)) {
								for ( var T in W) {
									if (d.lang.isString(T)) {
										if (Z[T]) {
											U[T] = W[T]
										}
										e += ";" + T + ":" + W[T]
									}
								}
							} else {
								if (Z[W]) {
									U[W] = Y
								}
								e += ";" + W + ":" + Y
							}
							U.cssText = e
						}
						return V
					};
					K.setStyle = G;
					var y = function() {
						return !document.styleSheets[0].insertRule
					};
					var R = function(T, W, V) {
						V = V || document;
						var e = d.dom.g(W);
						if (e && e.nodeName.toLocaleLowerCase() === "style") {
							return e
						}
						e = V.createElement("style");
						e.id = W || f("wk-style-");
						if (!window.createPopup) {
							e.appendChild(V.createTextNode(""))
						}
						var U = V.head || V.getElementsByTagName("head")[0]
								|| V.documentElement;
						U.insertBefore(e, U.firstChild);
						if (T) {
							l(e, T)
						}
						return e
					};
					var l = function(T, e) {
						T = d.dom.g(T);
						if (y()) {
							T.styleSheet.cssText = e
						} else {
							if (!window.createPopup) {
								T.appendChild(document.createTextNode(e))
							} else {
								T.innerHTML = e
							}
						}
					};
					K.importCssString = R;
					K.createCssString = R;
					K.addCssString = l;
					var r = function(Z) {
						Z = Z || f("wk-styleManager-");
						var X = R("", Z), T = "_style_stack", V = "_style_styleKey", U = d.lang.isArray, e;
						if (w.hasData(X)) {
							e = w.get(X, T);
							stylesheets = w.get(X, V)
						} else {
							e = [];
							stylesheets = {};
							w.set(X, T, e);
							w.set(X, V, stylesheets)
						}
						var Y = [];
						var W = document.createStyleSheet ? function(aa, ac, ab) {
							d.array.each(ab, function(ae, ad) {
								var af;
								if (ac.hasOwnProperty(ae[0])) {
									e[ac[ae[0]]] = ae[1]
								} else {
									e.push(ae[1]);
									ac[ae[0]] = e.length - 1
								}
							});
							ab.length = 0;
							d.dom.empty(aa);
							aa.styleSheet.cssText = e.join("\n")
						}
								: function(aa, ac, ab) {
									d.array.each(ab, function(ae, ad) {
										var af;
										if (ac.hasOwnProperty(ae[0])) {
											d.dom.remove(ac[ae[0]])
										}
										af = document.createTextNode(ae[1]);
										ac[ae[0]] = af;
										aa.appendChild(af)
									});
									ab.length = 0
								};
						return {
							getEl : function() {
								return X
							},
							getId : function() {
								return X.id
							},
							register : function(aa, ab) {
								Y.push([ aa, ab ]);
								return this
							},
							render : function() {
								W(X, stylesheets, Y);
								return this
							},
							cleanStyle : function() {
								d.dom.empty(X);
								return this
							},
							removeManager : function() {
								w.remove(X, T);
								w.remove(X, V);
								d.dom.remove(X);
								if (d.browser.ie) {
									x(X)
								}
								X = e = stylesheets = Y = null
							}
						}
					};
					K.cssStringManager = r;
					K.styleManger = r;
					var a = function(T) {
						T = T || document;
						var e = T.body;
						d.dom.setStyle(e, "zoom", 1);
						d.dom.setStyle(e, "zoom", 0)
					};
					K.ieReflow = a;
					var Q = (function() {
						var U = 9000, T = "data-ZIndexDefaultValue", e = [];
						return {
							bringToFront : function(V) {
								var W;
								if (d.dom.getAttr(V, T) === null) {
									W = d.dom.getStyle(V, "z-index");
									d.dom.setAttr(V, T, W || 0)
								}
								d.dom.setStyle(V, "z-index", U++);
								if (!V.id) {
									V.id = f("Zuniqueid__")
								}
								d.array.remove(e, V.id);
								e.push(V.id)
							},
							sendToBack : function(V) {
								var W = d.dom.getAttr(V, T) || 0;
								d.dom.setStyle(V, "z-index", W);
								d.array.remove(e, V.id)
							},
							getActive : function() {
								if (e.length > 0) {
									return e[e.length - 1]
								}
								return null
							}
						}
					})();
					K.zIndexManger = Q;
					K.zIndexManager = Q;
					var g = function() {
						this.q = [];
						this.paused = false;
						this._inProgress = false
					};
					d.object.extend(g.prototype, {
						add : function() {
							var e = this;
							d.array.each(arguments, function(T) {
								if (d.lang.isFunction(T)) {
									e.q.push(T)
								}
							});
							return this
						},
						dequeue : function() {
							if (!this.empty()) {
								this.q.pop()
							}
							return this
						},
						next : function() {
							if (this.empty() || this.paused) {
								return
							}
							this._inProgress = true;
							this.q.shift().apply(this);
							return this
						},
						flush : function() {
							while (!this.empty() && !this.paused) {
								this.next()
							}
							return this
						},
						clear : function() {
							this.q.length = 0;
							return this
						},
						empty : function() {
							if (this.q.length === 0) {
								this._inProgress = false;
								return true
							}
							return false
						},
						remove : function(e) {
							d.array.remove(this.q, e);
							return this
						},
						promote : function(e) {
							this.remove(e);
							this.q.unshfit(e);
							return this
						},
						pause : function() {
							this.paused = true;
							return this
						},
						run : function() {
							this.paused = false;
							this.next();
							return this
						}
					});
					K.queue = g;
					var H = (function() {
						var T = d.ajax.request, e = new g(), U = [ "onsuccess",
								"onfailure" ];
						return function(W, V) {
							d.array.each(U, function(Y) {
								var X = V[Y];
								if (X) {
									V[Y] = function() {
										var Z = [].slice.call(arguments, 0);
										X.apply(null, Z);
										e.run()
									}
								}
							});
							V.noCache = false;
							e.add(function() {
								e.pause();
								T(W, V)
							});
							e.flush();
							return arguments.callee
						}
					})();
					K.ajaxManger = H;
					K.ajaxManager = H;
					K.ajaxQueue = H;
					var L = function(U, V, T) {
						var e;
						if (d.lang.isArray(V)) {
							for (e = 0, len = V.length; e < len; e++) {
								L(U, V[e], T)
							}
							return U
						}
						for (e in V) {
							if (T || !(e in U)) {
								U[e] = V[e]
							}
						}
						return U
					};
					K.mix = L;
					var q = function(U, e) {
						var T = function(V) {
							if (V) {
								L(this, V, true)
							}
						};
						T.prototype = U;
						return new T(e)
					};
					K.objectCreate = q;
					var z = function(e, U) {
						var T = [].slice.call(arguments, 2), V = q(U);
						e.apply(V, T);
						return V
					};
					K.objectFactory = z;
					var n = function(e) {
						var T = {};
						return function(V) {
							if (!d.lang.isFunction(e[V])) {
								console.error("objectPool error! name:" + V
										+ "!" + arguments.callee.caller + "");
								return false
							}
							var U = [].slice.call(arguments, 1);
							if (!T.hasOwnProperty(V) && !d.lang.isObject(T[V])) {
								T[V] = z.apply(null, [ e[V], e[V].prototype ]
										.concat(U))
							}
							return T[V]
						}
					};
					K.objectPool = n;
					var j = function(V, X, T, W) {
						var e = V[X];
						if (d.lang.isString(W) && !/^(before|after)$/.test(W)) {
							return function() {
								console.error("auto arguments error!");
								return false
							}
						}
						var U = {
							after : function() {
								e.apply(V, arguments);
								return T.apply(V, arguments)
							},
							before : function() {
								T.apply(V, arguments);
								return e.apply(V, arguments)
							}
						};
						V[X] = W && (U.hasOwnProperty(W)) ? U[W] : function() {
							var Y = [].slice.call(arguments, 0);
							Y.unshift(function() {
								return e.apply(V, arguments)
							});
							return T.apply(V, Y)
						}
					};
					K.punch = j;
					var o = function() {
						var V = "";
						if (window.getSelection) {
							if (document.activeElement
									&& (document.activeElement.tagName
											.toLowerCase() == "textarea" || document.activeElement.tagName
											.toLowerCase() == "input")) {
								var U = document.activeElement.value;
								V = U.substring(
										document.activeElement.selectionStart,
										document.activeElement.selectionEnd)
							} else {
								var e = window.getSelection();
								V = e.toString()
							}
						} else {
							if (document.selection.createRange) {
								var T = document.selection.createRange();
								V = T.text
							}
						}
						if (V !== "") {
							return V
						}
					};
					K.getSelection = o;
					var E = function() {
						if (window.getSelection) {
							var e = window.getSelection();
							e.collapseToStart()
						} else {
							var T = document.selection.createRange();
							T.collapse(true);
							T.select()
						}
					};
					K.collapseToStart = E;
					var P = function() {
						if (window.getSelection) {
							var e = window.getSelection();
							e.collapseToEnd()
						} else {
							var T = document.selection.createRange();
							T.collapse(false);
							T.select()
						}
					};
					K.collapseToEnd = P;
					var p = function(T, W, V, U) {
						T = T.toString();
						var e = T.length;
						if (typeof V === "undefined") {
							V = ""
						}
						if (!e) {
							return V
						}
						if (W < 0 || W >= e) {
							return T
						}
						return [ T.slice(0, W), V ].join("")
					};
					K.cutString = p;
					var i = d.dom.create("div");
					var x = function(e) {
						i.appendChild(e);
						i.innerHTML = "";
						e = null
					};
					K.recycleDom = x;
					var v = function() {
						var T = [ "ie", "firefox", "opera", "chrome",
								"maxthon", "safari" ], e = d.array.filter(T,
								function(V, U) {
									return d.browser[V]
								});
						e = e && e.length ? e[0] : navigator.userAgent;
						return e
					}();
					K.getBrowser = v;
					var J = function(e) {
						window.onerror = function(W, V, T) {
							var U = Array.prototype.slice(arguments);
							e(v, location.href, W, V, T);
							return false
						};
						d.on(window, "unload", function() {
							window.onerror = null
						})
					};
					K.errorCenter = J;
					var O = function(V) {
						var U = 5, T;
						var e = setInterval(function(W) {
							var W = 1;
							T = new Date - T;
							if (T > 700) {
								W++
							}
							if (T > 650) {
								W++
							}
							if (T > 600) {
								W++
							}
							if (T > 550) {
								W++
							}
							V(U = W < U ? --U : W);
							T = new Date
						}, 500);
						T = new Date
					};
					K.jpu = O;
					return K
				}, [ "/static/common/lib/tangram/base/base.js" ]);
F.module("/static/common/ui/js_core/widget/widget.js", function(d, b) {
	var c = d("/static/common/lib/tangram/base/base.js");
	var a = d("/static/common/ui/js_core/util/util.js");
	var e = a.mix;
	var f = function(h, j) {
		h = e(h || {}, {
			el : "",
			_init : c.fn.blank,
			Options : {}
		});
		j = e(j || {}, {
			type : "",
			superClass : c.lang.Class,
			include : []
		});
		var i = j.superClass, g = function(k) {
			var l = this;
			k = k || {};
			l.options = l.setOptions(k, k.el || l.el);
			l.type = j.type;
			l._created = false;
			l._disabledStatus = false;
			g.superClass._init && g.superClass._init.call(l, k);
			l._init && l._init.call(l, k);
			c.array.each(j.include, function(n, m) {
				n.call(l, k, l)
			});
			l.on("onload", function() {
				l._created = true;
				l._disabledStatus = true
			})
		};
		c.lang.inherits(g, i);
		g.extend(e(h, f._method));
		return g
	};
	f._method = {
		setOptions : function(g, h) {
			if (c.lang.isElement(h)) {
				g = e(g, new Function("return "
						+ c.dom.getAttr(h, "data-options"))()
						|| {})
			}
			if (g) {
				g = e(c.object.clone(this.Options), g, true);
				e(this, g, true)
			}
			return g
		},
		dispose : function() {
			this.fire("ondispose") && c.lang.Class.prototype.dispose.call(this)
		},
		_setStatus : function(g) {
			if (g) {
				this._disabledStatus = true;
				c.dom.addClass(this.el, this.type
						+ "-disabled ui-state-disabled")
			} else {
				this._disabledStatus = false;
				c.dom.removeClass(this.el, this.type
						+ "-disabled ui-state-disabled")
			}
			return this
		},
		setDisable : function() {
			return this._setStatus(true)
		},
		setEnable : function() {
			return this._setStatus(false)
		}
	};
	b.widget = f;
	return b
}, [ "/static/common/lib/tangram/base/base.js",
		"/static/common/ui/js_core/util/util.js" ]);
F.module("/static/common/ui/js_core/layerControl/layerControl.js", function(e,
		c) {
	var d = e("/static/common/lib/tangram/base/base.js");
	var f = e("/static/common/ui/js_core/widget/widget.js").widget;
	var b = e("/static/common/ui/js_core/util/util.js");
	var a = f({
		Options : {
			el : ""
		},
		_init : function(g) {
			var h = this;
			b.mix(this, b.zIndexManager);
			h.on("onload", function() {
				h._action()
			})
		},
		_action : d.fn.blank,
		show : function() {
			this.fire("onShowBefore");
			this.bringToFront(this.el);
			d.dom.show(this.el);
			this.fire("onShowAfter")
		},
		hide : function() {
			this.fire("onHideBefore");
			this.sendToBack(this.el);
			d.dom.hide(this.el);
			this.fire("onHideAfter")
		},
		remove : function() {
			this.fire("onRemvoeBefore");
			d.dom.remove(this.el);
			this.fire("ondispose");
			this.fire("onRemvoeAfter")
		}
	}, {
		type : "layerControl"
	});
	c.layerControl = a;
	return c
}, [ "/static/common/lib/tangram/base/base.js",
		"/static/common/ui/js_core/widget/widget.js",
		"/static/common/ui/js_core/util/util.js" ]);
F
		.module(
				"/static/common/ui/js_core/dropDown/dropDown.js",
				function(d, b) {
					var c = d("/static/common/lib/tangram/base/base.js");
					var g = d("/static/common/ui/js_core/widget/widget.js").widget;
					var a = d("/static/common/ui/js_core/layerControl/layerControl.js").layerControl;
					var f = g({
						Options : {
							el : "",
							bindEl : "",
							showEvent : "mouseover",
							hideEvent : "mouseout",
							closeClassName : ""
						},
						_init : function() {
							var h = this;
							this._atime = null;
							this._delay = 50;
							this.on("onload", function() {
								if (c.lang.isString(h.el)) {
									h.el = c.g(el)
								}
								if (c.lang.isString(h.bindEl)) {
									h.bindEl = c.g(bindEl)
								}
							});
							this.on("onShowBefore", function() {
								clearTimeout(h._atime)
							});
							this.on("onShowAfter", function() {
								h.el.style.display = "block"
							})
						},
						_action : function() {
							var h = this;
							c.array.each([ h.el, h.bindEl ], function(k, j) {
								c.on(k, h.showEvent, c.fn.bind(h.show, h));
								c.on(k, h.hideEvent, function(i) {
									h._hide();
									c.event.stop(i)
								})
							})
						},
						_hide : function() {
							var h = this;
							clearTimeout(h._atime);
							h._atime = setTimeout(function() {
								h.hide()
							}, h._delay)
						}
					}, {
						type : "dropDown",
						superClass : a
					});
					var e = function(h) {
						var i = new f(h);
						i.fire("onload");
						return i
					};
					b.dropDown = f;
					b.dropDownCreate = e;
					return b
				},
				[ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/widget/widget.js",
						"/static/common/ui/js_core/layerControl/layerControl.js" ]);
F
		.module(
				"/static/common/ui/js_core/Suggestion/Suggestion.js",
				function(c, a) {
					var b = c("/static/common/lib/tangram/base/base.js");
					b.ui = b.ui || {
						version : "1.3.9"
					};
					b.ui.getUI = function(f) {
						var f = f.split("-"), e = b.ui, d = f.length, g = 0;
						for (; g < d; g++) {
							e = e[f[g].charAt(0).toUpperCase() + f[g].slice(1)]
						}
						return e
					};
					b.ui.create = function(e, d) {
						if (b.lang.isString(e)) {
							e = b.ui.getUI(e)
						}
						return new e(d)
					};
					b.ui.Base = {
						id : "",
						getId : function(d) {
							var f = this, e;
							e = "tangram-" + f.uiType + "--"
									+ (f.id ? f.id : f.guid);
							return d ? e + "-" + d : e
						},
						getClass : function(e) {
							var g = this, f = g.classPrefix, d = g.skin;
							if (e) {
								f += "-" + e;
								d += "-" + e
							}
							if (g.skin) {
								f += " " + d
							}
							return f
						},
						getMain : function() {
							return b.g(this.mainId)
						},
						getBody : function() {
							return b.g(this.getId())
						},
						uiType : "",
						getCallRef : function() {
							return "window['$BAIDU$']._instances['" + this.guid
									+ "']"
						},
						getCallString : function(g) {
							var f = 0, e = Array.prototype.slice.call(
									arguments, 1), d = e.length;
							for (; f < d; f++) {
								if (typeof e[f] == "string") {
									e[f] = "'" + e[f] + "'"
								}
							}
							return this.getCallRef() + "." + g + "("
									+ e.join(",") + ");"
						},
						on : function(d, e, f) {
							b.on(d, e, f);
							this.addEventListener("ondispose", function() {
								b.un(d, e, f)
							})
						},
						renderMain : function(e) {
							var g = this, f = 0, d;
							if (g.getMain()) {
								return
							}
							e = b.g(e);
							if (!e) {
								e = document.createElement("div");
								document.body.appendChild(e);
								e.style.position = "absolute";
								e.className = g.getClass("main")
							}
							if (!e.id) {
								e.id = g.getId("main")
							}
							g.mainId = e.id;
							e.setAttribute("data-guid", g.guid);
							return e
						},
						dispose : function() {
							this.dispatchEvent("dispose");
							b.lang.Class.prototype.dispose.call(this)
						}
					};
					b.ui.createUI = function(f, m) {
						m = m || {};
						var k = m.superClass || b.lang.Class, j = k == b.lang.Class ? 1
								: 0, g, e, l = function(n, i) {
							var o = this;
							n = n || {};
							k.call(o, !j ? n : (n.guid || ""), true);
							b.object.extend(o, l.options);
							b.object.extend(o, n);
							o.classPrefix = o.classPrefix || "tangram-"
									+ o.uiType.toLowerCase();
							for (g in b.ui.behavior) {
								if (typeof o[g] != "undefined" && o[g]) {
									b.object.extend(o, b.ui.behavior[g]);
									if (b.lang.isFunction(o[g])) {
										o.addEventListener("onload",
												function() {
													b.ui.behavior[g].call(o[g]
															.apply(o))
												})
									} else {
										b.ui.behavior[g].call(o)
									}
								}
							}
							f.apply(o, arguments);
							for (g = 0, e = l._addons.length; g < e; g++) {
								l._addons[g](o)
							}
							if (n.parent && o.setParent) {
								o.setParent(n.parent)
							}
							if (!i && n.autoRender) {
								o.render(n.element)
							}
						}, d = function() {
						};
						d.prototype = k.prototype;
						var h = l.prototype = new d();
						for (g in b.ui.Base) {
							h[g] = b.ui.Base[g]
						}
						l.extend = function(i) {
							for (g in i) {
								l.prototype[g] = i[g]
							}
							return l
						};
						l._addons = [];
						l.register = function(i) {
							if (typeof i == "function") {
								l._addons.push(i)
							}
						};
						l.options = {};
						return l
					};
					b.ui.get = function(d) {
						var e;
						if (b.lang.isString(d)) {
							return b.lang.instance(d)
						} else {
							do {
								if (!d || d.nodeType == 9) {
									return null
								}
								if (e = b.dom.getAttr(d, "data-guid")) {
									return b.lang.instance(e)
								}
							} while ((d = d.parentNode) != document.body)
						}
					};
					b.ui.Suggestion = b.ui
							.createUI(
									function(d) {
										var e = this;
										e
												.addEventListener(
														"onload",
														function() {
															e
																	.on(
																			document,
																			"mousedown",
																			e.documentMousedownHandler);
															e
																	.on(
																			window,
																			"blur",
																			e.windowBlurHandler)
														});
										e.documentMousedownHandler = e
												._getDocumentMousedownHandler();
										e.windowBlurHandler = e
												._getWindowBlurHandler();
										e.enableIndex = [];
										e.currentIndex = -1
									})
							.extend(
									{
										uiType : "suggestion",
										onbeforepick : new Function,
										onpick : new Function,
										onconfirm : new Function,
										onhighlight : new Function,
										onshow : new Function,
										onhide : new Function,
										getData : function() {
											return []
										},
										prependHTML : "",
										appendHTML : "",
										currentData : {},
										tplDOM : "<div id='#{0}' class='#{1}' style='position:relative; top:0px; left:0px'></div>",
										tplPrependAppend : "<div id='#{0}' class='#{1}'>#{2}</div>",
										tplBody : '<table cellspacing="0" cellpadding="2"><tbody>#{0}</tbody></table>',
										tplRow : '<tr><td id="#{0}" onmouseover="#{2}" onmouseout="#{3}" onmousedown="#{4}" onclick="#{5}" class="#{6}">#{1}</td></tr>',
										getString : function() {
											var d = this;
											return b.format(d.tplDOM,
													d.getId(), d.getClass(),
													d.guid)
										},
										render : function(f) {
											var e = this, d, f = b.g(f);
											if (e.getMain() || !f) {
												return
											}
											if (f.id) {
												e.targetId = f.id
											} else {
												e.targetId = f.id = e
														.getId("input")
											}
											d = e.renderMain();
											d.style.display = "none";
											d.innerHTML = e.getString();
											this.dispatchEvent("onload")
										},
										_isShowing : function() {
											var e = this, d = e.getMain();
											return d
													&& d.style.display != "none"
										},
										pick : function(d) {
											var g = this, e = g.currentData, h = e
													&& typeof d == "number"
													&& typeof e[d] != "undefined" ? e[d].value
													: d, f = {
												data : {
													item : h == d ? {
														value : d,
														content : d
													} : e[d],
													index : d
												}
											};
											if (g.dispatchEvent("onbeforepick",
													f)) {
												g.dispatchEvent("onpick", f)
											}
										},
										show : function(j, h, f) {
											var e = 0, d = h.length, g = this;
											g.enableIndex = [];
											g.currentIndex = -1;
											if (d == 0 && !f) {
												g.hide()
											} else {
												g.currentData = [];
												for (; e < d; e++) {
													if (typeof h[e].value != "undefined") {
														g.currentData
																.push(h[e])
													} else {
														g.currentData.push({
															value : h[e],
															content : h[e]
														})
													}
													if (typeof h[e]["disable"] == "undefined"
															|| h[e]["disable"] == false) {
														g.enableIndex.push(e)
													}
												}
												g.getBody().innerHTML = g
														._getBodyString();
												g.getMain().style.display = "block";
												g.dispatchEvent("onshow")
											}
										},
										hide : function() {
											var h = this;
											if (!h._isShowing()) {
												return
											}
											if (h.currentIndex >= 0
													&& h.holdHighLight) {
												var g = h.currentData, e = -1;
												for ( var f = 0, d = g.length; f < d; f++) {
													if (typeof g[f].disable == "undefined"
															|| g[f].disable == false) {
														e++;
														if (e == h.currentIndex) {
															h.pick(f)
														}
													}
												}
											}
											h.getMain().style.display = "none";
											h.dispatchEvent("onhide")
										},
										highLight : function(d) {
											var f = this, g = f.enableIndex, e = null;
											if (!f._isEnable(d)) {
												return
											}
											f.currentIndex >= 0
													&& f._clearHighLight();
											e = f._getItem(d);
											b
													.addClass(
															e,
															f
																	.getClass("current"));
											f.currentIndex = b.array.indexOf(g,
													d);
											f.dispatchEvent("onhighlight", {
												index : d,
												data : f.getDataByIndex(d)
											})
										},
										clearHighLight : function() {
											var f = this, d = f.currentIndex, e = f.enableIndex[d];
											f._clearHighLight()
													&& f
															.dispatchEvent(
																	"onclearhighlight",
																	{
																		index : e,
																		data : f
																				.getDataByIndex(e)
																	})
										},
										_clearHighLight : function() {
											var f = this, d = f.currentIndex, g = f.enableIndex, e = null;
											if (d >= 0) {
												e = f._getItem(g[d]);
												b.removeClass(e, f
														.getClass("current"));
												f.currentIndex = -1;
												return true
											}
											return false
										},
										confirm : function(d, f) {
											var e = this;
											if (f != "keyboard") {
												if (!e._isEnable(d)) {
													return
												}
											}
											e.pick(d);
											e
													.dispatchEvent(
															"onconfirm",
															{
																data : e
																		.getDataByIndex(d)
																		|| d,
																source : f
															});
											e.currentIndex = -1;
											e.hide()
										},
										getDataByIndex : function(d) {
											return {
												item : this.currentData[d],
												index : d
											}
										},
										getTargetValue : function() {
											return this.getTarget().value
										},
										getTarget : function() {
											return b.g(this.targetId)
										},
										_getItem : function(d) {
											return b.g(this.getId("item" + d))
										},
										_getBodyString : function() {
											var j = this, h = "", g = [], k = j.currentData, d = k.length, f = 0;
											function e(i) {
												return b.format(
														j.tplPrependAppend, j
																.getId(i), j
																.getClass(i),
														j[i + "HTML"])
											}
											h += e("prepend");
											for (; f < d; f++) {
												g
														.push(b
																.format(
																		j.tplRow,
																		j
																				.getId("item"
																						+ f),
																		k[f].content,
																		j
																				.getCallRef()
																				+ "._itemOver(event, "
																				+ f
																				+ ")",
																		j
																				.getCallRef()
																				+ "._itemOut(event, "
																				+ f
																				+ ")",
																		j
																				.getCallRef()
																				+ "._itemDown(event, "
																				+ f
																				+ ")",
																		j
																				.getCallRef()
																				+ "._itemClick(event, "
																				+ f
																				+ ")",
																		(typeof k[f]["disable"] == "undefined" || k[f]["disable"] == false) ? ""
																				: j
																						.getClass("disable")))
											}
											h += b
													.format(j.tplBody, g
															.join(""));
											h += e("append");
											return h
										},
										_itemOver : function(g, d) {
											var f = this;
											b.event.stop(g || window.event);
											f._isEnable(d) && f.highLight(d);
											f
													.dispatchEvent(
															"onmouseoveritem",
															{
																index : d,
																data : f
																		.getDataByIndex(d)
															})
										},
										_itemOut : function(g, d) {
											var f = this;
											b.event.stop(g || window.event);
											if (!f.holdHighLight) {
												f._isEnable(d)
														&& f.clearHighLight()
											}
											f.dispatchEvent("onmouseoutitem", {
												index : d,
												data : f.getDataByIndex(d)
											})
										},
										_itemDown : function(g, d) {
											var f = this;
											b.event.stop(g || window.event);
											f
													.dispatchEvent(
															"onmousedownitem",
															{
																index : d,
																data : f
																		.getDataByIndex(d)
															})
										},
										_itemClick : function(g, d) {
											var f = this;
											b.event.stop(g || window.event);
											f.dispatchEvent("onitemclick", {
												index : d,
												data : f.getDataByIndex(d)
											});
											f._isEnable(d)
													&& f.confirm(d, "mouse")
										},
										_isEnable : function(d) {
											var e = this;
											return b.array.contains(
													e.enableIndex, d)
										},
										_getDocumentMousedownHandler : function() {
											var d = this;
											return function(h) {
												h = h || window.event;
												var f = h.target
														|| h.srcElement, g = b.ui
														.get(f);
												if (f == d.getTarget()
														|| (g && g.uiType == d.uiType)) {
													return
												}
												d.hide()
											}
										},
										_getWindowBlurHandler : function() {
											var d = this;
											return function() {
												d.hide()
											}
										},
										dispose : function() {
											var d = this;
											d.dispatchEvent("dispose");
											b.dom.remove(d.mainId);
											b.lang.Class.prototype.dispose
													.call(this)
										}
									});
					b.ui.behavior = b.ui.behavior || {};
					(function() {
						var d = b.ui.behavior.coverable = function() {
						};
						d.Coverable_isShowing = false;
						d.Coverable_iframe;
						d.Coverable_container;
						d.Coverable_iframeContainer;
						d.Coverable_show = function() {
							var k = this;
							if (k.Coverable_iframe) {
								k.Coverable_update();
								b.setStyle(k.Coverable_iframe, "display",
										"block");
								return
							}
							var i = k.coverableOptions || {}, f = k.Coverable_container = i.container
									|| k.getMain(), h = i.opacity || "0", g = i.color
									|| "", j = k.Coverable_iframe = document
									.createElement("iframe"), e = k.Coverable_iframeContainer = document
									.createElement("div");
							b.dom.children(f).length > 0 ? b.dom.insertBefore(
									e, f.firstChild) : f.appendChild(e);
							b.setStyles(e, {
								position : "absolute",
								top : "0px",
								left : "0px"
							});
							b.dom.setBorderBoxSize(e, {
								width : f.offsetWidth,
								height : f.offsetHeight
							});
							b.dom.setBorderBoxSize(j, {
								width : e.offsetWidth
							});
							b.dom
									.setStyles(
											j,
											{
												zIndex : -1,
												display : "block",
												border : 0,
												backgroundColor : g,
												filter : "progid:DXImageTransform.Microsoft.Alpha(style=0,opacity="
														+ h + ")"
											});
							e.appendChild(j);
							j.src = "javascript:void(0)";
							j.frameBorder = "0";
							j.scrolling = "no";
							j.height = "97%";
							k.Coverable_isShowing = true
						};
						d.Coverable_hide = function() {
							var f = this, e = f.Coverable_iframe;
							if (!f.Coverable_isShowing) {
								return
							}
							b.setStyle(e, "display", "none");
							f.Coverable_isShowing = false
						};
						d.Coverable_update = function(g) {
							var i = this, g = g || {}, f = i.Coverable_container, e = i.Coverable_iframeContainer, h = i.Coverable_iframe;
							b.dom.setBorderBoxSize(e, {
								width : f.offsetWidth,
								height : f.offsetHeight
							});
							b.dom.setBorderBoxSize(h, b.extend({
								width : b.getStyle(e, "width")
							}, g))
						}
					})();
					b.extend(b.ui.Suggestion.prototype, {
						coverable : true,
						coverableOptions : {}
					});
					b.ui.Suggestion.register(function(d) {
						if (d.coverable) {
							d.addEventListener("onshow", function() {
								d.Coverable_show()
							});
							d.addEventListener("onhide", function() {
								d.Coverable_hide()
							})
						}
					});
					b.ui.Suggestion.extend({
						setData : function(g, f, e) {
							var d = this;
							d.dataCache[g] = f;
							if (!e) {
								d.show(g, d.dataCache[g])
							}
						}
					});
					b.ui.Suggestion.register(function(d) {
						d.dataCache = {}, d.addEventListener("onneeddata",
								function(f, g) {
									var e = d.dataCache;
									if (typeof e[g] == "undefined") {
										d.getData(g)
									} else {
										d.show(g, e[g])
									}
								})
					});
					(function() {
						var e = b.ui.behavior.posable = function() {
						};
						e.setPosition = function(j, h, g) {
							h = b.g(h) || this.getMain();
							g = g || {};
							var i = this, f = [ h, j, g ];
							i
									.__execPosFn(h, "_positionByCoordinate",
											g.once, f)
						};
						e._positionByCoordinate = function(f, t, u, h) {
							t = t || [ 0, 0 ];
							u = u || {};
							var q = this, r = {}, o = b.page.getViewHeight(), s = b.page
									.getViewWidth(), l = b.page.getScrollLeft(), j = b.page
									.getScrollTop(), i = f.offsetWidth, k = f.offsetHeight, g = f.offsetParent, p = (!g || g == document.body) ? {
								left : 0,
								top : 0
							}
									: b.dom.getPosition(g);
							u.position = (typeof u.position !== "undefined") ? u.position
									.toLowerCase()
									: "bottomright";
							t = d(t || [ 0, 0 ]);
							u.offset = d(u.offset || [ 0, 0 ]);
							t.x += (u.position.indexOf("right") >= 0 ? (t.width || 0)
									: 0);
							t.y += (u.position.indexOf("bottom") >= 0 ? (t.height || 0)
									: 0);
							r.left = t.x + u.offset.x - p.left;
							r.top = t.y + u.offset.y - p.top;
							switch (u.insideScreen) {
							case "surround":
								r.left += r.left < l ? i + (t.width || 0)
										: ((r.left + i) > (l + s) ? -i
												- (t.width || 0) : 0);
								r.top += r.top < j ? k + (t.height || 0)
										: ((r.top + k) > (j + o) ? -k
												- (t.height || 0) : 0);
								break;
							case "fix":
								r.left = Math.max(0 - parseFloat(b.dom
										.getStyle(f, "marginLeft")) || 0, Math
										.min(r.left, b.page.getViewWidth() - i
												- p.left));
								r.top = Math.max(0 - parseFloat(b.dom.getStyle(
										f, "marginTop")) || 0, Math.min(r.top,
										b.page.getViewHeight() - k - p.top));
								break;
							case "verge":
								var n = {
									width : (u.position.indexOf("right") > -1 ? t.width
											: 0),
									height : (u.position.indexOf("bottom") > -1 ? t.height
											: 0)
								}, m = {
									width : (u.position.indexOf("bottom") > -1 ? t.width
											: 0),
									height : (u.position.indexOf("right") > -1 ? t.height
											: 0)
								};
								r.left -= (u.position.indexOf("right") >= 0 ? (t.width || 0)
										: 0);
								r.top -= (u.position.indexOf("bottom") >= 0 ? (t.height || 0)
										: 0);
								r.left += r.left + n.width + i - l > s - p.left ? m.width
										- i
										: n.width;
								r.top += r.top + n.height + k - j > o - p.top ? m.height
										- k
										: n.height;
								break
							}
							b.dom.setPosition(f, r);
							if (!h
									&& (o != b.page.getViewHeight() || s != b.page
											.getViewWidth())) {
								q._positionByCoordinate(f, t, {}, true)
							}
							h || q.dispatchEvent("onpositionupdate")
						};
						e.__execPosFn = function(g, j, h, f) {
							var i = this;
							if (typeof h == "undefined" || !h) {
								b.event.on(b.dom.getWindow(g), "resize",
										b.fn.bind.apply(i, [ j, i ]
												.concat([].slice.call(f))))
							}
							i[j].apply(i, f)
						};
						function d(f) {
							f.x = f[0] || f.x || f.left || 0;
							f.y = f[1] || f.y || f.top || 0;
							return f
						}
					})();
					b.ui.Suggestion
							.extend({
								posable : true,
								fixWidth : true,
								getWindowResizeHandler : function() {
									var d = this;
									return function() {
										d.adjustPosition(true)
									}
								},
								adjustPosition : function(e) {
									var g = this, h = g.getTarget(), f, d = g
											.getMain(), i;
									if (!g._isShowing() && e) {
										return
									}
									f = b.dom.getPosition(h), i = {
										top : (f.top + h.offsetHeight - 1),
										left : f.left,
										width : h.offsetWidth
									};
									i = typeof g.view == "function" ? g.view(i)
											: i;
									g.setPosition([ i.left, i.top ], null, {
										once : true
									});
									b.dom.setOuterWidth(d, i.width)
								}
							});
					b.ui.Suggestion.register(function(d) {
						d.windowResizeHandler = d.getWindowResizeHandler();
						d.addEventListener("onload", function() {
							d.adjustPosition();
							if (d.fixWidth) {
								d.fixWidthTimer = setInterval(function() {
									var e = d.getMain(), f = d.getTarget();
									if (e.offsetWidth != 0 && f
											&& f.offsetWidth != e.offsetWidth) {
										d.adjustPosition();
										e.style.display = "block"
									}
								}, 100)
							}
							d.on(window, "resize", d.windowResizeHandler)
						});
						d.addEventListener("onshow", function() {
							d.adjustPosition()
						});
						d.addEventListener("ondispose", function() {
							clearInterval(d.fixWidthTimer)
						})
					});
					b.ui.Suggestion.register(function(g) {
						var j, e = "", i, f, d = false, h = false;
						g.addEventListener("onload", function() {
							j = this.getTarget();
							i = j.value;
							g.targetKeydownHandler = g
									.getTargetKeydownHandler();
							g.on(j, "keydown", g.targetKeydownHandler);
							j.setAttribute("autocomplete", "off");
							g.circleTimer = setInterval(function() {
								if (h) {
									return
								}
								if (b.g(j) == null) {
									g.dispose()
								}
								var k = j.value;
								if (k == e && k != "" && k != i && k != f) {
									if (g.requestTimer == 0) {
										g.requestTimer = setTimeout(function() {
											g.dispatchEvent("onneeddata", k)
										}, 100)
									}
								} else {
									clearTimeout(g.requestTimer);
									g.requestTimer = 0;
									if (k == "" && e != "") {
										f = "";
										g.hide()
									}
									e = k;
									if (k != f) {
										g.defaultIptValue = k
									}
									if (i != j.value) {
										i = ""
									}
								}
							}, 10);
							g.on(j, "beforedeactivate",
									g.beforedeactivateHandler)
						});
						g.addEventListener("onitemclick", function() {
							h = false;
							g.defaultIptValue = e = g.getTargetValue()
						});
						g.addEventListener("onpick", function(k) {
							if (d) {
								j.blur()
							}
							j.value = f = k.data.item.value;
							if (d) {
								j.focus()
							}
						});
						g.addEventListener("onmousedownitem", function(k) {
							d = true;
							h = true;
							setTimeout(function() {
								h = false;
								d = false
							}, 500)
						});
						g.addEventListener("ondispose", function() {
							clearInterval(g.circleTimer)
						})
					});
					b.ui.Suggestion.extend({
						beforedeactivateHandler : function() {
							return function() {
								if (mousedownView) {
									window.event.cancelBubble = true;
									window.event.returnValue = false
								}
							}
						},
						getTargetKeydownHandler : function() {
							var e = this;
							function d(f) {
								if (!e._isShowing()) {
									e.dispatchEvent("onneeddata", e
											.getTargetValue());
									return
								}
								var h = e.enableIndex, g = e.currentIndex;
								if (h.length == 0) {
									return
								}
								if (f) {
									switch (g) {
									case -1:
										g = h.length - 1;
										e.pick(h[g]);
										e.highLight(h[g]);
										break;
									case 0:
										g = -1;
										e.pick(e.defaultIptValue);
										e.clearHighLight();
										break;
									default:
										g--;
										e.pick(h[g]);
										e.highLight(h[g]);
										break
									}
								} else {
									switch (g) {
									case -1:
										g = 0;
										e.pick(h[g]);
										e.highLight(h[g]);
										break;
									case h.length - 1:
										g = -1;
										e.pick(e.defaultIptValue);
										e.clearHighLight();
										break;
									default:
										g++;
										e.pick(h[g]);
										e.highLight(h[g]);
										break
									}
								}
								e.currentIndex = g
							}
							return function(h) {
								var f = false, g;
								h = h || window.event;
								switch (h.keyCode) {
								case 9:
								case 27:
									e.hide();
									break;
								case 13:
									b.event.stop(h);
									e.confirm(e.currentIndex == -1 ? e
											.getTarget().value
											: e.enableIndex[e.currentIndex],
											"keyboard");
									break;
								case 38:
									f = true;
								case 40:
									b.event.stop(h);
									d(f);
									break;
								default:
									e.currentIndex = -1
								}
							}
						},
						defaultIptValue : ""
					});
					a.Suggestion = b.ui.Suggestion;
					return a
				}, [ "/static/common/lib/tangram/base/base.js" ]);
F
		.module(
				"/static/common/ui/js_core/dialog/dialog.js",
				function(d, b) {
					var c = d("/static/common/lib/tangram/base/base.js");
					var g = d("/static/common/ui/js_core/widget/widget.js").widget;
					var a = d("/static/common/ui/js_core/util/util.js");
					var e = g(
							{
								Options : {
									el : ""
								},
								_init : function() {
									var h = this;
									a.mix(h, a.zIndexManger);
									h._initClassName = "mod ui-dialog ";
									h.on("onload", function() {
										h._createDialog()
									})
								},
								_createDialog : function() {
									var j = null, i = this._dataTpl, h = document.body;
									if (!(j = c.g("WkDialogWrap"))) {
										j = document.createElement("div");
										j.id = "WkDialogWrap";
										j.style.display = "none";
										j.innerHTML = [ i.mask, i.mod ]
												.join("");
										h.insertBefore(j, h.firstChild)
									}
									this.el = j
								},
								pop : function(h) {
									this.option = h;
									this.option.type = "pop";
									this.option.style = "pop";
									this.option.hdHeight = 80;
									this.show()
								},
								confirm : function(h) {
									this.option = h;
									this.option.btnText = this.option.btnText
											|| [ "\u786e\u5b9a", "\u53d6\u6d88" ];
									this.option.type = "confirm";
									this.option.style = "confirm";
									this.option.hdHeight = 140;
									this.show();
									c.dom.addClass(c.g("WkDialogOk"), "mv10")
								},
								alert : function(h) {
									this.option = h;
									this.option.btnText = this.option.btnText
											|| [ "\u786e\u5b9a" ];
									this.option.type = "alert";
									this.option.style = "alert";
									this.option.hdHeight = 140;
									this.show();
									c.dom
											.removeClass(c.g("WkDialogOk"),
													"mv10")
								},
								show : function() {
									c.lang.eventCenter
											.dispatchEvent("DialogShowBefore");
									this.conType = (this.option.url) ? "ifm"
											: "dom";
									this._bindFire();
									this._render();
									this._bind();
									this.bringToFront(this.el);
									this.el.style.display = "block";
									c.lang.eventCenter
											.dispatchEvent("DialogShowAfter");
									this.drawSize()
								},
								hide : function() {
									c.lang.eventCenter
											.dispatchEvent("DialogHideBefore");
									this.sendToBack(this.el);
									this.onClosed();
									this.el.style.display = "none";
									c.lang.eventCenter
											.dispatchEvent("DialogHideAfter")
								},
								_bind : function() {
									var i = this;
									var h = {
										pop : [ "WkDialogClose" ],
										confirm : [ "WkDialogClose",
												"WkDialogOk", "WkDialogCancel" ],
										alert : [ "WkDialogClose", "WkDialogOk" ]
									};
									var j = {
										pop : [ "onClosed" ],
										confirm : [ "onClosed", "onOk",
												"onCancel" ],
										alert : [ "onClosed", "onOk" ]
									};
									c.array.each(h[i.option.type], function(l,
											k) {
										c.event.on(l, "click", function(m) {
											c.event.stop(m);
											if (i[j[i.option.type][k]]()) {
												i.hide()
											}
										})
									});
									c.event.on(window, "resize", function() {
										i.drawSize()
									})
								},
								_bindFire : function() {
									var h = function() {
										return true
									};
									this.onClosed = this.option.onClosed || h;
									this.onOk = this.option.onOk || h;
									this.onCancel = this.option.onCancel || h;
									this.onRendered = this.option.onRendered
											|| h
								},
								_render : function() {
									var j = this;
									var i = {
										pop : [],
										confirm : [ "btnOk", "btnCancel" ],
										alert : [ "btnOk" ]
									}, h = "";
									j.el.className = j._initClassName
											+ (j.option.className || "");
									c.array
											.each(
													i[j.option.type],
													function(m, l) {
														h += j._dataTpl.buttons[i[j.option.type][l]]
																.replace(
																		i[j.option.type][l],
																		j.option.btnText[l])
													});
									c.g("WkDialogTit").innerHTML = j.option.title;
									c.g("WkDialogBtn").innerHTML = h;
									c.g("WkDialogCon").className = "bd ph20 dlg-"
											+ j.option.style;
									if (this.conType == "dom") {
										c.g("WkDialogCon").innerHTML = j.option.content
									} else {
										var k = '<iframe id="WkDialogIfrm" name="WkDialogIfrm" width="100%" height="100%" src="" frameborder="0" scrolling="no" style="           position:relative;"></iframe>';
										c.g("WkDialogCon").innerHTML = k;
										c.g("WkDialogIfrm").src = j.option.url
									}
									this.onRendered()
								},
								drawSize : function() {
									var j = this.option;
									var h = c.page.getViewHeight(), l = c.page
											.getHeight(), n = c.page
											.getScrollTop(), k = c
											.g("WkDialog");
									this.el.style.height = (h > l) ? h : l
											+ "px";
									k.style.width = (j.width || 380) + "px";
									k.style.height = (j.height) ? (j.height + "px")
											: "auto";
									c.g("WkDialogCon").style.height = (j.height) ? (j.height
											- ((j.type == "pop") ? 80 : 140) + "px")
											: "auto";
									var i = (j.height) ? j.height
											: k.offsetHeight;
									var m = n + (h - i) / 2;
									k.style.top = m + "px"
								},
								_dataTpl : {
									mask : [
											'<div id="mask" class="ui-mask js-mask">',
											'<iframe frameborder="0" class="iframe"></iframe>',
											"</div>" ].join(""),
									mod : [
											'<div id="WkDialog" class="mod ui-dialog" onselectstart= "return false;">',
											'<iframe class="iframe" width="100%" height="100%" frameborder="0"></iframe>',
											'<div class="inner">',
											'<div id="WkDialogHd" class="hd mv20 pb10 pt20">',
											'<span class="act">',
											'<a id="WkDialogClose" href="###" hidefocus="true" class="ir close">&Chi;</a>',
											"</span>",
											'<h3 id="WkDialogTit"></h3>',
											"</div>",
											'<div id="WkDialogCon" class="bd"></div>',
											'<div id="WkDialogBtn" class="ft pv20 pb20"></div>',
											"</div>", "</div>" ].join(""),
									buttons : {
										btnOk : [
												'<a id="WkDialogOk" href="###" class="bt ui-btn ui-btn-26-green mv10">',
												'<b class="btc">',
												'<b class="btText">btnOk</b>',
												"</b>", "</a>" ].join(""),
										btnCancel : [
												'<a id="WkDialogCancel" href="###" class="bt ui-btn ui-btn-26-light mv10">',
												'<b class="btc">',
												'<b class="btText">btnCancel</b>',
												"</b>", "</a>" ].join("")
									}
								}
							}, {
								type : "dialog"
							});
					var f = (function(h) {
						var i = null;
						return function() {
							if (!i) {
								i = new e(h);
								i.fire("onload")
							}
							return i
						}
					})();
					b.dialogCreate = f;
					return b
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/widget/widget.js",
						"/static/common/ui/js_core/util/util.js" ]);
F
		.module(
				"/static/common/ui/js_core/_dialog/mask.js",
				function(e, c) {
					var d = e("/static/common/lib/tangram/base/base.js"), b = e("/static/common/ui/js_core/util/util.js"), f = e("/static/common/ui/js_core/mask/mask.js").maskCreate;
					var a = function(g) {
						var i = this;
						var h = {
							bgColor : "#000",
							closeWithClick : false,
							closeWithEsc : false,
							autoShow : false
						};
						var j = f(b.mix(h, g.mask || {}, true));
						j.on("onHideBefore", function(k) {
						});
						this.on("onHideAfter", function(k) {
							j.hide()
						});
						this.on("onCloseAfter", function(k) {
							j.close()
						});
						this.on("onShowBefore", function(k) {
							j.show()
						});
						this.on("onBodyResize", function() {
							j.fire("onContainerResize")
						})
					};
					c.mask = a;
					return c
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/util/util.js",
						"/static/common/ui/js_core/mask/mask.js" ]);
F
		.module(
				"/static/common/ui/js_core/_dialog/_dialog.js",
				function(d, f) {
					var e = d("/static/common/lib/tangram/base/base.js"), h = d("/static/common/ui/js_core/widget/widget.js").widget, i = d("/static/common/ui/js_core/util/util.js"), c = d("/static/common/ui/js_core/layerControl/layerControl.js").layerControl, l = d("/static/common/ui/js_core/_dialog/mask.js").mask;
					var g = h(
							{
								Options : {
									el : ""
								},
								_init : function(m) {
									i.mix(this, i.zIndexManager);
									var o = e.event;
									var n = this;
									this.guid = e.lang.guid();
									this._lastDom = null;
									this.on("onload", function() {
										var p = n.getElement(), r = function() {
											n.focus()
										}, q = function(s) {
											if (!n.closeWithEsc
													|| !n.isShowing()) {
												return
											}
											s.keyCode === 27 && n.hide()
										};
										o.on(p, "mousedown", r);
										o.on(document, "keydown", q);
										n.on("ondispose", function() {
											o.un(p, "mousedown", r);
											o.un(document, "keydown", q)
										});
										n.on("onShowAfter", function() {
											n._hasShown = true;
											n._showing = true;
											n.setSize({
												width : n.width,
												height : n.height
											});
											if (n.top === "" || n.left === "") {
												n.center()
											} else {
												n.setPosition({
													top : n.top,
													left : n.left
												})
											}
										});
										n.setTitle(n.title);
										n.setContent(n.content, n.contentType);
										n.setButtons(n.buttons);
										if (n.draggable) {
											n.setDraggable(true)
										}
									});
									this._createDialog()
								},
								stop : function(m) {
									m.returnValue = false
								},
								getElement : function(m) {
									return e.g(this._getElementId(m
											|| "container"))
								},
								_getElementId : function(m) {
									return [ this.type, this.guid, m ]
											.join("-")
								},
								isShowing : function() {
									return this._showing
								},
								_hide : function() {
									this.getElement().style.display = "none";
									this._showing = false
								},
								hide : function() {
									if (!this.fire("onHideBefore")) {
										return
									}
									this._hide();
									this.fire("onHideAfter")
								},
								setDraggable : function(m) {
									if (m) {
										var p = this, s = e.page, q = e.dom.addClass, r = e.dom.removeClass, o = p
												.getElement("head"), n = {
											range : [ 0, s.getWidth(),
													s.getHeight(), 0 ],
											handler : o,
											onbeforedragstart : function(t) {
												q(t, "on-drag-move")
											},
											ondragend : function(t) {
												r(t, "on-drag-move")
											}
										};
										if (p.onDrag) {
											n.ondrag = p.onDrag
										}
										q(o, "move-handler");
										e.dom.draggable(this.getElement(), n)
									}
									this.draggable = m
								},
								setSize : function(o) {
									var t = e.dom.getComputedStyle;
									var q = +o.width, m = +o.height, n = this
											.getElement(), s = this
											.getElement("content"), p = n.style, r;
									if (typeof q === "number") {
										p.width = (this.width = q) + "px"
									}
									if (typeof m === "number") {
										p.height = (this.height = m) + "px"
									}
									r = m
											- this.getElement("buttons").offsetHeight
											- this.getElement("head").offsetHeight
											- 7;
									s.style.height = r >= 0 ? (r + "px")
											: "auto";
									this.fire("onresize")
								},
								getSize : function() {
									return {
										width : this.width,
										height : this.height
									}
								},
								setContent : function(r, t, n) {
									var m = e.dom;
									var p = this.getElement("content"), q, s, o;
									typeof n !== "undefined"
											&& (this.hasContent = n);
									this._showPart(p, this.hasContent);
									if (!p) {
										return this
									}
									if (q = this._lastDom) {
										o = q.parent;
										if (q.content === r) {
											return this
										}
										if (q.target) {
											o.insertBefore(q.content, q.target)
										} else {
											o.appendChild(q.content)
										}
									}
									switch (t) {
									case "text":
										p.innerHTML = baidu.string
												.encodeHTML(r);
										m.removeClass(p, "contentFrame");
										break;
									case "element":
										if (o = (r = m.g(r)).parentNode) {
											o.insertBefore(s = document
													.createTextNode(""), r);
											this._lastDom = {
												content : r,
												parent : r.parentNode,
												target : s
											}
										}
										p.innerHTML = "";
										p.appendChild(r);
										m.removeClass(p, "contentFrame");
										break;
									case "iframe":
										if (!this._hasShown) {
											p.innerHTML = '<iframe frameborder="no" src="'
													+ r
													+ '" width="100%" name="'
													+ this.iframeName
													+ '"></iframe>';
											m.hasClass(p, "contentFrame")
													|| m.addClass(p,
															"contentFrame")
										}
										break;
									default:
										p.innerHTML = r;
										m.removeClass(p, "contentFrame");
										break
									}
									return this
								},
								setTitle : function(o, n) {
									var m = this.getElement("title");
									this.title = o;
									typeof n !== "undefined"
											&& (this.hasTitle = n);
									if (m) {
										this._showPart(m, this.hasTitle);
										m.innerHTML = o || "&nbsp;"
									}
									return this
								},
								setPosition : function(m) {
									var q = +m.left, p = +m.top, n = this
											.getElement(), o = n.style;
									this.fire("onSetPositionBefore");
									if (typeof q === "number") {
										o.left = (this.left = q) + "px"
									}
									if (typeof p === "number") {
										o.top = (this.top = p) + "px"
									}
									this.fire("onSetPositionAfter");
									return this
								},
								getPosition : function() {
									return {
										left : this.left,
										top : this.top
									}
								},
								center : function() {
									var s = e.page, q = s.getScrollTop(), r = s
											.getScrollLeft();
									var n = s.getViewWidth(), m = s
											.getViewHeight(), p = (((n - this.width) / 2) | 0)
											+ r, o = (((m - this.height) / 2) | 0)
											+ q;
									o < q && (o = q);
									p < r && (p = r);
									this.setPosition({
										left : p,
										top : o
									});
									return this
								},
								setButtons : function(n, m) {
									var o = this.getElement("buttons");
									this.buttons = n;
									typeof m !== "undefined"
											&& (this.hasButtons = m);
									if (o) {
										this._showPart(o, this.hasButtons);
										o.innerHTML = n
									}
									return this
								},
								setOperate : function(m, o) {
									var n = this.getElement("Operate");
									typeof o !== "undefined"
											&& (this.hasHead = o);
									this.operate = m;
									if (n) {
										this._showPart(n, this.hasHead);
										n.innerHTML = n
									}
									return this
								},
								_showPart : function(n, m) {
									n.style.display = m === false ? "none"
											: "block"
								},
								focus : function() {
									this.fire("onfocus")
								},
								close : function() {
									if (!this.fire("onCloseBefore")) {
										return false
									}
									this.hide();
									this.remove();
									this.fire("onCloseAfter")
								},
								_createDialog : function() {
									var n = this.template, m = {
										dialogContainerId : this
												._getElementId("container"),
										dialogHeadId : this
												._getElementId("head"),
										dialogOperateId : this
												._getElementId("operate"),
										dialogTitleId : this
												._getElementId("title"),
										dialogContentId : this
												._getElementId("content"),
										dialogButtonsId : this
												._getElementId("buttons"),
										dialogInnerId : this.innerId
												|| this._getElementId("inner")
									}, o = i.createDom(e.string.format(n, m));
									document.body.appendChild(o);
									return this
								}
							}, {
								type : "dialog",
								superClass : c
							});
					var k = h(
							{
								Options : {
									el : "",
									innerId : "",
									width : 400,
									height : 300,
									left : "",
									top : "",
									autoshow : true,
									operate : "",
									hasOperate : true,
									title : "",
									hasTitle : true,
									content : "",
									contentType : "html",
									hasContent : "",
									buttons : "",
									hasButtons : true,
									closeSelector : ".dialog-close",
									minimizeSelector : ".minimize",
									confirmSelector : ".confirm",
									closeWithEsc : true,
									draggable : true,
									onDrag : null,
									onConfirm : e.fn.blank,
									onBeforeClose : e.fn.blank,
									mask : {
										bgColor : "#000"
									}
								},
								template : [
										'<div id="#{dialogContainerId}" class="mod ui-dialog-container">',
										'<div id="#{dialogInnerId}" class="inner">',
										'<div id="#{dialogHeadId}" class="hd">',
										'<span class="act" id="#{dialogOperateId}">',
										'<a href="###" hidefocus="true" class="ir close dialog-close">&times;</a>',
										"</span>",
										'<h3 id="#{dialogTitleId}" class="dialog-title"></h3>',
										"</div>",
										'<div id="#{dialogContentId}" class="bd dialog-content"></div>',
										'<div id="#{dialogButtonsId}" class="ft pv20"></div>',
										"</div>", "</div>" ].join(""),
								_init : function(m) {
									var n = this;
									e.object.extend(this, i
											.mix(e.object.clone(this.Options),
													m || {}, true));
									this._action();
									this.el = this.getElement();
									this.iframeName = this.iframeName
											|| "iframe-" + this.guid;
									this.fire("onload");
									this._hide();
									this.autoshow && setTimeout(function() {
										n.show()
									}, 10)
								},
								_action : function() {
									var m = e.event.stop;
									var n = this, o = this.getElement();
									i.delegate(o, this.closeSelector, "click",
											function(p) {
												n.close();
												m(p)
											});
									i.delegate(o, this.minimizeSelector,
											"click", function(p) {
												n.minimize();
												m(p)
											});
									i
											.delegate(
													o,
													this.confirmSelector,
													"click",
													function(p) {
														if (!n
																.fire("onConfirmBefore")) {
															return false
														}
														n.close();
														m(p)
													})
								},
								minimize : function() {
									this.hide()
								},
								render : function(m) {
									this.fire("onRenderBefore");
									this.fire("onRenderAfter");
									return this
								}
							}, {
								type : "dialog",
								superClass : g,
								include : [ l ]
							});
					var a = function(n) {
						var m = new k(n);
						return m
					};
					var b = {};
					b.confirm = function(n) {
						var p = n.btnText || [ "\u786e\u8ba4", "\u53d6\u6d88" ], o = [
								'<div class="dialog-btns-confirm" style="padding: 10px 0; text-align:center">',
								'<a href="###" class="bt ui-btn ui-btn-26-green mv10 confirm">',
								'<b class="btc"><b class="btText">#{0}</b></b>',
								"</a>",
								'<a href="###" class="bt ui-btn ui-btn-26-light mv10 dialog-close">',
								'<b class="btc"><b class="btText">#{1}</b></b>',
								"</a>", "</div>" ].join(""), m = {
							buttons : e.string.format(o, p)
						};
						var q = a(i.mix(m, n));
						return q
					};
					b.tip = function(n) {
						n = n || {};
						var m = {
							width : 300,
							height : 200,
							hasButtons : false,
							onShowAfter : function() {
								var p = this;
								if (typeof n.showTime === "undefined") {
									n.showTime = 3000
								}
								if (n.showTime != 0) {
									setTimeout(function() {
										p.hide()
									}, n.showTime)
								}
							}
						};
						var o = a(i.mix(m, n));
						return o
					};
					b.alert = function(n) {
						var o = [
								'<div class="dialog-btns-alert" style="padding : 10px 0; text-align:center">',
								'<a href="###" class="bt ui-btn ui-btn-26-green mv10 confirm">',
								'<b class="btc"><b class="btText">#{text}</b></b>',
								"</a>", "</div>" ].join(""), p = {
							text : n.btnText || "\u786e\u8ba4"
						}, m = {
							buttons : e.string.format(o, p)
						};
						var q = a(i.mix(m, n));
						return q
					};
					var j;
					f.dialog = k;
					f.dialogCreate = a;
					f.confirm = b.confirm;
					f.alert = b.alert;
					f.tip = b.tip;
					return f
				},
				[
						"/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/widget/widget.js",
						"/static/common/ui/js_core/util/util.js",
						"/static/common/ui/js_core/layerControl/layerControl.js",
						"/static/common/ui/js_core/_dialog/mask.js" ]);
F
		.module(
				"/static/common/ui/js_core/mask/mask.js",
				function(f, d) {
					var e = f("/static/common/lib/tangram/base/base.js"), g = f("/static/common/ui/js_core/widget/widget.js").widget, c = f("/static/common/ui/js_core/util/util.js"), a = f("/static/common/ui/js_core/layerControl/layerControl.js").layerControl;
					var b = g(
							{
								Options : {
									el : "",
									container : document.body,
									opacity : 0.3,
									top : "",
									left : "",
									width : "",
									height : "",
									bgColor : "#000000",
									closeWithEsc : true,
									closeWithClick : true,
									closeSelector : ".ui-mask-close",
									handCursor : true,
									autoShow : true,
									onClose : e.fn.blank
								},
								_init : function(i) {
									var j = this, l = e.event;
									var k = function() {
										j.autoresize()
									};
									this.fullPage = (i.container === document.body);
									e.object.extend(this, c.mix(this.Options, i
											|| {}, true));
									this.el = this.el
											|| document.createElement("div");
									this.domId = this.el.id = [ "mask-layer",
											e.lang.guid() ].join("-");
									document.body.appendChild(this.el);
									this._action();
									this.on("onCloseAfter", function(m) {
										j.dispose()
									});
									this.on("onHideAfter", function(m) {
										j.showing = false;
										l.un(window, "resize", k);
										l.un(window, "scroll", k)
									});
									this.on("onShowAfter", function(m) {
										j.showing = true;
										l.on(window, "resize", k);
										l.on(window, "scroll", k)
									});
									this.autoShow && this.show()
								},
								_action : function() {
									var k = e.event;
									var i = this, j = function(l) {
										l.keyCode === 27 && i.close()
									};
									c.delegate(this.el, this.closeSelector,
											"click", function(l) {
												i.close();
												k.stop(l)
											});
									if (this.closeWithEsc) {
										k.on(document, "keydown", j)
									}
									if (this.closeWithClick) {
										k.on(this.el, "click", function(l) {
											i.close()
										})
									}
									this.on("ondispose", function(l) {
										k.un(document, "keydown", j)
									});
									this._addHtml();
									this._addStyle()
								},
								autoresize : function() {
									if (!this.width || !this.height) {
										this._addStyle()
									}
								},
								close : function() {
									this.hide();
									if (this.onClose.call(this) !== false) {
										this.fire("onCloseBefore");
										document.body.removeChild(this.el);
										this.fire("onCloseAfter")
									}
								},
								_addHtml : function() {
									this.el.innerHTML = [
											'<iframe frameborder="0" style="',
											"filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);",
											"position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;",
											'" src="about:blank"></iframe>',
											'<div style="position:absolute;top:0;left:0;width:100%;height:100%;">&nbsp;</div>' ]
											.join("")
								},
								_addStyle : function() {
									var i = this.container, j = this.el, k = this, l = e.dom
											.getPosition(this.container);
									j.style.cssText += [
											";top : " + (this.top || l.top)
													+ "px",
											"left : " + (this.left || l.left)
													+ "px",
											"width : "
													+ (this.width || i.offsetWidth)
													+ "px",
											"height : "
													+ (this.height || i.offsetHeight)
													+ "px",
											"background : " + this.bgColor,
											"opacity : " + this.opacity,
											"filter : alpha(opacity="
													+ this.opacity * 100 + ")",
											"position : absolute",
											this.handCursor ? "cursor : pointer; _cursor : hand"
													: "",
											"display : "
													+ (this.showing ? "block"
															: "none") ]
											.join(";");
									return this
								},
								attr : function(i) {
									return this.Options[i]
								}
							}, {
								type : "mask",
								superClass : a
							});
					var h = function(j) {
						var i = new b(j);
						return i
					};
					d.mask = b;
					d.maskCreate = h;
					return d
				},
				[ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/widget/widget.js",
						"/static/common/ui/js_core/util/util.js",
						"/static/common/ui/js_core/layerControl/layerControl.js" ]);
F
		.module(
				"/static/common/ui/js_core/tips/tips.js",
				function(g, e) {
					var f = g("/static/common/lib/tangram/base/base.js");
					var h = g("/static/common/ui/js_core/widget/widget.js").widget;
					var d = g("/static/common/ui/js_core/util/util.js");
					var c = g("/static/common/ui/js_core/layerControl/layerControl.js").layerControl;
					var b = h(
							{
								Options : {
									el : "",
									applyEl : "",
									closeSelectors : ".close",
									className : "",
									content : ""
								},
								template : '<div class="tips #{className}">#{content}</div>',
								_init : function() {
									var i = this;
									d.mix(this, d.zIndexManager);
									i.styleId = "style-" + i.type + "-"
											+ f.lang.guid();
									i.on("onload", function() {
										i._action()
									});
									i.on("ondispose", function() {
										f.dom.remove(i.styleId)
									})
								},
								close : function() {
									this.fire("onCloseBefore");
									this.hide();
									this.fire("onCloseAfter")
								},
								_action : function() {
									var i = this;
									d.delegate(this.el, this.closeSelectors,
											"click", function(j) {
												i.close();
												f.event.stop(j)
											})
								},
								addStyle : function(i) {
									d.importCssString(i, this.styleId);
									return this
								},
								render : function(i) {
									this.fire("onRenderBefore");
									i = d.mix(this.options, i, true);
									var k = f.string
											.format(this.template, data), j = f.lang
											.isElement(this.applyEl) ? this.applyEl
											: document.body;
									this.el = d.createDom(k);
									j.appendChild(this.el);
									this.fire("onRenderAfter");
									return this
								}
							}, {
								type : "tips",
								superClass : c
							});
					var a = function(i) {
						var j = new b(i);
						j.fire("onload");
						return j
					};
					e.tips = b;
					e.tipsCreate = a;
					return e
				},
				[ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/widget/widget.js",
						"/static/common/ui/js_core/util/util.js",
						"/static/common/ui/js_core/layerControl/layerControl.js" ]);
F.module("/static/common/ui/js_core/tabs/tabs.js", function(c, a) {
	var b = c("/static/common/lib/tangram/base/base.js");
	var e = c("/static/common/ui/js_core/widget/widget.js").widget;
	var d = e({
		Options : {
			el : "",
			bindEvent : "mouseover",
			onClassName : "current",
			unClassName : "disabled",
			controlClassName : "tabControl",
			controlChildTag : "li",
			contentClassName : "tabContent",
			contentChildTag : "li",
			delay : 0,
			selectIndex : 0
		},
		_init : function() {
			var g = this;
			g.actime = null;
			g.on("onload", function() {
				if (b.lang.isString(g.el)) {
					g.el = b.g(el)
				}
				g.hdElement = b.dom.query("." + g.controlClassName + ">"
						+ g.controlChildTag, g.el);
				g.bdElement = b.dom.query("." + g.contentClassName + ">"
						+ g.contentChildTag, g.el);
				g._action().gotoIndex(g.selectIndex)
			})
		},
		_change : function(g) {
			var h = this;
			h.fire("onBeforeAction");
			b.array.each(this.bdElement, function(l, i) {
				var k = h.hdElement[i];
				if (g === i) {
					h.fire("onBeforeCurrent", {
						hdElement : k,
						bdElement : l
					});
					h._current(l, k);
					h.fire("onAfterCurrent", {
						hdElement : k,
						bdElement : l
					})
				} else {
					h.fire("onBeforeDisabled", {
						hdElement : k,
						bdElement : l
					});
					h._disable(l, k);
					h.fire("onAfterDisabled", {
						hdElement : k,
						bdElement : l
					})
				}
			});
			h.fire("onAfterAction");
			return this
		},
		_action : function() {
			var g = this;
			b.array.each(this.hdElement, function(j, h) {
				b.event.on(j, g.bindEvent, function(i) {
					clearTimeout(g.actime);
					if (g.delay > 0) {
						g.actime = setTimeout(b.fn.bind(g._change, g, h),
								g.delay)
					} else {
						g._change(h)
					}
					b.event.stop(i)
				})
			});
			return this
		},
		_current : function(h, g) {
			b.dom.removeClass(h, "disabled current");
			b.dom.addClass(h, "current");
			b.dom.removeClass(g, "disabled current");
			b.dom.addClass(g, "current");
			return this
		},
		_disable : function(h, g) {
			b.dom.removeClass(h, "disabled current");
			b.dom.addClass(h, "disabled");
			b.dom.removeClass(g, "disabled current");
			b.dom.addClass(g, "disabled");
			return this
		},
		gotoIndex : function(g) {
			if (this.hdElement[g]) {
				this._change(g)
			}
			return this
		}
	}, {
		type : "tabs"
	});
	var f = function(g) {
		var h = new d(g);
		h.fire("onload");
		return h
	};
	a.tabs = d;
	a.tabsCreate = f;
	return a
}, [ "/static/common/lib/tangram/base/base.js",
		"/static/common/ui/js_core/widget/widget.js" ]);
F
		.module(
				"/static/common/ui/js_core/recommendation/recommendation.js",
				function(a, e) {
					var c = a("/static/common/lib/tangram/base/base.js"), g = a("/static/common/ui/js_core/util/util.js"), i = a("/static/common/ui/js_core/mvp/template/template.js").template, f = a("/static/common/ui/js_core/widget/widget.js").widget, h = a("/static/common/lib/fis/data/data.js");
					var d = f({
						Options : {
							el : "",
							container : document.body,
							template : "",
							onrequest : c.fn.blank,
							cookie : "recommendation",
							changeSelector : ".dochange"
						},
						_init : function(j) {
							this.status = 0;
							this.url = "/rec/getrprec";
							this.pn = this._getPn() || 0;
							this.cnt = 0;
							this._getData()
						},
						_getData : function() {},
						_getPn : function() {
							return this.cookie === false ? 0 : c.cookie
									.get(this.cookie)
						},
						_setCookie : function() {
							return c.cookie.set(this.cookie, this.pn)
						},
						_formatData : function(o) {
							var m, j, k = o.data.tag_list, r = o.data.doc_list, p = g.cutString, q = h
									.get("WkInfo").PageInfo.docTypeList, n;
							for (m = 0, j = k.length; m < j; m += 1) {
								k[m] = {
									str : k[m],
									cutstr : p(k[m], 6, "..."),
									search : "http://wenku.baidu.com/search?word="
											+ k[m]
								}
							}
							for (m = 0, j = r.length; m < j; m += 1) {
								n = q[r[m].type];
								r[m].cuttitle = p(r[m].title, 11, "...");
								r[m].cover = "http://wenku.baidu.com/img/"
										+ r[m].store_id;
								r[m].url = "http://wenku.baidu.com/view/"
										+ r[m].doc_id + ".html";
								r[m].ppt = (n[0] === "ppt");
								r[m].docType = n
							}
							return o
						},
						render : function(m) {
							var k = c.g;
							var j = this.container, l;
							if (typeof m === "undefined") {
								l = this.content
							} else {
								this.content = l = i(this.template, this
										._formatData(m))
							}
							if (j) {
								j.innerHTML = l;
								!(this.cnt++) && this._bindEvent()
							}
							this.pn++;
							(this.cookie !== false) && this._setCookie()
						},
						_bindEvent : function() {
							var j = this;
							g.delegate(this.container, this.changeSelector,
									"click", function(k) {
										!j.status && j._getData();
										c.event.stop(k)
									})
						}
					});
					e.recommendation = d;
					var b = function(j) {
						return new d(j)
					};
					e.recommendationCreate = b;
					return e
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/util/util.js",
						"/static/common/ui/js_core/mvp/template/template.js",
						"/static/common/ui/js_core/widget/widget.js",
						"/static/common/lib/fis/data/data.js" ]);
F
		.module(
				"/static/widget/common/header/search_box/search_box.js",
				function(e, b) {
					var d = e("/static/common/lib/tangram/base/base.js");
					var a = e("/static/common/ui/js_core/util/util.js");
					var c = e("/static/common/ui/js_core/Suggestion/Suggestion.js").Suggestion;
					var f = e("/static/common/ui/js_core/log/log.js");
					d.dom
							.ready(function() {
								if (el = d.g("favorite")) {
									d.event
											.on(
													el,
													"click",
													function(h) {
														if (window.sidebar
																|| window.opera) {
															return true
														}
														try {
															window.external
																	.AddFavorite(
																			"http://wenku.baidu.com/",
																			"\u767e\u5ea6\u6587\u5e93")
														} catch (h) {
															alert("\u6211\u592a\u6ca1\u7528\u4e86\uff0c\u6ca1\u80fd\u6dfb\u52a0\u6210\u529f\uff0c\u8bf7\u60a8\u6309\u952e\u76d8\u4e0a\u7684Ctrl+D \u624b\u52a8\u6dfb\u52a0\u5427")
														}
														d.event.stop(h);
														return false
													})
								}
								var g = new c(
										{
											view : function(k) {
												var j = d.browser.ie == 6
														|| d.browser.ie == 7;
												var i = d.browser.chrome != undefined;
												var h = location.pathname === "/search" ? 535
														: 408;
												return {
													top : k.top + (j ? 3 : 4),
													left : k.left - (i ? 7 : 8),
													width : h
												}
											},
											getData : function(i) {
												var h = this;
												d.sio
														.callByServer(
																"http://nssug.baidu.com/su?wd="
																		+ encodeURIComponent(i)
																		+ "&prod=wenku&oe=utf-8&&t="
																		+ Math
																				.random(),
																function(j) {
																	h
																			.callback(j)
																},
																{
																	queryField : "cb"
																})
											},
											onconfirm : function(i) {
												if (!isNaN(i.data.index)) {
													var j = "/tongji/sug.gif?action=confirm&index="
															+ (i.data.index + 1)
															+ "&t="
															+ Math
																	.round(Math
																			.random() * 2147483647);
													//f.imageReq(j)
												}
												var h = d.g("kw").form;
												if (h.onsubmit
														&& h.onsubmit() === false) {
													return
												}
												h.submit()
											},
											onbeforepick : function(h) {
												return function(i) {
													h.innerHTML = i.data.item.content;
													i.data.item.content = i.data.item.value = d.dom
															.getText(h)
												}
											}(document.createElement("div")),
											callback : function(i) {
												var k = i.s, j = i.q, h = [];
												d.array
														.each(
																k,
																function(n, m) {
																	if (location.pathname === "/new"
																			&& m >= 4) {
																		return
																	}
																	if (j
																			&& n
																					.indexOf(j) != -1) {
																		h
																				.push(n
																						.replace(
																								j,
																								"<b>"
																										+ j
																										+ "</b>"))
																	} else {
																		h
																				.push("<b>"
																						+ n
																						+ "</b>")
																	}
																});
												g.show(j, h);
												if (k.length) {
													var l = "/tongji/sug.gif?action=render&t="
															+ Math
																	.round(Math
																			.random() * 2147483647);
												//	f.imageReq(l)
												}
											}
										});
								g.render(d.g("kw"))
							});
					return b
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/util/util.js",
						"/static/common/ui/js_core/Suggestion/Suggestion.js",
						"/static/common/ui/js_core/log/log.js" ]);
F
		.module(
				"/static/widget/common/user_bar/user_bar.js",
				function(b, f) {
					var d = b("/static/common/lib/tangram/base/base.js"), g = b("/static/common/ui/js_core/util/util.js"), e = b("/static/common/ui/js_core/log/log.js"), i = g.delegate;
					var c = b("/static/common/ui/js_core/dropDown/dropDown.js").dropDownCreate;
					var j = b("/static/common/ui/js_core/login/login.js").login;
					var a = b("/static/common/ui/js_core/dialog/dialog.js");
					var k = b("/static/common/lib/fis/data/data.js");
					var h = (function() {
						var l = null;
						return function() {
							if (!l) {
								l = a.dialogCreate()
							}
							return l
						}
					})();
					setTimeout(
							function() {
								var u = d.q("uname"), z = k.get("WkInfo") || {}, n = d
										.q("user-my-name-tip");
								u.length && c({
									bindEl : u[0],
									el : n[0]
								});
								var p = d.q("user-my-wenku"), w = d
										.q("user-my-wenku-tip"), o = d
										.g("btn-fillin-username");
								p.length && c({
									bindEl : p[0],
									el : w[0]
								});
								o && d.on(o, "click", function(A) {
									j.notifyToFillinUsername("userbar")
								});
								var l = function(A) {
									var B = "http://msg.baidu.com/msg/msg_dataGetmsgCount?un="
											+ A;
									d.sio
											.callByServer(
													B,
													function(C) {
														if (C
																&& +C.mailMsgNum > 0) {
															d.g("mnum").innerHTML = C.mailMsgNum
														}
													})
								};
								var s = d.g("login");
								var t = d.g("logout");
								if (s) {
									d
											.on(
													s,
													"click",
													function(A) {
														setTimeout(
																function() {
																	var E = d.dom
																			.q(
																					"pass_login_form",
																					"login-normal",
																					"form")[0];
																	if (E) {
																		var D = E.u
																	}
																	var C = encodeURI(
																			location.href)
																			.replace(
																					/[#?].*$/g,
																					""), B = "from_mod=user_bar";
																	if (D) {
																		C += (C
																				.indexOf("?") == -1) ? "?"
																				+ B
																				: "&"
																						+ B;
																		D.value = C
																	}
																}, 500);
														d.event
																.preventDefault(A)
													})
								}
								if (t) {
									var r = d
											.trim(d.g("userNameCon").innerHTML);
									l("un");
									if (z.PageInfo.tpl == "room") {
										t.href = "http://passport.baidu.com/?logout&aid=7&u="
												+ escape("http://wenku.baidu.com/")
									} else {
										t.href = "http://passport.baidu.com/?logout&aid=7&u="
												+ escape(location.href)
									}
									var q = document.location.pathname, v = d.cookie
											.get("BDUSS"), m = {
										homepage : /^\/$/i,
										edu : /^\/edu\/index$/i,
										ppt : /^\/ppt\/index$/i,
										pro : /^\/pro\/index$/i,
										form : /^\/form\/index$/i,
										org : /^\/org\//i,
										topic : /^\/topic$/i,
										search : /^\/search/i,
										catelist : /^\/list\//i,
										hotlist : /^\/hotlist/i,
										upload : /^\/new/i,
										submit : /^\/submit/i,
										view : /^\/view\//i,
										userlist : /^\/userlist\//i,
										latest : /^\/latest/i,
										album : /^\/album\//i,
										usercenter : /^\/(room|user\/)/i
									};
									for ( var x in m) {
										if (m.hasOwnProperty(x)) {
											var y = m[x];
											if (y.test(q) && v) {
												t
														.setAttribute(
																"data-logsend",
																'{"send":["general","logout",{"refer":"'
																		+ x
																		+ '", "bduss":"'
																		+ v
																		+ '"}]}')
											}
										}
									}
								}
							}, 250);
					d.dom
							.ready(function() {
								var s = {
									1 : {
										text : "xy\u4e2a\u6587\u6863\u8f6c\u6362\u5931\u8d25",
										url : "http://" + location.host
												+ "/user/doc?st=3"
									},
									2 : {
										text : "xy\u4e2a\u6587\u8f91\u672a\u901a\u8fc7",
										url : "http://" + location.host
												+ "/user/album?st=2"
									},
									3 : {
										text : "xy\u4e2a\u6d3b\u52a8\u4efb\u52a1\u6587\u6863\u4e0a\u4f20\u6210\u529f",
										url : "http://" + location.host
												+ "/user/doc?st=1"
									},
									4 : {
										text : "xy\u4e2a\u6d3b\u52a8\u4efb\u52a1\u6587\u6863\u4e0a\u4f20\u5931\u8d25",
										url : "http://" + location.host
												+ "/user/doc?st=3"
									},
									5 : {
										text : "xy\u4e2a\u7cfb\u7edf\u6d88\u606f",
										url : "http://" + location.host
												+ "/user/mymsgpage"
									},
									6 : {
										text : "xy\u4e2a\u65b0\u516c\u5171\u6587\u6863",
										url : "http://" + location.host
												+ "/user/doc?st=1"
									},
									7 : {
										text : "xy\u4e2a\u7533\u8bc9\u6d88\u606f",
										url : "http://" + location.host
												+ "/user/doc?st=3"
									},
									8 : {
										text : "xy\u4e2a\u5b98\u65b9\u6d88\u606f",
										url : "http://" + location.host
												+ "/user/mymsgpage"
									}
								};
								function t(y, p) {
									return {
										newstext : s[y]["text"].replace(/xy/g,
												"<em>" + p + "</em>"),
										url : s[y]["url"]
									}
								}
								function v(y, p) {
									while (y.nodeName.toLowerCase() != p) {
										y = y.parentNode
									}
									return y
								}
								var q = {
									bubble_html : [ '<div id="docBubble" class="docBubble"><i class="triangle-t"></i><i title="\u5173\u95ed" class="close markSend">\u5173\u95ed</i><div class="tl"><div class="inner"></div></div><div class="tr"></div><div class="bl"></div></div>' ]
											.join("")
								};
								var u = d.g("user-my-class");
								d.dom.insertHTML(document.body, "beforeEnd",
										q.bubble_html);
								var r = d.g("docBubble"), x = d.dom.q("inner",
										r, "div")[0], w = d.dom.q("close", r,
										"i")[0], n = "", o, l;
								for ( var m in s) {
									if (s[m].url == location.href) {
										n = "show_type=" + m + "";
										d.ajax.post("/message/readnotice", n,
												function(z, y) {
													var p = d.json.parse(y);
													if (p.status.code == 0) {
													}
												})
									}
								}
//								setTimeout(
//										function() {
//											n = "url=" + location.pathname + "";
//											d.ajax
//													.post(
//															"/message/getnotice",
//															n,
//															function(M, A) {
//																try {
//																	var N = d.json
//																			.parse(A)
//																} catch (I) {
//																	return false
//																}
//																if (N.status.code == "0") {
//																	var p = N.data.system;
//																	var H = N.data.advert;
//																	var B = N.data.system_num;
//																	if (parseInt(
//																			B,
//																			10) > 99) {
//																		B = "N"
//																	}
//																	if (p.length == 0
//																			&& H.length == 0) {
//																		return
//																	}
//																	if (p.length > 0) {
//																		var E = [], C = "", z = d.dom
//																				.q(
//																						"my-notice",
//																						u,
//																						"span")[0], L = d.dom
//																				.q(
//																						"close",
//																						r,
//																						"i")[0];
//																		d.event
//																				.on(
//																						L,
//																						"click",
//																						function() {
//																							e
//																									.send(
//																											"general",
//																											"close_click",
//																											{
//																												module : "message"
//																											})
//																						});
//																		for ( var D = 0; D < p.length; D++) {
//																			C = "<li show_type='"
//																					+ p[D].show_type
//																					+ "'><a href='"
//																					+ t(
//																							p[D]["show_type"],
//																							p[D]["msg_num"]).url
//																					+ '\' data-logSend=\'{"send":["general","system_click",{"module":"message"}]}\' class=\'logSend\'>'
//																					+ t(
//																							p[D]["show_type"],
//																							p[D]["msg_num"]).newstext
//																					+ "</a></li>";
//																			E
//																					.push(C)
//																		}
//																		x.innerHTML = o = "<ul>"
//																				+ E
//																						.join("")
//																				+ "</ul>";
//																		d.dom
//																				.addClass(
//																						r,
//																						"my-class");
//																		r.style.left = (d.dom
//																				.getPosition(u).left - 142)
//																				+ "px";
//																		z.innerHTML = "<i>"
//																				+ B
//																				+ "</i>";
//																		e
//																				.send(
//																						"general",
//																						"system_show",
//																						{
//																							module : "message"
//																						})
//																	}
//																	if (H.length != 0
//																			&& H.text.length != 0) {
//																		d.dom
//																				.setAttr(
//																						r,
//																						"advert_id",
//																						H.advert_id);
//																		var K = "", J = "", G = "";
//																		if (H.title
//																				&& d.string
//																						.trim(H.title).length != 0) {
//																			J = "<h1><a href='"
//																					+ H.link
//																					+ '\' class=\'markSend logSend\' target=\'_blank\' data-logSend=\'{"send":["general","advert_click",{"module":"message"}]}\'>'
//																					+ H.title
//																					+ "</a></h1>"
//																		}
//																		if (H.pic
//																				&& d.string
//																						.trim(H.pic).length != 0) {
//																			G = "<a href='"
//																					+ H.link
//																					+ '\' class=\'markSend logSend\' target=\'_blank\' data-logSend=\'{"send":["general","advert_click",{"module":"message"}]}\'><img src=\''
//																					+ H.pic
//																					+ "'/></a>"
//																		}
//																		if (H.uname
//																				&& d.string
//																						.trim(H.uname).length != 0) {
//																			K = '<span class="uname">\u4eb2\u7231\u7684'
//																					+ H.uname
//																					+ ":</span>"
//																		}
//																		l = G
//																				+ J
//																				+ K
//																				+ "<p>"
//																				+ H.text
//																				+ "...<a href='"
//																				+ H.link
//																				+ '\' class=\'markSend logSend\' target=\'_blank\' data-logSend=\'{"send":["general","advert_click",{"module":"message"}]}\' style=\'display:block;text-align:right;\'>\u67e5\u770b\u8be6\u60c5</a></p>';
//																		if (p.length == 0) {
//																			x.innerHTML = l;
//																			var y = d
//																					.g("mywenku");
//																			if (d
//																					.g("mnum")) {
//																				d.dom
//																						.addClass(
//																								r,
//																								"my-notice");
//																				r.style.left = (d.dom
//																						.getPosition(y).left - 120)
//																						+ "px"
//																			} else {
//																				d.dom
//																						.addClass(
//																								r,
//																								"my-notice unlogin")
//																			}
//																			e
//																					.send(
//																							"general",
//																							"advert_show",
//																							{
//																								module : "message"
//																							})
//																		}
//																	}
//																}
//															});
//											d
//													.on(
//															window,
//															"resize",
//															function(A) {
//																var y = d
//																		.g("docBubble"), p = d
//																		.g("mywenku"), z = d
//																		.g("user-my-class");
//																if (p) {
//																	if (y
//																			&& y.style.display != "none") {
//																		if (/my-class/g
//																				.test(y.className)) {
//																			y.style.left = (d.dom
//																					.getPosition(z).left - 142)
//																					+ "px"
//																		} else {
//																			y.style.left = (d.dom
//																					.getPosition(p).left - 126)
//																					+ "px"
//																		}
//																	}
//																}
//															})
//										}, 1000);
								i(r, ".markSend", "click", function(C) {
									var A = this, D = null;
									if (/my-class/g
											.test(this.parentNode.className)) {
										var y = d.dom.query("li", r), p = [];
										for ( var z = 0; z < y.length; z++) {
											p.push(d.dom.getAttr(y[z],
													"show_type"))
										}
										n = "show_type=" + p.join("_") + "";
										D = d.dom.q("my-notice", u, "span")[0]
									} else {
										var B = d.dom.getAttr(r, "advert_id");
										n = "advert_id=" + B + "";
										D = null
									}
									d.ajax.post("/message/readnotice", n,
											function(H, G) {
												var E = d.json.parse(G);
												if (E.status.code == 0) {
													r.style.display = "none";
													if (D) {
														D.innerHTML = ""
													}
												}
											})
								})
							});
					window.pageController = {
						closePop : function() {
							h().hide()
						},
						login : j
					};
					return f
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/util/util.js",
						"/static/common/ui/js_core/log/log.js",
						"/static/common/ui/js_core/dropDown/dropDown.js",
						"/static/common/ui/js_core/login/login.js",
						"/static/common/ui/js_core/dialog/dialog.js",
						"/static/common/lib/fis/data/data.js" ]);
F
		.module(
				"/static/widget/common/360tip/360tip.js",
				function(d, b) {
					var c = d("/static/common/lib/tangram/base/base.js"), a = d("/static/common/ui/js_core/util/util.js"), e = d("/static/common/ui/js_core/log/log.js");
					var f = function(h) {
						var g = {
							cookie_name : "BD_TOP_TIP",
							referer : "",
							match_url : [ /^http(s?):\/\/(so|hao)\.360\.cn/ig ]
						};
						this.init(a.mix(g, h || {}, true))
					};
					f.prototype = {
						init : function(g) {
							this.config = g
						},
						tpl : [
								'<div id="baidu-top-tip">',
								"<a href=\"###\" class=\"close logSend\" data-logsend=\"{send:['general','toptip',{'op':'close'}]}\">&Chi;</a>",
								"<p>",
								"<b>\u767e\u5ea6\u63d0\u793a\uff1a</b>",
								"\u60a8\u662f\u901a\u8fc7\u201c\u5947\u864e\u641c\u7d22\u201d\u8bbf\u95ee\u81f3\u767e\u5ea6\u6587\u5e93\uff0c\u5982\u5e0c\u671b\u83b7\u5f97\u5b8c\u6574\u4f18\u8d28\u7684\u767e\u5ea6\u641c\u7d22\u4f53\u9a8c\uff0c\u60a8\u53ef\u4ee5 ",
								"<a href=\"http://www.baidu.com/cache/sethelp/index.html\" target=\"_blank\" class=\"seth logSend\" data-logsend=\"{send:['general','toptip',{'op':'sethome'}]}\">",
								"\u628a\u767e\u5ea6\u8bbe\u4e3a\u4e3b\u9875",
								"</a>",
								" \u6216 ",
								"<a href=\"http://www.baidu.com/search/baidukuaijie_mp.html\" target=\"_blank\" class=\"to-desktop logSend\" data-logsend=\"{send:['general', 'toptip',{'op':'adddesktop'}]}\">",
								"\u628a\u767e\u5ea6\u6dfb\u52a0\u5230\u684c\u9762",
								"</a>", "</p>", "</div>" ],
						hide : function() {
							var h, g = document.body;
							c.cookie.set(this.config.cookie_name, 1, {
								path : "/",
								expires : 31536000000
							});
							if (h = c.g("baidu-top-tip")) {
								h.parentNode.removeChild(h)
							}
							g.style.position = "static";
							g.style.top = 0
						},
						create : function(m) {
							var j = this.config, g = j.match_url, k = 0, h = g.length;
							m = m || j.referer;
							if (!c.cookie.get(j.cookie_name)) {
								for (; k < h; k += 1) {
									if (!g[k].test(m)) {
										continue
									}
									this.show();
									return
								}
							}
						},
						show : function() {
							var g = document.body;
							e.send("general", "toptip", {
								op : "display"
							});
							c.dom
									.insertHTML(g, "afterBegin", this.tpl
											.join(""));
							g.style.cssText += ";position : relative; top : 52px;";
							this.bindEvent()
						},
						bindEvent : function() {
							var g = a.delegate;
							var h = this, i = c.g("baidu-top-tip");
							if (!i) {
								return
							}
							g(i, ".close", "click", function(j) {
								h.hide();
								c.event.stop(j)
							});
							g(i, ".seth", "click", function(l) {
								var m = c.event;
								var k = m.getTarget(l);
								k.style.behavior = "url(#default#homepage)";
								try {
									k.setHomePage("http://www.baidu.com");
									m.stop(l)
								} catch (j) {
								}
								h.hide()
							});
							g(i, ".to-desktop", "click", function(j) {
								h.hide()
							})
						}
					};
					b.showTopTip = f;
					return b
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/util/util.js",
						"/static/common/ui/js_core/log/log.js" ]);
F
		.module(
				"/static/common/ui/js_core/tree/tree.js",
				function(require, exports) {
					var T = require("/static/common/lib/tangram/base/base.js"), util = require("/static/common/ui/js_core/util/util.js"), createDom = util.createDom;
					var AceTree = AceTree || {};
					void function(exports) {
						var lib = {
							remove : function(element) {
								element = T.g(element);
								if (!element) {
									return
								}
								element.parentNode.removeChild(element)
							},
							each : function(source, iterator) {
								if (!source || !iterator) {
									return
								}
								for ( var i = 0; i < source.length; i++) {
									if (iterator(source[i], i) === false) {
										break
									}
								}
							}
						};
						var ie =
						/* @cc_on!@ */
						0;
						function isAncestor(element, parent) {
							element = T.g(element);
							parent = T.g(parent);
							if (element == parent) {
								return true
							}
							var result;
							scanParent(parent, function(item) {
								if (element == item) {
									result = false;
									return false
								}
							});
							return result
						}
						function replaceWith(element, html) {
							element = T.g(element);
							if (!element) {
								return
							}
							element.removeAttribute("id");
							element.parentNode.insertBefore(createDom(html,
									true), element);
							element.parentNode.removeChild(element)
						}
						function appendWith(element, html) {
							element = T.g(element);
							if (!element) {
								return
							}
							element.appendChild(createDom(html, true))
						}
						function insertWith(element, html) {
							element = T.g(element);
							if (!element) {
								return
							}
							element.insertBefore(createDom(html, true),
									element.firstChild)
						}
						function addAttr(element, attrName, attrValue) {
							element = T.g(element);
							if (!element || !element.getAttribute
									|| !element.setAttribute) {
								return
							}
							var newValue = element.getAttribute(attrName);
							if (newValue) {
								var i = newValue.indexOf(attrValue);
								while (i >= 0) {
									if (/^\s*$/.test(newValue.charAt(i - 1)
											+ newValue.charAt(i
													+ attrValue.length))) {
										return
									}
									i = newValue.indexOf(attrValue, i + 1)
								}
								newValue += " " + attrValue
							} else {
								newValue = attrValue
							}
							element.setAttribute(attrName, newValue)
						}
						function removeAttr(element, attrName, attrValue) {
							element = T.g(element);
							if (!element || !element.getAttribute
									|| !element.setAttribute) {
								return
							}
							var newValue = element.getAttribute(attrName);
							if (!newValue) {
								return
							}
							var i = newValue.indexOf(attrValue);
							while (i >= 0) {
								if (/^\s*$/
										.test(newValue.charAt(i - 1)
												+ newValue.charAt(i
														+ attrValue.length))) {
									element.setAttribute(attrName, newValue
											.substring(0, i)
											+ newValue.substring(i
													+ attrValue.length));
									return
								}
								i = newValue.indexOf(attrValue, i + 1)
							}
						}
						function scanParent(element, scaner) {
							element = T.g(element);
							if (!element || !scaner) {
								return
							}
							while (element && !/^html$/i.test(element.tagName)) {
								if (scaner(element) == false) {
									return
								}
								element = element.parentNode
							}
						}
						var wrapMap = {
							option : [ 1, "<select multiple='multiple'>",
									"</select>" ],
							legend : [ 1, "<fieldset>", "</fieldset>" ],
							thead : [ 1, "<table>", "</table>" ],
							tr : [ 2, "<table><tbody>", "</tbody></table>" ],
							td : [ 3, "<table><tbody><tr>",
									"</tr></tbody></table>" ],
							col : [ 2, "<table><tbody></tbody><colgroup>",
									"</colgroup></table>" ],
							area : [ 1, "<map>", "</map>" ],
							_default : [ 0, "", "" ]
						};
						wrapMap.optgroup = wrapMap.option;
						wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
						wrapMap.th = wrapMap.td;
						var nodeDict = {};
						var handler = 0;
						var guid = 0;
						function TemplateNode(parentNode, data) {
							this.parentNode = parentNode;
							this.tree = parentNode.tree;
							this.layer = parentNode.layer + 1;
							this.id = data[this.tree.fieldIdentifier];
							if (/^u/.test(this.id)) {
								this.id = "_guid_" + (guid++)
							}
							this.did = [ this.tree.didPrefix,
									this.tree.handler, this.id ].join("-");
							this.cid = [ this.tree.didPrefix,
									this.tree.handler, this.id, "childs" ]
									.join("-");
							nodeDict[this.did] = this;
							this.data = data;
							this.status = {};
							this.childNodes = [];
							if (this.tree.oncreated) {
								this.tree.oncreated(this)
							}
						}
						TemplateNode.prototype.remove = function(pending) {
							if (this.tree.focusDid == this.did) {
								this.tree.focusDid = ""
							}
							this.removeAll(true);
							delete nodeDict[this.did];
							if (pending) {
								return
							}
							this.parentNode.childNodes = [].concat(
									this.parentNode.childNodes.slice(0,
											this.index),
									this.parentNode.childNodes
											.slice(this.index + 1));
							for ( var i = this.index; i < this.parentNode.childNodes.length; i++) {
								this.parentNode.childNodes[i].index = i
							}
							if (this.tree.onsort) {
								this.parentNode.refresh()
							} else {
								!isAncestor(this.did, this.cid)
										&& lib.remove(this.cid);
								lib.remove(this.did)
							}
						};
						TemplateNode.prototype.appendChild = function(data,
								depth) {
							if (!data) {
								return
							}
							if (typeof depth == "undefined") {
								depth = true
							}
							var node = new TemplateNode(this, data);
							node.index = this.childNodes.length;
							this.childNodes.push(node);
							if (depth) {
								node.loadChilds(data[this.tree.fieldChilds],
										true)
							}
							if (this.tree.onsort) {
								this.childNodes.sort(this.tree.onsort);
								replaceWith(this.did, this.reader())
							} else {
								appendWith(this.cid, node.reader())
							}
							return node
						};
						TemplateNode.prototype.insertChild = function(data,
								depth) {
							if (this.tree.onsort) {
								return this.appendChild(data, depth)
							}
							if (!data) {
								return
							}
							if (typeof depth == "undefined") {
								depth = true
							}
							var node = new TemplateNode(this, data);
							this.childNodes.unshift(node);
							for ( var i = 0; i < this.childNodes.length; i++) {
								this.childNodes[i].index = i
							}
							if (depth) {
								node.loadChilds(data[this.tree.fieldChilds],
										true)
							}
							insertWith(this.cid, node.reader());
							return node
						};
						TemplateNode.prototype.appendChilds = function(datas,
								depth) {
							if (!datas) {
								return
							}
							if (typeof depth == "undefined") {
								depth = true
							}
							var self = this;
							var nodes = [];
							lib.each(datas, function(data) {
								var node = new TemplateNode(self, data);
								nodes.push(node);
								node.index = self.childNodes.length;
								self.childNodes.push(node);
								if (depth) {
									node.loadChilds(
											data[self.tree.fieldChilds], true)
								}
							});
							if (this.tree.onsort) {
								this.tree.onsort
										&& this.childNodes
												.sort(this.tree.onsort);
								this.refresh()
							} else {
								var html = [];
								lib.each(nodes, function(data) {
									html.push(data.reader())
								});
								appendWith(this.cid, html.join(""))
							}
							return nodes
						};
						TemplateNode.prototype.sort = function(depth, pending) {
							if (!this.tree.onsort) {
								return
							}
							this.childNodes.sort(this.tree.onsort);
							var result;
							lib.each(this.childNodes, function(node, index) {
								if (node.index != index) {
									node.index = index;
									result = true
								}
								if (depth && node.sort(true, true)) {
									result = true
								}
							});
							if (result && !pending) {
								this.refresh()
							}
							return result
						};
						TemplateNode.prototype.updateData = function(data,
								depth) {
							if (!data) {
								return
							}
							var changed = false;
							for ( var p in data) {
								if (this.data[p] !== data[p]) {
									this.data[p] = data[p];
									changed = true
								}
							}
							if (depth) {
								this.loadChilds(data[this.tree.fieldChilds],
										true)
							}
							if (changed || depth) {
								this.tree.onsort
										&& this.parentNode.childNodes
												.sort(this.tree.onsort);
								this.parentNode.refresh()
							}
						};
						TemplateNode.prototype.reader = function() {
							if (!this.tree.onreader) {
								return ""
							}
							var childLines = [];
							lib.each(this.childNodes, function(node) {
								childLines.push(node.reader())
							});
							if (this == this.tree) {
								return childLines.join("")
							}
							var self = this;
							return this.tree
									.onreader(this)
									.replace(
											/(^\s*<\w+)([^>]*>)([\s\S]*$)/,
											function(all, $1, $2, $3) {
												$3 = $3
														.replace(
																/(<\w+\b[^>]*)(\bdata-type="childs"[^>]*>)(\s*<\/\w+>)/,
																function(all,
																		$1, $2,
																		$3) {
																	return [
																			$1,
																			' id="',
																			self.cid,
																			'"',
																			$2,
																			childLines
																					.join(""),
																			$3 ]
																			.join("")
																});
												return [ $1, ' id="', self.did,
														'"', $2, $3 ].join("")
											})
						};
						TemplateNode.prototype.removeAll = function(pending) {
							lib.each(this.childNodes, function(node) {
								node.remove(true)
							});
							this.childNodes = [];
							if (pending) {
								return
							}
							this.refresh()
						};
						TemplateNode.prototype.loadChilds = function(datas,
								pending) {
							if (this.childNodes.length == 0 && datas
									&& datas.length == 0) {
								return
							}
							this.removeAll(true);
							if (!datas) {
								return
							}
							var self = this;
							lib.each(datas, function(data) {
								var node = new TemplateNode(self, data);
								self.childNodes.push(node);
								node.loadChilds(data[self.tree.fieldChilds],
										true)
							});
							this.tree.onsort
									&& this.childNodes.sort(this.tree.onsort);
							lib.each(this.childNodes, function(node, index) {
								node.index = index
							});
							!pending && this.refresh()
						};
						TemplateNode.prototype.each = function(iterator) {
							var returnValue;
							iterator
									&& lib.each(this.childNodes,
											function(node) {
												result = iterator(node)
														|| node.each(iterator);
												if (returnValue === false) {
													return returnValue
												}
											});
							return returnValue
						};
						TemplateNode.prototype.setStatus = function(name,
								value, pending) {
							if (!name) {
								return
							}
							if (this.status[name] == value) {
								return
							}
							this.status[name] = value;
							if (pending) {
								return
							}
							this.refresh()
						};
						TemplateNode.prototype.getStatus = function(name) {
							return this.status[name]
						};
						TemplateNode.prototype.getClasses = function(isChilds) {
							var result = [];
							for ( var p in this.status) {
								if (!this.tree.statusClasses.test(p)) {
									continue
								}
								if (this.status[p]
										&& (!isChilds || this.tree.childsClasses
												.test(p))) {
									result.push(p)
								}
							}
							return result.join(" ")
						};
						TemplateNode.prototype.refresh = function() {
							if (this == this.tree) {
								if (ie
										&& /^(col|colgroup|frameset|table|tbody|tfoot|thead|title|tr)$/i
												.test(this.parent.tagName)) {
									for ( var i = this.parent.childNodes.length - 1; i >= 0; i--) {
										if (/^(tr|th)$/i
												.test(this.parent.childNodes[i].tagName)) {
											this.parent
													.removeChild(this.parent.childNodes[i])
										}
									}
									this.parent.appendChild(createDom(
											TemplateNode.prototype.reader
													.call(this), true))
								} else {
									this.parent.innerHTML = TemplateNode.prototype.reader
											.call(this)
								}
								return
							}
							!isAncestor(this.did, this.cid)
									&& lib.remove(this.cid);
							replaceWith(this.did, this.reader())
						};
						TemplateNode.prototype.expand = function() {
							this.setStatus("expand", true)
						};
						TemplateNode.prototype.collapse = function() {
							this.setStatus("expand", false)
						};
						TemplateNode.prototype.toggle = function() {
							this.setStatus("expand", !this.getStatus("expand"))
						};
						TemplateNode.prototype.nextNode = function() {
							if (this.childNodes.length
									&& this.getStatus("expand")) {
								return this.childNodes[0]
							}
							return this.parentNode.childNodes[this.index + 1]
						};
						TemplateNode.prototype.previousNode = function() {
							if (!this.index) {
								if (this.parentNode == this.tree) {
									return
								}
								return this.parentNode
							}
							return this.parentNode.childNodes[this.index - 1]
						};
						TemplateNode.prototype.focus = function(scroll) {
							this.tree.setFocused(this, scroll)
						};
						TemplateNode.prototype.element = function() {
							return T.g(this.did)
						};
						TemplateNode.prototype.childsElement = function() {
							return T.g(this.cid)
						};
						var defaultOptions = {
							didPrefix : "node",
							fieldIdentifier : "id",
							fieldChilds : "nodes",
							statusClasses : /^(focus|hover|select|expand)$/,
							childsClasses : /^(expand)$/
						};
						function TemplateTree(options) {
							options = options || {};
							for ( var p in defaultOptions) {
								!(p in options)
										&& (options[p] = defaultOptions[p])
							}
							for ( var p in options) {
								this[p] = options[p]
							}
							this.tree = this;
							this.layer = 0;
							this.index = 0;
							this.handler = handler++;
							this.childNodes = [];
							this.focusDid = "";
							this.cid = this.parent;
							addAttr(this.parent, "data-handler", this.handler);
							if (this.oninit) {
								this.oninit(this)
							}
						}
						TemplateTree.prototype.loadChilds = function(datas,
								reserves) {
							if (this.childNodes.length == 0 && datas
									&& datas.length == 0) {
								return
							}
							reserves && this.saveStatus();
							TemplateNode.prototype.loadChilds.call(this, datas,
									true);
							reserves && this.restoreStatus();
							this.refresh()
						};
						TemplateTree.prototype.insertChild = function(data,
								depth) {
							return TemplateNode.prototype.insertChild.call(
									this, data, depth)
						};
						TemplateTree.prototype.appendChild = function(data,
								depth) {
							return TemplateNode.prototype.appendChild.call(
									this, data, depth)
						};
						TemplateTree.prototype.appendChilds = function(datas,
								depth) {
							return TemplateNode.prototype.appendChilds.call(
									this, datas, depth)
						};
						TemplateTree.prototype.updateData = function(data,
								depth) {
							if (!data) {
								return
							}
							var node = this.node4data(data);
							node && node.updateData(data, depth);
							return node
						};
						TemplateTree.prototype.sort = function(depth) {
							if (/^f/.test(typeof depth)) {
								var oldSort = this.onsort;
								this.onsort = depth;
								TemplateNode.prototype.sort.call(this, true,
										false);
								this.onsort = oldSort
							} else {
								TemplateNode.prototype.sort.call(this, depth
										|| /^u/.test(typeof depth), false)
							}
						};
						TemplateTree.prototype.refresh = function() {
							TemplateNode.prototype.refresh.call(this)
						};
						TemplateTree.prototype.removeAll = function() {
							if (!this.childNodes.length) {
								return
							}
							TemplateNode.prototype.removeAll.call(this);
							this.refresh()
						};
						TemplateTree.prototype.removeNode = function(data) {
							if (!data) {
								return
							}
							var node = this.node4data(data);
							node && node.remove()
						};
						TemplateTree.prototype.setFocused = function(data,
								scroll) {
							if (!data) {
								return
							}
							var node = this.node4data(data);
							if (!node || node.did == this.focusDid) {
								return
							}
							var focused = nodeDict[this.focusDid];
							focused && focused.setStatus("focus", false);
							node.setStatus("focus", true);
							if (scroll) {
								var dom = T.g(node.did);
								dom && dom.scrollIntoView(scroll == 1)
							}
							this.focusDid = node.did;
							if (this.onfocus) {
								this.onfocus(node)
							}
						};
						TemplateTree.prototype.getFocused = function() {
							return nodeDict[this.focusDid]
						};
						TemplateTree.prototype.node4data = function(data) {
							if (!data) {
								return
							}
							if (data instanceof TemplateNode
									&& data.tree == this) {
								return data
							}
							var id = typeof data == "string" ? data
									: data[this.fieldIdentifier];
							var did = [ this.didPrefix, this.handler, id ]
									.join("-");
							if (nodeDict[did]) {
								return nodeDict[did]
							}
						};
						TemplateTree.prototype.node4target = function(target) {
							var node = node4target(target);
							if (!node || node.tree != this) {
								return
							}
							return node
						};
						TemplateTree.prototype.each = function(iterator) {
							return TemplateNode.prototype.each.call(this,
									iterator)
						};
						TemplateTree.prototype.saveStatus = function() {
							var status = {};
							this.status = status;
							this.each(function(node) {
								status[node.did] = node.status
							})
						};
						TemplateTree.prototype.restoreStatus = function() {
							if (!this.status) {
								return
							}
							var status = this.status;
							this.each(function(node) {
								if (node.did in status) {
									node.status = status[node.did]
								}
							});
							this.status = null
						};
						exports.create = function(options) {
							return new TemplateTree(options)
						};
						function node4target(target) {
							var result;
							target = T.g(target);
							scanParent(target, function(element) {
								var node = nodeDict[element.id];
								if (node) {
									result = node;
									return false
								}
							});
							return result
						}
						exports.node4target = node4target
					}(AceTree);
					exports.Tree = AceTree;
					return exports
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/util/util.js" ]);
F.module("/static/common/ui/js_core/preload/preload.js", function(e, b) {
	var d = e("/static/common/lib/tangram/base/base.js");
	var a = document.documentElement.style.MozAppearance !== undefined;
	var c = function(g, h) {
		var f = document.body;
		if (d.lang.isString(g)) {
			g = [ g ]
		}
		d.array.each(g, function(i) {
			var j;
			if (!a) {
				j = new Image()
			} else {
				j = document.createElement("object");
				j.style.position = "absolute";
				j.data = i
			}
			j.width = j.height = 0;
			j.onerror = j.onload = function() {
				h(i);
				if (a) {
					d.dom.remove(j)
				}
				j.onerror = j.onload = j = null
			};
			if (!a) {
				j.src = i
			} else {
				d.dom.ready(function() {
					f.appendChild(j)
				})
			}
		})
	};
	b.preload = c;
	return b
}, [ "/static/common/lib/tangram/base/base.js" ]);
F.module("/static/common/ui/js_core/mvp/presenter/presenter.js",
		function(d, b) {
			var c = d("/static/common/lib/tangram/base/base.js");
			var a = d("/static/common/ui/js_core/util/util.js");
			var f = Array.prototype.slice;
			var e = c.lang.createClass(function(g) {
				g = g || {};
				this.options = g;
				c.object.extend(this, g);
				this.cid = a.uniqueId("presenter__")
			}).extend({
				plugin : [],
				_init : function() {
				},
				_plugin : function() {
					var h = this, g = this.plugin, j = "after", i = "before";
					!c.lang.isArray(g) && (g = [ g ]);
					c.array.each(g, function(l, k) {
						if (c.lang.isObject(l)) {
							c.array.each(l, function(n, m) {
								a.punch(h, "init", n, m)
							})
						}
					})
				},
				mediator : null,
				after : function() {
					var g = this.mediator;
					if (g) {
						g.after.apply(g, f.call(arguments))
					}
				},
				before : function() {
					var g = this.mediator;
					if (g) {
						g.before.apply(g, f.call(arguments))
					}
				},
				dispose : function() {
					if (this.mediator) {
						this.mediator.fire("p:dispose")
					}
					this.fire("dispose");
					c.lang.Class.prototype.dispose.call(this)
				}
			});
			b.Presenter = e;
			return b
		}, [ "/static/common/lib/tangram/base/base.js",
				"/static/common/ui/js_core/util/util.js" ]);
F
		.module(
				"/static/common/ui/js_core/mvp/template/template.js",
				function(b, a) {
					var d = {
						evaluate : /<%([\s\S]+?)%>/g,
						interpolate : /<%=([\s\S]+?)%>/g
					};
					var c = function(h, g) {
						var i = d;
						var e = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('"
								+ h
										.replace(/\\/g, "\\\\")
										.replace(/'/g, "\\'")
										.replace(
												i.interpolate,
												function(j, k) {
													return "',"
															+ k.replace(/\\'/g,
																	"'") + ",'"
												})
										.replace(
												i.evaluate || null,
												function(j, k) {
													return "');"
															+ k
																	.replace(
																			/\\'/g,
																			"'")
																	.replace(
																			/[\r\n\t]/g,
																			" ")
															+ "__p.push('"
												}).replace(/\r/g, "\\r")
										.replace(/\n/g, "\\n").replace(/\t/g,
												"\\t")
								+ "');}return __p.join('');";
						var f = new Function("obj", e);
						return g ? f(g) : f
					};
					a.template = c;
					return a
				}, []);
F.module("/static/common/ui/js_core/mvp/view/view.js", function(e, c) {
	var d = e("/static/common/lib/tangram/base/base.js");
	var a = e("/static/common/ui/js_core/util/util.js");
	var f = e("/static/common/ui/js_core/mvp/template/template.js").template;
	var b = /^(\S+)\s*([\s\S]*)$/, g = d.dom.create("div");
	var h = d.lang
			.createClass(
					function(i) {
						i = i || {};
						if (d.lang.isElement(i.el)
								&& d.dom.getAttr(i.el, "data-options")) {
							i = d.object.merge(i, d.json.parse(d.dom.getAttr(
									i.el, "data-options")))
						}
						this.options = i;
						d.object.extend(this, i);
						this._eventStack = [];
						this.cid = a.uniqueId("view__");
						this._ensureElement();
						if (d.lang.isElement(this.el)
								&& d.lang.isObject(this.elements)) {
							this.refreshElements()
						}
						if (d.lang.isElement(this.el)
								&& d.lang.isObject(this.events)) {
							this.delegateEvents()
						}
					}).extend({
				el : null,
				applyEl : null,
				tag : "div",
				elements : null,
				events : null,
				_viewPlugin : {
					format : d.string.format,
					template : f
				},
				_init : function() {
				},
				_ensureElement : function() {
					if (!this.el) {
						var i = this.attr || {};
						this.el = d.dom.create(this.tag, i)
					} else {
						if (d.lang.isString(this.el)) {
							this.el = d.dom.query(this.el)[0]
						}
					}
				},
				delegateEvents : function(i) {
					var j = this;
					if (!(i || (i = this.events))) {
						return false
					}
					d.object.each(i, function(o, n) {
						var m = n.match(b);
						var l = m[1], k = m[2];
						if (k === "") {
							d.on(j.el, l, d.fn.bind(j[o], j))
						} else {
							a.delegate(j.el, k, l, d.fn.bind(j[o], j))
						}
						j._addEventStack(j.el, l)
					});
					return this
				},
				_addEventStack : function(l, i) {
					var m = a.domData, k = d.array.indexOf, j;
					if (!(j = m.get(l, "__events"))) {
						j = []
					}
					if (k(j, i) === -1) {
						j.push(i);
						m.set(l, "__events", j);
						if (k(this._eventStack, l) === -1) {
							this._eventStack.push(l)
						}
					}
				},
				render : function() {
					return this
				},
				appendTo : function() {
					return this
				},
				refreshElements : function(m) {
					var k = m || this.elements, j = [], i, l;
					for (i in k) {
						if (k.hasOwnProperty(i)) {
							l = k[i];
							j.push(this[l] = d.dom.qurey(i, this.el))
						}
					}
					return j
				},
				renderView : function(i, j) {
					if (i.type === null) {
						return i.view
					}
					return this._viewPlugin[i.type](i.view, j)
				},
				unAllEvent : function() {
					var i = a.domData;
					d.array.each(this._eventStack, function(k) {
						var j = i.get(k, "__events");
						d.array.each(j, function(m) {
							try {
								d.event.un(k, m)
							} catch (l) {
							}
						});
						i.remove(k)
					});
					this._eventStack = [];
					return this
				},
				unElementAllEvent : function(k) {
					k = d.dom._g(k);
					var j = d.event._listeners, i = j.length, n, l, m;
					while (i--) {
						n = j[i];
						if (n[0] === k) {
							l = n[4];
							m = n[3];
							if (k.removeEventListener) {
								k.removeEventListener(l, m, false)
							} else {
								if (k.detachEvent) {
									k.detachEvent("on" + l, m)
								}
							}
							j.splice(i, 1)
						}
					}
				},
				removeDom : function(i) {
					if (!d.lang.isElement(i)) {
						return false
					}
					var j = a.domData;
					this.unElementAllEvent(i);
					j.remove(i);
					d.dom.remove(i);
					if (d.browser.ie && d.browser.ie < 9) {
						g.appendChild(i);
						g.innerHTML = ""
					}
					i = null
				},
				dispose : function() {
					this.fire("dispose");
					var i = a.domData;
					this.unAllEvent();
					i.remove(this.el);
					d.dom.remove(this.el);
					if (d.browser.ie && d.browser.ie < 9) {
						g.appendChild(this.el);
						g.innerHTML = ""
					}
					d.lang.Class.prototype.dispose.call(this)
				}
			});
	c.View = h;
	return c
}, [ "/static/common/lib/tangram/base/base.js",
		"/static/common/ui/js_core/util/util.js",
		"/static/common/ui/js_core/mvp/template/template.js" ]);
F.module("/static/common/ui/js_core/mvp/route/route.js", function(b, d) {
	var c = b("/static/common/lib/tangram/base/base.js");
	var a = (function() {
		var o, n, m;
		function q(r) {
			var s = n.contentWindow.document;
			r = r || "#";
			s.open();
			s.write('<script>window.top.location.hash="' + r + '";<\/script>');
			s.close();
			s.location.hash = r
		}
		function p() {
			m && m();
			o = (window.location.hash.replace(/^#/, "") || "")
		}
		function k() {
			var r = location.hash.replace(/^#/, "");
			if (r != o) {
				n ? q(r) : p()
			}
		}
		function l(r) {
			o = ("");
			if (r) {
				m = r
			}
			if (c.browser.ie) {
				n = document.createElement("iframe");
				n.style.display = "none";
				document.body.appendChild(n);
				q(window.location.hash);
				n.attachEvent("onload", function() {
					p()
				});
				setInterval(k, 100)
			} else {
				if (c.browser.firefox < 3.6) {
					setInterval(k, 100)
				} else {
					if (o != location.hash.replace(/^#/, "")) {
						o = (window.location.hash.replace(/^#/, "") || "")
					}
					window.onhashchange = p
				}
			}
		}
		return l
	})();
	var i = [];
	var j = /:([\w\d]+)/g;
	var f = /\*([\w\d]+)/g;
	var e = /[-[\]{}()+?.,\\^$|#\s]/g;
	var h = /^#*/;
	var g = {
		add : function(l, m) {
			var k = this;
			if (c.lang.isObject(l)) {
				c.object.each(l, function(o, n) {
					_slef.add(n, o)
				})
			} else {
				i.push(k._warp(l, m))
			}
		},
		_warp : function(l, m) {
			var k;
			if (typeof l === "string") {
				l = l.replace(e, "\\$&").replace(j, "([^/]*)").replace(f,
						"(.*?)");
				k = new RegExp("^" + l + "$")
			} else {
				k = l
			}
			return {
				route : k,
				callback : m
			}
		},
		getPath : function() {
			return window.location.pathname
		},
		getHash : function() {
			return window.location.hash
		},
		getHost : function() {
			return ((document.location + "").replace(this.getPath()
					+ this.getHash(), ""))
		},
		getFragment : function() {
			return this.getHash().replace(h, "")
		},
		navigate : function() {
			var k = c.lang.toArray(arguments);
			var l = true;
			if (typeof k[k.length - 1] === "boolean") {
				l = k.pop()
			}
			var m = k.join("/");
			if (this.path === m) {
				return
			}
			if (!l) {
				this.path = m
			}
			window.location.hash = m
		},
		change : function(m) {
			var l = this.getFragment();
			if (l === this.path) {
				return
			}
			this.path = l;
			for ( var k = 0; k < i.length; k++) {
				if (this._match(i[k], l)) {
					return
				}
			}
		},
		_match : function(l, m) {
			var k = l.route.exec(m);
			if (!k) {
				return false
			}
			var n = k.slice(1);
			l.callback(n);
			return true
		},
		create : function() {
			var k = this;
			c.dom.ready(function() {
				k.change();
				a(c.fn.bind(k.change, k))
			})
		}
	};
	d.Route = g;
	return d
}, [ "/static/common/lib/tangram/base/base.js" ]);
F.module("/static/common/ui/js_core/mvp/model/model.js", function(e, b) {
	var d = e("/static/common/lib/tangram/base/base.js");
	var a = e("/static/common/ui/js_core/util/util.js");
	var g = Array.prototype.slice;
	var f = d.lang.createClass(function(h, i) {
		this.attributes = d.object.clone(h);
		this.changes = {};
		this.uid = a.uniqueId("model__");
		this.modelList = i
	}).extend({
		attr : function(h, k) {
			var j = d.object.clone(this.attributes);
			if (arguments.length === 0) {
				d.object.extend(j, this.changes);
				return j
			} else {
				if (arguments.length === 2) {
					if (this.attributes[h] === k) {
						delete this.changes[h]
					} else {
						this.changes[h] = k
					}
					return this
				} else {
					if (typeof h === "object") {
						for ( var i in h) {
							this.attr(i, h[i])
						}
						return this
					} else {
						return (h in this.changes) ? this.changes[h] : j[h]
					}
				}
			}
		},
		attrs : function(i) {
			var h = this;
			if (d.lang.isObject(i)) {
				d.object.each(i, function(k, j) {
					h.attr(j, k)
				})
			}
		},
		callPersistMethod : function(l, k) {
			var h = this;
			var i = function() {
				if (l === "create") {
					h.modelList.add(h)
				} else {
					if (l === "destroy") {
						h.modelList.remove(h)
					}
				}
			};
			var j = function(n) {
				if (n) {
					h.merge(h.changes).reset();
					i();
					h.dispatchEvent(l)
				}
				var m;
				if (k) {
					m = k.apply(h, arguments)
				}
				return m
			};
			if (this.modelList._persistence) {
				this.modelList._persistence[l](this, j)
			} else {
				j.call(this, true)
			}
		},
		destroy : function(h) {
			this.callPersistMethod("destroy", h);
			return this
		},
		id : function() {
			return this.attributes[this.modelList.unique_key]
		},
		merge : function(h) {
			a.mix(this.attributes, h);
			return this
		},
		newRecord : function() {
			return this.id() === undefined
		},
		reset : function() {
			this.errors.clear();
			this.changes = {};
			return this
		},
		save : function(i) {
			if (this.valid()) {
				var h = this.newRecord() ? "create" : "update";
				this.callPersistMethod(h, i)
			} else {
				if (i) {
					i(false)
				}
			}
			return this
		},
		valid : function() {
			this.errors.clear();
			this.validate();
			return this.errors.size() === 0
		},
		validate : function() {
			return this
		}
	});
	var c = d.lang.createClass(function(h) {
		h = h || {};
		this.options = h;
		a.mix(this, this.options, true);
		this.collection = [];
		this.uid = a.uniqueId("modelList__");
		this.model = this.model || f;
		this._wrap()
	}).extend(
			{
				unique_key : "id",
				_wrap : function() {
					var h = this, i = [ "each", "every", "filter", "find",
							"hash", "indexOf", "lastIndexOf", "map", "reduce",
							"some", "contains" ];
					d.array.each(i, function(k, j) {
						h[k] = function() {
							var l = g.call(arguments, 0);
							l.unshift(h.collection);
							return d.array[k].apply(h, l)
						}
					});
					this.select = this.find
				},
				chain : function(h) {
					return d.object.extend({}, {
						collection : h
					})
				},
				add : function() {
					var k = [];
					for ( var j = 0; j < arguments.length; j++) {
						var h = arguments[j];
						if (d.lang.isFunction(this.wrapModel)) {
							h = this.wrapModel(h, j)
						}
						h = new this.model(h, this);
						var l = h.id();
						if (d.array.indexOf(h, this.collection) === -1
								&& !(l && this.findId(l))) {
							this.collection.push(h);
							k.push(h)
						}
					}
					if (k.length > 0) {
						this.fire("add", {
							data : k
						})
					}
					return this
				},
				all : function() {
					return this.collection.slice()
				},
				count : function() {
					return this.all().length
				},
				findId : function(h) {
					return this.find(function(i) {
						return i.id() === h
					})
				},
				findIndexOf : function(k) {
					var l, j, m = this.collection, h = m.length;
					if ("function" == typeof k) {
						for (j = 0; j < h; j++) {
							l = m[j];
							if (true === k.call(m, l, j)) {
								return j
							}
						}
					}
					return -1
				},
				first : function() {
					return this.all()[0]
				},
				load : function(i) {
					if (this._persistence) {
						var h = this;
						this._persistence.read.call(this, function(j) {
							if (i) {
								i.call(h, j)
							}
						})
					}
					return this
				},
				last : function() {
					var h = this.all();
					return h[h.length - 1]
				},
				pluck : function(m) {
					var k = this.all();
					var h = [];
					for ( var j = 0, l = k.length; j < l; j++) {
						h.push(k[j].attr(m))
					}
					return h
				},
				persistence : function(h) {
					if (arguments.length == 0) {
						return this._persistence
					} else {
						var i = g.call(arguments, 1);
						i.unshift(this);
						this._persistence = h.apply(h, i);
						return this
					}
				},
				remove : function(j) {
					var h;
					for ( var k = 0, l = this.collection.length; k < l; k++) {
						if (this.collection[k] === j) {
							h = k;
							break
						}
					}
					if (h !== undefined) {
						this.collection.splice(h, 1);
						this.dispatchEvent("remove", {
							data : [ j ]
						});
						return true
					} else {
						return false
					}
				},
				sort : function(i) {
					var h = this.all().sort(i);
					return h
				},
				sortBy : function(j) {
					var h = d.lang.isFunction(j);
					var i = function(k) {
						return j.call(k)
					};
					return this.sort(function(m, k) {
						var n = h ? i(m) : m.attr(j);
						var l = h ? i(k) : k.attr(j);
						if (n < l) {
							return -1
						} else {
							if (n > l) {
								return 1
							} else {
								return 0
							}
						}
					})
				},
				count : function() {
					return this.collection.length
				},
				lastFind : function(k) {
					var h = this.count(), m = this, l, j;
					if (d.lang.isFunction(k)) {
						while (h--) {
							l = this.collection[h];
							if (true === k.call(m, l, h)) {
								return l
							}
						}
					}
					return null
				},
				dispose : function() {
					this.fire("dispose");
					d.lang.Class.prototype.dispose.call(this)
				}
			});
	b.Model = f;
	b.ModelList = c;
	return b
}, [ "/static/common/lib/tangram/base/base.js",
		"/static/common/ui/js_core/util/util.js" ]);
F
		.module(
				"/static/common/ui/js_core/mvp/event/event.js",
				function(f, d) {
					var e = f("/static/common/lib/tangram/base/base.js");
					var b = f("/static/common/ui/js_core/util/util.js");
					var g = {}, h = Array.prototype.slice;
					var c = function() {
						this.pending = [];
						this.afterStack = [];
						this.beforeStack = [];
						this.status = 0;
						this._lock = false;
						this.eventCache = null
					};
					b
							.mix(
									c.prototype,
									{
										_empty : function() {
										},
										then : function(j, i) {
											j = j || this._empty;
											i = i || this._empty;
											this.pending.push({
												resolve : j,
												reject : i
											});
											if (this.status === 1) {
												this.resolve(this.eventCache)
											}
											if (this.status === 2) {
												this.reject()
											}
											return this
										},
										_iterator : function(l, k) {
											for ( var n = 0, m = l.length; n < m; n++) {
												e.lang.isFunction(l[n])
														&& l[n](k)
											}
										},
										_fire : function(j, i) {
											var k;
											this.eventCache = i;
											if (this._lock) {
												return
											}
											if (this.pending[0]) {
												try {
													this.status = 1;
													this
															._iterator(
																	this.beforeStack,
																	i);
													k = e.lang
															.isFunction(this.pending[0][j])
															&& this.pending[0][j]
																	(i);
													this._iterator(
															this.afterStack, i)
												} catch (l) {
													this.status = 2;
													j = "reject";
													i = l;
													e.lang
															.isFunction(this.pending[0][j])
															&& this.pending[0][j]
																	(i)
												}
												this.pending.shift()
											}
											if (this.isDeferred(k)) {
												this._pipe(k, this)
											} else {
												if (this.pending[0]) {
													this._fire(j, i)
												}
											}
											return this
										},
										_pipe : function(j, i) {
											if (j && j.then) {
												j
														.then(
																function() {
																	i
																			.resolve(h
																					.call(arguments))
																},
																function() {
																	i
																			.reject(h
																					.call(arguments))
																})
											}
											return j
										},
										resolve : function(i) {
											this.status = 1;
											this._fire("resolve", i)
										},
										reject : function(i) {
											this.status = 2;
											this._fire("reject", i)
										},
										_getToken : function() {
											return g
										},
										isDeferred : function(i) {
											return e.lang.isObject(i)
													&& e.lang
															.isFunction(i._getToken)
													&& i._getToken() === g
										},
										wait : function(i) {
											return this.then(function() {
												var k = new c(), j = new Date;
												setTimeout(function() {
													k.resolve((new Date)
															.getTime()
															- j.getTime())
												}, i * 1000);
												return k
											})
										},
										start : function() {
											this.resolve.apply(this, arguments)
										},
										parallel : function(s) {
											s = e.lang.isArray(s) ? s : h
													.call(arguments);
											var k = new c(), v = [], q = 0, j = 0, m = s.length, t = this, u, n;
											k._count = k._count || s.length;
											function o(i) {
												return function(l) {
													if (!n) {
														v[i] = l
													}
													if (++j === k._count) {
														n = true;
														k._count = 0;
														k.resolve.call(k, v)
													}
												}
											}
											for (; q < m; q++) {
												u = s[q];
												if (e.lang.isFunction(u)
														&& !t.isDeferred(u)) {
													u = u()
												}
												if (t.isDeferred(u)) {
													u.then(o(q), o(q))
												} else {
													o(q)(u)
												}
											}
											return k
										},
										lock : function() {
											this._lock = true;
											return this
										},
										unlock : function() {
											this._lock = false;
											this.resolve.apply(this, arguments);
											return this
										},
										error : function(i) {
											return this.then(false, i)
										},
										any : function(i) {
											this._count = 1;
											return this
										},
										some : function(i) {
											this._count = i;
											return this
										},
										when : function() {
											return this.parallel.apply(this, h
													.call(arguments))
										},
										clear : function() {
											this.pending.length = 0;
											return this
										},
										after : function() {
											this.afterStack = this.afterStack
													.concat(h.call(arguments));
											return this
										},
										before : function() {
											this.beforeStack = this.beforeStack
													.concat(h.call(arguments));
											return this
										}
									});
					var a = function() {
						this.listeners = {};
						c.apply(this, h.call(arguments))
					};
					e.lang.inherits(a, c);
					b
							.mix(
									a.prototype,
									{
										on : function(j, k, i) {
											if (!j || !k) {
												return false
											}
											if (!this.listeners[j]) {
												this.listeners[j] = []
											}
											if (this._isUnique(j, k, i)) {
												this.listeners[j]
														.push([ k, i ])
											}
											return this
										},
										_findEvent : function(n, p, m) {
											var o = this.listeners[n], k = 0, j = o.length;
											for (; k < j; k++) {
												if (o[k][0] === p
														&& o[k][1] === m) {
													return o[k]
												}
											}
											return null
										},
										_isUnique : function(j, k, i) {
											return this._findEvent(j, k, i) === null ? true
													: false
										},
										off : function(n, p, m) {
											var o = this.listeners[n], k = 0, j = o.length;
											if (!p) {
												o.length = 0;
												return
											}
											for (; k < j; k++) {
												if (o[k][0] === p
														&& o[k][1] === m) {
													o.splice(k, 1)
												}
											}
											return this
										},
										fire : function(o, m) {
											var k = this.listeners[o] ? this.listeners[o].length
													: 0, n = 0, r = new c(), q = this, j;
											m = m || {};
											m.promise = r;
											for (; n < k; n++) {
												this._iterator(
														this.beforeStack, m);
												j = this.listeners[o][n][0]
														.call(
																this.listeners[o][n][1]
																		|| this,
																m);
												this._iterator(this.afterStack,
														m)
											}
											return j
										},
										when : function(m) {
											var l = 0, o = [], k, n;
											m = h.call(arguments);
											for (k = m.length; l < k; l++) {
												n = e.lang.isArray(m[l]) ? m[l]
														: [ m[l] ];
												o
														.push(this.fire.apply(
																this, n))
											}
											return this.parallel(o)
										},
										once : function(j, m, i) {
											var l = this;
											function k() {
												m.apply(i, h.call(arguments));
												l.off(j, k, i)
											}
											this.on(j, k, i);
											return this
										}
									}, true);
					d.deferred = c;
					d.custEvent = a;
					return d
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/ui/js_core/util/util.js" ]);