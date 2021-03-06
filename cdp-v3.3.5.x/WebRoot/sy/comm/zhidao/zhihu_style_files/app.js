PLOVR_MODULE_INFO = {
    "app": [],
    "rich_text_editor": ["app"]
};
PLOVR_MODULE_URIS = {
    "app": "/static/js/c/1303291140368123/app.js",
    "rich_text_editor": "/sy/comm/zhidao/zhihu_style_files/rich_text_editor.js"
};
PLOVR_MODULE_USE_DEBUG_MODE = false;
function e(a) {
    throw a;
}
var h = void 0,
i = !0,
j = null,
l = !1;
function aa() {
    return function(a) {
        return a
    }
}
function ba() {
    return function() {}
}
function ca(a) {
    return function(b) {
        this[a] = b
    }
}
function n(a) {
    return function() {
        return this[a]
    }
}
function p(a) {
    return function() {
        return a
    }
}
var r, da = [];
function ea(a) {
    return function() {
        return da[a].apply(this, arguments)
    }
}
var fa = fa || {},
ga = this;
function ha(a) {
    for (var a = a.split("."), b = ga, c; c = a.shift();) if (b[c] != j) b = b[c];
    else return j;
    return b
}
function ia() {}
function ja(a) {
    a.v = function() {
        return a.Qh ? a.Qh: a.Qh = new a
    }
}
function ka(a) {
    var b = typeof a;
    if ("object" == b) if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
    } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}
function la(a) {
    return a !== h
}
function na(a) {
    return a != j
}
function oa(a) {
    return "array" == ka(a)
}
function pa(a) {
    var b = ka(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}
function t(a) {
    return "string" == typeof a
}
function qa(a) {
    return "number" == typeof a
}
function ra(a) {
    return "function" == ka(a)
}
function sa(a) {
    var b = typeof a;
    return "object" == b && a != j || "function" == b
}
function ta(a) {
   // return a[ua] || (a[ua] = ++va)
	return a;
}
var ua = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
va = 0;
function wa(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function xa(a, b, c) {
    a || e(Error());
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}
function u(a, b, c) {
    u = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? wa: xa;
    return u.apply(j, arguments)
}
function ya(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}
function za(a, b) {
    for (var c in b) a[c] = b[c]
}
var Aa = Date.now ||
function() {
    return + new Date
};
function Ba(a) {
    if (ga.execScript) ga.execScript(a, "JavaScript");
    else if (ga.eval) if (Ca == j && (ga.eval("var _et_ = 1;"), "undefined" != typeof ga._et_ ? (delete ga._et_, Ca = i) : Ca = l), Ca) ga.eval(a);
    else {
        var b = ga.document,
        c = b.createElement("script");
        c.type = "text/javascript";
        c.defer = l;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c)
    } else e(Error("goog.globalEval not available"))
}
var Ca = j;
function v(a, b) {
    var c = b || {},
    d;
    for (d in c) var f = ("" + c[d]).replace(/\$/g, "$$$$"),
    a = a.replace(RegExp("\\{\\$" + d + "\\}", "gi"), f);
    return a
}
function Da(a, b) {
    var c = a.split("."),
    d = ga; ! (c[0] in d) && d.execScript && d.execScript("var " + c[0]);
    for (var f; c.length && (f = c.shift());) ! c.length && la(b) ? d[f] = b: d = d[f] ? d[f] : d[f] = {}
}
function w(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.g = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};
function Ea(a) {
    Error.captureStackTrace ? Error.captureStackTrace(this, Ea) : this.stack = Error().stack || "";
    a && (this.message = String(a))
}
w(Ea, Error);
Ea.prototype.name = "CustomError";
function Fa(a, b) {
    return 0 == a.lastIndexOf(b, 0)
}
function Ga(a, b) {
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) == c
}
function Ia(a, b) {
    for (var c = 1; c < arguments.length; c++) var d = String(arguments[c]).replace(/\$/g, "$$$$"),
    a = a.replace(/\%s/, d);
    return a
}
function Ja(a) {
    return /^[\s\xa0]*$/.test(a)
}
function Ka(a) {
    return ! /[^\t\n\r ]/.test(a)
}
function La(a) {
    return a.replace(/(\r\n|\r|\n)+/g, " ")
}
function Ma(a) {
    return a.replace(/(\r\n|\r|\n)/g, "\n")
}
function Na(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
function Oa(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function Pa(a) {
    return a.replace(/[\s\xa0]+$/, "")
}
function Qa(a) {
    return a.replace(/(\r\n|\r|\n)/g, "<br>")
}
function Ra(a) {
    if (!Ta.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ua, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Va, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Wa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Xa, "&quot;"));
    return a
}
var Ua = /&/g,
Va = /</g,
Wa = />/g,
Xa = /\"/g,
Ta = /[&<>\"]/;
function Za(a) {
    if ($a(a, "&")) if ("document" in ga) var b = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    },
    c = document.createElement("div"),
    a = a.replace(ab,
    function(a, f) {
        var g = b[a];
        if (g) return g;
        if ("#" == f.charAt(0)) {
            var k = Number("0" + f.substr(1));
            isNaN(k) || (g = String.fromCharCode(k))
        }
        g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = g
    });
    else a = a.replace(/&([^;]+);/g,
    function(a, b) {
        switch (b) {
        case "amp":
            return "&";
        case "lt":
            return "<";
        case "gt":
            return ">";
        case "quot":
            return '"';
        default:
            if ("#" == b.charAt(0)) {
                var c = Number("0" + b.substr(1));
                if (!isNaN(c)) return String.fromCharCode(c)
            }
            return a
        }
    });
    return a
}
var ab = /&([^;\s<&]+);?/g;
function $a(a, b) {
    return - 1 != a.indexOf(b)
}
function bb(a) {
    return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function cb() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Aa()).toString(36)
}
function db(a, b) {
    for (var c = 0,
    d = Oa(String(a)).split("."), f = Oa(String(b)).split("."), g = Math.max(d.length, f.length), k = 0; 0 == c && k < g; k++) {
        var m = d[k] || "",
        q = f[k] || "",
        s = RegExp("(\\d*)(\\D*)", "g"),
        x = RegExp("(\\d*)(\\D*)", "g");
        do {
            var C = s.exec(m) || ["", "", ""], J = x.exec(q) || ["", "", ""];
            if (0 == C[0].length && 0 == J[0].length) break;
            c = ((0 == C[1].length ? 0 : parseInt(C[1], 10)) < (0 == J[1].length ? 0 : parseInt(J[1], 10)) ? -1 : (0 == C[1].length ? 0 : parseInt(C[1], 10)) > (0 == J[1].length ? 0 : parseInt(J[1], 10)) ? 1 : 0) || ((0 == C[2].length) < (0 == J[2].length) ? -1 : (0 == C[2].length) > (0 == J[2].length) ? 1 : 0) || (C[2] < J[2] ? -1 : C[2] > J[2] ? 1 : 0)
        } while ( 0 == c )
    }
    return c
}
var eb = 2147483648 * Math.random() | 0;
function fb() {
    return "goog_" + eb++
}
function gb(a) {
    return String(a).replace(/\-([a-z])/g,
    function(a, c) {
        return c.toUpperCase()
    })
};
var y = {
    Og: function(a) {
        return a[a.length - 1]
    }
};
y.nb = Array.prototype;
y.indexOf = y.nb.indexOf ?
function(a, b, c) {
    return y.nb.indexOf.call(a, b, c)
}: function(a, b, c) {
    c = c == j ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (t(a)) return ! t(b) || 1 != b.length ? -1 : a.indexOf(b, c);
    for (; c < a.length; c++) if (c in a && a[c] === b) return c;
    return - 1
};
y.lastIndexOf = y.nb.lastIndexOf ?
function(a, b, c) {
    return y.nb.lastIndexOf.call(a, b, c == j ? a.length - 1 : c)
}: function(a, b, c) {
    c = c == j ? a.length - 1 : c;
    0 > c && (c = Math.max(0, a.length + c));
    if (t(a)) return ! t(b) || 1 != b.length ? -1 : a.lastIndexOf(b, c);
    for (; 0 <= c; c--) if (c in a && a[c] === b) return c;
    return - 1
};
y.forEach = y.nb.forEach ?
function(a, b, c) {
    y.nb.forEach.call(a, b, c)
}: function(a, b, c) {
    for (var d = a.length,
    f = t(a) ? a.split("") : a, g = 0; g < d; g++) g in f && b.call(c, f[g], g, a)
};
y.JL = function(a, b) {
    for (var c = t(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(h, c[d], d, a)
};
y.filter = y.nb.filter ?
function(a, b, c) {
    return y.nb.filter.call(a, b, c)
}: function(a, b, c) {
    for (var d = a.length,
    f = [], g = 0, k = t(a) ? a.split("") : a, m = 0; m < d; m++) if (m in k) {
        var q = k[m];
        b.call(c, q, m, a) && (f[g++] = q)
    }
    return f
};
y.map = y.nb.map ?
function(a, b, c) {
    return y.nb.map.call(a, b, c)
}: function(a, b, c) {
    for (var d = a.length,
    f = Array(d), g = t(a) ? a.split("") : a, k = 0; k < d; k++) k in g && (f[k] = b.call(c, g[k], k, a));
    return f
};
y.reduce = function(a, b, c, d) {
    if (a.reduce) return d ? a.reduce(u(b, d), c) : a.reduce(b, c);
    var f = c;
    y.forEach(a,
    function(c, k) {
        f = b.call(d, f, c, k, a)
    });
    return f
};
y.reduceRight = function(a, b, c, d) {
    if (a.reduceRight) return d ? a.reduceRight(u(b, d), c) : a.reduceRight(b, c);
    var f = c;
    y.JL(a,
    function(c, k) {
        f = b.call(d, f, c, k, a)
    });
    return f
};
y.some = y.nb.some ?
function(a, b, c) {
    return y.nb.some.call(a, b, c)
}: function(a, b, c) {
    for (var d = a.length,
    f = t(a) ? a.split("") : a, g = 0; g < d; g++) if (g in f && b.call(c, f[g], g, a)) return i;
    return l
};
y.every = y.nb.every ?
function(a, b, c) {
    return y.nb.every.call(a, b, c)
}: function(a, b, c) {
    for (var d = a.length,
    f = t(a) ? a.split("") : a, g = 0; g < d; g++) if (g in f && !b.call(c, f[g], g, a)) return l;
    return i
};
y.count = function(a, b, c) {
    var d = 0;
    y.forEach(a,
    function(a, g, k) {
        b.call(c, a, g, k) && ++d
    },
    c);
    return d
};
y.find = function(a, b, c) {
    b = y.Mq(a, b, c);
    return 0 > b ? j: t(a) ? a.charAt(b) : a[b]
};
y.Mq = function(a, b, c) {
    for (var d = a.length,
    f = t(a) ? a.split("") : a, g = 0; g < d; g++) if (g in f && b.call(c, f[g], g, a)) return g;
    return - 1
};
y.DX = function(a, b, c) {
    b = y.Ev(a, b, c);
    return 0 > b ? j: t(a) ? a.charAt(b) : a[b]
};
y.Ev = function(a, b, c) {
    for (var d = t(a) ? a.split("") : a, f = a.length - 1; 0 <= f; f--) if (f in d && b.call(c, d[f], f, a)) return f;
    return - 1
};
y.contains = function(a, b) {
    return 0 <= y.indexOf(a, b)
};
y.xb = function(a) {
    return 0 == a.length
};
y.clear = function(a) {
    if (!oa(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0
};
y.vr = function(a, b) {
    y.contains(a, b) || a.push(b)
};
y.Ln = function(a, b, c) {
    y.splice(a, c, 0, b)
};
y.YX = function(a, b, c) {
    ya(y.splice, a, c, 0).apply(j, b)
};
y.insertBefore = function(a, b, c) {
    var d;
    2 == arguments.length || 0 > (d = y.indexOf(a, c)) ? a.push(b) : y.Ln(a, b, d)
};
y.remove = function(a, b) {
    var c = y.indexOf(a, b),
    d; (d = 0 <= c) && y.By(a, c);
    return d
};
y.By = function(a, b) {
    return 1 == y.nb.splice.call(a, b, 1).length
};
y.SR = function(a, b) {
    var c = y.Mq(a, b, h);
    return 0 <= c ? (y.By(a, c), i) : l
};
y.concat = function(a) {
    return y.nb.concat.apply(y.nb, arguments)
};
y.toArray = function(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
};
y.clone = y.toArray;
y.extend = function(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c],
        f;
        if (oa(d) || (f = pa(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) a.push.apply(a, d);
        else if (f) for (var g = a.length,
        k = d.length,
        m = 0; m < k; m++) a[g + m] = d[m];
        else a.push(d)
    }
};
y.splice = function(a, b, c, d) {
    return y.nb.splice.apply(a, y.slice(arguments, 1))
};
y.slice = function(a, b, c) {
    return 2 >= arguments.length ? y.nb.slice.call(a, b) : y.nb.slice.call(a, b, c)
};
y.Cy = function(a, b) {
    for (var c = b || a,
    d = {},
    f = 0,
    g = 0; g < a.length;) {
        var k = a[g++],
        m = sa(k) ? "o" + ta(k) : (typeof k).charAt(0) + k;
        Object.prototype.hasOwnProperty.call(d, m) || (d[m] = i, c[f++] = k)
    }
    c.length = f
};
y.gB = function(a, b, c) {
    return y.hB(a, c || y.Ei, l, b)
};
y.ZW = function(a, b, c) {
    return y.hB(a, b, i, h, c)
};
y.hB = function(a, b, c, d, f) {
    for (var g = 0,
    k = a.length,
    m; g < k;) {
        var q = g + k >> 1,
        s;
        s = c ? b.call(f, a[q], q, a) : b(d, a[q]);
        0 < s ? g = q + 1 : (k = q, m = !s)
    }
    return m ? g: ~g
};
y.sort = function(a, b) {
    y.nb.sort.call(a, b || y.Ei)
};
y.WY = function(a, b) {
    for (var c = 0; c < a.length; c++) a[c] = {
        index: c,
        value: a[c]
    };
    var d = b || y.Ei;
    y.sort(a,
    function(a, b) {
        return d(a.value, b.value) || a.index - b.index
    });
    for (c = 0; c < a.length; c++) a[c] = a[c].value
};
y.YG = function(a, b, c) {
    var d = c || y.Ei;
    y.sort(a,
    function(a, c) {
        return d(a[b], c[b])
    })
};
y.eY = function(a, b, c) {
    for (var b = b || y.Ei,
    d = 1; d < a.length; d++) {
        var f = b(a[d - 1], a[d]);
        if (0 < f || 0 == f && c) return l
    }
    return i
};
y.Ti = function(a, b, c) {
    if (!pa(a) || !pa(b) || a.length != b.length) return l;
    for (var d = a.length,
    c = c || y.SK,
    f = 0; f < d; f++) if (!c(a[f], b[f])) return l;
    return i
};
y.kX = function(a, b, c) {
    return y.Ti(a, b, c)
};
y.lX = function(a, b, c) {
    for (var c = c || y.Ei,
    d = Math.min(a.length, b.length), f = 0; f < d; f++) {
        var g = c(a[f], b[f]);
        if (0 != g) return g
    }
    return y.Ei(a.length, b.length)
};
y.Ei = function(a, b) {
    return a > b ? 1 : a < b ? -1 : 0
};
y.SK = function(a, b) {
    return a === b
};
y.XW = function(a, b, c) {
    c = y.gB(a, b, c);
    return 0 > c ? (y.Ln(a, b, -(c + 1)), i) : l
};
y.YW = function(a, b, c) {
    b = y.gB(a, b, c);
    return 0 <= b ? y.By(a, b) : l
};
y.eX = function(a, b) {
    for (var c = {},
    d = 0; d < a.length; d++) {
        var f = a[d],
        g = b(f, d, a);
        la(g) && (c[g] || (c[g] = [])).push(f)
    }
    return c
};
y.qt = function(a, b, c) {
    var d = {};
    y.forEach(a,
    function(f, g) {
        d[b.call(c, f, g, a)] = f
    });
    return d
};
y.repeat = function(a, b) {
    for (var c = [], d = 0; d < b; d++) c[d] = a;
    return c
};
y.flatten = function(a) {
    for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        oa(d) ? b.push.apply(b, y.flatten.apply(j, d)) : b.push(d)
    }
    return b
};
y.rotate = function(a, b) {
    a.length && (b %= a.length, 0 < b ? y.nb.unshift.apply(a, a.splice( - b, b)) : 0 > b && y.nb.push.apply(a, a.splice(0, -b)));
    return a
};
y.sZ = function(a) {
    if (!arguments.length) return [];
    for (var b = [], c = 0;; c++) {
        for (var d = [], f = 0; f < arguments.length; f++) {
            var g = arguments[f];
            if (c >= g.length) return b;
            d.push(g[c])
        }
        b.push(d)
    }
};
y.UY = function(a, b) {
    for (var c = b || Math.random,
    d = a.length - 1; 0 < d; d--) {
        var f = Math.floor(c() * (d + 1)),
        g = a[d];
        a[d] = a[f];
        a[f] = g
    }
};
var hb, ib, jb, kb, lb, mb, nb, ob;
function pb() {
    return ga.navigator ? ga.navigator.userAgent: j
}
function qb() {
    return ga.navigator
}
lb = kb = jb = ib = hb = l;
var rb;
if (rb = pb()) {
    var sb = qb();
    hb = 0 == rb.indexOf("Opera");
    ib = !hb && -1 != rb.indexOf("MSIE");
    kb = (jb = !hb && -1 != rb.indexOf("WebKit")) && -1 != rb.indexOf("Mobile");
    lb = !hb && !jb && "Gecko" == sb.product
}
var tb = hb,
z = ib,
A = lb,
B = jb,
ub = kb,
vb, wb = qb();
vb = wb && wb.platform || "";
mb = $a(vb, "Mac");
nb = $a(vb, "Win");
ob = $a(vb, "Linux");
var xb = !!qb() && $a(qb().appVersion || "", "X11");
function yb() {
    var a = ga.document;
    return a ? a.documentMode: h
}
var zb;
a: {
    var Ab = "",
    Bb;
    if (tb && ga.opera) var Cb = ga.opera.version,
    Ab = "function" == typeof Cb ? Cb() : Cb;
    else if (A ? Bb = /rv\:([^\);]+)(\)|;)/: z ? Bb = /MSIE\s+([^\);]+)(\)|;)/: B && (Bb = /WebKit\/(\S+)/), Bb) var Db = Bb.exec(pb()),
    Ab = Db ? Db[1] : "";
    if (z) {
        var Eb = yb();
        if (Eb > parseFloat(Ab)) {
            zb = String(Eb);
            break a
        }
    }
    zb = Ab
}
var Fb = {};
function D(a) {
    return Fb[a] || (Fb[a] = 0 <= db(zb, a))
}
function Gb(a) {
    return z && Hb >= a
}
var Ib = ga.document,
Hb = !Ib || !z ? h: yb() || ("CSS1Compat" == Ib.compatMode ? parseInt(zb, 10) : 5);
var Jb, Kb = !z || Gb(9),
Lb = !A && !z || z && Gb(9) || A && D("1.9.1"),
Mb = z && !D("9");
var E = {
    set: function(a, b) {
        a.className = b
    },
    get: function(a) {
        a = a.className;
        return t(a) && a.match(/\S+/g) || []
    },
    add: function(a, b) {
        var c = E.get(a),
        d = y.slice(arguments, 1),
        f = c.length + d.length;
        E.EA(c, d);
        a.className = c.join(" ");
        return c.length == f
    },
    remove: function(a, b) {
        var c = E.get(a),
        d = y.slice(arguments, 1),
        f = E.UC(c, d);
        a.className = f.join(" ");
        return f.length == c.length - d.length
    },
    EA: function(a, b) {
        for (var c = 0; c < b.length; c++) y.contains(a, b[c]) || a.push(b[c])
    },
    UC: function(a, b) {
        return y.filter(a,
        function(a) {
            return ! y.contains(b, a)
        })
    },
    kT: function(a, b, c) {
        for (var d = E.get(a), f = l, g = 0; g < d.length; g++) d[g] == b && (y.splice(d, g--, 1), f = i);
        f && (d.push(c), a.className = d.join(" "));
        return f
    },
    Ne: function(a, b, c) {
        var d = E.get(a);
        t(b) ? y.remove(d, b) : oa(b) && (d = E.UC(d, b));
        t(c) && !y.contains(d, c) ? d.push(c) : oa(c) && E.EA(d, c);
        a.className = d.join(" ")
    },
    has: function(a, b) {
        return y.contains(E.get(a), b)
    },
    enable: function(a, b, c) {
        c ? E.add(a, b) : E.remove(a, b)
    },
    toggle: function(a, b) {
        var c = !E.has(a, b);
        E.enable(a, b, c);
        return c
    }
};
function Nb(a, b, c) {
    return Math.min(Math.max(a, b), c)
};
function Ob(a, b) {
    this.x = la(a) ? a: 0;
    this.y = la(b) ? b: 0
}
Ob.prototype.clone = function() {
    return new Ob(this.x, this.y)
};
function Pb(a, b) {
    return new Ob(a.x - b.x, a.y - b.y)
};
function Qb(a, b) {
    this.width = a;
    this.height = b
}
function Rb(a, b) {
    return a == b ? i: !a || !b ? l: a.width == b.width && a.height == b.height
}
r = Qb.prototype;
r.clone = function() {
    return new Qb(this.width, this.height)
};
r.xb = function() {
    return ! (this.width * this.height)
};
r.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
r.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
r.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
var F = {
    forEach: function(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    },
    filter: function(a, b, c) {
        var d = {},
        f;
        for (f in a) b.call(c, a[f], f, a) && (d[f] = a[f]);
        return d
    },
    map: function(a, b, c) {
        var d = {},
        f;
        for (f in a) d[f] = b.call(c, a[f], f, a);
        return d
    },
    some: function(a, b, c) {
        for (var d in a) if (b.call(c, a[d], d, a)) return i;
        return l
    },
    every: function(a, b, c) {
        for (var d in a) if (!b.call(c, a[d], d, a)) return l;
        return i
    },
    Ha: function(a) {
        var b = 0,
        c;
        for (c in a) b++;
        return b
    },
    JX: function(a) {
        for (var b in a) return b
    },
    KX: function(a) {
        for (var b in a) return a[b]
    },
    contains: function(a, b) {
        return F.sg(a, b)
    },
    Ea: function(a) {
        var b = [],
        c = 0,
        d;
        for (d in a) b[c++] = a[d];
        return b
    },
    Eb: function(a) {
        var b = [],
        c = 0,
        d;
        for (d in a) b[c++] = d;
        return b
    },
    PX: function(a, b) {
        for (var c = pa(b), d = c ? b: arguments, c = c ? 0 : 1; c < d.length && !(a = a[d[c]], !la(a)); c++);
        return a
    },
    Gd: function(a, b) {
        return b in a
    },
    sg: function(a, b) {
        for (var c in a) if (a[c] == b) return i;
        return l
    },
    BL: function(a, b, c) {
        for (var d in a) if (b.call(c, a[d], d, a)) return d
    },
    DC: function(a, b, c) {
        return (b = F.BL(a, b, c)) && a[b]
    },
    xb: function(a) {
        for (var b in a) return l;
        return i
    },
    clear: function(a) {
        for (var b in a) delete a[b]
    },
    remove: function(a, b) {
        var c; (c = b in a) && delete a[b];
        return c
    },
    add: function(a, b, c) {
        b in a && e(Error('The object already contains the key "' + b + '"'));
        F.set(a, b, c)
    },
    get: function(a, b, c) {
        return b in a ? a[b] : c
    },
    set: function(a, b, c) {
        a[b] = c
    },
    TY: function(a, b, c) {
        return b in a ? a[b] : a[b] = c
    },
    clone: function(a) {
        var b = {},
        c;
        for (c in a) b[c] = a[c];
        return b
    },
    VT: function(a) {
        var b = ka(a);
        if ("object" == b || "array" == b) {
            if (a.clone) return a.clone();
            var b = "array" == b ? [] : {},
            c;
            for (c in a) b[c] = F.VT(a[c]);
            return b
        }
        return a
    },
    im: function(a) {
        var b = {},
        c;
        for (c in a) b[a[c]] = c;
        return b
    },
    uA: "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
    extend: function(a, b) {
        for (var c, d, f = 1; f < arguments.length; f++) {
            d = arguments[f];
            for (c in d) a[c] = d[c];
            for (var g = 0; g < F.uA.length; g++) c = F.uA[g],
            Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    },
    create: function(a) {
        var b = arguments.length;
        if (1 == b && oa(arguments[0])) return F.create.apply(j, arguments[0]);
        b % 2 && e(Error("Uneven number of arguments"));
        for (var c = {},
        d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
        return c
    },
    xh: function(a) {
        var b = arguments.length;
        if (1 == b && oa(arguments[0])) return F.xh.apply(j, arguments[0]);
        for (var c = {},
        d = 0; d < b; d++) c[arguments[d]] = i;
        return c
    },
    pX: function(a) {
        var b = a;
        Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
        return b
    },
    cY: function(a) {
        return !! Object.isFrozen && Object.isFrozen(a)
    }
};
function Sb(a) {
    return a ? new Tb(Ub(a)) : Jb || (Jb = new Tb)
}
function H(a) {
    return t(a) ? document.getElementById(a) : a
}
function Vb(a, b, c) {
    return Wb(document, a, b, c)
}
function Xb(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : Wb(document, "*", a, b)
}
function I(a, b) {
    var c = b || document,
    d = j;
    return (d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Xb(a, b)[0]) || j
}
function Wb(a, b, c, d) {
    a = d || a;
    b = b && "*" != b ? b.toUpperCase() : "";
    if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c: ""));
    if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
            for (var d = {},
            f = 0,
            g = 0,
            k; k = a[g]; g++) b == k.nodeName && (d[f++] = k);
            d.length = f;
            return d
        }
        return a
    }
    a = a.getElementsByTagName(b || "*");
    if (c) {
        d = {};
        for (g = f = 0; k = a[g]; g++) b = k.className,
        "function" == typeof b.split && y.contains(b.split(/\s+/), c) && (d[f++] = k);
        d.length = f;
        return d
    }
    return a
}
function Yb(a, b) {
    F.forEach(b,
    function(b, d) {
        "style" == d ? a.style.cssText = b: "class" == d ? a.className = b: "for" == d ? a.htmlFor = b: d in Zb ? a.setAttribute(Zb[d], b) : Fa(d, "aria-") || Fa(d, "data-") ? a.setAttribute(d, b) : a[d] = b
    })
}
var Zb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};
function $b(a) {
    a = (a || window).document;
    a = "CSS1Compat" == a.compatMode ? a.documentElement: a.body;
    return new Qb(a.clientWidth, a.clientHeight)
}
function ac(a) {
    var b = bc(a),
    a = a.parentWindow || a.defaultView;
    return new Ob(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
}
function bc(a) {
    return ! B && "CSS1Compat" == a.compatMode ? a.documentElement: a.body
}
function cc(a) {
    return a ? a.parentWindow || a.defaultView: window
}
function K(a, b, c) {
    return dc(document, arguments)
}
function dc(a, b) {
    var c = b[0],
    d = b[1];
    if (!Kb && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', Ra(d.name), '"');
        if (d.type) {
            c.push(' type="', Ra(d.type), '"');
            var f = {};
            F.extend(f, d);
            delete f.type;
            d = f
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (t(d) ? c.className = d: oa(d) ? E.add.apply(j, [c].concat(d)) : Yb(c, d));
    2 < b.length && ec(a, c, b, 2);
    return c
}
function ec(a, b, c, d) {
    function f(c) {
        c && b.appendChild(t(c) ? a.createTextNode(c) : c)
    }
    for (; d < c.length; d++) {
        var g = c[d];
        pa(g) && !(sa(g) && 0 < g.nodeType) ? y.forEach(fc(g) ? y.toArray(g) : g, f) : f(g)
    }
}
function gc(a) {
    return hc(document, a)
}
function hc(a, b) {
    var c = a.createElement("div");
    z ? (c.innerHTML = "<br>" + b, c.removeChild(c.firstChild)) : c.innerHTML = b;
    if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
    for (var d = a.createDocumentFragment(); c.firstChild;) d.appendChild(c.firstChild);
    return d
}
function ic(a) {
    if (1 != a.nodeType) return l;
    switch (a.tagName) {
    case "APPLET":
    case "AREA":
    case "BASE":
    case "BR":
    case "COL":
    case "COMMAND":
    case "EMBED":
    case "FRAME":
    case "HR":
    case "IMG":
    case "INPUT":
    case "IFRAME":
    case "ISINDEX":
    case "KEYGEN":
    case "LINK":
    case "NOFRAMES":
    case "NOSCRIPT":
    case "META":
    case "OBJECT":
    case "PARAM":
    case "SCRIPT":
    case "SOURCE":
    case "STYLE":
    case "TRACK":
    case "WBR":
        return l
    }
    return i
}
function jc(a, b) {
    ec(Ub(a), a, arguments, 1)
}
function kc(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}
function lc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b)
}
function mc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}
function nc(a, b) {
    a.insertBefore(b, a.childNodes[0] || j)
}
function L(a) {
    return a && a.parentNode ? a.parentNode.removeChild(a) : j
}
function oc(a, b) {
    var c = b.parentNode;
    c && c.replaceChild(a, b)
}
function pc(a) {
    var b, c = a.parentNode;
    if (c && 11 != c.nodeType) {
        if (a.removeNode) return a.removeNode(l);
        for (; b = a.firstChild;) c.insertBefore(b, a);
        return L(a)
    }
}
function qc(a) {
    return Lb && a.children != h ? a.children: y.filter(a.childNodes,
    function(a) {
        return 1 == a.nodeType
    })
}
function rc(a) {
    return a.firstElementChild != h ? a.firstElementChild: sc(a.firstChild, i)
}
function tc(a) {
    return a.previousElementSibling != h ? a.previousElementSibling: sc(a.previousSibling, l)
}
function sc(a, b) {
    for (; a && 1 != a.nodeType;) a = b ? a.nextSibling: a.previousSibling;
    return a
}
function uc(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}
function vc(a, b) {
    if (a == b) return 0;
    if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    if (z && !Gb(9)) {
        if (9 == a.nodeType) return - 1;
        if (9 == b.nodeType) return 1
    }
    if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
        var c = 1 == a.nodeType,
        d = 1 == b.nodeType;
        if (c && d) return a.sourceIndex - b.sourceIndex;
        var f = a.parentNode,
        g = b.parentNode;
        return f == g ? wc(a, b) : !c && uc(f, b) ? -1 * xc(a, b) : !d && uc(g, a) ? xc(b, a) : (c ? a.sourceIndex: f.sourceIndex) - (d ? b.sourceIndex: g.sourceIndex)
    }
    d = Ub(a);
    c = d.createRange();
    c.selectNode(a);
    c.collapse(i);
    d = d.createRange();
    d.selectNode(b);
    d.collapse(i);
    return c.compareBoundaryPoints(ga.Range.START_TO_END, d)
}
function xc(a, b) {
    var c = a.parentNode;
    if (c == b) return - 1;
    for (var d = b; d.parentNode != c;) d = d.parentNode;
    return wc(d, a)
}
function wc(a, b) {
    for (var c = b; c = c.previousSibling;) if (c == a) return - 1;
    return 1
}
function yc(a) {
    var b, c = arguments.length;
    if (c) {
        if (1 == c) return arguments[0]
    } else return j;
    var d = [],
    f = Infinity;
    for (b = 0; b < c; b++) {
        for (var g = [], k = arguments[b]; k;) g.unshift(k),
        k = k.parentNode;
        d.push(g);
        f = Math.min(f, g.length)
    }
    g = j;
    for (b = 0; b < f; b++) {
        for (var k = d[0][b], m = 1; m < c; m++) if (k != d[m][b]) return g;
        g = k
    }
    return g
}
function Ub(a) {
    return 9 == a.nodeType ? a: a.ownerDocument || a.document
}
function zc(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else kc(a),
    a.appendChild(Ub(a).createTextNode(b))
}
function Ac(a, b) {
    var c = [];
    Bc(a, b, c, l);
    return c
}
function Bc(a, b, c, d) {
    if (a != j) for (a = a.firstChild; a;) {
        if (b(a) && (c.push(a), d) || Bc(a, b, c, d)) return i;
        a = a.nextSibling
    }
    return l
}
var Cc = {
    SCRIPT: 1,
    STYLE: 1,
    HEAD: 1,
    IFRAME: 1,
    OBJECT: 1
},
Dc = {
    IMG: " ",
    BR: "\n"
};
function Ec(a) {
    var b = a.getAttributeNode("tabindex");
    return b && b.specified ? (a = a.tabIndex, qa(a) && 0 <= a && 32768 > a) : l
}
function Fc(a, b) {
    b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
}
function Gc(a) {
    if (Mb && "innerText" in a) a = Ma(a.innerText);
    else {
        var b = [];
        Hc(a, b, i);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    Mb || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}
function Ic(a) {
    var b = [];
    Hc(a, b, l);
    return b.join("")
}
function Hc(a, b, c) {
    if (! (a.nodeName in Cc)) if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    else if (a.nodeName in Dc) b.push(Dc[a.nodeName]);
    else for (a = a.firstChild; a;) Hc(a, b, c),
    a = a.nextSibling
}
function fc(a) {
    if (a && "number" == typeof a.length) {
        if (sa(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (ra(a)) return "function" == typeof a.item
    }
    return l
}
function Jc(a, b, c) {
    if (!b && !c) return j;
    var d = b ? b.toUpperCase() : j;
    return Kc(a,
    function(a) {
        return (!d || a.nodeName == d) && (!c || E.has(a, c))
    },
    i)
}
function Lc(a, b) {
    return Jc(a, j, b)
}
function Kc(a, b, c, d) {
    c || (a = a.parentNode);
    for (var c = d == j,
    f = 0; a && (c || f <= d);) {
        if (b(a)) return a;
        a = a.parentNode;
        f++
    }
    return j
}
function Mc(a) {
    try {
        return a && a.activeElement
    } catch(b) {}
    return j
}
function Tb(a) {
    this.Aa = a || ga.document || document
}
r = Tb.prototype;
r.B = Sb;
r.va = n("Aa");
r.f = function(a) {
    return t(a) ? this.Aa.getElementById(a) : a
};
r.Yi = function(a, b) {
    return I(a, b || this.Aa)
};
r.j = function(a, b, c) {
    return dc(this.Aa, arguments)
};
r.createElement = function(a) {
    return this.Aa.createElement(a)
};
r.createTextNode = function(a) {
    return this.Aa.createTextNode(a)
};
r.IB = function(a, b, c) {
    for (var d = this.Aa,
    f = !!c,
    c = ["<tr>"], g = 0; g < b; g++) c.push(f ? "<td>&nbsp;</td>": "<td></td>");
    c.push("</tr>");
    c = c.join("");
    b = ["<table>"];
    for (g = 0; g < a; g++) b.push(c);
    b.push("</table>");
    a = d.createElement("DIV");
    a.innerHTML = b.join("");
    return a.removeChild(a.firstChild)
};
function Nc(a) {
    return "CSS1Compat" == a.Aa.compatMode
}
r.Ja = function() {
    return this.Aa.parentWindow || this.Aa.defaultView
};
function Oc(a) {
    return ac(a.Aa)
}
r.Pq = function(a) {
    return Mc(a || this.Aa)
};
r.appendChild = function(a, b) {
    a.appendChild(b)
};
r.append = jc;
r.Fs = kc;
r.Mn = lc;
r.Ww = mc;
r.removeNode = L;
r.DL = pc;
r.SC = qc;
r.VC = rc;
r.contains = uc;
r.QL = Jc;
function Pc(a, b) {
    a.setAttribute("role", b)
}
function Qc(a, b, c) {
    a.setAttribute("aria-" + b, c)
}
function Rc(a, b) {
    var c = a.getAttribute("aria-" + b);
    return c === i || c === l ? c ? "true": "false": c ? String(c) : ""
};
function M() {
    0 != Sc && (this.qX = Error().stack, Tc[ta(this)] = this)
}
var Sc = 0,
Tc = {};
M.prototype.Ji = l;
M.prototype.w = function() {
    if (!this.Ji && (this.Ji = i, this.m(), 0 != Sc)) {
        var a = ta(this);
        delete Tc[a]
    }
};
M.prototype.m = function() {
    this.aL && Uc.apply(j, this.aL);
    if (this.oF) for (; this.oF.length;) this.oF.shift()()
};
function Vc(a) {
    a && "function" == typeof a.w && a.w()
}
function Uc(a) {
    for (var b = 0,
    c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        pa(d) ? Uc.apply(j, d) : Vc(d)
    }
};
var Wc = {
    vm: "activedescendant",
    zU: "atomic",
    jI: "autocomplete",
    HU: "busy",
    tp: "checked",
    OU: "controls",
    SU: "describedby",
    oI: "disabled",
    VU: "dropeffect",
    oA: "expanded",
    YU: "flowto",
    eV: "grabbed",
    vk: "haspopup",
    kV: "hidden",
    qV: "invalid",
    wp: "label",
    St: "labelledby",
    wV: "level",
    zV: "live",
    IV: "multiline",
    JV: "multiselectable",
    PV: "orientation",
    RV: "owns",
    TV: "posinset",
    xI: "pressed",
    ZV: "readonly",
    bW: "relevant",
    cW: "required",
    AI: "selected",
    nW: "setsize",
    pW: "sort",
    LI: "valuemax",
    MI: "valuemin",
    NI: "valuenow",
    NW: "valuetext"
},
Xc = {
    vU: "alert",
    wU: "alertdialog",
    xU: "application",
    yU: "article",
    BU: "banner",
    sp: "button",
    lI: "checkbox",
    KU: "columnheader",
    mI: "combobox",
    MU: "complementary",
    nI: "dialog",
    TU: "directory",
    UU: "document",
    cV: "form",
    gV: "grid",
    hV: "gridcell",
    iV: "group",
    jV: "heading",
    oV: "img",
    rI: "link",
    xV: "list",
    pA: "listbox",
    yV: "listitem",
    BV: "log",
    sI: "main",
    CV: "marquee",
    DV: "math",
    tI: "menu",
    GV: "menubar",
    uI: "menuitem",
    vI: "menuitemcheckbox",
    wI: "menuitemradio",
    KV: "navigation",
    MV: "note",
    sA: "option",
    UV: "presentation",
    VV: "progressbar",
    XV: "radio",
    YV: "radiogroup",
    aW: "region",
    eW: "row",
    fW: "rowgroup",
    gW: "rowheader",
    jW: "scrollbar",
    kW: "search",
    CI: "separator",
    FI: "slider",
    qW: "spinbutton",
    sW: "status",
    wA: "tab",
    HI: "tablist",
    wW: "tabpanel",
    xW: "textbox",
    yW: "timer",
    II: "toolbar",
    AW: "tooltip",
    BW: "tree",
    DW: "treegrid",
    EW: "treeitem"
};
var Yc = !z || Gb(9),
Zc = !z || Gb(9),
$c = z && !D("9"); ! B || D("528");
A && D("1.9b") || z && D("8") || tb && D("9.5") || B && D("528");
A && !D("8") || z && D("9");
function ad(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
}
r = ad.prototype;
r.m = ba();
r.w = ba();
r.Nj = l;
r.defaultPrevented = l;
r.Ns = i;
r.stopPropagation = function() {
    this.Nj = i
};
r.preventDefault = function() {
    this.defaultPrevented = i;
    this.Ns = l
};
function bd(a) {
    a.preventDefault()
};
var cd = z ? "focusin": "DOMFocusIn";
function dd(a) {
    dd[" "](a);
    return a
}
dd[" "] = ia;
function ed(a, b) {
    a && this.k(a, b)
}
w(ed, ad);
var fd = [1, 4, 2];
r = ed.prototype;
r.target = j;
r.relatedTarget = j;
r.offsetX = 0;
r.offsetY = 0;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.button = 0;
r.keyCode = 0;
r.charCode = 0;
r.ctrlKey = l;
r.altKey = l;
r.shiftKey = l;
r.metaKey = l;
r.ly = l;
r.Yb = j;
r.k = function(a, b) {
    var c = this.type = a.type;
    ad.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (A) {
            var f;
            a: {
                try {
                    dd(d.nodeName);
                    f = i;
                    break a
                } catch(g) {}
                f = l
            }
            f || (d = j)
        }
    } else "mouseover" == c ? d = a.fromElement: "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = B || a.offsetX !== h ? a.offsetX: a.layerX;
    this.offsetY = B || a.offsetY !== h ? a.offsetY: a.layerY;
    this.clientX = a.clientX !== h ? a.clientX: a.pageX;
    this.clientY = a.clientY !== h ? a.clientY: a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode: 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.ly = mb ? a.metaKey: a.ctrlKey;
    this.state = a.state;
    this.Yb = a;
    a.defaultPrevented && this.preventDefault();
    delete this.Nj
};
function gd(a) {
    return (Yc ? 0 == a.Yb.button: "click" == a.type ? i: !!(a.Yb.button & fd[0])) && !(B && mb && a.ctrlKey)
}
r.stopPropagation = function() {
    ed.g.stopPropagation.call(this);
    this.Yb.stopPropagation ? this.Yb.stopPropagation() : this.Yb.cancelBubble = i
};
r.preventDefault = function() {
    ed.g.preventDefault.call(this);
    var a = this.Yb;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = l, $c) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch(b) {}
};
r.QC = n("Yb");
r.m = ba();
function hd() {}
var id = 0;
r = hd.prototype;
r.key = 0;
r.Qj = l;
r.Sp = l;
r.k = function(a, b, c, d, f, g) {
    ra(a) ? this.ZD = i: a && a.handleEvent && ra(a.handleEvent) ? this.ZD = l: e(Error("Invalid listener argument"));
    this.Rf = a;
    this.proxy = b;
    this.src = c;
    this.type = d;
    this.capture = !!f;
    this.Oh = g;
    this.Sp = l;
    this.key = ++id;
    this.Qj = l
};
r.handleEvent = function(a) {
    return this.ZD ? this.Rf.call(this.Oh || this.src, a) : this.Rf.handleEvent.call(this.Rf, a)
};
var jd = {},
kd = {},
ld = {},
md = {};
function N(a, b, c, d, f) {
    if (oa(b)) {
        for (var g = 0; g < b.length; g++) N(a, b[g], c, d, f);
        return j
    }
    return nd(a, b, c, l, d, f)
}
function nd(a, b, c, d, f, g) {
    b || e(Error("Invalid event type"));
    var f = !!f,
    k = kd;
    b in k || (k[b] = {
        da: 0,
        He: 0
    });
    k = k[b];
    f in k || (k[f] = {
        da: 0,
        He: 0
    },
    k.da++);
    var k = k[f],
    m = ta(a),
    q;
    k.He++;
    if (k[m]) {
        q = k[m];
        for (var s = 0; s < q.length; s++) if (k = q[s], k.Rf == c && k.Oh == g) {
            if (k.Qj) break;
            d || (q[s].Sp = l);
            return q[s].key
        }
    } else q = k[m] = [],
    k.da++;
    var x = od,
    C = Zc ?
    function(a) {
        return x.call(C.src, C.key, a)
    }: function(a) {
        a = x.call(C.src, C.key, a);
        if (!a) return a
    },
    s = C;
    s.src = a;
    k = new hd;
    k.k(c, s, a, b, f, g);
    k.Sp = d;
    c = k.key;
    s.key = c;
    q.push(k);
    jd[c] = k;
    ld[m] || (ld[m] = []);
    ld[m].push(k);
    if (a) {
    a.addEventListener ? (a == ga || !a.VB) && a.addEventListener(b, s, f) : a.attachEvent(b in md ? md[b] : md[b] = "on" + b, s);
    }
    return c
}
function pd(a, b, c, d, f) {
    if (oa(b)) {
        for (var g = 0; g < b.length; g++) pd(a, b[g], c, d, f);
        return j
    }
    return nd(a, b, c, i, d, f)
}
function qd(a, b, c, d, f) {
    if (oa(b)) for (var g = 0; g < b.length; g++) qd(a, b[g], c, d, f);
    else if (d = !!d, a = rd(a, b, d)) for (g = 0; g < a.length; g++) if (a[g].Rf == c && a[g].capture == d && a[g].Oh == f) {
        sd(a[g].key);
        break
    }
}
function sd(a) {
    if (!jd[a]) return l;
    var b = jd[a];
    if (b.Qj) return l;
    var c = b.src,
    d = b.type,
    f = b.proxy,
    g = b.capture;
    c.removeEventListener ? (c == ga || !c.VB) && c.removeEventListener(d, f, g) : c.detachEvent && c.detachEvent(d in md ? md[d] : md[d] = "on" + d, f);
    c = ta(c);
    ld[c] && (f = ld[c], y.remove(f, b), 0 == f.length && delete ld[c]);
    b.Qj = i;
    if (b = kd[d][g][c]) b.cF = i,
    td(d, g, c, b);
    delete jd[a];
    return i
}
function td(a, b, c, d) {
    if (!d.Wr && d.cF) {
        for (var f = 0,
        g = 0; f < d.length; f++) d[f].Qj ? d[f].proxy.src = j: (f != g && (d[g] = d[f]), g++);
        d.length = g;
        d.cF = l;
        0 == g && (delete kd[a][b][c], kd[a][b].da--, 0 == kd[a][b].da && (delete kd[a][b], kd[a].da--), 0 == kd[a].da && delete kd[a])
    }
}
function ud(a) {
    var b, c = 0,
    d = b == j;
    b = !!b;
    if (a == j) F.forEach(ld,
    function(a) {
        for (var f = a.length - 1; 0 <= f; f--) {
            var g = a[f];
            if (d || b == g.capture) sd(g.key),
            c++
        }
    });
    else if (a = ta(a), ld[a]) for (var a = ld[a], f = a.length - 1; 0 <= f; f--) {
        var g = a[f];
        if (d || b == g.capture) sd(g.key),
        c++
    }
}
function rd(a, b, c) {
    var d = kd;
    return b in d && (d = d[b], c in d && (d = d[c], a = ta(a), d[a])) ? d[a] : j
}
function vd(a, b, c, d, f) {
    var g = 1,
    b = ta(b);
    if (a[b]) {
        a.He--;
        a = a[b];
        a.Wr ? a.Wr++:a.Wr = 1;
        try {
            for (var k = a.length,
            m = 0; m < k; m++) {
                var q = a[m];
                q && !q.Qj && (g &= wd(q, f) !== l)
            }
        } finally {
            a.Wr--,
            td(c, d, b, a)
        }
    }
    return Boolean(g)
}
function wd(a, b) {
    a.Sp && sd(a.key);
    return a.handleEvent(b)
}
function od(a, b) {
    if (!jd[a]) return i;
    var c = jd[a],
    d = c.type,
    f = kd;
    if (! (d in f)) return i;
    var f = f[d],
    g,
    k;
    if (!Zc) {
        g = b || ha("window.event");
        var m = i in f,
        q = l in f;
        if (m) {
            if (0 > g.keyCode || g.returnValue != h) return i;
            a: {
                var s = l;
                if (0 == g.keyCode) try {
                    g.keyCode = -1;
                    break a
                } catch(x) {
                    s = i
                }
                if (s || g.returnValue == h) g.returnValue = i
            }
        }
        s = new ed;
        s.k(g, this);
        g = i;
        try {
            if (m) {
                for (var C = [], J = s.currentTarget; J; J = J.parentNode) C.push(J);
                k = f[i];
                k.He = k.da;
                for (var G = C.length - 1; ! s.Nj && 0 <= G && k.He; G--) s.currentTarget = C[G],
                g &= vd(k, C[G], d, i, s);
                if (q) {
                    k = f[l];
                    k.He = k.da;
                    for (G = 0; ! s.Nj && G < C.length && k.He; G++) s.currentTarget = C[G],
                    g &= vd(k, C[G], d, l, s)
                }
            } else g = wd(c, s)
        } finally {
            C && (C.length = 0)
        }
        return g
    }
    d = new ed(b, this);
    return g = wd(c, d)
}
var xd = 0;
function yd(a) {
    return a + "_" + xd++
};
function zd() {
    M.call(this)
}
w(zd, M);
r = zd.prototype;
r.VB = i;
r.Gl = j;
r.Yy = ca("Gl");
r.addEventListener = function(a, b, c, d) {
    N(this, a, b, c, d)
};
r.removeEventListener = function(a, b, c, d) {
    qd(this, a, b, c, d)
};
r.dispatchEvent = function(a) {
    var b = a.type || a,
    c = kd;
    if (b in c) {
        if (t(a)) a = new ad(a, this);
        else if (a instanceof ad) a.target = a.target || this;
        else {
            var d = a,
            a = new ad(b, this);
            F.extend(a, d)
        }
        var d = 1,
        f, c = c[b],
        b = i in c,
        g;
        if (b) {
            f = [];
            for (g = this; g; g = g.Gl) f.push(g);
            g = c[i];
            g.He = g.da;
            for (var k = f.length - 1; ! a.Nj && 0 <= k && g.He; k--) a.currentTarget = f[k],
            d &= vd(g, f[k], a.type, i, a) && a.Ns != l
        }
        if (l in c) if (g = c[l], g.He = g.da, b) for (k = 0; ! a.Nj && k < f.length && g.He; k++) a.currentTarget = f[k],
        d &= vd(g, f[k], a.type, l, a) && a.Ns != l;
        else for (f = this; ! a.Nj && f && g.He; f = f.Gl) a.currentTarget = f,
        d &= vd(g, f, a.type, l, a) && a.Ns != l;
        a = Boolean(d)
    } else a = i;
    return a
};
r.m = function() {
    zd.g.m.call(this);
    ud(this);
    this.Gl = j
};
function Ad(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
        return eval("(" + a + ")")
    } catch(b) {}
    //e(Error("Invalid JSON string: " + a))
}
function Bd(a) {
    return eval("(" + a + ")")
}
function Cd(a, b) {
    return (new Dd(b)).serialize(a)
}
function Dd(a) {
    this.Ks = a
}
Dd.prototype.serialize = function(a) {
    var b = [];
    Ed(this, a, b);
    return b.join("")
};
function Ed(a, b, c) {
    switch (typeof b) {
    case "string":
        Fd(b, c);
        break;
    case "number":
        c.push(isFinite(b) && !isNaN(b) ? b: "null");
        break;
    case "boolean":
        c.push(b);
        break;
    case "undefined":
        c.push("null");
        break;
    case "object":
        if (b == j) {
            c.push("null");
            break
        }
        if (oa(b)) {
            a.serializeArray(b, c);
            break
        }
        c.push("{");
        var d = "",
        f;
        for (f in b) if (Object.prototype.hasOwnProperty.call(b, f)) {
            var g = b[f];
            "function" != typeof g && (c.push(d), Fd(f, c), c.push(":"), Ed(a, a.Ks ? a.Ks.call(b, f, g) : g, c), d = ",")
        }
        c.push("}");
        break;
    case "function":
        break;
    default:
        e(Error("Unknown type: " + typeof b))
    }
}
var Gd = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
},
Hd = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g: /[\\\"\x00-\x1f\x7f-\xff]/g;
function Fd(a, b) {
    b.push('"', a.replace(Hd,
    function(a) {
        if (a in Gd) return Gd[a];
        var b = a.charCodeAt(0),
        f = "\\u";
        16 > b ? f += "000": 256 > b ? f += "00": 4096 > b && (f += "0");
        return Gd[a] = f + b.toString(16)
    }), '"')
}
Dd.prototype.serializeArray = function(a, b) {
    var c = a.length;
    b.push("[");
    for (var d = "",
    f = 0; f < c; f++) b.push(d),
    d = a[f],
    Ed(this, this.Ks ? this.Ks.call(a, String(f), d) : d, b),
    d = ",";
    b.push("]")
};
function Id(a, b) {
    M.call(this);
    this.Gg = a || 1;
    this.cp = b || Jd;
    this.Au = u(this.vT, this);
    this.px = Aa()
}
w(Id, zd);
Id.prototype.enabled = l;
var Jd = ga.window;
r = Id.prototype;
r.ga = j;
r.setInterval = ea(10);
r.vT = function() {
    if (this.enabled) {
        var a = Aa() - this.px;
        0 < a && a < 0.8 * this.Gg ? this.ga = this.cp.setTimeout(this.Au, this.Gg - a) : (this.dispatchEvent(Kd), this.enabled && (this.ga = this.cp.setTimeout(this.Au, this.Gg), this.px = Aa()))
    }
};
r.start = function() {
    this.enabled = i;
    this.ga || (this.ga = this.cp.setTimeout(this.Au, this.Gg), this.px = Aa())
};
r.stop = function() {
    this.enabled = l;
    this.ga && (this.cp.clearTimeout(this.ga), this.ga = j)
};
r.m = function() {
    Id.g.m.call(this);
    this.stop();
    delete this.cp
};
var Kd = "tick";
function Ld(a, b, c) {
    ra(a) ? c && (a = u(a, c)) : a && "function" == typeof a.handleEvent ? a = u(a.handleEvent, a) : e(Error("Invalid listener argument"));
    return 2147483647 < b ? -1 : Jd.setTimeout(a, b || 0)
};
var Md = {
    Ha: function(a) {
        return "function" == typeof a.Ha ? a.Ha() : pa(a) || t(a) ? a.length: F.Ha(a)
    },
    Ea: function(a) {
        if ("function" == typeof a.Ea) return a.Ea();
        if (t(a)) return a.split("");
        if (pa(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return F.Ea(a)
    },
    Eb: function(a) {
        if ("function" == typeof a.Eb) return a.Eb();
        if ("function" != typeof a.Ea) {
            if (pa(a) || t(a)) {
                for (var b = [], a = a.length, c = 0; c < a; c++) b.push(c);
                return b
            }
            return F.Eb(a)
        }
    },
    contains: function(a, b) {
        return "function" == typeof a.contains ? a.contains(b) : "function" == typeof a.sg ? a.sg(b) : pa(a) || t(a) ? y.contains(a, b) : F.sg(a, b)
    },
    xb: function(a) {
        return "function" == typeof a.xb ? a.xb() : pa(a) || t(a) ? y.xb(a) : F.xb(a)
    },
    clear: function(a) {
        "function" == typeof a.clear ? a.clear() : pa(a) ? y.clear(a) : F.clear(a)
    },
    forEach: function(a, b, c) {
        if ("function" == typeof a.forEach) a.forEach(b, c);
        else if (pa(a) || t(a)) y.forEach(a, b, c);
        else for (var d = Md.Eb(a), f = Md.Ea(a), g = f.length, k = 0; k < g; k++) b.call(c, f[k], d && d[k], a)
    },
    filter: function(a, b, c) {
        if ("function" == typeof a.filter) return a.filter(b, c);
        if (pa(a) || t(a)) return y.filter(a, b, c);
        var d, f = Md.Eb(a),
        g = Md.Ea(a),
        k = g.length;
        if (f) {
            d = {};
            for (var m = 0; m < k; m++) b.call(c, g[m], f[m], a) && (d[f[m]] = g[m])
        } else {
            d = [];
            for (m = 0; m < k; m++) b.call(c, g[m], h, a) && d.push(g[m])
        }
        return d
    },
    map: function(a, b, c) {
        if ("function" == typeof a.map) return a.map(b, c);
        if (pa(a) || t(a)) return y.map(a, b, c);
        var d, f = Md.Eb(a),
        g = Md.Ea(a),
        k = g.length;
        if (f) {
            d = {};
            for (var m = 0; m < k; m++) d[f[m]] = b.call(c, g[m], f[m], a)
        } else {
            d = [];
            for (m = 0; m < k; m++) d[m] = b.call(c, g[m], h, a)
        }
        return d
    },
    some: function(a, b, c) {
        if ("function" == typeof a.some) return a.some(b, c);
        if (pa(a) || t(a)) return y.some(a, b, c);
        for (var d = Md.Eb(a), f = Md.Ea(a), g = f.length, k = 0; k < g; k++) if (b.call(c, f[k], d && d[k], a)) return i;
        return l
    },
    every: function(a, b, c) {
        if ("function" == typeof a.every) return a.every(b, c);
        if (pa(a) || t(a)) return y.every(a, b, c);
        for (var d = Md.Eb(a), f = Md.Ea(a), g = f.length, k = 0; k < g; k++) if (!b.call(c, f[k], d && d[k], a)) return l;
        return i
    }
};
var O = {};
O.Ta = "StopIteration" in ga ? ga.StopIteration: Error("StopIteration");
function Nd() {}
Nd.prototype.next = function() {
    e(O.Ta)
};
Nd.prototype.Fd = function() {
    return this
};
O.Mc = function(a) {
    if (a instanceof Nd) return a;
    if ("function" == typeof a.Fd) return a.Fd(l);
    if (pa(a)) {
        var b = 0,
        c = new Nd;
        c.next = function() {
            for (;;) {
                b >= a.length && e(O.Ta);
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    e(Error("Not implemented"))
};
O.forEach = function(a, b, c) {
    if (pa(a)) try {
        y.forEach(a, b, c)
    } catch(d) {
        d !== O.Ta && e(d)
    } else {
        a = O.Mc(a);
        try {
            for (;;) b.call(c, a.next(), h, a)
        } catch(f) {
            f !== O.Ta && e(f)
        }
    }
};
O.filter = function(a, b, c) {
    var d = O.Mc(a),
    a = new Nd;
    a.next = function() {
        for (;;) {
            var a = d.next();
            if (b.call(c, a, h, d)) return a
        }
    };
    return a
};
O.zo = function(a, b, c) {
    var d = 0,
    f = a,
    g = c || 1;
    1 < arguments.length && (d = a, f = b);
    0 == g && e(Error("Range step argument must not be zero"));
    var k = new Nd;
    k.next = function() { (0 < g && d >= f || 0 > g && d <= f) && e(O.Ta);
        var a = d;
        d += g;
        return a
    };
    return k
};
O.join = function(a, b) {
    return O.toArray(a).join(b)
};
O.map = function(a, b, c) {
    var d = O.Mc(a),
    a = new Nd;
    a.next = function() {
        for (;;) {
            var a = d.next();
            return b.call(c, a, h, d)
        }
    };
    return a
};
O.reduce = function(a, b, c, d) {
    var f = c;
    O.forEach(a,
    function(a) {
        f = b.call(d, f, a)
    });
    return f
};
O.some = function(a, b, c) {
    a = O.Mc(a);
    try {
        for (;;) if (b.call(c, a.next(), h, a)) return i
    } catch(d) {
        d !== O.Ta && e(d)
    }
    return l
};
O.every = function(a, b, c) {
    a = O.Mc(a);
    try {
        for (;;) if (!b.call(c, a.next(), h, a)) return l
    } catch(d) {
        d !== O.Ta && e(d)
    }
    return i
};
O.$J = function(a) {
    var b = arguments,
    c = b.length,
    d = 0,
    f = new Nd;
    f.next = function() {
        try {
            return d >= c && e(O.Ta),
            O.Mc(b[d]).next()
        } catch(a) {
            return (a !== O.Ta || d >= c) && e(a),
            d++,
            this.next()
        }
    };
    return f
};
O.jL = function(a, b) {
    var c = O.Mc(a),
    d = new Nd,
    f = i;
    d.next = function() {
        for (;;) {
            var a = c.next();
            if (!f || !b.call(h, a, h, c)) return f = l,
            a
        }
    };
    return d
};
O.Ez = function(a, b) {
    var c = O.Mc(a),
    d = new Nd,
    f = i;
    d.next = function() {
        for (;;) if (f) {
            var a = c.next();
            if (b.call(h, a, h, c)) return a;
            f = l
        } else e(O.Ta)
    };
    return d
};
O.toArray = function(a) {
    if (pa(a)) return y.toArray(a);
    var a = O.Mc(a),
    b = [];
    O.forEach(a,
    function(a) {
        b.push(a)
    });
    return b
};
O.Ti = function(a, b) {
    var a = O.Mc(a),
    b = O.Mc(b),
    c,
    d;
    try {
        for (;;) {
            c = d = l;
            var f = a.next();
            c = i;
            var g = b.next();
            d = i;
            if (f != g) break
        }
    } catch(k) {
        k !== O.Ta && e(k);
        if (c && !d) return l;
        if (!d) try {
            b.next()
        } catch(m) {
            return m !== O.Ta && e(m),
            i
        }
    }
    return l
};
O.tY = function(a, b) {
    try {
        return O.Mc(a).next()
    } catch(c) {
        return c != O.Ta && e(c),
        b
    }
};
O.product = function(a) {
    if (y.some(arguments,
    function(a) {
        return ! a.length
    }) || !arguments.length) return new Nd;
    var b = new Nd,
    c = arguments,
    d = y.repeat(0, c.length);
    b.next = function() {
        if (d) {
            for (var a = y.map(d,
            function(a, b) {
                return c[b][a]
            }), b = d.length - 1; 0 <= b; b--) {
                if (d[b] < c[b].length - 1) {
                    d[b]++;
                    break
                }
                if (0 == b) {
                    d = j;
                    break
                }
                d[b] = 0
            }
            return a
        }
        e(O.Ta)
    };
    return b
};
O.av = function(a) {
    var b = O.Mc(a),
    c = [],
    d = 0,
    a = new Nd,
    f = l;
    a.next = function() {
        var a = j;
        if (!f) try {
            return a = b.next(),
            c.push(a),
            a
        } catch(k) { (k != O.Ta || y.xb(c)) && e(k),
            f = i
        }
        a = c[d];
        d = (d + 1) % c.length;
        return a
    };
    return a
};
function Od(a, b) {
    this.kb = {};
    this.Ka = [];
    var c = arguments.length;
    if (1 < c) {
        c % 2 && e(Error("Uneven number of arguments"));
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.cu(a)
}
r = Od.prototype;
r.da = 0;
r.jp = 0;
r.Ha = n("da");
r.Ea = function() {
    Pd(this);
    for (var a = [], b = 0; b < this.Ka.length; b++) a.push(this.kb[this.Ka[b]]);
    return a
};
r.Eb = function() {
    Pd(this);
    return this.Ka.concat()
};
r.Gd = function(a) {
    return Qd(this.kb, a)
};
r.sg = function(a) {
    for (var b = 0; b < this.Ka.length; b++) {
        var c = this.Ka[b];
        if (Qd(this.kb, c) && this.kb[c] == a) return i
    }
    return l
};
r.Ti = function(a, b) {
    if (this === a) return i;
    if (this.da != a.Ha()) return l;
    var c = b || Rd;
    Pd(this);
    for (var d, f = 0; d = this.Ka[f]; f++) if (!c(this.get(d), a.get(d))) return l;
    return i
};
function Rd(a, b) {
    return a === b
}
r.xb = function() {
    return 0 == this.da
};
r.clear = function() {
    this.kb = {};
    this.jp = this.da = this.Ka.length = 0
};
r.remove = function(a) {
    return Qd(this.kb, a) ? (delete this.kb[a], this.da--, this.jp++, this.Ka.length > 2 * this.da && Pd(this), i) : l
};
function Pd(a) {
    if (a.da != a.Ka.length) {
        for (var b = 0,
        c = 0; b < a.Ka.length;) {
            var d = a.Ka[b];
            Qd(a.kb, d) && (a.Ka[c++] = d);
            b++
        }
        a.Ka.length = c
    }
    if (a.da != a.Ka.length) {
        for (var f = {},
        c = b = 0; b < a.Ka.length;) d = a.Ka[b],
        Qd(f, d) || (a.Ka[c++] = d, f[d] = 1),
        b++;
        a.Ka.length = c
    }
}
r.get = function(a, b) {
    return Qd(this.kb, a) ? this.kb[a] : b
};
r.set = function(a, b) {
    Qd(this.kb, a) || (this.da++, this.Ka.push(a), this.jp++);
    this.kb[a] = b
};
r.cu = function(a) {
    var b;
    a instanceof Od ? (b = a.Eb(), a = a.Ea()) : (b = F.Eb(a), a = F.Ea(a));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
};
r.clone = function() {
    return new Od(this)
};
r.im = function() {
    for (var a = new Od,
    b = 0; b < this.Ka.length; b++) {
        var c = this.Ka[b];
        a.set(this.kb[c], c)
    }
    return a
};
r.qt = function() {
    Pd(this);
    for (var a = {},
    b = 0; b < this.Ka.length; b++) {
        var c = this.Ka[b];
        a[c] = this.kb[c]
    }
    return a
};
r.Fd = function(a) {
    Pd(this);
    var b = 0,
    c = this.Ka,
    d = this.kb,
    f = this.jp,
    g = this,
    k = new Nd;
    k.next = function() {
        for (;;) {
            f != g.jp && e(Error("The map has changed since the iterator was created"));
            b >= c.length && e(O.Ta);
            var k = c[b++];
            return a ? k: d[k]
        }
    };
    return k
};
function Qd(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
function Sd(a) {
    this.kb = new Od;
    a && this.cu(a)
}
function Td(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + ta(a) : b.substr(0, 1) + a
}
r = Sd.prototype;
r.Ha = function() {
    return this.kb.Ha()
};
r.add = function(a) {
    this.kb.set(Td(a), a)
};
r.cu = function(a) {
    for (var a = Md.Ea(a), b = a.length, c = 0; c < b; c++) this.add(a[c])
};
r.Ac = function(a) {
    for (var a = Md.Ea(a), b = a.length, c = 0; c < b; c++) this.remove(a[c])
};
r.remove = function(a) {
    return this.kb.remove(Td(a))
};
r.clear = function() {
    this.kb.clear()
};
r.xb = function() {
    return this.kb.xb()
};
r.contains = function(a) {
    return this.kb.Gd(Td(a))
};
r.TD = function(a) {
    for (var b = new Sd,
    a = Md.Ea(a), c = 0; c < a.length; c++) {
        var d = a[c];
        this.contains(d) && b.add(d)
    }
    return b
};
r.Ea = function() {
    return this.kb.Ea()
};
r.clone = function() {
    return new Sd(this)
};
r.Ti = function(a) {
    var b;
    if (b = this.Ha() == Md.Ha(a)) {
        var c = a,
        a = Md.Ha(c);
        this.Ha() > a ? b = l: (!(c instanceof Sd) && 5 < a && (c = new Sd(c)), b = Md.every(this,
        function(a) {
            return Md.contains(c, a)
        }))
    }
    return b
};
r.Fd = function() {
    return this.kb.Fd(l)
};
function Ud(a) {
    return Vd(a || arguments.callee.caller, [])
}
function Vd(a, b) {
    var c = [];
    if (y.contains(b, a)) c.push("[...circular reference...]");
    else if (a && 50 > b.length) {
        c.push(Wd(a) + "(");
        for (var d = a.arguments,
        f = 0; f < d.length; f++) {
            0 < f && c.push(", ");
            var g;
            g = d[f];
            switch (typeof g) {
            case "object":
                g = g ? "object": "null";
                break;
            case "string":
                break;
            case "number":
                g = String(g);
                break;
            case "boolean":
                g = g ? "true": "false";
                break;
            case "function":
                g = (g = Wd(g)) ? g: "[fn]";
                break;
            default:
                g = typeof g
            }
            40 < g.length && (g = g.substr(0, 40) + "...");
            c.push(g)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(Vd(a.caller, b))
        } catch(k) {
            c.push("[exception trying to get caller]\n")
        }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}
function Wd(a) {
    if (Xd[a]) return Xd[a];
    a = String(a);
    if (!Xd[a]) {
        var b = /function ([^\(]+)/.exec(a);
        Xd[a] = b ? b[1] : "[Anonymous]"
    }
    return Xd[a]
}
var Xd = {};
function Yd(a, b, c, d, f) {
    this.reset(a, b, c, d, f)
}
Yd.prototype.AS = 0;
Yd.prototype.vC = j;
Yd.prototype.uC = j;
var Zd = 0;
Yd.prototype.reset = function(a, b, c, d, f) {
    this.AS = "number" == typeof f ? f: Zd++;
    this.eZ = d || Aa();
    this.$n = a;
    this.$E = b;
    this.kY = c;
    delete this.vC;
    delete this.uC
};
Yd.prototype.LG = ca("$n");
Yd.prototype.Yj = ca("$E");
function $d(a) {
    this.qP = a
}
$d.prototype.Oa = j;
$d.prototype.$n = j;
$d.prototype.Kb = j;
$d.prototype.wD = j;
function ae(a, b) {
    this.name = a;
    this.value = b
}
ae.prototype.toString = n("name");
var be = new ae("SHOUT", 1200),
ce = new ae("SEVERE", 1E3),
de = new ae("WARNING", 900),
ee = new ae("INFO", 800),
fe = new ae("CONFIG", 700),
ge = new ae("FINE", 500);
r = $d.prototype;
r.getParent = n("Oa");
r.SC = function() {
    this.Kb || (this.Kb = {});
    return this.Kb
};
r.LG = ca("$n");
function he(a) {
    return a.$n ? a.$n: a.Oa ? he(a.Oa) : j
}
r.log = function(a, b, c) {
    if (a.value >= he(this).value) {
        a = this.TL(a, b, c);
        b = "log:" + a.$E;
        ga.console && (ga.console.timeStamp ? ga.console.timeStamp(b) : ga.console.markTimeline && ga.console.markTimeline(b));
        ga.msWriteProfilerMark && ga.msWriteProfilerMark(b);
        for (b = this; b;) {
            var c = b,
            d = a;
            if (c.wD) for (var f = 0,
            g = h; g = c.wD[f]; f++) g(d);
            b = b.getParent()
        }
    }
};
r.TL = function(a, b, c) {
    var d = new Yd(a, String(b), this.qP);
    if (c) {
        d.vC = c;
        var f;
        var g = arguments.callee.caller;
        try {
            var k;
            var m = ha("window.location.href");
            if (t(c)) k = {
                message: c,
                name: "Unknown error",
                lineNumber: "Not available",
                fileName: m,
                stack: "Not available"
            };
            else {
                var q, s, x = l;
                try {
                    q = c.lineNumber || c.jY || "Not available"
                } catch(C) {
                    q = "Not available",
                    x = i
                }
                try {
                    s = c.fileName || c.filename || c.sourceURL || m
                } catch(J) {
                    s = "Not available",
                    x = i
                }
                k = x || !c.lineNumber || !c.fileName || !c.stack ? {
                    message: c.message,
                    name: c.name,
                    lineNumber: q,
                    fileName: s,
                    stack: c.stack || "Not available"
                }: c
            }
            f = "Message: " + Ra(k.message) + '\nUrl: <a href="view-source:' + k.fileName + '" target="_new">' + k.fileName + "</a>\nLine: " + k.lineNumber + "\n\nBrowser stack:\n" + Ra(k.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + Ra(Ud(g) + "-> ")
        } catch(G) {
            f = "Exception trying to expose exception! You win, we lose. " + G
        }
        d.uC = f
    }
    return d
};
r.nk = function(a, b) {
    this.log(de, a, b)
};
r.info = function(a, b) {
    this.log(ee, a, b)
};
r.zB = ea(11);
function ie(a, b) {
    a.log(ge, b, h)
}
var je = {},
ke = j;
function le(a) {
    ke || (ke = new $d(""), je[""] = ke, ke.LG(fe));
    var b;
    if (! (b = je[a])) {
        b = new $d(a);
        var c = a.lastIndexOf("."),
        d = a.substr(c + 1),
        c = le(a.substr(0, c));
        c.SC()[d] = b;
        b.Oa = c;
        je[a] = b
    }
    return b
};
function me(a) {
    M.call(this);
    this.oa = a;
    this.Ka = []
}
w(me, M);
var ne = [];
r = me.prototype;
r.c = function(a, b, c, d, f) {
    oa(b) || (ne[0] = b, b = ne);
    for (var g = 0; g < b.length; g++) {
        var k = N(a, b[g], c || this, d || l, f || this.oa || this);
        this.Ka.push(k)
    }
    return this
};
function Q(a, b, c, d, f, g) {
    if (oa(c)) for (var k = 0; k < c.length; k++) Q(a, b, c[k], d, f, g);
    else b = pd(b, c, d || a, f, g || a.oa || a),
    a.Ka.push(b)
}
r.ya = function(a, b, c, d, f) {
    if (oa(b)) for (var g = 0; g < b.length; g++) this.ya(a, b[g], c, d, f);
    else {
        a: {
            c = c || this;
            f = f || this.oa || this;
            d = !!d;
            if (a = rd(a, b, d)) for (b = 0; b < a.length; b++) if (!a[b].Qj && a[b].Rf == c && a[b].capture == d && a[b].Oh == f) {
                a = a[b];
                break a
            }
            a = j
        }
        a && (a = a.key, sd(a), y.remove(this.Ka, a))
    }
    return this
};
r.Ac = function() {
    y.forEach(this.Ka, sd);
    this.Ka.length = 0
};
r.m = function() {
    me.g.m.call(this);
    this.Ac()
};
r.handleEvent = function() {
    e(Error("EventHandler.handleEvent not implemented"))
};
function oe(a) {
    M.call(this);
    this.lk = a;
    this.Ms = []
}
w(oe, M);
oe.prototype.wa = le("goog.net.BulkLoaderHelper");
oe.prototype.Wv = n("Ms");
oe.prototype.m = function() {
    oe.g.m.call(this);
    this.Ms = this.lk = j
};
function pe() {}
pe.prototype.nB = j;
function qe(a) {
    var b;
    if (! (b = a.nB)) b = {},
    re(a) && (b[0] = i, b[1] = i),
    b = a.nB = b;
    return b
};
var se;
function te() {}
w(te, pe);
function ue(a) {
    return (a = re(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function re(a) {
    if (!a.DD && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d),
                a.DD = d
            } catch(f) {}
        }
        e(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
    }
    return a.DD
}
se = new te;
var ve = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function we(a, b, c) {
    if (oa(b)) for (var d = 0; d < b.length; d++) we(a, String(b[d]), c);
    else b != j && c.push("&", a, "" === b ? "": "=", encodeURIComponent(String(b)))
}
function xe(a) {
    var b = [],
    c;
    for (c in a) we(c, a[c], b);
    b[0] = "";
    return b.join("")
};
function ye(a) {
    M.call(this);
    this.headers = new Od;
    this.Ht = a || j
}
w(ye, zd);
ye.prototype.wa = le("goog.net.XhrIo");
var ze = /^https?$/i;
r = ye.prototype;
r.nh = l;
r.ca = j;
r.Gt = j;
r.Or = "";
r.pE = "";
r.Vn = 0;
r.Wn = "";
r.yv = l;
r.pr = l;
r.Jw = l;
r.lj = l;
r.lt = 0;
r.ik = j;
r.rG = "";
r.oU = l;
r.send = function(a, b, c, d) {
    this.ca && e(Error("[goog.net.XhrIo] Object is active with another request=" + this.Or + "; newUri=" + a));
    b = b ? b.toUpperCase() : "GET";
    this.Or = a;
    this.Wn = "";
    this.Vn = 0;
    this.pE = b;
    this.yv = l;
    this.nh = i;
    this.ca = this.Ht ? ue(this.Ht) : ue(se);
    this.Gt = this.Ht ? qe(this.Ht) : qe(se);
    this.ca.onreadystatechange = u(this.BF, this);
    try {
        ie(this.wa, Ae(this, "Opening Xhr")),
        this.Jw = i,
        this.ca.open(b, a, i),
        this.Jw = l
    } catch(f) {
        ie(this.wa, Ae(this, "Error opening Xhr: " + f.message));
        Be(this, f);
        return
    }
    var a = c || "",
    g = this.headers.clone();
    d && Md.forEach(d,
    function(a, b) {
        g.set(b, a)
    });
    d = ga.FormData && a instanceof ga.FormData;
    "POST" == b && (!g.Gd("Content-Type") && !d) && g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    Md.forEach(g,
    function(a, b) {
        this.ca.setRequestHeader(b, a)
    },
    this);
    this.rG && (this.ca.responseType = this.rG);
    F.Gd(this.ca, "withCredentials") && (this.ca.withCredentials = this.oU);
    try {
        this.ik && (Jd.clearTimeout(this.ik), this.ik = j),
        0 < this.lt && (ie(this.wa, Ae(this, "Will abort after " + this.lt + "ms if incomplete")), this.ik = Jd.setTimeout(u(this.mt, this), this.lt)),
        ie(this.wa, Ae(this, "Sending request")),
        this.pr = i,
        this.ca.send(a),
        this.pr = l
    } catch(k) {
        ie(this.wa, Ae(this, "Send error: " + k.message)),
        Be(this, k)
    }
};
r.mt = function() {
    "undefined" != typeof fa && this.ca && (this.Wn = "Timed out after " + this.lt + "ms, aborting", this.Vn = 8, ie(this.wa, Ae(this, this.Wn)), this.dispatchEvent("timeout"), this.abort(8))
};
function Be(a, b) {
    a.nh = l;
    a.ca && (a.lj = i, a.ca.abort(), a.lj = l);
    a.Wn = b;
    a.Vn = 5;
    Ce(a);
    De(a)
}
function Ce(a) {
    a.yv || (a.yv = i, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
r.abort = function(a) {
    this.ca && this.nh && (ie(this.wa, Ae(this, "Aborting")), this.nh = l, this.lj = i, this.ca.abort(), this.lj = l, this.Vn = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), De(this))
};
r.m = function() {
    this.ca && (this.nh && (this.nh = l, this.lj = i, this.ca.abort(), this.lj = l), De(this, i));
    ye.g.m.call(this)
};
r.BF = function() { ! this.Jw && !this.pr && !this.lj ? this.qQ() : Ee(this)
};
r.qQ = function() {
    Ee(this)
};
function Ee(a) {
    if (a.nh && "undefined" != typeof fa) if (a.Gt[1] && 4 == Fe(a) && 2 == Ge(a)) ie(a.wa, Ae(a, "Local request error detected and ignored"));
    else if (a.pr && 4 == Fe(a)) Jd.setTimeout(u(a.BF, a), 0);
    else if (a.dispatchEvent("readystatechange"), 4 == Fe(a)) {
        ie(a.wa, Ae(a, "Request complete"));
        a.nh = l;
        try {
            if (He(a)) a.dispatchEvent("complete"),
            a.dispatchEvent("success");
            else {
                a.Vn = 6;
                var b;
                try {
                    b = 2 < Fe(a) ? a.ca.statusText: ""
                } catch(c) {
                    ie(a.wa, "Can not get status: " + c.message),
                    b = ""
                }
                a.Wn = b + " [" + Ge(a) + "]";
                Ce(a)
            }
        } finally {
            De(a)
        }
    }
}
function De(a, b) {
    if (a.ca) {
        var c = a.ca,
        d = a.Gt[0] ? ia: j;
        a.ca = j;
        a.Gt = j;
        a.ik && (Jd.clearTimeout(a.ik), a.ik = j);
        b || a.dispatchEvent("ready");
        try {
            c.onreadystatechange = d
        } catch(f) {
            a.wa.log(ce, "Problem encountered resetting onreadystatechange: " + f.message, h)
        }
    }
}
r.wb = function() {
    return !! this.ca
};
function He(a) {
    var b = Ge(a),
    c;
    a: switch (b) {
    case 200:
    case 201:
    case 202:
    case 204:
    case 206:
    case 304:
    case 1223:
        c = i;
        break a;
    default:
        c = l
    }
    if (!c) {
        if (b = 0 === b) a = String(a.Or).match(ve)[1] || j,
        !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)),
        b = !ze.test(a ? a.toLowerCase() : "");
        c = b
    }
    return c
}
function Fe(a) {
    return a.ca ? a.ca.readyState: 0
}
function Ge(a) {
    try {
        return 2 < Fe(a) ? a.ca.status: -1
    } catch(b) {
        return a.wa.nk("Can not get status: " + b.message),
        -1
    }
}
function Ie(a) {
    try {
        return a.ca ? a.ca.responseText: ""
    } catch(b) {
        return ie(a.wa, "Can not get responseText: " + b.message),
        ""
    }
}
function R(a) {
    if (a.ca) return Ad(a.ca.responseText)
}
r.getResponseHeader = function(a) {
    return this.ca && 4 == Fe(this) ? this.ca.getResponseHeader(a) : h
};
function Ae(a, b) {
    return b + " [" + a.pE + " " + a.Or + " " + Ge(a) + "]"
};
function Je(a) {
    M.call(this);
    this.ij = new oe(a);
    this.G = new me(this)
}
w(Je, zd);
r = Je.prototype;
r.wa = le("goog.net.BulkLoader");
r.Wv = function() {
    return this.ij.Wv()
};
r.load = function() {
    var a = this.G,
    b = this.ij.lk;
    this.wa.info("Starting load of code with " + b.length + " uris.");
    for (var c = 0; c < b.length; c++) {
        var d = new ye;
        a.c(d, "complete", u(this.BM, this, c));
        d.send(b[c])
    }
};
r.BM = function(a, b) {
    this.wa.info('Received event "' + b.type + '" for id ' + a + " with uri " + this.ij.lk[a]);
    var c = b.target;
    He(c) ? this.tw(a, c) : this.jw(a, c)
};
r.tw = function(a, b) {
    var c = Ie(b);
    this.ij.Ms[a] = c;
    a: {
        var d = this.ij,
        c = d.Ms;
        if (c.length == d.lk.length) {
            for (d = 0; d < c.length; d++) if (c[d] == j) {
                c = l;
                break a
            }
            c = i
        } else c = l
    }
    c && (this.wa.info("All uris loaded."), this.dispatchEvent("success"));
    b.w()
};
r.jw = function(a, b) {
    this.dispatchEvent("error");
    b.w()
};
r.m = function() {
    Je.g.m.call(this);
    this.G.w();
    this.G = j;
    this.ij.w();
    this.ij = j
};
/*
																																																																																											 * Portions
																																																																																											 * of
																																																																																											 * this
																																																																																											 * code
																																																																																											 * are
																																																																																											 * from
																																																																																											 * MochiKit,
																																																																																											 * received
																																																																																											 * by
																																																																																											 * The
																																																																																											 * Closure
																																																																																											 * Authors
																																																																																											 * under
																																																																																											 * the
																																																																																											 * MIT
																																																																																											 * license.
																																																																																											 * All
																																																																																											 * other
																																																																																											 * code
																																																																																											 * is
																																																																																											 * Copyright
																																																																																											 * 2005-2009
																																																																																											 * The
																																																																																											 * Closure
																																																																																											 * Authors.
																																																																																											 * All
																																																																																											 * Rights
																																																																																											 * Reserved.
																																																																																											 */
function Ke(a, b) {
    this.Um = [];
    this.pB = a;
    this.YB = b || j
}
r = Ke.prototype;
r.Eh = l;
r.yn = l;
r.vo = 0;
r.oz = l;
r.aK = l;
r.Bu = 0;
r.cancel = function(a) {
    if (this.Eh) this.Eo instanceof Ke && this.Eo.cancel();
    else {
        if (this.Oa) {
            var b = this.Oa;
            delete this.Oa;
            a ? b.cancel(a) : (b.Bu--, 0 >= b.Bu && b.cancel())
        }
        this.pB ? this.pB.call(this.YB, this) : this.oz = i;
        this.Eh || Le(this, new Me(this))
    }
};
r.GB = function(a, b) {
    Ne(this, a, b);
    this.vo--;
    0 == this.vo && this.Eh && Oe(this)
};
function Ne(a, b, c) {
    a.Eh = i;
    a.Eo = c;
    a.yn = !b;
    Oe(a)
}
r.sh = function() {
    this.Eh && (this.oz || e(new Pe(this)), this.oz = l)
};
r.Gk = function(a) {
    this.sh();
    Ne(this, i, a)
};
function Le(a, b) {
    a.sh();
    Ne(a, l, b)
}
function Qe(a) {
    return y.some(a.Um,
    function(a) {
        return ra(a[1])
    })
}
function Oe(a) {
    a.Sz && (a.Eh && Qe(a)) && (ga.clearTimeout(a.Sz), delete a.Sz);
    a.Oa && (a.Oa.Bu--, delete a.Oa);
    for (var b = a.Eo,
    c = l,
    d = l; a.Um.length && 0 == a.vo;) {
        var f = a.Um.shift(),
        g = f[0],
        k = f[1],
        f = f[2];
        if (g = a.yn ? k: g) try {
            var m = g.call(f || a.YB, b);
            la(m) && (a.yn = a.yn && (m == b || m instanceof Error), a.Eo = b = m);
            b instanceof Ke && (d = i, a.vo++)
        } catch(q) {
            b = q,
            a.yn = i,
            Qe(a) || (c = i)
        }
    }
    a.Eo = b;
    d && a.vo && (d = b, m = u(a.GB, a, i), g = u(a.GB, a, l), d.Um.push([m, g, h]), d.Eh && Oe(d), b.aK = i);
    c && (a.Sz = ga.setTimeout(function() {
        e(b)
    },
    0))
}
function Pe(a) {
    Ea.call(this);
    this.deferred = a
}
w(Pe, Ea);
Pe.prototype.message = "Deferred has already fired";
Pe.prototype.name = "AlreadyCalledError";
function Me(a) {
    Ea.call(this);
    this.deferred = a
}
w(Me, Ea);
Me.prototype.message = "Deferred was cancelled";
Me.prototype.name = "CancelledError";
var Re = [];
function Se() {
    if (this && this.AG) {
        var a = this.AG;
        a && "SCRIPT" == a.tagName && Te(a, i, this.mt)
    }
}
function Te(a, b, c) {
    c != j && ga.clearTimeout(c);
    a.onload = ia;
    a.onerror = ia;
    a.onreadystatechange = ia;
    b && window.setTimeout(function() {
        L(a)
    },
    0)
}
function Ue(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    Ea.call(this, c);
    this.code = a
}
w(Ue, Ea);
function Ve() {
    M.call(this);
    this.G = new me(this);
    this.gf = {}
}
w(Ve, zd);
r = Ve.prototype;
r.Ob = le("goog.module.ModuleLoader");
r.dv = l;
r.YS = l;
r.KO = function(a, b, c, d) {
    var f = this.gf[a] || new We;
    f.DE = i;
    f.Cz = c || j;
    f.zv = d || j;
    this.gf[a] ? f.Hy != j && Xe(this, a) : (this.gf[a] = f, Ye(this, a, b))
};
function Xe(a, b) {
    a.dispatchEvent(new Ze($e, b));
    a.Ob.info("evaluateCode ids:" + b);
    var c = i,
    d = a.gf[b],
    f = d.pG,
    g = d.Hy;
    try {
        if (a.YS) for (var k = 0; k < f.length; k++) Ba(g[k] + " //@ sourceURL=" + f[k]);
        else Ba(g.join("\n"))
    } catch(m) {
        c = l,
        a.Ob.nk("Loaded incomplete code for module(s): " + b, m)
    }
    a.dispatchEvent(new Ze(af, b));
    c ? d.Cz && d.Cz() : bf(a, b, d.zv, j);
    delete a.gf[b]
}
r.tw = function(a, b) {
    this.Ob.info("Code loaded for module(s): " + b);
    var c = this.gf[b];
    c.Hy = a.Wv();
    c.DE && Xe(this, b);
    Ld(a.w, 5, a)
};
r.ry = function(a, b) {
    if (!this.dv && !this.gf[[a]]) {
        var c = {};
        c[a] = b;
        this.gf[[a]] = new We;
        Ye(this, [a], c)
    }
};
function Ye(a, b, c) {
    for (var d = [], f = 0; f < b.length; f++) y.extend(d, c[b[f]].lk);
    a.Ob.info("downloadModules ids:" + b + " uris:" + d);
    if (a.dv) {
        var g = d;
        if (g.length && (a = Re.length, y.extend(Re, g), !a)) {
            var g = Re,
            k = function() {
                var a = g.shift(),
                b = {},
                c = b.document || document,
                d = document.createElement("SCRIPT"),
                f = {
                    AG: d,
                    mt: h
                },
                J = new Ke(Se, f),
                G = j,
                P = b.timeout != j ? b.timeout: 5E3;
                0 < P && (G = window.setTimeout(function() {
                    Te(d, i);
                    Le(J, new Ue(1, "Timeout reached for loading script " + a))
                },
                P), f.mt = G);
                d.onload = d.onreadystatechange = function() {
                    if (!d.readyState || "loaded" == d.readyState || "complete" == d.readyState) Te(d, b.hX || l, G),
                    J.Gk(j)
                };
                d.onerror = function() {
                    Te(d, i, G);
                    Le(J, new Ue(0, "Error while loading script " + a))
                };
                Yb(d, {
                    type: "text/javascript",
                    charset: "UTF-8",
                    src: a
                });
                f = c.getElementsByTagName("HEAD"); (!f || y.xb(f) ? c.documentElement: f[0]).appendChild(d);
                g.length && (J.Um.push([k, k, h]), J.Eh && Oe(J))
            };
            k()
        }
    } else a.gf[b].pG = d,
    c = new Je(d),
    d = a.G,
    d.c(c, "success", u(a.tw, a, c, b), l, j),
    d.c(c, "error", u(a.jw, a, c, b), l, j),
    c.load()
}
r.jw = function(a, b, c) {
    var d = this.gf[b];
    d && (delete this.gf[b], bf(this, b, d.zv, c));
    Ld(a.w, 5, a)
};
function bf(a, b, c, d) {
    a.dispatchEvent(new Ze(cf, b));
    a.Ob.nk("Request failed for module(s): " + b);
    c && c(d)
}
r.m = function() {
    Ve.g.m.call(this);
    this.G.w();
    this.G = j
};
var af = yd("evaluateCode"),
$e = yd("requestSuccess"),
cf = yd("requestError");
function Ze(a, b) {
    ad.call(this, a);
    this.qY = b
}
w(Ze, ad);
function We() {
    this.Hy = this.pG = j;
    this.DE = l;
    this.zv = this.Cz = j
};
function df(a, b) {
    M.call(this);
    this.JE = b;
    this.Bg = [];
    a > this.JE && e(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
    for (var c = 0; c < a; c++) this.Bg.push(this.Kk())
}
w(df, M);
r = df.prototype;
r.HB = j;
r.fC = j;
function ef(a, b) {
    a.Bg.length < a.JE ? a.Bg.push(b) : a.qv(b)
}
r.Kk = function() {
    return this.HB ? this.HB() : {}
};
r.qv = function(a) {
    if (this.fC) this.fC(a);
    else if (sa(a)) if (ra(a.w)) a.w();
    else for (var b in a) delete a[b]
};
r.m = function() {
    df.g.m.call(this);
    for (var a = this.Bg; a.length;) this.qv(a.pop());
    delete this.Bg
};
function ff() {
    this.Ff = [];
    this.dy = new Od;
    this.wt = this.vH = this.wH = this.bH = 0;
    this.bk = new Od;
    this.Qu = this.uH = 0;
    this.Ix = 1;
    this.Wk = new df(0, 4E3);
    this.Wk.Kk = function() {
        return new gf
    };
    this.ap = new df(0, 50);
    this.ap.Kk = function() {
        return new hf
    };
    var a = this;
    this.Bw = new df(0, 2E3);
    this.Bw.Kk = function() {
        return String(a.Ix++)
    };
    this.Bw.qv = ba();
    this.WK = 3
}
ff.prototype.wa = le("goog.debug.Trace");
function hf() {
    this.Zz = this.time = this.count = 0
}
hf.prototype.toString = function() {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.Zz && a.push(" [VarAlloc = ", this.Zz, "]");
    return a.join("")
};
function gf() {}
function jf(a, b, c, d) {
    var f = []; - 1 == c ? f.push("    ") : f.push(kf(a.Eq - c));
    f.push(" ", lf(a.Eq - b));
    0 == a.Fq ? f.push(" Start        ") : 1 == a.Fq ? (f.push(" Done "), f.push(kf(a.$Y - a.startTime), " ms ")) : f.push(" Comment      ");
    f.push(d, a);
    0 < a.tH && f.push("[VarAlloc ", a.tH, "] ");
    return f.join("")
}
gf.prototype.toString = function() {
    return this.type == j ? this.xB: "[" + this.type + "] " + this.xB
};
ff.prototype.reset = function(a) {
    this.WK = a;
    for (a = 0; a < this.Ff.length; a++) {
        var b = this.Wk.id;
        b && ef(this.Bw, b);
        ef(this.Wk, this.Ff[a])
    }
    this.Ff.length = 0;
    this.dy.clear();
    this.bH = Aa();
    this.Qu = this.uH = this.wt = this.vH = this.wH = 0;
    b = this.bk.Eb();
    for (a = 0; a < b.length; a++) {
        var c = this.bk.get(b[a]);
        c.count = 0;
        c.time = 0;
        c.Zz = 0;
        ef(this.ap, c)
    }
    this.bk.clear()
};
ff.prototype.du = function(a, b, c) {
    var d = Aa(),
    f = c ? c: d,
    g = this.Wk.Bg.length ? this.Wk.Bg.pop() : this.Wk.Kk();
    g.Fq = 2;
    g.Eq = f;
    g.type = b;
    g.xB = a;
    a = (a = this.IX) && a.isTracing() ? a.totalVarAlloc: -1;
    g.tH = a;
    this.Qu++;
    if (c) {
        c = this.Ff.length;
        for (a = 0; a < c; a++) if (this.Ff[a].Eq > f) {
            y.Ln(this.Ff, g, a);
            break
        }
        a == c && this.Ff.push(g)
    } else this.Ff.push(g);
    if (f = g.type) g = this.bk.get(f),
    g || (g = this.ap.Bg.length ? this.ap.Bg.pop() : this.ap.Kk(), g.type = f, this.bk.set(f, g)),
    g.count++;
    this.wt += Aa() - d
};
ff.prototype.toString = function() {
    for (var a = [], b = -1, c = [], d = 0; d < this.Ff.length; d++) {
        var f = this.Ff[d];
        1 == f.Fq && c.pop();
        a.push(" ", jf(f, this.bH, b, c.join("")));
        b = f.Eq;
        a.push("\n");
        0 == f.Fq && c.push("|  ")
    }
    if (0 != this.dy.Ha()) {
        var g = Aa();
        a.push(" Unstopped timers:\n");
        O.forEach(this.dy,
        function(b) {
            a.push("  ", b, " (", g - b.startTime, " ms, started at ", lf(b.startTime), ")\n")
        })
    }
    b = this.bk.Eb();
    for (d = 0; d < b.length; d++) c = this.bk.get(b[d]),
    1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.uH, "\n", "Total comments created ", this.Qu, "\n", "Overhead start: ", this.wH, " ms\n", "Overhead end: ", this.vH, " ms\n", "Overhead comment: ", this.wt, " ms\n");
    return a.join("")
};
function kf(a) {
    var a = Math.round(a),
    b = "";
    1E3 > a && (b = " ");
    100 > a && (b = "  ");
    10 > a && (b = "   ");
    return b + a
}
function lf(a) {
    a = Math.round(a);
    return String(100 + a / 1E3 % 60).substring(1, 3) + "." + String(1E3 + a % 1E3).substring(1, 4)
}
new ff;
function mf(a) {
    return function() {
        return a
    }
}
var nf = mf(l),
of = mf(i);
function pf(a) {
    return a
}
function qf(a, b) {
    var c = arguments,
    d = c.length;
    return function() {
        var a;
        d && (a = c[d - 1].apply(this, arguments));
        for (var b = d - 2; 0 <= b; b--) a = c[b].call(this, a);
        return a
    }
}
function rf(a) {
    return function() {
        return ! a.apply(this, arguments)
    }
};
function sf() {
    M.call(this)
}
w(sf, M);
function tf(a, b) {
    this.Nq = a;
    this.oa = b
}
tf.prototype.execute = function(a) {
    this.Nq && (this.Nq.call(this.oa || j, a), this.Nq = this.oa = j)
};
tf.prototype.abort = function() {
    this.oa = this.Nq = j
};
function uf(a, b) {
    M.call(this);
    this.$B = a;
    this.td = b;
    this.$x = [];
    this.Px = [];
    this.lC = []
}
w(uf, M);
r = uf.prototype;
r.lk = j;
r.jP = sf;
r.Fx = j;
r.Sd = n("td");
r.Ds = function(a, b) {
    return this.Es(this.$x, a, b)
};
r.Es = function(a, b, c) {
    b = new tf(b, c);
    a.push(b);
    return b
};
r.wd = function() {
    return !! this.Fx
};
r.ro = function(a) {
    var b = new this.jP;
    a();
    this.Fx = b;
    b = (b = !!vf(this.lC, a())) || !!vf(this.$x, a());
    b || (this.Px.length = 0);
    return b
};
r.Zh = function(a) {
    if (a = vf(this.Px, a)) {
        var b = "Module errback failures: " + a;
        window.setTimeout(function() {
            e(Error(b))
        },
        0)
    }
    this.lC.length = 0;
    this.$x.length = 0
};
function vf(a, b) {
    for (var c = [], d = 0; d < a.length; d++) try {
        a[d].execute(b)
    } catch(f) {
        c.push(f)
    }
    a.length = 0;
    return c.length ? c: j
}
r.m = function() {
    uf.g.m.call(this);
    Vc(this.Fx)
};
function wf() {
    M.call(this);
    this.xc = {};
    this.ff = [];
    this.Sj = [];
    this.ed = [];
    this.ri = [];
    this.Tp = {};
    this.UB = this.Mp = new uf([], "")
}
w(wf, M);
ja(wf);
r = wf.prototype;
r.wa = le("goog.module.ModuleManager");
r.tu = l;
r.Vr = j;
r.bq = 0;
r.mE = l;
r.NH = l;
r.WE = j;
r.YC = n("WE");
r.wb = function() {
    return 0 < this.ff.length
};
function xf(a) {
    var b = a.wb();
    b != a.mE && (yf(a, b ? "active": "idle"), a.mE = b);
    b = 0 < a.ri.length;
    b != a.NH && (yf(a, b ? "userActive": "userIdle"), a.NH = b)
}
r.ry = function(a) { (this.xc[a].wd() || zf(this, a)) && e(Error("Module load already requested: " + a));
    this.tu && e(Error("Modules prefetching is not supported in batch mode"));
    for (var a = Af(this, a), b = 0; b < a.length; b++) this.Vr.ry(a[b], this.xc[a[b]])
};
function Bf(a, b, c, d, f) {
    c.Ds(f.Gk, f);
    c.Es(c.Px,
    function(a) {
        Le(f, Error(a))
    },
    h);
    zf(a, b) ? d && (a.wa.info("User initiated module already loading: " + b), y.contains(a.ri, b) || a.ri.push(b), xf(a)) : d ? (a.wa.info("User initiated module load: " + b), y.contains(a.ri, b) || a.ri.push(b)) : a.wa.info("Initiating module load: " + b)
}
function Cf(a, b) {
    y.xb(a.ff) ? Df(a, b) : (a.ed.push(b), xf(a))
}
function Df(a, b, c, d) {
    c || (a.bq = 0);
    for (var f = 0; f < b.length; f++) a.xc[b[f]].wd() && e(Error("Module already loaded: " + b[f]));
    c = [];
    for (f = 0; f < b.length; f++) c = c.concat(Af(a, b[f]));
    y.Cy(c); ! a.tu && 1 < c.length && (f = c.shift(), a.wa.info("Must load " + f + " module before " + b), a.ed = y.map(c,
    function(a) {
        return [a]
    }).concat(a.ed), c = [f]);
    a.wa.info("Loading module(s): " + c);
    a.ff = c;
    a.Sj = a.tu ? b: y.clone(c);
    xf(a);
    b = u(a.Vr.KO, a.Vr, y.clone(c), a.xc, j, u(a.LM, a), u(a.MM, a), !!d); (a = 5E3 * Math.pow(a.bq, 2)) ? window.setTimeout(b, a) : b()
}
function Af(a, b) {
    for (var c = [b], d = y.clone(a.xc[b].$B); d.length;) {
        var f = d.pop();
        a.xc[f].wd() || (c.unshift(f), Array.prototype.unshift.apply(d, a.xc[f].$B))
    }
    y.Cy(c);
    return c
}
function Ef(a) {
    var b = wf.v();
    b.Ji ? b.wa.nk("Module loaded after module manager was disposed: " + a) : (b.wa.info("Module loaded: " + a), b.xc[a].ro(u(b.YC, b)) && Ff(b, Gf), y.remove(b.ri, a), y.remove(b.ff, a), y.xb(b.ff) && Hf(b), xf(b))
}
function zf(a, b) {
    if (y.contains(a.ff, b)) return i;
    for (var c = 0; c < a.ed.length; c++) if (y.contains(a.ed[c], b)) return i;
    return l
}
r.load = function(a, b) {
    var c = [];
    y.Cy([a], c);
    for (var d = [], f = {},
    g = 0; g < c.length; g++) {
        var k = c[g],
        m = this.xc[k],
        q = new Ke;
        f[k] = q;
        m.wd() ? q.Gk(this.WE) : (Bf(this, k, m, !!b, q), zf(this, k) || d.push(k))
    }
    0 < d.length && Cf(this, d);
    return f[a]
};
var Gf = 4;
r = wf.prototype;
r.LM = function(a) {
    this.bq++;
    401 == a ? (this.wa.info("Module loading unauthorized"), Ff(this, 0), this.ed.length = 0) : 410 == a ? (If(this, 3), Hf(this)) : 3 <= this.bq ? (this.wa.info("Aborting after failure to load: " + this.ff), If(this, 1), Hf(this)) : (this.wa.info("Retrying after failure to load: " + this.ff), Df(this, this.Sj, i, 8001 == a))
};
r.MM = function() {
    this.wa.info("Aborting after timeout: " + this.ff);
    If(this, 2);
    Hf(this)
};
function If(a, b) {
    1 < a.Sj.length ? a.ed = y.map(a.Sj,
    function(a) {
        return [a]
    }).concat(a.ed) : Ff(a, b)
}
function Ff(a, b) {
    var c = a.Sj;
    a.ff.length = 0;
    for (var d = [], f = 0; f < a.ed.length; f++) {
        var g = y.filter(a.ed[f],
        function(a) {
            var b = Af(this, a);
            return y.some(c,
            function(a) {
                return y.contains(b, a)
            })
        },
        a);
        y.extend(d, g)
    }
    for (f = 0; f < c.length; f++) y.vr(d, c[f]);
    for (f = 0; f < d.length; f++) {
        for (g = 0; g < a.ed.length; g++) y.remove(a.ed[g], d[f]);
        y.remove(a.ri, d[f])
    }
    var k = a.Tp.error;
    if (k) for (f = 0; f < k.length; f++) for (var m = k[f], g = 0; g < d.length; g++) m("error", d[g], b);
    for (f = 0; f < c.length; f++) a.xc[c[f]] && a.xc[c[f]].Zh(b);
    a.Sj.length = 0;
    xf(a)
}
function Hf(a) {
    for (; a.ed.length;) {
        var b = y.filter(a.ed.shift(),
        function(a) {
            return ! this.xc[a].wd()
        },
        a);
        if (0 < b.length) {
            Df(a, b);
            return
        }
    }
    xf(a)
}
r.Ds = function(a, b) {
    oa(a) || (a = [a]);
    for (var c = 0; c < a.length; c++) this.Es(a[c], b)
};
r.Es = function(a, b) {
    var c = this.Tp;
    c[a] || (c[a] = []);
    c[a].push(b)
};
function yf(a, b) {
    for (var c = a.Tp[b], d = 0; c && d < c.length; d++) c[d](b)
}
r.m = function() {
    wf.g.m.call(this);
    Uc(F.Ea(this.xc), this.Mp);
    this.Tp = this.ed = this.ri = this.Sj = this.ff = this.xc = j
};
function Jf(a) {
    this.Aa = a
}
var Kf = /\s*;\s*/;
r = Jf.prototype;
r.isEnabled = function() {
    return navigator.cookieEnabled
};
r.set = function(a, b, c, d, f, g) { / [; = \s] / .test(a) && e(Error('Invalid cookie name "' + a + '"'));
    /[;\r\n]/.test(b) && e(Error('Invalid cookie value "' + b + '"'));
    la(c) || (c = -1);
    f = f ? ";domain=" + f: "";
    d = d ? ";path=" + d: "";
    g = g ? ";secure": "";
    c = 0 > c ? "": 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Aa() + 1E3 * c)).toUTCString();
    this.Aa.cookie = a + "=" + b + f + d + c + g
};
r.get = function(a, b) {
    for (var c = a + "=",
    d = (this.Aa.cookie || "").split(Kf), f = 0, g; g = d[f]; f++) {
        if (0 == g.lastIndexOf(c, 0)) return g.substr(c.length);
        if (g == a) return ""
    }
    return b
};
r.remove = function(a, b, c) {
    var d = this.Gd(a);
    this.set(a, "", 0, b, c);
    return d
};
r.Eb = function() {
    return Lf(this).keys
};
r.Ea = function() {
    return Lf(this).RH
};
r.xb = function() {
    return ! this.Aa.cookie
};
r.Ha = function() {
    return ! this.Aa.cookie ? 0 : (this.Aa.cookie || "").split(Kf).length
};
r.Gd = function(a) {
    return la(this.get(a))
};
r.sg = function(a) {
    for (var b = Lf(this).RH, c = 0; c < b.length; c++) if (b[c] == a) return i;
    return l
};
r.clear = function() {
    for (var a = Lf(this).keys, b = a.length - 1; 0 <= b; b--) this.remove(a[b])
};
function Lf(a) {
    for (var a = (a.Aa.cookie || "").split(Kf), b = [], c = [], d, f, g = 0; f = a[g]; g++) d = f.indexOf("="),
    -1 == d ? (b.push(""), c.push(f)) : (b.push(f.substring(0, d)), c.push(f.substring(d + 1)));
    return {
        keys: b,
        RH: c
    }
}
var Mf = new Jf(document);
Mf.EV = 3950;
function Nf(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
Nf.prototype.clone = function() {
    return new Nf(this.top, this.right, this.bottom, this.left)
};
Nf.prototype.contains = function(a) {
    return ! this || !a ? l: a instanceof Nf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom: a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
Nf.prototype.expand = function(a, b, c, d) {
    sa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
    return this
};
function Of(a, b) {
    var c = b.x < a.left ? b.x - a.left: b.x > a.right ? b.x - a.right: 0,
    d = b.y < a.top ? b.y - a.top: b.y > a.bottom ? b.y - a.bottom: 0;
    return Math.sqrt(c * c + d * d)
};
function Pf(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
Pf.prototype.clone = function() {
    return new Pf(this.left, this.top, this.width, this.height)
};
function Qf(a) {
    return new Nf(a.top, a.left + a.width, a.top + a.height, a.left)
}
Pf.prototype.TD = function(a) {
    var b = Math.max(this.left, a.left),
    c = Math.min(this.left + this.width, a.left + a.width);
    if (b <= c) {
        var d = Math.max(this.top, a.top),
        a = Math.min(this.top + this.height, a.top + a.height);
        if (d <= a) return this.left = b,
        this.top = d,
        this.width = c - b,
        this.height = a - d,
        i
    }
    return l
};
Pf.prototype.contains = function(a) {
    return a instanceof Pf ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height: a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
Pf.prototype.hl = function() {
    return new Qb(this.width, this.height)
};
function Rf(a, b, c) {
    t(b) ? Sf(a, c, b) : F.forEach(b, ya(Sf, a))
}
function Sf(a, b, c) { (c = Tf(a, c)) && (a.style[c] = b)
}
function Tf(a, b) {
    var c = gb(b);
    if (a.style[c] === h) {
        var d = B ? "Webkit": A ? "Moz": z ? "ms": tb ? "O": j,
        f;
        f = t(h) ? bb(h) : "\\s";
        f = b.replace(RegExp("(^" + (f ? "|[" + f + "]+": "") + ")([a-z])", "g"),
        function(a, b, c) {
            return b + c.toUpperCase()
        });
        d += f;
        if (a.style[d] !== h) return d
    }
    return c
}
function Uf(a, b) {
    var c = a.style[gb(b)];
    return "undefined" !== typeof c ? c: a.style[Tf(a, b)] || ""
}
function Vf(a, b) {
    var c = Ub(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, j)) ? c[b] || c.getPropertyValue(b) || "": ""
}
function Wf(a, b) {
    return a.currentStyle ? a.currentStyle[b] : j
}
function Xf(a, b) {
    return Vf(a, b) || Wf(a, b) || a.style && a.style[b]
}
function Yf(a) {
    return Xf(a, "position")
}
function Zf(a, b, c) {
    var d, f = A && (mb || xb) && D("1.9");
    b instanceof Ob ? (d = b.x, b = b.y) : (d = b, b = c);
    a.style.left = $f(d, f);
    a.style.top = $f(b, f)
}
function ag(a) {
    a = a ? Ub(a) : document;
    return z && !Gb(9) && !Nc(Sb(a)) ? a.body: a.documentElement
}
function bg(a) {
    var b = a.body,
    a = a.documentElement;
    return new Ob(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}
function cg(a) {
    var b = a.getBoundingClientRect();
    z && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
function dg(a) {
    if (z && !Gb(8)) return a.offsetParent;
    for (var b = Ub(a), c = Xf(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode) if (c = Xf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return j
}
function eg(a) {
    for (var b = new Nf(0, Infinity, Infinity, 0), c = Sb(a), d = c.va().body, f = c.va().documentElement, g = bc(c.Aa); a = dg(a);) if ((!z || 0 != a.clientWidth) && (!B || 0 != a.clientHeight || a != d) && a != d && a != f && "visible" != Xf(a, "overflow")) {
        var k = fg(a),
        m;
        m = a;
        if (A && !D("1.9")) {
            var q = parseFloat(Vf(m, "borderLeftWidth"));
            if (gg(m)) var s = m.offsetWidth - m.clientWidth - q - parseFloat(Vf(m, "borderRightWidth")),
            q = q + s;
            m = new Ob(q, parseFloat(Vf(m, "borderTopWidth")))
        } else m = new Ob(m.clientLeft, m.clientTop);
        k.x += m.x;
        k.y += m.y;
        b.top = Math.max(b.top, k.y);
        b.right = Math.min(b.right, k.x + a.clientWidth);
        b.bottom = Math.min(b.bottom, k.y + a.clientHeight);
        b.left = Math.max(b.left, k.x)
    }
    d = g.scrollLeft;
    g = g.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, g);
    c = $b(c.Ja());
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, g + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b: j
}
function hg(a, b) {
    var c, d = fg(a),
    f = fg(b),
    g = ig(b);
    c = d.x - f.x - g.left;
    var d = d.y - f.y - g.top,
    f = b.clientHeight - a.offsetHeight,
    g = b.scrollLeft,
    k = b.scrollTop,
    g = g + Math.min(c, Math.max(c - (b.clientWidth - a.offsetWidth), 0)),
    k = k + Math.min(d, Math.max(d - f, 0));
    c = new Ob(g, k);
    b.scrollLeft = c.x;
    b.scrollTop = c.y
}
function fg(a) {
    var b, c = Ub(a),
    d = Xf(a, "position"),
    f = A && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
    g = new Ob(0, 0),
    k = ag(c);
    if (a == k) return g;
    if (a.getBoundingClientRect) b = cg(a),
    a = Oc(Sb(c)),
    g.x = b.left + a.x,
    g.y = b.top + a.y;
    else if (c.getBoxObjectFor && !f) b = c.getBoxObjectFor(a),
    a = c.getBoxObjectFor(k),
    g.x = b.screenX - a.screenX,
    g.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            g.x += b.offsetLeft;
            g.y += b.offsetTop;
            b != a && (g.x += b.clientLeft || 0, g.y += b.clientTop || 0);
            if (B && "fixed" == Yf(b)) {
                g.x += c.body.scrollLeft;
                g.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while ( b && b != a );
        if (tb || B && "absolute" == d) g.y -= c.body.offsetTop;
        for (b = a; (b = dg(b)) && b != c.body && b != k;) if (g.x -= b.scrollLeft, !tb || "TR" != b.tagName) g.y -= b.scrollTop
    }
    return g
}
function jg(a, b) {
    var c = kg(a),
    d = kg(b);
    return new Ob(c.x - d.x, c.y - d.y)
}
function kg(a) {
    var b = new Ob;
    if (1 == a.nodeType) {
        if (a.getBoundingClientRect) {
            var c = cg(a);
            b.x = c.left;
            b.y = c.top
        } else {
            var c = Oc(Sb(a)),
            d = fg(a);
            b.x = d.x - c.x;
            b.y = d.y - c.y
        }
        if (A && !D(12)) {
            var f;
            z ? f = "-ms-transform": B ? f = "-webkit-transform": tb ? f = "-o-transform": A && (f = "-moz-transform");
            var g;
            f && (g = Xf(a, f));
            g || (g = Xf(a, "transform"));
            g ? (a = g.match(lg), a = !a ? new Ob(0, 0) : new Ob(parseFloat(a[1]), parseFloat(a[2]))) : a = new Ob(0, 0);
            b = new Ob(b.x + a.x, b.y + a.y)
        }
    } else f = ra(a.QC),
    g = a,
    a.targetTouches ? g = a.targetTouches[0] : f && a.Yb.targetTouches && (g = a.Yb.targetTouches[0]),
    b.x = g.clientX,
    b.y = g.clientY;
    return b
}
function mg(a, b, c) {
    var d = fg(a);
    b instanceof Ob && (c = b.y, b = b.x);
    Zf(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
}
function ng(a, b, c) {
    b instanceof Qb ? (c = b.height, b = b.width) : c == h && e(Error("missing height argument"));
    a.style.width = $f(b, i);
    a.style.height = $f(c, i)
}
function $f(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
function og(a) {
    if ("none" != Xf(a, "display")) return pg(a);
    var b = a.style,
    c = b.display,
    d = b.visibility,
    f = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = pg(a);
    b.display = c;
    b.position = f;
    b.visibility = d;
    return a
}
function pg(a) {
    var b = a.offsetWidth,
    c = a.offsetHeight,
    d = B && !b && !c;
    return (!la(b) || d) && a.getBoundingClientRect ? (a = cg(a), new Qb(a.right - a.left, a.bottom - a.top)) : new Qb(b, c)
}
function qg(a) {
    var b = fg(a),
    a = og(a);
    return new Pf(b.x, b.y, a.width, a.height)
}
function rg(a, b) {
    var c = a.style;
    "opacity" in c ? c.opacity = b: "MozOpacity" in c ? c.MozOpacity = b: "filter" in c && (c.filter = "" === b ? "": "alpha(opacity=" + 100 * b + ")")
}
function S(a, b) {
    a.style.display = b ? "": "none"
}
function sg(a) {
    return "none" != a.style.display
}
function tg(a, b) {
    var c = Sb(b),
    d = j;
    if (z) c = d = c.va().createStyleSheet(),
    z ? c.cssText = a: c.innerHTML = a;
    else {
        var f = Wb(c.Aa, "head", h, h)[0];
        f || (d = Wb(c.Aa, "body", h, h)[0], f = c.j("head"), d.parentNode.insertBefore(f, d));
        var g = d = c.j("style");
        z ? g.cssText = a: g.innerHTML = a;
        c.appendChild(f, d)
    }
}
function gg(a) {
    return "rtl" == Xf(a, "direction")
}
var ug = A ? "MozUserSelect": B ? "WebkitUserSelect": j;
function vg(a, b, c) {
    c = !c ? a.getElementsByTagName("*") : j;
    if (ug) {
        if (b = b ? "none": "", a.style[ug] = b, c) for (var a = 0,
        d; d = c[a]; a++) d.style[ug] = b
    } else if (z || tb) if (b = b ? "on": "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
}
function wg(a) {
    return new Qb(a.offsetWidth, a.offsetHeight)
}
function xg(a, b, c, d) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var f = a.style[c],
    g = a.runtimeStyle[c];
    a.runtimeStyle[c] = a.currentStyle[c];
    a.style[c] = b;
    b = a.style[d];
    a.style[c] = f;
    a.runtimeStyle[c] = g;
    return b
}
function yg(a, b) {
    var c = Wf(a, b);
    return c ? xg(a, c, "left", "pixelLeft") : 0
}
function zg(a) {
    if (z) {
        var b = yg(a, "paddingLeft"),
        c = yg(a, "paddingRight"),
        d = yg(a, "paddingTop"),
        a = yg(a, "paddingBottom");
        return new Nf(d, c, a, b)
    }
    b = Vf(a, "paddingLeft");
    c = Vf(a, "paddingRight");
    d = Vf(a, "paddingTop");
    a = Vf(a, "paddingBottom");
    return new Nf(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var Ag = {
    thin: 2,
    medium: 4,
    thick: 6
};
function Bg(a, b) {
    if ("none" == Wf(a, b + "Style")) return 0;
    var c = Wf(a, b + "Width");
    return c in Ag ? Ag[c] : xg(a, c, "left", "pixelLeft")
}
function ig(a) {
    if (z) {
        var b = Bg(a, "borderLeft"),
        c = Bg(a, "borderRight"),
        d = Bg(a, "borderTop"),
        a = Bg(a, "borderBottom");
        return new Nf(d, c, a, b)
    }
    b = Vf(a, "borderLeftWidth");
    c = Vf(a, "borderRightWidth");
    d = Vf(a, "borderTopWidth");
    a = Vf(a, "borderBottomWidth");
    return new Nf(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
}
var Cg = /[^\d]+$/,
lg = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function Dg() {}
ja(Dg);
Dg.prototype.Ix = 0;
function Eg(a) {
    return ":" + (a.Ix++).toString(36)
}
Dg.v();
function T(a) {
    M.call(this);
    this.W = a || Sb();
    this.kf = Fg
}
w(T, zd);
T.prototype.GN = Dg.v();
var Fg = j;
function Gg(a, b) {
    switch (a) {
    case 1:
        return b ? "disable": "enable";
    case 2:
        return b ? "highlight": "unhighlight";
    case 4:
        return b ? "activate": "deactivate";
    case 8:
        return b ? "select": "unselect";
    case 16:
        return b ? "check": "uncheck";
    case 32:
        return b ? "focus": "blur";
    case 64:
        return b ? "open": "close"
    }
    e(Error("Invalid component state"))
}
r = T.prototype;
r.td = j;
r.Ca = l;
r.d = j;
r.kf = j;
r.Ex = j;
r.Oa = j;
r.Kb = j;
r.Qe = j;
r.UH = l;
r.Sd = function() {
    return this.td || (this.td = Eg(this.GN))
};
function Hg(a, b) {
    a.Oa && a.Oa.Qe && (F.remove(a.Oa.Qe, a.td), F.add(a.Oa.Qe, b, a));
    a.td = b
}
r.f = n("d");
r.Yi = function(a) {
    return this.d ? this.W.Yi(a, this.d) : j
};
r.e = function() {
    return this.il || (this.il = new me(this))
};
function Ig(a, b) {
    a == b && e(Error("Unable to set parent component"));
    b && (a.Oa && a.td && Jg(a.Oa, a.td) && a.Oa != b) && e(Error("Unable to set parent component"));
    a.Oa = b;
    T.g.Yy.call(a, b)
}
r.getParent = n("Oa");
r.Yy = function(a) {
    this.Oa && this.Oa != a && e(Error("Method not supported"));
    T.g.Yy.call(this, a)
};
r.B = n("W");
r.j = function() {
    this.d = this.W.createElement("div")
};
r.N = function(a) {
    this.Is(a)
};
r.Is = function(a, b) {
    this.Ca && e(Error("Component already rendered"));
    this.d || this.j();
    a ? a.insertBefore(this.d, b || j) : this.W.va().body.appendChild(this.d); (!this.Oa || this.Oa.Ca) && this.p()
};
r.h = function(a) {
    this.Ca && e(Error("Component already rendered"));
    if (a && this.Rc(a)) {
        this.UH = i;
        if (!this.W || this.W.va() != Ub(a)) this.W = Sb(a);
        this.Z(a);
        this.p()
    } 
    //else e(Error("Invalid element to decorate"))
};
r.Rc = p(i);
r.Z = ca("d");
r.p = function() {
    this.Ca = i;
    Kg(this,
    function(a) { ! a.Ca && a.f() && a.p()
    })
};
r.Za = function() {
    Kg(this,
    function(a) {
        a.Ca && a.Za()
    });
    this.il && this.il.Ac();
    this.Ca = l
};
r.m = function() {
    T.g.m.call(this);
    this.Ca && this.Za();
    this.il && (this.il.w(), delete this.il);
    Kg(this,
    function(a) {
        a.w()
    }); ! this.UH && this.d && L(this.d);
    this.Oa = this.Ex = this.d = this.Qe = this.Kb = j
};
r.aa = function(a, b) {
    this.xk(a, Lg(this), b)
};
r.xk = function(a, b, c) {
    a.Ca && (c || !this.Ca) && e(Error("Component already rendered")); (0 > b || b > Lg(this)) && e(Error("Child component index out of bounds"));
    if (!this.Qe || !this.Kb) this.Qe = {},
    this.Kb = [];
    a.getParent() == this ? (F.set(this.Qe, a.Sd(), a), y.remove(this.Kb, a)) : F.add(this.Qe, a.Sd(), a);
    Ig(a, this);
    y.Ln(this.Kb, a, b);
    a.Ca && this.Ca && a.getParent() == this ? (c = this.R(), c.insertBefore(a.f(), c.childNodes[b] || j)) : c ? (this.d || this.j(), b = Mg(this, b + 1), a.Is(this.R(), b ? b.d: j)) : this.Ca && (!a.Ca && a.d && a.d.parentNode && 1 == a.d.parentNode.nodeType) && a.p()
};
r.R = n("d");
r.xd = function() {
    this.kf == j && (this.kf = gg(this.Ca ? this.d: this.W.va().body));
    return this.kf
};
r.ji = function(a) {
    this.Ca && e(Error("Component already rendered"));
    this.kf = a
};
function Lg(a) {
    return a.Kb ? a.Kb.length: 0
}
function Jg(a, b) {
    return a.Qe && b ? F.get(a.Qe, b) || j: j
}
function Mg(a, b) {
    return a.Kb ? a.Kb[b] || j: j
}
function Kg(a, b, c) {
    a.Kb && y.forEach(a.Kb, b, c)
}
function Ng(a, b) {
    return a.Kb && b ? y.indexOf(a.Kb, b) : -1
}
r.removeChild = function(a, b) {
    if (a) {
        var c = t(a) ? a: a.Sd(),
        a = Jg(this, c);
        c && a && (F.remove(this.Qe, c), y.remove(this.Kb, a), b && (a.Za(), a.d && L(a.d)), Ig(a, j))
    }
    a || e(Error("Child is not in parent component"));
    return a
};
r.Fs = function(a) {
    for (var b = []; this.Kb && 0 != this.Kb.length;) b.push(this.removeChild(Mg(this, 0), a));
    return b
};
function Og(a) {
    if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return l;
    switch (a.keyCode) {
    case 18:
    case 20:
    case 93:
    case 17:
    case 40:
    case 35:
    case 27:
    case 36:
    case 45:
    case 37:
    case 224:
    case 91:
    case 144:
    case 12:
    case 34:
    case 33:
    case 19:
    case 255:
    case 44:
    case 39:
    case 145:
    case 16:
    case 38:
    case 224:
    case 92:
        return l;
    case 0:
        return ! A;
    default:
        return 166 > a.keyCode || 183 < a.keyCode
    }
}
function Pg(a, b, c, d, f) {
    if (!z && (!B || !D("525"))) return i;
    if (mb && f) return Qg(a);
    if (f && !d || !c && (17 == b || 18 == b || mb && 91 == b)) return l;
    if (B && d && c) switch (a) {
    case 220:
    case 219:
    case 221:
    case 192:
    case 186:
    case 189:
    case 187:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
        return l
    }
    if (z && d && b == a) return l;
    switch (a) {
    case 13:
        return ! (z && Gb(9));
    case 27:
        return ! B
    }
    return Qg(a)
}
function Qg(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || B && 0 == a) return i;
    switch (a) {
    case 32:
    case 63:
    case 107:
    case 109:
    case 110:
    case 111:
    case 186:
    case 59:
    case 189:
    case 187:
    case 61:
    case 188:
    case 190:
    case 191:
    case 192:
    case 222:
    case 219:
    case 220:
    case 221:
        return i;
    default:
        return l
    }
}
function Rg(a) {
    switch (a) {
    case 61:
        return 187;
    case 59:
        return 186;
    case 224:
        return 91;
    case 0:
        return 224;
    default:
        return a
    }
};
function Sg(a, b) {
    M.call(this);
    a && this.zf(a, b)
}
w(Sg, zd);
r = Sg.prototype;
r.d = j;
r.Hr = j;
r.hx = j;
r.Ir = j;
r.Wd = -1;
r.Th = -1;
r.mu = l;
var Tg = {
    3 : 13,
    12 : 144,
    63232 : 38,
    63233 : 40,
    63234 : 37,
    63235 : 39,
    63236 : 112,
    63237 : 113,
    63238 : 114,
    63239 : 115,
    63240 : 116,
    63241 : 117,
    63242 : 118,
    63243 : 119,
    63244 : 120,
    63245 : 121,
    63246 : 122,
    63247 : 123,
    63248 : 44,
    63272 : 46,
    63273 : 36,
    63275 : 35,
    63276 : 33,
    63277 : 34,
    63289 : 144,
    63302 : 45
},
Ug = {
    Up: 38,
    Down: 40,
    Left: 37,
    Right: 39,
    Enter: 13,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    "U+007F": 46,
    Home: 36,
    End: 35,
    PageUp: 33,
    PageDown: 34,
    Insert: 45
},
Vg = z || B && D("525"),
Wg = mb && A;
r = Sg.prototype;
r.$e = function(a) {
    if (B && (17 == this.Wd && !a.ctrlKey || 18 == this.Wd && !a.altKey || mb && 91 == this.Wd && !a.metaKey)) this.Th = this.Wd = -1; - 1 == this.Wd && (a.ctrlKey && 17 != a.keyCode ? this.Wd = 17 : a.altKey && 18 != a.keyCode ? this.Wd = 18 : a.metaKey && 91 != a.keyCode && (this.Wd = 91));
    Vg && !Pg(a.keyCode, this.Wd, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Th = A ? Rg(a.keyCode) : a.keyCode, Wg && (this.mu = a.altKey))
};
r.JM = function(a) {
    this.Th = this.Wd = -1;
    this.mu = a.altKey
};
r.handleEvent = function(a) {
    var b = a.Yb,
    c, d, f = b.altKey;
    z && "keypress" == a.type ? (c = this.Th, d = 13 != c && 27 != c ? b.keyCode: 0) : B && "keypress" == a.type ? (c = this.Th, d = 0 <= b.charCode && 63232 > b.charCode && Qg(c) ? b.charCode: 0) : tb ? (c = this.Th, d = Qg(c) ? b.keyCode: 0) : (c = b.keyCode || this.Th, d = b.charCode || 0, Wg && (f = this.mu), mb && (63 == d && 224 == c) && (c = 191));
    var g = c,
    k = b.keyIdentifier;
    c ? 63232 <= c && c in Tg ? g = Tg[c] : 25 == c && a.shiftKey && (g = 9) : k && k in Ug && (g = Ug[k]);
    a = g == this.Wd;
    this.Wd = g;
    b = new Xg(g, d, a, b);
    b.altKey = f;
    this.dispatchEvent(b)
};
r.f = n("d");
r.zf = function(a, b) {
    this.Ir && this.detach();
    this.d = a;
    this.Hr = N(this.d, "keypress", this, b);
    this.hx = N(this.d, "keydown", this.$e, b, this);
    this.Ir = N(this.d, "keyup", this.JM, b, this)
};
r.detach = function() {
    this.Hr && (sd(this.Hr), sd(this.hx), sd(this.Ir), this.Ir = this.hx = this.Hr = j);
    this.d = j;
    this.Th = this.Wd = -1
};
r.m = function() {
    Sg.g.m.call(this);
    this.detach()
};
function Xg(a, b, c, d) {
    d && this.k(d, h);
    this.type = "key";
    this.keyCode = a;
    this.charCode = b;
    this.repeat = c
}
w(Xg, ed);
function Yg() {}
var Zg;
ja(Yg);
r = Yg.prototype;
r.lc = ba();
r.j = function(a) {
    var b = a.B().j("div", this.Xe(a).join(" "), a.$a());
    $g(this, a, b);
    return b
};
r.R = aa();
r.Qi = function(a, b, c) {
    if (a = a.f ? a.f() : a) if (z && !D("7")) {
        var d = ah(E.get(a), b);
        d.push(b);
        ya(c ? E.add: E.remove, a).apply(j, d)
    } else E.enable(a, b, c)
};
r.Rc = p(i);
r.h = function(a, b) {
    b.id && Hg(a, b.id);
    var c = this.R(b);
    c && c.firstChild ? a.Xl(c.firstChild.nextSibling ? y.clone(c.childNodes) : c.firstChild) : a.Xl(j);
    var d = 0,
    f = this.C(),
    g = this.C(),
    k = l,
    m = l,
    c = l,
    q = E.get(b);
    y.forEach(q,
    function(a) { ! k && a == f ? (k = i, g == f && (m = i)) : !m && a == g ? m = i: d |= this.Yv(a)
    },
    this);
    a.Y = d;
    k || (q.push(f), g == f && (m = i));
    m || q.push(g);
    var s = a.We;
    s && q.push.apply(q, s);
    if (z && !D("7")) {
        var x = ah(q);
        0 < x.length && (q.push.apply(q, x), c = i)
    } (!k || !m || s || c) && E.set(b, q.join(" "));
    $g(this, a, b);
    return b
};
r.Ae = function(a) {
    a.xd() && this.ji(a.f(), i);
    a.isEnabled() && this.Ie(a, a.H())
};
function $g(a, b, c) {
    b.isEnabled() || a.hg(c, 1, i);
    b.Y & 8 && a.hg(c, 8, i);
    b.Ib & 16 && a.hg(c, 16, b.Be());
    b.Ib & 64 && a.hg(c, 64, b.jb())
}
r.Io = function(a, b) {
    vg(a, !b, !z && !tb)
};
r.ji = function(a, b) {
    this.Qi(a, this.C() + "-rtl", b)
};
r.Rh = function(a) {
    var b;
    return a.Ib & 32 && (b = a.Zb()) ? Ec(b) : l
};
r.Ie = function(a, b) {
    var c;
    if (a.Ib & 32 && (c = a.Zb())) {
        if (!b && a.Y & 32) {
            try {
                c.blur()
            } catch(d) {}
            a.Y & 32 && a.Xc(j)
        }
        Ec(c) != b && Fc(c, b)
    }
};
r.n = function(a, b) {
    S(a, b)
};
r.Pb = function(a, b, c) {
    var d = a.f();
    if (d) {
        var f = this.un(b);
        f && this.Qi(a, f, c);
        this.hg(d, b, c)
    }
};
r.hg = function(a, b, c) {
    Zg || (Zg = F.create(1, Wc.oI, 8, Wc.AI, 16, Wc.tp, 64, Wc.oA)); (b = Zg[b]) && Qc(a, b, c)
};
r.Fa = function(a, b) {
    var c = this.R(a);
    if (c && (kc(c), b)) if (t(b)) zc(c, b);
    else {
        var d = function(a) {
            if (a) {
                var b = Ub(c);
                c.appendChild(t(a) ? b.createTextNode(a) : a)
            }
        };
        oa(b) ? y.forEach(b, d) : pa(b) && !("nodeType" in b) ? y.forEach(y.clone(b), d) : d(b)
    }
};
r.Zb = function(a) {
    return a.f()
};
r.C = p("goog-control");
r.Xe = function(a) {
    var b = this.C(),
    c = [b],
    d = this.C();
    d != b && c.push(d);
    b = a.Td();
    for (d = []; b;) {
        var f = b & -b;
        d.push(this.un(f));
        b &= ~f
    }
    c.push.apply(c, d); (a = a.We) && c.push.apply(c, a);
    z && !D("7") && c.push.apply(c, ah(c));
    return c
};
function ah(a, b) {
    var c = [];
    b && (a = a.concat([b]));
    y.forEach([],
    function(d) {
        y.every(d, ya(y.contains, a)) && (!b || y.contains(d, b)) && c.push(d.join("_"))
    });
    return c
}
r.un = function(a) {
    this.Xp || bh(this);
    return this.Xp[a]
};
r.Yv = function(a) {
    this.cH || (this.Xp || bh(this), this.cH = F.im(this.Xp));
    a = parseInt(this.cH[a], 10);
    return isNaN(a) ? 0 : a
};
function bh(a) {
    var b = a.C();
    a.Xp = F.create(1, b + "-disabled", 2, b + "-hover", 4, b + "-active", 8, b + "-selected", 16, b + "-checked", 32, b + "-focused", 64, b + "-open")
};
function ch(a, b) {
    a || e(Error("Invalid class name " + a));
    ra(b) || e(Error("Invalid decorator function " + b));
    dh[a] = b
}
var eh = {},
dh = {};
function fh(a, b, c) {
    T.call(this, c);
    if (!b) {
        for (var b = this.constructor,
        d; b;) {
            d = ta(b);
            if (d = eh[d]) break;
            b = b.g ? b.g.constructor: j
        }
        b = d ? ra(d.v) ? d.v() : new d: j
    }
    this.F = b;
    this.Xl(a)
}
w(fh, T);
r = fh.prototype;
r.tc = j;
r.Y = 0;
r.Ib = 39;
r.wi = 255;
r.ak = 0;
r.cb = i;
r.We = j;
r.dj = i;
r.Dp = l;
r.Mj = j;
r.No = function(a) {
    this.Ca && a != this.dj && gh(this, a);
    this.dj = a
};
r.Zb = function() {
    return this.F.Zb(this)
};
r.Rq = function() {
    return this.fb || (this.fb = new Sg)
};
r.oh = function(a) {
    a && (this.We ? y.contains(this.We, a) || this.We.push(a) : this.We = [a], this.F.Qi(this, a, i))
};
r.Qi = function(a, b) {
    b ? this.oh(a) : a && this.We && (y.remove(this.We, a), 0 == this.We.length && (this.We = j), this.F.Qi(this, a, l))
};
r.j = function() {
    var a = this.F.j(this);
    this.d = a;
    var b = this.Mj || this.F.lc();
    b && Pc(a, b);
    this.Dp || this.F.Io(a, l);
    this.H() || this.F.n(a, l)
};
r.Zy = ca("Mj");
r.R = function() {
    return this.F.R(this.f())
};
r.Rc = function(a) {
    return this.F.Rc(a)
};
r.Z = function(a) {
    this.d = a = this.F.h(this, a);
    var b = this.Mj || this.F.lc();
    b && Pc(a, b);
    this.Dp || this.F.Io(a, l);
    this.cb = "none" != a.style.display
};
r.p = function() {
    fh.g.p.call(this);
    this.F.Ae(this);
    if (this.Ib & -2 && (this.dj && gh(this, i), this.Ib & 32)) {
        var a = this.Zb();
        if (a) {
            var b = this.Rq();
            b.zf(a);
            this.e().c(b, "key", this.$b).c(a, "focus", this.ve).c(a, "blur", this.Xc)
        }
    }
};
function gh(a, b) {
    var c = a.e(),
    d = a.f();
    b ? (c.c(d, "mouseover", a.Yc).c(d, "mousedown", a.we).c(d, "mouseup", a.Nf).c(d, "mouseout", a.Nh), a.Cn != ia && c.c(d, "contextmenu", a.Cn), z && c.c(d, "dblclick", a.aD)) : (c.ya(d, "mouseover", a.Yc).ya(d, "mousedown", a.we).ya(d, "mouseup", a.Nf).ya(d, "mouseout", a.Nh), a.Cn != ia && c.ya(d, "contextmenu", a.Cn), z && c.ya(d, "dblclick", a.aD))
}
r.Za = function() {
    fh.g.Za.call(this);
    this.fb && this.fb.detach();
    this.H() && this.isEnabled() && this.F.Ie(this, l)
};
r.m = function() {
    fh.g.m.call(this);
    this.fb && (this.fb.w(), delete this.fb);
    delete this.F;
    this.We = this.tc = j
};
r.$a = n("tc");
r.Fa = function(a) {
    this.F.Fa(this.f(), a);
    this.Xl(a)
};
r.Xl = ca("tc");
r.Ih = function() {
    var a = this.$a();
    if (!a) return "";
    a = t(a) ? a: oa(a) ? y.map(a, Ic).join("") : Gc(a);
    return Na(a)
};
r.Us = function(a) {
    this.Fa(a)
};
r.ji = function(a) {
    fh.g.ji.call(this, a);
    var b = this.f();
    b && this.F.ji(b, a)
};
r.Io = function(a) {
    this.Dp = a;
    var b = this.f();
    b && this.F.Io(b, a)
};
r.H = n("cb");
r.n = function(a, b) {
    if (b || this.cb != a && this.dispatchEvent(a ? "show": "hide")) {
        var c = this.f();
        c && this.F.n(c, a);
        this.isEnabled() && this.F.Ie(this, a);
        this.cb = a;
        return i
    }
    return l
};
r.isEnabled = function() {
    return ! (this.Y & 1)
};
r.Pa = function(a) {
    var b = this.getParent();
    if ((!b || "function" != typeof b.isEnabled || b.isEnabled()) && hh(this, 1, !a)) a || (this.setActive(l), this.fd(l)),
    this.H() && this.F.Ie(this, a),
    this.Pb(1, !a)
};
r.fd = function(a) {
    hh(this, 2, a) && this.Pb(2, a)
};
r.wb = function() {
    return !! (this.Y & 4)
};
r.setActive = function(a) {
    hh(this, 4, a) && this.Pb(4, a)
};
r.$l = function(a) {
    hh(this, 8, a) && this.Pb(8, a)
};
r.Be = function() {
    return !! (this.Y & 16)
};
r.Jc = function(a) {
    hh(this, 16, a) && this.Pb(16, a)
};
r.jb = function() {
    return !! (this.Y & 64)
};
r.mb = function(a) {
    hh(this, 64, a) && this.Pb(64, a)
};
r.Td = n("Y");
r.Pb = function(a, b) {
    this.Ib & a && b != !!(this.Y & a) && (this.F.Pb(this, a, b), this.Y = b ? this.Y | a: this.Y & ~a)
};
function ih(a, b, c) {
    a.Ca && (a.Y & b && !c) && e(Error("Component already rendered")); ! c && a.Y & b && a.Pb(b, l);
    a.Ib = c ? a.Ib | b: a.Ib & ~b
}
function jh(a, b) {
    return !! (a.wi & b) && !!(a.Ib & b)
}
function hh(a, b, c) {
    return !! (a.Ib & b) && !!(a.Y & b) != c && (!(a.ak & b) || a.dispatchEvent(Gg(b, c))) && !a.Ji
}
r.Yc = function(a) { (!a.relatedTarget || !uc(this.f(), a.relatedTarget)) && (this.dispatchEvent("enter") && this.isEnabled() && jh(this, 2)) && this.fd(i)
};
r.Nh = function(a) {
    if ((!a.relatedTarget || !uc(this.f(), a.relatedTarget)) && this.dispatchEvent("leave")) jh(this, 4) && this.setActive(l),
    jh(this, 2) && this.fd(l)
};
r.Cn = ia;
r.we = function(a) {
    this.isEnabled() && (jh(this, 2) && this.fd(i), gd(a) && (jh(this, 4) && this.setActive(i), this.F.Rh(this) && this.Zb().focus())); ! this.Dp && gd(a) && a.preventDefault()
};
r.Nf = function(a) {
    this.isEnabled() && (jh(this, 2) && this.fd(i), this.wb() && (this.Yd(a) && jh(this, 4)) && this.setActive(l))
};
r.aD = function(a) {
    this.isEnabled() && this.Yd(a)
};
r.Yd = function(a) {
    jh(this, 16) && this.Jc(!this.Be());
    jh(this, 8) && this.$l(i);
    jh(this, 64) && this.mb(!this.jb());
    var b = new ad("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.ly = a.ly);
    return this.dispatchEvent(b)
};
r.ve = function() {
    jh(this, 32) && hh(this, 32, i) && this.Pb(32, i)
};
r.Xc = function() {
    jh(this, 4) && this.setActive(l);
    jh(this, 32) && hh(this, 32, l) && this.Pb(32, l)
};
r.$b = function(a) {
    return this.H() && this.isEnabled() && this.af(a) ? (a.preventDefault(), a.stopPropagation(), i) : l
};
r.af = function(a) {
    return 13 == a.keyCode && this.Yd(a)
};
ra(fh) || e(Error("Invalid component class " + fh));
ra(Yg) || e(Error("Invalid renderer class " + Yg));
var kh = ta(fh);
eh[kh] = Yg;
ch("goog-control",
function() {
    return new fh(j)
});
function lh() {}
w(lh, Yg);
ja(lh);
lh.prototype.j = function(a) {
    return a.B().j("div", this.C())
};
lh.prototype.h = function(a, b) {
    b.id && Hg(a, b.id);
    if ("HR" == b.tagName) {
        var c = b,
        b = this.j(a);
        lc(b, c);
        L(c)
    } else E.add(b, this.C());
    return b
};
lh.prototype.Fa = ba();
lh.prototype.C = p("goog-menuseparator");
function mh(a, b) {
    fh.call(this, j, a || lh.v(), b);
    ih(this, 1, l);
    ih(this, 2, l);
    ih(this, 4, l);
    ih(this, 32, l);
    this.Y = 1
}
w(mh, fh);
mh.prototype.p = function() {
    mh.g.p.call(this);
    Pc(this.f(), "separator")
};
ch("goog-menuseparator",
function() {
    return new mh
});
function nh() {}
ja(nh);
r = nh.prototype;
r.lc = ba();
r.j = function(a) {
    return a.B().j("div", this.Xe(a).join(" "))
};
r.R = aa();
r.Rc = function(a) {
    return "DIV" == a.tagName
};
r.h = function(a, b) {
    b.id && Hg(a, b.id);
    var c = this.C(),
    d = l,
    f = E.get(b);
    f && y.forEach(f,
    function(b) {
        b == c ? d = i: b && this.bz(a, b, c)
    },
    this);
    d || E.add(b, c);
    oh(this, a, this.R(b));
    return b
};
r.bz = function(a, b, c) {
    b == c + "-disabled" ? a.Pa(l) : b == c + "-horizontal" ? a.Oo(ph) : b == c + "-vertical" && a.Oo(qh)
};
function oh(a, b, c) {
    if (c) for (var d = c.firstChild,
    f; d && d.parentNode == c;) {
        f = d.nextSibling;
        if (1 == d.nodeType) {
            var g = a.vn(d);
            g && (g.d = d, b.isEnabled() || g.Pa(l), b.aa(g), g.h(d))
        } else(!d.nodeValue || "" == Oa(d.nodeValue)) && c.removeChild(d);
        d = f
    }
}
r.vn = function(a) {
    a: {
        for (var b = E.get(a), c = 0, d = b.length; c < d; c++) if (a = b[c] in dh ? dh[b[c]]() : j) break a;
        a = j
    }
    return a
};
r.Ae = function(a) {
    a = a.f();
    vg(a, i, A);
    z && (a.hideFocus = i);
    var b = this.lc();
    b && Pc(a, b)
};
r.Zb = function(a) {
    return a.f()
};
r.C = p("goog-container");
r.Xe = function(a) {
    var b = this.C(),
    c = [b, a.qb == ph ? b + "-horizontal": b + "-vertical"];
    a.isEnabled() || c.push(b + "-disabled");
    return c
};
r.TC = function() {
    return qh
};
function rh(a, b, c) {
    T.call(this, c);
    this.F = b || nh.v();
    this.qb = a || this.F.TC()
}
w(rh, T);
var ph = "horizontal",
qh = "vertical";
r = rh.prototype;
r.ix = j;
r.fb = j;
r.F = j;
r.qb = j;
r.cb = i;
r.Wb = i;
r.Jv = i;
r.ib = -1;
r.dc = j;
r.Uf = l;
r.qJ = l;
r.XQ = i;
r.pg = j;
r.Zb = function() {
    return this.ix || this.F.Zb(this)
};
r.Rq = function() {
    return this.fb || (this.fb = new Sg(this.Zb()))
};
r.j = function() {
    this.d = this.F.j(this)
};
r.R = function() {
    return this.F.R(this.f())
};
r.Rc = function(a) {
    return this.F.Rc(a)
};
r.Z = function(a) {
    this.d = this.F.h(this, a);
    "none" == a.style.display && (this.cb = l)
};
r.p = function() {
    rh.g.p.call(this);
    Kg(this,
    function(a) {
        a.Ca && sh(this, a)
    },
    this);
    var a = this.f();
    this.F.Ae(this);
    this.n(this.cb, i);
    this.e().c(this, "enter", this.hw).c(this, "highlight", this.mw).c(this, "unhighlight", this.ww).c(this, "open", this.VM).c(this, "close", this.iM).c(a, "mousedown", this.we).c(Ub(a), "mouseup", this.nM).c(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.hM);
    this.Rh() && th(this, i)
};
function th(a, b) {
    var c = a.e(),
    d = a.Zb();
    b ? c.c(d, "focus", a.ve).c(d, "blur", a.Xc).c(a.Rq(), "key", a.$b) : c.ya(d, "focus", a.ve).ya(d, "blur", a.Xc).ya(a.Rq(), "key", a.$b)
}
r.Za = function() {
    this.Hb( - 1);
    this.dc && this.dc.mb(l);
    this.Uf = l;
    rh.g.Za.call(this)
};
r.m = function() {
    rh.g.m.call(this);
    this.fb && (this.fb.w(), this.fb = j);
    this.F = this.dc = this.pg = this.ix = j
};
r.hw = p(i);
r.mw = function(a) {
    var b = Ng(this, a.target);
    if ( - 1 < b && b != this.ib) {
        var c = uh(this);
        c && c.fd(l);
        this.ib = b;
        c = uh(this);
        this.Uf && c.setActive(i);
        this.XQ && (this.dc && c != this.dc) && (c.Ib & 64 ? c.mb(i) : this.dc.mb(l))
    }
    Qc(this.f(), Wc.vm, a.target.f().id)
};
r.ww = function(a) {
    a.target == uh(this) && (this.ib = -1);
    Qc(this.f(), Wc.vm, "")
};
r.VM = function(a) {
    if ((a = a.target) && a != this.dc && a.getParent() == this) this.dc && this.dc.mb(l),
    this.dc = a
};
r.iM = function(a) {
    a.target == this.dc && (this.dc = j)
};
r.we = function(a) {
    this.Wb && (this.Uf = i);
    var b = this.Zb();
    b && Ec(b) ? b.focus() : a.preventDefault()
};
r.nM = function() {
    this.Uf = l
};
r.hM = function(a) {
    var b;
    a: {
        b = a.target;
        if (this.pg) for (var c = this.f(); b && b !== c;) {
            var d = b.id;
            if (d in this.pg) {
                b = this.pg[d];
                break a
            }
            b = b.parentNode
        }
        b = j
    }
    if (b) switch (a.type) {
    case "mousedown":
        b.we(a);
        break;
    case "mouseup":
        b.Nf(a);
        break;
    case "mouseover":
        b.Yc(a);
        break;
    case "mouseout":
        b.Nh(a);
        break;
    case "contextmenu":
        b.Cn(a)
    }
};
r.ve = ba();
r.Xc = function() {
    this.Hb( - 1);
    this.Uf = l;
    this.dc && this.dc.mb(l)
};
r.$b = function(a) {
    return this.isEnabled() && this.H() && (0 != Lg(this) || this.ix) && this.af(a) ? (a.preventDefault(), a.stopPropagation(), i) : l
};
r.af = function(a) {
    var b = uh(this);
    if (b && "function" == typeof b.$b && b.$b(a) || this.dc && this.dc != b && "function" == typeof this.dc.$b && this.dc.$b(a)) return i;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return l;
    switch (a.keyCode) {
    case 27:
        if (this.Rh()) this.Zb().blur();
        else return l;
        break;
    case 36:
        vh(this);
        break;
    case 35:
        wh(this,
        function(a, b) {
            a--;
            return 0 > a ? b - 1 : a
        },
        0);
        break;
    case 38:
        if (this.qb == qh) xh(this);
        else return l;
        break;
    case 37:
        if (this.qb == ph) this.xd() ? yh(this) : xh(this);
        else return l;
        break;
    case 40:
        if (this.qb == qh) yh(this);
        else return l;
        break;
    case 39:
        if (this.qb == ph) this.xd() ? xh(this) : yh(this);
        else return l;
        break;
    default:
        return l
    }
    return i
};
function sh(a, b) {
    var c = b.f(),
    c = c.id || (c.id = b.Sd());
    a.pg || (a.pg = {});
    a.pg[c] = b
}
r.aa = function(a, b) {
    rh.g.aa.call(this, a, b)
};
r.xk = function(a, b, c) {
    a.ak |= 2;
    a.ak |= 64; (this.Rh() || !this.qJ) && ih(a, 32, l);
    a.No(l);
    rh.g.xk.call(this, a, b, c);
    a.Ca && this.Ca && sh(this, a);
    b <= this.ib && this.ib++
};
r.removeChild = function(a, b) {
    if (a = t(a) ? Jg(this, a) : a) {
        var c = Ng(this, a); - 1 != c && (c == this.ib ? a.fd(l) : c < this.ib && this.ib--); (c = a.f()) && (c.id && this.pg) && F.remove(this.pg, c.id)
    }
    a = rh.g.removeChild.call(this, a, b);
    a.No(i);
    return a
};
r.Oo = function(a) {
    this.f() && e(Error("Component already rendered"));
    this.qb = a
};
r.H = n("cb");
r.n = function(a, b) {
    if (b || this.cb != a && this.dispatchEvent(a ? "show": "hide")) {
        this.cb = a;
        var c = this.f();
        if (c) {
            S(c, a);
            if (this.Rh() && (c = this.Zb())) c.tabIndex = this.Wb && this.cb ? 0 : -1;
            b || this.dispatchEvent(this.cb ? "aftershow": "afterhide")
        }
        return i
    }
    return l
};
r.isEnabled = n("Wb");
r.Pa = function(a) {
    if (this.Wb != a && this.dispatchEvent(a ? "enable": "disable")) if (a ? (this.Wb = i, Kg(this,
    function(a) {
        a.VH ? delete a.VH: a.Pa(i)
    })) : (Kg(this,
    function(a) {
        a.isEnabled() ? a.Pa(l) : a.VH = i
    }), this.Uf = this.Wb = l), this.Rh()) {
        var b = this.Zb();
        b && (b.tabIndex = a && this.cb ? 0 : -1)
    }
};
r.Rh = n("Jv");
r.Ie = function(a) {
    a != this.Jv && this.Ca && th(this, a);
    this.Jv = a;
    if (this.Wb && this.cb) {
        var b = this.Zb();
        b && (b.tabIndex = a ? 0 : -1)
    }
};
r.Hb = function(a) { (a = Mg(this, a)) ? a.fd(i) : -1 < this.ib && uh(this).fd(l)
};
r.fd = function(a) {
    this.Hb(Ng(this, a))
};
function uh(a) {
    return Mg(a, a.ib)
}
function vh(a) {
    wh(a,
    function(a, c) {
        return (a + 1) % c
    },
    Lg(a) - 1)
}
function yh(a) {
    wh(a,
    function(a, c) {
        return (a + 1) % c
    },
    a.ib)
}
function xh(a) {
    wh(a,
    function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    },
    a.ib)
}
function wh(a, b, c) {
    for (var c = 0 > c ? Ng(a, a.dc) : c, d = Lg(a), c = b.call(a, c, d), f = 0; f <= d;) {
        var g = Mg(a, c);
        if (g && a.oB(g)) {
            a.Wy(c);
            break
        }
        f++;
        c = b.call(a, c, d)
    }
}
r.oB = function(a) {
    return a.H() && a.isEnabled() && !!(a.Ib & 2)
};
r.Wy = function(a) {
    this.Hb(a)
};
function zh() {
    this.Ku = []
}
w(zh, Yg);
ja(zh);
function Ah(a, b) {
    var c = a.Ku[b];
    if (!c) {
        switch (b) {
        case 0:
            c = a.C() + "-highlight";
            break;
        case 1:
            c = a.C() + "-checkbox";
            break;
        case 2:
            c = a.C() + "-content"
        }
        a.Ku[b] = c
    }
    return c
}
r = zh.prototype;
r.lc = function() {
    return Xc.uI
};
r.j = function(a) {
    var b = a.B().j("div", this.Xe(a).join(" "), Bh(this, a.$a(), a.B()));
    Ch(this, a, b, !!(a.Ib & 8) || !!(a.Ib & 16));
    $g(this, a, b);
    return b
};
r.R = function(a) {
    return a && a.firstChild
};
r.h = function(a, b) {
    var c = rc(b),
    d = Ah(this, 2);
    c && E.has(c, d) || b.appendChild(Bh(this, b.childNodes, a.B()));
    E.has(b, "goog-option") && (a.Ko(i), this.Ko(a, b, i));
    return zh.g.h.call(this, a, b)
};
r.Fa = function(a, b) {
    var c = this.R(a),
    d = Dh(this, a) ? c.firstChild: j;
    zh.g.Fa.call(this, a, b);
    d && !Dh(this, a) && c.insertBefore(d, c.firstChild || j)
};
function Bh(a, b, c) {
    a = Ah(a, 2);
    return c.j("div", a, b)
}
r.ki = function(a, b, c) {
    b && (Pc(b, c ? Xc.wI: this.lc()), Ch(this, a, b, c))
};
r.Ko = function(a, b, c) {
    b && (Pc(b, c ? Xc.vI: this.lc()), Ch(this, a, b, c))
};
function Dh(a, b) {
    var c = a.R(b);
    if (c) {
        var c = c.firstChild,
        d = Ah(a, 1);
        return !! c && E.has(c, d)
    }
    return l
}
function Ch(a, b, c, d) {
    d != Dh(a, c) && (E.enable(c, "goog-option", d), c = a.R(c), d ? (a = Ah(a, 1), c.insertBefore(b.B().j("div", a), c.firstChild || j)) : c.removeChild(c.firstChild))
}
r.un = function(a) {
    switch (a) {
    case 2:
        return Ah(this, 0);
    case 16:
    case 8:
        return "goog-option-selected";
    default:
        return zh.g.un.call(this, a)
    }
};
r.Yv = function(a) {
    var b = Ah(this, 0);
    switch (a) {
    case "goog-option-selected":
        return 16;
    case b:
        return 2;
    default:
        return zh.g.Yv.call(this, a)
    }
};
r.C = p("goog-menuitem");
function Eh(a, b, c, d) {
    fh.call(this, a, d || zh.v(), c);
    this.pa(b)
}
w(Eh, fh);
r = Eh.prototype;
r.O = function() {
    var a = this.Ex;
    return a != j ? a: this.Ih()
};
r.pa = ca("Ex");
r.ki = function(a) {
    ih(this, 8, a);
    this.Be() && !a && this.Jc(l);
    var b = this.f();
    b && this.F.ki(this, b, a)
};
r.Ko = function(a) {
    ih(this, 16, a);
    var b = this.f();
    b && this.F.Ko(this, b, a)
};
r.Ih = function() {
    var a = this.$a();
    return oa(a) ? (a = y.map(a,
    function(a) {
        var c = E.get(a);
        return y.contains(c, "goog-menuitem-accel") || y.contains(c, "goog-menuitem-mnemonic-separator") ? "": Ic(a)
    }).join(""), Na(a)) : Eh.g.Ih.call(this)
};
r.Nf = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.IF;
        b.IF = j;
        if (b = c && qa(a.clientX)) b = new Ob(a.clientX, a.clientY),
        b = c == b ? i: !c || !b ? l: c.x == b.x && c.y == b.y;
        if (b) return
    }
    Eh.g.Nf.call(this, a)
};
r.af = function(a) {
    return a.keyCode == this.Cx && this.Yd(a) ? i: Eh.g.af.call(this, a)
};
r.UL = n("Cx");
ch("goog-menuitem",
function() {
    return new Eh(j)
});
function Fh(a, b, c) {
    Eh.call(this, a, b, c);
    this.ki(i)
}
w(Fh, Eh);
Fh.prototype.Yd = function() {
    return this.dispatchEvent("action")
};
ch("goog-option",
function() {
    return new Fh(j)
});
function Gh() {}
w(Gh, lh);
ja(Gh);
Gh.prototype.j = function(a) {
    return a.B().j("div", this.C() + " goog-inline-block", " ")
};
Gh.prototype.h = function(a, b) {
    b = Gh.g.h.call(this, a, b);
    E.add(b, "goog-inline-block");
    return b
};
Gh.prototype.C = p("goog-toolbar-separator");
function Hh() {}
w(Hh, nh);
ja(Hh);
Hh.prototype.lc = function() {
    return Xc.II
};
Hh.prototype.vn = function(a) {
    return "HR" == a.tagName ? new mh(Gh.v()) : Hh.g.vn.call(this, a)
};
Hh.prototype.C = p("goog-toolbar");
Hh.prototype.TC = function() {
    return ph
};
function Ih() {}
w(Ih, Yg);
ja(Ih);
r = Ih.prototype;
r.lc = function() {
    return Xc.sp
};
r.hg = function(a, b, c) {
    16 == b ? Qc(a, Wc.xI, c) : Ih.g.hg.call(this, a, b, c)
};
r.j = function(a) {
    var b = Ih.g.j.call(this, a),
    c = a.Mf();
    c && this.Bd(b, c); (c = a.O()) && this.pa(b, c);
    a.Ib & 16 && this.hg(b, 16, a.Be());
    return b
};
r.h = function(a, b) {
    var b = Ih.g.h.call(this, a, b),
    c = this.O(b);
    a.rc = c;
    a.Xs(this.Mf(b));
    a.Ib & 16 && this.hg(b, 16, a.Be());
    return b
};
r.O = ia;
r.pa = ia;
r.Mf = function(a) {
    return a.title
};
r.Bd = function(a, b) {
    a && (a.title = b || "")
};
r.Ug = function(a, b) {
    var c = a.xd(),
    d = this.C() + "-collapse-left",
    f = this.C() + "-collapse-right";
    a.Qi(c ? f: d, !!(b & 1));
    a.Qi(c ? d: f, !!(b & 2))
};
r.C = p("goog-button");
function Jh() {}
w(Jh, Ih);
ja(Jh);
r = Jh.prototype;
r.lc = ba();
r.j = function(a) {
    a.No(l);
    a.wi &= -256;
    ih(a, 32, l);
    return a.B().j("button", {
        "class": this.Xe(a).join(" "),
        disabled: !a.isEnabled(),
        title: a.Mf() || "",
        value: a.O() || ""
    },
    a.Ih() || "")
};
r.Rc = function(a) {
    return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
};
r.h = function(a, b) {
    a.No(l);
    a.wi &= -256;
    ih(a, 32, l);
    b.disabled && E.add(b, this.un(1));
    return Jh.g.h.call(this, a, b)
};
r.Ae = function(a) {
    a.e().c(a.f(), "click", a.Yd)
};
r.Io = ia;
r.ji = ia;
r.Rh = function(a) {
    return a.isEnabled()
};
r.Ie = ia;
r.Pb = function(a, b, c) {
    Jh.g.Pb.call(this, a, b, c);
    if ((a = a.f()) && 1 == b) a.disabled = c
};
r.O = function(a) {
    return a.value
};
r.pa = function(a, b) {
    a && (a.value = b)
};
r.hg = ia;
function Kh(a, b, c) {
    fh.call(this, a, b || Jh.v(), c)
}
w(Kh, fh);
r = Kh.prototype;
r.O = n("rc");
r.pa = function(a) {
    this.rc = a;
    this.F.pa(this.f(), a)
};
r.Mf = n("dp");
r.Bd = function(a) {
    this.dp = a;
    this.F.Bd(this.f(), a)
};
r.Xs = ca("dp");
r.Ug = function(a) {
    this.F.Ug(this, a)
};
r.m = function() {
    Kh.g.m.call(this);
    delete this.rc;
    delete this.dp
};
r.p = function() {
    Kh.g.p.call(this);
    if (this.Ib & 32) {
        var a = this.Zb();
        a && this.e().c(a, "keyup", this.af)
    }
};
r.af = function(a) {
    return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Yd(a) : 32 == a.keyCode
};
ch("goog-button",
function() {
    return new Kh(j)
});
function Lh() {}
w(Lh, Ih);
ja(Lh);
r = Lh.prototype;
r.j = function(a) {
    var b = {
        "class": "goog-inline-block " + this.Xe(a).join(" "),
        title: a.Mf() || ""
    },
    b = a.B().j("div", b, this.gq(a.$a(), a.B()));
    $g(this, a, b);
    return b
};
r.lc = function() {
    return Xc.sp
};
r.R = function(a) {
    return a && a.firstChild.firstChild
};
r.gq = function(a, b) {
    return b.j("div", "goog-inline-block " + (this.C() + "-outer-box"), b.j("div", "goog-inline-block " + (this.C() + "-inner-box"), a))
};
r.Rc = function(a) {
    return "DIV" == a.tagName
};
r.h = function(a, b) {
    Mh(b, i);
    Mh(b, l);
    var c;
    a: {
        c = a.B().VC(b);
        var d = this.C() + "-outer-box";
        if (c && E.has(c, d) && (c = a.B().VC(c), d = this.C() + "-inner-box", c && E.has(c, d))) {
            c = i;
            break a
        }
        c = l
    }
    c || b.appendChild(this.gq(b.childNodes, a.B()));
    E.add(b, "goog-inline-block", this.C());
    return Lh.g.h.call(this, a, b)
};
r.C = p("goog-custom-button");
function Mh(a, b) {
    if (a) for (var c = b ? a.firstChild: a.lastChild, d; c && c.parentNode == a;) {
        d = b ? c.nextSibling: c.previousSibling;
        if (3 == c.nodeType) {
            var f = c.nodeValue;
            if ("" == Oa(f)) a.removeChild(c);
            else {
                c.nodeValue = b ? f.replace(/^[\s\xa0]+/, "") : Pa(f);
                break
            }
        } else break;
        c = d
    }
};
function Nh() {}
w(Nh, Lh);
ja(Nh);
Nh.prototype.C = p("goog-toolbar-button");
function Oh(a, b, c) {
    Kh.call(this, a, b || Nh.v(), c)
}
w(Oh, Kh);
ch("goog-toolbar-button",
function() {
    return new Oh(j)
});
var Ph = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370d8",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#d87093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
function Qh(a) {
    var b = {},
    a = String(a),
    c = "#" == a.charAt(0) ? a: "#" + a;
    if (Rh.test(c)) return b.er = Sh(c),
    b.type = "hex",
    b;
    c = Th(a);
    if (c.length) {
        var d = c[0],
        a = c[1],
        c = c[2],
        d = Number(d),
        a = Number(a),
        c = Number(c); (isNaN(d) || 0 > d || 255 < d || isNaN(a) || 0 > a || 255 < a || isNaN(c) || 0 > c || 255 < c) && e(Error('"(' + d + "," + a + "," + c + '") is not a valid RGB color'));
        d = Uh(d.toString(16));
        a = Uh(a.toString(16));
        c = Uh(c.toString(16));
        b.er = "#" + d + a + c;
        b.type = "rgb";
        return b
    }
    if (Ph && (c = Ph[a.toLowerCase()])) return b.er = c,
    b.type = "named",
    b;
    e(Error(a + " is not a valid color string"))
}
var Vh = /#(.)(.)(.)/;
function Sh(a) {
    Rh.test(a) || e(Error("'" + a + "' is not a valid hex color"));
    4 == a.length && (a = a.replace(Vh, "#$1$1$2$2$3$3"));
    return a.toLowerCase()
}
var Rh = /^#(?:[0-9a-f]{3}){1,2}$/i,
Wh = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
function Th(a) {
    var b = a.match(Wh);
    if (b) {
        var a = Number(b[1]),
        c = Number(b[2]),
        b = Number(b[3]);
        if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b) return [a, c, b]
    }
    return []
}
function Uh(a) {
    return 1 == a.length ? "0" + a: a
};
function Xh() {}
w(Xh, Yg);
ja(Xh);
Xh.prototype.C = p("goog-menuheader");
function Yh(a, b, c) {
    fh.call(this, a, c || Xh.v(), b);
    ih(this, 1, l);
    ih(this, 2, l);
    ih(this, 4, l);
    ih(this, 32, l);
    this.Y = 1
}
w(Yh, fh);
ch("goog-menuheader",
function() {
    return new Yh(j)
});
function Zh() {}
w(Zh, nh);
ja(Zh);
r = Zh.prototype;
r.lc = function() {
    return Xc.tI
};
r.Rc = function(a) {
    return "UL" == a.tagName || Zh.g.Rc.call(this, a)
};
r.vn = function(a) {
    return "HR" == a.tagName ? new mh: Zh.g.vn.call(this, a)
};
r.Bf = function(a, b) {
    return uc(a.f(), b)
};
r.C = p("goog-menu");
r.Ae = function(a) {
    Zh.g.Ae.call(this, a);
    Qc(a.f(), Wc.vk, "true")
};
function $h(a) {
    mh.call(this, lh.v(), a)
}
w($h, mh);
ch("goog-menuseparator",
function() {
    return new mh
});
function ai(a, b) {
    rh.call(this, qh, b || Zh.v(), a);
    this.Ie(l)
}
w(ai, rh);
r = ai.prototype;
r.Bm = i;
r.rJ = l;
r.C = function() {
    return this.F.C()
};
r.Bf = function(a) {
    if (this.F.Bf(this, a)) return i;
    for (var b = 0,
    c = Lg(this); b < c; b++) {
        var d = Mg(this, b);
        if ("function" == typeof d.Bf && d.Bf(a)) return i
    }
    return l
};
r.za = function(a) {
    this.aa(a, i)
};
r.vi = function(a, b) {
    this.xk(a, b, i)
};
r.removeItem = function(a) { (a = this.removeChild(a, i)) && a.w()
};
r.Lh = function(a) {
    return Mg(this, a)
};
r.dl = function() {
    return Lg(this)
};
r.Ye = function() {
    var a = [];
    Kg(this,
    function(b) {
        a.push(b)
    });
    return a
};
r.Kc = function(a, b) {
    var c = this.H();
    c || S(this.f(), i);
    mg(this.f(), a, b);
    c || S(this.f(), l)
};
r.n = function(a, b, c) { (b = ai.g.n.call(this, a, b)) && (a && this.Ca && this.Bm) && this.Zb().focus();
    this.IF = a && c && qa(c.clientX) ? new Ob(c.clientX, c.clientY) : j;
    return b
};
r.hw = function(a) {
    this.Bm && this.Zb().focus();
    return ai.g.hw.call(this, a)
};
r.oB = function(a) {
    return (this.rJ || a.isEnabled()) && a.H() && !!(a.Ib & 2)
};
r.Z = function(a) {
    var b = this.F,
    c;
    c = this.B();
    c = Wb(c.Aa, "div", b.C() + "-content", a);
    for (var d = c.length,
    f = 0; f < d; f++) oh(b, this, c[f]);
    ai.g.Z.call(this, a)
};
r.af = function(a) {
    var b = ai.g.af.call(this, a);
    b || Kg(this,
    function(c) { ! b && (c.UL && c.Cx == a.keyCode) && (this.isEnabled() && this.fd(c), b = c.$b(a))
    },
    this);
    return b
};
r.Hb = function(a) {
    ai.g.Hb.call(this, a); (a = Mg(this, a)) && hg(a.f(), this.f())
};
function bi() {}
w(bi, Lh);
ja(bi);
A && (bi.prototype.Fa = function(a, b) {
    var c = bi.g.R.call(this, a && a.firstChild);
    c && oc(this.createCaption(b, Sb(a)), c)
});
r = bi.prototype;
r.R = function(a) {
    a = bi.g.R.call(this, a && a.firstChild);
    A && (a && a.__goog_wrapper_div) && (a = a.firstChild);
    return a
};
r.h = function(a, b) {
    var c = Vb("*", "goog-menu", b)[0];
    if (c) {
        S(c, l);
        Ub(c).body.appendChild(c);
        var d = new ai;
        d.h(c);
        a.Vg(d)
    }
    return bi.g.h.call(this, a, b)
};
r.gq = function(a, b) {
    return bi.g.gq.call(this, [this.createCaption(a, b), b.j("div", "goog-inline-block " + (this.C() + "-dropdown"), " ")], b)
};
r.createCaption = function(a, b) {
    return ci(a, this.C(), b)
};
function ci(a, b, c) {
    return c.j("div", "goog-inline-block " + (b + "-caption"), a)
}
r.C = p("goog-menu-button");
function di() {}
w(di, bi);
ja(di);
di.prototype.createCaption = function(a, b) {
    return di.g.createCaption.call(this, ei(a, b), b)
};
function ei(a, b) {
    return b.j("div", "goog-color-menu-button-indicator", a)
}
di.prototype.pa = function(a, b) {
    a && fi(this.R(a), b)
};
function fi(a, b) {
    if (a && a.firstChild) {
        var c;
        c = b && (Rh.test("#" == b.charAt(0) ? b: "#" + b) || Th(b).length || Ph && Ph[b.toLowerCase()]) ? Qh(b).er: j;
        a.firstChild.style.borderBottomColor = c || (z ? "": "transparent")
    }
}
di.prototype.Ae = function(a) {
    this.pa(a.f(), a.O());
    E.add(a.f(), "goog-color-menu-button");
    di.g.Ae.call(this, a)
};
function gi() {}
w(gi, Yg);
ja(gi);
var hi = 0;
r = gi.prototype;
r.j = function(a) {
    var b = this.Xe(a);
    return a.B().j("div", b ? b.join(" ") : j, ii(this, a.$a(), a.hl(), a.B()))
};
function ii(a, b, c, d) {
    for (var f = [], g = 0, k = 0; g < c.height; g++) {
        for (var m = [], q = 0; q < c.width; q++) {
            var s = b && b[k++];
            m.push(ji(a, s, d))
        }
        f.push(d.j("tr", a.C() + "-row", m))
    }
    return a.IB(f, d)
}
r.IB = function(a, b) {
    var c = b.j("table", this.C() + "-table", b.j("tbody", this.C() + "-body", a));
    c.cellSpacing = 0;
    c.cellPadding = 0;
    Pc(c, "grid");
    return c
};
function ji(a, b, c) {
    a = c.j("td", {
        "class": a.C() + "-cell",
        id: a.C() + "-cell-" + hi++
    },
    b);
    Pc(a, "gridcell");
    return a
}
r.Rc = p(l);
r.h = p(j);
r.Fa = function(a, b) {
    if (a) {
        var c = Vb("tbody", this.C() + "-body", a)[0];
        if (c) {
            var d = 0;
            y.forEach(c.rows,
            function(a) {
                y.forEach(a.cells,
                function(a) {
                    kc(a);
                    if (b) {
                        var c = b[d++];
                        c && a.appendChild(c)
                    }
                })
            });
            if (d < b.length) {
                for (var f = [], g = Sb(a), k = c.rows[0].cells.length; d < b.length;) {
                    var m = b[d++];
                    f.push(ji(this, m, g));
                    f.length == k && (m = g.j("tr", this.C() + "-row", f), c.appendChild(m), f.length = 0)
                }
                if (0 < f.length) {
                    for (; f.length < k;) f.push(ji(this, "", g));
                    m = g.j("tr", this.C() + "-row", f);
                    c.appendChild(m)
                }
            }
        }
        vg(a, i, A)
    }
};
function ki(a, b, c) {
    for (b = b.f(); c && 1 == c.nodeType && c != b;) {
        if ("TD" == c.tagName && E.has(c, a.C() + "-cell")) return c.firstChild;
        c = c.parentNode
    }
    return j
}
function li(a, b, c, d) {
    c && (c = c.parentNode, E.enable(c, a.C() + "-cell-hover", d), Qc(b.f().firstChild, "activedescendent", c.id))
}
r.C = p("goog-palette");
function mi(a) {
    M.call(this);
    this.yd = [];
    ni(this, a)
}
w(mi, zd);
r = mi.prototype;
r.ag = j;
r.mf = j;
r.dl = function() {
    return this.yd.length
};
r.Lh = function(a) {
    return this.yd[a] || j
};
function ni(a, b) {
    b && (y.forEach(b,
    function(a) {
        this.Wl(a, l)
    },
    a), y.extend(a.yd, b))
}
r.za = function(a) {
    this.vi(a, this.dl())
};
r.vi = function(a, b) {
    a && (this.Wl(a, l), y.Ln(this.yd, a, b))
};
r.removeItem = function(a) {
    a && y.remove(this.yd, a) && a == this.ag && (this.ag = j, this.dispatchEvent("select"))
};
r.Dg = n("ag");
r.Ye = function() {
    return y.clone(this.yd)
};
r.nf = function(a) {
    a != this.ag && (this.Wl(this.ag, l), this.ag = a, this.Wl(a, i));
    this.dispatchEvent("select")
};
r.gl = function() {
    return this.ag ? y.indexOf(this.yd, this.ag) : -1
};
r.Qo = function(a) {
    this.nf(this.Lh(a))
};
r.clear = function() {
    y.clear(this.yd);
    this.ag = j
};
r.m = function() {
    mi.g.m.call(this);
    delete this.yd;
    this.ag = j
};
r.Wl = function(a, b) {
    a && ("function" == typeof this.mf ? this.mf(a, b) : "function" == typeof a.$l && a.$l(b))
};
function oi(a, b, c) {
    fh.call(this, a, b || gi.v(), c);
    this.wi &= -89
}
w(oi, fh);
r = oi.prototype;
r.ec = j;
r.ib = -1;
r.ea = j;
r.m = function() {
    oi.g.m.call(this);
    this.ea && (this.ea.w(), this.ea = j);
    this.ec = j
};
r.Xl = function(a) {
    oi.g.Xl.call(this, a);
    pi(this);
    this.ea ? (this.ea.clear(), ni(this.ea, a)) : (this.ea = new mi(a), a = u(this.Wl, this), this.ea.mf = a, this.e().c(this.ea, "select", this.gj));
    this.ib = -1
};
r.Ih = p("");
r.Us = ba();
r.Yc = function(a) {
    oi.g.Yc.call(this, a);
    var b = ki(this.F, this, a.target); (!b || !a.relatedTarget || !uc(b, a.relatedTarget)) && b != qi(this) && ri(this, b)
};
r.Nh = function(a) {
    oi.g.Nh.call(this, a);
    var b = ki(this.F, this, a.target); (!b || !a.relatedTarget || !uc(b, a.relatedTarget)) && b == qi(this) && li(this.F, this, b, l)
};
r.we = function(a) {
    oi.g.we.call(this, a);
    this.wb() && (a = ki(this.F, this, a.target), a != qi(this) && ri(this, a))
};
r.Yd = function(a) {
    var b = qi(this);
    return b ? (this.nf(b), oi.g.Yd.call(this, a)) : l
};
r.$b = function(a) {
    var b = this.$a(),
    b = b ? b.length: 0,
    c = this.ec.width;
    if (0 == b || !this.isEnabled()) return l;
    if (13 == a.keyCode || 32 == a.keyCode) return this.Yd(a);
    if (36 == a.keyCode) return this.Hb(0),
    i;
    if (35 == a.keyCode) return this.Hb(b - 1),
    i;
    var d = 0 > this.ib ? this.gl() : this.ib;
    switch (a.keyCode) {
    case 37:
        -1 == d && (d = b);
        if (0 < d) return this.Hb(d - 1),
        a.preventDefault(),
        i;
        break;
    case 39:
        if (d < b - 1) return this.Hb(d + 1),
        a.preventDefault(),
        i;
        break;
    case 38:
        -1 == d && (d = b + c - 1);
        if (d >= c) return this.Hb(d - c),
        a.preventDefault(),
        i;
        break;
    case 40:
        if ( - 1 == d && (d = -c), d < b - c) return this.Hb(d + c),
        a.preventDefault(),
        i
    }
    return l
};
r.gj = ba();
r.hl = n("ec");
function si(a, b) {
    a.f() && e(Error("Component already rendered"));
    a.ec = qa(b) ? new Qb(b, h) : b;
    pi(a)
}
function qi(a) {
    var b = a.$a();
    return b && b[a.ib]
}
r.Hb = function(a) {
    a != this.ib && (ti(this, this.ib, l), this.ib = a, ti(this, a, i))
};
function ri(a, b) {
    var c = a.$a();
    a.Hb(c ? y.indexOf(c, b) : -1)
}
r.gl = function() {
    return this.ea ? this.ea.gl() : -1
};
r.Dg = function() {
    return this.ea ? this.ea.Dg() : j
};
r.Qo = function(a) {
    this.ea && this.ea.Qo(a)
};
r.nf = function(a) {
    this.ea && this.ea.nf(a)
};
function ti(a, b, c) {
    if (a.f()) {
        var d = a.$a();
        d && (0 <= b && b < d.length) && li(a.F, a, d[b], c)
    }
}
r.Wl = function(a, b) {
    this.f() && a && E.enable(a.parentNode, this.F.C() + "-cell-selected", b)
};
function pi(a) {
    var b = a.$a();
    if (b) if (a.ec && a.ec.width) {
        if (b = Math.ceil(b.length / a.ec.width), !qa(a.ec.height) || a.ec.height < b) a.ec.height = b
    } else b = Math.ceil(Math.sqrt(b.length)),
    a.ec = new Qb(b, b);
    else a.ec = new Qb(0, 0)
};
function ui(a, b, c) {
    this.aq = a || [];
    oi.call(this, j, b || gi.v(), c);
    this.aq = this.aq;
    this.fs = j;
    this.Fa(y.map(this.aq,
    function(a) {
        var b = this.B().j("div", {
            "class": this.F.C() + "-colorswatch",
            style: "background-color:" + a
        });
        "#" == a.charAt(0) && (a = Sh(a), a = "RGB (" + [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)].join(", ") + ")");
        b.title = a;
        return b
    },
    this))
}
w(ui, oi);
ui.prototype.fs = j;
ui.prototype.Xv = function() {
    var a = this.Dg();
    return a ? (a = Uf(a, "background-color"), vi(a)) : j
};
ui.prototype.Po = function(a) {
    a = vi(a);
    this.fs || (this.fs = y.map(this.aq,
    function(a) {
        return vi(a)
    }));
    this.Qo(a ? y.indexOf(this.fs, a) : -1)
};
function vi(a) {
    if (a) try {
        return Qh(a).er
    } catch(b) {}
    return j
};
function wi(a) {
    var b = a.offsetLeft,
    c = a.offsetParent; ! c && "fixed" == Yf(a) && (c = Ub(a).documentElement);
    if (!c) return b;
    if (A) var d = ig(c),
    b = b + d.left;
    else Gb(8) && (d = ig(c), b -= d.left);
    return gg(c) ? c.clientWidth - (b + a.offsetWidth) : b
};
function xi(a, b, c, d, f, g, k, m, q) {
    var s = yi(c),
    x = qg(a),
    C = eg(a);
    C && x.TD(new Pf(C.left, C.top, C.right - C.left, C.bottom - C.top));
    var C = Sb(a),
    J = Sb(c);
    if (C.va() != J.va()) {
        var G = C.va().body,
        J = J.Ja(),
        P = new Ob(0, 0),
        W = cc(Ub(G)),
        ma = G;
        do {
            var Ha = W == J ? fg(ma) : kg(ma);
            P.x += Ha.x;
            P.y += Ha.y
        } while ( W && W != J && ( ma = W . frameElement ) && (W = W.parent));
        G = Pb(P, fg(G));
        z && !Nc(C) && (G = Pb(G, Oc(C)));
        x.left += G.x;
        x.top += G.y
    }
    a = (b & 4 && gg(a) ? b ^ 2 : b) & -5;
    x = new Ob(a & 2 ? x.left + x.width: x.left, a & 1 ? x.top + x.height: x.top);
    x = Pb(x, s);
    f && (x.x += (a & 2 ? -1 : 1) * f.x, x.y += (a & 1 ? -1 : 1) * f.y);
    var Sa;
    if (k) if (q) Sa = q;
    else if (Sa = eg(c)) Sa.top -= s.y,
    Sa.right -= s.x,
    Sa.bottom -= s.y,
    Sa.left -= s.x;
    return zi(x, c, d, g, Sa, k, m)
}
function yi(a) {
    var b;
    if (a = a.offsetParent) {
        var c = "HTML" == a.tagName || "BODY" == a.tagName;
        if (!c || "static" != Yf(a)) b = fg(a),
        c || (c = (c = gg(a)) && A ? -a.scrollLeft: c && (!z || !D("8")) ? a.scrollWidth - a.clientWidth - a.scrollLeft: a.scrollLeft, b = Pb(b, new Ob(c, a.scrollTop)))
    }
    return b || new Ob
}
function zi(a, b, c, d, f, g, k) {
    var a = a.clone(),
    m = 0,
    q = (c & 4 && gg(b) ? c ^ 2 : c) & -5,
    c = og(b),
    k = k ? k.clone() : c.clone();
    if (d || 0 != q) q & 2 ? a.x -= k.width + (d ? d.right: 0) : d && (a.x += d.left),
    q & 1 ? a.y -= k.height + (d ? d.bottom: 0) : d && (a.y += d.top);
    if (g) {
        if (f) {
            m = a;
            d = 0;
            if (65 == (g & 65) && (m.x < f.left || m.x >= f.right)) g &= -2;
            if (132 == (g & 132) && (m.y < f.top || m.y >= f.bottom)) g &= -5;
            m.x < f.left && g & 1 && (m.x = f.left, d |= 1);
            m.x < f.left && (m.x + k.width > f.right && g & 16) && (k.width = Math.max(k.width - (m.x + k.width - f.right), 0), d |= 4);
            m.x + k.width > f.right && g & 1 && (m.x = Math.max(f.right - k.width, f.left), d |= 1);
            g & 2 && (d |= (m.x < f.left ? 16 : 0) | (m.x + k.width > f.right ? 32 : 0));
            m.y < f.top && g & 4 && (m.y = f.top, d |= 2);
            m.y >= f.top && (m.y + k.height > f.bottom && g & 32) && (k.height = Math.max(k.height - (m.y + k.height - f.bottom), 0), d |= 8);
            m.y + k.height > f.bottom && g & 4 && (m.y = Math.max(f.bottom - k.height, f.top), d |= 2);
            g & 8 && (d |= (m.y < f.top ? 64 : 0) | (m.y + k.height > f.bottom ? 128 : 0));
            m = d
        } else m = 256;
        if (m & 496) return m
    }
    Zf(b, a);
    Rb(c, k) || (f = Nc(Sb(Ub(b))), z && (!f || !D("8")) ? (a = b.style, f ? (f = zg(b), b = ig(b), a.pixelWidth = k.width - b.left - f.left - f.right - b.right, a.pixelHeight = k.height - b.top - f.top - f.bottom - b.bottom) : (a.pixelWidth = k.width, a.pixelHeight = k.height)) : (b = b.style, A ? b.MozBoxSizing = "border-box": B ? b.WebkitBoxSizing = "border-box": b.boxSizing = "border-box", b.width = Math.max(k.width, 0) + "px", b.height = Math.max(k.height, 0) + "px"));
    return m
};
function Ai() {}
Ai.prototype.xa = ba();
function Bi(a, b, c) {
    this.element = a;
    this.Cf = b;
    this.eR = c
}
w(Bi, Ai);
Bi.prototype.xa = function(a, b, c) {
    xi(this.element, this.Cf, a, b, h, c, this.eR)
};
function Ci(a, b, c, d) {
    Bi.call(this, a, b);
    this.Xn = c ? 5 : 0;
    this.ey = d || h
}
w(Ci, Bi);
Ci.prototype.wn = n("Xn");
Ci.prototype.Yl = ca("Xn");
Ci.prototype.xa = function(a, b, c, d) {
    var f = xi(this.element, this.Cf, a, b, j, c, 10, d, this.ey);
    if (f & 496) {
        var g = Di(f, this.Cf),
        b = Di(f, b),
        f = xi(this.element, g, a, b, j, c, 10, d, this.ey);
        f & 496 && (g = Di(f, g), b = Di(f, b), xi(this.element, g, a, b, j, c, this.wn(), d, this.ey))
    }
};
function Di(a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
};
function Ei(a, b, c, d) {
    Ci.call(this, a, b, c || d);
    if (c || d) this.Yl(65 | (d ? 32 : 132))
}
w(Ei, Ci);
var Fi, Gi, Hi, Ii, Ji, Ki, Li;
Li = Ki = Ji = Ii = Hi = Gi = Fi = l;
var Mi = pb();
Mi && ( - 1 != Mi.indexOf("Firefox") ? Fi = i: -1 != Mi.indexOf("Camino") ? Gi = i: -1 != Mi.indexOf("iPhone") || -1 != Mi.indexOf("iPod") ? Hi = i: -1 != Mi.indexOf("iPad") ? Ii = i: -1 != Mi.indexOf("Android") ? Ji = i: -1 != Mi.indexOf("Chrome") ? Ki = i: -1 != Mi.indexOf("Safari") && (Li = i));
var Ni = Fi,
Oi = Gi,
Pi = Hi,
Qi = Ii,
Ri = Ji,
Si = Ki,
Ti = Li;
function Ui(a, b, c, d) {
    Kh.call(this, a, c || bi.v(), d);
    ih(this, 64, i);
    this.wl = new Ei(j, 5);
    b && this.Vg(b);
    this.NE = j;
    this.ga = new Id(500);
    if ((Pi || Qi) && !D("533.17.9")) this.Cr = i
}
w(Ui, Kh);
r = Ui.prototype;
r.Cr = l;
r.Hs = l;
r.p = function() {
    Ui.g.p.call(this);
    this.ka && Vi(this, this.ka, i);
    Qc(this.f(), Wc.vk, "true")
};
r.Za = function() {
    Ui.g.Za.call(this);
    if (this.ka) {
        this.mb(l);
        this.ka.Za();
        Vi(this, this.ka, l);
        var a = this.ka.f();
        a && L(a)
    }
};
r.m = function() {
    Ui.g.m.call(this);
    this.ka && (this.ka.w(), delete this.ka);
    delete this.uR;
    this.ga.w()
};
r.we = function(a) {
    Ui.g.we.call(this, a);
    this.wb() && (this.mb(!this.jb(), a), this.ka && (a = this.jb(), this.ka.Uf = a))
};
r.Nf = function(a) {
    Ui.g.Nf.call(this, a);
    this.ka && !this.wb() && (this.ka.Uf = l)
};
r.Yd = function() {
    this.setActive(l);
    return i
};
r.mM = function(a) {
    this.ka && (this.ka.H() && !this.Bf(a.target)) && this.mb(l)
};
r.Bf = function(a) {
    return a && uc(this.f(), a) || this.ka && this.ka.Bf(a) || l
};
r.af = function(a) {
    if (32 == a.keyCode) {
        if (a.preventDefault(), "keyup" != a.type) return i
    } else if ("key" != a.type) return l;
    if (this.ka && this.ka.H()) {
        var b = this.ka.$b(a);
        return 27 == a.keyCode ? (this.mb(l), i) : b
    }
    return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.mb(i), i) : l
};
r.Dn = function() {
    this.mb(l)
};
r.NM = function() {
    this.wb() || this.mb(l)
};
r.Xc = function(a) {
    this.Cr || this.mb(l);
    Ui.g.Xc.call(this, a)
};
r.Sa = function() {
    this.ka || this.Vg(new ai(this.B()));
    return this.ka || j
};
r.Vg = function(a) {
    var b = this.ka;
    if (a != b && (b && (this.mb(l), this.Ca && Vi(this, b, l), delete this.ka), a)) {
        this.ka = a;
        Ig(a, this);
        a.n(l);
        var c = this.Cr; (a.Bm = c) && a.Ie(i);
        this.Ca && Vi(this, a, i)
    }
    return b
};
r.za = function(a) {
    this.Sa().aa(a, i)
};
r.vi = function(a, b) {
    this.Sa().xk(a, b, i)
};
r.removeItem = function(a) { (a = this.Sa().removeChild(a, i)) && a.w()
};
r.Lh = function(a) {
    return this.ka ? Mg(this.ka, a) : j
};
r.dl = function() {
    return this.ka ? Lg(this.ka) : 0
};
r.n = function(a, b) {
    var c = Ui.g.n.call(this, a, b);
    c && !this.H() && this.mb(l);
    return c
};
r.Pa = function(a) {
    Ui.g.Pa.call(this, a);
    this.isEnabled() || this.mb(l)
};
function Wi(a) {
    a.wl.Yl && a.wl.Yl(33)
}
r.RG = function() {
    this.mb(i)
};
r.mb = function(a, b) {
    Ui.g.mb.call(this, a);
    if (this.ka && !!(this.Y & 64) == a) {
        if (a) this.ka.Ca || (this.Hs ? this.ka.N(this.f().parentNode) : this.ka.N()),
        this.mk = eg(this.f()),
        this.yi = qg(this.f()),
        Xi(this),
        this.ka.Hb( - 1);
        else if (this.setActive(l), this.ka.Uf = l, this.f() && Qc(this.f(), Wc.vm, ""), this.os != j) {
            this.os = h;
            var c = this.ka.f();
            c && ng(c, "", "")
        }
        this.ka.n(a, l, b);
        if (!this.Ji) {
            var c = this.e(),
            d = a ? c.c: c.ya;
            d.call(c, this.B().va(), "mousedown", this.mM, i);
            this.Cr && d.call(c, this.ka, "blur", this.NM);
            d.call(c, this.ga, Kd, this.Dl);
            a ? this.ga.start() : this.ga.stop()
        }
    }
};
function Xi(a) {
    if (a.ka.Ca) {
        var b = a.wl;
        a.wl.element = a.uR || a.f();
        var c = a.ka.f();
        a.ka.H() || (c.style.visibility = "hidden", S(c, i)); ! a.os && (a.wl.wn && a.wl.wn() & 32) && (a.os = og(c));
        b.xa(c, b.Cf ^ 1, a.NE, a.os);
        a.ka.H() || (S(c, l), c.style.visibility = "visible")
    }
}
r.Dl = function() {
    var a = qg(this.f()),
    b = eg(this.f());
    if (! (this.yi == a || (!this.yi || !a ? 0 : this.yi.left == a.left && this.yi.width == a.width && this.yi.top == a.top && this.yi.height == a.height)) || !(this.mk == b || (!this.mk || !b ? 0 : this.mk.top == b.top && this.mk.right == b.right && this.mk.bottom == b.bottom && this.mk.left == b.left))) this.yi = a,
    this.mk = b,
    Xi(this)
};
function Vi(a, b, c) {
    var d = a.e(),
    c = c ? d.c: d.ya;
    c.call(d, b, "action", a.Dn);
    c.call(d, b, "highlight", a.mw);
    c.call(d, b, "unhighlight", a.ww)
}
r.mw = function(a) {
    Qc(this.f(), Wc.vm, a.target.f().id)
};
r.ww = function() {
    uh(this.ka) || Qc(this.f(), Wc.vm, "")
};
ch("goog-menu-button",
function() {
    return new Ui(j)
});
function Yi(a, b, c, d) {
    Ui.call(this, a, b, c || di.v(), d)
}
w(Yi, Ui);
var Zi = {
    fV: "#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),
    oW: "#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),
    SV: "#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")
};
function $i(a) {
    var b = new ai(a);
    F.forEach(Zi,
    function(c) {
        c = new ui(c, j, a);
        si(c, 8);
        b.aa(c, i)
    });
    return b
}
r = Yi.prototype;
r.Xv = function() {
    return this.O()
};
r.Po = function(a) {
    this.pa(a)
};
r.pa = function(a) {
    for (var b = 0,
    c; c = this.Lh(b); b++)"function" == typeof c.Po && c.Po(a);
    Yi.g.pa.call(this, a)
};
r.Dn = function(a) {
    "function" == typeof a.target.Xv ? this.pa(a.target.Xv()) : "none" == a.target.O() && this.pa(j);
    Yi.g.Dn.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
};
r.mb = function(a, b) {
    a && 0 == this.dl() && (this.Vg($i(this.B())), this.pa(this.O()));
    Yi.g.mb.call(this, a, b)
};
ch("goog-color-menu-button",
function() {
    return new Yi(j)
});
function aj() {}
w(aj, bi);
ja(aj);
aj.prototype.C = p("goog-toolbar-menu-button");
function bj() {}
w(bj, aj);
ja(bj);
bj.prototype.createCaption = function(a, b) {
    return ci(ei(a, b), this.C(), b)
};
bj.prototype.pa = function(a, b) {
    a && fi(this.R(a), b)
};
bj.prototype.Ae = function(a) {
    this.pa(a.f(), a.O());
    E.add(a.f(), "goog-toolbar-color-menu-button");
    bj.g.Ae.call(this, a)
};
function cj(a, b, c, d) {
    Yi.call(this, a, b, c || bj.v(), d)
}
w(cj, Yi);
ch("goog-toolbar-color-menu-button",
function() {
    return new cj(j)
});
function dj(a, b, c, d) {
    Ui.call(this, a, b, c || aj.v(), d)
}
w(dj, Ui);
ch("goog-toolbar-menu-button",
function() {
    return new dj(j)
});
function ej(a, b, c, d) {
    Ui.call(this, a, b, c, d);
    fj(this, a);
    this.Zy(Xc.pA)
}
w(ej, Ui);
r = ej.prototype;
r.ea = j;
r.fv = j;
r.p = function() {
    ej.g.p.call(this);
    gj(this);
    hj(this);
    Qc(this.f(), Wc.vk, "false")
};
r.Z = function(a) {
    ej.g.Z.call(this, a); (a = this.Ih()) ? fj(this, a) : this.Qo(0)
};
r.m = function() {
    ej.g.m.call(this);
    this.ea && (this.ea.w(), this.ea = j);
    this.fv = j
};
r.Dn = function(a) {
    this.nf(a.target);
    ej.g.Dn.call(this, a);
    a.stopPropagation();
    this.dispatchEvent("action")
};
r.gj = function() {
    var a = this.Dg();
    ej.g.pa.call(this, a && a.O());
    gj(this)
};
r.Vg = function(a) {
    var b = ej.g.Vg.call(this, a);
    a != b && (this.ea && this.ea.clear(), a && (this.ea ? Kg(a,
    function(a) {
        ij(a);
        this.ea.za(a)
    },
    this) : jj(this, a)));
    return b
};
function fj(a, b) {
    a.fv = b;
    gj(a)
}
r.za = function(a) {
    ij(a);
    ej.g.za.call(this, a);
    this.ea ? this.ea.za(a) : jj(this, this.Sa())
};
r.vi = function(a, b) {
    ij(a);
    ej.g.vi.call(this, a, b);
    this.ea ? this.ea.vi(a, b) : jj(this, this.Sa())
};
r.removeItem = function(a) {
    ej.g.removeItem.call(this, a);
    this.ea && this.ea.removeItem(a)
};
r.nf = function(a) {
    if (this.ea) {
        var b = this.Dg();
        this.ea.nf(a);
        a != b && this.dispatchEvent("change")
    }
};
r.Qo = function(a) {
    this.ea && this.nf(this.ea.Lh(a))
};
r.pa = function(a) {
    if (a != j && this.ea) for (var b = 0,
    c; c = this.ea.Lh(b); b++) if (c && "function" == typeof c.O && c.O() == a) {
        this.nf(c);
        return
    }
    this.nf(j)
};
r.Dg = function() {
    return this.ea ? this.ea.Dg() : j
};
r.gl = function() {
    return this.ea ? this.ea.gl() : -1
};
function jj(a, b) {
    a.ea = new mi;
    b && Kg(b,
    function(a) {
        ij(a);
        this.ea.za(a)
    },
    a);
    hj(a)
}
function hj(a) {
    a.ea && a.e().c(a.ea, "select", a.gj)
}
function gj(a) {
    var b = a.Dg();
    a.Fa(b ? b.Ih() : a.fv)
}
function ij(a) {
    a.Zy(a instanceof Eh ? Xc.sA: Xc.CI)
}
r.mb = function(a, b) {
    ej.g.mb.call(this, a, b);
    this.jb() && this.Sa().Hb(this.gl())
};
ch("goog-select",
function() {
    return new ej(j)
});
function kj(a, b, c, d) {
    ej.call(this, a, b, c || aj.v(), d)
}
w(kj, ej);
ch("goog-toolbar-select",
function() {
    return new kj(j)
});
function lj(a) {
    var b = a.indexOf(",");
    a: {
        a = ( - 1 != b ? a.substring(0, b) : a).toLowerCase();
        for (b = 0; 2 > b; b++) {
            var c = "\"'".charAt(b);
            if (a.charAt(0) == c && a.charAt(a.length - 1) == c) {
                a = a.substring(1, a.length - 1);
                break a
            }
        }
    }
    return a
}
function mj(a, b) {
    y.forEach(b,
    function(b) {
        var d = b.caption,
        b = b.value,
        f = lj(b),
        d = new Fh(d, b, a.B());
        Hg(d, f);
        a.za(d);
        d.R().style.fontFamily = b
    })
}
var nj = [10, 10, 13, 16, 18, 24, 32, 48];
function qj(a, b, c, d, f, g) {
    c = new Oh(rj(c, d, g), f, g);
    Hg(c, a);
    c.Bd(b);
    return c
}
function sj(a, b, c, d, f, g) {
    a = qj(a, b, c, d, f, g);
    ih(a, 16, i);
    return a
}
function tj(a, b, c, d, f, g) {
    f = new kj(j, j, f, g);
    d && y.forEach(d.split(/\s+/), f.oh, f);
    f.oh("goog-toolbar-select");
    fj(f, c);
    Hg(f, a);
    f.Bd(b);
    return f
}
function uj(a, b, c, d, f, g) {
    c = new cj(rj(c, d, g), j, f, g);
    Hg(c, a);
    c.Bd(b);
    return c
}
function rj(a, b, c) {
    if ((!a || "" == a) && A && !D("1.9a")) a = " ";
    return (c || Sb()).j("DIV", b ? {
        "class": b
    }: j, a)
};
var vj = v("Link");
v("Edit Link");
v("Text to display:");
var wj = v("Link to:");
v("Web address");
v("Link to a page or file somewhere else on the web");
v("Test this link");
v("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", {
    startBold: "<b>",
    endBold: "</b>",
    searchEngineLink: "<a href='http://www.google.com/' target='_new'>",
    endLink: "</a>"
});
v("To what URL should this link go?");
v("Email address");
v("Link to an email address");
v("Invalid email address");
v("To what email address should this link?");
v("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", {
    preb: "<b>",
    postb: "</b>"
});
v("Open this link in a new window");
v("Image");
var xj = {},
yj = v("Normal"),
zj = v("Normal / serif"),
Aj = [{
    caption: yj,
    value: "arial,sans-serif"
},
{
    caption: zj,
    value: "times new roman,serif"
},
{
    caption: "Courier New",
    value: "courier new,monospace"
},
{
    caption: "Georgia",
    value: "georgia,serif"
},
{
    caption: "Trebuchet",
    value: "trebuchet ms,sans-serif"
},
{
    caption: "Verdana",
    value: "verdana,sans-serif"
}],
Bj = {
    ja: [{
        caption: "ＭＳ Ｐゴシック",
        value: "ms pgothic,sans-serif"
    },
    {
        caption: "ＭＳ Ｐ明朝",
        value: "ms pmincho,serif"
    },
    {
        caption: "ＭＳ ゴシック",
        value: "ms gothic,monospace"
    }],
    ko: [{
        caption: "굴림",
        value: "gulim,sans-serif"
    },
    {
        caption: "바탕",
        value: "batang,serif"
    },
    {
        caption: "굴림체",
        value: "gulimche,monospace"
    }],
    "zh-tw": [{
        caption: "新細明體",
        value: "pmingliu,serif"
    },
    {
        caption: "細明體",
        value: "mingliu,serif"
    }],
    "zh-cn": [{
        caption: "宋体",
        value: "simsun,serif"
    },
    {
        caption: "黑体",
        value: "simhei,sans-serif"
    },
    {
        caption: "MS Song",
        value: "ms song,monospace"
    }]
},
Cj = v("Small"),
Dj = v("Normal"),
Ej = v("Large"),
Fj = v("Huge"),
Gj = [{
    caption: Cj,
    value: 1
},
{
    caption: Dj,
    value: 2
},
{
    caption: Ej,
    value: 4
},
{
    caption: Fj,
    value: 6
}],
Hj = v("Heading"),
Ij = v("Subheading"),
Jj = v("Minor heading"),
Kj = v("Normal"),
Lj = [{
    caption: Hj,
    qa: "H2"
},
{
    caption: Ij,
    qa: "H3"
},
{
    caption: Jj,
    qa: "H4"
},
{
    caption: Kj,
    qa: "P"
}];
function Mj(a, b, c, d, f, g) {
    var k = qj(a, b, c, d, f, g);
    k.oi = function(a) {
        k.Pa(a)
    };
    return k
}
function Nj(a, b) {
    var c = b;
    try {
        if (z) var d = "000000" + c.toString(16),
        f = d.substr(d.length - 6, 6),
        c = "#" + f.substring(4, 6) + f.substring(2, 4) + f.substring(0, 2);
        c != a.O() && a.pa(c)
    } catch(g) {}
}
var Oj = v("Format"),
Pj = v("Format"),
Qj = v("Undo"),
Rj = v("Redo"),
Sj = v("Font"),
Tj = v("Font size"),
Uj = v("Text color"),
Vj = v("Bold"),
Wj = v("Italic"),
Xj = v("Underline"),
Yj = v("Text background color"),
Zj = v("Add or remove link"),
$j = v("Numbered list"),
ak = v("Bullet list"),
bk = v("Decrease indent"),
ck = v("Increase indent"),
dk = v("Align left"),
ek = v("Align center"),
fk = v("Align right"),
gk = v("Justify"),
hk = v("Remove formatting"),
ik = v("Insert image"),
jk = v("Strikethrough"),
kk = v("Left-to-right"),
lk = v("Right-to-left"),
mk = v("Quote"),
nk = v("Edit HTML source"),
ok = v("Subscript"),
pk = v("Superscript"),
qk = v("Edit HTML"),
rk = {};
xj.mA = [{
    qa: "+undo",
    K: Qj,
    Da: "tr-icon tr-undo",
    factory: Mj,
    Va: i
},
{
    qa: "+redo",
    K: Rj,
    Da: "tr-icon tr-redo",
    factory: Mj,
    Va: i
},
{
    qa: "+fontName",
    K: Sj,
    Da: "tr-fontName",
    factory: function(a, b, c, d, f, g) {
        var k = tj(a, b, c, d, f, g),
        a = "en-us".replace(/_/, "-").toLowerCase(),
        b = [];
        a in Bj && (b = Bj[a]);
        b.length && mj(k, b);
        mj(k, Aj);
        fj(k, yj);
        E.add(k.Sa().R(), "goog-menu-noaccel");
        k.oi = function(a) {
            var b = j;
            a && 0 < a.length && (b = Jg(k.Sa(), lj(a)));
            b != k.Dg() && k.nf(b)
        };
        return k
    },
    Va: i
},
{
    qa: "+fontSize",
    K: Tj,
    Da: "tr-fontSize",
    factory: function(a, b, c, d, f, g) {
        var k = tj(a, b, c, d, f, g);
        y.forEach(Gj,
        function(a) {
            var b = a.value,
            a = new Fh(a.caption, b, k.B());
            k.za(a);
            a = a.R();
            a.style.fontSize = (nj[b] || 10) + "px";
            a.firstChild.style.height = "1.1em"
        });
        fj(k, Dj);
        E.add(k.Sa().R(), "goog-menu-noaccel");
        k.oi = function(a) {
            var b;
            if (b = t(a)) b = a.match(Cg),
            b = "px" == (b && b[0] || j);
            b && (a = y.lastIndexOf(nj, parseInt(a, 10)));
            a = 0 < a ? a: j;
            a != k.O() && k.pa(a)
        };
        return k
    },
    Va: i
},
{
    qa: "+bold",
    K: Vj,
    Da: "tr-icon tr-bold",
    Va: i
},
{
    qa: "+italic",
    K: Wj,
    Da: "tr-icon tr-italic",
    Va: i
},
{
    qa: "+underline",
    K: Xj,
    Da: "tr-icon tr-underline",
    Va: i
},
{
    qa: "+foreColor",
    K: Uj,
    Da: "tr-icon tr-foreColor",
    factory: function(a, b, c, d, f, g) {
        a = uj(a, b, c, d, f, g);
        a.Po("#000");
        a.oi = ya(Nj, a);
        return a
    },
    Va: i
},
{
    qa: "+backColor",
    K: Yj,
    Da: "tr-icon tr-backColor",
    factory: function(a, b, c, d, f, g) {
        a = uj(a, b, c, d, f, g);
        a.Po("#FFF");
        a.oi = ya(Nj, a);
        return a
    },
    Va: i
},
{
    qa: "+link",
    K: Zj,
    caption: vj,
    Da: "tr-link",
    Va: i
},
{
    qa: "+insertOrderedList",
    K: $j,
    Da: "tr-icon tr-insertOrderedList",
    Va: i
},
{
    qa: "+insertUnorderedList",
    K: ak,
    Da: "tr-icon tr-insertUnorderedList",
    Va: i
},
{
    qa: "+outdent",
    K: bk,
    Da: "tr-icon tr-outdent",
    factory: qj
},
{
    qa: "+indent",
    K: ck,
    Da: "tr-icon tr-indent",
    factory: qj
},
{
    qa: "+justifyLeft",
    K: dk,
    Da: "tr-icon tr-justifyLeft",
    Va: i
},
{
    qa: "+justifyCenter",
    K: ek,
    Da: "tr-icon tr-justifyCenter",
    Va: i
},
{
    qa: "+justifyRight",
    K: fk,
    Da: "tr-icon tr-justifyRight",
    Va: i
},
{
    qa: "+justifyFull",
    K: gk,
    Da: "tr-icon tr-justifyFull",
    Va: i
},
{
    qa: "+removeFormat",
    K: hk,
    Da: "tr-icon tr-removeFormat",
    factory: qj
},
{
    qa: "image",
    K: ik,
    Da: "tr-icon tr-image",
    factory: qj
},
{
    qa: "+strikeThrough",
    K: jk,
    Da: "tr-icon tr-strikeThrough",
    Va: i
},
{
    qa: "+subscript",
    K: ok,
    Da: "tr-icon tr-subscript",
    Va: i
},
{
    qa: "+superscript",
    K: pk,
    Da: "tr-icon tr-superscript",
    Va: i
},
{
    qa: "ltr",
    K: kk,
    Da: "tr-icon tr-ltr",
    Va: i
},
{
    qa: "rtl",
    K: lk,
    Da: "tr-icon tr-rtl",
    factory: function(a, b, c, d, f, g) {
        var k = sj(a, b, c, d, f, g);
        k.oi = function(a) {
            a = !!a;
            E.enable(k.getParent().f(), "tr-rtl-mode", a);
            k.Jc(a)
        };
        return k
    },
    Va: i
},
{
    qa: "+BLOCKQUOTE",
    K: mk,
    Da: "tr-icon tr-BLOCKQUOTE",
    Va: i
},
{
    qa: "+formatBlock",
    K: Oj,
    caption: Pj,
    Da: "tr-formatBlock",
    factory: function(a, b, c, d, f, g) {
        var k = tj(a, b, c, d, f, g);
        y.forEach(Lj,
        function(a) {
            var b = a.caption,
            a = a.qa,
            c = k.B(),
            b = new Fh(c.j("DIV", j, b), a, c);
            Hg(b, a);
            k.za(b)
        });
        fj(k, Kj);
        E.add(k.Sa().R(), "goog-menu-noaccel");
        k.oi = function(a) {
            a = a && 0 < a.length ? a: j;
            a != k.O() && k.pa(a)
        };
        return k
    },
    Va: i
},
{
    qa: "editHtml",
    K: nk,
    caption: qk,
    Da: "tr-editHtml",
    factory: qj
}];
for (var sk = 0,
tk; tk = xj.mA[sk]; sk++) rk[tk.qa] = tk;
delete xj.mA;
var uk = {},
vk, U, wk = "/update",
xk = l,
yk = /[\u4E00-\u9FA5\uf900-\ufa2d\uFF00-\uFFEF]/g;
var zk, V, Ak, Bk, Ck, Dk, Ek, Fk, Gk, Hk, Ik, Jk, Kk, Lk, Mk, Nk;
function Ok(a, b, c) {
    M.call(this);
    this.target = a;
    this.handle = b || a;
    this.Qr = c || new Pf(NaN, NaN, NaN, NaN);
    this.Aa = Ub(a);
    this.G = new me(this);
    N(this.handle, ["touchstart", "mousedown"], this.em, l, this)
}
w(Ok, zd);
var Pk = z || A && D("1.9.3");
r = Ok.prototype;
r.clientX = 0;
r.clientY = 0;
r.screenX = 0;
r.screenY = 0;
r.dt = 0;
r.et = 0;
r.Gi = 0;
r.Hi = 0;
r.Wb = i;
r.Mi = l;
r.Aw = 0;
r.kP = 0;
r.HN = l;
r.qi = l;
r.Bh = ca("qi");
r.e = n("G");
r.KG = function(a) {
    this.Aw = Math.pow(a, 2)
};
r.Pa = ca("Wb");
r.m = function() {
    Ok.g.m.call(this);
    qd(this.handle, ["touchstart", "mousedown"], this.em, l, this);
    this.G.Ac();
    Pk && this.Aa.releaseCapture();
    this.G = this.handle = this.target = j
};
function Qk(a) {
    la(a.kf) || (a.kf = gg(a.target));
    return a.kf
}
r.em = function(a) {
    var b = "mousedown" == a.type;
    if (this.Wb && !this.Mi && (!b || gd(a))) {
        Rk(a);
        if (0 == this.Aw) if (this.dispatchEvent(new Sk("start", this, a.clientX, a.clientY, a))) this.Mi = i,
        a.preventDefault();
        else return;
        else a.preventDefault();
        var b = this.Aa,
        c = b.documentElement,
        d = !Pk;
        this.G.c(b, ["touchmove", "mousemove"], this.PM, d);
        this.G.c(b, ["touchend", "mouseup"], this.Dq, d);
        Pk ? (c.setCapture(l), this.G.c(c, "losecapture", this.Dq)) : this.G.c(cc(b), "blur", this.Dq);
        z && this.HN && this.G.c(b, "dragstart", bd);
        this.tS && this.G.c(this.tS, "scroll", this.Vx, d);
        this.clientX = this.dt = a.clientX;
        this.clientY = this.et = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        this.Gi = this.qi ? wi(this.target) : this.target.offsetLeft;
        this.Hi = this.target.offsetTop;
        this.fy = Oc(Sb(this.Aa));
        this.kP = Aa()
    } else this.dispatchEvent("earlycancel")
};
r.Dq = function(a, b) {
    this.G.Ac();
    Pk && this.Aa.releaseCapture();
    if (this.Mi) {
        Rk(a);
        this.Mi = l;
        var c = Tk(this, this.Gi),
        d = Uk(this, this.Hi);
        this.dispatchEvent(new Sk("end", this, a.clientX, a.clientY, a, c, d, b || "touchcancel" == a.type))
    } else this.dispatchEvent("earlycancel"); ("touchend" == a.type || "touchcancel" == a.type) && a.preventDefault()
};
function Rk(a) {
    var b = a.type;
    "touchstart" == b || "touchmove" == b ? a.k(a.Yb.targetTouches[0], a.currentTarget) : ("touchend" == b || "touchcancel" == b) && a.k(a.Yb.changedTouches[0], a.currentTarget)
}
r.PM = function(a) {
    if (this.Wb) {
        Rk(a);
        var b = (this.qi && Qk(this) ? -1 : 1) * (a.clientX - this.clientX),
        c = a.clientY - this.clientY;
        this.clientX = a.clientX;
        this.clientY = a.clientY;
        this.screenX = a.screenX;
        this.screenY = a.screenY;
        if (!this.Mi) {
            var d = this.dt - this.clientX,
            f = this.et - this.clientY;
            if (d * d + f * f > this.Aw) if (this.dispatchEvent(new Sk("start", this, a.clientX, a.clientY, a))) this.Mi = i;
            else {
                this.Ji || this.Dq(a);
                return
            }
        }
        c = Vk(this, b, c);
        b = c.x;
        c = c.y;
        this.Mi && this.dispatchEvent(new Sk("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (Wk(this, a, b, c), a.preventDefault())
    }
};
function Vk(a, b, c) {
    var d = Oc(Sb(a.Aa)),
    b = b + (d.x - a.fy.x),
    c = c + (d.y - a.fy.y);
    a.fy = d;
    a.Gi += b;
    a.Hi += c;
    b = Tk(a, a.Gi);
    a = Uk(a, a.Hi);
    return new Ob(b, a)
}
r.Vx = function(a) {
    var b = Vk(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    Wk(this, a, b.x, b.y)
};
function Wk(a, b, c, d) {
    a.ev(c, d);
    a.dispatchEvent(new Sk("drag", a, b.clientX, b.clientY, b, c, d))
}
function Tk(a, b) {
    var c = a.Qr,
    d = !isNaN(c.left) ? c.left: j,
    c = !isNaN(c.width) ? c.width: 0;
    return Math.min(d != j ? d + c: Infinity, Math.max(d != j ? d: -Infinity, b))
}
function Uk(a, b) {
    var c = a.Qr,
    d = !isNaN(c.top) ? c.top: j,
    c = !isNaN(c.height) ? c.height: 0;
    return Math.min(d != j ? d + c: Infinity, Math.max(d != j ? d: -Infinity, b))
}
r.ev = function(a, b) {
    this.qi && Qk(this) ? this.target.style.right = a + "px": this.target.style.left = a + "px";
    this.target.style.top = b + "px"
};
function Sk(a, b, c, d, f, g, k, m) {
    ad.call(this, a);
    this.clientX = c;
    this.clientY = d;
    this.mB = f;
    this.left = la(g) ? g: b.Gi;
    this.top = la(k) ? k: b.Hi;
    this.xq = b;
    this.wX = !!m
}
w(Sk, ad);
function Xk(a) {
    M.call(this);
    this.d = a;
    a = z ? "focusout": "blur";
    this.IO = N(this.d, z ? "focusin": "focus", this, !z);
    this.JO = N(this.d, a, this, !z)
}
w(Xk, zd);
Xk.prototype.handleEvent = function(a) {
    var b = new ed(a.Yb);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin": "focusout";
    this.dispatchEvent(b)
};
Xk.prototype.m = function() {
    Xk.g.m.call(this);
    sd(this.IO);
    sd(this.JO);
    delete this.d
};
function Yk(a, b) {
    M.call(this);
    this.oa = new me(this);
    this.bg(a || j);
    b && (this.mi = b)
}
w(Yk, zd);
r = Yk.prototype;
r.d = j;
r.cB = i;
r.bB = j;
r.uj = l;
r.KS = l;
r.ox = -1;
r.mx = -1;
r.zD = l;
r.qL = i;
r.mi = "toggle_display";
r.Mh = n("mi");
r.f = n("d");
r.bg = function(a) {
    Zk(this);
    this.d = a
};
function Zk(a) {
    a.uj && e(Error("Can not change this state of the popup while showing."))
}
r.H = n("uj");
r.eE = function() {
    return this.uj || 150 > Aa() - this.mx
};
r.n = function(a) {
    this.Vo && this.Vo.stop();
    this.Gn && this.Gn.stop();
    a ? this.Wo() : this.ol()
};
r.xa = ia;
r.Wo = function() {
    if (!this.uj && this.jo()) {
        this.d || e(Error("Caller must call setElement before trying to show the popup"));
        this.xa();
        var a = Ub(this.d);
        this.zD && this.oa.c(a, "keydown", this.TP, i);
        if (this.cB) if (this.oa.c(a, "mousedown", this.sF, i), z) {
            var b;
            try {
                b = a.activeElement
            } catch(c) {}
            for (; b && "IFRAME" == b.nodeName;) {
                try {
                    var d = b.contentDocument || b.contentWindow.document
                } catch(f) {
                    break
                }
                a = d;
                b = a.activeElement
            }
            this.oa.c(a, "mousedown", this.sF, i);
            this.oa.c(a, "deactivate", this.qF)
        } else this.oa.c(a, "blur", this.qF);
        "toggle_display" == this.mi ? (this.d.style.visibility = "visible", S(this.d, i)) : "move_offscreen" == this.mi && this.xa();
        this.uj = i;
        this.Vo ? (pd(this.Vo, "end", this.ks, l, this), this.Vo.play()) : this.ks()
    }
};
r.ol = function(a) {
    if (!this.uj || !this.dispatchEvent({
        type: "beforehide",
        target: a
    })) return l;
    this.oa && this.oa.Ac();
    this.uj = l;
    this.mx = Aa();
    this.Gn ? (pd(this.Gn, "end", ya(this.FB, a), l, this), this.Gn.play()) : this.FB(a);
    return i
};
r.FB = function(a) {
    "toggle_display" == this.mi ? this.KS ? Ld(this.AD, 0, this) : this.AD() : "move_offscreen" == this.mi && (this.d.style.top = "-10000px");
    this.Gj(a)
};
r.AD = function() {
    this.d.style.visibility = "hidden";
    S(this.d, l)
};
r.jo = function() {
    return this.dispatchEvent("beforeshow")
};
r.ks = function() {
    this.ox = Aa();
    this.mx = -1;
    this.dispatchEvent("show")
};
r.Gj = function(a) {
    this.dispatchEvent({
        type: "hide",
        target: a
    })
};
r.sF = function(a) {
    a = a.target; ! uc(this.d, a) && ((!this.bB || uc(this.bB, a)) && !(150 > Aa() - this.ox)) && this.ol(a)
};
r.TP = function(a) {
    27 == a.keyCode && this.ol(a.target) && (a.preventDefault(), a.stopPropagation())
};
r.qF = function(a) {
    if (this.qL) {
        var b = Ub(this.d);
        if (z || tb) {
            if (a = b.activeElement, !a || uc(this.d, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > Aa() - this.ox || this.ol()
    }
};
r.m = function() {
    Yk.g.m.call(this);
    this.oa.w();
    Vc(this.Vo);
    Vc(this.Gn);
    delete this.d;
    delete this.oa
};
function $k(a, b) {
    T.call(this, b);
    this.cU = !!a
}
w($k, T);
r = $k.prototype;
r.Hv = j;
r.cb = l;
r.Qc = j;
r.Dc = j;
r.eg = j;
r.C = p("goog-modalpopup");
r.Qq = n("Qc");
r.j = function() {
    $k.g.j.call(this);
    var a = this.f();
    E.add(a, this.C());
    Fc(a, i);
    S(a, l);
    this.wx();
    al(this)
};
r.wx = function() {
    this.cU && !this.Dc && (this.Dc = this.B().j("iframe", {
        frameborder: 0,
        style: "border:0;vertical-align:bottom;",
        src: 'javascript:""'
    }), this.Dc.className = this.C() + "-bg", S(this.Dc, l), rg(this.Dc, 0));
    this.Qc || (this.Qc = this.B().j("div", this.C() + "-bg"), S(this.Qc, l))
};
function al(a) {
    a.eg || (a.eg = a.B().createElement("span"), S(a.eg, l), Fc(a.eg, i), a.eg.style.position = "absolute")
}
r.Rc = function(a) {
    return !! a && "DIV" == a.tagName
};
r.Z = function(a) {
    $k.g.Z.call(this, a);
    E.add(this.f(), this.C());
    this.wx();
    al(this);
    S(this.f(), l)
};
r.p = function() {
    this.Dc && lc(this.Dc, this.f());
    lc(this.Qc, this.f());
    $k.g.p.call(this);
    mc(this.eg, this.f());
    this.Hv = new Xk(this.B().va());
    this.e().c(this.Hv, "focusin", this.XP)
};
r.Za = function() {
    this.H() && this.n(l);
    Vc(this.Hv);
    $k.g.Za.call(this);
    L(this.Dc);
    L(this.Qc);
    L(this.eg)
};
r.n = function(a) {
    a != this.cb && (this.Jl && this.Jl.stop(), this.Lm && this.Lm.stop(), this.Il && this.Il.stop(), this.Km && this.Km.stop(), a ? this.Wo() : this.ol())
};
r.Wo = function() {
    this.dispatchEvent("beforeshow") && (this.Gy(), this.xa(), this.e().c(this.B().Ja(), "resize", this.Gy), bl(this, i), this.focus(), this.cb = i, this.Jl && this.Lm ? (pd(this.Jl, "end", this.$h, l, this), this.Lm.play(), this.Jl.play()) : this.$h())
};
r.ol = function() {
    this.dispatchEvent("beforehide") && (this.e().ya(this.B().Ja(), "resize", this.Gy), this.cb = l, this.Il && this.Km ? (pd(this.Il, "end", this.js, l, this), this.Km.play(), this.Il.play()) : this.js())
};
function bl(a, b) {
    a.Dc && S(a.Dc, b);
    a.Qc && S(a.Qc, b);
    S(a.f(), b);
    S(a.eg, b)
}
r.$h = function() {
    this.dispatchEvent("show")
};
r.js = function() {
    bl(this, l);
    this.dispatchEvent("hide")
};
r.H = n("cb");
r.focus = function() {
    this.GC()
};
r.Gy = function() {
    this.Dc && S(this.Dc, l);
    this.Qc && S(this.Qc, l);
    var a = this.B().va(),
    b = $b(cc(a) || window),
    c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth)),
    a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
    this.Dc && (S(this.Dc, i), ng(this.Dc, c, a));
    this.Qc && (S(this.Qc, i), ng(this.Qc, c, a))
};
r.xa = function() {
    var a = this.B().va(),
    b = cc(a) || window;
    if ("fixed" == Yf(this.f())) var c = a = 0;
    else c = Oc(this.B()),
    a = c.x,
    c = c.y;
    var d = og(this.f()),
    b = $b(b),
    a = Math.max(a + b.width / 2 - d.width / 2, 0),
    c = Math.max(c + b.height / 2 - d.height / 2, 0);
    Zf(this.f(), a, c);
    Zf(this.eg, a, c)
};
r.XP = function(a) {
    a.target == this.eg && Ld(this.GC, 0, this)
};
r.GC = function() {
    try {
        z && this.B().va().body.focus(),
        this.f().focus()
    } catch(a) {}
};
r.m = function() {
    Vc(this.Jl);
    this.Jl = j;
    Vc(this.Il);
    this.Il = j;
    Vc(this.Lm);
    this.Lm = j;
    Vc(this.Km);
    this.Km = j;
    $k.g.m.call(this)
};
function cl(a, b, c) {
    $k.call(this, b, c);
    this.sc = a || "modal-dialog"
}
w(cl, $k);
r = cl.prototype;
r.vL = i;
r.Fn = i;
r.Dx = i;
r.kC = i;
r.Jp = 0.5;
r.pt = "";
r.tc = "";
r.ub = j;
r.hL = l;
r.Cc = j;
r.fg = j;
r.ot = j;
r.qf = j;
r.qe = j;
r.Tb = j;
r.Mj = Xc.nI;
r.C = n("sc");
r.Ma = function(a) {
    this.pt = a;
    this.fg && zc(this.fg, a)
};
r.Fa = function(a) {
    this.tc = a;
    this.qe && (this.qe.innerHTML = a)
};
r.$a = n("tc");
r.Zy = ca("Mj");
function dl(a) {
    a.f() || a.N()
}
r.R = function() {
    dl(this);
    return this.qe
};
r.Nv = function() {
    dl(this);
    return this.Tb
};
function el(a) {
    dl(a);
    return a.f()
}
r.Qq = function() {
    dl(this);
    return cl.g.Qq.call(this)
};
function fl(a, b) {
    a.Jp = b;
    if (a.f()) {
        var c = a.Qq();
        c && rg(c, a.Jp)
    }
}
function gl(a, b) {
    b != a.Dx && hl(a, b)
}
function hl(a, b) {
    a.Dx = b;
    if (a.Ca) {
        var c = a.B(),
        d = a.Qq(),
        f = a.Dc;
        b ? (f && c.Mn(f, a.f()), c.Mn(d, a.f())) : (c.removeNode(f), c.removeNode(d))
    }
}
function il(a, b) {
    a.f() && E.enable(a.Cc, a.sc + "-title-draggable", b);
    b && !a.ub ? (a.ub = new Ok(a.f(), a.Cc), E.add(a.Cc, a.sc + "-title-draggable"), N(a.ub, "start", a.BS, l, a)) : !b && a.ub && (a.ub.w(), a.ub = j)
}
r.j = function() {
    cl.g.j.call(this);
    var a = this.f(),
    b = this.B();
    this.Cc = b.j("div", {
        className: this.sc + "-title",
        id: this.Sd()
    },
    this.fg = b.j("span", this.sc + "-title-text", this.pt), this.qf = b.j("span", this.sc + "-title-close"));
    jc(a, this.Cc, this.qe = b.j("div", this.sc + "-content"), this.Tb = b.j("div", this.sc + "-buttons"));
    this.ot = this.Cc.id;
    Pc(a, this.Mj);
    Qc(a, "labelledby", this.ot || "");
    this.tc && (this.qe.innerHTML = this.tc);
    S(this.qf, this.Fn);
    this.jc && (a = this.jc, a.d = this.Tb, a.N());
    S(this.Tb, !!this.jc);
    fl(this, this.Jp)
};
r.Z = function(a) {
    cl.g.Z.call(this, a);
    a = this.sc + "-content"; (this.qe = Vb(j, a, this.f())[0]) ? this.tc = this.qe.innerHTML: (this.qe = this.B().j("div", a), this.tc && (this.qe.innerHTML = this.tc), this.f().appendChild(this.qe));
    var a = this.sc + "-title",
    b = this.sc + "-title-text",
    c = this.sc + "-title-close"; (this.Cc = Vb(j, a, this.f())[0]) ? (this.fg = Vb(j, b, this.Cc)[0], this.qf = Vb(j, c, this.Cc)[0], this.Cc.id || (this.Cc.id = this.Sd())) : (this.Cc = this.B().j("div", {
        className: a,
        id: this.Sd()
    }), this.f().insertBefore(this.Cc, this.qe));
    this.ot = this.Cc.id;
    this.fg ? this.pt = Gc(this.fg) : (this.fg = this.B().j("span", b, this.pt), this.Cc.appendChild(this.fg));
    Qc(this.f(), "labelledby", this.ot || "");
    this.qf || (this.qf = this.B().j("span", c), this.Cc.appendChild(this.qf));
    S(this.qf, this.Fn);
    a = this.sc + "-buttons"; (this.Tb = Vb(j, a, this.f())[0]) ? (this.jc = new jl(this.B()), this.jc.h(this.Tb)) : (this.Tb = this.B().j("div", a), this.f().appendChild(this.Tb), this.jc && (a = this.jc, a.d = this.Tb, a.N()), S(this.Tb, !!this.jc));
    fl(this, this.Jp)
};
r.p = function() {
    cl.g.p.call(this);
    this.e().c(this.f(), "keydown", this.qo).c(this.f(), "keypress", this.qo);
    this.e().c(this.Tb, "click", this.IP);
    il(this, this.kC);
    this.e().c(this.qf, "click", this.LQ);
    Pc(this.f(), this.Mj);
    "" !== this.fg.id && Qc(this.f(), "labelledby", this.fg.id);
    this.Dx || hl(this, l)
};
r.Za = function() {
    this.H() && this.n(l);
    il(this, l);
    cl.g.Za.call(this)
};
r.n = function(a) {
    a != this.H() && (this.Ca || this.N(), cl.g.n.call(this, a))
};
r.$h = function() {
    cl.g.$h.call(this);
    this.dispatchEvent(kl)
};
r.js = function() {
    cl.g.js.call(this);
    this.dispatchEvent(ll);
    this.hL && this.w()
};
r.focus = function() {
    cl.g.focus.call(this);
    if (this.jc) {
        var a = this.jc.rq;
        if (a) for (var b = this.B().va(), c = this.Tb.getElementsByTagName("button"), d = 0, f; f = c[d]; d++) if (f.name == a) {
            try {
                if (B || tb) {
                    var g = b.createElement("input");
                    g.style.cssText = "position:fixed;width:0;height:0;left:0;top:0;";
                    this.f().appendChild(g);
                    g.focus();
                    this.f().removeChild(g)
                }
                f.focus()
            } catch(k) {}
            break
        }
    }
};
r.BS = function() {
    var a = this.B().va(),
    b = $b(cc(a) || window),
    c = Math.max(a.body.scrollWidth, b.width),
    a = Math.max(a.body.scrollHeight, b.height),
    d = og(this.f());
    "fixed" == Yf(this.f()) ? (b = new Pf(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height)), this.ub.Qr = b || new Pf(NaN, NaN, NaN, NaN)) : this.ub.Qr = new Pf(0, 0, c - d.width, a - d.height) || new Pf(NaN, NaN, NaN, NaN)
};
r.LQ = function() {
    if (this.Fn) {
        var a = this.jc,
        b = a && a.Gu;
        b ? (a = a.get(b), this.dispatchEvent(new ml(b, a)) && this.n(l)) : this.n(l)
    }
};
r.Vs = function(a) {
    this.Fn = a;
    this.qf && S(this.qf, this.Fn)
};
r.m = function() {
    this.Tb = this.qf = j;
    cl.g.m.call(this)
};
function nl(a, b) {
    a.jc = b;
    if (a.Tb) {
        if (a.jc) {
            var c = a.jc;
            c.d = a.Tb;
            c.N()
        } else a.Tb.innerHTML = "";
        S(a.Tb, !!a.jc)
    }
}
r.IP = function(a) {
    a: {
        for (a = a.target; a != j && a != this.Tb;) {
            if ("BUTTON" == a.tagName) break a;
            a = a.parentNode
        }
        a = j
    }
    if (a && !a.disabled) {
        var a = a.name,
        b = this.jc.get(a);
        this.dispatchEvent(new ml(a, b)) && this.n(l)
    }
};
r.qo = function(a) {
    var b = l,
    c = l,
    d = this.jc,
    f = a.target;
    if ("keydown" == a.type) if (this.vL && 27 == a.keyCode) {
        var g = d && d.Gu,
        f = "SELECT" == f.tagName && !f.disabled;
        g && !f ? (c = i, b = d.get(g), b = this.dispatchEvent(new ml(g, b))) : f || (b = i)
    } else 9 == a.keyCode && (a.shiftKey && f == this.f()) && (c = i);
    else if (13 == a.keyCode) {
        if ("BUTTON" == f.tagName) g = f.name;
        else if (d) {
            var k = d.rq,
            m = k && d.Kf(k),
            f = ("TEXTAREA" == f.tagName || "SELECT" == f.tagName || "A" == f.tagName) && !f.disabled;
            m && (!m.disabled && !f) && (g = k)
        }
        g && d && (c = i, b = this.dispatchEvent(new ml(g, String(d.get(g)))))
    }
    if (b || c) a.stopPropagation(),
    a.preventDefault();
    b && this.n(l)
};
function ml(a, b) {
    this.type = ol;
    this.key = a;
    this.caption = b
}
w(ml, ad);
var ol = "dialogselect",
ll = "afterhide",
kl = "aftershow";
function jl(a) {
    this.W = a || Sb();
    Od.call(this)
}
var pl;
w(jl, Od);
r = jl.prototype;
r.sc = "goog-buttonset";
r.rq = j;
r.d = j;
r.Gu = j;
r.set = function(a, b, c, d) {
    Od.prototype.set.call(this, a, b);
    c && (this.rq = a);
    d && (this.Gu = a);
    return this
};
r.je = function(a, b, c) {
    return this.set(a.key, a.caption, b, c)
};
r.N = function() {
    if (this.d) {
        this.d.innerHTML = "";
        var a = Sb(this.d);
        Md.forEach(this,
        function(b, c) {
            var d = a.j("button", {
                name: c
            },
            b);
            c == this.rq && (d.className = this.sc + "-default");
            this.d.appendChild(d)
        },
        this)
    }
};
r.h = function(a) {
    if (a && 1 == a.nodeType) {
        this.d = a;
        for (var a = this.d.getElementsByTagName("button"), b = 0, c, d, f; c = a[b]; b++) if (d = c.name || c.id, f = Gc(c) || c.value, d) {
            var g = 0 == b;
            this.set(d, f, g, c.name == ql);
            g && E.add(c, this.sc + "-default")
        }
    }
};
r.f = n("d");
r.B = n("W");
r.Kf = function(a) {
    for (var b = this.d.getElementsByTagName("BUTTON"), c = 0, d; d = b[c]; c++) if (d.name == a || d.id == a) return d;
    return j
};
var ql = "cancel",
rl = {
    NV: "ok",
    nA: ql,
    xA: "yes",
    LV: "no",
    iW: "save",
    NU: "continue"
},
sl = v("确定"),
tl = v("取消"),
ul = v("Yes"),
vl = v("No"),
wl = v("Save"),
xl = v("Continue"),
yl = {
    key: "ok",
    caption: sl
},
zl = {
    key: ql,
    caption: tl
},
Al = {
    key: "yes",
    caption: ul
},
Bl = {
    key: "no",
    caption: vl
},
Cl = {
    key: "save",
    caption: wl
},
Dl = {
    key: "continue",
    caption: xl
};
"undefined" != typeof document && ((new jl).je(yl, i, i), pl = (new jl).je(zl, l, i).je(yl, i), (new jl).je(Al, i).je(Bl, l, i), (new jl).je(Al).je(Bl, i).je(zl, l, i), (new jl).je(Dl).je(Cl).je(zl, i, i));
var El, Fl, Gl, Hl, Il = Pi || Qi,
Jl = Il && navigator.userAgent.match(/OS\s(\w+)/)[1].slice(0, 3).replace(/_/g, ".");
El = "contentEditable" in document.documentElement && !(Il && 5 > Jl) && !(Ri && 3 > navigator.userAgent.match(/Android (\d)/)[1]);
Fl = "ontouchstart" in window;
document.documentElement.className += Fl ? " touch": " no-touch";
document.documentElement.className += ub ? " mobile": " no-mobile";
Gl = Il && 6 <= Jl || !ub;
Hl = 1.5 <= window.devicePixelRatio;
window.JSON || (window.JSON = {
    parse: Ad,
    stringify: Cd
});
var Kl, Ll = $(document.documentElement);
"orientation" in window && (Kl = function() {
    var a = {
        "0": "portrait",
        90 : "landscape landscape-left",
        "-90": "landscape landscape-right"
    },
    b = a[window.orientation] || "";
    Ll.removeClass(F.Ea(a).join(" ")).addClass(b)
},
$(window).on("orientationchange", Kl), Kl());
$.support.fixedPosition = i;
var Ml;
function Nl(a, b, c) {
    cl.call(this, a, b, c)
}
w(Nl, cl);
Nl.prototype.focus = function() {
    Nl.g.focus.call(this)
};
Nl.prototype.p = function() {
    var a = !Fl;
    this.kC = a;
    il(this, a && this.Ca);
    Nl.g.p.call(this)
};
Nl.prototype.toggle = function() {
    this.n(!this.H());
    return this
};
function Ol(a, b, c, d) {
    sa(a) ? (d = c, c = b) : a = {
        title: a,
        content: b
    };
    ra(c) || (c = ia);
    var f = $.extend({},
    Pl, a),
    g = Ql = Ql || new Nl,
    b = rl.nA,
    a = rl.xA,
    k = f.zi.length;
    if (k) {
        var m = new jl;
        1 < k ? m.set(b, f.zi[0], l, i).set(a, f.zi[1], i) : m.set(a, f.zi[0], i);
        nl(g, m);
        g.Nv();
        m.Kf(a).className = "zg-btn-blue";
        m.Kf(b) && (m.Kf(b).className = "zg-link-btn zm-command-cancel")
    } else nl(g, j);
    E.enable(el(g), "with-button", !!k);
    ud(g);
    g.on(ll,
    function() {
        E.remove(g.f(), f.className)
    }).on(ol,
    function(a) {
        return c.call(d || g, "yes" === a.key)
    });
    E.add(el(g), f.className);
    g.Ma(f.title);
    gl(g, f.TE);
    g.Fa(f.content);
    g.n(f.open);
    return g
}
var Ql, Pl = {
    open: i,
    TE: l,
    title: "确认",
    content: "",
    className: "",
    zi: ["取消", "确认"]
};
function X(a, b) {
    if (a) {
        var c = Ol({
            title: "提示信息",
            content: a,
            zi: [],
            className: "no-close-button"
        });
        setTimeout(function() {
            c.n(l)
        },
        b || 1E3)
    }
};
function Y(a) {
    ye.call(this);
    this.SS = !!a;
    this.headers.set("AuthToken", zk);
    this.on("complete", this.kM, l, this)
}
var Rl;
w(Y, ye);
function Sl(a, b, c, d) {
    var f = new Y;
    if (b) f.on("complete", b);
    f.ajax(a, d, c)
}
var Tl = /#.*$/,
Ul = {
    "text/html": "html",
    "text/plain": "text",
    "application/json": "json",
    "application/javascript": "script",
    "application/x-javascript": "script"
},
Vl = [];
Y.prototype.kM = function() {
    S(Wl(), l);
    var a = this.getResponseHeader("content-type");
    if (a) {
        var b = Ul[a.split(";")[0].toLowerCase()];
        if (b && Vl.length) {
            var c = Ie(this);
            y.forEach(Vl,
            function(a) {
                a.nU === b && a.filter("json" === b ? JSON.parse(c) : c)
            },
            this)
        }
    }
};
Y.prototype.ajax = function(a, b, c) {
    a = encodeURI(decodeURI(a));
    a = a.replace(Tl, "");
    if (!this.ca) {
        this.SS && S(Wl(), i);
        c = c || "POST";
        if ("POST" === c.toUpperCase()) {
            var d = Mf.get("_xsrf");
            d && (b = (b ? b + "&_xsrf=": "_xsrf=") + d)
        }
        return this.send(a, c, b, this.headers)
    }
};
function Wl() {
    if (Rl) return Rl;
    var a = K("div", {
        id: "zh-global-spinner",
        style: "display:none",
        innerHTML: "加载中…"
    });
    document.body.appendChild(a);
    return Rl = a
};
function Xl() {
    M.call(this)
}
w(Xl, zd);
function Yl(a, b, c) {
    var d = Zl,
    f = {
        title: "确认使用匿名身份？",
        content: '<p>使用匿名身份后，你将</p><ul style="margin: 5px 0 0 5px;list-style-position: inside;"><li>不能在该问题下评论（你之前的评论将被隐藏）</li><li>不能邀请别人回答该问题</li></ul>'
    },
    g = {
        title: "确认放弃匿名身份？",
        content: "你对该问题的回答、赞同和关注行为将以实名显示。"
    };
    Ol(a ? f: g,
    function(f) {
        if (f) {
            var g = new Y(i),
            q = "/question/" + (a ? "set_anonymous": "set_public"),
            s = "qid=" + (c || Bk.L);
            g.on("success",
            function() {
                var b = R(g);
                b && !b.r && d.dispatchEvent(new $l(a))
            });
            g.ajax(q, s)
        }
        b && b(f)
    })
}
Xl.prototype.e = function() {
    return this.Oh || (this.Oh = new me(this))
};
function am(a, b) {
    this.type = "answer_reorder";
    this.FY = b;
    this.TA = a
}
w(am, ad);
function $l(a) {
    this.type = "anon_change";
    this.ab = a
}
w($l, ad);
var Zl = new Xl;
function bm() {
    M.call(this);
    this.Y = cm;
    this.nn = this.startTime = j
}
w(bm, zd);
var cm = 0;
bm.prototype.Xh = function() {
    this.Id("begin")
};
bm.prototype.Yh = function() {
    this.Id("end")
};
bm.prototype.Id = function(a) {
    this.dispatchEvent(a)
};
function dm(a, b, c) {
    M.call(this);
    this.xj = a;
    this.Gg = b || 0;
    this.oa = c;
    this.Fu = u(this.yg, this)
}
w(dm, M);
r = dm.prototype;
r.td = 0;
r.m = function() {
    dm.g.m.call(this);
    this.stop();
    delete this.xj;
    delete this.oa
};
r.start = function(a) {
    this.stop();
    this.td = Ld(this.Fu, la(a) ? a: this.Gg)
};
r.stop = function() {
    this.wb() && Jd.clearTimeout(this.td);
    this.td = 0
};
r.fire = function() {
    this.stop();
    this.yg()
};
function em(a) {
    a.wb() && a.fire()
}
r.wb = function() {
    return 0 != this.td
};
r.yg = function() {
    this.td = 0;
    this.xj && this.xj.call(this.oa)
};
var fm = {},
gm = j;
function hm(a) {
    a = ta(a);
    delete fm[a];
    F.xb(fm) && gm && gm.stop()
}
function im() {
    gm || (gm = new dm(function() {
        var a = Aa();
        F.forEach(fm,
        function(c) {
            c.av(a)
        });
        F.xb(fm) || im()
    },
    20));
    var a = gm;
    a.wb() || a.start()
};
function jm(a, b, c, d) {
    bm.call(this); (!oa(a) || !oa(b)) && e(Error("Start and end parameters must be arrays"));
    a.length != b.length && e(Error("Start and end points must be the same length"));
    this.$o = a;
    this.sL = b;
    this.duration = c;
    this.yA = d;
    this.coords = [];
    this.qi = l
}
w(jm, bm);
r = jm.prototype;
r.Bh = ca("qi");
r.OC = 0;
r.progress = 0;
r.lx = j;
r.play = function(a) {
    if (a || this.Y == cm) this.progress = 0,
    this.coords = this.$o;
    else if (1 == this.Y) return l;
    hm(this);
    this.startTime = a = Aa(); - 1 == this.Y && (this.startTime -= this.duration * this.progress);
    this.nn = this.startTime + this.duration;
    this.lx = this.startTime;
    this.progress || this.Xh();
    this.Id("play"); - 1 == this.Y && this.Id("resume");
    this.Y = 1;
    var b = ta(this);
    b in fm || (fm[b] = this);
    im();
    this.av(a);
    return i
};
r.stop = function(a) {
    hm(this);
    this.Y = cm;
    a && (this.progress = 1);
    km(this, this.progress);
    this.Id("stop");
    this.Yh()
};
r.m = function() {
    this.Y == cm || this.stop(l);
    this.Id("destroy");
    jm.g.m.call(this)
};
r.av = function(a) {
    this.progress = (a - this.startTime) / (this.nn - this.startTime);
    1 <= this.progress && (this.progress = 1);
    this.OC = 1E3 / (a - this.lx);
    this.lx = a;
    km(this, this.progress);
    1 == this.progress ? (this.Y = cm, hm(this), this.Id("finish"), this.Yh()) : 1 == this.Y && this.Mx()
};
function km(a, b) {
    ra(a.yA) && (b = a.yA(b));
    a.coords = Array(a.$o.length);
    for (var c = 0; c < a.$o.length; c++) a.coords[c] = (a.sL[c] - a.$o[c]) * b + a.$o[c]
}
r.Mx = function() {
    this.Id("animate")
};
r.Id = function(a) {
    this.dispatchEvent(new lm(a, this))
};
function lm(a, b) {
    ad.call(this, a);
    this.coords = b.coords;
    this.x = b.coords[0];
    this.y = b.coords[1];
    this.rZ = b.coords[2];
    this.duration = b.duration;
    this.progress = b.progress;
    this.HX = b.OC;
    this.state = b.Y;
    this.RW = b
}
w(lm, ad);
function mm(a, b, c, d, f) {
    jm.call(this, b, c, d, f);
    this.element = a
}
w(mm, jm);
r = mm.prototype;
r.hh = ia;
r.xd = function() {
    la(this.kf) || (this.kf = gg(this.element));
    return this.kf
};
r.Mx = function() {
    this.hh();
    mm.g.Mx.call(this)
};
r.Yh = function() {
    this.hh();
    mm.g.Yh.call(this)
};
r.Xh = function() {
    this.hh();
    mm.g.Xh.call(this)
};
function nm(a, b, c, d, f) { (2 != b.length || 2 != c.length) && e(Error("Start and end points must be 2D"));
    mm.apply(this, arguments)
}
w(nm, mm);
nm.prototype.hh = function() {
    var a = this.qi && this.xd() ? "right": "left";
    this.element.style[a] = Math.round(this.coords[0]) + "px";
    this.element.style.top = Math.round(this.coords[1]) + "px"
};
function om(a, b, c, d, f) { (2 != b.length || 2 != c.length) && e(Error("Start and end points must be 2D"));
    mm.apply(this, arguments)
}
w(om, mm);
om.prototype.hh = function() {
    if (this.qi) {
        var a = this.element,
        b = Math.round(this.coords[0]),
        b = Math.max(b, 0);
        a.scrollLeft = gg(a) ? A ? -b: !z || !D("8") ? a.scrollWidth - b - a.clientWidth: b: b
    } else this.element.scrollLeft = Math.round(this.coords[0]);
    this.element.scrollTop = Math.round(this.coords[1])
};
function pm(a, b, c, d, f) {
    mm.call(this, a, [b], [c], d, f)
}
w(pm, mm);
pm.prototype.hh = function() {
    this.element.style.width = Math.round(this.coords[0]) + "px"
};
function qm(a, b, c, d, f) {
    mm.call(this, a, [b], [c], d, f)
}
w(qm, mm);
qm.prototype.hh = function() {
    this.element.style.height = Math.round(this.coords[0]) + "px"
};
function rm(a, b, c, d, f) {
    qa(b) && (b = [b]);
    qa(c) && (c = [c]);
    mm.call(this, a, b, c, d, f); (1 != b.length || 1 != c.length) && e(Error("Start and end points must be 1D"))
}
w(rm, mm);
rm.prototype.hh = function() {
    rg(this.element, this.coords[0])
};
rm.prototype.show = function() {
    this.element.style.display = ""
};
rm.prototype.hide = function() {
    this.element.style.display = "none"
};
function sm(a, b, c) {
    rm.call(this, a, 1, 0, b, c)
}
w(sm, rm);
sm.prototype.Xh = function() {
    this.show();
    sm.g.Xh.call(this)
};
sm.prototype.Yh = function() {
    this.hide();
    sm.g.Yh.call(this)
};
function tm(a, b, c) {
    rm.call(this, a, 0, 1, b, c)
}
w(tm, rm);
tm.prototype.Xh = function() {
    this.show();
    tm.g.Xh.call(this)
};
function um(a, b, c, d, f) { (3 != b.length || 3 != c.length) && e(Error("Start and end points must be 3D"));
    mm.apply(this, arguments)
}
w(um, mm);
um.prototype.hh = function() {
    for (var a = [], b = 0; b < this.coords.length; b++) a[b] = Math.round(this.coords[b]);
    a = "rgb(" + a.join(",") + ")";
    this.element.style.backgroundColor = a
};
function vm(a) {
    return a * a * a
}
function wm(a) {
    return 1 - Math.pow(1 - a, 3)
}
function xm(a) {
    return 3 * a * a - 2 * a * a * a
};
var ym = /^\/node\//;
$.ajaxPrefilter(function(a, b) {
    var c = b.data,
    d;
    if (c && (d = c.params) && "object" === $.type(d) && ym.test(b.url)) c.params = JSON.stringify(d),
    a.data = $.param(c)
});
function zm(a, b) {
    return $.get("/node/AnswerCommentBoxV2", {
        params: {
            answer_id: a,
            load_all: b
        }
    })
}
function Am(a) {
    return $.get("/node/AnswerCommentListV2", {
        params: {
            answer_id: a
        }
    })
}
function Bm(a) {
    return $.post("/node/AnswerCommentAddV2", {
        method: "add_comment",
        params: a
    })
}
function Cm(a, b) {
    return $.post("/node/MemberFollowBaseV2", {
        method: b ? "follow_member": "unfollow_member",
        params: {
            hash_id: a
        }
    })
}
function Dm(a, b) {
    return $.post("/node/QuestionFollowBaseV2", {
        method: b ? "follow_question": "unfollow_question",
        params: {
            question_id: a
        }
    })
}
function Em(a) {
    return $.get("/node/QuestionCommentBoxV2", {
        params: {
            question_id: a
        }
    })
}
function Fm(a) {
    return $.get("/node/QuestionCommentListV2", {
        params: {
            question_id: a
        }
    })
}
function Gm(a) {
    return $.post("/node/QuestionCommentAddV2", {
        method: "add_comment",
        params: a
    })
}
function Hm(a, b) {
    return $.post("/question/askpeople", {
        qid: a,
        uid: b,
        op: "add"
    })
}
function Im(a, b) {
    return $.post("/question/askpeople", {
        qid: a,
        uid: b,
        op: "remove"
    })
}
function Jm(a) {
    return $.post("/node/FavlistCommentAddV2", {
        method: "add_comment",
        params: a
    })
}
function Km(a, b) {
    return $.post(b ? "/collection/follow": "/collection/unfollow", {
        favlist_id: a
    })
}
function Lm(a, b) {
    return $.post("/follow", {
        id: a,
        type: "topic",
        status: Number(b)
    })
}
function Mm(a) {
    return $.get("/node/FavlistCommentBoxV2", {
        params: {
            favlist_id: a
        }
    })
}
function Nm(a) {
    return $.get("/node/FavlistCommentListV2", {
        params: {
            favlist_id: a
        }
    })
}
function Om(a, b, c, d, f, g) {
    g && (d && (d = $.proxy(d, g)), f && (f = $.proxy(f, g)));
    $.post("/node/" + a, {
        method: b,
        params: c
    },
    function(a) {
        a && a.r ? f && f(a) : d && d(a)
    })
}
function Pm(a, b, c, d) {
    var f = j;
    d && (c && (c = $.proxy(c, d)), f && (f = $.proxy(f, d)));
    $.get("/node/" + a, {
        params: b
    },
    function(a) {
        a && a.r ? f && f(a) : c && c(a)
    })
};
var Qm = {
    8 : "backspace",
    9 : "tab",
    13 : "enter",
    16 : "shift",
    17 : "ctrl",
    18 : "alt",
    19 : "pause",
    20 : "caps-lock",
    27 : "esc",
    32 : "space",
    33 : "pg-up",
    34 : "pg-down",
    35 : "end",
    36 : "home",
    37 : "left",
    38 : "up",
    39 : "right",
    40 : "down",
    45 : "insert",
    46 : "delete",
    48 : "0",
    49 : "1",
    50 : "2",
    51 : "3",
    52 : "4",
    53 : "5",
    54 : "6",
    55 : "7",
    56 : "8",
    57 : "9",
    59 : "semicolon",
    61 : "equals",
    65 : "a",
    66 : "b",
    67 : "c",
    68 : "d",
    69 : "e",
    70 : "f",
    71 : "g",
    72 : "h",
    73 : "i",
    74 : "j",
    75 : "k",
    76 : "l",
    77 : "m",
    78 : "n",
    79 : "o",
    80 : "p",
    81 : "q",
    82 : "r",
    83 : "s",
    84 : "t",
    85 : "u",
    86 : "v",
    87 : "w",
    88 : "x",
    89 : "y",
    90 : "z",
    93 : "context",
    96 : "num-0",
    97 : "num-1",
    98 : "num-2",
    99 : "num-3",
    100 : "num-4",
    101 : "num-5",
    102 : "num-6",
    103 : "num-7",
    104 : "num-8",
    105 : "num-9",
    106 : "num-multiply",
    107 : "num-plus",
    109 : "num-minus",
    110 : "num-period",
    111 : "num-division",
    112 : "f1",
    113 : "f2",
    114 : "f3",
    115 : "f4",
    116 : "f5",
    117 : "f6",
    118 : "f7",
    119 : "f8",
    120 : "f9",
    121 : "f10",
    122 : "f11",
    123 : "f12",
    186 : "semicolon",
    187 : "equals",
    189 : "dash",
    188 : ",",
    190 : ".",
    191 : "/",
    192 : "~",
    219 : "open-square-bracket",
    220 : "\\",
    221 : "close-square-bracket",
    222 : "single-quote",
    224 : "win"
};
function Rm(a) {
    M.call(this);
    this.So = {};
    this.Lg = {
        fk: [],
        time: 0
    };
    this.XL = F.xh(Sm);
    this.qT = F.xh(Tm);
    this.PA = i;
    this.pJ = this.sJ = l;
    this.iP = i;
    this.Kg = a;
    N(this.Kg, "keydown", this.$e, l, this);
    mb && (A && D("1.8")) && N(this.Kg, "keyup", this.gD, l, this);
    nb && !A && (N(this.Kg, "keypress", this.tD, l, this), N(this.Kg, "keyup", this.uD, l, this))
}
var Um;
w(Rm, zd);
var Sm = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
Tm = "color date datetime datetime-local email month number password search tel text time url week".split(" "),
Vm = {
    EI: "shortcut",
    DI: "shortcut_"
};
r = Rm.prototype;
r.NR = function(a, b) {
    var c = Wm,
    d = this.So,
    f = arguments;
    if (t(f[1])) {
        for (var f = f[1], f = f.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase(), f = f.split(" "), g = [], k, m = 0; k = f[m]; m++) {
            var q = k.split("+"),
            s;
            k = 0;
            for (var x, C = 0; x = q[C]; C++) {
                switch (x) {
                case "shift":
                    k |= 1;
                    continue;
                case "ctrl":
                    k |= 2;
                    continue;
                case "alt":
                    k |= 4;
                    continue;
                case "meta":
                    k |= 8;
                    continue
                }
                s = x;
                if (!Um) {
                    q = {};
                    x = h;
                    for (x in Qm) q[Qm[x]] = x;
                    Um = q
                }
                s = Um[s];
                break
            }
            g.push({
                keyCode: s,
                VE: k
            })
        }
        f = g
    } else {
        g = f;
        m = 1;
        oa(f[1]) && (g = f[1], m = 0);
        for (f = []; m < g.length; m += 2) f.push({
            keyCode: g[m],
            VE: g[m + 1]
        })
    }
    c(d, f, a)
};
r.Tz = function() {
    this.So = {}
};
r.m = function() {
    Rm.g.m.call(this);
    this.Tz();
    qd(this.Kg, "keydown", this.$e, l, this);
    mb && (A && D("1.8")) && qd(this.Kg, "keyup", this.gD, l, this);
    nb && !A && (qd(this.Kg, "keypress", this.tD, l, this), qd(this.Kg, "keyup", this.uD, l, this));
    this.Kg = j
};
r.gD = function(a) {
    if (224 == a.keyCode) this.QE = i,
    Ld(function() {
        this.QE = l
    },
    400, this);
    else {
        var b = a.metaKey || this.QE;
        if ((67 == a.keyCode || 88 == a.keyCode || 86 == a.keyCode) && b) a.metaKey = b,
        this.$e(a)
    }
};
function Xm(a) {
    return nb && !A && a.ctrlKey && a.altKey && !a.shiftKey
}
r.tD = function(a) {
    32 < a.keyCode && Xm(a) && (this.gE = i)
};
r.uD = function(a) { ! this.gE && Xm(a) && this.$e(a)
};
function Wm(a, b, c) {
    var d = b.shift(),
    d = d.keyCode & 255 | d.VE << 8,
    f = a[d];
    f && (c && (0 == b.length || t(f))) && e(Error("Keyboard shortcut conflicts with existing shortcut"));
    b.length ? (f || (f = a[d] = {}), Wm(f, b, c)) : a[d] = c
}
function Ym(a, b, c, d) {
    c = c || 0;
    return (d = (d || a.So)[b[c]]) && !t(d) && 1 < b.length - c ? Ym(a, b, c + 1, d) : d
}
r.$e = function(a) {
    var b;
    b = a.keyCode;
    if (16 == b || 17 == b || 18 == b) b = l;
    else {
        var c = a.target,
        d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
        f = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
        b = !d && !f || this.XL[b] || this.pJ ? i: f ? l: this.iP && (a.altKey || a.ctrlKey || a.metaKey) ? i: "INPUT" == c.tagName && this.qT[c.type] ? 13 == b: "INPUT" == c.tagName || "BUTTON" == c.tagName ? 32 != b: l
    }
    if (b) if ("keydown" == a.type && Xm(a)) this.gE = l;
    else {
        b = (A ? Rg(a.keyCode) : a.keyCode) & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.altKey ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
        var g, k, c = Aa();
        this.Lg.fk.length && 1500 >= c - this.Lg.time ? g = Ym(this, this.Lg.fk) : this.Lg.fk.length = 0;
        g = g ? g[b] : this.So[b];
        g || (g = this.So[b], this.Lg.fk = []);
        g && t(g) ? k = g: g ? (this.Lg.fk.push(b), this.Lg.time = c, A && a.preventDefault()) : this.Lg.fk.length = 0;
        k && (this.PA && a.preventDefault(), this.sJ && a.stopPropagation(), g = a.target, b = this.dispatchEvent(new Zm(Vm.EI, k, g)), (b &= this.dispatchEvent(new Zm(Vm.DI + k, k, g))) || a.preventDefault(), this.Lg.fk.length = 0)
    }
};
function Zm(a, b, c) {
    ad.call(this, a, c);
    this.identifier = b
}
w(Zm, ad);
function $m(a) {
    this.cf(a)
}
var an = [];
$m.prototype.cf = function(a) {
    an.push(this);
    this.Op = new Od;
    this.oa = new Rm(a);
    this.oa.PA = l;
    this.oa.addEventListener("shortcut", this.OQ, l, this)
};
function bn(a, b, c, d) {
    a.vu = {
        key: b,
        action: c,
        context: d
    };
    a.oa.NR(b, b);
    a.Op.set(b, a.vu);
    return a
}
$m.prototype.Tz = function() {
    this.vu = j;
    this.oa.Tz();
    this.Op.clear();
    return this
};
function cn(a, b) {
    a.vu.Lc = b;
    return a
}
$m.prototype.OQ = function(a) {
    var b = this.Op.get(a.identifier);
    b && b.action.call(b.context, a)
};
var dn = new $m(document);
dn.XH = function(a) {
    return new $m(a)
};
function en(a) {
    var b = l,
    c;
    return function() {
        if (b) return c;
        b = i;
        return c = a.apply(this, arguments)
    }
}
function fn(a, b) {
    var c = Ac(a,
    function(a) {
        return 3 === a.nodeType && !Ja(a.nodeValue)
    })[0];
    c && (c.nodeValue = b)
}
function gn(a) {
    return 1 === a ? i: oa(a) ? a[3] === V[3] : l
}
function hn(a, b) {
    var c = new sm(a, 500);
    b && N(c, "finish", u(function() {
        L(this)
    },
    a));
    c.play()
}
function jn(a) {
    if (0 === a || 1 === a) return K("span");
    if (oa(a)) {
        var b = K("a", {
            href: "/people/" + a[1],
            title: a[0],
            "class": "zm-item-link-avatar"
        },
        K("img", {
            src: a[2],
            "class": "zm-list-avatar"
        }));
        b.setAttribute("data-tip", "p$t$" + a[1]);
        return b
    }
}
function kn(a) {
    if (0 === a || 1 === a) return "匿名用户";
    var b = K("a", {
        href: "/people/" + a[1],
        title: a[0]
    },
    a[0]);
    b.setAttribute("data-tip", "p$t$" + a[1]);
    return b
}
function ln(a, b) {
    return ! oa(a) ? "匿名用户": ['<a data-tip="p$t$', a[1], '" href="/people/', a[1], '"', b ? ' class="' + b + '"': "", ' title="', a[0], '">', a[0], "</a>"].join("")
}
function mn() {
    var a = V;
    return 1 === a || 0 === a ? "匿名用户": ['<a data-tip="p$t$', a[1], '" href="/people/', a[1], '" title="' + a[0] + '" class="', 'zm-item-link-avatar">', '<img class="zm-item-img-avatar" src="' + a[2] + '" />', "</a>"].join("")
}
function nn(a, b, c, d) {
    "bottom" === d && (d = "b");
    var f = ""; (c === l ? l: i) && (f = 'data-tip="t$' + (d || "t") + "$" + a[1] + '"');
    return ["<a ", f, ' class="', b || "zm-item-tag", '" href="/topic/', a[1], '">', a[0], "</a>"].join("")
}
function on(a) {
    function b(a) {
        return $.isNumeric(a) ? a + " ": a
    }
    var c;
    c = c || +new Date;
    if (0 >= c - a) return "刚刚";
    a = Math.floor((c - a) / 1E3);
    c = Math.floor(a / 31536E3);
    if (1 <= c) return b(c) + "年前";
    c = Math.floor(a / 2592E3);
    if (1 <= c) return b(c) + "月前";
    c = Math.floor(a / 604800);
    if (1 <= c) return b(c) + "周前";
    c = Math.floor(a / 86400);
    if (1 <= c) return b(c) + "天前";
    c = Math.floor(a / 3600);
    if (1 <= c) return b(c) + "小时前";
    c = Math.floor(a / 60);
    if (1 <= c) return b(c) + "分钟前";
    c = Math.floor(a);
    return b(c) + "秒前"
}
function pn(a) {
    return ! a ? "": a.replace(/^\s+/, "").replace(/\s+$/, "")
}
function qn(a) {
    return ! a ? "": a.replace(/<[^>]+>/g, "")
}
var rn, sn = RegExp("^⁠+|⁠+$");
rn = function(a) {
    return a.replace(sn, "")
};
function tn() {
    return '<a href="javascript:;" class="zu-edit-button" name="edit"><i class="zu-edit-button-icon"></i>修改</a>'
}
function un(a, b, c) {
    var d;
    a && (b = $(a).data("animation") || new um(a, [255, 255, 150], b || [255, 255, 255], c || 2E3), $(a).data("animation", b), 1 == b.Y && b.stop(i), d = a.style.backgroundColor, pd(b, "end",
    function() {
        Rf(this.element, "background-color", d)
    },
    l, b), b.play())
}
function vn(a) {
    var b = $(a);
    b.parent().addClass("sandbox");
    b.addClass("animated shake");
    setTimeout(function() {
        b.removeClass("animated shake");
        b.parent().removeClass("sandbox")
    },
    1E3)
}
function wn(a) {
    var b = 0,
    c = 0;
    do c = a.indexOf("?", c),
    -1 !== c && (b++, c += 1);
    while ( - 1 !== c);
    return b
}
function xn(a, b, c) {
    b = y.slice(a.data, 1);
    if ("topic" === a.data[0]) {
        var a = (b[2] ? '<img class="zm-item-img-avatar zg-left" src="' + b[2] + '">': "") + '<span class="zu-autocomplete-row-name' + (b[3] ? "": " zu-autocomplete-row-name-info") + '" title="' + b[0] + '">' + b[0] + "</span>",
        d = 5 < b.length && b[5],
        a = a + '<span class="zg-gray-normal zu-autocomplete-row-description">';
        b[4] || d ? (d && (a += "又称 " + b[5]), b[4] && d && (a += "，"), b[4] && (a += b[4] + " 人关注")) : a += "&nbsp;";
        c.innerHTML = a + "</span>"
    } else "people" === a.data[0] ? c.innerHTML = '<img class="zm-item-img-avatar zg-left" src="' + b[2] + '"><span class="zu-autocomplete-row-name" title="' + b[0] + '">' + b[0] + '</span><span class="zg-gray-normal zu-autocomplete-row-description">' + (b[4] || "&nbsp;") + "</span>": "question" === a.data[0] ? c.innerHTML = b[0] + '<span class="zm-ac-gray">问题</span>': "plain_text" === a.data[0] ? (c.innerHTML = a.data[1], E.add(c, b[1])) : "sina" === a.data[0] && (c.innerHTML = b[0])
}
function yn(a, b, c) {
    var d, b = y.slice(a.data, 1);
    if ("topic" === a.data[0]) {
        a = ["<a ", ' style="display:block" href="/topic/' + b[1] + '"><span class="zm-item-tag">', b[0], "</span>"].join("");
        d = 6 < b.length && b[6];
        if (b[5] || d) {
            var a = a + '<span class="zm-ac-gray">',
            f = [];
            d && f.push("又称 " + b[6]); (d = parseInt(b[5], 10)) && f.push(d + " 个热门问答");
            a += f.join("，");
            a += "</span>"
        } else a += '<span class="zm-ac-gray" >&nbsp;</span>';
        c.innerHTML = a + "</a>"
    } else "people" === a.data[0] ? c.innerHTML = '<a href="/people/' + b[1] + '" title="' + b[0] + '" class="zm-ac-link zm-ac-link-people"><img class="zm-item-img-avatar zg-left" src="' + b[2] + '"><span class="zu-autocomplete-row-name" title="' + b[0] + '">' + b[0] + '</span><span class="zg-gray-normal zu-autocomplete-row-description">' + (b[4] || "&nbsp;") + "</span></a>": "question" === a.data[0] ? (d = parseInt(b[3], 10), c.innerHTML = (b[4] ? '<a class="zg-star" data-tip="s$b$优质问答" href="/question/' + b[2] + '"></a>': "") + ['<a class="zm-ac-link"', 'href="/question/' + b[2] + '">', b[0]].join("") + ('<span class="zm-ac-gray">' + (d ? d + " 个回答": "还没有回答") + "</span></a>")) : "search_link" === a.data[0] ? (c.innerHTML = '<a href="/search?q=' + b[0] + '&type=question">查看全部搜索结果<i class="zg-icon arrow"></i></a>', E.add(c, "zu-autocomplete-row-search-link")) : "plain_text" === a.data[0] ? c.innerHTML = b[0] : "sina" === a.data[0] && (b = ['<a href="javascript:;" title="' + b[0] + '">', '<img class="zm-item-img-avatar" src="' + b[2] + '" />', b[0], "</a>"].join(""), c.innerHTML = b);
    $(c).on("click", "a",
    function(a) {
        a.preventDefault()
    })
}
function zn(a, b) {
    for (var c = b; c != j && c !== a;) {
        if ("A" === c.tagName) return c;
        c = c.parentNode
    }
    return j
}
function An(a) {
    this.nO = a;
    this.data = new Od
}
An.prototype.add = function(a, b) {
    this.nO === l ? this.data.set(a, b) : this.data.set(encodeURIComponent(a), encodeURIComponent(b))
};
An.prototype.Nb = function() {
    var a = [];
    y.forEach(this.data.Eb(),
    function(b) {
        a.push(b + "=" + this.data.get(b))
    },
    this);
    return a.join("&")
};
function Bn(a) {
    var b = {};
    y.forEach(a.data.Eb(),
    function(a) {
        b[a] = this.data.get(a)
    },
    a);
    return b
}
function Cn(a) {
    return a.replace(/\n/g, "<br />")
}
function Dn(a, b, c, d, f) {
    if (V.ob()) {
        En && "pending" === En.state() && En.abort();
        var f = f || {},
        b = b || a.getAttribute("data-focustype"),
        d = d || ["zg-follow", "zg-unfollow"],
        g = d[0],
        k = d[1],
        m = E.has(a, g);
        U.Q({
            type: "ga_click_follow",
            target: a,
            data: {
                type: b,
                tj: m
            }
        });
        var q = function(b) {
            b ? (E.Ne(a, g, k), fn(a, f.unfollow_text || "取消关注")) : (E.Ne(a, k, g), fn(a, f.follow_text || "关注"));
            ra(c) && c()
        },
        d = function(a) {
            a.r ? X(a.msg) : q(m)
        },
        s;
        s = {
            people: Cm,
            question: Dm,
            topic: Lm,
            favlist: Km
        } [b];
        var x = a.id.split("-")[1];
        s && (s = s(x, m), "people" === b && m ? s.done(d) : q(m), En = s)
    } else Fn.v().n(i)
}
var En;
function Gn(a, b) {
    a.innerHTML = b ? "加载中...": "更多"
}
function Hn(a) {
    a = pn(a);
    return ! a ? 0 : Math.ceil(a.replace(/(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g, "aaaaaaaaaaaaaaaaaaaa").replace(/\n/g, "a").replace(/\s/g, "a").replace(/[\u3000-\u303F\u4E00-\u9FA5\uf900-\ufa2d\uFF00-\uFFEF]/g, "aa").length / 2)
}
function In(a, b, c, d) {
    window._gaq || (window._gaq = []);
    c && (c = "" + c);
    d && (d = parseInt(d, 10));
    window._gaq.push(["_trackEvent", a, b, c, d]);
    xk && Jn("trackEvent(deprecated)", y.toArray(arguments))
}
function Kn(a) {
    window._gaq || (window._gaq = []);
    window._gaq.push(["_trackPageview", a])
}
function Ln() {
    return navigator.userAgent.match(/iPad/i) != j
}
var Mn, Nn = {
    oT: {
        evaluate: /<%([\s\S]+?)%>/g,
        iO: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    },
    escape: function(a) {
        return ("" + a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    }
},
On = /.^/;
function Pn(a) {
    return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
}
Mn = function(a, b) {
    var c = Nn.oT,
    c = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(data||{}){__p.push('" + a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(c.escape || On,
    function(a, b) {
        return "',_.escape(" + Pn(b) + "),'"
    }).replace(c.iO || On,
    function(a, b) {
        return "'," + Pn(b) + ",'"
    }).replace(c.evaluate || On,
    function(a, b) {
        return "');" + Pn(b).replace(/[\r\n\t]/g, " ") + ";__p.push('"
    }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
    d = new Function("data", "_", c);
    return b ? d(b, Nn) : function(a) {
        return d.call(this, a, Nn)
    }
};
$(function() {
    var a = zg(document.body).top;
    Qn.paddingTop = a
});
function Rn(a, b) {
    var c = $.extend({
        all: l
    },
    Rn.V, b || {}),
    d = $(a).get(0).getBoundingClientRect();
    return ! c.all && (d.bottom < c.paddingTop || d.bottom > $(window).height()) || c.all && (d.top < c.paddingTop || d.bottom > $(window).height()) ? l: i
}
Rn.V = {
    paddingTop: 0
};
function Sn(a, b) {
    b.all = i;
    return Rn(a, b)
}
function Tn(a, b) {
    "number" === $.type(b) && (b = {
        offsetTop: b
    });
    var c = $.extend({
        SH: Rn
    },
    Qn, b || {});
    if (!c.SH(a, c)) {
        var d = $(a).offset().top - c.paddingTop - c.offsetTop || 0;
        c.SA ? $(document.documentElement).add(document.body).animate({
            scrollTop: d
        }) : $(window).scrollTop(d)
    }
}
var Qn = {
    offsetTop: 0,
    paddingTop: 0,
    SA: l
};
function Un(a) {
    $(a.target.F.d).off("click.disable-a").on("click.disable-a", "a",
    function(a) {
        a.preventDefault()
    })
}
function Vn(a, b) {
    var c = j;
    return function() {
        var d = this,
        f = arguments;
        clearTimeout(c);
        c = setTimeout(function() {
            b.apply(d, f)
        },
        a)
    }
};
function Wn() {
    this.nr = [];
    this.loaded = [];
    this.VF = [];
    this.cr = l
}
Wn.prototype.add = function(a) {
    a && !y.find(this.nr,
    function(b) {
        return b === a
    }) && (this.cr ? a.src = a.getAttribute("data-source") : (this.nr.push(a), this.loaded.push(0)))
};
Wn.prototype.k = function() {
    y.forEach(this.nr,
    function(a) {
        this.VF.push(fg(a).y)
    },
    this);
    this.sB();
    N(window, "scroll", this.sB, l, this);
    this.cr = i
};
Wn.prototype.eK = function() {
    var a = ac(document).y + 1200;
    y.forEach(this.nr,
    function(b, c) { ! this.loaded[c] && a > this.VF[c] && (this.loaded[c] = 1, b.src = b.getAttribute("data-source"))
    },
    this)
};
Wn.prototype.sB = function() {
    this.tB && clearTimeout(this.tB);
    this.tB = setTimeout(u(this.eK, this), 100)
};
function Xn() {
    bm.call(this);
    this.queue = []
}
w(Xn, bm);
Xn.prototype.add = function(a) {
    y.contains(this.queue, a) || (this.queue.push(a), N(a, "finish", this.lF, l, this))
};
Xn.prototype.remove = function(a) {
    y.remove(this.queue, a) && qd(a, "finish", this.lF, l, this)
};
Xn.prototype.m = function() {
    y.forEach(this.queue,
    function(a) {
        a.w()
    });
    this.queue.length = 0;
    Xn.g.m.call(this)
};
function Yn() {
    Xn.call(this);
    this.Fv = 0
}
w(Yn, Xn);
Yn.prototype.play = function(a) {
    if (0 == this.queue.length) return l;
    if (a || this.Y == cm) this.Fv = 0,
    this.Xh();
    else if (1 == this.Y) return l;
    this.Id("play"); - 1 == this.Y && this.Id("resume");
    var b = -1 == this.Y && !a;
    this.startTime = Aa();
    this.nn = j;
    this.Y = 1;
    y.forEach(this.queue,
    function(c) { (!b || -1 == c.Y) && c.play(a)
    });
    return i
};
Yn.prototype.stop = function(a) {
    y.forEach(this.queue,
    function(b) {
        b.Y == cm || b.stop(a)
    });
    this.Y = cm;
    this.nn = Aa();
    this.Id("stop");
    this.Yh()
};
Yn.prototype.lF = function() {
    this.Fv++;
    this.Fv == this.queue.length && (this.nn = Aa(), this.Y = cm, this.Id("finish"), this.Yh())
};
function Zn(a, b, c) {
    M.call(this);
    this.xj = a;
    this.Gg = b;
    this.oa = c;
    this.Fu = u(this.JQ, this)
}
w(Zn, M);
r = Zn.prototype;
r.Zs = l;
r.TF = 0;
r.ga = j;
r.fire = function() { ! this.ga && !this.TF ? this.yg() : this.Zs = i
};
r.stop = function() {
    this.ga && (Jd.clearTimeout(this.ga), this.ga = j, this.Zs = l)
};
r.m = function() {
    Zn.g.m.call(this);
    this.stop()
};
r.JQ = function() {
    this.ga = j;
    this.Zs && !this.TF && (this.Zs = l, this.yg())
};
r.yg = function() {
    this.ga = Ld(this.Fu, this.Gg);
    this.xj.call(this.oa)
};
var $n = {};
function ao() {
    M.call(this)
}
w(ao, zd);
ao.prototype.e = function() {
    return this.Oh || (this.Oh = new me(this))
};
ao.prototype.Nd = function(a, b) {
    if (!this.d) return j;
    for (var c = b || "A",
    d = a; d != j && d !== this.d;) {
        if (d.tagName === c) return d;
        d = d.parentNode
    }
    return j
};
function bo() {
    M.call(this);
    this.d = j;
    this.lastPosition = 0;
    this.Dv = this.rS = 300;
    this.fr = i;
    this.pu = l;
    this.tT = 150
}
w(bo, ao);
r = bo.prototype;
r.k = function() {
    if (! (ub && !Ri || y.contains(Jk, "back_to_top"))) {
        this.d = gc(this.pT);
        document.body.appendChild(this.d);
        var a = this.e(),
        b = new Zn(this.Vx, this.tT, this);
        a.c(window, "scroll",
        function() {
            b.fire()
        });
        a.c(this.d, "click", this.KJ)
    }
};
r.pT = '<div class="zh-backtotop" style="display:none"><div class="arrow"></div><div class="stick"></div></div>';
r.KJ = function() {
    var a = bc(document),
    b = ac(document),
    c = b.x,
    b = b.y,
    d = new Yn,
    f = this.e();
    d.add(new om(a, [c, b], [0, 0], this.rS, xm));
    d.add(new sm(this.d, this.Dv, wm));
    f.c(d, "finish", this.UP);
    f.c(d, "begin", this.EP);
    d.play();
    U.Q("ga_click_back_to_top")
};
r.EP = function() {
    this.pu = this.fr = i
};
r.UP = function() {
    this.pu = l
};
r.Vx = function() {
    if (!this.pu) {
        var a = ac(document).y,
        b = ub ? 500 : 1E3;
        this.fr ? a >= b && ((new tm(this.d, this.Dv, vm)).play(), this.fr = l) : a < b && ((new sm(this.d, this.Dv, wm)).play(), this.fr = i)
    }
};
function co() {
    M.call(this);
    this.last = this.AX = 0;
    this.EX = l
}
w(co, ao);
co.prototype.k = function() {
    if (this.d = H("zh-global-message")) this.YE = I("zu-global-notify-msg", this.d),
    this.e().c(this.d, "click", this.S)
};
co.prototype.S = function(a) {
    a.target && a.target.name && S(this.d, l)
};
function eo(a) {
    var b = U;
    a && a.length && y.forEach(a,
    function(a) {
        this.dispatchEvent(new fo(a[0], a[1]))
    },
    b)
}
co.prototype.fireEvent = function(a) {
    this.dispatchEvent(a)
};
function go(a) {
    var b = U;
    b.YE ? (b.YE.innerHTML = a, S(b.d, i)) : X(a)
}
var ho = {};
function fo(a, b) {
    this.type = a;
    this.lb = b
}
w(fo, ad);
function io() {
    M.call(this)
}
w(io, ao);
var jo = j;
io.prototype.k = function() {
    jo = this;
    ko(this)
};
function ko(a) {
    a.Ej = new Y(l);
    Q(a.e(), a.Ej, "success", a.oQ);
    a.Ej.ajax("/noti7/new?r=" + +new Date, j, "GET")
}
io.prototype.oQ = function() {
    var a = R(this.Ej);
    a && !a.r && eo([a])
};
function lo() {}
lo.prototype.ce = '<div id="ipav2-landing-mobi">    <a href="http://itunes.apple.com/cn/app/id432274380?target=_blank"><strong>知乎 iPhone 客户端 2.0</strong></a>    <span class="ipav2-landing-mobi-close">X</span></div>';
lo.prototype.k = function() {
    if (Pi && !(localStorage.getItem("__ipav2_noti") || Pi && 6 <= parseInt(mo, 10))) {
        var a = this.mp = $(this.ce);
        $(document.body).prepend(a);
        a.find("span.ipav2-landing-mobi-close").click(function() {
            V[0] && localStorage.setItem("__ipav2_noti", "r");
            a.remove()
        })
    }
};
function no(a) {
    function b() {
        s.onload = s.onerror = s.onreadystatechange = j;
        document.body.removeChild(s)
    }
    function c() {
        b();
        q.resolve()
    }
    function d() {
        clearTimeout(m);
        m = j;
        try {
            delete window[g]
        } catch(a) {
            window[g] = j
        }
    }
    "string" === $.type(a) && (a = {
        url: a
    });
    var a = a || {},
    f = $.Deferred(),
    g = "zh" + Aa() + cb(),
    k = $.extend({},
    a.data || {},
    {
        callback: g
    }),
    m = j;
    a.timeout && (m = setTimeout(function() {
        window[g] && (window[g] = d, f.reject("timeout"))
    },
    a.timeout));
    window[g] = f.resolve;
    var a = a.url + ( - 1 === a.url.indexOf("?") ? "?": "&") + $.param(k),
    q = $.Deferred(),
    s = document.createElement("script");
    s.onload = c;
    s.onerror = function() {
        b();
        q.reject()
    };
    s.onreadystatechange = function() { ("loaded" === s.readyState || "complete" === s.readyState) && c()
    };
    s.src = a;
    document.body.appendChild(s);
    q.promise().fail(f.reject).always(d);
    return f.promise()
};
function oo(a) {
    this.options = $.extend(i, {},
    this.V, a || {});
    this.promise = j;
    this.tG = 1E3;
    this.yx = 3E4;
    this.vj = this.tG;
    this.MN = 1.5
}
w(oo, zd);
oo.prototype.V = {
    type: "GET",
    url: "",
    data: {},
    timeout: 6E4,
    xhrFields: {
        withCredentials: i
    }
};
oo.prototype.my = function() {
    if (! (this.promise && "pending" === this.promise.state())) {
        var a = this.options;
        this.promise = ($.support.cors ? $.ajax(a) : no(a)).done($.proxy(this.jQ, this)).fail($.proxy(this.Zh, this))
    }
};
oo.prototype.jQ = function(a) {
    this.vj = this.tG;
    try {
        this.dispatchEvent({
            type: "message",
            data: a
        })
    } catch(b) {}
    this.my()
};
oo.prototype.Zh = function() {
    this.vj !== this.yx && (this.vj *= this.MN);
    this.vj > this.yx && (this.vj = this.yx);
    this.Bb = setTimeout($.proxy(this.my, this), this.vj);
    this.dispatchEvent("error")
};
function po(a, b) {
    this.wh = a instanceof Ob ? a: new Ob(a, b)
}
w(po, Ai);
po.prototype.xa = function(a, b, c, d) {
    xi(ag(a), 0, a, b, this.wh, c, j, d)
};
function qo(a, b) {
    this.wh = a instanceof Ob ? a: new Ob(a, b)
}
w(qo, Ai);
qo.prototype.xa = function(a, b, c, d) {
    var f = bg(Ub(a)),
    g = this.wh.x + f.x,
    f = this.wh.y + f.y,
    k = yi(a),
    g = g - k.x,
    f = f - k.y;
    zi(new Ob(g, f), a, b, c, j, j, d)
};
function ro(a, b) {
    qo.call(this, a, b)
}
w(ro, qo);
ro.prototype.Xn = 0;
ro.prototype.Yl = ca("Xn");
ro.prototype.xa = function(a, b, c, d) {
    var f = ag(a),
    f = eg(f),
    g;
    g = Sb(a);
    g = bc(g.Aa);
    g = new Ob(this.wh.x + g.scrollLeft, this.wh.y + g.scrollTop);
    var k = b,
    m = zi(g, a, k, c, f, 10, d);
    if (0 != (m & 496)) {
        if (m & 16 || m & 32) k ^= 2;
        if (m & 64 || m & 128) k ^= 1;
        m = zi(g, a, k, c, f, 10, d);
        0 != (m & 496) && zi(g, a, b, c, f, this.Xn, d)
    }
};
function so(a, b) {
    this.ny = 4;
    this.ts = b || h;
    Yk.call(this, a)
}
w(so, Yk);
so.prototype.Kc = function(a) {
    this.ts = a || h;
    this.H() && this.xa()
};
function to(a, b) {
    a.xx = b == j || b instanceof Nf ? b: new Nf(b, h, h, h);
    a.H() && a.xa()
}
so.prototype.xa = function() {
    if (this.ts) {
        var a = !this.H() && "move_offscreen" != this.Mh(),
        b = this.f();
        a && (b.style.visibility = "hidden", S(b, i));
        this.ts.xa(b, this.ny, this.xx);
        a && S(b, l)
    }
};
function uo(a, b, c) {
    this.W = c || (a ? Sb(H(a)) : Sb());
    so.call(this, this.W.j("div", {
        style: "position:absolute;display:none;"
    }));
    this.Di = new Ob(1, 1);
    this.Ra = new Sd;
    a && this.zf(a);
    b != j && zc(this.f(), b)
}
w(uo, so);
var vo = [];
r = uo.prototype;
r.Sb = j;
r.className = "goog-tooltip";
r.at = 500;
r.gr = 0;
r.B = n("W");
r.zf = function(a) {
    a = H(a);
    this.Ra.add(a);
    N(a, "mouseover", this.Yc, l, this);
    N(a, "mouseout", this.ml, l, this);
    N(a, "mousemove", this.ll, l, this);
    N(a, "focus", this.ve, l, this);
    N(a, "blur", this.ml, l, this)
};
r.detach = function(a) {
    if (a) a = H(a),
    wo(this, a),
    this.Ra.remove(a);
    else {
        for (var b = this.Ra.Ea(), c = 0; a = b[c]; c++) wo(this, a);
        this.Ra.clear()
    }
};
function wo(a, b) {
    qd(b, "mouseover", a.Yc, l, a);
    qd(b, "mouseout", a.ml, l, a);
    qd(b, "mousemove", a.ll, l, a);
    qd(b, "focus", a.ve, l, a);
    qd(b, "blur", a.ml, l, a)
}
r.Pv = n("gr");
r.be = function(a) {
    this.f().innerHTML = a
};
r.bg = function(a) {
    var b = this.f();
    b && L(b);
    uo.g.bg.call(this, a);
    a && (b = this.W.va().body, b.insertBefore(a, b.lastChild))
};
r.Ze = function() {
    return Gc(this.f())
};
r.Rv = ea(9);
r.Td = function() {
    return this.cm ? this.H() ? 4 : 1 : this.nl ? 3 : this.H() ? 2 : 0
};
r.zr = function(a) {
    if (!this.H()) return l;
    var b = fg(this.f()),
    c = og(this.f());
    return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
};
r.jo = function() {
    if (!Yk.prototype.jo.call(this)) return l;
    if (this.anchor) for (var a, b = 0; a = vo[b]; b++) uc(a.f(), this.anchor) || a.n(l);
    y.vr(vo, this);
    a = this.f();
    a.className = this.className;
    xo(this);
    N(a, "mouseover", this.vw, l, this);
    N(a, "mouseout", this.rD, l, this);
    yo(this);
    return i
};
r.Gj = function() {
    y.remove(vo, this);
    for (var a = this.f(), b, c = 0; b = vo[c]; c++) b.anchor && uc(a, b.anchor) && b.n(l);
    this.PF && zo(this.PF);
    qd(a, "mouseover", this.vw, l, this);
    qd(a, "mouseout", this.rD, l, this);
    this.anchor = h;
    0 == this.Td() && (this.Ss = l);
    Yk.prototype.Gj.call(this)
};
r.zx = function(a, b) {
    this.anchor == a && this.Ra.contains(this.anchor) && (this.Ss || !this.MY ? (this.n(l), this.H() || (this.anchor = a, this.Kc(b || Ao(this, 0)), this.n(i))) : this.anchor = h);
    this.cm = h
};
r.Jh = n("Ra");
r.Pq = n("Sb");
r.ME = function(a) {
    this.nl = h;
    a == this.anchor && (this.Sb == j || this.Sb != this.f() && !this.Ra.contains(this.Sb)) && (!this.Ik || !this.Ik.Sb) && this.n(l)
};
function Bo(a, b) {
    var c = Oc(a.W);
    a.Di.x = b.clientX + c.x;
    a.Di.y = b.clientY + c.y
}
r.Yc = function(a) {
    var b = Co(this, a.target);
    this.Sb = b;
    xo(this);
    b != this.anchor && (this.anchor = b, Do(this, b), Eo(this), Bo(this, a))
};
function Co(a, b) {
    try {
        for (; b && !a.Ra.contains(b);) b = b.parentNode;
        return b
    } catch(c) {
        return j
    }
}
r.ll = function(a) {
    Bo(this, a);
    this.Ss = i
};
r.ve = function(a) {
    this.Sb = a = Co(this, a.target);
    this.Ss = i;
    if (this.anchor != a) {
        this.anchor = a;
        var b = Ao(this, 1);
        xo(this);
        Do(this, a, b);
        Eo(this)
    }
};
function Ao(a, b) {
    if (0 == b) {
        var c = a.Di.clone();
        return new Fo(c)
    }
    return new Go(a.Sb)
}
function Eo(a) {
    if (a.anchor) for (var b, c = 0; b = vo[c]; c++) uc(b.f(), a.anchor) && (b.Ik = a, a.PF = b)
}
r.ml = function(a) {
    var b = Co(this, a.target),
    c = Co(this, a.relatedTarget);
    b != c && (b == this.Sb && (this.Sb = j), yo(this), this.Ss = l, this.H() && (!a.relatedTarget || !uc(this.f(), a.relatedTarget)) ? zo(this) : this.anchor = h)
};
r.vw = function() {
    var a = this.f();
    this.Sb != a && (xo(this), this.Sb = a)
};
r.rD = function(a) {
    var b = this.f();
    if (this.Sb == b && (!a.relatedTarget || !uc(b, a.relatedTarget))) this.Sb = j,
    zo(this)
};
function Do(a, b, c) {
    a.cm || (a.cm = Ld(u(a.zx, a, b, c), a.at))
}
function yo(a) {
    a.cm && (Jd.clearTimeout(a.cm), a.cm = h)
}
function zo(a) {
    2 == a.Td() && (a.nl = Ld(u(a.ME, a, a.anchor), a.Pv()))
}
function xo(a) {
    a.nl && (Jd.clearTimeout(a.nl), a.nl = h)
}
r.m = function() {
    this.n(l);
    yo(this);
    this.detach();
    this.f() && L(this.f());
    this.Sb = j;
    delete this.W;
    uo.g.m.call(this)
};
function Fo(a, b) {
    po.call(this, a, b)
}
w(Fo, po);
Fo.prototype.xa = function(a, b, c) {
    b = ag(a);
    b = eg(b);
    c = c ? new Nf(c.top + 10, c.right, c.bottom, c.left + 10) : new Nf(10, 0, 0, 10);
    zi(this.wh, a, 4, c, b, 9) & 496 && zi(this.wh, a, 4, c, b, 5)
};
function Go(a) {
    Bi.call(this, a, 3)
}
w(Go, Bi);
Go.prototype.xa = function(a, b, c) {
    var d = new Ob(10, 0);
    xi(this.element, this.Cf, a, b, d, c, 9) & 496 && xi(this.element, 2, a, 1, d, c, 5)
};
function Ho(a, b, c) {
    uo.call(this, a, b, c)
}
w(Ho, uo);
r = Ho.prototype;
r.QK = l;
r.PK = 100;
r.ep = l;
r.ks = function() {
    Ho.g.ks.call(this);
    this.Qp = Qf(qg(this.f()));
    this.anchor && (this.ou = Qf(qg(this.anchor)));
    this.ep = this.QK;
    N(this.B().va(), "mousemove", this.ll, l, this)
};
r.Gj = function() {
    qd(this.B().va(), "mousemove", this.ll, l, this);
    this.ou = this.Qp = j;
    this.ep = l;
    Ho.g.Gj.call(this)
};
r.zr = function(a) {
    if (this.ql) {
        var b = fg(this.f()),
        c = og(this.f());
        return b.x - this.ql.left <= a.x && a.x <= b.x + c.width + this.ql.right && b.y - this.ql.top <= a.y && a.y <= b.y + c.height + this.ql.bottom
    }
    return Ho.g.zr.call(this, a)
};
function Io(a, b) {
    if (a.ou && a.ou.contains(b) || a.zr(b)) return i;
    var c = a.Ik;
    return !! c && c.zr(b)
}
r.ME = function(a) {
    this.nl = h;
    a == this.anchor && (!Io(this, this.Di) && (!this.Pq() && (!this.Ik || !this.Ik.Sb)) && (!A || !(0 == this.Di.x && 0 == this.Di.y))) && this.n(l)
};
r.ll = function(a) {
    var b = this.H();
    if (this.Qp) {
        var c = Oc(this.B()),
        c = new Ob(a.clientX + c.x, a.clientY + c.y);
        Io(this, c) ? b = l: this.ep && (b = Of(this.Qp, c) >= Of(this.Qp, this.Di))
    }
    if (b) {
        if (zo(this), this.Sb = j, b = this.Ik) b.Sb = j
    } else 3 == this.Td() && xo(this);
    Ho.g.ll.call(this, a)
};
r.vw = function() {
    this.Pq() != this.f() && (this.ep = l, this.Sb = this.f())
};
r.Pv = function() {
    return this.ep ? this.PK: Ho.g.Pv.call(this)
};
function Jo(a, b, c, d) {
    uo.call(this, j, j, c);
    ra(a) ? this.$w = a: this.RA = a;
    this.dK = b != l;
    this.Hz = [];
    this.Aa = d || (c ? c.va() : document);
    N(this.Aa, "mouseover", this.sD, l, this)
}
w(Jo, Ho);
r = Jo.prototype;
r.m = function() {
    Jo.g.m.call(this);
    qd(this.Aa, "mouseover", this.sD, l, this)
};
r.$w = function(a) {
    return a.tagName in this.RA && !!a.getAttribute(this.RA[a.tagName])
};
r.sD = function(a) {
    if (a = a.target) if (this.$w(a)) this.Kc(j),
    Ko(this, a);
    else if (this.dK && (a = Kc(a, u(this.$w, this), l, this.nY))) this.Kc(j),
    Ko(this, a)
};
function Ko(a, b, c) {
    if (b == a.re) xo(a);
    else if (b != a.anchor) {
        if (1 == a.Td() || 4 == a.Td()) yo(a),
        Lo(a);
        var d = new Mo("trigger", a, b, h);
        a.Jh().contains(b) || (a.zf(b), a.Hz.push(b));
        a.anchor = b;
        a.Zx(d) ? Do(a, b, c || a.ts) : Lo(a)
    }
}
function No(a, b) {
    var c = y.indexOf(a.Hz, b); - 1 != c && (a.detach(b), a.Hz.splice(c, 1))
}
r.Zx = function(a) {
    return this.dispatchEvent(a)
};
function Lo(a) {
    a.dispatchEvent(new Mo("canceltrigger", a, a.anchor || j));
    No(a, a.anchor);
    delete a.anchor
}
r.Gj = function() {
    Jo.g.Gj.call(this);
    j != this.re && No(this, this.re);
    this.re = j
};
r.Yc = function(a) {
    var b = Co(this, a.target);
    b && b != this.anchor ? Ko(this, b) : Jo.g.Yc.call(this, a)
};
r.ml = function(a) {
    var b = this.anchor,
    c = this.Td();
    Jo.g.ml.call(this, a);
    if (c != this.Td() && (1 == c || 4 == c)) this.anchor = b,
    Lo(this)
};
r.zx = function(a, b) {
    Jo.g.zx.call(this, a, b);
    this.H() ? (a != this.re && No(this, this.re), this.re = a) : (yo(this), Lo(this))
};
function Mo(a, b, c, d) {
    ad.call(this, a, b);
    this.anchor = c;
    this.data = d
}
w(Mo, ad);
var Oo = !!window.DOMTokenList,
Po = Oo ?
function(a) {
    return a.classList
}: function(a) {
    a = a.className;
    return t(a) && a.match(/\S+/g) || []
},
Qo = Oo ?
function(a, b) {
    return a.classList.contains(b)
}: function(a, b) {
    return y.contains(Po(a), b)
},
Ro = Oo ?
function(a, b) {
    a.classList.add(b)
}: function(a, b) {
    Qo(a, b) || (a.className += 0 < a.className.length ? " " + b: b)
},
So = Oo ?
function(a, b) {
    a.classList.remove(b)
}: function(a, b) {
    Qo(a, b) && (a.className = y.filter(Po(a),
    function(a) {
        return a != b
    }).join(" "))
};
function To(a, b) {
    T.call(this, b);
    this.Ga = a || ""
}
w(To, T);
To.prototype.If = j;
var Uo = "placeholder" in document.createElement("input");
r = To.prototype;
r.En = l;
r.j = function() {
    this.d = this.B().j("input", {
        type: "text"
    })
};
r.Z = function(a) {
    To.g.Z.call(this, a);
    this.Ga || (this.Ga = a.getAttribute("label") || "");
    Mc(Ub(a)) == a && (this.En = i, So(this.f(), this.wm));
    Uo ? this.f().placeholder = this.Ga: Qc(this.f(), Wc.wp, this.Ga)
};
r.p = function() {
    To.g.p.call(this);
    var a = new me(this);
    a.c(this.f(), "focus", this.fD);
    a.c(this.f(), "blur", this.cw);
    Uo ? this.G = a: (A && a.c(this.f(), ["keypress", "keydown", "keyup"], this.AM), a.c(cc(Ub(this.f())), "load", this.pN), this.G = a, Vo(this));
    this.sh();
    this.f().kE = this
};
r.Za = function() {
    To.g.Za.call(this);
    this.G && (this.G.w(), this.G = j);
    this.f().kE = j
};
function Vo(a) { ! a.KL && (a.G && a.f().form) && (a.G.c(a.f().form, "submit", a.CM), a.KL = i)
}
r.m = function() {
    To.g.m.call(this);
    this.G && (this.G.w(), this.G = j)
};
r.wm = "label-input-label";
r.fD = function() {
    this.En = i;
    So(this.f(), this.wm);
    if (!Uo && !Wo(this) && !this.KN) {
        var a = this,
        b = function() {
            a.f().value = ""
        };
        z ? Ld(b, 10) : b()
    }
};
r.cw = function() {
    Uo || (this.G.ya(this.f(), "click", this.fD), this.If = j);
    this.En = l;
    this.sh()
};
r.AM = function(a) {
    27 == a.keyCode && ("keydown" == a.type ? this.If = this.f().value: "keypress" == a.type ? this.f().value = this.If: "keyup" == a.type && (this.If = j), a.preventDefault())
};
r.CM = function() {
    Wo(this) || (this.f().value = "", Ld(this.dM, 10, this))
};
r.dM = function() {
    Wo(this) || (this.f().value = this.Ga)
};
r.pN = function() {
    this.sh()
};
function Wo(a) {
    return !! a.f() && "" != a.f().value && a.f().value != a.Ga
}
r.clear = function() {
    this.f().value = "";
    this.If != j && (this.If = "")
};
r.reset = function() {
    Wo(this) && (this.clear(), this.sh())
};
r.pa = function(a) {
    this.If != j && (this.If = a);
    this.f().value = a;
    this.sh()
};
r.O = function() {
    return this.If != j ? this.If: Wo(this) ? this.f().value: ""
};
r.sh = function() {
    Uo ? this.f().placeholder != this.Ga && (this.f().placeholder = this.Ga) : (Vo(this), Qc(this.f(), Wc.wp, this.Ga));
    if (Wo(this)) a = this.f(),
    So(a, this.wm);
    else {
        if (!this.KN && !this.En) {
            var a = this.f();
            Ro(a, this.wm)
        }
        Uo || Ld(this.fS, 10, this)
    }
};
r.Pa = function(a) {
    this.f().disabled = !a;
    var b = this.f(),
    c = this.wm + "-disabled"; ! a ? Ro(b, c) : So(b, c)
};
r.isEnabled = function() {
    return ! this.f().disabled
};
r.fS = function() {
    this.f() && (!Wo(this) && !this.En) && (this.f().value = this.Ga)
};
function Xo(a, b) {
    M.call(this);
    this.yY = j;
    this.minHeight = b || 66;
    this.vb = a;
    this.e().c(this.vb, "focus", this.ZS).c(this.vb, "blur", this.fT);
    E.add(this.vb, "zu-seamless-input-origin-element")
}
w(Xo, ao);
Xo.prototype.ZS = function() {
    Yo(this);
    this.Bb || (this.Bb = new Id(100), this.e().c(this.Bb, Kd, this.xt));
    Zo(this, i);
    this.Bb.start();
    return i
};
Xo.prototype.fT = function() {
    this.Bb.stop();
    return i
};
Xo.prototype.xt = function() {
    return Zo(this)
};
function Zo(a, b) {
    var c = a.vb.value.replace(/[<>]/g, "a").replace(/[\n\r]/g, "<br>");
    if (b || a.dR !== c) a.dR = c,
    a.Vh && (a.Vh.innerHTML = c, c = a.Vh.scrollHeight + 22, c = c > a.minHeight ? c: a.minHeight, a.vb.style.height = $f(c, i), a.vb.style.minHeight = c + "px", a.dispatchEvent("change"))
}
function Yo(a) {
    if (!a.Vh) {
        var b = wg(a.vb);
        if (0 !== b.width) {
            var c = K("div", {
                style: "overflow:hidden;position:relative;height:0;"
            },
            a.Vh = K("div", "zu-seamless-input-mock-element"));
            document.body.appendChild(c);
            b = ["font-size:" + Vf(a.vb, "font-size"), "line-height:" + Vf(a.vb, "line-height"), "font-weight:" + Vf(a.vb, "font-weight"), "width:" + b.width + "px"].join(";");
            a.Vh.style.cssText = b;
            a.Vh.innerHTML = a.vb.value
        }
    }
};
function $o(a, b, c) {
    M.call(this);
    this.Fe = a;
    this.mf = c;
    this.F = b;
    N(b, [ap, bp, cp, dp], this);
    this.Rb = j;
    this.Wa = [];
    this.Gc = -1;
    this.vc = 0;
    this.Hd = this.Jb = j;
    this.RD = {}
}
w($o, zd);
r = $o.prototype;
r.Tf = 10;
r.Fm = i;
r.OA = l;
r.Ft = l;
r.AH = l;
var ap = "hilite",
bp = "select",
dp = "dismiss",
cp = "canceldismiss",
ep = {
    hW: "rowhilite",
    lV: ap,
    lW: bp,
    pI: dp,
    IU: cp,
    MW: "update",
    lh: "suggestionsupdate"
};
r = $o.prototype;
r.handleEvent = function(a) {
    if (a.target == this.F) switch (a.type) {
    case ap:
        this.xe(a.Fo);
        break;
    case bp:
        this.Wj();
        break;
    case cp:
        fp(this);
        break;
    case dp:
        this.Ii()
    }
};
function gp(a, b, c) {
    a.Rb != b && (a.Rb = b, a.Fe.ei(a.Rb, a.Tf, u(a.VO, a), c), fp(a))
}
r.jb = function() {
    return this.F.H()
};
function hp(a) {
    var b = a.vc + a.Wa.length - 1;
    a.Gc >= a.vc && a.Gc < b ? a.xe(a.Gc + 1) : -1 == a.Gc ? a.xe(a.vc) : a.Gc == b && (a.OA ? a.xe( - 1) : a.Ft && a.xe(a.vc))
}
function ip(a) {
    a.Gc > a.vc ? a.xe(a.Gc - 1) : a.OA && a.Gc == a.vc ? a.xe( - 1) : a.Ft && ( - 1 == a.Gc || a.Gc == a.vc) && a.xe(a.vc + a.Wa.length - 1)
}
r.xe = function(a) {
    this.Gc = a;
    this.F.xe(a);
    return - 1 != jp(this, a)
};
r.Wj = function() {
    var a = jp(this, this.Gc);
    if ( - 1 != a) {
        var a = this.Wa[a],
        b = this.mf.Xj(a);
        this.AH ? (this.Rb = j, this.Ii()) : this.uc();
        b || (this.dispatchEvent({
            type: "update",
            Fo: a
        }), this.AH && this.mf.update(i));
        return i
    }
    this.uc();
    this.dispatchEvent({
        type: "update",
        Fo: j
    });
    return l
};
r.uc = function() {
    this.Gc = -1;
    this.Rb = j;
    this.vc += this.Wa.length;
    this.Wa = [];
    window.clearTimeout(this.Hd);
    this.Hd = j;
    this.F.uc();
    this.dispatchEvent("suggestionsupdate");
    this.dispatchEvent(dp)
};
r.Ii = function() {
    this.Hd || (this.Hd = window.setTimeout(u(this.uc, this), 100))
};
r.ID = function() {
    return this.Hd ? (window.clearTimeout(this.Hd), this.Hd = j, i) : l
};
function fp(a) {
    a.ID() || window.setTimeout(u(a.ID, a), 10)
}
r.m = function() {
    $o.g.m.call(this);
    delete this.RD;
    this.F.w();
    this.mf.w();
    this.Fe = j
};
r.VO = function(a, b, c) {
    this.Rb == a && this.Pl(b, c)
};
r.Pl = function(a, b) {
    var c = "object" == ka(b) && b,
    d = (c ? c.NX() : b) ? jp(this, this.Gc) : -1;
    this.vc += this.Wa.length;
    this.Wa = a;
    for (var f = [], g = 0; g < a.length; ++g) f.push({
        id: this.vc + g,
        data: a[g]
    });
    g = j;
    this.Jb && (g = this.RD[ta(this.Jb)] || this.Jb);
    this.F.tJ = g;
    this.F.Pl(f, this.Rb, this.Jb);
    g = this.Fm;
    c && c.RL() !== h && (g = c.RL()); (g || 0 <= d) && 0 != f.length && this.Rb ? this.xe(0 <= d ? this.vc + d: this.vc) : this.Gc = -1;
    this.dispatchEvent("suggestionsupdate")
};
function jp(a, b) {
    var c = b - a.vc;
    return 0 > c || c >= a.Wa.length ? -1 : c
}
r.Ek = function(a) {
    var b = this.mf;
    b.Ek.apply(b, arguments)
};
r.update = function(a) {
    this.mf.update(a)
};
$o.mg = ep;
function kp(a) {
    var b;
    a: {
        var c = 0,
        d = 0;
        if (lp(a)) c = a.selectionStart,
        d = -1;
        else if (z) {
            var f = mp(a);
            b = f[0];
            f = f[1];
            if (b.inRange(f)) {
                b.setEndPoint("EndToStart", f);
                if ("textarea" == a.type) {
                    f.duplicate();
                    c = a = b.text;
                    for (d = l; ! d;) 0 == b.compareEndPoints("StartToEnd", b) ? d = i: (b.moveEnd("character", -1), b.text == a ? c += "\r\n": d = i);
                    b = [c.length, -1];
                    break a
                }
                c = b.text.length;
                d = -1
            }
        }
        b = [c, d]
    }
    return b[0]
}
function np(a, b) {
    if (lp(a)) a.selectionStart = b,
    a.selectionEnd = b;
    else if (z) {
        var b = op(a, b),
        c = a.createTextRange();
        c.collapse(i);
        c.move("character", b);
        c.select()
    }
}
function mp(a) {
    var b = a.ownerDocument || a.document,
    c = b.selection.createRange();
    "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
    return [b, c]
}
function op(a, b) {
    "textarea" == a.type && (b = Ma(a.value.substring(0, b)).length);
    return b
}
function lp(a) {
    try {
        return "number" == typeof a.selectionStart
    } catch(b) {
        return l
    }
};
function pp(a, b, c, d) {
    M.call(this);
    d = d || 150;
    this.yl = c != j ? c: i;
    this.Ho = a || ",;";
    this.VK = this.Ho.substring(0, 1);
    a = this.yl ? "[\\s" + this.Ho + "]+": "[\\s]+";
    this.BH = RegExp("^" + a + "|" + a + "$", "g");
    this.xS = RegExp("\\s*[" + this.Ho + "]$");
    this.yE = b || "";
    this.yR = this.yl;
    this.ga = 0 < d ? new Id(d) : j;
    this.Vb = new me(this);
    this.Zt = new me(this);
    this.fb = new Sg;
    this.oE = -1
}
w(pp, M);
var qp = (Pi || Qi) && !D("533.17.9");
r = pp.prototype;
r.lU = i;
r.OL = i;
r.IH = l;
r.zS = i;
r.yS = i;
r.bu = j;
r.Ua = j;
r.Zn = "";
r.si = l;
r.Jy = l;
r.GH = i;
r.Pq = n("Ua");
r.O = function() {
    return this.Ua.value
};
r.pa = function(a) {
    this.Ua.value = a
};
r.Ip = function(a) {
    sa(a) && 1 == a.nodeType && Qc(a, "haspopup", i);
    this.Vb.c(a, "focus", this.ve);
    this.Vb.c(a, "blur", this.Xc);
    this.Ua || (this.Zt.c(a, "keydown", this.gQ), sa(a) && 1 == a.nodeType && Mc(Ub(a)) == a && rp(this, a))
};
r.Ek = function(a) {
    for (var b = 0; b < arguments.length; b++) this.Ip(arguments[b])
};
r.Xj = function(a, b) {
    sp(this, a.toString(), b);
    return l
};
function sp(a, b, c) {
    if (la(c) ? c: a.yl) {
        var c = tp(a, a.O(), kp(a.Ua)),
        d = up(a, a.O());
        a.xS.test(b) || (b = Pa(b) + a.VK);
        a.lU && (0 != c && !Ja(d[c - 1]) && (b = " " + b), c == d.length - 1 && (b += " "));
        if (b != d[c]) {
            d[c] = b;
            b = a.Ua; (A || z && D("9")) && b.blur();
            b.value = d.join("");
            for (var f = 0,
            g = 0; g <= c; g++) f += d[g].length;
            b.focus();
            c = f;
            d = a.Ua;
            b = c;
            lp(d) ? d.selectionStart = b: z && (f = mp(d), g = f[0], g.inRange(f[1]) && (b = op(d, b), g.collapse(i), g.move("character", b), g.select()));
            d = a.Ua;
            lp(d) ? d.selectionEnd = c: z && (f = mp(d), b = f[1], f[0].inRange(b) && (c = op(d, c), d = op(d, kp(d)), b.collapse(i), b.moveEnd("character", c - d), b.select()))
        }
    } else a.pa(b);
    a.Jy = i
}
r.m = function() {
    pp.g.m.call(this);
    this.bu != j && window.clearTimeout(this.bu);
    this.Vb.w();
    delete this.Vb;
    this.Zt.w();
    this.fb.w()
};
r.$b = function(a) {
    switch (a.keyCode) {
    case 40:
        if (this.T.jb()) return this.IH ? ip(this.T) : hp(this.T),
        a.preventDefault(),
        i;
        if (!this.yl) return this.update(i),
        a.preventDefault(),
        i;
        break;
    case 38:
        if (this.T.jb()) return this.IH ? hp(this.T) : ip(this.T),
        a.preventDefault(),
        i;
        break;
    case 9:
        if (this.T.jb() && !a.shiftKey) {
            if (this.update(), this.T.Wj() && this.yR) return a.preventDefault(),
            i
        } else this.T.uc();
        break;
    case 13:
        if (this.T.jb()) {
            if (this.update(), this.T.Wj()) return a.preventDefault(),
            a.stopPropagation(),
            i
        } else this.T.uc();
        break;
    case 27:
        if (this.T.jb()) return this.T.uc(),
        a.preventDefault(),
        a.stopPropagation(),
        i;
        break;
    case 229:
        if (!this.si) return this.si || (this.Vb.c(this.Ua, "keyup", this.yF), this.Vb.c(this.Ua, "keypress", this.xF), this.si = i),
        i;
        break;
    default:
        this.ga && !this.GH && (this.ga.stop(), this.ga.start())
    }
    return vp(this, a)
};
function vp(a, b) {
    var c = a.yl && b.charCode && -1 != a.Ho.indexOf(String.fromCharCode(b.charCode));
    a.zS && c && a.update();
    return a.yS && c && a.T.Wj() ? (b.preventDefault(), i) : l
}
r.Yq = p(l);
function wp(a) {
    a.fb.zf(a.Ua);
    a.Vb.c(a.fb, "key", a.qo);
    a.Vb.c(a.Ua, "mousedown", a.zF);
    z && a.Vb.c(a.Ua, "keypress", a.vF)
}
r.ve = function(a) {
    rp(this, a.target || j)
};
function rp(a, b) {
    a.Zt.Ac();
    a.T && fp(a.T);
    b != a.Ua && (a.Ua = b, a.ga && (a.ga.start(), a.Vb.c(a.ga, Kd, a.Dl)), a.Zn = a.O(), wp(a))
}
r.Xc = function() {
    qp ? this.bu = window.setTimeout(u(this.YF, this), 0) : this.YF()
};
r.YF = function() {
    this.Ua && (this.Vb.ya(this.fb, "key", this.qo), this.fb.detach(), this.Vb.ya(this.Ua, "keyup", this.Yq), this.Vb.ya(this.Ua, "mousedown", this.zF), z && this.Vb.ya(this.Ua, "keypress", this.vF), this.si && xp(this), this.Ua = j, this.ga && (this.ga.stop(), this.Vb.ya(this.ga, Kd, this.Dl)), this.T && this.T.Ii())
};
r.Dl = function() {
    this.update()
};
r.gQ = function(a) {
    this.ve(a)
};
r.qo = function(a) {
    this.oE = a.keyCode;
    this.T && this.$b(a)
};
r.xF = function() {
    this.si && 229 != this.oE && xp(this)
};
r.yF = function(a) {
    this.si && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && xp(this)
};
r.zF = function(a) {
    this.T && this.we(a)
};
r.we = ba();
function xp(a) {
    a.si && (a.si = l, a.Vb.ya(a.Ua, "keypress", a.xF), a.Vb.ya(a.Ua, "keyup", a.yF))
}
r.vF = function(a) {
    vp(this, a)
};
r.update = function(a) {
    if (this.Ua && (a || this.O() != this.Zn)) {
        if (a || !this.Jy) {
            var a = kp(this.Ua),
            b = this.O(),
            a = up(this, b)[tp(this, b, a)],
            a = this.BH ? String(a).replace(this.BH, "") : a;
            this.T && (this.T.Jb = this.Ua, gp(this.T, a, this.O()))
        }
        this.Zn = this.O()
    }
    this.Jy = l
};
function tp(a, b, c) {
    a = up(a, b);
    if (c == b.length) return a.length - 1;
    for (var d = b = 0,
    f = 0; d < a.length && f <= c; d++) f += a[d].length,
    b = d;
    return b
}
function up(a, b) {
    if (!a.yl) return [b];
    for (var c = String(b).split(""), d = [], f = [], g = 0, k = l; g < c.length; g++) a.yE && -1 != a.yE.indexOf(c[g]) ? (a.OL && !k && (d.push(f.join("")), f.length = 0), f.push(c[g]), k = !k) : !k && -1 != a.Ho.indexOf(c[g]) ? (f.push(c[g]), d.push(f.join("")), f.length = 0) : f.push(c[g]);
    d.push(f.join(""));
    return d
};
$o.vp = pp;
$o.vp.rW = ",;";
$o.vp.WV = '"';
function yp(a, b, c, d) {
    pp.call(this, a, b, c, d)
}
w(yp, pp);
yp.prototype.Xj = function(a) {
    var b = yp.g.Xj.call(this, a);
    a.select(this.T.Jb);
    return b
};
$o.zI = yp;
function zp(a, b, c, d) {
    M.call(this);
    this.Oa = a || document.body;
    this.W = Sb(this.Oa);
    this.Do = !a;
    this.d = j;
    this.Rb = "";
    this.Wa = [];
    this.Sg = [];
    this.aH = this.pl = -1;
    this.cb = l;
    this.className = "ac-renderer";
    this.Os = "ac-row";
    this.uE = "active";
    this.au = "ac-active";
    this.BN = "ac-highlighted";
    this.Nk = b || j;
    this.KH = d != j ? d: i;
    this.ir = l;
    this.jS = !!c;
    this.tt = l;
    this.Zr = 0
}
w(zp, zd);
r = zp.prototype;
r.f = n("d");
r.Je = ca("KH");
r.Pl = function(a, b, c) {
    this.Rb = b;
    this.Wa = a;
    this.pl = -1;
    this.aH = Aa();
    this.Jb = c;
    this.Sg = [];
    this.d || (this.d = a = this.W.j("div", {
        style: "display:none"
    }), E.add(a, this.className), Pc(a, Xc.pA), a.id = Eg(Dg.v()), this.W.appendChild(this.Oa, a), N(a, "click", this.Uq, l, this), N(a, "mousedown", this.cj, l, this), N(a, "mouseover", this.hD, l, this));
    this.tt && (this.d.style.visibility = "hidden");
    this.mU && (this.d.style.minWidth = this.mU.clientWidth + "px");
    this.Sg.length = 0;
    this.W.Fs(this.d);
    if (this.Nk && this.Nk.N) this.Nk.N(this, this.d, this.Wa, this.Rb);
    else {
        var d = j;
        O.forEach(this.Wa,
        function(a) {
            a = Ap(this, a, this.Rb);
            this.tt ? this.d.insertBefore(a, d) : this.W.appendChild(this.d, a);
            d = a
        },
        this)
    }
    0 == this.Wa.length ? this.uc() : (this.show(), this.xa(), vg(this.d, i))
};
r.uc = function() {
    this.Jb && Qc(this.Jb, "activedescendant", "");
    this.cb && (this.cb = l, this.Jb && Qc(this.Jb, Wc.vk, l), 0 < this.Zr ? (Vc(this.Ak), this.Ak = new sm(this.d, this.Zr), this.Ak.play()) : S(this.d, l))
};
r.show = function() {
    this.cb || (this.cb = i, this.Jb && (Pc(this.Jb, Xc.mI), Qc(this.Jb, Wc.jI, "list"), Qc(this.Jb, Wc.vk, i)), 0 < this.Zr ? (Vc(this.Ak), this.Ak = new tm(this.d, this.Zr), this.Ak.play()) : S(this.d, i))
};
r.H = n("cb");
function Bp(a, b) {
    var c = 0 <= b && b < a.Sg.length ? a.Sg[b] : h;
    a.dispatchEvent({
        type: "rowhilite",
        OY: c
    }) && (0 <= a.pl && E.remove(a.Sg[a.pl], a.au, a.uE), a.pl = b, c && (E.add(c, a.au, a.uE), a.Jb && Qc(a.Jb, "activedescendant", c ? c.id: ""), hg(c, a.d)))
}
r.xe = function(a) {
    if ( - 1 == a) Bp(this, -1);
    else for (var b = 0; b < this.Wa.length; b++) if (this.Wa[b].id == a) {
        Bp(this, b);
        break
    }
};
r.xa = function() {
    if (this.Jb && this.Do) {
        var a;
        a = this.jS ? 3 : 1;
        this.tt && (a ^= 1);
        xi(this.tJ || this.Jb, a, this.d, a ^ 1, j, j, 65);
        this.tt && (this.d.style.visibility = "visible")
    }
};
r.m = function() {
    this.d && (qd(this.d, "click", this.Uq, l, this), qd(this.d, "mousedown", this.cj, l, this), qd(this.d, "mouseover", this.hD, l, this), this.W.removeNode(this.d), this.d = j, this.cb = l);
    Vc(this.Ak);
    this.Oa = j;
    zp.g.m.call(this)
};
r.mG = function(a, b, c) {
    c.innerHTML = Ra(a.data.toString())
};
function Cp(a, b, c) {
    if (3 == b.nodeType) {
        var d = j;
        oa(c) && (1 < c.length && !a.ir) && (d = y.slice(c, 1));
        var f = "";
        c && (oa(c) && (c = y.filter(c,
        function(a) {
            return ! Ja(a == j ? "": String(a))
        })), a.ir ? oa(c) ? f = y.map(c, bb).join("|") : (f = c.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), f = bb(f), f = f.replace(/ /g, "|")) : oa(c) ? f = 0 < c.length ? bb(c[0]) : "": /^\W/.test(c) || (f = bb(c)));
        c = f;
        if (0 != c.length) {
            for (var f = b.nodeValue,
            g = RegExp("([\\s\\S]*?)\\b(" + c + ")", "gi"), c = [], k = 0, m = g.exec(f), q = 0; m;) q++,
            c.push(m[1]),
            c.push(m[2]),
            k = g.lastIndex,
            m = g.exec(f);
            c.push(f.substring(k));
            if (1 < c.length) {
                d = !a.ir ? 1 : q;
                for (f = 0; f < d; f++) g = 2 * f,
                b.nodeValue = c[g],
                k = a.W.createElement("b"),
                k.className = a.BN,
                a.W.appendChild(k, a.W.createTextNode(c[g + 1])),
                k = b.parentNode.insertBefore(k, b.nextSibling),
                b.parentNode.insertBefore(a.W.createTextNode(""), k.nextSibling),
                b = k.nextSibling;
                a = y.slice(c, 2 * d);
                b.nodeValue = a.join("")
            } else d && Cp(a, b, d)
        }
    } else for (b = b.firstChild; b;) d = b.nextSibling,
    Cp(a, b, c),
    b = d
}
function Ap(a, b, c) {
    var d = a.W.j("div", {
        className: a.Os,
        id: Eg(Dg.v())
    });
    Pc(d, Xc.sA);
    a.Nk && a.Nk.Rj ? a.Nk.Rj(b, c, d) : a.mG(b, c, d);
    c && a.KH && Cp(a, d, c);
    E.add(d, a.Os);
    a.Sg.push(d);
    return d
}
function Dp(a, b) {
    for (; b && b != a.d && !E.has(b, a.Os);) b = b.parentNode;
    return b ? y.indexOf(a.Sg, b) : -1
}
r.Uq = function(a) {
    var b = Dp(this, a.target);
    0 <= b && this.dispatchEvent({
        type: bp,
        Fo: this.Wa[b].id
    });
    a.stopPropagation()
};
r.cj = function(a) {
    a.stopPropagation();
    a.preventDefault()
};
r.hD = function(a) {
    a = Dp(this, a.target);
    0 <= a && !(300 > Aa() - this.aH) && this.dispatchEvent({
        type: ap,
        Fo: this.Wa[a].id
    })
};
function Ep() {}
Ep.prototype.N = ba();
Ep.prototype.Rj = ba();
$o.Vt = zp;
$o.Vt.RU = 300;
$o.Vt.PU = Ep;
function Fp(a, b) {
    var c;
    a instanceof Fp ? (this.ye = la(b) ? b: a.ye, Gp(this, a.hi), Hp(this, a.hp), Ip(this, a.Li), Jp(this, a.Kl), Kp(this, a.Yf), Lp(this, a.Nb().clone()), Mp(this, a.sn)) : a && (c = String(a).match(ve)) ? (this.ye = !!b, Gp(this, c[1] || "", i), Hp(this, c[2] || "", i), Ip(this, c[3] || "", i), Jp(this, c[4]), Kp(this, c[5] || "", i), Lp(this, c[6] || "", i), Mp(this, c[7] || "", i)) : (this.ye = !!b, this.bd = new Np(j, 0, this.ye))
}
r = Fp.prototype;
r.hi = "";
r.hp = "";
r.Li = "";
r.Kl = j;
r.Yf = "";
r.sn = "";
r.vO = l;
r.ye = l;
r.toString = function() {
    var a = [],
    b = this.hi;
    b && a.push(Op(b, Pp), ":");
    if (b = this.Li) {
        a.push("//");
        var c = this.hp;
        c && a.push(Op(c, Pp), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.Kl;
        b != j && a.push(":", String(b))
    }
    if (b = this.Yf) this.Li && "/" != b.charAt(0) && a.push("/"),
    a.push(Op(b, "/" == b.charAt(0) ? Qp: Rp)); (b = this.bd.toString()) && a.push("?", b); (b = this.sn) && a.push("#", Op(b, Sp));
    return a.join("")
};
r.resolve = function(a) {
    var b = this.clone(),
    c = !!a.hi;
    c ? Gp(b, a.hi) : c = !!a.hp;
    c ? Hp(b, a.hp) : c = !!a.Li;
    c ? Ip(b, a.Li) : c = a.Kl != j;
    var d = a.Yf;
    if (c) Jp(b, a.Kl);
    else if (c = !!a.Yf) {
        if ("/" != d.charAt(0)) if (this.Li && !this.Yf) d = "/" + d;
        else {
            var f = b.Yf.lastIndexOf("/"); - 1 != f && (d = b.Yf.substr(0, f + 1) + d)
        }
        f = d;
        if (".." == f || "." == f) d = "";
        else if (!$a(f, "./") && !$a(f, "/.")) d = f;
        else {
            for (var d = Fa(f, "/"), f = f.split("/"), g = [], k = 0; k < f.length;) {
                var m = f[k++];
                "." == m ? d && k == f.length && g.push("") : ".." == m ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(), d && k == f.length && g.push("")) : (g.push(m), d = i)
            }
            d = g.join("/")
        }
    }
    c ? Kp(b, d) : c = "" !== a.bd.toString();
    c ? Lp(b, a.bd.toString() ? decodeURIComponent(a.bd.toString()) : "") : c = !!a.sn;
    c && Mp(b, a.sn);
    return b
};
r.clone = function() {
    return new Fp(this)
};
function Gp(a, b, c) {
    Tp(a);
    a.hi = c ? b ? decodeURIComponent(b) : "": b;
    a.hi && (a.hi = a.hi.replace(/:$/, ""))
}
function Hp(a, b, c) {
    Tp(a);
    a.hp = c ? b ? decodeURIComponent(b) : "": b
}
function Ip(a, b, c) {
    Tp(a);
    a.Li = c ? b ? decodeURIComponent(b) : "": b
}
function Jp(a, b) {
    Tp(a);
    b ? (b = Number(b), (isNaN(b) || 0 > b) && e(Error("Bad port number " + b)), a.Kl = b) : a.Kl = j
}
function Kp(a, b, c) {
    Tp(a);
    a.Yf = c ? b ? decodeURIComponent(b) : "": b
}
function Lp(a, b, c) {
    Tp(a);
    b instanceof Np ? (a.bd = b, a.bd.Xy(a.ye)) : (c || (b = Op(b, Up)), a.bd = new Np(b, 0, a.ye))
}
r.Nb = n("bd");
function Mp(a, b, c) {
    Tp(a);
    a.sn = c ? b ? decodeURIComponent(b) : "": b
}
function Tp(a) {
    a.vO && e(Error("Tried to modify a read-only Uri"))
}
r.Xy = function(a) {
    this.ye = a;
    this.bd && this.bd.Xy(a);
    return this
};
function Op(a, b) {
    return t(a) ? encodeURI(a).replace(b, Vp) : j
}
function Vp(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Pp = /[#\/\?@]/g,
Rp = /[\#\?:]/g,
Qp = /[\#\?]/g,
Up = /[\#\?@]/g,
Sp = /#/g;
function Np(a, b, c) {
    this.Ld = a || j;
    this.ye = !!c
}
function Wp(a) {
    if (!a.zb && (a.zb = new Od, a.da = 0, a.Ld)) for (var b = a.Ld.split("&"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("="),
        f = j,
        g = j;
        0 <= d ? (f = b[c].substring(0, d), g = b[c].substring(d + 1)) : f = b[c];
        f = decodeURIComponent(f.replace(/\+/g, " "));
        f = Xp(a, f);
        a.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
    }
}
r = Np.prototype;
r.zb = j;
r.da = j;
r.Ha = function() {
    Wp(this);
    return this.da
};
r.add = function(a, b) {
    Wp(this);
    this.Ld = j;
    var a = Xp(this, a),
    c = this.zb.get(a);
    c || this.zb.set(a, c = []);
    c.push(b);
    this.da++;
    return this
};
r.remove = function(a) {
    Wp(this);
    a = Xp(this, a);
    return this.zb.Gd(a) ? (this.Ld = j, this.da -= this.zb.get(a).length, this.zb.remove(a)) : l
};
r.clear = function() {
    this.zb = this.Ld = j;
    this.da = 0
};
r.xb = function() {
    Wp(this);
    return 0 == this.da
};
r.Gd = function(a) {
    Wp(this);
    a = Xp(this, a);
    return this.zb.Gd(a)
};
r.sg = function(a) {
    var b = this.Ea();
    return y.contains(b, a)
};
r.Eb = function() {
    Wp(this);
    for (var a = this.zb.Ea(), b = this.zb.Eb(), c = [], d = 0; d < b.length; d++) for (var f = a[d], g = 0; g < f.length; g++) c.push(b[d]);
    return c
};
r.Ea = function(a) {
    Wp(this);
    var b = [];
    if (a) this.Gd(a) && (b = y.concat(b, this.zb.get(Xp(this, a))));
    else for (var a = this.zb.Ea(), c = 0; c < a.length; c++) b = y.concat(b, a[c]);
    return b
};
r.set = function(a, b) {
    Wp(this);
    this.Ld = j;
    a = Xp(this, a);
    this.Gd(a) && (this.da -= this.zb.get(a).length);
    this.zb.set(a, [b]);
    this.da++;
    return this
};
r.get = function(a, b) {
    var c = a ? this.Ea(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
r.toString = function() {
    if (this.Ld) return this.Ld;
    if (!this.zb) return "";
    for (var a = [], b = this.zb.Eb(), c = 0; c < b.length; c++) for (var d = b[c], f = encodeURIComponent(String(d)), d = this.Ea(d), g = 0; g < d.length; g++) {
        var k = f;
        "" !== d[g] && (k += "=" + encodeURIComponent(String(d[g])));
        a.push(k)
    }
    return this.Ld = a.join("&")
};
r.clone = function() {
    var a = new Np;
    a.Ld = this.Ld;
    this.zb && (a.zb = this.zb.clone(), a.da = this.da);
    return a
};
function Xp(a, b) {
    var c = String(b);
    a.ye && (c = c.toLowerCase());
    return c
}
r.Xy = function(a) {
    a && !this.ye && (Wp(this), this.Ld = j, Md.forEach(this.zb,
    function(a, c) {
        var d = c.toLowerCase();
        c != d && (this.remove(c), this.remove(d), 0 < a.length && (this.Ld = j, this.zb.set(Xp(this, d), y.clone(a)), this.da += a.length))
    },
    this));
    this.ye = a
};
r.extend = function(a) {
    for (var b = 0; b < arguments.length; b++) Md.forEach(arguments[b],
    function(a, b) {
        this.add(b, a)
    },
    this)
};
function Yp(a, b) {
    M.call(this);
    this.bU = a;
    this.Yz = !b;
    this.ca = new ye
}
w(Yp, M);
r = Yp.prototype;
r.RE = "GET";
r.tc = h;
r.xN = j;
r.nx = j;
r.Ws = ca("RE");
r.Fa = ca("tc");
r.rU = function(a, b, c) {
    var c = Ie(c.target),
    d = [];
    if (c) try {
        d = Bd(c)
    } catch(f) {}
    b(a, d)
};
r.ei = function(a, b, c) {
    var d, f = this.Yz;
    d = new Fp(this.bU);
    Tp(d);
    d.bd.set("token", a);
    b = String(b);
    Tp(d);
    d.bd.set("max_matches", b);
    f = String(Number(f));
    Tp(d);
    d.bd.set("use_similar", f);
    if (d = d.toString()) a = u(this.rU, this, a, c),
    this.ca.wb() && this.ca.abort(),
    this.nx && sd(this.nx),
    this.nx = pd(this.ca, "success", a),
    this.ca.send(d, this.RE, this.tc, this.xN)
};
r.m = function() {
    this.ca.w();
    Yp.g.m.call(this)
};
$o.vA = Yp;
$.fn.placeholder = function(a) {
    return this.each(function() {
        var b = $(this);
        b.data("placeholder") || b.data("placeholder", new Zp(this, a))
    })
};
function Zp(a, b) {
    a && (this.input = a, "string" === typeof b && (b = {
        text: b
    }), F.extend(this.s = {},
    this.V, b || {}), this.br = j, this.$t())
}
var $p = "placeholder" in document.createElement("input");
r = Zp.prototype;
r.V = {
    text: "",
    offsetParent: j,
    dB: l
};
r.TJ = ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"];
r.ii = function(a) {
    var b = this.input,
    c = this.s;
    c.text = a || "";
    $p ? (aq(b) || Qc(b, Wc.wp, c.text), b.setAttribute("placeholder", c.text)) : zc(this.label, c.text)
};
function bq(a, b) {
    $p ? E.enable(a.input, "placeholder-hilight", b) : E.enable(a.label, "placeholder-label-hilight", b)
}
r.w = function() {
    this.br && (this.br.Ac(), this.br.w());
    L(this.label);
    this.label = j
};
r.$t = function() {
    var a = this.input,
    b = this.s;
    b.text || (b.text = a.getAttribute("placeholder"));
    if ($p) return this.ii(b.text);
    var c = this.input,
    d = ig(c),
    f = K("label"),
    g = jg(c, this.offsetParent());
    Rf(f, {
        color: "gray",
        cursor: "text",
        position: "absolute",
        left: g.x + d.left + "px",
        top: g.y + d.top + "px",
        display: this.xb() ? "block": "none",
        width: cq(c, "width"),
        fontSize: cq(c, "fontSize"),
        lineHeight: cq(c, "lineHeight"),
        fontFamily: cq(c, "fontFamily")
    });
    c = this.label = f;
    this.ii(b.text);
    this.offsetParent().appendChild(c);
    d = this.br = new me(this);
    d.c(a, "blur", this.Iu);
    d.c(a, "focus", this.hide);
    b.dB && d.c(a, "keydown", this.hide);
    d.c(c, "click",
    function() {
        this.hide();
        sg(a) && a.focus()
    });
    a.vY = u(this.Iu, this);
    b = this.input;
    c = this.label;
    aq(b) || (b.id ? c.htmlFor = b.id: (c.id = Eg(Dg.v()), Qc(b, Wc.St, c.id)));
    this.position();
    this.Iu()
};
function aq(a) {
    if (("labels" in a ? a.labels.length: a.id && y.some(document.getElementsByTagName("label"),
    function(b) {
        return b.htmlFor === a.id
    })) || Rc(a, Wc.wp) || Rc(a, Wc.St)) return i
}
function cq(a, b) {
    return Vf(a, b) || Wf(a, b) || a.style[b]
}
r.offsetParent = function() {
    return this.s.offsetParent || this.input.offsetParent
};
r.Iu = function() {
    this.xb() && sg(this.input) ? this.show() : this.hide()
};
r.show = function() {
    this.label && S(this.label, i)
};
r.hide = function() {
    this.label && S(this.label, l)
};
r.xb = function() {
    return ! this.input.value
};
r.position = function() {
    y.forEach(this.TJ,
    function(a) {
        this.label.style[a] = cq(this.input, a)
    },
    this)
};
function dq(a, b, c, d) {
    this.Fe = a = new Yp(a, !d);
    d = new zp;
    c = new pp(j, j, !!c, 300);
    $o.call(this, a, d, c);
    c.T = this;
    c.Ek(b)
}
w(dq, $o);
dq.prototype.Je = function(a) {
    this.F.Je(a)
};
dq.prototype.Ws = function(a) {
    this.Fe.Ws(a)
};
dq.prototype.Fa = function(a) {
    this.Fe.Fa(a)
};
$o.yI = dq;
function eq(a, b) {
    $o.vA.call(this, a, b);
    this.Iy = j;
    this.BC = i
}
w(eq, $o.vA);
eq.prototype.CR = ["根话题", "未归类话题"];
eq.prototype.Zl = ca("Iy");
eq.prototype.ei = function(a, b, c) {
    var d = u(function(a, b) {
        for (var d = [], m, q = 0; q < b.length; q++) for (var s = 1; s < b[q].length; s++) {
            m = b[q][s];
            var x = i;
            this.BC && y.forEach(this.CR,
            function(a) {
                m[2] === a && (x = l)
            });
            x && d.push(m)
        }
        this.Iy && (d = this.Iy(d));
        c(a, d)
    },
    this);
    eq.g.ei.call(this, a, b, d)
};
function fq(a, b, c, d) {
    this.SE = 0;
    $o.vp.call(this, a, b, !!c, d || 300)
}
w(fq, $o.vp);
r = fq.prototype;
r.Xj = function(a) {
    var b = $o.zI.g.Xj.call(this, a),
    c = this.T.Jb,
    d = this.T;
    d.CG = a;
    d.dispatchEvent("select");
    c.value = "";
    return b
};
r.pa = ba();
r.update = function(a) {
    var b = pn(this.O()); ! b || "搜索用户" === b || "搜索话题" === b || "在这里输入问题" === b || y.contains(this.T.Gq || [], b) || (!b ? 0 : unescape(encodeURIComponent(b)).length) < this.SE || b === this.HE ? (this.T.Ii(), this.Zn = b) : (this.HE = j, this.T.dispatchEvent({
        type: gq
    }), fq.g.update.call(this, a))
};
r.ve = function(a) {
    this.T && fp(this.T);
    a.target !== this.Ua && (this.Ua = a.target || j, this.ga && (this.ga.start(), this.Vb.c(this.ga, Kd, this.Dl)), this.Zn = this.O(), wp(this));
    this.ga && this.ga.start();
    this.update(i)
};
r.Xc = function() {
    this.ga && this.ga.stop();
    this.T && this.T.Ii()
};
r.$b = function(a) {
    if (13 === a.keyCode) {
        if (this.T.jb()) {
            if (this.T.Wj()) return a.preventDefault(),
            a.stopPropagation(),
            i;
            a.preventDefault();
            a.stopPropagation();
            this.T.Rb = "";
            this.T.uc();
            this.update(i);
            return l
        }
        a.stopPropagation();
        a.preventDefault();
        return l
    }
    fq.g.$b.call(this, a)
};
r.Ip = function(a) {
    fq.g.Ip.call(this, a);
    this.Vb.c(a, "mousedown",
    function(a) {
        a.stopPropagation();
        return i
    })
};
function hq(a, b, c, d) {
    fq.call(this, a, b, !!c, d)
}
w(hq, fq);
hq.prototype.Xj = function(a) {
    var b = this.T;
    b.CG = a;
    b.dispatchEvent("select");
    return l
};
function iq(a, b, c, d, f, g, k, m, q) {
    var s = {};
    "question_suggest" === g ? (s.N = u(this.XR, this), s.Rj = yn) : "topic_question" === g ? (s.N = u(this.ZR, this), s.Rj = xn) : s.Rj = g ? xn: yn;
    g = new $o.Vt(f, s);
    f && (g.Do = l);
    g.ir = i;
    this.F = g;
    this.Fe = new eq(a, !d);
    a = q ? q: new fq(j, j, c);
    k && k.length && new Zp(b, k[0]);
    a.GH = l;
    $o.call(this, this.Fe, g, a);
    a.T = this;
    a.Ip(b);
    m && (a.SE = m)
}
w(iq, $o.yI);
var gq = "before_update";
r = iq.prototype;
r.ov = i;
r.XR = function(a, b, c) {
    O.forEach(c,
    function(a) {
        a = Ap(this, a, this.Rb);
        this.W.appendChild(this.d, a)
    },
    a);
    nc(a.d, a.W.j("div", "zh-question-suggest-info", [a = a.W.j("a", {
        href: "javascript:;",
        title: "关闭",
        name: "close",
        id: "zh-question-suggest-info-close"
    },
    [a.W.j("span", "x-m"), "不是"]), "您想问的是不是下面的问题？"]));
    N(a, "click",
    function() {
        var a = this.mf;
        a.Xc();
        this.uc();
        a.HE = a.O()
    },
    l, this)
};
r.ZR = function(a, b, c) {
    0 === c.length ? this.uc() : (O.forEach(c,
    function(a) {
        a = Ap(this, a, this.Rb);
        this.W.appendChild(this.d, a)
    },
    a), b = a.W.j("div", "zh-question-topic-autocomplete-plaintext", ["建议添加的话题", a.W.j("span", "x-m")]), nc(a.d, b), Ak.pb && N(b, "click",
    function() {
        this.mf.Xc();
        this.uc()
    },
    l, this))
};
r.te = n("CG");
r.Zl = function(a) {
    this.Fe.Zl(a)
};
r.uc = function() {
    if (this.ov) return iq.g.uc.call(this)
};
r.Wj = function() {
    return - 1 === jp(this, this.Gc) ? l: iq.g.Wj.call(this)
};
r.Ii = function() {
    Ak.pb ? pd(document, "click", u(this.uc, this)) : iq.g.Ii.call(this)
};
function jq(a, b) {
    M.call(this);
    this.jm = i;
    this.dh = this.gm = -1;
    this.lH = "";
    this.Sf = a || 500;
    this.eL = b;
    this.kc = j
}
w(jq, ao);
r = jq.prototype;
r.bg = ca("d");
r.f = n("d");
r.focus = function() {
    this.k();
    this.vb.focus()
};
r.k = function() {
    this.xw || (this.xw = i, this.jm && (this.kc || (this.kc = new Nl(j, l), this.kc.Ma("发送私信"), nl(this.kc, j), this.kc.n(i), this.d = this.kc.R()), this.d.innerHTML = '<div class="zm-pm-wrap"><dl class="zm-form-table zm-form-table-medium"><dt class="zm-form-table-head zm-form-table-head-align-middle"><label class="zg-medium-gray">发给：</label></dt><dd class="zm-form-table-field"><div class="zm-pm-selector-wrap"><div class="zg-user-name" style="display:none;padding:4px 0 0 0"></div><input style="width:95.5%" class="zg-form-text-input zm-pm-user-selector" type="text" /></div></dd><dt class="zm-form-table-head zm-form-table-head-align-middle"><label class="zg-medium-gray">内容：</label></dt><dd class="zm-form-table-field zm-form-table-field-last"><div class="zg-editor-simple-wrap zg-form-text-input"><textarea class="zg-editor-input" style="font-weight:normal"></textarea></div></dd></dl><div class="zh-pm-warnmsg" style="display:none;text-align:right;color:#C3412F;"></div><div class="zm-command zg-clear"><div class="zm-item-meta zg-left" style="margin: 0 0 0 57px;"><span class="zg-text-counter" style="display:none">还可以输入 500 字</span><span class="additional-info" ></span></div><a name="send" href="javascript:;" class="zg-right zg-btn-blue zg-r3px" id="zh-question-pm-send-button">发送</a><a name="cancel" href="javascript:;" class="zm-command-cancel">取消</a></div></div>'), this.sf = I("zg-user-name", this.d), this.vb = I("zg-editor-input", this.d), this.oc = I("zm-pm-user-selector", this.d), this.qg = I("zm-command", this.d), this.nX = I("zg-text-counter", this.d), this.io = I("zh-pm-warnmsg", this.d), this.bA = $(".additional-info", $(this.d)), this.UF = new Xo(this.vb), this.e().c(this.qg, "click", this.S).c(this.sf, "click", this.S).c(this.vb, "keydown", this.FM), this.oc && ((new To("搜索用户")).h(this.oc), this.e().c(this.oc, "blur", this.fK), this.u = new iq("/people/autocomplete", this.oc, j, j, I("zm-pm-wrap", this.d), i), this.u.Je(i), this.e().c(this.u, "select", this.so)))
};
r.FM = function(a) {
    if (13 === a.keyCode && (a.ctrlKey || a.metaKey)) kq(this),
    a.preventDefault()
};
function lq(a, b) {
    a.QX = b;
    a.sf.innerHTML += '<a class="zm-profile-email-history-link" href="' + b + '">私信记录  »</a>'
}
r.fK = function() {
    this.rB && clearTimeout(this.rB);
    this.rB = setTimeout(u(this.gK, this), 200)
};
r.gK = function() {
    var a = pn(this.oc.value); - 1 === this.dh && (a && "搜索用户" !== a) && mq(this, "请输入对方姓名，从下拉菜单里选择收件人")
};
r.fi = function() {
    this.vb.value = "";
    this.jm && (this.oc.value = "");
    S(this.io, l);
    this.sf.innerHTML = "搜索用户";
    this.gm = -1
};
r.show = function() {
    this.k();
    this.fi();
    this.jm && (this.kc.n(i), this.kc.xa())
};
r.so = function() {
    var a = y.slice(this.u.te(), 1);
    nq(this, a[3], a[0])
};
function nq(a, b, c, d) {
    d = d === l ? l: i; - 1 === b ? (b = a.sf, S(a.oc, i), S(b, l)) : b !== V[3] && (a.dh = b, a.lH = c, a.sf && a.oc && (a.sf.innerHTML = a.lH + (d ? tn() : ""), b = a.oc, S(a.sf, i), S(b, l), a.oc.value = ""))
}
function kq(a) {
    if (! (a.pd && "pending" === a.pd.state())) if ( - 1 === a.dh) mq(a, "请填写收信人。");
    else {
        var b = a.vb.value;
        Oa(b) ? (b = -1 !== a.gm ? $.post("/inbox/reply", {
            message_id: a.gm,
            content: b,
            type: a.Iz
        }) : $.post("/inbox/post", {
            member_id: a.dh,
            content: b
        }), b.done(u(a.AQ, a)), a.pd = b) : mq(a, "请填写私信内容。")
    }
}
r.S = function(a) {
    if (a = (a = this.Nd(a.target)) && a.name) switch (a) {
    case "edit":
        this.dh = -1;
        a = this.sf;
        S(this.oc, i);
        S(a, l);
        break;
    case "cancel":
        this.jm && this.kc.n(l);
        break;
    case "send":
        kq(this)
    }
};
function mq(a, b) {
    a.io.innerHTML = b;
    S(a.io, i)
}
r.AQ = function(a) {
    In("message", "send_message");
    a && !a.r ? (this.jm && this.kc.n(l), this.eL ? X("发送成功") : window.location.reload()) : mq(this, a.msg)
};
function oq(a, b, c) {
    Bi.call(this, a, b);
    this.GA = c
}
w(oq, Bi);
oq.prototype.wn = p(5);
oq.prototype.xa = function(a, b, c, d) {
    var f = {
        "1-4": "bottom",
        "0-4": "top",
        "0-5": "top",
        "1-5": "bottom",
        "2-5": "top",
        "3-5": "bottom",
        "3-4": "bottom",
        "2-4": "right"
    },
    g;
    if (this.GA) {
        g = xi(this.element, this.Cf, a, b, j, c, 10, d);
        var k = pq(g, this.Cf),
        m = pq(g, b);
        g & 496 && (g = xi(this.element, k, a, m, j, c, 10, d), g & 496 && (k = pq(g, k), m = pq(g, m), this.GA ? xi(this.element, k, a, m, j, c, this.wn(), d) : xi(this.element, k, a, m, j, c, 0, d)));
        this.ss && (a = (la(k) ? k: this.Cf) + "-" + (la(b) ? b: m), this.ss(f[a], a))
    } else xi(this.element, this.Cf, a, b, h, c),
    this.ss && (a = this.Cf + "-" + b, this.ss(f[a], a))
};
function pq(a, b) {
    a & 48 && (b ^= 2);
    a & 192 && (b ^= 1);
    return b
};
function qq() {
    M.call(this);
    this.QS = this.AN = 250;
    this.className = "tooltip";
    this.gg = {};
    this.wo = {}
}
w(qq, ao);
r = qq.prototype;
r.EN = {
    t: 0,
    r: 2,
    b: 1,
    l: 2
};
function rq(a) {
    var b = sq(),
    c = [],
    d = a[0][1];
    c.push('<div id="zh-tooltip-topic" class="hovercard"><div class="popover-inner"><div class="popover-content"');
    c.push('<a class="zm-item-link-avatar" href="/topic/' + d + '"><img class="zm-list-avatar-medium" src="' + a[0][2] + '" /></a>');
    c.push('<div class="zu-hovercard-head-wrap">');
    c.push('<a href="/topic/' + d + '">' + a[0][0] + "</a>");
    c.push('<div class="zg-gray">' + a[2] + "</div></div>");
    c.push('<div class="zu-hovercard-command">');
    c.push('<div class="zg-left"><a href="/topic/' + d + '/followers"><strong>' + a[1] + '</strong></a> <span class="zg-gray">人关注该话题</span></div>');
    c.push('<a href="javascript:;" data-token="' + d + '" id="fb-' + a[0][3] + '" name="focus" data-focustype="topic" class="zg-btn ' + (a[3] ? "zg-btn-unfollow": "zg-btn-follow") + '" >' + (a[3] ? "取消关注": "关注") + "</a></div>");
    c.push("</div></div>");
    c.push(b);
    c.push("</div>");
    return c.join("")
}
function tq(a) {
    var b = sq(),
    c = [];
    c.push('<div id="zh-tooltip-people" class="hovercard"><div class="popover-inner"><div class="popover-content"');
    c.push('<a class="zm-item-link-avatar" href="/people/' + a[0][1] + '"><img class="zm-list-avatar-medium" src="' + a[0][2] + '" /></a>');
    c.push('<div class="zu-hovercard-head-wrap">');
    c.push('<a href="/people/' + a[0][1] + '">' + a[0][0] + "</a>");
    c.push("<br /><strong>" + a[5] + '</strong> <span class="zg-gray">个回答</span><br /><strong>' + a[1] + '</strong> <span class="zg-gray">人关注' + "她他".charAt(a[0][4]) + "</span>");
    c.push('</div><div class="zg-gray zg-clear">' + a[2] + "</div>");
    c.push('<div class="zu-hovercard-command">');
    var d = a[0][3] === V[3],
    f = !!a[6],
    g = !!a[7];
    d ? c.push('<span class="zg-gray-normal">我自己</span>') : a[4] ? c.push('<a href="javascript:;" data-focusme="1" data-token="', a[0][1], '" id="fb-', a[0][3], '" name="focus" data-focustype="people" class="zm-rich-follow-btn small zg-btn ', a[3] ? "zg-btn-unfollow": "zg-btn-follow", '" ><i class="zg-icon zu-entry-focus-single-way"></i><i class="zg-icon zu-entry-focus-each"></i>', a[3] ? "取消关注": "关注", "</a>") : g && c.push('<a href="javascript:;" data-token="' + a[0][1] + '" id="fb-' + a[0][3] + '" name="focus" data-focustype="people" class="zg-btn ' + (a[3] ? "zg-btn-unfollow": "zg-btn-follow") + '" >' + (a[3] ? "取消关注": "关注") + "</a>");
    f && (!d && V.ob()) && c.push('<a data-token="' + a[0][1] + '" href="/inbox/' + a[6] + '" name="pm" class="zg-right zg-link-gray js-pm-dialog">私信</a>');
    c.push("</div></div></div>");
    c.push(b);
    c.push("</div>");
    return c.join("")
}
r.k = function() {
    if (!Ak.pb && !y.contains(Jk, "tooltiop")) {
        var a = this.K = new Jo({
            A: "data-tip",
            SPAN: "data-tip",
            BUTTON: "data-tip",
            I: "data-tip",
            DIV: "data-tip"
        });
        this.K.className = this.className;
        var b = K("div", {
            id: "zh-tooltip"
        });
        document.body.appendChild(b);
        this.K.bg(b);
        this.K.at = this.QS;
        this.K.gr = this.AN;
        this.e().c(this.K, "trigger", this.Zx);
        var c = $(b),
        d = j;
        a.on("show",
        function(a) {
            clearTimeout(d);
            c.addClass("in");
            U.Q({
                type: "ga_hover_hovercard",
                target: a.target.re || a.target.anchor
            })
        }).on("hide",
        function() {
            c.css({
                display: "block",
                visibility: "visible"
            }).removeClass("in").addClass("out");
            d = setTimeout(function() {
                c.removeClass("out").css({
                    display: "none",
                    visibility: "hidden"
                })
            },
            1E3)
        });
        this.e().c(this.K, "beforeshow", this.jo);
        $(b).on("click", "a[name=focus]", u(this.kw, this)).on("click", "a[name=pm]", u(this.WM, this))
    }
};
r.kw = function(a) {
    var a = a.currentTarget,
    b = $(a).data();
    Dn(a, b.focustype, j, ["zg-btn-follow", "zg-btn-unfollow"]);
    if (b = (a = this.K.re || this.K.anchor) && a.getAttribute("data-tip")) this.$u = a,
    a = b.split("$"),
    b = a[0],
    "t" === b ? (a = this.gg[a[2]], a[3] = a[3] ? 0 : 1) : "p" === b && (a = this.wo[a[2]], a[3] = a[3] ? 0 : 1)
};
r.WM = function(a) {
    a.preventDefault();
    var a = a.currentTarget,
    b = $(a).data("token"),
    c = new jq(j, i),
    b = this.wo[b][0];
    c.show();
    nq(c, b[3], b[0], i);
    lq(c, a.href);
    c.vb.focus();
    this.K.n(l)
};
r.jo = function() {
    var a = this.K.re || this.K.anchor,
    b = a && a.getAttribute("data-tip");
    if (b) {
        this.$u = a;
        var c = b.split("$"),
        a = c[1];
        b = c[0];
        c = c[2];
        this.OK = b;
        this.MK = c;
        this.en = a;
        "s" === b ? (b = [], b.push('<div class="tooltip-arrow'), b.push('"></div><div class="tooltip-inner">'), b.push(Za(c)), b.push("</div></div>"), b = b.join(""), uq(this, b)) : "t" === b ? this.gg[c] ? uq(this, rq(this.gg[c])) : (uq(this, vq()), wq(this, b, c)) : "p" === b && (this.wo[c] ? uq(this, tq(this.wo[c])) : (uq(this, vq()), wq(this, b, c)));
        xq(this, a)
    }
};
function xq(a, b) {
    var c;
    switch (b) {
    case "t":
        c = 5;
        break;
    case "r":
        c = 4;
        break;
    case "b":
        c = 4;
        break;
    case "l":
        c = 6
    }
    var d = a.K;
    d.ny = c;
    d.H() && d.xa()
}
function sq() {
    return '<div class="arrow"></div><div class="arrow2"></div><div class="arrow3"></div>'
}
function vq() {
    var a = [];
    a.push('<div class="zu-hovercard-wrap"><div class="zu-hovercard-inner zh-hovercard-spinner"></div></div>');
    a.push(sq());
    return a.join("")
}
function wq(a, b, c) {
    var d = new Y(l),
    b = "t" === b ? "topic": "people";
    Q(a.e(), d, "success", a.QP);
    d.ajax("/" + b + "/" + encodeURIComponent(c) + "/json", j, "GET")
}
r.QP = function(a) {
    if ((a = R(a.target)) && !a.r) a = a.msg,
    a[0][1] === this.MK && (xq(this, this.en), 4 === a.length ? (uq(this, rq(a)), this.gg[a[0][1]] = a) : (uq(this, tq(a)), this.wo[a[0][1]] = a), Ko(this.K, this.$u, this.en))
};
function uq(a, b) {
    a.K.be(b);
    a.K.Kc(a.KK)
}
r.Zx = function(a) {
    var a = a.anchor,
    b = a.getAttribute("data-tip"),
    c = b.split("$"),
    d = j;
    this.K.className = "s" !== c[0] ? "goog-hovercard popover": "tooltip";
    if (b) return a.title && (a.setAttribute("data-original_title", a.title), a.removeAttribute("title")),
    d = c[1],
    "s" !== c[0] && (210 > kg(a).y ? "t" === d && (d = "b", a.setAttribute("data-tip", b.replace("$t$", "$b$"))) : (d = "t", a.setAttribute("data-tip", b.replace("$b$", "$t$")))),
    this.KK = d = new oq(a, this.EN[d], "b" === d || "t" === d),
    a = u(this.DQ, this),
    d.ss = a,
    i
};
r.DQ = function(a, b) {
    var c = this.K.f();
    E.remove(c, "top", "bottom", "left", "right");
    E.add(c, a);
    var d = wg(c),
    f = wg(this.$u),
    g = new Ob(c.offsetLeft, c.offsetTop);
    if ("t" === this.en || "b" === this.en) {
        var d = (d.width - f.width) / 2,
        k = g.x - d;
        if ("s" === this.OK) Rf(c, "left", k + "px");
        else {
            var k = y.contains(["2-5", "3-5", "3-4", "2-4"], b),
            m = $(".zh-hovercard-spinner", c)[0],
            q = I("arrow", c),
            s = I("arrow2", c),
            x = I("arrow3", c);
            m ? Rf(c, "left", g.x - d + "px") : k ? Rf(c, "left", g.x + 83 + "px") : Rf(c, "left", g.x - 70 + "px");
            var C = f.width / 2;
            q && (s && x) && (m || (k ? y.forEach([q, s, x],
            function(a) {
                Rf(a, "left", "auto");
                Rf(a, "right", C + 70 + "px")
            }) : y.forEach([q, s, x],
            function(a) {
                Rf(a, "left", C + 70 + "px")
            })))
        }
    } else Rf(c, "top", g.y - (d.height - f.height) / 2 + "px"),
    "l" === this.en && Zf(c, g.x - f.width)
};
function yq() {
    var a = {
        warning: "您的知乎用户名 " + V.NL + ' 不符合 <a href="http://www.zhihu.com/question/19791408">知乎用户名规范</a>，请您 <a href="/settings/account#rename-section">修改</a>。',
        pending: "您提交的用户名修改正在审核中，帐号暂时锁定。"
    },
    b = Lk,
    c = Kk,
    d = l;
    b ? (X(b, 4E3), d = i) : c && (a[c] && X(a[c], 4E3), d = i);
    return d
};
function zq(a) {
    T.call(this);
    $.extend(this.s = {},
    this.V, a || {})
}
w(zq, T);
r = zq.prototype;
r.V = {
    trigger: "hover",
    HF: "open",
    hideFocus: l
};
r.Rc = function() {
    return this.kg.length && this.Oc.length
};
r.h = function(a) {
    if (a) {
        var b = $(a),
        c = b.prev();
        this.kg = b;
        this.Oc = c;
        this.Lt = b.parent();
        zq.g.h.call(this, a);
        return this
    }
};
r.toggle = function() {
    this.jb() ? this.close() : this.open()
};
r.jb = function() {
    return this.kg.is(":visible")
};
r.open = function() {
    this.kg.attr("aria-hidden", "false").parent().addClass(this.s.HF);
    this.Oc.attr("aria-expanded", "true")
};
r.close = function() {
    this.kg.attr("aria-hidden", "true").parent().removeClass(this.s.HF);
    this.Oc.attr("aria-expanded", "false")
};
function Aq(a, b) {
    var c = a.kg.children().find("a"),
    d = c.size();
    b >= d ? b = 0 : -1 >= b && (b = d - 1);
    c = c.eq(b);
    a.Oc.attr("aria-activedescendant", c.attr("id"));
    c.focus();
    a.index = b
}
r.JP = function(a) {
    var b = a.keyCode;
    switch (b) {
    case 32:
        a.preventDefault();
        this.toggle();
        break;
    case 27:
    case 9:
        this.close();
        break;
    case 38:
    case 40:
        Aq(this, 38 === b ? -1 : 0)
    }
};
r.hQ = function(a) {
    var b = a.keyCode;
    switch (b) {
    case 27:
    case 9:
        this.close();
        this.Oc.focus();
        break;
    case 38:
    case 40:
        a.preventDefault(),
        Aq(this, this.index + (38 === b ? -1 : 1))
    }
};
r.p = function() {
    var a = this,
    b = this.s,
    c = this.kg,
    d = this.Oc,
    f = d.attr("id");
    f || (f = Eg(Dg.v()), d.attr("id", f), c.attr("aria-labelledby", f));
    d.attr("role") || d.attr("role", "button");
    this.Oc.attr("aria-haspopup", "true").attr("aria-activedescendant", "");
    this.kg.children().find("a").attr("tabindex", -1).attr("id", u(function(a, b) {
        return b || Eg(Dg.v())
    },
    this));
    this.kg.on("keydown", u(this.hQ, this));
    this.Oc.on("keydown", u(this.JP, this));
    c = Fl ? "click": b.trigger;
    if ("hover" === c) this.Lt.on("hover", u(function(a) {
        "mouseenter" === a.type ? this.open() : this.close()
    },
    this));
    else if ("click" === c) this.Oc.on("click", u(function(a) {
        a.preventDefault();
        this.toggle();
        this.Oc.focus()
    },
    this));
    this.Lt.on("focusout",
    function() {
        setTimeout(function() {
            a.Lt.get(0).contains(document.activeElement) || a.close()
        })
    });
    if (b.hideFocus) this.kg.children().find("a").on("click",
    function() {
        this.blur()
    })
};
function Bq(a) {
    T.call(this);
    this.options = $.extend({
        stopPropagation: i,
        MJ: "#000",
        su: 0.5,
        zK: "#666",
        yB: 0.2,
        top: 2,
        width: 6,
        right: 2,
        HJ: i
    },
    a);
    this.Hx = 0;
    this.zq = l
}
w(Bq, T);
r = Bq.prototype;
r.Z = function(a) {
    this.d = a;
    this.D = $(this.d);
    this.D.addClass("zh-scroller").css({
        position: "relative",
        overflow: "hidden"
    }).wrapInner('<div class="zh-scroller-content"></div>');
    this.D.wrapInner('<div class="zh-scroller-inner"></div>');
    this.D.append("<div class='zh-scroller-bar-container'><div>");
    this.D.append('<div class="zh-scroller-bar"></div>');
    this.he = this.D.children(".zh-scroller-inner");
    this.rk = this.D.children(".zh-scroller-bar-container");
    this.fe = this.D.children(".zh-scroller-bar");
    this.jd = this.he.children(".zh-scroller-content");
    this.Kp = this.fe[0];
    this.YN = this.he[0];
    this.content = this.jd[0];
    this.Lp = this.rk[0];
    this.he.css({
        height: "100%",
        width: "150%",
        overflow: "auto"
    });
    this.fe.css({
        position: "absolute",
        right: this.options.right,
        top: this.options.top,
        opacity: this.options.su,
        background: this.options.MJ,
        width: this.options.width,
        "border-radius": 3,
        cursor: "default"
    });
    this.rk.css({
        position: "absolute",
        right: this.options.right - 1,
        top: 0,
        height: "100%",
        width: this.options.width,
        background: this.options.zK,
        border: "1px solid #444",
        opacity: 0,
        cursor: "default",
        "border-radius": "2px"
    });
    this.ki(this.Kp, l);
    this.ki(this.Lp, l);
    this.update()
};
r.p = function() {
    Bq.g.p.call(this);
    this.Jz = new Zn(this.Ux, 50, this);
    this.options.stopPropagation && this.he.bind("mousewheel DOMMouseScroll",
    function(a) {
        var b = j;
        "mousewheel" === a.type ? b = -1 * a.originalEvent.wheelDelta: "DOMMouseScroll" === a.type && (b = 40 * a.originalEvent.detail);
        b && (a.preventDefault(), $(this).scrollTop(b + $(this).scrollTop()))
    })
};
r.lQ = function(a) {
    a.target === this.Kp && (this.zq = i, this.NJ = a.clientY, this.OJ = parseInt(this.fe.css("top"), 10)); (a.target === this.Kp || a.target === this.Lp) && this.ki(document.body, l)
};
r.nQ = function() {
    this.zq = l;
    this.ki(document.body, i)
};
r.mQ = function(a) {
    if (this.zq) {
        var b = Cq(this, this.OJ + (a.clientY - this.NJ));
        this.he.scrollTop(b)
    }
    this.Hx = a.target === this.Kp ? 2 : a.target === this.Lp ? 1 : 0
};
function Dq(a) {
    a.To && (a.fe.stop().css({
        opacity: a.options.su
    }).show(), a.Im && (clearTimeout(a.Im), a.Im = l))
}
function Eq(a, b) {
    a.Im = setTimeout(u(function() {
        this.fe.stop().fadeOut();
        this.Im = l
    },
    a), b || 0)
}
r.Ux = function() {
    var a = this.he.scrollTop(),
    b = this.jd.height(),
    c = this.he.height(),
    d = a / b * (c - 2 * this.options.top);
    Dq(this);
    this.fe.css({
        top: d + this.options.top
    });
    this.dispatchEvent(new Fq(this, a, b - a - c, a / (b - c)))
};
r.update = function() {
    var a = this.hl(this.he).height,
    b = this.hl(this.jd).height;
    a >= b ? (this.To = l, this.fe.hide()) : (this.To = i, this.fe.show());
    this.fe.css({
        height: a / b * (a - 2 * this.options.top)
    });
    this.rk.css({
        height: a - 2
    });
    this.jd.css({
        overflow: "hidden",
        width: this.D.width(),
        "min-height": "100%"
    });
    return this
};
r.hl = function(a) {
    var b = {
        height: a.height(),
        width: a.width()
    };
    if (!b.height) {
        var c = a.css("display"),
        d = a.css("position"),
        f = a.css("visibility");
        a.css({
            position: "absolute",
            display: "block",
            visibility: "hidden"
        });
        b = {
            height: a.height(),
            width: a.width()
        };
        a.css({
            position: d,
            display: c,
            visibility: f
        })
    }
    return b
};
r.DP = function(a) {
    this.scrollTo(Cq(this, a.offsetY - this.fe.height() / 2))
};
function Cq(a, b) {
    var c = a.he.height() - 2 * a.options.top - a.fe.height(),
    d = a.jd.height() - a.he.height();
    return b / c * d
}
r.scrollTop = function(a) {
    this.To && (a = a || 200, Dq(this), this.he.stop().animate({
        scrollTop: 0
    },
    a));
    return this
};
r.ki = function(a, b) {
    vg(a, !b)
};
r.scrollTo = function(a) {
    this.To && (Dq(this), this.he.stop().animate({
        scrollTop: a
    },
    200));
    return this
};
function Fq(a, b, c, d) {
    ad.call(this, "scroll", a);
    this.scrollTop = b;
    this.QY = c;
    this.RY = d
}
w(Fq, ad);
function Gq() {
    M.call(this)
}
w(Gq, M);
var Hq = le("goog.dom.SavedRange");
Gq.prototype.restore = ea(23);
function Iq(a, b, c, d, f) {
    this.Bc = !!b;
    a && this.Kc(a, d);
    this.depth = f != h ? f: this.Qb || 0;
    this.Bc && (this.depth *= -1);
    this.cq = !c
}
w(Iq, Nd);
r = Iq.prototype;
r.X = j;
r.Qb = 0;
r.wz = l;
r.Kc = function(a, b, c) {
    if (this.X = a) this.Qb = qa(b) ? b: 1 != this.X.nodeType ? 0 : this.Bc ? -1 : 1;
    qa(c) && (this.depth = c)
};
r.ug = function(a) {
    this.X = a.X;
    this.Qb = a.Qb;
    this.depth = a.depth;
    this.Bc = a.Bc;
    this.cq = a.cq
};
r.clone = function() {
    return new Iq(this.X, this.Bc, !this.cq, this.Qb, this.depth)
};
r.Yo = ea(13);
r.next = function() {
    var a;
    if (this.wz) { (!this.X || this.cq && 0 == this.depth) && e(O.Ta);
        a = this.X;
        var b = this.Bc ? -1 : 1;
        if (this.Qb == b) {
            var c = this.Bc ? a.lastChild: a.firstChild;
            c ? this.Kc(c) : this.Kc(a, -1 * b)
        } else(c = this.Bc ? a.previousSibling: a.nextSibling) ? this.Kc(c) : this.Kc(a.parentNode, -1 * b);
        this.depth += this.Qb * (this.Bc ? -1 : 1)
    } else this.wz = i; (a = this.X) || e(O.Ta);
    return a
};
r.Ti = function(a) {
    return a.X == this.X && (!this.X || a.Qb == this.Qb)
};
r.splice = function(a) {
    var b = this.X,
    c = this.Bc ? 1 : -1;
    this.Qb == c && (this.Qb = -1 * c, this.depth += this.Qb * (this.Bc ? -1 : 1));
    this.Bc = !this.Bc;
    Iq.prototype.next.call(this);
    this.Bc = !this.Bc;
    for (var c = pa(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) mc(c[d], b);
    L(b)
};
function Jq() {}
function Kq(a) {
    if (a.getSelection) return a.getSelection();
    var a = a.document,
    b = a.selection;
    if (b) {
        try {
            var c = b.createRange();
            if (c.parentElement) {
                if (c.parentElement().document != a) return j
            } else if (!c.length || c.item(0).document != a) return j
        } catch(d) {
            return j
        }
        return b
    }
    return j
}
function Lq(a) {
    for (var b = [], c = 0, d = a.aj(); c < d; c++) b.push(a.ue(c));
    return b
}
r = Jq.prototype;
r.Db = function() {
    var a = this.mc();
    return 1 == a.nodeType ? a: a.parentNode
};
function Mq(a) {
    return a.Sh() ? a.ba() : a.M()
}
function Nq(a) {
    return a.Sh() ? a.M() : a.ba()
}
function Oq(a) {
    return a.Sh() ? a.ma() : a.Ba()
}
r.Sh = p(l);
r.va = function() {
    return Ub(z ? this.mc() : this.M())
};
r.Ja = function() {
    return cc(this.va())
};
r.containsNode = function(a, b) {
    return this.rg(Pq(a), b)
};
r.Zf = ea(25);
function Qq(a, b) {
    Iq.call(this, a, b, i)
}
w(Qq, Iq);
function Rq() {}
w(Rq, Jq);
Rq.prototype.rg = function(a, b) {
    var c = Lq(this),
    d = Lq(a);
    return (b ? y.some: y.every)(d,
    function(a) {
        return y.some(c,
        function(c) {
            return c.rg(a, b)
        })
    })
};
Rq.prototype.insertNode = function(a, b) {
    b ? lc(a, this.M()) : mc(a, this.ba());
    return a
};
Rq.prototype.Yg = ea(8);
function Sq(a, b, c, d, f) {
    var g;
    a && (this.na = a, this.ta = b, this.ia = c, this.sa = d, 1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes, (b = a[b]) ? (this.na = b, this.ta = 0) : (a.length && (this.na = y.Og(a)), g = i)), 1 == c.nodeType && ((this.ia = c.childNodes[d]) ? this.sa = 0 : this.ia = c));
    Iq.call(this, f ? this.ia: this.na, f, i);
    if (g) try {
        this.next()
    } catch(k) {
        k != O.Ta && e(k)
    }
}
w(Sq, Qq);
r = Sq.prototype;
r.na = j;
r.ia = j;
r.ta = 0;
r.sa = 0;
r.$i = ea(37);
r.Zi = ea(28);
r.M = n("na");
r.ba = n("ia");
r.Qn = function() {
    return this.wz && this.X == this.ia && (!this.sa || 1 != this.Qb)
};
r.next = function() {
    this.Qn() && e(O.Ta);
    return Sq.g.next.call(this)
};
r.Yo = ea(12);
r.ug = function(a) {
    this.na = a.na;
    this.ia = a.ia;
    this.ta = a.ta;
    this.sa = a.sa;
    this.df = a.df;
    Sq.g.ug.call(this, a)
};
r.clone = function() {
    var a = new Sq(this.na, this.ta, this.ia, this.sa, this.df);
    a.ug(this);
    return a
};
function Tq(a, b) {
    a != j && this.append.apply(this, arguments)
}
r = Tq.prototype;
r.rh = "";
r.set = function(a) {
    this.rh = "" + a
};
r.append = function(a, b, c) {
    this.rh += a;
    if (b != j) for (var d = 1; d < arguments.length; d++) this.rh += arguments[d];
    return this
};
r.clear = function() {
    this.rh = ""
};
r.Sv = function() {
    return this.rh.length
};
r.toString = n("rh");
function Uq() {}
Uq.prototype.rg = function(a, b) {
    var c = b && !a.isCollapsed(),
    d = a.J;
    try {
        return c ? 0 <= this.pe(d, 0, 1) && 0 >= this.pe(d, 1, 0) : 0 <= this.pe(d, 0, 0) && 0 >= this.pe(d, 1, 1)
    } catch(f) {
        return z || e(f),
        l
    }
};
Uq.prototype.containsNode = function(a, b) {
    return this.rg(Vq(a), b)
};
Uq.prototype.Cg = ea(17);
Uq.prototype.Fd = function() {
    return new Sq(this.M(), this.ma(), this.ba(), this.Ba())
};
function Wq(a) {
    this.J = a
}
w(Wq, Uq);
function Xq(a) {
    var b = Ub(a).createRange();
    if (3 == a.nodeType) b.setStart(a, 0),
    b.setEnd(a, a.length);
    else if (Yq(a)) {
        for (var c, d = a; (c = d.firstChild) && Yq(c);) d = c;
        b.setStart(d, 0);
        for (d = a; (c = d.lastChild) && Yq(c);) d = c;
        b.setEnd(d, 1 == d.nodeType ? d.childNodes.length: d.length)
    } else c = a.parentNode,
    a = y.indexOf(c.childNodes, a),
    b.setStart(c, a),
    b.setEnd(c, a + 1);
    return b
}
function Zq(a, b, c, d) {
    var f = Ub(a).createRange();
    f.setStart(a, b);
    f.setEnd(c, d);
    return f
}
r = Wq.prototype;
r.clone = function() {
    return new this.constructor(this.J.cloneRange())
};
r.mc = function() {
    return this.J.commonAncestorContainer
};
r.M = function() {
    return this.J.startContainer
};
r.ma = function() {
    return this.J.startOffset
};
r.ba = function() {
    return this.J.endContainer
};
r.Ba = function() {
    return this.J.endOffset
};
r.pe = function(a, b, c) {
    return this.J.compareBoundaryPoints(1 == c ? 1 == b ? ga.Range.START_TO_START: ga.Range.START_TO_END: 1 == b ? ga.Range.END_TO_START: ga.Range.END_TO_END, a)
};
r.isCollapsed = function() {
    return this.J.collapsed
};
r.Ze = function() {
    return this.J.toString()
};
r.Ud = ea(33);
r.select = function(a) {
    var b = cc(Ub(this.M()));
    this.Go(b.getSelection(), a)
};
r.Go = function(a) {
    a.removeAllRanges();
    a.addRange(this.J)
};
r.Ic = ea(4);
r.insertNode = function(a, b) {
    var c = this.J.cloneRange();
    c.collapse(b);
    c.insertNode(a);
    c.detach();
    return a
};
r.Yg = ea(7);
r.collapse = function(a) {
    this.J.collapse(a)
};
function $q(a) {
    this.J = a
}
w($q, Wq);
$q.prototype.Go = function(a, b) { ! b || this.isCollapsed() ? $q.g.Go.call(this, a, b) : (a.collapse(this.ba(), this.Ba()), a.extend(this.M(), this.ma()))
};
function ar(a, b) {
    this.J = a;
    this.wq = b
}
w(ar, Uq);
var br = le("goog.dom.browserrange.IeRange");
function cr(a) {
    var b = Ub(a).body.createTextRange();
    if (1 == a.nodeType) b.moveToElementText(a),
    Yq(a) && !a.childNodes.length && b.collapse(l);
    else {
        for (var c = 0,
        d = a; d = d.previousSibling;) {
            var f = d.nodeType;
            if (3 == f) c += d.length;
            else if (1 == f) {
                b.moveToElementText(d);
                break
            }
        }
        d || b.moveToElementText(a.parentNode);
        b.collapse(!d);
        c && b.move("character", c);
        b.moveEnd("character", a.length)
    }
    return b
}
r = ar.prototype;
r.Xf = j;
r.na = j;
r.ia = j;
r.ta = -1;
r.sa = -1;
r.clone = function() {
    var a = new ar(this.J.duplicate(), this.wq);
    a.Xf = this.Xf;
    a.na = this.na;
    a.ia = this.ia;
    return a
};
r.oe = function() {
    this.Xf = this.na = this.ia = j;
    this.ta = this.sa = -1
};
r.mc = function() {
    if (!this.Xf) {
        var a = this.J.text,
        b = this.J.duplicate(),
        c = a.replace(/ +$/, ""); (c = a.length - c.length) && b.moveEnd("character", -c);
        c = b.parentElement();
        b = La(b.htmlText).length;
        if (this.isCollapsed() && 0 < b) return this.Xf = c;
        for (; b > La(c.outerHTML).length;) c = c.parentNode;
        for (; 1 == c.childNodes.length && c.innerText == (3 == c.firstChild.nodeType ? c.firstChild.nodeValue: c.firstChild.innerText) && Yq(c.firstChild);) c = c.firstChild;
        0 == a.length && (c = dr(this, c));
        this.Xf = c
    }
    return this.Xf
};
function dr(a, b) {
    for (var c = b.childNodes,
    d = 0,
    f = c.length; d < f; d++) {
        var g = c[d];
        if (Yq(g)) {
            var k = cr(g),
            m = k.htmlText != g.outerHTML;
            if (a.isCollapsed() && m ? 0 <= a.pe(k, 1, 1) && 0 >= a.pe(k, 1, 0) : a.J.inRange(k)) return dr(a, g)
        }
    }
    return b
}
r.M = function() {
    this.na || (this.na = er(this, 1), this.isCollapsed() && (this.ia = this.na));
    return this.na
};
r.ma = function() {
    0 > this.ta && (this.ta = fr(this, 1), this.isCollapsed() && (this.sa = this.ta));
    return this.ta
};
r.ba = function() {
    if (this.isCollapsed()) return this.M();
    this.ia || (this.ia = er(this, 0));
    return this.ia
};
r.Ba = function() {
    if (this.isCollapsed()) return this.ma();
    0 > this.sa && (this.sa = fr(this, 0), this.isCollapsed() && (this.ta = this.sa));
    return this.sa
};
r.pe = function(a, b, c) {
    return this.J.compareEndPoints((1 == b ? "Start": "End") + "To" + (1 == c ? "Start": "End"), a)
};
function er(a, b, c) {
    c = c || a.mc();
    if (!c || !c.firstChild) return c;
    for (var d = 1 == b,
    f = 0,
    g = c.childNodes.length; f < g; f++) {
        var k = d ? f: g - f - 1,
        m = c.childNodes[k],
        q;
        try {
            q = Vq(m)
        } catch(s) {
            continue
        }
        var x = q.J;
        if (a.isCollapsed()) if (Yq(m)) {
            if (q.rg(a)) return er(a, b, m)
        } else {
            if (0 == a.pe(x, 1, 1)) {
                a.ta = a.sa = k;
                break
            }
        } else {
            if (a.rg(q)) {
                if (!Yq(m)) {
                    d ? a.ta = k: a.sa = k + 1;
                    break
                }
                return er(a, b, m)
            }
            if (0 > a.pe(x, 1, 0) && 0 < a.pe(x, 0, 1)) return er(a, b, m)
        }
    }
    return c
}
function fr(a, b) {
    var c = 1 == b,
    d = c ? a.M() : a.ba();
    if (1 == d.nodeType) {
        for (var d = d.childNodes,
        f = d.length,
        g = c ? 1 : -1, k = c ? 0 : f - 1; 0 <= k && k < f; k += g) {
            var m = d[k];
            if (!Yq(m) && 0 == a.J.compareEndPoints((1 == b ? "Start": "End") + "To" + (1 == b ? "Start": "End"), Vq(m).J)) return c ? k: k + 1
        }
        return - 1 == k ? 0 : k
    }
    f = a.J.duplicate();
    g = cr(d);
    f.setEndPoint(c ? "EndToEnd": "StartToStart", g);
    f = f.text.length;
    return c ? d.length - f: f
}
r.Pf = ea(41);
r.isCollapsed = function() {
    return 0 == this.J.compareEndPoints("StartToEnd", this.J)
};
r.Ze = function() {
    return this.J.text
};
r.Ud = ea(32);
r.select = function() {
    this.J.select()
};
r.Ic = ea(3);
function gr(a, b, c) {
    var d;
    d = d || Sb(a.parentElement());
    var f;
    1 != b.nodeType && (f = i, b = d.j("DIV", j, b));
    a.collapse(c);
    var c = d || Sb(a.parentElement()),
    g,
    k = g = b.id;
    g || (g = b.id = fb());
    a.pasteHTML(b.outerHTML); (b = c.f(g)) && (k || b.removeAttribute("id"));
    f && (a = b.firstChild, d.DL(b), b = a);
    return b
}
r.insertNode = function(a, b) {
    var c = gr(this.J.duplicate(), a, b);
    this.oe();
    return c
};
r.Yg = ea(6);
r.collapse = function(a) {
    this.J.collapse(a);
    a ? (this.ia = this.na, this.sa = this.ta) : (this.na = this.ia, this.ta = this.sa)
};
function hr(a) {
    this.J = a
}
w(hr, Wq);
hr.prototype.Go = function(a) {
    a.collapse(this.M(), this.ma()); (this.ba() != this.M() || this.Ba() != this.ma()) && a.extend(this.ba(), this.Ba());
    0 == a.rangeCount && a.addRange(this.J)
};
function ir(a) {
    this.J = a
}
w(ir, Wq);
ir.prototype.pe = function(a, b, c) {
    return D("528") ? ir.g.pe.call(this, a, b, c) : this.J.compareBoundaryPoints(1 == c ? 1 == b ? ga.Range.START_TO_START: ga.Range.END_TO_START: 1 == b ? ga.Range.START_TO_END: ga.Range.END_TO_END, a)
};
ir.prototype.Go = function(a, b) {
    a.removeAllRanges();
    b ? a.setBaseAndExtent(this.ba(), this.Ba(), this.M(), this.ma()) : a.setBaseAndExtent(this.M(), this.ma(), this.ba(), this.Ba())
};
function jr(a) {
    return z && !Gb(9) ? new ar(a, Ub(a.parentElement())) : B ? new ir(a) : A ? new $q(a) : tb ? new hr(a) : new Wq(a)
}
function Vq(a) {
    if (z && !Gb(9)) {
        var b = new ar(cr(a), Ub(a));
        if (Yq(a)) {
            for (var c, d = a; (c = d.firstChild) && Yq(c);) d = c;
            b.na = d;
            b.ta = 0;
            for (d = a; (c = d.lastChild) && Yq(c);) d = c;
            b.ia = d;
            b.sa = 1 == d.nodeType ? d.childNodes.length: d.length;
            b.Xf = a
        } else b.na = b.ia = b.Xf = a.parentNode,
        b.ta = y.indexOf(b.Xf.childNodes, a),
        b.sa = b.ta + 1;
        a = b
    } else a = B ? new ir(Xq(a)) : A ? new $q(Xq(a)) : tb ? new hr(Xq(a)) : new Wq(Xq(a));
    return a
}
function Yq(a) {
    return ic(a) || 3 == a.nodeType
};
function kr() {}
w(kr, Jq);
function lr(a, b) {
    var c = new kr;
    c.xi = a;
    c.df = !!b;
    return c
}
function mr(a, b, c, d) {
    var f = new kr;
    f.df = nr(a, b, c, d);
    if ("BR" == a.tagName) var g = a.parentNode,
    b = y.indexOf(g.childNodes, a),
    a = g;
    "BR" == c.tagName && (g = c.parentNode, d = y.indexOf(g.childNodes, c), c = g);
    f.df ? (f.na = c, f.ta = d, f.ia = a, f.sa = b) : (f.na = a, f.ta = b, f.ia = c, f.sa = d);
    return f
}
r = kr.prototype;
r.xi = j;
r.na = j;
r.ta = j;
r.ia = j;
r.sa = j;
r.df = l;
r.clone = function() {
    var a = new kr;
    a.xi = this.xi;
    a.na = this.na;
    a.ta = this.ta;
    a.ia = this.ia;
    a.sa = this.sa;
    a.df = this.df;
    return a
};
r.Mh = p("text");
r.Qd = function() {
    return or(this).J
};
r.oe = function() {
    this.na = this.ta = this.ia = this.sa = j
};
r.aj = p(1);
r.ue = function() {
    return this
};
function or(a) {
    var b;
    if (! (b = a.xi)) {
        b = a.M();
        var c = a.ma(),
        d = a.ba(),
        f = a.Ba();
        if (z && !Gb(9)) {
            var g = b,
            k = c,
            m = d,
            q = f,
            s = l;
            1 == g.nodeType && (k > g.childNodes.length && br.log(ce, "Cannot have startOffset > startNode child count", h), k = g.childNodes[k], s = !k, g = k || g.lastChild || g, k = 0);
            var x = cr(g);
            k && x.move("character", k);
            g == m && k == q ? x.collapse(i) : (s && x.collapse(l), s = l, 1 == m.nodeType && (q > m.childNodes.length && br.log(ce, "Cannot have endOffset > endNode child count", h), m = (k = m.childNodes[q]) || m.lastChild || m, q = 0, s = !k), g = cr(m), g.collapse(!s), q && g.moveEnd("character", q), x.setEndPoint("EndToEnd", g));
            q = new ar(x, Ub(b));
            q.na = b;
            q.ta = c;
            q.ia = d;
            q.sa = f;
            b = q
        } else b = B ? new ir(Zq(b, c, d, f)) : A ? new $q(Zq(b, c, d, f)) : tb ? new hr(Zq(b, c, d, f)) : new Wq(Zq(b, c, d, f));
        b = a.xi = b
    }
    return b
}
r.mc = function() {
    return or(this).mc()
};
r.M = function() {
    return this.na || (this.na = or(this).M())
};
r.ma = function() {
    return this.ta != j ? this.ta: this.ta = or(this).ma()
};
r.ba = function() {
    return this.ia || (this.ia = or(this).ba())
};
r.Ba = function() {
    return this.sa != j ? this.sa: this.sa = or(this).Ba()
};
r.Sh = n("df");
r.rg = function(a, b) {
    var c = a.Mh();
    return "text" == c ? or(this).rg(or(a), b) : "control" == c ? (c = a.Jh(), (b ? y.some: y.every)(c,
    function(a) {
        return this.containsNode(a, b)
    },
    this)) : l
};
r.Pf = ea(40);
r.isCollapsed = function() {
    return or(this).isCollapsed()
};
r.Ze = function() {
    return or(this).Ze()
};
r.Cg = ea(16);
r.Ud = ea(31);
r.Fd = function() {
    return new Sq(this.M(), this.ma(), this.ba(), this.Ba())
};
r.select = function() {
    or(this).select(this.df)
};
r.Ic = ea(2);
r.insertNode = function(a, b) {
    var c = or(this).insertNode(a, b);
    this.oe();
    return c
};
r.Yg = ea(5);
r.Ly = function() {
    return new pr(this)
};
r.collapse = function(a) {
    a = this.Sh() ? !a: a;
    this.xi && this.xi.collapse(a);
    a ? (this.ia = this.na, this.sa = this.ta) : (this.na = this.ia, this.ta = this.sa);
    this.df = l
};
function pr(a) {
    this.QA = Mq(a);
    this.uJ = a.Sh() ? a.Ba() : a.ma();
    this.HC = Nq(a);
    this.GL = Oq(a)
}
w(pr, Gq);
pr.prototype.Uj = ea(22);
pr.prototype.m = function() {
    pr.g.m.call(this);
    this.HC = this.QA = j
};
function qr() {}
w(qr, Rq);
function rr(a) {
    var b = new qr;
    b.J = a;
    return b
}
function sr(a) {
    for (var b = Ub(arguments[0]).body.createControlRange(), c = 0, d = arguments.length; c < d; c++) b.addElement(arguments[c]);
    return rr(b)
}
r = qr.prototype;
r.J = j;
r.Ra = j;
r.Zo = j;
r.oe = function() {
    this.Zo = this.Ra = j
};
r.clone = function() {
    return sr.apply(this, this.Jh())
};
r.Mh = p("control");
r.Qd = function() {
    return this.J || document.body.createControlRange()
};
r.aj = function() {
    return this.J ? this.J.length: 0
};
r.ue = function(a) {
    a = this.J.item(a);
    return lr(Vq(a), h)
};
r.mc = function() {
    return yc.apply(j, this.Jh())
};
r.M = function() {
    return tr(this)[0]
};
r.ma = p(0);
r.ba = function() {
    var a = tr(this),
    b = y.Og(a);
    return y.find(a,
    function(a) {
        return uc(a, b)
    })
};
r.Ba = function() {
    return this.ba().childNodes.length
};
r.Jh = function() {
    if (!this.Ra && (this.Ra = [], this.J)) for (var a = 0; a < this.J.length; a++) this.Ra.push(this.J.item(a));
    return this.Ra
};
function tr(a) {
    a.Zo || (a.Zo = a.Jh().concat(), a.Zo.sort(function(a, c) {
        return a.sourceIndex - c.sourceIndex
    }));
    return a.Zo
}
r.Pf = ea(39);
r.isCollapsed = function() {
    return ! this.J || !this.J.length
};
r.Ze = p("");
r.Cg = ea(15);
r.Ud = ea(30);
r.Fd = function() {
    return new ur(this)
};
r.select = function() {
    this.J && this.J.select()
};
r.Ic = ea(1);
r.Zf = ea(24);
r.Ly = function() {
    return new vr(this)
};
r.collapse = function() {
    this.J = j;
    this.oe()
};
function vr(a) {
    this.Ra = a.Jh()
}
w(vr, Gq);
vr.prototype.Uj = ea(21);
vr.prototype.m = function() {
    vr.g.m.call(this);
    delete this.Ra
};
function ur(a) {
    a && (this.Ra = tr(a), this.na = this.Ra.shift(), this.ia = y.Og(this.Ra) || this.na);
    Iq.call(this, this.na, l, i)
}
w(ur, Qq);
r = ur.prototype;
r.na = j;
r.ia = j;
r.Ra = j;
r.$i = ea(36);
r.Zi = ea(27);
r.M = n("na");
r.ba = n("ia");
r.Qn = function() {
    return ! this.depth && !this.Ra.length
};
r.next = function() {
    this.Qn() && e(O.Ta);
    if (!this.depth) {
        var a = this.Ra.shift();
        this.Kc(a, 1, 1);
        return a
    }
    return ur.g.next.call(this)
};
r.ug = function(a) {
    this.Ra = a.Ra;
    this.na = a.na;
    this.ia = a.ia;
    ur.g.ug.call(this, a)
};
r.clone = function() {
    var a = new ur(j);
    a.ug(this);
    return a
};
function wr() {
    this.Pe = [];
    this.Ml = [];
    this.dq = this.dm = j
}
w(wr, Rq);
r = wr.prototype;
r.wa = le("goog.dom.MultiRange");
r.oe = function() {
    this.Ml = [];
    this.dq = this.dm = j
};
r.clone = function() {
    var a = new wr;
    a.Pe = y.clone(this.Pe);
    return a
};
r.Mh = p("mutli");
r.Qd = function() {
    1 < this.Pe.length && this.wa.nk("getBrowserRangeObject called on MultiRange with more than 1 range");
    return this.Pe[0]
};
r.aj = function() {
    return this.Pe.length
};
r.ue = function(a) {
    this.Ml[a] || (this.Ml[a] = lr(jr(this.Pe[a]), h));
    return this.Ml[a]
};
r.mc = function() {
    if (!this.dq) {
        for (var a = [], b = 0, c = this.aj(); b < c; b++) a.push(this.ue(b).mc());
        this.dq = yc.apply(j, a)
    }
    return this.dq
};
function xr(a) {
    a.dm || (a.dm = Lq(a), a.dm.sort(function(a, c) {
        var d = a.M(),
        f = a.ma(),
        g = c.M(),
        k = c.ma();
        return d == g && f == k ? 0 : nr(d, f, g, k) ? 1 : -1
    }));
    return a.dm
}
r.M = function() {
    return xr(this)[0].M()
};
r.ma = function() {
    return xr(this)[0].ma()
};
r.ba = function() {
    return y.Og(xr(this)).ba()
};
r.Ba = function() {
    return y.Og(xr(this)).Ba()
};
r.Pf = ea(38);
r.isCollapsed = function() {
    return 0 == this.Pe.length || 1 == this.Pe.length && this.ue(0).isCollapsed()
};
r.Ze = function() {
    return y.map(Lq(this),
    function(a) {
        return a.Ze()
    }).join("")
};
r.Cg = ea(14);
r.Ud = ea(29);
r.Fd = function() {
    return new yr(this)
};
r.select = function() {
    var a = Kq(this.Ja());
    a.removeAllRanges();
    for (var b = 0,
    c = this.aj(); b < c; b++) a.addRange(this.ue(b).Qd())
};
r.Ic = ea(0);
r.Ly = function() {
    return new zr(this)
};
r.collapse = function(a) {
    if (!this.isCollapsed()) {
        var b = a ? this.ue(0) : this.ue(this.aj() - 1);
        this.oe();
        b.collapse(a);
        this.Ml = [b];
        this.dm = [b];
        this.Pe = [b.Qd()]
    }
};
function zr(a) {
    this.Ny = y.map(Lq(a),
    function(a) {
        return a.Ly()
    })
}
w(zr, Gq);
zr.prototype.Uj = ea(20);
zr.prototype.m = function() {
    zr.g.m.call(this);
    y.forEach(this.Ny,
    function(a) {
        a.w()
    });
    delete this.Ny
};
function yr(a) {
    a && (this.Qf = y.map(xr(a),
    function(a) {
        return O.Mc(a)
    }));
    a = a ? this.M() : j;
    Iq.call(this, a, l, i)
}
w(yr, Qq);
r = yr.prototype;
r.Qf = j;
r.Mk = 0;
r.$i = ea(35);
r.Zi = ea(26);
r.M = function() {
    return this.Qf[0].M()
};
r.ba = function() {
    return y.Og(this.Qf).ba()
};
r.Qn = function() {
    return this.Qf[this.Mk].Qn()
};
r.next = function() {
    try {
        var a = this.Qf[this.Mk],
        b = a.next();
        this.Kc(a.X, a.Qb, a.depth);
        return b
    } catch(c) {
        return (c !== O.Ta || this.Qf.length - 1 == this.Mk) && e(c),
        this.Mk++,
        this.next()
    }
};
r.ug = function(a) {
    this.Qf = y.clone(a.Qf);
    yr.g.ug.call(this, a)
};
r.clone = function() {
    var a = new yr(j);
    a.ug(this);
    return a
};
function Ar(a) {
    return (a = Kq(a || window)) && Br(a)
}
function Br(a) {
    var b, c = l;
    if (a.createRange) try {
        b = a.createRange()
    } catch(d) {
        return j
    } else if (a.rangeCount) {
        if (1 < a.rangeCount) {
            b = new wr;
            for (var c = 0,
            f = a.rangeCount; c < f; c++) b.Pe.push(a.getRangeAt(c));
            return b
        }
        b = a.getRangeAt(0);
        c = nr(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    } else return j;
    return Cr(b, c)
}
function Cr(a, b) {
    return a && a.addElement ? rr(a) : lr(jr(a), b)
}
function Pq(a) {
    return lr(Vq(a), h)
}
function Dr(a, b) {
    return mr(a, b, a, b)
}
function Er(a) {
    if (a = Kq(a || window)) if (a.empty) try {
        a.empty()
    } catch(b) {} else try {
        a.removeAllRanges()
    } catch(c) {}
}
function nr(a, b, c, d) {
    if (a == c) return d < b;
    var f;
    if (1 == a.nodeType && b) if (f = a.childNodes[b]) a = f,
    b = 0;
    else if (uc(a, c)) return i;
    if (1 == c.nodeType && d) if (f = c.childNodes[d]) c = f,
    d = 0;
    else if (uc(c, a)) return l;
    return 0 < (vc(a, c) || b - d)
};
function Fr(a) {
    return (a = a.exec(pb())) ? a[1] : ""
}
var mo = function() {
    if (Ni) return Fr(/Firefox\/([0-9.]+)/);
    if (z || tb) return zb;
    if (Si) return Fr(/Chrome\/([0-9.]+)/);
    if (Ti) return Fr(/Version\/([0-9.]+)/);
    if (Pi || Qi) {
        var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(pb());
        if (a) return a[1] + "." + a[2]
    } else {
        if (Ri) return (a = Fr(/Android\s+([0-9.]+)/)) ? a: Fr(/Version\/([0-9.]+)/);
        if (Oi) return Fr(/Camino\/([0-9.]+)/)
    }
    return ""
} ();
var Gr = z && !Gb(9),
Hr = A || B || tb || z && Gb(9),
Ir = i,
Jr = B || l,
Kr = z || B || tb,
Lr = A || B;
B && D("534.16");
var Mr = A && i,
Nr = A || B || tb,
Or = A || tb;
z && D("7.0");
var Pr = A && D("1.8") || B || tb,
Qr = B || z && D("9");
z || tb || A && D("1.9");
var Rr = A || B && !D("527"),
Sr = z || tb,
Tr = z || B && D("525"),
Ur = B && !D("531"),
Vr = B && !D("528");
A && D("1.9") || z || tb || B && D("531");
var Wr = z || A || tb,
Xr = A || B && !D("526"),
Yr = z || tb,
Zr = !z && !tb,
$r = !B;
Si && 0 <= db(mo, "4") || Ti && D("533") || A && D("2.0") || z && D("10");
var as = tb && D("11.10");
Si && db(mo, "12");
function bs(a, b, c) {
    this.fF = a;
    this.hS = !!c;
    a && !b && this.next()
}
w(bs, Nd);
bs.prototype.next = function() {
    var a = this.fF;
    a || e(O.Ta);
    this.fF = this.hS ? a.previousSibling: a.nextSibling;
    return a
};
function cs(a, b, c) {
    la(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
    bs.call(this, a.childNodes[c], i, b)
}
w(cs, bs);
var ds = F.xh("ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DETAILS", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "NAV", "OPTGROUP", "OPTION", "P", "PRE", "SECTION", "SUMMARY", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"),
es = F.xh("IMG", "IFRAME", "EMBED");
function fs(a) {
    for (var b; b = !a || 1 != a.nodeType ? j: gs(O.filter(new cs(a, l), hs));) a = b;
    return a
}
function gs(a) {
    try {
        return a.next()
    } catch(b) {
        return j
    }
}
function hs(a) {
    return 1 == a.nodeType || 3 == a.nodeType && !Ka(a.nodeValue)
}
function is(a) {
    return a.length || a.childNodes.length
};
var js = F.xh("text", "file", "url");
function ks(a) {
    Dr(fs(a), 0).select()
}
function ls(a, b) {
    var c = a.parentNode,
    d = y.indexOf(c.childNodes, a) + (b ? 0 : 1),
    c = ms(c, d, b);
    z && (D("9") && 1 == c.X.nodeType && "HR" == c.X.tagName) && (d = c.X, c.X = d.parentNode, c.offset = y.indexOf(c.X.childNodes, d) + (b ? 0 : 1));
    Dr(c.X, c.offset).select()
}
function ns(a, b) {
    this.X = a;
    this.offset = b
}
function ms(a, b, c) {
    for (; 1 == a.nodeType;) {
        var d = a.childNodes[b];
        if (!d && !a.lastChild) break;
        d ? (a = d.previousSibling, c && a ? b = is(a) : (a = d, b = 0)) : (a = a.lastChild, b = is(a))
    }
    return new ns(a, b)
};
function os(a) {
    var b = j;
    try {
        b = a.rules || a.cssRules
    } catch(c) {
        15 == c.code && (c.styleSheet = a, e(c))
    }
    return b
}
function ps(a) {
    var b = [],
    a = a || document.styleSheets,
    c = la(h) ? h: l;
    if (a.imports && a.imports.length) for (var d = 0,
    f = a.imports.length; d < f; d++) y.extend(b, ps(a.imports[d]));
    else if (a.length) {
        d = 0;
        for (f = a.length; d < f; d++) y.extend(b, ps(a[d]))
    } else {
        var g = os(a);
        if (g && g.length) for (var d = 0,
        f = g.length,
        k; d < f; d++) k = g[d],
        k.styleSheet && y.extend(b, ps(k.styleSheet))
    } (a.type || a.rules || a.cssRules) && (!a.disabled || c) && b.push(a);
    return b
};
var qs = /a(:(link|visited|active|hover))?/;
function rs() {
    this.jn = "";
    this.Tg = []
}
rs.prototype.clone = function() {
    var a = new rs;
    a.Tg = this.Tg.concat();
    a.jn = this.jn;
    return a
};
function ss(a, b, c) {
    var d = [],
    f;
    for (f in b) {
        var g = b[f];
        g && d.push(f, ":", g, c ? " !important": "", ";")
    }
    a.jn = d.join("")
}
var ts = /(^|;|{)\s*color:([^;]+);/g;
function us(a) {
    this.ky = [];
    this.nu = {};
    if (a) {
        for (var b = [], a = a.split(/\s+/gm), c = 0; c < a.length; c++) if (a[c]) {
            var d = new vs(a[c]);
            b.push(d)
        }
        this.ai = b
    }
}
function vs(a) {
    var b = ws[a];
    if (b) return b;
    for (var b = a.match(/[#\.]/) ? a.split(/(?=[#\.])/) : [a], c = {},
    d = 0; d < b.length; d++) {
        var f = b[d];
        "." == f.charAt(0) ? c.className = f.substring(1, f.length) : "#" == f.charAt(0) ? c.id = f.substring(1, f.length) : c.tagName = f.toUpperCase()
    }
    this.QD = a;
    this.WO = c;
    this.hH = {};
    ws[a] = this
}
var ws = {};
function xs(a, b) {
    var c = b.uid,
    d = a.hH[c];
    if ("undefined" != typeof d) return d;
    var f = a.WO,
    d = f.tagName,
    g = f.className,
    f = f.id,
    k = i;
    d && "*" != d && d != b.nodeName ? k = l: f && f != b.id ? k = l: g && !b.iK[g] && (k = l);
    return a.hH[c] = k
}
function ys(a) {
    var b = ta(a),
    c = zs[b];
    if (c) return c;
    c = [];
    do {
        var d = {
            id: a.id,
            nodeName: a.nodeName
        };
        d.uid = ta(d);
        var f = {};
        if (a.className) for (var g = E.get(a), k = 0; k < g.length; k++) f[g[k]] = 1;
        d.iK = f;
        c.unshift(d)
    } while ( a = a . parentNode );
    this.gF = c;
    this.uid = ta(this);
    zs[b] = this
}
var zs = {},
As = {},
Bs = "color visibility quotes list-style-type list-style-image list-style-position list-style page-break-inside orphans widows font-family font-style font-variant font-weight text-indent text-align text-transform white-space caption-side border-collapse border-spacing empty-cells cursor".split(" "),
Cs = "font-family font-size font-weight font-variant font-style color text-align text-decoration text-indent text-transform letter-spacing white-space word-spacing".split(" ");
function Ds() {
    M.call(this);
    this.Wb = this.yp()
}
w(Ds, zd);
r = Ds.prototype;
r.o = j;
r.GJ = i;
r.Ob = le("goog.editor.Plugin");
r.FH = function() {
    this.o && (this.disable(this.o), this.o = j)
};
r.enable = function(a) {
    this.o == a ? this.Wb = i: this.Ob.log(ce, "Trying to enable an unregistered field with this plugin.", h)
};
r.disable = function(a) {
    this.o == a ? this.Wb = l: this.Ob.log(ce, "Trying to disable an unregistered field with this plugin.", h)
};
r.isEnabled = function(a) {
    return this.o == a ? this.Wb: l
};
r.yp = nf;
r.yO = nf;
r.m = function() {
    this.o && this.FH(this.o);
    Ds.g.m.call(this)
};
var Es = F.im({
    ow: 1,
    GM: 2,
    Yq: 3,
    gj: 4,
    Zq: 5,
    execCommand: 6,
    queryCommandValue: 7,
    XF: 8,
    kK: 10,
    jK: 11
}),
Fs = F.xh(8, 10, 11);
Ds.prototype.execCommand = function(a, b) {
    var c = this.yO(a);
    c || (A && Gs(this.o, i, i), this.o.yh());
    try {
        var d = this.Ve.apply(this, arguments)
    } finally {
        c || (this.o.Se(), Hs(this.o))
    }
    return d
};
Ds.prototype.De = p(l);
function Is(a, b, c, d, f) {
    this.AC = a;
    this.sz = b;
    this.Pp = c;
    this.FC = d;
    this.Cv = f || {}
}
function Js(a, b) {
    this.pU = a;
    this.JB = b
}
function Ks(a, b, c, d) {
    var f = [];
    a.Pp && a.sz && f.push("<!DOCTYPE HTML>");
    f.push('<html style="background:none transparent;min-width:0;');
    a.Pp && f.push("height:", a.FC ? "100%": "auto");
    f.push('">');
    f.push("<head><style>");
    c && c.JB && f.push(c.JB);
    A && a.sz && f.push(" img {-moz-force-broken-image-icon: 1;}");
    f.push("</style></head>");
    f.push('<body g_editable="true" hidefocus="true" ');
    Ir && f.push("contentEditable ");
    f.push('class="editable ');
    f.push('" id="', a.AC, '" style="min-width:0;');
    A && a.Pp && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", a.sz ? "100%": "auto"), a.FC ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
    tb && f.push(";outline:hidden");
    for (var g in a.Cv) f.push(";" + g + ":" + a.Cv[g]);
    f.push('">', b, "</body></html>");
    a = f.join("");
    d = d.contentDocument || d.contentWindow.document;
    d.open();
    d.write(a);
    d.close()
};
function Ls(a, b) {
    M.call(this);
    this.Eg = this.id = a;
    this.Ya = j;
    this.Hc = {};
    this.oj = {};
    for (var c in Es) this.oj[c] = [];
    this.Lk = "";
    this.ek = {};
    this.ek[Ms] = 1;
    this.ek[Ns] = 1;
    this.dx = this.Dr = l;
    this.sq = new dm(this.cC, Os, this);
    this.oq = {};
    for (var d in Ps) this.oq[Ps[d]] = 0;
    A && (this.le = new dm(this.Bn, Qs, this));
    this.Xb = new me(this);
    this.qU = [];
    this.yj = Rs;
    this.Fl = Sb(b || document);
    this.yc = this.Fl.f(this.id);
    this.Dk = this.Fl.Ja()
}
w(Ls, zd);
Ls.prototype.field = j;
Ls.prototype.yc = j;
Ls.prototype.Ob = le("goog.editor.Field");
var Ms = "change",
Ns = "delayedchange",
Ps = {
    LU: "cvc",
    AV: "load",
    KW: "unload",
    CU: "beforechange",
    JU: Ms,
    QU: Ns,
    DU: "beforefocus",
    ZU: "focus",
    FU: "blur",
    EU: "beforetab",
    nV: "ifrsz",
    mW: "selectionchange"
},
Rs = 0,
Ss = j;
r = Ls.prototype;
r.Fg = l;
r.LH = l;
r.Dt = l;
r.f = n("field");
r.addListener = function(a, b, c, d) {
    var f = this.f();
    Mr && (f && this.ic()) && (f = f.ownerDocument);
    this.Xb.c(f, a, b, c, d)
};
var Qs = 15,
Os = 250;
Ls.prototype.ic = of;
Ls.prototype.Pn = of;
Ls.prototype.OG = nf;
var Ts = {
    46 : i,
    8 : i
};
z || (Ts[9] = i);
var Us = {
    86 : i,
    88 : i
};
z && (Ts[229] = i);
function Vs(a) {
    var b = !(a.ctrlKey || a.metaKey) && a.keyCode in Ts;
    return (a.ctrlKey || a.metaKey) && a.keyCode in Us || b
}
function Ws(a, b) {
    a.yj = 2;
    a.field = b;
    a.Ya = Sb(b);
    a.Dr = l;
    a.dx = l;
    b.setAttribute("g_editable", "true")
}
Ls.prototype.Mu = function() {
    this.Xb && this.Xb.Ac();
    if ((Pi || Qi) && this.ic() && this.OG()) {
        try {
            var a = this.Ya.Ja();
            a.removeEventListener("keydown", this.Nm, l);
            a.removeEventListener("touchend", this.Nm, l)
        } catch(b) {}
        delete this.Nm
    }
    if (tb && this.ic()) {
        try {
            a = this.Ya.Ja(),
            a.removeEventListener("focus", this.zu, l),
            a.removeEventListener("blur", this.yu, l)
        } catch(c) {}
        delete this.zu;
        delete this.yu
    }
    this.le && this.le.stop();
    this.sq.stop()
};
Ls.prototype.m = function() { (1 == this.yj || this.wd()) && this.Ob.nk("Disposing a field that is in use.");
    this.yc && this.execCommand("clearlorem");
    this.yj = Rs;
    for (var a in this.Hc) {
        var b = this.Hc[a];
        b.yp() || b.disable(this)
    }
    this.Ya = this.field = j;
    this.Mu();
    this.Yk && (sd(this.Yk), this.Yk = j);
    this.Fl = j;
    this.Xb && (this.Xb.w(), this.Xb = j);
    for (; a = this.qU.pop();) a.w();
    Ss == this.id && (Ss = j);
    for (var c in this.Hc) a = this.Hc[c],
    a.GJ && a.w();
    delete this.Hc;
    Ls.g.m.call(this)
};
var Xs = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
Ls.prototype.cz = function() {
    if (Jr || !this.ic()) this.Xb.c(this.f(), "DOMSubtreeModified", this.pw);
    else {
        var a = this.Ya.va();
        this.Xb.c(a, Xs, this.pw, i);
        this.Xb.c(a, "DOMAttrModified", u(this.cD, this, this.pw), i)
    }
};
function Ys(a, b) {
    if (9 == b.keyCode && !a.dispatchEvent({
        type: "beforetab",
        shiftKey: b.shiftKey,
        altKey: b.altKey,
        ctrlKey: b.ctrlKey
    }) || A && b.metaKey && (37 == b.keyCode || 39 == b.keyCode)) return b.preventDefault(),
    l;
    var c;
    if (! (c = b.charCode)) c = Vs(b) ? i: !(!A || b.ctrlKey || b.metaKey || A && !b.charCode);
    a.$v = c;
    a.$v && a.yh();
    return i
}
var Zs = {
    8 : 1,
    9 : 1,
    13 : 1,
    33 : 1,
    34 : 1,
    35 : 1,
    36 : 1,
    37 : 1,
    38 : 1,
    39 : 1,
    40 : 1,
    46 : 1
},
$s = {
    65 : i,
    86 : i,
    88 : i
},
at = {
    8 : 1,
    9 : 1,
    13 : 1,
    27 : 1,
    33 : 1,
    34 : 1,
    37 : 1,
    38 : 1,
    39 : 1,
    40 : 1
};
r = Ls.prototype;
r.On = function(a, b) {
    for (var c = this.oj[a], d = y.slice(arguments, 1), f = 0; f < c.length; ++f) {
        var g = c[f];
        if ((g.isEnabled(this) || Fs[a]) && g[Es[a]].apply(g, d)) return i
    }
    return l
};
r.kO = function(a, b) {
    for (var c = this.oj[a], d = y.slice(arguments, 1), f = 0; f < c.length; ++f) {
        var g = c[f]; (g.isEnabled(this) || Fs[a]) && g[Es[a]].apply(g, d)
    }
};
r.Cs = function(a, b, c) {
    for (var d = this.oj[a], f = y.slice(arguments, 1), g = 0; g < d.length; ++g) {
        var k = d[g];
        if (k.isEnabled(this) || Fs[a]) f[0] = k[Es[a]].apply(k, f)
    }
    return f[0]
};
function bt(a, b, c) {
    var d = {},
    a = a.Cs(8, b || "", d);
    Rf(c, d);
    c.innerHTML = a
}
r.$e = function(a) { (A || Ys(this, a)) && !this.On(1, a) && Tr && ct(this, a)
};
r.HM = function(a) {
    if (A) {
        if (!Ys(this, a)) return
    } else this.$v = i,
    this.yh(); ! this.On(2, a) && !Tr && ct(this, a)
};
r.IM = function(a) { ! A && (this.$v || Vs(a)) && this.Bn();
    this.On(3, a);
    dt(this, "selectionchange") || (Zs[a.keyCode] || (a.ctrlKey || a.metaKey) && $s[a.keyCode]) && this.GG.start()
};
function ct(a, b) {
    if (!b.altKey) {
        var c = mb ? b.metaKey: b.ctrlKey;
        if (c || at[b.keyCode]) {
            var d = b.charCode || b.keyCode;
            17 != d && a.On(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault()
        }
    }
}
r.execCommand = function(a, b) {
    for (var c = arguments,
    d, f = this.oj[6], g = 0; g < f.length; ++g) {
        var k = f[g];
        if (k.isEnabled(this) && k.De(a)) {
            d = k.execCommand.apply(k, c);
            break
        }
    }
    return d
};
r.queryCommandValue = function(a) {
    var b = this.wd() && this.Ce;
    if (t(a)) return this.xs(a, b);
    for (var c = {},
    d = 0; d < a.length; d++) c[a[d]] = this.xs(a[d], b);
    return c
};
r.xs = function(a, b) {
    for (var c = this.oj[7], d = 0; d < c.length; ++d) {
        var f = c[d];
        if (f.isEnabled(this) && f.De(a) && (b || f.yp())) return f.queryCommandValue(a)
    }
    return b ? j: l
};
r.cD = function(a, b) {
    if (!dt(this, Ms)) {
        var c = b.Yb;
        try {
            if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) return
        } catch(d) {
            return
        }
        c.prevValue != c.newValue && a.call(this, c)
    }
};
r.pw = function(a) {
    dt(this, Ms) || (a = a.QC ? a.Yb: a, a.target.firebugIgnore || (this.dx = this.Dr = i, this.le.start()))
};
r.Wq = function() {
    z && this.execCommand("clearlorem", i);
    A && this.pv();
    this.Se()
};
function et(a) {
    var b;
    return a.ic() && (b = a.Ya) ? (a = b.Ja()) && a.frameElement: j
}
function ft(a) {
    return (a = a.Ya && a.Ya.Ja()) && Ar(a)
}
function Hs(a, b, c) {
    if (!dt(a, "selectionchange")) {
        var d = ft(a),
        d = d && d.Db();
        a.Ce = !!d && uc(a.f(), d);
        a.dispatchEvent("cvc");
        a.dispatchEvent({
            type: "selectionchange",
            AY: b && b.type
        });
        a.On(4, b, c)
    }
}
r.dN = function() {
    var a = this.FG;
    this.FG = j;
    Hs(this, h, a)
};
r.yh = function() {
    dt(this, "beforechange") || this.dispatchEvent("beforechange")
};
function Gs(a, b, c) {
    b && (a.le && em(a.le), a.ek[Ms] = 1);
    c && (gt(a), a.ek[Ns] = 1)
}
function ht(a, b, c) { ! b && a.le && em(a.le);
    a.ek[Ms] = 0;
    a.ek[Ns] = 0;
    b && a.Bn();
    c && a.cC()
}
function dt(a, b) {
    return !! a.ek[b] || a.oq[b] && 500 >= Aa() - a.oq[b]
}
r.Se = function(a) {
    ht(this, i, a)
};
r.Bn = function() {
    dt(this, Ms) || (this.le && this.le.stop(), this.dx = this.Dr = i, dt(this, Ns) || this.sq.start())
};
r.cC = function() {
    dt(this, Ns) || (this.sq.stop(), this.Dr = l, this.dispatchEvent(Ns))
};
function gt(a) {
    a.le && em(a.le);
    em(a.sq)
}
r.pv = function() {
    this.bC();
    this.dC()
};
r.bC = function() {
    dt(this, "beforefocus") || (this.execCommand("clearlorem", i), this.dispatchEvent("beforefocus"))
};
r.dC = function() {
    if (!dt(this, "focus")) {
        Ss = this.id;
        this.Ce = i;
        this.dispatchEvent("focus");
        if (A) {
            var a = this.f(),
            b = ft(this);
            if (b) {
                var c = Nq(b);
                0 == Oq(b) && (!c || c == a || "BODY" == c.tagName) && ks(a)
            }
        } ! Kr && this.ic() && this.Ya.Ja().parent.getSelection().removeAllRanges()
    }
};
r.vq = function() {
    dt(this, "blur") || (Ss == this.id && (Ss = j), this.Ce = l, this.dispatchEvent("blur"))
};
function it(a) {
    Jc(a.target, "A") && a.preventDefault()
}
r.cj = function(a) {
    Ss = this.id;
    if (z) {
        var b = a.target;
        b && ("A" == b.tagName && a.ctrlKey) && this.Fl.Ja().open(b.href)
    }
    this.Dt = i
};
r.gw = function() {
    this.Dt = l
};
r.iD = function(a) {
    if (!this.LH || this.Dt) this.Dt = l,
    Hs(this, a),
    z && (this.FG = a.target, this.GG.start())
};
r.OM = function(a) {
    Hs(this, a)
};
r.bl = function() {
    if (this.queryCommandValue("usinglorem")) return " ";
    if (!this.wd()) {
        var a = this.yc;
        a || this.Ob.log(be, "Couldn't get the field element to read the contents", h);
        return a.innerHTML
    }
    var b = this.f(),
    a = b.cloneNode(l),
    b = b.innerHTML;
    z && b.match(/^\s*<script/i) && (b = " " + b);
    a.innerHTML = b;
    this.kO(11, a);
    return this.Cs(10, a.innerHTML)
};
r.be = function(a, b, c, d) {
    if (1 == this.yj) this.Ob.log(ce, "Can't set html while loading Trogedit", h);
    else {
        d && this.execCommand("clearlorem");
        b && a && (b = "<p>" + b + "</p>");
        c && Gs(this, l, i);
        a = b;
        if (b = this.f()) {
            if (this.ic() && B) for (var f = b.ownerDocument.getElementsByTagName("HEAD"), g = f.length - 1; 1 <= g; --g) f[g].parentNode.removeChild(f[g])
        } else b = this.yc;
        b && bt(this, a, b);
        d && this.execCommand("updatelorem");
        this.wd() && (c ? (A && em(this.le), ht(this)) : this.Se())
    }
};
r.Qz = function() {
    var a = this.Ya.va();
    a.designMode = "on";
    Pr && a.execCommand("styleWithCSS", l, l)
};
r.SD = function() {
    this.Lk && jt(this) && tg(this.Lk, this.f())
};
r.wd = function() {
    return 2 == this.yj
};
r.focus = function() {
    if (!Ir && this.ic()) this.Ya.Ja().focus();
    else {
        if (tb) var a = this.Dk.pageXOffset,
        b = this.Dk.pageYOffset;
        this.f().focus();
        tb && this.Dk.scrollTo(a, b)
    }
};
r.Jf = function() { (Gr || B) && kt(this);
    this.focus()
};
function kt(a) {
    var b = a.f();
    if (b) {
        var c = fs(b);
        b == c ? Dr(b, 0).select() : ls(c, i);
        Hs(a)
    }
}
r.zd = function(a) {
    this.yj = 1;
    var b = this.yc;
    this.nodeName = b.nodeName;
    this.PY = b.className;
    this.cssText = b.style.cssText;
    b.className += " editable";
    this.vx(a)
};
r.vx = function(a) {
    var b = this.yc;
    if (b) {
        var b = b.innerHTML,
        c = {},
        b = this.Cs(8, b, c),
        d = this.Fl.j("IFRAME", this.XC());
        if (jt(this)) {
            var f = u(this.ED, this, d, b, c);
            this.Yk = N(d, "load", f, i);
            a && (d.src = a)
        }
        this.aB(d);
        jt(this) || this.ED(d, b, c)
    }
};
r.Xq = function() {
    z && Er(this.Ya.Ja());
    Ss != this.id && this.execCommand("updatelorem");
    if ((Pi || Qi) && this.ic() && this.OG()) {
        var a = this.Ya.Ja();
        this.Nm = u(a.focus, a);
        a.addEventListener("keydown", this.Nm, l);
        a.addEventListener("touchend", this.Nm, l)
    }
    tb && this.ic() ? (this.zu = u(this.pv, this), this.yu = u(this.vq, this), a = this.Ya.Ja(), a.addEventListener("focus", this.zu, l), a.addEventListener("blur", this.yu, l)) : (Sr ? (this.addListener("focus", this.dC), this.addListener(cd, this.bC)) : this.addListener("focus", this.pv), this.addListener("blur", this.vq, A));
    if (A) this.cz();
    else {
        this.addListener(["beforecut", "beforepaste", "drop", "dragend"], this.yh);
        var b = this.Se,
        c;
        c = c || 0;
        this.addListener(["cut", "paste"],
        function() {
            return b.apply(this, Array.prototype.slice.call(arguments, 0, c))
        });
        this.addListener("drop", this.Wq)
    }
    this.addListener(B ? "dragend": "dragdrop", this.Wq);
    this.addListener("keydown", this.$e);
    this.addListener("keypress", this.HM);
    this.addListener("keyup", this.IM);
    this.GG = new dm(this.dN, 250, this);
    Qr && this.addListener("click", it);
    this.addListener("mousedown", this.cj);
    this.LH ? (this.Xb.c(this.Ya.va(), "mouseup", this.iD), this.addListener("dragstart", this.gw)) : this.addListener("mouseup", this.iD);
    this.addListener("mouseover", this.OM);
    this.SD();
    ht(this);
    this.Ob.info("Dispatching load " + this.id);
    this.dispatchEvent("load");
    for (var d in this.Hc) this.Hc[d].enable(this)
};
function jt(a) {
    if (!la(a.gx) && (a.gx = l, z && a.ic())) {
        for (var b = a.Fl.Ja(); b != b.parent;) try {
            b = b.parent
        } catch(c) {
            break
        }
        b = b.location;
        a.gx = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
    }
    return a.gx
}
r.aB = function(a) {
    var b = this.yc;
    a.className = b.className;
    a.id = b.id;
    oc(a, b)
};
r.Ov = function(a) {
    var b = Nc(Sb(this.yc));
    return new Is(this.id, b, l, l, a)
};
r.YH = function(a, b, c) {
    c = this.Ov(c);
    jt(this) ? (a = (a.contentDocument || a.contentWindow.document).body, Ir && (a.contentEditable = i), a.className = "editable", a.setAttribute("g_editable", i), a.hideFocus = i, a.id = c.AC, Rf(a, c.Cv), a.innerHTML = b) : Ks(c, b, new Js(this.f(), this.Lk), a)
};
r.ED = function(a, b, c) {
    this.Yk && (sd(this.Yk), this.Yk = j);
    a.QW = "true";
    this.YH(a, b, c);
    Ws(this, (a.contentDocument || a.contentWindow.document).body); ! Ir && this.ic() && this.Qz();
    this.Xq()
};
r.XC = function() {
    var a = "padding:0;" + this.yc.style.cssText;
    Ga(a, ";") || (a += ";");
    a += "background-color:white;";
    z && (a += "overflow:visible;");
    return {
        frameBorder: 0,
        style: a
    }
};
function lt(a, b) {
    Ls.call(this, a, b)
}
var mt;
w(lt, Ls);
r = lt.prototype;
r.Ob = le("goog.editor.SeamlessField");
r.YD = l;
r.pO = l;
r.Pn = n("YD");
r.kD = function() {
    dt(this, Ms) || nt(this)
};
r.qz = function() {
    if (this.Xo ? 0 : this.Xo = i) {
        var a = l,
        b = et(this);
        if (b) {
            var c, d = et(this),
            f = d.contentDocument.body;
            c = f.parentNode;
            0 === parseInt(Uf(d, "height"), 10) && Rf(d, "height", "1px");
            if (Nc(Sb(f))) d = c.offsetHeight;
            else if (d = c.scrollHeight, c.clientHeight != c.offsetHeight) {
                c = d;
                if (! (d = mt)) d = document.createElement("div"),
                d.style.cssText = "overflow:auto;position:absolute;top:0;width:100px;height:100px",
                f = document.createElement("div"),
                ng(f, "200px", "200px"),
                d.appendChild(f),
                document.body.appendChild(d),
                f = d.offsetWidth - d.clientWidth,
                L(d),
                d = mt = f;
                d = c + d
            }
            c = d;
            this.gP && (c = Math.max(c, this.gP));
            parseInt(Uf(b, "height"), 10) != c && (b.style.height = c + "px", a = i)
        }
        this.Xo = l;
        a && this.dispatchEvent("ifrsz")
    }
};
function nt(a) {
    if (a.Xo ? 0 : a.Xo = i) {
        var b = et(a),
        c = a.f(),
        d = l;
        if (b && c) {
            var f, g = b.parentNode,
            k = g.offsetWidth;
            parseInt(Uf(b, "width"), 10) != k && (f = zg(c), b.style.width = k + "px", c.style.width = k - f.left - f.right + "px", d = i);
            g = g.offsetHeight;
            a.Pn() && parseInt(Uf(b, "height"), 10) != g && (f || (f = zg(c)), b.style.height = g + "px", c.style.height = g - f.top - f.bottom + "px", d = i)
        }
        a.Xo = l;
        d && a.dispatchEvent("ifrsz")
    }
}
function ot(a) {
    a.f() && (nt(a), a.Pn() || a.qz())
}
r.Dw = "";
var pt = l;
r = lt.prototype;
r.ic = function() {
    return ! Ir
};
r.cz = function() {
    lt.g.cz.call(this);
    if (this.ic()) {
        var a = et(this).ownerDocument;
        this.Xb.c(a, Xs, this.kD, i);
        this.HO = pd(this.Ya.Ja(), "load", this.qz, i, this);
        this.Xb.c(a, "DOMAttrModified", u(this.cD, this, this.kD), i)
    }
};
r.Bn = function() {
    dt(this, Ms) || (lt.g.Bn.call(this), this.ic() && this.qz())
};
r.vq = function() {
    if (!dt(this, "blur") && (lt.g.vq.call(this), !Ir && !Kr)) {
        var a = this.Ya.Ja(),
        b = l;
        sd(this.wE);
        this.wE = pd(a.document.body, "dragover",
        function() {
            b = i
        });
        ga.setTimeout(u(function() {
            if (!b && this.Ya) {
                var a = ft(this),
                d = this.Ya.Ja();
                Er(d);
                a && (a.collapse(i), a.select())
            }
        },
        this), 0)
    }
};
r.Qz = function() {
    lt.g.Qz.call(this);
    var a = this.Ya.va();
    a.execCommand("enableInlineTableEditing", l, "false");
    a.execCommand("enableObjectResizing", l, "false")
};
r.SD = function() { ! this.ic() && !pt && (this.Lk && tg(this.Lk, this.f()), pt = i)
};
r.vx = function(a) {
    if (this.ic()) lt.g.vx.call(this, a);
    else if (a = this.yc) Ws(this, a),
    a.contentEditable = i,
    bt(this, a.innerHTML, a),
    this.Xq()
};
r.Xq = function() {
    if (this.ic()) {
        var a = this;
        ga.setTimeout(function() {
            ot(a)
        },
        0)
    }
    lt.g.Xq.call(this)
};
r.XC = function() {
    return {
        frameBorder: 0,
        style: "padding:0;"
    }
};
r.aB = function(a) {
    if (!this.pO) {
        var b = this.yc;
        b && (this.YD = "auto" == Xf(b, "overflowY"))
    }
    var b = this.yc,
    c = Sb(b),
    d = b.style.width,
    f = b.style.height;
    Rf(b, "visibility", "hidden");
    var c = c.j("DIV", {
        style: "height:0;clear:both",
        innerHTML: "&nbsp;"
    }),
    g = c.cloneNode(i);
    b.insertBefore(c, b.firstChild);
    b.appendChild(g);
    g = Ub(b);
    if ((c = z && b.currentStyle) && Nc(Sb(g)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) g = xg(b, c.width, "width", "pixelWidth"),
    c = xg(b, c.height, "height", "pixelHeight"),
    g = new Qb(g, c);
    else var c = wg(b),
    g = zg(b),
    k = ig(b),
    g = new Qb(c.width - k.left - g.left - g.right - k.right, c.height - k.top - g.top - g.bottom - k.bottom);
    c = g.width;
    g = g.height;
    k = "";
    this.Pn() && (k = "&nbsp;", Rf(b, "position", "relative"), Rf(b, "overflow", "visible"), Rf(a, "position", "absolute"), Rf(a, "top", "0"), Rf(a, "left", "0"));
    ng(b, c, g);
    Nc(Sb(b)) && (this.zY = b.style.lineHeight, Rf(b, "lineHeight", "0"));
    b.innerHTML = k;
    ng(a, c, g);
    ng(b, d, f);
    Rf(b, "visibility", "");
    b.appendChild(a);
    jt(this) || (b = a.contentWindow.document, Nc(Sb(a.ownerDocument)) && (b.open(), b.write("<!DOCTYPE HTML><html></html>"), b.close()))
};
r.Ov = function(a) {
    var b = this.yc;
    if (b) return new Is(this.id, Nc(Sb(b)), i, this.Pn(), a);
    e(Error("no field"))
};
r.YH = function(a, b, c) {
    Rf(a, "visibility", "hidden");
    var c = this.Ov(c),
    d = this.yc,
    f = this.Lk;
    if (!this.Dw) {
        var g = this.yc;
        if (g) {
            var k = g.ownerDocument,
            m = ta(k);
            if (!As[m]) {
                for (var q = ta(k), s = [], k = ps(k.styleSheets), x = 0, C; C = k[x]; x++) if ((C = os(C)) && C.length) for (var J = 0,
                G = C.length; J < G; J++) {
                    var P = new rs,
                    W;
                    W = P;
                    var ma = C[J],
                    Ha = ma.style;
                    if (Ha) {
                        var Sa = h,
                        Ya = h;
                        Ha && (Sa = ma.selectorText) && (Ya = Ha.cssText) ? z && (Ya += "/* */") : ma.cssText && (Ya = /([^\{]+)\{/, Sa = Ya.exec(ma.cssText)[1], Ya = ma.cssText.replace(Ya, "").replace(/\}[^\}]*$/g, ""));
                        if (Sa) {
                            ma = W;
                            ma.Tg = [];
                            Sa = Sa.split(/,\s*/gm);
                            for (Ha = 0; Ha < Sa.length; Ha++) {
                                var oj = Sa[Ha];
                                0 < oj.length && ma.Tg.push(new us(oj))
                            }
                            W.jn = Ya;
                            W = i
                        } else W = l
                    } else W = l;
                    W && s.push(P)
                }
                As[q] = s
            }
            q = As[m];
            m = [];
            for (s = 0; s < q.length; s++) m.push(q[s].clone());
            k = new ys(g);
            x = new vs("body");
            for (q = 0; q < m.length; q++) {
                C = m[q].Tg;
                s = C.length;
                for (J = 0; J < s; J++) {
                    G = C[J];
                    P = G;
                    W = k.uid;
                    if (P.nu[W]) W = P.nu[W];
                    else {
                        for (var Ya = 0,
                        Ha = Sa = ma = j,
                        oj = k.gF,
                        OD = oj.length,
                        pj = 0; pj <= P.ai.length; pj++) {
                            for (Sa = P.ai[pj]; Ya < OD;) {
                                var gx = oj[Ya];
                                if (Sa && xs(Sa, gx)) {
                                    ma = {
                                        mC: Ya,
                                        HG: pj
                                    };
                                    Ya++;
                                    break
                                } else Ha && xs(Ha, gx) && (ma = {
                                    mC: Ya,
                                    HG: pj - 1
                                });
                                Ya++
                            }
                            Ha = Sa
                        }
                        W = P.nu[W] = ma
                    }
                    W && (P = W.HG, G = G.ai, Ya = G.length - 1, W.mC == k.gF.length - 1 || P < Ya ? (G = G.concat(), G.splice(0, P + 1, x), P = new us, P.ai = G, C.push(P)) : 0 < P && P == Ya && (P = new us, P.ai = [x, G[Ya]], C.push(P)))
                }
            }
            k = new rs;
            g = g.currentStyle || Ub(g).defaultView.getComputedStyle(g, "") || {};
            q = new us;
            q.ai = [new vs("html")];
            k.Tg = [q];
            x = {};
            for (q = 0; s = Bs[q]; q++) x[s] = g[gb(s)];
            ss(k, x);
            m.push(k);
            k = new rs;
            x = new us;
            x.ai = [new vs("body")];
            C = {
                position: "relative",
                top: "0",
                left: "0",
                right: "auto",
                display: "block",
                visibility: "visible"
            };
            for (q = 0; s = Cs[q]; q++) C[s] = g[gb(s)];
            ss(k, C, i);
            k.Tg = [x];
            m.push(k);
            g = [];
            s = m.length;
            for (q = 0; q < s; q++) {
                C = m[q];
                k = g;
                J = C.Tg.length;
                x = l;
                for (G = 0; G < J; G++) {
                    P = C.Tg[G].ai;
                    W = P.length;
                    for (Ya = 0; Ya < W; Ya++) k.push(P[Ya].QD, " ");
                    G < J - 1 && k.push(",");
                    A && !D("1.9a") && (x = x || qs.test(P[W - 1].QD))
                }
                C = C.jn;
                x && (C = C.replace(ts, "$1 color: $2 ! important; "));
                k.push("{", C, "}\n")
            }
            this.Dw = g.join("")
        }
    }
    d = new Js(d, f + this.Dw);
    c.Pp && (f = zg(d.pU), (f.top || f.left || f.right || f.bottom) && Rf(a, "margin", -f.top + "px " + -f.right + "px " + -f.bottom + "px " + -f.left + "px"));
    Ks(c, b, d, a);
    ot(this);
    Rf(a, "visibility", "visible")
};
r.Mu = function() {
    sd(this.wE);
    sd(this.HO);
    lt.g.Mu.call(this)
};
function qt() {
    M.call(this);
    this.cd = [];
    this.OW = "";
    this.Uk = this.Te = j;
    this.cf()
}
w(qt, ao);
ja(qt);
var rt = {
    "0": "其他（可自行填写）",
    99 : "内容极度危险不能扩散（不发私信和邮件通知）",
    130 : "暂时敏感、不能讨论、官方没有出台说法",
    131 : "不构成问题的语义片段、非恶意内容",
    132 : "会引发禁止内容但立即删除会引起反弹",
    140 : "该问题已充分讨论",
    180 : "含有淫秽色情、暴力、血腥、仇恨或易引起他人不适的内容",
    181 : "含有攻击他人或泄露他人隐私的内容",
    182 : "违反中国或所在地相关法律法规的内容",
    183 : "破坏社区良好氛围的内容",
    184 : "上传图片与问题无关",
    200 : "含有淫秽色情、暴力、血腥、仇恨或易引起他人不适的内容",
    201 : "含有攻击他人或泄露他人隐私的内容",
    202 : "违反中国或所在地相关法律法规的内容",
    203 : "破坏社区良好氛围的内容",
    204 : "上传视频与问题无关",
    220 : "答非所问，没有正面或直接回答问题",
    221 : "应作为问题或答案的评论",
    222 : "与已有答案重复",
    223 : "转载未在显著位置注明来源",
    224 : "需要详细阐述",
    225 : "有推广嫌疑但未注明是否有利益关联",
    300 : "不友善行为（记入警告）",
    301 : "恶意行为（记入警告）",
    302 : "违反法律法规的行为（记入警告）",
    303 : "不友善行为",
    304 : "恶意行为",
    305 : "违反法律法规的行为",
    306 : "不构成提问",
    307 : "重复问题",
    308 : "广告、推广",
    309 : "招聘、求职",
    310 : "交易、合作",
    311 : "寻人、征友",
    312 : "召集、赠送",
    313 : "求取或发放产品帐号或邀请码",
    314 : "涉及盗版资源获取的内容",
    315 : "针对具体病情、个人化、场景化的求医问药类问题"
},
st = {
    "remove-question": {
        tf: "删除",
        title: "确定要删除该问题吗？",
        cd: [300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 99, 0]
    },
    "mute-question": {
        tf: "隔离",
        title: "确定要隔离该问题吗？",
        cd: [130, 131, 132, 0]
    },
    "unmute-question": {
        tf: "解除隔离",
        title: "确定要解除隔离该问题吗？",
        cd: [0]
    },
    "lock-question": {
        tf: "锁定",
        title: "确定要锁定该问题吗？",
        cd: [140]
    },
    "unlock-question": {
        tf: "解除锁定",
        title: "确定要解除锁定该问题吗？",
        cd: [0]
    },
    "remove-answer": {
        tf: "删除",
        title: "确定要删除该答案吗？",
        cd: [300, 301, 302, 303, 304, 305, 99, 0]
    },
    "collapse-answer": {
        tf: "折叠",
        title: "确定要折叠该答案吗？",
        cd: [220, 221, 222, 223, 224, 225]
    },
    "uncollapse-answer": {
        tf: "解除折叠",
        title: "确定要解除折叠该答案吗？",
        cd: [0]
    },
    "remove-comment": {
        tf: "删除",
        title: "确定要删除该评论吗？",
        cd: [300, 301, 302, 303, 304, 305, 99, 0]
    },
    "remove-image": {
        tf: "删除",
        title: "确定要删除该图片吗？",
        cd: [180, 181, 182, 183, 184]
    },
    "remove-video": {
        tf: "删除",
        title: "确定要删除该视频吗？",
        cd: [200, 201, 202, 203, 204]
    }
},
tt = {
    "delete": '<span class="zg-gray-normal">删除后将私信通知作者并备份该内容</span>'
};
function ut(a, b, c) {
    var d = new Y(i);
    d.addEventListener("success",
    function(a) {
        a = R(a.target);
        if (a.r) X(a.msg);
        else {
            var b = a.msg;
            if (b) {
                if (b.refresh) {
                    setTimeout(function() {
                        window.location.reload()
                    },
                    2E3);
                    return
                }
                if (b.redirect) {
                    window.location.href = b.redirect;
                    return
                }
            }
            X("操作成功！");
            c && c(a)
        }
    });
    d.ajax(a, b)
}
r = qt.prototype;
r.cf = function() {
    this.j();
    this.ua()
};
r.j = function() {
    var a = K("div", {
        style: "min-height:80px;padding:15px 0 0 0"
    },
    [this.xY = K("div", "zg-section", [this.Oj = K("select", {
        style: "min-width: 250px; max-width: 100%;"
    }), this.pn = K("label", {
        className: "zg-error-text",
        style: "display:none;margin-left:.5em;white-space: nowrap;"
    },
    "请填写修改理由")]), this.gu = K("div"), this.$O = K("div", {
        "class": "zg-gray-normal"
    }), this.dG = K("div", {
        "class": "zg-form-text-input",
        style: "display:none"
    },
    this.Qg = K("textarea", {
        style: "width:100%"
    }))]);
    this.Te = new Nl;
    gl(this.Te, i);
    nl(this.Te, pl);
    this.Te.R().appendChild(a)
};
r.ua = function() {
    this.e().c(this.Qg, ["change", "input"],
    function() {
        S(this.pn, !Oa(this.Qg.value))
    }).c(this.Oj, "change", this.cN).c(this.Te, ll, this.lw).c(this.Te, ol,
    function(a) {
        if ("ok" === a.key) return this.ej();
        if (a.key === ql) return this.An()
    })
};
r.lw = function() {
    this.Uk = this.nq = j;
    vt(this)
};
r.An = function() {
    this.ca && this.ca.wb() && this.ca.abort();
    this.Te.n(l);
    this.dispatchEvent("cancel")
};
r.ej = function() {
    if (this.ca && this.ca.wb()) return l;
    var a = "0" === this.Oj.value,
    b = this.Qg.value;
    if (this.nq && this.Oj) {
        if (a && !b) return S(this.pn, i),
        this.Qg.focus(),
        l;
        S(this.pn, l);
        var c = this.nq.getAttribute("data-action"),
        d = this.nq.getAttribute("data-content");
        d && this.Wt && (d = d + "&" + this.Wt);
        d = new Np(d || this.Wt);
        d.add("reason", this.Oj.value);
        a && d.add("detail", b);
        ut(c, d.toString(), u(this.eN, this))
    }
};
r.eN = function(a) {
    this.Te.n(l);
    this.eb && this.eb(a)
};
r.n = function(a) {
    this.Te.n(a)
};
function vt(a) {
    a.Qg.value = "";
    a.Oj.innerHTML = "";
    a.gu.innerHTML = "";
    S(a.pn, l)
}
function wt(a, b, c, d, f) {
    vt(a);
    a.eb = c;
    a.Wt = f;
    a.nq = b; (b = st[b.getAttribute("data-op")]) ? (a.Te.Ma(b.title), zc(a.Te.jc.Kf("ok"), b.tf || "确定"), b = b.cd, S(a.dG, 1 === b.length && 0 === b[0]), d = "delete" === d || y.contains(b, 99), a.gu.innerHTML = d ? tt["delete"] : "", y.forEach(b,
    function(a) {
        this.Oj.appendChild(K("option", {
            value: a
        },
        rt[ + a]))
    },
    a), xt(a, Number(a.Oj.firstChild.value))) : Jn("no op code!")
}
function xt(a, b) {
    var c = a.$O;
    a.Uk && y.contains([300, 301, 302], b) ? $.post("/manage", $.extend({
        action: "get_member_info",
        reason: b
    },
    a.Uk)).done(function(a) {
        c.innerHTML = "用户已被警告 " + a.warn_num + " 次，禁言 " + a.ban_num + " 次"
    }) : c.innerHTML = ""
}
r.cN = function(a) {
    var a = Number(a.target.value),
    b = 0 === a,
    c = 99 === a;
    S(this.dG, b);
    b || S(this.pn, l);
    xt(this, a);
    S(this.gu, !c);
    return i
};
function yt() {
    cl.call(this, h, h, h);
    this.JK = V.Bq;
    this.co = V.co;
    this.zw = V.zw;
    this.QG = "" !== this.co;
    this.e().c(Zl, "/activation/resend-email", ya(this.CS, i))
}
ja(yt);
w(yt, Nl);
r = yt.prototype;
r.MT = Mn('    <% if (showTopTip) { %>       <div class="top-tip well-blue"><%= topTip %></div>    <% } %>    <% if (showForm) { %>    <form class="js-email-form">    <dl class="zm-form-table zm-form-table-wide" style="">      <dt class="zm-form-table-head zm-form-table-head-align-middle">        <label class="" for="cur-login-passwd">您的注册邮箱：</label>      </dt>      <dd class="zm-form-table-field zg-form-table-count">        <label class=""><%= curEmail %></label></dd>      <% if (hasPassword) { %>      <dt class="zm-form-table-head zm-form-table-head-align-middle">        <label class="" for="cur-login-passwd">您的密码：</label>      </dt>      <dd class="zm-form-table-field">        <input class="zg-form-text-input" type="password" name="pw"></dd>      <% } %>      <dt class="zm-form-table-head zm-form-table-head-align-middle">        <label class="" for="new-email">新的登录邮箱：</label>      </dt>      <dd class="zm-form-table-field">        <input class="zg-form-text-input" type="text" name="newemail"></dd>      <dd class="zm-form-table-field">        <button class="js-update-email zg-btn-blue">更新邮箱</button>        <a class="js-cancel zm-form-btn-collapse" href="javascript:;">取消</a>      </dd>    </dl>    </form>    <% } %>    <% if (showMiddleTip) { %>    <div class="middle-tip"><%= middleTip %></div>    <% } %>    <% if (showSendEmail) { %>    <div class="">      <dl class="zm-form-table zm-form-table-wide" >        <dt class="zm-form-table-head zm-form-table-head-align-middle">          <label class="">您的注册邮箱：</label>        </dt>        <dd class="zm-form-table-field zg-form-table-count">          <label class="login-email"><%= curEmail %></label>          <a class="js-change-email" href="javascript:;">修改</a>          <br>        </dd>      </dl>    <% if (sent) { %>    <span class="zg-medium-gray" style="margin-left:165px;">已发送</span>    <% } else { %>    <a class="js-resend"  style="margin-left:134px;margin-bottom:15px;" href="javascript:;">重新发送激活邮件</a>    <% } %>    </div>    <% } %>    <% if (showEmailUrl) { %>    <div class="email-url">      <a class="zg-btn-blue" target="_blank" href="<%= emailUrl %>">进入我的邮箱 »</a>    </div>    <% } %>    <% if (showBottomTip) { %>    <div class="bottom-tip"><%= bottomTip %></div>    <% } %>    ');
r.ft = {
    showTopTip: i,
    showSendEmail: i,
    showBottomTip: i
};
r.aT = {
    showTopTip: i,
    showForm: i,
    showBottomTip: i,
    showEmailUrl: l
};
r.bT = {
    showMiddleTip: i
};
r.N = function() {
    yt.g.N.call(this);
    this.Ma("请激活帐号");
    zt(this, yt.prototype.ft);
    this.D = $(this.R()).addClass("activate-dialog");
    $(this.d).css("width", "400px");
    var a = this;
    $.each({
        ".js-update-email": a.YT,
        ".js-cancel": a.cancel,
        ".js-change-email": a.bK,
        ".js-resend": a.cS
    },
    function(b, c) {
        a.D.on("click", b, $.proxy(c, a))
    })
};
function zt(a, b) {
    var c = $.extend({
        showTopTip: l,
        showMiddleTip: l,
        showBottomTip: l,
        showEmailUrl: a.QG,
        showForm: l,
        showSendEmail: l,
        sent: a.IG,
        topTip: "为正常使用知乎提问、回答、评论和编辑功能，请验证您的邮箱、激活帐号。",
        middleTip: Ia("一封验证邮件已经发到您的新邮箱：<br>%s，请注意查收。", a.tP),
        bottomTip: "请进入邮箱收取验证邮件、并通过邮件中链接激活你的知乎帐号。",
        curEmail: a.JK,
        emailUrl: a.co,
        hasPassword: a.zw
    },
    b);
    a.Fa(a.MT(c))
}
r.YT = function() {
    var a = this;
    $.post("/settings/update_email", a.D.find(".js-email-form").serialize()).done(function(b) {
        b.r ? X(b.msg) : (a.tP = b.msg[0], a.QG = "" !== b.msg[1], a.co = b.msg[1], zt(a, yt.prototype.bT))
    });
    return l
};
r.CS = function(a) {
    this.IG = a;
    zt(this, yt.prototype.ft)
};
r.cancel = function() {
    zt(this, yt.prototype.ft)
};
r.bK = function() {
    zt(this, yt.prototype.aT)
};
r.cS = function() {
    var a = this;
    $.post("/reactive").done(function(b) {
        b.r ? X(b.msg) : (a.IG = i, zt(a, yt.prototype.ft))
    })
};
function At(a, b) {
    this.D = $(a);
    this.s = $.extend({},
    this.V, b || {});
    this.vf()
}
At.prototype.V = {
    dS: [],
    Fy: [],
    lK: i
};
var Bt = "data-tip class style id bgcolor color size width height".split(" ");
At.prototype.vf = function() {
    var a = this;
    if (this.s.lK) this.D.on("paste",
    function() {
        setTimeout(function() {
            var b = a.s,
            c = b.dS,
            d = b.Fy,
            f = {
                id: function(a, b) {
                    a.id && !y.contains(c, a.id) && a.removeAttribute(b)
                },
                "class": function(a, b) {
                    if (a.className) if (d.length) {
                        var c = E.get(a),
                        c = y.filter(c, rf(ya(y.contains, d)));
                        c.length && E.remove.apply(j, [a].concat(c))
                    } else a.removeAttribute(b)
                }
            };
            $("*", a.D).each(function() {
                var a = this;
                $.each(Bt,
                function(b, c) {
                    var d = f && F.get(f, c);
                    d ? d(a, c) : a.removeAttribute(c)
                })
            })
        })
    })
};
function Ct(a, b) {
    var c = this,
    d = {};
    F.extend(d, this.V, b || {});
    this.s = d;
    var f = d.N ? {
        Rj: u(d.N, c)
    }: j;
    this.F = f = new zp(d.Co, f);
    var g = new Yp(d.source, !d.eU);
    this.Fe = g;
    var k = new pp(d.separator, d.$K, !!d.multiple, d.delay);
    $o.call(this, g, f, k);
    k.T = this;
    k.Ek(a);
    a.setAttribute("autocomplete", "off");
    k.Xj = function(a, b) {
        var f;
        ra(d.select) && (f = d.select.call(c, a, c.F.Sg[c.F.pl]));
        sp(this, la(f) ? f: a.label || a.toString(), b);
        return l
    };
    g.ei = function(a, b, f) {
        var g = f;
        ra(d.format) && (g = function(a, b) {
            var g = d.format.call(c, b, a);
            ra(d.filter) && (g = d.filter.call(c, g, a));
            f(a, g)
        });
        return Yp.prototype.ei.call(this, a, b, g)
    };
    f.mG = function(a, b, c) {
        a = a.data;
        c.innerHTML = a.zT ? a.zT() : a.label || a.toString()
    };
    this.Jb = a;
    d.Ad && (this.Tf = d.Ad);
    d.placeholder && (this.Zd = new Zp(a, d.placeholder));
    this.addEventListener("suggestionsupdate",
    function() {
        this.dispatchEvent(this.jb() ? "show": "hide")
    })
}
w(Ct, dq);
Ct.prototype.V = {
    source: "",
    Ad: 10,
    eU: l,
    filter: j,
    format: j,
    delay: 300,
    separator: j,
    $K: j,
    multiple: l,
    Co: j,
    LY: j,
    placeholder: ""
};
function Dt(a) {
    var b;
    return (b = Et[this.s.source]) || (b = Et[Ft][a[0]]) ? b(a) : a
}
Ct.prototype.V.format = function(a, b) {
    return Oa(b) && oa(a) && oa(a[0]) ? y.map(a[0].slice(1), Dt, this) : []
};
var Ft = {}.UW,
Et = {};
Et[Ft] = {
    topic: function(a) {
        return {
            type: a[0],
            name: a[1],
            url_token: a[2],
            avatar: a[3],
            id: a[4],
            answers: a[6],
            alias: a[7],
            raw: a,
            value: a[4],
            label: a[1]
        }
    },
    question: function(a) {
        return {
            type: a[0],
            title: a[1],
            id: a[2],
            url_token: a[3],
            answers: a[4],
            is_star: !!a[5],
            raw: a,
            label: a[1],
            value: a[2]
        }
    },
    people: function(a) {
        return {
            type: a[0],
            fullname: a[1],
            url_token: a[2],
            avatar: a[3],
            id: a[4],
            headline: a[5],
            raw: a,
            label: a[1],
            value: a[4]
        }
    },
    search_link: function(a) {
        return {
            type: a[0],
            raw: a,
            label: a[1],
            value: a[1]
        }
    }
};
Et["/topic/autocomplete"] = function(a) {
    return {
        type: a[0],
        name: a[1],
        url_token: a[2],
        avatar: a[3],
        id: a[4],
        followers: a[5],
        alias: a[6],
        label: a[1]
    }
};
function Gt(a) {
    this.s = $.extend(i, {},
    this.V, a || {});
    this.Cu();
    this.ze()
}
w(Gt, zd);
r = Gt.prototype;
r.V = {
    xm: {
        Ad: 6,
        content: "",
        method: "POST",
        source: "/people/autocomplete"
    },
    rR: "mention-popup",
    Lj: document.body,
    AA: "activated"
};
r.Cu = function() {
    var a = this.d = gc(this.ST);
    this.yo = a.getElementsByTagName("input")[0];
    a.className = this.s.rR;
    a.style.display = "none";
    this.s.Lj.appendChild(a)
};
r.mc = function() {
    return this.s.Lj
};
r.ST = '<div><div class="writing-bg"><input></div><div class="tip">想用 @ 提到谁？</div></div>';
r.ce = Mn('<% if (data.id) { %><img class="avatar" src="<%=avatar%>"><span class="name"><%=label%></span><% } %>');
r.jb = function() {
    return sg(this.d)
};
r.open = function() {
    this.jb() || (S(this.d, i), this.yo.focus(), this.vf(), this.dispatchEvent("open"))
};
r.close = function() {
    this.jb() && (S(this.d, l), E.remove(this.d, this.s.AA), this.yo.value = "", this.yo.blur(), this.bv(), this.dispatchEvent("close"))
};
function Ht(a, b) {
    a.close();
    a.dispatchEvent({
        type: "cancel",
        data: {
            originalEvent: b
        }
    })
}
r.rF = function(a) {
    this.jb() && !uc(this.d, a.target) && Ht(this, a)
};
r.po = function(a) {
    var b = a.keyCode,
    c = this.yo;
    if (27 === b || c === a.target && "" === c.value && (8 === b || 32 === b)) Ht(this, a),
    a.preventDefault(),
    a.stopPropagation()
};
r.vf = function() {
    N(document, "click", this.rF, l, this);
    N(this.d, "keydown", this.po, l, this)
};
r.bv = function() {
    qd(document, "click", this.rF, l, this);
    qd(this.d, "keydown", this.po, l, this)
};
r.ze = function() {
    var a = this,
    b = this.s.xm,
    c = new Ct(this.yo, {
        Co: this.d,
        Ad: b.Ad,
        source: b.source,
        select: function(b) {
            setTimeout(function() {
                a.close();
                a.dispatchEvent({
                    type: "select",
                    data: {
                        qR: b
                    }
                })
            });
            return ""
        },
        N: function(b, c, g) {
            g.innerHTML = a.ce(b.data)
        }
    });
    c.Ws(b.method);
    c.Fa(b.content);
    c.addEventListener("suggestionsupdate",
    function() {
        E.enable(this.d, this.s.AA, c.jb())
    },
    l, this);
    this.T = c
};
r.position = function(a) {
    Zf(this.d, a)
};
r.$d = function(a) {
    gp(this.T, a)
};
function It(a, b) {
    this.input = a;
    F.extend(this.s = {},
    this.V, b || {});
    this.di = new Gt({
        xm: this.s.xm,
        Lj: this.s.Lj
    });
    this.vf()
}
w(It, zd);
var Jt = !!window.getSelection;
It.prototype.V = {
    xm: {},
    Lj: document.body,
    vE: "member_mention",
    jr: "mention-holder",
    position: function(a, b) {
        a.x += b.width + 7;
        a.y -= 5;
        z && 7 < zb && (a.y += b.height / 2 - 9)
    }
};
var Kt = F.Ea({
    FV: "member_mention"
});
It.prototype.f = n("input");
function Lt(a) {
    var a = I(a.s.jr, a.input),
    b;
    if (a) return b = document.createTextNode("@"),
    oc(b, a),
    b
}
function Mt(a, b) {
    var c;
    A && (c = ac(document), a.input.focus(), window.scrollTo(c.x, c.y));
    var d;
    Jt ? (c = window.getSelection(), d = document.createRange(), d.setStartAfter(b), c.removeAllRanges(), c.addRange(d)) : 3 === b.nodeType && Dr(b, b.length).select()
}
It.prototype.vf = function() {
    var a = this.di;
    N(a, "cancel",
    function(a) {
        var c = Lt(this),
        a = a.data.originalEvent;
        c && "click" !== a.type && ("keydown" === a.type && 32 === a.keyCode && (c = c.parentNode.insertBefore(document.createTextNode(" "), c.nextSibling)), Mt(this, c))
    },
    l, this);
    N(a, "select",
    function(a) {
        var c = a.data.qR,
        a = I(this.s.jr, this.input),
        d = document.createTextNode(" "),
        c = this.iq(c);
        oc(c, a);
        c.parentNode.insertBefore(d, c.nextSibling);
        Mt(this, d)
    },
    l, this);
    N(this.input, "click",
    function() {
        a.jb() && Lt(this)
    },
    l, this);
    N(this.input, "keydown",
    function(a) {
        var c;
        if (8 === a.keyCode && (c = Ar())) {
            var a = c.M(),
            d = c.ba(),
            f = c.ma();
            c = c.Ba();
            var g = l;
            Nt(a.parentNode) && (f = 0, g = i);
            Nt(d.parentNode) && (c = d.length, g = i);
            g && mr(a, f, d, c).select()
        }
    },
    l, this);
    N(this.input, mb || Pi || Qi ? "keypress": "keyup",
    function(a) {
        function c(a, b) {
            if (3 !== a.nodeType || "@" === a.nodeValue && a.previousSibling && "A" === a.previousSibling.nodeName || a.parentNode && "A" === a.parentNode.nodeName) return l;
            var c = a.nodeValue,
            d = b - 1;
            if ("@" !== c.slice(d, d + 1)) return l;
            var f = c;
            0 <= d && d < c.length && (f = c.substr(0, d) + c.substr(d + 1, c.length - d - 1));
            a.nodeValue = f;
            return i
        }
        if (! ("keypress" === a.type && "@" !== String.fromCharCode(a.charCode))) {
            var d, f, g, k;
            if ("keyup" === a.type) {
                if (50 !== a.keyCode) return;
                if (Jt) {
                    d = window.getSelection();
                    g = d.anchorNode;
                    k = d.anchorOffset;
                    if (!c(g, k)) return;
                    B && !g.nextSibling && (g.nodeValue += " ");
                    f = document.createRange();
                    d.removeAllRanges();
                    f.setStart(g, k - 1);
                    f.setEnd(g, k - 1);
                    d.addRange(f)
                } else {
                    f = Cr(document.selection.createRange());
                    g = Mq(f);
                    k = f.ma();
                    if (!c(g, k)) return;
                    Dr(g, k - 1).select()
                }
            }
            this.it(a)
        }
    },
    l, this)
};
It.prototype.it = function(a) {
    var b = this,
    c = this.di;
    if (!c.jb()) {
        var d = function(c) {
            return ! (c && "A" === c.nodeName) && c.className !== b.s.vE ? (a && a.preventDefault(), i) : l
        };
        if (Jt) {
            var f = window.getSelection();
            if (d(f.anchorNode.parentNode)) {
                var d = f.getRangeAt(0),
                g = Ot(b);
                d.insertNode(g);
                d.selectNode(g);
                f.removeAllRanges();
                f.addRange(d);
                d = Pt(b, window.getSelection().getRangeAt(0));
                c.position(d);
                c.open()
            }
        } else f = document.selection.createRange(),
        g = f.parentElement(),
        d(g) && (f.pasteHTML(Ot(b).outerHTML), f.moveToElementText(I(b.s.jr, b.input)), f.select(), d = Pt(b, f), "7.0" === zb && (d.x -= 2), c.position(d), c.open())
    }
};
function Pt(a, b) {
    var c;
    c = b.getBoundingClientRect();
    var d;
    z && (d = {
        width: b.boundingWidth,
        height: b.boundingHeight
    },
    za(d, c), c = d);
    d = ac(document);
    var f = fg(a.di.mc());
    f.x = c.left - f.x + d.x;
    f.y = c.top - f.y + d.y;
    a.s.position.call(a, f, c);
    return f
}
function Nt(a) {
    return a && 1 === a.nodeType && "A" === a.tagName && y.contains(Kt, a.className)
}
It.prototype.iq = function(a, b) {
    return K("a", {
        href: "/people/" + a.url_token,
        className: b || this.s.vE,
        innerHTML: "@" + a.label
    })
};
function Ot(a) {
    return K("a", {
        className: a.s.jr,
        innerHTML: "@"
    })
};
function Qt(a, b) {
    var c = a.split("!");
    this.type = c[0] + "!";
    this.namespace = c[1];
    this.hd = new Rt(b)
}
w(Qt, ad);
function Rt(a) {
    this.category = a.category;
    this.action = a.action;
    this.label = a.label;
    this.value = a.value
}
Rt.prototype.fill = function(a, b) {
    this[a] = this[a].replace("?", b);
    return this
};
function St(a) {
    F.extend(this.s = {},
    this.V, a || {});
    this.mh = new Od;
    this.xf = j
}
w(St, T);
r = St.prototype;
r.V = {
    trigger: {
        A: "data-editable"
    },
    QI: "hc-actionbar",
    BO: "checked",
    PS: 100,
    zN: 100
};
r.p = function() {
    this.Jm = K("div");
    document.body.appendChild(this.Jm);
    var a = this.s,
    b = new Jo(a.trigger, l, j, this.d);
    b.at = a.PS;
    b.gr = a.zN;
    b.bg(this.Jm);
    N(b, "trigger",
    function(a) {
        b.Kc(new Bi(a.anchor, 1))
    });
    N(b, "beforeshow",
    function(a) {
        this.xf = a.target.anchor;
        this.N()
    },
    l, this);
    b.className = a.QI;
    this.FN = b
};
r.Qv = n("FN");
function Tt(a, b) {
    var c = a.s.BO,
    d = qc(a.Jm),
    f = y.find(d,
    function(a) {
        return a.getAttribute("data-action") === b
    });
    if (!f || E.has(f, c)) return l;
    y.forEach(d,
    function(a) {
        E.remove(a, c)
    });
    E.add(f, c);
    return i
}
r.WJ = function(a, b, c) {
    b = K("div", {
        title: a.K,
        "data-action": a.name,
        className: "button " + a.name + (0 === b ? " first": b === c.length - 1 ? " last": "")
    },
    [K("i", "icon icon-actionbar-" + a.name)]);
    vg(b, i);
    this.e().c(b, "click",
    function() {
        Tt(this, a.name) && a.Gk(this.xf)
    });
    return b
};
r.N = function() {
    this.Jm.innerHTML = "";
    jc(this.Jm, y.map(F.Ea(this.mh.qt()), this.WJ, this))
};
function Ut(a) {
    F.extend(this.s = {},
    this.V, a || {})
}
w(Ut, T);
Ut.prototype.V = {
    vD: {},
    DJ: i
};
Ut.prototype.h = function(a) {
    Ut.g.h.call(this, a);
    if (this.s.DJ) {
        var b = this.d,
        c = new St({});
        c.mh.set("link", {
            name: "link",
            K: "链接",
            Gk: function(a) {
                zc(a, a.href)
            } || ia
        });
        c.mh.set("text", {
            name: "text",
            K: "文本",
            Gk: function(a) {
                zc(a, a.getAttribute("data-title"))
            } || ia
        });
        c.h(b);
        a = c.Qv();
        to(a, new Nf(2, 0, 0, 0));
        a.ql = new Nf(2, 0, 0, 0) || j;
        a.addEventListener("beforeshow",
        function(a) {
            var a = a.target.anchor,
            b = Gc(a);
            b === a.href ? Tt(c, "link") : (b !== a.getAttribute("data-title") && a.setAttribute("data-title", b), Tt(c, "text"))
        });
        a.addEventListener("beforehide",
        function(a) {
            if ((a = a.target) && b.contains(a) && Vt(a)) return l
        });
        var d;
        a.addEventListener("show",
        function(a) {
            d = a.target.anchor;
            E.add(d, "hover")
        });
        a.addEventListener("hide",
        function() {
            d && (E.remove(d, "hover"), d = j)
        });
        this.Yt = c
    }
};
Ut.prototype.p = function() {
    var a = this,
    b = this.d;
    this.e().c(b, "paste",
    function() {
        setTimeout(function() {
            var b = a.s,
            d = a.d,
            f = Ac(d,
            function(a) {
                return 3 === a.nodeType && !Wt(a, d,
                function(a) {
                    return Vt(a) || "CODE" === a.nodeName || "PRE" === a.nodeName
                })
            }),
            g,
            k = Ar(),
            m = k && Mq(k);
            y.forEach(f,
            function(a) {
                var b = a.nodeValue,
                c = b.replace(Xt,
                function(a) {
                    Fa(a, "http") || (a = "http://" + a);
                    return a.link(a)
                });
                c !== b && (b = gc(c), m === a && (g = b.lastChild), oc(b, a))
            });
            g && ls(g);
            var q = b.vD,
            b = y.filter(d.getElementsByTagName("A"),
            function(a) {
                var b = a.getAttribute("href");
                if (b = !(!b || "#" === b)) if (b = !a.getAttribute("data-editable")) if (b = y.contains(Yt, a.protocol)) b = Gc(a),
                Fa(a.href, b) ? a = h: (a.setAttribute("data-editable", i), a.setAttribute("data-title", b), a = i),
                b = !a;
                return b
            }),
            b = y.map(b,
            function(a) {
                return Zt(a.href).done(function(b) {
                    var c = q;
                    if (b && d.contains(a)) {
                        var c = c || {},
                        f = function(a, b, c) {
                            var d = Ar();
                            if (d) {
                                var f = d.M(),
                                g = d.ma(),
                                k = d.ba(),
                                m = d.Ba();
                                uc(b, f) && (f = a, g = 0);
                                uc(b, k) && (k = a, m = 0);
                                c(function() {
                                    f === a && k === a ? ls(a) : mr(f, g, k, m).select()
                                })
                            } else c(ia)
                        },
                        g = {
                            link: function(a, b) {
                                a.setAttribute("data-editable", i);
                                b.title === a.href ? a.setAttribute("data-title", a.hostname.split(".").slice(/(.com|.edu|.gov|.net|.org)$/.test(a.hostname) ? -2 : -3).join(".").replace(/^www\./, "") + " 的页面") : (a.setAttribute("data-title", b.title), f(a, a,
                                function(c) {
                                    zc(a, b.title);
                                    c()
                                }))
                            },
                            image: function(a, b) {
                                var c = document.createElement("img");
                                c.src = b.src;
                                c.setAttribute("data-rawwidth", b.width);
                                c.setAttribute("data-rawheight", b.height);
                                f(c, a,
                                function(b) {
                                    oc(c, a);
                                    b()
                                })
                            }
                        }; (c = c[b.type] || g[b.type]) && c(a, b)
                    }
                })
            });
            b.length && (a.dispatchEvent("willScrape"), $.when.apply($, b).always(function() {
                a.dispatchEvent("didScrape")
            }))
        })
    }).c(b, "keydown", this.sN)
};
Ut.prototype.sN = function(a) {
    var b = Qg(a.keyCode),
    c = 8 === a.keyCode;
    if (! (a.ctrlKey || (a.altKey || a.metaKey) || !b && !c)) {
        var b = Ar(),
        d = b.M(),
        f = b.ba(),
        g = this.d,
        k,
        m = Wt(d, g, Vt) || f !== d && (k || (k = Wt(f, g, Vt)));
        if (m) {
            var q = Gc(m),
            s = b.ma(),
            x = b.Ba();
            if (m.getAttribute("data-editable") && q === m.href) {
                var C = l;
                k = k || Wt(f, g, Vt) || m;
                var g = m.contains(d),
                J = k.contains(f);
                if (c) g && (d = m, s = 0, C = i),
                J && (f = k, x = is(k), C = i),
                C && mr(d, s, f, x).select();
                else if (g && J && k === m) {
                    if (!b.isCollapsed() || !(0 === s || q.length === s)) a.preventDefault(),
                    ls(m)
                } else g && (d = m.nextSibling, s = 0, C = i),
                J && (f = k.previousSibling, x = is(f), C = i),
                C && mr(d, s, f, x).select()
            }
        }
    }
};
var Xt = /\b(?:(?:https?):\/\/|www\.)(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[\-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/ig,
Yt = ["http:", "https:"];
function Wt(a, b, c) {
    for (; a && a !== b;) {
        if (c(a)) return a;
        a = a.parentNode
    }
}
function Vt(a) {
    return "A" === a.nodeName
}
var Zt;
function $t(a) {
    return $.post("/scraper", {
        url: a
    })
}
var au = ta($t);
Zt = function() {
    var a = this || ga,
    a = a.closure_memoize_cache_ || (a.closure_memoize_cache_ = {}),
    b;
    b = arguments;
    for (var c = [au], d = b.length - 1; 0 <= d; --d) c.push(typeof b[d], b[d]);
    b = c.join("\x0B");
    return a.hasOwnProperty(b) ? a[b] : a[b] = $t.apply(this, arguments)
};
function bu(a, b, c) {
    T.call(this);
    this.type = b;
    this.id = a;
    this.field = j;
    this.Vc = this.disabled = this.bi = this.ac = l;
    this.Zd = "写下你的评论…";
    this.placeholder = '<p style="color:#999">' + this.Zd + "</p>";
    this.Nr = "";
    this.da = 0;
    this.qy = this.Ur = j;
    F.extend(this.s = {},
    this.V, c || {})
}
w(bu, T);
r = bu.prototype;
r.V = {
    AE: l,
    autofocus: i,
    pL: "empty",
    yb: "zm-item-comment",
    aZ: "subscribed"
};
r.V.DN = '<div class="zm-comment-box"><i class="icon icon-spike zm-comment-bubble"></i><div class="zm-comment-spinner">正在加载，请稍等 <img src="http://static.zhihu.com/static/img/spinner2.gif"></div></div>';
r.j = function() {
    this.d = this.jj = gc(this.s.DN)
};
r.m = function() {
    bu.g.m.call(this);
    this.field = this.hb = this.Xm = this.MA = this.qy = this.BE = j
};
function cu(a) {
    var b = a.Rk,
    c = b.f();
    if (b.bl() !== a.placeholder) {
        b.be(l, a.placeholder);
        var d = ["click", "focus", "keydown"],
        f = function() {
            b.be(l, this.Nr || "");
            this.field.lastChild ? ls(this.field.lastChild) : b.Jf();
            qd(c, d, f, l, this)
        };
        N(c, d, f, l, a);
        var g;
        window.getSelection ? (g = window.getSelection(), g.anchorNode && uc(a.field, g.anchorNode) && g.removeAllRanges()) : document.selection && a.field.blur()
    }
}
r.ur = function(a) { (a = a.f && a.f()) && (new Ut({
        vD: {
            image: ia
        }
    })).h(a)
};
r.tr = function(a, b) {
    if (a.f) {
        var c = (new Np).add("type", this.type + "_comment").add("resource_id", this.id),
        d = a.f();
        this.oY = c = new It(d, {
            xm: {
                content: c.toString()
            },
            Lj: I("zu-main")
        });
        new At(d, {
            Fy: Kt
        });
        ra(b) && b(c)
    }
};
function du(a) {
    a.focus();
    a = Pq(a);
    a.collapse();
    a.select()
}
function eu(a) {
    return $(a.Xm).children(".zm-item-comment").get()
}
r.PG = function(a) {
    E.enable(this.hb, "zm-comment-form-expanded", a)
};
r.p = function() {
    bu.g.p.call(this);
    fu(this)
};
r.jk = function(a, b) {
    this.dispatchEvent(new Qt("click!comment", {
        category: "?",
        action: this.type + "_comments",
        label: "?_" + a,
        value: qa(b) ? b: this.Ha()
    }))
};
r.bj = function() {
    this.Vc ? (this.ac = l, fu(this)) : this.bi = i
};
r.fQ = function(a) {
    if (13 === a.keyCode && (a.ctrlKey || a.metaKey)) this.du(),
    $(this.field).blur(),
    a.preventDefault();
    27 === a.keyCode && gu(this)
};
r.S = function(a) {
    var b = zn(this.d, a.target);
    if (b && b.name) {
        var c = Lc(b, this.s.yb);
        a.preventDefault();
        switch (b.name) {
        case "reply_comment":
            a:
            if (V.ob()) {
                var b = I("zm-comment-content-wrap", c),
                d = I("zm-comment-form", b),
                f = c.getAttribute("data-id"),
                g = this,
                k;
                if (d) {
                    k = I("zm-comment-editable", d);
                    if (sg(d)) {
                        if (Rn(d)) {
                            S(d, l);
                            break a
                        }
                    } else S(d, i);
                    du(k)
                } else {
                    d = gc('<div class="zm-comment-form zm-comment-form-editing">            <div class="zm-comment-editable-wrap">                <div class="zm-comment-editable" aria-label="写下你的回复"></div>            </div>            <div class="zm-command zg-clear">                <a href="javascript:;" class="zm-comment-submit zg-right zg-btn-blue">评论</a>                <a href="javascript:;" class="zm-comment-close zm-command-cancel">取消</a>            </div>        </div>');
                    b.appendChild(d);
                    k = I("zm-comment-editable", d);
                    var m = new lt(k);
                    m.zd();
                    this.tr(m,
                    function() {
                        du(k)
                    });
                    this.ur(m);
                    var c = I("zm-comment-close", d),
                    b = I("zm-comment-submit", d),
                    q = function() {
                        var a = Oa(m.bl()),
                        b = Oa(Gc(k));
                        a && b ? hu(g, {
                            content: a,
                            LN: f
                        },
                        function(a) {
                            a.r || (S(d, l), m.be(l, ""), (a = y.Og(eu(g))) && Tn(a, {
                                offsetTop: 100,
                                SA: i
                            }))
                        }) : (X("请填写内容"), k.focus())
                    };
                    N(c, "click",
                    function() {
                        S(d, l)
                    });
                    N(b, "click", q);
                    N(k, "keydown",
                    function(a) {
                        if (13 === a.keyCode && (a.ctrlKey || a.metaKey)) q(),
                        a.preventDefault()
                    })
                }
                Tn(d, 100)
            } else c = Fn.v(),
            c.Ga = "question_answer_comment_author_name",
            c.n(i);
            break;
        case "cancelanon":
            c = $(this.d).parents(".feed-item-hook").data("qid");
            Yl(0, j, c);
            break;
        case "delcomment":
            this.kl(b);
            break;
        case "like_comment":
            if (V.ob()) {
                var c = $(b),
                a = Lc(b, this.s.yb),
                b = $(".like-num", a),
                s = a.getAttribute("data-id"),
                a = !c.hasClass("liked");
                $.post("/node/CommentV2", {
                    method: a ? "like_comment": "undo_like_comment",
                    params: {
                        comment_id: s
                    }
                });
                var s = $("em", b),
                x = +s.text() + (a ? 1 : -1);
                b.toggleClass("liked", a).toggleClass("nil", 0 >= x).attr("data-tip", "s$r$" + x + " 人觉得这个很赞");
                s.text(x);
                c.toggleClass("liked", a);
                fn(c[0], a ? "取消赞": "赞")
            } else Fn.v().n(i);
            break;
        case "author_delcomment":
            var C = Lc(b, this.s.yb),
            J = C.getAttribute("data-id"),
            G = Ol("删除评论", '你确定要删除这条评论吗？<p style="margin-top: 0.2em;color:#999;"><label><input type="checkbox">同时将此人屏蔽</label></p>',
            function(a) {
                if (a) {
                    var a = $(":checkbox", G.f()).prop("checked"),
                    b = ya(L, C);
                    $.post("/node/AnswerCommentV2", {
                        method: "author_remove_comment",
                        params: {
                            comment_id: J,
                            is_block: Number(a)
                        }
                    }).done(u(function() {
                        ra(b) && b();
                        this.da -= 1;
                        iu(this)
                    },
                    this))
                }
            },
            this);
            break;
        case "admin_delcomment":
            var c = qt.v(),
            P = Lc(b, this.s.yb),
            a = {
                id: P.getAttribute("data-id"),
                type: "comment"
            };
            c.Uk = a;
            wt(c, b, u(function() {
                L(P);
                this.da -= 1;
                iu(this)
            },
            this), "delete");
            c.n(i);
            break;
        case "closeform":
            gu(this);
            break;
        case "addnew":
            this.du();
            break;
        case "load-more":
            this.jk("comments_all"),
            this.BE(b)
        }
    }
};
r.BE = function(a) {
    this.Ur && "pending" === this.Ur.state() || (a && E.add(a, "loading"), this.Ur = this.qy || this.CE(), this.Ur.done(u(function(b) {
        b = $(b).filter(".zm-item-comment").get();
        if (b.length) {
            var c = eu(this);
            c.length && (b = y.filter(b,
            function(a) {
                return ! y.find(c,
                function(b) {
                    return b.getAttribute("data-id") === a.getAttribute("data-id")
                })
            }), b = y.concat(c, b).sort(function(a, b) {
                return a.getAttribute("data-id") - b.getAttribute("data-id")
            }), y.forEach(b, this.ZA, this), a && L(a));
            jc(this.Xm, b)
        }
    },
    this)))
};
function gu(a) {
    0 < a.Ha() ? (a.Nr = a.$a(), a.PG(l), cu(a)) : a.collapse()
}
r.expand = function() {
    this.Xa(i)
};
r.collapse = function() {
    this.Xa(l)
};
r.vd = n("Vc");
r.Xa = function(a) {
    if (a !== this.Vc) {
        this.Vc = a;
        this.dispatchEvent(a ? "beforeexpand": "beforecollapse");
        var b = u(function() {
            if (this.Vc) this.nS = Oc(Sb(document)).y,
            S(this.d, this.Vc);
            else {
                var b = kg(this.d);
                S(this.d, this.Vc);
                0 > b.y && window.scrollTo(0, this.nS)
            }
            this.dispatchEvent(a ? "expand": "collapse")
        },
        this);
        a && this.bi ? (this.ac = l, fu(this).done(b)) : b()
    }
};
r.rf = function() {
    this.Xa(!this.Vc)
};
function fu(a) {
    if (!a.ac) {
        a.ac = i;
        a.d !== a.jj && (oc(a.jj, a.d), a.d = a.jj);
        a.expand();
        var b = {
            answer: zm,
            question: Em,
            favlist: Mm
        } [a.type](a.id, a.s.AE).done(u(a.VR, a));
        V.ob() && !V.wf && b.done(function() {
            ju(a, '<div class="active-mask-tip-comment">为正常使用知乎提问、回答、评论和编辑功能，请验证您的邮箱、激活帐号。</div>', '<div class="zm-command"><a class="zg-r3px zg-btn-blue" href="javascript:;">我要激活</a></div>',
            function(a, b) {
                function f() {
                    yt.v().n(i)
                }
                a.on("click", f);
                b.on("click", f)
            })
        });
        V.ob() || b.done(function() {
            ju(a, '<div class="signin-mask-tip-comment"></div>', j,
            function(a, b) {
                function f() {
                    Fn.v().n(i);
                    Fn.v().Wg()
                }
                a.on("click", f);
                b.on("click", f)
            })
        });
        return b
    }
}
r.CE = function() {
    return {
        answer: Am,
        question: Fm,
        favlist: Nm
    } [this.type](this.id)
};
function ju(a, b, c, d) {
    var b = $(b),
    f = $(c);
    c ? ($(".zm-command, .zm-comment-info", a.d).hide(), $(a.field).hide().after(f).after(b)) : b.insertAfter(a.field);
    d && d.call(a, b, f)
}
r.VR = function(a) {
    a = gc(Oa(a));
    y.forEach($("." + this.s.yb, a).get(), this.wF, this);
    oc(a, this.d);
    this.d = a;
    F.forEach({
        MA: ".load-more",
        Xm: ".zm-comment-list",
        hb: ".zm-comment-form",
        field: ".zm-comment-editable"
    },
    function(a, b) {
        this[b] = $(a, this.d)[0]
    },
    this);
    this.field.setAttribute("aria-label", this.Zd);
    if (El) {
        var b = this.field;
        b.setAttribute("contentEditable", i);
        a = this.Rk = {
            f: function() {
                return b
            },
            bl: function() {
                return b.innerHTML
            },
            be: function(a, c) {
                b.innerHTML = c
            },
            Jf: function() {
                ks(b)
            }
        };
        this.tr(a);
        this.ur(a)
    } else {
        var c = K("textarea", {
            placeholder: this.Zd,
            "class": "zm-comment-textarea"
        });
        oc(c, this.field);
        new Xo(c, 22);
        this.field = c;
        this.Rk = {
            f: function() {
                return c
            },
            bl: function() {
                return c.value
            },
            be: function() {
                c.value = "";
                c.style.height = $f(22, i)
            },
            Jf: function() {
                c.focus()
            }
        }
    }
    cu(this);
    this.e().c(this.d, "click", this.S).c(this.field, "keydown", this.fQ).c(Zl, "anon_change", this.bj).c(this.Rk.f(), ["click", "focus"], ya(this.PG, i)).c(this.Rk.f(), "focus", ya(this.jk, "add_comment_start"));
    this.da = Number(this.d.getAttribute("data-count"));
    $(this.d).on("focusin focusout", "." + this.s.yb,
    function(a) {
        $(this).toggleClass("focusin", "focusin" === a.type)
    }); ! ub && this.MA && (this.qy = $.Deferred(function(a) {
        setTimeout(a.resolve, 2E3)
    }).promise().then($.proxy(this.CE, this)));
    iu(this)
};
function iu(a) {
    var b = a.s,
    c = !a.Ha();
    E.enable(a.d, b.pL, c);
    c && a.field && b.autofocus && a.field.focus();
    a.dispatchEvent("change")
}
r.$a = function() {
    var a = Oa(this.Rk.bl());
    return a === this.placeholder ? "": a
};
r.du = function() {
    var a = this.$a(),
    b = Oa(Gc(this.field));
    a && "TEXTAREA" === this.field.tagName && b || a ? hu(this, a) : (X("请填写内容"), this.field.focus())
};
r.Ha = n("da");
function hu(a, b, c) {
    if (! (a.Ll && "pending" === a.Ll.state())) {
        var d;
        sa(b) && (d = b.LN, b = b.content);
        var b = Qa(b),
        f = new Od,
        g = a.type,
        k = {
            answer: Bm,
            question: Gm,
            favlist: Jm
        } [g];
        f.set(g + "_id", a.id);
        f.set("content", b);
        d && f.set("in_reply_to", d);
        b = k(f.qt());
        b.done($.proxy(a.aM, a)).done(c);
        a.Ll = b;
        a.Nr = a.$a();
        a.jk("add_comment_submit")
    }
}
r.aM = function(a) {
    if (a.r) return X(a.msg);
    $.get("/node/CommentV2", {
        params: {
            comment_id: a.msg
        }
    }).done($.proxy(this.UR, this));
    this.Rk.be("");
    cu(this);
    E.remove(this.hb, "zm-comment-form-expanded")
};
r.wF = function(a) {
    this.ZA(a)
};
r.ZA = function(a) {
    if (Ak.Zw && !("favlist" === this.type || $(".del", a).length)) {
        var b = a.getAttribute("data-id");
        $("<a>", {
            href: "#",
            name: "admin_delcomment",
            "class": "del zm-comment-op-link",
            html: '<i class="zg-icon zg-icon-comment-del"></i>删除',
            "data-op": "remove-comment",
            "data-action": "/manage?" + $.param({
                comment_id: b,
                action: "remove_comment2"
            })
        }).appendTo($(".zm-comment-ft", a))
    }
};
r.UR = function(a) {
    this.Nr = "";
    a = gc(a);
    this.Xm.appendChild(a);
    this.wF(a);
    this.da += 1;
    iu(this)
};
r.kl = function(a) {
    var b = Lc(a, this.s.yb),
    c = b.getAttribute("data-id");
    Ol("删除评论", "你确定要删除这条评论吗？",
    function(a) {
        if (a) {
            var f = ya(L, b);
            $.post("/node/CommentV2", {
                method: "remove_comment",
                params: {
                    comment_id: c
                }
            }).done(u(function() {
                ra(f) && f();
                this.da -= 1;
                iu(this)
            },
            this))
        }
    },
    this)
};
function ku(a, b, c) {
    M.call(this);
    this.Rr = a;
    this.P = j;
    this.xv = b;
    this.entryType = c
}
w(ku, ao);
ku.prototype.k = function() {
    this.Rr && this.e().c(this.Rr, "click", this.BQ)
};
ku.prototype.BQ = function(a) {
    a.preventDefault();
    a.stopPropagation();
    this.P ? this.P.rf() : (this.P = new bu(this.xv, this.entryType), this.e().c(this.P, "change", this.gh), this.P.N(Lc(this.Rr, "zm-item-meta")))
};
ku.prototype.gh = function() {
    var a = this.P.Ha();
    this.Rr.innerHTML = a ? a + " 条评论": "添加评论"
};
function lu(a, b, c, d) {
    M.call(this);
    this.d = a;
    this.Iv = b || "people";
    this.EL = c || ["zg-btn-follow", "zg-btn-unfollow"];
    this.text = d || ["关注", "取消关注"]
}
w(lu, ao);
lu.prototype.k = function() {
    this.e().c(this.d, "click", this.no)
};
lu.prototype.no = function(a) {
    if ((a = zn(this.d, a.target)) && a.name) {
        var b = a.name; (!this.nd || this.nd(a)) && "focus" === b && Dn(a, this.Iv, j, this.EL, {
            follow_text: this.text[0],
            unfollow_text: this.text[1]
        })
    }
};
lu.prototype.ae = ca("nd");
function mu(a, b, c) {
    lu.call(this, a, b, c)
}
w(mu, lu);
mu.prototype.k = function() {
    mu.g.k.call(this);
    var a = Xb("zm-item-comment-link", this.d);
    y.forEach(a,
    function(a) { (new ku(a, a.id.split("-")[1], "answer")).k()
    },
    this)
};
function nu(a) {
    T.call(this);
    this.s = $.extend({},
    this.V, a || {})
}
w(nu, T);
nu.prototype.V = {
    bF: ".tab-nav",
    OF: ".tab-panel",
    wk: "active"
};
nu.prototype.Z = function(a) {
    if (a) {
        this.d = a;
        var b = this,
        c = this.s;
        this.uk = $(c.bF, a);
        this.hA = $(c.OF, a);
        this.nj = this.uk.index("." + c.wk);
        this.uk.on("click",
        function() {
            b.select(b.uk.index(this))
        })
    }
};
nu.prototype.select = function(a) {
    if (! (0 > a || a > this.uk.size())) if (this.dispatchEvent({
        type: "action",
        data: {
            index: a
        }
    }), a !== this.nj) {
        this.nj = a;
        var b = this.s,
        c = this.uk.eq(a);
        this.uk.not(c.addClass(b.wk)).removeClass(b.wk);
        b = this.hA.eq(a);
        this.hA.not(b.show()).hide();
        this.dispatchEvent({
            type: "select",
            data: {
                index: a
            }
        })
    }
};
nu.prototype.index = n("nj");
function ou() {
    M.call(this);
    this.vg = [0, 0, 0];
    this.jF = [0, 0, 0];
    this.types = ["default", "follow", "vote_thank"];
    this.tv = i;
    this.Ai = [l, l, l];
    this.fl = [0, 0, 0];
    this.bm = [l, l, l]
}
w(ou, ao);
r = ou.prototype;
r.k = function() {
    this.wrap = H("zh-top-nav-live-new");
    this.lA = $(this.wrap);
    this.wrapInner = H("zh-top-nav-live-new-inner");
    this.fq = H("zh-top-nav-count-wrap");
    this.Zm = K("span", {
        id: "zh-top-nav-count",
        className: "zu-top-nav-count zg-noti-number",
        style: "display:none"
    });
    this.contents = Xb("zm-noti7-content", this.wrap);
    this.NO = Xb("zm-noti7-popup-refresh", this.wrap);
    this.Tu = Xb("zm-noti7-content-body", this.wrap);
 //   this.fq.appendChild(this.Zm);
    this.e().c(this.fq, "click", this.BT);
    this.e().c(U, "noti7", this.TM);
    this.e().c(this.wrap, "click", this.S);
    this.e().c(this.wrap, "click",
    function(a) {
        a = a.target;
        a.href && /group_id=/.test(a.href + "") && $(a).parent(".unread").removeClass("unread")
    });
    var a = I("zm-noti7-popup-tab-container");
    this.dF = Xb("new-noti", a);
    this.Zg = new nu({
        bF: ".zm-noti7-popup-tab-item",
        OF: ".zm-noti7-content",
        wk: "current"
    });
    this.e().c(this.Zg, "action",
    function(a) {
        this.SB = a = a.data.index;
        pu(this, a);
        var c = this.Tl && this.Tl[a];
        c && (setTimeout(function() {
            c.update()
        }), this.Zg.index() === a && c.scrollTop())
    }).c(this.Zg, "select",
    function(a) {
        this.SB = a = a.data.index;
        qu(this, a);
        U.Q({
            type: "ga_click_top_nav_noti_tab",
            data: {
                Zg: +a
            }
        }); ! this.hc && window.localStorage && localStorage.setItem("noti7-tab", a)
    });
    this.Zg.h(this.wrap); ! Ak.pb && !Ln() && (this.Tl = y.map(this.contents,
    function(a) {
        var c = new Bq;
        c.h(a);
        return c
    }));
    Ak.pb && (this.tv = l); (new lu(this.Tu[1], "people", ["zg-follow", "zg-unfollow"])).k();
    this.Hl = H("zh-top-nav-pm-count");
    this.Hl || (this.Hl = K("span"));
    this.zl = H("zh-top-nav-new-pm");
    this.zl || (this.zl = K("span"));
    this.In = parseInt($(this.zl).attr("data-count") || $(this.Hl).attr("data-count"), 10) || 0;
    this.zE = H("zh-top-nav-count-wrap");
    if(this.zE) {
    this.zE.innerHTML && (this.count = +this.zE.innerHTML);
    }
    this.e().c(U, "inbox", this.EM)
};
r.Vq = function(a) { ! uc(this.wrap, a.target) && !uc(this.fq, a.target) && ru(this, l)
};
function qu(a, b) {
    a.Tl && y.forEach(a.Tl,
    function(a, d) {
        b === d ? a.wv || (a.e().c(a.YN, "scroll",
        function() {
            this.Jz.fire()
        }), z || (a.e().c(a.Lp, "click", a.DP), a.e().c(document, "mousedown", a.lQ), a.e().c(document, "mouseup", a.nQ), a.e().c(document, "mousemove", a.mQ)), a.options.HJ ? (a.Bb = new Id(200), a.e().c(a.Bb, Kd,
        function() {
            2 === this.Hx || 1 === this.Hx ? (Dq(this), this.To && this.rk.css({
                opacity: this.options.yB
            })) : !this.zq && !this.Im && (Eq(this, 1E3), this.rk.css({
                opacity: 0
            }))
        })) : (a.fe.css({
            opacity: a.options.su
        }), a.rk.css({
            opacity: a.options.yB
        })), a.Bb && a.Bb.start(), Eq(a), a.wv = i) : a.wv && (a.e().Ac(), a.Bb && a.Bb.stop(), a.wv = l)
    })
}
r.S = function(a) {
    var b = a.target;
    b && b.name && "set" === b.name && this.uY(a)
};
r.TM = function(a) {
    this.jF = this.vg;
    this.vg = a.lb;
    this.hc = this.vg[0] + this.vg[1] + this.vg[2];
    S(this.Zm, !!this.hc);
    this.Zm.innerHTML = 99 < this.hc ? "99+": this.hc;
    y.forEach(this.vg,
    function(a, c) {
        S(this.dF[c], a);
        a && (this.Ai[c] = l);
        this.tv && 0 < a - this.jF[c] && this.el(c)
    },
    this);
    su(this)
};
function su(a) {
    var b = 99 < a.hc ? "99+": a.hc,
    c = 99 < a.In ? "99+": a.In;
    window.document.title = (b || c ? "(" + (a.In ? c + " 封私信": "") + (a.hc && a.In ? " / ": "") + (a.hc ? b + " 条消息": "") + ") ": "") + window.document.title.replace(/^(\(|\uff08)(\d)*(\+)?( )?(\u5c01\u79c1\u4fe1)?( \/ )?(\d)*(\+)?( )?(\u6761\u6d88\u606f)?(\)|\uff09)( )?/g, "")
}
r.BT = function() {
    if (Ak.pb && this.visible) ru(this, l);
    else if (this.visible && !this.hc) ru(this, l);
    else {
        ru(this, i);
        var a; ! this.Wu && !this.hc ? (a = (a = window.localStorage && localStorage.getItem("noti7-tab")) ? Number(a) : 0, this.Zg.select(a), this.bm[a] = i) : this.hc && (a = y.Ev(this.vg, pf), a = -1 === a ? 0 : a, this.Zg.select(a), this.bm[a] = i);
        U.Q({
            type: "ga_click_top_nav_noti",
            data: {
                Zg: this.SB,
                EH: +(this.hc || 0)
            }
        })
    }
    su(this)
};
function tu(a, b) {
    a.hc -= a.vg[b];
    S(a.dF[b], l);
    0 > a.hc && (a.hc = 0);
    S(a.Zm, !!a.hc);
    a.Zm.innerHTML = a.hc
}
function pu(a, b) {
    var c;
    a.tv ? a.visible && (a.Ai[b] ? (a.Tu[b].innerHTML = a.Ai[b], a.vg[b] && (c = new Y(l), c.ajax("/noti7/readall", "tab=" + a.types[b], "POST")), tu(a, b), a.Tl && a.Tl[b].update().scrollTop(), !a.hc && window.localStorage && localStorage.setItem("noti7-tab", b)) : (a.bm[b] = i, a.el(b))) : a.Ai[b] ? (a.Tu[b].innerHTML = a.Ai[b], tu(a, b)) : (a.bm[b] = i, a.el(b), c = new Y(l), c.ajax("/noti7/readall", "tab=" + a.types[b], "POST"))
}
function ru(a, b) {
    b ? a.lA.fadeIn(50) : a.lA.fadeOut(50);
    a.visible = b;
    E.enable(a.fq, "open", a.visible);
    b ? (y.forEach(a.Ai,
    function(a, b) {
        a || this.el(b)
    },
    a), Ak.pb && !Ln() && $(document.body).scrollTop(48), a.e().c(document, "click", a.Vq)) : a.e().ya(document, "click", a.Vq);
    qu(a, -1)
}
r.el = function(a) {
    if (!this.fl[a] || !this.fl[a].wb()) this.fl[a] = new Y(l),
    this.e().c(this.fl[a], "success",
    function(b) {
        this.Rx(b, a)
    }),
    this.fl[a].ajax("/noti7/stack/" + this.types[a] + "?r=" + Aa(), "", "GET")
};
r.Rx = function(a, b) {
    $(this.NO[b]).hide();
    var c = R(this.fl[b]);
    if (c) if (c.r) X(c.msg);
    else {
        this.Wu = i;
        if (c = c.msg) 1 === b && (c = '<div class="zm-noti7-content-head-item"><span class="zg-gray-normal">这些人最近关注了你</span></div>' + c);
        else switch (b) {
        case 0:
            c = "<div class='zm-noti7-popup-empty'>暂无新消息</div>";
            break;
        case 1:
            c = "<div class='zm-noti7-popup-empty'>有人关注你时会显示在这里</div>";
            break;
        case 2:
            c = "<div class='zm-noti7-popup-empty'>你的答案收到赞同、感谢时会显示在这里</div>"
        }
        this.Ai[b] = c;
        this.bm[b] && (pu(this, b), this.bm[b] = l)
    }
};
r.EM = function(a) {
    this.In = a = $.isNumeric(a) ? a: a.lb;
    0 !== a ? (this.zl.innerHTML = this.Hl.innerHTML = a, this.zl.style.visibility = this.Hl.style.visibility = "visible") : this.zl.style.visibility = this.Hl.style.visibility = "hidden";
    su(this)
};
function uu(a, b, c, d, f) {
    function g(a) {
        a && (a.tabIndex = 0, Pc(a, k.lc()), E.add(a, "goog-zippy-header"), vu(k, a), a && k.jE.c(a, "keydown", k.$P))
    }
    M.call(this);
    this.W = f || Sb();
    this.Oi = this.W.f(a) || j;
    this.Aq = this.W.f(d || j);
    this.Tk = (this.qx = ra(b) ? b: j) || !b ? j: this.W.f(b);
    this.qd = c == i;
    this.jE = new me(this);
    this.Gx = new me(this);
    var k = this;
    g(this.Oi);
    g(this.Aq);
    this.Xa(this.qd)
}
w(uu, zd);
r = uu.prototype;
r.dj = i;
r.m = function() {
    uu.g.m.call(this);
    Vc(this.jE);
    Vc(this.Gx)
};
r.lc = function() {
    return Xc.wA
};
r.R = n("Tk");
r.expand = function() {
    this.Xa(i)
};
r.collapse = function() {
    this.Xa(l)
};
r.toggle = function() {
    this.Xa(!this.qd)
};
r.Xa = function(a) {
    this.Tk ? S(this.Tk, a) : a && this.qx && (this.Tk = this.qx());
    this.Tk && E.add(this.Tk, "goog-zippy-content");
    this.Aq ? (S(this.Oi, !a), S(this.Aq, a)) : this.Oi && (E.enable(this.Oi, "goog-zippy-expanded", a), E.enable(this.Oi, "goog-zippy-collapsed", !a), Qc(this.Oi, Wc.oA, a));
    this.qd = a;
    this.dispatchEvent(new wu("toggle", this, this.qd))
};
r.vd = n("qd");
r.No = function(a) {
    this.dj != a && ((this.dj = a) ? (vu(this, this.Oi), vu(this, this.Aq)) : this.Gx.Ac())
};
function vu(a, b) {
    b && a.Gx.c(b, "click", a.ZP)
}
r.$P = function(a) {
    if (13 == a.keyCode || 32 == a.keyCode) this.toggle(),
    this.dispatchEvent(new ad("action", this)),
    a.preventDefault(),
    a.stopPropagation()
};
r.ZP = function() {
    this.toggle();
    this.dispatchEvent(new ad("action", this))
};
function wu(a, b, c) {
    ad.call(this, a, b);
    this.Vc = c
}
w(wu, ad);
function xu() {
    M.call(this);
    this.Ec = [];
    this.Qk = [];
    this.rv = {};
    this.G = new me(this);
    this.lO = this.bE = l;
    this.Uz = i
}
w(xu, zd);
r = xu.prototype;
r.BD = 0;
r.KG = ca("BD");
function yu(a, b, c) {
    b.gC = c;
    b.Ki = h;
    a.Ec.push(b)
}
r.k = function() {
    if (!this.bE) {
        for (var a = 0,
        b = this.Ec.length; a < b; a++) for (var c = qc(this.Ec[a]), d = 0, f = c.length; d < f; ++d) {
            var g = c[d],
            k = g,
            m = ta(k);
            this.rv[m] = g;
            this.jC && (this.G.c(g, "mouseover", this.tM), this.G.c(g, "mouseout", this.sM));
            this.iC && (this.G.c(k, "mouseover", this.rM), this.G.c(k, "mouseout", this.qM));
            this.Qk.push(g);
            this.G.c(k, ["mousedown", "touchstart"], this.ZM)
        }
        this.bE = i
    }
};
r.m = function() {
    this.G.w();
    for (var a = 0,
    b = this.Ec.length; a < b; a++) {
        var c = this.Ec[a];
        c.gC = h;
        c.Ki = h
    }
    this.Ec.length = 0;
    this.Qk.length = 0;
    this.rv = j;
    zu(this);
    xu.g.m.call(this)
};
function Au(a, b) {
    for (var c = 0,
    d = a.Ec.length; c < d; c++) {
        var f = a.Ec[c];
        f.Pk = qg(f)
    }
    c = 0;
    for (d = a.Qk.length; c < d; c++) f = a.Qk[c],
    f != b && (f.Pk = qg(f))
}
r.ZM = function(a) {
    var b = ta(a.currentTarget);
    this.ra = this.rv[b];
    a: {
        var b = this.ra,
        c = b.cloneNode(i);
        switch (b.tagName.toLowerCase()) {
        case "tr":
            b = K("table", j, K("tbody", j, c));
            break a;
        case "td":
        case "th":
            b = K("table", j, K("tbody", j, K("tr", j, c)));
            break a;
        default:
            b = c
        }
    }
    this.tb = b;
    this.yq && E.add(this.tb, this.yq);
    this.tb.style.margin = "0";
    this.tb.style.position = "absolute";
    this.tb.style.visibility = "hidden";
    Ub(this.ra).body.appendChild(this.tb);
    b = fg(this.ra);
    mg(this.tb, b);
    this.ub = new Ok(this.tb);
    this.ub.KG(this.BD);
    N(this.ub, "start", this.gw, l, this);
    N(this.ub, "end", this.oM, l, this);
    N(this.ub, "earlycancel", this.Lu, l, this);
    this.ub.em(a)
};
r.gw = function(a) {
    if (this.dispatchEvent(new Bu("beforedragstart", this, a.mB, this.ra, j, j))) {
        this.ms = this.ra.parentNode;
        this.KB = this.by = this.ra.nextElementSibling != h ? this.ra.nextElementSibling: sc(this.ra.nextSibling, i);
        this.Yu = this.ms;
        this.Xu ? E.add.apply(j, y.concat(this.ra, this.Xu)) : this.ra.style.visibility = "hidden";
        var b = og(this.tb);
        this.tb.ZL = b.width / 2;
        this.tb.YL = b.height / 2;
        this.tb.style.visibility = "";
        this.Uz && (this.ra.style.display = "none");
        Au(this, this.ra);
        this.ra.style.display = "";
        N(this.ub, "drag", this.uM, l, this);
        this.dispatchEvent(new Bu("dragstart", this, a.mB, this.ra, this.tb, this.ub))
    } else a.preventDefault(),
    this.Lu()
};
r.uM = function(a) {
    var b = fg(this.tb),
    b = new Ob(b.x + this.tb.ZL, b.y + this.tb.YL),
    c;
    a: {
        c = j;
        if ("none" != this.ra.style.display) {
            c = this.ra.parentNode;
            var d = qg(c);
            if (Cu(b, d)) break a
        }
        for (var d = 0,
        f = this.Ec.length; d < f; d++) {
            var g = this.Ec[d];
            if (g != c && Cu(b, g.Pk)) {
                c = g;
                break a
            }
        }
        c = j
    }
    var k;
    if (c) {
        c == j && e(Error("getHoverNextItem_ called with null hoverList."));
        var m, q, d = l,
        f = h;
        switch (c.gC) {
        case 0:
            k = b.y;
            m = Du;
            q = Eu;
            break;
        case 4:
            d = i;
        case 2:
            k = b.x;
            m = Fu;
            q = Eu;
            break;
        case 5:
            d = i;
        case 3:
            k = b.x,
            m = Gu,
            q = Hu
        }
        for (var g = j,
        s, x = qc(c), C = 0, J = x.length; C < J; C++) {
            var G = x[C];
            if (G != this.ra) {
                var P = m(G.Pk);
                if (d) {
                    var W = Iu(G, b);
                    la(f) || (f = W);
                    if (q(k, P) && (s == h || W < f || W == f && (q(P, s) || P == s))) g = G,
                    s = P;
                    W < f && (f = W)
                } else if (q(k, P) && (s == h || q(P, s))) g = G,
                s = P
            }
        }
        k = g !== j && Iu(g, b) > f ? j: g
    } else k = j;
    if (!this.dispatchEvent(new Bu("beforedragmove", this, a, this.ra, this.tb, this.ub, b, c, k))) return l;
    if (c) this.Uz ? (this.ra.parentNode != c || (this.ra.nextElementSibling != h ? this.ra.nextElementSibling: sc(this.ra.nextSibling, i)) != k) && c.insertBefore(this.ra, k) : k && (this.KB = k),
    this.ra.style.display = "",
    c.Ki && E.add(c, c.Ki);
    else {
        this.lO || (this.ra.style.display = "none");
        m = 0;
        for (q = this.Ec.length; m < q; m++) s = this.Ec[m],
        s.Ki && E.remove(s, s.Ki)
    }
    c != this.Yu && (this.Yu = c, Au(this, this.ra));
    this.dispatchEvent(new Bu("dragmove", this, a, this.ra, this.tb, this.ub, b, c, k));
    return l
};
r.Lu = function() {
    zu(this);
    this.ub = this.tb = this.by = this.ms = this.Yu = this.ra = j;
    for (var a = 0,
    b = this.Ec.length; a < b; a++) this.Ec[a].Pk = j;
    a = 0;
    for (b = this.Qk.length; a < b; a++) this.Qk[a].Pk = j
};
r.oM = function(a) {
    if (!this.dispatchEvent(new Bu("beforedragend", this, a, this.ra, this.tb, this.ub))) return l;
    this.Uz || this.ms.insertBefore(this.ra, this.KB);
    zu(this);
    this.dispatchEvent(new Bu("dragend", this, a, this.ra, this.tb, this.ub));
    this.Lu();
    return i
};
function zu(a) {
    Vc(a.ub);
    a.tb && L(a.tb);
    a.ra && "none" == a.ra.style.display && (a.ms.insertBefore(a.ra, a.by), a.ra.style.display = "");
    a.Xu && a.ra ? E.remove.apply(j, y.concat(a.ra, a.Xu)) : a.ra && (a.ra.style.visibility = "visible");
    for (var b = 0,
    c = a.Ec.length; b < c; b++) {
        var d = a.Ec[b];
        d.Ki && E.remove(d, d.Ki)
    }
}
r.tM = function(a) {
    E.add.apply(j, y.concat(a.currentTarget, this.jC))
};
r.sM = function(a) {
    E.remove.apply(j, y.concat(a.currentTarget, this.jC))
};
r.rM = function(a) {
    E.add.apply(j, y.concat(a.currentTarget, this.iC))
};
r.qM = function(a) {
    E.remove.apply(j, y.concat(a.currentTarget, this.iC))
};
function Cu(a, b) {
    return a.x > b.left && a.x < b.left + b.width && a.y > b.top && a.y < b.top + b.height
}
function Iu(a, b) {
    var c = a.Pk;
    return Math.abs(b.y - (c.top + (c.height - 1) / 2))
}
function Du(a) {
    return a.top + a.height - 1
}
function Fu(a) {
    return a.left + a.width - 1
}
function Gu(a) {
    return a.left || 0
}
function Eu(a, b) {
    return a < b
}
function Hu(a, b) {
    return a > b
}
function Bu(a, b, c, d, f, g, k, m, q) {
    ad.call(this, a);
    this.xX = b;
    this.event = c;
    this.rX = d;
    this.yX = f;
    this.xq = g;
    this.zX = k;
    this.RX = m;
    this.SX = q
}
w(Bu, ad);
function Ju(a, b, c) {
    M.call(this);
    this.Fb = c || "搜索话题";
    this.L = b;
    this.data = a || [];
    this.status = "view";
    this.kG = "/topic/unbind";
    this.DA = "/topic/bind";
    this.isEnabled = i;
    this.Jn = '<a class="zm-tag-editor-tip-link" href="#" name="edit">帮忙给这个问题选个话题吧，好让别人来回答</a><a name="edit" class="zu-edit-button" href="#"><i class="zu-edit-button-icon"></i>添加</a>';
    this.Ad = 10;
    this.es = l;
    this.Xr = Infinity;
    this.$r = 0
}
w(Ju, ao);
var Ku = ["需要阐述清楚的问题", "需要重写的问题", "需要改进的问题"],
Lu = "零一二三四五六七八九十".split("");
r = Ju.prototype;
r.h = function(a) {
    this.d = a;
    this.Le = I("zm-tag-editor-labels", this.d);
    this.es && (this.data = this.gy());
    Mu(this);
    this.me();
    this.ua()
};
r.gy = function() {
    var a = Xb("zm-item-tag", this.Le);
    return y.map(a,
    function(a) {
        var c = [a.innerHTML, a.getAttribute("data-token"), j, a.getAttribute("data-topicid")];
        c.UT = !!a.getAttribute("data-uneditable");
        return c
    })
};
function Mu(a) {
    if (a.data.length) {
        var b = y.map(a.data,
        function(a) {
            return nn(a, y.contains(Ku, a[0]) ? "zg-sys-tag ": "", j, "b")
        },
        a);
        a.isEnabled && b.push(tn());
        a.Le.innerHTML = b.join("")
    } else a.isEnabled && (a.Le.innerHTML = a.Jn)
}
r.Si = function() {
    this.hb || (this.hb = K("div", "zm-tag-editor-editor", [this.zg = K("div", "zg-section zg-clear"), this.Jd = K("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.ha = K("input", {
        "class": "zg-form-text-input zg-mr15",
        type: "text"
    }), K("a", {
        "class": "zg-mr15 zg-btn-blue",
        href: "#",
        name: "add",
        style: "display:none;"
    },
    "添加"), this.EC = K("a", {
        href: "#",
        name: "close"
    },
    "完成")]), this.Yr = K("div", {
        className: "zm-tag-editor-maxcount zg-section",
        style: "display:none;"
    },
    [K("span", {},
    "最多只能为一个问题绑定 " + this.Xr + " 个话题"), K("a", {
        href: "#",
        name: "close"
    },
    "完成")])]), mc(this.hb, this.Le), this.Fb && (this.kx = new To(this.Fb), this.kx.h(this.ha), this.ha.title = this.Fb), this.ze(this.Jd))
};
r.ze = function(a) {
    this.u = new iq("/topic/autocomplete", this.ha, j, j, a, i);
    this.u.Je(i);
    this.u.Tf = this.Ad;
    this.u.Zl(this.gi());
    this.u.Gq = [this.Fb];
    this.e().c(this.u, "select", this.Al);
    this.e().c(this.u, $o.mg.lh, this.zp)
};
r.gi = function() {
    return u(function(a) {
        return y.filter(a,
        function(a) {
            return y.every(this.data,
            function(c) {
                return c[0] !== a[1]
            })
        },
        this)
    },
    this)
};
r.zp = function() {
    1 < this.u.Wa.length && !this.u.Wa[0][4] && hp(this.u)
};
r.ua = function() {
    this.e().c(this.d, "click", this.S);
    Zl && this.e().c(Zl, "anon_change", this.bj)
};
r.bj = function(a) {
    a.ab ? E.add(this.d, "zm-tag-editor-disabled") : E.remove(this.d, "zm-tag-editor-disabled")
};
r.S = function(a) {
    var b = this.Nd(a.target);
    if (b && b.name) switch (a.preventDefault(), b.name) {
    case "edit":
        if (!V.wf) {
            yt.v().n(i);
            break
        }
        this.zd(i);
        break;
    case "add":
        (a = pn(qn(this.ha.value))) && a !== this.ha.title && this.ke("", a);
        break;
    case "close":
        this.zd(l);
        break;
    case "remove":
        this.Tx(b)
    }
};
r.zd = function(a) {
    a && this.dispatchEvent("start_editing");
    this.status = a ? "edit": "view";
    this.Si();
    this.dd();
    this.me();
    Nu(this)
};
r.Tx = function(a) {
    var b = a.id.split("-")[1],
    c = tc(a).innerHTML;
    this.$r && this.data.length <= this.$r ? X("请至少绑定" + Lu[this.$r] + "个话题") : (this.data = y.filter(this.data,
    function(a) {
        return ! b ? a[1] !== c: String(a[3]) !== b
    }), this.Hj(b))
};
r.Hj = function(a) {
    if (!this.Gs || !this.Gs.wb()) {
        this.Gs = new Y(i);
        var b = new Np;
        b.add("qid", this.L).add("question_id", this.L).add("topic_id", a);
        Q(this.e(), this.Gs, "complete", this.$M);
        this.Gs.ajax(this.kG, b.toString())
    }
};
r.$M = function(a) {
    a = R(a.target);
    a.r ? X(a.msg) : (this.dispatchEvent("remove_tag"), Mu(this), this.dd(), Nu(this))
};
r.me = function() {
    "view" === this.status ? (S(this.Le, i), this.hb && S(this.hb, l)) : (S(this.Le, l), this.hb && this.isEnabled && S(this.hb, i), this.Yr && S(this.Yr, l))
};
r.ke = function(a, b) {
    this.bc || (this.dispatchEvent("add_tag"), this.bc = i, this.xhr = new Y(i), Q(this.e(), this.xhr, "complete", this.hu), this.xhr.ajax(this.DA, "qid=" + this.L + "&question_id=" + this.L + "&topic_id=" + a + "&topic_text=" + encodeURIComponent(b)))
};
r.Al = function() {
    var a = "",
    b = "",
    c = y.slice(this.u.te(), 1);
    3 < c.length ? (a = c[3], b = c[0]) : b = c[1];
    var d = l;
    y.forEach(this.data,
    function(c) {
        if (c[3] && String(c[3]) === a || c[0] === b) d = i
    });
    d || this.ke(a, b)
};
r.hu = function() {
    this.bc = l;
    var a = R(this.xhr);
    this.Zj(a);
    Nu(this)
};
r.Zj = function(a) {
    var b = j;
    a && a.r ? a.notify ? go(a.notify) : X(a.msg, 2E3) : (4 < a.length && go(a[4]), this.Ty = b = a, this.data.push(b), Mu(this), this.dd(), this.ha.value = "", this.dispatchEvent("select"))
};
r.NC = function(a) {
    return nn(a, "nor", l)
};
r.dd = function() {
    var a = y.map(this.data,
    function(a) {
        return ['<span class="zm-tag-editor-edit-item">', this.NC(a), a.UT ? "": '<a id="rmid-' + a[3] + '" href="#" class="zg-r3px zm-tag-editor-remove-button" name="remove"></a>', "</span>"].join("")
    },
    this);
    this.zg.innerHTML = a.join("")
};
r.te = n("Ty");
r.Pa = function(a) {
    this.isEnabled = a;
    this.status = "view";
    this.me()
};
function Nu(a) {
    var b = a.data.length >= a.Xr;
    a.Jd && S(a.Jd, !b);
    a.Yr && S(a.Yr, b)
}
function Ou(a, b, c) {
    Ju.call(this, a, 0, c ? "添加父话题": "添加子话题");
    this.fE = c;
    this.pf = b;
    this.Jn = "";
    this.lG = "/topic/parent/remove";
    this.NA = i
}
w(Ou, Ju);
r = Ou.prototype;
r.h = function(a) {
    if (this.isEnabled = !a.getAttribute("data-disabled")) Ou.g.h.call(this, a),
    this.zd(i),
    S(this.EC, l)
};
r.ze = function(a) {
    Ou.g.ze.call(this, a);
    this.u.Fe.BC = l
};
r.gi = function() {
    return u(function(a) {
        return y.filter(a,
        function(a) {
            return y.every(this.data,
            function(c) {
                return ! this.NA && 3 >= a.length ? l: c[0] !== a[1]
            })
        },
        this)
    },
    this)
};
r.ke = function(a, b) {
    this.bc || (this.bc = i, this.xhr = new Y(i), Q(this.e(), this.xhr, "complete", this.hu), a || (a = -1), this.fE ? this.xhr.ajax("/topic/add", "tid=" + this.pf + "&pid=" + a + "&topic_text=" + encodeURIComponent(b)) : this.xhr.ajax("/topic/add", "tid=" + this.pf + "&cid=" + a + "&topic_text=" + encodeURIComponent(b)))
};
r.NC = function(a) {
    return '<a class="nor" href="/topic/' + a[1] + '/organize">' + a[0] + "</a>"
};
r.Hj = function(a) {
    if (!this.ca || !this.ca.wb()) {
        var b = new Y(i);
        this.e().c(b, "success",
        function() {
            var c = R(b);
            c.r ? X(c.msg) : (Mu(this), this.dd(), this.dispatchEvent({
                type: "remove_tag",
                data: {
                    id: a
                }
            }))
        });
        this.fE ? b.ajax(this.lG, "cid=" + this.pf + "&pid=" + a) : b.ajax(this.lG, "pid=" + this.pf + "&cid=" + a);
        this.ca = b
    }
};
function Pu(a) {
    Ju.call(this);
    this.Jn = "";
    this.Fb = a || "";
    this.Xr = this.Ad = 5;
    this.qp = $("#zh-question-suggest-title-content")
}
w(Pu, Ju);
r = Pu.prototype;
r.h = function(a) {
    Pu.g.h.call(this, a);
    this.zd(i);
    y.forEach(Vb("a", j, a),
    function(a) {
        S(a, l)
    });
    this.e().c(this.ha, "focus",
    function() {
        this.qp.val() && !this.pC && (this.pC = i, this.yt());
        this.placeholder && (this.placeholder.ii("添加话题"), bq(this.placeholder, l))
    });
    this.iE = new Sg;
    this.iE.zf(this.ha);
    this.e().c(this.iE, "key",
    function(a) {
        8 === a.keyCode && (1 === this.ha.value.length && (this.eB = i, this.LJ = setTimeout(u(function() {
            this.eB = l;
            clearTimeout(this.LJ)
        },
        this))), !this.ha.value.length && !this.eB && (this.data.pop(), this.dd(), this.dispatchEvent("remove_tag")))
    });
    this.hT = new Zn(this.yt, 2E3, this);
    this.e().c(this.qp[0], "keyup",
    function() {
        var a = this.qp.val();
        this.gt !== a && (this.hT.fire(), this.gt = a)
    });
    this.e().c(this, ["remove_tag", "add_tag"],
    function() {
        Qu(this);
        0 < this.data.length && this.placeholder && (this.placeholder.ii("添加话题"), bq(this.placeholder, l));
        5 <= this.data.length ? (this.Pa(l), this.np.show(), this.placeholder && this.placeholder.hide(), this.Nt.hide()) : (this.Pa(i), this.np.hide(), this.placeholder && this.placeholder.show(), this.Nt.show(), this.np.removeClass("light"))
    })
};
r.gi = function() {
    return u(function(a) {
        return y.filter(a,
        function(a) {
            return y.every(this.data,
            function(c) {
                return c[1] !== a[1]
            })
        },
        this)
    },
    this)
};
r.Hj = function() {
    this.dispatchEvent("remove_tag");
    Mu(this);
    this.dd()
};
r.Si = function() {
    this.hb || (Pu.g.Si.call(this), E.add(this.hb, "zg-clear"), E.set(this.zg, "zg-inline"), E.add(this.Jd, "zg-left"), E.remove(this.Jd, "zg-section"), E.set(this.ha, "zu-question-suggest-topic-input"), E.add(this.ha, "label-input-label"), this.rp = $("<div class='sug-con zg-clear' style='display:none;'></div>").append("<span class='zg-gray-normal zg-left tip'>推荐添加</span>").append(this.hI = $("<span class='sugs zg-clear zg-inline'></span>")).append(this.jA = $("<img src='/static/img/spinner2.gif' style=''/>")), this.rp.insertAfter(this.d), this.rp.on("click", "a[name='add']", u(function(a) {
        a = a.currentTarget;
        5 > this.data.length ? this.ke($(a).attr("data-id"), $(a).attr("data-text")) : (this.np.addClass("light"), vn(this.hb))
    },
    this)), this.Nt = $("<label for='topic' class='zg-icon search-icon'></label>"), $(this.Jd).append(this.Nt), this.placeholder = new Zp(this.ha, {
        text: "添加话题",
        dB: i
    }), $(this.Jd).append(this.np = $("<label class='err-tip' style='display:none;'>最多添加五个话题</label>")))
};
r.to = function() {
    0 === this.data.length ? (this.placeholder.ii("至少添加一个话题"), bq(this.placeholder, i), vn(this.hb)) : 5 < this.data.length && vn(this.hb)
};
r.yt = function() {
    this.pC && (this.gt = this.qp.val(), 8 > this.gt.length ? (this.ht = [], Qu(this)) : (this.bp && this.bp.abort(), this.bp = new Y(l), this.e().c(this.bp, "success", this.GQ), this.bp.ajax("/topic-question/autocomplete?token=" + this.gt + "&max_matches=5&use_similar=0", "GET"), this.jA.show()))
};
r.GQ = function() {
    this.ht = R(this.bp)[0].slice(1);
    Qu(this)
};
function Qu(a) {
    var b;
    b = a.ht ? y.filter(a.ht,
    function(a) {
        return y.every(this.data,
        function(b) {
            return b[1] !== a[1]
        })
    },
    a) : [];
    a.rp.show(); (!b || 0 === b.length) && a.rp.hide();
    var c = "";
    b = y.map(b,
    function(a) {
        return "<a href='javascript:;' name='add' data-id='" + a[4] + "' data-text='" + a[1] + "' class='zg-r3px zm-item-tag'><span>" + a[1] + "</span></a>"
    });
    c += b.join("");
    a.hI.html(c);
    a.jA.hide()
}
r.dd = function() {
    var a = [];
    y.forEach(this.data,
    function(b) {
        a.push(['<div class="zm-tag-editor-edit-item"><span>', b[0], '</span><a id="rmid-', b[3], '" href="#" class="zg-r3px zm-tag-editor-remove-button" name="remove"></a></div>'].join(""))
    },
    this);
    this.zg.innerHTML = a.join("")
};
r.reset = function() {
    this.data = [];
    Mu(this);
    this.dd()
};
r.Tx = function(a) {
    var b = a.id.split("-")[1],
    c = tc(a).innerHTML;
    this.data = y.filter(this.data,
    function(a) {
        return ! b ? a[1] !== c: String(a[3]) !== b
    });
    this.Hj(b)
};
r.ke = function(a, b) {
    var c = [b, b, "", a];
    this.Ty = c;
    this.data.push(c);
    Mu(this);
    this.dd();
    this.ha.value = "";
    this.dispatchEvent("select");
    this.dispatchEvent("add_tag")
};
r.Pa = function(a) {
    this.ha && S(this.ha, a)
};
function Ru(a) {
    Ju.call(this, [], 0);
    this.NB = this.Kr = j;
    this.fB = "/reviewq/question?queue_id=" + a + "&task_id="
}
w(Ru, Ju);
Ru.prototype.NQ = function() {
    this.locked = l;
    var a = R(this.Oz);
    a && a.r ? X(a.msg) : (this.data = a.msg, this.zd(i), Mu(this))
};
function Su() {
    Ju.call(this);
    this.Jn = "";
    this.Fb = "擅长的领域"
}
w(Su, Ju);
r = Su.prototype;
r.h = function(a) {
    Su.g.h.call(this, a);
    this.zd(i);
    y.forEach(Vb("a", j, a),
    function(a) {
        S(a, l)
    })
};
r.ke = function(a, b) {
    var c = [b, b, "", a];
    this.Ty = c;
    this.data.push(c);
    Mu(this);
    this.dd();
    this.jZ = a;
    this.kZ = b;
    this.ha.value = "";
    this.dispatchEvent("add_tag")
};
r.Hj = function() {
    this.dispatchEvent("remove_tag");
    Mu(this);
    this.dd();
    S(this.ha, i)
};
r.dd = function() {
    var a = [];
    y.forEach(this.data,
    function(b) {
        a.unshift(['<div class="zm-tag-editor-edit-item"><span>', b[0], '</span><a id="rmid-', b[3], '" href="#" class="zg-r3px zm-tag-editor-remove-button" name="remove"></a></div>'].join(""))
    },
    this);
    this.zg.innerHTML = a.join("")
};
r.Si = function() {
    this.hb || (Su.g.Si.call(this), E.add(this.ha, "zu-question-suggest-topic-input"), mc(this.zg, this.Jd))
};
r.Tx = function(a) {
    var b = a.id.split("-")[1],
    c = tc(a).innerHTML;
    this.data = y.filter(this.data,
    function(a) {
        return ! b ? a[1] !== c: String(a[3]) !== b
    });
    this.Hj(b)
};
r.ze = function(a) {
    this.u = new iq("/topic-reg/autocomplete?no_add=1", this.ha, j, j, a, i);
    this.u.Je(i);
    this.u.Tf = this.Ad;
    this.u.Zl(this.gi());
    this.u.Gq = [this.Fb];
    this.e().c(this.u, "select", this.Al);
    this.e().c(this.u, $o.mg.lh, this.zp)
};
function Tu() {
    Ju.call(this, j, j, "搜索话题");
    this.PB = j;
    this.Fb = "";
    this.data = [Dk[0]]
}
w(Tu, Ju);
r = Tu.prototype;
r.h = function(a) {
    this.d = a;
    this.Le = I("zm-tag-editor-labels", this.d);
    this.zd(i);
    this.me();
    this.ua()
};
r.Si = function() {
    this.hb || (this.hb = K("div", "zm-tag-editor-editor", [this.zg = K("div", "zg-section zg-clear"), this.Jd = K("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.ha = H("zh-topic-merge-input"), K("a", {
        "class": "zg-mr15 zg-btn-blue",
        href: "#",
        name: "add",
        style: "display:none;"
    },
    "添加"), this.EC = H("zh-topic-merge-btn")])]), mc(this.hb, this.Le), this.ze(this.Jd))
};
r.ze = function(a) {
    this.u = new iq("/topic/autocomplete", this.ha, j, j, a, i);
    this.u.Je(i);
    this.u.Tf = this.Ad;
    this.u.Zl(this.gi());
    this.u.Gq = [this.Fb];
    this.e().c(this.u, "select", this.Al);
    this.e().c(this.u, $o.mg.lh, this.zp)
};
r.gi = function() {
    return u(function(a) {
        return y.filter(a,
        function(a) {
            return y.every(this.data,
            function(c) {
                return c[1] !== a[1] && 3 < a.length
            })
        },
        this)
    },
    this)
};
r.Al = function() {
    var a = y.slice(this.u.te(), 1);
    a && 3 < a.length && (this.TB = a, this.ke(a[3], a[0]))
};
r.ke = function(a, b) {
    var c = this;
    setTimeout(function() {
        c.ha.value = b
    });
    this.PB = a
};
r.dd = ba();
function Uu(a) {
    Ju.call(this, a, 0);
    this.Jn = "";
    this.jB = "/topic/ignore"
}
w(Uu, Ou);
Uu.prototype.ke = function(a) {
    this.bc || (this.bc = i, this.xhr = new Y(i), Q(this.e(), this.xhr, "complete", this.hu), this.xhr.ajax(this.jB, "tid=" + a + "&method=add"))
};
Uu.prototype.Hj = function(a) {
    this.bc || (this.bc = i, this.xhr = new Y(i), this.e().c(this.xhr, "complete",
    function() {
        Mu(this);
        this.dd();
        this.bc = l
    }), this.xhr.ajax(this.jB, "tid=" + a + "&method=del"))
};
function Vu(a) {
    Ju.call(this);
    this.PB = j;
    this.Fb = "例如：互联网、医学、法律、数学...";
    this.data = a || []
}
w(Vu, Ju);
r = Vu.prototype;
r.h = function(a) {
    this.d = a;
    this.Le = I("zm-tag-editor-labels", this.d);
    this.zd(i);
    this.me();
    this.ua();
    this.Gf = H("zh-expert-topics");
    this.zm = H("zh-active-topics");
    if (this.Gf) $(this.Gf).on("click", ".del", $.proxy(function(a) {
        var c = $(a.target).parents(".item");
        c.data("active") ? (nc(this.zm, c[0]), un(c[0])) : L(c[0]);
        y.forEach(this.data,
        function(a, b) {
            a + "" === c.data("url-token") + "" && this.data.splice(b, 1)
        },
        this);
        Wu(this);
        this.dispatchEvent("remove")
    },
    this));
    if (this.zm) $(this.zm).on("click", ".add", $.proxy(function(a) {
        a = $(a.target).parents(".item");
        nc(this.Gf, a[0]);
        un(a[0]);
        Wu(this);
        this.dispatchEvent("add")
    },
    this));
    this.data = $("#zh-expert-topics .item").map(function() {
        return $(this).data("url-token")
    }).get();
    this.Ql()
};
r.Si = function() {
    this.hb || (this.hb = K("div", "zm-tag-editor-editor", [this.Jd = K("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.ha = H("profile-expert-edit-input")])]), this.Fb && (this.kx = new To(this.Fb), this.kx.h(this.ha), this.ha.title = this.Fb), mc(this.hb, this.Le), this.ze(this.Jd))
};
r.ze = function(a) {
    this.u = new iq("/topic/autocomplete", this.ha, j, j, a, i);
    this.u.Je(i);
    this.u.Tf = this.Ad;
    this.u.Zl(this.gi());
    this.u.Gq = [this.Fb];
    this.e().c(this.u, "select", this.Al);
    this.e().c(this.u, $o.mg.lh, this.zp);
    this.e().c(this.u, $o.mg.lh, this.eu);
    this.e().c(this.u, $o.mg.pI,
    function() {
        $(this.u.F.d).hide()
    })
};
r.eu = function() {
    if (0 === this.u.Wa.length) {
        var a = K("div", {
            className: "zu-autocomplete-empty"
        },
        "没有名字为 " + $(this.ha).val() + " 的话题");
        $(this.u.F.d).html(a).show()
    }
};
r.Al = function() {
    var a = y.slice(this.u.te(), 1);
    a && 3 < a.length && (this.TB = a, this.ke(a))
};
r.ke = function(a) {
    this.data.push(a[1]);
    var b = $(this.Gf).find("[data-url-token='" + a[1] + "']")[0];
    b ? un(b) : (Pm("TopicMediumV2", {
        member_url_token: V[1],
        topic_url_token: a[1]
    },
    this.GK, this), $(this.zm).find("[data-url-token='" + a[1] + "']").remove(), this.dispatchEvent("add"))
};
r.GK = function(a) {
    a = $(a)[0];
    nc(this.Gf, a);
    un(a);
    Wu(this)
};
r.dd = ba();
r.Ql = function() {
    if (!Ak.pb) {
        var a = this;
        this.Df && this.Df.w();
        var b = new xu;
        b.yq = "expert-item-moving";
        yu(b, this.Gf, 4);
        b.k();
        this.Df = b;
        this.e().c(this.Df, "dragend",
        function() {
            this.dispatchEvent("sort")
        });
        $("a, input, .del, .add", this.Gf).each(function() {
            a.e().c(this, "mousedown",
            function(a) {
                a.stopPropagation()
            })
        });
        this.e().c(this.Df, "beforedragstart",
        function() {
            return I("editing", this.Gf) ? l: i
        })
    }
};
function Wu(a) {
    var b = $(a.Gf).children().length;
    6 < b && L($(a.Gf).children()[6]);
    S(H("zh-profile-expert-empty"), 0 >= b);
    0 < b && S(H("zh-profile-expert-warning"), l);
    S(H("active-topics-wrap"), $(a.zm).children().length);
    a.Ql()
}
r.gi = function() {
    return u(function(a) {
        return y.filter(a,
        function(a) {
            return y.every(this.data,
            function(c) {
                return c + "" !== a[2] + "" && 3 < a.length
            })
        },
        this)
    },
    this)
};
function Xu(a, b) {
    var c = a ? Sb(a) : b;
    T.call(this, c);
    this.iR = a || this.B().va().body;
    this.cy = {};
    Yu.push(this);
    this.Qs = i
}
w(Xu, T);
var Zu = 0,
Yu = [];
Xu.prototype.Zd = j;
Xu.prototype.$k = l;
Xu.prototype.ns = 0;
var $u = z ? "styleFloat": "cssFloat",
av = ["position", "top", "left", "width", $u],
bv = ["position", "top", "left", "display", $u, "marginTop", "marginLeft", "marginRight", "marginBottom"];
r = Xu.prototype;
r.j = function() {
    Xu.g.j.call(this);
    this.Z(this.f())
};
r.Z = function(a) {
    Xu.g.Z.call(this, a);
    E.add(a, "goog-scrollfloater")
};
r.p = function() {
    Xu.g.p.call(this);
    this.xu = zg(document.body).top - 2;
    this.Zd || (this.Zd = this.B().j("div", {
        style: "visibility:hidden"
    }));
    this.ns = fg(this.f()).y;
    cv(this, this.Qs);
    var a = this.Kz = new Zn(this.gp, 150, this);
    this.e().c(window, "scroll", a.fire, l, a);
    this.e().c(window, "resize", Vn(150, this.sw))
};
r.m = function() {
    Xu.g.m.call(this);
    y.remove(Yu, this);
    this.Kz.w();
    this.ex && (Zu -= this.OB);
    delete this.Zd
};
function cv(a, b) { (a.Qs = b) ? a.gp() : dv(a)
}
r.gp = function() {
    this.Qs && (Oc(this.B()).y + this.xu > this.ns ? ev(this) : dv(this))
};
function ev(a) {
    if (!a.$k) {
        var b = a.f(),
        c = fg(b).x,
        d = wg(b).width;
        a.cy = {};
        F.forEach(av,
        function(a) {
            this.cy[a] = b.style[a]
        },
        a);
        F.forEach(bv,
        function(a) {
            this.Zd.style[a] = b.style[a] || Wf(b, a) || Vf(b, a)
        },
        a);
        ng(a.Zd, b.offsetWidth, b.offsetHeight);
        Rf(b, {
            left: c + "px",
            width: d + "px",
            cssFloat: "none"
        });
        b.parentNode.replaceChild(a.Zd, b);
        a.iR.appendChild(b);
        b.style.position = "fixed";
        a.Do();
        E.add(b, "goog-scrollfloater-floating");
        a.$k = i
    }
}
r.Do = function() {
    var a = this.f(),
    b = this.xu; ! this.ex && 0 < Zu && (b += Zu);
    a.style.top = b + "px"
};
function dv(a) {
    if (a.$k) {
        var b = a.f();
        F.forEach(a.cy,
        function(a, d) {
            b.style[d] = a
        });
        a.Zd.parentNode.replaceChild(b, a.Zd);
        E.remove(b, "goog-scrollfloater-floating");
        a.$k = l
    }
}
r.sw = function() {
    dv(this);
    this.ns = fg(this.f()).y;
    this.gp()
};
function fv(a) {
    a.ex = i;
    a.OB = wg(a.f()).height;
    Zu += a.OB;
    y.forEach(Yu,
    function(a) {
        a && (!a.ex && a.$k) && a.Do()
    })
}
function gv(a, b, c) {
    Xu.call(this, a, c);
    this.LR = b;
    this.hk = ""
}
w(gv, Xu);
gv.prototype.gp = function() {
    var a, b = this.hk;
    a = b && y.find(Yu,
    function(a) {
        return b === a.hk && a.$k
    });
    if (this.Qs && (!a || a === this)) {
        a = this.LR.getBoundingClientRect();
        var c = this.xu + Zu;
        a.top < c && a.bottom > c + 100 ? ev(this) : dv(this)
    }
};
function hv() {}
hv.prototype.wg = function(a, b, c) {
    function d() {
        var d = window.ZH.createRichTextEditor(a, b),
        f = d[0],
        d = d[1];
        c && c(f, d)
    }
    var f = wf.v(),
    g = f.xc.rich_text_editor;
    g.wd() ? (f.wa.info("rich_text_editor module already loaded"), f = new tf(d, h), window.setTimeout(u(f.execute, f), 0)) : zf(f, "rich_text_editor") ? (f.wa.info("rich_text_editor module already loading"), g.Ds(d, h)) : (f.wa.info("Registering callback for module: rich_text_editor"), g.Ds(d, h), f.wa.info("Initiating module load: rich_text_editor"), Cf(f, ["rich_text_editor"]))
};
function iv(a, b, c, d) {
    T.call(this);
    this.status = this.field = this.Lc = j;
    this.dE = a;
    this.YO = d || 0;
    this.yG = b;
    this.mq = c;
    this.isEnabled = i;
    this.MC = l;
    this.zc = [];
    this.content = j;
    this.ZX = this.YO ? i: l;
    this.At = l;
    this.hn = $.Deferred()
}
w(iv, T);
r = iv.prototype;
r.Z = function(a) {
    iv.g.Z.call(this, a);
    var b = a.getAttribute("data-resourceid");
    b && (this.eS = a.getAttribute("data-action"), this.Ls = b);
    this.status || (this.status = "normal");
    a = this.B();
    this.od || (this.od = a.Yi("zm-editable-content", this.d), "1" === this.od.getAttribute("data-disabled") && (this.disabled = i));
    this.gc ? this.Lc && (this.gc.innerHTML = this.Lc) : (this.gc = a.Yi("zm-editable-tip", this.d), this.Lc && !this.gc && (this.gc = a.j("div", "zm-editable-tip"), this.gc.innerHTML = this.Lc, a.Mn(this.gc, this.od)));
    this.Mb = a.Yi("zm-editable-editor-wrap", this.d);
    this.content = Oa(this.content || this.At ? Gc(this.od) : this.od.innerHTML);
    this.me();
    jv(this)
};
r.j = function() {
    var a = this.B(),
    a = a.j("div", "zm-editable-item-wrap", [this.gc = a.j("div", "zm-editable-tip"), this.od = a.j("div", "zm-editable-content", this.content)]);
    this.Z(a)
};
r.p = function() {
    iv.g.p.call(this);
    this.e().c(this.od, "click", this.S);
    this.gc && this.e().c(this.gc, "click", this.S)
};
r.Fa = function(a) {
    this.content = a;
    jv(this)
};
r.S = function(a) {
    var b = zn(this.d, a.target),
    c = this.B();
    if (!b || !b.name) return a = c.QL(a.target, "div", "zm-editable-tip-label"),
    this.isEnabled && a && this.dg(),
    i;
    a = b.name;
    switch (a) {
    case "expand":
        jv(this);
        break;
    case "collapse":
        jv(this);
        break;
    case "edit":
        if (!V.wf) {
            yt.v().n(i);
            return
        }
        this.k();
        this.dg();
        this.dispatchEvent("click_edit");
        break;
    case "save":
        this.nD();
        break;
    case "cancel":
        this.dispatchEvent("cancel_edit");
        kv(this);
        break;
    default:
        return this.jl(a)
    }
    return i
};
r.nD = function() {
    var a = pn(this.Lf()),
    b = /<embed/i.test(a);
    if (/<img/i.test(a) || b || this.dE || (!a ? 0 : qn(a).length)) a === this.content && !this.MC ? (this.dispatchEvent("save_unchanged"), kv(this)) : (this.dispatchEvent("save_changed"), this.hf(a))
};
r.hf = function(a) {
    this.mq && this.yG ? this.bc || (this.bc = i, this.xhr = new Y(i), a = this.mq + "=" + encodeURIComponent(a) + "&field_name=" + this.mq, a = 0 < this.zc.length ? this.zc.join("&") + "&" + a: a, Q(this.e(), this.xhr, "complete", this.JA), this.xhr.ajax(this.yG, a)) : this.dispatchEvent("change")
};
function kv(a) {
    a.status = "normal";
    a.me()
}
r.JA = function() {
    this.bc = l;
    var a = R(this.xhr);
    a && (a.r ? X(a.msg) : (this.Fa(a.msg), kv(this), this.dispatchEvent("change")))
};
r.$a = n("content");
r.Rd = n("Na");
r.isContentEditable = function() {
    return ! this.sd
};
r.Lf = function() {
    return rn(Qa(this.Na.value))
};
r.jl = function(a) {
    this.dispatchEvent(a);
    return i
};
r.k = function() {
    this.cr || (this.cr = i, this.wg())
};
r.tr = function() {
    var a = this.Na;
    if (a.f) {
        var b = u(function() {
            this.pY = new It(a.f(), {
                Lj: this.Ni
            })
        },
        this);
        a.wd() ? b() : a.addEventListener("load", b)
    }
};
r.wg = function() {
    var a = this.B();
    this.Mb ? (this.Sc = a.Yi("zm-command", this.Mb), this.Na = a.Yi("zm-editable-editor-input", this.Mb)) : (this.Mb = a.j("div", "zm-editable-editor-wrap clearfix", this.Ni = a.j("div", "zm-editable-editor-outer", a.j("div", "zm-editable-editor-inner zg-form-text-input", this.Na = a.j("textarea", "zm-editable-editor-input")))), a.Ww(this.Mb, this.od), this.Ci());
    this.Na && (this.Na.tagName && "TEXTAREA" === this.Na.tagName && !this.tq) && new Xo(this.Na, 66);
    this.oo()
};
r.oo = function() {
    this.e().c(this.Sc, "click", this.S);
    this.zt && this.tr();
    var a = this.Na;
    if (a.f) a.on("load",
    function() {
        new At(a.f(), {
            Fy: this.zt ? Kt: []
        })
    },
    l, this);
    this.hn.resolveWith(this)
};
r.Ci = function() {
    this.Sc = K("div", "zm-command", [this.fX = K("a", {
        "class": "zm-command-cancel",
        name: "cancel",
        href: "javascript:;"
    },
    "取消"), this.Ym = K("a", {
        "class": "zg-r3px zg-btn-blue",
        name: "save",
        href: "javascript:;"
    },
    "保存")]);
    this.Mb.appendChild(this.Sc)
};
r.me = function() {
    this.lq && E.remove(this.d, this.lq);
    "editing" === this.status ? (this.gc && S(this.gc, l), this.Mb && S(this.Mb, i), S(this.od, l), this.lq = "zm-editable-status-editing") : (this.gc && (this.dE && !this.content && !this.disabled ? S(this.gc, i) : S(this.gc, l)), this.Mb && S(this.Mb, l), this.content ? S(this.od, i) : S(this.od, l), this.lq = "zm-editable-status-normal");
    E.add(this.d, this.lq)
};
r.dg = function() {
    this.Jq || (this.k(), this.hn.done(function() {
        this.status = "editing";
        this.me();
        this.Mo()
    }))
};
r.Mo = function() {
    if (this.Ls) this.Jq = i,
    lv(this);
    else {
        var a = this.Na,
        b;
        b = Za(this.content.replace(/<br \/>/g, "\n").replace(/<br>/g, "\n")).replace(/<a.*?href="(.*?)".*?<\/a>/g, "$1");
        a.value = b
    }
};
function jv(a) {
    if (a.dispatchEvent("shouldUpdateContent")) {
        var b = a.content,
        c = a.od,
        d;
        d = [];
      //  a.disabled || d.push('<a href="javascript:;" class="zu-edit-button" name="edit"><i class="zu-edit-button-icon"></i>修改</a>');
        d = d.join("");
        a.At ? (zc(c, b), c.appendChild(gc(d))) : c.innerHTML = b + d
    }
}
function lv(a) {
    a.Jq || (a.Jq = i, Sl(a.eS + "?id=" + a.Ls, u(function(a) {
        this.Jq = l;
        a = R(a.target);
        a.r ? X(a.msg) : this.Vy(a.msg)
    },
    a), "GET"))
}
r.Vy = function(a) {
    this.Na.value = a
};
function mv(a, b, c, d) {
    iv.call(this, a, b, c, d);
    this.hP = "mock" + this.Sd();
    this.sv = l;
    this.Vp = i;
    this.sd = !El;
    this.zt = l;
    this.Wz = this.dU = i;
    this.ux = ""
}
w(mv, iv);
r = mv.prototype;
r.Vy = function(a) {
    this.sd ? mv.g.Vy.call(this, a) : (a || (a = A ? "": "<div></div>"), this.Na.be(l, a, i))
};
function nv(a) {
    a.hn.done(function() {
        var a = this.Na;
        this.sd ? np(a, a.value.length) : a.field.lastChild ? ls(a.field.lastChild) : a.Jf();
        this.ln && (this.ln.scrollTop = this.ln.scrollHeight)
    })
}
r.Mo = function() {
    this.Ls ? lv(this) : this.sd ? mv.g.Mo.call(this) : this.content ? this.Na.be(l, this.content) : this.Na.be(l, B ? "<div><br></div>": "<div></div>")
};
r.wg = function() {
    if (this.sd) mv.g.wg.call(this);
    else {
        var a = this.B();
        this.Mb = a.j("div", "zm-editable-editor-wrap", this.Ni = a.j("div", "zm-editable-editor-outer", [this.ET = a.j("div", "zm-editable-toolbar-container"), this.ln = a.j("div", "zm-editable-editor-field-wrap", this.Vh = a.j("div", {
            id: this.hP,
            className: "zm-editable-editor-field-element"
        }))]));
        $(this.Mb).hide();
        a.Ww(this.Mb, this.od);
        this.Ls || (this.Vh.innerHTML = this.content);
        a = {
            loremIpsum_: this.ux,
            enableFullScreen: this.sv,
            content: this.content,
            useScraper_: this.dU,
            canUploadMedia_: this.Vp,
            useRemoveFormat_: this.Wz
        };
        this.Ci();
        var b = hv.Qh;
        b || (b = new hv);
        b.wg(this.Mb, a, u(this.oo, this));
        ub || (this.eh = new gv(j, this.Ni), this.eh.h(this.ET), cv(this.eh, l), dv(this.eh))
    }
};
r.oo = function(a, b) {
    if (this.sd) mv.g.oo.call(this);
    else {
        this.Na = a;
        var c = a.Hc.FullScreenPlugin;
        if (c) {
            var d = Jg(b, "toggleFullScreen");
            c.on("save", this.nD, l, this).on("willEnterFullScreen",
            function() {
                ov(this, l)
            },
            l, this).on("enterFullScreen",
            function() {
                d.Bd("退出写作模式")
            }).on("exitFullScreen",
            function() {
                d.Bd("写作模式")
            }).on("shouldExitFullScreenOnEscape",
            function() {
                return ! a.Fg
            })
        }
        $(this.Mb).show();
        mv.g.oo.call(this);
        if (c = a.Hc.CodePlugin) c.JG(b),
        c.vf()
    }
};
function ov(a, b) {
    if (a.eh) if (b) {
        E.add(a.ln, "zm-editable-editor-field-wrap-active");
        var c = a.eh;
        c.ns = fg(c.f()).y;
        cv(a.eh, i)
    } else E.remove(a.ln, "zm-editable-editor-field-wrap-active"),
    cv(a.eh, l)
}
r.dg = function() {
    mv.g.dg.call(this);
    this.hn.done(function() { ! this.sd && !this.mL && (this.mL = i, pd(this.Na, "load",
        function() {
            var a = this.Na,
            b = a.Hc.FullScreenPlugin;
            A && (a = a.field);
            N(a, ["focus", "blur"],
            function(a) { (!b || !E.has(document.body, b.s.tn)) && ov(this, "focus" === a.type)
            },
            l, this)
        },
        l, this), this.Na.zd())
    })
};
r.Lf = function() {
    if (this.sd) return mv.g.Lf.call(this);
    var a = this.Na,
    b = a.f();
    return (y.some(["img", "embed"],
    function(a) {
        return b.getElementsByTagName(a).length
    }) ? 0 : !qf(rn, Oa, Gc)(b)) ? "": a.bl()
};
r.me = function() {
    mv.g.me.call(this);
    this.eh && cv(this.eh, "editing" === this.status)
};
function pv() {
    this.pd = j
}
ja(pv);
pv.prototype.refresh = function() {
    return this.pd && "pending" === this.pd.state() ? this.pd: this.pd = $.post("/oauth/refresh",
    function(a) {
        var b = a.sina;
        b.id && U.dispatchEvent(new fo("sina_callback", b));
        Mk = b.id;
        a = a.qq;
        a.id && U.dispatchEvent(new fo("qq_callback", a));
        Nk = a.id
    })
};
function qv() {}
w(qv, Yg);
ja(qv);
qv.prototype.j = function(a) {
    var b = a.B().j("span", this.Xe(a).join(" "));
    rv(this, b, a.th);
    return b
};
qv.prototype.h = function(a, b) {
    var b = qv.g.h.call(this, a, b),
    c = E.get(b),
    d = sv;
    y.contains(c, tv(this, uv)) ? d = uv: y.contains(c, tv(this, vv)) ? d = vv: y.contains(c, tv(this, sv)) && (d = sv);
    a.th = d;
    Qc(b, Wc.tp, d == uv ? "mixed": d == vv ? "true": "false");
    return b
};
qv.prototype.lc = function() {
    return Xc.lI
};
function rv(a, b, c) {
    if (b) {
        var d = tv(a, c);
        E.has(b, d) || (F.forEach(wv,
        function(a) {
            a = tv(this, a);
            E.enable(b, a, a == d)
        },
        a), Qc(b, Wc.tp, c == uv ? "mixed": c == vv ? "true": "false"))
    }
}
qv.prototype.C = p("goog-checkbox");
function tv(a, b) {
    var c = a.C();
    if (b == vv) return c + "-checked";
    if (b == sv) return c + "-unchecked";
    if (b == uv) return c + "-undetermined";
    e(Error("Invalid checkbox state: " + b))
};
function xv(a, b, c) {
    c = c || qv.v();
    fh.call(this, j, c, b);
    this.th = la(a) ? a: sv
}
w(xv, fh);
var vv = i,
sv = l,
uv = j,
wv = {
    tp: vv,
    GW: sv,
    IW: uv
};
r = xv.prototype;
r.Ga = j;
r.Be = function() {
    return this.th == vv
};
r.Jc = function(a) {
    a != this.th && (this.th = a, rv(this.F, this.f(), this.th))
};
r.toggle = function() {
    this.Jc(this.th ? sv: vv)
};
r.p = function() {
    xv.g.p.call(this);
    if (this.dj) {
        var a = this.e();
        this.Ga && a.c(this.Ga, "click", this.fw).c(this.Ga, "mouseover", this.Yc).c(this.Ga, "mouseout", this.Nh).c(this.Ga, "mousedown", this.we).c(this.Ga, "mouseup", this.Nf);
        a.c(this.f(), "click", this.fw)
    }
    if (this.Ga) {
        if (!this.Ga.id) {
            var a = this.Ga,
            b;
            b = this.Sd() + ".lbl";
            a.id = b
        }
        Qc(this.f(), Wc.St, this.Ga.id)
    }
};
r.Pa = function(a) {
    xv.g.Pa.call(this, a);
    if (a = this.f()) a.tabIndex = this.isEnabled() ? 0 : -1
};
r.fw = function(a) {
    a.stopPropagation();
    var b = this.th ? "uncheck": "check";
    this.isEnabled() && this.dispatchEvent(b) && (a.preventDefault(), this.toggle(), this.dispatchEvent("change"))
};
r.af = function(a) {
    32 == a.keyCode && this.fw(a);
    return l
};
ch("goog-checkbox",
function() {
    return new xv
});
function yv() {};
function zv() {}
w(zv, yv);
zv.prototype.Ha = function() {
    var a = 0;
    O.forEach(this.Fd(i),
    function() {
        a++
    });
    return a
};
zv.prototype.clear = function() {
    var a = O.toArray(this.Fd(i)),
    b = this;
    y.forEach(a,
    function(a) {
        b.remove(a)
    })
};
function Av(a) {
    this.Xg = a
}
w(Av, zv);
r = Av.prototype;
r.bx = function() {
    try {
        return !! this.Xg && !!this.Xg.getItem
    } catch(a) {}
    return l
};
r.set = function(a, b) {
    try {
        this.Xg.setItem(a, b)
    } catch(c) {
        e("Storage mechanism: Quota exceeded")
    }
};
r.get = function(a) {
    a = this.Xg.getItem(a); ! t(a) && a !== j && e("Storage mechanism: Invalid value was encountered");
    return a
};
r.remove = function(a) {
    this.Xg.removeItem(a)
};
r.Ha = function() {
    return this.Xg.length
};
r.Fd = function(a) {
    var b = 0,
    c = this.Xg,
    d = new Nd;
    d.next = function() {
        b >= c.length && e(O.Ta);
        var d = c.key(b++);
        if (a) return d;
        d = c.getItem(d);
        t(d) || e("Storage mechanism: Invalid value was encountered");
        return d
    };
    return d
};
r.clear = function() {
    this.Xg.clear()
};
function Bv() {
    var a = j;
    try {
        a = window.localStorage || j
    } catch(b) {}
    this.Xg = a
}
w(Bv, Av);
function Cv(a, b) {
    if (z && !Gb(9)) {
        Dv || (Dv = new Od);
        this.gd = Dv.get(a);
        this.gd || (b ? this.gd = document.getElementById(b) : (this.gd = document.createElement("userdata"), this.gd.addBehavior("#default#userData"), document.body.appendChild(this.gd)), Dv.set(a, this.gd));
        this.Az = a;
        try {
            this.gd.load(this.Az)
        } catch(c) {
            this.gd = j
        }
    }
}
w(Cv, zv);
var Ev = {
    ".": ".2E",
    "!": ".21",
    "~": ".7E",
    "*": ".2A",
    "'": ".27",
    "(": ".28",
    ")": ".29",
    "%": "."
},
Dv = j;
r = Cv.prototype;
r.gd = j;
r.Az = j;
function Fv(a) {
    return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g,
    function(a) {
        return Ev[a]
    })
}
r.bx = function() {
    return !! this.gd
};
r.set = function(a, b) {
    this.gd.setAttribute(Fv(a), b);
    Gv(this)
};
r.get = function(a) {
    a = this.gd.getAttribute(Fv(a)); ! t(a) && a !== j && e("Storage mechanism: Invalid value was encountered");
    return a
};
r.remove = function(a) {
    this.gd.removeAttribute(Fv(a));
    Gv(this)
};
r.Ha = function() {
    return Hv(this).attributes.length
};
r.Fd = function(a) {
    var b = 0,
    c = Hv(this).attributes,
    d = new Nd;
    d.next = function() {
        b >= c.length && e(O.Ta);
        var d = c[b++];
        if (a) return decodeURIComponent(d.nodeName.replace(/\./g, "%")).substr(1);
        d = d.nodeValue;
        t(d) || e("Storage mechanism: Invalid value was encountered");
        return d
    };
    return d
};
r.clear = function() {
    for (var a = Hv(this), b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
    Gv(this)
};
function Gv(a) {
    try {
        a.gd.save(a.Az)
    } catch(b) {
        e("Storage mechanism: Quota exceeded")
    }
}
function Hv(a) {
    return a.gd.XMLDocument.documentElement
};
var Iv = new Bv,
Jv;
if (! (Jv = Iv.bx() ? Iv: j)) {
    var Kv = new Cv("UserDataSharedStore");
    Jv = Kv.bx() ? Kv: j
}
var Lv = Jv;
function Mv(a, b) {
    M.call(this);
    this.ci = a;
    if (this.Fb = b) this.rE = new To(this.Fb);
    this.uX = "如果有详细的情况说明或资料补充，请在这里填写";
    this.dn = j;
    this.nv = i;
    this.fY = l;
    this.aY = i;
    this.cs = !!V[5];
    this.JS = -1 === window.location.href.indexOf("psq");
    this.UG = this.qc = this.aG = this.nc = j;
    this.Np = l
}
w(Mv, ao);
var Nv = j;
function Ov() {
    this.$c = isNaN(h) ? 0 : h;
    this.Ch = "";
    this.live = l
}
function Pv(a, b) {
    a.XX = b;
    a.Zc && (a.Zc.value = b, Qv(a), a.$ && a.$.yt())
}
function Rv() {
    Nv || (Nv = new Mv(i));
    return Nv
}
function Sv(a) {
    "global" !== a.dn && Tv(a);
    a.dn = "global";
    a.z.Ma("提问");
    E.has(a.d, "zu-question-form-hide-in-about-question") && E.remove(a.d, "zu-question-form-hide-in-about-question")
}
r = Mv.prototype;
r.show = function() {
    this.k();
    this.ci && (this.z.n(i), this.Zc.focus());
    this.cs && $(".add-question-guide", this.d).fadeIn()
};
r.bg = function(a) {
    this.d = a;
    this.ci = l
};
r.k = function() {
    this.ac || (this.ac = i, this.dn = "global", this.ci && (this.z = new Nl(j, l), this.z.Ma("提问"), nl(this.z, j), this.d = this.z.R(), this.D = $(this.d), this.j(), this.z.n(i), this.z.xa()), this.Pw(), this.ua())
};
r.j = function() {
    this.d.appendChild(H("zh-add-question-form"))
};
function Tv(a) {
    a.Zc.value = "";
    a.$ && a.$.yt();
    a.Wh && S(a.Wh, l);
    a.$.reset()
}
r.Pw = function() {
    function a(a, b) {
        a.f().title = b;
        a.f().setAttribute("data-tip", "s$b$" + b)
    }
    this.Zc = Xb("zg-editor-input", this.d)[0];
    this.Om = I("zu-question-form-add", this.d);
    this.Pm = I("zu-question-form-jump", this.d);
    this.Wh = H("zm-modal-dialog-warnmsg-wrapper");
    this.vy = I("zm-modal-dialog-warnmsg-wrapper", this.d);
    this.aC = H("zh-question-form-detail-err");
    this.dZ = H("zh-question-form-tag-err");
    this.qK = I("zu-global-notify-close", this.Wh);
    this.GT = I("zu-global-notify-close", this.vy);
    this.ON = H("zm-modal-dialog-info-wrapper");
    this.io = I("zm-modal-dialog-warnmsg", this.Wh);
    this.HY = I("zm-modal-dialog-warnmsg", this.vy);
    this.Tm = I("zg-addq-isanon", this.d);
    this.kv = H("zh-question-suggest-detail-trigger");
    this.jv = H("zh-question-suggest-detail-container");
    this.ut = H("zh-question-suggest-topic-container");
    this.$ = new Pu;
    this.$.h(this.ut);
    this.e().c(this.$, ["add_tag", "remove_tag"], this.EF);
    this.pH = I("zm-tag-editor-editor", this.ut);
    this.kv.appendChild(document.createTextNode(El ? "写补充说明（图片、视频等）": "写补充说明"));
    this.bI = new uu(this.kv, this.jv, l);
    this.e().c(this.Tm, "click", this.vJ);
    new Zp(this.Zc, "写下你的问题");
    var b = this.jv;
    this.Lb = new mv;
    this.Lb.ux = '<span style="font-style: normal;color: #999;">请简洁、明确的说明你的问题</span>';
    this.Lb.Wz = l;
    this.Lb.h(b);
    pv.v().refresh().done(u(function() {
        this.Np = i
    },
    this));
    var b = I("zm-add-question-form-sns-wrap", this.d),
    c = new xv,
    d = new xv;
    c.N(b);
    d.N(b);
    E.add(c.f(), "icon sina");
    E.add(d.f(), "icon qq");
    a(c, "分享到新浪微博");
    a(d, "分享到腾讯微博");
    c.iB = "/oauth/auth/sina?next=/oauth/callback";
    d.iB = "/oauth/auth/qq?next=/oauth/callback";
    this.e().c(c, "change", this.CF).c(d, "change", this.CF);
    this.qc = c;
    this.nc = d
};
r.CF = function(a) {
    a = a.target;
    if (a === this.qc && !this.UG || a === this.nc && !this.aG) window.open(a.iB),
    a.Jc(l)
};
r.vJ = function() {
    var a = I("zm-add-question-form-sns-wrap"),
    b = I("zm-question-form-split"),
    c = this.Tm.checked;
    S(a, !c);
    S(b, !c)
};
function Uv(a, b, c) {
    "title" === c ? a.zO = b: "detail" === c ? a.mO = b: a.AO = b;
    a.nv = a.zO || a.mO || a.AO;
    a.nv && E.add(a.Om, "zg-btn-blue")
}
r.ua = function() {
    this.e().c(this.d, "click", this.ew);
    this.rE && this.rE.h(this.Zc);
    var a = new Xo(this.Zc, 44);
    this.e().c(a, "change", this.KQ);
    this.ps = H("zh-question-suggest-ac-wrap");
    this.u = new iq("/question/autocomplete", this.Zc, j, j, this.ps, "question_suggest", j, 24);
    this.u.Tf = 5;
    this.u.Fm = l;
    this.e().c(this.u, "select", this.xQ);
    this.e().c(this.pH, "click", this.RT);
    this.e().c(this.bI, "toggle", this.SP);
    this.e().c(this.qK, "click",
    function() {
        S(this.Wh, l);
        S(this.ON, i)
    });
    this.e().c(this.GT, "click",
    function() {
        S(this.vy, l);
        S(this.kv, i)
    });
    this.e().c(U, "sina_callback", this.lo);
    this.e().c(U, "qq_callback", this.lo)
};
r.lo = function(a) {
    var b = {
        id: a.lb.id,
        name: a.lb.name
    };
    "sina_callback" === a.type ? (this.UG = b, this.Np && this.qc.Jc(i)) : "qq_callback" === a.type && (this.aG = b, this.Np && this.nc.Jc(i));
    this.Np = i
};
r.xQ = function() {
    y.forEach(Vb("a", j, this.ps),
    function(a) {
        a.href = "javascript:;"
    });
    var a = y.slice(this.u.te(), 1);
    this.Zc.value = this.u.Rb;
    if (window.localStorage && JSON) {
        var b = this.Lb.Lf();
        b && localStorage.setItem("add_question_form_des", b); (b = this.$.data) && localStorage.setItem("add_question_form_topics", JSON.stringify(b))
    }
    top.location.href = "/question/" + a[2] + "?q=" + encodeURIComponent(this.u.Rb)
};
r.SP = function(a) {
    a.Vc && (this.sr(), nv(this.Lb))
};
r.sr = function() {
    this.Lb.aE || (this.Lb.aE = i, this.Lb.k(), this.Lb.dg())
};
r.ew = function(a) {
    if (a = zn(this.d, a.target)) switch (a = a.name, a) {
    case "expand":
        E.add(this.d, "zg-qform-expanded");
        break;
    default:
        this.jl(a)
    }
};
r.RT = function(a) {
    zn(this.d, a.target) || (a = I("zu-question-suggest-topic-input", this.pH), sg(a) && a.focus())
};
r.Pg = function() {
    if (!this.py && (this.py = i, setTimeout(u(function() {
        this.py = l
    },
    this), 3E4), this.ci)) {
        this.xhr = new Y(i);
        Q(this.e(), this.xhr, "success", this.MP);
        this.xhr.ajax("global" === this.dn ? "/question/add": "/question/add/about", Vv(this).Nb());
        var a = this.$,
        b = 0,
        c = a.data.length;
        y.forEach(a.data,
        function(a) {
            y.forEach(this.ht,
            function(c) {
                a[1] === c[1] && b++
            },
            this)
        },
        a);
        U.Q({
            type: "ga_click_add_question",
            data: {
                it: b,
                total: c
            }
        })
    }
};
r.MP = function() {
    this.py = l;
    var a = R(this.xhr);
    a ? a.r ? X(a.msg) : (Lv.set("__Q_ISNEWLYCREATED__", "yep"), top.location.href = a.msg) : X("网络异常")
};
r.jl = function(a) {
    if ("cancel" === a) Tv(this),
    this.z && this.z.n(l);
    else if ("addq" === a) {
        if (! (1 < Qv(this, i).$c)) {
            var b = Wv(this),
            a = new Ov;
            1E3 < Hn(b) ? (a.$c = 3, a.Ch = "请控制在 1000 字以下", vn(this.jv)) : a.$c = 0;
            b = 1 < a.$c;
            this.aC.innerHTML = a.Ch;
            S(this.aC, b);
            Uv(this, b, "detail");
            this.EF();
            this.$.to()
        } - 1 < this.Zc.value.indexOf("在这里输入问题") || this.nv || this.Pg()
    }
};
r.KQ = function() {
    Qv(this, l)
};
function Qv(a, b) {
    var c;
    c = pn(a.Zc.value).replace(/？/g, "?");
    c = Hn(c);
    var d = new Ov;
    4 > c ? (d.$c = 3, d.Ch = "问题字数太少了吧") : 100 < c && (d.$c = 3, d.Ch = "请将问题标题长度保持在 100 个字以内，更多内容可填入下方补充说明中，已超出 " + (c - 100) + " 字", d.tooLong = i);
    c = d;
    d = pn(a.Zc.value).replace(/？/g, "?");
    if (1 < c.$c) c && b && vn($(".zg-form-text-input", a.d)),
    c.tooLong && (b = i);
    else {
        var f = "#";
        c = a.Yn || new Ov;
        var g = l;
        if (a.u && a.JS) {
            var k = a.u.Wa;
            k && k.length ? (y.forEach(k,
            function(a) {
                4 < a.length && 1 === +a[4] && (g = i, f = "/question/" + a[3] + "?q=" + encodeURIComponent(this.Zc.value) + "&psq=0")
            },
            a), g ? (c.Ch = '我们找到了一个也许是你想问的问题，<a href="' + f + '">查看问题</a>', c.$c = 2, c.live = i, a.Pm.href = f, S(a.Om, l), S(a.Pm, i)) : (c = new Ov, S(a.Om, i), S(a.Pm, l)), a.Yn = c) : (c = new Ov, a.Yn = c, S(a.Om, i), S(a.Pm, l));
            a.Yn || (a.Yn = c);
            c = a.Yn
        }
        1 < c.$c || (1 > wn(pn(a.Zc.value).replace("？", "?")) ? (c.Ch = "您还没有给问题添加问号", b ? (c.$c = 3, vn($(".zg-form-text-input", a.d))) : c.$c = 1, c.live = l) : 1 < wn(d) && (c.Ch = "如果有多个问题，最好拆分一下", c.$c = 1, c.live = i))
    }
    d = c;
    k = b;
    a.io.innerHTML = d.Ch;
    0 === d.$c ? S(a.Wh, l) : (2 !== d.$c && (S(a.Om, i), S(a.Pm, l)), d.live || k ? S(a.Wh, i) : S(a.Wh, l));
    Uv(a, 1 < c.$c, "title");
    return c
}
r.EF = function() {
    var a = l;
    if (1 > this.$.data.length || 5 < this.$.data.length) a = i;
    Uv(this, a, "topic")
};
function Wv(a) {
    var a = a.Lb,
    b = Oa(a.aE ? a.Lf() : "");
    return a.isContentEditable() ? b: Qa(b)
}
function Vv(a) {
    var b = new An,
    c = [],
    d = [];
    b.add("question_title", a.Zc.value);
    b.add("question_detail", Wv(a));
    "global" === a.dn && a.Tm && b.add("anon", a.Tm.checked ? "1": "0");
    y.forEach(a.$.data,
    function(a) {
        a[3] ? c.push(a[3]) : d.push(a[1])
    });
    b.add("topic_ids", c.join(","));
    b.add("new_topics", d.join("$"));
    Ek && b.add("uid", Ek[3]);
    a.Tm.checked || (b.add("share_qq", Number(a.nc.Be())), b.add("share_sina", Number(a.qc.Be())));
    return b
};
function Xv() {
    M.call(this)
}
w(Xv, ao);
r = Xv.prototype;
r.bN = function(a) {
    var b = this.u.te(),
    c = this.u.F.pl,
    d = y.slice(b, 1),
    f = j;
    "topic" === b[0] ? (f = "/topic/" + d[1], f = Yv(this, f)) : "people" === b[0] ? (f = "/people/" + d[1], f = Yv(this, f)) : "question" === b[0] ? (f = "/question/" + d[2], f = Yv(this, f)) : "search_link" === b[0] && (f = "/search?q=" + encodeURI(d[0]) + "&type=question");
    f && (d = ["/search?q=" + encodeURI(this.u.Rb) + "&type1=" + ("search_link" === b[0] ? "autocomplete_" + b[0] : "autocomplete")], window.localStorage && (d = (Ad(localStorage.getItem("zhga")) || []).concat([d]), localStorage.setItem("zhga", Cd(d))), U.Q({
        type: "ga_serach_select",
        data: {
            type: b[0],
            index: c
        }
    }), b = window.top, this.metaKey ? b.open(f) : b.location.href = f);
    a.stopPropagation();
    a.preventDefault()
};
function Yv(a, b) {
    return window.localStorage ? (a.metaKey || localStorage.setItem("query", a.u.Rb), b) : b + "?q=" + encodeURIComponent(a.u.Rb)
}
function Zv(a, b) {
    if (ub && b.length && b.children("ul").length) {
        var c = function(c) {
            c = c.target; ! b[0].contains(c) && !c.contains(a[0]) && d()
        },
        d = function() {
            a.parent().removeClass("open");
            b.hide();
            $(document.body).off("mousedown", c)
        };
        a.click(function(f) {
            f.preventDefault();
            b.is(":visible") ? d() : (a.parent().addClass("open"), b.show(), $(document.body).mousedown(c))
        }).attr("href", "javascript:;");
        b.find(".slide-up").click(d)
    }
}
r.k = function() {
    Lv.get("__Q_ISNEWLYCREATED__") && (Lv.remove("__Q_ISNEWLYCREATED__"), Bk && (Bk.cE = i));
    var a = (new Fp(location)).Nb().get("q");
    a && (a = decodeURIComponent(a));
    a == j && window.localStorage && (a = localStorage.getItem("query")) && localStorage.removeItem("query");
    if (V.ob())(new ou).k();
    else {
        var b = $("#zh-top-inner"),
        c = Fn.v();
        b.on("click", 'a[href="/topic"]',
        function() {
            $v(c, l);
            c.Ga = "top_nav_topics";
            c.n(i);
            return l
        }).on("click", "#login-noauth",
        function() {
            $v(c, l);
            c.Ga = "top_nav_sign_in";
            c.n(i);
            return l
        }).on("click", "#signup-noauth",
        function() {
            $v(c, i);
            c.Ga = "top_nav_sign_up";
            c.n(i)
        })
    }
    if (this.mn = H("zh-top-search")) {
        b = H("zu-top-add-question");
        this.e().c(b, "click",
        function() {
            this.$s()
        });
        this.bX = b;
        if (Qi || !ub)(new zq({
            hideFocus: i
        })).h($("#top-nav-profile-dropdown").get(0));
        else {
            var b = $("#top-nav-dd-topic"),
            d = $("#mobile-top-nav-topic-popup");
            Zv(b, d);
            Hl && $("img", d).each(function() {
                var a = $(this).data("2x");
                a && (this.src = a)
            });
            Zv($("#js-top-nav-link-profile"), $("#mobile-top-nav-profile-popup"))
        }
        this.e().c(U, "query_string_change", this.$s);
        this.CD = I("icon-magnify-q", this.mn);
        var f = this.ud = I("zu-top-search-input", this.mn);
        a && (f.value = a);
        cn(bn(dn, "/",
        function() {
            setTimeout(function() {
                f.focus()
            });
            un(f, j, 500)
        }), {
            group: "导航",
            name: "搜索"
        });
        a = "/autocomplete";
        b = this.mn.getAttribute("data-new");
        "False" === b && (b = l);
        b && (a = "/autocomplete1?url_token=" + V[1]);
        b = new hq;
        this.u = new iq(a, this.ud, j, j, this.mn, j, ["搜索话题、问题或人..."], j, b);
        this.u.Fm = l;
        this.u.Je(i);
        this.e().c(this.u, "select", this.bN);
        this.e().c(this.ud, "keydown",
        function(a) {
            13 === a.keyCode && (this.ud.value && "show me the money" !== this.ud.value && !/^ +$/.test(this.ud.value)) && (a = (new Np(location.href.match(ve)[6] || j)).get("type"), (window.parent || window).location.href = "/search?q=" + encodeURIComponent(this.ud.value) + "&type=" + (a || "question"))
        });
        this.e().c(this.u, $o.mg.lh, this.eu);
        this.e().c(document, "keydown",
        function(a) {
            a.metaKey && (this.metaKey = i, this.u.ov = l)
        });
        this.e().c(document, "keyup",
        function(a) {
            if (91 === a.keyCode || 224 === a.keyCode) this.metaKey = l,
            this.u.ov = i
        });
        this.e().c(this.ud, ["keyup", "focus"], this.mH);
        this.e().c(this.ud, "blur", this.mH);
        this.e().c(this.ud, "mousedown",
        function(a) {
            a.stopPropagation();
            return i
        })
    }
};
r.mH = function() {
    this.ud.value ? E.add(this.CD, "icon-magnify-active") : E.remove(this.CD, "icon-magnify-active")
};
r.eu = function() {
    var a = this.u.Wa,
    b = this.u.F.Sg;
    if (a && 0 !== a.length) {
        if (1 === a.length) {
            var c = K("div", {
                className: "zu-autocomplete-empty"
            },
            "没有找到相关的结果");
            lc(c, b[0]);
            L(b[0])
        }
        y.forEach(a,
        function(c, f) {
            if (0 === f || c[0] !== a[f - 1][0]) {
                var g = b[f],
                k = {
                    people: "用户",
                    topic: "话题",
                    question: "问题"
                } [c[0]];
                k && (k = K("div", {
                    className: "zu-autocomplete-row-label"
                },
                k), lc(k, g), this.e().c(this.u, $o.mg.lh, Un))
            }
        },
        this)
    }
};
r.$s = function() {
    var a;
    if (V.ob()) {
        if (!yq()) if (V.wf) {
            var b = Rv();
            b.show();
            Sv(b);
            this.ud.value && this.ud.value !== this.ud.title && Pv(b, this.ud.value);
            if (window.localStorage && JSON) {
                var c = localStorage.getItem("add_question_form_des");
                if (c) {
                    localStorage.removeItem("add_question_form_des");
                    b.sr();
                    var d = b.Lb;
                    setTimeout(function() {
                        d.Fa(c);
                        d.Mo()
                    });
                    b.bI.Xa(i)
                }
                if (a = localStorage.getItem("add_question_form_topics")) localStorage.removeItem("add_question_form_topics"),
                a = JSON.parse(a),
                y.forEach(a,
                function(a) {
                    b.$.Zj(a)
                })
            }
        } else yt.v().n(i)
    } else a = Fn.v(),
    a.n(i),
    a.Ga = "top_nav_ask",
    a.Wg("为了让问题被更多人看到以及产生互动，请先登录或注册知乎")
};
function aw(a) {
    this.yd = a
}
function bw(a) {
    return function() {
        this.yd = a.apply(j, [this.yd].concat(y.toArray(arguments)));
        return this
    }
}
aw.prototype.filter = bw(y.filter);
aw.prototype.map = bw(y.map);
aw.prototype.reduce = bw(y.reduce);
aw.prototype.reduceRight = bw(y.reduceRight);
aw.prototype.flatten = bw(y.flatten);
aw.prototype.size = function() {
    return this.yd.length
};
aw.prototype.toArray = n("yd");
function cw(a) {
    F.extend(this.s = {},
    this.V, a || {});
    this.cf()
}
var dw = ["group", "key", "name"];
function ew(a) {
    return y.every(dw,
    function(b) {
        return a[b]
    })
}
function fw(a) {
    return $.extend({},
    {
        key: a.key
    },
    a.Lc)
}
function gw(a, b) {
    y.every(a,
    function(a) {
        return ! y.every(dw,
        function(d) {
            return a[d] === b[d]
        })
    }) && a.push(b);
    return a
}
function hw(a, b) {
    var c = a[b.group];
    c ? c.push(b) : a[b.group] = [b];
    return a
}
cw.prototype.V = {
    dL: "帮助信息",
    cL: "shortcut-tips-dialog"
};
cw.prototype.cf = function() {
    cn(bn(dn, "shift+/", this.show, this), {
        group: "导航",
        name: "帮助",
        key: "?"
    })
};
cw.prototype.show = function() {
    var a = this.s,
    b = a.dL,
    c;
    c = (new aw(an)).map(function(a) {
        return F.Ea(a.Op.qt())
    }).flatten().map(fw).filter(ew).reduce(gw, []).reduce(hw, {}).toArray();
    var d = ['<div class="shortcut-tips">'],
    f = {
        kS: /([^\s+])+|([\s+])/g,
        LL: function(a) {
            return a.replace(this.kS,
            function(a, b) {
                return b ? "<kbd>" + a + "</kbd>": " " + a + " "
            })
        }
    };
    F.forEach(c,
    function(a, b) {
        d.push('<div class="group"><h2>', b, "</h2><dl>");
        y.forEach(a,
        function(a) {
            d.push("<dt>", f.LL(a.key), "</dt>");
            d.push("<dd>", a.name, "</dd>")
        });
        d.push("</dl></div>")
    });
    d.push("</div>");
    c = d.join("");
    Ol({
        title: b,
        content: c,
        zi: ["确定"],
        className: a.cL
    })
};
function iw(a) {
    this.nj = -1;
    F.extend(this.s = {},
    this.V, a || {})
}
w(iw, T);
r = iw.prototype;
r.V = {
    items: ">li",
    hK: l,
    IL: i,
    rP: "navigable",
    JC: "navigable-focusin"
};
r.h = function(a) {
    var b = this.s;
    this.D = $(a).addClass(b.rP).data("navigable", this);
    iw.g.h.call(this, a);
    return this
};
r.p = function() {
    iw.g.p.call(this);
    this.D.on("focusin focusout", this.s.items, $.proxy(this.WP, this));
    this.yk()
};
r.yk = ia;
r.index = n("nj");
r.size = function() {
    return this.items().length
};
r.prev = function() {
    jw(this, this.index() - 1)
};
r.next = function() {
    jw(this, this.index() + 1)
};
r.first = function() {
    jw(this, 0)
};
r.last = function() {
    jw(this, this.size() - 1)
};
function jw(a, b) {
    if (b !== a.index()) {
        var c = a.size(),
        d = c - 1;
        a.s.hK && (b > d ? b = 0 : 0 > b && (b = d));
        a.dispatchEvent({
            data: {
                index: b,
                size: c
            },
            type: "action"
        });
        0 > b || b > d || (a.nj = b, a.Qx(a.items()[a.index()]))
    }
}
r.WP = function(a) {
    var b = this.s,
    c = a.currentTarget,
    d = $(c);
    "focusin" === a.type ? (d.addClass(b.JC), this.nj = $.inArray(c, this.items())) : d.removeClass(b.JC)
};
r.Qx = function(a) {
    this.s.IL && (a.tabIndex = -1, a.focus());
    this.dispatchEvent({
        data: {
            item: a
        },
        type: "focus"
    })
};
iw.prototype.items = function() {
    var a = this.s.items;
    return ! a ? this.D.children().get() : $(a, this.D).get()
};
$.easing.easeOutCubic = function(a, b, c, d, f) {
    return d * ((b = b / f - 1) * b * b + 1) + c
};
function kw(a) {
    iw.call(this, a);
    this.gI = $($.browser.webkit ? document.body: document.documentElement)
}
w(kw, iw);
F.extend(kw.prototype.V = {
    sS: 200,
    offsetTop: 0
},
iw.prototype.V);
r = kw.prototype;
r.yk = function() {
    cn(bn(cn(bn(cn(bn(cn(bn(cn(bn(cn(bn(dn, "k", this.prev, this), {
        group: "导航",
        name: "上一条目"
    }), "j", this.next, this), {
        group: "导航",
        name: "下一条目"
    }), "g g", this.first, this), {
        group: "导航",
        name: "第一个条目"
    }), "shift+g", this.last, this), {
        group: "导航",
        name: "最后一个条目"
    }), "shift+k", this.uS, this), {
        group: "导航",
        name: "屏幕上移"
    }), "shift+j", this.qS, this), {
        group: "导航",
        name: "屏幕下移"
    })
};
r.Qx = function(a) {
    var b = this.s;
    kw.g.Qx.call(this, a);
    this.scrollTo($(a).offset().top + b.offsetTop, b.sS, "easeOutCubic")
};
r.scrollTo = function(a, b, c) {
    this.gI.stop().animate({
        scrollTop: a
    },
    b, c)
};
r.qS = function() {
    this.scrollTo("+=60", 100)
};
r.uS = function() {
    this.scrollTo("-=60", 100)
};
function lw(a) {
    this.options = $.extend({
        title: "建议和反馈",
        mP: "请填写您的反馈内容：",
        SG: l
    },
    a)
}
w(lw, T);
lw.prototype.Z = function(a) {
    this.d = a;
    this.D = $(this.d);
    this.jd = $("#zh-report-content");
    this.kA = $(".zg-gray-darker", this.jd);
    this.D.click(u(this.show, this))
};
lw.prototype.Wo = function(a) {
    if (a) {
        var b = $(el(this.Tc)),
        a = $(".zg-editor-input", b),
        c = $(".zg-report-msg", b),
        b = $(".zg-editor-type", b),
        b = this.options.type || b.val(),
        d = a.val();
        if (!d) return c.html("请填写反馈内容").show(),
        a.focus(),
        l;
        c.hide();
        a = new Y(i);
        Q(this.e(), a, "success",
        function() {
            X("建议发送成功，我们会尽快处理，感谢您的帮助", 3E3)
        });
        a.ajax("/feedback/report", "type=" + b + "&content=" + d);
        return l
    }
};
lw.prototype.show = function() {
    this.kA.html(this.options.mP);
    if (this.D[0] && this.jd[0]) {
        this.Tc = Ol(this.options.title, this.jd.html(), u(this.Wo, this));
        var a = $(".zg-editor-type", el(this.Tc));
        this.options.SG || a.hide();
        a = $(".zg-editor-input", el(this.Tc))[0];
        new Xo(a)
    }
};
function mw() {
    T.call(this)
}
w(mw, T);
var nw = new mw;
nw.h(document);
function ow(a) {
    var b = a.hd;
    b.category && b.action && Z(b.category, a.type.replace("!", "") + "_" + b.action, b.label, b.value)
}
function Z(a, b, c, d, f) {
    window._gaq || (window._gaq = []);
    c && (c = "" + c);
    d && (d = parseInt(d, 10));
    window._gaq.push(["_trackEvent", a, b, c, d, !!f]); ! $a(location.host, "zhihu.com") && window.console && console.log("trackEvent(new)", y.toArray(arguments))
};
function pw() {
    $("#zh-top-link-logo").click(function() {
        Z("navigation", "visit_home", "top_logo")
    });
    $("#zh-top-link-home").click(function() {
        Z("navigation", "visit_home", "top_nav_home")
    });
    $("#top-nav-dd-topic").click(function() {
        Z("navigation", "visit_topics_activities", "top_nav_topic")
    });
    $("#ga_sidebar_topic_all").click(function() {
        Z("navigation", "visit_topics_activities", "sidebar_topic_all")
    });
    $(".zm-side-pinned-topics .zm-side-nav a.zm-side-nav-link").eq(0).click(function() {
        Z("navigation", "visit_topic", "sidebar_topic_1")
    }).end().eq(1).click(function() {
        Z("navigation", "visit_topic", "sidebar_topic_2")
    }).end().eq(2).click(function() {
        Z("navigation", "visit_topic", "sidebar_topic_3")
    });
    var a = $("#zh-trendings");
    a.on("click", 'li:nth-child(1) a[href^="/topic/"]',
    function() {
        Z("navigation", "visit_topic", "sidebar_intresting_people_1_topic")
    }).on("click", 'li:nth-child(2) a[href^="/topic/"]',
    function() {
        Z("navigation", "visit_topic", "sidebar_intresting_people_2_topic")
    }).on("click", 'li:nth-child(3) a[href^="/topic/"]',
    function() {
        Z("navigation", "visit_topic", "sidebar_intresting_people_3_topic")
    });
    $("#zh-single-question .zm-tag-editor-labels a.zm-item-tag").click(function() {
        Z("question_answer", "visit_topic", "question_topic")
    });
    N(U, "ga_serach_select",
    function(a) {
        "topic" === a.data.type && Z("search", "visit_topic", "top_search_list_" + (a.data.index + 1))
    });
    var b = $(".zm-search-result-topic-wrap").on("click", '.title-container a[href^="/topic/"]',
    function() {
        Z("search", "visit_topic", "search_result_card_topic_name")
    }).on("click", 'a[href^="/topic/"] .zm-search-result-topic-avatar',
    function() {
        Z("search", "visit_topic", "search_result_card_topic_avatar")
    }).on("click", ".meta a.question",
    function() {
        Z("search", "visit_topic", "search_result_card_topic_questions_count")
    }).on("click", ".meta a.follow",
    function() {
        Z("search", "visit_topic_followers", "search_result_card_topic_followers_count")
    }),
    c = $('.zm-search3-side-topic .zm-search3-side-topic-item .content a[href^="/topic/"]').click(function() {
        var a = c.index(this) + 1;
        Z("search", "visit_topic", "search_result_sidebar_topics_" + a + "_name")
    }),
    d = $(".zm-search3-side-topic .zm-search3-side-topic-item .zm-item-link-avatar").click(function() {
        var a = d.index(this) + 1;
        Z("search", "visit_topic", "search_result_sidebar_topics_" + a + "_avatar")
    }),
    f = $('#zh-search3-list[data-type="topic"]').on("click", ".zm-search3-item .user-info a.user-name",
    function() {
        var a = $('#zh-search3-list[data-type="topic"] .zm-search3-item .user-info a.user-name').index(this) + 1;
        Z("search", "visit_topic", "search_result_topic_list_" + a + "_name")
    }).on("click", ".zm-search3-item .user-info .meta a.follow",
    function(a) {
        a = $(a.delegateTarget).find(".zm-search3-item .user-info .meta a.follow").index(this) + 1;
        Z("search", "visit_topic_followers", "search_result_topic_list_" + a + "_followers_count")
    });
    f.on("click", ".zm-search3-item img.user-avatar",
    function(a) {
        a = $(a.delegateTarget).find(".zm-search3-item img.user-avatar").index(this) + 1;
        Z("search", "visit_topic", "search_result_topic_list_" + a + "_avatar")
    });
    var g = $(".zm-topic-list-container").on("click", '.subtopic a[href^="/topic/"]',
    function() {
        Z("topic", "visit_topic", "topic_activity_children_topic")
    });
    $(".zm-side-section-inner.child-topic").on("click", 'a.zm-item-tag[href^="/topic/"]',
    function() {
        Z("topic", "visit_topic", "topic_sidebar_children_topic")
    });
    $('a.zm-side-nav-link[href="/topics"]').click(function() {
        Z("navigation", "visit_topic_square", "sidebar_topic_square")
    });
    $('a.zm-side-nav-link[href="/invitation/email"]').click(function() {
        Z("navigation", "visit_invite_by_email", "sidebar_invite_friend")
    });
    $("#zh-tooltip").on("click", "#zh-tooltip-people .zu-hovercard-head-wrap a",
    function() {
        Z("navigation", "visit_people_profile", "hovercard_people_name")
    });
    var k = $("#zh-top-nav-live-new").on("click", '.zm-noti7-content-item[data-notigroupname="FOLLOW"] .zm-list-content-medium a[href^="/people"]',
    function() {
        Z("notification", "visit_people_profile", "top_nav_noti_follower_people_name")
    }).on("click", '.zm-noti7-content-item[data-notigroupname="FOLLOW"] .zm-item-link-avatar',
    function() {
        Z("notification", "visit_people_profile", "top_nav_noti_follower_people_avatar")
    });
    k.on("click", '.zm-noti7-content-item[data-notigroupname="VOTE_THANK"] a[href^="/people"]',
    function() {
        Z("notification", "visit_people_profile", "top_nav_noti_vote_thank_people_name")
    });
    k.on("click", '.zm-noti7-content-item[data-notigroupname="INVITE"] a[href^="/people"]',
    function() {
        Z("notification", "visit_people_profile", "top_nav_noti_message_invitation_people_name")
    }).on("click", '.zm-noti7-content-item[data-notigroupname="QUESTION_COMMENT"] a[href^="/people"]',
    function() {
        Z("notification", "visit_people_profile", "top_nav_noti_message_qcomment_people_name")
    }).on("click", '.zm-noti7-content-item[data-notigroupname="ANSWER_COMMENT"] a[href^="/people"]',
    function() {
        Z("notification", "visit_people_profile", "top_nav_noti_message_acomment_people_name")
    }).on("click", '.zm-noti7-content-item[data-notigroupname="ANSWER"] a[href^="/people"]',
    function() {
        Z("notification", "visit_people_profile", "top_nav_noti_message_new_answer_people_name")
    }).on("click", '.zm-noti7-content-item[data-notigroupname="QUESTION"] a[href^="/people"]',
    function() {
        Z("notification", "visit_people_profile", "top_nav_noti_message_edit_people_name")
    });
    var m = $("#js-home-feed-list");
    m.on("click", 'div[data-feedtype="ANSWER_VOTE_UP"] .source a[href^="/people"]',
    function() {
        Z("feed", "visit_people_profile", "feed_answer_vote_source_people_name")
    });
    m.on("click", 'div[data-feedtype="ANSWER_VOTE_UP"] >.avatar a[href^="/people"]',
    function() {
        Z("feed", "visit_people_profile", "feed_answer_vote_source_people_avatar")
    });
    m.on("click", 'div[data-feedtype="ANSWER_VOTE_UP"] .zm-item-answer-author-info a[href^="/people"]',
    function() {
        Z("feed", "visit_people_profile", "feed_answer_vote_author_name")
    });
    m.on("click", 'div[data-feedtype="ANSWER_CREATE"] .source a[href^="/people"]',
    function() {
        Z("feed", "visit_people_profile", "feed_answer_answer_source_people_name")
    });
    m.on("click", 'div[data-feedtype="ANSWER_CREATE"] >.avatar a[href^="/people"]',
    function() {
        Z("feed", "visit_people_profile", "feed_answer_answer_source_people_avatar")
    });
    m.on("click", 'div[data-feedtype="QUESTION_FOLLOW"] .source a[href^="/people"]',
    function() {
        Z("feed", "visit_people_profile", "feed_question_follow_source_people_name")
    });
    m.on("click", 'div[data-feedtype="QUESTION_FOLLOW"] >.avatar a[href^="/people"]',
    function() {
        Z("feed", "visit_people_profile", "feed_question_follow_source_people_avatar")
    });
    m.on("click", 'div[data-feedtype="QUESTION_CREATE"] .source a[href^="/people"]',
    function() {
        Z("feed", "visit_people_profile", "feed_question_ask_source_people_name")
    });
    m.on("click", 'div[data-feedtype="QUESTION_CREATE"] >.avatar a[href^="/people"]',
    function() {
        Z("feed", "visit_people_profile", "feed_question_ask_source_people_avatar")
    });
    a.on("click", 'li:nth-child(1) a[href^="/people"]:not(.zg-link-gray-14)',
    function() {
        Z("navigation", "visit_people_profile", "sidebar_interesting_people_1")
    }).on("click", 'li:nth-child(2) a[href^="/people"]:not(.zg-link-gray-14)',
    function() {
        Z("navigation", "visit_people_profile", "sidebar_interesting_people_2")
    }).on("click", 'li:nth-child(3) a[href^="/people"]:not(.zg-link-gray-14)',
    function() {
        Z("navigation", "visit_people_profile", "sidebar_interesting_people_3")
    });
    a.on("click", 'li:nth-child(1) a.zg-link-gray-14[href^="/people"]',
    function() {
        Z("navigation", "visit_people_profile", "sidebar_interesting_people_1")
    }).on("click", 'li:nth-child(2) a.zg-link-gray-14[href^="/people"]',
    function() {
        Z("navigation", "visit_people_profile", "sidebar_interesting_people_2")
    }).on("click", 'li:nth-child(3) a.zg-link-gray-14[href^="/people"]',
    function() {
        Z("navigation", "visit_people_profile", "sidebar_interesting_people_3")
    });
    var q = $("#zh-question-answer-wrap").on("click", '.zm-item-answer-author-wrap >a[href^="/people"]',
    function() {
        Z("question_answer", "visit_people_profile", "question_answer_author_name")
    }).on("click", ".zm-item-answer-author-wrap img.zm-list-avatar",
    function() {
        Z("question_answer", "visit_people_profile", "question_answer_author_avatar")
    });
    q.on("click", ".voters a",
    function() {
        var a = $(this).parents(".voters").find("a").index(this) + 1;
        Z("question_answer", "visit_people_profile", "question_answer_voters_" + a)
    });
    q.on("click", '.zm-comment-hd a[href^="/people"]',
    function() {
        Z("question_answer", "visit_people_profile", "question_answer_comment_author_name")
    }).on("click", ".zm-comment-list img.zm-item-img-avatar",
    function() {
        Z("question_answer", "visit_people_profile", "question_answer_comment_author_avatar")
    });
    $(".zh-question-followers-sidebar", 'a[href^="/people"]',
    function() {
        Z("question_answer", "visit_people_profile", "question_sidebar_followers_avatar")
    });
    N(U, "ga_serach_select",
    function(a) {
        "people" === a.data.type && Z("search", "visit_people_profile", "top_search_list_" + (a.data.index + 1))
    });
    b.on("click", '.title-container a[href^="/people/"]',
    function() {
        Z("search", "visit_people_profile", "search_result_card_people_name")
    }).on("click", 'a[href^="/people/"] .zm-search-result-topic-avatar',
    function() {
        Z("search", "visit_people_profile", "search_result_card_people_avatar")
    });
    var s = $('.zm-search3-side.user a[href^="/people/"]').click(function() {
        var a = s.index(this);
        Z("search", "visit_people_profile", "search_result_sidebar_people_" + a + "_avatar")
    }),
    x = $('#zh-search3-list[data-type="people"]').on("click", ".zm-search3-item .user-info a.user-name",
    function(a) {
        a = $(a.delegateTarget).find(".zm-search3-item .user-info a.user-name").index(this) + 1;
        Z("search", "visit_people_profile", "search_result_user_list_" + a + "_people_name")
    }).on("click", ".zm-search3-item  img.user-avatar",
    function(a) {
        a = $(a.delegateTarget).find(".zm-search3-item img.user-avatar").index(this) + 1;
        Z("search", "visit_people_profile", "search_result_user_list_" + a + "_people_name")
    });
    $("#zh-topic-top-answerer").on("click", '.zm-topic-side-person-item-content a[href^="/people/"]',
    function() {
        Z("topic", "visit_people_profile", "topic_sidebar_top_answerer_people_name")
    }).on("click", "img.zm-list-avatar",
    function() {
        Z("topic", "visit_people_profile", "topic_sidebar_top_answerer_people_avatar")
    });
    b.on("click", 'a[href^="/people"][href$="/answers"]',
    function() {
        Z("search", "visit_people_answers", "search_result_card_people_answers_count")
    });
    x.on("click", 'a[href^="/people"][href$="/answers"]',
    function(a) {
        a = $(a.delegateTarget).find('a[href^="/people"][href$="/answers"]').index(this);
        Z("search", "visit_people_answers", "search_result_user_list_" + a + "_people_answers_count")
    });
    b.on("click", 'a[href^="/people"][href$="/followers"]',
    function() {
        Z("search", "visit_people_followers", "search_result_card_people_followers_count")
    });
    x.on("click", 'a[href^="/people"][href$="/followers"]',
    function(a) {
        a = $(a.delegateTarget).find('a[href^="/people"][href$="/followers"]').index(this);
        Z("search", "visit_people_followers", "search_result_user_list_" + a + "_people_followers_count")
    });
    k.on("click", '.zm-noti7-content-item[data-notigroupname="VOTE_THANK"] a[href^="/question"]',
    function() {
        Z("notification", "visit_question", "top_nav_noti_vote_thank_question")
    });
    k.on("click", '.zm-noti7-content-item[data-notigroupname="INVITE"] a[href^="/question"]',
    function() {
        Z("notification", "visit_question", "top_nav_noti_message_invitation_question")
    }).on("click", '.zm-noti7-content-item[data-notigroupname="QUESTION_COMMENT"] a[href^="/question"]',
    function() {
        Z("notification", "visit_question", "top_nav_noti_message_qcomment_question")
    }).on("click", '.zm-noti7-content-item[data-notigroupname="ANSWER_COMMENT"] a[href^="/question"]',
    function() {
        Z("notification", "visit_question", "top_nav_noti_message_acomment_question")
    }).on("click", '.zm-noti7-content-item[data-notigroupname="ANSWER"] a[href^="/question"]',
    function() {
        Z("notification", "visit_question", "top_nav_noti_message_new_answser_question")
    });
    m.on("click", 'div[data-feedtype="ANSWER_VOTE_UP"] h2 a[href^="/question"]',
    function() {
        Z("feed", "visit_question", "feed_answer_vote_question")
    }).on("click", 'div[data-feedtype="ANSWER_CREATE"] h2 a[href^="/question"]',
    function() {
        Z("feed", "visit_question", "feed_answer_answer_question")
    }).on("click", 'div[data-feedtype="QUESTION_FOLLOW"] h2 a[href^="/question"]',
    function() {
        Z("feed", "visit_question", "feed_question_follow_question")
    }).on("click", 'div[data-feedtype="QUESTION_CREATE"] a.meta-item[href^="/question"]',
    function() {
        var a = parseInt($(this).text(), 10);
        a ? Z("feed", "visit_question", "feed_question_follow_has_answers", a) : Z("feed", "visit_question", "feed_question_follow_has_no_answer")
    }).on("click", 'div[data-feedtype="QUESTION_CREATE"] h2 a[href^="/question"]',
    function() {
        Z("feed", "visit_question", "feed_question_ask_question")
    });
    N(U, "ga_serach_select",
    function(a) {
        "question" === a.data.type && Z("search", "visit_question", "top_search_list_" + (a.data.index + 1))
    });
    var C = $('#zh-search3-list[data-type="question"]').on("click", '.zm-search3-item .question-title a[href^="/question"]',
    function(a) {
        a = $(a.delegateTarget).find('.zm-search3-item .question-title a[href^="/question"]').index(this) + 1;
        Z("search", "visit_question", "search_result_all_list_" + a + "_question")
    }).on("click", '.zm-search3-item .question-content a[href^="/question"]',
    function(a) {
        a = $(a.delegateTarget).find(".zm-search3-item").index($(this).parents(".zm-search3-item")) + 1;
        Z("search", "visit_question", "search_result_all_list_" + a + "_answer")
    }).on("click", '.zm-search3-item .meta a.answer[href^="/question"]',
    function(a) {
        a = $(a.delegateTarget).find('.zm-search3-item .meta a.answer[href^="/question"]').index(this) + 1;
        Z("search", "visit_question", "search_result_all_list_" + a + "_answers_count")
    });
    C.on("click", 'a[href^="/question"][href$="/followers"]',
    function(a) {
        a = $(a.delegateTarget).find('a[href^="/question"][href$="/followers"]').index(this) + 1;
        Z("search", "visit_question_followers", "search_result_all_list_" + a + "_followers_count")
    });
    $('#zh-question-followers-sidebar a[href^="/question"][href$="/followers"]').click(function() {
        Z("question_answer", "visit_question_followers", "question_followers_count")
    });
    k.on("click", '.zm-noti7-content-item[data-notigroupname="QUESTION"] a[href^="/question"]',
    function() {
        Z("notification", "visit_question_log", "top_nav_noti_message_edit_question")
    });
    $('.zu-main-sidebar a[href^="/question"][href$="/log"]').click(function() {
        Z("question_answer", "visit_question_log", "question_log")
    });
    $('div[data-feedtype="ANSWER_CREATE"] .answer-date-link').click(function() {
        Z("feed", "visit_answer", "feed_answer_answer_date")
    });
    $('div[data-feedtype="ANSWER_VOTE_UP"] .answer-date-link').click(function() {
        Z("feed", "visit_answer", "feed_answer_vote_date")
    });
    $("zh-single-question-page .answer-date-link").click(function() {
        Z("question_answer", "visit_answer", "question_answer_date")
    });
    $('a.zm-side-nav-link[href="/draft"]').click(function() {
        var a = parseInt($(this).find(".zg-num").text() || 0, 10);
        Z("navigation", "visit_draft", "sidebar_my_draft", a)
    });
    $('a.zm-side-nav-link[href="/collections"]').click(function() {
        var a = parseInt($(this).find(".zg-num").text() || 0, 10);
        Z("navigation", "visit_collections", "sidebar_my_collections", a)
    });
    $('a.zm-side-nav-link[href="/question/invited"]').click(function() {
        var a = parseInt($(this).find(".zg-num").text() || 0, 10);
        Z("navigation", "visit_question_invited", "sidebar_question_invited", a)
    });
    $('a[href="http://creativecommons.org"]').click(function() {
        Z("navigation", "visit_cc_license")
    });
    N(U, "ga_click_back_to_top",
    function() {
        Z("navigation", "click_back_to_top")
    });
    N(U, "ga_click_follow",
    function(b) {
        if ("people" === b.data.type && b.data.tj) {
            var c = $(b.target);
            0 < c.parents("#zh-top-nav-live-new").length ? (b = k.find('a[name="focus"]').index(b.target) + 1, Z("notification", "click_follow_people", "top_nav_noti_follower_follow", b)) : 0 < c.parents("#zh-tooltip").length ? Z("navigation", "click_follow_people", "hovercard_follow") : 0 < c.parents("#zh-trendings").length ? (b = a.find("a.follow").index(b.target) + 1, Z("navigation", "click_follow_people", "sidebar_intresting_people_" + b + "_follow")) : 0 < c.parents(".zm-search-result-topic-wrap").length ? Z("search", "click_follow_people", "search_result_card_people_follow") : 0 < c.parents('#zh-search3-list[data-type="people"]').length ? (b = x.find(".zm-search3-item").index(c.parents(".zm-search3-item").get(0)), Z("search", "click_follow_people", "search_result_user_list_" + b + "_people_follow")) : 0 < c.parents("#zh-topic-top-answerer").length && Z("topic", "click_follow_people", "topic_sidebar_top_answerer_follow")
        }
    });
    N(U, "ga_click_follow",
    function(b) {
        if ("people" === b.data.type && !b.data.tj) {
            var c = $(b.target);
            0 < c.parents("#zh-top-nav-live-new").length ? (b = k.find('a[name="focus"]').index(b.target) + 1, Z("notification", "click_unfollow_people", "top_nav_noti_follower_unfollow", b)) : 0 < c.parents("#zh-tooltip").length ? Z("navigation", "click_unfollow_people", "hovercard_unfollow") : 0 < c.parents("#zh-trendings").length ? (b = a.find("a.follow").index(b.target) + 1, Z("navigation", "click_unfollow_people", "sidebar_intresting_people_" + b + "_unfollow")) : 0 < c.parents(".zm-search-result-topic-wrap").length ? Z("search", "click_unfollow_people", "search_result_card_people_unfollow") : 0 < c.parents('#zh-search3-list[data-type="people"]').length ? (b = x.find(".zm-search3-item").index(c.parents(".zm-search3-item").get(0)) + 1, Z("search", "click_unfollow_people", "search_result_user_list_" + b + "_people_unfollow")) : 0 < c.parents("#zh-topic-top-answerer").length && Z("topic", "click_unfollow_people", "topic_sidebar_top_answerer_unfollow")
        }
    });
    N(U, "ga_click_follow",
    function(a) {
        "question" === a.data.type && a.data.tj && (a = $(a.target), 0 < a.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length ? Z("feed", "click_follow_question", "feed_answer_vote_follow_question") : 0 < a.parents('div[data-feedtype="ANSWER_CREATE"]').length ? Z("feed", "click_follow_question", "feed_answer_answer_follow_question") : 0 < a.parents('div[data-feedtype="QUESTION_FOLLOW"]').length ? Z("feed", "click_follow_question", "feed_question_follow_follow_question") : 0 < a.parents('div[data-feedtype="QUESTION_CREATE"]').length ? Z("feed", "click_follow_question", "feed_question_ask_follow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? Z("question_answer", "click_follow_question", "question_follow_question") : 0 < a.parents('#zh-search3-list[data-type="question"]').length ? (a = C.find(".zm-search3-item").index(a.parents(".zm-search3-item").get(0)) + 1, Z("search", "click_follow_question", "search_result_all_list_" + a + "_follow_question")) : 0 < a.parents(".zm-topic-list-container").length && Z("topic", "click_follow_question", "topic_activity_follow_question"))
    });
    N(U, "ga_click_follow",
    function(a) {
        "question" === a.data.type && !a.data.tj && (a = $(a.target), 0 < a.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length ? Z("feed", "click_unfollow_question", "feed_answer_vote_unfollow_question") : 0 < a.parents('div[data-feedtype="ANSWER_CREATE"]').length ? Z("feed", "click_unfollow_question", "feed_answer_answer_unfollow_question") : 0 < a.parents('div[data-feedtype="QUESTION_unFOLLOW"]').length ? Z("feed", "click_unfollow_question", "feed_question_follow_unfollow_question") : 0 < a.parents('div[data-feedtype="QUESTION_CREATE"]').length ? Z("feed", "click_unfollow_question", "feed_question_ask_unfollow_question") : 0 < a.parents("#zh-question-side-header-wrap").length ? Z("question_answer", "click_unfollow_question", "question_unfollow_question") : 0 < a.parents('#zh-search3-list[data-type="question"]').length ? (a = C.find(".zm-search3-item").index(a.parents(".zm-search3-item").get(0)) + 1, Z("search", "click_unfollow_question", "search_result_all_list_" + a + "_unfollow_question")) : 0 < a.parents(".zm-topic-list-container").length && Z("topic", "click_unfollow_question", "topic_activity_unfollow_question"))
    });
    N(U, "ga_click_follow",
    function(a) {
        if ("topic" === a.data.type && a.data.tj) {
            var b = $(a.target);
            0 < b.parents(".zm-search-result-topic-wrap").length ? Z("search", "click_follow_topic", "search_result_card_topic_follow") : 0 < b.parents(".zm-search3-side-topic").length ? (a = $(".zm-search3-side-topic").find('a[name="focus"][id^="topic"]').index(a.target) + 1, Z("search", "click_follow_topic", "search_result_sidebar_topics_" + a + "_follow")) : 0 < b.parents('#zh-search3-list[data-type="topic"]').length && (a = f.find(".zm-search3-item").index(b.parents(".zm-search3-item").get(0)) + 1, Z("search", "click_follow_topic", "search_result_topic_list_" + a + "_follow"))
        }
    });
    N(U, "ga_click_follow",
    function(a) {
        "topic" === a.data.type && !a.data.tj && 0 < $(a.target).parents(".zm-search-result-topic-wrap").length && Z("search", "click_unfollow_topic", "search_result_card_topic_unfollow")
    });
    N(U, "ga_click_follow",
    function(a) {
        "favlist" === a.data.type && (a.data.tj ? Z("collection", "click_follow_collection", "collection_follow") : Z("collection", "click_unfollow_collection", "collection_follow"))
    });
    N(U, "ga_click_top_nav_noti",
    function(a) {
        0 < a.data.EH ? Z("notification", "click_top_nav_noti", "top_nav_noti_alert", a.data.EH) : Z("notification", "click_top_nav_noti", "top_nav_noti_no_alert")
    });
    N(U, "ga_click_top_nav_noti_tab",
    function(a) {
        Z("notification", "click_top_nav_noti_tab", ["top_nav_noti_tab_message", "top_nav_noti_tab_follower", "top_nav_noti_tab_vote"][a.data.Zg])
    });
    N(U, "ga_click_enlarge_image",
    function(a) {
        a = $(a.target).parents("div[data-feedtype]").attr("data-feedtype");
        "ANSWER_CREATE" === a ? Z("navigation", "click_enlarge_image", "feed_answer_answer_image") : "ANSWER_VOTE_UP" === a && Z("navigation", "click_enlarge_image", "feed_answer_vote_image")
    });
    N(U, "ga_click_feed_more",
    function(a) {
        a.data && a.data.Hg ? Z("feed", "click_feed_more", "feed_more_button") : Z("feed", "click_feed_more", "feed_more_auto_load")
    });
    N(U, "ga_click_feed_fresh",
    function(a) {
        Z("feed", "click_feed_fresh", "feed_fresh_button", a.data.count)
    });
    C.on("click", "#zh-load-more",
    function() {
        Z("search", "click_search_result_more", "search_result_all_more_buttion")
    });
    x.on("click", "#zh-load-more",
    function() {
        Z("search", "click_search_result_more", "search_result_user_more_buttion")
    });
    f.on("click", "#zh-load-more",
    function() {
        Z("search", "click_search_result_more", "search_result_topic_more_buttion")
    });
    N(U, "ga_click_topic_more",
    function(a) {
        var b = "activity"; - 1 < location.href.indexOf("questions") && (b = "questions");
        a.data && a.data.Hg ? Z("feed", "click_topic_more", "topic_" + b + "_more_button") : Z("feed", "click_topic_more", "topic_" + b + "_more_auto_load")
    });
    m.on("click", 'div[data-feedtype="ANSWER_VOTE_UP"] a.inline-block[name="toggleExpanded"]',
    function() {
        Z("feed", "click_expand", "feed_answer_vote_expand")
    }).on("click", 'div[data-feedtype="ANSWER_VOTE_UP"] a.zm-item-vote-count[name="toggleExpanded"]',
    function() {
        Z("feed", "click_expand", "feed_answer_vote_vote_count")
    }).on("click", 'div[data-feedtype="ANSWER_CREATE"] a.inline-block[name="toggleExpanded"]',
    function() {
        Z("feed", "click_expand", "feed_answer_answer_expand")
    }).on("click", 'div[data-feedtype="ANSWER_CREATE"] a.zm-item-vote-count[name="toggleExpanded"]',
    function() {
        Z("feed", "click_expand", "feed_answer_answer_vote_count")
    });
    b = $("zh-single-question").on("click", '#zh-question-detail a.inline-block[name="expand"]',
    function() {
        Z("question_answer", "click_expand", "question_supplement_expand")
    });
    b.on("click", '.zm-item-answer a[name="more"]',
    function() {
        Z("question_answer", "click_expand", "question_answer_voters_more")
    });
    b.on("click", "#zh-question-collapsed-switcher",
    function() {
        Z("question_answer", "click_expand", "question_answer_folded_expand")
    });
    g.on("click", 'a.inline-block[name="expand"]',
    function() {
        Z("topic", "click_expand", "topic_activity_expand")
    }).on("click", 'a.zm-item-vote-count[name="expand"]',
    function() {
        Z("topic", "click_expand", "topic_activity_vote_count")
    });
    N(U, "ga_click_sorter",
    function() {
        Z("question_answer", "click_sort_answer", "question_answer_sorting")
    });
    N(U, "ga_click_sorter_item",
    function(a) { (a = {
            added_time: "time",
            vote: "vote"
        } [a.data.key]) && Z("question_answer", "click_sort_answer", "question_answer_sorting_" + a)
    });
    N(U, "ga_click_vote_up",
    function(a) {
        a = $(a.target.f());
        if (0 < a.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_up";
        else if (0 < a.parents('div[data-feedtype="ANSWER_CREATE"]').length) a = "feed_answer_answer_up";
        else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_vote_up";
        else return;
        Z("vote", "click_vote_up_answer", a)
    });
    N(U, "ga_click_vote_down",
    function(a) {
        a = $(a.target.f());
        if (0 < a.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_down";
        else if (0 < a.parents('div[data-feedtype="ANSWER_CREATE"]').length) a = "feed_answer_answer_down";
        else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_vote_down";
        else return;
        Z("vote", "click_vote_down_answer", a)
    });
    N(U, "ga_click_thank_answer",
    function(a) {
        a = $(a.target);
        if (0 < a.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_thank";
        else if (0 < a.parents('div[data-feedtype="ANSWER_CREATE"]').length) a = "feed_answer_answer_thank";
        else if (0 < a.parents("#zh-question-answer-wrap").length) a = "question_answer_thank";
        else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_thank";
        else return;
        Z("vote", "click_thank_answer", a)
    });
    N(U, "ga_click_share_answer_box",
    function(a) {
        a = $(a.target);
        if (0 < a.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_share";
        else if (0 < a.parents('div[data-feedtype="ANSWER_CREATE"]').length) a = "feed_answer_answer_share";
        else if (0 < a.parents("#zh-question-answer-wrap").length) a = "question_answer_share";
        else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_share";
        else return;
        Z("share", "click_share_answer_box", a)
    });
    N(U, "ga_click_share_question_box",
    function(a) {
        $(a.target);
        var b = "question_question_share",
        c = {
            sina: "question_sidebar_share_weibo",
            mail: "question_sidebar_share_email",
            letter: "question_sidebar_share_message"
        };
        a.data && a.data.type && (b = c[a.data.type]);
        Z("share", "click_share_answer_box", b)
    });
    N(U, "ga_click_share_answer_weibo",
    function(a) {
        a = a.data.$z;
        if (y.contains(a, "qq") && y.contains(a, "sina")) a = "share_answer_sina_tencent_weibo";
        else if (y.contains(a, "qq")) a = "share_answer_tencent_weibo";
        else if (y.contains(a, "sina")) a = "share_answer_sina_weibo";
        else return;
        Z("share", "click_share_answer_weibo", a)
    });
    N(U, "ga_click_share_answer_email",
    function() {
        Z("share", "click_share_answer_email")
    });
    N(U, "ga_click_share_answer_message",
    function() {
        Z("share", "click_share_answer_message")
    });
    N(U, "ga_click_share_question_weibo",
    function(a) {
        a = a.data.$z;
        if (y.contains(a, "qq") && y.contains(a, "sina")) a = "share_question_sina_tencent_weibo";
        else if (y.contains(a, "qq") && !y.contains(a, "sina")) a = "share_question_tencent_weibo";
        else if (!y.contains(a, "qq") && y.contains(a, "sina")) a = "share_question_sina_weibo";
        else return;
        Z("share", "click_share_answer_weibo", a)
    });
    N(U, "ga_click_share_question_email",
    function() {
        Z("share", "click_share_question_email")
    });
    N(U, "ga_click_share_question_message",
    function() {
        Z("share", "click_share_question_message")
    });
    N(U, "ga_click_report_box",
    function(a) {
        Z("share", "click_report_" + {
            people: "people",
            favlist: "collection",
            question: "question"
        } [a.data.type] + "_box")
    });
    N(U, "ga_click_report",
    function(a) {
        Z("share", "click_report_" + {
            people: "people",
            favlist: "collection",
            question: "question"
        } [a.data.type])
    });
    N(U, "ga_click_collect_answer_box",
    function(a) {
        a = $(a.target);
        if (0 < a.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_collect";
        else if (0 < a.parents('div[data-feedtype="ANSWER_CREATE"]').length) a = "feed_answer_answer_collect";
        else if (0 < a.parents("#zh-single-question-page").length) a = "question_answer_collect";
        else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_collect";
        else return;
        Z("collection", "click_collect_answer_box", a)
    });
    N(U, "ga_click_collect_answer",
    function(a) {
        Z("collection", "click_collect_answer", "collection_count", a.data.count)
    });
    N(U, "ga_click_add_collection",
    function() {
        Z("collection", "click_add_collection", "collect_answer_window_add_collection")
    });
    N(U, "ga_click_answer_not_helpful",
    function(a) {
        a = $(a.target);
        if (0 < a.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_not_helpful";
        else if (0 < a.parents('div[data-feedtype="ANSWER_CREATE"]').length) a = "feed_answer_answer_not_helpful";
        else if (0 < a.parents("#zh-question-answer-wrap").length) a = "question_answer_not_helpful";
        else if (0 < a.parents(".zm-topic-list-container").length) a = "topic_activity_not_helpful";
        else return;
        Z("vote", "click_answer_not_helpful", a)
    });
    m.on("click");
    N(U, "ga_click_question_ignore",
    function(a) {
        a = $(a.target);
        if (0 < a.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length) a = "feed_answer_vote_ignore_question";
        else if (0 < a.parents('div[data-feedtype="ANSWER_CREATE"]').length) a = "feed_answer_answer_ignore_question";
        else if (0 < a.parents('div[data-feedtype="QUESTION_FOLLOW"]').length) a = "feed_question_follow_ignore_question";
        else if (0 < a.parents('div[data-feedtype="QUESTION_CREATE"]').length) a = "feed_question_ask_ignore_question";
        else return;
        Z("feed", "click_question_ignore", a)
    });
    N(U, "ga_question_topic_edit_start",
    function() {
        Z("edit", "click_edit_question_topic", "question_topic_edit_start")
    });
    N(U, "ga_question_topic_edit_finish_changed",
    function() {
        Z("edit", "click_edit_question_topic", "question_topic_edit_finish_changed")
    });
    N(U, "ga_question_title_edit_start",
    function() {
        Z("edit", "click_edit_question_titile", "question_title_edit_start")
    });
    N(U, "ga_question_title_edit_cancel",
    function() {
        Z("edit", "click_edit_question_titile", "question_title_edit_cancel")
    });
    N(U, "ga_question_title_edit_save_changed",
    function() {
        Z("edit", "click_edit_question_titile", "question_title_edit_save_changed")
    });
    N(U, "ga_question_title_edit_save_unchanged",
    function() {
        Z("edit", "click_edit_question_titile", "question_title_edit_save_unchanged")
    });
    N(U, "ga_question_supplement_edit_start",
    function() {
        Z("edit", "click_edit_question_supplement", "question_supplement_edit_start")
    });
    N(U, "ga_question_supplement_edit_cancel",
    function() {
        Z("edit", "click_edit_question_supplement", "question_supplement_edit_cancel")
    });
    N(U, "ga_question_supplement_edit_save_changed",
    function() {
        Z("edit", "click_edit_question_supplement", "question_supplement_edit_save_changed")
    });
    N(U, "ga_question_supplement_edit_save_unchanged",
    function() {
        Z("edit", "click_edit_question_supplement", "question_supplement_edit_save_unchanged")
    });
    $("#zu-top-add-question").click(function() {
        Z("question_answer", "click_add_question", "top_nav_question_add_start")
    });
    $(".zm-topic-ask-in-topic").click(function() {
        Z("question_answer", "click_add_question", "topic_question_add_start")
    });
    N(U, "ga_click_add_question",
    function(a) {
        Z("question_answer", "click_add_question", "question_add_submit_with_topics", a.data.total);
        Z("question_answer", "click_add_question", "question_add_submit_with_suggested_topics", a.data.it);
        Z("question_answer", "click_add_question", "question_add_submit_with_suggested_topics_percent", Math.round(100 * (a.data.it / a.data.total)))
    });
    $("#zh-question-answer-form-wrap .editable").focus(function() {
        Z("question_answer", "click_add_answer", "question_answer_add_start")
    });
    $("#zh-question-answer-form-wrap .submit-button").click(function() {
        Z("question_answer", "click_add_answer", "question_answer_add_publish")
    });
    N(U, "ga_hover_hovercard",
    function(b) {
        var b = $(b.target),
        c,
        d,
        f,
        g;
        b.is('[href^="/people"]') ? (d = "hover_people_hovercard", 0 < b.parents("div[data-feedtype]").length ? (c = "feed", 0 < b.parents('div[data-feedtype="ANSWER_VOTE_UP"]').length ? 0 < b.parents(".zm-item-answer-author-wrap").length ? f = "feed_answer_vote_author_name": 0 < b.parents("div.source").length && (f = 0 < b.find("img").length ? "feed_answer_vote_source_people_avatar": "feed_answer_vote_author_name") : 0 < b.parents('div[data-feedtype="ANSWER_CREATE"]').length ? 0 < b.parents("div.source").length && (f = 0 < b.find("img").length ? "feed_answer_answer_source_people_avatar": "feed_answer_answer_source_people_name") : 0 < b.parents('div[data-feedtype="QUESTION_FOLLOW"]').length ? 0 < b.parents("div.source").length && (f = 0 < b.find("img").length ? "feed_question_follow_source_people_avatar": "feed_question_follow_source_people_name") : 0 < b.parents('div[data-feedtype="QUESTION_CREATE"]').length && 0 < b.parents("div.source").length && (f = 0 < b.find("img").length ? "feed_question_ask_source_people_avatar": "feed_question_ask_source_people_name")) : 0 < b.parents("#zh-trendings").length ? (c = "navigation", $.contains(a.find("li:nth-child(1)").get(0), b.get(0)) ? f = "sidebar_intresting_people_1": $.contains(a.find("li:nth-child(2)").get(0), b.get(0)) ? f = "sidebar_intresting_people_2": $.contains(a.find("li:nth-child(3)").get(0), b.get(0)) && (f = "sidebar_intresting_people_3")) : 0 < b.parents("#zh-single-question-page").length ? (c = "question_answer", 0 < b.parents(".zm-item-answer-author-wrap").length ? f = 0 < b.find("img").length ? "question_answer_author_avatar": "question_answer_author_name": 0 < b.parents(".voters").length ? (f = b.parents(".voters").find('a[href^="/people"]').index(b.get(0)) + 1, f = "question_answer_voters_" + f) : 0 < b.parents(".zm-comment-list").length && (f = 0 < b.find("img").length ? "question_answer_comment_author_avatar": "question_answer_comment_author_name")) : 0 < b.parents(".zm-search3-side.user").length ? (c = "search", f = b.parents(".zm-search3-side.user").find('a[href^="/people"]').index(b.get(0)) + 1, f = "search_result_sidebar_people_" + f + "_avatar") : 0 < b.parents("#zh-topic-top-answerer").length && (c = "topic", f = 0 < b.find("img").length ? "topic_sidebar_top_answerer_people_avatar": "topic_sidebar_top_answerer_people_name")) : b.is('[href^="/topic"]') && (d = "hover_topic_hovercard", g = i, 0 < b.parents("#zh-single-question-page").length ? (c = "question_answer", f = "question_topic") : 0 < b.parents(".zm-search3-side-topic").length && (c = "search", 0 < b.find("img").length ? (f = b.parents(".zm-search3-side-topic").find("a.zm-item-link-avatar").index(b.get(0)), f = "search_result_sidebar_topics_" + f + "_avatar") : (f = b.parents(".zm-search3-side-topic").find('.content a[href^="/topic/"]').index(b.get(0)) + 1, f = "search_result_sidebar_topics_" + f + "_name")));
        c && (d && f) && Z(c, d, f, h, g)
    });
    0 < $(".zm-search3-card.people").length && Z("search", "show_search_result_card", "search_result_card_people");
    0 < $(".zm-search3-card.topic").length && Z("search", "show_search_result_card", "search_result_card_topic");
    N(U, "ga_click_sign_in",
    function(a) {
        a.data && a.data.label ? Z("sign_in", "click_sign_in", a.data.label) : Z("sign_in", "click_sign_in")
    });
    N(U, "ga_click_sign_in_close",
    function() {
        Z("sign_in", "click_sign_in_close", "sign_in_box_main")
    });
    N(U, "ga_click_sign_in_weibo",
    function(a) {
        Z("sign_in", "click_sign_in_weibo", a.label)
    });
    N(U, "ga_click_sign_in_switch",
    function(a) {
        "signin" === a.data ? Z("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_in") : "signup" === a.data && Z("sign_in", "click_sign_in_switch", "sign_in_box_switch_to_sign_up")
    });
    N(U, "ga_click_sign_in_link_account",
    function(a) {
        a.target ? (a = $(a.target), $a(a.parent().text(), "该邮箱已注册") ? Z("sign_in", "click_sign_in_link_account", "sign_up_error_user_exists_link_account") : $a(a.parent().text(), "如果你已有知乎账号") ? $(".view-warmup").is(":visible") ? Z("sign_in", "click_sign_in_link_account", "sign_in_box_splash_link_account") : $(".view-info").is(":visible") && Z("sign_in", "click_sign_in_link_account", "sign_in_box_sign_up_link_account") : $a(a.text(), "返回注册") && Z("sign_in", "click_sign_in_link_account", "sign_in_box_link_account_back")) : a.label && Z("sign_in", "click_sign_in_link_account", a.label)
    });
    N(U, "ga_click_sign_in_connect",
    function() {
        Z("sign_in", "click_sign_in_weibo", "sign_in_connect_weibo")
    });
    N(U, "ga_click_sign_in_avatar",
    function() {
        Z("sign_in", "click_sign_in_avatar", "sign_in_avatar_upload")
    });
    N(U, "ga_click_sign_in_previous_step",
    function() {
        Z("sign_in", "click_sign_in_previous_step", "sign_in_box_follow_user_previous")
    });
    N(U, "ga_click_follow_topic",
    function(a) {
        0 < a.data ? Z("sign_in", "click_follow_topic", "sign_in_box_follow_topic_next", a.data) : 0 === a.data && Z("sign_in", "click_follow_topic", "sign_in_box_follow_topic_skip")
    });
    N(U, "ga_click_follow_people",
    function(a) {
        0 < a.data ? Z("sign_in", "click_follow_people", "sign_in_box_follow_people_next", a.data) : 0 === a.data && Z("sign_in", "click_follow_people", "sign_in_box_follow_people_skip")
    })
}
function qw() { (new bo).k(); (new qq).k();
    var a = $("#rq3-sidenav-link"),
    b = $(".tour", a);
    b.length && $(".close-button", b).click(function() {
        var a = $(this).data("feature");
        $.get("/notifeature", {
            feature: a
        });
        b.fadeOut(100,
        function() {
            b.remove()
        })
    })
}
function rw(a, b) {
    b = b || 3E3;
    if (a) {
        var c = H("zh-message-container");
        c && (c.innerHTML = a[1], E.set(c, a[0] ? "zg-error-message": "zg-info-message"), S(c, i), 0 < b && $(c).delay(b).fadeOut())
    }
}
function Jn() {
    if (window.console) {
        var a = y.toArray(arguments);
        a.unshift("[" + (new Date).toLocaleTimeString() + "]:\t");
        console.log.apply ? console.log.apply(console, a) : console.log(a[0], a.slice(1).join(","))
    }
}
var sw = wf.v(),
tw = new Ve;
tw.dv = l;
sw.Vr = tw;
var uw = ga.PLOVR_MODULE_INFO,
vw;
for (vw in uw) sw.xc[vw] = new uf(uw[vw], vw);
sw.UB == sw.Mp && (sw.UB = j, sw.Mp.ro(u(sw.YC, sw)) && Ff(sw, Gf));
var ww = ga.PLOVR_MODULE_URIS,
xw;
for (xw in ww) sw.xc[xw].lk = ww[xw];
Ef("app");
Da("ZH.entryGlobalLog", yw);
Da("ZH.main",
function(a) {
    zd.prototype.on = function() {
        zd.prototype.addEventListener.apply(this, arguments);
        return this
    };
    zd.prototype.off = function() {
        zd.prototype.removeEventListener.apply(this, arguments);
        return this
    };
    zd.prototype.Q = zd.prototype.dispatchEvent;
    nw.on(["click!", "show!", "visit!"], ow);
    Jd = window;
    y.forEach(a,
    function(a) {
        var c = a[1];
        switch (a[0]) {
        case "form_key":
            zk = c;
            break;
        case "current_user":
            V = c;
            V.NL = c[0];
            V.ob = function() {
                return "-1" !== V[3]
            };
            V.wf = 1 === c[7];
            V.Bq = c[8];
            V.co = c[9];
            V.zw = c[10];
            break;
        case "env":
            Ak = {
                Sl: c[0],
                Ou: c[1],
                pb: c[2],
                Zw: c[3],
                gY: c[4],
                XY: "http://static." + c[0],
                hE: l,
                cZ: i
            };
            break;
        case "env_comet_path":
            Ak.Ou = c;
            break;
        case "current_question":
            Bk = {
                L: c[0],
                Gp: c[1],
                Zp: c[2],
                LT: c[3],
                jX: c[4],
                Em: c[5],
                ab: c[6],
                Rn: c[7],
                $X: c[8],
                fZ: c[9],
                tX: c[10],
                Nc: c[11],
                iT: c[12],
                zs: c[13],
                TW: c[14]
            };
            break;
        case "bio":
            Ck = c;
            break;
        case "current_topic":
            Dk = c;
            break;
        case "current_people":
            Ek = c;
            break;
        case "current_list":
            Fk = c;
            break;
        case "block_topic":
            Gk = c;
            break;
        case "draft":
            Hk = c.length ? c: j;
            break;
        case "editing_queue":
            Ik = c;
            break;
        case "sina_bind_info":
            c.length && (Mk = c[0]);
            break;
        case "qq_bind_info":
            c.length && (Nk = c[0]);
            break;
        case "disabled_components":
            Jk = c;
            break;
        case "comet_path":
            wk = c;
            break;
        case "enforce_realname":
            Kk = c;
            break;
        case "action_ban":
            Lk = c
        }
    });
    window.DZMT = j;
    Bk && (Bk.cE = l);
    Jk || (Jk = []);
    navigator.userAgent.match(/iPad/i) && (Ak.hE = i, Ak.pb = i);
  //  Ak.Sl && (document.domain = Ak.Sl);
    Ak.Ou && (wk = "http://" + Ak.Ou + wk);
    Ak.pb && window.scrollTo(0, 1);
    ub = Ak.pb;
    Zl = new Xl;
    $.ajaxPrefilter(function(a, c) {
        var d, f;
        c.processData !== l && "get" !== a.type && (f = Mf.get("_xsrf"), d = c.data || {},
        "string" === $.type(d) ? d = d + "&_xsrf=" + f: (d._xsrf = f, d = $.param(d)), a.data = d)
    });
    a = new co;
    a.k();
    U = a;
    ub || wf.v().ry("rich_text_editor"); (new Xv).k();
    $("#js-reg-with-mail-in-top").click(function() {
        var a = Fn.v();
        a.Ga = "header_sign_up";
        $v(a, i);
        a.n(i)
    });
    $("#js-reg-with-sina-in-top").click(function() {
        var a = Fn.v();
        U.Q({
            type: "ga_click_sign_in_weibo",
            label: "header_sign_up"
        });
        $v(a, i);
        a.e().c(U, "accountcallback",
        function(c) {
            if (1 === c.lb.login) return location.reload(),
            l;
            a.n(i);
            a.Wi && a.Wi.kF(c)
        })
    });
    V.ob() ? (Vl.push({
        nU: "json",
        filter: function(a) { (a = a.profile_result) && $(a).css("border-top", "1px solid #eee").appendTo(document.body)
        }
    }), Ak.pb && ($.fx.off = i), $(function() {
        Fl ? $("input[autofocus]").removeAttr("autofocus").blur() : "autofocus" in document.createElement("input") || $("input[autofocus]").focus();
        new cw;
        kw.prototype.V.offsetTop = -60;
        var a = $('div[data-widget="navigable"], ul[data-widget="navigable"]');
        if (1 === a.length) {
            var c = a.data("navigable-options"),
            c = new kw(c);
            c.h(a.get(0));
            var d = $("#zh-load-more");
            c.on("action",
            function(a) {
                a.data.index >= a.data.size && d.is(":visible") && d[0].click()
            })
        }
        a = $("#zh-report");
        a[0] && (new lw({
            SG: i
        })).h(a[0]); (new io).k();
        a = new oo({
            url: wk,
            data: {
                loc: location.href,
                channel: Aa() + cb()
            },
            dataType: "polling",
            converters: {
                "text polling": function(a) {
                    return JSON.parse(a.replace(/^\+;/, ""))
                }
            }
        });
        a.addEventListener("message",
        function(a) {
            eo(a.data)
        });
        a.my()
    })) : $("body").addClass("no-auth");
    vk = new Wn;
    $a(location.host, "zhihu.com") || (xk = i); (new lo).k();
    $(function() {
        if (window.localStorage) {
            var a = Ad(localStorage.getItem("zhga"));
            localStorage.removeItem("zhga");
            "null" === a || "undefined" === a || a && y.forEach(a,
            function(a) {
                1 === a.length ? Kn(a[0]) : In(a[0], a[1], a[2], a[3])
            })
        }
    });
    $(document.body).children("div.zu-main").attr("role", Xc.sI);
    document.addEventListener && document.addEventListener("touchstart", ia, l);
    $(qw);
    $(pw)
});
Da("ZH.setGlobalInfoMessage",
function(a) {
    U && a && go(a)
});
Da("ZH.cm",
function(a, b) {
    U.dispatchEvent(new fo(a, b))
});
Da("ZH.m", rw);
Da("ZH.i",
function(a) {
    U.dispatchEvent(new fo("iframe_data", a))
});
Da("ZH.ill",
function() {
    vk && vk.k()
});
Da("ZH.playVideo",
function(a, b) {
    if (!Lc(a, "zh-summary")) if (ub || Qi) {
        var c = I("video-info", a);
        window.open(c.innerHTML)
    } else {
        var d = K("embed"),
        c = -1 < b.indexOf("tudou");
        if ( - 1 < b.indexOf("youku")) {
            var f = b.match(/\w{10,}/g),
            g = "";
            f && f.length && (g = "http://static.youku.com/v1.0.0179/v/swf/loader.swf?VideoIDS=" + f[0] + "&embedid=-&showAd=0&isAutoPlay=true&isShowRelatedVideo=false");
            b = g || b
        }
        c && (b = b.replace("/v.swf", "&autoPlay=true/v.swf"));
        f = [["src", b], ["type", "application/x-shockwave-flash"], ["allowscriptaccess", "never"], ["allowfullscreen", "true"], ["wmode", "opaque"], ["width", "420"], ["height", "350"], ["class", "video"], ["pluginspage", "http://get.adobe.com/cn/flashplayer/"]];
        c && f.push(["flashvars", "playMovie=true&auto=true"]);
        y.forEach(f,
        function(a) {
            d.setAttribute(a[0], a[1])
        });
        c = K("a", {
            "class": "zg-link-gray-normal video-player-close",
            href: "#"
        },
        "收起视频");
        f = K("div", "video-player-box", [d, K("div", "video-player-foot", c)]);
        pd(c, "click",
        function(a) {
            a.preventDefault();
            a = Lc(a.target, "video-player-box");
            S(tc(a), i);
            L(a)
        });
        mc(f, a);
        S(a, l)
    }
});
function zw(a) {
    M.call(this);
    this.d = a;
    a = z || B && !D("531") && "TEXTAREA" == a.tagName;
    this.G = new me(this);
    this.G.c(this.d, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
}
w(zw, zd);
zw.prototype.ga = j;
zw.prototype.handleEvent = function(a) {
    if ("input" == a.type) Aw(this),
    (!tb || this.d == Ub(this.d).activeElement) && this.dispatchEvent(Bw(a));
    else if ("keydown" != a.type || Og(a)) {
        var b = "keydown" == a.type ? this.d.value: j;
        z && 229 == a.keyCode && (b = j);
        var c = Bw(a);
        Aw(this);
        this.ga = Ld(function() {
            this.ga = j;
            this.d.value != b && this.dispatchEvent(c)
        },
        0, this)
    }
};
function Aw(a) {
    a.ga != j && (Jd.clearTimeout(a.ga), a.ga = j)
}
function Bw(a) {
    a = new ed(a.Yb);
    a.type = "input";
    return a
}
zw.prototype.m = function() {
    zw.g.m.call(this);
    this.G.w();
    Aw(this);
    delete this.d
};
function Cw(a, b, c, d) {
    M.call(this);
    this.Kd = a;
    this.zh = b;
    this.Sf = c;
    this.eC = d || Dw;
    a.maxLength = c;
    this.qj = new zw(a);
    N(this.qj, "input", this.mo, l, this);
    this.Bi()
}
w(Cw, zd);
var Dw = 0;
Cw.prototype.mo = function() {
    this.Bi()
};
Cw.prototype.Bi = function() {
    var a = this.Kd.value.length;
    if (a > this.Sf) {
        var b = this.Kd.scrollTop,
        c = this.Kd.scrollLeft;
        this.Kd.value = this.Kd.value.substring(0, this.Sf);
        a = this.Sf;
        this.Kd.scrollTop = b;
        this.Kd.scrollLeft = c
    }
    this.zh && zc(this.zh, 1 == this.eC ? a: this.Sf - a)
};
Cw.prototype.m = function() {
    Cw.g.m.call(this);
    delete this.Kd;
    this.qj.w();
    this.qj = j
};
var Ew = {},
Ew = function() {
    M.call(this)
};
w(Ew, ao);
Ew.Ut = [["需要详细阐述", "答案过于简短或表述不清晰，请完善答案。"], ["答非所问", "没有正面或直接回答问题，请修改答案。"], ["应作为问题的评论", "该内容是对问题本身的评论而不是回答，请改为发布到评论。"], ["应作为答案的评论", "该内容是对另外一个答案的评论或回应，而不是回答问题，请改为发布到评论。"], ["内容重复", "与已有答案重复，请修改答案。"], ["内容已过期", "答案的时效性已过，请更新答案。"], ["需要注明关联利益", "有广告、推销嫌疑，请注明作者与利益方的关系。"]];
Ew.Qh = j;
Ew.v = function() {
    Ew.Qh || (Ew.Qh = new Ew, Ew.Qh.k());
    return Ew.Qh
};
r = Ew.prototype;
r.k = function() {
    this.d || (this.j(), this.ua(), this.Sw())
};
r.ua = function() {
    this.e().c(this.d, "click", this.vQ)
};
r.vQ = function(a) {
    "A" === a.target.tagName && (a = a.target.getAttribute("data-index"), this.LK.FX(a), this.ci.n(l))
};
r.Sw = function() {
    var a = new so(this.d);
    Zk(a);
    a.zD = i;
    Zk(a);
    a.cB = i;
    a.n(l);
    a.ny = 0;
    a.H() && a.xa();
    to(a, new Nf(13, 0, 0, -22));
    this.ci = a
};
r.j = function() {
    var a = K("div", {
        id: "zh-answer-flag-popup",
        "class": "zg-r5px zu-hovercard-wrap"
    },
    [K("div", "zg-r5px zu-hovercard-inner", [K("div", {
        id: "zh-answer-flag-popup-header"
    },
    [K("a", {
        "class": "zg-right",
        href: "http://www.zhihu.com/question/19867017",
        target: "_blank"
    },
    "这是什么？"), "选择一个理由："]), this.JF = K("div", {
        id: "zh-answer-flog-options-wrap"
    })]), K("div", "zu-hovercard-spin-top")]);
    y.forEach(Ew.Ut,
    function(a, c) {
        var d = K("a", {
            href: "javascript:;",
            "class": "zm-menu-item-link"
        },
        a[0]);
        d.setAttribute("data-index", c);
        this.JF.appendChild(d)
    },
    this);
    document.body.appendChild(a);
    this.d = a
};
r.show = function(a, b) {
    this.ci.Kc(new Bi(a, 1));
    var c = b.LX(),
    d = Xb("zm-menu-item-link", this.JF);
    y.forEach(d,
    function(a, b) {
        S(a, !y.contains(c, b))
    },
    this);
    this.ci.n(i);
    this.LK = b
};
function Fw() {
    M.call(this)
}
var Gw;
w(Fw, ao);
Fw.prototype.k = function() {
    this.j();
    this.e().c(this.Zk, "change",
    function() {
        var a = this.Zk.value;
        this.Qg.value = "no" === a ? "": Ew.Ut[ + a][1]
    }).c(this.qg, "click",
    function(a) {
        "cancel" === a.target.name ? this.z.n(l) : this.Qg.value && "no" !== this.Zk.value && (this.Gv = new Y(i), this.e().c(this.Gv, "complete",
        function() {
            var a = R(this.Gv);
            a && !a.r ? (this.Ia.innerHTML = "已经标记", this.z.n(l)) : X(a.msg)
        }), a = pn(this.Qg.value), this.Gv.ajax("/answer/flag", "answer_id=" + this.OI + "&flag=" + this.Zk.value + "&reason=" + encodeURIComponent(a)))
    })
};
Fw.prototype.j = function() {
    this.d = K("div", j, [K("div", "zg-section", [K("div", j, "标记："), this.Zk = K("select")]), K("div", j, [K("div", j, "原因"), this.Qg = K("textarea", {
        style: "width:96%;border:solid 1px #666;height:66px;padding:5px"
    })]), this.qg = K("div", "zm-command", [K("a", {
        "class": "zg-mr10",
        href: "javascript:void(0);",
        name: "cancel"
    },
    "取消"), K("a", {
        "class": "zg-btn-blue",
        href: "javascript:void(0);",
        name: "confirm"
    },
    "确定")])]);
    this.Zk.appendChild(K("option", {
        value: "no"
    },
    "选择标记原因"));
    y.forEach(Ew.Ut,
    function(a, b) {
        this.Zk.appendChild(K("option", {
            value: b
        },
        a[0]))
    },
    this);
    this.z = new Nl(j, l);
    this.z.Ma("标记答案");
    nl(this.z, j);
    this.z.R().appendChild(this.d)
};
Fw.prototype.show = function() {
    this.z.n(i)
};
function Hw(a) {
    M.call(this);
    this.z = j;
    this.L = a;
    this.Ps = 0;
    this.$F = ""
}
var Iw;
w(Hw, ao);
r = Hw.prototype;
r.k = function() {
    this.ac || (this.ac = i, this.j(), this.ua())
};
r.ua = function() {
    z || (new To("搜索问题")).h(this.oc);
    this.u = new iq("/redirect-question/autocomplete", this.oc, j, j, H("zh-question-redirect-diag-content"), l);
    this.u.Fm = l;
    this.u.Je(i);
    this.e().c(this.u, $o.mg.lh, Un);
    this.e().c(this.u, "select", this.yQ).c(this.UJ, "click",
    function() {
        this.z.n(l)
    })
};
r.yQ = function() {
    var a = this.u.te();
    this.oc.value = "";
    var b = a[3],
    a = a[1];
    this.z.n(l);
    this.oc.value = "";
    this.xhr = new Y(i);
    Q(this.e(), this.xhr, "complete", this.lJ);
    this.xhr.ajax("/question/redirect", "qid=" + this.L + "&rqid=" + b);
    this.Ps = b;
    this.$F = a
};
r.lJ = function() {
    var a = R(this.xhr);
    a && (a.r ? X(a.msg) : this.Ia ? (this.Ia.innerHTML = "已经重定向", this.Ia.setAttribute("data-disabled", 1)) : this.dispatchEvent("change"))
};
r.j = function() {
    this.d = K("div", {
        id: "zh-question-redirect-diag"
    },
    ["将问题跳转至", K("div", {
        id: "zh-question-redirect-diag-content"
    },
    this.oc = K("input", {
        type: "text",
        "class": "zg-form-text-input"
    })), K("div", "zm-command", this.UJ = K("a", {
        href: "javascript:;",
        "class": "zm-command-cancel",
        name: "cancel"
    },
    "放弃操作"))]);
    this.z = new Nl(j, l);
    this.z.Ma("问题重定向");
    nl(this.z, j);
    this.z.R().appendChild(this.d)
};
r.show = function() {
    this.k();
    this.z.n(i)
};
function Jw(a) {
    var b = a && a.name;
    if (b) switch (b) {
    case "adminflag":
        Gw || (Gw = new Fw, Gw.k());
        b = Gw;
        b.Ia = a;
        b.OI = a.id.split("-")[1];
        b.show();
        break;
    case "redirect":
    case "cancel_redirect":
        if (!a.getAttribute("data-disabled")) {
            var c;
            Iw || (Iw = new Hw, Iw.k());
            c = Iw;
            c.Ia = a;
            c.L = a.id.split("-")[1];
            "redirect" === b ? c.show() : (Sl("/question/unredirect", j, "POST", "qid=" + c.L + "&rqid=" + c.Ps), c.Ia.innerHTML = "重定向已撤销", c.Ia.setAttribute("data-disabled", 1))
        }
        break;
    case "revert":
        var d = Ol("撤销", '<div class="zg-form-text-input"><textarea class="zg-editor-input content" title="请输入撤销原因" placeholder="请输入撤销原因"></textarea></div>',
        function(b) {
            if (b) {
                var b = f.value,
                c = a.getAttribute("id").split("-")[1],
                b = (new Np).add("revision", c).add("reason", b),
                m = new Y(i);
                m.on("success",
                function() {
                    var a = R(m);
                    a.r ? X(a.msg) : (d.n(l), a.msg ? window.location.href = a.msg: location.reload())
                });
                m.ajax("/revert", b.toString());
                return l
            }
        }),
        f = I("content", d.R());
        new Zp(f);
        new Xo(f, 48);
        new Cw(f, j, 200)
    }
};
function Kw() {
    this.Fh = ["zg-btn-follow", "zg-btn-unfollow"];
    this.Gh = "people"
}
w(Kw, T);
Kw.prototype.p = function() {
    this.e().c(this.d, "click", this.S)
};
Kw.prototype.cg = function(a, b) {
    this.Gh = a;
    this.Fh = b || this.Fh
};
Kw.prototype.S = function(a) {
    var b = zn(this.d, a.target);
    this.nd && this.nd(b);
    b && (b.name && "focus" === b.name) && Dn(b, this.Gh,
    function() {
        b.getAttribute("data-focusme") && (E.has(b, "zg-btn-follow") ? b.setAttribute("data-tip", "s$b$对方已关注你") : b.setAttribute("data-tip", "s$b$已互相关注"))
    },
    this.Fh, {
        GX: "question" === this.Gh ? "关注问题": j
    })
};
Kw.prototype.ae = ca("nd");
function Lw(a, b, c) {
    T.call(this);
    this.offset = 0;
    this.Uh = 20;
    this.nL = a;
    this.url = b || window.location.href;
    this.ef = "zm-item";
    this.li = 0;
    this.jR = c;
    this.zc = {};
    this.PW = "POST"
}
w(Lw, T);
r = Lw.prototype;
r.Bt = !ub;
r.pi = !ub;
r.pc = ca("ef");
r.k = function() {
    this.gb = H("zh-load-more");
    this.h(this.nL)
};
r.p = function() {
    Lw.g.p.call(this);
    this.Gm = 1;
    Mw(this);
    this.tk = $(this.gb);
    var a;
    if (a = this.gb) a: if (a = this.Ye(), this.offset = this.Fj ? this.Fj(a) : a.length, this.dr) a = this.dr.call(this),
    S(this.gb, a);
    else {
        if (this.gb) {
            if ("-1" === this.tk.attr("data-next") || !a || 10 > a.length) {
                this.tk.hide();
                a = l;
                break a
            }
            this.tk.removeClass("hidden").show()
        }
        a = i
    }
    a && (this.e().c(this.gb, "click",
    function() {
        this.Hg = i;
        this.ui && "pending" === this.ui.state() && 1 === this.Gm ? (this.ui.done(u(this.Xd, this)), this.hz = i, Nw(this, i)) : this.Yx()
    }), this.Bt && (this.Jz = new Zn(this.Ux, 100, this), this.e().c(window, "scroll",
    function() {
        this.Jz.fire()
    })));
    this.tl(this.Ye())
};
function Nw(a, b) {
    b ? a.tk.html('<i class="spinner2"></i>正在加载').prop("disabled", i) : a.tk.html("更多").prop("disabled", l)
}
r.Ux = function() {
    var a = this.gb;
    if (a && sg(a)) {
        var a = fg(a).y - (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop),
        b = 460;
        document.body && document.body.offsetWidth && (b = document.body.offsetHeight);
        "CSS1Compat" === document.compatMode && (document.documentElement && document.documentElement.offsetWidth) && (b = document.documentElement.offsetHeight);
        window.innerWidth && window.innerHeight && (b = window.innerHeight);
        if (1E3 >= a - b && !(this.us || this.ui && "pending" === this.ui.state())) this.pi && (3 === this.Gm ? (this.Gm = 1, this.hz = l) : (this.Hg = l, this.Gm++, this.hz = i)),
        Ow(this)
    }
};
r.Yx = function() {
    this.Bt && this.us ? (this.Xd(this.us), this.us = j) : (Nw(this, i), Ow(this))
};
function Ow(a) {
    if (! (a.ui && "pending" === a.ui.state())) {
        var b = a.sy($.extend(a.zc, {
            offset: a.offset,
            start: a.li
        }));
        a.ui = $.post(a.url, b).done($.proxy(function(a) {
            this.Bt ? this.hz ? this.Xd(a) : (this.us = a, Nw(this, l)) : this.Xd(a)
        },
        a));
        1 !== a.Gm && Nw(a, i)
    }
}
r.sy = aa();
r.Xd = function(a) {
    if (a && !a.r) {
        var b = a.msg[0],
        c = a.msg[1],
        d;
        2 < a.msg.length && (d = a.msg[2], this.gb.setAttribute("data-next", d));
        var f;
        0 < b && (this.WA(c), this.Fj ? (f = Xb(this.ef, this.d.parentNode), this.offset = this.Fj(f)) : this.offset += b);
        Gn(this.gb, l);
        this.dr ? this.dr.call(this, a) ? S(this.gb, i) : S(this.gb, l) : -1 === d || 10 > b ? S(this.gb, l) : S(this.gb, i);
        this.Fj && 0 < b && (this.offset = this.Fj(f));
        this.dispatchEvent({
            data: {
                Hg: this.Hg,
                pi: this.pi
            },
            type: "afterload"
        });
        Nw(this, l)
    }
};
r.Ye = function() {
    return Xb(this.ef, this.d)
};
r.jy = function(a) {
    return a.id.split("-")[1]
};
function Mw(a) {
    var b = a.Ye(),
    c;
    if (a.jR) if (a.gb && (c = a.gb.getAttribute("data-next")), c) a.li = c;
    else if (b = y.Og(b)) a.li = a.jy(b)
}
r.WA = function(a) {
    var a = gc(oa(a) ? a.join("") : a),
    b = "DIV" === a.nodeName ? [a] : Xb(this.ef, a);
    this.tl(b);
    this.d.appendChild(a);
    Mw(this)
};
r.tl = function(a) {
    y.forEach(a,
    function(a) {
        var c = this.Bl(a);
        this.dispatchEvent({
            data: {
                item: a,
                DO: c
            },
            type: "itemcreated"
        })
    },
    this)
};
r.Bl = ia;
function Pw(a, b, c, d, f) {
    Lw.call(this, a, b, f);
    this.Iv = c || "people";
    this.FL = d || ["zg-follow", "zg-unfollow"]
}
w(Pw, Lw);
Pw.prototype.k = function(a) {
    Pw.g.k.call(this, a);
    this.ua(this.d)
};
Pw.prototype.Xz = ca("Xz");
Pw.prototype.ua = function(a) {
    if (this.Xz) {
        var b = new Kw;
        b.cg(this.Iv, this.FL);
        this.nd && b.ae(this.nd);
        b.h(a)
    }
};
Pw.prototype.ae = ca("nd");
function Qw() {
    M.call(this)
}
w(Qw, ao);
Qw.prototype.k = function() {
    var a = H("zh-global-logs-questions-wrap");
    a && (a = new Pw(a, j, j, j, i), a.ae(Jw), a.k());
    if (a = H("zh-global-logs-wrap")) a = new Pw(a, j, j, j, i),
    a.ae(Jw),
    a.k()
};
function Rw() {
    M.call(this)
}
w(Rw, ao);
Rw.prototype.k = function() {
    this.qr = H("help-index"); (new Xu).h(this.qr);
    var a = window.location.href,
    b = "";
    0 < a.indexOf("#") && (b = a.substring(a.indexOf("#")), a = a.substring(0, a.indexOf("#")));
    "/help" === a.substring(a.length - 5) && (a += "/faq");
    var c = Vb("a", j, this.qr);
    y.forEach(c,
    function(c) { (c.href === a || c.href === a + b) && Kc(c,
        function(a) {
            "UL" === a.tagName && E.add(a, "force-display");
            "LI" === a.tagName && E.add(a, "current")
        })
    },
    this);
    this.e().c(this.qr, "click", this.DM)
};
Rw.prototype.DM = function(a) {
    if ((a = zn(this.qr, a.target)) && 0 < a.href.indexOf("#")) {
        var b = Jc(a, "ul", j),
        b = Vb("li", j, b);
        y.forEach(b,
        function(a) {
            E.remove(a, "current")
        },
        this);
        E.add(a.parentNode, "current")
    }
};
function Sw(a, b) {
    Lw.call(this, a, b, i);
    this.fR = H("zh-pm-page-wrap")
}
w(Sw, Lw);
Sw.prototype.jy = function(a) {
    return a.getAttribute("data-token")
};
Sw.prototype.sy = function(a) {
    a.start_id = this.li;
    return a
};
function Tw() {
    M.call(this);
    this.yb = "zm-pm-item"
}
w(Tw, ao);
Tw.prototype.k = function() {
    var a = H("zh-create-pm");
    a && this.e().c(a, "click", this.NP);
    a = H("zh-pm-item-wrap");
    this.la = new Sw(a, window.location.href);
    this.la.pc(this.yb);
    this.la.k();
    this.e().c(a, "click", this.S);
    $(function() {
        $("#zh-change-pm-admin").change(function() {
            var a = $(this).find("option:selected").attr("data-token");
            location.href = "self" === a ? "/admin_feedback": "/admin_feedback/" + a
        })
    })
};
Tw.prototype.NP = function() {
    this.Ab || (this.Ab = new jq);
    this.Ab.show();
    nq(this.Ab, -1)
};
Tw.prototype.S = function(a) {
    if (a = zn(this.fR, a.target)) {
        var b = a.name,
        c = Lc(a, this.yb);
        if (!c || !a.name) return i;
        var a = $(c).data(),
        d = a.member,
        f = a.name;
        switch (b) {
        case "reply":
            c.getAttribute("data-adminmessagetoken");
            this.Ab || (this.Ab = new jq);
            b = $("#zh-change-pm-admin option:selected").attr("data-token");
            this.Ab.show();
            var c = this.Ab,
            g = a.type;
            c.gm = a.token;
            c.Iz = g;
            nq(this.Ab, d, f, l);
            b && "self" !== b && (this.Ab.WW = b, a = this.Ab, d = $(".pm-seleted-admin").html(), a.bA && a.bA.html(d));
            this.Ab.vb.focus();
            break;
        case "delete":
            var k = c.getAttribute("data-token");
            Ol("删除私信会话", "你确定要删除与 " + f + "的所有会话吗？",
            function(a) {
                if (a) {
                    var b = new Y(i);
                    b.on("success",
                    function() {
                        var a = R(b);
                        a.r ? X(a.msg) : window.location.reload()
                    });
                    b.ajax("/inbox/delete", "type=thread&token=" + k)
                }
            },
            this);
            break;
        case "edit":
            a = this.sf,
            S(this.oc, i),
            S(a, l),
            this.dh = -1
        }
    }
};
function Uw() {
    M.call(this);
    this.yb = "zm-pm-item"
}
w(Uw, ao);
Uw.prototype.k = function() {
    var a = H("zh-pm-detail-item-wrap");
    this.Ab = new jq;
    var b = I(this.yb, a);
    if (b) {
        var c = H("zh-pm-editor-form");
        if (c) {
            this.Ab.jm = l;
            this.Ab.bg(c);
            this.Ab.show();
            var b = $(b).data(),
            c = this.Ab,
            d = b.type;
            c.gm = b.token;
            c.Iz = d;
            nq(this.Ab, b.member, b.name, l);
            this.Ab.focus()
        }
        this.la = new Sw(a, window.location.href);
        this.la.pc(this.yb);
        this.la.k();
        this.e().c(a, "click", this.S)
    }
};
Uw.prototype.S = function(a) {
    var b = zn(H("zh-pm-detail-page-wrap"), a.target);
    if (b && (a = b.name, b = Lc(b, this.yb))) switch (a) {
    case "reply":
        this.Ab.show();
        var a = $(b).data(),
        b = this.Ab,
        c = a.type;
        b.gm = a.token;
        b.Iz = c;
        nq(this.Ab, a.member, a.name, l);
        this.Ab.focus();
        break;
    case "delete":
        var d = b.getAttribute("data-token");
        Ol("删除私信", "你确定要删除这封私信吗？",
        function(a) {
            if (a) {
                var b = new Y(i);
                b.on("success",
                function() {
                    var a = R(b);
                    a.r ? X(a.msg) : window.location.reload()
                });
                b.ajax("/inbox/delete", "type=single&token=" + d)
            }
        },
        this)
    }
};
function Vw(a, b, c, d) {
    M.call(this);
    this.Kd = a;
    this.zh = b;
    this.Sf = c;
    this.eC = d || Ww;
    this.qj = new zw(a);
    N(this.qj, "input", this.mo, l, this);
    this.Bi()
}
w(Vw, zd);
var Ww = 0;
r = Vw.prototype;
r.mo = function() {
    this.Bi()
};
r.Bi = function() {
    var a = this.Sv();
    this.zh && (0 > this.Sf - a ? (zc(this.zh, "已超出 " + (a - this.Sf) + " 字"), E.add(this.zh, "zg-text-error")) : (zc(this.zh, "还可以输入 " + (this.Sf - a) + " 字"), E.remove(this.zh, "zg-text-error")))
};
r.m = function() {
    Vw.g.m.call(this);
    delete this.Kd;
    this.qj.w();
    this.qj = j
};
r.Jg = ea(19);
r.Sv = function() {
    return this.Kd.value.length
};
function Xw(a, b, c, d) {
    Vw.call(this, a, b, c, d)
}
w(Xw, Vw);
Xw.prototype.Sv = function() {
    return Hn(this.Kd.value)
};
function Yw() {
    M.call(this);
    this.z = j;
    this.XG = l;
    this.tg = {};
    this.yT = ["分享答案", "分享问题", "分享收藏夹"];
    this.lZ = ["share_to_weibo", "share_to_weibo", "share_to_weibo"];
    this.OT = ["share_by_email", "share_by_email", "share_by_email"];
    this.PT = ["share_by_pm", "share_by_pm", "share_by_pm"];
    this.xH = ["share_answer", "share_question", "share_favlist"];
    this.FS = ["/answer/share", "/question/share", "/collection/share"]
}
w(Yw, ao);
ja(Yw);
r = Yw.prototype;
r.k = function() {
    this.ac || (this.e().c(Zl, "question_title_change",
    function() {
        this.tg[this.fh] = j;
        this.fi()
    }), this.ac = i, this.j(), this.ua(), this.jf())
};
r.show = function() {
    this.k();
    pv.v().refresh();
    this.fi();
    this.z.n(i)
};
r.hide = function() {
    this.z.n(l)
};
function Zw(a, b, c, d) {
    a.id = b;
    a.url = c;
    a.Ke = y.indexOf(["a", "q", "f"], d);
    a.fh = d + b;
    a.ax = "a" === d;
    a.title = a.yT[a.Ke];
    a.GS = d
}
r.fi = function() {
    this.z.Ma(this.title);
    y.forEach(Xb("zm-webshare-tips-answer", this.d),
    function(a) {
        S(a, this.ax)
    },
    this);
    y.forEach(Xb("zm-webshare-tips-question", this.d),
    function(a) {
        S(a, !this.ax)
    },
    this);
    this.tg[this.fh] || (this.xhr = new Y(i), Q(this.e(), this.xhr, "success", this.DS), this.xhr.ajax(this.url + "/sharetext", "", "GET"));
    H("zh-webshare-sina-pm").value = this.tg[this.fh] && this.tg[this.fh].sina || "加载中...";
    this.VG.Bi();
    Yo(this.pz);
    this.pz.xt();
    this.qc && (this.qc.checked = l, this.jf());
    this.nc && (this.nc.checked = l, this.jf());
    this.qG();
    var a = this.nm;
    a.k();
    a.fi();
    a.vb.value = this.tg[this.fh] && this.tg[this.fh].pm || "加载中...";
    a.cK && a.cK.Bi();
    Yo(a.UF);
    a.UF.xt();
    S(a.oc, i);
    S(a.sf, l)
};
r.DS = function() {
    var a = R(this.xhr);
    a && a.r ? X(a.msg) : (this.tg[this.fh] = a, this.fi())
};
r.qG = function() {
    H("zh-webshare-mail-content").value = this.tg[this.fh] && this.tg[this.fh].mail || "加载中...";
    Yo(this.nC);
    this.nC.xt()
};
r.j = function() {
    var a = H("zh-webshare-dialog");
    a ? (this.d = a, this.z = new Nl(j, l), nl(this.z, j), this.z.R().appendChild(this.d), this.nm = new jq, this.nm.kc = this.z, this.nm.bg(H("tb-webshare-letter-content")), this.nm.k()) : Jn("module WebshareDialog does not exist!")
};
r.az = function() {
    this.qc.checked = i;
    this.jf()
};
r.$y = function() {
    this.nc.checked = i;
    this.jf()
};
function $w(a, b) {
    var c = H(b + "-content"),
    d = H(b);
    y.forEach(a.nT,
    function(a) {
        E.remove(a, "zm-common-nav-bar-current-light")
    });
    y.forEach(a.mT,
    function(a) {
        S(a, l)
    });
    E.add(d, "zm-common-nav-bar-current-light");
    S(c, i);
    a.bS || (a.z.xa(), a.bS = i)
}
r.ua = function() {
    var a = I("zm-common-nav-bar", this.d);
    this.e().c(a, "click", this.HQ);
    this.nT = Xb("zm-common-nav-bar-link", this.d);
    this.mT = Xb("zm-tab-content", this.d);
    this.Wm = Xb("zm-command", this.d);
    this.e().c(this.Wm[0], "click", this.S);
    this.e().c(this.Wm[1], "click", this.S);
    this.e().c(this.Wm[2], "click", this.S);
    this.xo = H("zh-webshare-sina-pm");
    this.pz = new Xo(this.xo);
    this.VG = new Xw(this.xo, H("zg-webshare-sina-counter"), 140, Ww);
    this.Pi = H("zh-webshare-mail-reciiver");
    this.Ah = H("zh-webshare-mail-content");
    this.nC = new Xo(this.Ah);
    this.e().c(U, "sina_callback",
    function(a) {
        this.az(a.lb.id, a.lb.name)
    }).c(U, "qq_callback",
    function(a) {
        this.$y(a.lb.id, a.lb.name)
    });
    this.uu();
    this.e().c(I("zg-btn-blue", this.nm.f()), "click", this.S)
};
r.uu = function() {
    this.qc = I("sina-checkbox", this.d);
    this.e().c(this.qc, "change", this.uo);
    this.nc = I("qq-checkbox", this.d);
    this.e().c(this.nc, "change", this.uo)
};
r.jf = function() {
    var a = I("weibo-share-button", this.d),
    b = this.qc.checked || this.nc.checked;
    E.enable(a, "zg-btn-blue", b);
    E.enable(a, "zg-btn-disabled", !b)
};
r.uo = function(a) {
    var a = a.target,
    b = a.getAttribute("data-bindurl");
    a === this.qc && !Mk || a === this.nc && !Nk ? (window.open(b), a.checked = l) : this.jf()
};
r.HQ = function(a) { (a = this.Nd(a.target)) && $w(this, a.id)
};
r.S = function(a) {
    var b = this.Nd(a.target);
    if (b && b.name) switch (b.name) {
    case "cancel":
        this.hide();
        break;
    case "send_sina":
        if (!E.has(b, "zg-btn-disabled") && this.xo.value && ax(this.xo.value)) {
            b = new An(i);
            b.add("content", Cn(Ra(this.xo.value)));
            var c = [];
            this.qc.checked && c.push("sina");
            this.nc.checked && c.push("qq");
            b.add("via", c.join(","));
            this.Pg(b);
            0 === this.Ke ? U.Q({
                type: "ga_click_share_answer_weibo",
                data: {
                    $z: c
                }
            }) : 1 === this.Ke && U.Q({
                type: "ga_click_share_question_weibo",
                data: {
                    $z: c
                }
            })
        }
        break;
    case "send_mail":
        this.Xx();
        break;
    case "send":
        if (b = this.nm, "-1" === String(b.dh)) mq(b, "请填写收信人。");
        else if (c = b.vb.value, ax(c)) if (Oa(c)) {
            var d = new An(i);
            d.add("talker_id", b.dh);
            d.add("content", Cn(Ra(c)));
            d.add("via", "pm");
            this.Pg(d);
            0 === this.Ke ? U.Q("ga_click_share_answer_message") : 1 === this.Ke && U.Q("ga_click_share_question_message");
            In("share", this.PT[this.Ke], this.xH[this.Ke])
        } else mq(b, "请填写私信内容。")
    }
    a.stopPropagation();
    a.preventDefault()
};
function ax(a) {
    return 0 !== a.indexOf("加载中")
}
r.Xx = function() {
    if (this.Pi.value && ax(this.Ah.value)) {
        var a = new An(i);
        a.add("via", "email");
        a.add("email", this.Pi.value);
        a.add("title", "");
        a.add("content", Cn(Ra(this.Ah.value)));
        this.Pg(a);
        0 === this.Ke ? U.Q("ga_click_share_answer_email") : 1 === this.Ke && U.Q("ga_click_share_question_email");
        In("share", this.OT[this.Ke], this.xH[this.Ke])
    }
};
r.Pg = function(a) {
    a.add(this.GS + "id", this.id);
    this.xhr = new Y(i);
    Q(this.e(), this.xhr, "complete", this.Am);
    this.xhr.ajax(this.FS[this.Ke], a.Nb())
};
r.Am = function() {
    var a = R(this.xhr);
    a && a.r ? X(a.msg) : (this.z.n(l), X("分享发送完毕"), this.Pi.value = "")
};
r.H = function() {
    return this.z.H()
};
var bx, cx = [],
dx = [].slice,
ex = Vn(550,
function() {
    if (cx.length) {
        var a = {
            items: JSON.stringify(cx)
        };
        $.post("/lastread/touch", a);
        cx = []
    }
});
bx = function() {
    cx.push(dx.call(arguments));
    ex()
};
function fx(a, b) {
    ai.call(this, a, b);
    this.Bm = i;
    this.Ie(i);
    this.n(l, i);
    this.of = new Od
}
w(fx, ai);
r = fx.prototype;
r.AT = l;
r.nE = 0;
r.re = j;
r.Z = function(a) {
    fx.g.Z.call(this, a); (a = a.getAttribute("for") || a.htmlFor) && this.zf(this.B().f(a), 1)
};
r.p = function() {
    fx.g.p.call(this);
    Md.forEach(this.of, this.$A, this);
    var a = this.e();
    a.c(this, "action", this.xP);
    a.c(this.B().va(), "mousedown", this.pF, i);
    B && a.c(this.B().va(), "contextmenu", this.pF, i)
};
r.zf = function(a, b, c, d, f) {
    if (!a || !this.of.Gd(ta(a))) a ? (b = {
        d: a,
        gH: b,
        aP: c,
        tC: d ? "contextmenu": "mousedown",
        xx: f
    },
    this.of.set(ta(a), b), a = b) : a = j,
    this.Ca && this.$A(a)
};
r.$A = function(a) {
    this.e().c(a.d, a.tC, this.FF)
};
r.detach = function(a) { (!a || !this.of.Gd(ta(a))) && e(Error("Menu not attached to provided element, unable to detach."));
    a = ta(a);
    if (this.Ca) {
        var b = this.of.get(a);
        this.e().ya(b.d, b.tC, this.FF)
    }
    this.of.remove(a)
};
function hx(a, b, c, d, f) {
    var g = a.H();
    a.eE() && a.AT ? a.hide() : (a.re = f || j, a.dispatchEvent("beforeshow") && (c = "undefined" != typeof c ? c: 4, g || (a.f().style.visibility = "hidden"), S(a.f(), i), b.xa(a.f(), c, d), g || (a.f().style.visibility = "visible"), a.Hb( - 1), a.n(i)))
}
r.RG = function(a, b, c) {
    b = la(a.gH) ? new Ci(a.d, a.gH, i) : new ro(b, c);
    b.Yl && b.Yl(5);
    hx(this, b, a.aP, a.xx, a.d)
};
r.hide = function() {
    this.H() && (this.n(l), this.H() || (this.nE = Aa(), this.re = j))
};
r.eE = function() {
    return this.H() || 150 > Aa() - this.nE
};
r.xP = function() {
    this.hide()
};
r.FF = function(a) {
    for (var b = this.of.Eb(), c = 0; c < b.length; c++) {
        var d = this.of.get(b[c]);
        if (d.d == a.currentTarget) {
            this.RG(d, a.clientX, a.clientY);
            a.preventDefault();
            a.stopPropagation();
            break
        }
    }
};
r.pF = function(a) {
    this.H() && !this.Bf(a.target) && this.hide()
};
r.Xc = function(a) {
    fx.g.Xc.call(this, a);
    this.hide()
};
r.m = function() {
    fx.g.m.call(this);
    this.of && (this.of.clear(), delete this.of)
};
function ix(a) {
    iv.call(this, i, "/topic/bio/update", "bio");
    this.gg = a[0];
    this.zc = ["tid=" + this.gg[3]];
    this.content = a[1];
    this.Lc = '<a href="javascript:;" name="edit">描述你关于 ' + this.gg[0] + " 的经验</a>";
    this.At = i
}
w(ix, iv);
ix.prototype.Ci = function() {
    ix.g.Ci.call(this);
    this.Ym.innerHTML = "更新"
};
ix.prototype.Z = function(a) {
    ix.g.Z.call(this, a);
    var a = this.B(),
    b = a.j("strong", j, K("a", {
        href: "/topic/" + this.gg[1],
        title: this.gg[0],
        "class": ""
    },
    this.gg[0]));
    a.Mn(b, this.gc)
};
function jx(a, b) {
    M.call(this);
    this.XN = b;
    this.Ok = a;
    this.items = [];
    this.iZ = "/url_to_fetch_question_related_topic_bio_items";
    this.rx = l
}
w(jx, ao);
var kx = j;
function lx() {
    kx || (kx = new jx(Ck, l));
    return kx
}
function mx(a) {
    if (!a.locked) if (!a.fP && a.rx) {
        a.locked = i;
        var b = new Y(i);
        a.e().c(b, "success",
        function(a) {
            this.fP = i;
            this.locked = l;
            a = R(a.target);
            a.r || (this.Ok = a.msg, mx(this))
        });
        b.ajax("/question/" + a.iG + "/bios", j, "GET")
    } else a.z || (a.z = new Nl, a.z.Ma("修改话题经验"), nl(a.z, j), gl(a.z, l), b = a.z.R(), b.innerHTML = '<div class="zg-section-title">修改每个话题旁边靠近你名字的简介：</div>', a.N(b)),
    a.z.n(i)
}
jx.prototype.N = function(a) {
    this.d = K("div", "zu-bio-editor-wrap", [this.$N = K("div", "zu-bio-editor-inner-wrap"), this.Sc = K("div", "zm-command", [this.Ym = K("a", {
        name: "save",
        href: "javascript:;",
        className: "zg-r3px zg-btn-blue"
    },
    "完成")])]);
    y.forEach(this.Ok,
    function(a) {
        a = new ix(a);
        a.N(this.$N);
        this.items.push(a)
    },
    this);
    this.XN && S(this.Sc, l);
    a.appendChild(this.d);
    this.e().c(this.Sc, "click", this.S)
};
jx.prototype.Lv = function() {
    var a = this.items.length,
    b;
    if (!a && this.Ok.length) for (b = 0; b < this.Ok.length; b++) if (this.Ok[b][1]) return this.Ok[b][1];
    var c = j;
    for (b = 0; b < a; b++) if (c = this.items[b].$a()) return c
};
jx.prototype.S = function(a) {
    if ((a = this.Nd(a.target)) && "save" === a.name) this.z && this.z.n(l),
    this.dispatchEvent("change")
};
function nx() {
    M.call(this);
    this.z = j;
    this.fa = 0;
    this.sx = [];
    this.Sr = [];
    this.Lz = "最多输入 20 字";
    this.iv = "最多输入 256 字"
}
w(nx, ao);
var ox = j;
function px() {
    ox || (ox = new nx);
    return ox
}
r = nx.prototype;
r.k = function(a) {
    a || this.Sq()
};
r.j = function() {
    this.hC = i;
    this.d = K("div", j, [this.wj = K("div", j, [this.Mg = K("div", "zm-favo-list-content"), this.CA = K("div", "zh-favo-add-new-wrap zm-command", this.cT = K("a", {
        "class": "zm-favo-dialog-create zg-left",
        href: "javascript:;"
    },
    "+ 创建收藏夹"), this.Nu = K("a", {
        href: "javascript:;",
        "class": "zg-btn-blue"
    },
    "关闭")), this.fu = K("div", "zh-favo-add-new-wrap zm-command", this.pK = K("a", {
        href: "javascript:;",
        "class": ""
    },
    "取消"), this.dT = K("a", {
        "class": "zm-favo-dialog-create zg-btn-blue",
        href: "javascript:;"
    },
    "创建收藏夹"))]), this.Oq = K("div", {
        style: "display:none"
    },
    [K("div", j, "标题"), K("div", "zg-section", this.vl = K("input", {
        "class": "zg-form-text-input",
        style: "width:97%;font-size:13px"
    })), K("div", j, "描述（可选）"), K("div", "zg-section zg-editor-simple-wrap zg-form-text-input", this.ul = K("textarea", {
        "class": "zg-editor-input",
        style: "height:66px"
    })), this.DR = K("label", j, [this.uO = K("input", {
        type: "radio",
        checked: "checked",
        value: "public",
        name: "mode"
    }), K("strong", j, " 公开 "), K("span", "zg-gray-normal", "公开后不能设置为私密")]), this.FO = K("br"), this.AR = K("label", j, [this.tO = K("input", {
        type: "radio",
        value: "private",
        name: "mode"
    }), K("strong", j, " 私密 "), K("span", "zg-gray-normal", "只有你可以查看这个收藏夹")]), K("div", "zm-command", [this.xz = K("a", {
        href: "javascript:;",
        "class": "zg-mr10"
    },
    "取消"), this.Yp = K("a", {
        href: "javascript:;",
        "class": "zg-mr10"
    },
    "完成"), this.BA = K("a", {
        "class": "zg-btn-blue"
    },
    "确认创建")])])]);
    S(this.fu, l); (new To(this.Lz)).h(this.vl); (new To(this.iv)).h(this.ul);
    y.forEach(this.sx,
    function(a) {
        qx(this, a)
    },
    this);
    this.sx.length || (this.Mg.innerHTML = '<div id="zh-fav-list-item-place-holder" class="zg-r5px zm-fav-list-item-place-holder">你可以创建多个收藏夹，将答案分类收藏</div> ', S(this.fu, i), S(this.CA, l));
    this.z = new Nl(j, l);
    nl(this.z, j);
    this.z.R().appendChild(this.d)
};
function qx(a, b, c) {
    var d = H("zh-fav-list-item-place-holder");
    d && S(d, l);
    a.ty = b[5] ? "": K("a", "zm-fav-list-item-lock zg-locked");
    d = K("span", "zm-favo-list-item-title");
    d.innerHTML = b[1];
    d = K("a", {
        "class": "zg-r5px zm-favo-list-item-link",
        href: "javascript:;"
    },
    [a.ty, d, K("span", {
        className: "zg-gray",
        innerHTML: '<span class="num">' + b[3] + '</span> 条答案 <span class="zg-bull">•</span> ' + b[4] + " 人关注"
    })]);
    a.ty && a.ty.setAttribute("data-tip", "s$b$私密收藏夹");
    d.setAttribute("data-lid", b[0]);
    y.contains(a.Sr, b[0]) && E.add(d, "zm-favo-list-item-link-active");
    b = I("zm-favo-list-item-link", a.Mg);
    c && b ? lc(d, b) : a.Mg.appendChild(d)
}
r.ua = function() {
    this.e().c(this.xz, "click",
    function() {
        this.fa ? rx(this, 0) : sx(this)
    }).c(this.cT, "click",
    function() {
        U.Q({
            type: "ga_click_add_collection"
        });
        rx(this, 1)
    }).c(this.Nu, "click",
    function() {
        sx(this)
    }).c(this.dT, "click",
    function() {
        U.Q({
            type: "ga_click_add_collection"
        });
        rx(this, 1)
    }).c(this.pK, "click",
    function() {
        sx(this)
    }).c(this.Yp, "click",
    function() {
        sx(this)
    }).c(this.BA, "click", this.hf).c(this.Mg, "click", this.wQ)
};
r.wQ = function(a) {
    var b = Jc(a.target, "A");
    if (b && !this.locked) {
        var a = b.getAttribute("data-lid"),
        c = l;
        E.has(b, "zm-favo-list-item-link-active") ? (c = i, this.RB = a) : this.LB = a;
        b = new An;
        b.add("answer_id", this.fa);
        b.add("favlist_id", a);
        this.Qy = new Y(i);
        this.locked = i;
        Q(this.e(), this.Qy, "complete", this.kJ);
        this.Qy.ajax(c ? "/collection/remove": "/collection/add", b.Nb())
    }
};
r.kJ = function() {
    this.locked = l;
    this.Nu.innerHTML = "关闭";
    var a = R(this.Qy);
    a && !a.r ? (a = Xb("zm-favo-list-item-link", this.Mg), y.forEach(a,
    function(a) {
        var c = a.getAttribute("data-lid"),
        d = I("num", a),
        f = parseInt(d.innerHTML, 10);
        c === this.RB ? (d.innerHTML = f - 1 + "", E.remove(a, "zm-favo-list-item-link-active")) : c === this.LB && (d.innerHTML = f + 1 + "", E.add(a, "zm-favo-list-item-link-active"))
    },
    this), this.LB = this.RB = j, In("Favorite", "add_favorite")) : X("添加失败: " + a.msg)
};
r.show = function(a) {
    this.k(a);
    this.Bx && (this.z.n(i), this.Nu.innerHTML = "关闭", this.fa ? (S(this.Yp, l), rx(this, 0)) : (rx(this, 1), S(this.xz, l), this.Yp.innerHTML = "取消"))
};
function tx(a, b, c, d) {
    a.title = Za(b || H("zh-fav-head-title").innerHTML);
    b = H("zh-fav-head-description-source");
    a.hv = c || (b ? b.innerHTML: "");
    a.hv = qn(a.hv);
    a.QB = d || Fk;
    a.hC ? ux(a) : a.j();
    a.Bx = i;
    a.ua();
    rx(a, 1);
    S(a.xz, l);
    a.Yp.innerHTML = "取消";
    a.BA.innerHTML = "保存";
    a.z.Ma("编辑收藏夹");
    a.vl.value = a.title;
    a.ul.value = a.hv;
    a.QB[1] ? (S(a.DR, l), S(a.AR, l), S(a.FO, l)) : a.tO.setAttribute("checked", i);
    a.WN = vx(a);
    a.z.n(i);
    a.Br = i
}
r.Sq = function() { (this.fa || !this.Bx) && $.get("/collections/json", {
        answer_id: this.fa
    }).done(u(this.kQ, this))
};
function ux(a) {
    var b = Xb("zm-favo-list-item-link", a.Mg);
    y.forEach(b,
    function(a) {
        var b = a.getAttribute("data-lid");
        E.remove(a, "zm-favo-list-item-link-active");
        y.contains(this.Sr, +b) && E.add(a, "zm-favo-list-item-link-active")
    },
    a)
}
r.kQ = function(a) {
    a && !a.r && (this.sx = a.msg[0], this.Sr = a.msg[1], this.hC ? ux(this) : this.j(), this.Bx = i, this.ua(), this.show(i))
};
function rx(a, b) {
    var c = !!b;
    a.z.Ma(0 === b ? "添加到收藏夹": "创建新收藏夹");
    S(a.wj, !c);
    S(a.Oq, c);
    new Zp(a.vl, a.Lz);
    new Zp(a.ul, a.iv)
}
function vx(a) {
    var b = new An,
    c = pn(a.vl.value),
    d = Ra(a.ul.value === a.iv ? "": a.ul.value);
    d || (d = -1);
    b.add("title", c);
    b.add("description", d);
    b.add("is_public", a.uO.checked ? 1 : 0);
    return b
}
r.hf = function() {
    var a = pn(this.vl.value);
    if (a && a !== this.Lz) {
        a = vx(this);
        this.fa && a.add("answer_id", this.fa);
        if (this.Br) {
            if (this.WN.Nb() === a.Nb()) {
                sx(this);
                return
            }
            a.add("favlist_id", this.QB[0])
        }
        this.xhr = new Y(i);
        Q(this.e(), this.xhr, "complete", this.UI);
        this.xhr.ajax(this.Br ? "/collection/update": "/collection/create", a.Nb())
    }
};
r.UI = function() {
    var a = R(this.xhr);
    a && !a.r ? this.Br ? (sx(this), X("编辑成功"), setTimeout(function() {
        window.location.reload()
    },
    1E3), this.Br = l) : this.fa ? (S(this.fu, l), S(this.CA, i), rx(this, 0), this.Sr.push(a.msg[0]), qx(this, a.msg, i), this.vl.value = "", this.ul.value = "") : (sx(this), X("创建成功"), setTimeout(function() {
        window.location.href = "/collections/mine"
    },
    1E3)) : X(a.msg)
};
r.H = function() {
    return this.z.H()
};
function sx(a) {
    a.z.n(l);
    a.dispatchEvent(wx);
    U.Q({
        type: "ga_click_collect_answer",
        data: {
            count: $(".zm-favo-list-item-link-active", a.Mg).length
        }
    })
}
var wx = "close";
function xx(a) {
    M.call(this);
    this.HD = j;
    this.ru = a;
    this.NY = 0;
    this.mY = 3;
    this.Tn = l
}
w(xx, ao);
r = xx.prototype;
r.h = function(a) {
    this.wrap = a;
    if (!this.xw) {
        this.xw = i;
        if (a = I("zm-entry-head-avatar-edit-button", this.wrap)) this.Tn = i,
        this.e().c(a, "click",
        function(a) {
            a.stopPropagation();
            a.preventDefault();
            V.ob() && !V.wf ? yt.v().n(i) : (this.Sw(), this.z.n(i))
        });
        this.HD = I("zm-avatar-editor-preview", this.wrap);
        if (!this.Tn && (yx(this), a = I("zm-form-table-field", this.wrap))) a.appendChild(this.Oq),
        this.ua()
    }
};
r.Sw = function() {
    this.sR || (yx(this), this.sR = i, this.z = new Nl(j, l), this.z.Ma("people" === this.ru ? "修改头像": "修改话题图片"), this.z.R().appendChild(this.Oq), this.ua())
};
function yx(a) {
    a.Oq = K("div", a.Tn ? j: "zg-section", [a.vR = K("iframe", {
        id: "av_up_frame",
        src: "about:_blank",
        name: "av_up_frame",
        style: "visible:hidden;position:absolute;height:0;width:0;left:-9000px"
    }), a.ZE = K("div", {
        "class": "zm-modal-dialog-warnmsg",
        style: "display:none"
    },
    "上传失败， 请重试"), a.Hh = K("div", "avt_form"), a.VW = K("label", {
        "class": "zg-gray zg-section",
        style: "display: block;padding:12px 0;",
        "for": "avt_file"
    },
    "支持 JPG、GIF、PNG 格式，不要超过 2MB。"), a.Tn ? K("div", "zm-command", [a.Hk = K("a", {
        "class": "zm-command-cancel",
        href: "javascript:;"
    },
    "关闭"), a.Jk = K("a", {
        "class": "zg-btn-blue",
        href: "javascript:;"
    },
    "开始上传")]) : a.Jk = K("a", {
        "class": "zg-btn-blue",
        href: "javascript:;"
    },
    "开始上传")]);
    a.Hh.innerHTML = ['<form target="av_up_frame" method="post" enctype="multipart/form-data" action="' + ("http://upload." + Ak.Sl + ":" + location.port) + '">', '<input type="hidden" name="type" value="' + ("people" === a.ru ? "1": "2") + '" />', '<input type="hidden" name="dest_id" value="', "people" === a.ru ? V[3] : Dk[0][3], '" /><input type="file" name="picture" id="avt_file" /><input type="hidden" name="return_size" value="l" /></form>'].join("");
    a.aU = a.Hh.firstChild
}
r.ua = function() {
    this.e().c(this.Jk, "click", this.$S);
    this.e().c(U, "iframe_data", this.ZT);
    this.Hk && this.e().c(this.Hk, "click",
    function() {
        this.z.n(l)
    })
};
r.$S = function() {
    S(this.ZE, l);
    var a = H("avt_file");
    a && a.value && (zx(this, i), this.aU.submit())
};
r.ZT = function(a) {
    var a = a.lb,
    b;
    a && !a.r && (b = a.msg) ? (this.HD.src = b + "?r=" + +new Date, zx(this, l), this.Tn && this.z.n(l), this.dispatchEvent({
        type: "uploadSuccess",
        data: b
    })) : S(this.ZE, i)
};
function zx(a, b) {
    a.Rn = b;
    a.Rn ? (a.Jk.innerHTML = "上传中…", E.Ne(a.Jk, "zg-btn-blue", "zg-btn-white")) : (a.Jk.innerHTML = "开始上传", E.Ne(a.Jk, "zg-btn-white", "zg-btn-blue"))
};
function Ax(a) {
    T.call(this);
    this.ps = a
}
w(Ax, T);
r = Ax.prototype;
r.Z = function(a) {
    Ax.g.Z.call(this, a);
    this.ie = $("input", a);
    this.ld = $(".zm-profile-details-items", this.d);
    this.xp = [];
    var b = this;
    b.xp = this.ie.map(function() {
        var a = new Bx("/topic/autocomplete", this, b.ps || $(this).parents(".topic-input-wrap")[0]);
        a.Fm = l;
        var d = u(b.filter, b);
        a.filter = d;
        return a
    });
    this.Ql()
};
r.p = function() {
    this.e().c(I("add", this.d), "click", this.add);
    var a = this;
    this.ie.each(function() {
        a.e().c(this, "keydown",
        function(a) {
            this.keydown(a)
        })
    });
    y.forEach(this.xp,
    function(b) {
        a.e().c(b.F, bp, a.select)
    });
    this.ld.on("click", "[name='del']", $.proxy(this.remove, this));
    this.Ql()
};
r.Ql = function() {
    if (!Ak.pb) {
        var a = this;
        this.Df && this.Df.w();
        var b = new xu;
        b.yq = "profile-edit-item-moving";
        yu(b, this.ld[0], 0);
        b.k();
        this.Df = b;
        $('a, input, [role="button"]', this.ld).each(function() {
            a.e().c(this, "mousedown",
            function(a) {
                a.stopPropagation()
            })
        })
    }
};
r.keydown = function(a) {
    13 === a.keyCode && setTimeout(u(function() {
        Cx(this) && this.add();
        this.ie[0].value && (this.ie[1] && !this.ie[1].value) && this.ie[1].focus()
    },
    this));
    return i
};
function Cx(a) {
    return ! y.some(a.ie,
    function(a) {
        return ! a.value
    })
}
r.Rl = function() {
    y.forEach(this.ie,
    function(a) {
        a.value = ""
    });
    this.ie[0].focus()
};
r.select = function() {
    Cx(this) && this.add()
};
r.add = function() {
    var a = {
        title: this.ie[0].value || "",
        member_url_token: Ek["1"]
    };
    this.ie[1] && (a.sub_title = this.ie[1].value || "");
    Pm("ProfileEditItemV2", a, this.zP, this)
};
r.zP = function(a) {
    var a = $(a),
    b;
    if (a.data("title")) {
        if (b = this.ld.find("[data-title='" + a.data("title") + "']")[0]) {
            un(b);
            this.Rl();
            return
        }
    } else if (a.data("sub-title") && (b = this.ld.find("[data-sub-title='" + a.data("sub-title") + "']")[0])) {
        un(b);
        this.Rl();
        return
    }
    this.ld.append(a);
    this.Ql();
    this.Rl();
    this.dispatchEvent("add")
};
r.remove = function(a) {
    $(a.target).parents("li").remove();
    this.dispatchEvent("remove")
};
Ax.prototype.filter = function(a) {
    return y.filter(a,
    function(a) {
        return ! this.ld.find("[data-title='" + a + "']")[0]
    },
    this)
};
function Bx(a, b, c, d, f) {
    this.Fe = a = new Yp(a, !f);
    c = new zp(c);
    d = new pp(j, j, !!d, 300);
    $o.call(this, a, c, d);
    d.T = this;
    d.Ek(b); (d = b.getAttribute("placeholder")) && new Zp(b, d)
}
w(Bx, dq);
Bx.prototype.Pl = function(a, b) {
    a = a[0].slice(1);
    a = y.filter(a,
    function(a) {
        return 3 < a.length
    });
    a = y.map(a,
    function(a) {
        return a[1]
    });
    this.filter && (a = this.filter(a));
    Bx.g.Pl.call(this, a, b)
};
function Dx() {
    T.call(this)
}
w(Dx, T);
r = Dx.prototype;
r.mj = l;
r.up = {
    signup: ["signcontrol", "signup", "sina"],
    signin: ["signcontrol", "signin", "sina"]
};
r.ct = "";
r.Wg = function(a) {
    this.ct = a;
    this.Kw && ($(".js-signtip", this.D).text(a), $(".view-signtip").show())
};
r.p = function() {
    Dx.g.p.call(this);
    this.D.show();
    this.Ma("登录或注册");
    Ex(this, 550);
    Fx(this)
};
r.Z = function(a) {
    Dx.g.Z.call(this, a);
    this.D = $(a);
    ub && !Qi ? this.D.addClass("mobile") : this.D.addClass("dialog");
    this.mj && (this.D = $(document.body));
    var a = this.mj ? j: function(a, b) {
        var c = b.parent();
        b.is("[type=checkbox]") || b.is("[type=radio]") ? a.insertAfter(c) : c.hasClass("zg-form-text-input-group") || c.hasClass("zg-form-text-input-group-horizontal") ? c.append(a) : a.insertAfter(b)
    },
    b = {
        confirm_password: {
            equalTo: "密码不一致",
            minlength: $.validator.format("密码长度不应小于 {0} 位"),
            maxlength: $.validator.format("密码长度不应大于 {0} 位")
        },
        password: {
            minlength: $.validator.format("密码长度不应小于 {0} 位"),
            maxlength: $.validator.format("密码长度不应大于 {0} 位"),
            required: "密码未填写"
        },
        last_name: {
            required: "姓氏未填写"
        },
        first_name: {
            required: "名字未填写"
        },
        email: {
            required: "邮箱未填写"
        }
    },
    a = {
        submitHandler: this.YP,
        errorPlacement: a,
        messages: b,
        onfocusout: $.noop,
        highlight: function(a, b, c) {
            "radio" === a.type ? this.CC(a.name).addClass("error").removeClass(c) : $(a).addClass("error").removeClass(c)
        },
        errorClass: "validate-error"
    };
    this.mj && (a = $.extend({},
    a, {
        errorContainer: "#summary",
        errorLabelContainer: "#summary ul",
        wrapper: "li",
        showErrors: function(a, b) {
            if (0 < b.length) {
                var c = [];
                c.push("<ul>");
                $.each(b,
                function(a, b) {
                    c.push("<li><i></i>" + b.message + "</li>")
                });
                c.push("</ul>");
                $("#summary").html(c.join("")).show()
            } else $("#summary").hide().html("")
        }
    }));
    this.Ys = a; (a = Mf.get("r_e")) ? (this.Bq = (b = a.match(/\"(.+)\"/)) ? b[1] : a, this.Fi = "signup") : this.Fi = this.Fi || "signup";
    this.ct && ($(".js-signtip", this.D).text(this.ct), this.up[this.Fi].push("signtip"));
    Gx(this, this.up[this.Fi]);
    var c = this;
    this.D.on("click", ".js-signup", $.proxy(this.mz, this));
    this.D.on("click", ".js-signin", $.proxy(this.TG, this));
    this.D.on("click", ".js-bindsignin",
    function(a) {
        U.Q({
            type: "ga_click_sign_in_link_account",
            target: a.target
        });
        Gx(c, ["bindsignin"]);
        c.Ef()
    });
    this.D.on("click", ".js-bindweibo",
    function() {
        U.Q({
            type: "ga_click_sign_in_weibo",
            label: "sign_in_box_weibo"
        });
        window.open("/oauth/auth/sina?next=/oauth/account_callback", "_blank", "top=200,left=400,width=600,height=380,directories=no,menubar=no,toolbar=no");
        return l
    }).on("click", ".js-weiboname",
    function() {
        U.Q({
            type: "ga_click_sign_in_connect",
            label: "sign_in_box_weibo"
        });
        window.open("/oauth/auth/sina?next=/oauth/callback", "_blank", "top=200,left=400,width=600,height=380,directories=no,menubar=no,toolbar=no");
        return l
    });
    this.Ot = $(".view-signcontrol", this.d);
    this.Ot.find('[type="radio"]').on("change", $.proxy(function(a) {
        a = $(a.target).val();
        this.um.toggle("signin" === a);
        this.lg.toggle("signup" === a);
        U.Q({
            type: "ga_click_sign_in_switch",
            data: a
        })
    },
    this)).filter("[value=" + this.Fi + "]").prop("checked", i);
    this.oZ = (this.um = $(".view-signin", this.d)).find("form").validate($.extend({},
    this.Ys, {
        Lr: $.proxy(this.DF, this)
    }));
    var d = this;
    d.pZ = (d.lg = $(".view-signup", d.d)).find("form").validate($.extend({},
    d.Ys, {
        Lr: $.proxy(d.CQ, d)
    }));
    d.Bq && (d.mz(), d.lg.find("[name=email]").val(d.Bq));
    d.lg.find('input[name="accept_terms"]').on("change",
    function() {
        d.lg.find("[type=submit]").prop("disabled", !$(this).prop("checked")).toggleClass("disabled", !$(this).prop("checked"))
    });
    this.e().c(U, ["accountcallback", "sina_callback"], $.proxy(this.kF, this));
    this.dI = $(".view-bindtip", this.d);
    var f = this;
    f.nZ = (f.kd = $(".view-info", f.d)).find("form").validate($.extend({},
    f.Ys, {
        Lr: $.proxy(f.aQ, f)
    }));
    f.kd.on("change", 'input[name="iamstudent"]',
    function() {
        $(this).prop("checked") ? (f.kd.find(".js-workerinfo").hide(), f.kd.find(".js-studentinfo").show(), Fx(f), Hx(f)) : (f.kd.find(".js-workerinfo").show(), f.kd.find(".js-studentinfo").hide())
    }).on("change", 'input[name="gender"]',
    function() {
        var a = $(".js-avatar", f.D),
        b = a.attr("src");
        if ("http://p2.zhimg.com/c0/e3/c0e310228_xl.jpg" === b || "http://p2.zhimg.com/54/5a/545a51608_xl.jpg" === b)"0" === $(this).val() ? a.attr("src", "http://p2.zhimg.com/54/5a/545a51608_xl.jpg") : a.attr("src", "http://p2.zhimg.com/c0/e3/c0e310228_xl.jpg")
    });
    Hx(f);
    a = new xx("people");
    a.h(f.kd.find(".avatar-info").get(0));
    a.on("uploadSuccess",
    function(a) {
        U.Q({
            type: "ga_click_sign_in_avatar"
        }); (a = a.data.match(/\/(\w+)_\w.\w+$/)) && f.kd.find('input[name="avatar_path"]').val(a[1])
    },
    l, f);
    var g = this; (g.rm = $(".view-bindsignin", g.d)).find("form").validate($.extend({},
    g.Ys, {
        Lr: $.proxy(g.FP, g)
    }));
    g.rm.on("click", ".js-backto-info",
    function(a) {
        U.Q({
            type: "ga_click_sign_in_link_account",
            target: a.target
        });
        Gx(g, ["bindtip", "info"]);
        return l
    });
    ub && g.rm.find("input[type=submit]").val("登录");
    var k = this;
    k.uU = $(".view-warmup", k.d).on("click", ".js-gotoinfo",
    function() {
        Kn("/signup/form");
        Gx(k, ["info"]);
        k.mj && (Gx(k, ["info", "bindtip"]), k.dI.find("span").hide());
        k.Ef();
        return l
    });
    var m = this;
    m.pp = $(".view-followtopic", m.d).on("click", ".js-gotofollowpeople",
    function() {
        U.Q({
            type: "ga_click_follow_topic",
            data: m.HT || 0
        });
        $.get("/register/recommendations").done(function(a) {
            m.sm.find("ul").html(Mn(m.oR, {
                each: y.forEach,
                persons: a.msg
            }));
            m.sm.find("a.box.followed").length && m.sm.find(".friendsfollowed").show()
        });
        Gx(m, ["followpeople"]);
        m.sm.find("ul").html($("<div>").text("加载中…").css("margin-top", "150px").css("text-align", "center"));
        Kn("/signup/suggested_users");
        return l
    }).on("click", "a.box", m.KC);
    $(document).on("followchange",
    function() {
        var a = m.pp.find("a.box.followed").length;
        m.pp.find(".js-gotofollowpeople").text(0 < a ? "下一步": "跳过");
        m.HT = a;
        m.nR = m.sm.find("a.box.followed").length
    });
    var q = this;
    q.sm = $(".view-followpeople", q.d).on("click", ".js-gotofollowtopoic",
    function() {
        U.Q({
            type: "ga_click_sign_in_previous_step"
        });
        Ix(q)
    }).on("click", ".js-startuse",
    function() {
        U.Q({
            type: "ga_click_follow_people",
            data: q.nR || 0
        });
        Kn("/signup/succeed");
        location.reload()
    }).on("click", "a.box", q.KC);
    this.Ef()
};
function Fx(a) {
    $p || setTimeout(function() {
        $("input[placeholder]", a.d).filter(":visible").each(function() {
            new Zp(this)
        })
    },
    0)
}
r.kF = function(a) {
    a = a.lb;
    if (1 === a.login) return Kn("/signin/connect/weibo"),
    location.reload(),
    l;
    Gx(this, ["warmup", "bindtip"]);
    this.VY = a;
    this.kd.find(".js-avatar").attr("src", a.img);
    this.kd.find(".js-weiboname").replaceWith(a.name).removeClass("zg-btn-red js-weiboname").attr("href", "");
    this.rm.find(".js-avatar").attr("src", a.img);
    this.D.find(".realname-wrap").insertAfter(".main-info>div:first-child");
    this.kd.find(".zm-entry-head-avatar-edit-button").remove();
    return i
};
function Hx(a) {
    ub || a.kd.find("input[aria-haspopup]").each(function() {
        var a = $(this).data();
        a.wN || (new Bx("/topic/autocomplete", this, $(this).parent()[0]), a.wN = i)
    })
}
r.mz = function() {
    this.Ot.find("input[type=radio][value=signup]").prop("checked", i);
    Gx(this, this.up.signup);
    this.lg.find("[name=email]").val(this.um.find("[name=email]").val());
    Fx(this);
    this.Ef();
    return l
};
r.TG = function() {
    this.Ot.find("input[type=radio][value=signin]").prop("checked", i);
    Gx(this, this.up.signin);
    this.um.find("[name=email]").val(this.lg.find("[name=email]").val());
    this.Ef();
    return l
};
var Jx = {
    people: Cm,
    topic: Lm
};
r = Dx.prototype;
r.KC = function() {
    var a = $(this),
    b = a.data();
    b.disabled || (b.disabled = i, Jx[b.type](b.id, !a.hasClass("followed")).done(function() {
        var b = a.hasClass("followed") ? "关注": "已关注";
        a.toggleClass("followed");
        $(document).trigger("followchange");
        a.find(".follow-tip span").text(b)
    }).always(function() {
        b.disabled = l
    }))
};
r.Kx = l;
r.YP = function(a) {
    function b() {
        c.disabled = l
    }
    var c = $(a).data();
    if (!c.disabled) {
        c.disabled = i;
        var d = this;
        var f = $(a);
        if (f.data("nosubmit") === i) a = $.Deferred().resolve().promise();
        else {
            var g = $(a).serializeArray(); (f = f.data("otherform")) && $.each($(f).serializeArray(),
            function(a, b) {
                y.some(g,
                function(a) {
                    return a.name === b.name
                }) || g.push(b)
            });
            a = $.post(a.action, $.param(g))
        }
        a.done(d.settings.Lr).done(function(a) {
            a && a.r && ($.isPlainObject(a.msg) ? d.showErrors(a.msg) : "string" === $.type(a.msg) && X(a.msg))
        }).always(b)
    }
};
r.DF = function(a) {
    a && !a.r ? (Kn("/signin"), location.reload()) : a.msg && this.Ef()
};
r.FP = function(a) {
    U.Q({
        type: "ga_click_sign_in_link_account",
        label: "sign_in_box_sign_in_link_account"
    });
    this.DF(a)
};
r.Ef = function() {
    var a = $(".js-captcha");
    "1" === Mf.get("l_c") || "1" === Mf.get("r_c") ? ("1" === Mf.get("r_c") && (this.kd.find("input[name=email]").is(":visible") ? a.appendTo(this.kd.find(".main-info")).show() : this.lg.is(":visible") && a.insertBefore(this.lg.find(".command")).show()), "1" === Mf.get("l_c") && (this.rm.is(":visible") ? a.appendTo(this.rm.find(".formbar")).show() : this.um.is(":visible") && a.insertBefore(this.um.find(".command")).show()), this.Ef.ZJ || $("#refresh_captcha, #captcha_img").click(this.hG), this.Ef.ZJ = i, a.find('input[name="checkcode"]').prop("disabled", l), this.hG()) : (a.hide(), a.find('input[name="checkcode"]').prop("disabled", i))
};
r.hG = function() {
    $("#captcha_img").attr("src", "/checkcode.jpg?r=" + +new Date)
};
r.CQ = function(a) {
    a && !a.r ? (Gx(this, ["warmup"]), this.kd.find("input[name=email]").val(this.lg.find("input[name=email]").val()).parent().hide(), Kn("/signup/splash"), this.Kx = i) : this.Ef()
};
r.aQ = function(a) {
    a && !a.r ? (Ix(this), this.Kx = i) : this.Ef()
};
function Ix(a) {
    $.get("/register/interests").done(function(b) {
        a.pp.find("ul").html(Mn(a.KT, {
            each: y.forEach,
            topics: b.msg
        }))
    });
    Gx(a, ["followtopic"]);
    $(document).trigger("followchange");
    a.pp.find("ul").html($("<div>").text("加载中…").css("margin-top", "150px").css("text-align", "center"));
    Kn("/signup/suggested_topics")
}
r.Ma = function(a) {
    var b = this.getParent();
    b && b.Ma && b.Ma(a)
};
r.Vs = function(a) {
    var b = this.getParent();
    b && b.Vs && b.Vs(a)
};
function Ex(a, b) {
    var c = a.getParent(),
    d;
    if (c && c.f && (d = c.f(), !ub || Qi)) $(d).width(b),
    c.xa()
}
function Gx(a, b) {
    if (a.mj) {
        $("#summary").hide();
        y.contains(b, "signin") ? ($(".hideinlogin").hide(), $(".hideinreg").css("display", "inline-block")) : ($(".hideinlogin").css("display", "inline-block"), $(".hideinreg").hide());
        if (y.contains(b, "warmup") || y.contains(b, "info")) a.D.addClass("regflow"),
        $(".hideinlogin").hide(); (y.contains(b, "signin") || y.contains(b, "signup")) && a.D.removeClass("regflow");
        y.contains(b, "info") ? $("#summary").prependTo($(".main-info")) : $("#summary").insertBefore($("#js-sign-flow")); (y.contains(b, "followtopic") || y.contains(b, "followpeople")) && $(".hideinlogin").hide()
    }
    a.Kw = y.contains(b, "signin") || y.contains(b, "signup") ? i: l;
    if (y.contains(b, "warmup") || y.contains(b, "info")) {
        a.Vs(l);
        var c = a.getParent();
        $(c && c.f ? c.f() : document.body).addClass("bg-signup");
        a.Ma("注册知乎");
        Fx(a)
    }
    y.contains(b, "bindsignin") && a.Ma("登录并绑定微博");
    if (y.contains(b, "followtopic") && (a.Ma("关注话题"), Ex(a, 825), a.mj && (!ub || Qi))) $("#login-page").width(825).css("margin", "0 0 0 -412px").css("top", "150px").css("height", "auto"),
    $(".footer").css("bottom", "-100px"),
    $(".view-followtopic").width(825),
    $(".view-followpeople").width(825);
    y.contains(b, "followpeople") && a.Ma("关注用户");
    $("div.view", a.d).hide();
    $.each(b,
    function(b, c) {
        $(".view-" + c, a.d).show()
    })
}
r.m = function() {
    Dx.g.m.call(this)
};
r.Za = function() {
    Dx.g.Za.call(this);
    this.e().w()
};
r.KT = '<% each(topics, function(topic, i) { %> <li><a class="box <%= topic.is_following ? "followed" : "" %> " href="javascript:;" data-type="topic" data-id="<%=topic.topic_id%>" ><img src="<%=topic.topic_avatar%>" alt="<%-topic.topic_name%>" /><div><strong class="topicname"><%=topic.topic_name%></strong><div class="extra-info"><strong><%=topic.topic_follower_num%></strong> 人关注<br><strong><%=topic.topic_answer_num%></strong> 个精彩回答</div><div class="follow-tip"><i class="icon-green-check"></i><span><%= topic.is_following ? "已关注" : "关注" %></span></div></div></a></li><% }) %>';
r.oR = '<% each(persons, function(person, i) { %> <li><a class="box <%= person.is_following ? "followed" : "" %>" href="javascript:;" data-type="people" data-id="<%=person.member_id %>"><img src="<%=person.member_avatar %>" alt="<%-person.member_fullname %>" /><div><strong class="peoplename"><%=person.member_fullname %></strong><div class="extra-info"><%=person.description %></div><div class="follow-tip"><i class="icon-green-check"></i><span><%= person.is_following ? "已关注" : "关注" %></span></div></div></a></li><% }) %>';
function Fn() {
    cl.call(this, h, h, h)
}
w(Fn, Nl);
ja(Fn);
Fn.prototype.N = function() {
    V.ob() || Fn.g.N.call(this)
};
Fn.prototype.nz = l;
Fn.prototype.Wg = function(a) {
    this.ct = a;
    this.Wi && this.Wi.Wg("为了继续你的操作，请先登录或注册知乎")
};
function $v(a, b) {
    a.nz = b;
    if (a.Wi) if (a.nz) {
        var c = a.Wi;
        c.Kw && c.mz()
    } else c = a.Wi,
    c.Kw && c.TG()
}
Fn.prototype.p = function() {
    var a = this;
    Fn.g.p.call(this);
    var b = H("js-sign-flow");
    this.R().appendChild(b);
    var c = this.Wi = new Dx;
    this.aa(c);
    c.Fi = this.nz ? "signup": "signin";
    c.h(b);
    this.e().c(this, "afterhide",
    function() {
        U.Q({
            type: "ga_click_sign_in_close"
        });
        c.Kx && location.reload()
    });
    this.e().c(this, "beforeshow",
    function() {
        U.Q({
            type: "ga_click_sign_in",
            data: {
                label: a.Ga
            }
        })
    })
};
function Kx(a, b) {
    this.LA = a;
    this.pd = j;
    this.s = $.extend({},
    this.V, b || {})
}
w(Kx, T);
var Lx = {
    uf: 1,
    kh: -1,
    qA: 0
};
Kx.prototype.V = {
    WT: "up",
    iL: "down",
    vs: "pressed"
};
F.extend(Kx.prototype, Lx);
r = Kx.prototype;
r.Y = Lx.qA;
r.h = function(a) {
    var b = this.s,
    a = this.D = $(a);
    this.Pt = $("." + b.WT, a);
    this.Jt = $("." + b.iL, a);
    b = this.Jt.hasClass(this.s.vs);
    this.Pt.hasClass(this.s.vs) ? this.Y = Lx.uf: b && (this.Y = Lx.kh);
    Mx(this);
    this.Pt.click($.proxy(this.oH, this));
    this.Jt.click($.proxy(this.nH, this));
    return this
};
r.Td = n("Y");
r.Pb = function(a) {
    V.ob() ? a !== this.Y && F.sg(Lx, a) && (this.dispatchEvent({
        type: "action",
        data: {
            state: a
        }
    }), this.pd && "pending" === this.pd.state() && this.pd.abort(), this.Y = a, Mx(this), a = {},
    a[Lx.uf] = "vote_up", a[Lx.kh] = "vote_down", a[Lx.qA] = "vote_neutral", this.pd = $.post("/node/AnswerVoteBarV2", {
        method: a[this.Y],
        params: {
            answer_id: this.LA
        }
    }), this.pd.done(u(function(a) {
        a.r || (this.hs(), Zl.dispatchEvent(new am(this.LA, a.msg)))
    },
    this))) : (a = a === Lx.uf ? "question_answer_vote_up": "question_answer_vote_down", Fn.v().Ga = a, Fn.v().n(i), Fn.v().Wg(""))
};
r.NT = function(a) {
    a === Lx.uf ? In("vote", "voteup", "side_vote") : a === Lx.kh && In("vote", "votedown", "side_vote")
};
r.oH = function() {
    this.Pb(this.Y === Lx.kh ? Lx.uf: this.Y ^ Lx.uf)
};
r.nH = function() {
    this.Pb(this.Y === Lx.uf ? Lx.kh: this.Y ^ Lx.kh)
};
function Mx(a) {
    var b = a.Y,
    c = a.s,
    d = "",
    f = b === Lx.uf,
    b = b === Lx.kh;
    a.Pt.toggleClass(c.vs, f).html('<span class="vote-arrow"/>' + (d = f ? "取消赞同": "赞同")).attr("aria-pressed", f).attr("data-tip", "s$r$" + d);
    a.Jt.toggleClass(c.vs, b).html('<span class="vote-arrow"/>' + (d = b ? "取消反对": "反对，不会显示你的姓名")).attr("aria-pressed", b).attr("data-tip", "s$r$" + d)
}
r.hs = function() {
    this.dispatchEvent("change")
};
function Nx(a) {
    this.xJ = a;
    this.Ll = j;
    this.qd = l
}
w(Nx, T);
r = Nx.prototype;
r.h = function(a) {
    this.mp = $(a);
    Nx.g.h.call(this, a)
};
r.vd = n("qd");
r.Xa = function(a) {
    this.qd = !!a
};
r.Ha = function() {
    return this.mp.data("votecount")
};
function Ox(a) {
    a = a.Ha();
    return 1E3 > a ? a: Math.round(a / 1E3) + "K"
}
r.Ol = function() {
    this.Ll && "pending" === this.Ll.state() || (this.Ll = $.get(this.qd ? "/node/AnswerFullVoteInfoV2": "/node/AnswerVoteInfoV2", {
        params: {
            answer_id: this.xJ
        }
    }).done(u(this.Is, this)))
};
r.Is = function(a) {
    if (a = Oa(a)) a = $(a),
    this.mp.replaceWith(a),
    this.h(a.get(0)),
    this.dispatchEvent("change")
};
r.p = function() {
    var a = this;
    $("a.more", this.mp).click(function() {
        a.Xa(i);
        a.Ol()
    })
};
function Px(a) {
    M.call(this);
    this.sb = a;
    this.BX = this.sb.Rd();
    this.Kq = this.sb.sd ? this.sb.Na: this.sb.Na.f();
    this.isContentEditable = this.sb.isContentEditable();
    this.wT = 30;
    this.Bb = new Id(1E3 * this.wT);
    this.L = Bk ? Bk.L: 0
}
w(Px, ao);
r = Px.prototype;
r.h = function(a) {
    this.d = a;
    this.bf = I("draft-saved-info", a);
    S(this.bf, l);
    this.Mw = I("draft-saved-time", a);
    this.mK = I("draft-clear-button", a);
    this.mX = this.isContentEditable ? Ns: ["change", "input"];
    a = this.e().c(this.Bb, Kd, this.Ky).c(this.mK, "click", this.nK).c(this.Kq, "keydown", this.EO);
    "oninput" in this.Kq && !z ? a.c(this.Kq, "input", this.bO) : a.c(this.Kq, "keydown", this.cO);
    var b = Hk && 1E3 * Hk[1];
    b && (Qx(this, b), this.hm = setInterval(u(function() {
        Qx(this, b)
    },
    this), 22E3))
};
r.EO = function(a) {
    if ((a.metaKey || a.ctrlKey) && "s" === Qm[a.keyCode]) this.PO(),
    this.isContentEditable || a.preventDefault()
};
function Rx(a) {
    S(a.bf, i);
    zc(a.Mw, "保存中…");
    a.aO()
}
r.bO = function() {
    Rx(this)
};
r.cO = function(a) {
    Qg(a.keyCode) && Rx(this)
};
r.vz = function() {
    this.Bb.start()
};
r.zz = function() {
    this.Bb.stop()
};
r.Fa = function(a) {
    this.sb.Fa(a);
    this.sb.Mo()
};
r.$a = function() {
    return this.sb.Lf()
};
r.xG = function() {
    var a = this.$a();
    a && (a = (new Np).add("qid", this.L).add("content", a), Sl("/answer/draft/save", j, "POST", a.toString()), this.hf())
};
r.jU = 150;
r.Ky = Vn(Px.prototype.jU, Px.prototype.xG);
r.QO = 350;
r.PO = Vn(Px.prototype.QO, Px.prototype.xG);
r.dO = 3E3;
r.aO = Vn(Px.prototype.dO,
function() {
    this.$a() ? this.Ky() : Sx(this)
});
r.hf = function() {
    this.hm && (clearInterval(this.hm), this.hm = j);
    S(this.bf, i);
    S(this.bf, i);
    zc(this.Mw, "已保存");
    this.dispatchEvent("saveContent")
};
function Qx(a, b) {
    var c = on(b || Aa());
    /^\d/.test(c) && (c = " " + c);
    c = "已存于" + c;
    S(a.bf, i);
    zc(a.Mw, c)
}
r.nK = function(a) {
    a.preventDefault();
    Ol("清除草稿", "你确定要清除保存的草稿吗？",
    function(a) {
        a && (this.Fa(""), Sx(this), nv(this.sb))
    },
    this)
};
function Sx(a) {
    Sl("/answer/draft/delete", j, "POST", "qid=" + a.L);
    a.hm && (clearInterval(a.hm), a.hm = j);
    S(a.bf, l);
    a.dispatchEvent("clearContent")
};
function Tx(a, b, c) {
    mv.call(this, l);
    this.ab = !!a;
    this.MH = b;
    this.Lc = "&nbsp;";
    this.Mm = c;
    this.zt = this.sv = this.MC = this.enabled = i;
    this.cs = !(Hk && Hk.length) && !!V[6] && !Ak.pb;
    if (!this.cs && V.wf || !V.ob()) this.ux = '<span style="font-style: normal;color: #999;">写回答…</span>'
}
w(Tx, mv);
r = Tx.prototype;
r.WC = function() {
    var a = Vb("h2", "zm-editable-content", H("zh-question-title"))[0];
    return {
        title: a && (/answer\/\d+$/.test(location.pathname) ? Gc(a) : a.firstChild.nodeValue) || "",
        kk: this.Ni
    }
};
r.Lv = n("Mm");
r.Jo = ca("ab");
r.Ts = function(a) {
    this.Mm = a ? a: V[4];
    this.ac && a && (20 < a.length && (a = a.substring(0, 17) + "..."), this.QJ.innerHTML = "，" + Ra(a) + '<a name="edit_bio" class="zu-edit-button" href="javascript:;"><i class="zu-edit-button-icon"></i>修改话题经验</a>')
};
r.Pa = function(a, b) {
    this.enabled = a;
    this.ac ? (kv(this), this.Lc = b, this.gc.innerHTML = this.Lc) : b && (this.Lc = b)
};
r.Z = function(a) {
    Tx.g.Z.call(this, a);
    this.ac = i;
    E.add(this.gc, "zu-answer-form-disabled-wrap")
};
r.bj = function(a) {
    this.Jo(a.ab);
    this.Ep && (this.Ep.checked = a.ab)
};
r.p = function() {
    Tx.g.p.call(this);
    this.e().c(Zl, "anon_change", this.bj)
};
r.wg = function() {
    Tx.g.wg.call(this);
    var a = this.B(),
    b = V.ob();
    this.PN = a.j("div", "zh-answer-form clearfix", [b ? jn(this.MH) : "", this.fU = a.j("div", j, [a.j("div", "zu-answer-form-title", [b ? kn(this.MH) : "我来回答这个问题", this.QJ = a.j("span")])])]);
    this.Ts(this.Mm);
    a.Mn(this.PN, this.Ni);
    this.e().c(this.fU, "click", this.S);
    V.wf && this.cs && Ux(this, '<div class="add-answer-guide"><p>知乎是一个重视质量的社区，          鼓励专业、认真与友善的回答，请在回答问题时遵守 <a href="http://www.zhihu.com/question/19550695">知乎回答规范</a>，          避免与问题本身无关或没有意义的回答。</p></div>', '<div class="zm-command"><a class="zg-r3px zg-btn-blue" href="javascript:;">我要回答</a></div>',
    function(a, b) {
        var f = this;
        b.on("click", "a",
        function() {
            $(f.Sc).show();
            b.hide();
            a.slideUp()
        })
    });
    V.ob() || Ux(this, '<div class="signin-mask-tip-answer"></div>', '<div class="zm-command"><a class="zg-r3px zg-btn-blue" href="javascript:;">我要回答</a></div>',
    function(a, b) {
        function f() {
            Fn.v().n(i);
            Fn.v().Wg()
        }
        a.on("click", f);
        b.on("click", f)
    });
    V.ob() && !V.wf && Ux(this, '<div class="active-mask-tip-answer">为正常使用知乎提问、回答、评论和编辑功能，请验证您的邮箱、激活帐号。</div>', '<div class="zm-command"><a class="zg-r3px zg-btn-blue" href="javascript:;">我要激活</a></div>',
    function(a, b) {
        function f() {
            yt.v().n(i)
        }
        a.on("click", f);
        b.on("click", f)
    })
};
function Ux(a, b, c, d) {
    b = $(b).css("top", 0).css("z-index", 9).css("padding-top", $(a.Ni).height() / 2 - 7);
    $(a.Sc).hide();
    c = $(c);
    $(a.Ni).append(b).after(c);
    d && d.call(a, b, c)
}
r.jl = function(a) {
    switch (a) {
    case "edit_bio":
        a = lx();
        if (!this.wu) {
            var b = Bk.Nc;
            a.rx = i;
            a.iG = b;
            this.e().c(a, "change", this.Ox)
        }
        this.wu = i;
        mx(a);
        break;
    case "cancel_delete":
        this.dispatchEvent("cancel_delete_answer")
    }
    return i
};
r.me = function() {
    "editing" === this.status ? this.Mb && S(this.Mb, i) : this.Mb && S(this.Mb, l);
    S(this.od, l);
    this.gc && S(this.gc, !this.enabled)
};
r.uK = '<div class="zm-command clearfix"><div class="draft-controls zg-left"><span class="draft-saved-info"><a class="draft-clear-button goog-inline-block" href="#" data-tip="s$b$删除草稿"><i class="zg-icon zg-icon-bin"></i><span class="hide-text">清除草稿</span></a><span class="draft-saved-time"></span></span></div><label style="cursor:pointer"><input name="anno-checkbox" type="checkbox">匿名</label> <a class="submit-button zg-btn-blue" name="save" href="javascript:;">发布回答</a></div>';
r.Ci = function() {
    this.Sc = gc(this.uK);
    this.Ym = $(".submit-button", this.Sc)[0];
    var a = $("input[name=anno-checkbox]", this.Sc)[0],
    b = $("label", this.Sc)[0];
    this.Ep = a;
    Bk.ab && (this.Ep.checked = i);
    vg(b, i);
    this.Mb.appendChild(this.Sc);
    this.hn.done(function() {
        if (this.Na && this.Na.on) this.Na.on("load", this.TN, l, this)
    })
};
r.TN = function() {
    var a = new Px(this);
    a.on("saveContent",
    function() {
        var a = !this.sd && this.Na.Hc.FullScreenPlugin;
        if (a && a.st) {
            var b = $(a.st);
            b.stop().text("草稿已经保存").fadeTo(600, 0.5).delay(3E3).fadeOut(600,
            function() {
                b.text("")
            })
        }
    },
    l, this);
    var b = this.sd ? this.Na: this.Na.f();
    this.e().c(b, "focus",
    function() {
        a.vz()
    }).c(b, "blur",
    function() {
        a.zz();
        a.Ky()
    });
    a.h(this.Sc)
};
r.Ox = function() {
    var a = lx().Lv();
    a && this.Ts(a)
};
function Vx(a) {
    this.D = $(a);
    this.cf()
}
Vx.prototype.cf = function() {
    var a = [this.D.get(0)].concat(this.D.parents().get()),
    b = $.map(a,
    function(a) {
        return $(a).data("navigable")
    })[0],
    c = b && $.grep(b.items(),
    function(b) {
        return~$.inArray(b, a)
    })[0];
    this.rY = b;
    this.sP = c
};
Vx.prototype.getItem = n("sP");
function Wx() {
    this.Ku = []
}
w(Wx, zh);
ja(Wx);
Wx.prototype.j = function(a) {
    var b = Wx.g.j.call(this, a);
    E.add(b, "goog-submenu");
    Xx(this, a, b);
    return b
};
Wx.prototype.h = function(a, b) {
    b = Wx.g.h.call(this, a, b);
    E.add(b, "goog-submenu");
    Xx(this, a, b);
    var c = Vb("div", "goog-menu", b);
    if (c.length) {
        var d = new ai(a.B()),
        c = c[0];
        S(c, l);
        a.B().va().body.appendChild(c);
        d.h(c);
        a.Vg(d, i)
    }
    return b
};
Wx.prototype.Fa = function(a, b) {
    var c = this.R(a),
    d = c && c.lastChild;
    Wx.g.Fa.call(this, a, b);
    d && (c.lastChild != d && E.has(d, "goog-submenu-arrow")) && c.appendChild(d)
};
Wx.prototype.Ae = function(a) {
    Wx.g.Ae.call(this, a);
    var b = a.R(),
    c = a.B(),
    c = Wb(c.Aa, "span", "goog-submenu-arrow", b)[0];
    Yx(a, c);
    c != b.lastChild && b.appendChild(c);
    Qc(a.f(), Wc.vk, "true")
};
function Xx(a, b, c) {
    var d = b.B().j("span");
    d.className = "goog-submenu-arrow";
    Yx(b, d);
    a.R(c).appendChild(d)
}
function Yx(a, b) {
    a.xd() ? (E.add(b, "goog-submenu-arrow-rtl"), zc(b, a.Cp ? "◄": "►")) : (E.remove(b, "goog-submenu-arrow-rtl"), zc(b, a.Cp ? "►": "◄"))
};
function Zx(a, b, c, d) {
    Eh.call(this, a, b, c, d || Wx.v())
}
w(Zx, Eh);
var $x = 218;
r = Zx.prototype;
r.Hd = j;
r.jz = j;
r.xD = l;
r.fc = j;
r.Hq = l;
r.Cp = i;
r.sO = l;
r.p = function() {
    Zx.g.p.call(this);
    this.e().c(this.getParent(), "hide", this.AF);
    this.fc && ay(this, this.fc, i)
};
r.Za = function() {
    this.e().ya(this.getParent(), "hide", this.AF);
    this.fc && (ay(this, this.fc, l), this.Hq || (this.fc.Za(), L(this.fc.f())));
    Zx.g.Za.call(this)
};
r.m = function() {
    this.fc && !this.Hq && this.fc.w();
    this.fc = j;
    Zx.g.m.call(this)
};
r.fd = function(a, b) {
    Zx.g.fd.call(this, a);
    b && (this.Sa().Uf = i);
    a || (this.Hd && Jd.clearTimeout(this.Hd), this.Hd = Ld(this.xg, $x, this))
};
r.bt = function() {
    var a = this.getParent();
    a && uh(a) == this && (by(this, i), cy(this), this.hY = l)
};
r.xg = function() {
    var a = this.fc;
    a && a.getParent() == this && (by(this, l), Kg(a,
    function(a) {
        "function" == typeof a.xg && a.xg()
    }))
};
function dy(a) {
    a.Hd && Jd.clearTimeout(a.Hd);
    a.jz && Jd.clearTimeout(a.jz)
}
r.n = function(a, b) {
    var c = Zx.g.n.call(this, a, b);
    c && !this.H() && this.xg();
    return c
};
function cy(a) {
    Kg(a.getParent(),
    function(a) {
        a != this && "function" == typeof a.xg && (a.xg(), dy(a))
    },
    a)
}
r.$b = function(a) {
    var b = a.keyCode,
    c = this.xd() ? 37 : 39,
    d = this.xd() ? 39 : 37;
    if (this.xD) {
        if (!this.Sa().$b(a)) if (b == d) this.xg();
        else return l
    } else if (this.isEnabled() && (b == c || b == this.Cx)) this.bt(),
    vh(this.Sa()),
    dy(this);
    else return l;
    a.preventDefault();
    return i
};
r.LP = function() {
    this.fc.getParent() == this && (dy(this), this.Gl.fd(this), cy(this))
};
r.AF = function(a) {
    a.target == this.Gl && (this.xg(), dy(this))
};
r.Yc = function(a) {
    this.isEnabled() && (dy(this), this.jz = Ld(this.bt, $x, this));
    Zx.g.Yc.call(this, a)
};
r.Yd = function(a) {
    dy(this);
    if (this.Ib & 8) return Zx.g.Yd.call(this, a);
    this.bt();
    return i
};
function by(a, b) {
    a.dispatchEvent(Gg(64, b));
    var c = a.Sa();
    if (b != c.H() && (b && (c.Ca || c.N(), c.Hb( - 1)), a.xD = b, E.enable(a.f(), "goog-submenu-open", b), c.n(b), b)) {
        var c = new Ci(a.f(), a.Cp ? 6 : 4, a.sO),
        d = a.Sa(),
        f = d.f();
        d.H() || (f.style.visibility = "hidden", S(f, i));
        c.xa(f, a.Cp ? 4 : 6);
        d.H() || (S(f, l), f.style.visibility = "visible")
    }
}
function ay(a, b, c) {
    var d = a.e(); (c ? d.c: d.ya).call(d, b, "highlight", a.LP)
}
r.za = function(a) {
    this.Sa().aa(a, i)
};
r.vi = function(a, b) {
    this.Sa().xk(a, b, i)
};
r.removeItem = function(a) { (a = this.Sa().removeChild(a, i)) && a.w()
};
r.Lh = function(a) {
    return Mg(this.Sa(), a)
};
r.dl = function() {
    return Lg(this.Sa())
};
r.Ye = function() {
    return this.Sa().Ye()
};
r.Sa = function() {
    this.fc ? this.Hq && this.fc.getParent() != this && Ig(this.fc, this) : this.Vg(new ai(this.B()), i);
    this.fc.f() || this.fc.j();
    return this.fc
};
r.Vg = function(a, b) {
    var c = this.fc;
    a != c && (c && (this.xg(), this.Ca && ay(this, c, l)), this.fc = a, this.Hq = !b, a && (Ig(a, this), a.n(l, i), a.Bm = l, a.Ie(l), this.Ca && ay(this, a, i)))
};
r.Bf = function(a) {
    return this.Sa().Bf(a)
};
ch("goog-submenu",
function() {
    return new Zx(j)
});
function ey(a, b, c, d) {
    Zx.call(this, a, b, c, d)
}
w(ey, Zx);
ey.prototype.$b = function(a) {
    var b = ey.g.$b.call(this, a),
    a = parseInt(Qm[a.keyCode], 10);
    isNaN(a) || this.Sa().Hb(a - 1);
    return b
};
function fy(a) {
    F.extend(this.s = {},
    this.V, a || {});
    this.content = "";
    this.Oc = this.jd = this.jh = j;
    this.Vc = l;
    this.valid = i
}
w(fy, T);
r = fy.prototype;
r.V = {
    rT: "textarea.content",
    XJ: ".toggle-expand",
    jT: ".summary",
    EK: "zm-editable-content"
};
r.p = function() {
    fy.g.p.call(this);
    var a = this.d,
    b = this.s;
    this.content = $(b.rT, a).remove().val();
    this.jh = $(b.jT, a);
    this.Oc = $(b.XJ, this.jh);
    if (this.jh.length) {
        if (this.Oc.length) this.Oc.on("click", $.proxy(this.expand, this));
        this.jh.on("click", $.proxy(this.gN, this))
    } else this.valid = l,
    this.expand = this.collapse = ia,
    this.dispatchEvent("invalid")
};
r.Kf = function() {
    return this.Oc.get(0)
};
r.$a = n("content");
r.Xa = function(a) {
    a ? this.expand() : this.collapse()
};
r.gN = function(a) {
    var b = Ar();
    if (!b || !b.Ze()) b = $(a.target).closest("a").get(0),
    b && "javascript:" !== b.protocol || (a.preventDefault(), a.stopPropagation(), this.expand())
};
r.expand = function() {
    this.Vc || (this.Vc = i, this.jd ? this.jd.show() : this.jh.length && (this.jd = $("<div>", {
        html: this.content,
        "class": this.s.EK
    }).insertBefore(this.jh)), this.jh.hide(), this.dispatchEvent("expand"))
};
r.collapse = function() {
    this.Vc && (this.Vc = l, this.jd.hide(), this.jh.show())
};
function gy() {
    this.size = j;
    this.aX = zg(document.body).top;
    this.oa = new me(this);
    this.Kz = j;
    this.YK = 250;
    this.cf()
}
w(gy, zd);
ja(gy);
gy.prototype.cf = function() {
    this.size = $b();
    var a = this.Kz = new Zn(this.update, this.YK, this);
    this.oa.c(window, "scroll", a.fire, l, a).c(window, "resize", a.fire, l, a)
};
gy.prototype.m = function() {
    gy.g.m.call(this);
    this.oa.w();
    this.oa = j
};
gy.prototype.update = function() {
    this.size = $b();
    this.dispatchEvent("update")
};
function hy(a, b, c) {
    var d = iy;
    d.oa.c(d, "update",
    function g() {
        a.getBoundingClientRect().bottom < this.size.height && (b.call(c), this.oa.ya(this, "update", g))
    })
}
var iy = gy.v();
$(function() {
    iy.update()
});
function jy(a, b, c) {
    T.call(this);
    this.L = a;
    this.fa = c;
    this.NK = b || Bk;
    this.Ru = j
}
w(jy, T);
var ky = {
    all_can_comment: "允许任何人评论",
    followee_can_comment: "允许我关注的人评论",
    nobody_can_comment: "关闭评论"
};
r = jy.prototype;
r.hy = function() {
    var a = I("zm-item-answer", this.d) || this.d;
    this.fa = a.getAttribute("data-aid");
    this.Ge = "1" === a.getAttribute("data-isowner");
    this.Nc = a.getAttribute("data-atoken");
    this.Of = "1" === a.getAttribute("data-deleted");
    this.Wu = +a.getAttribute("data-created");
    this.yN = +a.getAttribute("data-helpful");
    this.Ig = "1" === a.getAttribute("data-collapsed");
    this.ab = j
};
r.SO = function() {
    bx("answer", this.Nc, "read")
};
r.TO = function() {
    bx("answer", this.Nc, /^\/question\//.test(location.pathname) ? "read": "touch")
};
r.p = function() {
    function a() {
        b();
        var a = g.Ap.Lh(0);
        a.Sa && a.Sa() && (a.bt(), a.Sa().Hb(0))
    }
    function b() {
        ly(g);
        g.Ap.Hb(0)
    }
    jy.g.p.call(this);
    this.hy();
    this.ng = I("zm-item-answer-author-info", this.d);
    var c = this.fH = new fy;
    this.aa(c);
    c.h(this.d);
    c.Kf() && Q(this.e(), c, "expand", this.SO);
    hy(this.d, this.TO, this); (this.cc = this.cc || I("zm-item-meta", this.d)) && this.e().c(this.cc, "click", this.Cl);
    if (this.Ge) this.ng && (this.KF = (this.ab = $a(this.ng.innerHTML, "匿名用户")) ? j: this.ng.innerHTML.replace(/src=".+?"/g, 'src="' + V[2] + '"'), this.e().c(this.ng, "click",
    function(a) {
        "cancel-anon" === a.target.name && Yl(l)
    }));
    else {
        var d;
        if (c = I("zm-votebar", this.d)) d = new Kx(this.fa),
        d.h(c),
        this.e().c(d, "change", this.PR),
        this.e().c(d, "action",
        function(a) {
            a.data.state === Lx.uf ? U.Q({
                type: "ga_click_vote_up",
                target: this
            }) : a.data.state === Lx.kh && U.Q({
                type: "ga_click_vote_down",
                target: this
            })
        });
        this.lm = d;
        this.TH = c
    }
    if (d = I("zm-item-vote-info", this.d)) {
        this.mm = new Nx(this.fa);
        this.aa(this.mm);
        this.mm.h(d);
        var f = $(".zm-item-vote-count", this.d);
        if (f.length) this.mm.on("change",
        function() {
            f.text(Ox(this))
        })
    }
    my(this);
    this.Ow();
    this.ua();
    d = new Vx(this.d);
    d = dn.XH(d.getItem() || this.d);
    cn(bn(cn(bn(cn(bn(cn(bn(cn(bn(cn(bn(cn(bn(d, "v",
    function() {
        this.lm && this.lm.oH()
    },
    this), {
        group: "操作",
        name: "赞同"
    }), "d",
    function() {
        this.lm && this.lm.nH()
    },
    this), {
        group: "操作",
        name: "反对"
    }), "f x", this.$q, this), {
        group: "操作",
        name: "分享"
    }), "s c", this.$C, this), {
        group: "操作",
        name: "收藏"
    }), "t", this.pD, this), {
        group: "操作",
        name: "感谢"
    }), "c", this.uw, this), {
        group: "操作",
        name: "打开评论"
    }), "shift+c", this.bw, this), {
        group: "操作",
        name: "定位到评论框"
    });
    var c = mb ? "⌘": "ctrl",
    g = this;
    Ak.Zw && $("a[name=admin]", this.cc)[0] && cn(bn(cn(bn(d, "meta+.", b), {
        group: "管理",
        name: "展开菜单",
        key: c + "+."
    }), "meta+k", a), {
        group: "管理",
        name: "展开折叠子菜单 (Kill)",
        key: c + "+k"
    });
    if (d = I("answer-meta-menu", this.cc)) c = new ai,
    c.za(this.dP = new Eh("分享")),
    this.dP.f().innerHTML = '<a href="javascript:;" data-gaq="feed|share_answer|feed_answer" class="meta-item" name="share">分享</a>',
    c.za(new $h),
    c.za(this.bP = new Eh("收藏")),
    this.bP.f().innerHTML = '<a href="javascript:;" class="meta-item" name="favo">收藏</a>',
    this.Ge || (c.za(new $h), c.za(this.cP = new Eh("没有帮助")), this.cP.f().innerHTML = '<a href="javascript:;" class="meta-item' + (this.yN ? "": " active") + '" name="nohelp" style="">没有帮助</a>'),
    c = new Ui("operation", c),
    c.Hs = i,
    Wi(c),
    c.NE = new Nf(7, 0, 7, 0),
    c.Dl = ba(),
    c.h(d)
};
function my(a) {
    if (a.kp) return a.kp;
    var b = I("zm-editable-content", a.d); ! a.Ge && (!ub && V.ob()) && (a.lm && $(a.TH).is(":visible") && b && 230 < $(b).height()) && (a.kp = new gv(j, a.d), a.aa(a.kp), a.kp.hk = "Votebar", a.kp.h(a.TH))
}
r.PR = function() {
    this.mm && this.mm.Ol()
};
function ny(a) {
    if (!a.Oe && a.Ge && Bk && a.fa) {
        a.Oe = new mv(l, "/answer/content", "content");
        a.Oe.zt = i;
        a.Oe.sv = i;
        a.Oe.WC = Tx.prototype.WC;
        var b = I("zm-item-rich-text", a.d);
        a.Oe.zc = ["id=" + a.L];
        a.Oe.h(b);
        a.e().c(a.Oe, "shouldUpdateContent",
        function(a) {
            if (oa(a.data)) return l
        });
        a.e().c(a.d, "click",
        function(a) {
            "suggest_edit" === a.target.name && this.Oe.dg();
            return i
        })
    }
}
r.ua = function() {
    this.ng && this.e().c(this.ng, "click", this.S);
    this.Ge && (this.EJ = V);
    this.e().c(Zl, "anon_change",
    function(a) {
        this.Ge ? this.Jo(a.ab) : this.lm.Td() === Lx.uf && this.mm.Ol()
    });
    ny(this);
    $(this.d).on("focusin focusout",
    function(a) {
        $(this).toggleClass("focusin", "focusin" === a.type)
    })
};
r.Nd = function(a) {
    return zn(this.d, a)
};
r.S = function(a) {
    if (a = (a = this.Nd(a.target)) && a.name) if ("edit" === a) {
        a = lx();
        if (!this.wu) {
            var b = Bk.Nc;
            a.rx = i;
            a.iG = b;
            this.e().c(a, "change", this.Ox)
        }
        this.wu = i;
        mx(a)
    } else "complex" === a && (a = I("zm-item-answer-summary", this.d), b = I("zm-item-rich-text", this.d), S(a, l), S(b, i))
};
r.Ox = function() {
    var a = lx().Lv() || V[4] || "";
    a && this.Ts(a)
};
r.Ts = function(a) {
    this.Mm = a;
    this.Jo(l)
};
r.Ow = function() {
    var a = I("zm-item-answer-author-wrap", this.d),
    a = I("zm-list-avatar", a);
    vk.add(a)
};
r.Jo = function(a) {
    a ? this.ng.innerHTML = '<h3 class="zm-item-answer-author-wrap">匿名用户<a class="zg-link-gray cancel-anon" href="javascript:void(0);" name="cancel-anon">取消匿名</a></h3>': this.Ge && (this.KF ? this.ng.innerHTML = this.KF.replace("</h3>", "").replace("</H3>", "") + '<a name="edit" class="zu-edit-button" href="javascript:;"><i class="zu-edit-button-icon"></i>修改话题经验</a></h3>': (a = [], a.push('<h3 class="zm-item-answer-author-wrap">'), a.push(mn()), a.push(ln(V, "zm-item-answer-creator")), a.push("</h3>"), this.ng.innerHTML = a.join("")))
};
r.qO = n("Ge");
function oy(a, b, c) {
    if (a.P) if (c) a.P.w();
    else return;
    a.P = new bu(a.fa, "answer", b);
    a.aa(a.P);
    a.e().c(a.P, "change", a.gh);
    a.P.N(a.cc)
}
function ly(a) {
    if (a.Ap) a.Ap.n(i);
    else {
        var b;
        var c = $("a[name=admin]", a.cc)[0];
        if (c) {
            a.SI = c;
            $x = 0;
            b = new fx;
            a.aa(b);
            b.zf(c, 5);
            c = a.Ig ? new Eh("取消折叠") : new ey("折叠");
            c.pa("collapse");
            if (!a.Ig) {
                for (var d = 0; d < st["collapse-answer"].cd.length; d++) {
                    var f = new Eh([K("span", "", (d + 1).toString() + " "), document.createTextNode(rt[st["collapse-answer"].cd[d]])]);
                    f.pa(st["collapse-answer"].cd[d]);
                    c.za(f)
                }
                E.add(c.Sa().f(), "manage-menu")
            }
            d = new Eh("删除");
            d.pa("delete");
            b.za(c);
            b.za(d);
            b.N(a.d);
            E.add(b.f(), "manage-menu")
        } else b = h;
        b && (hx(b, new Ci(a.SI, 1, i), 0, new Nf(5, 0, 5, 0)), a.e().c(b, "action",
        function(a) {
            var b = a.target,
            a = b.O(),
            b = b.f(),
            c = new Np;
            if ("collapse" === a) c.add("answer_id", this.fa).add("action", "collapse2").add("collapse", this.Ig ? "cancel": "done"),
            b.setAttribute("data-op", this.Ig ? "uncollapse-answer": "collapse-answer"),
            b.setAttribute("data-action", "/manage?" + c.toString()),
            py(this, b);
            else if ("delete" === a) c.add("answer_id", this.fa).add("action", "remove_answer2"),
            b.setAttribute("data-op", "remove-answer"),
            b.setAttribute("data-action", "/manage?" + c.toString()),
            py(this, b, "delete");
            else if (qa(a)) {
                var d = $(this.d),
                b = new Np;
                b.add("answer_id", this.fa).add("action", "collapse2").add("collapse", this.Ig ? "cancel": "done").add("reason", a);
                ut("/manage", b.toString(),
                function() {
                    d.hide("fast",
                    function() {
                        d.remove()
                    })
                })
            }
        }), qy(a, b), a.Ap = b)
    }
}
function py(a, b, c) {
    var d = qt.v();
    d.Uk = {
        id: a.fa,
        type: "answer"
    };
    wt(d, b, u(function() {
        S(this.d, l)
    },
    a), c);
    d.n(i)
}
r.Cl = function(a) {
    var b = (a = this.Nd(a.target)) && a.name;
    if (b) switch (b) {
    case "addcomment":
        if ("添加评论" === $.trim($(a).text()) && this.Cj(0, "question_answer_add_comment_start")) break;
        this.uw();
        this.P.vd() && this.P.jk("view_comments", parseInt(Gc(a), 10) || 0);
        break;
    case "remove":
        this.kl();
        break;
    case "thanks":
        U.Q({
            type:
            "ga_click_thank_answer",
            target: a
        });
        this.pD();
        break;
    case "nohelp":
        U.Q({
            type:
            "ga_click_answer_not_helpful",
            target: a
        });
        this.Cj(0, "question_answer_not_helpful") || (this.lv && "pending" === this.lv.state() && this.lv.abort(), a = $("a[name=nohelp]", this.cc)[0], b = -1 < Gc(a).indexOf("撤销"), Ak.pb ? (b = E.has(a, "active"), E.toggle(a, "active")) : (fn(a, b ? "没有帮助": "撤销没有帮助"), un(a)), this.dispatchEvent({
            data: {
                aid: this.fa
            },
            type: b ? "revert-nohelp": "nohelp"
        }), this.lv = $.post(b ? "/answer/helpful": "/answer/not_helpful", {
            aid: this.fa
        }));
        break;
    case "comment_opt":
        this.NS = a;
        if (!this.vB || !this.vB.wb()) {
            b = this.xK;
            if (!b) {
                var a = $(a).data(),
                c = new fx,
                b = new ry("禁止转载");
                b.Jc(!a.copyable);
                c.za(b);
                c.za(new $h);
                this.Su = [];
                F.forEach(ky,
                function(a, b) {
                    var g = new ry(a);
                    g.pa(b);
                    g.Jc(b === this.Ru);
                    this.Su.push(g);
                    c.za(g)
                },
                this);
                c.za(new $h);
                c.za(new Eh("删除"));
                this.e().c(c, "action", this.jM);
                qy(this, c);
                c.N(document.body);
                E.add(c.f(), "zm-question-answer-meta-comment-option-menu");
                b = this.xK = c
            }
            this.Ru || (a = new Y(i), Q(this.e(), a, "success",
            function(a) {
                if ((a = R(a.target)) && !a.r) {
                    var b = a.msg;
                    y.forEach(this.Su,
                    function(a) {
                        a.O() === b && a.Jc(i)
                    });
                    this.Ru = b
                } else X(a.msg)
            }), a.ajax("/answer/comment_permission?answer_id=" + this.fa, j, "GET"), this.vB = a);
            b.H() ? b.n(l) : hx(b, new Ci(this.NS, 1, i), 0, new Nf(5, 0, 5, 0))
        }
        break;
    case "admin":
        ly(this);
        break;
    case "share":
        U.Q({
            type:
            "ga_click_share_answer_box",
            target: a
        });
        this.$q();
        break;
    case "favo":
        U.Q({
            type:
            "ga_click_collect_answer_box",
            target: a
        }),
        this.$C()
    }
};
r.Cj = function(a, b) {
    var c = {
        "0": "为了保留你对答案的操作，请先登录或注册知乎",
        1 : "为了继续你的操作，请先登录或注册知乎"
    };
    return ! V.ob() ? (Fn.v().Ga = b, Fn.v().n(i), Fn.v().Wg(c[a]), i) : l
};
r.$q = function() {
    if (!this.Cj(1, "question_question_share")) {
        var a = Yw.v();
        Zw(a, this.fa, "/answer/" + this.Nc, "a");
        a.show();
        $w(a, "tb-webshare-sina")
    }
};
r.$C = function() {
    if (!this.Cj(0, "question_answer_collect")) {
        var a = px(),
        b = this.fa;
        if (a.fa !== b && a.Mg) {
            var c = Xb("zm-favo-list-item-link", a.Mg);
            y.forEach(c,
            function(a) {
                E.remove(a, "zm-favo-list-item-link-active")
            },
            a)
        }
        a.fa = b;
        a.show()
    }
};
r.uw = function() {
    this.P ? this.P.rf() : oy(this)
};
r.bw = function(a) {
    this.P ? this.P.field.focus() : this.uw();
    a.preventDefault()
};
r.pD = function() {
    if (!this.Cj(0, "question_answer_thank")) {
        var a = $("a[name=thanks]", this.cc)[0];
        a && !E.has(a, "disabled") && (fn(a, "已感谢"), E.add(a, "disabled"), un(a), $.post("/answer/thanks", {
            aid: this.fa
        }))
    }
};
function qy(a, b) {
    a.e().c(b, "show",
    function() {
        E.add(this.cc, "zm-item-meta-has-menu")
    }).c(b, "hide",
    function(a) {
        a.currentTarget === a.target && E.remove(this.cc, "zm-item-meta-has-menu")
    })
}
r.jM = function(a) {
    var b = a.target,
    a = b.O();
    "禁止转载" === a ? (a = !b.Be(), $.post("/node/AnswerMetaV2", {
        method: "set_copyright",
        params: {
            answer_id: this.fa,
            is_copyable: Number(a)
        }
    }), $(".copyright", this.cc).html(a ? "": '<span class="zg-bull">&bull;</span> 禁止转载')) : "删除" === a ? this.kl() : a in ky && $.post("/answer/comment_permission", {
        answer_id: this.fa,
        permission: a
    }).done(u(function(a) {
        a && !a.r && y.forEach(this.Su,
        function(a) {
            a.Jc(a === b)
        })
    },
    this))
};
r.kl = function() {
    Ol("你确定要删除自己的答案吗？", "答案内容不会被永久删除，你还可以撤消本次删除操作。",
    function(a) {
        a && (this.Of = i, this.status = -1, sy(this))
    },
    this)
};
function sy(a) {
    var b = new Y(i);
    Q(a.e(), b, "success",
    function() {
        S(this.d, !this.Of);
        this.Of ? this.Xt = "set_delete": (ny(this), this.Xt = "cancel_delete");
        this.dispatchEvent("change");
        $(this.d).parent(".zm-item").hide()
    });
    b.ajax("/answer/" + (a.Of ? "remove": "unremove"), "aid=" + a.fa)
}
r.gh = function() {
    var a = I("zu-question-answer-meta-comment", this.cc),
    b = this.P.Ha();
    fn(a, b ? b + " 条评论": "添加评论")
};
r.f = n("d");
function ty() {
    T.call(this)
}
w(ty, T);
r = ty.prototype;
r.wC = "zm-item-expanded";
r.Cm = "zm-item-answer";
r.p = function() {
    ty.g.p.call(this);
    this.hy();
    this.ua();
    this.Ow();
    this.yk();
    this.sl(); ! this.Dm && this.L && hy(this.d, this.UO, this)
};
r.yk = function() {
    this.HS = cn(bn(dn.XH(this.d), "o", this.rf, this), {
        group: "操作",
        name: "显示全部/收起"
    })
};
r.hy = function() {
    var a = this.d,
    b = I(this.Cm, a);
    b && (this.fa = b.getAttribute("data-aid"), this.Sn = b.getAttribute("data-isowner"), this.SW = b.getAttribute("data-atoken"));
    var c;
    if (! (c = a.getAttribute("data-qid"))) c = (c = I("question_link", this.d)) && c.pathname.split("/")[2];
    this.L = c;
    this.GR = a.getAttribute("data-qtoken");
    this.Dm = b
};
r.Ow = function() {
    var a = I("zm-item-answer-author-wrap", this.d),
    a = I("zm-list-avatar", a);
    vk.add(a)
};
r.vd = function() {
    return E.has(this.d, this.wC)
};
r.rf = function() {
    this.Xa(!this.vd())
};
r.Xa = function(a) {
    if (this.Dm && a !== this.vd()) {
        E.enable(this.d, this.wC, a);
        a && this.sl();
        if (this.ph) {
            var b = my(this.ph);
            b && cv(b, a);
            this.ph.fH.Xa(a)
        }
        this.dispatchEvent(a ? "expand": "collapse")
    }
};
r.ua = function() {
    this.e().c(this.d, "click", this.S)
};
r.S = function(a) {
    var a = a.target,
    b = a.name;
    if (b) {
        this.Ia = a;
        var c = "new" === $("#feed-ver").val() ? i: l;
        switch (b) {
        case "expand":
            this.Xa(i);
            if (c || this.Sn) a.name = "toggleExpanded";
            break;
        case "toggleExpanded":
            this.rf();
            break;
        case "complex":
            this.Xa(i);
            break;
        case "collapse":
            var d = this.d,
            f = d.getBoundingClientRect().bottom;
            setTimeout(function() {
                var a = d.getBoundingClientRect().bottom,
                b = bg(document);
                window.scrollTo(b.x, b.y + a - f)
            });
            this.Xa(l);
            break;
        case "focus":
            c && In("follow", "follow_question", "v2");
            Dn(this.Ia, "question", u(this.CN, this), h, {
                follow_text: "关注问题"
            });
            break;
        case "follow-p":
            Dn(this.Ia, "people", ya(un, a), h, {
                follow_text: a.getAttribute("data-follow_text")
            });
            break;
        case "ignore":
            U.Q({
                type:
                "ga_click_question_ignore",
                target: a
            });
            this.dispatchEvent({
                type: "ignore",
                L: this.L
            }); (new Y(i)).ajax("/question/uninterest", "qid=" + this.L);
            break;
        case "share":
            !this.ph && this.dz && this.dz();
            break;
        case "add-q-comment":
            this.rt && this.rt(),
            this.P.vd() && this.P.jk("view_comments", parseInt(Gc(a), 10) || 0)
        }
        this.nd && this.nd(a)
    }
};
r.CN = function() {
    this.Ia && un(this.Ia)
};
r.UO = function() {
    bx("question", this.L, "touch")
};
r.sl = function() {
    if (this.Dm) {
        this.ph = new jy(this.L, {
            Nc: this.GR
        },
        this.fa);
        var a = I("zm-item-meta", this.d);
        this.ph.cc = a;
        this.aa(this.ph);
        this.ph.h(this.Dm);
        a = this.ph.fH;
        this.e().c(a, "expand",
        function() {
            this.Xa(i)
        });
        this.sl = ia
    }
};
r.ae = ca("nd");
r.f = n("d");
function uy(a, b, c) {
    Lw.call(this, a, b, c)
}
w(uy, Lw);
uy.prototype.Bl = function(a) {
    var b = new ty;
    this.aa(b);
    b.h(a);
    b.Xa(l)
};
function vy() {
    T.call(this)
}
w(vy, ty);
r = vy.prototype;
r.H = p(i);
r.Cm = "answer_wrap";
r.yk = function() {
    vy.g.yk.call(this);
    var a = this.HS;
    this.Dm || cn(bn(cn(bn(cn(bn(a, "c", this.rt, this), {
        group: "操作",
        name: "打开评论"
    }), "f x", this.dz, this), {
        group: "操作",
        name: "分享"
    }), "shift+c", this.bM, this), {
        group: "操作",
        name: "定位到评论框"
    });
    cn(bn(a, "shift+o", this.YQ, this), {
        group: "操作",
        name: "新窗口打开问题"
    });
    this.d.getAttribute("tabindex") === j && (this.d.tabIndex = "-1")
};
r.YQ = function() {
    window.open($(".question_link", this.d).attr("href"))
};
r.dz = function() {
    this.ih || (this.ih = Yw.v());
    Zw(this.ih, this.L, "/question/" + this.L, "q");
    this.ih.show();
    $w(this.ih, "tb-webshare-sina")
};
r.rt = function() {
    this.P ? this.P.rf() : this.Ri()
};
r.bM = function() {
    this.P ? this.P.field.focus() : this.rt()
};
r.Ri = function() {
    if (!this.P) {
        var a = $(".zm-item-meta", this.d).get(0);
        this.P = new bu(this.L, "question");
        this.aa(this.P);
        this.e().c(this.P, "change", this.gh);
        this.P.N(a)
    }
};
r.gh = function() {
    var a = this.P.Ha(),
    b = $(".add-comment-hook", this.d).get(0);
    fn(b, a ? a + " 条评论": "添加评论")
};
function wy(a, b, c) {
    Lw.call(this, a, b, c);
    this.ef = "feed-item"
}
w(wy, Lw);
wy.prototype.Bl = function(a) {
    var b = new vy;
    this.aa(b);
    b.h(a)
};
function xy(a) {
    M.call(this);
    this.label = a
}
w(xy, ao);
xy.prototype.h = function(a) {
    this.d = a;
    a = Vb("input", j, this.d);
    a.length && (this.field = a[0]);
    this.Jr = K("label", "zg-fly-input-label", this.label);
    mc(this.Jr, this.field);
    N(this.Jr, "click",
    function() {
        this.field.focus()
    },
    l, this);
    this.e().c(this.field, "focus",
    function() {
        S(this.Jr, l)
    }).c(this.field, "blur",
    function() {
        pn(this.field.value) || S(this.Jr, i)
    })
};
function yy() {
    T.call(this);
    this.offset = 0;
    this.yb = "zm-item";
    this.Gh = j;
    this.JH = l;
    this.Fh = ["zg-follow", "zg-unfollow"];
    this.LC = j;
    this.Uh = 20;
    this.xhr = j
}
w(yy, T);
r = yy.prototype;
r.p = function() {
    yy.g.p.call(this);
    if (this.og = $(this.d).next("#zh-load-more").get(0) || H("zh-load-more")) {
        this.e().c(this.og, "click", this.zC);
        this.items = this.Ye();
        if (this.Gh) if (this.JH) {
            var a = new Kw;
            a.cg(this.Gh, this.Fh);
            a.h(this.d)
        } else(new lu(this.d, this.Gh, this.Fh, this.LC)).k();
        this.tl(this.items);
        S(this.og, this.items.length >= this.Uh)
    }
};
r.Kf = n("og");
r.Ye = function() {
    return qc(this.d)
};
r.tl = function(a) {
    this.Qw && y.forEach(a,
    function(a) {
        this.Qw.call(this, a)
    },
    this)
};
r.cg = function(a, b, c, d) {
    this.Gh = a;
    this.Fh = b || this.Fh;
    this.JH = c;
    this.LC = d
};
r.ae = ca("nd");
r.zC = function() {
    if (!this.xhr || !this.xhr.wb()) {
        var a = Ad(this.d.getAttribute("data-init")),
        b = "/node/" + a.nodename,
        a = a.params;
        a.offset = (a.offset || 0) + this.Ye().length;
        a = {
            params: Cd(a),
            method: this.og.getAttribute("data-method")
        };
        this.Uo(i);
        this.xhr = new Y;
        this.e().c(this.xhr, "success", this.OP).c(this.xhr, "complete", ya(this.Uo, l));
        this.xhr.ajax(b, xe(a), "POST")
    }
};
r.Uo = function(a) {
    this.og.innerHTML = a ? "加载中...": "更多"
};
r.OP = function() {
    var a = R(this.xhr);
    if (a) {
        var b = a.msg;
        if (a.r) return X(b);
        b.length ? (S(this.og, b.length >= this.Uh), this.offset += b.length, a = gc(b.join("")), this.tl("DIV" === a.nodeName ? [a] : a.childNodes), this.d.appendChild(a), this.dispatchEvent(zy)) : (this.dispatchEvent(zy), S(this.og, l))
    }
};
var zy = "after_load";
function Ay(a) {
    var b = new vy;
    this.nd && b.ae(this.nd);
    b.h(a);
    b.Xa(l)
};
function By(a) {
    var b = a.type;
    if (!la(b)) return j;
    switch (b.toLowerCase()) {
    case "checkbox":
    case "radio":
        return a.checked ? a.value: j;
    case "select-one":
        return b = a.selectedIndex,
        0 <= b ? a.options[b].value: j;
    case "select-multiple":
        for (var b = [], c, d = 0; c = a.options[d]; d++) c.selected && b.push(c.value);
        return b.length ? b: j;
    default:
        return la(a.value) ? a.value: j
    }
}
function Cy(a, b) {
    var c = a.elements[b];
    if (c.type) return By(c);
    for (var d = 0; d < c.length; d++) {
        var f = By(c[d]);
        if (f) return f
    }
    return j
};
var Dy = {};
function Ey() {}
w(Ey, T);
Ey.prototype.Z = function(a) {
    Ey.g.Z.call(this, a);
    this.e().c(U, "sina_callback", this.lo);
    this.e().c(U, "qq_callback", this.lo);
    this.e().c(H("zh-setting-page-bind-sina-unbindbtn"), "click", this.GF);
    this.e().c(H("zh-setting-page-bind-qq-unbindbtn"), "click", this.GF)
};
Ey.prototype.lo = function(a) {
    if ("qq_callback" === a.type) {
        var b = a.lb.name,
        a = Nk = a.lb.id;
        H("zh-setting-page-bind-qqname").innerHTML = '<a href="http://t.qq.com/' + a + '" target="_blank">@' + b + "</a>";
        Fy(i)
    } else "sina_callback" === a.type && (b = a.lb.name, a = Mk = a.lb.id, H("zh-setting-page-bind-sinaname").innerHTML = '<a href="http://weibo.com/' + a + '" target="_blank">@' + b + "</a>", Gy(i))
};
Ey.prototype.GF = function(a) {
    var b = a.target.getAttribute("data-weibotype");
    if (window.confirm("你确定要解除与" + ("sina" === b ? "新浪": "腾讯") + "微博的绑定吗？")) {
        var c = new Y(i);
        Q(this.e(), c, "success",
        function() {
            var a = R(c);
            a && !a.r ? "sina" === b ? Gy() : Fy() : X(a.msg)
        });
        c.ajax("/oauth/unbind/" + b)
    }
};
function Gy(a) {
    S(H("zh-setting-page-bind-sina-binded-wrap"), !!a);
    S(H("zh-setting-page-bind-sina-tobind-wrap"), !a)
}
function Fy(a) {
    S(H("zh-setting-page-bind-qq-binded-wrap"), !!a);
    S(H("zh-setting-page-bind-qq-tobind-wrap"), !a)
};
function Hy(a) {
    M.call(this);
    this.d = a;
    a = sa(this.d) && 1 == this.d.nodeType ? this.d: this.d ? this.d.body: j;
    this.wO = !!a && gg(a);
    this.xE = N(this.d, A ? "DOMMouseScroll": "mousewheel", this)
}
w(Hy, zd);
Hy.prototype.handleEvent = function(a) {
    var b = 0,
    c = 0,
    d = 0,
    a = a.Yb;
    if ("mousewheel" == a.type) {
        c = 1;
        if (z || B && (nb || D("532.0"))) c = 40;
        d = Iy( - a.wheelDelta, c);
        la(a.wheelDeltaX) ? (b = Iy( - a.wheelDeltaX, c), c = Iy( - a.wheelDeltaY, c)) : c = d
    } else d = a.detail,
    100 < d ? d = 3 : -100 > d && (d = -3),
    la(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d: c = d;
    qa(this.KE) && (b = Nb(b, -this.KE, this.KE));
    qa(this.LE) && (c = Nb(c, -this.LE, this.LE));
    this.wO && (b = -b);
    b = new Jy(d, a, b, c);
    this.dispatchEvent(b)
};
function Iy(a, b) {
    return B && (mb || ob) && 0 != a % b ? a: a / b
}
Hy.prototype.m = function() {
    Hy.g.m.call(this);
    sd(this.xE);
    delete this.xE
};
function Jy(a, b, c, d) {
    b && this.k(b, h);
    this.type = "mousewheel";
    this.detail = a;
    this.Gi = c;
    this.Hi = d
}
w(Jy, ed);
function Ky() {
    M.call(this)
}
w(Ky, zd);
r = Ky.prototype;
r.rc = 0;
r.ho = 0;
r.eo = 100;
r.Xk = 0;
r.dk = 1;
r.XD = l;
r.as = l;
r.pa = function(a) {
    a = Ly(this, a);
    this.rc != a && (this.rc = a + this.Xk > this.eo ? this.eo - this.Xk: a < this.ho ? this.ho: a, !this.XD && !this.as && this.dispatchEvent("change"))
};
r.O = function() {
    return Ly(this, this.rc)
};
r.Lo = function(a) {
    a = Ly(this, a);
    this.Xk != a && (this.Xk = 0 > a ? 0 : this.rc + a > this.eo ? this.eo - this.rc: a, !this.XD && !this.as && this.dispatchEvent("change"))
};
r.Kh = function() {
    return this.dk == j ? this.Xk: Math.round(this.Xk / this.dk) * this.dk
};
r.wc = function() {
    return Ly(this, this.ho)
};
r.Fc = function() {
    return Ly(this, this.eo)
};
r.Zv = n("dk");
function Ly(a, b) {
    return a.dk == j ? b: a.ho + Math.round((b - a.ho) / a.dk) * a.dk
};
function My(a) {
    T.call(this, a);
    this.FA = j;
    this.La = new Ky;
    N(this.La, "change", this.mD, l, this)
}
w(My, T);
var Ny = yd("dragvaluestart"),
Oy = yd("dragvalueend"),
Py = yd("dragextentstart"),
Qy = yd("dragextentend"),
Ry = yd("dragstart"),
Sy = yd("dragend");
r = My.prototype;
r.qb = "horizontal";
r.yr = l;
r.lP = l;
r.Af = 10;
r.fo = 0;
r.$D = i;
r.Wb = i;
r.Od = l;
r.j = function() {
    My.g.j.call(this);
    var a = this.B().j("div", this.C(this.qb));
    this.Z(a)
};
r.Z = function(a) {
    My.g.Z.call(this, a);
    E.add(a, this.C(this.qb));
    var a = this.f(),
    b = Vb(j, "goog-slider-thumb", a)[0];
    b || (b = this.B().j("div", "goog-slider-thumb"), Pc(b, Xc.sp), a.appendChild(b));
    this.Qa = this.rd = b;
    Pc(this.f(), Xc.FI);
    Ty(this)
};
r.p = function() {
    My.g.p.call(this);
    this.ee = new Ok(this.Qa);
    this.Hf = new Ok(this.rd);
    this.ee.Bh(this.Od);
    this.Hf.Bh(this.Od);
    this.ee.ev = this.Hf.ev = ia;
    this.fb = new Sg(this.f());
    Uy(this, i);
    this.f().tabIndex = 0;
    Vy(this)
};
function Uy(a, b) {
    b ? (a.e().c(a.ee, "beforedrag", a.Tq).c(a.Hf, "beforedrag", a.Tq).c(a.ee, ["start", "end"], a.ar).c(a.Hf, ["start", "end"], a.ar).c(a.fb, "key", a.$e).c(a.f(), "mousedown", a.cj), a.$D && Wy(a, i)) : (a.e().ya(a.ee, "beforedrag", a.Tq).ya(a.Hf, "beforedrag", a.Tq).ya(a.ee, ["start", "end"], a.ar).ya(a.Hf, ["start", "end"], a.ar).ya(a.fb, "key", a.$e).ya(a.f(), "mousedown", a.cj), a.$D && Wy(a, l))
}
r.Za = function() {
    My.g.Za.call(this);
    Uc(this.ee, this.Hf, this.fb, this.Aj)
};
r.Tq = function(a) {
    var b = a.xq == this.ee ? this.Qa: this.rd,
    c;
    "vertical" == this.qb ? (c = this.f().clientHeight - b.offsetHeight, c = (c - a.top) / c * (this.Fc() - this.wc()) + this.wc()) : c = a.left / (this.f().clientWidth - b.offsetWidth) * (this.Fc() - this.wc()) + this.wc();
    c = a.xq == this.ee ? Math.min(Math.max(c, this.wc()), this.O() + this.Kh()) : Math.min(Math.max(c, this.O()), this.Fc());
    Xy(this, b, c)
};
r.ar = function(a) {
    var b = "start" == a.type;
    E.enable(this.f(), "goog-slider-dragging", b);
    E.enable(a.target.handle, "goog-slider-thumb-dragging", b);
    a = a.xq == this.ee;
    b ? (this.dispatchEvent(Ry), this.dispatchEvent(a ? Ny: Py)) : (this.dispatchEvent(Sy), this.dispatchEvent(a ? Oy: Qy))
};
r.$e = function(a) {
    var b = i;
    switch (a.keyCode) {
    case 36:
        Yy(this, this.wc());
        break;
    case 35:
        Yy(this, this.Fc());
        break;
    case 33:
        Zy(this, this.Af);
        break;
    case 34:
        Zy(this, -this.Af);
        break;
    case 37:
        var c = this.Od && this.xd() ? 1 : -1;
        Zy(this, a.shiftKey ? c * this.Af: c * this.fp);
        break;
    case 40:
        Zy(this, a.shiftKey ? -this.Af: -this.fp);
        break;
    case 39:
        c = this.Od && this.xd() ? -1 : 1;
        Zy(this, a.shiftKey ? c * this.Af: c * this.fp);
        break;
    case 38:
        Zy(this, a.shiftKey ? this.Af: this.fp);
        break;
    default:
        b = l
    }
    b && a.preventDefault()
};
r.cj = function(a) {
    this.f().focus && this.f().focus();
    var b = a.target; ! uc(this.Qa, b) && !uc(this.rd, b) && (this.lP ? Yy(this, $y(this, a)) : (this.Bz(a), this.Me = az(this, $y(this, a)), this.JD = "vertical" == this.qb ? this.Mr < this.Me.offsetTop: this.Mr > bz(this, this.Me) + this.Me.offsetWidth, a = Ub(this.f()), this.e().c(a, "mouseup", this.yz, i).c(this.f(), "mousemove", this.Bz), this.Ph || (this.Ph = new Id(200), this.e().c(this.Ph, Kd, this.qD)), this.qD(), this.Ph.start()))
};
r.jD = function(a) {
    Zy(this, (0 < a.detail ? -1 : 1) * this.fp);
    a.preventDefault()
};
r.qD = function() {
    var a;
    if ("vertical" == this.qb) {
        var b = this.Mr,
        c = this.Me.offsetTop;
        this.JD ? b < c && (a = cz(this, this.Me) + this.Af) : b > c + this.Me.offsetHeight && (a = cz(this, this.Me) - this.Af)
    } else b = this.Mr,
    c = bz(this, this.Me),
    this.JD ? b > c + this.Me.offsetWidth && (a = cz(this, this.Me) + this.Af) : b < c && (a = cz(this, this.Me) - this.Af);
    la(a) && Xy(this, this.Me, a)
};
r.yz = function() {
    this.Ph && this.Ph.stop();
    var a = Ub(this.f());
    this.e().ya(a, "mouseup", this.yz, i).ya(this.f(), "mousemove", this.Bz)
};
function dz(a, b) {
    var c = jg(b, a.f());
    return "vertical" == a.qb ? c.y: a.Od && a.xd() ? a.f().clientWidth - c.x: c.x
}
r.Bz = function(a) {
    this.Mr = dz(this, a)
};
function $y(a, b) {
    var c = a.wc(),
    d = a.Fc();
    if ("vertical" == a.qb) {
        var f = a.Qa.offsetHeight,
        g = a.f().clientHeight - f,
        f = dz(a, b) - f / 2;
        return (d - c) * (g - f) / g + c
    }
    f = a.Qa.offsetWidth;
    g = a.f().clientWidth - f;
    f = dz(a, b) - f / 2;
    return (d - c) * f / g + c
}
function cz(a, b) {
    if (b == a.Qa) return a.La.O();
    if (b == a.rd) return a.La.O() + a.La.Kh();
    e(Error("Illegal thumb element. Neither minThumb nor maxThumb"))
}
function Zy(a, b) {
    var c = cz(a, a.Qa) + b,
    d = cz(a, a.rd) + b,
    c = Nb(c, a.wc(), a.Fc() - a.fo),
    d = Nb(d, a.wc() + a.fo, a.Fc());
    ez(a, c, d - c)
}
function Xy(a, b, c) {
    var d = j;
    b == a.rd && (c <= a.La.Fc() && c >= a.La.O() + a.fo) && (d = c - a.La.O());
    var f = d || a.La.Kh();
    b == a.Qa && (c >= a.wc() && c <= a.La.O() + f - a.fo) && (b = f - (c - a.La.O()), Ly(a.La, c) + Ly(a.La, b) == Ly(a.La, c + b) && (ez(a, c, b), d = j));
    d != j && a.La.Lo(d)
}
function ez(a, b, c) {
    a.wc() <= b && (b <= a.Fc() - c && a.fo <= c && c <= a.Fc() - b) && !(b == a.O() && c == a.Kh()) && (a.La.as = i, a.La.Lo(0), a.La.pa(b), a.La.Lo(c), a.La.as = l, a.mD())
}
r.wc = function() {
    return this.La.wc()
};
r.Fc = function() {
    return this.La.Fc()
};
function az(a, b) {
    return b <= a.La.O() + a.La.Kh() / 2 ? a.Qa: a.rd
}
r.mD = function() {
    Vy(this);
    Ty(this);
    this.dispatchEvent("change")
};
function Vy(a) {
    if (a.Qa && !a.yr) {
        var b = fz(a, cz(a, a.Qa)),
        c = fz(a, cz(a, a.rd));
        if ("vertical" == a.qb) a.Qa.style.top = b.y + "px",
        a.rd.style.top = c.y + "px",
        a.Gb && (b = gz(c.y, b.y, a.Qa.offsetHeight), a.Gb.style.top = b.offset + "px", a.Gb.style.height = b.size + "px");
        else {
            var d = a.Od && a.xd() ? "right": "left";
            a.Qa.style[d] = b.x + "px";
            a.rd.style[d] = c.x + "px";
            a.Gb && (b = gz(b.x, c.x, a.Qa.offsetWidth), a.Gb.style[d] = b.offset + "px", a.Gb.style.width = b.size + "px")
        }
    }
}
function gz(a, b, c) {
    var d = Math.ceil(c / 2);
    return {
        offset: a + d,
        size: Math.max(b - a + c - 2 * d, 0)
    }
}
function fz(a, b) {
    var c = new Ob;
    if (a.Qa) {
        var d = a.wc(),
        f = a.Fc(),
        f = b == d && d == f ? 0 : (b - d) / (f - d);
        "vertical" == a.qb ? (d = a.f().clientHeight - a.Qa.offsetHeight, f = Math.round(f * d), c.x = bz(a, a.Qa), c.y = d - f) : (d = Math.round(f * (a.f().clientWidth - a.Qa.offsetWidth)), c.x = d, c.y = a.Qa.offsetTop)
    }
    return c
}
function Yy(a, b) {
    b = Nb(b, a.wc(), a.Fc());
    a.yr && a.jq.stop(i);
    var c = new Yn,
    d, f = az(a, b),
    g = a.O(),
    k = a.Kh(),
    m = cz(a, f),
    q = fz(a, m);
    d = a.Zv();
    Math.abs(b - m) < d && (b = Nb(m + (b > m ? d: -d), a.wc(), a.Fc()));
    Xy(a, f, b);
    m = fz(a, cz(a, f));
    d = "vertical" == a.qb ? [bz(a, f), m.y] : [m.x, f.offsetTop];
    q = new nm(f, [q.x, q.y], d, 100);
    q.Bh(a.Od);
    c.add(q);
    if (a.Gb) {
        var q = fz(a, g),
        s = fz(a, g + k),
        k = q;
        d = s;
        f == a.Qa ? k = m: d = m;
        "vertical" == a.qb ? (f = gz(s.y, q.y, a.Qa.offsetHeight), k = gz(d.y, k.y, a.Qa.offsetHeight), m = new nm(a.Gb, [bz(a, a.Gb), f.offset], [bz(a, a.Gb), k.offset], 100), f = new qm(a.Gb, f.size, k.size, 100)) : (f = gz(q.x, s.x, a.Qa.offsetWidth), k = gz(k.x, d.x, a.Qa.offsetWidth), m = new nm(a.Gb, [f.offset, a.Gb.offsetTop], [k.offset, a.Gb.offsetTop], 100), f = new pm(a.Gb, f.size, k.size, 100));
        m.Bh(a.Od);
        f.Bh(a.Od);
        c.add(m);
        c.add(f)
    }
    a.FA && (g = a.FA.oX(g, b, 100), y.forEach(g,
    function(a) {
        c.add(a)
    }));
    a.jq = c;
    a.e().c(c, "end", a.rL);
    a.yr = i;
    c.play(l)
}
r.rL = function() {
    this.yr = l
};
r.Oo = function(a) {
    if (this.qb != a) {
        var b = this.C(this.qb),
        c = this.C(a);
        this.qb = a;
        this.f() && (E.kT(this.f(), b, c), a = this.Od && this.xd() ? "right": "left", this.Qa.style[a] = this.Qa.style.top = "", this.rd.style[a] = this.rd.style.top = "", this.Gb && (this.Gb.style[a] = this.Gb.style.top = "", this.Gb.style.width = this.Gb.style.height = ""), Vy(this))
    }
};
r.m = function() {
    My.g.m.call(this);
    this.Ph && this.Ph.w();
    delete this.Ph;
    this.jq && this.jq.w();
    delete this.jq;
    delete this.Qa;
    delete this.rd;
    this.Gb && delete this.Gb;
    this.La.w();
    delete this.La;
    this.fb && (this.fb.w(), delete this.fb);
    this.Aj && (this.Aj.w(), delete this.Aj);
    this.ee && (this.ee.w(), delete this.ee);
    this.Hf && (this.Hf.w(), delete this.Hf)
};
r.fp = 1;
r.Zv = function() {
    return this.La.Zv()
};
r.O = function() {
    return this.La.O()
};
r.pa = function(a) {
    Xy(this, this.Qa, a)
};
r.Kh = function() {
    return this.La.Kh()
};
r.Lo = function(a) {
    Xy(this, this.rd, this.La.O() + a)
};
r.n = function(a) {
    S(this.f(), a);
    a && Vy(this)
};
function Ty(a) {
    var b = a.f();
    if (b) {
        var c = a.wc();
        Qc(b, Wc.MI, c);
        c = a.Fc();
        Qc(b, Wc.LI, c);
        a = a.O();
        Qc(b, Wc.NI, a)
    }
}
function Wy(a, b) {
    b ? (a.Aj || (a.Aj = new Hy(a.f())), a.e().c(a.Aj, "mousewheel", a.jD)) : a.e().ya(a.Aj, "mousewheel", a.jD)
}
r.Pa = function(a) {
    if (this.Wb != a && this.dispatchEvent(a ? "enable": "disable")) this.Wb = a,
    Uy(this, a),
    a || this.yz(),
    E.enable(this.f(), "goog-slider-disabled", !a)
};
r.isEnabled = n("Wb");
function bz(a, b) {
    return a.Od ? wi(b) : b.offsetLeft
};
function hz(a) {
    My.call(this, a);
    this.La.Lo(0)
}
w(hz, My);
hz.prototype.C = function(a) {
    return "vertical" == a ? "goog-slider-vertical": "goog-slider-horizontal"
};
function iz(a) {
    this.options = $.extend({},
    this.V, a)
}
w(iz, T);
r = iz.prototype;
r.V = {
    BB: 310,
    CB: 310,
    ig: 250,
    jg: 250,
    ZO: 2,
    opacity: 0.25,
    qZ: "#eee"
};
r.Z = function(a) {
    iz.g.Z.call(this, a);
    this.src = this.d.src;
    this.options.src = this.src;
    this.options.qm = (this.options.BB - this.options.ig) / 2;
    this.options.om = (this.options.CB - this.options.jg) / 2;
    this.hq()
};
r.hq = function() {
    var a = this.options;
    this.cA = $(Mn('            <div class="avatar-editor-container" style="width:<%=containerWidth%>px">              <div class="avatar-editor-container-inner" style="height:<%=containerHeight%>px;">                <div class="avatar-editor-window" style="height:<%=windowHeight%>px;width:<%=windowWidth%>px;margin:<%=windowMarginTop%>px <%=windowMarginLeft%>px;">                  <div class="avatar-editor-window-shadow" style="height:<%=windowHeight%>px;width:<%=windowWidth%>px;"></div>                  <div class="avatar-editor-window-inner" style="width:<%=containerWidth%>px; height:<%=containerHeight%>px;margin:-<%=windowMarginTop%>px 0 0 -<%=windowMarginLeft%>px;">                    <img class="inner" title="拖动相片"/>                  </div>                </div>                <img class="outer" style="opacity:<%=opacity%>;"/>              </div>              <div class="goog-slider-wrap">                  <i class="zg-icon image-minus"></i>                  <i class="zg-icon image-plus"></i>                  <div class="goog-slider">                      <div class="line"></div>                      <div class="goog-slider-thumb"></div>                  </div>              </div>            </div>', {
        containerWidth: a.CB,
        containerHeight: a.BB,
        windowHeight: a.ig,
        windowWidth: a.jg,
        windowMarginTop: a.qm,
        windowMarginLeft: a.om,
        src: a.src,
        opacity: a.opacity
    }));
    this.Ub = this.cA[0];
    this.cA.insertBefore(this.d);
    S(this.d, l);
    this.DK = I("avatar-editor-container-inner", this.Ub);
    this.mr = I("outer", this.Ub);
    this.Iw = I("inner", this.Ub);
    this.tm = $(this.mr);
    this.Kt = $(this.Iw);
    this.GD = 0;
    this.tm.load(u(this.CH, this));
    this.Kt.load(u(this.CH, this));
    this.Iw.src = this.mr.src = this.options.src;
    this.WS = I("goog-slider", this.Ub)
};
r.p = function() {
    this.rz = new hz;
    this.rz.h(this.WS);
    this.e().c(this.DK, ["mousedown", "touchstart"],
    function(a) {
        var b = new Ok(this.Ub);
        b.addEventListener("drag", u(function(a) {
            var b = this.zoom;
            this.Ee = {
                lp: this.options.jg / b,
                xn: this.options.ig / b,
                x: (this.options.om - (this.PD.left + (a.clientX - this.dt))) / b,
                y: (this.options.qm - (this.PD.top + (a.clientY - this.et))) / b
            };
            jz(this)
        },
        this));
        b.addEventListener("end", u(function() {
            b.w()
        },
        this));
        b.em(a);
        this.em(a)
    });
    this.e().c(this.Ub, ["touchmove"],
    function(a) {
        a.stopPropagation();
        a.preventDefault()
    });
    this.e().c(this.rz, "change",
    function() {
        var a = this.rz.O(),
        b = this.cI;
        kz(this, (this.sU - b) * a / 100 + b)
    })
};
function kz(a, b) {
    a.iY = a.zoom;
    a.zoom = b;
    lz(a, a.Ee.lp / 2 + a.Ee.x, a.Ee.xn / 2 + a.Ee.y)
}
function lz(a, b, c) {
    var d = a.zoom;
    a.Ee = {
        lp: a.options.jg / d,
        xn: a.options.ig / d,
        x: b - a.options.jg / d / 2,
        y: c - a.options.ig / d / 2
    };
    jz(a)
}
r.CH = function() {
    this.VN || (this.Iw.complete && this.mr.complete ? this.k() : (this.GD++, 2 <= this.GD && this.k()))
};
r.k = function() {
    this.lr = this.tm.width();
    this.kr = this.tm.height();
    var a = this.options.jg / this.lr,
    b = this.options.ig / this.kr;
    this.cI = a = b > a ? b: a;
    this.sU = this.cI * this.options.ZO;
    this.Ee = {
        xn: this.options.jg / a,
        lp: this.options.ig / a,
        x: 0,
        y: 0
    };
    kz(this, a);
    lz(this, this.lr / 2, this.kr / 2);
    this.VN = i
};
r.em = function(a) {
    this.dt = a.clientX;
    this.et = a.clientY;
    this.PD = this.Kt.position();
    this.BY = this.tm.position()
};
function jz(a) {
    var b = a.zoom,
    c = Nb(a.options.om - a.Ee.x * b, a.options.jg + a.options.om - a.lr * b, a.options.om),
    d = Nb(a.options.qm - a.Ee.y * b, a.options.ig + a.options.qm - a.kr * b, a.options.qm),
    f = {
        width: b * a.lr,
        height: b * a.kr,
        left: c,
        top: d
    };
    a.tm.css(f);
    a.Kt.css(f);
    a.Ee.x = (a.options.om - c) / b;
    a.Ee.y = (a.options.qm - d) / b
}
r.support = function() {
    return "getContext" in document.createElement("canvas") && l
};
function mz(a) {
    M.call(this);
    this.Rt = a || nz
}
w(mz, T);
var nz = "people";
r = mz.prototype;
r.Z = function(a) {
    this.d = a;
    this.j()
};
r.j = function() {
    this.sk = $(Mn('            <form target="av_up_frame" style="display:none;" method="post" enctype="multipart/form-data" action="<%=uploadAction%>">                <label for="avt_file"></label>                <input type="file" name="picture" id="avt_file" />                <input type="hidden" name="handle_mode" value="server1" />            </form>', {
        uploadAction: "/upload"
    }));
    this.fI = $('<iframe id="av_up_frame" src="about:_blank" name="av_up_frame" style="position: absolute; height: 0px; width: 0px; left: -9000px;"></iframe>');
    this.fI.appendTo(document.body);
    this.input = this.sk.find("input[type=file]")[0]; ! $.browser.msie && !$.browser.safari && !Ak.pb && !Ak.dY ? (this.sk.insertAfter(this.d), $(this.d).click($.proxy(function() {
        $(this.input).trigger("click")
    },
    this))) : (this.sk.find("label").html($(this.d).html()), this.d.innerHTML = "", $(this.d).append(this.sk), this.sk.addClass("avatar-editor-form-ie"))
};
r.p = function() {
    mz.g.p.call(this);
    this.e().c(this.input, "change", this.hs)
};
r.hs = function(a) {
    a = this.input = a.target;
    this.rl = this.Hw = this.kj = "";
    if (this.Tc) this.Tc.xa();
    else {
        this.Tc = new Nl(j, l);
        this.Tc.Ma(this.Rt === nz ? "修改头像": "修改话题图片");
        var b = rl.nA,
        c = rl.xA,
        d = new jl;
        d.set(b, "取消", l, i).set(c, "确定", i);
        nl(this.Tc, d);
        this.e().c(this.Tc, ol,
        function(a) {
            this.Rl();
            if ("yes" === a.key) {
                if (this.bn.support()) {
                    var b = this.bn,
                    a = $("<canvas>", {
                        width: b.options.jg,
                        height: b.options.ig
                    }),
                    c = a[0];
                    $(document.body).append(c);
                    var d = a[0].getContext("2d"),
                    q = b.Ee;
                    d.drawImage(b.mr, q.x, q.y, q.lp, q.xn, 0, 0, b.options.jg, b.options.ig);
                    b = c.toDataURL("image/png");
                    a.remove();
                    a = b
                } else a = this.bn.Ee;
                this.kj = a;
                oz(this);
                this.Tc.n(l);
                return l
            }
        })
    }
    c = this.Tc.R();
    b = $("<div class='new-avatar-editor-loading'><div><span></span></div><div>正在上传...</div></div>");
    c = $(c);
    c.html("");
    c.append(b);
    this.Tc.n(i);
    E.add(this.Tc.d, "avatar-edit-dialog");
    window.FileReader && (a.files && a.files[0]) && (this.file = a = a.files[0], b = new window.FileReader, b.onload = u(function(a) {
        this.rl = a.target.result;
        this.ro()
    },
    this), b.readAsDataURL(a));
    this.e().c(U, "iframe_data",
    function(a) { (a = a.lb) && !a.r ? (this.rl = a.data.pic_url, this.Hw = a.data.hashval, window.FileReader || this.ro(), oz(this)) : X(a.msg);
        this.Rl()
    });
    this.sk[0].submit()
};
r.ro = function() {
    var a = this.Tc.R();
    this.Gw = new Image;
    this.Gw.src = this.rl;
    a = $(a);
    a.html("");
    a.append(this.Gw);
    this.bn = new iz;
    this.bn.h(this.Gw)
};
r.Rl = function() {
    if (!$.browser.msie) {
        var a = $(this.input);
        this.input = a.val("").clone(i)[0];
        a.replaceWith(this.input);
        this.e().c(this.input, "change", this.hs);
        $(this.d).unbind("click").click($.proxy(function() {
            $(this.input).trigger("click")
        },
        this))
    }
};
function oz(a) {
    if (a.Hw && a.kj) {
        a.dispatchEvent("beforepost");
        var b = {
            type: a.Rt === nz ? "1": "2",
            dest_id: a.Rt === nz ? V[3] : Dk[0][3],
            return_size: "l"
        },
        b = a.bn.support() ? $.extend(b, {
            handle_mode: "client",
            pic_body: a.kj.replace(/data\:image\/\w{3,4};base64,/, ""),
            fileName: a.file.name
        }) : $.extend(b, {
            handle_mode: "server2",
            x: parseInt(a.kj.x, 10),
            y: parseInt(a.kj.y, 10),
            height: parseInt(a.kj.xn, 10),
            width: parseInt(a.kj.lp, 10),
            hashval: a.Hw
        });
        $.post("/upload", b, $.proxy(function(a) {
            a && !a.r ? this.data = a.msg: X(a.msg);
            this.dispatchEvent({
                type: "success",
                src: this.data
            });
            this.Tc.n(l)
        },
        a), "json")
    }
}
r.getData = function() {
    return ! this.data ? j: /(\w*)_\w/.exec(this.data)[1]
};
function pz() {}
w(pz, T);
r = pz.prototype;
r.Z = function(a) {
    pz.g.Z.call(this, a);
    if (a = I("profile-edit-avatar-btn")) this.Hm = new mz,
    this.Hm.h(a),
    this.e().c(this.Hm, "beforepost",
    function() {
        $(".zm-avatar-editor-preview").parent().append($("<div class='avatar-edit-preview-loading'><span></span></div>"))
    }),
    this.e().c(this.Hm, "success",
    function(a) {
        $("img.zm-avatar-editor-preview").attr("src", a.src);
        $(".avatar-edit-preview-loading").remove()
    });
    this.u = [];
    var b = this;
    $(".editable-group", this.d).each(function() {
        var a = new Ax;
        b.u.push(a);
        a.h(this)
    });
    a = H("zm-profile-edit-submit");
    this.e().c(a, "click", this.to); (new Ey).h(this.d);
    $(this.d).on("change", "input, textarea, select",
    function() {
        b.Cq()
    })
};
r.p = function() {
    pz.g.p.call(this);
    var a = H("zm-profile-progress-anim"),
    b = new qz;
    b.addEventListener("update",
    function() {
        var c = 100 * b.O() | 0;
        10 > c && (c = 10);
        a.style.width = a.innerHTML = c + "%"
    });
    y.forEach(this.u,
    function(a, c) {
        b.watch({
            name: "name" + c,
            target: a,
            Dh: ["add", "remove"],
            vh: function() {
                return !! a.ld.children().length
            }
        })
    },
    this);
    var c = this.d,
    d = H("zm-profile-edit-male"),
    f = H("zm-profile-edit-female"),
    g = H("zm-profile-edit-description"),
    k = $(".business-selection select")[0],
    m = H("zm-profile-edit-expert-disable");
    b.watch({
        name: "expert_progress",
        target: H("zm-profile-edit-expert-enable"),
        Dh: ["change"],
        vh: function() {
            return j !== Cy(c, "enable_expert")
        }
    }).watch({
        name: "expert_progress",
        target: m,
        Dh: ["change"],
        vh: function() {
            return j !== Cy(c, "enable_expert")
        }
    }).watch({
        name: "gender_progress",
        target: d,
        Dh: ["change"],
        vh: function() {
            return j !== Cy(c, "gender")
        }
    }).watch({
        name: "gender_progress",
        target: f,
        Dh: ["change"],
        vh: function() {
            return j !== Cy(c, "gender")
        }
    }).watch({
        name: "desc_progress",
        target: g,
        Dh: ["blur"],
        vh: function() {
            return !! Oa(g.value)
        }
    }).watch({
        name: "business_progress",
        target: g,
        Dh: ["blur"],
        vh: function() {
            return !! Oa(g.value)
        }
    }).watch({
        name: "headline_progress",
        target: k,
        Dh: ["blur"],
        vh: function() {
            return !! Oa(k.value)
        }
    })
};
r.Cq = function() {
    window.onbeforeunload = u(p("你的更改还未保存，确认离开该页面吗？"), this)
};
r.mv = function() {
    window.onbeforeunload = j
};
r.to = function() {
    function a(a) {
        X(a)
    }
    var b = $("#zm-profile-edit-male").is(":checked") ? 1 : 0,
    c = $("#zm-profile-edit-headline").val(),
    d = $("#zm-profile-edit-description").val(),
    f = $(".business-selection select").val(),
    g = [];
    $("#zm-profile-edit-loc-container").children().each(function() {
        g.push($(this).data("title"))
    });
    var k = [];
    $("#zm-profile-edit-co-container").children().each(function() {
        var a = $(this);
        k.push([a.data("title"), a.data("sub-title") || ""])
    });
    var m = [];
    $("#zm-profile-edit-edu-container").children().each(function() {
        var a = $(this);
        m.push([a.data("title"), a.data("sub-title") || ""])
    });
    var q = $("#zm-profile-edit-weibo-enable").is(":checked") ? 1 : 0,
    s = $("#zm-profile-edit-expert-enable").is(":checked") ? 1 : 0,
    b = F.filter({
        avatar_path: this.Hm ? this.Hm.getData() : j,
        gender: b,
        headline: c,
        description: d,
        location: g,
        business: f,
        employment: k,
        education: m,
        enable_weibo: q,
        enable_expert: s
    },
    na),
    x = u(function() {
        this.mv();
        window.location.href = "/people/" + V[1] + "/about"
    },
    this),
    c = new Y(i);
    c.addEventListener("complete",
    function() {
        var b;
        try {
            b = R(this)
        } catch(c) {}
        b && !b.r && ra(x) ? x.call(this, b) : ra(a) && X(b.msg && b.msg[0][1])
    });
    c.ajax("/people/edit", "data=" + encodeURIComponent(Cd(b)))
};
function qz() {
    this.ky = {}
}
w(qz, zd);
qz.prototype.update = function(a, b) {
    this.ky[a] = b;
    this.dispatchEvent({
        type: "update"
    });
    return this
};
qz.prototype.watch = function(a) {
    var b = u(function() {
        this.update(a.name, a.vh())
    },
    this);
    N(a.target, a.Dh, b);
    b();
    return this
};
qz.prototype.O = function() {
    var a = F.Ea(this.ky);
    return a.length && y.filter(a, Boolean).length / a.length
};
function rz() {
    T.call(this)
}
w(rz, T);
rz.prototype.Z = function(a) {
    rz.g.Z.call(this, a);
    this.D = $(a);
    this.D.on("click touchend", $.proxy(this.S, this));
    if (Ak.pb || Ln()) {
        var b = l;
        this.D.on("touchmove",
        function() {
            b = i
        });
        this.D.on("touchend",
        function(a) {
            if (b) b = l;
            else if (a = $(a.target), !a.parents(".description-edit")[0] && (!a.parents("[name]")[0] && !a.attr("name")) && (a = a.attr("data-href") || a.parents(".item").attr("data-href"))) window.location.href = a
        })
    }
};
function sz(a, b, c) {
    if (!Ak.pb || Ln()) a = $(".item", a.D).index(b),
    b.siblings().eq(a - a % 2).height(c ? "auto": b.height())
}
rz.prototype.S = function(a) {
    $(a.currentTarget);
    var b = $(a.target),
    c = b.attr("name") || b.parent().attr("name"),
    d = b.hasClass("item") ? b: b.parents(".item");
    if ("edit" === c) b.parents(".description").hide().siblings(".description-edit").show().find("input").focus().parents(".item").addClass("editing").parents(".skilled-topics").addClass("editing"),
    sz(this, d),
    a.stopPropagation(),
    a.preventDefault();
    else if ("cancel" === c) b.parents(".description-edit").hide().siblings(".description").show().parents(".item").removeClass("editing").parents(".skilled-topics").removeClass("editing"),
    sz(this, d, i),
    a.stopPropagation(),
    a.preventDefault();
    else if ("save" === c) {
        var f = new Y(i);
        this.e().c(f, "success",
        function() {
            var a = R(f);
            a.r ? X(a.msg) : (b.parents(".description-edit").hide().siblings(".description").show().children(".des").text(a.msg).siblings(".edit").addClass("zu-edit-button").children(".edit-msg").html("修改").parents(".item").removeClass("editing").parents(".skilled-topics").removeClass("editing"), sz(this, d, i))
        });
        a.stopPropagation();
        a.preventDefault();
        f.ajax("/topic/bio/update", "tid=" + b.parents(".item").data("id") + "&bio=" + b.parent().siblings("input").val(), "POST")
    } else if (0 <= y.indexOf(["input", "INPUT"], b[0].tagName)) a.stopPropagation(),
    a.preventDefault();
    else if (!Ak.pb && (!Ln() && !d.hasClass("editing")) && (a = b.attr("data-href") || b.parents(".item").attr("data-href"))) location.href = a
};
function tz() {}
w(tz, T);
tz.prototype.Z = function(a) {
    tz.g.Z.call(this);
    if (a && (this.D = $(a), $(".editable-group", this.D).each(function() { (new uz).h(this)
    }), (a = H("profile-header-description-input")) && new Xo(a), a = I("zm-entry-head-avatar-edit-button"))) {
        var b = new mz(nz);
        b.h(a);
        this.e().c(b, "beforepost",
        function() {
            $(".zm-avatar-editor-preview").parent().append($("<div class='avatar-edit-preview-loading'><span></span></div>"))
        });
        this.e().c(b, "success",
        function(a) {
            a.src && (I("zm-avatar-editor-preview").src = a.src, Om("ProfileHeaderV2", "save", {
                data: {
                    avatar_path: b.getData()
                }
            },
            function() {
                $(".avatar-edit-preview-loading").remove()
            }))
        })
    }
};
function uz() {}
w(uz, T);
r = uz.prototype;
r.Z = function(a) {
    uz.g.Z.call(this);
    this.D = $(a);
    this.ge = $(".info-wrap", this.D);
    this.Ed = $(".edit-wrap", this.D);
    this.kA = $(".title", this.ge);
    this.tU = $("input", this.Ed)
};
r.p = function() {
    uz.g.p.call(this);
    this.D.on("click", "[name='edit']", $.proxy(function() {
        this.D.addClass("editing");
        var a = this.Ed.find("input").get(0);
        a ? a.focus() : (a = this.Ed.find("textarea").get(0)) && a.focus()
    },
    this));
    var a = this;
    this.xp = [];
    $("input[type=text]", this.D).each(function() {
        var b = new Bx("/topic/autocomplete", this, $(this).parents(".topic-input-wrap")[0]);
        a.xp.push(b)
    });
    this.Ed.on("keydown", "input",
    function(a) {
        13 === a.keyCode && setTimeout(function() {
            var b = $(a.target),
            f = b.parents(".edit-wrap").children().index(b.parent()),
            g = b.parents(".edit-wrap").find("input, select").get(f + 1),
            f = b.parents(".edit-wrap").find("input, select").get(f - 1);
            b.val() && (g ? g.focus() : f && !$(f).val() && f.focus())
        })
    });
    this.Ed.on("click", "[name='cancel'], [name='save']", $.proxy(function(a) {
        a = a.target.name;
        "cancel" === a ? this.cancel() : "save" === a && this.save()
    },
    this));
    var b = $(".fold-wrap");
    b.click(function(a) {
        "fold" === a.target.name ? b.addClass("fold") : "unfold" === a.target.name && b.removeClass("fold")
    })
};
r.save = function() {
    var a = this.D.data("name");
    if ("location" === a) {
        var a = this.Ed.find("input.location"),
        b = this.Ed.find("select"),
        c = this.Ed.find("input.male").is(":checked") ? 1 : 0;
        Om("ProfileHeaderV2", "save", {
            data: {
                location: [a.val()],
                business: b.val(),
                gender: c
            }
        },
        function(a) {
            a = a.msg;
            a.location[0].html || (a.location[0].html = "<a href='javascript:;' class='zg-link-litblue-normal' name='edit'>填写居住地</a>");
            a.business.html || (a.business.html = "<a href='javascript:;' class='zg-link-litblue-normal' name='edit'>填写行业</a>");
            this.ge.find("span.location").attr("title", a.location[0].text).html(a.location[0].html);
            this.ge.find("span.business").attr("title", a.business.text).html(a.business.html);
            this.ge.find("i.gender").removeClass("male female").addClass(1 === parseInt(a.gender, 10) ? "male": "female");
            this.cancel()
        },
        this.Zh, this)
    } else "employment" === a ? (b = this.Ed.find("input.employment"), a = this.Ed.find("input.position"), b = b.val(), a = a.val(), Om("ProfileHeaderV2", "save", {
        data: {
            employment: [[b, a]]
        }
    },
    function(a) {
        a = a.msg; ! a.employment[0][0].text && !a.employment[0][1].text ? this.D.addClass("empty") : this.D.removeClass("empty");
        a.employment[0][0].html || (a.employment[0][0].html = "<a href='javascript:;' class='zg-link-litblue-normal' name='edit'>填写公司信息</a>");
        a.employment[0][1].html || (a.employment[0][1].html = "<a href='javascript:;' class='zg-link-litblue-normal' name='edit'>填写职位</a>");
        this.ge.find(".employment").attr("title", a.employment[0][0].text).html(a.employment[0][0].html);
        this.ge.find(".position").attr("title", a.employment[0][1].text).html(a.employment[0][1].html);
        this.cancel()
    },
    this.Zh, this)) : "education" === a ? (b = [this.Ed.find("input.education"), this.Ed.find("input.education-extra")], a = b[0].val(), b = b[1].val(), Om("ProfileHeaderV2", "save", {
        data: {
            education: [[a, b]]
        }
    },
    function(a) {
        a = a.msg; ! a.education[0][0].text && !a.education[0][1].text ? this.D.addClass("empty") : this.D.removeClass("empty");
        a.education[0][0].html || (a.education[0][0].html = "<a href='javascript:;' class='zg-link-litblue-normal' name='edit'>填写学校信息</a>");
        a.education[0][1].html || (a.education[0][1].html = "<a href='javascript:;' class='zg-link-litblue-normal' name='edit'>填写专业</a>");
        this.ge.find(".education").attr("title", a.education[0][0].text).html(a.education[0][0].html);
        this.ge.find(".education-extra").attr("title", a.education[0][1].text).html(a.education[0][1].html);
        this.cancel()
    },
    this.Zh, this)) : "description" === a && (a = this.Ed.find("textarea.description"), Om("ProfileHeaderV2", "save", {
        data: {
            description: a.val()
        }
    },
    function(a) {
        a = a.msg;
        a.description.text ? this.D.removeClass("empty") : (a.description.fold_html = "<a href='javascript:;' class='zg-link-litblue-normal' name='edit'>填写个人简介</a>", a.description.unfold_html = "<a href='javascript:;' class='zg-link-litblue-normal' name='edit'>填写个人简介</a>", this.D.addClass("empty"));
        this.ge.find(".fold-item .content").empty().html(a.description.fold_html);
        this.ge.find(".unfold-item .content").html(a.description.unfold_html);
        a.description.shortened ? this.ge.removeClass("disable-fold") : this.ge.addClass("disable-fold");
        this.cancel()
    },
    this.Zh, this))
};
r.Zh = function(a) {
    X(a.msg[0][1])
};
r.cancel = function() {
    this.D.removeClass("editing")
};
function vz() {
    M.call(this);
    this.ef = "zm-item";
    this.cX = "zm-item-top-btn";
    this.pS = i
}
w(vz, ao);
r = vz.prototype;
r.k = function(a) {
    this.Ub = a;
    this.e().c(a, "click", this.S);
    this.refresh()
};
r.pc = ca("ef");
r.S = function(a) {
    if (a.target) {
        var b = zn(this.Ub, a.target);
        b && (this.type = b.getAttribute("data-type"), this.id = b.getAttribute("data-id"), this.action = b.name, this.item = Lc(a.target, this.ef), this.type && (this.id && this.action && this.item) && (this.aI || (this.aI = i, this.xhr = new Y(i), this.e().c(this.xhr, "complete", this.Xd), this.xhr.ajax("/people/" + ("top" === this.action ? "pin": "unpin") + "_" + this.type, this.type + "_id=" + this.id, "POST")), this.og = b))
    }
};
r.Xd = function() {
    if ("cancel-top" === this.action) hn(this.item, i);
    else if ("top" === this.action) {
        var a = Xb(this.ef, this.Ub);
        this.EY = fg(this.item).y;
        a && 2 <= a.length && lc(L(this.item), I(this.ef, this.Ub));
        this.scroll();
        un(this.item);
        S(I("zm-item-top-btn-top", this.item), l);
        S(I("zm-item-top-btn-cancel", this.item), i);
        this.refresh()
    }
    this.aI = l
};
r.scroll = function() {
    if (this.pS) {
        var a = I("zm-profile-section-wrap"),
        b = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        a && (0 > fg(a).y - b && a.scrollIntoView) && a.scrollIntoView()
    }
};
r.refresh = function() {
    var a = Xb(this.ef, this.Ub);
    a && 0 < a.length && y.forEach(a, u(function(a, c) {
        if (0 !== c) {
            var d = I("zm-item-top-btn-top", a);
            d && S(d, i)
        }
    },
    this))
};
function wz(a, b) {
    M.call(this);
    this.z = j;
    this.xv = a;
    this.entryType = b;
    this.url = "people" === b ? "/people/report": "favlist" === b ? "/collection/report": "/question/report"
}
w(wz, ao);
r = wz.prototype;
r.j = function() {
    this.d = K("div", j, [K("div", "zg-section", "请说明举报原因"), K("div", "zg-form-text-input", this.field = K("textarea", {
        style: "width:100%"
    })), this.qg = K("div", "zm-command", [K("a", {
        href: "javascript:;",
        "class": "zm-command-cancel",
        name: "cancel"
    },
    "取消"), K("a", {
        href: "javascript:;",
        "class": "zg-btn-blue",
        name: "send"
    },
    "发送")])]);
    this.z = new Nl(j, l);
    var a = "举报";
    switch (this.entryType) {
    case "favlist":
        a += "收藏夹";
        break;
    case "question":
        a += "问题";
        break;
    case "people":
        a += "用户"
    }
    this.z.Ma(a);
    nl(this.z, j);
    this.z.R().appendChild(this.d)
};
r.k = function() {
    this.ac || (this.ac = i, this.j(), this.ua())
};
r.ua = function() {
    this.e().c(this.qg, "click", this.S)
};
r.S = function(a) {
    if ((a = this.Nd(a.target)) && a.name) if ("send" === a.name) {
        if (a = pn(this.field.value)) this.z.n(l),
        X("发送成功，我们会尽快处理"),
        this.field.value = "",
        this.xhr = new Y(i),
        this.xhr.ajax(this.url, "id=" + this.xv + "&content=" + encodeURIComponent(Ra(a))),
        U.Q({
            type: "ga_click_report",
            data: {
                type: this.entryType
            }
        })
    } else "cancel" === a.name && this.z.n(l)
};
r.show = function() {
    this.k();
    this.z.n(i);
    U.Q({
        type: "ga_click_report_box",
        data: {
            type: this.entryType
        }
    })
};
function xz() {
    T.call(this)
}
w(xz, T);
r = xz.prototype;
r.k = function() {
    nw.aa(this);
    this.h(document.body)
};
r.p = function() {
    xz.g.p.call(this);
    var a = I("zm-profile-header-operation");
    a && (new Kw).h(a); (a = I("zm-profile-header")) && (new tz).h(a); (a = H("zh-profile-ask-wrap")) && (new lu(a, "question", ["zg-follow", "zg-unfollow"], ["关注问题", "取消关注"])).k(); (a = H("zh-profile-activity-wrap")) && this.e().c(a, "click",
    function(a) {
        if ((a = a.target) && "focus" === a.name) {
            var b = a.getAttribute("data-type");
            Dn(a, b, j, ["zm-profile-follow-link-gray", "zm-profile-unfollow-link-gray"])
        }
    }); (this.Kv = a = H("zh-profile-page-force-to-rename")) && this.e().c(a, "click", this.CT);
    this.Tw();
    if (a = H("zh-profile-activity-page-list")) a = new uy(a, "/people/" + Ek[1] + "/activities", i),
    this.aa(a),
    this.e().c(a, "click!",
    function(a) {
        "comment" === a.namespace && a.hd.fill("category", "profile").fill("label", "profile_feed")
    }),
    a.pc("zm-profile-section-item"),
    a.Bt = l,
    a.pi = l,
    a.k(); (a = I("zm-profile-fav-wrap")) && this.e().c(a, "click", this.zL); (a = H("zm-profile-details-editform")) && (new pz).h(a);
    if (a = I("zm-profile-answer-sort")) this.qh = new ai,
    this.qh.za(this.AJ = new Eh("按时间排序")),
    this.qh.za(this.BJ = new Eh("按投票排序")),
    this.qh.za(this.zJ = new Eh("问" + V[0] + "的问题")),
    this.qh.N(a),
    this.qh.n(l),
    this.e().c(a, "click",
    function(a) {
        this.qh.n(i);
        a.stopPropagation();
        Q(this.e(), document, "click",
        function() {
            this.qh.n(l)
        })
    }),
    this.e().c(this.qh, "action", this.fN); (a = H("zh-profile-edit-expert")) && (new yz).h(a);
    var b = I("profile-expert-tip");
    b && this.e().c(b, "click",
    function(a) {
        var c = a.target; ("enable" === c.name || "close" === c.name) && Om("ProfileExpertTopicsV2", c.name, j,
        function() {
            "enable" === c.name ? location.reload() : hn(b, i)
        })
    });
    $(".zm-profile-section-wrap.skilled-topics").each(function() { (new rz).h(this)
    });
    $(".zm-profile-module.skilled-topics").each(function() { (new rz).h(this)
    });
    $(".zm-profile-module.active-topics").each(function() { (new rz).h(this)
    });
    if (a = H("zh-profile-ask-list")) if (this.la = new Pw(a, j, "question", j, i), this.la.pc("zm-profile-section-item"), this.la.k(), a = I("zm-profile-section-list")) {
        var c = new vz;
        c.pc("zm-profile-section-item");
        var d = this.la;
        c.e().c(d, "afterload", c.refresh);
        c.k(a)
    }
    if (a = $("#zh-profile-answer-list").children().get(0)) {
        c = new kw({
            items: ">div"
        });
        c.h(a);
        var f = $("#zh-load-more");
        c.on("action",
        function(a) {
            a.data.index >= a.data.size && f.is(":visible") && f[0].click()
        });
        var g = new yy;
        this.aa(g);
        this.e().c(g, "click!",
        function(a) {
            "comment" === a.namespace && a.hd.fill("category", "profile").fill("label", "profile_answers_list")
        });
        g.Qw = function(a) {
            var b = new ty;
            g.aa(b);
            b.h(a)
        };
        g.h(a);
        if (a = I("zm-profile-section-list")) c = new vz,
        d = zy,
        c.e().c(g, d, c.refresh),
        c.k(a)
    }
    if (a = H("zh-profile-log-list")) a = new Pw(a, j, "question", j, i),
    a.ae(Jw),
    a.k();
    if (a = H("zh-profile-topic-list")) if (a = new Lw(a), a.pc("zm-profile-section-item"), a.on("itemcreated",
    function(a) {
        var a = a.data.item,
        b = a.getAttribute("data-tid").split("-")[1]; (new mu(a, "topic")).k();
        if (V[3] === Ek[3]) {
            var c = new iv(i, "/topic/bio/update", "bio");
            c.At = i;
            c.zc = ["tid=" + b];
            c.Lc = '<a href="javascript:;" name="edit">添加你在该话题的经验</a>';
            c.h(a)
        }
    }), a.k(), c = I("zm-profile-section-list")) d = new vz,
    d.pc("zm-profile-section-item"),
    d.e().c(a, "afterload", d.refresh),
    d.k(c);
    if (c = H("zh-profile-follows-list")) a = (a = I("zh-general-list", c)) || c,
    c = new yy,
    c.yb = "zm-profile-section-item",
    c.cg("people", ["zg-btn-follow", "zg-btn-unfollow"], i),
    c.h(a);
    if (a = H("zh-profile-follows-list-old")) a = new Pw(a, j, "people", ["zg-btn-follow", "zg-btn-unfollow"]),
    a.pc("zm-profile-section-item"),
    a.k();
    if (a = H("zh-profile-fav-list")) if (a = I("zh-general-list", a)) c = new yy,
    c.yb = "zm-profile-section-item",
    c.cg("favlist", ["zg-btn-follow", "zg-btn-unfollow"], i),
    c.h(a);
    this.Kn(); - 1 < location.search.indexOf("clean-followers-noti=1") && (new Y(i)).ajax("/notification/clear", "no_refresh_content=true&type=follow");
    if (a = H("zh-profile-followed-questions")) if (a = I("zh-general-list", a)) c = new yy,
    c.cg("question"),
    c.yb = "zm-profile-section-item",
    c.h(a)
};
r.CT = function() {
    Ol("确定", "确定要强制此用户改名吗？",
    function(a) {
        a && (H("realname_form").submit(), this.Kv.innerHTML = "已发送", E.add(this.Kv, "zg-gray"), ud(this.Kv))
    },
    this)
};
r.Kn = function() {
    var a = H("zh-profile-following-topic");
    a && (new lu(a, "topic", ["zm-profile-follow-link-gray", "zm-profile-unfollow-link-gray"])).k();
    this.pj();
    var b = H("zm-profile-header-pm-btn");
    b && N(b, "click",
    function(a) {
        a.preventDefault();
        a = new jq(j, i);
        a.show();
        nq(a, Ek[3], Ek[0], i);
        lq(a, b.href);
        a.vb.focus()
    }); (a = H("zh-profile-cancel-block")) && this.e().c(a, "click", this.mF); (a = H("zh-report-people")) && this.e().c(a, "click", this.oG); (a = H("zh-profile-search-query-mirro")) && new Zp(a, a.getAttribute("placeholder"))
};
r.mF = function() {
    Ol("确定取消屏蔽？", "取消屏蔽后，对方将可以关注你、向你发私信、评论你的回答、使用「@」提及你，邀请你回答问题。",
    function(a) {
        a && zz(this, l)
    },
    this)
};
r.Fk = function() {
    Q(this.e(), document, "click",
    function() {
        this.bb.n(l)
    })
};
r.pj = function() {
    var a = H("profile-side-op");
    a && this.e().c(a, "click", this.fj)
};
r.fN = function(a) {
    var b = "";
    a.target === this.AJ ? b = "time": a.target === this.BJ ? b = "vote": a.target === this.zJ && (b = "ask");
    location.href = "/people/" + V[1] + "/answers?sort=" + b
};
r.fj = function(a) {
    a = a.target.name;
    "block" === a ? Ol("确定要屏蔽该用户？", "屏蔽用户后，对方将不能关注你、向你发私信、评论你的实名回答、使用「@」提及你，邀请你回答问题，但仍然可以查看你的公开信息。",
    function(a) {
        a && zz(this, i)
    },
    this) : "report" === a ? this.oG() : "cancel-block" === a && this.mF()
};
r.oG = function() {
    this.$f || (this.$f = new wz(Ek[3], "people"));
    this.$f.show()
};
function zz(a, b) {
    var c = new Y(i);
    Q(a.e(), c, "complete",
    function() {
        window.location.reload()
    });
    c.ajax("/people/" + Ek[1] + "/block", "action=" + (b ? "add": "cancel"))
}
r.zL = function(a) {
    if (a && a.target && (a = zn(this.d, a.target))) {
        var b = I("zm-profile-fav-item-title", a),
        c = I("zm-profile-fav-item-des", a);
        b && c && "fav-edit" === a.name && (b = b.innerHTML, c = c.innerHTML || "", a = [Number(a.getAttribute("data-id")), Number(a.getAttribute("data-public"))], tx(px(), b, c, a))
    }
};
r.Tw = function() {
    if (this.Oy = H("zh-profile-search-form")) {
        var a = H("zh-profile-search-type");
        a && this.e().c(a, "click", this.tQ);
        this.Vj = this.Oy.getAttribute("data_type");
        this.e().c(this.Oy, "submit", this.search);
        N(window, "popstate",
        function(a) {
            var a = a.state,
            b;
            a && a.ZF && (b = H("zh-profile-search-query"), b.value = decodeURIComponent(a.ZF), Az(this, a.type), this.search(h, l), b.focus())
        },
        l, this);
        var a = (new Fp(location)).Nb().get("pq"),
        b = (new Fp(location)).Nb().get("type");
        b || (b = "all");
        if (a && b) {
            var c = H("zh-profile-search-info");
            c && S(c, i);
            Az(this, b);
            H("zh-profile-search-query").value = a;
            this.search(h, h, l)
        }
    }
};
r.tQ = function(a) {
    if ((a = a.target) && a.name) Az(this, a.name),
    this.search()
};
function Az(a, b) {
    var c = Xb("zm-profile-search-type-item");
    if (c) for (var d = 0; d < c.length; d++) E.remove(c[d], "current"),
    c[d].name === b && E.add(c[d], "current");
    a.Vj = b
}
r.search = function(a, b, c) {
    this.$d = H("zh-profile-search-query").value;
    this.Ul = "/people/" + H("zh-profile-search-form").getAttribute("data_url") + "/search";
    if (this.$d) {
        b === h && (b = i);
        c === h && (c = i);
        if (window.history.pushState) {
            if (this.Py) return;
            a && a.preventDefault();
            this.Vl = new Y(i);
            this.Py = i;
            this.e().c(this.Vl, "complete", this.$H);
            b && window.history.pushState({
                ZF: encodeURIComponent(this.$d),
                type: this.Vj
            },
            "", "?pq=" + encodeURIComponent(this.$d) + "&type=" + this.Vj);
            this.Vl.ajax(this.Ul, "type=" + this.Vj + "&pq=" + encodeURIComponent(this.$d), "", "POST")
        } else a || (c ? (this.$d = H("zh-profile-search-query").value, this.Ul = "/people/" + H("zh-profile-search-form").getAttribute("data_url") + "/search", window.location.href = this.Ul + "?type=" + this.Vj + "&pq=" + encodeURIComponent(this.$d)) : (this.Vl = new Y(i), this.Py = i, this.e().c(this.Vl, "success", this.$H), this.$d = H("zh-profile-search-query").value, this.Ul = "/people/" + H("zh-profile-search-form").getAttribute("data_url") + "/search", this.Vl.ajax(this.Ul, "type=" + this.Vj + "&pq=" + encodeURIComponent(this.$d), "", "POST"))); (a = H("zh-profile-search-info")) && S(a, i)
    } else a && a.preventDefault()
};
r.$H = function() {
    this.Py = l;
    H("zh-profile-search-word").innerHTML = this.$d;
    var a = R(this.Vl);
    if (a && !a.r) {
        var b = H("zh-profile-search-list");
        if (b) if (0 === a.msg[0]) H("zh-profile-list-container").innerHTML = '<div id="' + b.id + '"><div style="margin: 20px;color: #999;text-align: center;">抱歉，没有找到任何结果</div></div>';
        else {
            var c;
            c = "" + ('<div id="' + b.id + '">');
            c += a.msg[1] + "</div>";
            H("zh-profile-list-container").innerHTML = c + '<a href="javascript:;" id="zh-load-more" class="zg-btn-white zu-button-more" style="">更多</a>';
            if ((a = Xb("zm-item", b)) && a.length) this.li = a[a.length - 1].id.split("-")[1];
            this.la = j;
            this.la = new uy(H(b.id), j, i);
            this.la.k();
            this.la.li = this.li;
            this.la.url = this.Ul;
            this.la.zc.pq = this.$d;
            this.la.zc.type = this.Vj;
            H("zh-profile-search-query").focus()
        }
    }
};
function yz() {
    T.call(this)
}
w(yz, T);
yz.prototype.Z = function(a) {
    this.d = a;
    this.$ = new Vu;
    this.$.h(this.d);
    this.form = H("zm-profile-expert-editform");
    this.e().c(this.form, "submit", this.to);
    this.e().c(this.$, ["add", "remove", "sort"],
    function() {
        this.Cq()
    });
    $(".enable").on("change", "input", $.proxy(function() {
        this.Cq()
    },
    this));
    var b = H("zh-profile-expert-warning");
    b && this.e().c(b, "click",
    function(a) {
        "close" === a.target.name && hn(b)
    });
    $(".enable input[type='radio']").click(function(a) {
        S(H("zh-profile-expert-reopen-tip"), !Number($(a.target).val()))
    })
};
yz.prototype.Cq = function() {
    window.onbeforeunload = u(p("你的更改还未保存，确认离开该页面吗？"), this)
};
yz.prototype.mv = function() {
    window.onbeforeunload = j
};
yz.prototype.to = function() {
    var a = [];
    y.forEach(this.$.data,
    function(b) {
        a.push(b[3])
    });
    var b = $(this.form).serializeArray()[0].value,
    c = $("#zh-expert-topics .item").map(function() {
        return $(this).data("url-token")
    }).get();
    Om("ProfileEditExpertTopicsV2", "save", {
        settings: {
            enable_expert: b,
            expert_topic: c
        }
    },
    function() {
        this.mv();
        window.location.href = "/people/" + V[1]
    },
    j, this)
};
function Bz() {
    M.call(this)
}
w(Bz, ao);
Bz.prototype.k = function() {
    var a;
    if (a = (new Fp(window.location.href)).bd.get("group_id")) this.Ej = new Y(l),
    Q(this.e(), this.Ej, "complete", this.iy),
    a && this.Ej.ajax("/noti7/read", "group_id=" + a, "POST")
};
Bz.prototype.iy = function() {
    var a = R(this.Ej);
    if (a && !a.r && a.msg) {
        var b = a.msg;
        if (b === i || "true" === b || "True" === b) return;
        this.uP = a.msg;
        this.dispatchEvent("change")
    } (a = jo) && ko(a)
};
function Cz() {
    M.call(this)
}
w(Cz, ao);
Cz.prototype.k = function() { (this.Ag = Vb("a", j, H("zh-question-side-header-wrap"))[0]) && this.e().c(this.Ag, "click",
    function() {
        Dn(this.Ag, "question", "", ["zg-btn-green", "zg-btn-white"])
    });
    var a = H("zh-question-log-list-wrap");
    a && (a = new Pw(a, j, j, j, i), a.ae(Jw), a.k());
    if (a = H("zh-question-followers-list-wrap")) a = new Pw(a, j, j, ["zg-btn-follow", "zg-btn-unfollow"], i),
    a.pc("zm-profile-section-item"),
    a.k();
    this.Dj = new Bz;
    this.Dj.k()
};
function Dz() {}
r = Dz.prototype;
r.tA = {
    "lock-question": "block",
    "unlock-question": "unblock",
    "mute-question": "mute",
    "unmute-question": "unmute",
    "remove-question": "delete",
    "collapse-answer": "collapse",
    "uncollapse-answer": "uncollapse",
    "remove-answer": "delete"
};
r.Tv = ba();
r.Uv = function(a) {
    var b = new Np(a),
    c = this.Tv();
    if (!c) return Jn("OP META DATA ELEMENT DOES NOT PROVIDED");
    y.forEach(["question_id", "task_id", "answer_id", "none_queue"],
    function(a) {
        var f = c.getAttribute("data-" + a);
        f && b.add(a, f)
    });
    return b
};
function Ez(a, b) {
    var c = st[b];
    if (c) {
        var d;
        d = []; (d = Bc(a,
        function(a) {
            return 3 === a.nodeType && Oa(a.nodeValue)
        },
        d, i) ? d[0] : h) && zc(d, a.getAttribute("data-label") || c.label);
        a.setAttribute("data-op", b)
    } else Jn("NO SUCH OP NAME")
}
r.Sx = ba();
r.PL = en(function() {
    var a = qt.v();
    a.on("cancel", this.Sx, l, this);
    return a
});
function Fz(a, b, c, d) {
    var f = b.getAttribute("data-op");
    if (f) {
        Ez(b, f);
        var g = a.PL(),
        d = a.Uv(d).add("action", a.tA[f]);
        wt(g, b, u(c || ia, a), "", d.toString());
        g.n(i)
    }
};
function Gz(a, b, c, d, f, g) {
    mv.call(this, d, b, c, g);
    this.L = a;
    this.Sn = this.Tj = l;
    this.$Q = f
}
w(Gz, mv);
var Hz = [{
    value: "精简文字描述",
    label: "精简文字描述"
},
{
    value: "补充必要的信息",
    label: "补充必要的信息"
},
{
    value: "改进标点或格式",
    label: "改进标点或格式"
},
{
    value: "other",
    label: "其他"
}];
r = Gz.prototype;
r.h = function(a) {
    Gz.g.h.call(this, a);
    this.e().c(Zl, "anon_change", this.bj)
};
r.bj = function(a) {
    this.Sn || E.enable(this.d, "zm-editable-disabled", a.ab)
};
r.Ci = function() {
    Gz.g.Ci.call(this);
    var a = K("a", {
        "class": "zg-right zg-link-litblue",
        href: "http://www.zhihu.com/question/19550238/answer/12202028",
        target: "_blank"
    },
    "为什么问题可以被公共编辑？"),
    b = K("select", {
        style: "1px solid #999 "
    }),
    c = K("option", {
        value: "none"
    },
    "请选择一个修改理由...");
    b.appendChild(c);
    y.forEach(Hz,
    function(a, c) {
        var d = K("option", {
            value: a.value
        },
        c + 1 + ". " + a.label);
        b.appendChild(d)
    });
    this.wy = K("div", {
        "class": "zm-editable-require-reason-wrap",
        style: "padding:10px 0 0 0"
    },
    [a, this.JY = b, this.PE = K("span"), this.JR = K("div", {
        "class": "zg-form-text-input",
        style: "height:22px;margin:10px 0 0 0;display:none"
    },
    this.IR = K("textarea", {
        style: "width:100%;height:22px !important;min-height:22px !important;"
    }))]);
    lc(this.wy, this.Sc);
    this.Tj && this.Yj(" * 必选", "zg-gray-normal");
    var d = Vb("select", j, this.wy)[0];
    this.e().c(d, "change",
    function() {
        S(this.JR, "other" === d.value);
        this.Yj(" * 必选", "zg-gray-normal")
    })
};
r.hf = function(a) {
    var b = Vb("select", j, this.wy)[0],
    c = b.value;
    if (this.Tj) {
        if ("none" === c) {
            this.Yj("请选择一个修改理由");
            return
        }
        if ("other" === b.value && (c = pn(this.IR.value), !c)) {
            this.Yj("请填写修改理由");
            return
        }
    }
    "title" === this.mq && -1 === a.indexOf("?") && -1 === a.indexOf("？") ? this.Yj("还没有输入问号") : ("none" === c && (c = ""), this.zc = ["id=" + this.L + "&reason=" + encodeURIComponent(c) + "&question_id=" + this.L], this.dispatchEvent("change"), Gz.g.hf.call(this, a), this.Yj("* 必选", "zg-gray-normal"), this.Tj = i)
};
r.Yj = function(a, b) {
    this.PE.innerHTML = a;
    E.set(this.PE, b || "zg-error-text")
};
r.Lf = function() {
    return this.sd && this.$Q ? rn(La(this.Na.value)) : Gz.g.Lf.call(this)
};
function Iz(a) {
    this.Ad = 10;
    this.Fb = "搜索用户";
    this.path = a || "/people/autocomplete"
}
w(Iz, ao);
r = Iz.prototype;
r.j = function() {
    var a = K("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.ha = K("input", "zg-form-text-input zg-mr15"), this.DG = K("span", "zg-mr15"), this.BK = K("a", {
        "class": "zg-mr15 zg-btn-blue",
        href: "javascript:;",
        name: "add"
    },
    "移交")]);
    this.d.appendChild(a);
    this.Fb && ((new To(this.Fb)).h(this.ha), this.ha.title = this.Fb);
    this.ze(a);
    this.e().c(this.BK, "click", this.so)
};
r.ze = function(a) {
    this.u = new iq(this.path, this.ha, j, j, a, i);
    this.u.Je(i);
    this.u.Tf = this.Ad;
    this.e().c(this.u, "select", this.pQ)
};
r.so = function() {
    this.Sy && this.dispatchEvent("select")
};
r.pQ = function() {
    var a = this.u.te().slice(1);
    this.Sy = [a[3], a[0]];
    this.DG.innerHTML = a[0]
};
r.f = n("d");
r.h = function(a) {
    this.d = a;
    this.j()
};
r.hide = function() {
    S(this.d, l);
    this.Sy = j;
    this.DG.innerHTML = ""
};
function Jz() {
    M.call(this);
    this.CY = [];
    this.tx = 0;
    this.Nz = this.DY = j;
    this.XB = 5;
    this.tN = "/reviewq/handover"
}
w(Jz, ao);
za(Jz.prototype, Dz.prototype);
r = Jz.prototype;
r.Tv = n("U");
r.Uv = function(a) {
    return Dz.prototype.Uv.call(this, a).add("queue_id", this.Cb).add("is_realm", this.Vd)
};
r.Sx = function() {
    this.locked = l
};
r.k = function(a) {
    this.d = a;
    this.Cb = (a = H("queue_id")) ? a.value: 0;
    this.Vd = (a = H("is_realm")) ? a.value: 0;
    this.j();
    this.ua();
    uk.Ar || (a = new Id(1E3 * this.XB), a.start(), this.e().c(a, Kd, this.XT));
    H("zh-load-more") && (new Pw(this.d, window.location.href, "queue", ["zg-btn-follow", "zg-btn-unfollow"], i)).k();
    this.e().c(this.d, "click", this.S)
};
r.S = function(a) {
    this.ew(a.target)
};
r.XT = function() {
    var a = Xb("zm-review-queue-deadline");
    a && a.length && y.forEach(a,
    function(a) {
        var c = a.getAttribute("data-lefttime");
        if (c) if (c = +c, 2E3 < c && (c -= Math.floor( + new Date / 1E3)), 0 >= c && -1E3 < c) a.innerHTML = "已流通";
        else {
            60 > c && E.add(a, "zm-review-queue-time-warning");
            var d = Math.floor(c / 60),
            f = c % 60;
            a.setAttribute("data-lefttime", c - this.XB + "");
            a.innerHTML = (0 < d ? d + "分": "") + (f + "秒")
        }
    },
    this)
};
r.sr = function(a, b, c) {
    a = new Gz(b, "/reviewq/question?queue_id=" + this.Cb + "&action=edit_detail&task_id=" + a, "detail_text", i, l);
    a.Lc = '<div style="font-weight:bold"><a href="javascript:;" name="edit">添加补充说明</a></div>';
    a.tq = i;
    a.h(c.parentNode);
    a.Tj = i;
    a.k();
    a.dg();
    this.vX = a
};
r.$I = function() {
    Kz(this, ["删除话题", "已删除"], ["delete_topic", ""]);
    Lz(this);
    uk.Ar || this.U.setAttribute("data-lockdown")
};
r.aw = ea(34);
r.uQ = function() {
    this.BG = this.Kj.Sy;
    this.xhr = new Y(i);
    this.eb && Q(this.e(), this.xhr, "success", this.ne);
    this.xhr.ajax(this.tN + "?queue_id=" + this.Cb + "&is_realm=" + this.Vd, "action=assign&assigned_to=" + this.BG[0] + "&task_id=" + this.U.getAttribute("data-task_id") + "&none_queue=" + this.U.getAttribute("data-none_queue"))
};
r.j = function() {
    this.bf = H("zh-queue-new-info");
    var a = K("div", {
        style: "display:none"
    },
    this.hb = K("div", "zu-review-queue-topic-editor", K("div", "zm-tag-editor-labels")));
    mc(a, this.d)
};
r.ua = function() {
    uk.Ar || this.$j()
};
r.$j = function() {
    this.ck = new Y(l);
    Q(this.e(), this.ck, "success", this.qw);
    this.ck.ajax("/reviewq/sidebar?queue_id=" + this.Cb, j, "GET")
};
r.qw = function() {
    var a = R(this.ck);
    if (!a || !a.r) {
        var b = a.msg,
        a = Xb("zm-review-queue-live-udatable-num");
        y.forEach(a,
        function(a) {
            var d = a.getAttribute("data-key");
            d && (d = b[d], d || (a.innerHTML = d))
        });
        setTimeout(u(this.$j, this), 1E4)
    }
};
r.fJ = function() {
    Mz(this, this.Ia, "已流通")
};
function Mz(a, b, c) {
    b = b || a.Ia;
    c = c || "已处理";
    E.remove(b, "zg-btn-white");
    "pass" === b.name && (b.innerHTML = c, uk.Ar || (b.name = ""));
    a.U = Lc(b, "zm-item");
    Lz(a); (a = I("zm-review-queue-deadline", a.U)) && S(a, l)
}
r.aJ = function() {
    Kz(this, ["移交", "已经移交给：" + this.BG[1]], ["handover", ""]);
    this.Kj.hide();
    Lz(this);
    S(this.U, l)
};
function Kz(a, b, c) {
    var d = 0;
    a.Ia.name === c[0] && (d = 1);
    a.Ia.name = c[d];
    var c = "",
    f = a.Ia.innerHTML.indexOf("</span>"); - 1 < f && (c = a.Ia.innerHTML.substring(0, f + 7));
    a.Ia.innerHTML = c + b[d]
}
function Lz(a) {
    E.remove(a.U, "zm-item-unread");
    a.locked = l
}
r.ew = function(a) {
    if (this.locked) this.lE && Jn(this.lE, "last action");
    else {
        this.locked = i;
        var b = a.name;
        this.lE = b;
        var c = Lc(a, "zm-item");
        this.Ia = a;
        this.U = c;
        if (c.getAttribute("data-lockdown")) this.locked = l;
        else {
            var d = a.getAttribute("data-op");
            if (d) switch (d) {
            case "lock-question":
            case "unlock-question":
                Fz(this, a,
                function() {
                    Ez(a, "lock-question" === d ? "unlock-question": "lock-question");
                    Lz(this)
                });
                break;
            case "mute-question":
            case "unmute-question":
                Fz(this, a,
                function() {
                    Ez(a, "mute-question" === d ? "unmute-question": "mute-question");
                    Lz(this)
                });
                break;
            case "remove-question":
                Fz(this, a,
                function() {
                    L(c);
                    this.locked = l
                });
                break;
            case "collapse-answer":
            case "uncollapse-answer":
                Fz(this, a,
                function() {
                    Ez(a, "collapse-answer" === d ? "uncollapse-answer": "collapse-answer");
                    Lz(this)
                });
                break;
            case "remove-answer":
                Fz(this, a,
                function() {
                    L(c);
                    this.locked = l
                })
            } else {
                switch (b) {
                case "edit_title":
                    var b = c.getAttribute("data-question_id"),
                    f = c.getAttribute("data-task_id"),
                    b = new Gz(b, "/reviewq/question?queue_id=" + this.Cb + "&action=edit_title&task_id=" + f, "title", l, i);
                    b.tq = i;
                    b.sd = i;
                    b.h(a.parentNode);
                    b.Tj = i;
                    b.k();
                    b.dg();
                    this.gZ = b;
                    L(a);
                    this.locked = l;
                    break;
                case "bind_topic":
                    this.locked = l;
                    this.Nz || (b = new Ru(this.Cb), b.h(this.hb), this.Nz = b);
                    b = this.Nz;
                    f = I("zm-review-queue-tags-wrap", c);
                    if (!b.locked) {
                        b.locked = i;
                        b.L = c.getAttribute("data-question_id");
                        var g = c.getAttribute("data-task_id");
                        b.DA = b.fB + g + "&question_id=" + b.L + "&action=bind_topic";
                        b.kG = b.fB + g + "&question_id=" + b.L + "&action=unbind_topic";
                        b.Kr && (g = I("zm-tag-editor-labels", b.Kr), Mu(b), g.innerHTML = b.Le.innerHTML, E.remove(b.Kr, "zm-review-queue-editing"));
                        b.NB = c;
                        b.Kr = c;
                        E.add(b.NB, "zm-review-queue-editing");
                        mc(b.d, f);
                        S(b.Le, l);
                        b.Oz = new Y(i);
                        b.e().c(b.Oz, "complete", b.NQ);
                        b.Oz.ajax("/reviewq/fetch_topic", "question_id=" + b.L)
                    }
                    break;
                case "delete_topic":
                    this.eb = this.$I;
                    this.xhr = new Y(i);
                    this.eb && Q(this.e(), this.xhr, "success", this.ne);
                    this.xhr.ajax("/reviewq/topic?queue_id=" + this.Cb + "&is_realm=" + this.Vd, "action=delete&topic_id=" + this.U.getAttribute("data-topicid") + "&task_id=" + this.U.getAttribute("data-task_id") + "&none_queue=" + this.U.getAttribute("data-none_queue"));
                    break;
                case "handover":
                    this.locked = l;
                    this.eb = this.aJ;
                    this.Kj ? S(this.Kj.f(), i) : (b = new Iz("/reviewq/auto"), f = K("div", {
                        id: "zh-review-queue-people-selector"
                    }), this.d.appendChild(f), b.h(f), this.Kj = b, this.e().c(this.Kj, "select", this.uQ));
                    b = +c.getAttribute("data-hotype");
                    this.Kj.u.Tf = b;
                    b = Jc(a, "DIV");
                    mc(this.Kj.f(), b);
                    break;
                case "pass":
                case "unpass":
                    this.eb = this.fJ;
                    this.xhr = new Y(i);
                    this.eb && Q(this.e(), this.xhr, "success", this.ne);
                    this.xhr.ajax("/reviewq/pass", "queue_id=" + this.Cb + "&is_realm=" + this.Vd + "&action=" + b + "&task_id=" + this.U.getAttribute("data-task_id") + "&none_queue=" + this.U.getAttribute("data-none_queue"));
                    break;
                case "unflag":
                    break;
                case "add_question_comment":
                case "add_answer_comment":
                    this.yK = b.split("_")[1];
                    this.locked = l; (b = Nz(this)) ? S(b, i) : (f = K("div"), f.innerHTML = H("zh-review-queue-comment-form-template").innerHTML, mc(f, I("zm-item-comment-el", this.U)));
                    $(".zm-command", b).show();
                    break;
                case "delete_comment":
                    this.locked = l;
                    break;
                case "addnew":
                    this.locked = l;
                    b = Vb("TEXTAREA", j, this.U);
                    b = b[b.length - 1].value;
                    if (!b) return;
                    this.eb = this.WI;
                    this.bw(b);
                    break;
                case "closeform":
                    this.locked = l;
                    S(Nz(this), l);
                    break;
                case "unbind_topic":
                    this.eb = this.nJ;
                    b = this.U.getAttribute("data-question_id");
                    f = this.U.getAttribute("data-topicid");
                    g = this.U.getAttribute("data-task_id");
                    this.xhr = new Y(i);
                    this.eb && Q(this.e(), this.xhr, "success", this.ne);
                    this.xhr.ajax("/reviewq/question?queue_id=" + this.Cb + "&is_realm=" + this.Vd + "&task_id=" + g, "action=unbind_topic&question_id=" + b + "&topic_id=" + f + "&none_queue=" + this.U.getAttribute("data-none_queue"));
                    break;
                case "rebind_topic":
                    this.eb = this.gJ;
                    b = this.U.getAttribute("data-question_id");
                    f = this.U.getAttribute("data-topicid");
                    g = this.U.getAttribute("data-task_id");
                    this.xhr = new Y(i);
                    this.eb && Q(this.e(), this.xhr, "success", this.ne);
                    this.xhr.ajax("/reviewq/question?queue_id=" + this.Cb + "&is_realm=" + this.Vd + "&task_id=" + g, "action=bind_topic&question_id=" + b + "&topic_id=" + f + "&none_queue=" + this.U.getAttribute("data-none_queue"));
                    break;
                case "cancel_nohelp":
                    this.eb = this.YI;
                    b = this.U.getAttribute("data-answer_id");
                    f = this.U.getAttribute("data-task_id");
                    this.xhr = new Y(i);
                    this.eb && Q(this.e(), this.xhr, "success", this.ne);
                    this.xhr.ajax("/reviewq/answer?queue_id=" + this.Cb + "&is_realm=" + this.Vd + "&task_id=" + f, "action=cancel_nohelp&answer_id=" + b + "&none_queue=" + this.U.getAttribute("data-none_queue"));
                    break;
                case "nohelp":
                    this.eb = this.eJ;
                    b = this.U.getAttribute("data-answer_id");
                    f = this.U.getAttribute("data-task_id");
                    this.xhr = new Y(i);
                    this.eb && Q(this.e(), this.xhr, "success", this.ne);
                    this.xhr.ajax("/reviewq/answer?queue_id=" + this.Cb + "&is_realm=" + this.Vd + "&task_id=" + f, "action=nohelp&answer_id=" + b + "&none_queue=" + this.U.getAttribute("data-none_queue"));
                    break;
                case "edit_detail":
                    b = c.getAttribute("data-question_id");
                    f = c.getAttribute("data-task_id");
                    this.sr(f, b, a);
                    L(a);
                    this.locked = l;
                    break;
                case "voteup":
                case "votedown":
                    b = "voteup" === b ? "vote_up": "vote_down";
                    this.eb = this.oJ;
                    f = this.U.getAttribute("data-answer_id");
                    g = this.U.getAttribute("data-task_id");
                    this.xhr = new Y(i);
                    this.eb && Q(this.e(), this.xhr, "success", this.ne);
                    this.xhr.ajax("/reviewq/answer?queue_id=" + this.Cb + "&is_realm=" + this.Vd + "&task_id=" + g, "action=" + b + "&answer_id=" + f + "&none_queue=" + this.U.getAttribute("data-none_queue"));
                    break;
                case "thanks":
                    this.eb = this.mJ;
                    b = this.U.getAttribute("data-answer_id");
                    f = this.U.getAttribute("data-task_id");
                    this.xhr = new Y(i);
                    this.eb && Q(this.e(), this.xhr, "success", this.ne);
                    this.xhr.ajax("/reviewq/answer?queue_id=" + this.Cb + "&is_realm=" + this.Vd + "&task_id=" + f, "action=thanks&answer_id=" + b + "&none_queue=" + this.U.getAttribute("data-none_queue"));
                    break;
                default:
                    this.locked = l
                }
                return l
            }
        }
    }
};
r.mJ = function() {
    this.Ia.name = "";
    var a = $(this.Ia),
    b = $("i", a);
    a.html(b).append("感谢已发出");
    Mz(this, Oz(this), "已流通")
};
r.oJ = function() {
    var a = R(this.xhr),
    b = I("vote-bar-hook", this.U);
    E.set(b, "zm-item-vote-bar");
    "up" === a.msg ? (E.add(b, "zm-item-vote-up-active"), Mz(this, Oz(this), "已流通")) : "down" === a.msg ? E.add(b, "zm-item-vote-down-active") : (E.remove(b, "zm-item-vote-up-active"), E.remove(b, "zm-item-vote-down-active"));
    this.locked = l
};
function Oz(a) {
    return I("zg-btn-white", a.U)
}
r.ne = function() {
    var a = R(this.xhr);
    if (a && a.r) {
        if ("deleted" === a.msg) {
            if (this.U && (E.add(this.U, "zm-queue-disabled"), this.U.setAttribute("data-lockdown"), a = Vb("A", j, this.U), y.forEach(a,
            function(a) {
                if ("delete_question" === a.name || "delete_answer" === a.name) a.style.color = "red !important",
                a.innerHTML = "已删除"
            }), a = I("zm-review-queue-deadline", this.U))) a.setAttribute("data-lefttime", -9E3),
            a.innerHTML = ""
        } else X(a.msg);
        this.locked = l
    } else this.eb()
};
r.eJ = function() {
    this.Ia.name = "cancel_nohelp";
    var a = $(this.Ia),
    b = $("i", a);
    a.html(b).append("撤销没有帮助");
    this.locked = l;
    Mz(this, Oz(this))
};
r.YI = function() {
    this.Ia.name = "nohelp";
    var a = $(this.Ia),
    b = $("i", a);
    a.html(b).append("没有帮助");
    this.locked = l;
    Mz(this, Oz(this))
};
r.gJ = function() {
    this.Ia.name = "unbind_topic";
    this.Ia.innerHTML = "解除绑定";
    this.locked = l
};
r.nJ = function() {
    this.Ia.name = "rebind_topic";
    this.Ia.innerHTML = "重新绑定";
    this.locked = l
};
r.WI = function() {
    var a = Nz(this),
    b = K("div", "zm-comment-list");
    b.innerHTML = '<div class="zm-comment-content">已评论</div>';
    mc(b, a);
    un(b);
    setTimeout(function() {
        L(b)
    },
    2500);
    var c = Vb("TEXTAREA", j, this.U);
    c.length && (c[c.length - 1].value = "");
    S(a, l)
};
r.bw = function(a) {
    this.xhr = new Y(i);
    this.eb && Q(this.e(), this.xhr, "success", this.ne);
    var b = this.U.getAttribute("data-question_id"),
    b = b ? "&question_id=" + b: "&question_id=0",
    c = this.U.getAttribute("data-answer_id");
    this.xhr.ajax("/reviewq/" + this.yK, "queue_id=" + this.Cb + "&is_realm=" + this.Vd + "&action=add_comment&task_id=" + this.U.getAttribute("data-task_id") + b + (c ? "&answer_id=" + c: "&answer_id=0") + "&comment=" + encodeURIComponent(a) + "&none_queue=" + this.U.getAttribute("data-none_queue"))
};
function Nz(a) {
    return I("zm-comment-form", a.U)
};
function Pz(a) {
    this.OO = this.locked = l;
    this.url = a || "/reviewq/image"
}
w(Pz, ao);
za(Pz.prototype, Dz.prototype);
r = Pz.prototype;
r.Tv = n("d");
r.tA = {
    "remove-question": "delete_question",
    "collapse-answer": "collapse",
    "uncollapse-answer": "uncollapse",
    "remove-answer": "delete_answer",
    "remove-image": "delete_image",
    "remove-video": "delete_video"
};
r.Sx = function() {
    this.locked = l
};
r.h = function(a) {
    this.d = a;
    var a = I("zm-item-rich-text", this.d),
    b = K("div", "zm-item-answer-summary"),
    c = a.innerHTML.replace(/<br>/g, " "),
    d;
    d = c.replace(/<p class="video-info">(.+?)<\/p>/g, "");
    d = d.replace(/<(\/)?b>/g, "").replace(/<(\/)?i>/g, "").replace(/<(\/)?u>/g, "");
    c = d.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    d = -1 < a.innerHTML.indexOf("<img") || -1 < a.innerHTML.indexOf("<IMG");
    var f = -1 < a.innerHTML.indexOf("video-box"),
    g = Hn(c),
    k = "",
    m = d || f;
    150 < g ? (m = i, k = c.substring(0, 100) + "… ") : 3 < a.innerHTML.split("br").length ? (m = i, k = c) : k = m ? c: a.innerHTML;
    c = f ? ' <span class="zg-content-video-icon"></span>': ' <span class="zg-content-img-icon"></span>';
    if (d || f) k += c;
    m && (k += '<a href="javascript:;" class="zg-inline-block" name="expand">显示全部 »</a>');
    b.innerHTML = k;
    mc(b, a);
    this.gy();
    this.ua()
};
r.gy = function() {
    this.TA = this.d.getAttribute("data-answer_id");
    this.IY = this.d.getAttribute("data-question_id");
    this.CO = this.d.getAttribute("data-task_id")
};
r.ua = function() {
    this.e().c(this.d, "click", this.jl)
};
r.jl = function(a) {
    if (!a.target.name || this.OO) return i;
    this.S(a.target.name, a.target)
};
function Qz(a) {
    E.has(a.d, "zm-item-unread") && (a.locked = i, E.remove(a.d, "zm-item-unread"), Sl(a.url, u(function() {
        this.locked = l
    },
    a), "POST", "task_id=" + a.CO));
    if (a = I("zm-image-queue-button-pass", a.d)) a.innerHTML = "已处理",
    E.Ne(a, "zm-image-queue-button-pass", "zg-link-gray-normal zg-right")
}
r.S = function(a, b) {
    if (!this.locked) {
        this.sX = b;
        var c = i,
        d = b.getAttribute("data-op");
        if (d) switch (d) {
        case "collapse-answer":
        case "uncollapse-answer":
            Fz(this, b,
            function() {
                Ez(b, "collapse-answer" === d ? "uncollapse-answer": "collapse-answer");
                Qz(this)
            });
            break;
        case "remove-answer":
            Fz(this, b,
            function() {
                L(this.d);
                Qz(this)
            });
            break;
        case "remove-question":
            Fz(this, b,
            function() {
                L(this.d);
                Qz(this)
            });
            break;
        case "remove-image":
        case "remove-video":
            var f = tc(b),
            g,
            c = f.getAttribute("data-imageid"),
            k = f.getAttribute("data-videoid");
            c ? g = "image_hash=" + c: k && (g = "video_id=" + k);
            Fz(this, b,
            function() {
                var a = Jc(f, "li");
                S(a, l);
                this.locked = l
            },
            g)
        } else {
            switch (a) {
            case "pass":
                Qz(this);
                S(this.d, l);
                break;
            case "expand":
                E.remove(this.d, "zm-item-collap");
                break;
            default:
                c = l
            }
            if (!c) return i
        }
    }
};
function Rz(a, b, c) {
    M.call(this);
    this.hZ = c;
    this.JI = a;
    this.DT = b;
    this.Gz = l
}
w(Rz, ao);
Rz.prototype.k = function() {
    this.e().c(this.JI, "click", this.$L)
};
Rz.prototype.$L = function() {
    this.Gz = !this.Gz;
    S(this.DT, this.Gz)
};
function Sz() {
    M.call(this);
    this.Bs = 0;
    this.zk = [];
    this.tx = 0
}
w(Sz, ao);
r = Sz.prototype;
r.Ug = function(a) {
    var b = a.id.split("-")[1],
    c = new Y(i),
    d = 0,
    f = Lc(a, "zm-item");
    f && ( - 1 < a.innerHTML.indexOf("取消") ? (Rf(f, "background", "#fff"), a.innerHTML = "折叠", E.Ne(a, "zg-unfollow", "zg-follow"), d = 0) : (Rf(f, "background", "#ddd"), a.innerHTML = "取消折叠", E.Ne(a, "zg-follow", "zg-unfollow"), d = 1));
    c.ajax("/review/api/collapse_answer", "is_collasped=" + d + "&answer_id=" + b)
};
r.$j = function() {
    this.ck = new Y(l);
    Q(this.e(), this.ck, "success", this.qw);
    this.ck.ajax("/reviewq/sidebar?queue_id=" + this.Cb, j, "GET")
};
r.qw = function() {
    var a = R(this.ck);
    if (!a || !a.r) {
        var b = a.msg,
        a = Xb("zm-review-queue-live-udatable-num");
        y.forEach(a,
        function(a) {
            var d = a.getAttribute("data-key");
            d && (d = b[d], d != j && (a.innerHTML = d))
        });
        setTimeout(u(this.$j, this), 1E4)
    }
};
r.k = function() {
    var a = H("zh-queue-wrap");
    if (a) {
        var b = new Pw(a, window.location.href, "queue", ["zg-btn-follow", "zg-btn-unfollow"], i);
        this.e().c(a, "click", this.nF);
        b.k()
    } (a = H("zh-review-queue-online-reviewers")) && (new Pw(a, window.location.href, j, j, i)).k();
    if (a = H("zh-queue-content-list")) this.VS = a,
    this.e().c(U, ho.dW, this.SM),
    a = new Pw(a, window.location.href, "queue", ["zg-btn-follow", "zg-btn-unfollow"], i),
    a.ae(Jw),
    a.k(),
    this.e().c(H("zh-queue-outer-wrap"), "click", this.nF); (a = H("zh-queue-content-list-v2")) && (new Jz).k(a);
    if (a = H("zh-image-queue-list-wrap")) this.Cb = (b = H("queue_id")) ? b.value: 0,
    this.$j(),
    a = Xb("zm-item", a),
    y.forEach(a,
    function(a) { (new Pz).h(a)
    });
    if (a = H("zh-video-queue-list-wrap")) this.Cb = (b = H("queue_id")) ? b.value: 0,
    this.$j(),
    a = Xb("zm-item", a),
    y.forEach(a,
    function(a) { (new Pz("/reviewq/video")).h(a)
    });
    if (a = H("zh-inferiority-queue-list-wrap")) this.Cb = (b = H("queue_id")) ? b.value: 0,
    this.$j(),
    a = Xb("zm-item", a),
    y.forEach(a,
    function(a) { (new Pz("/reviewq/inferiority")).h(a)
    });
    if (Ik) {
        a = Ik;
        this.Bs = a[0];
        var c = [];
        y.forEach(a[1],
        function(a) {
            c.push(a)
        });
        this.zk = c
    }
    if (a = H("zh-queue-create-wrap")) this.Hh = a,
    this.e().c(this.Hh, "click", this.S),
    (a = H("zh-queue-delete")) && this.e().c(a, "click", this.ZK),
    (new Rz(H("add-desc"), H("add-desc-toggle-wrap"))).k(),
    (new Rz(H("zh-queue-add-admin"), H("zh-queue-add-admin-toggle-wrap"))).k(),
    this.wG = H("zh-queue-rules-wrap"),
    this.xT = H("zh-queue-name-input"),
    this.bL = H("zh-queue-desc-input"),
    this.Vk = H("zh-queue-error-message"),
    this.TI = H("zh-queue-admin-selector"),
    this.HA = H("zh-queue-admin-members-wrap"),
    this.u = new iq("/people/autocomplete", this.TI, j, j, H("zh-queue-add-admin-toogle-wrap"), i),
    this.u.Je(i),
    this.e().c(this.u, "select", this.so),
    this.lS = H("zh-queue-rule-template").innerHTML;
    if (a = H("zh-queue-delete")) this.XK = a,
    this.e().c(a, "click", this.kl)
};
r.kl = function() {
    Sl("/review/queues/delete",
    function() {
        window.location.href = "/review"
    },
    "POST", "queue_id=" + this.XK.name)
};
r.so = function() {
    var a = y.slice(this.u.te(), 1),
    b = a[3],
    c = 1;
    y.forEach(this.zk,
    function(a) {
        a === b && (c = l)
    });
    c && this.zk.push(b);
    a = ['<div class="zm-item" id="adm-', a[3], '"><a class="zg-right" name="remove_admin" href="javascript:;">删除</a><a class="zm-item-link-avatar" href="/people/', a[1], '" style="float:none"><img title="', a[0], '" src="', a[2], '" class="zm-item-img-avatar" /></a></div>'].join("");
    this.HA.innerHTML += a
};
r.S = function(a) {
    if ((a = zn(this.Hh, a.target)) && a.name) switch (a.name) {
    case "remove_rule":
        a = Lc(a, "zg-section");
        L(a);
        break;
    case "zh-queue-add-rule-button":
        a = K("div");
        a.innerHTML = this.lS;
        this.wG.appendChild(a);
        break;
    case "add_queue":
        this.xhr = new Y(i);
        Q(this.e(), this.xhr, "success", this.KA);
        a = new An(i);
        a.add("id", this.Bs);
        a.add("title", this.xT.value);
        a.add("bio", this.bL.value);
        var b = [],
        c = Vb("SELECT", j, this.wG);
        c && c.length && y.forEach(c,
        function(a) { (a = By(a)) && b.push(a)
        });
        a.add("subscrible", b.join(","));
        a.add("maintainer", this.zk.join(","));
        this.Bs ? this.xhr.ajax("/review/queues/update", a.Nb()) : this.xhr.ajax("/review/queues/new", a.Nb());
        break;
    case "remove_admin":
        var a = Lc(a, "zm-item"),
        d = a.id.split("-")[1];
        L(a);
        var f = [];
        y.forEach(this.zk,
        function(a) {
            a !== d && f.push(a)
        });
        this.zk = f
    }
};
r.ZK = function() {
    this.xhr = new Y(i);
    Q(this.e(), this.xhr, "success", this.KA);
    this.xhr.ajax("/review/queues/delete", "id=" + this.Bs)
};
r.KA = function() {
    var a = R(this.xhr);
    a && !a.r ? (S(this.Vk, l), a.msg && (window.location.href = a.msg)) : (a = a.msg, this.Vk.innerHTML = oa(a) ? a.join("<br />") : a, S(this.Vk, i))
};
r.SM = function(a) {
    this.tx++;
    300 < this.tx && window.location.reload();
    var a = a.lb,
    b = K("div");
    b.innerHTML = a;
    lc(b, rc(this.VS));
    un(b)
};
r.nF = function(a) {
    if ((a = zn(H("zh-queue-outer-wrap"), a.target)) && a.name) switch (a.name) {
    case "collapse":
        this.Ug(a, 1);
        break;
    case "uncollapse":
        this.Ug(a, 0)
    }
};
function Tz() {
    M.call(this)
}
w(Tz, ao);
Tz.prototype.k = function() {
    var a = H("zh-search-result-more");
    a && this.e().c(a, "click",
    function(b) { (b = zn(a, b.target)) && b.name && b.id && "focus" === b.name && Dn(b, b.id.split("-")[0])
    });
    var b = H("zm-search-result-topic-info");
    b && this.e().c(b, "click",
    function(a) { (a = zn(b, a.target)) && a.name && a.id && "focus" === a.name && Dn(a, "topic", j, ["zg-btn-follow", "zg-btn-unfollow"])
    });
    var c = H("zm-search-result-people-info");
    c && this.e().c(c, "click",
    function(a) { (a = zn(c, a.target)) && a.name && a.id && "focus" === a.name && Dn(a, "people", j, ["zg-btn-follow", "zg-btn-unfollow"])
    });
    var d = H("zm-search-result-answers");
    d && (d = Xb("feed-item-hook", d), y.forEach(d,
    function(a) { (new vy).h(a)
    }));
    if (d = H("zh-search3-list")) {
        var f = new yy;
        f.Uh = 15;
        f.yb = "zm-search3-item";
        var g = d.getAttribute("data-type");
        "question" === g ? f.cg(g, j, j, ["关注问题", "取消关注"]) : f.cg(g);
        f.h(d.children[0]); (d = I("zm-search3-side-topic")) && (new mu(d, "topic", ["zg-follow", "zg-unfollow"])).k(); (d = $("#zh-search-report")[0]) && (new lw({
            type: "search_suggest",
            title: "新搜索建议反馈"
        })).h(d);
        $(".search-debug-all-btn").click(function() {
            $("#zh-search3-list").toggleClass("debug")
        })
    }
};
function Uz() {
    T.call(this);
    this.ca = j
}
w(Uz, T);
Uz.prototype.p = function() {
    Uz.g.p.call(this);
    this.e().c(this.d, "submit",
    function(a) {
        a.preventDefault();
        this.save()
    })
};
Uz.prototype.save = function() {
    this.update(Vz(this))
};
Uz.prototype.update = function(a) {
    if (! (this.ca && "pending" === this.ca.state())) {
        var b = $(this.d).data("init"),
        a = {
            method: "save",
            params: $.extend({},
            b.params || {},
            {
                settings: a
            })
        };
        this.ca = $.post("/node/" + b.nodename, a, u(this.hf, this))
    }
};
Uz.prototype.hf = function(a) {
    a && (a[0] ? this.dispatchEvent({
        type: "success",
        data: a
    }) : this.dispatchEvent({
        type: "error",
        data: a
    }))
};
function Vz(a) {
    a = $(a.d);
    a = a.serializeArray().concat($("input:checkbox", a).map(function() {
        return {
            name: this.name,
            value: this.checked ? this.value: 0
        }
    }).get());
    return y.reduce(a,
    function(a, c) {
        a[c.name] = c.value;
        return a
    },
    {})
};
function Wz(a) {
    M.call(this);
    this.Gr = a;
    this.zc = [];
    this.valid = this.disabled = this.fL = l
}
w(Wz, ao);
r = Wz.prototype;
r.h = function(a) {
    this.d = a;
    this.cR = this.d.className;
    a = Vb("input", j, this.d);
    a.length ? this.field = a[0] : (a = Vb("textarea", j, this.d), a.length && (this.field = a[0]));
    this.fL && (this.disabled = this.field.disabled);
    this.disabled || (this.e().c(this.field, "focus",
    function() {
        this.IC = i;
        E.has(this.d, "zm-form-field-focused") || E.add(this.d, "zm-form-field-focused")
    }).c(this.field, "blur",
    function() {
        this.IC = l;
        E.remove(this.d, "zm-form-field-focused")
    }), this.Vk || (this.Vk = K("div", "zm-form-field-error zg-r3px", [K("span", "zm-form-field-error-spin"), this.uL = K("div", "zm-form-field-error-content")]), this.d.appendChild(this.Vk)), this.iF || (this.iF = K("div", "zm-form-field-ok"), this.d.appendChild(this.iF)), Xz(this, "zm-form-field-status-normal"))
};
function Yz(a) {
    return "checkbox" === a.field.type ? a.field.checked ? a.field.value: "": a.field ? pn(a.field.value) : ""
}
r.Rd = n("field");
function Zz(a, b) {
    Xz(a, "zm-form-field-status-error");
    a.valid = l;
    a.uL.innerHTML = b;
    Q(a.e(), a.d, "click",
    function() {
        this.hr = setTimeout(u(function() {
            Xz(this, "zm-form-field-status-normal")
        },
        this), 1E3)
    })
}
function $z(a, b, c) {
    a.disabled || (c && y.forEach(c,
    function(a) {
        this.zc.push(a)
    },
    a), a.km = b, a.field && !a.wL && a.e().c(a.field, "blur", a.PH))
}
function aA(a, b) {
    a.validator = b;
    a.field && !a.wL && a.e().c(a.field, "blur",
    function() {
        bA(this)
    })
}
r.Jg = ea(18);
function bA(a) {
    a.hr && clearTimeout(a.hr);
    if (!a.validator) return [l, "no validator"];
    var b = a.validator(Yz(a));
    if (b[0]) return Xz(a, "zm-form-field-status-ok"),
    a.valid = i;
    Zz(a, b[1]);
    return a.valid = l
}
r.PH = function() {
    if (!this.QH && pn(Yz(this))) {
        this.QH = i;
        this.xhr = new Y(l);
        Q(this.e(), this.xhr, "complete", this.XI);
        var a = this.zc.join("&"),
        b = this.Gr + "=" + encodeURIComponent(Yz(this));
        this.xhr.ajax(this.km, a ? [a, b].join("&") : b)
    }
};
function Xz(a, b) {
    E.set(a.d, b + " " + a.cR + (a.IC ? " zm-form-field-focused": ""))
}
r.XI = function() {
    this.hr && clearTimeout(this.hr);
    this.QH = l;
    var a = R(this.xhr);
    a && a.r ? (Zz(this, a.errors[0][1]), this.valid = l) : (Xz(this, "zm-form-field-status-ok"), this.valid = i)
};
function cA() {
    M.call(this);
    this.Pd = [];
    this.GY = "/profile/validate";
    this.TT = "/settings/unblockuser"
}
w(cA, ao);
cA.prototype.k = function() {
    var a = $("#zh-settings-noti-form-wrapper>form")[0];
    if (a) {
        var b = new Uz;
        b.h(a);
        b.addEventListener(["success", "error"],
        function(a) {
            window.scrollTo(0, 0);
            rw(F.Ea(a.data), 3E3)
        })
    }
    a = $("#js-settings-account-form");
    if (a.length) {
        var c = en(function() {
            new Zp(H("password"))
        }),
        b = $("#url_token"),
        d = $("#js-url-preview .token");
        b.on("input change keyup",
        function() {
            d.text($.trim(this.value))
        });
        var f = $("#email"),
        g = function() {
            $("#js-email-confirm").show();
            f.off("focus", g);
            c()
        };
        f.one("focus", g);
        $(function() {
            document.activeElement === f.get(0) && g()
        });
        $(".resend-mail", a).click(function() {
            var a = $(this);
            Zl.dispatchEvent("/activation/resend-email");
            $.post("/reactive",
            function(b) {
                b.r ? X(b.msg) : a.replaceWith("已发送")
            });
            return l
        });
        dA(a);
        var b = new nu,
        k = $(".rename-tab", a);
        b.h(k.get(0));
        var m = function() {
            var a = $("input[placeholder]", k);
            a.filter(":visible").placeholder().each(function() {
                var a = $(this).data("placeholder");
                a && a.show()
            });
            a.filter(":hidden").each(function() {
                var a = $(this).data("placeholder");
                a && a.hide()
            })
        };
        b.on("select", m);
        var q = $(".rename-button", a),
        a = function() {
            q.remove();
            k.show();
            m()
        };
        q.one("click", a);
        "#rename-section" === location.hash && a()
    }
    a = $("#js-form-account-password");
    a.length && ($("input[placeholder]", a).each(function() {
        new Zp(this)
    }), dA(a));
    if (a = H("zh-blocked-member-list")) this.RJ = new Lw(a, l, i),
    this.RJ.k(),
    this.e().c(a, "click", this.GP); (a = H("zh-topic-block-editor")) && (new Uu(Gk)).h(a); (a = H("zh-setting-page-bind-wrap")) && (new Ey).h(a)
};
function dA(a) {
    $(".zg-form-text-input", a).each(function() {
        function a() {
            this.value !== this.defaultValue && (d.hide(), c.off("change input keyup", a))
        }
        var c = $(this),
        d = c.next(".validate-error");
        if (d.length) c.on("change input keyup", a)
    })
}
cA.prototype.GP = function(a) {
    var b = a.target;
    if (b && b.name) {
        var c = b.id.split("-")[1];
        Ol("取消黑名单", "取消黑名单之后，对方将可以：关注你、给你发私信、向你提问、评论你的答案、邀请你回答问题。",
        function(a) {
            if (a) {
                var a = Lc(b, "zm-item"),
                f = ya(L, a),
                a = new Y(i);
                Q(this.e(), a, "success",
                function() {
                    f && f();
                    var a = Xb("zm-item", H("zh-setting-page-black-list-wrap")); (!a || !a.length) && window.location.reload()
                });
                a.ajax(this.TT, "uid=" + c)
            }
        },
        this)
    }
};
function eA() {
    M.call(this);
    this.z = j;
    this.rj = 0;
    this.qI = "/oauth/friends/sina";
    this.BI = "/invitation/sina";
    this.Bb = new Id(200)
}
w(eA, ao);
r = eA.prototype;
r.k = function() {
    this.ac || (this.ac = i, this.j(), this.ua(), fA(this))
};
r.show = function() {
    this.k();
    this.z.n(i);
    var a = new Ob(this.z.f().offsetLeft, this.z.f().offsetTop);
    a.y = 102;
    Zf(this.z.f(), a)
};
r.j = function() {
    var a = H("zh-invitation-sina-diag");
    a && (this.d = a, this.z = new Nl(j, l), this.z.Ma("邀请微博好友"), nl(this.z, j), this.z.R().appendChild(this.d))
};
r.S = function(a) {
    if ("cancel" === a.target.name) this.z.n(l);
    else if ("invite" === a.target.name) {
        var a = Xb("zm-item-checkbox-right", this.wj),
        b = [];
        y.forEach(a,
        function(a) {
            a.checked && (b.push(a.value), a.checked = "")
        },
        this);
        b && b.length && (this.oy = new Y(i), this.e().c(this.oy, "complete", this.cJ), this.oy.ajax(this.BI, "sinaids=" + b.join(",")))
    }
};
function gA(a, b) {
    a.rj = b ? a.rj + 1 : a.rj - 1;
    a.UD.innerHTML = a.rj + ""
}
function fA(a, b) {
    a.EE || (a.EE = i, a.xhr = new Y(i), Q(a.e(), a.xhr, "complete", a.Xd), a.xhr.ajax(a.qI, b ? "force=1": ""))
}
r.Xd = function() {
    this.EE = l;
    var a = R(this.xhr);
    a && !a.r ? this.setData(a) : X(a.msg)
};
r.setData = function(a) {
    this.RK = i;
    this.kU.innerHTML = +a[0];
    this.rj = +a[1];
    this.UD.innerHTML = this.rj + "";
    this.data = a = a[3];
    var b = [];
    y.forEach(a,
    function(a) {
        b.push(['<div class="zm-item zm-item-h50"><input type="checkbox" value="', a[0], '" class="zm-item-checkbox-right" /><img class="zm-list-avatar-medium" src="', a[2], '" /><div class="zm-list-content"><strong class="zg-gray-normal">', a[1], '</strong><div class="zg-gray-normal">', a[3], "</div></div></div>"].join(""))
    },
    this);
    this.wj.innerHTML = b.join("")
};
r.ua = function() {
    this.Rs = I("zg-form-text-input", this.d); (new To("搜索微博好友")).h(this.Rs);
    this.qg = I("zm-command", this.d);
    this.wj = H("zh-invitation-sina-friends-list");
    this.MR = H("zh-invitation-sina-force-refresh");
    this.e().c(this.MR, "click",
    function() {
        this.wj.innerHTML = "列表刷新中，请稍侯...";
        fA(this, i)
    });
    this.e().c(this.wj, "click", this.yP);
    var a = Vb("strong", j, this.d);
    this.kU = a[0];
    this.UD = a[1];
    this.e().c(this.Rs, "focus", this.vz).c(this.Rs, "blur", this.zz).c(this.Bb, Kd, this.IQ);
    this.e().c(this.qg, "click", this.S)
};
r.yP = function(a) {
    var b = Lc(a.target, "zm-item");
    if (b) {
        var c = j,
        d = Vb("input", j, b)[0];
        if (E.has(b, "zm-item-active")) E.remove(b, "zm-item-active"),
        gA(this, i),
        c = l;
        else {
            var f;
            0 >= this.rj ? (X("您的邀请码已经用完"), f = l) : f = i;
            f ? (E.add(b, "zm-item-active"), gA(this, l), c = i) : "INPUT" === a.target.tagName && a.preventDefault()
        }
        "INPUT" !== a.target.tagName && (d.checked = c);
        a.stopPropagation()
    }
};
r.vz = function() {
    this.Bb.start()
};
r.zz = function() {
    this.Bb.stop()
};
r.IQ = function() {
    if (this.RK) {
        this.items || (this.items = Xb("zm-item", this.wj));
        var a = this.Rs.value;
        a == j || "" === a ? y.forEach(this.items,
        function(a) {
            S(a, i)
        }) : y.forEach(this.data,
        function(b, c) {
            this.items[c] && (a === b[0] || -1 < b[1].indexOf(a) ? S(this.items[c], i) : S(this.items[c], l))
        },
        this)
    }
};
r.cJ = function() {
    var a = R(this.oy);
    a && !a.r ? (X("邀请发送完毕"), this.z.n(l)) : X(a.msg)
};
function hA() {
    M.call(this);
    this.kI = "/oauth/unbind/sina"
}
w(hA, ao);
hA.prototype.k = function() {
    var a = H("zh-invite-send-invite-sina");
    a && this.e().c(a, "click", this.US); (a = H("zh-invitation-cancel-bind-sina")) && this.e().c(a, "click", this.PQ)
};
hA.prototype.US = function() {
    this.WG || (this.WG = new eA);
    this.WG.show()
};
hA.prototype.PQ = function() {
    Ol("解除绑定", "你确定要解除与新浪微博的绑定吗？",
    function(a) {
        if (a) {
            var b = new Y(i);
            Q(this.e(), b, "success",
            function() {
                var a = R(b);
                a && !a.r ? window.location.reload() : X(a.msg)
            });
            b.ajax(this.kI)
        }
    },
    this)
};
function iA(a) {
    M.call(this);
    this.url = a || "/topic"
}
w(iA, ao);
r = iA.prototype;
r.h = function(a) {
    this.element = a;
    var b = $("<ul>");
    this.yH = $("<li>");
    b.append(this.yH);
    $(a).append(b);
    this.zH || (this.zH = i, this.Pz = new Y(i), Q(this.e(), this.Pz, "success", this.VP), this.Pz.ajax(this.url, j, "POST"))
};
r.VP = function() {
    var a = R(this.Pz);
    a && (a && a.r ? X(a.msg) : (jA(this, this.yH, a.msg), this.zH = l, this.p()))
};
r.p = function() {
    this.e().c(this.element, "click", this.no)
};
r.no = function(a) {
    var b = (a = a.target) ? a.name: "";
    if (b) switch (b) {
    case "load":
    case "loadmore":
        if (!this.bo) {
            var b = a.getAttribute("data-token"),
            c = a.getAttribute("data-parent");
            this.bo = i;
            this.zj = new Y(i);
            Q(this.e(), this.zj, "success", this.Bp);
            this.Ry = a.parentNode;
            this.Ry.innerHTML = '<span class="zg-gray">加载中...</a>';
            this.zj.ajax(this.url + "?child=" + b + "&parent=" + c, j, "POST")
        }
        break;
    case "topic":
        window.location.href = a.href
    }
};
function jA(a, b, c) {
    var d = c[0],
    f = "";
    "topic" !== d[0] && d[3] && (f = 'data-parent="' + d[3] + '"');
    b.html('<a href="' + ("topic" === d[0] ? "/topic/" + d[2] + "/organize/entire": "javascript:;") + '" data-token="' + d[2] + '" ' + f + ' name="' + d[0] + '">' + d[1] + "</a><ul class='zm-topic-organize-list'></ul>");
    "topic" !== c[0][0] && b.addClass("zm-topic-organize-loadmore");
    b = $("ul", $(b));
    if (1 < c.length) {
        c = c[1];
        for (d = 0; d < c.length; d++) {
            var f = c[d],
            g = $("<li>").addClass("zm-topic-organize-item");
            b.append(g);
            jA(a, g, f)
        }
    }
}
r.Bp = function() {
    var a = R(this.zj);
    if (a) if (a && a.r) X(a.msg);
    else if (a = a.msg, a[1]) {
        $(this.Ry).hide();
        for (var b = $(this.Ry.parentNode), c = 0; c < a[1].length; c++) {
            var d = a[1][c],
            f = $("<li>").addClass("zm-topic-organize-item");
            "topic" !== d[0][0] && f.addClass("zm-topic-organize-loadmore");
            b.append(f);
            jA(this, f, d)
        }
        this.bo = l
    }
};
function kA(a, b, c) {
    iv.call(this, a, b, c)
}
w(kA, iv);
kA.prototype.hf = function(a) {
    Dk[0][0] === a ? kv(this) : kA.g.hf.apply(this, arguments)
};
kA.prototype.JA = function() {
    this.bc = l;
    var a = R(this.xhr);
    a && (a.r ? X(a.msg) : a.msg && (window.location.href = a.msg))
};
function lA(a) {
    this.rc = this.Mt = j;
    F.extend(this.s = {},
    this.V, a || {})
}
w(lA, T);
lA.prototype.V = {
    options: {},
    VJ: ".zh-answers-filter",
    tR: ".zh-answers-filter-popup"
};
lA.prototype.p = function() {
    lA.g.p.call(this);
    var a = this,
    b = this.s,
    c = $(this.d),
    d = $(b.VJ, c),
    f = $(b.tR, c);
    a.Mt = f;
    d && (z && d.add(f).css("line-height", "25px"), d.attr("tabindex", 0), this.Mt.html(mA(this)), d.add(f).hover(function() {
        f.show()
    },
    function() {
        f.hide()
    }), d.on("mouseenter",
    function() {
        U.Q({
            type: "ga_click_sorter",
            target: a
        })
    }), f.on("click", ".selectable",
    function() {
        var b = $(this),
        c = b.text(),
        b = b.data("key");
        f.hide();
        $(".lbl", d).text(c);
        a.rc = b;
        a.Mt.html(mA(a));
        a.dispatchEvent({
            type: "change",
            data: {
                key: b
            }
        });
        U.Q({
            type: "ga_click_sorter_item",
            target: a,
            data: {
                key: b
            }
        })
    }))
};
lA.prototype.O = n("rc");
lA.prototype.pa = ca("rc");
function mA(a) {
    var b = a.rc;
    return $.map(a.s.options,
    function(a, d) {
        return '<div tabindex="0" class="' + (d === b ? "active": "selectable") + '" data-key="' + d + '"><span class="lbl">' + a + '</span><i class="zg-icon zg-icon-double-arrow"></i></div>'
    }).sort(function(a) {
        return 0 <= a.indexOf("active") ? -1 : 1
    }).join("")
};
function nA() {
    T.call(this);
    var a = Dk;
    this.pf = a[0][3];
    this.Mz = a[0];
    this.KY = a[1];
    this.bY = a[2];
    this.lY = a[3];
    this.Mm = a[4];
    this.Rn = a[5];
    this.Ij = "topic"
}
w(nA, T);
r = nA.prototype;
r.k = function() {
    nw.aa(this);
    this.h(document.body)
};
r.p = function() {
    function a(a) {
        a && a.msg && X(a.msg)
    }
    nA.g.p.call(this);
    var b = H("zh-topic-side-head");
    if (b) {
        var c = I("zu-entry-focus-button", b); (this.Ag = c) && this.e().c(c, "click",
        function() {
            Dn(c, "topic", "", ["zg-btn-green", "zg-btn-white"])
        }); (this.Vf = H("zh-topic-operation-menu")) && this.e().c(this.Vf, "click", this.iz)
    }
    if (b = H("zh-current-topic-bio")) {
        var d = new iv(i, "/topic/bio/update", "bio");
        d.zc = ["tid=" + this.pf];
        d.Lc = '<a href="javascript:;" name="edit">你在 ' + this.Mz[0] + " 话题中的经验</a>";
        d.tq = i;
        d.h(b)
    } (b = H("zh-topic-top-answerer")) && (new lu(b, "people", ["zg-follow", "zg-unfollow"])).k();
    if (b = H("zh-topic-pedding-question-list")) b = new Pw(b, oA(this, "wait-for-answer"), "question", j, i),
    b.pc("question-item"),
    b.k();
    if (b = H("zh-topic-direct-question-list")) b = new Pw(b, j, "question", j, i),
    b.pc("question-item"),
    b.k();
    if (b = H("zh-topic-log-list")) b = new Pw(b, j, j, j, i),
    b.ae(Jw),
    b.k();
    if (b = H("zh-topic-title")) this.Cd = new kA(l, "/topic/update", "title"),
    this.Cd.zc = ["tid=" + this.pf],
    this.Cd.h(b),
    $(b).on("click", ".js-pin",
    function() {
        var a = $(this),
        b = a.attr("data-action");
        $.post(b, {
            tid: Dk[0][3]
        }).done(function(b) {
            b.r ? X(b.msg) : a.replaceWith(a.hasClass("pin") ? '<a href="javascript:;" data-action="/pin-topic/remove" class="js-pin zg-gray unpin topic-hover-content"><i class="z-icon-unpin"></i>取消固定</a>': '<a href="javascript:;" data-action="/pin-topic/add" class="js-pin zg-gray pin topic-hover-content"><i class="z-icon-pin"></i>固定话题</a>')
        })
    });
    if (b = H("zh-topic-desc")) d = $(b).find(".zm-editable-content").data("editable-maxlength"),
    this.kn = new mv(i, "/topic/update", "description", d),
    this.kn.Lc = '<a href="javascript:;" name="edit">添加话题描述</a></div>',
    this.kn.zc = ["tid=" + this.pf],
    this.kn.Vp = l,
    this.kn.Wz = l,
    this.kn.h(b);
    if (b = H("zh-topic-faq")) this.Iq = new mv(i, "/topic/" + encodeURIComponent(Dk[0][1]) + "/faq", "content", 400),
    this.Iq.Lc = '<div class="zm-topic-faq-container"><div class="zg-gray-normal">常见问题是该话题下经常会提到的问题的整理，以便后来者查阅（<a href="http://www.zhihu.com/question/20388061" class="zg-link-litblue">如何创建？</a>）</div><a href="javascript:;" name="edit" class="zg-link-litblue"><span class="zg-blue-edit"></span>为「' + Dk[0][0] + "」添加常见问题</a></div>",
    this.Iq.mZ = function(a) {
        return ! a ? "": a.replace(/(<\/?(?!ul|li|a|br)[^>\/]*)\/?>/gi, "")
    },
    this.Iq.Vp = l,
    this.Iq.h(b);
    if (Lk) $("div.topic-avatar").addClass("disabled");
    else if (b = I("zm-entry-head-avatar-edit-button")) {
        var d = new mz("topic"),
        f = I("zm-avatar-editor-preview");
        d.h(b);
        N(d, "beforepost",
        function() {
            $("<div class='avatar-edit-preview-loading topic'><span></span></div>").appendTo(f.parentNode)
        });
        N(d, "success",
        function(a) {
            f && (f.src = a.src);
            $(".avatar-edit-preview-loading").remove()
        })
    }
    if (b = H("zh-topic-feed-list")) this.Ft = b,
    this.la || (this.la = new wy(this.Ft, j, i), this.aa(this.la), this.e().c(this.la, "click!",
    function(a) {
        "comment" === a.namespace && a.hd.fill("category", this.Ij).fill("label", "topic_activity")
    }), this.la.Fj = function(a) {
        return $(a[a.length - 1]).attr("data-score") || 0
    }),
    this.la.k(),
    $(this.la.gb).removeClass("hidden");
    if (b = H("zh-topic-top-page-list")) this.la = new wy(b, j, i),
    this.aa(this.la),
    this.e().c(this.la, "click!",
    function(a) {
        "comment" === a.namespace && a.hd.fill("category", this.Ij).fill("label", "topic_activity")
    }),
    this.la.k();
    var g = this;
    g.la && g.e().c(g.la, "afterload",
    function(a) {
        U.Q({
            type: "ga_click_topic_more",
            data: a.data,
            target: g.la.gb
        })
    });
    if (b = H("zh-topic-followers-list-wrap")) b = new Pw(b, oA(this, "followers"), j, ["zg-btn-follow", "zg-btn-unfollow"], i),
    b.pc("zm-person-item"),
    b.k();
    if (H("zh-topic-organize-page-wrap")) {
        if (b = H("zh-topic-organize-parent-editor")) d = new Ou(j, this.pf, i),
        d.es = i,
        d.h(b),
        d.NA = l,
        d.addEventListener("remove_tag",
        function(a) { (a = a.data && a.data.id) && $("#wedge-" + a).remove()
        });
        if (b = H("zh-topic-organize-child-editor")) d = new Ou(j, this.pf, l),
        d.es = i,
        d.h(b),
        $("a.entire-link").insertAfter(d.zg).show();
        $("#zm-topic-manage-relation").on("change", '[type="checkbox"]',
        function() {
            var a = $(this).closest("li").attr("id").split("-")[1];
            $.post("/topic/update", {
                action: "set_topic_edge",
                parent_topic_id: a,
                topic_id: Dk[0][3],
                edge: this.checked ^ 0
            }).done(function(a) {
                a && a.msg && X(a.msg)
            })
        });
        this.ju = H("zh-topic-alias-input");
        new Zp(this.ju, "输入话题别名");
        this.ku = H("zh-topic-alias-list");
        this.e().c(H("zh-topic-alias-container"), "click", this.MQ);
        if (b = H("zh-topic-merge")) this.$ = new Tu,
        this.$.h(b); (b = H("zh-topic-merge-btn")) && this.e().c(b, "click", this.iQ)
    } (b = H("zh-topic-organize-page-children")) && (new iA("/topic/" + encodeURIComponent(Dk[0][1]) + "/organize/entire")).h(b);
    if (b = H("zh-topic-side-related-topics")) this.OR = b,
    this.zy = new Y(l),
    this.e().c(this.zy, "complete", this.sQ),
    this.zy.ajax("/topic/related?tid=" + this.pf);
    H("zh-topic-admin-page-wrap") && (b = H("zh-topic-del-btn")) && this.e().c(b, "click", this.RP);
    if (b = H("zh-topic-log-list-wrap")) b = new Pw(b, oA(this, "log"), j, ["zg-btn-follow", "zg-btn-unfollow"], i),
    b.ae(Jw),
    b.k();
    this.Tw(); (b = H("zh-topic-search-query-wrap")) && (new xy(b.getAttribute("data-tip"))).h(b); (b = I("zm-topic-search-input-new")) && new Zp(b, "在话题中搜索");
    var k = $(b);
    Ak.pb || k.focus(function() {
        k.addClass("stretch-to")
    }).blur(function() {
        k.removeClass("stretch-to")
    }); (b = I("zm-topic-ask-in-topic")) && this.e().c(b, "click", this.$s); (b = I("zm-topic-feed-container")) && (new lu(b, "question", ["zg-follow", "zg-unfollow"])).k(); (b = H("zh-topic-side-children-list")) && (new lu(b, "topic", ["zg-follow", "zg-unfollow"])).k(); (this.rr = H("zh-topic-info-add")) && this.e().c(this.rr, "submit", this.eQ); (this.KD = I("zm-topic-info-content-main", this.d)) && this.e().c(this.KD, "click", this.cQ);
    $("#zh-topic-manage-info-form").on("change", 'input[type="radio"]',
    function() {
        $.post("/topic/" + Dk[0][1] + "/information/manage", {
            info: $(this).val(),
            action: "change"
        }).done(a)
    });
    $("#zh-topic-manage-relation-form").on("change", 'input[type="radio"]',
    function() {
        $.post("/topic/update", {
            action: "set_topic_weaknode",
            topic_id: Dk[0][3],
            weak: $(this).val()
        }).done(a)
    });
    $("#zh-topic-manage-lock-form").on("change", '[type="checkbox"]',
    function() {
        $.post("/topic/lock", {
            url_token: Dk[0][1],
            lock_type: this.name,
            lock_value: $(this).is(":checked") ? 1 : 0
        }).done(a)
    }); (b = H("zh-topic-info-add")) && y.forEach(qc(b),
    function(a) {
        var b;
        a && (a.getAttribute && (b = a.getAttribute("data-placeholder"))) && new Zp(a, b)
    });
    V.wf || $(".js-may-disable").click(function() {
        yt.v().n(i);
        return l
    })
};
r.iQ = function() {
    this.kq = this.$.TB;
    if (!this.OE && this.kq) {
        this.OE = i;
        this.Ax = new Y(i);
        Q(this.e(), this.Ax, "success", this.dJ);
        this.Ax.ajax("/topic/" + encodeURIComponent(Dk[0][1]) + "/demand", "action=merge&target_topic_id=" + this.kq[3]);
        var a = H("zh-topic-merged-msg");
        S(H("zh-topic-merge"), l);
        S(a, i);
        a = Vb("a", j, a)[0];
        a.href = "/topic/" + this.kq[1];
        a.innerHTML = this.kq[0];
        this.$ && (this.$.ha.value = "")
    }
};
r.dJ = function() {
    var a = R(this.Ax);
    a && a.r ? X(a.msg) : this.OE = l
};
r.RP = function() {
    this.ZB || (this.ZB = i, this.gv = new Y(i), Q(this.e(), this.gv, "success", this.ZI), this.gv.ajax("/topic/" + encodeURIComponent(Dk[0][1]) + "/demand", "action=remove"))
};
r.ZI = function() {
    var a = R(this.gv);
    a && a.r ? X(a.msg) : (a = H("zh-topic-del-msg"), S(H("zh-topic-del-btn"), l), S(a, i), this.$ && (this.$.ha.value = ""), this.ZB = l)
};
r.MQ = function(a) {
    if ((a = a.target) && a.name) if ("add" === a.name) {
        if (a = this.ju.value) this.lu = new Y(i),
        Q(this.e(), this.lu, "complete", this.VI),
        this.lu.ajax(window.location.href, "action=add_alias&alias=" + encodeURIComponent(a))
    } else "remove" === a.name ? (this.Ay = new Y(i), a = a.parentNode.getAttribute("data-token"), Q(this.e(), this.Ay, "complete", this.iJ), this.Ay.ajax(window.location.href, "action=remove_alias&alias_token=" + a)) : "remove-merged" === a.name && (this.Dy = new Y(i), a = a.parentNode.getAttribute("data-token"), Q(this.e(), this.Dy, "complete", this.jJ), this.Dy.ajax("/topic/" + encodeURIComponent(Dk[0][1] + "/demand"), "action=remove&target_topic_id=" + a))
};
r.jJ = function() {
    var a = R(this.Dy);
    a && a.r ? X(a.msg) : pA(this, a.msg)
};
r.iJ = function() {
    var a = R(this.Ay);
    a && a.r ? X(a.msg) : pA(this, a.msg)
};
function pA(a, b) {
    var c = Vb("li", j, a.ku);
    y.forEach(c,
    function(a) {
        a.getAttribute("data-token") === b[1] && S(a, l)
    })
}
r.VI = function() {
    var a = R(this.lu);
    if (a && a.r) X(a.msg);
    else {
        var a = a.msg,
        b = K("li");
        b.setAttribute("data-token", a[1]);
        b.innerHTML = a[0] + ' <a name="remove" href="javascript:;" class="zg-link-gray">移除</a>';
        this.ku.appendChild(b);
        this.ju.value = "";
        S(this.ku.parentNode, i)
    }
};
function oA(a, b) {
    return ["/topic", encodeURI(a.Mz[1]), b].join("/")
}
r.iz = function(a) {
    this.ay ? this.bb.H() ? this.bb.n(l) : (this.bb.n(i), a.stopPropagation(), a.preventDefault(), this.Fk()) : (a.stopPropagation(), a.preventDefault(), this.pj(), this.Fk());
    this.ay = i
};
r.Fk = function() {
    Q(this.e(), document, "click",
    function() {
        this.bb.n(l)
    })
};
r.pj = function() {
    var a = H("zh-topic-side-head"),
    b = this.Vf.getAttribute("data-auth");
    this.bb = new ai;
    this.yw = i;
    "f-topic-manage" === b && this.bb.za(this.TQ = new Eh("管理话题"));
    this.bb.za(this.UQ = new Eh("组织话题"));
    this.bb.za(this.SQ = new Eh("话题日志"));
    this.yw && (this.bb.N(a), this.e().c(this.bb, "action", this.fj))
};
r.fj = function(a) {
    var b = "";
    a.target === this.TQ ? b = "admin": a.target === this.UQ ? b = "organize": a.target === this.SQ && (b = "log");
    window.location.href = ["/topic", this.Mz[1], b].join("/")
};
r.sQ = function() {
    var a = R(this.zy);
    if (a && !a.r) {
        var b = [];
        y.forEach(a,
        function(a) {
            b.push(nn(a, j, i))
        });
        this.OR.innerHTML = b.join("") + '<div class="zg-clear"></div>';
        a.length && S(H("zh-topic-side-related-topics-wrap"), i)
    }
};
r.Tw = function() {
    var a = H("zh-topic-search-list");
    a && (this.la = new uy(a, j, i), this.la.pc("zm-search-result-item"), this.la.Fj = function(a) {
        if (a && 0 !== a.length) return a[a.length - 1].getAttribute("data-offset")
    },
    this.la.k())
};
r.cQ = function(a) {
    var b = a.target;
    b && b.name && "remove" === b.name && (this.NN = b, this.LD || (this.LD = i, this.Lw = new Y(i), this.e().c(this.Lw, "success", this.dQ), a = "token=" + this.NN.parentNode.getAttribute("data-token") + "&action=remove&element=" + encodeURIComponent($(a.target).prev("[data-element]").text()), this.Lw.ajax("/topic/" + Dk[0][1] + "/information/manage", a, "POST")))
};
r.dQ = function() {
    this.LD = l;
    var a = R(this.Lw);
    a && (a.r ? X(a.msg) : a.msg && (a = a.msg, I("zm-topic-info-content-main", this.d).innerHTML = $(a).html()))
};
r.eQ = function(a) {
    a.preventDefault();
    this.MD || (this.MD = i, this.Nw = new Y(i), this.e().c(this.Nw, "success", this.bQ), a = qc(this.rr), this.Nw.ajax("/topic/" + Dk[0][1] + "/information/manage", "title=" + a[0].value + "&content=" + a[1].value + "&url=" + a[2].value + "&action=add", "POST"))
};
r.bQ = function() {
    this.MD = l;
    var a = R(this.Nw);
    a && (a.r ? X(a.msg) : a.msg && (a = a.msg, I("zm-topic-info-content-main", this.d).innerHTML = $(a).html(), a = qc(this.rr), y.forEach(a,
    function(a, c) {
        3 > c && (a.value = "")
    })))
};
r.$s = function() {
    if (!yq()) if (V.wf) {
        var a = Rv();
        a.show();
        Sv(a);
        var b = I("zm-topic-search-input-new");
        b.value && Pv(a, b.value);
        a.$.data.length || a.$.Zj(Dk[0])
    } else yt.v().n(i)
};
function qA() {
    this.sC = "even";
    this.cn = "current"
}
qA.prototype.k = function() {
    this.It = $("ul.zm-topic-cat-main").children();
    var a = this.ld = $("div.zh-general-list"),
    b = new yy;
    b.h(a.get(0));
    b.addEventListener(zy, this.Bp, l, this);
    this.XE = b;
    a.on("click", "a.follow",
    function() {
        Dn(this, "topic", ya(un, this), j, {
            follow_text: "关注"
        })
    });
    N(window, "hashchange", this.uF, l, this);
    this.uF() || (a.show(), this.Bp())
};
qA.prototype.Bp = function() {
    var a = this.ld.show().children();
    if (!a.length) return this.ld.html('<p class="zg-gray-normal" style="text-align:center;line-height:4;">没有子话题。</p>');
    a.removeClass("no-border " + this.sC);
    a.filter(":odd").addClass(this.sC);
    a = a.last();
    a.index() % 2 ? a.add(a.prev()).addClass("no-border") : a.addClass("no-border");
    var a = this.Sq(),
    b = a.params && a.params.topic_id,
    a = this.It.filter(function() {
        return $(this).attr("data-id") === String(b)
    });
    a.length && a.addClass(this.cn).siblings().removeClass(this.cn)
};
qA.prototype.Sq = function() {
    return this.ld.data("init")
};
qA.prototype.uF = function() {
    var a;
    a: {
        var b = decodeURIComponent(location.hash.slice(1));
        if (b && (a = this.It.filter(function() {
            return $(this).text() === b
        }), a.length && this.It.filter("." + this.cn).text() !== b)) {
            a.addClass(this.cn).siblings().removeClass(this.cn);
            a = {
                params: {
                    topic_id: a.data("id")
                }
            };
            var c = this.Sq();
            $.extend(i, c, a);
            this.ld.attr("data-init", JSON.stringify(c));
            this.ld.empty();
            $(this.XE.Kf()).hide();
            this.XE.zC();
            a = i;
            break a
        }
        a = h
    }
    return a
};
function rA() {
    M.call(this);
    this.Pd = [];
    this.km = "/profile/validate";
    this.vS = ["zu-reg-guide-one-password-level0", "zu-reg-guide-one-password-level1", "zu-reg-guide-one-password-level2"]
}
w(rA, ao);
r = rA.prototype;
r.k = function() {
    var a = H("zh-reg-step-one-wrap");
    if (a) {
        this.YY = a;
        this.fm = H("zh-reg-step-one-next");
        this.wr = new Wz("invite_code");
        this.wr.h(H("zh-reg-step-one-invite-code"));
        this.Pd.push(this.wr);
        this.wr.valid = i;
        a = new Wz("fullname");
        this.pP = H("zh-reg-step-one-name");
        a.h(this.pP); (new To("真实姓名")).h(a.Rd());
        $z(a, this.km);
        this.Pd.push(a);
        this.e().c(a.Rd(), "focus",
        function() {
            sA(this, "zh-reg-step-one-name-info")
        });
        a = new Wz("email");
        this.oL = H("zh-reg-step-one-email");
        a.h(this.oL); (new To("邮箱")).h(a.Rd());
        this.Pd.push(a);
        var b = [];
        this.VD = H("zh-reg-step-one-invite-type");
        b.push("invite_type=" + this.VD.value);
        b.push("invite_code=" + Yz(this.wr));
        $z(a, this.km, [b.join("&")]);
        a.Rd().disabled || a.PH();
        a.valid = i;
        a = new Wz("password");
        this.SF = H("zh-reg-step-one-password");
        this.mR = H("zh-reg-step-one-password-input");
        a.h(this.SF); (new xy("密码")).h(this.SF);
        $z(a, this.km);
        this.Pd.push(a);
        this.lR = a;
        this.e().c(this.mR, "keyup", this.xO);
        this.bf = H("zh-reg-step-one-password-info");
        this.e().c(a.Rd(), "focus",
        function() {
            sA(this, "zh-reg-step-one-password-info")
        });
        a = new Wz("confirm_password");
        this.AB = H("zh-reg-step-one-confirm-password");
        this.CK = H("zh-reg-step-one-confirm-password-input");
        a.h(this.AB); (new xy("确认密码")).h(this.AB);
        aA(a, u(function() {
            var a = tA(this, "password"),
            b = Yz(tA(this, "confirm_password")),
            a = Yz(a);
            return ! a || !b ? [1, ""] : a === b ? [1, ""] : [0, "两次输入密码不相同"]
        },
        this));
        this.Pd.push(a);
        this.e().c(this.CK, "focus",
        function() {
            sA(this, "zh-reg-step-one-confirmpassword-info")
        });
        a = new Wz("headline");
        this.xL = H("zh-reg-step-one-experience");
        a.h(this.xL);
        this.Pd.push(a);
        $z(a, this.km);
        this.yL = new To("一句话介绍你的职业、兴趣或特长");
        this.yL.h(a.Rd());
        this.xC = H("zh-reg-step-one-experience-input");
        this.e().c(this.xC, "focus",
        function() {
            sA(this, "zh-reg-step-one-bio-info")
        });
        new Xo(this.xC, 48);
        var c = new Wz("term");
        c.h(H("zh-reg-step-one-term"));
        this.Pd.push(c);
        c.valid = i;
        this.e().c(c.Rd(), "click",
        function() {
            bA(c)
        });
        aA(c,
        function(a) {
            return a ? [1, ""] : [0, "必须同意知乎协议才能注册"]
        });
        this.ut = H("zh-reg-step-one-specialty-container");
        this.$ = new Su;
        this.$.h(this.ut);
        var d = new Wz("topic_id");
        d.h(this.$.Jd);
        aA(d, u(function() {
            S(this.$.zg, this.$.data.length);
            return [1, ""]
        },
        this));
        this.e().c(this.$.ha, "blur",
        function() {
            bA(d)
        });
        this.e().c(this.$, "add_tag",
        function() {
            bA(d)
        });
        this.e().c(this.$, "remove_tag",
        function() {
            bA(d)
        });
        this.e().c(this.$.ha, "focus",
        function() {
            sA(this, "zh-reg-step-one-specialty-info")
        });
        this.e().c(this.$.ha, "keyup",
        function() {
            var a = this.$.ha.value,
            b = a.match(yk);
            b && (b = Math.max(56 - (b.length || 0), 28), this.$.ha.setAttribute("maxlength", b), a.length > b && (this.$.ha.value = a.substr(0, b)))
        });
        this.$.ha.setAttribute("maxlength", 56);
        this.Pd.push(d);
        S(this.$.zg, l);
        this.fm = H("zh-reg-step-one-next");
        this.e().c(this.fm, "click", this.FQ);
        this.OH = new Id(300);
        this.e().c(this.OH, Kd,
        function() {
            this.Pa( - 1 < y.Mq(this.Pd,
            function(a) {
                var b = a.valid,
                c = a.Gr,
                d = Yz(a);
                return "confirm_password" === c ? !d || !a.validator(d)[0] : "topic_id" === c ? !this.$.data.length: !b
            },
            this))
        });
        this.OH.start();
        y.forEach(this.Pd,
        function(a) {
            a.d.appendChild(K("div", "zu-user-guide-error-icon"))
        })
    }
    if (a = H("zh-reg-step-two-wrap")) {
        this.ZY = a;
        this.tE = H("zh-reg-step-two-left");
        this.vG = H("zh-reg-step-two-right");
        this.ha = H("zh-reg-topic-selector");
        this.sE = H("zh-reg-guide-left-col-content");
        this.vt = H("zh-reg-guide-selected-topics-detail-wrap");
        this.sH = H("zh-reg-guide-selected-topics");
        this.IT = H("zh-reg-step-two-topic-num");
        this.qH = H("zh-reg-step-two-topic-num-wrap");
        this.rC = Xb("zh-reg-guide-enter-link"); (new To("搜索感兴趣的话题")).h(this.ha);
        y.forEach(this.rC,
        function(a) {
            this.e().c(a, "click",
            function(b) {
                if (E.has(a, "zg-btn-disabled")) return b.preventDefault(),
                l
            })
        },
        this);
        uA(this);
        this.u = new iq("/topic-reg/autocomplete", this.ha, j, j, H("zh-reg-topic-selector-wrap"), i);
        this.e().c(this.u, "select", this.zQ);
        var f = this.u.Fe;
        f.Ws("POST");
        this.e().c(this.u, gq, u(function() {
            f.Fa("exclude_ids=" + y.map(Xb("zm-item", this.sE),
            function(a) {
                return a.getAttribute("data-topic-id")
            }).join(","))
        },
        this));
        this.e().c(this.tE, "click", this.KM);
        this.e().c(this.vG, "click", this.aN);
        this.IA = new mu(this.vt, j, ["zg-btn-follow", "zg-btn-unfollow"]);
        this.IA.k()
    }
};
r.aN = function(a) {
    var b = zn(this.vG, a.target);
    if (b && b.name) switch (b.name) {
    case "unfollow":
        this.bc = i;
        var a = new An,
        c = b.id.split("-")[2];
        this.xhr = new Y(i);
        Q(this.e(), this.xhr, "complete",
        function() {
            L(Lc(b, "zm-tag-editor-edit-item"));
            var a = H("topic-feed-" + c);
            a && L(a);
            uA(this)
        });
        a.add("action", "unfollow");
        a.add("topic_id", c);
        this.xhr.ajax("/welcome", a.Nb())
    }
};
r.KM = function(a) {
    if ((a = zn(this.tE, a.target)) && a.name) switch (a.name) {
    case "remove":
        this.Ey(a);
        break;
    case "focus":
        this.kw(a)
    }
};
r.kw = function(a) {
    this.bc = i;
    this.xhr = new Y(i);
    Q(this.e(), this.xhr, "complete",
    function() {
        var b = Lc(a, "zm-item");
        this.bc = l;
        var d = R(this.xhr);
        if (d && !d.r) {
            var f = vA(d.msg[0]);
            f && (lc(f, b), wA(f));
            S(b, l);
            f = K("div");
            f.innerHTML = d.msg[1]; (d = I("zm-item", f)) && nc(this.vt, d);
            b = gc('<div class="zm-tag-editor-edit-item"><a class="nor" href="javascript:;">' + b.getAttribute("data-topic-name") + '</a><a id="topic-id-' + b.getAttribute("data-topic-id") + '" href="javascript:;" class="zg-r3px zm-tag-editor-remove-button" name="unfollow"></a></div>');
            this.sH.appendChild(b);
            uA(this);
            this.IA.VX(d)
        } else X(d.msg)
    });
    var b = new An;
    b.add("action", "follow");
    b.add("topic_id", Lc(a, "zm-item").getAttribute("data-topic-id"));
    this.xhr.ajax("/welcome", b.Nb())
};
r.Ey = function(a) {
    this.bc = i;
    this.xhr = new Y(i);
    Q(this.e(), this.xhr, "complete",
    function() {
        var b = Lc(a, "zm-item");
        this.bc = l;
        var d = R(this.xhr);
        d && !d.r ? (d = vA(d.msg)) ? (oc(d, b), wA(d)) : S(b, l) : X(d.msg)
    });
    var b = new An;
    b.add("action", "remove");
    b.add("topic_id", Lc(a, "zm-item").getAttribute("data-topic-id"));
    this.xhr.ajax("/welcome", b.Nb())
};
function wA(a) {
    un(I("zh-reg-guide-topic-text", a), [245, 245, 245])
}
function uA(a) {
    var b = a.IT.innerHTML = Xb("zm-tag-editor-edit-item", a.sH).length;
    y.forEach(a.rC,
    function(a, c) {
        4 < b ? (E.Ne(a, "zg-btn-disabled", "zg-btn-blue"), 0 === c ? (S(a, i), S(this.qH, l)) : a.innerHTML = "进入知乎") : (E.Ne(a, "zg-btn-blue", "zg-btn-disabled"), 0 === c ? (S(a, l), S(this.qH, i)) : a.innerHTML = "请至少关注5个话题")
    },
    a);
    var c = 0 === Xb("zm-item", a.vt).length;
    S(H("zh-reg-guide-notopic-info"), c);
    S(a.vt, !c)
}
r.zQ = function() {
    var a = this.u.te(),
    b = y.slice(a, 1);
    "topic" === a[0] && (a = vA(b), nc(this.sE, a), wA(a))
};
function vA(a) {
    if (a && a.length) return gc('<div class="zm-item" data-topic-id="' + a[3] + '" data-topic-name="' + a[0] + '"><img src="' + a[2] + '" alt="' + a[0] + '"><a href="javascript:;" class="x-m" name="remove"></a><a href="javascript:;" name="focus" class="zg-btn zg-btn-follow zg-right">关注</a><a href="javascript:;" class="zh-reg-guide-topic-text">' + a[0] + "</a></div>")
}
function sA(a, b) {
    S(a.bf, l);
    a.bf = H(b);
    S(a.bf, i)
}
r.Pa = function(a) {
    a ? E.Ne(this.fm, "zg-btn-blue", "zg-btn-disabled") : E.Ne(this.fm, "zg-btn-disabled", "zg-btn-blue")
};
function tA(a, b) {
    var c = j;
    y.forEach(a.Pd,
    function(a) {
        a.Gr === b && (c = a)
    });
    return c
}
r.FQ = function() {
    if (!this.bc) {
        var a = H("zh-reg-step-one-next-url"),
        b = ["access_token=" + H("zh-reg-step-one-access-token").value],
        c = [];
        b.push("invite_type=" + this.VD.value);
        b.push("next=" + a.value);
        y.forEach(this.$.data,
        function(a) {
            a[3] && c.push(a[3])
        });
        y.forEach(this.Pd, u(function(a) {
            var c = Yz(a),
            g = a.Rd().kE,
            a = a.Gr;
            "topic_id" !== a && b.push(a + "=" + (g && g.Ga === c ? "": encodeURIComponent(Ra(c))))
        },
        this));
        b.push("topic_id=" + c.join(","));
        this.xhr = new Y(i);
        Q(this.e(), this.xhr, "complete", this.EQ);
        this.xhr.ajax("/register", b.join("&"))
    }
};
r.EQ = function() {
    var a = R(this.xhr);
    a && !a.r ? window.location.href = a.msg: y.forEach(a.errors,
    function(a) {
        Zz(tA(this, a[0]), a[1])
    },
    this)
};
r.xO = function() {
    var a = -1,
    b = H("zh-reg-step-one-password-level"),
    c = this.lR.Rd().value;
    c.match(/[a-z]/ig) && a++;
    c.match(/[0-9]/ig) && a++;
    c.match(/(.[^a-z0-9])/ig) && a++;
    6 > c.length && (a = 0);
    if (0 === c.length || 18 < c.length) a = -1;
    E.set(b, "");
    E.add(b, this.vS[a])
};
function xA(a) {
    T.call(this, a)
}
w(xA, T);
xA.prototype.j = function() {
    this.d = this.B().j("FORM", {
        method: "POST",
        style: "display:none"
    })
};
xA.prototype.post = function(a, b, c) {
    var d = this.f();
    d || (this.N(), d = this.f());
    d.action = b || "";
    d.target = c || "";
    var b = d,
    f, g = new Tq;
    for (f in a) c = a[f],
    pa(c) ? y.forEach(c, u(this.XA, this, g, f)) : this.XA(g, f, c);
    b.innerHTML = g.toString();
    d.submit()
};
xA.prototype.XA = function(a, b, c) {
    a.append('<input type="hidden" name="', Ra(b), '" value="', Ra(c), '">')
};
function yA() {
    T.call(this);
    var a = Fk || [0, 0];
    this.Pr = a[0];
    this.visible = !!a[1];
    this.Ij = "collection"
}
w(yA, T);
r = yA.prototype;
r.k = function() {
    nw.aa(this);
    this.h(document.body)
};
r.p = function() {
    yA.g.p.call(this);
    var a = H("zh-list-side-head");
    if (a) {
        var b = I("zu-entry-focus-button", a); (this.Ag = b) && this.e().c(b, "click",
        function() {
            Dn(b, "favlist", "", ["zg-btn-green", "zg-btn-white"])
        }); (this.Vf = H("zh-list-operation-menu")) && this.e().c(this.Vf, "click", this.iz)
    } (a = H("zh-single-answer-author-info")) && (new lu(a)).k(); (a = H("zh-list-create-new-list")) && this.e().c(a, "click", this.OS); (a = H("zh-fav-list-side-bar-creator")) && (new lu(a)).k(); (a = H("zh-fav-list-side-bar-report")) && this.e().c(a, "click", this.Cl); (this.pk = H("zh-favlist-webshare-container")) && this.e().c(this.pk, "click", this.kz);
    if (this.cc = H("zh-list-meta-wrap")) this.e().c(this.cc, "click", this.Cl),
    this.iX = H("zh-list-comment-num"),
    this.QF(); (a = H("zh-favlists-wrap")) && (new Pw(a, j, "favlist", j, i)).k();
    if (a = H("zh-list-answer-wrap")) $(a).on("click", "a[name=unfavo]", $.proxy(this.oN, this)),
    a = new uy(a, j, i),
    this.aa(a),
    this.e().c(a, "click!",
    function(a) {
        "comment" === a.namespace && a.hd.fill("category", this.Ij).fill("label", "collection_answer")
    }),
    a.pc("zm-item-fav"),
    a.k(); (a = H("zh-favlist-log-list-wrap")) && (new Pw(a, j, "favlist", j, i)).k(); (a = H("zh-favlist-following-wrap")) && (new Pw(a, j, "favlist", j, i)).k();
    if (a = H("zh-favlist-followers-wrap")) a = new Pw(a, j, "people", ["zg-btn-follow", "zg-btn-unfollow"], i),
    a.pc("zm-profile-section-item"),
    a.Xz(i),
    a.k();
    this.e().c(window, "hashchange", this.QF);
    this.Dj = new Bz;
    this.Dj.k()
};
r.oN = function(a) {
    var a = a.target,
    b = a.id.split("-"),
    c = b[1],
    b = b[2]; (new Y(i)).ajax("/collection/remove", "answer_id=" + c + "&favlist_id=" + b);
    if (b = Jc(a, "div", "zm-item")) a = Xb("zm-item-answer", b),
    1 === a.length ? L(b) : (a = y.find(a,
    function(a) {
        return a.getAttribute("data-aid") === c
    })) && L(a.parentNode)
};
r.QF = function() {
    var a = window.location.hash ? window.location.hash.substring(1) : j;
    a && 1 < (a + "").split("-").length && (this.Ri(), this.P.rf())
};
r.kz = function(a) {
    if ((a = zn(this.pk, a.target)) && a.name) {
        this.ih || (this.ih = Yw.v());
        var b;
        b = (new Fp(location.href)).Yf;
        var c = /collection\/(\w+)\//.exec(b);
        c && (b = "/collection/" + c[1]);
        Zw(this.ih, Fk[0], b, "f");
        this.ih.show();
        $w(this.ih, "tb-webshare-" + a.name)
    }
};
r.OS = function() {
    px().show()
};
r.iz = function(a) {
    this.ay ? this.bb.H() ? this.bb.n(l) : (this.bb.n(i), a.stopPropagation(), a.preventDefault(), this.Fk()) : (a.stopPropagation(), a.preventDefault(), this.pj(), this.Fk());
    this.ay = i
};
r.Fk = function() {
    Q(this.e(), document, "click",
    function() {
        this.bb.n(l)
    })
};
r.pj = function() {
    var a = H("zh-list-side-head");
    this.bb = new ai;
    this.yw = i;
    this.visible || this.bb.za(this.WQ = new Eh("设置为公开"));
    this.bb.za(this.RQ = new Eh("删除此收藏夹"));
    this.yw && (this.bb.N(a), this.e().c(this.bb, "action", this.fj))
};
r.Cl = function(a) {
    if ((a = a.target) && a.name) switch (a.name) {
    case "report":
        this.$f || (this.$f = new wz(this.Pr, "favlist"), this.$f.k());
        this.$f.show();
        break;
    case "edit":
        tx(px());
        break;
    case "addcomment":
        this.P ? this.P.rf() : this.Ri();
        this.P.vd() && this.P.jk("view_comments", parseInt(Gc(a), 10) || 0);
        break;
    case "remove":
        zA(this)
    }
};
r.fj = function(a) {
    a.target === this.WQ ? Ol("确定设置收藏夹为公开？", "收藏夹设置为公开后，将不能再设置为私密。",
    function(a) {
        a && (this.sY = !this.visible, this.HH = new Y(i), this.e().c(this.HH, "complete",
        function() {
            window.location.reload()
        }), this.HH.ajax("/collection/update", "favlist_id=" + this.Pr + "&is_public=1"))
    },
    this) : a.target === this.RQ && zA(this)
};
function zA(a) {
    Ol("删除收藏夹", "你确定要删除这个收藏夹吗？",
    function(a) {
        a && (a = new An, a.add("favlist_id", this.Pr), a.add("_xsrf", (new Jf(document)).get("_xsrf")), (new xA).post(Bn(a), "/collection/delete"))
    },
    a)
}
r.Ri = function() {
    this.P || (this.P = new bu(this.Pr, "favlist"), this.aa(this.P), this.e().c(this.P, "click!",
    function(a) {
        "comment" === a.namespace && (a.hd.fill("category", this.Ij).fill("label", "collection"), a.hd.action = a.hd.action.replace("favlist", "collection"))
    }), this.e().c(this.P, "change", this.gh), this.P.N(this.cc))
};
r.gh = function() {
    var a = Vb("a", j, this.cc)[0],
    b = this.P.Ha();
    fn(a, b ? b + " 条评论": "添加评论")
};
function AA() {}
w(AA, Yg);
ja(AA);
r = AA.prototype;
r.C = p("goog-tab");
r.lc = function() {
    return Xc.wA
};
r.j = function(a) {
    var b = AA.g.j.call(this, a); (a = a.Mf()) && this.Bd(b, a);
    return b
};
r.h = function(a, b) {
    var b = AA.g.h.call(this, a, b),
    c = this.Mf(b);
    c && a.Xs(c);
    if (a.Y & 8 && (c = a.getParent()) && ra(c.am)) a.Pb(8, l),
    c.am(a);
    return b
};
r.Mf = function(a) {
    return a.title || ""
};
r.Bd = function(a, b) {
    a && (a.title = b || "")
};
function BA(a, b, c) {
    fh.call(this, a, b || AA.v(), c);
    ih(this, 8, i);
    this.ak |= 9
}
w(BA, fh);
BA.prototype.Mf = n("dp");
BA.prototype.Bd = function(a) {
    this.F.Bd(this.f(), a);
    this.Xs(a)
};
BA.prototype.Xs = ca("dp");
ch("goog-tab",
function() {
    return new BA(j)
});
function CA() {}
w(CA, nh);
ja(CA);
CA.prototype.C = p("goog-tab-bar");
CA.prototype.lc = function() {
    return Xc.HI
};
CA.prototype.bz = function(a, b, c) {
    this.FE || (this.Wp || DA(this), this.FE = F.im(this.Wp));
    var d = this.FE[b];
    d ? (a.Oo(d == EA || d == FA ? qh: ph), a.GE = d) : CA.g.bz.call(this, a, b, c)
};
CA.prototype.Xe = function(a) {
    var b = CA.g.Xe.call(this, a);
    this.Wp || DA(this);
    b.push(this.Wp[a.GE]);
    return b
};
function DA(a) {
    var b = a.C();
    a.Wp = F.create(GA, b + "-top", HA, b + "-bottom", EA, b + "-start", FA, b + "-end")
};
function IA(a, b, c) {
    a = a || GA;
    this.Oo(a == EA || a == FA ? qh: ph);
    this.GE = a;
    rh.call(this, this.qb, b || CA.v(), c);
    JA(this)
}
w(IA, rh);
var GA = "top",
HA = "bottom",
EA = "start",
FA = "end";
r = IA.prototype;
r.IJ = i;
r.lf = j;
r.p = function() {
    IA.g.p.call(this);
    JA(this)
};
r.m = function() {
    IA.g.m.call(this);
    this.lf = j
};
r.removeChild = function(a, b) {
    KA(this, a);
    return IA.g.removeChild.call(this, a, b)
};
r.Wy = function(a) {
    IA.g.Wy.call(this, a);
    this.IJ && this.am(Mg(this, a))
};
r.am = function(a) {
    a ? a.$l(i) : this.lf && this.lf.$l(l)
};
function KA(a, b) {
    if (b && b == a.lf) {
        for (var c = Ng(a, b), d = c - 1; b = Mg(a, d); d--) if (b.H() && b.isEnabled()) {
            a.am(b);
            return
        }
        for (c += 1; b = Mg(a, c); c++) if (b.H() && b.isEnabled()) {
            a.am(b);
            return
        }
        a.am(j)
    }
}
r.jN = function(a) {
    this.lf && this.lf != a.target && this.lf.$l(l);
    this.lf = a.target
};
r.kN = function(a) {
    a.target == this.lf && (this.lf = j)
};
r.hN = function(a) {
    KA(this, a.target)
};
r.iN = function(a) {
    KA(this, a.target)
};
r.ve = function() {
    uh(this) || this.fd(this.lf || Mg(this, 0))
};
function JA(a) {
    a.e().c(a, "select", a.jN).c(a, "unselect", a.kN).c(a, "disable", a.hN).c(a, "hide", a.iN)
}
ch("goog-tab-bar",
function() {
    return new IA
});
function LA(a, b, c) {
    Lw.call(this, a, b, c)
}
w(LA, Lw);
LA.prototype.Xd = function(a) {
    if (a && !a.r) {
        var b = a.msg;
        if (a.r) return this.dispatchEvent({
            data: {
                Hg: this.Hg,
                pi: this.pi
            },
            type: "afterload"
        }),
        X(b);
        b.length ? (S(this.gb, 0 < b.length), this.offset += b.length, a = gc(b.join("")), this.tl("DIV" === a.nodeName ? [a] : qc(a)), this.d.appendChild(a), Mw(this), this.dispatchEvent({
            data: {
                Hg: this.Hg,
                pi: this.pi
            },
            type: "afterload"
        }), Nw(this, l)) : this.tk.hide()
    }
};
var MA = {
    RECOMMENDED: "feed_recommended",
    QUESTION_FOLLOW: "feed_question_follow",
    QUESTION_CREATE: "feed_question",
    ANSWER_VOTE_UP: "feed_answer_vote",
    ANSWER_CREATE: "feed_answer_answer"
};
LA.prototype.uN = function(a) {
    var b = a.currentTarget.d.getAttribute("data-feedtype"),
    b = MA[b];
    "comment" === a.namespace && b && a.hd.fill("category", "feed").fill("label", b)
};
LA.prototype.Bl = function(a) {
    var b = new vy;
    this.aa(b);
    this.e().c(b, "click!", this.uN);
    b.h(a);
    N(b, "ignore", u(function(a) {
        this.dispatchEvent({
            type: "ignore",
            L: a.L
        })
    },
    this));
    return b
};
LA.prototype.sy = function(a) {
    return {
        params: a,
        method: "next"
    }
};
function NA() {
    this.interval = 3E4
}
ja(NA);
function OA(a, b) {
    if (!a.Bb || b) b && clearInterval(a.Bb),
    a.Bb = setInterval(u(function() {
        PA(this)
    },
    a), a.interval)
}
function PA(a, b) {
    $(".feed-item-hook .time").each(function() {
        $(this).text(on($(this).data("timestamp")))
    });
    b && OA(a, b)
};
function QA() {
    T.call(this);
    this.Fr = {};
    this.ds = [];
    this.yC = (this.oO = "old" === $("#feed-ver").val() ? i: l) ? "zm-item": "feed-item-hook"
}
w(QA, T);
QA.prototype.p = function() {
    QA.g.p.call(this);
    this.D = $(this.d); (this.al = H("zh-main-feed-fresh-button")) && this.e().c(this.al, "click", this.TS);
    this.la = new LA(this.d, j, i);
    this.getParent() && this.getParent().aa(this.la);
    var a = "/node/" + $(this.d).data("init").nodename;
    this.la.url = a;
    this.la.pc("feed-item-hook");
    this.e().c(this.la, "itemcreated",
    function(a) {
        RA(this, a.data.DO)
    }).c(this.la, "afterload",
    function(a) {
        U.Q({
            type: "ga_click_feed_more",
            data: a.data
        })
    }).c(this.la, "ignore",
    function(a) {
        var c = a.L;
        F.forEach(this.Fr,
        function(a) {
            a.L === c && $(a.d).fadeOut()
        })
    });
    this.la.k();
    this.e().c(U, "homefeed", this.RM);
    this.D.on("click", ".js-more-similar",
    function() {
        $(this).parent().slideUp("fast").nextUntil(":not(.hidden)").slideDown("fast")
    });
    this.D.on("click", ".js-change-some",
    function() {
        In("feed", "intrests-change");
        var a = $(this),
        c = $(this).parent().parent();
        $.post("/node/HomeExtraFeedList", {
            method: "next",
            params: {}
        }).done(function(d) { ! d.r && d.msg && (0 < d.msg.length ? (c.find(".feed-item-hook").remove(), c.append(d.msg).find(".feed-item-hook").each(function() {
                SA(this)
            })) : a.replaceWith('<span class="zg-right zg-gray">没有更多内容了</span>'))
        })
    })
};
QA.prototype.TS = function() {
    var a = I("zm-home-question-list-devider", this.d);
    a && E.remove(a, "zm-home-question-list-devider");
    var a = this.ds.length,
    b = $("." + this.yC, this.d)[0];
    b && 5 <= a && ($(".feed-separator-hook", this.d).next(".feed-item-hook").css("border-top", "1px solid #eee").end().remove(), $(b).css("border-top", "none").before('<div class="feed-item-hook feed-separator-hook feed-separator"><span>上次你看到这里</span></div>'));
    y.forEach(this.ds,
    function(a) {
        var b = $("." + this.yC, this.d)[0];
        b ? lc(a, b) : this.d.appendChild(a)
    },
    this);
    this.ds = [];
    S(this.al, l);
    b = NA.v();
    PA(b, i);
    U.Q({
        type: "ga_click_feed_fresh",
        data: {
            count: a
        }
    })
};
QA.prototype.RM = function(a) {
    var b = Oa(a.lb),
    a = this.ds,
    c = a.length;
    if (b && !(500 < c)) {
        var b = gc(b),
        d = SA(b);
        if (d.fa) {
            if (F.DC(this.Fr,
            function(a) {
                return a.fa === d.fa
            })) return
        } else if (F.DC(this.Fr,
        function(a) {
            return a.L === d.L
        })) return;
        RA(this, d);
        a.push(b);
        c += 1;
        this.al && (this.al.innerHTML = (99 < c ? "99+": c) + " 条新动态", S(this.al, i))
    }
};
function SA(a) {
    var b = new vy;
    b.h(a);
    return b
}
function RA(a, b) {
    var c = Eg(Dg.v());
    a.Fr[c] = b;
    $(b.d).attr("data-fid", c)
};
function TA() {}
w(TA, T);
r = TA.prototype;
r.p = function() {
    TA.g.p.call(this);
    var a = H("zh-invite-select");
    a && this.e().c(a, "change", this.Wx); (a = I("zm-invite-list")) && this.e().c(a, "click", this.S); (this.Ew = H("zh-invite-ignore-all-btn")) && this.e().c(this.Ew, "click", this.IN)
};
r.S = function(a) {
    if ((a = a.target) && a.name) {
        if ("ignore" === a.name) {
            this.TX = a;
            this.UX = i;
            E.add(a, "zg-btn-disabled");
            this.JN = new Y(l);
            var b = "qid=" + a.getAttribute("data-qid") + "&uid=" + V[3] + "&op=pass";
            this.JN.ajax("/question/askpeople", b, "POST"); (b = a.parentNode) && hn(b, i)
        }
        "recover" === a.name && !this.gG && (this.eG = a, this.gG = i, E.add(a, "zg-btn-disabled"), a.innerHTML = "...", this.fG = new Y(l), this.e().c(this.fG, "success", this.hJ), a = "qid=" + a.getAttribute("data-qid") + "&uid=" + V[3] + "&op=recover", this.fG.ajax("/question/askpeople", a, "POST"))
    }
};
r.Wx = function(a) {
    var b;
    b = (new Fp(location.href)).bd.get("filter_by");
    if ((a = a.target) && a.value) a = a.value,
    a !== b && (window.location.href = "/question/invited?filter_by=" + a)
};
r.hJ = function() {
    this.gG = l;
    this.Pb(this.eG, "ignore");
    this.eG.name = "ignore"
};
r.Pb = function(a, b) {
    var c = a.parentNode,
    d = I("zm-invite-item-info-label", c);
    "ignore" === b ? (E.remove(a, "zg-btn-disabled"), E.remove(a, "recover"), E.add(a, "ignore"), E.add(c, "invite"), E.remove(c, "ignore"), d.innerHTML = "新邀请", a.name = "ignore", a.innerHTML = "忽略") : (E.remove(a, "zg-btn-disabled"), E.remove(a, "ignore"), E.add(a, "recover"), E.remove(c, "invite"), E.remove(c, "draft"), E.add(c, "ignore"), d.innerHTML = "已忽略", a.name = "recover", a.innerHTML = "恢复")
};
r.IN = function() {
    this.Fw || (this.Fw = i, this.FD = new Y(l), this.e().c(this.FD, "success", this.bJ), this.FD.ajax("/question/askpeople", "uid=" + V[3] + "&op=ignore_all", "POST"))
};
r.bJ = function() {
    this.Fw = l;
    S(this.Ew);
    this.Fw = l;
    y.forEach(Xb("zm-invite-item-control"), u(function(a) {
        this.Pb(a, "recover")
    },
    this))
};
function UA() {
    M.call(this)
}
w(UA, T);
UA.prototype.p = function() {
    UA.g.p.call(this);
    this.el();
    this.e().c(this.d, "click", this.S)
};
UA.prototype.S = function(a) {
    a = a.target;
    if (a.name) switch (a.name) {
    case "fold":
        $(a).parent().hide().prev().animate({
            height:
            "show"
        },
        200);
        break;
    case "fold-follow":
        $(a).parent().hide().prev().show();
        break;
    case "unfold-item":
        $(a).parent(".author-list").hide().siblings(".hidden").show()
    }
};
UA.prototype.el = function() {
    this.bo || (this.bo = i, this.zj = new Y(l), this.e().c(this.zj, "success", this.Rx), this.zj.ajax("/noti7/calendar", "", "GET"))
};
UA.prototype.Rx = function() {
    this.bo = l;
    var a = Ie(this.zj);
    if (a) {
        var b = H("zh-noti7-list-inner");
        /category/.test(a) ? (b.innerHTML = a, b && (a = new Lw(b, "/noti7/calendar", i), a.WA = function(a) {
            var b = K("div", "zm-item-more-wrap");
            b.innerHTML = a;
            lc(b, this.gb)
        },
        a.dr = function(a) {
            this.li = this.gb.getAttribute("data-next");
            return ! a || a.msg[0] && a.msg[1]
        },
        a.k())) : b.innerHTML = '<div class="empty"><span class="zg-gray-normal">您收到的消息会显示在这里</span></div>'
    }
};
function VA() {
    M.call(this);
    this.Cw = [];
    this.WB = []
}
w(VA, ao);
VA.prototype.k = function() {
    var a = H("home-suggest-block");
    a && (this.d = a, a = H("home-suggest-close-button"), Q(this.e(), a, "click",
    function() { (new Y(i)).ajax("/option", "key=no_show_lookup&value=1");
        S(this.d, l)
    }), a = H("home-suggest-refresh-button"), this.e().c(a, "click", this.rQ), this.ao = H("home-suggest-list"), (new lu(this.ao, "people")).k(), WA(this))
};
VA.prototype.rQ = function() {
    XA(this);
    return i
};
function XA(a) {
    for (var b = [], c = 0; 3 > c; c++) {
        var d = a.WB.shift();
        d && b.push(d)
    }
    3 === b.length ? (a.ao.innerHTML = b.join(""), b = Xb("suggest-item", a.ao), y.forEach(b,
    function(a) {
        this.Cw.push(a.id.split("-")[1])
    },
    a)) : WA(a)
}
function WA(a) {
    a.ao.innerHTML = '<img class="bubble-loading" src="/static/img/noti-loading.gif">';
    $.post("/lookup/suggest_member", {
        ids: a.Cw.join(",")
    }).done(u(a.PP, a))
}
VA.prototype.PP = function(a) {
    a.r || ((a = a.msg) && oa(a) && a.length ? (this.Cw = [], this.WB = a, XA(this)) : this.ao.innerHTML = "下面没有了")
};
function YA(a) {
    this.yD = i;
    this.Jx = 0;
    F.extend(this.s = {},
    this.V, a || {})
}
w(YA, T);
r = YA.prototype;
r.V = {
    source: "",
    Uh: 20,
    gz: i,
    Eu: "zg-btn-white zu-button-more"
};
r.p = function() {
    YA.g.p.call(this);
    this.s.gz && (this.Rp = K("div", {
        "aria-role": "button",
        className: this.s.Eu
    },
    "更多"), mc(this.Rp, this.d), this.e().c(this.Rp, "click", this.LO))
};
r.Bl = ia;
r.Xd = function(a) {
    a.r || (a = a.msg, a.hasmore ? this.Jx += this.s.Uh: (this.yD = l, this.s.gz && S(this.Rp, l)), a.htmls && this.N(a.htmls))
};
r.N = function(a) {
    var b = gc("");
    y.forEach(a,
    function(a) {
        a = gc(Oa(a));
        this.Bl(a);
        this.Q({
            type: "itemCreated",
            data: {
                item: a
            }
        });
        b.appendChild(a)
    },
    this);
    this.d.appendChild(b)
};
r.LO = function() {
    this.$d(this.Jx).done(u(this.Xd, this))
};
r.Uo = function(a) {
    this.yD && this.s.gz && zc(this.Rp, a ? "加载中": "更多")
};
r.$d = function(a) {
    var b = this,
    c = this.s,
    a = $.get(c.source, {
        start: a + c.Uh,
        limit: c.Uh
    });
    this.Uo(i);
    a.always(function() {
        b.Uo(l)
    });
    return a
};
function ZA(a) {
    za(this, a)
}
function $A(a) {
    this.UE = a;
    this.D = $("<li>");
    this.$t()
}
function aB(a) {
    this.sK = a;
    this.D = $("<ul>")
}
Ml = {};
Ml = function() {
    T.call(this)
};
w(Ml, T);
Ml.prototype.p = function() {
    Ml.g.p.call(this);
    this.WR()
};
Ml.prototype.WR = function() {
    var a = this.d;
    $.get("/trending").done(function(b) {
        b = $.map(b, ZA.HK);
        a.appendChild((new aB(b)).N().D.get(0))
    })
};
ZA.HK = function(a) {
    var b = {
        "0": "fullname",
        1 : "url_token",
        2 : "avatar",
        3 : "id",
        4 : "headline",
        5 : "reason",
        6 : "type"
    },
    a = y.reduce(a,
    function(a, d, f) {
        a[b[f]] = d;
        return a
    },
    {});
    return new ZA(a)
};
$A.prototype.ce = Mn('<a href="#" data-tip="s$r$不感兴趣" class="del"><i class="icon icon-ignore"></i></a><a data-tip="p$t$<%=url_token%>" href="/people/<%=url_token%>" class="avatar"><img src="<%=avatar%>"></a><div class="bd"><a href="/people/<%=url_token%>" data-tip="p$t$<%=url_token%>"><%=fullname%></a><div class="headline"><span title="<%-headline%>"><%-headline%></span></div><div class="ft"><span class="reason"><%=reason%></span> <span class="zg-bull">&bull;</span> <a class="zg-follow follow" href="#" id="sugg-<%=id%>">关注</a></div></div>');
$A.prototype.$t = function() {
    var a = this.UE,
    b = this.D;
    b.on("click", ".del",
    function(c) {
        c.preventDefault();
        $.post("/un_trending", {
            id: a.id,
            type: a.type
        });
        b.remove()
    }).on("click", ".follow",
    function(b) {
        b.preventDefault();
        Dn(this, a.type, ya(un, this), j, {
            follow_text: "关注"
        })
    })
};
$A.prototype.N = function() {
    this.D.html(this.ce(this.UE));
    return this
};
aB.prototype.N = function() {
    var a = this.D;
    $.each(this.sK,
    function(b, c) {
        a.append((new $A(c)).N().D)
    });
    return this
};
function bB() {
    T.call(this)
}
w(bB, T);
bB.prototype.k = function() {
    nw.aa(this);
    this.h(document.body)
};
bB.prototype.p = function() {
    bB.g.p.call(this);
    var a = H("js-home-feed-list");
    if (a) {
        var b = new QA;
        this.aa(b);
        b.h(a)
    }
    this.Vw(); (a = I("zm-invite-container")) && (new TA).h(a);
    H("home-settings-page-wrap") && (a = H("zh-topic-block-editor")) && (new Uu(Gk)).h(a); (a = H("zh-noti7")) && (new UA).h(a);
    if (a = H("zh-plazza-topic-search-wrap")) b = H("zh-plazza-topic-search-input"),
    (new To("搜索话题")).h(b),
    this.u = new iq("/topic-reg/autocomplete", b, j, j, a, l),
    this.u.Je(i),
    this.e().c(this.u, "select",
    function() {
        var a = y.slice(this.u.te(), 1);
        window.location.href = "/topic/" + a[1]
    });
    if (b = H("zm-home-sidebar-domain-entry-link")) a = !!b.getAttribute("data-expanded"),
    b = new uu(b, H("zm-home-sidebar-domain-entry-nav"), a),
    a && pd(b, "toggle",
    function() {
        Sl("/notifeature?feature=4", j, "GET");
        return i
    });
    $(".zm-side-pinned-topics").on("click", ".unpin",
    function() {
        var a = $(this).parent();
        $.post("/pin-topic/remove", {
            tid: $(this).attr("data-tid")
        }).done(function(b) {
            b.r || a.fadeOut()
        })
    });
    if (a = H("zh-virgin-answer-list")) a = I("zh-general-list", a),
    b = new yy,
    b.yb = "feed-item",
    b.Qw = Ay,
    b.h(a);
    if (a = H("zh-more-virgin-list")) a = I("zh-general-list", a),
    b = new yy,
    b.cg("people", ["zg-btn-follow", "zg-btn-unfollow"], i),
    b.yb = "suggest-item-inner",
    b.h(a); (new VA).k(); (a = H("suggest-list-wrap")) && (new lu(a, "people")).k(); (a = H("js-suggest-people")) && (new YA).h(a);
    if (a = H("suggest-people-tab-bar")) this.EG = 0,
    b = new IA,
    b.h(a),
    this.e().c(b, "select",
    function(a) {
        cB(this, a.target.getAttribute("data-index"))
    }),
    cB(this, 0);
    var a = V[1],
    c = H("zu-welcome-once");
    c && ("welcome" === location.hash.slice(1) ? (S(c, i), Mf.set("reg_noti_", a, 86400)) : a === Mf.get("reg_noti_") && S(c, i), N(I("x-m", c), "click",
    function() {
        location.hash = "";
        L(c);
        Mf.remove("reg_noti_")
    }));
    var d = $("#js-global-notify");
    if (d.length) {
        var f = new Xu;
        f.h(d[0]);
        fv(f);
        $(".zu-global-notify-close", d).click(function() {
            var a = $(this).data("id");
            $.post("/notice/read", {
                nid: a
            });
            f.w();
            d.remove()
        })
    }
    var g = H("zh-side-banner"),
    k = I("banner-close", g);
    g && k && (Ln() && $(k).css({
        display: "block"
    }), N(k, "click",
    function() {
        var a = new Y(l);
        a.ajax("/notifeature?feature=" + $(k).attr("data-token"), j, "GET");
        pd(a, "success",
        function() {
            hn(g, i)
        })
    }));
    a = NA.v();
    OA(a);
    var m = $("#js-debuts-entry .tour");
    m.length && $(".close-button", m).click(function() {
        var a = $(this).data("feature");
        $.get("/notifeature", {
            feature: a
        });
        m.fadeOut(100,
        function() {
            m.remove()
        })
    })
};
bB.prototype.Vw = function() {
    var a = H("zh-trendings");
    a && (this.QT = new Ml).h(a)
};
function cB(a, b) {
    S(a.f("suggesttab-" + a.EG), l);
    S(H("suggesttab-" + b), i);
    a.EG = b
};
function dB() {
    cl.call(this, j, l);
    this.kB = "zh-lightbox-showing";
    this.uT = "zh-lightbox-thumb";
    this.cf()
}
w(dB, cl);
ja(dB);
r = dB.prototype;
r.cf = function() {
    this.e().c(document, "click", this.Vq)
};
r.Vq = function(a) {
    a = a.target;
    if ("IMG" === a.tagName && E.has(a, this.uT)) {
        var b = a.getAttribute("data-original");
        if (b) if (ub) window.open(b);
        else if (!Lc(a, "editable")) {
            this.Fa('<div class="zm-light-box-x1" id="zm-light-box-x1"><div class="zm-light-box-x2" id="zm-light-box-x2"><img src="' + b + '" class="zm-light-box-img-el" /><div class="zm-light-box-footer"><a class="zm-light-box-show-origin" href="' + b + '" target="_blank">查看原图</a></div></div></div>');
            this.n(i);
            E.add(this.f(), "zm-light-box-fullscreen-image");
            var b = $b(),
            c = H("zm-light-box-x1"),
            d = H("zm-light-box-x2"),
            f = a.getAttribute("data-rawheight"),
            g = a.getAttribute("data-rawwidth"),
            g = g ? +g: 0; (f ? +f: 0) > b.height - 80 ? d.style.marginTop = "40px": c.style.lineHeight = b.height + "px";
            d.style.width = g > b.width - 80 ? b.width - 80 + "px": g + "px";
            U.Q({
                type: "ga_click_enlarge_image",
                target: a
            })
        }
    }
};
r.xa = ia;
r.focus = ia;
r.lw = function() {
    this.n(l);
    E.remove(document.body, this.kB)
};
r.$h = function() {
    dB.g.$h.call(this);
    E.add(document.body, this.kB);
    Q(this.e(), document, "click", this.lw)
};
r.j = function() {
    dB.g.j.call(this);
    E.add(this.f(), "zm-light-box")
};
r.wx = function() {
    this.Qc = this.B().j("div", this.sc + "-bg zm-light-box-background");
    S(this.Qc, l)
};
dB.v();
var eB = {};
eB.NT = In;
function fB(a) {
    Ds.call(this);
    this.jj = K("div", {
        style: "display:none"
    });
    this.d = this.tc = j;
    this.s = {};
    F.extend(this.s, this.V, a || {})
}
w(fB, Ds);
za(fB.prototype, eB);
fB.prototype.V = {
    kk: j,
    title: "Distraction Free Mode",
    JJ: "back",
    mS: "publish",
    tn: "zu-editing-distraction-free",
    eT: "sticky-goog-scrollfloater",
    FT: "goog-scrollfloater"
};
fB.prototype.Wc = mf("FullScreenPlugin");
rk.toggleFullScreen = {
    qa: "toggleFullScreen",
    K: "写作模式",
    Da: "tr-icon tr-max",
    factory: qj
};
r = fB.prototype;
r.De = ya(F.sg, {
    zW: "toggleFullScreen",
    WU: "enterFullScreen",
    XU: "exitFullScreen"
});
r.Cu = function() {
    var a = this.s,
    b = document.createElement("div");
    b.id = "zu-distraction-free-editor";
    b.innerHTML = '<div class="header"><div class="wrapper"><h1 class="title">' + a.title + '</h1><a href="#" class="' + a.JJ + '" name="return">返回</a><a href="#" class="' + a.mS + '" name="save">发布</a></div></div><div class="toolbar"><div class="tools"></div></div><div class="content" class="grid"></div>';
    document.body.appendChild(b);
    N(I("back", b), "click",
    function(a) {
        a.preventDefault();
        gB(this)
    },
    l, this);
    N(I("publish", b), "click",
    function(a) {
        a.preventDefault();
        this.dispatchEvent("save") && gB(this)
    },
    l, this);
    this.d = b;
    this.tc = I("content", b);
    this.st = K("div", {
        className: "toolbar-info"
    });
    this.s.kk || (this.s.kk = this.o.field)
};
r.Ve = function(a) {
    this.d || this.Cu();
    switch (a) {
    case "enterFullScreen":
        hB(this);
        break;
    case "exitFullScreen":
        gB(this);
        break;
    case "toggleFullScreen":
        E.has(document.body, this.s.tn) ? gB(this) : hB(this)
    }
};
function hB(a) {
    if (a.dispatchEvent("willEnterFullScreen")) {
        iB(a, "writing");
        var b;
        b = Oc(Sb((ga || window).document));
        a.WH = b;
        oc(a.jj, a.s.kk);
        a.tc.appendChild(a.s.kk);
        E.add(document.body, a.s.tn);
        a.rb = I(a.s.FT, a.d);
        a.rb.appendChild(a.st);
        var c = a.d;
        c.scrollTop = 0;
        var d = a.rb.getBoundingClientRect().top;
        c.onscroll = qf(u(a.MG, a),
        function() {
            return c.scrollTop > d
        });
        N(document, "keydown", a.po, l, a);
        Oa(Gc(a.o.field)) || a.o.Jf();
        a.dispatchEvent("enterFullScreen")
    }
}
function gB(a) {
    iB(a, "");
    a.rb.removeChild(a.st);
    a.MG(l);
    a.d.onscroll = j;
    qd(document, "keydown", a.po, l, a);
    oc(a.s.kk, a.jj);
    E.remove(document.body, a.s.tn);
    window.scrollTo(a.WH.x, a.WH.y);
    a.dispatchEvent("exitFullScreen")
}
function iB(a, b) {
    qd(window, "hashchange", a.tF, l, a);
    location.hash = b || "";
    setTimeout(u(function() {
        N(window, "hashchange", this.tF, l, this)
    },
    a))
}
r.tF = function() {
    var a = E.has(document.body, this.s.tn);
    "writing" === location.hash.slice(1) && !a ? hB(this) : a && gB(this)
};
r.po = function(a) {
    27 === a.keyCode && this.dispatchEvent("shouldExitFullScreenOnEscape") && gB(this)
};
r.MG = function(a) {
    E[a ? "add": "remove"](this.rb, this.s.eT)
};
function jB(a, b) {
    M.call(this);
    this.aF = a;
    this.ez = b || kB;
    a.Nc || (this.show = ia)
}
w(jB, ao);
var kB = "加载中...";
r = jB.prototype;
r.show = function() {
    mc(this.d = K("div", "zg-mt10", [K("h3", {
        style: "margin:0 0 5px;"
    },
    "分享到微博"), K("div", "zm-tab-content", [this.$W = K("div", {
        className: "zg-section zg-clear",
        innerHTML: '<label><input data-bindurl="/oauth/auth/sina?next=/oauth/callback" class="sina-checkbox" type="checkbox"><i class="zg-ico-sina"></i> 新浪微博</label> <label><input data-bindurl="/oauth/auth/qq?next=/oauth/callback" class="qq-checkbox" type="checkbox"><i class="zg-ico-qq"></i> 腾讯微博</label>'
    }), K("div", "zg-section", K("div", "zg-form-text-input", this.Ro = K("textarea", {
        style: "width:100%;height: 66px;"
    },
    "加载中..."))), K("div", "zm-command", [K("div", ["zm-item-meta", "zg-left"], this.ES = K("span")), this.fm = K("a", {
        "class": "zg-btn-blue weibo-share-button",
        href: "javascript:;"
    },
    "分享到微博")])])]), H("zh-question-answer-form-wrap"));
    this.e().c(U, "sina_callback",
    function(a) {
        this.az(a.lb.id, a.lb.name)
    }).c(U, "qq_callback",
    function(a) {
        this.$y(a.lb.id, a.lb.name)
    });
    this.uu();
    this.jf();
    pv.v().refresh();
    var a = this;
    this.ez === kB ? Sl("/answer/" + a.aF.Nc + "/sharetext",
    function(b) {
        if ((b = R(b.target)) && b.sina) a.ez = b.sina,
        a.ua()
    },
    "GET") : this.ua()
};
r.az = function(a) {
    this.XG = Mk = a;
    this.qc.checked = i;
    this.jf()
};
r.$y = function(a) {
    this.FR = Nk = a;
    this.nc.checked = i;
    this.jf()
};
r.jf = function() {
    var a = I("weibo-share-button", this.d),
    b = this.qc.checked || this.nc.checked;
    E.enable(a, "zg-btn-blue", b);
    E.enable(a, "zg-btn-disabled", !b)
};
r.ua = function() {
    this.Ro.value = this.ez;
    this.pz = new Xo(this.Ro);
    this.VG = new Xw(this.Ro, this.ES, 140, Ww);
    this.e().c(this.fm, "click", this.S)
};
r.uu = function() {
    this.qc = I("sina-checkbox", this.d);
    this.e().c(this.qc, "change", this.uo);
    this.nc = I("qq-checkbox", this.d);
    this.e().c(this.nc, "change", this.uo)
};
r.uo = function(a) {
    var a = a.target,
    b = a.getAttribute("data-bindurl");
    a === this.qc && !this.XG || a === this.nc && !this.FR ? (window.open(b), a.checked = l) : this.jf()
};
r.S = function(a) {
    if ((a = a.target) && E.has(a, "zg-btn-blue") && this.Ro.value) {
        a = new An(i);
        a.add("content", Cn(Ra(this.Ro.value)));
        var b = [];
        this.qc.checked && b.push("sina");
        this.nc.checked && b.push("qq");
        a.add("via", b.join(","));
        this.Pg(a);
        In("share", this.ax ? "answer_weibo": "question_weibo")
    } else X("请您选择或绑定微博后再进行分享！")
};
r.Pg = function(a) {
    a.add("aid", this.aF.fa);
    this.xhr = new Y(i);
    Q(this.e(), this.xhr, "complete", this.Am);
    this.xhr.ajax("/answer/share", a.Nb())
};
r.Am = function() {
    var a = R(this.xhr);
    a && a.r ? X(a.msg) : (X("分享发送完毕"), S(this.d, l))
};
function ry(a, b, c) {
    Eh.call(this, a, b, c);
    this.Ko(i)
}
w(ry, Eh);
ch("goog-checkbox-menuitem",
function() {
    return new ry(j)
});
function lB(a, b) {
    M.call(this);
    this.L = a;
    this.Pc = b;
    this.data = Bk
}
w(lB, ao);
r = lB.prototype;
r.k = function() {
    this.Nl = H("zh-question-redirect-info");
    this.Nl.innerHTML && (this.Un = i);
    this.e().c(this.Nl, "click",
    function(a) {
        "cancel" === a.target.name && mB(this)
    });
    var a = H("zh-question-side-header-wrap");
    if (Ak.pb && !Ak.hE && a) {
        var b = H("zh-question-filter-wrap");
        b ? lc(a, b) : a.style[z ? "styleFloat": "cssFloat"] = "none"
    } (this.Vf = H("zh-question-operation-menu")) && this.pj(); (this.Ag = Vb("a", j, a)[0]) && this.e().c(this.Ag, "click",
    function() {
        Dn(this.Ag, "question", "", ["zg-btn-green", "zg-btn-white"])
    });
    this.e().c(Zl, "anon_change",
    function(a) {
        var b = H("zh-question-side-invitation-anon");
        b && S(b, a.ab); (b = H("zh-question-side-invitation-notanon")) && S(b, !a.ab);
        this.El && this.El.Pa(gn(this.data.zs) || !a.ab)
    }); (this.pk = H("zh-question-webshare-container")) && this.e().c(this.pk, "click", this.kz);
    if (a = H("zh-question-related-questions")) b = Vb("A", j, a),
    y.forEach(b,
    function(a, b) {
        a.setAttribute("data-gaq", "relative_question|click_question_link|NA|" + b)
    },
    this),
    N(a, "click",
    function(a) {
        if (a = a.target.getAttribute("data-gaq")) a = a.split("|"),
        In(a[0], a[1], a[2], +a[3]);
        return i
    })
};
r.pj = function() {
    this.bb = new ai;
    var a = this.data.Em,
    b = this.Vf.getAttribute("data-auth"),
    b = b ? b.split(",") : [];
    if (a == j || 0 === a) {
        this.bb.za(this.ls = nB("使用匿名身份", i));
        this.ls.Jc(this.data.ab);
        if (!Jk || !y.contains(Jk, "question_op_redirect")) this.bb.za(this.El = nB(this.Un ? "撤消重定向": "问题重定向")),
        this.El.Pa(gn(this.data.zs) || !this.data.ab);
        y.contains(b, "auth-f-manage") && this.bb.za(this.VQ = nB("更新话题页显示", l));
        this.e().c(this.bb, "action", this.fj);
        this.ls && this.e().c(Zl, "anon_change",
        function(a) {
            this.ls.Jc( !! a.ab)
        });
        a = new Ui("Settings", this.bb);
        a.Hs = i;
        Wi(a);
        a.h(this.Vf)
    }
};
function nB(a, b) {
    return ! a ? new $h: b ? new ry(a) : new Eh(a)
}
r.fj = function(a) {
    var b = this.ls;
    a.target === b ? Yl(b.Be() ? 1 : 0,
    function(a) {
        a || b.Jc(!b.Be())
    }) : a.target === this.El ? (this.Ao || (this.Ao = new Hw(this.L), this.e().c(this.Ao, "change", this.RO)), this.bb.n(l), this.Un ? mB(this) : this.Ao.show()) : a.target === this.QQ ? Sl("/question/" + this.data.Nc + (this.QQ.Be() ? "/unlock_summary": "/lock_summary"),
    function() {
        top !== window ? top.location.href = "/question/" + Bk.Nc: window.location.reload()
    },
    "POST") : a.target === this.VQ && $.post("/refresh_topic_feeds", {
        q: Bk.Nc
    }).done(function(a) {
        a.r || X("操作成功！")
    })
};
r.RO = function() {
    this.Nl.innerHTML = '<div class="zg-wrap"><div class="zu-global-nitify-inner"><span class="zu-global-notify-icon"></span>此问题将跳转至 <a href="/question/' + this.Ao.Ps + '">' + this.Ao.$F + '</a> （<a href="javascript:;" name="cancel">撤消重定向</a>）</div></div>';
    S(this.Nl, i);
    this.Un = i;
    this.El.Us("撤消重定向")
};
function mB(a) {
    a.Nl.innerHTML = "";
    S(a.Nl, l);
    a.Un = l;
    a.El.Us("问题重定向");
    Sl("/question/unredirect", j, "POST", "qid=" + a.L + "&rqid=" + a.Ps)
}
r.kz = function(a) {
    if ((a = zn(this.pk, a.target)) && a.name) {
        var b = Yw.v(),
        c = $("#zh-question-webshare-container").data();
        Zw(b, c.id, c.url, c.type);
        b.show();
        $w(b, "tb-webshare-" + a.name);
        U.Q({
            type: "ga_click_share_question_box",
            target: a,
            data: {
                type: a.name
            }
        })
    }
};
function oB() {
    T.call(this)
}
w(oB, T);
oB.prototype.aa = function(a, b) {
    oB.g.aa.call(this, a, b);
    this.e().c(a, "beforeexpand", this.nN)
};
oB.prototype.nN = function(a) {
    var b = a.target;
    Kg(this,
    function(a) {
        b !== a && a.vd() && a.Xa(l)
    })
};
oB.prototype.w = function() {
    this.e().w();
    oB.g.w.call(this)
};
function pB() {
    M.call(this);
    this.z = j;
    this.SY = "tb-mail";
    this.dh = -1
}
w(pB, ao);
r = pB.prototype;
r.k = function() {
    this.ac || (this.ac = i, this.j(), this.ua())
};
r.show = function() {
    this.k();
    this.fi();
    S(this.d, i);
    this.z.n(i)
};
r.fi = function() {
    this.Ah.value = this.Ah.getAttribute("data-content")
};
r.qG = function() {
    var a = H("zh-webshare-mail-content");
    a.value = a.getAttribute("data-content")
};
r.j = function() {
    var a = H("zh-question-outer-invite-dialog");
    a && (this.d = a, this.z = new Nl(j, l), this.z.Ma("邀请好友回答问题"), nl(this.z, j), this.z.R().appendChild(this.d))
};
r.ua = function() {
    this.Wm = Xb("zm-command", this.d);
    this.e().c(this.Wm[0], "click", this.S);
    this.Pi = H("zh-invite-mail-reciiver");
    this.oC = H("zh-invite-mail-title");
    this.Ah = H("zh-invite-mail-content");
    new Xo(this.Ah)
};
r.S = function(a) {
    if ((a = this.Nd(a.target)) && a.name) switch (a.name) {
    case "cancel":
        this.z.n(l);
        break;
    case "send_mail":
        this.Xx()
    }
};
r.Xx = function() {
    if (this.Pi.value && this.oC.value) {
        var a = new An(i);
        a.add("email", this.Pi.value);
        a.add("title", this.oC.value);
        a.add("content", Cn(Ra(this.Ah.value)));
        this.Pg(a)
    }
};
r.Pg = function(a) {
    a.add("qid", Bk.L);
    this.xhr = new Y(i);
    Q(this.e(), this.xhr, "complete", this.Am);
    this.xhr.ajax("/question/invite", a.Nb())
};
r.Am = function() {
    var a = R(this.xhr);
    a && a.r ? X(a.msg) : (this.z.n(l), X("邀请发送完毕"), this.Pi.value = "")
};
function qB(a, b) {
    T.call(this);
    this.ER = a;
    this.ws = b;
    this.xr = this.T = j;
    this.qd = l;
    this.Nn = j;
    this.sj = [];
    this.eH = [];
    this.bi = l;
    this.MO = "loading";
    this.WD = "zg-btn-white";
    this.jO = "invite-button"
}
w(qB, T);
r = qB.prototype;
r.j = function() {
    this.d = K("div", {
        style: "display:none",
        className: "question-invite-panel"
    })
};
r.N = function() {
    this.bi = i;
    qB.g.N.call(this)
};
r.p = function() {
    qB.g.p.call(this);
    var a = this.d,
    b = this.e();
    if (!this.bi) {
        b.c(Zl, "anon_change", this.reload);
        var c = I("cancel-anon", a);
        c && b.c(c, "click", this.fM);
        if (!I("error-message")) {
            c = I("mail-invite-button", a);
            b.c(c, "click", this.RS);
            c = I("search-input", a);
            I("invite-title", a);
            this.Yw = I("invite-status", a);
            b.c(this.Yw, "click", this.gM);
            var d = I("suggest-persons", a);
            d && (b.c(d, "click", this.nw), this.dH = d);
            $(a).on("hover", ".invited-shortlist",
            function() {
                $(".invited-hovercard", a).toggleClass("in")
            });
            var f = this,
            g = Mn('<img class="zm-item-img-avatar zg-left" src="<%=avatar%>"><span class="zu-autocomplete-row-name" title="<%-fullname%>"><%-fullname%></span><span class="zg-gray-normal zu-autocomplete-row-description"><%=headline%></span>');
            this.T = new Ct(c, {
                Ad: 8,
                source: "/people/autocomplete",
                Co: c.offsetParent,
                placeholder: "搜索你想邀请的人",
                N: function(a, b, c) {
                    c.innerHTML = g(a.data)
                },
                filter: function(a) {
                    return y.filter(a,
                    function(a) {
                        var b = a.id;
                        return ! y.find(f.sj,
                        function(a) {
                            return a.id === b
                        })
                    })
                },
                select: function(a) {
                    rB(f, "ask_to_answer_search");
                    Hm(f.ws, a.id).done(function(b) {
                        if (b.r) return X(b.msg);
                        f.sj.unshift(a);
                        sB(f);
                        tB(f, a.id, i)
                    });
                    return ""
                }
            });
            this.eH = $(this.dH).children().map(this.RF).get();
            this.sj = $(".invited-fulllist", this.Yw).children().map(this.RF).get()
        }
    }
};
r.Za = function() {
    qB.g.Za.call(this);
    this.e().w()
};
r.$m = p('<i class="icon icon-spike"></i><div class="spinner">正在加载，请稍等 <img src="http://static.zhihu.com/static/img/spinner2.gif"></div>');
r.reload = function() {
    this.vd() ? this.Ol() : this.bi = i
};
r.Ol = function() {
    var a = this,
    b = this.MO;
    this.Za();
    E.add(this.d, b);
    this.d.innerHTML = this.$m();
    return $.get("/node/QuestionInvitePanelV2", {
        params: {
            question_id: this.ER
        }
    }).done(function(c) {
        a.bi = l;
        E.remove(a.d, b);
        c = gc(Oa(c));
        S(c, a.vd());
        oc(c, a.d);
        a.d = c;
        a.p()
    })
};
r.m = function() {
    qB.g.m.call(this);
    this.xr = j;
    this.T.w()
};
r.vd = n("qd");
r.expand = function() {
    this.Xa(i)
};
r.collapse = function() {
    this.Xa(l)
};
r.Xa = function(a) {
    if (a !== this.qd) {
        this.dispatchEvent(a ? "beforeexpand": "beforecollapse");
        var b = u(function() {
            this.dispatchEvent(a ? "expand": "collapse")
        },
        this);
        a && this.bi ? this.Ol().done(b) : b();
        this.qd = a;
        S(this.d, a)
    }
};
r.rf = function() {
    this.Xa(!this.qd)
};
r.RS = function() {
    this.xr || (this.xr = new pB);
    this.xr.show();
    rB(this, "ask_to_answer_email")
};
function uB(a, b, c) {
    a = a.WD;
    c ? (E.add(b, a), zc(b, "收回邀请")) : (E.remove(b, a), zc(b, "邀请回答"))
}
r.fM = function() {
    Yl(0)
};
function rB(a, b) {
    var c = Bk;
    a.dispatchEvent(new Qt("click!invitation", {
        category: "invitation",
        action: "ask_to_answer",
        label: b,
        value: c.cE ? j: c.Gp
    }))
}
r.nw = function(a) {
    var b = a.target;
    if ("BUTTON" === b.tagName || E.has(b, this.jO)) {
        this.Nn && "pending" === this.Nn.state() && this.Nn.abort();
        "related" === b.getAttribute("data-type") ? rB(this, "recommended_relative_questions") : rB(this, "recommended_top_answerers");
        var c = b.getAttribute("data-uid"),
        a = this.WD,
        d = u(function(a) {
            a ? (uB(this, b, i), a = y.find(this.eH,
            function(a) {
                return a.id === c
            }), this.sj.unshift(a), sB(this)) : (uB(this, b, l), vB(this, c))
        },
        this);
        E.has(b, a) ? (this.Nn = Im(this.ws, c), d(l)) : (this.Nn = Hm(this.ws, c).done(function(a) {
            a.r && (X(a.msg), d(l))
        }), d(i))
    }
};
r.gM = function(a) {
    a = a.target;
    "BUTTON" === a.tagName && (a = a.getAttribute("data-uid"), Im(this.ws, a), tB(this, a, l), vB(this, a))
};
function tB(a, b, c) {
    var d = $(".invite-button", a.dH).filter(function() {
        return this.getAttribute("data-uid") === b
    }).get(0);
    d && uB(a, d, c)
}
r.RF = function() {
    var a = $(this),
    b = $(".zm-item-link-avatar", a);
    return {
        id: String($("button", a).data("uid")),
        avatar: $("img", b).attr("src"),
        fullname: b.attr("title"),
        url_token: b.attr("href").split("/").slice( - 1)[0]
    }
};
function vB(a, b) {
    a.sj && y.SR(a.sj,
    function(a) {
        return a.id === b
    }) && sB(a)
}
r.IS = '您已邀请 <span class="invited-shortlist"><% helper.each(persons.slice(0, 2), function(person, i, sliced) { %><a href="/people/<%=person.url_token%>" class="zg-link-gray"><%=person.fullname%></a><%= i !== sliced.length - 1 ? "、" : ""%><% }); %><%=helper.fullList()%></span><% if (persons.length > 2) { %> 等 <%=persons.length%> 人 <% } %>';
r.ML = '<div class="invited-hovercard"><i class="icon icon-spike"></i><ul class="invited-fulllist"><% helper.each(persons, function(person, i) { %><li><a title="<%-person.fullname%>" class="zm-item-link-avatar" href="/people/<%=person.url_token%>"><img src="<%=person.avatar%>" class="zm-item-img-avatar"></a><a href="/people/<%=person.url_token%>" class="zg-link-gray" title="<%-person.fullname%>"><%=person.fullname%></a><button class="cancel-button zg-link-btn zg-link-gray" data-uid="<%=person.id%>">收回邀请</button></li><% }) %></ul></div>';
function sB(a) {
    var b = a.sj,
    c = {
        each: y.forEach,
        fullList: function() {
            return Mn(a.ML, {
                persons: b,
                helper: c
            })
        }
    };
    a.Yw.innerHTML = b.length ? Mn(a.IS, {
        persons: b,
        helper: c
    }) : ""
};
function wB(a) {
    this.data = a;
    this.P = j
}
w(wB, T);
r = wB.prototype;
r.p = function() {
    wB.g.p.call(this);
    this.e().c(this.d, "click", this.Cl);
    var a = I("panel-container", this.d);
    a && (this.xl = new oB, this.aa(this.xl), this.xl.h(a), xB(this));
    this.e().c(this, "click!",
    function(a) {
        "comment" === a.namespace && a.hd.fill("label", "question")
    })
};
r.Cl = function(a) {
    var b = (a = zn(this.d, a.target)) && a.name;
    if (b) switch (b) {
    case "report":
        this.$f || (this.$f = new wz(this.data.L, "question"), this.$f.k());
        this.$f.show();
        break;
    case "addcomment":
        if ("添加评论" === $.trim($(a).text()) && this.Cj(0, "question_add_comment_start")) break;
        this.P ? this.P.rf() : this.Ri();
        this.P.vd() && this.P.jk("view_comments", parseInt(Gc(a), 10) || 0);
        break;
    case "remove":
        Ol("删除问题", "你确定要删除这个问题吗？相关的评论也将被删除。",
        function(a) {
            if (a) {
                var b = new Y(i);
                N(b, "complete",
                function() {
                    var a = R(b);
                    a && !a.r ? window.location.href = "/": X(a.msg)
                });
                b.ajax("/question/delete/" + this.data.L)
            }
        },
        this);
        break;
    case "admin":
        b = this.RI;
        b || (b = new fx, b.h(H("zh-question-admin-menu")), Kg(b,
        function(a) {
            a.pa(a.f().getAttribute("data-action"))
        }), this.e().c(b, "action",
        function(a) {
            var a = this.zA = a.target,
            b = qt.v();
            b.Uk = {
                id: this.data.L,
                type: "question"
            };
            wt(b, a.f(), u(this.AK, this));
            b.n(i)
        }), this.RI = b);
        b.H() ? b.n(l) : hx(b, new Ci(a, 1, i), 0, new Nf(5, 0, 5, 0));
        break;
    case "share":
        U.Q({
            type:
            "ga_click_share_question_box",
            target: a
        });
        this.$q();
        break;
    case "invite":
        this.nw()
    }
};
r.Cj = function(a, b) {
    return ! V.ob() ? (Fn.v().Ga = b, Fn.v().n(i), Fn.v().Wg(), i) : l
};
function xB(a) {
    var b = new qB(a.data.L, a.data.Nc),
    c = H("question-invite-panel");
    c ? (b.h(c), b.Xa(i), a.dispatchEvent(new Qt("show!invitation", {
        category: "invitation",
        action: "ask_to_answer_card",
        label: ""
    }))) : b.N(a.xl.f());
    a.xl.aa(b);
    a.Xw = b
}
r.nw = function() {
    if (this.Xw) {
        this.Xw.rf();
        var a = this.Xw.vd();
        this.dispatchEvent(new Qt("click!invitation", {
            category: "invitation",
            action: (a ? "show": "hide") + "_ask_to_answer_card",
            label: "?",
            value: this.data.Gp
        }))
    } else xB(this)
};
r.$q = function() {
    if (V.ob()) {
        var a = Yw.v();
        Zw(a, this.data.L, "/question/" + this.data.Nc, "q");
        a.show();
        $w(a, "tb-webshare-sina")
    } else Fn.v().n(i),
    Fn.v().Wg()
};
r.AK = function(a) {
    this.zA.O(a.msg.action);
    this.zA.Us(a.msg.caption)
};
r.Ri = function(a, b) {
    if (this.P) if (b) this.P.w();
    else return;
    this.P = new bu(this.data.L, "question");
    this.xl.aa(this.P);
    a && a && (this.P.kH = a);
    this.e().c(this.P, "change", this.gh);
    this.P.N(this.xl.f())
};
r.gh = function() {
    var a = $("a.comment", this.d)[0],
    b = this.P.Ha();
    fn(a, b ? b + " 条评论": "添加评论")
};
function yB(a, b, c) {
    jy.call(this, a, b, c)
}
w(yB, jy);
yB.prototype.h = function(a) {
    yB.g.h.call(this, a);
    this.Ge && this.Jo(this.NK.ab)
};
yB.prototype.H = function() {
    return $(this.d).is(":visible")
};
function zB() {
    T.call(this);
    this.data = Bk || {};
    this.L = this.data.L;
    this.Un = l;
    this.yf = {};
    this.Ck = [];
    this.Bk = [];
    this.Bj = 0;
    this.Fp = j
}
w(zB, T);
var AB = {
    Qt: "vote",
    iI: "added_time"
};
r = zB.prototype;
r.Cm = "zm-item-answer";
r.k = function() {
    nw.aa(this);
    this.h(document.body)
};
r.p = function() {
    zB.g.p.call(this);
    var a = H("zh-question-meta-wrap");
    a && (this.ys = new wB(this.data), this.aa(this.ys), this.ys.h(a));
    this.Uw();
    this.NG()
};
r.NG = function() {
    this.qu = AB.Qt;
    this.data.Nc = Bk.Nc;
    BB(this, i);
    if (V.ob()) {
        this.$ = new Ju(this.data.LT, this.data.L);
        this.$.Xr = 5;
        this.$.$r = 1;
        this.$.es = i;
        this.$.h(I("zm-tag-editor", this.d));
        this.e().c(this.$, ["remove_tag", "add_tag"],
        function() {
            U.Q("ga_edit_question_topic_changed")
        });
        this.e().c(this.$, "start_editing",
        function() {
            U.Q("ga_question_topic_edit_finish_changed")
        });
        this.Cd = new Gz(this.data.L, "/question/title", "content", l, i);
        this.Cd.tq = i;
        this.Cd.sd = i;
        this.Cd.Tj = i;
        var a = gn(this.data.zs);
        this.Cd.Sn = a;
        this.Cd.h(H("zh-question-title"));
        this.e().c(this.Cd, "change",
        function() {
            Zl.dispatchEvent("question_title_change");
            document.title = this.Cd.$a() + " - 知乎"
        });
        this.e().c(this.Cd, "click_edit",
        function() {
            U.Q("ga_question_title_edit_start")
        });
        this.e().c(this.Cd, "cancel_edit",
        function() {
            U.Q("ga_question_title_edit_cancel")
        });
        this.e().c(this.Cd, "save_changed",
        function() {
            U.Q("ga_question_title_edit_save_changed")
        });
        this.e().c(this.Cd, "save_unchanged",
        function() {
            U.Q("ga_question_title_edit_save_unchanged")
        })
    }
    this.Pw();
    Q(this.e(), this, "answers_inited", this.CP); (this.Pu = H("zg-question-suggested-topics")) && this.e().c(this.Pu, "click", this.AP);
    this.Kn();
    this.Dj = new Bz;
    this.e().c(this.Dj, "change", this.iy);
    this.Dj.k();
    this.e().c(window, "hashchange",
    function() {
        CB(this)
    });
    this.Fp = new T;
    this.aa(this.Fp);
    this.Fp.h(this.Hp);
    this.ND()
};
r.Uw = function() {
    bx("question", this.L, "read");
    this.e().c(this, ["click!", "show!"],
    function(a) {
        "comment" === a.namespace && a.hd.fill("category", "question_answer").fill("label", "question_answer");
        "invitation" === a.namespace && a.hd.fill("label", "question_page")
    })
};
r.CP = function() {
    var a = V[4];
    Ck && Ck.length && (a = Ck[0][1]);
    this.sb = new Tx(this.data.ab, V, a);
    this.aa(this.sb);
    this.sb.h(this.wJ);
    Hk && Hk.length ? this.sb.Fa(Hk[0]) : !Ak.pb && A && this.sb.Fa("<p></p>"); ! this.data.Rn && !this.Bj && (this.data.Em && this.data.Em.length && this.data.Em[3] !== V[3] ? this.sb.Pa(l, "只有 " + ln(this.data.Em) + " 能回答此问题") : this.sb.dg());
    this.e().c(this.sb, "change", this.BP);
    this.e().c(this.sb, "cancel_delete_answer", this.KP); (a = this.sb.Rd()) && "writing" === location.hash.slice(1) && a.execCommand("toggleFullScreen");
    DB(this);
    CB(this, j);
    EB(this);
    this.e().c(Zl, "anon_change",
    function(a) {
        this.data.ab = a.ab
    });
    if (a = $("#zh-question-filter-wrap")[0]) {
        var b = this,
        c = new lA({
            options: {
                vote: "按票数排序",
                added_time: "按时间排序"
            }
        });
        c.pa("vote");
        c.h(a);
        b.e().c(c, "change",
        function(a) {
            a = a.data.key;
            if (a !== b.qu) {
                b.qu = a;
                var c = function(a, b) {
                    return a - b
                },
                g = function(a, b) {
                    return b - a
                };
                a === AB.Qt ? y.YG(b.Ck, "vote", g) : a === AB.iI && y.YG(b.Ck, "added_time", c);
                y.forEach(b.Ck,
                function(a) {
                    a = this.yf[a.aid];
                    a.Ig || mc(a.f(), this.gO)
                },
                b)
            }
        })
    }
    this.e().c(Zl, "answer_reorder", this.rN)
};
r.iy = function() {
    this.vN = i;
    this.gk = $(this.Dj.uP)[0];
    mc(this.gk, H("zh-question-redirect-info"));
    S(this.gk, i);
    Ak.pb || (this.Xi = new Xu, this.Xi.h(this.gk), fv(this.Xi));
    this.e().c(this.gk, "click", this.eD)
};
function BB(a, b) { ! V.ob() || !b ? (FB(a, "zh-question-detail", ia), FB(a, "zh-question-answer-summary", ia)) : (FB(a, "zh-question-detail", a.SN), FB(a, "zh-question-answer-summary", a.UN))
}
function FB(a, b, c) {
    if (b = H(b)) {
        var d = new fy;
        a.e().c(d, "expand", c).c(d, "invalid", c);
        d.h(b)
    }
}
r.SN = function(a) {
    a = a.target.f();
    this.Lb = new Gz(this.data.L, "/question/detail", "content", i, j, 600);
    var b = gn(this.data.zs);
    this.Lb.Sn = b;
    this.Lb.gX = Hn;
    I("zm-editable-content", a).innerHTML && (this.Lb.Tj = i);
    this.Lb.h(a);
    this.e().c(this.Lb, "click_edit",
    function() {
        U.Q("ga_question_supplement_edit_start")
    });
    this.e().c(this.Lb, "cancel_edit",
    function() {
        U.Q("ga_question_supplement_edit_cancel")
    });
    this.e().c(this.Lb, "save_changed",
    function() {
        U.Q("ga_question_supplement_edit_save_changed")
    });
    this.e().c(this.Lb, "save_unchanged",
    function() {
        U.Q("ga_question_supplement_edit_save_unchanged")
    })
};
r.UN = function(a) {
    var a = a.target.f(),
    b = H("zh-question-answer-summary-link"),
    c;
    if (a && (Ak.Zw || !this.data.iT)) c = new mv(i, "/question/summary", "content"),
    c.zc = ["id=" + this.data.L],
    c.Vp = l,
    c.h(a);
    if (b) {
        var d = H("zh-question-answer-summary-wrap");
        this.e().c(b, "click",
        function() {
            c && (S(d, i), c.dg())
        }).c(d, "click",
        function(a) {
            "cancel" === a.target.name && (a = !c.Lf(), S(d, !a))
        })
    }
    this.bZ = c
};
r.eD = function(a) {
    if ("close" === a.target.name) {
        if (this.Xi && (dv(this.Xi), cv(this.Xi, l), history.replaceState)) {
            var a = new Fp(location.href),
            b = a.Nb();
            b.remove("q");
            b.remove("psq");
            history.replaceState({},
            "", a.Yf + "?" + b.toString())
        }
        S(this.gk, l);
        S(this.As, l)
    } else if ("A" === a.target.tagName && "zh-question-suggest-reask" === a.target.id && (S(this.As, l), U.fireEvent("query_string_change")), b = "a" === $(a.target).prop("tagName").toLowerCase() ? a.target: this.Nd(a.target, "A")) a.preventDefault(),
    a.stopPropagation(),
    a = b.getAttribute("data-source") || b.href,
    b = a.indexOf("#"),
    a = 0 > b ? j: a.substr(b + 1),
    CB(this, a && decodeURIComponent(a))
};
function EB(a) {
    var b = 0,
    c = 0,
    d = 0;
    y.forEach(a.Bk,
    function(a) {
        a = this.yf[a];
        a.Of || (a.Ig ? c++:d++, b++)
    },
    a);
    a.data.Zp = +a.rK.innerHTML;
    V.ob() || (a.data.Zp = 0);
    a.data.Gp = d;
    S(a.uh, 0 < a.data.Zp);
    a.UA && zc(a.UA, d ? d + " 个回答": "还没有回答");
    a.ZG && S(a.ZG, 1 < a.data.Gp);
    S(a.uh, 0 < a.data.Zp)
}
r.ND = function() {
    this.RN || (this.VA = Xb(this.Cm, this.Hp), this.CJ = this.VA.length, this.yJ = 200, this.MB = 0);
    this.RN = i;
    for (var a = this.MB,
    b = this.yJ,
    c = this.CJ,
    d = a; d < c && d < a + b;) GB(this, this.VA[d], d),
    d++;
    d < c ? (this.MB = d, setTimeout(u(this.ND, this), 30)) : this.dispatchEvent("answers_inited")
};
function GB(a, b, c, d) {
    d = new yB(a.L, j, d);
    a.Fp.aa(d);
    d.h(b);
    a.yf[d.fa] = d;
    a.Bk.push(d.fa);
    a.e().c(d, "change", a.Nx);
    d.Ge && (a.Bj = d.fa, d.EJ = V, a.e().c(d.Oe, "change", a.QM), a.nP = d);
    d.Ig ? d.Ge && a.Vm.appendChild(d.f()) : a.Ck.push({
        added_time: d.Wu,
        vote: c,
        aid: d.fa
    });
    d.Of && S(d.f(), l)
}
r.QM = function() {
    var a = this.nP,
    b = a.Oe.$a()[0];
    S(a.d, l);
    var c = K("div");
    c.innerHTML = b;
    lc(c, a.d);
    b = I(this.Cm, c);
    this.yf[a.fa] = j;
    this.Bk = y.filter(this.Bk,
    function(b) {
        return b !== a.fa
    },
    this);
    var d = 999;
    this.Ck = y.filter(this.Ck,
    function(b) {
        b.aid === a.fa && (d = b.vote);
        return b.aid !== a.fa
    },
    this);
    L(a.d);
    GB(this, b, d, l);
    pc(c)
};
r.rN = function(a) {
    1 >= this.Bk.length || this.qu !== AB.Qt || un(this.yf[a.TA].f())
};
r.Nx = function(a) {
    a = a.target;
    if (a instanceof yB) {
        var b = a.f();
        switch (a.Xt) {
        case "collap":
            this.Vm.appendChild(b);
            E.add(b, "zm-item-collapsed");
            EB(this);
            break;
        case "cancel_collap":
            this.Hp.appendChild(b);
            E.remove(b, "zm-item-collapsed");
            HB(this, b);
            EB(this);
            break;
        case "set_delete":
            DB(this);
            EB(this);
            break;
        case "cancel_delete":
            HB(this, this.yf[this.Bj].f()),
            DB(this),
            EB(this)
        }
    }
};
function DB(a) {
    var b = j,
    b = j;
    a.Bj && (b = a.yf[a.Bj], b = b.Of ? '你已经删除了对该问题的回答，如果需要修改，请先 <a href="javascript:;" name="cancel_delete">撤消删除</a>': '一个问题你只能回答一次，但你可以对 <a href="#' + b.fa + '">现有的回答</a> 进行修改');
    a.data.Rn && (b = '该问题目前已经被锁定，无法添加新答案。<a href="http://www.zhihu.com/question/19604313" target="_blank">问题为什么会被锁定？</a>');
    b && a.sb.Pa(l, b)
}
r.Pw = function() {
    this.UA = H("zh-question-answer-num");
    this.gO = H("zh-question-answer-insert-placeholder");
    this.Hp = H("zh-question-answer-wrap");
    this.uh = H("zh-question-collapsed-link");
    this.Vm = H("zh-question-collapsed-wrap");
    this.rK = H("zh-question-collapsed-num");
    this.wJ = H("zh-question-answer-form-wrap");
    this.gk = H("zh-question-notification-summary");
    this.ZG = H("zh-answers-filter");
    this.As = H("zh-add-question-sug");
    this.uh && this.e().c(this.uh, "click", this.lT);
    this.As && this.e().c(this.As, "click", this.eD)
};
function IB(a, b) {
    var c = H("zh-question-collapsed-switcher");
    b ? (c.name = "collap", a.wB = i, S(a.Vm, i), E.add(a.uh, "zu-question-collap-title-active")) : (a.wB = l, c.name = "expand", S(a.Vm, l), E.remove(a.uh, "zu-question-collap-title-active"))
}
r.lT = function(a) {
    if ((a = zn(this.uh, a.target)) && a.name) if ("expand" === a.name) {
        if (!this.tK) {
            this.tK = i;
            var b = this,
            c = this.Vm,
            a = $.get("/node/QuestionCollapsedAnswerListV2", {
                params: {
                    question_id: this.data.L
                }
            });
            a.done(function(a) {
                a = gc(a + " ");
                y.forEach(qc(a),
                function(a) {
                    GB(b, a, 99999)
                });
                IB(b, i);
                E.remove(c, "zm-question-collapsed-list-loading");
                c.appendChild(a)
            });
            var d = qc(c)[0];
            d && (S(d, l), a.done(function() {
                S(d, i)
            }));
            S(c, i);
            E.add(c, "zm-question-collapsed-list-loading")
        }
        IB(this, i)
    } else IB(this, l)
};
r.KP = function() {
    var a = this.yf[this.Bj];
    a.Of = l;
    a.status = 0;
    sy(a);
    HB(this, a.f())
};
r.BP = function() {
    var a = this.sb.Ep.checked,
    b = {
        TE: i,
        title: "确认放弃匿名身份？",
        content: "你在该问题下的赞同和关注行为将以实名显示。"
    },
    c = u(function() {
        if (!this.xhr || !this.xhr.wb()) {
            var b = this.sb.Lf();
            if (b) {
                var c = new Y(i),
                g = new Np,
                k = a ? 1 : 0;
                g.add("id", this.L).add("content", b).add("anon", k);
                c.on("success",
                function() {
                    Bk.ab !== k && Zl.dispatchEvent(new $l(k));
                    var a = R(this.xhr);
                    if (a && !a.r) {
                        var b = K("div");
                        b.innerHTML = a.msg[0];
                        this.Hp.appendChild(b);
                        GB(this, rc(b), this.Bk.length, i);
                        pc(b);
                        DB(this);
                        Bk.ab || (this.oP = new jB(this.yf[this.Bj]), this.oP.show());
                        EB(this)
                    } else X(a.msg)
                },
                l, this);
                c.ajax("/answer/add", g.toString());
                this.xhr = c
            }
        }
    },
    this);
    Bk.ab && !a ? Ol(b,
    function(a) {
        a && c()
    }) : c()
};
r.Nd = ba();
r.AP = function(a) {
    if ((a = this.Nd(a.target)) && a.name) {
        var b = a.name;
        "close" === b ? S(this.Pu, l) : "addtag" === b && (this.$.ke(a.id.split("-")[1], a.innerHTML), S(a, l))
    }
};
r.Kn = function() {
    this.lz = new lB(this.L);
    this.lz.k()
};
function CB(a, b) {
    if (b = b || location.hash.slice(1)) {
        var c = (b + "").split("-"),
        d = l,
        f = -1;
        if (1 < c.length) if (0 === c[0] || "qc" === c[0]) {
            a.ys.Ri(c[1], i);
            var g = a.ys.P;
            g.kH = c[1];
            fu(g)
        } else f = c[0],
        d = i;
        else f = b;
        if ( - 1 !== f && (f = a.yf[f])) f.Ig && !a.wB ? HB(a, a.uh) : (("comment" === c[1] || !c[1]) && HB(a, f.f()), d && (oy(f, j, i), c = f.P, c.kH = "cmt", fu(c)))
    }
}
function HB(a, b) {
    if (b) {
        var c = zg(document.body).top,
        d = a.vN ? og(a.gk).height: 0,
        c = {
            paddingTop: c + d
        };
        "number" === $.type(c) && (c = {
            offsetTop: c
        });
        c.SH = Sn;
        Tn(b, c);
        un(b);
        a.Xi && a.Xi.gp()
    }
};
function JB() {
    zB.call(this);
    this.data = Bk;
    this.L = this.data.L
}
w(JB, zB);
r = JB.prototype;
r.NG = function() { (this.uq = H("zh-single-answer-disable-wrap")) && this.e().c(this.uq, "click", this.iS);
    this.sl();
    this.Kn();
    var a = $("#zh-question-answer-collestions");
    a.length && $("a[name=focus]", a).click(function() {
        Dn(this, "favlist")
    });
    BB(this, l)
};
r.Uw = function() {
    this.e().c(this, ["click!", "show!"],
    function(a) {
        "invitation" === a.namespace && a.hd.fill("label", "answer_page")
    });
    JB.g.Uw.call(this)
};
r.iS = function(a) {
    a.target && a.target.name && (a = this.Pc, a.Of = l, a.status = 0, sy(a))
};
r.sl = function() {
    var a = I("zm-item-answer", H("zh-question-answer-wrap"));
    if (a) {
        this.Pc = new yB(this.L);
        this.aa(this.Pc);
        this.Pc.h(a);
        a = this.e();
        a.c(this.Pc, "change", this.Nx);
        if (this.Pc.qO) {
            a.c(Zl, "anon_change",
            function(a) {
                var b = a.ab,
                a = $("#js-sidebar-author-info");
                if (!$("a[name=focus]", a).length) {
                    var f = {
                        "0": "fullname",
                        1 : "url_token",
                        2 : "avatar_path",
                        3 : "hash",
                        4 : "headline"
                    },
                    g = y.reduce(V,
                    function(a, b, c) {
                        a[f[c]] = b;
                        return a
                    },
                    {}),
                    b = Mn(this.FJ, {
                        author: !b && g
                    });
                    a.html(b)
                }
            });
            var b = this.Pc.Oe;
            b && a.c(b, "change",
            function() {
                var a = Oa(b.$a()[0]),
                a = gc(a);
                oc(a, this.Pc.d);
                this.sl(a)
            })
        }
        KB(this);
        oy(this.Pc, {
            autofocus: l,
            AE: i
        })
    }
};
r.FJ = '<h3>关于作者</h3><% if (author) { %>    <a class="zm-list-avatar-link" href="/people/<%= author.url_token %>" tabindex="-1">        <img class="zm-list-avatar-medium" src="<%= author.avatar_path.replace("_s.","_m.") %>"/>    </a>    <div class="zm-list-content-medium">        <h2 class="zm-list-content-title">            <a href="/people/<%= author.url_token %>"><%= author.fullname %></a>        </h2>        <div class="zg-gray-normal"><%= author.headline || "" %></div>    </div><% } else { %>    <a class="zm-list-avatar-link" href="javascript:;">        <img class="zm-list-avatar-medium" src="http://img.zhihu.dev:4080/66/6b/666b0abfc_m.jpg"/>    </a>    <div class="zm-list-content-medium">        <h2 class="zm-list-content-title">匿名用户</h2>    </div><% } %>';
r.Kn = function() {
    this.lz = new lB(this.L, this.Pc);
    this.lz.k();
    var a = H("js-sidebar-author-info");
    a && (new lu(a)).k()
};
r.Nx = function(a) {
    a = a.target;
    if (a instanceof yB) switch (a.Xt) {
    case "collap":
        E.add(a.f(), "zm-item-collapsed");
        break;
    case "cancel_collap":
        E.remove(a.f(), "zm-item-collapsed");
        break;
    case "set_delete":
    case "cancel_delete":
        KB(this),
        location.reload()
    }
};
function KB(a) {
    a.Pc ? a.Pc.Of ? (a.uq.innerHTML = a.Pc.Ge ? '你已经删除了对该问题的回答，如果需要修改，请先 <a href="javascript:;" name="cancel_delete">撤消删除</a>': "此答案已经被作者删除", S(a.Pc.f(), l)) : S(a.Pc.f(), i) : a.uq.innerHTML = "此答案已经被作者删除"
};
function LB() {
    T.call(this);
    this.page = 1
}
w(LB, T);
LB.prototype.k = function() {
    var a = I("js-topic-feed-page");
    this.h(a)
};
LB.prototype.p = function() {
    LB.g.p.call(this);
    var a = this;
    this.dA = $(".js-topic-feed-container", this.d);
    this.dA.find(".js-topic-item").each(function() {
        var b = new MB;
        a.aa(b);
        b.h(this)
    });
    this.rs = new NB;
    this.rs.h($(".js-pinned-topics", this.element)[0]); (this.gb = H("js-load-more")) && this.e().c(this.gb, "click", this.Yx);
    $(".instruction .close-normal").click(function() {
        var a = new Y(l);
        a.ajax("/notifeature?feature=6", j, "GET");
        pd(a, "success",
        function() {
            $(".instruction").fadeOut()
        })
    });
    this.e().c(this.rs, "change",
    function(a) {
        $("#tf-" + a.rH).find(".js-pin").replaceWith('<a href="javascript:;" data-action="pin-topic" class="zg-gray pin topic-hover-content" style=""><i class="z-icon-pin"></i>固定话题</a>')
    })
};
LB.prototype.Yx = function() {
    Gn(this.gb, i);
    this.xhr = new Y(i);
    Q(this.e(), this.xhr, "complete", u(this.Xd, this));
    var a = new An;
    a.add("page", ++this.page);
    this.xhr.ajax(location.pathname, a.Nb())
};
LB.prototype.Xd = function() {
    var a = this,
    b = R(this.xhr);
    b && !b.r && (0 < b.msg.length ? ($(b.msg).each(function(b, d) {
        var f = new MB;
        a.aa(f);
        f.h($(d)[0]);
        a.dA.append(f.f())
    }), Gn(this.gb, l)) : $(this.gb).hide())
};
function MB() {
    T.call(this)
}
w(MB, T);
MB.prototype.p = function() {
    MB.g.p.call(this);
    this.e().c(this.d, "click", u(this.Lx, this))
};
MB.prototype.Lx = function(a) {
    var b = a.target,
    a = $(b).attr("data-action"),
    c = $(this.d).find(".topic-avatar img"),
    d = c.clone(),
    f,
    g = $(this.d).data("id");
    if ("pin-topic" === a) f = this.getParent().rs,
    OB(f, g).done(function(a) {
        if (!a.r && a.msg) {
            un(b);
            $(b).replaceWith('<a href="javascript:;" data-action="unpin-topic" class="zg-gray unpin topic-hover-content" style=""><i class="z-icon-unpin"></i>取消固定</a>');
            var a = c.offset(),
            g = $(f.d).offset();
            1E3 < a.top - g.top ? (g = $(".top-nav-topic-selector.current a").offset(), g = {
                top: g.top + 20,
                left: g.left + 15,
                width: "25px",
                height: "25px",
                opacity: 0.1
            },
            d.css({
                position: "absolute",
                "z-index": "999"
            }).css("top", a.top).css("left", a.left).appendTo("body").animate(g, 300,
            function() {
                d.remove()
            })) : d.css({
                position: "absolute",
                "z-index": "999"
            }).appendTo("body").css("top", a.top).css("left", a.left).animate({
                top: g.top - 63 + $(f.d).height(),
                left: g.left,
                width: "-=50px",
                height: "-=50px",
                opacity: 0.5
            },
            300,
            function() {
                d.remove()
            })
        }
    });
    else if ("unpin-topic" === a) this.getParent().rs.Ey(g,
    function() {
        var a = $(b).replaceWith('<a href="javascript:;" data-action="pin-topic" class="zg-gray pin topic-hover-content" style=""><i class="z-icon-pin"></i>固定话题</a>')[0];
        un(a)
    });
    else if ("follow" === a || "unfollow" === a) Dn(b, "topic", j, ["follow", "unfollow"]),
    $(this.d).fadeOut()
};
function NB() {
    T.call(this)
}
w(NB, T);
r = NB.prototype;
r.$R = Mn('<div class="side-topic-item js-pin-item  cursor-move" data-topicid="<%=topic.id%>" >    <a href="/topic/<%=topic.url_token%>" class="pin-topic-avatar-link">        <img src="<%=topic.avatar_path%>" alt="" title="拖动以排序" class="side-topic-avatar js-topic-avatar">    </a>    <div class="side-topic-content ellipsis">        <a href="/topic/<%=topic.url_token%>" class="topic-link side-topic-title"><%=topic.name%></a>        <div class="side-topic-meta">        <% if (topic.children_num > 0) { %>            <span class="zg-gray"><%=topic.children_num%> 个子话题</span>            <span class="bull">&bull;</span>        <% } %>            <span class="zg-gray"><%=topic.followers_num%> 人关注</span>        </div>        <% if (topic.feed_num > 0) { %>            <a class="side-topic-more" href="/topic/<%=topic.url_token%>"><%=topic.feed_num %> 条动态&nbsp;&raquo;</a>        <% }else{ %>            <a class="side-topic-more" href="/topic/<%=topic.url_token%>">进入话题 &raquo;</a>        <% } %>    </div>    <a href="javascript:;" data-action="up" class="up" data-tip="s$b$置顶"></a>    <a href="javascript:;" data-action="remove" class="delete"></a></div>');
r.p = function() {
    NB.g.p.call(this);
    this.e().c(this.d, "click", u(this.Lx, this));
    PB(this)
};
function PB(a) {
    a.Df && a.Df.w();
    var b = new xu;
    b.yq = "pin-topic-moving";
    yu(b, a.d, 0);
    b.k();
    a.e().c(b, "dragend", u(a.jt, a));
    a.Df = b;
    $("a", a.d).each(function() {
        a.e().c(this, "mousedown",
        function(a) {
            a.stopPropagation()
        })
    })
}
r.Lx = function(a) {
    var b = this,
    c = a.target,
    d = $(c).attr("data-action");
    if (d) {
        var f = $(c).parents(".js-pin-item");
        if ("up" === d) {
            var a = f.position(),
            g = f.clone();
            f.before(g).css({
                position: "absolute",
                "z-index": "999"
            }).css("top", a.top).animate({
                top: $(b.d).position().top
            },
            200,
            function() {
                g.remove();
                f.css({
                    position: "relative",
                    top: 0
                }).prependTo(b.d);
                b.jt()
            });
            g.css("opacity", 0)
        } else "remove" === d && f.fadeOut(function() {
            f.remove();
            b.jt();
            b.dispatchEvent({
                type: "change",
                rH: f.attr("data-topicid")
            })
        })
    } else a.stopPropagation()
};
function OB(a, b) {
    return $.post("/pin-topic/add", {
        tid: b
    },
    $.proxy(function(a) { ! a.r && a.msg ? ($(this.d).append($(this.$R({
            topic: a.msg
        })).hide().fadeIn()), PB(this)) : X(a.msg, 2E3)
    },
    a))
}
r.Ey = function(a, b) {
    var c = this,
    d = $(this.d).find("[data-topicid=" + a + "]");
    d.fadeOut(function() {
        d.remove();
        c.jt().done(function(a) {
            b && b(a)
        });
        c.dispatchEvent({
            type: "change",
            rH: d.attr("data-topicid")
        })
    })
};
r.jt = function() {
    var a = [];
    $(this.d).find("div.js-pin-item").each(function() {
        a.push($(this).attr("data-topicid"))
    });
    return $.post("/pin-topic", {
        topic_ids: a.join(",")
    },
    ba())
};
function QB() {}
QB.prototype.k = function() {
    var a = H("zh-invited-member-list");
    a && (new Pw(a, "/invitation/more", "people", ["zg-btn-follow", "zg-btn-unfollow"], i)).k(); (a = H("zh-invited-sina-member-list")) && (new Pw(a, j, "people", ["zg-btn-follow", "zg-btn-unfollow"], i)).k();
    H("zh-sina-invite") && (new hA).k();
    new Zp(H("invite_friend"))
};
function RB() {}
w(RB, Ih);
ja(RB);
r = RB.prototype;
r.j = function(a) {
    var b = {
        "class": "goog-inline-block " + this.Xe(a).join(" "),
        title: a.Mf() || ""
    };
    return a.B().j("div", b, a.$a())
};
r.lc = function() {
    return Xc.sp
};
r.Rc = function(a) {
    return "DIV" == a.tagName
};
r.h = function(a, b) {
    E.add(b, "goog-inline-block");
    return RB.g.h.call(this, a, b)
};
r.O = p("");
r.C = p("goog-flat-button");
ch("goog-flat-button",
function() {
    return new Kh(j, RB.v())
});
function SB(a, b) {
    var c = this;
    this.s = {};
    this.V = {
        source: "/topic/autocomplete",
        select: j,
        filter: j,
        Co: j,
        N: function(a, b, d) {
            d.innerHTML = c.ce(a.data)
        }
    };
    F.extend(this.s, this.V, b || {});
    var d = new Ct(a, this.s);
    N(d, "show",
    function() {
        1 < d.Wa.length && !d.Wa[0].id && hp(d)
    });
    this.T = d
}
SB.prototype.ce = Mn('<% if (data.avatar) { %><img class="zm-item-img-avatar zg-left" src="<%=avatar%>"><% } %><% if(data.type === "search_link" || !data.id){ %><span class="zu-autocomplete-row-name zu-autocomplete-row-name-info"><%=data.type === "search_link"?("添加 "+label+" 话题"):label%></span><% } else { %><span class="zu-autocomplete-row-name"><%=label%></span><% } %><span class="zg-gray-normal zu-autocomplete-row-description"><% if (data.alias && data.followers) { %><% if ( data.alias ) { %>又称 <%=alias%><% } %><% if ( data.alias && data.followers ){ %>，<% } %><% if ( data.followers ){ %><%=followers%> 人关注<% } %><% }else{ %>&nbsp;<% } %></span>');
function TB(a, b) {
    var c = this.s = {};
    F.extend(c, this.V, b || {});
    this.input = a;
    this.Ub = c.Ub;
    this.$g = this.kR();
    this.Du = [];
    this.Du.push({
        action: "remove",
        method: this.TR,
        IK: c.QR,
        K: "删除"
    });
    setTimeout(u(this.vf, this))
}
w(TB, zd);
za(TB.prototype, {
    V: {
        Ub: j,
        UK: "",
        Ju: l,
        ce: '<li data-id="<%=id%>"><a class="zm-item-tag" href="<%=url%>"><%=name%></a></li>',
        parse: function(a) {
            return {
                Js: i,
                id: Number(a.getAttribute("data-id")),
                url: a.href,
                name: Gc(a)
            }
        },
        MS: of,
        lL: "zm-profile-tag-editable",
        Eu: "zm-profile-tag-btn",
        QR: "zm-profile-tag-btn-del"
    },
    has: function(a) {
        return !! y.find(this.$g,
        function(b) {
            return b.name === a.name || b.id === a.id
        })
    },
    CC: function(a) {
        return y.find(this.$g,
        function(b) {
            return b.name === a
        })
    },
    CX: function(a) {
        a = Number(a);
        return y.find(this.$g,
        function(b) {
            return b.id === a
        })
    },
    add: function(a, b) {
        if (a) {
            var c = u(function() {
                this.has(a) || this.$g.push(a);
                a.Js = l;
                if (b || this.s.MS.call(this, a)) this.YR(a),
                a.Js = i,
                this.dispatchEvent("add")
            },
            this);
            a.id ? c() : OB(Dy, a.name)
        }
    },
    remove: function(a) {
        a = Number(a);
        this.$g = y.filter(this.$g,
        function(b) {
            return a !== b.id
        },
        this);
        this.dispatchEvent("remove")
    },
    WL: function() {
        return y.filter(this.$g,
        function(a) {
            return a.Js !== l
        })
    },
    YR: function(a) {
        a = gc(this.nG(a));
        this.Ub.appendChild(a);
        this.zd(a)
    },
    nG: function(a) {
        return Mn(this.s.ce, a)
    },
    N: function() {
        this.Ub.innerHTML = y.map(this.$g, this.nG, this).join("")
    },
    kR: function() {
        return y.map(this.ZC(), this.s.parse)
    },
    ZC: function() {
        return qc(this.Ub)
    },
    vf: function() {
        var a = this,
        b = a.s;
        this.JT = new SB(this.input, {
            Co: Kc(a.input,
            function(a) {
                return "static" !== $.css(a, "position")
            }),
            placeholder: this.input.getAttribute("placeholder"),
            select: function(c) {
                a.add({
                    id: c.id,
                    name: c.id ? c.label: a.input.value,
                    url: "/topic/" + c.url_token,
                    avatar: c.avatar,
                    url_token: c.url_token
                });
                return b.UK
            },
            filter: function(c) {
                return y.filter(c,
                function(c) {
                    return b.Ju && !c.id ? l: !y.find(a.$g,
                    function(a) {
                        return a.Js && a.id === c.id
                    })
                })
            }
        });
        y.forEach(this.ZC(), this.zd, this);
        N(this.input, "keypress",
        function(c) {
            var d;
            if (13 === c.keyCode && !b.Ju && (d = Oa(this.value)) && !a.JT.T.jb()) a.add(a.CC(d) || {
                id: j,
                name: d,
                url: "/topic/" + d
            })
        })
    },
    TR: function(a) {
        this.remove(a.getAttribute("data-id"));
        this.Ub.removeChild(a)
    },
    pR: function(a, b) {
        var c = y.find(this.Du,
        function(b) {
            return b.action === a
        });
        c && c.method && c.method.call(this, b);
        this.input.focus()
    },
    zd: function(a) {
        var b = this.s;
        E.add(a, b.lL);
        y.forEach(this.Du,
        function(c) {
            var d = new Kh(" ", RB.v());
            d.oh([b.Eu, c.IK].join(" "));
            d.N(a);
            d.Pa(i);
            d.Bd(c.K);
            d.addEventListener("action",
            function() {
                this.pR(c.action, a)
            },
            l, this)
        },
        this)
    }
});
function UB() {
    this.fA = this.gA = j
}
UB.prototype.k = function() {
    function a(a, b) {
        var f = K("li"),
        g = K("span", "item-label", a);
        f.appendChild(g);
        var k = new Kh("", RB.v());
        k.oh("zm-profile-tag-btn zm-profile-tag-btn-del");
        k.Pa(i);
        k.Bd("移除动作");
        k.pa(b);
        k.addEventListener("action",
        function() {
            var a = k.O();
            d(a, l);
            L(f);
            W.Fs(i);
            c()
        });
        k.N(f);
        Ha.appendChild(f)
    }
    function b() {
        ma.n(W.dl() !== y.filter(W.Ye(),
        function(a) {
            return !! (a.Y & 8)
        }).length)
    }
    function c() {
        y.forEach(P,
        function(a) {
            a.selected || (a = new Fh(a.text, a.value), W.za(a))
        });
        b()
    }
    function d(a, b) {
        var c = y.find(P,
        function(b) {
            return b.value === a
        });
        c && (c.selected = b)
    }
    function f() {
        var a = $.grep(m.get(0).options,
        function(a) {
            return a.selected
        });
        $.map(a,
        function(a) {
            return a.value
        })
    }
    function g() {
        q = $.map(J.WL(),
        function(a) {
            return a.id
        });
        G.val(q.join(","))
    }
    var k = $("#rq-settings-ui"),
    m = $("select.select", k);
    $(".topics-num", k);
    $(".actions-num", k);
    var q = [];
    this.fA = $("#rq-info-block");
    k.on("click", ".beginedit-button",
    function(a) {
        a.preventDefault();
        k.addClass("expanded-view")
    }).on("click", ".exitedit-button",
    function(a) {
        a.preventDefault();
        k.removeClass("expanded-view")
    }).on("click", ".endedit-button",
    function(a) {
        a.preventDefault();
        k.get(0).submit()
    });
    var s = $(".topic-editor", k),
    x = $("input.topic-input", s).get(0),
    C = $("ul.tag-list", s).get(0),
    J = new TB(x, {
        Ju: i,
        Ub: C
    }),
    G = $('input[name="topics"]', s);
    J.on(["add", "remove"], g);
    m.on("change", f);
    g();
    f();
    s = m.get(0);
    S(s, l);
    var P = s.options,
    W = new ai;
    W.on("action",
    function(c) {
        c = c.target;
        a(c.Ih(), c.O());
        d(c.O(), i);
        W.removeItem(c);
        b()
    });
    var ma = new Ui("添加动作", W);
    ma.oh("menu-button");
    ma.N(s.parentNode);
    ma.Hs = i;
    Wi(ma);
    var Ha = K("ul", "display-list");
    c();
    y.forEach(P,
    function(b) {
        b.selected && a(b.text, b.value)
    });
    s.parentNode.insertBefore(Ha, ma.f());
    this.Rw()
};
UB.prototype.Rw = function() {
    var a = this,
    b = $("#rq3-item-list"),
    c = {
        sT: function(a) {
            return $.post("/watch/thank", {
                id: a,
                rq_type: "thank"
            })
        },
        HR: function(a) {
            return $.post("/watch/seen", {
                id: a,
                rq_type: "seen"
            })
        }
    };
    b.on("click", ".read-button",
    function() {
        var b = $(this).closest(".rq-item"),
        g = b.data("id");
        c.HR(g);
        g = d.text() || 0;
        0 < g && d.text(g - 1);
        var k = a.fA,
        m = Number(a.gA.text());
        setTimeout(function() {
            k.toggleClass("hidden", !!m)
        },
        210);
        b.slideUp(function() {
            b.remove()
        })
    }).on("click", ".thank-button",
    function(a) {
        a.preventDefault();
        var a = $(this),
        b = a.closest(".rq-item").data("id");
        a.hasClass("thanked") || (c.sT(b), a.addClass("thanked").text("已感谢"))
    });
    $(b).on("click", 'a[name="revert"]',
    function() {
        Jw(this)
    });
    b = new Lw(b.get(0), location.href, i);
    b.jy = function(a) {
        return a.getAttribute("data-id")
    };
    b.pc("rq-item");
    b.k();
    var b = $("#rq3-sidenav-link"),
    d = $(".zg-num", b);
    this.gA = d
};
function VB() {}
VB.prototype.k = function() {
    $("a.js-obfuscate-email").each(function() {
        var a = $(this),
        b = a.data("email").split("").reverse().join("");
        a.attr("href", "mailto:" + b).text(b)
    })
};
function WB() {
    T.call(this)
}
w(WB, T);
ja(WB);
WB.prototype.Z = function(a) {
    WB.g.Z.call(this, a);
    $("button", a).click(function() {
        Fn.v().n(i)
    })
};
function XB() {}
w(XB, T);
XB.prototype.k = function() {
    nw.aa(this);
    this.h(document.body)
};
XB.prototype.p = function() {
    XB.g.p.call(this);
    var a = H("zh-following-question-item-list");
    if (a) {
        var a = I("zh-general-list", a),
        b = new yy;
        b.yb = "zm-profile-section-item";
        b.cg("question", ["zg-follow", "zg-unfollow"], i);
        b.h(a)
    }
    this.Vw()
};
XB.prototype.Vw = function() {
    var a = H("zh-trendings");
    a && (this.QT = new Ml).h(a)
};
function YB() {
    T.call(this)
}
w(YB, T);
YB.prototype.p = function() {
    this.e().c(this.d, "click", this.no)
};
YB.prototype.no = function(a) {
    var b = a.target;
    b && "rmdraft" === b.name && Ol("删除草稿", "你确定要删除这个草稿吗？",
    function(a) {
        a && (Sl("/answer/draft/delete", j, "POST", "qid=" + b.id.split("-")[1]), L(this.d))
    },
    this)
};
function ZB() {}
w(ZB, T);
ZB.prototype.k = function() {
    var a = H("zh-draft-page-wrap");
    a && this.h(a)
};
ZB.prototype.p = function() {
    N(H("zh-clear-all-draft"), "click",
    function() {
        Ol("删除所有草稿", "你确定要删除所有草稿吗？删除后将无法恢复",
        function(a) {
            a && (window.location.href = "/draft/clear")
        });
        return l
    });
    var a = new Lw(H("zh-draft-item-list"), j, i);
    this.e().c(a, "itemcreated",
    function(a) { (new YB).h(a.data.item)
    });
    a.k()
};
function $B() {
    this.Ij = "explore";
    this.AL = "explore_feed"
}
w($B, T);
$B.prototype.k = function() {
    nw.aa(this);
    this.h(document.body)
};
$B.prototype.p = function() {
    this.Rw();
    this.e().c(this, "click!",
    function(a) {
        "comment" === a.namespace && a.hd.fill("category", this.Ij).fill("label", this.AL)
    })
};
$B.prototype.Rw = function() {
    var a = H("zh-explore-list");
    if (a) {
        var b = new T;
        this.aa(b);
        b.h(a);
        y.forEach(qc(a),
        function(a) {
            var d = new ty;
            b.aa(d);
            d.h(a)
        },
        this)
    }
};
function yw() { (new Qw).k()
}
Da("ZH.entrySQ",
function() { (new zB).k()
});
Da("ZH.entrySQMisc",
function() { (new Cz).k()
});
Da("ZH.entrySA",
function() { (new JB).k()
});
Da("ZH.entryL",
function() { (new yA).k()
});
Da("ZH.entryT",
function() { (new nA).k()
});
Da("ZH.entryTS",
function() { (new qA).k()
});
Da("ZH.entryP",
function() { (new xz).k()
});
Da("ZH.entryM",
function() { (new Tz).k()
});
Da("ZH.entryPM",
function() { (new Tw).k()
});
Da("ZH.entryPMDetail",
function() { (new Uw).k()
});
Da("ZH.entryHelp",
function() { (new Rw).k()
});
Da("ZH.entryInvite",
function() { (new QB).k()
});
Da("ZH.entryQueue",
function() { (new Sz).k()
});
Da("ZH.entryReg", uk.WX);
Da("ZH.entryUserGuide",
function() { (new rA).k()
});
Da("ZH.entryTest", ba());
Da("ZH.entrySettings",
function() { (new cA).k()
});
Da("ZH.entryTopicFeed",
function() { (new LB).k()
});
Da("ZH.entryTest",
function() { (new $n.FW).k()
});
Da("ZH.entryRQ3",
function() { (new UB).k()
});
Da("ZH.entryTerms",
function() { (new VB).k()
});
Da("ZH.entryHome",
function() { (new bB).k();
    var a = H("js-sign-page");
    a && WB.v().h(a);
    H("login-page") && (a = new Dx, a.mj = i, a.Fi = "signin", a.h(H("js-sign-flow")))
});
Da("ZH.entryQuestionFollowing",
function() { (new XB).k()
});
Da("ZH.entryDraft",
function() { (new ZB).k()
});
Da("ZH.entryExplore",
function() { (new $B).k()
});
