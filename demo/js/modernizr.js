/* Modernizr (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssclasses-prefixed-testprop-testallprops-domprefixes
 */
;window.Modernizr = function (e, t, n) {
    function x(e) {
        f.cssText = e
    }

    function T(e, t) {
        return x(prefixes.join(e + ";") + (t || ""))
    }

    function N(e, t) {
        return typeof e === t
    }

    function C(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function k(e, t) {
        for (var r in e) {
            var i = e[r];
            if (!C(i, "-") && f[i] !== n)return t == "pfx" ? i : !0
        }
        return !1
    }

    function L(e, t, r) {
        for (var i in e) {
            var s = t[e[i]];
            if (s !== n)return r === !1 ? e[i] : N(s, "function") ? s.bind(r || t) : s
        }
        return !1
    }

    function A(e, t, n) {
        var r = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + p.join(r + " ") + r).split(" ");
        return N(t, "string") || N(t, "undefined") ? k(i, t) : (i = (e + " " + d.join(r + " ") + r).split(" "), L(i, t, n))
    }

    var r = "2.8.3", i = {}, s = !0, o = t.documentElement, u = "modernizr", a = t.createElement(u), f = a.style, l, c = {}.toString, h = "Webkit Moz O ms", p = h.split(" "), d = h.toLowerCase().split(" "), v = {}, m = {}, g = {}, y = [], b = y.slice, w, E = {}.hasOwnProperty, S;
    !N(E, "undefined") && !N(E.call, "undefined") ? S = function (e, t) {
        return E.call(e, t)
    } : S = function (e, t) {
        return t in e && N(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (t) {
        var n = this;
        if (typeof n != "function")throw new TypeError;
        var r = b.call(arguments, 1), i = function () {
            if (this instanceof i) {
                var e = function () {
                };
                e.prototype = n.prototype;
                var s = new e, o = n.apply(s, r.concat(b.call(arguments)));
                return Object(o) === o ? o : s
            }
            return n.apply(t, r.concat(b.call(arguments)))
        };
        return i
    });
    for (var O in v)S(v, O) && (w = O.toLowerCase(), i[w] = v[O](), y.push((i[w] ? "" : "no-") + w));
    return i.addTest = function (e, t) {
        if (typeof e == "object")for (var r in e)S(e, r) && i.addTest(r, e[r]); else {
            e = e.toLowerCase();
            if (i[e] !== n)return i;
            t = typeof t == "function" ? t() : t, typeof s != "undefined" && s && (o.className += " " + (t ? "" : "no-") + e), i[e] = t
        }
        return i
    }, x(""), a = l = null, i._version = r, i._domPrefixes = d, i._cssomPrefixes = p, i.testProp = function (e) {
        return k([e])
    }, i.testAllProps = A, i.prefixed = function (e, t, n) {
        return t ? A(e, t, n) : A(e, "pfx")
    }, o.className = o.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (s ? " js " + y.join(" ") : ""), i
}(this, this.document);