var ALog = ALog || {};
void function(N) {
	var q = Math, c = window, C = document, L = parseInt;
	var E = /msie \d+/i.test(navigator.userAgent), K, g = "alog-", z = g
			+ "alias", F = g + "action", m = g + "group", a = g + "param", M = g
			+ "extra", e = g + "text";
	var x = {}, v = {
		count : 0,
		items : []
	}, b = [], J = {}, p = N.configs || {}, G, r = (+new Date).toString(36)
			+ (q.random().toFixed(8).substr(2)).toString(36);
	N.errors = v;
	N.configs = p;
	N.times = x;
	N.sid = r;
	function l(S) {
		x[S] = +new Date
	}
	N.mark = l;
	function s() {
		if (K) {
			return
		}
		K = {};
		"AdivBliCaDulEdlFddGspanHtableIbodyJtrKsectionLtdMolNpOarticlePdtQformRimgSh3TinputUasideViWbXthYemZfont"
				.replace(/([A-Z])([a-z]+)/g, function(U, S, T) {
					K[K[S] = T] = S
				})
	}
	function y(V, U, W, T) {
		if (!V || V.nodeType != 1) {
			return ""
		}
		var S = (/^[^u]/.test(typeof V.getAttribute) && V.getAttribute(U))
				|| "";
		if ("#" == S) {
			S = "[id]"
		} else {
			if ("." == S) {
				S = "[class]"
			}
		}
		S.replace(/\[([\w-_]+)\]/, function(Y, X) {
			S = V.getAttribute(X)
		});
		T && (T.target = V);
		return S || (W && y(V.parentNode, U, 1, T)) || ""
	}
	function n(V, S, Y) {
		Y && s();
		S = S || C.body;
		if (!V || V == S || /^body$/i.test(V.tagName)) {
			return ""
		}
		if (V.nodeType != 1 || /html/i.test(V.tagName)) {
			return V.tagName || ""
		}
		var U = y(V, z), X = 1, W = V.previousSibling, T = V.nodeName
				.toLowerCase();
		while (W) {
			X += W.nodeName == V.nodeName;
			W = W.previousSibling
		}
		U = (Y && K[T] || T) + (X < 2 ? "" : X) + (U && "(" + U + ")");
		return V.parentNode == S ? U : n(V.parentNode, S, Y)
				+ (/^[A-Z]/.test(U) ? "" : "-") + U
	}
	function I(T, S) {
		return n(T, S, 1)
	}
	N.getXPath = I;
	function A(T, S) {
		return y(T, F, true, S)
	}
	N.getAction = A;
	function o(S) {
		return y(S, m, true)
	}
	N.getGroup = o;
	function Q(S) {
		return y(S, M, true)
	}
	N.getExtra = Q;
	function h(S) {
		return y(S, a)
	}
	N.getParam = h;
	function d(S) {
		return y(S, e)
	}
	N.getText = d;
	function P(U, W) {
		if (!U || !W) {
			return
		}
		u("report", W);
		var X = new Image(1, 1), S = [], T = "img_" + (+new Date);
		for ( var V in W) {
			if (W[V]) {
				S.push(V + "=" + encodeURIComponent(W[V]))
			}
		}
		N[T] = X;
		X.onload = X.onerror = function() {
			N[T] = X = X.onload = X.onerror = null;
			delete N[T]
		};
		X.src = U + "?" + S.join("&")
	}
	N.report = P;
	function u(T, W) {
		var V = J[T], S = 0;
		if (!V) {
			return
		}
		var U = V.length;
		while (U--) {
			if (V[U](W, T)) {
				S++
			}
		}
		return S
	}
	N.fire = u;
	function B(V, T, W, S) {
		if (!V) {
			return
		}
		try {
			S && S.push([ V, T, W ]);
			if (V == N) {
				J[T] = J[T] || [];
				J[T].unshift(W);
				return
			}
			if (V.addEventListener) {
				V.addEventListener(T, W, false)
			} else {
				if (V.attachEvent) {
					V.attachEvent("on" + T, W)
				}
			}
		} catch (U) {
		}
	}
	N.on = B;
	function D(V, S, Y) {
		if (!V) {
			return
		}
		try {
			if (V instanceof Array) {
				for ( var X; X = V.pop();) {
					D.apply(this, X)
				}
				return
			}
			if (V == N) {
				var W = J[S];
				if (!W) {
					return
				}
				var U = W.length;
				while (U--) {
					if (W[U] === Y) {
						W.splice(U, 1)
					}
				}
				return
			}
			if (V.removeEventListener) {
				V.removeEventListener(S, Y, false)
			} else {
				V.detachEvent && V.detachEvent("on" + S, Y)
			}
		} catch (T) {
		}
	}
	N.un = D;
	function k(S) {
		s();
		return S.replace(/\(([^)]+)\)/g, "").replace(/[A-Z]/g, function(T) {
			return "-" + K[T]
		}).replace(/^-/, "")
	}
	N.epath = k;
	function H(S, T) {
		if (!T) {
			return p[S]
		}
		p[S] = p[S] || [];
		if (T instanceof Array) {
			p = p[S].concat(T)
		} else {
			p[S].push(T)
		}
	}
	N.config = H;
	function i(T, W) {
		var V = T.getBoundingClientRect(), S = O(T);
		function U(Y, X) {
			return String(
					+q.min(q.max(Y / X, 0), 1).toFixed(
							X < 36 ? 1 : (X < 351 ? 2 : 3))).replace(/^0\./g,
					".")
		}
		return [ U(W[0] - V.left, S[0]), U(W[1] - V.top, S[1]) ]
	}
	N.ep = i;
	function O(S) {
		var T = S.getBoundingClientRect();
		return [ L(T.right - T.left), L(T.bottom - T.top) ]
	}
	function t() {
		var T = O(C.documentElement), S = O(C.body);
		return [
				q.max(T[0], S[0], c.innerWidth || 0,
						C.documentElement.scrollWidth || 0),
				q.max(T[1], S[1], c.innerHeight || 0,
						C.documentElement.scrollHeight || 0) ]
	}
	N.ps = t;
	function f() {
		return [
				q.max(C.documentElement.scrollLeft || 0,
						C.body.scrollLeft || 0,
						(C.defaultView && C.defaultView.pageXOffset) || 0),
				q.max(C.documentElement.scrollTop || 0, C.body.scrollTop || 0,
						(C.defaultView && C.defaultView.pageYOffset) || 0),
				c.innerWidth || C.documentElement.clientWidth
						|| C.body.clientWidth || 0,
				c.innerHeight || C.documentElement.clientHeight
						|| C.body.clientHeight || 0 ]
	}
	N.vr = f;
	function R(T, S) {
		switch (T) {
		case "group":
			m = S;
			break;
		case "alias":
			z = S;
			break;
		case "action":
			F = S;
			break;
		case "param":
			a = S;
			break;
		case "extra":
			M = S;
			break
		}
	}
	N.an = R;
	function j() {
		if (G) {
			return
		}
		G = true;
		l("ult");
		if (u("unload")) {
			isSleep = new Date;
			while (new Date - isSleep < 100) {
			}
		}
	}
	B(c, "beforeunload", j);
	B(c, "unload", j);
	function w(U, T, S) {
		v.count++;
		if (v.items.length <= 9) {
			v.items.push([ U, T, S, +new Date ])
		}
		u("error", v)
	}
	N.error = w;
	B(c, "error", w)
}(ALog);
var Monkey = Monkey || {};
void function(I) {
	var e = window, C = document;
	var M, p, L = "monkey", b = [ [ "mousedown", "d" ], [ "focusout", "o" ],
			[ "blur", "o", e ], [ "focusin", "i" ], [ "focus", "i", e ],
			[ "scroll", "s", e ], [ "resize", "e", e ] ], q, h, r, d = [], f, o, c, J, j, g, z, k, i, n, x, H, A, l = {}, D = {}, a = e.ALog, F;
	function K(R) {
		if (!R) {
			return
		}
		var P, Q = {
			ts : O().toString(36)
		};
		for (P in l) {
			Q[P] = l[P]
		}
		for (P in R) {
			Q[P] = R[P]
		}
		t("report", Q);
		a.report(M.postUrl, Q)
	}
	function G(Q, R) {
		if (!Q) {
			return
		}
		var P = {
			cmd : "action",
			ac : Q,
			param : R
		};
		t("action", P);
		K(P)
	}
	I.push = G;
	function v(P, Q) {
		P && (l[P] = Q)
	}
	I.set = v;
	function y(Q, R, P) {
		a.on(a, L + "." + Q, R, P)
	}
	I.on = y;
	function O() {
		return new Date - h
	}
	function N(P) {
		while (P) {
			if (/^(a|button)$/i.test(P.tagName)) {
				return P
			}
			P = P.parentNode
		}
	}
	function m() {
		switch (p.refer) {
		case 1:
		case true:
			return C.referrer;
		case 2:
			var P = C.referrer;
			if (!P) {
				return
			}
			var Q = "";
			P.replace(/(^\w+:\/\/)?([^\/]+)/, function(S, R) {
				Q = R
			});
			if (C.location.host == Q) {
				return C.referrer
			}
			return Q
		}
	}
	function E(R, ae, ac) {
		var ag = ae.target || ae.srcElement;
		switch (R) {
		case "d":
			if (!ag) {
				return
			}
			J++;
			var P = {}, T = N(ag), Y = a.getAction(ag, P), ab = "", W = a
					.getText(ag);
			if (T) {
				if (/^a$/i.test(T.tagName)) {
					if (p.click) {
						ab = T.getAttribute("href", 2);
						if (/^(javascript|#)/i.test(ab)) {
							ab = ""
						}
					}
					j++
				} else {
					g++
				}
				if (p.click) {
					W = W || a.getText(T) || T.title
							|| T.innerHTML.replace(/<[^>]*>|\s/g, "")
				}
			} else {
				if (/input/i.test(ag.tagName)
						&& /button|radio|checkbox|submit/i.test(ag.type)) {
					T = ag;
					g++;
					W = W || ag.value
				}
			}
			if (/img/i.test(ag.tagName)) {
				k++;
				W = W || ag.alt || ag.title || ag.src
			}
			if ((!T && !Y) || !p.click) {
				break
			}
			if (p.onlylink && /input|button/i.test(ag.tagName)) {
				break
			}
			z++;
			var X = ac ? ac.path + "/" + F(ag, ac.doc) : F(ag), U = a
					.getGroup(ag), Q = a.getExtra(ag), S = a.getParam(P.target), aa = a
					.ep(ag, [ ae.clientX, ae.clientY ]), ah = ag.ownerDocument, V = ah.body, ad = [
					0, 0 ];
			if (ae.pageX || ae.pageY) {
				ad = [ ae.pageX, ae.pageY ]
			} else {
				if (ae.clientX || ae.clientY) {
					ad = [
							ae.clientX
									+ (ah && ah.scrollLeft || V && V.scrollLeft || 0)
									- (ah && ah.clientLeft || V && V.clientLeft || 0),
							ae.clientY
									+ (ah && ah.scrollTop || V && V.scrollTop || 0)
									- (ah && ah.clientTop || V && V.clientTop || 0) ]
				}
			}
			var af = {
				xp : X,
				g : U,
				gx : Q,
				ac : Y,
				ep : aa,
				ci : z,
				pp : ad,
				ps : a.ps(),
				param : S,
				u : String(ab || "none").substr(0, 200),
				txt : String(W || "none").substr(0, 30)
			};
			if (p.vr) {
				af.vr = a.vr()
			}
			t("click", af);
			K(af);
			break;
		case "o":
			n = O();
			x = 1;
			break;
		case "i":
			H += O() - n;
			n = O();
			x = 0;
			break;
		case "s":
		case "e":
			var Z = a.vr();
			A = Math.max(Z[1] + Z[3], A);
			break
		}
		if (p.iframe && /[dio]/.test(R)) {
			o = O();
			if (c) {
				clearInterval(c)
			} else {
				B()
			}
			c = setInterval(function() {
				if (O() - o > 2000) {
					clearInterval(c);
					c = 0
				}
				B()
			}, 1000)
		}
	}
	function B(W, T, S, Q, U, V) {
		W = C.getElementsByTagName("iframe");
		for (S = 0; S < W.length; S++) {
			T = W[S];
			try {
				var P = String(T.src).replace(/^\w+:\/\/([^\/]+).*$|.*/, "$1");
				if ((!P || P == C.location.hostname) && !T.contentWindow[f]) {
					T.contentWindow[f] = 1;
					V = T.contentWindow.document;
					for (Q = 0; (U = b[Q]) && Q < 5; Q++) {
						a.on(U[2] ? T.contentWindow : V, U[0], (function(X, Z,
								Y) {
							return function(aa) {
								E(X, aa, {
									path : Z,
									doc : Y
								})
							}
						})(U[1], F(T), V), d)
					}
				}
			} catch (R) {
			}
		}
	}
	function u(Q) {
		if (!window.ALog || h || e.frameElement
				|| !document.body.getBoundingClientRect) {
			return
		}
		a = ALog;
		Q = Q || [];
		if (!(Q instanceof Array)) {
			Q = [ Q ]
		}
		var R, S, P, T = [].concat(Q);
		while (M = T.pop()) {
			if (M.page = M.page || M.getPage()) {
				break
			}
		}
		if (!M) {
			return
		}
		if (M.page instanceof Array) {
			M.mid = M.mid || M.page[1];
			M.page = M.page[0]
		}
		p = M.reports;
		a.on(a, "unload", s, d);
		a.on(a, "error", w, d);
		F = a.getXPath;
		J = j = g = z = k = n = x = H = 0;
		h = (a.times && a.times.ht) || new Date;
		r = a.sid || (+h).toString(36)
				+ (+Math.random().toFixed(8).substr(2)).toString(36);
		f = "_e_" + r;
		l = {
			pid : M.pid || 241,
			sid : r,
			hid : M.hid,
			mid : M.mid,
			page : M.page,
			ver : 5,
			p : M.product,
			px : e.screen.width + "*" + e.screen.height,
			ref : m()
		};
		for (R in M) {
			if (/^on(\w+)$/.test(R)) {
				y(R.substr(2), M[R], d)
			}
		}
		t("start", I);
		n = O();
		P = a.vr();
		A = P[1] + P[3];
		p.pv && K({
			cmd : "open"
		});
		for (R = 0; S = b[R++];) {
			a.on(S[2] || C, S[0], (function(U) {
				return function(V) {
					if (!h) {
						return
					}
					E(U, V)
				}
			})(S[1]), d);
			if (!p.staytime) {
				break
			}
		}
		p.iframe && B()
	}
	I.start = u;
	function s() {
		if (!h) {
			return
		}
		t("close", I);
		if (x) {
			H += O() - n
		}
		if (p.staytime) {
			var P = {
				cmd : "close",
				tc : J,
				lc : j,
				bc : g,
				pc : k,
				pd : A,
				ft : (O() - H).toString(36),
				ec : i
			};
			K(P)
		}
		h = 0;
		a.un(d);
		return p.staytime
	}
	I.stop = s;
	function t(Q, P) {
		a.fire(L + "." + Q, P)
	}
	function w(Q) {
		i = Q.count;
		if (p.error) {
			p.error = 0;
			var P = Q.items[0];
			if (P) {
				K({
					cmd : "error",
					et : (P[3] - h).toString(36),
					url : P[1],
					msg : P[0],
					line : P[2]
				})
			}
		}
	}
	if (a) {
		if (a.configs && a.configs[L]) {
			u(a.configs[L])
		}
	}
}(Monkey);
((window.baidu && baidu.dom && baidu.dom.ready) || function(a) {
	a()
})(function() {
	var a = {
		onstart : function() {
			if (a) {
				if (a.page == "zhidao-ques") {
					Monkey.set("qbtype", document.body
							.getAttribute("alog-page-type"))
				}
			}
		},
		getPage : function() {
			var b = document.location;
			if (b.hostname != "zhidao.baidu.com") {
				return
			}
			var c = b.pathname;
			if (/^\/question\//i.test(c)) {
				return "zhidao-ques"
			}
			if (/^\/new/i.test(c)) {
				return "zhidao-ask"
			}
			if (/^\/submit\//i.test(c)) {
				return "zhidao-submit"
			}
			if (/^\/search/i.test(c)) {
				return "zhidao-search"
			}
			if (/^\/browse/i.test(c)) {
				return "zhidao-browse"
			}
			if (/^\/team/i.test(c)) {
				return "zhidao-team"
			}
			if (/^(\/expert\/apply|\/s\/|\/user\/admin)/i.test(c)) {
				return "zhidao-expert"
			}
			if (c == "/q" || /^\/uhome\// i.test(c)) {
				return "zhidao-q"
			}
			if (c == "/") {
				return "zhidao-home"
			}
		},
		postUrl : "http://nsclick.baidu.com/u.gif",
		product : 102,
		hid : 2680,
		reports : {
			pv : 1,
			staytime : 1,
			click : 1,
			refer : 1,
			iframe : 1
		}
	};
	Monkey.start(a)
});
void function() {
	window.Hunter = window.Hunter || {};
	var i = "toString", q = "getBoundingClientRect", r = "activeElement", S = "previousSibling", a = "nodeName", n = "innerWidth", B = "innerHeight", y = "documentElement", P = {
		grid : 7,
		pid : 240,
		hid : (function() {
			if (Hunter.userConfig) {
				for ( var ao = 0, ap = Hunter.userConfig.length; ao < ap; ao++) {
					if (Hunter.userConfig[ao].hid) {
						au = Hunter.userConfig[ao].hid
					}
				}
			}
			if (!au) {
				function p(av) {
					return String(av).replace(/\.html?(\?|$)/, "$1").replace(
							/\?.*/, "").toLowerCase()
				}
				var w = document.location, aq = {}, d = {
					"zhidao.baidu.com" : {
						"\/c\/lenovo\/" : "2022",
						"\/c\/lenovo\/qlist\/79041" : "2023",
						"\/s\/expert-law3\/index.html" : "3793",
						"\/expert\/" : "9109",
						"\/" : "9108",
						"\/new?word=&ie=GBK" : "9112"
					}
				}, ar, at, au;
				d = d[w.hostname.toLowerCase()];
				if (!d) {
					return
				}
				w.search.toLowerCase().replace(/([^?&#]+)=([^?&#]*)/g,
						function(aw, av, ax) {
							aq[av] = ax
						});
				w = p(w.pathname);
				for (ar in d) {
					at = w == p(ar);
					at
							&& /\?/.test(ar)
							&& ar.toLowerCase().replace(
									/([^?&#]+)=([^?&#]*)/g,
									function(aw, av, ax) {
										if (aq[av] != ax.replace(
												/[^\x00-\xff]/g, function(ay) {
													return encodeURI(ay)
												}).toLowerCase()) {
											at = 0
										}
									});
					if (at) {
						au = d[ar]
					}
				}
			}
			if (Hunter.ratio && typeof (Hunter.ratio[au]) != "undifined") {
				if (Math.random() > Hunter.ratio[au]) {
					return
				}
			}
			return au
		})(),
		logPath : "http://nsclick.baidu.com/u.gif"
	}, v = {}, aj, ag = [], ab = window, am = document, G = am.body, E = am[y], l = am.defaultView, M = Math.max, k = encodeURIComponent, al = 100, j, N, H, t, I, u = ab.screen.width
			+ "*" + ab.screen.height, R, C, x, h = 110, z = 2060, D = 1000 * 60 * 30, m, f, s, o, r, c, ad = [
			[ "mousemove", "m" ], [ "mousedown", "d" ], [ "contextmenu", "r" ],
			[ "mouseup", "u" ], [ "click", "c" ], [ "dblclick", "l" ],
			[ "keydown", "k" ], [ "mousewheel", "w" ],
			[ "DOMMouseScroll", "w", ab ], [ "scroll", "s", ab ],
			[ "resize", "e", ab ], [ "beforeunload", "z", ab ],
			[ "unload", "z", ab ], [ "focusout", "o" ], [ "blur", "o", ab ],
			[ "focusin", "i" ], [ "focus", "i", ab ] ], ac, g = /gecko/i
			.test(navigator.userAgent), W, U;
	function K(ap, w, p, d, ao) {
		ap = am.getElementsByTagName(am.all ? "object" : "embed");
		for (w = 0; d = ap[w++];) {
			if (!d[c]) {
				d[c] = 1;
				for (p = 0; (ao = ad[p]) && p < 7; p++) {
					V(d, ao[0], (function(aq) {
						return function(ar) {
							aa(aq, ar)
						}
					})(ao[1]))
				}
			}
		}
	}
	function X(aq, d, ap, ao, p, au, w) {
		aq = document.getElementsByTagName("iframe");
		for (ap = 0; ap < aq.length; ap++) {
			w = aq[ap];
			try {
				var at = String(w.src).replace(/^\w+:\/\/([^\/]+).*$|.*/, "$1");
				if ((!at || at == document.location.hostname)
						&& !w.contentWindow[c]) {
					w.contentWindow[c] = 1;
					au = w.contentWindow.document;
					for (ao = 0; (p = ad[ao]) && ao < 7; ao++) {
						V(au, p[0], (function(av, ax, aw) {
							return function(ay) {
								if (g) {
									if ("d" == av) {
										U = b(ay)
									}
									if ("u" == av) {
										U = 0
									}
								}
								aa.call({
									path : ax,
									doc : aw,
									flag : c
								}, av, ay)
							}
						})(p[1], A(w), au))
					}
				}
			} catch (ar) {
			}
		}
	}
	function V(p, d, w) {
		if (!p) {
			return
		}
		if (p.addEventListener) {
			p.addEventListener(d, w, false)
		} else {
			p.attachEvent && p.attachEvent("on" + d, w)
		}
		ag.push([ p, d, w ])
	}
	function Y(w, d, ap, ao) {
		if (!w) {
			return
		}
		try {
			if (w.removeEventListener) {
				w.removeEventListener(d, ap, false)
			} else {
				w.detachEvent && w.detachEvent("on" + d, ap)
			}
			w[c] = ao
		} catch (p) {
		}
	}
	function b(d) {
		return d.which
				|| d.button
				&& (d.button & 1 ? 1 : (d.button & 2 ? 3 : (d.button & 4 ? 2
						: 0)))
	}
	function Q(d) {
		while (d = ag.pop()) {
			Y(d[0], d[1], d[2])
		}
	}
	function an() {
		return new Date - j
	}
	function ak(w, p, d) {
		w = w.slice();
		w[1] = w[1][i](36);
		if (/[mlducwrkfh]/.test(w[0])) {
			for (d = 2; d < w.length; d++) {
				if (("" + w[d]).length > 1) {
					if (w[d] === s[d]) {
						w[d] = "^"
					} else {
						s[d] = w[d]
					}
				}
			}
		}
		p = w.join("*").replace(/\*0\b/g, "*").replace(/^(.)\*|\*+$/g, "$1")
				+ "!";
		t += p.length;
		if (t > z) {
			ai({
				data : k(N.join("") + (P.group ? "@@" + H.join("") : ""))
			});
			t = h;
			N = [];
			H = []
		}
		N.push(p)
	}
	function aa(aq, ao, au, ap, d, p, ar, av, w) {
		ap = an();
		if (o) {
			clearTimeout(o[0]);
			if (ap - o[2] > 50) {
				o[1]()
			} else {
				o = 0
			}
		}
		var at = /^u/.test(typeof am[r]) ? 0 : am[r];
		if (at != r) {
			ak([ "f", ap, A(at) ]);
			r = at
		}
		if (aq === "j") {
			ak([ aq, ap ].concat(d));
			return
		}
		if (!ao) {
			ak([ aq, ap ])
		}
		if (ap > D) {
			J();
			return
		}
		if ("i" == aq && null !== o) {
			return
		}
		w = ao.target || ao.srcElement;
		while (w && w.nodeType != 1) {
			w = w.parentNode
		}
		if (f[0] == w) {
			au = f[1]
		} else {
			if (this.flag == c && this.doc) {
				au = this.path + "/" + A(w, this.doc)
			} else {
				au = A(w)
			}
		}
		f = [ w, au ];
		d = [ aq, ap, au ];
		if (/[mw]/.test(aq)) {
			if (m[0] == aq && ap - m[1] < al && m[2] == d[2]) {
				return
			}
			m = d.slice(0, 3)
		}
		if (w && !w[c] && /select/i.test(w.tagName)) {
			w[c] = 1;
			V(w, "change", function(aw) {
				aa("h", aw)
			})
		}
		if ("o" == aq) {
			o && clearTimeout(o[0]);
			o = function() {
				o = null;
				d[2] = +(Math.min(ab.screenTop || 0, ab.screenY || 0) < -22932);
				ak(d)
			};
			o = [ setTimeout(o, 1000), o, ap ]
		} else {
			if (/[se]/.test(aq)) {
				p = e();
				d[3] = p[[ 0, 2 ][+(aq == "e")]];
				d[2] = p[[ 1, 3 ][+(aq == "e")]]
			} else {
				if ("i" == aq) {
					d[2] = ""
				} else {
					if (w) {
						if (/[mlducwr]/.test(aq)) {
							ar = af(w, [ ao.clientX, ao.clientY ], P.grid);
							if (!ar) {
								return
							}
							d[3] = ar[0];
							d[4] = ar[1];
							if (/[cdul]/.test(aq)) {
								d[5] = b(ao)
							}
							if (aq == "m") {
								d[5] = g ? U : b(ao)
							}
							if (aq == "w") {
								d[5] = +((ao.wheelDelta || ao.detail) < 0)
							}
						} else {
							if ("k" == aq) {
								d[3] = /password/i.test(w.type) ? 1
										: ao.keyCode;
								d[4] = [ +ao.altKey || 0, +ao.ctrlKey || 0,
										+ao.shiftKey || 0, +ao.metaKey || 0 ]
										.join("")
							} else {
								if ("h" == aq) {
									d[3] = w.selectedIndex
								}
							}
						}
					}
				}
			}
			ak(d)
		}
		if (/[dcukio]/.test(aq)) {
			X();
			K();
			W && clearInterval(W);
			ac = 0;
			W = setInterval(function() {
				X();
				K();
				if (ac++ > 3) {
					W && clearInterval(W);
					ac = 0;
					W = 0
				}
			}, 1000)
		}
	}
	function J() {
		if (!j) {
			return
		}
		ai({
			cmd : "close",
			data : k(N.join("") + "z" + an()[i](36)
					+ (P.group ? "@@" + H.join("") : ""))
		});
		t = h;
		N = [];
		H = [];
		j = 0;
		Q()
	}
	function Z(w, d, ao) {
		d = [];
		for (ao in w) {
			if (typeof w[ao] != "undefined") {
				d.push(ao + "=" + decodeURIComponent(w[ao]))
			}
		}
		return d.join("&")
	}
	function O(p, ao, w) {
		if (!E || !E[q]) {
			return
		}
		if (window._hunter_sid) {
			return
		}
		if (j) {
			return
		}
		j = new Date;
		C = e();
		x = L();
		I = (+j)[i](36) + (+Math.random().toFixed(8).substr(2))[i](36);
		window._hunter_sid = I;
		c = "_e_" + I;
		R = 0;
		t = h;
		N = [];
		H = [];
		s = [];
		m = [];
		f = [];
		aj = [];
		var d = /^u/.test(typeof am[r]) ? 0 : am[r];
		ak([ "a", 0, C[0], C[1], C[2], C[3], A(d) ]);
		r = d;
		ai({
			cmd : "open",
			ref : k(k(am.referrer)),
			data : k(N.join(""))
		});
		for (p = 0; ao = ad[p++];) {
			if (/(focus.)|blur|focus/.test(ao[0]) && (!RegExp.$1 ^ !am.all)) {
				continue
			}
			V(ao[2] || am, ao[0], (function(ap) {
				return function(aq) {
					if (ap == "z") {
						J();
						w = an();
						while (an() - w < 100) {
						}
						return
					}
					if (g) {
						if ("d" == ap) {
							U = b(aq)
						}
						if ("u" == ap) {
							U = 0
						}
					}
					aa(ap, aq)
				}
			})(ao[1]))
		}
		K();
		X()
	}
	function A(ao) {
		if (!ao || ao.nodeType != 1 || /^(html|body)$/i.test(ao.tagName)) {
			return ao && /^html$/i.test(ao.tagName) ? "~html" : ""
		}
		var ap = "" + (ao.getAttribute && ao.getAttribute("id"));
		if (ap && ap.length < 11 && !(/tangram/i.test(ap))
				&& am.getElementById(ap) == ao) {
			return "." + ap.replace(/[!-\/\s~^]/g, function(aq) {
				return "%" + (256 + aq.charCodeAt())[i](16).substr(1)
			})
		}
		var w = 1, p = ao[S], d = "nodeName";
		while (p) {
			w += p[d] == ao[d];
			p = p[S]
		}
		return A(ao.parentNode) + "~" + (w < 2 ? "" : w) + ao[d].toLowerCase()
	}
	function F(d) {
		if (!d || d.nodeType != 1 || /^(html|body)$/i.test(d.tagName)) {
			return
		}
		var p = d.getAttribute && d.getAttribute("hgroup");
		if (p) {
			return d
		}
		return F(d.parentNode)
	}
	function af(w, aq, p) {
		var ao = w[q](), d = ah(w);
		p = p || 1;
		function ap(ar) {
			return String(+ar.toFixed(3)).replace(/^0\./g, ".")
		}
		return [ ap(~~((aq[0] - ao.left) / p) * p / d[0]),
				ap(~~((aq[1] - ao.top) / p) * p / d[1]) ]
	}
	function ah(d) {
		var p = d[q]();
		return [ ~~(p.right - p.left), ~~(p.bottom - p.top) ]
	}
	function L() {
		var p = ah(E), d = ah(G);
		return [ M(p[0], d[0], ab[n] || 0, E.scrollWidth || 0),
				M(p[1], d[1], ab[B] || 0, E.scrollHeight || 0) ]
	}
	function e() {
		return [
				M(E.scrollLeft || 0, G.scrollLeft || 0,
						(l && l.pageXOffset) || 0),
				M(E.scrollTop || 0, G.scrollTop || 0, (l && l.pageYOffset) || 0),
				ab[n] || E.clientWidth || G.clientWidth || 0,
				ab[B] || E.clientHeight || G.clientHeight || 0 ]
	}
	function ai(aq) {
		if (!aq) {
			return
		}
		var ap = Hunter.logPath || P.logPath;
		for ( var ao in v) {
			aq[ao] = v[ao]
		}
		var p = am.createElement("img"), d, w = am.getElementsByTagName("head")[0]
				|| bd;
		p.src = ap + "?" + Z({
			pid : P.pid,
			hid : P.hid,
			qid : ab.bdQid,
			gr : P.grid,
			sid : I,
			seq : R++,
			px : u,
			ps : x,
			vr : C,
			dv : 3
		}) + "&" + Z(aq);
		p.onerror = p.onload = p.onreadystatechange = function() {
			if (!d && /^(loaded|complete)$/.test(this.readyState)) {
				d = 1;
				w.removeChild(p);
				p = 0
			}
		};
		w.appendChild(p);
		C = e();
		x = L();
		s = []
	}
	function T(d, p) {
		if (!j) {
			return
		}
		ts = an();
		d = [ "g", ts ].concat(d);
		ak(d);
		if (p) {
			ai({
				data : k(N.join(""))
			})
		}
	}
	if (typeof Hunter.param == "object") {
		for ( var ae in Hunter.param) {
			v[ae] = Hunter.param[ae]
		}
	}
	if (P.hid) {
		O()
	}
	Hunter.start = function() {
		if (P.hid) {
			O()
		}
	};
	Hunter.stop = function() {
		J();
		window._hunter_sid = null
	};
	Hunter.setParam = function(d, p) {
		v[d] = p
	};
	Hunter.record = T
}();