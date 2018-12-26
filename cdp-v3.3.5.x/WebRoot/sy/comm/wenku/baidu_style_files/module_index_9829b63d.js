F.module("/static/widget/core/featureClass/featureClass.js", function(c, a) {
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
			delay : 0
		},
		_init : function() {
			var g = this;
			g.currentId = 0;
			g.actime = null;
			g.wait = true;
			g.on("onload", function() {
				if (b.lang.isString(g.el)) {
					g.el = b.g(el)
				}
				g.hdElement = b.dom.query("." + g.controlClassName + ">"
						+ g.controlChildTag, g.el);
				g.bdElement = b.dom.query("." + g.contentClassName + ">"
						+ g.contentChildTag, g.el);
				g.len = g.hdElement.length;
				g.currentControl = g.hdElement[0];
				g.currentContent = g.bdElement[0];
				g._action();
				g.addEvent()
			})
		},
		addEvent : function() {
			b.array.each(me.hdElement, function(h, g) {
				b.event.on(h, me.bindEvent, function() {
					if (me.actime) {
						clearTimeout(me.actime)
					}
					me.wait = false;
					me._change(g)
				})
			});
			b.array.each(me.hdElement, function(h, g) {
				b.event.on(h, "mouseout", function() {
					me.currentId = g;
					me.wait = true;
					me._action()
				})
			});
			b.array.each(me.bdElement, function(h, g) {
				b.event.on(h, me.bindEvent, function() {
					if (me.actime) {
						clearTimeout(me.actime)
					}
				})
			});
			b.array.each(me.bdElement, function(h, g) {
				b.event.on(h, "mouseout", function() {
					me._action()
				})
			})
		},
		_change : function(g) {
			me._disable(me.currentControl, me.currentContent);
			me._current(me.hdElement[g], me.bdElement[g]);
			me._action();
			return this
		},
		_action : function() {
			me = this;
			if (me.actime) {
				clearTimeout(me.actime)
			}
			if (me.wait) {
				me.actime = setTimeout(me.gotoIndex, me.delay)
			}
			return this
		},
		_current : function(h, g) {
			h.className = "current";
			g.className = "current";
			me.currentControl = h;
			me.currentContent = g;
			this.lazyImg(g);
			return this
		},
		_disable : function(h, g) {
			h.className = "";
			g.className = "disabled";
			return this
		},
		lazyImg : function(g) {
			var i = b.q("lazyImg", g), h = "";
			if (i && i.length) {
				h = b.dom.getAttr(i[0], "data-lazyload-src");
				i[0].src = h;
				b.dom.removeClass(i[0], "lazyImg")
			}
		},
		gotoIndex : function() {
			me.currentId++;
			if (me.currentId >= me.len) {
				me.currentId = 0
			}
			if (me.hdElement[me.currentId]) {
				me._change(me.currentId)
			}
			return this
		}
	});
	var f = function(g) {
		var h = new d(g);
		h.fire("onload");
		return h
	};
	a.imgTabs = d;
	a.imgTabsCreate = f;
	return a
}, [ "/static/common/lib/tangram/base/base.js",
		"/static/common/ui/js_core/widget/widget.js" ]);
F
		.module(
				"/static/widget/core/hotRead/hotRead.js",
				function(c, a) {
					var b = c("/static/common/lib/tangram/base/base.js"), h = c("/static/common/lib/fis/data/data.js"), f = c("/static/common/ui/js_core/log/log.js"), d = c(
							"/static/common/ui/js_core/dialog/dialog.js")
							.dialogCreate(), e = {
						sortHtml : '<div class="step-box"><p id="error" class="err">&nbsp;</p><a href="#" class="bt ui-btn ui-btn-32-light mr" id="lastStep"><b class="btc"><b class="btText">\u4e0a\u4e00\u6b65</b></b></a><a href="#" class="bt ui-btn ui-btn-32-green" id="OK"><b class="btc"><b class="btText">\u786e\u5b9a</b></b></a></div>',
						titleHtml : '\u6392\u5e8f<span class="mark">\uff08\u62d6\u52a8\u6392\u5e8f\u6765\u51b3\u5b9a\u5c55\u793a\u7684\u987a\u5e8f\uff09</span>',
						classStyle : [ "bt ui-btn ui-btn-32-disabled",
								"bt ui-btn ui-btn-32-green" ],
						setpHtml : '<div class="step-box"><p id="error">&nbsp;</p><div><a id ="nextStep" class="bt ui-btn ui-btn-32-disabled" href="#"><b class="btc"><b class="btText">\u4e0b\u4e00\u6b65</b></b></a></div></div>',
						maskHtml : '<div id="dragMask" onselectstart="return false;" style="position:absolute;width:100%;height:100%;"></div>'
					}, g = {};
							sortDialog = function(i) {
								d
										.pop({
											title : i.title,
											width : i.width,
											content : i.content,
											onRendered : function() {
												b.g("WkDialogBtn").style.display = "none";
												setdragMask();
												subscribe("WkDialogCon",
														i.source);
												tipAndReturnArr();
												closePop()
											},
											onClosed : function() {
												cancelDragMask();
												b.g("WkDialogWrap").style.display = "none"
											}
										})
							},
							setdragMask = function() {
								cancelDragMask();
								var i = b.dom.g("mask").getElementsByTagName(
										"iframe")[0];
								b.dom.insertHTML(i, "afterEnd", e.maskHtml)
							},
							cancelDragMask = function() {
								if (el = b.dom.g("dragMask")) {
									b.dom.remove(el)
								}
							},
							fromJsData = function(o, k) {
								var l = [];
								var k = k.split(",");
								var q = "";
								for ( var n = 0; n < o.length; n++) {
									var r = "<dt>" + o[n].title + "</dt>";
									var p = "";
									for ( var m = 0; m < o[n].classInfo.length; m++) {
										q = b.array.contains(k,
												o[n].classInfo[m].cid) ? "btndom"
												: "";
										p += '<a cid="' + o[n].classInfo[m].cid
												+ '" vtitle="'
												+ o[n].classInfo[m].name
												+ '" class="' + q + '">'
												+ o[n].classInfo[m].name
												+ "<span></span></a>"
									}
									r += "<dd>" + p + "</dd>";
									l.push(r)
								}
								var s = '<dl class="classList clearfix">'
										+ l.join("") + "</dl>" + e.setpHtml;
								return s
							},
							tipAndReturnArr = function() {
								var p = b.q("classList")[0]
										.getElementsByTagName("A");
								var o = p.length;
								var q = b.g("error");
								var k = b.g("nextStep");
								var s = [];
								var n = [];
								var r = [];
								for ( var m = 0; m < o; m++) {
									if (p[m].className.indexOf("btndom") > -1) {
										s.push({
											cid : p[m].getAttribute("cid"),
											vtitle : p[m]
													.getAttribute("vtitle")
										})
									}
									if (p[m].getAttribute("tag") == "1") {
										n.push(p[m].getAttribute("cid"))
									}
									if (p[m].getAttribute("tag") == "0") {
										r.push(p[m].getAttribute("cid"))
									}
								}
								if (s.length <= 2) {
									q.innerHTML = "\u8bf7\u81f3\u5c11\u9009\u62e93\u4e2a\u5206\u7c7b";
									k.className = e.classStyle[0];
									return {
										selectArr : s
									}
								} else {
									if (s.length == 10) {
										for ( var l = 0; l < o; l++) {
											if (p[l].className
													.indexOf("btndom") == -1) {
												p[l].className = "disabled"
											}
										}
										q.innerHTML = "\u81f3\u591a\u8ba2\u960510\u4e2a\u5185\u5bb9";
										k.className = e.classStyle[1];
										return {
											selectArr : s,
											addArr : n,
											reduceArr : r
										}
									} else {
										for ( var l = 0; l < o; l++) {
											if (p[l].className
													.indexOf("btndom") == -1) {
												p[l].className = ""
											}
										}
										q.innerHTML = "&nbsp;";
										k.className = e.classStyle[1];
										return {
											selectArr : s,
											addArr : n,
											reduceArr : r
										}
									}
								}
							},
							subscribe = function(k, i) {
								var j = b.dom.query(".classList a", b.g(k));
								b.array
										.each(
												j,
												function(m, l) {
													b.event
															.on(
																	m,
																	"mouseover",
																	function() {
																		if (this.className
																				.indexOf("disabled") > -1) {
																			return false
																		}
																		if (this.className
																				.indexOf("btndom") > -1) {
																			var o = '\u70b9\u51fb\u53d6\u6d88!<span class="arrow"></span>';
																			var n = document
																					.createElement("B");
																			n.id = "newTips";
																			n.innerHTML = o;
																			this
																					.appendChild(n);
																			n.style.top = -(n.offsetHeight + 5)
																					+ "px";
																			n.style.left = (this.offsetWidth - n.offsetWidth)
																					/ 2
																					+ "px";
																			var p = b.dom
																					.q(
																							"arrow",
																							n)[0];
																			p.style.top = n.offsetHeight
																					- 2
																					+ "px";
																			p.style.left = (n.offsetWidth - p.offsetWidth)
																					/ 2
																					+ "px";
																			return false
																		}
																		this.className = "btnover"
																	});
													b.event
															.on(
																	m,
																	"mouseout",
																	function() {
																		b.dom
																				.removeClass(
																						this,
																						"btnover");
																		if (el = b.dom
																				.g("newTips")) {
																			b.dom
																					.remove(el)
																		}
																	});
													b.event
															.on(
																	m,
																	"click",
																	function() {
																		if (this.className
																				.indexOf("disabled") > -1) {
																			return false
																		}
																		var n = b.array
																				.contains(
																						i
																								.split(","),
																						this
																								.getAttribute("cid"));
																		if (this.className
																				.indexOf("btndom") > -1) {
																			this.className = "";
																			if (n) {
																				this
																						.setAttribute(
																								"tag",
																								"0")
																			} else {
																				this
																						.removeAttribute("tag")
																			}
																			if (el = b
																					.g("newTips")) {
																				b.dom
																						.remove(el)
																			}
																			tipAndReturnArr();
																			return false
																		}
																		if (n) {
																			this
																					.removeAttribute("tag")
																		} else {
																			this
																					.setAttribute(
																							"tag",
																							"1")
																		}
																		this.className = "btndom";
																		tipAndReturnArr()
																	})
												});
								if (b.g("nextStep")) {
									b
											.on(
													"nextStep",
													"click",
													function(r) {
														b.event.stop(r);
														var p = tipAndReturnArr();
														if (p.selectArr.length <= 2) {
															return
														}
														var m = i.split(",");
														var q = p.addArr
																.concat(m);
														for ( var o = 0; o < p.reduceArr.length; o++) {
															b.array
																	.remove(
																			q,
																			p.reduceArr[o])
														}
														if (q) {
															var s = b
																	.g("WkDialogCon").innerHTML;
															var n = "";
															for ( var o = 0; o < q.length; o++) {
																if (getValue(
																		p.selectArr,
																		q[o])) {
																	n += '<li class="sort" cid="'
																			+ q[o]
																			+ '">'
																			+ getValue(
																					p.selectArr,
																					q[o])
																			+ "</li>"
																}
															}
															var l = '<ul class="user_select_none sortTable">'
																	+ n
																	+ "</ul>"
																	+ e.sortHtml;
															b.g("WkDialogCon").innerHTML = l;
															b.g("WkDialogTit").innerHTML = e.titleHtml;
															sortable("WkDialogCon");
															doRequest(
																	"WkDialogCon",
																	s, i);
															d.drawSize();
															g.dataArr = p
														}
													})
								}
								if (el = b.g("xclose")) {
									b.event.on(el, "click", function() {
										cancelDragMask();
										d.hide()
									})
								}
							},
							getValue = function(j, l) {
								for ( var k = 0; k < j.length; k++) {
									if (j[k]["cid"] == l) {
										return j[k].vtitle
									}
								}
							},
							closePop = function() {
								if (b.g("pop")) {
									b.event.fire(b.g("pop"), "click")
								}
							},
							sortable = function(j) {
								var s = {
									x : 0,
									y : 0
								};
								var w = {
									x : 0,
									y : 0,
									x1 : 0,
									y1 : 0
								};
								var l = {
									x : 0,
									y : 0,
									x1 : 0,
									y1 : 0
								};
								var o = null, n = false;
								var k = 0, u = 0, v = 0;
								tarFirstY = 0;
								var t = null, x, p;
								var r = function(y) {
									switch (y.type) {
									case "mouseover":
										this.className = "sorthover";
										break;
									case "mouseout":
										this.className = "sort";
										break;
									default:
										return
									}
								};
								b.on("WkDialog", "mousedown", function(z) {
									var y = b.event.getTarget(z);
									if (!b.dom.hasClass(y, "sort")) {
										b.event.stop(z)
									}
								});
								b
										.element(b.dom.query(".sort"))
										.each(
												function(y) {
													b.event.on(y, "mouseover",
															r);
													b.event
															.on(y, "mouseout",
																	r);
													b.event
															.on(
																	y,
																	"mousedown",
																	function(z) {
																		b.event
																				.un(
																						y,
																						"mouseover",
																						r);
																		b.event
																				.un(
																						y,
																						"mouseout",
																						r);
																		o = this;
																		s.x = b.event
																				.getPageX(z)
																				- o.offsetLeft;
																		s.y = b.event
																				.getPageY(z)
																				- o.offsetTop;
																		u = o.offsetHeight;
																		v = u / 2;
																		n = true;
																		b.dom
																				.setAttr(
																						o,
																						"class",
																						"sortdown");
																		b.dom
																				.insertHTML(
																						o,
																						"afterEnd",
																						"<li class='dash'></li>");
																		b.event
																				.on(
																						document,
																						"mousemove",
																						i);
																		b.event
																				.on(
																						document,
																						"mouseup",
																						q);
																		return false
																	})
												});
								function m() {
									b.event.on(b.g("mask"), "mouseup", m)
								}
								function i(y) {
									if (!n) {
										return false
									}
									w.x = b.event.getPageX(y) - s.x;
									w.y = b.event.getPageY(y) - s.y;
									var A = o.parentNode;
									w.x = Math.max(-A.offsetLeft, w.x);
									w.x = Math.min(
											o.parentNode.parentNode.offsetWidth
													- A.offsetLeft
													- o.offsetWidth, w.x);
									w.y = Math.max(-A.offsetTop, w.y);
									w.y = Math
											.min(
													o.parentNode.parentNode.offsetHeight
															- o.offsetHeight
															- 20, w.y);
									w.y1 = w.y + u;
									if (o.setCapture) {
										o.setCapture()
									} else {
										if (window.captureEvents) {
											window
													.captureEvents(Event.MOUSEMOVE
															| Event.MOUSEUP)
										}
									}
									b.dom.setStyles(o, {
										left : w.x,
										top : w.y
									});
									var z = b.element(b.dom.query(".sort"));
									p = b.dom.q("dash", b.dom.g(j), "li")[0];
									z.each(function(B) {
										t = this;
										l.x = t.offsetLeft;
										l.y = t.offsetTop;
										l.y1 = l.y + t.offsetHeight / 2;
										x = z._dom[0];
										tarFirstY = x.offsetTop + v;
										if (w.y <= tarFirstY) {
											b.dom.insertBefore(p, x)
										}
										if (w.y >= l.y - v && w.y1 >= l.y1) {
											b.dom.insertAfter(p, t)
										}
									})
								}
								function q() {
									b.event.un(document, "mousemove", i);
									if (!o) {
										return false
									}
									if (!p) {
										b.dom.setAttr(o, "class", "sort");
										p = b.dom.q("dash", b.dom.g(j), "li")[0];
										b.dom.remove(p);
										p = null;
										o = null;
										n = false;
										b.element(b.dom.query(".sort")).each(
												function(y) {
													b.event.on(y, "mouseover",
															r);
													b.event
															.on(y, "mouseout",
																	r)
												});
										return false
									}
									if (o.releaseCapture) {
										o.releaseCapture()
									} else {
										if (window.captureEvents) {
											window
													.captureEvents(Event.MOUSEMOVE
															| Event.MOUSEUP)
										}
									}
									b.dom.insertBefore(o, p);
									b.dom.setAttr(o, "class", "sort");
									o.removeAttribute("style");
									b.dom.remove(p);
									b.element(b.dom.query(".sort")).each(
											function(y) {
												b.event.on(y, "mouseover", r);
												b.event.on(y, "mouseout", r)
											});
									n = false;
									p = null;
									o = null
								}
							},
							doRequest = function(k, j, i) {
								if (el = b.g("lastStep")) {
									b.event
											.on(
													el,
													"click",
													function(l) {
														b.event.stop(l);
														b.g(k).innerHTML = j;
														b.g("WkDialogTit").innerHTML = '\u5b9a\u5236\u5206\u7c7b<span class="mark">\uff08\u9009\u62e9\u60a8\u60f3\u5b9a\u5236\u7684\u5206\u7c7b\uff09</span>';
														subscribe(
																"WkDialogCon",
																i)
													})
								}
								if (el = b.g("OK")) {
									b.event
											.on(
													el,
													"click",
													function(p) {
														b.event.stop(p);
														var l = b.dom
																.g(k)
																.getElementsByTagName(
																		"li");
														var m = [];
														for ( var n = 0; n < l.length; n++) {
															m
																	.push(l[n]
																			.getAttribute("cid"))
														}
														var q = m.join(",");
														var o = "class_list="
																+ q
																+ "&ct=20055";
														b.ajax
																.post(
																		"/submit",
																		o,
																		function(
																				t,
																				s) {
																			var r = b.json
																					.parse(s);
																			if (r.error_no == "0") {
																				if (g.dataArr.addArr.length != 0
																						|| g.dataArr.reduceArr.length != 0) {
																					f
																							.send(
																									"home",
																									"homeact",
																									{
																										setclass : g.dataArr.addArr
																												.join(","),
																										delclass : g.dataArr.reduceArr
																												.join(",")
																									})
																				}
																				if (b
																						.g("error")) {
																					b
																							.g("error").innerHTML = "\u63d0\u4ea4\u6210\u529f\uff01";
																					b
																							.g("error").style.display = "block";
																					setTimeout(
																							function() {
																								location.href = "/"
																							},
																							1000)
																				}
																				return
																			}
																			b.dom
																					.g("error").innerHTML = h
																					.get("WkInfo").errMsg[r.error_no];
																			b.dom
																					.g("error").style.display = ""
																		})
													})
								}
							};
					a.sortDialog = sortDialog;
					a.fromJsData = fromJsData;
					return a
				}, [ "/static/common/lib/tangram/base/base.js",
						"/static/common/lib/fis/data/data.js",
						"/static/common/ui/js_core/log/log.js",
						"/static/common/ui/js_core/dialog/dialog.js" ]);
F
		.module(
				"/static/widget/core/userInfo/userInfo.js",
				function(e, c) {
					var d = e("/static/common/lib/tangram/base/base.js"), b = function(
							f) {
						var h = "", g = function(p, j, o) {
							var k = d.string.getByteLength(p), n = k - j, m = 0, i = 0;
							if (n > 0) {
								return g(p.slice(0, -Math.ceil(n / 2)), j, true)
							} else {
								p.replace(/[A-Z%]/g, function(q, l) {
									m++
								});
								i = Math.ceil(0.5 * m);
								p = i > 0 ? (p.slice(0, -i)) : p;
								return p + (o ? "..." : "")
							}
						};
//						d.ajax
//								.get(
//										"/browse/vw",
//										function(m, l) {
//											if (l && (l = d.json.parse(l))) {
//												if (l.flag == 1) {
//													for ( var k = 0, j = l.data.length; k < j; k++) {
//														h += d.string
//																.format(
//																		'<li><span>#{page}\u9875</span><a href="/view/#{docId}.html" title="#{docTitle}" target="_blank" data-logsend=\'{"send":["home","homeclk",{"subtype":"view"}]}\' class="logSend">#{docTitleCut}</a></li>',
//																		{
//																			page : l.data[k].page,
//																			docId : l.data[k].doc_id,
//																			docTitle : l.data[k].title,
//																			docTitleCut : g(
//																					l.data[k].title,
//																					22)
//																		})
//													}
//													f.innerHTML = h
//												}
//											}
//										})
					}, a = function(h) {
						if (el = d.g("browse")) {
							var j = el.getElementsByTagName("H4")[0];
							var g = el.getElementsByTagName("LI");
							d.event.on(el, "mouseenter", function() {
								if (g.length > 0) {
									j.className = "hover"
								}
							});
							d.event.on(el, "mouseleave", function() {
								if (g.length > 0) {
									j.className = "";
									el = null
								}
							});
							d.event
									.on(
											"clearBrowse",
											"click",
											function(l) {
												d.event.stop(l);
												var k = "atype=cleanRecentView";
												d.ajax
														.get(
																"/async?" + k,
																onsuccess = function() {
																	var m = d
																			.q("record");
																	m[0].innerHTML = '<p class="c-gray9">\u8bb0\u5f55\u4e3a\u7a7a\uff0c\u53bb\u770b\u770b\u4f60\u611f\u5174\u8da3\u7684\u6587\u6863\u5427\u3002</p>';
																	j.className = ""
																})
											})
						}
						if (el = d.g("mywk")) {
							var i = el.getElementsByTagName("H4")[0];
							var f = el.getElementsByTagName("LI");
							d.event.on(el, "mouseenter", function() {
								if (f.length > 0) {
									i.className = "hover"
								}
							});
							d.event.on(el, "mouseleave", function() {
								if (f.length > 0) {
									i.className = "";
									el = null
								}
							})
						}
					};
					c.clearData = a;
					c.loadData = b;
					return c
				}, [ "/static/common/lib/tangram/base/base.js" ]);
F
		.module(
				"/static/core/ui/lazyLoadImage/lazyLoadImage.js",
				function(d, b) {
					var c = d("/static/common/lib/tangram/base/base.js");
					var a = function(e) {
						e = e || {};
						e.preloadHeight = e.preloadHeight || 0;
						c.dom
								.ready(function() {
									var j = document
											.getElementsByTagName("IMG"), k = j, l = j.length, h = 0, o = g(), n = "data-lazyload-src", m, p;
									if (e.className) {
										k = [];
										for (; h < l; ++h) {
											if (c.dom.hasClass(j[h],
													e.className)) {
												k.push(j[h])
											}
										}
									}
									function g() {
										return c.page.getScrollTop()
												+ c.page.getViewHeight()
												+ e.preloadHeight
									}
									for (h = 0, l = k.length; h < l; ++h) {
										m = k[h];
										if (c.dom.getPosition(m).top < o) {
											if (p = m.getAttribute(n)) {
												m.src = p
											}
										}
									}
									var f = function() {
										var r = g(), t, u = true, s = 0, q = k.length;
										for (; s < q; ++s) {
											m = k[s];
											t = m.getAttribute(n);
											t && (u = false);
											if (c.dom.getPosition(m).top < r
													&& t) {
												m.src = t;
												m.removeAttribute(n);
												c.lang.isFunction(e.onlazyload)
														&& e.onlazyload(m)
											}
										}
										u && c.un(window, "scroll", f)
									};
									c.on(window, "scroll", f)
								})
					};
					b.lazyLoadImage = a;
					return b
				}, [ "/static/common/lib/tangram/base/base.js" ]);