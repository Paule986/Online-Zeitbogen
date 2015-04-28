(function(a, j) {
    function s(b) {
        var f = b.length, l = d.type(b);
        return d.isWindow(b)?!1 : 1 === b.nodeType && f?!0 : "array" === l || "function" !== l && (0 === f || "number" === typeof f && 0 < f && f-1 in b)
    }
    function m(b) {
        var f = Ra[b] = {};
        d.each(b.match(ia) || [], function(b, d) {
            f[d]=!0
        });
        return f
    }
    function x(b, f, l, a) {
        if (d.acceptData(b)) {
            var c = d.expando, e = b.nodeType, q = e ? d.cache: b, g = e ? b[c]: b[c] && c;
            if (g && q[g] && (a || q[g].data) ||!(l === j && "string" === typeof f)) {
                g || (g = e ? b[c] = X.pop() || d.guid++ : c);
                q[g] || (q[g] = e ? {} : {
                    toJSON: d.noop
                });
                if ("object" === typeof f ||
                "function" === typeof f)
                    a ? q[g] = d.extend(q[g], f) : q[g].data = d.extend(q[g].data, f);
                b = q[g];
                if (!a) {
                    if (!b.data)
                        b.data = {};
                    b = b.data
                }
                l !== j && (b[d.camelCase(f)] = l);
                "string" === typeof f ? (l = b[f], null == l && (l = b[d.camelCase(f)])) : l = b;
                return l
            }
        }
    }
    function r(b, f, l) {
        if (d.acceptData(b)) {
            var a, c, u = b.nodeType, q = u ? d.cache: b, g = u ? b[d.expando]: d.expando;
            if (q[g]) {
                if (f && (a = l ? q[g] : q[g].data)) {
                    d.isArray(f) ? f = f.concat(d.map(f, d.camelCase)) : f in a ? f = [f] : (f = d.camelCase(f), f = f in a ? [f] : f.split(" "));
                    for (c = f.length; c--;)
                        delete a[f[c]];
                    if (l?!e(a) : !d.isEmptyObject(a)
                        )return 
                }
                if (!l && (delete q[g].data, !e(q[g]))
                    )return;
                u ? d.cleanData([b], !0) : d.support.deleteExpando || q != q.window ? delete q[g] : q[g] = null
            }
        }
    }
    function c(b, f, l) {
        if (l === j && 1 === b.nodeType)
            if (l = "data-" + f.replace(Hb, "-$1").toLowerCase(), l = b.getAttribute(l)
                , "string" === typeof l) {
            try {
                l = "true" === l?!0 : "false" === l?!1 : "null" === l ? null : + l + "" === l?+l : Ib.test(l) ? d.parseJSON(l) : l
            } catch (a) {}
            d.data(b, f, l)
        } else 
            l = j;
        return l
    }
    function e(b) {
        for (var f in b)
            if (!("data" === f && d.isEmptyObject(b[f])) && "toJSON" !==
            f)
                return !1;
        return !0
    }
    function g() {
        return !0
    }
    function h() {
        return !1
    }
    function k() {
        try {
            return i.activeElement
        } catch (b) {}
    }
    function F(b, f) {
        do 
            b = b[f];
        while (b && 1 !== b.nodeType);
        return b
    }
    function n(b, f, l) {
        if (d.isFunction(f))
            return d.grep(b, function(b, d) {
                return !!f.call(b, d, b) !== l
            });
        if (f.nodeType)
            return d.grep(b, function(b) {
                return b === f !== l
            });
        if ("string" === typeof f) {
            if (Jb.test(f))
                return d.filter(f, b, l);
            f = d.filter(f, b)
        }
        return d.grep(b, function(b) {
            return 0 <= d.inArray(b, f) !== l
        })
    }
    function L(b) {
        var f = kb.split("|"),
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; f.length;)
                b.createElement(f.pop());
        return b
    }
    function S(b, f) {
        return d.nodeName(b, "table") && d.nodeName(1 === f.nodeType ? f : f.firstChild, "tr") ? b.getElementsByTagName("tbody")[0] || b.appendChild(b.ownerDocument.createElement("tbody")) : b
    }
    function aa(b) {
        b.type = (null !== d.find.attr(b, "type")) + "/" + b.type;
        return b
    }
    function o(b) {
        var f = Kb.exec(b.type);
        f ? b.type = f[1] : b.removeAttribute("type");
        return b
    }
    function M(b, f) {
        for (var l, a = 0; null != (l = b[a]); a++)
            d._data(l, "globalEval",
            !f || d._data(f[a], "globalEval"))
    }
    function N(b, f) {
        if (1 === f.nodeType && d.hasData(b)) {
            var l, a, c;
            a = d._data(b);
            var e = d._data(f, a), q = a.events;
            if (q)
                for (l in delete e.handle, e.events = {}, q)
                    for (a = 0, c = q[l].length; a < c; a++)
                        d.event.add(f, l, q[l][a]);
            if (e.data)
                e.data = d.extend({}, e.data)
        }
    }
    function v(b, f) {
        var l, a, c = 0, e = typeof b.getElementsByTagName !== ka ? b.getElementsByTagName(f || "*"): typeof b.querySelectorAll !== ka ? b.querySelectorAll(f || "*"): j;
        if (!e)
            for (e = [], l = b.childNodes || b;
            null != (a = l[c]); c++)
                !f || d.nodeName(a, f) ? e.push(a) :
                d.merge(e, v(a, f));
        return f === j || f && d.nodeName(b, f) ? d.merge([b], e) : e
    }
    function w(b) {
        if (Za.test(b.type))
            b.defaultChecked = b.checked
    }
    function A(b, f) {
        if (f in b)
            return f;
        for (var d = f.charAt(0).toUpperCase() + f.slice(1), a = f, c = lb.length; c--;)
            if (f = lb[c] + d, f in b)
                return f;
        return a
    }
    function y(b, f) {
        b = f || b;
        return "none" === d.css(b, "display") ||!d.contains(b.ownerDocument, b)
    }
    function P(b, f) {
        for (var l, a, c, e = [], q = 0, g = b.length; q < g; q++)
            if (a = b[q], a.style)
                if (e[q] = d._data(a, "olddisplay"), l = a.style.display, f) {
                    if (!e[q] && "none" ===
                    l)
                        a.style.display = "";
                        "" === a.style.display && y(a) && (e[q] = d._data(a, "olddisplay", O(a.nodeName)))
                } else if (!e[q] && (c = y(a), l && "none" !== l ||!c))
                    d._data(a, "olddisplay", c ? l : d.css(a, "display"));
        for (q = 0; q < g; q++)
            if (a = b[q], a.style && (!f || "none" === a.style.display || "" === a.style.display)
                )a.style.display = f ? e[q] || "" : "none";
        return b
    }
    function T(b, f, d) {
        return (b = Lb.exec(f)) ? Math.max(0, b[1] - (d || 0)) + (b[2] || "px") : f
    }
    function D(b, f, l, a, c) {
        for (var f = l === (a ? "border" : "content") ? 4 : "width" === f ? 1 : 0, e = 0; 4 > f; f += 2)
            "margin" === l && (e += d.css(b,
            l + za[f], !0, c)), a ? ("content" === l && (e -= d.css(b, "padding" + za[f], !0, c)), "margin" !== l && (e -= d.css(b, "border" + za[f] + "Width", !0, c))) : (e += d.css(b, "padding" + za[f], !0, c), "padding" !== l && (e += d.css(b, "border" + za[f] + "Width", !0, c)));
        return e
    }
    function z(b, f, l) {
        var a=!0, c = "width" === f ? b.offsetWidth : b.offsetHeight, e = Aa(b), q = d.support.boxSizing && "border-box" === d.css(b, "boxSizing", !1, e);
        if (0 >= c || null == c) {
            c = Ba(b, f, e);
            if (0 > c || null == c)
                c = b.style[f];
            if (Sa.test(c))
                return c;
            a = q && (d.support.boxSizingReliable || c === b.style[f]);
            c = parseFloat(c) || 0
        }
        return c + D(b, f, l || (q ? "border" : "content"), a, e) + "px"
    }
    function O(b) {
        var f = i, l = mb[b];
        if (!l) {
            l = J(b, f);
            if ("none" === l ||!l)
                La = (La || d("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(f.documentElement), f = (La[0].contentWindow || La[0].contentDocument).document, f.write("<!doctype html><html><body>"), f.close(), l = J(b, f), La.detach();
            mb[b] = l
        }
        return l
    }
    function J(b, f) {
        var l = d(f.createElement(b)).appendTo(f.body), a = d.css(l[0], "display");
        l.remove();
        return a
    }
    function ba(b, f, l, a) {
        var c;
        if (d.isArray(f))
            d.each(f, function(f, d) {
                l || Mb.test(b) ? a(b, d) : ba(b + "[" + ("object" === typeof d ? f : "") + "]", d, l, a)
            });
        else if (!l && "object" === d.type(f))
            for (c in f)
                ba(b + "[" + c + "]", f[c], l, a);
        else 
            a(b, f)
    }
    function Y(b) {
        return function(f, l) {
            "string" !== typeof f && (l = f, f = "*");
            var a, c = 0, e = f.toLowerCase().match(ia) || [];
            if (d.isFunction(l))
                for (; a = e[c++];)
                    "+" === a[0] ? (a = a.slice(1) || "*", (b[a] = b[a] || []).unshift(l)) : (b[a] = b[a] || []).push(l)
        }
    }
    function U(b, f, l, a) {
        function c(g) {
            var i;
            e[g]=!0;
            d.each(b[g] || [], function(b, d) {
                var g = d(f, l, a);
                if ("string" === typeof g&&!q&&!e[g])
                    return f.dataTypes.unshift(g), c(g), !1;
                if (q)
                    return !(i = g)
            });
            return i
        }
        var e = {}, q = b === $a;
        return c(f.dataTypes[0]) ||!e["*"] && c("*")
    }
    function G(b, f) {
        var l, a, c = d.ajaxSettings.flatOptions || {};
        for (a in f)
            f[a] !== j && ((c[a] ? b : l || (l = {}))[a] = f[a]);
        l && d.extend(!0, b, l);
        return b
    }
    function ca() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function I() {
        setTimeout(function() {
            Ia = j
        });
        return Ia = d.now()
    }
    function V(b, f, d) {
        for (var a, c = (Ma[f] || []).concat(Ma["*"]),
        e = 0, g = c.length; e < g; e++)
            if (a = c[e].call(d, f, b))
                return a
    }
    function da(b, f, l) {
        var a, c = 0, e = Ta.length, g = d.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (a)
                return !1;
            for (var f = Ia || I(), f = Math.max(0, h.startTime + h.duration - f), d = 1 - (f / h.duration || 0), l = 0, c = h.tweens.length; l < c; l++)
                h.tweens[l].run(d);
            g.notifyWith(b, [h, d, f]);
            if (1 > d && c)
                return f;
            g.resolveWith(b, [h]);
            return !1
        }, h = g.promise({
            elem: b,
            props: d.extend({}, f),
            opts: d.extend(!0, {
                specialEasing: {}
            }, l),
            originalProperties: f,
            originalOptions: l,
            startTime: Ia ||
            I(),
            duration: l.duration,
            tweens: [],
            createTween: function(f, l) {
                var a = d.Tween(b, h.opts, f, l, h.opts.specialEasing[f] || h.opts.easing);
                h.tweens.push(a);
                return a
            },
            stop: function(f) {
                var d = 0, l = f ? h.tweens.length: 0;
                if (a)
                    return this;
                for (a=!0; d < l; d++)
                    h.tweens[d].run(1);
                f ? g.resolveWith(b, [h, f]) : g.rejectWith(b, [h, f]);
                return this
            }
        }), l = h.props;
        for (B(l, h.opts.specialEasing);
        c < e;
        c++)if (f = Ta[c].call(h, b, l, h.opts))
            return f;
        d.map(l, V, h);
        d.isFunction(h.opts.start) && h.opts.start.call(b, h);
        d.fx.timer(d.extend(i, {
            elem: b,
            anim: h,
            queue: h.opts.queue
        }));
        return h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    function B(b, f) {
        var p;
        var l, a, c, e, g;
        for (l in b)
            if (a = d.camelCase(l), c = f[a], e = b[l], d.isArray(e) && (c = e[1], p = b[l] = e[0], e = p)
                , l !== a && (b[a] = e, delete b[l]), (g = d.cssHooks[a]) && "expand"in g)for (l in e = g.expand(e), delete b[a], e)
            l in b || (b[l] = e[l], f[l] = c);
            else 
                f[a] = c
    }
    function R(b, f, d, a, c) {
        return new R.prototype.init(b, f, d, a, c)
    }
    function la(b, f) {
        for (var d, a = {
            height: b
        }, c = 0, f = f ? 1 : 0; 4 >
        c; c += 2 - f)
            d = za[c], a["margin" + d] = a["padding" + d] = b;
        if (f)
            a.opacity = a.width = b;
        return a
    }
    function ma(b) {
        return d.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1
    }
    var ea, W, ka = typeof j, pa = a.location, i = a.document, qa = i.documentElement, fa = a.jQuery, ga = a.$, na = {}, X = [], Z = X.concat, H = X.push, ha = X.slice, va = X.indexOf, Da = na.toString, sa = na.hasOwnProperty, Q = "1.10.2".trim, d = function(b, f) {
        return new d.fn.init(b, f, W)
    }, wa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ia = /\S+/g, Ua = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    Na = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Va = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, oa = /^[\],:{}\s]*$/, ta = /(?:^|:|,)(?:\s*\[)+/g, Ea = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, Oa = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, Pa = /^-ms-/, xa = /-([\da-z])/gi, Wa = function(b, f) {
        return f.toUpperCase()
    }, ua = function(b) {
        if (i.addEventListener || "load" === b.type || "complete" === i.readyState)
            Fa(), d.ready()
    }, Fa = function() {
        i.addEventListener ? (i.removeEventListener("DOMContentLoaded", ua, !1), a.removeEventListener("load",
        ua, !1)) : (i.detachEvent("onreadystatechange", ua), a.detachEvent("onload", ua))
    };
    d.fn = d.prototype = {
        jquery: "1.10.2",
        constructor: d,
        init: function(b, f, l) {
            var a;
            if (!b)
                return this;
            if ("string" === typeof b) {
                if ((a = "<" === b.charAt(0) && ">" === b.charAt(b.length-1) && 3 <= b.length ? [null, b, null] : Na.exec(b)) && (a[1] ||!f)) {
                    if (a[1]) {
                        if (f = f instanceof d ? f[0] : f, d.merge(this, d.parseHTML(a[1], f && f.nodeType ? f.ownerDocument || f : i, !0)
                            ), Va.test(a[1]) && d.isPlainObject(f))for (a in f)
                            if (d.isFunction(this[a]))
                                this[a](f[a]);
                            else 
                                this.attr(a,
                                f[a])
                            } else {
                        if ((f = i.getElementById(a[2])) && f.parentNode) {
                            if (f.id !== a[2])
                                return l.find(b);
                            this.length = 1;
                            this[0] = f
                        }
                        this.context = i;
                        this.selector = b
                    }
                    return this
                }
                return !f || f.jquery ? (f || l).find(b) : this.constructor(f).find(b)
            }
            if (b.nodeType)
                return this.context = this[0] = b, this.length = 1, this;
            if (d.isFunction(b))
                return l.ready(b);
            if (b.selector !== j)
                this.selector = b.selector, this.context = b.context;
            return d.makeArray(b, this)
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ha.call(this)
        },
        get: function(b) {
            return null ==
            b ? this.toArray() : 0 > b ? this[this.length + b] : this[b]
        },
        pushStack: function(b) {
            b = d.merge(this.constructor(), b);
            b.prevObject = this;
            b.context = this.context;
            return b
        },
        each: function(b, f) {
            return d.each(this, b, f)
        },
        ready: function(b) {
            d.ready.promise().done(b);
            return this
        },
        slice: function() {
            return this.pushStack(ha.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(b) {
            var f = this.length, b =+ b + (0 > b ? f : 0);
            return this.pushStack(0 <= b && b < f ? [this[b]] : [])
        },
        map: function(b) {
            return this.pushStack(d.map(this,
            function(f, d) {
                return b.call(f, d, f)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: H,
        sort: [].sort,
        splice: [].splice
    };
    d.fn.init.prototype = d.fn;
    d.extend = d.fn.extend = function() {
        var b, f, a, c, e, u = arguments[0] || {}, g = 1, h = arguments.length, i=!1;
        "boolean" === typeof u && (i = u, u = arguments[1] || {}, g = 2);
        "object" !== typeof u&&!d.isFunction(u) && (u = {});
        h === g && (u = this, --g);
        for (; g < h; g++)
            if (null != (e = arguments[g]))
                for (c in e)
                    b = u[c], a = e[c], u !== a && (i && a && (d.isPlainObject(a) || (f = d.isArray(a))) ? (f ? (f=!1,
        b = b && d.isArray(b) ? b : []) : b = b && d.isPlainObject(b) ? b : {}, u[c] = d.extend(i, b, a)) : a !== j && (u[c] = a));
        return u
    };
    d.extend({
        expando: "jQuery" + ("1.10.2" + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            if (a.$ === d)
                a.$ = ga;
            if (b && a.jQuery === d)
                a.jQuery = fa;
            return d
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) {
            b ? d.readyWait++ : d.ready(!0)
        },
        ready: function(b) {
            if (!(!0 === b?--d.readyWait : d.isReady)) {
                if (!i.body)
                    return setTimeout(d.ready);
                d.isReady=!0;
                !0 !== b && 0<--d.readyWait || (ea.resolveWith(i, [d]), d.fn.trigger && d(i).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) {
            return "function" === d.type(b)
        },
        isArray: Array.isArray || function(b) {
            return "array" === d.type(b)
        },
        isWindow: function(b) {
            return null != b && b == b.window
        },
        isNumeric: function(b) {
            return !isNaN(parseFloat(b)) && isFinite(b)
        },
        type: function(b) {
            return null == b ? "" + b : "object" === typeof b || "function" === typeof b ? na[Da.call(b)] || "object" : typeof b
        },
        isPlainObject: function(b) {
            var f;
            if (!b || "object" !== d.type(b) || b.nodeType || d.isWindow(b))
                return !1;
            try {
                if (b.constructor&&!sa.call(b, "constructor")&&!sa.call(b.constructor.prototype,
                "isPrototypeOf"))
                    return !1
            } catch (a) {
                return !1
            }
            if (d.support.ownLast)
                for (f in b)
                    return sa.call(b, f);
            for (f in b);
            return f === j || sa.call(b, f)
        },
        isEmptyObject: function(b) {
            for (var f in b)
                return !1;
            return !0
        },
        error: function(b) {
            throw Error(b);
        },
        parseHTML: function(b, f, a) {
            if (!b || "string" !== typeof b)
                return null;
            "boolean" === typeof f && (a = f, f=!1);
            var f = f || i, c = Va.exec(b), a=!a && [];
            if (c)
                return [f.createElement(c[1])];
            c = d.buildFragment([b], f, a);
            a && d(a).remove();
            return d.merge([], c.childNodes)
        },
        parseJSON: function(b) {
            if (a.JSON &&
            a.JSON.parse)
                return a.JSON.parse(b);
            if (null === b)
                return b;
            if ("string" === typeof b && (b = d.trim(b)) && oa.test(b.replace(Ea, "@").replace(Oa, "]").replace(ta, "")))
                return (new Function("return " + b))();
            d.error("Invalid JSON: " + b)
        },
        parseXML: function(b) {
            var f, l;
            if (!b || "string" !== typeof b)
                return null;
            try {
                a.DOMParser ? (l = new DOMParser, f = l.parseFromString(b, "text/xml")) : (f = new ActiveXObject("Microsoft.XMLDOM"), f.async = "false", f.loadXML(b))
            } catch (c) {
                f = j
            }(!f ||!f.documentElement || f.getElementsByTagName("parsererror").length) &&
            d.error("Invalid XML: " + b);
            return f
        },
        noop: function() {},
        globalEval: function(b) {
            b && d.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(b) {
            return b.replace(Pa, "ms-").replace(xa, Wa)
        },
        nodeName: function(b, f) {
            return b.nodeName && b.nodeName.toLowerCase() === f.toLowerCase()
        },
        each: function(b, f, d) {
            var a, c = 0, e = b.length;
            a = s(b);
            if (d)
                if (a)
                    for (; c < e&&!(a = f.apply(b[c], d), !1 === a); c++);
                else 
                    for (c in b) {
                        if (a = f.apply(b[c], d), !1 === a)
                            break
                    } else if (a)
                        for (; c < e&&!(a = f.call(b[c], c, b[c]), !1 === a); c++);
                    else 
                        for (c in b)
                            if (a = f.call(b[c], c, b[c]), !1 === a)
                                break;
            return b
        },
        trim: Q&&!Q.call("\ufeff\u00a0") ? function(b) {
            return null == b ? "" : Q.call(b)
        }
        : function(b) {
            return null == b ? "" : (b + "").replace(Ua, "")
        },
        makeArray: function(b, f) {
            var a = f || [];
            null != b && (s(Object(b)) ? d.merge(a, "string" === typeof b ? [b] : b) : H.call(a, b));
            return a
        },
        inArray: function(b, f, d) {
            var a;
            if (f) {
                if (va)
                    return va.call(f, b, d);
                a = f.length;
                for (d = d ? 0 > d ? Math.max(0, a + d) : d : 0; d < a; d++)
                    if (d in f && f[d] === b)
                        return d
            }
            return -1
        },
        merge: function(b, f) {
            var d = f.length, a = b.length,
            c = 0;
            if ("number" === typeof d)
                for (; c < d; c++)
                    b[a++] = f[c];
            else 
                for (; f[c] !== j;)
                    b[a++] = f[c++];
            b.length = a;
            return b
        },
        grep: function(b, f, d) {
            for (var a, c = [], e = 0, g = b.length, d=!!d; e < g; e++)
                a=!!f(b[e], e), d !== a && c.push(b[e]);
            return c
        },
        map: function(b, f, d) {
            var a, c = 0, e = b.length, g = [];
            if (s(b))
                for (; c < e; c++)
                    a = f(b[c], c, d), null != a && (g[g.length] = a);
            else 
                for (c in b)
                    a = f(b[c], c, d), null != a && (g[g.length] = a);
            return Z.apply([], g)
        },
        guid: 1,
        proxy: function(b, f) {
            var a, c;
            "string" === typeof f && (c = b[f], f = b, b = c);
            if (!d.isFunction(b))
                return j;
            a = ha.call(arguments, 2);
            c = function() {
                return b.apply(f || this, a.concat(ha.call(arguments)))
            };
            c.guid = b.guid = b.guid || d.guid++;
            return c
        },
        access: function(b, f, a, c, e, g, q) {
            var h = 0, i = b.length, k = null == a;
            if ("object" === d.type(a))
                for (h in e=!0, a)
                    d.access(b, f, h, a[h], !0, g, q);
            else if (c !== j && (e=!0, d.isFunction(c) || (q=!0), k && (q ? (f.call(b, c)
                , f = null) : (k = f, f = function(b, f, a) {
                return k.call(d(b), a)
            })), f))for (; h < i; h++)
                f(b[h], a, q ? c : c.call(b[h], h, f(b[h], a)));
            return e ? b : k ? f.call(b) : i ? f(b[0], a) : g
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(b, f, d, a) {
            var c, e = {};
            for (c in f)
                e[c] = b.style[c], b.style[c] = f[c];
            d = d.apply(b, a || []);
            for (c in f)
                b.style[c] = e[c];
            return d
        }
    });
    d.ready.promise = function(b) {
        if (!ea)
            if (ea = d.Deferred(), "complete" === i.readyState)
                setTimeout(d.ready);
            else if (i.addEventListener)
                i.addEventListener("DOMContentLoaded", ua, !1), a.addEventListener("load", ua, !1);
        else {
            i.attachEvent("onreadystatechange", ua);
            a.attachEvent("onload", ua);
            var f=!1;
            try {
                f = null == a.frameElement && i.documentElement
            } catch (c) {}
            f && f.doScroll && function E() {
                if (!d.isReady) {
                    try {
                        f.doScroll("left")
                    } catch (b) {
                        return setTimeout(E,
                        50)
                    }
                    Fa();
                    d.ready()
                }
            }()
        }
        return ea.promise(b)
    };
    d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(b, f) {
        na["[object " + f + "]"] = f.toLowerCase()
    });
    W = d(i);
    (function(b, f) {
        function a(b, f, d, c) {
            var l, e, t, g, u;
            (f ? f.ownerDocument || f : H) !== y && aa(f);
            f = f || y;
            d = d || [];
            if (!b || "string" !== typeof b)
                return d;
            if (1 !== (g = f.nodeType) && 9 !== g)
                return [];
            if (x&&!c) {
                if (l = na.exec(b))
                    if (t = l[1])
                        if (9 === g)
                            if ((e = f.getElementById(t)) && e.parentNode) {
                                if (e.id === t)
                                    return d.push(e), d
                            } else 
                                return d;
                            else {
                                if (f.ownerDocument &&
                                (e = f.ownerDocument.getElementById(t)) && Ea(f, e) && e.id === t)
                                    return d.push(e), d
                            } else {
                                if (l[2])
                                    return V.apply(d, f.getElementsByTagName(b)), d;
                                    if ((t = l[3]) && C.getElementsByClassName && f.getElementsByClassName)
                                        return V.apply(d, f.getElementsByClassName(t)), d
                            }
                if (C.qsa && (!M ||!M.test(b))) {
                    e = l = B;
                    t = f;
                    u = 9 === g && b;
                    if (1 === g && "object" !== f.nodeName.toLowerCase()) {
                        g = n(b);
                        (l = f.getAttribute("id")) ? e = l.replace(ra, "\\$&") : f.setAttribute("id", e);
                        e = "[id='" + e + "'] ";
                        for (t = g.length; t--;)
                            g[t] = e + m(g[t]);
                        t = Oa.test(b) && f.parentNode ||
                        f;
                        u = g.join(",")
                    }
                    if (u)
                        try {
                            return V.apply(d, t.querySelectorAll(u)), d
                    } catch (E) {} finally {
                        l || f.removeAttribute("id")
                    }
                }
            }
            var q;
            a: {
                b = b.replace(Fa, "$1");
                e = n(b);
                if (!c && 1 === e.length) {
                    l = e[0] = e[0].slice(0);
                    if (2 < l.length && "ID" === (q = l[0]).type && C.getById && 9 === f.nodeType && x && K.relative[l[1].type]) {
                        f = (K.find.ID(q.matches[0].replace(fa, ga), f) || [])[0];
                        if (!f) {
                            q = d;
                            break a
                        }
                        b = b.slice(l.shift().value.length)
                    }
                    for (g = ia.needsContext.test(b) ? 0 : l.length; g--;) {
                        q = l[g];
                        if (K.relative[t = q.type])
                            break;
                        if (t = K.find[t])
                            if (c = t(q.matches[0].replace(fa,
                            ga), Oa.test(l[0].type) && f.parentNode || f)) {
                                l.splice(g, 1);
                                b = c.length && m(l);
                                if (!b) {
                                    V.apply(d, c);
                                    q = d;
                                    break a
                                }
                                break
                            }
                    }
                }
                ta(b, e)(c, f, !x, d, Oa.test(b));
                q = d
            }
            return q
        }
        function c() {
            function b(a, d) {
                f.push(a += " ") > K.cacheLength && delete b[f.shift()];
                return b[a] = d
            }
            var f = [];
            return b
        }
        function e(b) {
            b[B]=!0;
            return b
        }
        function g(b) {
            var f = y.createElement("div");
            try {
                return !!b(f)
            } catch (a) {
                return !1
            } finally {
                f.parentNode && f.parentNode.removeChild(f)
            }
        }
        function q(b, f) {
            for (var a = b.split("|"), d = b.length; d--;)
                K.attrHandle[a[d]] = f
        }
        function h(b, f) {
            var a = f && b, d = a && 1 === b.nodeType && 1 === f.nodeType && (~f.sourceIndex || ca) - (~b.sourceIndex || ca);
            if (d)
                return d;
            if (a)
                for (; a = a.nextSibling;)
                    if (a === f)
                        return -1;
            return b ? 1 : -1
        }
        function i(b) {
            return function(f) {
                return "input" === f.nodeName.toLowerCase() && f.type === b
            }
        }
        function j(b) {
            return function(f) {
                var a = f.nodeName.toLowerCase();
                return ("input" === a || "button" === a) && f.type === b
            }
        }
        function k(b) {
            return e(function(f) {
                f =+ f;
                return e(function(a, d) {
                    for (var c, l = b([], a.length, f), e = l.length; e--;)
                        if (a[c = l[e]])
                            a[c] =
                            !(d[c] = a[c])
                })
            })
        }
        function p() {}
        function n(b, f) {
            var d, c, e, t, g, u, E;
            if (g = P[b + " "])
                return f ? 0 : g.slice(0);
            g = b;
            u = [];
            for (E = K.preFilter; g;) {
                if (!d || (c = ea.exec(g)))
                    c && (g = g.slice(c[0].length) || g), u.push(e = []);
                d=!1;
                if (c = ha.exec(g))
                    d = c.shift(), e.push({
                    value: d,
                    type: c[0].replace(Fa, " ")
                }), g = g.slice(d.length);
                for (t in K.filter)
                    if ((c = ia[t].exec(g)) && (!E[t] || (c = E[t](c))))
                        d = c.shift(), e.push({
                    value: d,
                    type: t,
                    matches: c
                }), g = g.slice(d.length);
                if (!d)
                    break
            }
            return f ? g.length : g ? a.error(b) : P(b, u).slice(0)
        }
        function m(b) {
            for (var f =
            0, a = b.length, d = ""; f < a; f++)
                d += b[f].value;
            return d
        }
        function F(b, f, a) {
            var d = f.dir, c = a && "parentNode" === d, l = ua++;
            return f.first ? function(f, a, l) {
                for (; f = f[d];)
                    if (1 === f.nodeType || c)
                        return b(f, a, l)
            } : function(f, a, e) {
                var t, g, u, E = I + " " + l;
                if (e)
                    for (; f = f[d];) {
                        if ((1 === f.nodeType || c) && b(f, a, e))
                            return !0
                    } else 
                        for (; f = f[d];)
                            if (1 === f.nodeType || c)
                                if (u = f[B] || (f[B] = {}), (g = u[d]) && g[0] === E) {
                    if (!0 === (t = g[1]) || t === w)
                        return !0 === t
                } else if (g = u[d] = [E], g[1] = b(f, a, e) || w, !0 === g[1])return !0
            }
        }
        function L(b) {
            return 1 < b.length ? function(f,
            a, d) {
                for (var c = b.length; c--;)
                    if (!b[c](f, a, d))
                        return !1;
                return !0
            } : b[0]
        }
        function o(b, f, a, d, c) {
            for (var l, e = [], t = 0, g = b.length, u = null != f; t < g; t++)
                if (l = b[t])
                    if (!a || a(l, d, c))
                        e.push(l), u && f.push(t);
            return e
        }
        function oa(b, f, d, c, t, g) {
            c&&!c[B] && (c = oa(c));
            t&&!t[B] && (t = oa(t, g));
            return e(function(e, g, u, E) {
                var q, h, i = [], ja = [], j = g.length, p;
                if (!(p = e)) {
                    p = f || "*";
                    for (var k = u.nodeType ? [u] : u, Ca = [], n = 0, m = k.length; n < m; n++)
                        a(p, k[n], Ca);
                    p = Ca
                }
                p = b && (e ||!f) ? o(p, i, b, u, E) : p;
                k = d ? t || (e ? b : j || c) ? [] : g : p;
                d && d(p, k, u, E);
                if (c) {
                    q = o(k, ja);
                    c(q,
                    [], u, E);
                    for (u = q.length; u--;)
                        if (h = q[u])
                            k[ja[u]]=!(p[ja[u]] = h)
                }
                if (e) {
                    if (t || b) {
                        if (t) {
                            q = [];
                            for (u = k.length; u--;)
                                if (h = k[u])
                                    q.push(p[u] = h);
                            t(null, k = [], q, E)
                        }
                        for (u = k.length; u--;)
                            if ((h = k[u])&&-1 < (q = t ? R.call(e, h) : i[u]))
                                e[q]=!(g[q] = h)
                            }
                } else 
                    k = o(k === g ? k.splice(j, k.length) : k), t ? t(null, g, k, E) : V.apply(g, k)
            })
        }
        function s(b) {
            var f, a, d, c = b.length, l = K.relative[b[0].type];
            a = l || K.relative[" "];
            for (var e = l ? 1 : 0, t = F(function(b) {
                return b === f
            }, a, !0), g = F(function(b) {
                return -1 < R.call(f, b)
            }, a, !0), u = [function(b, a, d) {
                return !l && (d ||
                a !== A) || ((f = a).nodeType ? t(b, a, d) : g(b, a, d))
            }
            ]; e < c; e++)
                if (a = K.relative[b[e].type])
                    u = [F(L(u), a)];
                else {
                    a = K.filter[b[e].type].apply(null, b[e].matches);
                    if (a[B]) {
                        for (d=++e; d < c&&!K.relative[b[d].type]; d++);
                        return oa(1 < e && L(u), 1 < e && m(b.slice(0, e-1).concat({
                            value: " " === b[e-2].type ? "*": ""
                        })).replace(Fa, "$1"), a, e < d && s(b.slice(e, d)), d < c && s(b = b.slice(d)), d < c && m(b))
                    }
                    u.push(a)
                }
            return L(u)
        }
        function S(b, f) {
            var d = 0, c = 0 < f.length, t = 0 < b.length, g = function(e, g, u, E, q) {
                var h, i, ja = [], j = 0, p = "0", k = e && [], Ca = null != q, n = A, m = e || t &&
                K.find.TAG("*", q && g.parentNode || g), nb = I += null == n ? 1: Math.random() || 0.1;
                Ca && (A = g !== y && g, w = d);
                for (; null != (q = m[p]); p++) {
                    if (t && q) {
                        for (h = 0; i = b[h++];)
                            if (i(q, g, u)) {
                                E.push(q);
                                break
                            }
                        Ca && (I = nb, w=++d)
                    }
                    c && ((q=!i && q) && j--, e && k.push(q))
                }
                j += p;
                if (c && p !== j) {
                    for (h = 0; i = f[h++];)
                        i(k, ja, g, u);
                    if (e) {
                        if (0 < j)
                            for (; p--;)
                                !k[p]&&!ja[p] && (ja[p] = da.call(E));
                        ja = o(ja)
                    }
                    V.apply(E, ja);
                    Ca&&!e && 0 < ja.length && 1 < j + f.length && a.uniqueSort(E)
                }
                Ca && (I = nb, A = n);
                return k
            };
            return c ? e(g) : g
        }
        var D, C, w, K, r, G, ta, A, v, aa, y, z, x, M, N, J, Ea, B = "sizzle" +- new Date,
        H = b.document, I = 0, ua = 0, O = c(), P = c(), Q = c(), xa=!1, T = function(b, f) {
            b === f && (xa=!0);
            return 0
        }, Y = typeof f, ca =- 2147483648, ba = {}.hasOwnProperty, U = [], da = U.pop, X = U.push, V = U.push, W = U.slice, R = U.indexOf || function(b) {
            for (var f = 0, d = this.length; f < d; f++)
                if (this[f] === b)
                    return f;
            return -1
        }, Wa = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), Z = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Wa + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        Pa = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + Z.replace(3, 8) + ")*)|.*)\\)|)", Fa = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), ea = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ha = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, Oa = /[\x20\t\r\n\f]*[+~]/, la = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]", "g"), ma = RegExp(Pa), Ra = RegExp("^" + Wa + "$"), ia = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: RegExp("^" + Z),
            PSEUDO: RegExp("^" + Pa),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
            bool: RegExp("^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$", "i"),
            needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
            "i")
        }, ka = /^[^{]+\{\s*\[native \w/, na = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, pa = /^(?:input|select|textarea|button)$/i, qa = /^h\d$/i, ra = /'|\\/g, fa = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"), ga = function(b, f, d) {
            b = "0x" + f-65536;
            return b !== b || d ? f : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b>>10 | 55296, b & 1023 | 56320)
        };
        try {
            V.apply(U = W.call(H.childNodes), H.childNodes)
        } catch (sa) {
            V = {
                apply: U.length ? function(b, f) {
                    X.apply(b, W.call(f))
                }
                : function(b, f) {
                    for (var d = b.length, a = 0; b[d++] =
                    f[a++];);
                    b.length = d-1
                }
            }
        }
        G = a.isXML = function(b) {
            return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1
        };
        C = a.support = {};
        aa = a.setDocument = function(b) {
            var f = b ? b.ownerDocument || b: H, b = f.defaultView;
            if (f === y || 9 !== f.nodeType ||!f.documentElement)
                return y;
            y = f;
            z = f.documentElement;
            x=!G(f);
            b && b.attachEvent && b !== b.top && b.attachEvent("onbeforeunload", function() {
                aa()
            });
            C.attributes = g(function(b) {
                b.className = "i";
                return !b.getAttribute("className")
            });
            C.getElementsByTagName = g(function(b) {
                b.appendChild(f.createComment(""));
                return !b.getElementsByTagName("*").length
            });
            C.getElementsByClassName = g(function(b) {
                b.innerHTML = "<div class='a'></div><div class='a i'></div>";
                b.firstChild.className = "i";
                return 2 === b.getElementsByClassName("i").length
            });
            C.getById = g(function(b) {
                z.appendChild(b).id = B;
                return !f.getElementsByName ||!f.getElementsByName(B).length
            });
            C.getById ? (K.find.ID = function(b, f) {
                if (typeof f.getElementById !== Y && x) {
                    var d = f.getElementById(b);
                    return d && d.parentNode ? [d] : []
                }
            }, K.filter.ID = function(b) {
                var f = b.replace(fa, ga);
                return function(b) {
                    return b.getAttribute("id") === f
                }
            }) : (delete K.find.ID, K.filter.ID = function(b) {
                var f = b.replace(fa, ga);
                return function(b) {
                    return (b = typeof b.getAttributeNode !== Y && b.getAttributeNode("id")) && b.value === f
                }
            });
            K.find.TAG = C.getElementsByTagName ? function(b, f) {
                if (typeof f.getElementsByTagName !== Y)
                    return f.getElementsByTagName(b)
            } : function(b, f) {
                var d, a = [], c = 0, l = f.getElementsByTagName(b);
                if ("*" === b) {
                    for (; d = l[c++];)
                        1 === d.nodeType && a.push(d);
                    return a
                }
                return l
            };
            K.find.CLASS = C.getElementsByClassName &&
            function(b, f) {
                if (typeof f.getElementsByClassName !== Y && x)
                    return f.getElementsByClassName(b)
            };
            N = [];
            M = [];
            if (C.qsa = ka.test(f.querySelectorAll))
                g(function(b) {
                    b.innerHTML = "<select><option selected=''></option></select>";
                    b.querySelectorAll("[selected]").length || M.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                    b.querySelectorAll(":checked").length || M.push(":checked")
                }), g(function(b) {
                var d =
                f.createElement("input");
                d.setAttribute("type", "hidden");
                b.appendChild(d).setAttribute("t", "");
                b.querySelectorAll("[t^='']").length && M.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                b.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled");
                b.querySelectorAll("*,:x");
                M.push(",.*:")
            });
            (C.matchesSelector = ka.test(J = z.webkitMatchesSelector || z.mozMatchesSelector || z.oMatchesSelector || z.msMatchesSelector)) && g(function(b) {
                C.disconnectedMatch = J.call(b, "div");
                J.call(b, "[s!='']:x");
                N.push("!=", Pa)
            });
            M = M.length && RegExp(M.join("|"));
            N = N.length && RegExp(N.join("|"));
            Ea = ka.test(z.contains) || z.compareDocumentPosition ? function(b, f) {
                var d = 9 === b.nodeType ? b.documentElement: b, a = f && f.parentNode;
                return b === a ||!(!a ||!(1 === a.nodeType && (d.contains ? d.contains(a) : b.compareDocumentPosition && b.compareDocumentPosition(a) & 16)))
            } : function(b, f) {
                if (f)
                    for (; f = f.parentNode;)
                        if (f === b)
                            return !0;
                return !1
            };
            T = z.compareDocumentPosition ? function(b, d) {
                if (b === d)
                    return xa=!0, 0;
                var a = d.compareDocumentPosition && b.compareDocumentPosition &&
                b.compareDocumentPosition(d);
                return a ? a & 1 ||!C.sortDetached && d.compareDocumentPosition(b) === a ? b === f || Ea(H, b)?-1 : d === f || Ea(H, d) ? 1 : v ? R.call(v, b) - R.call(v, d) : 0 : a & 4?-1 : 1 : b.compareDocumentPosition?-1 : 1
            } : function(b, d) {
                var a, c = 0;
                a = b.parentNode;
                var l = d.parentNode, e = [b], t = [d];
                if (b === d)
                    return xa=!0, 0;
                if (!a ||!l)
                    return b === f?-1 : d === f ? 1 : a?-1 : l ? 1 : v ? R.call(v, b) - R.call(v, d) : 0;
                if (a === l)
                    return h(b, d);
                for (a = b; a = a.parentNode;)
                    e.unshift(a);
                for (a = d; a = a.parentNode;)
                    t.unshift(a);
                for (; e[c] === t[c];)
                    c++;
                return c ? h(e[c], t[c]) :
                e[c] === H?-1 : t[c] === H ? 1 : 0
            };
            return f
        };
        a.matches = function(b, f) {
            return a(b, null, null, f)
        };
        a.matchesSelector = function(b, f) {
            (b.ownerDocument || b) !== y && aa(b);
            f = f.replace(la, "='$1']");
            if (C.matchesSelector && x && (!N ||!N.test(f)) && (!M ||!M.test(f)))
                try {
                    var d = J.call(b, f);
                    if (d || C.disconnectedMatch || b.document && 11 !== b.document.nodeType)
                        return d
            } catch (c) {}
            return 0 < a(f, y, null, [b]).length
        };
        a.contains = function(b, f) {
            (b.ownerDocument || b) !== y && aa(b);
            return Ea(b, f)
        };
        a.attr = function(b, d) {
            (b.ownerDocument || b) !== y && aa(b);
            var a =
            K.attrHandle[d.toLowerCase()], a = a && ba.call(K.attrHandle, d.toLowerCase()) ? a(b, d, !x): f;
            return a === f ? C.attributes ||!x ? b.getAttribute(d) : (a = b.getAttributeNode(d)) && a.specified ? a.value : null : a
        };
        a.error = function(b) {
            throw Error("Syntax error, unrecognized expression: " + b);
        };
        a.uniqueSort = function(b) {
            var f, d = [], a = 0, c = 0;
            xa=!C.detectDuplicates;
            v=!C.sortStable && b.slice(0);
            b.sort(T);
            if (xa) {
                for (; f = b[c++];)
                    f === b[c] && (a = d.push(c));
                for (; a--;)
                    b.splice(d[a], 1)
            }
            return b
        };
        r = a.getText = function(b) {
            var f, d = "", a = 0;
            if (f = b.nodeType)
                if (1 ===
                f || 9 === f || 11 === f) {
                    if ("string" === typeof b.textContent)
                        return b.textContent;
                        for (b = b.firstChild; b; b = b.nextSibling)
                            d += r(b)
                } else {
                    if (3 === f || 4 === f)
                        return b.nodeValue
                } else 
                    for (; f = b[a]; a++)
                        d += r(f);
            return d
        };
        K = a.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: ia,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(b) {
                    b[1] = b[1].replace(fa, ga);
                    b[3] = (b[4] || b[5] || "").replace(fa, ga);
                    "~=" ===
                    b[2] && (b[3] = " " + b[3] + " ");
                    return b.slice(0, 4)
                },
                CHILD: function(b) {
                    b[1] = b[1].toLowerCase();
                    "nth" === b[1].slice(0, 3) ? (b[3] || a.error(b[0]), b[4] =+ (b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] =+ (b[7] + b[8] || "odd" === b[3])) : b[3] && a.error(b[0]);
                    return b
                },
                PSEUDO: function(b) {
                    var d, a=!b[5] && b[2];
                    if (ia.CHILD.test(b[0]))
                        return null;
                    if (b[3] && b[4] !== f)
                        b[2] = b[4];
                    else if (a && ma.test(a) && (d = n(a, !0)) && (d = a.indexOf(")", a.length - d) - a.length))
                        b[0] = b[0].slice(0, d), b[2] = a.slice(0, d);
                    return b.slice(0, 3)
                }
            },
            filter: {
                TAG: function(b) {
                    var f =
                    b.replace(fa, ga).toLowerCase();
                    return "*" === b ? function() {
                        return !0
                    } : function(b) {
                        return b.nodeName && b.nodeName.toLowerCase() === f
                    }
                },
                CLASS: function(b) {
                    var f = O[b + " "];
                    return f || (f = RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)")) && O(b, function(b) {
                        return f.test("string" === typeof b.className && b.className || typeof b.getAttribute !== Y && b.getAttribute("class") || "")
                    })
                },
                ATTR: function(b, f, d) {
                    return function(c) {
                        c = a.attr(c, b);
                        if (null == c)
                            return "!=" === f;
                        if (!f)
                            return !0;
                        c += "";
                        return "=" === f ? c === d : "!=" === f ?
                        c !== d : "^=" === f ? d && 0 === c.indexOf(d) : "*=" === f ? d&&-1 < c.indexOf(d) : "$=" === f ? d && c.slice( - d.length) === d : "~=" === f?-1 < (" " + c + " ").indexOf(d) : "|=" === f ? c === d || c.slice(0, d.length + 1) === d + "-" : !1
                    }
                },
                CHILD: function(b, f, d, a, c) {
                    var l = "nth" !== b.slice(0, 3), e = "last" !== b.slice(-4), t = "of-type" === f;
                    return 1 === a && 0 === c ? function(b) {
                        return !!b.parentNode
                    } : function(f, d, g) {
                        var u, E, q, h, i, d = l !== e ? "nextSibling": "previousSibling", ja = f.parentNode, j = t && f.nodeName.toLowerCase(), g=!g&&!t;
                        if (ja) {
                            if (l) {
                                for (; d;) {
                                    for (E = f; E = E[d];)
                                        if (t ? E.nodeName.toLowerCase() ===
                                        j : 1 === E.nodeType)
                                            return !1;
                                    i = d = "only" === b&&!i && "nextSibling"
                                }
                                return !0
                            }
                            i = [e ? ja.firstChild: ja.lastChild];
                            if (e && g) {
                                g = ja[B] || (ja[B] = {});
                                u = g[b] || [];
                                h = u[0] === I && u[1];
                                q = u[0] === I && u[2];
                                for (E = h && ja.childNodes[h]; E=++h && E && E[d] || (q = h = 0) 
                                    || i.pop();
                                )if (1 === E.nodeType&&++q && E === f) {
                                    g[b] = [I, h, q];
                                    break
                                }
                            } else if (g && (u = (f[B] || (f[B] = {}))[b]) && u[0] === I)
                                q = u[1];
                            else 
                                for (; E=++h && E && E[d] || (q = h = 0) || i.pop();)
                                    if ((t ? E.nodeName.toLowerCase() === j : 1 === E.nodeType)&&++q)
                                        if (g && ((E[B] || (E[B] = {}))[b] = [I, q]), E === f)
                                            break;
                            q -= c;
                            return q ===
                            a || 0 === q%a && 0 <= q / a
                        }
                    }
                },
                PSEUDO: function(b, f) {
                    var d, c = K.pseudos[b] || K.setFilters[b.toLowerCase()] || a.error("unsupported pseudo: " + b);
                    if (c[B])
                        return c(f);
                    return 1 < c.length ? (d = [b, b, "", f], K.setFilters.hasOwnProperty(b.toLowerCase()) ? e(function(b, d) {
                        for (var a, l = c(b, f), e = l.length;
                        e--;
                        )a = R.call(b, l[e]), b[a]=!(d[a] = l[e])
                    }) : function(b) {
                        return c(b, 0, d)
                    }) : c
                }
            },
            pseudos: {
                not: e(function(b) {
                    var f = [], d = [], a = ta(b.replace(Fa, "$1"));
                    return a[B] ? e(function(b, f, d, c) {
                        for (var c = a(b, null, c, []), l = b.length; l--;)
                            if (d = c[l])
                                b[l] =
                                !(f[l] = d)
                    }) : function(b, c, l) {
                        f[0] = b;
                        a(f, null, l, d);
                        return !d.pop()
                    }
                }),
                has: e(function(b) {
                    return function(f) {
                        return 0 < a(b, f).length
                    }
                }),
                contains: e(function(b) {
                    return function(f) {
                        return -1 < (f.textContent || f.innerText || r(f)).indexOf(b)
                    }
                }),
                lang: e(function(b) {
                    Ra.test(b || "") || a.error("unsupported lang: " + b);
                    b = b.replace(fa, ga).toLowerCase();
                    return function(f) {
                        var d;
                        do 
                            if (d = x ? f.lang : f.getAttribute("xml:lang") || f.getAttribute("lang"))
                                return d = d.toLowerCase(), d === b || 0 === d.indexOf(b + "-");
                        while ((f = f.parentNode) && 1 ===
                        f.nodeType);
                        return !1
                    }
                }),
                target: function(f) {
                    var d = b.location && b.location.hash;
                    return d && d.slice(1) === f.id
                },
                root: function(b) {
                    return b === z
                },
                focus: function(b) {
                    return b === y.activeElement && (!y.hasFocus || y.hasFocus())&&!(!b.type&&!b.href&&!~b.tabIndex)
                },
                enabled: function(b) {
                    return !1 === b.disabled
                },
                disabled: function(b) {
                    return !0 === b.disabled
                },
                checked: function(b) {
                    var f = b.nodeName.toLowerCase();
                    return "input" === f&&!!b.checked || "option" === f&&!!b.selected
                },
                selected: function(b) {
                    return !0 === b.selected
                },
                empty: function(b) {
                    for (b =
                    b.firstChild; b; b = b.nextSibling)
                        if ("@" < b.nodeName || 3 === b.nodeType || 4 === b.nodeType)
                            return !1;
                    return !0
                },
                parent: function(b) {
                    return !K.pseudos.empty(b)
                },
                header: function(b) {
                    return qa.test(b.nodeName)
                },
                input: function(b) {
                    return pa.test(b.nodeName)
                },
                button: function(b) {
                    var f = b.nodeName.toLowerCase();
                    return "input" === f && "button" === b.type || "button" === f
                },
                text: function(b) {
                    var f;
                    return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (f = b.getAttribute("type")) || f.toLowerCase() === b.type)
                },
                first: k(function() {
                    return [0]
                }),
                last: k(function(b, f) {
                    return [f-1]
                }),
                eq: k(function(b, f, d) {
                    return [0 > d ? d + f: d]
                }),
                even: k(function(b, f) {
                    for (var d = 0; d < f; d += 2)
                        b.push(d);
                    return b
                }),
                odd: k(function(b, f) {
                    for (var d = 1; d < f; d += 2)
                        b.push(d);
                    return b
                }),
                lt: k(function(b, f, d) {
                    for (f = 0 > d ? d + f : d; 0<=--f;)
                        b.push(f);
                    return b
                }),
                gt: k(function(b, f, d) {
                    for (d = 0 > d ? d + f : d; ++d < f;)
                        b.push(d);
                    return b
                })
            }
        };
        K.pseudos.nth = K.pseudos.eq;
        for (D in{
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            K.pseudos[D] = i(D);
        for (D in{
            submit: !0,
            reset: !0
        })
            K.pseudos[D] = j(D);
        p.prototype = K.filters =
        K.pseudos;
        K.setFilters = new p;
        ta = a.compile = function(b, f) {
            var d, a = [], c = [], l = Q[b + " "];
            if (!l) {
                f || (f = n(b));
                for (d = f.length; d--;)
                    l = s(f[d]), l[B] ? a.push(l) : c.push(l);
                l = Q(b, S(c, a))
            }
            return l
        };
        C.sortStable = B.split("").sort(T).join("") === B;
        C.detectDuplicates = xa;
        aa();
        C.sortDetached = g(function(b) {
            return b.compareDocumentPosition(y.createElement("div")) & 1
        });
        g(function(b) {
            b.innerHTML = "<a href='#'></a>";
            return "#" === b.firstChild.getAttribute("href")
        }) || q("type|href|height|width", function(b, f, d) {
            if (!d)
                return b.getAttribute(f,
                "type" === f.toLowerCase() ? 1 : 2)
        });
        (!C.attributes ||!g(function(b) {
            b.innerHTML = "<input/>";
            b.firstChild.setAttribute("value", "");
            return "" === b.firstChild.getAttribute("value")
        })) && q("value", function(b, f, d) {
            if (!d && "input" === b.nodeName.toLowerCase())
                return b.defaultValue
        });
        g(function(b) {
            return null == b.getAttribute("disabled")
        }) || q("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(b, f, d) {
            var a;
            if (!d)
                return (a = b.getAttributeNode(f)) &&
                a.specified ? a.value : !0 === b[f] ? f.toLowerCase() : null
        });
        d.find = a;
        d.expr = a.selectors;
        d.expr[":"] = d.expr.pseudos;
        d.unique = a.uniqueSort;
        d.text = a.getText;
        d.isXMLDoc = a.isXML;
        d.contains = a.contains
    })(a);
    var Ra = {};
    d.Callbacks = function(b) {
        var b = "string" === typeof b ? Ra[b] || m(b): d.extend({}, b), f, a, c, e, g, q, h = [], i=!b.once && [], k = function(d) {
            a = b.memory && d;
            c=!0;
            g = q || 0;
            q = 0;
            e = h.length;
            for (f=!0; h && g < e; g++)
                if (!1 === h[g].apply(d[0], d[1]) && b.stopOnFalse) {
                    a=!1;
                    break
                }
            f=!1;
            h && (i ? i.length && k(i.shift()) : a ? h = [] : n.disable())
        }, n = {
            add: function() {
                if (h) {
                    var c =
                    h.length;
                    (function Nb(f) {
                        d.each(f, function(f, a) {
                            var c = d.type(a);
                            "function" === c ? (!b.unique ||!n.has(a)) && h.push(a) : a && a.length && "string" !== c && Nb(a)
                        })
                    })(arguments);
                    f ? e = h.length : a && (q = c, k(a))
                }
                return this
            },
            remove: function() {
                h && d.each(arguments, function(b, a) {
                    for (var c; -1 < (c = d.inArray(a, h, c));)
                        h.splice(c, 1), f && (c <= e && e--, c <= g && g--)
                });
                return this
            },
            has: function(b) {
                return b?-1 < d.inArray(b, h) : !(!h ||!h.length)
            },
            empty: function() {
                h = [];
                e = 0;
                return this
            },
            disable: function() {
                h = i = a = j;
                return this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                i = j;
                a || n.disable();
                return this
            },
            locked: function() {
                return !i
            },
            fireWith: function(b, d) {
                if (h && (!c || i))
                    d = d || [], d = [b, d.slice ? d.slice(): d], f ? i.push(d) : k(d);
                return this
            },
            fire: function() {
                n.fireWith(this, arguments);
                return this
            },
            fired: function() {
                return !!c
            }
        };
        return n
    };
    d.extend({
        Deferred: function(b) {
            var f = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]], a = "pending", c = {
                state: function() {
                    return a
                },
                always: function() {
                    e.done(arguments).fail(arguments);
                    return this
                },
                then: function() {
                    var b = arguments;
                    return d.Deferred(function(a) {
                        d.each(f, function(f, l) {
                            var g = l[0], h = d.isFunction(b[f]) && b[f];
                            e[l[1]](function() {
                                var b = h && h.apply(this, arguments);
                                if (b && d.isFunction(b.promise))
                                    b.promise().done(a.resolve).fail(a.reject).progress(a.notify);
                                else 
                                    a[g + "With"](this === c ? a.promise() : this, h ? [b] : arguments)
                            })
                        });
                        b = null
                    }).promise()
                },
                promise: function(b) {
                    return null != b ? d.extend(b, c) : c
                }
            }, e = {};
            c.pipe = c.then;
            d.each(f, function(b,
            d) {
                var g = d[2], h = d[3];
                c[d[1]] = g.add;
                h && g.add(function() {
                    a = h
                }, f[b^1][2].disable, f[2][2].lock);
                e[d[0]] = function() {
                    e[d[0] + "With"](this === e ? c : this, arguments);
                    return this
                };
                e[d[0] + "With"] = g.fireWith
            });
            c.promise(e);
            b && b.call(e, e);
            return e
        },
        when: function(b) {
            var f = 0, a = ha.call(arguments), c = a.length, e = 1 !== c || b && d.isFunction(b.promise) ? c: 0, g = 1 === e ? b: d.Deferred(), q = function(b, f, d) {
                return function(a) {
                    f[b] = this;
                    d[b] = 1 < arguments.length ? ha.call(arguments) : a;
                    d === h ? g.notifyWith(f, d) : --e || g.resolveWith(f, d)
                }
            }, h, i, j;
            if (1 <
            c) {
                h = Array(c);
                i = Array(c);
                for (j = Array(c); f < c; f++)
                    a[f] && d.isFunction(a[f].promise) ? a[f].promise().done(q(f, j, a)).fail(g.reject).progress(q(f, i, h)) : --e
            }
            e || g.resolveWith(j, a);
            return g.promise()
        }
    });
    d.support = function(b) {
        var f, c, e, g, u, q, h = i.createElement("div");
        h.setAttribute("className", "t");
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        f = h.getElementsByTagName("*") || [];
        c = h.getElementsByTagName("a")[0];
        if (!c ||!c.style ||!f.length)
            return b;
        e = i.createElement("select");
        g =
        e.appendChild(i.createElement("option"));
        f = h.getElementsByTagName("input")[0];
        c.style.cssText = "top:1px;float:left;opacity:.5";
        b.getSetAttribute = "t" !== h.className;
        b.leadingWhitespace = 3 === h.firstChild.nodeType;
        b.tbody=!h.getElementsByTagName("tbody").length;
        b.htmlSerialize=!!h.getElementsByTagName("link").length;
        b.style = /top/.test(c.getAttribute("style"));
        b.hrefNormalized = "/a" === c.getAttribute("href");
        b.opacity = /^0.5/.test(c.style.opacity);
        b.cssFloat=!!c.style.cssFloat;
        b.checkOn=!!f.value;
        b.optSelected =
        g.selected;
        b.enctype=!!i.createElement("form").enctype;
        b.html5Clone = "<:nav></:nav>" !== i.createElement("nav").cloneNode(!0).outerHTML;
        b.inlineBlockNeedsLayout=!1;
        b.shrinkWrapBlocks=!1;
        b.pixelPosition=!1;
        b.deleteExpando=!0;
        b.noCloneEvent=!0;
        b.reliableMarginRight=!0;
        b.boxSizingReliable=!0;
        f.checked=!0;
        b.noCloneChecked = f.cloneNode(!0).checked;
        e.disabled=!0;
        b.optDisabled=!g.disabled;
        try {
            delete h.test
        } catch (j) {
            b.deleteExpando=!1
        }
        f = i.createElement("input");
        f.setAttribute("value", "");
        b.input = "" === f.getAttribute("value");
        f.value = "t";
        f.setAttribute("type", "radio");
        b.radioValue = "t" === f.value;
        f.setAttribute("checked", "t");
        f.setAttribute("name", "t");
        c = i.createDocumentFragment();
        c.appendChild(f);
        b.appendChecked = f.checked;
        b.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked;
        h.attachEvent && (h.attachEvent("onclick", function() {
            b.noCloneEvent=!1
        }), h.cloneNode(!0).click());
        for (q in{
            submit: !0,
            change: !0,
            focusin: !0
        })
            h.setAttribute(c = "on" + q, "t"), b[q + "Bubbles"] = c in a ||!1 === h.attributes[c].expando;
        h.style.backgroundClip =
        "content-box";
        h.cloneNode(!0).style.backgroundClip = "";
        b.clearCloneStyle = "content-box" === h.style.backgroundClip;
        for (q in d(b))
            break;
        b.ownLast = "0" !== q;
        d(function() {
            var f, c, l = i.getElementsByTagName("body")[0];
            if (l) {
                f = i.createElement("div");
                f.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
                l.appendChild(f).appendChild(h);
                h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                c = h.getElementsByTagName("td");
                c[0].style.cssText = "padding:0;margin:0;border:0;display:none";
                u = 0 === c[0].offsetHeight;
                c[0].style.display = "";
                c[1].style.display = "none";
                b.reliableHiddenOffsets = u && 0 === c[0].offsetHeight;
                h.innerHTML = "";
                h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
                d.swap(l, null != l.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    b.boxSizing = 4 === h.offsetWidth
                });
                if (a.getComputedStyle)
                    b.pixelPosition = "1%" !== (a.getComputedStyle(h, null) || {}).top, b.boxSizingReliable =
                "4px" === (a.getComputedStyle(h, null) || {
                    width: "4px"
                }).width, c = h.appendChild(i.createElement("div")), c.style.cssText = h.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", c.style.marginRight = c.style.width = "0", h.style.width = "1px", b.reliableMarginRight=!parseFloat((a.getComputedStyle(c, null) || {}).marginRight);
                if (typeof h.style.zoom !== ka && (h.innerHTML = "", h.style.cssText = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1",
                b.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== h.offsetWidth, b.inlineBlockNeedsLayout))
                    l.style.zoom = 1;
                l.removeChild(f);
                f = h = c = c = null
            }
        });
        f = e = c = g = c = f = null;
        return b
    }({});
    var Ib = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Hb = /([A-Z])/g;
    d.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(b) {
            b = b.nodeType ? d.cache[b[d.expando]] : b[d.expando];
            return !!b&&!e(b)
        },
        data: function(b, f, d) {
            return x(b, f, d)
        },
        removeData: function(b, f) {
            return r(b, f)
        },
        _data: function(b, f, d) {
            return x(b, f, d, !0)
        },
        _removeData: function(b, f) {
            return r(b, f, !0)
        },
        acceptData: function(b) {
            if (b.nodeType && 1 !== b.nodeType && 9 !== b.nodeType)
                return !1;
            var f = b.nodeName && d.noData[b.nodeName.toLowerCase()];
            return !f ||!0 !== f && b.getAttribute("classid") === f
        }
    });
    d.fn.extend({
        data: function(b, f) {
            var a, e, g = null, u = 0, h = this[0];
            if (b === j) {
                if (this.length && (g = d.data(h), 1 === h.nodeType&&!d._data(h, "parsedAttrs"))
                    ) {
                    for (a = h.attributes; u <
                    a.length; u++)
                        e = a[u].name, 0 === e.indexOf("data-") && (e = d.camelCase(e.slice(5)), c(h, e, g[e]));
                    d._data(h, "parsedAttrs", !0)
                }
                return g
            }
            return "object" === typeof b ? this.each(function() {
                d.data(this, b)
            }) : 1 < arguments.length ? this.each(function() {
                d.data(this, b, f)
            }) : h ? c(h, b, d.data(h, b)) : null
        },
        removeData: function(b) {
            return this.each(function() {
                d.removeData(this, b)
            })
        }
    });
    d.extend({
        queue: function(b, f, a) {
            var c;
            if (b)
                return f = (f || "fx") + "queue", c = d._data(b, f), a && (!c || d.isArray(a) ? c = d._data(b, f, d.makeArray(a)) : c.push(a)), c ||
            []
        },
        dequeue: function(b, f) {
            var f = f || "fx", a = d.queue(b, f), c = a.length, e = a.shift(), g = d._queueHooks(b, f), h = function() {
                d.dequeue(b, f)
            };
            "inprogress" === e && (e = a.shift(), c--);
            e && ("fx" === f && a.unshift("inprogress"), delete g.stop, e.call(b, h, g));
            !c && g && g.empty.fire()
        },
        _queueHooks: function(b, f) {
            var a = f + "queueHooks";
            return d._data(b, a) || d._data(b, a, {
                empty: d.Callbacks("once memory").add(function() {
                    d._removeData(b, f + "queue");
                    d._removeData(b, a)
                })
            })
        }
    });
    d.fn.extend({
        queue: function(b, f) {
            var a = 2;
            "string" !== typeof b && (f =
            b, b = "fx", a--);
            return arguments.length < a ? d.queue(this[0], b) : f === j ? this : this.each(function() {
                var a = d.queue(this, b, f);
                d._queueHooks(this, b);
                "fx" === b && "inprogress" !== a[0] && d.dequeue(this, b)
            })
        },
        dequeue: function(b) {
            return this.each(function() {
                d.dequeue(this, b)
            })
        },
        delay: function(b, f) {
            b = d.fx ? d.fx.speeds[b] || b : b;
            return this.queue(f || "fx", function(f, d) {
                var a = setTimeout(f, b);
                d.stop = function() {
                    clearTimeout(a)
                }
            })
        },
        clearQueue: function(b) {
            return this.queue(b || "fx", [])
        },
        promise: function(b, f) {
            var a, c = 1, e = d.Deferred(),
            g = this, h = this.length, i = function() {
                --c || e.resolveWith(g, [g])
            };
            "string" !== typeof b && (f = b, b = j);
            for (b = b || "fx"; h--;)
                if ((a = d._data(g[h], b + "queueHooks")) && a.empty)
                    c++, a.empty.add(i);
            i();
            return e.promise(f)
        }
    });
    var Ja, ob, ab = /[\t\r\n\f]/g, Ob = /\r/g, Pb = /^(?:input|select|textarea|button|object)$/i, Qb = /^(?:a|area)$/i, bb = /^(?:checked|selected)$/i, Ga = d.support.getSetAttribute, Xa = d.support.input;
    d.fn.extend({
        attr: function(b, f) {
            return d.access(this, d.attr, b, f, 1 < arguments.length)
        },
        removeAttr: function(b) {
            return this.each(function() {
                d.removeAttr(this,
                b)
            })
        },
        prop: function(b, f) {
            return d.access(this, d.prop, b, f, 1 < arguments.length)
        },
        removeProp: function(b) {
            b = d.propFix[b] || b;
            return this.each(function() {
                try {
                    this[b] = j, delete this[b]
                } catch (f) {}
            })
        },
        addClass: function(b) {
            var f, a, c, e, g, h = 0, i = this.length;
            f = "string" === typeof b && b;
            if (d.isFunction(b))
                return this.each(function(f) {
                    d(this).addClass(b.call(this, f, this.className))
                });
            if (f)
                for (f = (b || "").match(ia) || []; h < i; h++)
                    if (a = this[h], c = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(ab, " ") 
                        : " ")) {
                for (g =
                0; e = f[g++];)
                    0 > c.indexOf(" " + e + " ") && (c += e + " ");
                a.className = d.trim(c)
            }
            return this
        },
        removeClass: function(b) {
            var f, a, c, e, g, h = 0, i = this.length;
            f = 0 === arguments.length || "string" === typeof b && b;
            if (d.isFunction(b))
                return this.each(function(f) {
                    d(this).removeClass(b.call(this, f, this.className))
                });
            if (f)
                for (f = (b || "").match(ia) || []; h < i; h++)
                    if (a = this[h], c = 1 === a.nodeType && (a.className ? (" " + a.className + " ").replace(ab, " ") 
                        : "")) {
                for (g = 0; e = f[g++];)
                    for (; 0 <= c.indexOf(" " + e + " ");)
                        c = c.replace(" " + e + " ", " ");
                a.className =
                b ? d.trim(c) : ""
            }
            return this
        },
        toggleClass: function(b, f) {
            var a = typeof b;
            return "boolean" === typeof f && "string" === a ? f ? this.addClass(b) : this.removeClass(b) : d.isFunction(b) ? this.each(function(a) {
                d(this).toggleClass(b.call(this, a, this.className, f), f)
            }) : this.each(function() {
                if ("string" === a)
                    for (var f, c = 0, e = d(this), g = b.match(ia) || []; f = g[c++];)
                        e.hasClass(f) ? e.removeClass(f) : e.addClass(f);
                else if (a === ka || "boolean" === a)
                    this.className && d._data(this, "__className__", this.className), this.className = this.className ||!1 ===
                b ? "" : d._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            for (var b = " " + b + " ", f = 0, d = this.length; f < d; f++)
                if (1 === this[f].nodeType && 0 <= (" " + this[f].className + " ").replace(ab, " ").indexOf(b))
                    return !0;
            return !1
        },
        val: function(b) {
            var f, a, c, e = this[0];
            if (arguments.length)
                return c = d.isFunction(b), this.each(function(f) {
                if (1 === this.nodeType && (f = c ? b.call(this, f, d(this).val()) : b, null == f ? f = "" : "number" === typeof f ? f += "" : d.isArray(f) && (f = d.map(f, function(b) {
                    return null == b ? "" : b + ""
                })), a = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()
                    ],
                !a ||!("set"in a) || a.set(this, f, "value") === j))this.value = f
            });
            if (e) {
                if ((a = d.valHooks[e.type] || d.valHooks[e.nodeName.toLowerCase()]) && "get"in a && (f = a.get(e, "value")) !== j)
                    return f;
                f = e.value;
                return "string" === typeof f ? f.replace(Ob, "") : null == f ? "" : f
            }
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(b) {
                    var f = d.find.attr(b, "value");
                    return null != f ? f : b.text
                }
            },
            select: {
                get: function(b) {
                    for (var f, a = b.options, c = b.selectedIndex, e = (b = "select-one" === b.type || 0 > c) ? null : [], g = b ? c + 1 : a.length, h = 0 > c ? g : b ? c : 0; h < g; h++)
                        if (f = a[h], (f.selected ||
                        h === c) && (d.support.optDisabled?!f.disabled : null === f.getAttribute("disabled")
                            ) && (!f.parentNode.disabled ||!d.nodeName(f.parentNode, "optgroup"))) {
                        f = d(f).val();
                        if (b)
                            return f;
                        e.push(f)
                    }
                    return e
                },
                set: function(b, f) {
                    for (var a, c, e = b.options, g = d.makeArray(f), h = e.length; h--;)
                        if (c = e[h], c.selected = 0 <= d.inArray(d(c).val()
                            , g))a=!0;
                    if (!a)
                        b.selectedIndex =- 1;
                    return g
                }
            }
        },
        attr: function(b, f, a) {
            var c, e, g = b.nodeType;
            if (b&&!(3 === g || 8 === g || 2 === g)) {
                if (typeof b.getAttribute === ka)
                    return d.prop(b, f, a);
                if (1 !== g ||!d.isXMLDoc(b))
                    f =
                    f.toLowerCase(), c = d.attrHooks[f] || (d.expr.match.bool.test(f) ? ob : Ja);
                if (a !== j)
                    if (null === a)
                        d.removeAttr(b, f);
                    else {
                        if (c && "set"in c && (e = c.set(b, a, f)) !== j)
                            return e;
                            b.setAttribute(f, a + "");
                            return a
                    } else {
                    if (c && "get"in c && null !== (e = c.get(b, f)))
                        return e;
                    e = d.find.attr(b, f);
                    return null == e ? j : e
                }
            }
        },
        removeAttr: function(b, f) {
            var a, c, e = 0, g = f && f.match(ia);
            if (g && 1 === b.nodeType)
                for (; a = g[e++];)
                    c = d.propFix[a] || a, d.expr.match.bool.test(a) ? Xa && Ga ||!bb.test(a) ? b[c]=!1 : b[d.camelCase("default-" + a)] = b[c]=!1 : d.attr(b, a, ""), b.removeAttribute(Ga ?
            a : c)
        },
        attrHooks: {
            type: {
                set: function(b, f) {
                    if (!d.support.radioValue && "radio" === f && d.nodeName(b, "input")) {
                        var a = b.value;
                        b.setAttribute("type", f);
                        if (a)
                            b.value = a;
                        return f
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(b, f, a) {
            var c, e, g = b.nodeType;
            if (b&&!(3 === g || 8 === g || 2 === g)) {
                if (1 !== g ||!d.isXMLDoc(b))
                    f = d.propFix[f] || f, e = d.propHooks[f];
                return a !== j ? e && "set"in e && (c = e.set(b, a, f)) !== j ? c : b[f] = a : e && "get"in e && null !== (c = e.get(b, f)) ? c : b[f]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(b) {
                    var f = d.find.attr(b,
                    "tabindex");
                    return f ? parseInt(f, 10) : Pb.test(b.nodeName) || Qb.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        }
    });
    ob = {
        set: function(b, f, a) {
            !1 === f ? d.removeAttr(b, a) : Xa && Ga ||!bb.test(a) ? b.setAttribute(!Ga && d.propFix[a] || a, a) : b[d.camelCase("default-" + a)] = b[a]=!0;
            return a
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g), function(b, f) {
        var a = d.expr.attrHandle[f] || d.find.attr;
        d.expr.attrHandle[f] = Xa && Ga ||!bb.test(f) ? function(b, f, c) {
            var e = d.expr.attrHandle[f], b = c ? j: (d.expr.attrHandle[f] = j) != a(b, f, c) ? f.toLowerCase(): null;
            d.expr.attrHandle[f] =
            e;
            return b
        } : function(b, f, a) {
            return a ? j : b[d.camelCase("default-" + f)] ? f.toLowerCase() : null
        }
    });
    if (!Xa ||!Ga)
        d.attrHooks.value = {
            set: function(b, f, a) {
                if (d.nodeName(b, "input"))
                    b.defaultValue = f;
                else 
                    return Ja && Ja.set(b, f, a)
                }
            };
    if (!Ga)
        Ja = {
            set: function(b, f, a) {
                var d = b.getAttributeNode(a);
                d || b.setAttributeNode(d = b.ownerDocument.createAttribute(a));
                d.value = f += "";
                return "value" === a || f === b.getAttribute(a) ? f : j
            }
        }, d.expr.attrHandle.id = d.expr.attrHandle.name = d.expr.attrHandle.coords = function(b, f, a) {
        var d;
        return a ? j : (d =
        b.getAttributeNode(f)) && "" !== d.value ? d.value : null
    }, d.valHooks.button = {
        get: function(b, f) {
            var a = b.getAttributeNode(f);
            return a && a.specified ? a.value : j
        },
        set: Ja.set
    }, d.attrHooks.contenteditable = {
        set: function(b, f, a) {
            Ja.set(b, "" === f?!1 : f, a)
        }
    }, d.each(["width", "height"], function(b, f) {
        d.attrHooks[f] = {
            set: function(b, a) {
                if ("" === a)
                    return b.setAttribute(f, "auto"), a
            }
        }
    });
    d.support.hrefNormalized || d.each(["href", "src"], function(b, f) {
        d.propHooks[f] = {
            get: function(b) {
                return b.getAttribute(f, 4)
            }
        }
    });
    if (!d.support.style)
        d.attrHooks.style =
        {
            get: function(b) {
                return b.style.cssText || j
            },
            set: function(b, f) {
                return b.style.cssText = f + ""
            }
        };
    if (!d.support.optSelected)
        d.propHooks.selected = {
            get: function() {
                return null
            }
        };
    d.each("tabIndex,readOnly,maxLength,cellSpacing,cellPadding,rowSpan,colSpan,useMap,frameBorder,contentEditable".split(","), function() {
        d.propFix[this.toLowerCase()] = this
    });
    if (!d.support.enctype)
        d.propFix.enctype = "encoding";
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(b, f) {
                if (d.isArray(f))
                    return b.checked = 0 <=
                    d.inArray(d(b).val(), f)
            }
        };
        if (!d.support.checkOn)
            d.valHooks[this].get = function(b) {
                return null === b.getAttribute("value") ? "on" : b.value
            }
    });
    var cb = /^(?:input|select|textarea)$/i, Rb = /^key/, Sb = /^(?:mouse|contextmenu)|click/, pb = /^(?:focusinfocus|focusoutblur)$/, qb = /^([^.]*)(?:\.(.+)|)$/;
    d.event = {
        global: {},
        add: function(b, f, a, c, e) {
            var g, h, i, k, n, m, p, o, F;
            if (i = d._data(b)) {
                if (a.handler)
                    k = a, a = k.handler, e = k.selector;
                if (!a.guid)
                    a.guid = d.guid++;
                if (!(h = i.events))
                    h = i.events = {};
                if (!(n = i.handle))
                    n = i.handle = function(b) {
                        return typeof d !==
                        ka && (!b || d.event.triggered !== b.type) ? d.event.dispatch.apply(n.elem, arguments) : j
                    }, n.elem = b;
                f = (f || "").match(ia) || [""];
                for (i = f.length; i--;)
                    if (g = qb.exec(f[i]) || [], o = m = g[1], F = (g[2] || "").split(".").sort()
                        , o) {
                    g = d.event.special[o] || {};
                    o = (e ? g.delegateType : g.bindType) || o;
                    g = d.event.special[o] || {};
                    m = d.extend({
                        type: o,
                        origType: m,
                        data: c,
                        handler: a,
                        guid: a.guid,
                        selector: e,
                        needsContext: e && d.expr.match.needsContext.test(e),
                        namespace: F.join(".")
                    }, k);
                    if (!(p = h[o]))
                        if (p = h[o] = [], p.delegateCount = 0, !g.setup ||!1 === g.setup.call(b,
                        c, F, n)
                            )b.addEventListener ? b.addEventListener(o, n, !1) : b.attachEvent && b.attachEvent("on" + o, n);
                    if (g.add && (g.add.call(b, m), !m.handler.guid))
                        m.handler.guid = a.guid;
                    e ? p.splice(p.delegateCount++, 0, m) : p.push(m);
                    d.event.global[o]=!0
                }
                b = null
            }
        },
        remove: function(b, f, a, c, e) {
            var g, h, i, j, k, n, p, m, o, F, L, oa = d.hasData(b) && d._data(b);
            if (oa && (n = oa.events)) {
                f = (f || "").match(ia) || [""];
                for (k = f.length; k--;)
                    if (i = qb.exec(f[k]) || [], o = L = i[1], F = (i[2] || "").split(".").sort()
                        , o) {
                    p = d.event.special[o] || {};
                    o = (c ? p.delegateType : p.bindType) ||
                    o;
                    m = n[o] || [];
                    i = i[2] && RegExp("(^|\\.)" + F.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (j = g = m.length; g--;)
                        if (h = m[g], (e || L === h.origType) && (!a || a.guid === h.guid) && (!i || i.test(h.namespace)) && (!c || c === h.selector || "**" === c && h.selector)
                            )m.splice(g, 1), h.selector && m.delegateCount--, p.remove && p.remove.call(b, h);
                    j&&!m.length && ((!p.teardown ||!1 === p.teardown.call(b, F, oa.handle)) && d.removeEvent(b, o, oa.handle), delete n[o])
                } else 
                    for (o in n)
                        d.event.remove(b, o + f[k], a, c, !0);
                d.isEmptyObject(n) && (delete oa.handle, d._removeData(b,
                "events"))
            }
        },
        trigger: function(b, f, c, e) {
            var g, h, q, k, n, m, o = [c || i], p = sa.call(b, "type") ? b.type: b;
            n = sa.call(b, "namespace") ? b.namespace.split(".") : [];
            q = g = c = c || i;
            if (!(3 === c.nodeType || 8 === c.nodeType)&&!pb.test(p + d.event.triggered)) {
                0 <= p.indexOf(".") && (n = p.split("."), p = n.shift(), n.sort());
                h = 0 > p.indexOf(":") && "on" + p;
                b = b[d.expando] ? b : new d.Event(p, "object" === typeof b && b);
                b.isTrigger = e ? 2 : 3;
                b.namespace = n.join(".");
                b.namespace_re = b.namespace ? RegExp("(^|\\.)" + n.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                b.result = j;
                if (!b.target)
                    b.target =
                    c;
                f = null == f ? [b] : d.makeArray(f, [b]);
                n = d.event.special[p] || {};
                if (e ||!(n.trigger&&!1 === n.trigger.apply(c, f))) {
                    if (!e&&!n.noBubble&&!d.isWindow(c)) {
                        k = n.delegateType || p;
                        if (!pb.test(k + p))
                            q = q.parentNode;
                        for (; q; q = q.parentNode)
                            o.push(q), g = q;
                        if (g === (c.ownerDocument || i))
                            o.push(g.defaultView || g.parentWindow || a)
                        }
                    for (m = 0; (q = o[m++])&&!b.isPropagationStopped();)
                        b.type = 1 < m ? k : n.bindType || p, (g = (d._data(q, "events") || {})[b.type] && d._data(q, "handle")) && g.apply(q, f), (g = h && q[h]) && d.acceptData(q) && g.apply&&!1 === g.apply(q,
                    f) && b.preventDefault();
                    b.type = p;
                    if (!e&&!b.isDefaultPrevented() && (!n._default ||!1 === n._default.apply(o.pop(), f)) && d.acceptData(c) && h && c[p]&&!d.isWindow(c)) {
                        (g = c[h]) && (c[h] = null);
                        d.event.triggered = p;
                        try {
                            c[p]()
                        } catch (F) {}
                        d.event.triggered = j;
                        g && (c[h] = g)
                    }
                    return b.result
                }
            }
        },
        dispatch: function(b) {
            var b = d.event.fix(b), f, a, c, e, g = [], h = ha.call(arguments);
            f = (d._data(this, "events") || {})[b.type] || [];
            var i = d.event.special[b.type] || {};
            h[0] = b;
            b.delegateTarget = this;
            if (!(i.preDispatch&&!1 === i.preDispatch.call(this, b))) {
                g =
                d.event.handlers.call(this, b, f);
                for (f = 0; (c = g[f++])&&!b.isPropagationStopped();) {
                    b.currentTarget = c.elem;
                    for (e = 0; (a = c.handlers[e++])&&!b.isImmediatePropagationStopped();)
                        if (!b.namespace_re || b.namespace_re.test(a.namespace))
                            if (b.handleObj = a, b.data = a.data, a = ((d.event.special[a.origType] || {}).handle || a.handler).apply(c.elem, h), a !== j&&!1 === (b.result = a))b.preventDefault(), b.stopPropagation()
                }
                i.postDispatch && i.postDispatch.call(this, b);
                return b.result
            }
        },
        handlers: function(b, f) {
            var a, c, e, g, h = [], i = f.delegateCount,
            k = b.target;
            if (i && k.nodeType && (!b.button || "click" !== b.type))
                for (; k != this; k = k.parentNode || this)
                    if (1 === k.nodeType && (!0 !== k.disabled || "click" !== b.type)) {
                        e = [];
                        for (g = 0; g < i; g++)
                            c = f[g], a = c.selector + " ", e[a] === j && (e[a] = c.needsContext ? 0 <= d(a, this).index(k) : d.find(a, this, null, [k]).length), e[a] && e.push(c);
                            e.length && h.push({
                                elem: k,
                                handlers: e
                            })
                    }
            i < f.length && h.push({
                elem: this,
                handlers: f.slice(i)
            });
            return h
        },
        fix: function(b) {
            if (b[d.expando])
                return b;
            var f, a, c;
            f = b.type;
            var e = b, g = this.fixHooks[f];
            g || (this.fixHooks[f] =
            g = Sb.test(f) ? this.mouseHooks : Rb.test(f) ? this.keyHooks : {});
            c = g.props ? this.props.concat(g.props) : this.props;
            b = new d.Event(e);
            for (f = c.length; f--;)
                a = c[f], b[a] = e[a];
            if (!b.target)
                b.target = e.srcElement || i;
            if (3 === b.target.nodeType)
                b.target = b.target.parentNode;
            b.metaKey=!!b.metaKey;
            return g.filter ? g.filter(b, e) : b
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(b, f) {
                if (null == b.which)
                    b.which = null != f.charCode ? f.charCode : f.keyCode;
                return b
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, f) {
                var a, d, c = f.button, e = f.fromElement;
                if (null == b.pageX && null != f.clientX)
                    a = b.target.ownerDocument || i, d = a.documentElement, a = a.body, b.pageX = f.clientX + (d && d.scrollLeft || a && a.scrollLeft || 0) - (d && d.clientLeft || a && a.clientLeft || 0), b.pageY = f.clientY + (d && d.scrollTop || a &&
                a.scrollTop || 0) - (d && d.clientTop || a && a.clientTop || 0);
                if (!b.relatedTarget && e)
                    b.relatedTarget = e === b.target ? f.toElement : e;
                if (!b.which && c !== j)
                    b.which = c & 1 ? 1 : c & 2 ? 3 : c & 4 ? 2 : 0;
                return b
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus)
                        try {
                            return this.focus(), !1
                    } catch (b) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === k() && this.blur)
                        return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (d.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                    !1
                },
                _default: function(b) {
                    return d.nodeName(b.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(b) {
                    if (b.result !== j)
                        b.originalEvent.returnValue = b.result
                }
            }
        },
        simulate: function(b, f, a, c) {
            b = d.extend(new d.Event, a, {
                type: b,
                isSimulated: !0,
                originalEvent: {}
            });
            c ? d.event.trigger(b, null, f) : d.event.dispatch.call(f, b);
            b.isDefaultPrevented() && a.preventDefault()
        }
    };
    d.removeEvent = i.removeEventListener ? function(b, f, a) {
        b.removeEventListener && b.removeEventListener(f, a, !1)
    } : function(b, f, a) {
        f = "on" + f;
        b.detachEvent && (typeof b[f] ===
        ka && (b[f] = null), b.detachEvent(f, a))
    };
    d.Event = function(b, f) {
        if (!(this instanceof d.Event))
            return new d.Event(b, f);
        b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented ||!1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? g : h) : this.type = b;
        f && d.extend(this, f);
        this.timeStamp = b && b.timeStamp || d.now();
        this[d.expando]=!0
    };
    d.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var b = this.originalEvent;
            this.isDefaultPrevented = g;
            if (b)
                b.preventDefault ? b.preventDefault() : b.returnValue=!1
        },
        stopPropagation: function() {
            var b = this.originalEvent;
            this.isPropagationStopped = g;
            if (b)
                b.stopPropagation && b.stopPropagation(), b.cancelBubble=!0
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = g;
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(b, f) {
        d.event.special[b] = {
            delegateType: f,
            bindType: f,
            handle: function(b) {
                var a, c = b.relatedTarget, e = b.handleObj;
                if (!c ||
                c !== this&&!d.contains(this, c))
                    b.type = e.origType, a = e.handler.apply(this, arguments), b.type = f;
                return a
            }
        }
    });
    if (!d.support.submitBubbles)
        d.event.special.submit = {
            setup: function() {
                if (d.nodeName(this, "form"))
                    return !1;
                    d.event.add(this, "click._submit keypress._submit", function(b) {
                        b = b.target;
                        if ((b = d.nodeName(b, "input") || d.nodeName(b, "button") ? b.form : j)&&!d._data(b, "submitBubbles"))
                            d.event.add(b, "submit._submit", function(b) {
                                b._submit_bubble=!0
                            }), d._data(b, "submitBubbles", !0)
                        })
                    },
                    postDispatch: function(b) {
                        b._submit_bubble &&
                        (delete b._submit_bubble, this.parentNode&&!b.isTrigger && d.event.simulate("submit", this.parentNode, b, !0))
                    },
                    teardown: function() {
                        if (d.nodeName(this, "form"))
                            return !1;
                            d.event.remove(this, "._submit")
                        }
                    };
    if (!d.support.changeBubbles)
        d.event.special.change = {
            setup: function() {
                if (cb.test(this.nodeName)) {
                    if ("checkbox" === this.type || "radio" === this.type)
                        d.event.add(this, "propertychange._change", function(b) {
                            if ("checked" === b.originalEvent.propertyName)
                                this._just_changed=!0
                            }), d.event.add(this, "click._change", function(b) {
                                if (this._just_changed &&
                                !b.isTrigger)
                                    this._just_changed=!1;
                                    d.event.simulate("change", this, b, !0)
                                });
                                return !1
                }
                d.event.add(this, "beforeactivate._change", function(b) {
                    b = b.target;
                    cb.test(b.nodeName)&&!d._data(b, "changeBubbles") && (d.event.add(b, "change._change", function(b) {
                        this.parentNode&&!b.isSimulated&&!b.isTrigger && d.event.simulate("change", this.parentNode, b, !0)
                    }), d._data(b, "changeBubbles", !0))
                })
            },
            handle: function(b) {
                var f = b.target;
                if (this !== f || b.isSimulated || b.isTrigger || "radio" !== f.type && "checkbox" !== f.type)
                    return b.handleObj.handler.apply(this,
                    arguments)
                },
                teardown: function() {
                    d.event.remove(this, "._change");
                    return !cb.test(this.nodeName)
                }
            };
    d.support.focusinBubbles || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(b, f) {
        var a = 0, c = function(b) {
            d.event.simulate(f, b.target, d.event.fix(b), !0)
        };
        d.event.special[f] = {
            setup: function() {
                0 === a++&&i.addEventListener(b, c, !0)
            },
            teardown: function() {
                0===--a && i.removeEventListener(b, c, !0)
            }
        }
    });
    d.fn.extend({
        on: function(b, f, a, c, e) {
            var g, i;
            if ("object" === typeof b) {
                "string" !== typeof f && (a = a || f, f = j);
                for (g in b)
                    this.on(g,
                    f, a, b[g], e);
                return this
            }
            null == a && null == c ? (c = f, a = f = j) : null == c && ("string" === typeof f ? (c = a, a = j) : (c = a, a = f, f = j));
            if (!1 === c)
                c = h;
            else if (!c)
                return this;
            if (1 === e)
                i = c, c = function(b) {
                d().off(b);
                return i.apply(this, arguments)
            }, c.guid = i.guid || (i.guid = d.guid++);
            return this.each(function() {
                d.event.add(this, b, c, a, f)
            })
        },
        one: function(b, f, a, d) {
            return this.on(b, f, a, d, 1)
        },
        off: function(b, f, a) {
            var c;
            if (b && b.preventDefault && b.handleObj)
                return c = b.handleObj, d(b.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType,
            c.selector, c.handler), this;
            if ("object" === typeof b) {
                for (c in b)
                    this.off(c, f, b[c]);
                return this
            }
            if (!1 === f || "function" === typeof f)
                a = f, f = j;
            !1 === a && (a = h);
            return this.each(function() {
                d.event.remove(this, b, a, f)
            })
        },
        trigger: function(b, f) {
            return this.each(function() {
                d.event.trigger(b, f, this)
            })
        },
        triggerHandler: function(b, f) {
            var a = this[0];
            if (a)
                return d.event.trigger(b, f, a, !0)
        }
    });
    var Jb = /^.[^:#\[\.,]*$/, Tb = /^(?:parents|prev(?:Until|All))/, rb = d.expr.match.needsContext, Ub = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    d.fn.extend({
        find: function(b) {
            var f, a = [], c = this, e = c.length;
            if ("string" !== typeof b)
                return this.pushStack(d(b).filter(function() {
                    for (f = 0; f < e; f++)
                        if (d.contains(c[f], this))
                            return !0
                        }));
            for (f = 0; f < e; f++)
                d.find(b, c[f], a);
            a = this.pushStack(1 < e ? d.unique(a) : a);
            a.selector = this.selector ? this.selector + " " + b : b;
            return a
        },
        has: function(b) {
            var a, c = d(b, this), e = c.length;
            return this.filter(function() {
                for (a = 0; a < e; a++)
                    if (d.contains(this, c[a]))
                        return !0
            })
        },
        not: function(b) {
            return this.pushStack(n(this, b || [], !0))
        },
        filter: function(b) {
            return this.pushStack(n(this,
            b || [], !1))
        },
        is: function(b) {
            return !!n(this, "string" === typeof b && rb.test(b) ? d(b) : b || [], !1).length
        },
        closest: function(b, a) {
            for (var c, e = 0, g = this.length, h = [], i = rb.test(b) || "string" !== typeof b ? d(b, a || this.context) : 0; e < g; e++)
                for (c = this[e]; c && c !== a; c = c.parentNode)
                    if (11 > c.nodeType && (i?-1 < i.index(c) : 1 === c.nodeType && d.find.matchesSelector(c, b))
                        ) {
                h.push(c);
                break
            }
            return this.pushStack(1 < h.length ? d.unique(h) : h)
        },
        index: function(b) {
            return !b ? this[0] && this[0].parentNode ? this.first().prevAll().length : -1 : "string" === typeof b ?
            d.inArray(this[0], d(b)) : d.inArray(b.jquery ? b[0] : b, this)
        },
        add: function(b, a) {
            var c = "string" === typeof b ? d(b, a): d.makeArray(b && b.nodeType ? [b] : b), c = d.merge(this.get(), c);
            return this.pushStack(d.unique(c))
        },
        addBack: function(b) {
            return this.add(null == b ? this.prevObject : this.prevObject.filter(b))
        }
    });
    d.each({
        parent: function(b) {
            return (b = b.parentNode) && 11 !== b.nodeType ? b : null
        },
        parents: function(b) {
            return d.dir(b, "parentNode")
        },
        parentsUntil: function(b, a, c) {
            return d.dir(b, "parentNode", c)
        },
        next: function(b) {
            return F(b,
            "nextSibling")
        },
        prev: function(b) {
            return F(b, "previousSibling")
        },
        nextAll: function(b) {
            return d.dir(b, "nextSibling")
        },
        prevAll: function(b) {
            return d.dir(b, "previousSibling")
        },
        nextUntil: function(b, a, c) {
            return d.dir(b, "nextSibling", c)
        },
        prevUntil: function(b, a, c) {
            return d.dir(b, "previousSibling", c)
        },
        siblings: function(b) {
            return d.sibling((b.parentNode || {}).firstChild, b)
        },
        children: function(b) {
            return d.sibling(b.firstChild)
        },
        contents: function(b) {
            return d.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document :
            d.merge([], b.childNodes)
        }
    }, function(b, a) {
        d.fn[b] = function(c, e) {
            var g = d.map(this, a, c);
            "Until" !== b.slice(-5) && (e = c);
            e && "string" === typeof e && (g = d.filter(e, g));
            1 < this.length && (Ub[b] || (g = d.unique(g)), Tb.test(b) && (g = g.reverse()));
            return this.pushStack(g)
        }
    });
    d.extend({
        filter: function(b, a, c) {
            var e = a[0];
            c && (b = ":not(" + b + ")");
            return 1 === a.length && 1 === e.nodeType ? d.find.matchesSelector(e, b) ? [e] : [] : d.find.matches(b, d.grep(a, function(b) {
                return 1 === b.nodeType
            }))
        },
        dir: function(b, a, c) {
            for (var e = [], b = b[a]; b && 9 !== b.nodeType &&
            (c === j || 1 !== b.nodeType ||!d(b).is(c));)
                1 === b.nodeType && e.push(b), b = b[a];
            return e
        },
        sibling: function(b, a) {
            for (var d = []; b; b = b.nextSibling)
                1 === b.nodeType && b !== a && d.push(b);
            return d
        }
    });
    var kb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Vb = / jQuery\d+="(?:null|\d+)"/g, sb = RegExp("<(?:" + kb + ")[\\s/>]", "i"), db = /^\s+/, tb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ub =
    /<([\w:]+)/, vb = /<tbody/i, Wb = /<|&#?\w+;/, Xb = /<(?:script|style|link)/i, Za = /^(?:checkbox|radio)$/i, Yb = /checked\s*(?:[^=]|=\s*.checked.)/i, wb = /^$|\/(?:java|ecma)script/i, Kb = /^true\/(.*)/, Zb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: d.support.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
    }, eb = L(i).appendChild(i.createElement("div"));
    ra.optgroup = ra.option;
    ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead;
    ra.th = ra.td;
    d.fn.extend({
        text: function(b) {
            return d.access(this, function(b) {
                return b === j ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(b))
            }, null, b, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(b) {
                (1 ===
                this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && S(this, b).appendChild(b)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(b) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var a = S(this, b);
                    a.insertBefore(b, a.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(b) {
                this.parentNode && this.parentNode.insertBefore(b, this.nextSibling)
            })
        },
        remove: function(b, a) {
            for (var c, e = b ? d.filter(b, this) : this, g = 0; null != (c = e[g]); g++)
                !a && 1 === c.nodeType && d.cleanData(v(c)), c.parentNode && (a && d.contains(c.ownerDocument, c) && M(v(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var b, a = 0; null != (b = this[a]); a++) {
                for (1 === b.nodeType && d.cleanData(v(b, !1)); b.firstChild;)
                    b.removeChild(b.firstChild);
                if (b.options && d.nodeName(b, "select"))
                    b.options.length = 0
            }
            return this
        },
        clone: function(b, a) {
            b = null == b?!1 : b;
            a = null == a ? b : a;
            return this.map(function() {
                return d.clone(this,
                b, a)
            })
        },
        html: function(b) {
            return d.access(this, function(b) {
                var a = this[0] || {}, c = 0, e = this.length;
                if (b === j)
                    return 1 === a.nodeType ? a.innerHTML.replace(Vb, "") : j;
                if ("string" === typeof b&&!Xb.test(b) && (d.support.htmlSerialize ||!sb.test(b)) && (d.support.leadingWhitespace ||!db.test(b))&&!ra[(ub.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(tb, "<$1></$2>");
                    try {
                        for (; c < e; c++)
                            if (a = this[c] || {}, 1 === a.nodeType)
                                d.cleanData(v(a, !1)), a.innerHTML = b;
                        a = 0
                    } catch (g) {}
                }
                a && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function() {
            var b =
            d.map(this, function(b) {
                return [b.nextSibling, b.parentNode]
            }), a = 0;
            this.domManip(arguments, function(c) {
                var e = b[a++], g = b[a++];
                if (g) {
                    if (e && e.parentNode !== g)
                        e = this.nextSibling;
                    d(this).remove();
                    g.insertBefore(c, e)
                }
            }, !0);
            return a ? this : this.remove()
        },
        detach: function(b) {
            return this.remove(b, !0)
        },
        domManip: function(b, a, c) {
            var b = Z.apply([], b), e, g, h, i, j = 0, k = this.length, n = this, m = k-1, p = b[0], F = d.isFunction(p);
            if (F ||!(1 >= k || "string" !== typeof p || d.support.checkClone ||!Yb.test(p)))
                return this.each(function(d) {
                    var e =
                    n.eq(d);
                    F && (b[0] = p.call(this, d, e.html()));
                    e.domManip(b, a, c)
                });
            if (k && (i = d.buildFragment(b, this[0].ownerDocument, !1, !c && this), e = i.firstChild, 1 === i.childNodes.length && (i = e), e)
                ) {
                h = d.map(v(i, "script"), aa);
                for (g = h.length; j < k; j++)
                    e = i, j !== m && (e = d.clone(e, !0, !0), g && d.merge(h, v(e, "script"))), a.call(this[j], e, j);
                if (g) {
                    i = h[h.length-1].ownerDocument;
                    d.map(h, o);
                    for (j = 0; j < g; j++)
                        if (e = h[j], wb.test(e.type || "")&&!d._data(e, "globalEval") && d.contains(i, e)
                            )e.src ? d._evalUrl(e.src) : d.globalEval((e.text || e.textContent || e.innerHTML ||
                    "").replace(Zb, ""))
                }
                i = e = null
            }
            return this
        }
    });
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(b, a) {
        d.fn[b] = function(b) {
            for (var c = 0, e = [], g = d(b), h = g.length-1; c <= h; c++)
                b = c === h ? this : this.clone(!0), d(g[c])[a](b), H.apply(e, b.get());
            return this.pushStack(e)
        }
    });
    d.extend({
        clone: function(b, a, c) {
            var e, g, h, i, j, k = d.contains(b.ownerDocument, b);
            d.support.html5Clone || d.isXMLDoc(b) ||!sb.test("<" + b.nodeName + ">") ? h = b.cloneNode(!0) : (eb.innerHTML =
            b.outerHTML, eb.removeChild(h = eb.firstChild));
            if ((!d.support.noCloneEvent ||!d.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType)&&!d.isXMLDoc(b)) {
                e = v(h);
                j = v(b);
                for (i = 0; null != (g = j[i]); ++i)
                    if (e[i]) {
                        var n = e[i], m = void 0, p = void 0, F = void 0;
                        if (1 === n.nodeType) {
                            m = n.nodeName.toLowerCase();
                            if (!d.support.noCloneEvent && n[d.expando]) {
                                F = d._data(n);
                                for (p in F.events)
                                    d.removeEvent(n, p, F.handle);
                                    n.removeAttribute(d.expando)
                                }
                                if ("script" === m && n.text !== g.text)
                                    aa(n).text = g.text, o(n);
                                else if ("object" === m) {
                                    if (n.parentNode)
                                        n.outerHTML =
                                        g.outerHTML;
                                        if (d.support.html5Clone && g.innerHTML&&!d.trim(n.innerHTML))
                                            n.innerHTML = g.innerHTML
                                } else if ("input" === m && Za.test(g.type)) {
                                    if (n.defaultChecked = n.checked = g.checked, n.value !== g.value)
                                        n.value = g.value
                                } else if ("option" === m)
                                    n.defaultSelected = n.selected = g.defaultSelected;
                                else if ("input" === m || "textarea" === m)
                                    n.defaultValue = g.defaultValue
                        }
                    }
                }
            if (a)
                if (c) {
                    j = j || v(b);
                    e = e || v(h);
                    for (i = 0; null != (g = j[i]); i++)
                        N(g, e[i])
                } else 
                    N(b, h);
            e = v(h, "script");
            0 < e.length && M(e, !k && v(b, "script"));
            return h
        },
        buildFragment: function(b,
        a, c, e) {
            for (var g, h, i, j, k, n, m = b.length, p = L(a), o = [], F = 0; F < m; F++)
                if ((h = b[F]) || 0 === h)
                    if ("object" === d.type(h))
                        d.merge(o, h.nodeType ? [h] : h);
                    else if (Wb.test(h)) {
                        i = i || p.appendChild(a.createElement("div"));
                        j = (ub.exec(h) || ["", ""])[1].toLowerCase();
                        n = ra[j] || ra._default;
                        i.innerHTML = n[1] + h.replace(tb, "<$1></$2>") + n[2];
                        for (g = n[0]; g--;)
                            i = i.lastChild;
                            !d.support.leadingWhitespace && db.test(h) && o.push(a.createTextNode(db.exec(h)[0]));
                            if (!d.support.tbody)
                                for (g = (h = "table" === j&&!vb.test(h) ? i.firstChild : "<table>" === n[1] &&
                                !vb.test(h) ? i : 0) && h.childNodes.length; g--;)
                                    d.nodeName(k = h.childNodes[g], "tbody")&&!k.childNodes.length && h.removeChild(k);
                                    d.merge(o, i.childNodes);
                                    for (i.textContent = ""; i.firstChild;)
                                        i.removeChild(i.firstChild);
                                        i = p.lastChild
                    } else 
                        o.push(a.createTextNode(h));
            i && p.removeChild(i);
            d.support.appendChecked || d.grep(v(o, "input"), w);
            for (F = 0; h = o[F++];)
                if (!(e&&-1 !== d.inArray(h, e)) && (b = d.contains(h.ownerDocument, h), i = v(p.appendChild(h), "script")
                    , b && M(i), c))for (g = 0; h = i[g++];)
                wb.test(h.type || "") && c.push(h);
            return p
        },
        cleanData: function(b, a) {
            for (var c, e, g, h, i = 0, j = d.expando, k = d.cache, n = d.support.deleteExpando, m = d.event.special; null != (c = b[i]); i++)
                if (a || d.acceptData(c))
                    if (h = (g = c[j]) && k[g]) {
                        if (h.events)
                            for (e in h.events)
                                m[e] ? d.event.remove(c, e) : d.removeEvent(c, e, h.handle);
                                k[g] && (delete k[g], n ? delete c[j] : typeof c.removeAttribute !== ka ? c.removeAttribute(j) : c[j] = null, X.push(g))
                    }
        },
        _evalUrl: function(b) {
            return d.ajax({
                url: b,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    });
    d.fn.extend({
        wrapAll: function(b) {
            if (d.isFunction(b))
                return this.each(function(a) {
                    d(this).wrapAll(b.call(this,
                    a))
                });
            if (this[0]) {
                var a = d(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && a.insertBefore(this[0]);
                a.map(function() {
                    for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;)
                        b = b.firstChild;
                    return b
                }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return d.isFunction(b) ? this.each(function(a) {
                d(this).wrapInner(b.call(this, a))
            }) : this.each(function() {
                var a = d(this), c = a.contents();
                c.length ? c.wrapAll(b) : a.append(b)
            })
        },
        wrap: function(b) {
            var a = d.isFunction(b);
            return this.each(function(c) {
                d(this).wrapAll(a ?
                b.call(this, c) : b)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var La, Aa, Ba, fb = /alpha\([^)]*\)/i, $b = /opacity\s*=\s*([^)]*)/, ac = /^(top|right|bottom|left)$/, bc = /^(none|table(?!-c[ea]).+)/, xb = /^margin/, Lb = RegExp("^(" + wa + ")(.*)$", "i"), Sa = RegExp("^(" + wa + ")(?!px)[a-z%]+$", "i"), cc = RegExp("^([+-])=(" + wa + ")", "i"), mb = {
        BODY: "block"
    }, dc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, yb = {
        letterSpacing: 0,
        fontWeight: 400
    },
    za = ["Top", "Right", "Bottom", "Left"], lb = ["Webkit", "O", "Moz", "ms"];
    d.fn.extend({
        css: function(b, a) {
            return d.access(this, function(b, a, c) {
                var f, e = {}, g = 0;
                if (d.isArray(a)) {
                    f = Aa(b);
                    for (c = a.length; g < c; g++)
                        e[a[g]] = d.css(b, a[g], !1, f);
                    return e
                }
                return c !== j ? d.style(b, a, c) : d.css(b, a)
            }, b, a, 1 < arguments.length)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(b) {
            return "boolean" === typeof b ? b ? this.show() : this.hide() : this.each(function() {
                y(this) ? d(this).show() : d(this).hide()
            })
        }
    });
    d.extend({
        cssHooks: {
            opacity: {
                get: function(b,
                a) {
                    if (a) {
                        var c = Ba(b, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": d.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(b, a, c, e) {
            if (b&&!(3 === b.nodeType || 8 === b.nodeType ||!b.style)) {
                var g, h, i, k = d.camelCase(a), n = b.style, a = d.cssProps[k] || (d.cssProps[k] = A(n, k));
                i = d.cssHooks[a] || d.cssHooks[k];
                if (c !== j) {
                    h = typeof c;
                    if ("string" === h && (g = cc.exec(c)))
                        c = (g[1] + 1) * g[2] + parseFloat(d.css(b,
                        a)), h = "number";
                    if (!(null == c || "number" === h && isNaN(c)))
                        if ("number" === h&&!d.cssNumber[k] && (c += "px"), !d.support.clearCloneStyle && "" === c && 0 === a.indexOf("background") && (n[a] = "inherit")
                            , !i ||!("set"in i) || (c = i.set(b, c, e)) !== j)try {
                        n[a] = c
                    } catch (m) {}
                } else 
                    return i && "get"in i && (g = i.get(b, !1, e)) !== j ? g : n[a]
            }
        },
        css: function(b, a, c, e) {
            var g, h;
            h = d.camelCase(a);
            a = d.cssProps[h] || (d.cssProps[h] = A(b.style, h));
            (h = d.cssHooks[a] || d.cssHooks[h]) && "get"in h && (g = h.get(b, !0, c));
            g === j && (g = Ba(b, a, e));
            "normal" === g && a in yb && (g = yb[a]);
            return "" === c || c ? (b = parseFloat(g), !0 === c || d.isNumeric(b) ? b || 0 : g) : g
        }
    });
    a.getComputedStyle ? (Aa = function(b) {
        return a.getComputedStyle(b, null)
    }, Ba = function(b, a, c) {
        var e, g = (c = c || Aa(b)) ? c.getPropertyValue(a) || c[a] : j, h = b.style;
        if (c && ("" === g&&!d.contains(b.ownerDocument, b) && (g = d.style(b, a)), Sa.test(g) && xb.test(a))
            )b = h.width, a = h.minWidth, e = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = b, h.minWidth = a, h.maxWidth = e;
        return g
    }) : i.documentElement.currentStyle && (Aa = function(b) {
        return b.currentStyle
    },
    Ba = function(b, a, c) {
        var d, e, g = (c = c || Aa(b)) ? c[a]: j, h = b.style;
        null == g && h && h[a] && (g = h[a]);
        if (Sa.test(g)&&!ac.test(a)) {
            c = h.left;
            if (e = (d = b.runtimeStyle) && d.left)
                d.left = b.currentStyle.left;
            h.left = "fontSize" === a ? "1em" : g;
            g = h.pixelLeft + "px";
            h.left = c;
            if (e)
                d.left = e
        }
        return "" === g ? "auto" : g
    });
    d.each(["height", "width"], function(b, a) {
        d.cssHooks[a] = {
            get: function(b, c, e) {
                if (c)
                    return 0 === b.offsetWidth && bc.test(d.css(b, "display")) ? d.swap(b, dc, function() {
                        return z(b, a, e)
                    }) : z(b, a, e)
            },
            set: function(b, c, e) {
                var g = e && Aa(b);
                return T(b,
                c, e ? D(b, a, e, d.support.boxSizing && "border-box" === d.css(b, "boxSizing", !1, g), g) : 0)
            }
        }
    });
    if (!d.support.opacity)
        d.cssHooks.opacity = {
            get: function(b, a) {
                return $b.test((a && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : a ? "1" : ""
            },
            set: function(b, a) {
                var c = b.style, e = b.currentStyle, g = d.isNumeric(a) ? "alpha(opacity=" + 100 * a + ")": "", h = e && e.filter || c.filter || "";
                c.zoom = 1;
                if ((1 <= a || "" === a) && "" === d.trim(h.replace(fb, "")) && c.removeAttribute)
                    if (c.removeAttribute("filter"), "" === a ||
                    e&&!e.filter)
                        return;
                        c.filter = fb.test(h) ? h.replace(fb, g) : h + " " + g
                    }
                };
    d(function() {
        if (!d.support.reliableMarginRight)
            d.cssHooks.marginRight = {
                get: function(b, a) {
                    if (a)
                        return d.swap(b, {
                            display: "inline-block"
                        }, Ba, [b, "marginRight"])
                    }
                };
        !d.support.pixelPosition && d.fn.position && d.each(["top", "left"], function(b, a) {
            d.cssHooks[a] = {
                get: function(b, c) {
                    if (c)
                        return c = Ba(b, a), Sa.test(c) ? d(b).position()[a] + "px" : c
                }
            }
        })
    });
    if (d.expr && d.expr.filters)
        d.expr.filters.hidden = function(b) {
            return 0 >= b.offsetWidth && 0 >= b.offsetHeight ||
            !d.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || d.css(b, "display"))
        }, d.expr.filters.visible = function(b) {
        return !d.expr.filters.hidden(b)
    };
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(b, a) {
        d.cssHooks[b + a] = {
            expand: function(c) {
                for (var d = 0, e = {}, c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[b + za[d] + a] = c[d] || c[d-2] || c[0];
                return e
            }
        };
        if (!xb.test(b))
            d.cssHooks[b + a].set = T
    });
    var ec = /%20/g, Mb = /\[\]$/, zb = /\r?\n/g, fc = /^(?:submit|button|image|reset|file)$/i, gc = /^(?:input|select|textarea|keygen)/i;
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var b = d.prop(this, "elements");
                return b ? d.makeArray(b) : this
            }).filter(function() {
                var b = this.type;
                return this.name&&!d(this).is(":disabled") && gc.test(this.nodeName)&&!fc.test(b) && (this.checked ||!Za.test(b))
            }).map(function(b, a) {
                var c = d(this).val();
                return null == c ? null : d.isArray(c) ? d.map(c, function(b) {
                    return {
                        name: a.name,
                        value: b.replace(zb, "\r\n")
                    }
                }) : {
                    name: a.name,
                    value: c.replace(zb,
                    "\r\n")
                }
            }).get()
        }
    });
    d.param = function(b, a) {
        var c, e = [], g = function(b, a) {
            a = d.isFunction(a) ? a() : null == a ? "" : a;
            e[e.length] = encodeURIComponent(b) + "=" + encodeURIComponent(a)
        };
        a === j && (a = d.ajaxSettings && d.ajaxSettings.traditional);
        if (d.isArray(b) || b.jquery&&!d.isPlainObject(b))
            d.each(b, function() {
                g(this.name, this.value)
            });
        else 
            for (c in b)
                ba(c, b[c], a, g);
        return e.join("&").replace(ec, "+")
    };
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(b, a) {
        d.fn[a] = function(b, c) {
            return 0 < arguments.length ? this.on(a, null, b, c) : this.trigger(a)
        }
    });
    d.fn.extend({
        hover: function(b, a) {
            return this.mouseenter(b).mouseleave(a || b)
        },
        bind: function(b, a, c) {
            return this.on(b, null, a, c)
        },
        unbind: function(b, a) {
            return this.off(b, null, a)
        },
        delegate: function(b, a, c, d) {
            return this.on(a, b, c, d)
        },
        undelegate: function(b, a, c) {
            return 1 === arguments.length ? this.off(b, "**") : this.off(a, b || "**", c)
        }
    });
    var Ha, ya, gb = d.now(), hb = /\?/, hc = /#.*$/, Ab = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
    jc = /^(?:GET|HEAD)$/, kc = /^\/\//, Bb = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Cb = d.fn.load, Db = {}, $a = {}, Eb = "*/".concat("*");
    try {
        ya = pa.href
    } catch (oc) {
        ya = i.createElement("a"), ya.href = "", ya = ya.href
    }
    Ha = Bb.exec(ya.toLowerCase()) || [];
    d.fn.load = function(b, a, c) {
        if ("string" !== typeof b && Cb)
            return Cb.apply(this, arguments);
        var e, g, h, i = this, k = b.indexOf(" ");
        0 <= k && (e = b.slice(k, b.length), b = b.slice(0, k));
        d.isFunction(a) ? (c = a, a = j) : a && "object" === typeof a && (h = "POST");
        0 < i.length && d.ajax({
            url: b,
            type: h,
            dataType: "html",
            data: a
        }).done(function(b) {
            g = arguments;
            i.html(e ? d("<div>").append(d.parseHTML(b)).find(e) : b)
        }).complete(c && function(b, a) {
            i.each(c, g || [b.responseText, a, b])
        });
        return this
    };
    d.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function(b, a) {
        d.fn[a] = function(b) {
            return this.on(a, b)
        }
    });
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ya,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ha[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Eb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(b, a) {
            return a ? G(G(b, d.ajaxSettings), a) : G(d.ajaxSettings, b)
        },
        ajaxPrefilter: Y(Db),
        ajaxTransport: Y($a),
        ajax: function(b,
        a) {
            function c(b, a, f, e) {
                var g, l, t, o;
                o = a;
                if (2 !== r) {
                    r = 2;
                    k && clearTimeout(k);
                    m = j;
                    i = e || "";
                    C.readyState = 0 < b ? 4 : 0;
                    e = 200 <= b && 300 > b || 304 === b;
                    if (f) {
                        t = p;
                        for (var E = C, S, w, y, v, A = t.contents, G = t.dataTypes; "*" === G[0];)
                            G.shift(), w === j && (w = t.mimeType || E.getResponseHeader("Content-Type"));
                        if (w)
                            for (v in A)
                                if (A[v] && A[v].test(w)) {
                                    G.unshift(v);
                                    break
                                }
                        if (G[0]in f)
                            y = G[0];
                        else {
                            for (v in f) {
                                if (!G[0] || t.converters[v + " " + G[0]]) {
                                    y = v;
                                    break
                                }
                                S || (S = v)
                            }
                            y = y || S
                        }
                        y ? (y !== G[0] && G.unshift(y), t = f[y]) : t = void 0
                    }
                    a:
                    {
                        f = p;
                        S = t;
                        w = C;
                        y = e;
                        var ta, z, B, E = {},
                        A = f.dataTypes.slice();
                        if (A[1])
                            for (z in f.converters)
                                E[z.toLowerCase()] = f.converters[z];
                        for (v = A.shift(); v;)
                            if (f.responseFields[v] && (w[f.responseFields[v]] = S), !B && y && f.dataFilter && (S = f.dataFilter(S, f.dataType)
                                ), B = v, v = A.shift())if ("*" === v)
                            v = B;
                        else if ("*" !== B && B !== v) {
                            z = E[B + " " + v] || E["* " + v];
                            if (!z)
                                for (ta in E)
                                    if (t = ta.split(" "), t[1] === v && (z = E[B + " " + t[0]] || E["* " + t[0]])
                                        ) {
                                            !0 === z ? z = E[ta] : !0 !== E[ta] && (v = t[0], A.unshift(t[1]));
                                            break
                                        }
                                        if (!0 !== z)
                                            if (z && f["throws"])
                                                S = z(S);
                                            else 
                                                try {
                                                    S = z(S)
                                                } catch (aa) {
                                                    t = {
                                                        state: "parsererror",
                                                        error: z ? aa: "No conversion from " + B + " to " + v
                                                    };
                                                    break a
                                                }
                        }
                        t = {
                            state: "success",
                            data: S
                        }
                    }
                    if (e)
                        p.ifModified && ((o = C.getResponseHeader("Last-Modified")) && (d.lastModified[h] = o), (o = C.getResponseHeader("etag")) && (d.etag[h] = o)), 204 === b || "HEAD" === p.type ? o = "nocontent" : 304 === b ? o = "notmodified" : (o = t.state, g = t.data, l = t.error, e=!l);
                    else if (l = o, b ||!o)
                        o = "error", 0 > b && (b = 0);
                    C.status = b;
                    C.statusText = (a || o) + "";
                    e ? L.resolveWith(F, [g, o, C]) : L.rejectWith(F, [C, o, l]);
                    C.statusCode(D);
                    D = j;
                    n && oa.trigger(e ? "ajaxSuccess" : "ajaxError", [C,
                    p, e ? g: l]);
                    s.fireWith(F, [C, o]);
                    n && (oa.trigger("ajaxComplete", [C, p]), --d.active || d.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof b && (a = b, b = j);
            var a = a || {}, e, g, h, i, k, n, m, o, p = d.ajaxSetup({}, a), F = p.context || p, oa = p.context && (F.nodeType || F.jquery) ? d(F): d.event, L = d.Deferred(), s = d.Callbacks("once memory"), D = p.statusCode || {}, S = {}, w = {}, r = 0, y = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(b) {
                    var a;
                    if (2 === r) {
                        if (!o)
                            for (o = {}; a = ic.exec(i);)
                                o[a[1].toLowerCase()] = a[2];
                        a = o[b.toLowerCase()]
                    }
                    return null == a ? null :
                    a
                },
                getAllResponseHeaders: function() {
                    return 2 === r ? i : null
                },
                setRequestHeader: function(b, a) {
                    var c = b.toLowerCase();
                    r || (b = w[c] = w[c] || b, S[b] = a);
                    return this
                },
                overrideMimeType: function(b) {
                    if (!r)
                        p.mimeType = b;
                    return this
                },
                statusCode: function(b) {
                    var a;
                    if (b)
                        if (2 > r)
                            for (a in b)
                                D[a] = [D[a], b[a]];
                        else 
                            C.always(b[C.status]);
                    return this
                },
                abort: function(b) {
                    b = b || y;
                    m && m.abort(b);
                    c(0, b);
                    return this
                }
            };
            L.promise(C).complete = s.add;
            C.success = C.done;
            C.error = C.fail;
            p.url = ((b || p.url || ya) + "").replace(hc, "").replace(kc, Ha[1] + "//");
            p.type = a.method || a.type || p.method || p.type;
            p.dataTypes = d.trim(p.dataType || "*").toLowerCase().match(ia) || [""];
            if (null == p.crossDomain)
                e = Bb.exec(p.url.toLowerCase()), p.crossDomain=!(!e ||!(e[1] !== Ha[1] || e[2] !== Ha[2] || (e[3] || ("http:" === e[1] ? "80" : "443")) !== (Ha[3] || ("http:" === Ha[1] ? "80" : "443"))));
            if (p.data && p.processData && "string" !== typeof p.data)
                p.data = d.param(p.data, p.traditional);
            U(Db, p, a, C);
            if (2 === r)
                return C;
            (n = p.global) && 0 === d.active++&&d.event.trigger("ajaxStart");
            p.type = p.type.toUpperCase();
            p.hasContent =
            !jc.test(p.type);
            h = p.url;
            if (!p.hasContent && (p.data && (h = p.url += (hb.test(h) ? "&" : "?") + p.data, delete p.data), !1 === p.cache))
                p.url = Ab.test(h) ? h.replace(Ab, "$1_=" + gb++) : h + (hb.test(h) ? "&" : "?") + "_=" + gb++;
            p.ifModified && (d.lastModified[h] && C.setRequestHeader("If-Modified-Since", d.lastModified[h]), d.etag[h] && C.setRequestHeader("If-None-Match", d.etag[h]));
            (p.data && p.hasContent&&!1 !== p.contentType || a.contentType) && C.setRequestHeader("Content-Type", p.contentType);
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ?
            p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Eb + "; q=0.01" : "") : p.accepts["*"]);
            for (g in p.headers)
                C.setRequestHeader(g, p.headers[g]);
            if (p.beforeSend && (!1 === p.beforeSend.call(F, C, p) || 2 === r))
                return C.abort();
            y = "abort";
            for (g in{
                success: 1,
                error: 1,
                complete: 1
            })
                C[g](p[g]);
            if (m = U($a, p, a, C)) {
                C.readyState = 1;
                n && oa.trigger("ajaxSend", [C, p]);
                p.async && 0 < p.timeout && (k = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    r = 1, m.send(S, c)
                } catch (v) {
                    if (2 > r)
                        c(-1, v);
                    else 
                        throw v;
                }
            } else 
                c(-1, "No Transport");
            return C
        },
        getJSON: function(b, a, c) {
            return d.get(b, a, c, "json")
        },
        getScript: function(b, a) {
            return d.get(b, j, a, "script")
        }
    });
    d.each(["get", "post"], function(b, a) {
        d[a] = function(b, c, e, g) {
            d.isFunction(c) && (g = g || e, e = c, c = j);
            return d.ajax({
                url: b,
                type: a,
                dataType: g,
                data: c,
                success: e
            })
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(b) {
                d.globalEval(b);
                return b
            }
        }
    });
    d.ajaxPrefilter("script", function(b) {
        if (b.cache === j)
            b.cache=!1;
        if (b.crossDomain)
            b.type = "GET", b.global=!1
    });
    d.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var a, c = i.head || d("head")[0] || i.documentElement;
            return {
                send: function(d, e) {
                    a = i.createElement("script");
                    a.async=!0;
                    if (b.scriptCharset)
                        a.charset = b.scriptCharset;
                    a.src = b.url;
                    a.onload = a.onreadystatechange = function(b, c) {
                        if (c ||!a.readyState || /loaded|complete/.test(a.readyState))
                            a.onload = a.onreadystatechange = null, a.parentNode && a.parentNode.removeChild(a),
                        a = null, c || e(200, "success")
                    };
                    c.insertBefore(a, c.firstChild)
                },
                abort: function() {
                    if (a)
                        a.onload(j, !0)
                }
            }
        }
    });
    var Fb = [], ib = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var b = Fb.pop() || d.expando + "_" + gb++;
            this[b]=!0;
            return b
        }
    });
    d.ajaxPrefilter("json jsonp", function(b, c, e) {
        var g, h, i, k=!1 !== b.jsonp && (ib.test(b.url) ? "url" : "string" === typeof b.data&&!(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ib.test(b.data) && "data");
        if (k || "jsonp" === b.dataTypes[0])
            return g = b.jsonpCallback =
            d.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, k ? b[k] = b[k].replace(ib, "$1" + g) : !1 !== b.jsonp && (b.url += (hb.test(b.url) ? "&" : "?") + b.jsonp + "=" + g), b.converters["script json"] = function() {
            i || d.error(g + " was not called");
            return i[0]
        }, b.dataTypes[0] = "json", h = a[g], a[g] = function() {
            i = arguments
        }, e.always(function() {
            a[g] = h;
            if (b[g])
                b.jsonpCallback = c.jsonpCallback, Fb.push(g);
            i && d.isFunction(h) && h(i[0]);
            i = h = j
        }), "script"
    });
    var Ka, Qa, lc = 0, jb = a.ActiveXObject && function() {
        for (var b in Ka)
            Ka[b](j, !0)
    };
    d.ajaxSettings.xhr =
    a.ActiveXObject ? function() {
        var b;
        if (!(b=!this.isLocal && ca()))
            a: {
            try {
                b = new a.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (c) {}
            b = void 0
        }
        return b
    } : ca;
    Qa = d.ajaxSettings.xhr();
    d.support.cors=!!Qa && "withCredentials"in Qa;
    (Qa = d.support.ajax=!!Qa) && d.ajaxTransport(function(b) {
        if (!b.crossDomain || d.support.cors) {
            var c;
            return {
                send: function(e, g) {
                    var h, i, k = b.xhr();
                    b.username ? k.open(b.type, b.url, b.async, b.username, b.password) : k.open(b.type, b.url, b.async);
                    if (b.xhrFields)
                        for (i in b.xhrFields)
                            k[i] = b.xhrFields[i];
                    b.mimeType && k.overrideMimeType && k.overrideMimeType(b.mimeType);
                    !b.crossDomain&&!e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (i in e)
                            k.setRequestHeader(i, e[i])
                    } catch (n) {}
                    k.send(b.hasContent && b.data || null);
                    c = function(a, e) {
                        var i, l, n, m;
                        try {
                            if (c && (e || 4 === k.readyState)) {
                                c = j;
                                if (h)
                                    k.onreadystatechange = d.noop, jb && delete Ka[h];
                                if (e)
                                    4 !== k.readyState && k.abort();
                                else {
                                    m = {};
                                    i = k.status;
                                    l = k.getAllResponseHeaders();
                                    if ("string" === typeof k.responseText)
                                        m.text = k.responseText;
                                    try {
                                        n = k.statusText
                                    } catch (o) {
                                        n =
                                        ""
                                    }
                                    !i && b.isLocal&&!b.crossDomain ? i = m.text ? 200 : 404 : 1223 === i && (i = 204)
                                }
                            }
                        } catch (u) {
                            e || g(-1, u)
                        }
                        m && g(i, n, m, l)
                    };
                    b.async ? 4 === k.readyState ? setTimeout(c) : (h=++lc, jb && (Ka || (Ka = {}, d(a).unload(jb)), Ka[h] = c), k.onreadystatechange = c) : c()
                },
                abort: function() {
                    c && c(j, !0)
                }
            }
        }
    });
    var Ia, Ya, mc = /^(?:toggle|show|hide)$/, Gb = RegExp("^(?:([+-])=|)(" + wa + ")([a-z%]*)$", "i"), nc = /queueHooks$/, Ta = [function(b, a, c) {
        var e, g, h, i, k, j = this, n = {}, m = b.style, o = b.nodeType && y(b), F = d._data(b, "fxshow");
        if (!c.queue) {
            i = d._queueHooks(b, "fx");
            if (null ==
            i.unqueued)
                i.unqueued = 0, k = i.empty.fire, i.empty.fire = function() {
                i.unqueued || k()
            };
            i.unqueued++;
            j.always(function() {
                j.always(function() {
                    i.unqueued--;
                    d.queue(b, "fx").length || i.empty.fire()
                })
            })
        }
        if (1 === b.nodeType && ("height"in a || "width"in a))
            if (c.overflow = [m.overflow, m.overflowX, m.overflowY], "inline" === d.css(b, "display") && "none" === d.css(b, "float")
                )!d.support.inlineBlockNeedsLayout || "inline" === O(b.nodeName) ? m.display = "inline-block" : m.zoom = 1;
        if (c.overflow)
            m.overflow = "hidden", d.support.shrinkWrapBlocks || j.always(function() {
            m.overflow =
            c.overflow[0];
            m.overflowX = c.overflow[1];
            m.overflowY = c.overflow[2]
        });
        for (e in a)
            if (g = a[e], mc.exec(g) && (delete a[e], h = h || "toggle" === g, g !== (o ? "hide" : "show")
                ))n[e] = F && F[e] || d.style(b, e);
        if (!d.isEmptyObject(n)) {
            if (F) {
                if ("hidden"in F)
                    o = F.hidden
            } else 
                F = d._data(b, "fxshow", {});
            if (h)
                F.hidden=!o;
            o ? d(b).show() : j.done(function() {
                d(b).hide()
            });
            j.done(function() {
                var a;
                d._removeData(b, "fxshow");
                for (a in n)
                    d.style(b, a, n[a])
            });
            for (e in n)
                if (a = V(o ? F[e] : 0, e, j), !(e in F) && (F[e] = a.start, o)
                    )a.end = a.start, a.start = "width" ===
            e || "height" === e ? 1 : 0
        }
    }
    ], Ma = {
        "*": [function(b, a) {
            var c = this.createTween(b, a), e = c.cur(), g = Gb.exec(a), h = g && g[3] || (d.cssNumber[b] ? "" : "px"), i = (d.cssNumber[b] || "px" !== h&&+e) && Gb.exec(d.css(c.elem, b)), k = 1, j = 20;
            if (i && i[3] !== h) {
                h = h || i[3];
                g = g || [];
                i =+ e || 1;
                do 
                    k = k || ".5", i/=k, d.style(c.elem, b, i + h);
                while (k !== (k = c.cur() / e) && 1 !== k&&--j)
                }
            if (g)
                i = c.start =+ i||+e || 0, c.unit = h, c.end = g[1] ? i + (g[1] + 1) * g[2] : + g[2];
            return c
        }
        ]
    };
    d.Animation = d.extend(da, {
        tweener: function(b, a) {
            d.isFunction(b) ? (a = b, b = ["*"]): b = b.split(" ");
            for (var c,
            e = 0,
            g = b.length;
            e < g;
            e++)c = b[e],
            Ma[c] = Ma[c] || [],
            Ma[c].unshift(a)
        }, prefilter : function(b, a) {
            a ? Ta.unshift(b) : Ta.push(b)
        }
    });
    d.Tween = R;
    R.prototype = {
        constructor: R,
        init: function(b, a, c, e, g, h) {
            this.elem = b;
            this.prop = c;
            this.easing = g || "swing";
            this.options = a;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = h || (d.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var b = R.propHooks[this.prop];
            return b && b.get ? b.get(this) : R.propHooks._default.get(this)
        },
        run: function(b) {
            var a, c = R.propHooks[this.prop];
            this.pos = this.options.duration ?
            a = d.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : a = b;
            this.now = (this.end - this.start) * a + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : R.propHooks._default.set(this);
            return this
        }
    };
    R.prototype.init.prototype = R.prototype;
    R.propHooks = {
        _default: {
            get: function(b) {
                if (null != b.elem[b.prop] && (!b.elem.style || null == b.elem.style[b.prop]))
                    return b.elem[b.prop];
                b = d.css(b.elem, b.prop, "");
                return !b || "auto" === b ? 0 : b
            },
            set: function(b) {
                if (d.fx.step[b.prop])
                    d.fx.step[b.prop](b);
                else 
                    b.elem.style && (null != b.elem.style[d.cssProps[b.prop]] || d.cssHooks[b.prop]) ? d.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    };
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(b) {
            if (b.elem.nodeType && b.elem.parentNode)
                b.elem[b.prop] = b.now
        }
    };
    d.each(["toggle", "show", "hide"], function(b, a) {
        var c = d.fn[a];
        d.fn[a] = function(b, d, e) {
            return null == b || "boolean" === typeof b ? c.apply(this, arguments) : this.animate(la(a, !0), b, d, e)
        }
    });
    d.fn.extend({
        fadeTo: function(b, a, c, d) {
            return this.filter(y).css("opacity",
            0).show().end().animate({
                opacity: a
            }, b, c, d)
        },
        animate: function(b, a, c, e) {
            var g = d.isEmptyObject(b), h = d.speed(a, c, e), a = function() {
                var a = da(this, d.extend({}, b), h);
                (g || d._data(this, "finish")) && a.stop(!0)
            };
            a.finish = a;
            return g ||!1 === h.queue ? this.each(a) : this.queue(h.queue, a)
        },
        stop: function(b, a, c) {
            var e = function(b) {
                var a = b.stop;
                delete b.stop;
                a(c)
            };
            "string" !== typeof b && (c = a, a = b, b = j);
            a&&!1 !== b && this.queue(b || "fx", []);
            return this.each(function() {
                var a=!0, f = null != b && b + "queueHooks", g = d.timers, h = d._data(this);
                if (f)
                    h[f] &&
                    h[f].stop && e(h[f]);
                else 
                    for (f in h)
                        h[f] && h[f].stop && nc.test(f) && e(h[f]);
                for (f = g.length; f--;)
                    if (g[f].elem === this && (null == b || g[f].queue === b))
                        g[f].anim.stop(c), a=!1, g.splice(f, 1);
                (a ||!c) && d.dequeue(this, b)
            })
        },
        finish: function(b) {
            !1 !== b && (b = b || "fx");
            return this.each(function() {
                var a, c = d._data(this), e = c[b + "queue"];
                a = c[b + "queueHooks"];
                var g = d.timers, h = e ? e.length: 0;
                c.finish=!0;
                d.queue(this, b, []);
                a && a.stop && a.stop.call(this, !0);
                for (a = g.length; a--;)
                    g[a].elem === this && g[a].queue === b && (g[a].anim.stop(!0), g.splice(a,
                    1));
                for (a = 0; a < h; a++)
                    e[a] && e[a].finish && e[a].finish.call(this);
                delete c.finish
            })
        }
    });
    d.each({
        slideDown: la("show"),
        slideUp: la("hide"),
        slideToggle: la("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(b, a) {
        d.fn[b] = function(b, c, d) {
            return this.animate(a, b, c, d)
        }
    });
    d.speed = function(b, a, c) {
        var e = b && "object" === typeof b ? d.extend({}, b): {
            complete: c ||!c && a || d.isFunction(b) && b,
            duration: b,
            easing: c && a || a&&!d.isFunction(a) && a
        };
        e.duration = d.fx.off ? 0 : "number" === typeof e.duration ?
        e.duration : e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default;
        if (null == e.queue ||!0 === e.queue)
            e.queue = "fx";
        e.old = e.complete;
        e.complete = function() {
            d.isFunction(e.old) && e.old.call(this);
            e.queue && d.dequeue(this, e.queue)
        };
        return e
    };
    d.easing = {
        linear: function(b) {
            return b
        },
        swing: function(b) {
            return 0.5 - Math.cos(b * Math.PI) / 2
        }
    };
    d.timers = [];
    d.fx = R.prototype.init;
    d.fx.tick = function() {
        var b, a = d.timers, c = 0;
        for (Ia = d.now(); c < a.length; c++)
            b = a[c], !b() && a[c] === b && a.splice(c--, 1);
        a.length || d.fx.stop();
        Ia = j
    };
    d.fx.timer = function(b) {
        b() && d.timers.push(b) && d.fx.start()
    };
    d.fx.interval = 13;
    d.fx.start = function() {
        Ya || (Ya = setInterval(d.fx.tick, d.fx.interval))
    };
    d.fx.stop = function() {
        clearInterval(Ya);
        Ya = null
    };
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    d.fx.step = {};
    if (d.expr && d.expr.filters)
        d.expr.filters.animated = function(b) {
            return d.grep(d.timers, function(a) {
                return b === a.elem
            }).length
        };
    d.fn.offset = function(b) {
        if (arguments.length)
            return b === j ? this : this.each(function(a) {
                d.offset.setOffset(this, b, a)
            });
        var a,
        c, e = {
            top: 0,
            left: 0
        }, g = (c = this[0]) && c.ownerDocument;
        if (g) {
            a = g.documentElement;
            if (!d.contains(a, c))
                return e;
            typeof c.getBoundingClientRect !== ka && (e = c.getBoundingClientRect());
            c = ma(g);
            return {
                top: e.top + (c.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                left: e.left + (c.pageXOffset || a.scrollLeft) - (a.clientLeft || 0)
            }
        }
    };
    d.offset = {
        setOffset: function(b, a, c) {
            var e = d.css(b, "position");
            if ("static" === e)
                b.style.position = "relative";
            var g = d(b), h = g.offset(), i = d.css(b, "top"), k = d.css(b, "left"), j = {}, n = {};
            ("absolute" === e || "fixed" ===
            e)&&-1 < d.inArray("auto", [i, k]) ? (n = g.position(), e = n.top, k = n.left) : (e = parseFloat(i) || 0, k = parseFloat(k) || 0);
            d.isFunction(a) && (a = a.call(b, c, h));
            if (null != a.top)
                j.top = a.top - h.top + e;
            if (null != a.left)
                j.left = a.left - h.left + k;
            "using"in a ? a.using.call(b, j) : g.css(j)
        }
    };
    d.fn.extend({
        position: function() {
            if (this[0]) {
                var b, a, c = {
                    top: 0,
                    left: 0
                }, e = this[0];
                "fixed" === d.css(e, "position") ? a = e.getBoundingClientRect() : (b = this.offsetParent(), a = this.offset(), d.nodeName(b[0], "html") || (c = b.offset()), c.top += d.css(b[0], "borderTopWidth",
                !0), c.left += d.css(b[0], "borderLeftWidth", !0));
                return {
                    top: a.top - c.top - d.css(e, "marginTop", !0),
                    left: a.left - c.left - d.css(e, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var b = this.offsetParent || qa; b&&!d.nodeName(b, "html") && "static" === d.css(b, "position");)
                    b = b.offsetParent;
                return b || qa
            })
        }
    });
    d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, a) {
        var c = /Y/.test(a);
        d.fn[b] = function(e) {
            return d.access(this, function(b, e, g) {
                var h = ma(b);
                if (g === j)
                    return h ? a in h ? h[a] :
                    h.document.documentElement[e] : b[e];
                h ? h.scrollTo(!c ? g : d(h).scrollLeft(), c ? g : d(h).scrollTop()) : b[e] = g
            }, b, e, arguments.length, null)
        }
    });
    d.each({
        Height: "height",
        Width: "width"
    }, function(b, a) {
        d.each({
            padding: "inner" + b,
            content: a,
            "": "outer" + b
        }, function(c, e) {
            d.fn[e] = function(e, g) {
                var h = arguments.length && (c || "boolean" !== typeof e), i = c || (!0 === e ||!0 === g ? "margin" : "border");
                return d.access(this, function(a, c, e) {
                    if (d.isWindow(a))
                        return a.document.documentElement["client" + b];
                    return 9 === a.nodeType ? (c = a.documentElement,
                    Math.max(a.body["scroll" + b], c["scroll" + b], a.body["offset" + b], c["offset" + b], c["client" + b])) : e === j ? d.css(a, c, i) : d.style(a, c, e, i)
                }, a, h ? e : j, h, null)
            }
        })
    });
    d.fn.size = function() {
        return this.length
    };
    d.fn.andSelf = d.fn.addBack;
    "object" === typeof module && module && "object" === typeof module.exports ? module.exports = d : (a.jQuery = a.$ = d, "function" === typeof define && define.amd && define("jquery", [], function() {
        return d
    }))
})(window);
(function(a, j) {
    function s(c, e) {
        var g, h;
        g = c.nodeName.toLowerCase();
        if ("area" === g) {
            g = c.parentNode;
            h = g.name;
            if (!c.href ||!h || "map" !== g.nodeName.toLowerCase())
                return !1;
            g = a("img[usemap=#" + h + "]")[0];
            return !!g && m(g)
        }
        return (/input|select|textarea|button|object/.test(g)?!c.disabled : "a" === g ? c.href || e : e) && m(c)
    }
    function m(c) {
        return a.expr.filters.visible(c)&&!a(c).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    var x = 0, r = /^ui-id-\d+$/;
    a.ui = a.ui || {};
    a.extend(a.ui, {
        version: "1.10.3",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    });
    a.fn.extend({
        focus: function(c) {
            return function(e, g) {
                return "number" === typeof e ? this.each(function() {
                    var c = this;
                    setTimeout(function() {
                        a(c).focus();
                        g && g.call(c)
                    }, e)
                }) : c.apply(this, arguments)
            }
        }(a.fn.focus),
        scrollParent: function() {
            var c;
            c =
            a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(a.css(this,
                "position")) && /(auto|scroll)/.test(a.css(this,
                "overflow") + a.css(this,
                "overflow-y") + a.css(this,
                "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
            }).eq(0);
            return /fixed/.test(this.css("position")) ||!c.length ? a(document) :
            c
        }, zIndex : function(c) {
            if (c !== j)
                return this.css("zIndex", c);
            if (this.length)
                for (var c = a(this[0]), e; c.length && c[0] !== document;) {
                    e = c.css("position");
                    if ("absolute" === e || "relative" === e || "fixed" === e)
                        if (e = parseInt(c.css("zIndex"), 10), !isNaN(e) && 0 !== e)return e;
                        c = c.parent()
                }
            return 0
        }, uniqueId: function() {
            return this.each(function() {
                if (!this.id)
                    this.id = "ui-id-" + ++x
            })
        }, removeUniqueId: function() {
            return this.each(function() {
                r.test(this.id) && a(this).removeAttr("id")
            })
        }
    });
    a.extend(a.expr[":"], {
        data: a.expr.createPseudo ?
        a.expr.createPseudo(function(c) {
            return function(e) {
                return !!a.data(e, c)
            }
        }): function(c, e, g) {
            return !!a.data(c, g[3])
        },
        focusable: function(c) {
            return s(c, !isNaN(a.attr(c, "tabindex")))
        },
        tabbable: function(c) {
            var e = a.attr(c, "tabindex"), g = isNaN(e);
            return (g || 0 <= e) && s(c, !g)
        }
    });
    a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(c, e) {
        function g(c, e, g, k) {
            a.each(h, function() {
                e -= parseFloat(a.css(c, "padding" + this)) || 0;
                g && (e -= parseFloat(a.css(c, "border" + this + "Width")) || 0);
                k && (e -= parseFloat(a.css(c, "margin" +
                this)) || 0)
            });
            return e
        }
        var h = "Width" === e ? ["Left", "Right"]: ["Top", "Bottom"], k = e.toLowerCase(), m = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };
        a.fn["inner" + e] = function(c) {
            return c === j ? m["inner" + e].call(this) : this.each(function() {
                a(this).css(k, g(this, c) + "px")
            })
        };
        a.fn["outer" + e] = function(c, h) {
            return "number" !== typeof c ? m["outer" + e].call(this, c) : this.each(function() {
                a(this).css(k, g(this, c, !0, h) + "px")
            })
        }
    });
    if (!a.fn.addBack)
        a.fn.addBack = function(a) {
            return this.add(null ==
            a ? this.prevObject : this.prevObject.filter(a))
        };
    if (a("<a>").data("a-b", "a").removeData("a-b").data("a-b"))
        a.fn.removeData = function(c) {
            return function(e) {
                return arguments.length ? c.call(this, a.camelCase(e)) : c.call(this)
            }
        }(a.fn.removeData);
    a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    a.support.selectstart = "onselectstart"in document.createElement("div");
    a.fn.extend({
        disableSelection: function() {
            return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    });
    a.extend(a.ui, {
        plugin: {
            add: function(c, e, g) {
                var h, c = a.ui[c].prototype;
                for (h in g)
                    c.plugins[h] = c.plugins[h] || [], c.plugins[h].push([e, g[h]])
            },
            call: function(a, e, g) {
                var h = a.plugins[e];
                if (h && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
                    for (e = 0; e < h.length; e++)
                        a.options[h[e][0]] && h[e][1].apply(a.element, g)
            }
        },
        hasScroll: function(c, e) {
            if ("hidden" === a(c).css("overflow"))
                return !1;
            var g = e && "left" === e ? "scrollLeft": "scrollTop",
            h=!1;
            if (0 < c[g])
                return !0;
            c[g] = 1;
            h = 0 < c[g];
            c[g] = 0;
            return h
        }
    })
})(jQuery);
(function(a, j) {
    function s() {
        this._curInst = null;
        this._keyEvent=!1;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing=!1;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            dayNamesMin: "Su,Mo,Tu,We,Th,Fr,Sa".split(","),
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        };
        a.extend(this._defaults, this.regional[""]);
        this.dpDiv = m(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function m(c) {
        return c.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseout", function() {
            a(this).removeClass("ui-state-hover");
            -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover");
            -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
        }).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseover", function() {
            if (!a.datepicker._isDisabledDatepicker(r.inline ? c.parent()[0] : r.input[0]))
                a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover")
        })
    }
    function x(c, e) {
        a.extend(c, e);
        for (var g in e)
            null == e[g] && (c[g] = e[g]);
        return c
    }
    a.extend(a.ui, {
        datepicker: {
            version: "1.10.3"
        }
    });
    var r;
    a.extend(s.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(a) {
            x(this._defaults, a || {});
            return this
        },
        _attachDatepicker: function(c,
        e) {
            var g, h, k;
            g = c.nodeName.toLowerCase();
            h = "div" === g || "span" === g;
            if (!c.id)
                this.uuid += 1, c.id = "dp" + this.uuid;
            k = this._newInst(a(c), h);
            k.settings = a.extend({}, e || {});
            "input" === g ? this._connectDatepicker(c, k) : h && this._inlineDatepicker(c, k)
        },
        _newInst: function(c, e) {
            return {
                id: c[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: c,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: !e ? this.dpDiv: m(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            }
        },
        _connectDatepicker: function(c, e) {
            var g = a(c);
            e.append = a([]);
            e.trigger = a([]);
            g.hasClass(this.markerClassName) || (this._attachments(g, e), g.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(e), a.data(c, "datepicker", e), e.settings.disabled && this._disableDatepicker(c))
        },
        _attachments: function(c, e) {
            var g, h;
            g = this._get(e, "appendText");
            var k = this._get(e, "isRTL");
            e.append && e.append.remove();
            if (g)
                e.append = a("<span class='" + this._appendClass + "'>" +
                g + "</span>"), c[k ? "before": "after"](e.append);
            c.unbind("focus", this._showDatepicker);
            e.trigger && e.trigger.remove();
            g = this._get(e, "showOn");
            ("focus" === g || "both" === g) && c.focus(this._showDatepicker);
            if ("button" === g || "both" === g)
                g = this._get(e, "buttonText"), h = this._get(e, "buttonImage"), e.trigger = a(this._get(e, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
                src: h,
                alt: g,
                title: g
            }) : a("<button type='button'></button>").addClass(this._triggerClass).html(!h ? g : a("<img/>").attr({
                src: h,
                alt: g,
                title: g
            }))),
            c[k ? "before": "after"](e.trigger), e.trigger.click(function() {
                a.datepicker._datepickerShowing && a.datepicker._lastInput === c[0] ? a.datepicker._hideDatepicker() : (a.datepicker._datepickerShowing && a.datepicker._lastInput !== c[0] && a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(c[0]));
                return !1
            })
        },
        _autoSize: function(a) {
            if (this._get(a, "autoSize")&&!a.inline) {
                var e, g, h, k, j = new Date(2009, 11, 20), n = this._get(a, "dateFormat");
                n.match(/[DM]/) && (e = function(a) {
                    for (k = h = g = 0; k < a.length; k++)
                        if (a[k].length > g)
                            g =
                            a[k].length, h = k;
                    return h
                }, j.setMonth(e(this._get(a, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), j.setDate(e(this._get(a, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - j.getDay()));
                a.input.attr("size", this._formatDate(a, j).length)
            }
        },
        _inlineDatepicker: function(c, e) {
            var g = a(c);
            g.hasClass(this.markerClassName) || (g.addClass(this.markerClassName).append(e.dpDiv), a.data(c, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled &&
            this._disableDatepicker(c), e.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(c, e, g, h, k) {
            var j, c = this._dialogInst;
            if (!c)
                this.uuid += 1, c = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + c + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, a.data(this._dialogInput[0], "datepicker", c);
            x(c.settings, h || {});
            e = e && e.constructor === Date ?
            this._formatDate(c, e) : e;
            this._dialogInput.val(e);
            this._pos = k ? k.length ? k : [k.pageX, k.pageY] : null;
            if (!this._pos)
                e = document.documentElement.clientWidth, h = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, j = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [e / 2-100 + k, h / 2-150 + j];
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            c.settings.onSelect = g;
            this._inDialog=!0;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            a.blockUI && a.blockUI(this.dpDiv);
            a.data(this._dialogInput[0], "datepicker", c);
            return this
        },
        _destroyDatepicker: function(c) {
            var e, g = a(c), h = a.data(c, "datepicker");
            g.hasClass(this.markerClassName) && (e = c.nodeName.toLowerCase(), a.removeData(c, "datepicker"), "input" === e ? (h.append.remove(), h.trigger.remove(), g.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup",
            this._doKeyUp)) : ("div" === e || "span" === e) && g.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(c) {
            var e, g = a(c), h = a.data(c, "datepicker");
            if (g.hasClass(this.markerClassName)) {
                e = c.nodeName.toLowerCase();
                if ("input" === e)
                    c.disabled=!1, h.trigger.filter("button").each(function() {
                    this.disabled=!1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if ("div" === e || "span" === e)
                    e = g.children("." + this._inlineClass), e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",
                !1);
                this._disabledInputs = a.map(this._disabledInputs, function(a) {
                    return a === c ? null : a
                })
            }
        },
        _disableDatepicker: function(c) {
            var e, g = a(c), h = a.data(c, "datepicker");
            if (g.hasClass(this.markerClassName)) {
                e = c.nodeName.toLowerCase();
                if ("input" === e)
                    c.disabled=!0, h.trigger.filter("button").each(function() {
                    this.disabled=!0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if ("div" === e || "span" === e)
                    e = g.children("." + this._inlineClass), e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",
                !0);
                this._disabledInputs = a.map(this._disabledInputs, function(a) {
                    return a === c ? null : a
                });
                this._disabledInputs[this._disabledInputs.length] = c
            }
        },
        _isDisabledDatepicker: function(a) {
            if (!a)
                return !1;
            for (var e = 0; e < this._disabledInputs.length; e++)
                if (this._disabledInputs[e] === a)
                    return !0;
            return !1
        },
        _getInst: function(c) {
            try {
                return a.data(c, "datepicker")
            } catch (e) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(c, e, g) {
            var h, k, m, n, L = this._getInst(c);
            if (2 === arguments.length && "string" ===
            typeof e)
                return "defaults" === e ? a.extend({}, a.datepicker._defaults) : L ? "all" === e ? a.extend({}, L.settings) : this._get(L, e) : null;
            h = e || {};
            "string" === typeof e && (h = {}, h[e] = g);
            if (L) {
                this._curInst === L && this._hideDatepicker();
                k = this._getDateDatepicker(c, !0);
                m = this._getMinMaxDate(L, "min");
                n = this._getMinMaxDate(L, "max");
                x(L.settings, h);
                if (null !== m && h.dateFormat !== j && h.minDate === j)
                    L.settings.minDate = this._formatDate(L, m);
                if (null !== n && h.dateFormat !== j && h.maxDate === j)
                    L.settings.maxDate = this._formatDate(L, n);
                "disabled"in
                h && (h.disabled ? this._disableDatepicker(c) : this._enableDatepicker(c));
                this._attachments(a(c), L);
                this._autoSize(L);
                this._setDate(L, k);
                this._updateAlternate(L);
                this._updateDatepicker(L)
            }
        },
        _changeDatepicker: function(a, e, g) {
            this._optionDatepicker(a, e, g)
        },
        _refreshDatepicker: function(a) {
            (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function(a, e) {
            var g = this._getInst(a);
            g && (this._setDate(g, e), this._updateDatepicker(g), this._updateAlternate(g))
        },
        _getDateDatepicker: function(a, e) {
            var g =
            this._getInst(a);
            g&&!g.inline && this._setDateFromField(g, e);
            return g ? this._getDate(g) : null
        },
        _doKeyDown: function(c) {
            var e, g = a.datepicker._getInst(c.target);
            e=!0;
            var h = g.dpDiv.is(".ui-datepicker-rtl");
            g._keyEvent=!0;
            if (a.datepicker._datepickerShowing)
                switch (c.keyCode) {
                case 9:
                    a.datepicker._hideDatepicker();
                    e=!1;
                    break;
                case 13:
                    return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", g.dpDiv), e[0] && a.datepicker._selectDay(c.target, g.selectedMonth, g.selectedYear, e[0]), (c = a.datepicker._get(g,
                    "onSelect")) ? (e = a.datepicker._formatDate(g), c.apply(g.input ? g.input[0] : null, [e, g])) : a.datepicker._hideDatepicker(), !1;
                case 27:
                    a.datepicker._hideDatepicker();
                    break;
                case 33:
                    a.datepicker._adjustDate(c.target, c.ctrlKey?-a.datepicker._get(g, "stepBigMonths") : - a.datepicker._get(g, "stepMonths"), "M");
                    break;
                case 34:
                    a.datepicker._adjustDate(c.target, c.ctrlKey?+a.datepicker._get(g, "stepBigMonths") : + a.datepicker._get(g, "stepMonths"), "M");
                    break;
                case 35:
                    (c.ctrlKey || c.metaKey) && a.datepicker._clearDate(c.target);
                    e = c.ctrlKey || c.metaKey;
                    break;
                case 36:
                    (c.ctrlKey || c.metaKey) && a.datepicker._gotoToday(c.target);
                    e = c.ctrlKey || c.metaKey;
                    break;
                case 37:
                    if (c.ctrlKey || c.metaKey)
                        a.datepicker._adjustDate(c.target, h ? 1 : -1, "D");
                        e = c.ctrlKey || c.metaKey;
                        c.originalEvent.altKey && a.datepicker._adjustDate(c.target, c.ctrlKey?-a.datepicker._get(g, "stepBigMonths") : - a.datepicker._get(g, "stepMonths"), "M");
                        break;
                    case 38:
                        (c.ctrlKey || c.metaKey) && a.datepicker._adjustDate(c.target, -7, "D");
                        e = c.ctrlKey || c.metaKey;
                        break;
                    case 39:
                        if (c.ctrlKey ||
                        c.metaKey)
                            a.datepicker._adjustDate(c.target, h?-1 : 1, "D");
                            e = c.ctrlKey || c.metaKey;
                            c.originalEvent.altKey && a.datepicker._adjustDate(c.target, c.ctrlKey?+a.datepicker._get(g, "stepBigMonths") : + a.datepicker._get(g, "stepMonths"), "M");
                            break;
                        case 40:
                            (c.ctrlKey || c.metaKey) && a.datepicker._adjustDate(c.target, 7, "D");
                            e = c.ctrlKey || c.metaKey;
                            break;
                        default:
                            e=!1
                } else 
                    36 === c.keyCode && c.ctrlKey ? a.datepicker._showDatepicker(this) : e=!1;
            e && (c.preventDefault(), c.stopPropagation())
        },
        _doKeyPress: function(c) {
            var e, g;
            e = a.datepicker._getInst(c.target);
            if (a.datepicker._get(e, "constrainInput"))
                return e = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), g = String.fromCharCode(null == c.charCode ? c.keyCode : c.charCode), c.ctrlKey || c.metaKey || " " > g ||!e||-1 < e.indexOf(g)
        },
        _doKeyUp: function(c) {
            var e, c = a.datepicker._getInst(c.target);
            if (c.input.val() !== c.lastVal)
                try {
                    if (e = a.datepicker.parseDate(a.datepicker._get(c, "dateFormat"), c.input ? c.input.val() : null, a.datepicker._getFormatConfig(c)))
                        a.datepicker._setDateFromField(c), a.datepicker._updateAlternate(c),
                        a.datepicker._updateDatepicker(c)
            } catch (g) {}
            return !0
        },
        _showDatepicker: function(c) {
            c = c.target || c;
            "input" !== c.nodeName.toLowerCase() && (c = a("input", c.parentNode)[0]);
            if (!(a.datepicker._isDisabledDatepicker(c) || a.datepicker._lastInput === c)) {
                var e, g, h, k;
                e = a.datepicker._getInst(c);
                a.datepicker._curInst && a.datepicker._curInst !== e && (a.datepicker._curInst.dpDiv.stop(!0, !0), e && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0]));
                g = (g = a.datepicker._get(e, "beforeShow")) ?
                g.apply(c, [c, e]) : {};
                if (!1 !== g) {
                    x(e.settings, g);
                    e.lastVal = null;
                    a.datepicker._lastInput = c;
                    a.datepicker._setDateFromField(e);
                    if (a.datepicker._inDialog)
                        c.value = "";
                    if (!a.datepicker._pos)
                        a.datepicker._pos = a.datepicker._findPos(c), a.datepicker._pos[1] += c.offsetHeight;
                    h=!1;
                    a(c).parents().each(function() {
                        h|="fixed" === a(this).css("position");
                        return !h
                    });
                    g = {
                        left: a.datepicker._pos[0],
                        top: a.datepicker._pos[1]
                    };
                    a.datepicker._pos = null;
                    e.dpDiv.empty();
                    e.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    });
                    a.datepicker._updateDatepicker(e);
                    g = a.datepicker._checkOffset(e, g, h);
                    e.dpDiv.css({
                        position: a.datepicker._inDialog && a.blockUI ? "static": h ? "fixed": "absolute",
                        display: "none",
                        left: g.left + "px",
                        top: g.top + "px"
                    });
                    if (!e.inline) {
                        g = a.datepicker._get(e, "showAnim");
                        k = a.datepicker._get(e, "duration");
                        e.dpDiv.zIndex(a(c).zIndex() + 1);
                        a.datepicker._datepickerShowing=!0;
                        if (a.effects && a.effects.effect[g])
                            e.dpDiv.show(g, a.datepicker._get(e, "showOptions"), k);
                        else 
                            e.dpDiv[g || "show"](g ? k : null);
                        a.datepicker._shouldFocusInput(e) &&
                        e.input.focus();
                        a.datepicker._curInst = e
                    }
                }
            }
        },
        _updateDatepicker: function(c) {
            this.maxRows = 4;
            r = c;
            c.dpDiv.empty().append(this._generateHTML(c));
            this._attachHandlers(c);
            c.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var e, g = this._getNumberOfMonths(c), h = g[1];
            c.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            1 < h && c.dpDiv.addClass("ui-datepicker-multi-" + h).css("width", 17 * h + "em");
            c.dpDiv[(1 !== g[0] || 1 !== g[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            c.dpDiv[(this._get(c, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            c === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(c) && c.input.focus();
            if (c.yearshtml)
                e = c.yearshtml, setTimeout(function() {
                e === c.yearshtml && c.yearshtml && c.dpDiv.find("select.ui-datepicker-year:first").replaceWith(c.yearshtml);
                e = c.yearshtml = null
            }, 0)
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
        },
        _checkOffset: function(c,
        e, g) {
            var h = c.dpDiv.outerWidth(), k = c.dpDiv.outerHeight(), j = c.input ? c.input.outerWidth(): 0, n = c.input ? c.input.outerHeight(): 0, m = document.documentElement.clientWidth + (g ? 0 : a(document).scrollLeft()), S = document.documentElement.clientHeight + (g ? 0 : a(document).scrollTop());
            e.left -= this._get(c, "isRTL") ? h - j : 0;
            e.left -= g && e.left === c.input.offset().left ? a(document).scrollLeft() : 0;
            e.top -= g && e.top === c.input.offset().top + n ? a(document).scrollTop() : 0;
            e.left -= Math.min(e.left, e.left + h > m && m > h ? Math.abs(e.left + h - m) : 0);
            e.top -=
            Math.min(e.top, e.top + k > S && S > k ? Math.abs(k + n) : 0);
            return e
        },
        _findPos: function(c) {
            for (var e = this._get(this._getInst(c), "isRTL"); c && ("hidden" === c.type || 1 !== c.nodeType || a.expr.filters.hidden(c));)
                c = c[e ? "previousSibling": "nextSibling"];
            c = a(c).offset();
            return [c.left, c.top]
        },
        _hideDatepicker: function(c) {
            var e, g, h = this._curInst;
            if (h&&!(c && h !== a.data(c, "datepicker")) && this._datepickerShowing) {
                c = this._get(h, "showAnim");
                e = this._get(h, "duration");
                g = function() {
                    a.datepicker._tidyDialog(h)
                };
                if (a.effects && (a.effects.effect[c] ||
                a.effects[c]))
                    h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), e, g);
                else 
                    h.dpDiv["slideDown" === c ? "slideUp": "fadeIn" === c ? "fadeOut": "hide"](c ? e : null, g);
                c || g();
                this._datepickerShowing=!1;
                (c = this._get(h, "onClose")) && c.apply(h.input ? h.input[0] : null, [h.input ? h.input.val(): "", h]);
                this._lastInput = null;
                this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv)));
                this._inDialog=!1
            }
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(c) {
            if (a.datepicker._curInst) {
                var c = a(c.target), e = a.datepicker._getInst(c[0]);
                (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length&&!c.hasClass(a.datepicker.markerClassName)&&!c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog ||!a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== e) && a.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(c, e, g) {
            var c = a(c),
            h = this._getInst(c[0]);
            this._isDisabledDatepicker(c[0]) || (this._adjustInstDate(h, e + ("M" === g ? this._get(h, "showCurrentAtPos") : 0), g), this._updateDatepicker(h))
        },
        _gotoToday: function(c) {
            var e = a(c), g = this._getInst(e[0]);
            this._get(g, "gotoCurrent") && g.currentDay ? (g.selectedDay = g.currentDay, g.drawMonth = g.selectedMonth = g.currentMonth, g.drawYear = g.selectedYear = g.currentYear) : (c = new Date, g.selectedDay = c.getDate(), g.drawMonth = g.selectedMonth = c.getMonth(), g.drawYear = g.selectedYear = c.getFullYear());
            this._notifyChange(g);
            this._adjustDate(e)
        },
        _selectMonthYear: function(c, e, g) {
            var c = a(c), h = this._getInst(c[0]);
            h["selected" + ("M" === g ? "Month" : "Year")] = h["draw" + ("M" === g ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10);
            this._notifyChange(h);
            this._adjustDate(c)
        },
        _selectDay: function(c, e, g, h) {
            var k;
            k = a(c);
            if (!a(h).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(k[0]))
                k = this._getInst(k[0]), k.selectedDay = k.currentDay = a("a", h).html(), k.selectedMonth = k.currentMonth = e, k.selectedYear = k.currentYear = g, this._selectDate(c,
            this._formatDate(k, k.currentDay, k.currentMonth, k.currentYear))
        },
        _clearDate: function(c) {
            this._selectDate(a(c), "")
        },
        _selectDate: function(c, e) {
            var g, h = this._getInst(a(c)[0]), e = null != e ? e: this._formatDate(h);
            h.input && h.input.val(e);
            this._updateAlternate(h);
            (g = this._get(h, "onSelect")) ? g.apply(h.input ? h.input[0] : null, [e, h]) : h.input && h.input.trigger("change");
            h.inline ? this._updateDatepicker(h) : (this._hideDatepicker(), this._lastInput = h.input[0], "object" !== typeof h.input[0] && h.input.focus(), this._lastInput =
            null)
        },
        _updateAlternate: function(c) {
            var e, g, h, k = this._get(c, "altField");
            k && (e = this._get(c, "altFormat") || this._get(c, "dateFormat"), g = this._getDate(c), h = this.formatDate(e, g, this._getFormatConfig(c)), a(k).each(function() {
                a(this).val(h)
            }))
        },
        noWeekends: function(a) {
            a = a.getDay();
            return [0 < a && 6 > a, ""]
        },
        iso8601Week: function(a) {
            var e = new Date(a.getTime());
            e.setDate(e.getDate() + 4 - (e.getDay() || 7));
            a = e.getTime();
            e.setMonth(0);
            e.setDate(1);
            return Math.floor(Math.round((a - e) / 864E5) / 7) + 1
        },
        parseDate: function(c, e, g) {
            if (null ==
            c || null == e)
                throw "Invalid arguments";
            e = "object" === typeof e ? e.toString() : e + "";
            if ("" === e)
                return null;
            var h, k, j, n = 0;
            k = (g ? g.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            k = "string" !== typeof k ? k : (new Date).getFullYear()%100 + parseInt(k, 10);
            j = (g ? g.dayNamesShort : null) || this._defaults.dayNamesShort;
            var m = (g ? g.dayNames : null) || this._defaults.dayNames, S = (g ? g.monthNamesShort : null) || this._defaults.monthNamesShort, s = (g ? g.monthNames : null) || this._defaults.monthNames, o = g =- 1, r =- 1, x =- 1, v=!1, w, A = function(a) {
                (a =
                h + 1 < c.length && c.charAt(h + 1) === a) && h++;
                return a
            }, y = function(a) {
                var c = A(a), a = e.substring(n).match(RegExp("^\\d{1," + ("@" === a ? 14 : "!" === a ? 20 : "y" === a && c ? 4 : "o" === a ? 3 : 2) + "}"));
                if (!a)
                    throw "Missing number at position " + n;
                n += a[0].length;
                return parseInt(a[0], 10)
            }, P = function(c, g, h) {
                var k =- 1, c = a.map(A(c) ? h : g, function(a, c) {
                    return [[c, a]]
                }).sort(function(a, c) {
                    return - (a[1].length - c[1].length)
                });
                a.each(c, function(a, c) {
                    var g = c[1];
                    if (e.substr(n, g.length).toLowerCase() === g.toLowerCase())
                        return k = c[0], n += g.length, !1
                });
                if (-1 !== k)
                    return k + 1;
                throw "Unknown name at position " + n;
            }, T = function() {
                if (e.charAt(n) !== c.charAt(h))
                    throw "Unexpected literal at position " + n;
                n++
            };
            for (h = 0; h < c.length; h++)
                if (v)
                    "'" === c.charAt(h)&&!A("'") ? v=!1 : T();
                else 
                    switch (c.charAt(h)) {
                    case "d":
                        r = y("d");
                        break;
                    case "D":
                        P("D", j, m);
                        break;
                    case "o":
                        x = y("o");
                        break;
                    case "m":
                        o = y("m");
                        break;
                    case "M":
                        o = P("M", S, s);
                        break;
                    case "y":
                        g = y("y");
                        break;
                    case "@":
                        w = new Date(y("@"));
                        g = w.getFullYear();
                        o = w.getMonth() + 1;
                        r = w.getDate();
                        break;
                    case "!":
                        w = new Date((y("!") - this._ticksTo1970) /
                        1E4);
                        g = w.getFullYear();
                        o = w.getMonth() + 1;
                        r = w.getDate();
                        break;
                    case "'":
                        A("'") ? T() : v=!0;
                        break;
                    default:
                        T()
                    }
            if (n < e.length && (j = e.substr(n), !/^\s+/.test(j))
                )throw "Extra/unparsed characters found in date: " + j;
            -1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear()%100 + (g <= k ? 0 : -100));
            if (-1 < x) {
                o = 1;
                r = x;
                do {
                    k = this._getDaysInMonth(g, o-1);
                    if (r <= k)
                        break;
                    o++;
                    r -= k
                }
                while (1)
                }
            w = this._daylightSavingAdjust(new Date(g, o-1, r));
            if (w.getFullYear() !== g || w.getMonth() + 1 !== o || w.getDate() !==
            r)
                throw "Invalid date";
            return w
        }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function(a, e, g) {
            if (!e)
                return "";
            var h, k = (g ? g.dayNamesShort : null) || this._defaults.dayNamesShort, j = (g ? g.dayNames : null) || this._defaults.dayNames, n = (g ? g.monthNamesShort : null) ||
            this._defaults.monthNamesShort, g = (g ? g.monthNames : null) || this._defaults.monthNames, m = function(e) {
                (e = h + 1 < a.length && a.charAt(h + 1) === e) && h++;
                return e
            }, r = function(a, c, e) {
                c = "" + c;
                if (m(a))
                    for (; c.length < e;)
                        c = "0" + c;
                return c
            }, s = function(a, c, e, g) {
                return m(a) ? g[c] : e[c]
            }, o = "", x=!1;
            if (e)
                for (h = 0; h < a.length; h++)
                    if (x)
                        "'" === a.charAt(h)&&!m("'") ? x=!1 : o += a.charAt(h);
                    else 
                        switch (a.charAt(h)) {
                        case "d":
                            o += r("d", e.getDate(), 2);
                            break;
                        case "D":
                            o += s("D", e.getDay(), k, j);
                            break;
                        case "o":
                            o += r("o", Math.round(((new Date(e.getFullYear(),
                            e.getMonth(), e.getDate())).getTime() - (new Date(e.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                            break;
                        case "m":
                            o += r("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            o += s("M", e.getMonth(), n, g);
                            break;
                        case "y":
                            o += m("y") ? e.getFullYear() : (10 > e.getYear()%100 ? "0" : "") + e.getYear()%100;
                            break;
                        case "@":
                            o += e.getTime();
                            break;
                        case "!":
                            o += 1E4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            m("'") ? o += "'" : x=!0;
                            break;
                        default:
                            o += a.charAt(h)
                        }
            return o
        }, _possibleChars: function(a) {
            var e, g = "", h=!1, k = function(g) {
                (g = e + 1 < a.length && a.charAt(e + 1) ===
                g) && e++;
                return g
            };
            for (e = 0; e < a.length; e++)
                if (h)
                    "'" === a.charAt(e)&&!k("'") ? h=!1 : g += a.charAt(e);
                else 
                    switch (a.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        g += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        k("'") ? g += "'" : h=!0;
                        break;
                    default:
                        g += a.charAt(e)
                    }
            return g
        }, _get: function(a, e) {
            return a.settings[e] !== j ? a.settings[e] : this._defaults[e]
        }, _setDateFromField: function(a, e) {
            if (a.input.val() !== a.lastVal) {
                var g = this._get(a, "dateFormat"), h = a.lastVal = a.input ? a.input.val(): null, k = this._getDefaultDate(a),
                j = k, n = this._getFormatConfig(a);
                try {
                    j = this.parseDate(g, h, n) || k
                } catch (m) {
                    h = e ? "" : h
                }
                a.selectedDay = j.getDate();
                a.drawMonth = a.selectedMonth = j.getMonth();
                a.drawYear = a.selectedYear = j.getFullYear();
                a.currentDay = h ? j.getDate() : 0;
                a.currentMonth = h ? j.getMonth() : 0;
                a.currentYear = h ? j.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        }, _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        }, _determineDate: function(c, e, g) {
            var b;
            var h = function(a) {
                var c = new Date;
                c.setDate(c.getDate() +
                a);
                return c
            };
            if (b = (e = null == e || "" === e ? g : "string" === typeof e ? function(e) {
                try {
                    return a.datepicker.parseDate(a.datepicker._get(c, "dateFormat"), e, a.datepicker._getFormatConfig(c))
                } catch (g) {}
                for (var h = (e.toLowerCase().match(/^c/) ? a.datepicker._getDate(c) : null) || new Date, j = h.getFullYear(), m = h.getMonth(), h = h.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, o = r.exec(e); o;) {
                    switch (o[2] || "d") {
                    case "d":
                    case "D":
                        h += parseInt(o[1], 10);
                        break;
                    case "w":
                    case "W":
                        h += 7 * parseInt(o[1], 10);
                        break;
                    case "m":
                    case "M":
                        m += parseInt(o[1],
                        10);
                        h = Math.min(h, a.datepicker._getDaysInMonth(j, m));
                        break;
                    case "y":
                    case "Y":
                        j += parseInt(o[1], 10), h = Math.min(h, a.datepicker._getDaysInMonth(j, m))
                    }
                    o = r.exec(e)
                }
                return new Date(j, m, h)
            }(e) : "number" === typeof e ? isNaN(e) ? g : h(e) : new Date(e.getTime())) && "Invalid Date" === e.toString() ? g : e, e = b)
                e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0);
            return this._daylightSavingAdjust(e)
        }, _daylightSavingAdjust: function(a) {
            if (!a)
                return null;
            a.setHours(12 < a.getHours() ? a.getHours() + 2 : 0);
            return a
        }, _setDate: function(a,
        e, g) {
            var h=!e, j = a.selectedMonth, m = a.selectedYear, e = this._restrictMinMax(a, this._determineDate(a, e, new Date));
            a.selectedDay = a.currentDay = e.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = e.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = e.getFullYear();
            (j !== a.selectedMonth || m !== a.selectedYear)&&!g && this._notifyChange(a);
            this._adjustInstDate(a);
            a.input && a.input.val(h ? "" : this._formatDate(a))
        }, _getDate: function(a) {
            return !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear,
            a.currentMonth, a.currentDay))
        }, _attachHandlers: function(c) {
            var e = this._get(c, "stepMonths"), g = "#" + c.id.replace(/\\\\/g, "\\");
            c.dpDiv.find("[data-handler]").map(function() {
                a(this).bind(this.getAttribute("data-event"), {
                    prev: function() {
                        a.datepicker._adjustDate(g, - e, "M")
                    },
                    next: function() {
                        a.datepicker._adjustDate(g, + e, "M")
                    },
                    hide: function() {
                        a.datepicker._hideDatepicker()
                    },
                    today: function() {
                        a.datepicker._gotoToday(g)
                    },
                    selectDay: function() {
                        a.datepicker._selectDay(g, + this.getAttribute("data-month"), + this.getAttribute("data-year"),
                        this);
                        return !1
                    },
                    selectMonth: function() {
                        a.datepicker._selectMonthYear(g, this, "M");
                        return !1
                    },
                    selectYear: function() {
                        a.datepicker._selectMonthYear(g, this, "Y");
                        return !1
                    }
                }
                [this.getAttribute("data-handler")])
            })
        }, _generateHTML: function(a) {
            var e, g, h, j, m, n, r, s, x, o, M, N, v, w, A, y, P, T, D, z, O, J, ba, Y, U, G, ca, I = new Date, I = this._daylightSavingAdjust(new Date(I.getFullYear(), I.getMonth(), I.getDate())), V = this._get(a, "isRTL");
            n = this._get(a, "showButtonPanel");
            h = this._get(a, "hideIfNoPrevNext");
            m = this._get(a, "navigationAsDateFormat");
            var da = this._getNumberOfMonths(a), B = this._get(a, "showCurrentAtPos");
            j = this._get(a, "stepMonths");
            var R = 1 !== da[0] || 1 !== da[1], la = this._daylightSavingAdjust(!a.currentDay ? new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay)), ma = this._getMinMaxDate(a, "min"), ea = this._getMinMaxDate(a, "max"), B = a.drawMonth - B, W = a.drawYear;
            0 > B && (B += 12, W--);
            if (ea) {
                e = this._daylightSavingAdjust(new Date(ea.getFullYear(), ea.getMonth() - da[0] * da[1] + 1, ea.getDate()));
                for (e = ma && e < ma ? ma : e; this._daylightSavingAdjust(new Date(W,
                B, 1)) > e;)
                    B--, 0 > B && (B = 11, W--)
            }
            a.drawMonth = B;
            a.drawYear = W;
            e = this._get(a, "prevText");
            e=!m ? e : this.formatDate(e, this._daylightSavingAdjust(new Date(W, B - j, 1)), this._getFormatConfig(a));
            e = this._canAdjustMonth(a, -1, W, B) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (V ? "e" : "w") + "'>" + e + "</span></a>" : h ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" +
            (V ? "e" : "w") + "'>" + e + "</span></a>";
            g = this._get(a, "nextText");
            g=!m ? g : this.formatDate(g, this._daylightSavingAdjust(new Date(W, B + j, 1)), this._getFormatConfig(a));
            h = this._canAdjustMonth(a, 1, W, B) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + g + "'><span class='ui-icon ui-icon-circle-triangle-" + (V ? "w" : "e") + "'>" + g + "</span></a>" : h ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + g + "'><span class='ui-icon ui-icon-circle-triangle-" + (V ? "w" :
            "e") + "'>" + g + "</span></a>";
            j = this._get(a, "currentText");
            g = this._get(a, "gotoCurrent") && a.currentDay ? la : I;
            j=!m ? j : this.formatDate(j, g, this._getFormatConfig(a));
            m=!a.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>" : "";
            n = n ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (V ? m : "") + (this._isInRange(a, g) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
            j + "</button>" : "") + (V ? "" : m) + "</div>" : "";
            m = parseInt(this._get(a, "firstDay"), 10);
            m = isNaN(m) ? 0 : m;
            j = this._get(a, "showWeek");
            g = this._get(a, "dayNames");
            r = this._get(a, "dayNamesMin");
            s = this._get(a, "monthNames");
            x = this._get(a, "monthNamesShort");
            o = this._get(a, "beforeShowDay");
            M = this._get(a, "showOtherMonths");
            N = this._get(a, "selectOtherMonths");
            v = this._getDefaultDate(a);
            w = "";
            for (y = 0; y < da[0]; y++) {
                P = "";
                this.maxRows = 4;
                for (T = 0; T < da[1]; T++) {
                    D = this._daylightSavingAdjust(new Date(W, B, a.selectedDay));
                    A = " ui-corner-all";
                    z = "";
                    if (R) {
                        z += "<div class='ui-datepicker-group";
                        if (1 < da[1])
                            switch (T) {
                            case 0:
                                z += " ui-datepicker-group-first";
                                A = " ui-corner-" + (V ? "right" : "left");
                                break;
                            case da[1]-1:
                                z += " ui-datepicker-group-last";
                                A = " ui-corner-" + (V ? "left" : "right");
                                break;
                            default:
                                z += " ui-datepicker-group-middle", A = ""
                            }
                        z += "'>"
                    }
                    z += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === y ? V ? h : e : "") + (/all|right/.test(A) && 0 === y ? V ? e : h : "") + this._generateMonthYearHeader(a, B, W, ma, ea, 0 < y || 0 < T, s, x) + "</div><table class='ui-datepicker-calendar'><thead><tr>";
                    O = j ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "";
                    for (A = 0; 7 > A; A++)
                        J = (A + m)%7, O += "<th" + (5 <= (A + m + 6)%7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + g[J] + "'>" + r[J] + "</span></th>";
                    z += O + "</tr></thead><tbody>";
                    O = this._getDaysInMonth(W, B);
                    if (W === a.selectedYear && B === a.selectedMonth)
                        a.selectedDay = Math.min(a.selectedDay, O);
                    A = (this._getFirstDayOfMonth(W, B) - m + 7)%7;
                    O = Math.ceil((A + O) / 7);
                    this.maxRows = O = R ? this.maxRows > O ? this.maxRows : O : O;
                    J = this._daylightSavingAdjust(new Date(W,
                    B, 1 - A));
                    for (ba = 0; ba < O; ba++) {
                        z += "<tr>";
                        Y=!j ? "" : "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(J) + "</td>";
                        for (A = 0; 7 > A; A++)
                            U = o ? o.apply(a.input ? a.input[0] : null, [J]) : [!0, ""], ca = (G = J.getMonth() !== B)&&!N ||!U[0] || ma && J < ma || ea && J > ea, Y += "<td class='" + (5 <= (A + m + 6)%7 ? " ui-datepicker-week-end" : "") + (G ? " ui-datepicker-other-month" : "") + (J.getTime() === D.getTime() && B === a.selectedMonth && a._keyEvent || v.getTime() === J.getTime() && v.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (ca ? " " + this._unselectableClass +
                        " ui-state-disabled" : "") + (G&&!M ? "" : " " + U[1] + (J.getTime() === la.getTime() ? " " + this._currentClass : "") + (J.getTime() === I.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!G || M) && U[2] ? " title='" + U[2].replace(/'/g, "&#39;") + "'" : "") + (ca ? "" : " data-handler='selectDay' data-event='click' data-month='" + J.getMonth() + "' data-year='" + J.getFullYear() + "'") + ">" + (G&&!M ? "&#xa0;" : ca ? "<span class='ui-state-default'>" + J.getDate() + "</span>" : "<a class='ui-state-default" + (J.getTime() === I.getTime() ? " ui-state-highlight" : "") + (J.getTime() ===
                        la.getTime() ? " ui-state-active" : "") + (G ? " ui-priority-secondary" : "") + "' href='#'>" + J.getDate() + "</a>") + "</td>", J.setDate(J.getDate() + 1), J = this._daylightSavingAdjust(J);
                        z += Y + "</tr>"
                    }
                    B++;
                    11 < B && (B = 0, W++);
                    z += "</tbody></table>" + (R ? "</div>" + (0 < da[0] && T === da[1]-1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    P += z
                }
                w += P
            }
            a._keyEvent=!1;
            return w + n
        }, _generateMonthYearHeader: function(a, e, g, h, j, m, n, r) {
            var s, x, o, M = this._get(a, "changeMonth"), N = this._get(a, "changeYear"), v = this._get(a, "showMonthAfterYear"),
            w = "<div class='ui-datepicker-title'>", A = "";
            if (m ||!M)
                A += "<span class='ui-datepicker-month'>" + n[e] + "</span>";
            else {
                n = h && h.getFullYear() === g;
                s = j && j.getFullYear() === g;
                A += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (x = 0; 12 > x; x++)
                    if ((!n || x >= h.getMonth()) && (!s || x <= j.getMonth()))
                        A += "<option value='" + x + "'" + (x === e ? " selected='selected'" : "") + ">" + r[x] + "</option>";
                A += "</select>"
            }
            v || (w += A + (m ||!M ||!N ? "&#xa0;" : ""));
            if (!a.yearshtml)
                if (a.yearshtml = "", m ||!N)
                    w += "<span class='ui-datepicker-year'>" +
                    g + "</span>";
                else {
                    r = this._get(a, "yearRange").split(":");
                    o = (new Date).getFullYear();
                    n = function(a) {
                        a = a.match(/c[+\-].*/) ? g + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? o + parseInt(a, 10) : parseInt(a, 10);
                        return isNaN(a) ? o : a
                    };
                    e = n(r[0]);
                    r = Math.max(e, n(r[1] || ""));
                    e = h ? Math.max(e, h.getFullYear()) : e;
                    r = j ? Math.min(r, j.getFullYear()) : r;
                    for (a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; e <= r; e++)
                        a.yearshtml += "<option value='" + e + "'" + (e === g ? " selected='selected'" :
                        "") + ">" + e + "</option>";
                        a.yearshtml += "</select>";
                        w += a.yearshtml;
                        a.yearshtml = null
                }
            w += this._get(a, "yearSuffix");
            v && (w += (m ||!M ||!N ? "&#xa0;" : "") + A);
            return w + "</div>"
        }, _adjustInstDate: function(a, e, g) {
            var h = a.drawYear + ("Y" === g ? e : 0), j = a.drawMonth + ("M" === g ? e : 0), e = Math.min(a.selectedDay, this._getDaysInMonth(h, j)) + ("D" === g ? e : 0), h = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(h, j, e)));
            a.selectedDay = h.getDate();
            a.drawMonth = a.selectedMonth = h.getMonth();
            a.drawYear = a.selectedYear = h.getFullYear();
            ("M" ===
            g || "Y" === g) && this._notifyChange(a)
        }, _restrictMinMax: function(a, e) {
            var g = this._getMinMaxDate(a, "min"), h = this._getMinMaxDate(a, "max"), g = g && e < g ? g: e;
            return h && g > h ? h : g
        }, _notifyChange: function(a) {
            var e = this._get(a, "onChangeMonthYear");
            e && e.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        }, _getNumberOfMonths: function(a) {
            a = this._get(a, "numberOfMonths");
            return null == a ? [1, 1] : "number" === typeof a ? [1, a] : a
        }, _getMinMaxDate: function(a, e) {
            return this._determineDate(a, this._get(a, e + "Date"), null)
        },
        _getDaysInMonth: function(a, e) {
            return 32 - this._daylightSavingAdjust(new Date(a, e, 32)).getDate()
        }, _getFirstDayOfMonth: function(a, e) {
            return (new Date(a, e, 1)).getDay()
        }, _canAdjustMonth: function(a, e, g, h) {
            var j = this._getNumberOfMonths(a), g = this._daylightSavingAdjust(new Date(g, h + (0 > e ? e : j[0] * j[1]), 1));
            0 > e && g.setDate(this._getDaysInMonth(g.getFullYear(), g.getMonth()));
            return this._isInRange(a, g)
        }, _isInRange: function(a, e) {
            var g, h, j = this._getMinMaxDate(a, "min"), m = this._getMinMaxDate(a, "max"), n = null, r = null;
            if (g =
            this._get(a, "yearRange"))
                g = g.split(":"), h = (new Date).getFullYear(), n = parseInt(g[0], 10), r = parseInt(g[1], 10), g[0].match(/[+\-].*/) && (n += h), g[1].match(/[+\-].*/) && (r += h);
            return (!j || e.getTime() >= j.getTime()) && (!m || e.getTime() <= m.getTime()) && (!n || e.getFullYear() >= n) && (!r || e.getFullYear() <= r)
        }, _getFormatConfig: function(a) {
            var e = this._get(a, "shortYearCutoff"), e = "string" !== typeof e ? e: (new Date).getFullYear()%100 + parseInt(e, 10);
            return {
                shortYearCutoff: e,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a,
                "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        }, _formatDate: function(a, e, g, h) {
            if (!e)
                a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear;
            e = e ? "object" === typeof e ? e : this._daylightSavingAdjust(new Date(h, g, e)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
        }
    });
    a.fn.datepicker = function(c) {
        if (!this.length)return this;
        if (!a.datepicker.initialized)a(document).mousedown(a.datepicker._checkExternalClick),
        a.datepicker.initialized=!0;
        0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
        var e = Array.prototype.slice.call(arguments,
        1);
        return "string" === typeof c && ("isDisabled" === c || "getDate" === c || "widget" === c) || "option" === c && 2 === arguments.length && "string" === typeof arguments[1] ? a.datepicker["_" + c + "Datepicker"].apply(a.datepicker,
        [this[0]].concat(e)): this.each(function() {
            "string" === typeof c ? a.datepicker["_" +
            c + "Datepicker"].apply(a.datepicker,
            [this].concat(e)): a.datepicker._attachDatepicker(this,
            c)
        })
    }; a.datepicker = new s; a.datepicker.initialized=!1; a.datepicker.uuid = (new Date).getTime();
    a.datepicker.version = "1.10.3"
})(jQuery);
(function(a, j, s) {
    function m(c, d, e) {
        c = j.createElement(c);
        if (d)
            c.id = o + d;
        if (e)
            c.style.cssText = e;
        return a(c)
    }
    function x() {
        return s.innerHeight ? s.innerHeight : a(s).height()
    }
    function r(a) {
        var c = G.length, a = (Z + a)%c;
        return 0 > a ? c + a : a
    }
    function c(a, c) {
        return Math.round((/%/.test(a) ? ("x" === c ? ca.width() : x()) / 100 : 1) * parseInt(a, 10))
    }
    function e(a) {
        "contains"in D[0]&&!D[0].contains(a.target) && (a.stopPropagation(), D.focus())
    }
    function g() {
        var c, d = a.data(X, aa);
        null == d ? (i = a.extend({}, S), console && console.log && console.log("Error: cboxElement missing settings object")) :
        i = a.extend({}, d);
        for (c in i)
            a.isFunction(i[c]) && "on" !== c.slice(0, 2) && (i[c] = i[c].call(X));
        i.rel = i.rel || X.rel || a(X).data("rel") || "nofollow";
        i.href = i.href || a(X).attr("href");
        i.title = i.title || X.title;
        if ("string" === typeof i.href)
            i.href = a.trim(i.href)
    }
    function h(c, d) {
        a(j).trigger(c);
        pa.triggerHandler(c);
        a.isFunction(d) && d.call(X)
    }
    function k(k) {
        if (!Da) {
            X = k;
            g();
            G = a(X);
            Z = 0;
            "nofollow" !== i.rel && (G = a("." + M).filter(function() {
                var c = a.data(this, aa), d;
                c && (d = a(this).data("rel") || c.rel || this.rel);
                return d === i.rel
            }),
            Z = G.index(X), -1 === Z && (G = G.add(X), Z = G.length-1));
            T.css({
                opacity: parseFloat(i.opacity),
                cursor: i.overlayClose ? "pointer": "auto",
                visibility: "visible"
            }).show();
            wa && D.add(T).removeClass(wa);
            i.className && D.add(T).addClass(i.className);
            wa = i.className;
            i.closeButton ? W.html(i.close).appendTo(O) : W.appendTo("<div/>");
            if (!ha && (ha = va=!0, D.css({
                visibility : "hidden", display : "block"
            }), I = m(d, "LoadedContent", "width:0; height:0; overflow:hidden")
                , O.css({
                width: "",
                height: ""
            }).append(I), qa = J.height() + U.height() + O.outerHeight(!0) -
            O.height(), fa = ba.width() + Y.width() + O.outerWidth(!0) - O.width(), ga = I.outerHeight(!0), na = I.outerWidth(!0), i.w = c(i.initialWidth, "x"), i.h = c(i.initialHeight, "y"), I.css({
                width: "",
                height: i.h
            }), Q.position(), h(N, i.onOpen), ka.add(B).hide(), D.focus(), i.trapFocus && j.addEventListener && (j.addEventListener("focus", e, !0), pa.one(y, function() {
                j.removeEventListener("focus", e, !0)
            })), i.returnFocus))pa.one(y, function() {
                a(X).focus()
            });
            L()
        }
    }
    function F() {
        !D && j.body && (Na=!1, ca = a(s), D = m(d).attr({
            id: aa,
            "class": !1 === a.support.opacity ?
            o + "IE": "",
            role: "dialog",
            tabindex: "-1"
        }).hide(), T = m(d, "Overlay").hide(), da = a([m(d, "LoadingOverlay")[0], m(d, "LoadingGraphic")[0]]), z = m(d, "Wrapper"), O = m(d, "Content").append(B = m(d, "Title"), R = m(d, "Current"), ea = a('<button type="button"/>').attr({
            id: o + "Previous"
        }), ma = a('<button type="button"/>').attr({
            id: o + "Next"
        }), la = m("button", "Slideshow"), da), W = a('<button type="button"/>').attr({
            id: o + "Close"
        }), z.append(m(d).append(m(d, "TopLeft"), J = m(d, "TopCenter"), m(d, "TopRight")), m(d, !1, "clear:left").append(ba = m(d, "MiddleLeft"),
        O, Y = m(d, "MiddleRight")), m(d, !1, "clear:left").append(m(d, "BottomLeft"), U = m(d, "BottomCenter"), m(d, "BottomRight"))).find("div div").css({
            "float": "left"
        }), V = m(d, !1, "position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"), ka = ma.add(ea).add(R).add(la), a(j.body).append(T, D.append(z, V)))
    }
    function n() {
        function c(a) {
            1 < a.which || a.shiftKey || a.altKey || a.metaKey || a.ctrlKey || (a.preventDefault(), k(this))
        }
        if (D) {
            if (!Na)
                if (Na=!0, ma.click(function() {
                    Q.next()
                }), ea.click(function() {
                Q.prev()
            }),
            W.click(function() {
                Q.close()
            }), T.click(function() {
                i.overlayClose && Q.close()
            }), a(j).bind("keydown." + o, function(a) {
                var c = a.keyCode;
                ha && i.escKey && 27 === c && (a.preventDefault(), Q.close());
                ha && i.arrowKey && G[1]&&!a.altKey && (37 === c ? (a.preventDefault(), ea.click()) : 39 === c && (a.preventDefault(), ma.click()))
            }), a.isFunction(a.fn.on))a(j).on("click." + o, "." + M, c);
            else 
                a("." + M).live("click." + o, c);
            return !0
        }
        return !1
    }
    function L() {
        var e, k, n = Q.prep, r, x=++ia;
        va=!0;
        H=!1;
        X = G[Z];
        g();
        h(P);
        h(v, i.onLoad);
        i.h = i.height ? c(i.height,
        "y") - ga - qa : i.innerHeight && c(i.innerHeight, "y");
        i.w = i.width ? c(i.width, "x") - na - fa : i.innerWidth && c(i.innerWidth, "x");
        i.mw = i.w;
        i.mh = i.h;
        if (i.maxWidth)
            i.mw = c(i.maxWidth, "x") - na - fa, i.mw = i.w && i.w < i.mw ? i.w : i.mw;
        if (i.maxHeight)
            i.mh = c(i.maxHeight, "y") - ga - qa, i.mh = i.h && i.h < i.mh ? i.h : i.mh;
        e = i.href;
        sa = setTimeout(function() {
            da.show()
        }, 100);
        i.inline ? (r = m(d).hide().insertBefore(a(e)[0]), pa.one(P, function() {
            r.replaceWith(I.children())
        }), n(a(e))) : i.iframe ? n(" ") : i.html ? n(i.html) : i.photo || i.photoRegex.test(e) ? (e = i.retinaUrl &&
        1 < s.devicePixelRatio ? e.replace(i.photoRegex, i.retinaSuffix) : e, H = j.createElement("img"), a(H).addClass(o + "Photo").bind("error", function() {
            i.title=!1;
            n(m(d, "Error").html(i.imgError))
        }).one("load", function() {
            var c;
            if (x === ia) {
                a.each(["alt", "longdesc", "aria-describedby"], function(c, d) {
                    var e = a(X).attr(d) || a(X).attr("data-" + d);
                    e && H.setAttribute(d, e)
                });
                i.retinaImage && 1 < s.devicePixelRatio && (H.height/=s.devicePixelRatio, H.width/=s.devicePixelRatio);
                i.scalePhotos && (k = function() {
                    H.height -= H.height * c;
                    H.width -=
                    H.width * c
                }, i.mw && H.width > i.mw && (c = (H.width - i.mw) / H.width, k()), i.mh && H.height > i.mh && (c = (H.height - i.mh) / H.height, k()));
                if (i.h)H.style.marginTop = Math.max(i.mh - H.height, 0) / 2 + "px";
                if (G[1] && (i.loop || G[Z + 1]))H.style.cursor = "pointer", H.onclick = function() {
                    Q.next()
                };
                H.style.width = H.width + "px";
                H.style.height = H.height + "px";
                setTimeout(function() {
                    n(H)
                }, 1)
            }
        }), setTimeout(function() {
            H.src = e
        }, 1)) : e && V.load(e, i.data, function(c, e) {
            x === ia && n("error" === e ? m(d, "Error").html(i.xhrError) : a(this).contents())
        })
    }
    var S = {
        html: !1,
        photo: !1,
        iframe: !1,
        inline: !1,
        transition: "elastic",
        speed: 300,
        fadeOut: 300,
        width: !1,
        initialWidth: "600",
        innerWidth: !1,
        maxWidth: !1,
        height: !1,
        initialHeight: "450",
        innerHeight: !1,
        maxHeight: !1,
        scalePhotos: !0,
        scrolling: !0,
        href: !1,
        title: !1,
        rel: !1,
        opacity: 0.9,
        preloading: !0,
        className: !1,
        overlayClose: !0,
        escKey: !0,
        arrowKey: !0,
        top: !1,
        bottom: !1,
        left: !1,
        right: !1,
        fixed: !1,
        data: void 0,
        closeButton: !0,
        fastIframe: !0,
        open: !1,
        reposition: !0,
        loop: !0,
        slideshow: !1,
        slideshowAuto: !0,
        slideshowSpeed: 2500,
        slideshowStart: "start slideshow",
        slideshowStop: "stop slideshow",
        photoRegex: /\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,
        retinaImage: !1,
        retinaUrl: !1,
        retinaSuffix: "@2x.$1",
        current: "image {current} of {total}",
        previous: "previous",
        next: "next",
        close: "close",
        xhrError: "This content failed to load.",
        imgError: "This image failed to load.",
        returnFocus: !0,
        trapFocus: !0,
        onOpen: !1,
        onLoad: !1,
        onComplete: !1,
        onCleanup: !1,
        onClosed: !1
    }, aa = "colorbox", o = "cbox", M = o + "Element", N = o + "_open", v = o + "_load", w = o + "_complete", A = o + "_cleanup", y = o + "_closed", P = o +
    "_purge", T, D, z, O, J, ba, Y, U, G, ca, I, V, da, B, R, la, ma, ea, W, ka, pa = a("<a/>"), i, qa, fa, ga, na, X, Z, H, ha, va, Da, sa, Q, d = "div", wa, ia = 0, Ua = {}, Na, Va = function() {
        function a() {
            clearTimeout(m)
        }
        function c() {
            if (i.loop || G[Z + 1])
                a(), m = setTimeout(Q.next, i.slideshowSpeed)
        }
        function d() {
            la.html(i.slideshowStop).unbind(k).one(k, e);
            pa.bind(w, c).bind(v, a);
            D.removeClass(j + "off").addClass(j + "on")
        }
        function e() {
            a();
            pa.unbind(w, c).unbind(v, a);
            la.html(i.slideshowStart).unbind(k).one(k, function() {
                Q.next();
                d()
            });
            D.removeClass(j + "on").addClass(j +
            "off")
        }
        function g() {
            h=!1;
            la.hide();
            a();
            pa.unbind(w, c).unbind(v, a);
            D.removeClass(j + "off " + j + "on")
        }
        var h, j = o + "Slideshow_", k = "click." + o, m;
        return function() {
            h ? i.slideshow || (pa.unbind(A, g), g()) : i.slideshow && G[1] && (h=!0, pa.one(A, g), i.slideshowAuto ? d() : e(), la.show())
        }
    }();
    if (!a.colorbox)
        a(F), Q = a.fn[aa] = a[aa] = function(c, d) {
        var e = this, c = c || {};
        F();
        if (n()) {
            if (a.isFunction(e))
                e = a("<a/>"), c.open=!0;
            else if (!e[0])
                return e;
            if (d)
                c.onComplete = d;
            e.each(function() {
                a.data(this, aa, a.extend({}, a.data(this, aa) || S, c))
            }).addClass(M);
            (a.isFunction(c.open) && c.open.call(e) || c.open) && k(e[0])
        }
        return e
    }, Q.position = function(d, e) {
        function g() {
            J[0].style.width = U[0].style.width = O[0].style.width = parseInt(D[0].style.width, 10) - fa + "px";
            O[0].style.height = ba[0].style.height = Y[0].style.height = parseInt(D[0].style.height, 10) - qa + "px"
        }
        var h, j = 0, k = 0, m = D.offset(), n, r;
        ca.unbind("resize." + o);
        D.css({
            top: -9E4,
            left: -9E4
        });
        n = ca.scrollTop();
        r = ca.scrollLeft();
        i.fixed ? (m.top -= n, m.left -= r, D.css({
            position : "fixed"
        })) : (j = n, k = r, D.css({
            position : "absolute"
        }));
        k=!1 !==
        i.right ? k + Math.max(ca.width() - i.w - na - fa - c(i.right, "x"), 0) : !1 !== i.left ? k + c(i.left, "x") : k + Math.round(Math.max(ca.width() - i.w - na - fa, 0) / 2);
        j=!1 !== i.bottom ? j + Math.max(x() - i.h - ga - qa - c(i.bottom, "y"), 0) : !1 !== i.top ? j + c(i.top, "y") : j + Math.round(Math.max(x() - i.h - ga - qa, 0) / 2);
        D.css({
            top: m.top,
            left: m.left,
            visibility: "visible"
        });
        z[0].style.width = z[0].style.height = "9999px";
        h = {
            width: i.w + na + fa,
            height: i.h + ga + qa,
            top: j,
            left: k
        };
        if (d) {
            var s = 0;
            a.each(h, function(a) {
                h[a] !== Ua[a] && (s = d)
            });
            d = s
        }
        Ua = h;
        d || D.css(h);
        D.dequeue().animate(h,
        {
            duration: d || 0,
            complete: function() {
                g();
                va=!1;
                z[0].style.width = i.w + na + fa + "px";
                z[0].style.height = i.h + ga + qa + "px";
                i.reposition && setTimeout(function() {
                    ca.bind("resize." + o, Q.position)
                }, 1);
                e && e()
            },
            step: g
        })
    }, Q.resize = function(a) {
        var d;
        if (ha) {
            a = a || {};
            if (a.width)
                i.w = c(a.width, "x") - na - fa;
            if (a.innerWidth)
                i.w = c(a.innerWidth, "x");
            I.css({
                width: i.w
            });
            if (a.height)
                i.h = c(a.height, "y") - ga - qa;
            if (a.innerHeight)
                i.h = c(a.innerHeight, "y");
            if (!a.innerHeight&&!a.height)
                d = I.scrollTop(), I.css({
                height: "auto"
            }), i.h = I.height();
            I.css({
                height: i.h
            });
            d && I.scrollTop(d);
            Q.position("none" === i.transition ? 0 : i.speed)
        }
    }, Q.prep = function(c) {
        if (ha) {
            var e, g = "none" === i.transition ? 0: i.speed;
            I.empty().remove();
            I = m(d, "LoadedContent").append(c);
            I.hide().appendTo(V.show()).css({
                width: function() {
                    i.w = i.w || I.width();
                    i.w = i.mw && i.mw < i.w ? i.mw : i.w;
                    return i.w
                }(),
                overflow: i.scrolling ? "auto": "hidden"
            }).css({
                height: function() {
                    i.h = i.h || I.height();
                    i.h = i.mh && i.mh < i.h ? i.mh : i.h;
                    return i.h
                }()
            }).prependTo(O);
            V.hide();
            a(H).css({
                "float": "none"
            });
            e = function() {
                function c() {
                    !1 === a.support.opacity &&
                    D[0].style.removeAttribute("filter")
                }
                var d = G.length, e, k;
                if (ha) {
                    k = function() {
                        clearTimeout(sa);
                        da.hide();
                        h(w, i.onComplete)
                    };
                    B.html(i.title).add(I).show();
                    1 < d ? ("string" === typeof i.current && R.html(i.current.replace("{current}", Z + 1).replace("{total}", d)).show(), ma[i.loop || Z < d-1 ? "show" : "hide"]().html(i.next), ea[i.loop || Z ? "show" : "hide"]().html(i.previous), Va(), i.preloading && a.each([r(-1), r(1)], function() {
                        var c, d;
                        d = G[this];
                        var e = a.data(d, aa);
                        e && e.href ? (c = e.href, a.isFunction(c) && (c = c.call(d))) : c = a(d).attr("href");
                        if (c && (e.photo || e.photoRegex.test(c)))
                            c = e.retinaUrl && 1 < s.devicePixelRatio ? c.replace(e.photoRegex, e.retinaSuffix) : c, d = j.createElement("img"), d.src = c
                    })) : ka.hide();
                    if (i.iframe) {
                        e = m("iframe")[0];
                        "frameBorder"in e && (e.frameBorder = 0);
                        "allowTransparency"in e && (e.allowTransparency = "true");
                        if (!i.scrolling)
                            e.scrolling = "no";
                        a(e).attr({
                            src: i.href,
                            name: (new Date).getTime(),
                            "class": o + "Iframe",
                            allowFullScreen: !0,
                            webkitAllowFullScreen: !0,
                            mozallowfullscreen: !0
                        }).one("load", k).appendTo(I);
                        pa.one(P, function() {
                            e.src =
                            "//about:blank"
                        });
                        i.fastIframe && a(e).trigger("load")
                    } else 
                        k();
                    "fade" === i.transition ? D.fadeTo(g, 1, c) : c()
                }
            };
            "fade" === i.transition ? D.fadeTo(g, 0, function() {
                Q.position(0, e)
            }) : Q.position(g, e)
        }
    }, Q.next = function() {
        if (!va && G[1] && (i.loop || G[Z + 1]))
            Z = r(1), k(G[Z])
    }, Q.prev = function() {
        if (!va && G[1] && (i.loop || Z))
            Z = r(-1), k(G[Z])
    }, Q.close = function() {
        ha&&!Da && (Da=!0, ha=!1, h(A, i.onCleanup), ca.unbind("." + o), T.fadeTo(i.fadeOut || 0, 0), D.stop().fadeTo(i.fadeOut || 0, 0, function() {
            D.add(T).css({
                opacity: 1,
                cursor: "auto"
            }).hide();
            h(P);
            I.empty().remove();
            setTimeout(function() {
                Da=!1;
                h(y, i.onClosed)
            }, 1)
        }))
    }, Q.remove = function() {
        D && (D.stop(), a.colorbox.close(), D.stop().remove(), T.remove(), Da=!1, D = null, a("." + M).removeData(aa).removeClass(M), a(j).unbind("click." + o))
    }, Q.element = function() {
        return a(X)
    }, Q.settings = S
})(jQuery, document, window);
(function(a) {
    function j(a, c) {
        var e = decodeURIComponent(a);
        if (e.length <= c)
            return a;
        var g = e.substring(0, c-1).lastIndexOf(" ");
        return e = encodeURIComponent(e.substring(0, g)) + "\u2026"
    }
    function s(j) {
        return a('meta[name="' + j + '"]').attr("content") || ""
    }
    function m() {
        var j = s("DC.title"), c = s("DC.creator"), j = 0 < j.length && 0 < c.length ? j + (" - " + c): a("title").text();
        return encodeURIComponent(j)
    }
    function x() {
        var j = document.location.href, c = a("link[rel=canonical]").attr("href");
        c && 0 < c.length && (0 > c.indexOf("http") && (c = document.location.protocol +
        "//" + document.location.host + c), j = c);
        return j
    }
    a.fn.socialSharePrivacy = function(r) {
        function c() {
            var c = a.Deferred();
            a.getJSON(e.lang_path + e.language + ".lang", function(a) {
                n = a;
                c.resolve()
            }).fail(function(a) {
                "undefined" !== typeof console && console.log("Error " + a.status + " while loading the language file (" + e.lang_path + e.language + ".lang)");
                c.reject()
            });
            return c.promise()
        }
        var e = a.extend(!0, {
            services: {
                facebook: {
                    status: "on",
                    dummy_img: "socialshareprivacy/images/dummy_facebook.png",
                    perma_option: "on",
                    referrer_track: "",
                    action: "recommend",
                    layout: "button_count",
                    sharer: {
                        status: "off",
                        dummy_img: "socialshareprivacy/images/dummy_facebook_share_de.png",
                        img: "socialshareprivacy/images/dummy_facebook_share_active_de.png"
                    }
                },
                twitter: {
                    status: "on",
                    dummy_img: "socialshareprivacy/images/dummy_twitter.png",
                    perma_option: "on",
                    referrer_track: "",
                    tweet_text: m,
                    count: "horizontal"
                },
                gplus: {
                    status: "on",
                    dummy_img: "socialshareprivacy/images/dummy_gplus.png",
                    perma_option: "on",
                    referrer_track: "",
                    size: "medium"
                }
            },
            info_link: "http://www.heise.de/ct/artikel/2-Klicks-fuer-mehr-Datenschutz-1333879.html",
            cookie_path: "/",
            cookie_domain: document.location.host,
            cookie_expires: "365",
            css_path: "socialshareprivacy/socialshareprivacy.css",
            uri: x,
            language: "de",
            lang_path: "socialshareprivacy/lang/",
            skin: "light",
            alignment: "horizontal",
            switch_alignment: "left"
        }, r), g = "on" === e.services.facebook.status, h = "on" === e.services.facebook.sharer.status, k = "on" === e.services.twitter.status, s = "on" === e.services.gplus.status;
        if (g || k || s) {
            0 < e.css_path.length && "1" != a(window).data("socialshareprivacy_css") && (document.createStyleSheet ?
            document.createStyleSheet(e.css_path) : a("head").append('<link rel="stylesheet" type="text/css" href="' + e.css_path + '" />'), a(window).data("socialshareprivacy_css", "1"));
            var n;
            return this.each(function() {
                var m = this;
                a.when(c()).then(function() {
                    a(m).prepend('<ul class="social_share_privacy_area clearfix"></ul>');
                    var c = a(".social_share_privacy_area", m);
                    "dark" == e.skin && a(c).addClass("skin-dark");
                    "vertical" == e.alignment && (a(c).addClass("vertical"), "right" == e.switch_alignment && (g && "box_count" == e.services.facebook.layout ||
                    !g) && (k && "vertical" == e.services.twitter.count ||!k) && (s && "tall" == e.services.gplus.size ||!s) && a(c).addClass("switch_right"));
                    var r = e.uri;
                    "function" === typeof r && (r = r(c));
                    if (g) {
                        var o, x, N = "box_count" == e.services.facebook.layout ? "61": "21", v = "box_count" == e.services.facebook.layout ? "90": "130", w = encodeURIComponent(r + e.services.facebook.referrer_track);
                        h ? (o = '<img src="' + e.services.facebook.sharer.dummy_img + '" alt="Facebook &quot;Share&quot;-Dummy" class="fb_like_privacy_dummy" />', x = '<a href="#" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=' +
                        w + "', '', 'width=626,height=436'); return false;\"><img src=\"" + e.services.facebook.sharer.img + '" alt="" /></a>') : (o = '<img src="' + e.services.facebook.dummy_img + '" alt="Facebook &quot;Like&quot;-Dummy" class="fb_like_privacy_dummy" />', x = '<iframe src="//www.facebook.com/plugins/like.php?locale=' + n.services.facebook.language + "&amp;href=" + w + "&amp;width=" + v + "&amp;layout=" + e.services.facebook.layout + "&amp;action=" + e.services.facebook.action + "&amp;show_faces=false&amp;share=false&amp;height=" + N + "&amp;colorscheme=" +
                        e.skin + '" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:' + v + "px; height:" + N + 'px;" allowTransparency="true"></iframe>');
                        c.append('<li class="facebook help_info clearfix"><span class="info">' + n.services.facebook.txt_info + '</span><a href="#" class="switch off">' + n.services.facebook.txt_fb_off + '</a><div class="fb_like dummy_btn">' + o + "</div></li>");
                        var A = a("li.facebook", c);
                        a(c).on("click", "li.facebook div.fb_like img.fb_like_privacy_dummy,li.facebook .switch", function(a) {
                            a.preventDefault();
                            A.find(".switch").hasClass("off") ? (A.addClass("info_off"), A.find(".switch").addClass("on").removeClass("off").html(n.services.facebook.txt_fb_on), A.find("img.fb_like_privacy_dummy").replaceWith(x)) : (A.removeClass("info_off"), A.find(".switch").addClass("off").removeClass("on").html(n.services.facebook.txt_fb_off), A.find(".fb_like").html(o))
                        })
                    }
                    if (k) {
                        N = e.services.twitter.tweet_text;
                        "function" === typeof N && (N = N());
                        var N = j(N, "120"), v = "horizontal" == e.services.twitter.count ? "25": "62", w = "horizontal" == e.services.twitter.count ?
                        "130": "83", y = encodeURIComponent(r + e.services.twitter.referrer_track), P = encodeURIComponent(r), T = '<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/tweet_button.html?url=' + y + "&amp;counturl=" + P + "&amp;text=" + N + "&amp;count=" + e.services.twitter.count + "&amp;lang=" + n.services.twitter.language + '&amp;dnt=true" style="width:' + w + "px; height:" + v + 'px;"></iframe>', D = '<img src="' + e.services.twitter.dummy_img + '" alt="&quot;Tweet this&quot;-Dummy" class="tweet_this_dummy" />';
                        c.append('<li class="twitter help_info clearfix"><span class="info">' + n.services.twitter.txt_info + '</span><a href="#" class="switch off">' + n.services.twitter.txt_twitter_off + '</a><div class="tweet dummy_btn">' + D + "</div></li>");
                        var z = a("li.twitter", c);
                        a(c).on("click", "li.twitter div.tweet img,li.twitter .switch", function(a) {
                            a.preventDefault();
                            z.find(".switch").hasClass("off") ? (z.addClass("info_off"), z.find(".switch").addClass("on").removeClass("off").html(n.services.twitter.txt_twitter_on), z.find("img.tweet_this_dummy").replaceWith(T)) :
                            (z.removeClass("info_off"), z.find(".switch").addClass("off").removeClass("on").html(n.services.twitter.txt_twitter_off), z.find(".tweet").html(D))
                        })
                    }
                    if (s) {
                        var O = '<div class="g-plusone" data-size="' + e.services.gplus.size + '" data-href="' + (r + e.services.gplus.referrer_track) + '"></div><script type="text/javascript">window.___gcfg = {lang: "' + n.services.gplus.language + '"}; (function() { var po = document.createElement("script"); po.type = "text/javascript"; po.async = true; po.src = "https://apis.google.com/js/platform.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s); })(); <\/script>',
                        J = '<img src="' + e.services.gplus.dummy_img + '" alt="&quot;Google+1&quot;-Dummy" class="gplus_one_dummy" />';
                        c.append('<li class="gplus help_info clearfix"><span class="info">' + n.services.gplus.txt_info + '</span><a href="#" class="switch off">' + n.services.gplus.txt_gplus_off + '</a><div class="gplusone dummy_btn">' + J + "</div></li>");
                        var ba = a("li.gplus", c);
                        a(c).on("click", "li.gplus div.gplusone img,li.gplus .switch", function(a) {
                            a.preventDefault();
                            ba.find(".switch").hasClass("off") ? (ba.addClass("info_off"),
                            ba.find(".switch").addClass("on").removeClass("off").html(n.services.gplus.txt_gplus_on), ba.find("img.gplus_one_dummy").replaceWith(O)) : (ba.removeClass("info_off"), ba.find(".switch").addClass("off").removeClass("on").html(n.services.gplus.txt_gplus_off), ba.find(".gplusone").html(J))
                        })
                    }
                    c.append('<li class="settings_info"><div class="settings_info_menu off perma_option_off"><a href="' + e.info_link + '"><span class="help_info icon"><span class="info">' + n.txt_help + "</span></span></a></div></li>");
                    a(c).on("mouseenter",
                    ".help_info:not(.info_off)", function() {
                        var c = a(this), e = window.setTimeout(function() {
                            a(c).addClass("display")
                        }, 500);
                        a(this).data("timeout_id", e)
                    });
                    a(c).on("mouseleave", ".help_info", function() {
                        var c = a(this).data("timeout_id");
                        window.clearTimeout(c);
                        a(this).hasClass("display") && a(this).removeClass("display")
                    });
                    r = "on" === e.services.facebook.perma_option;
                    N = "on" === e.services.twitter.perma_option;
                    v = "on" === e.services.gplus.perma_option;
                    if (g && r || k && N || s && v) {
                        y = document.cookie.split(";");
                        w = "{";
                        for (P = 0; P < y.length; P +=
                        1) {
                            var Y = y[P].split("=");
                            Y[0] = a.trim(Y[0].replace(/"/g, ""));
                            Y[1] = a.trim(Y[1].replace(/"/g, ""));
                            w += '"' + Y[0] + '":"' + Y[1] + '"';
                            P < y.length-1 && (w += ",")
                        }
                        var w = jQuery.parseJSON(w + "}"), U = a("li.settings_info", c);
                        U.find(".settings_info_menu").removeClass("perma_option_off");
                        U.find(".settings_info_menu").append('<a href="#" class="settings">' + n.settings + "</a><form><fieldset><legend>" + n.settings_perma + "</legend></fieldset></form>");
                        y = "r" + Math.floor(101 * Math.random());
                        g && r && (P = "perma_on" === w.socialSharePrivacy_facebook ?
                        ' checked="checked"' : "", U.find("form fieldset").append('<input type="checkbox" name="perma_status_facebook" id="' + y + '_perma_status_facebook"' + P + ' /><label for="' + y + '_perma_status_facebook">' + n.services.facebook.perma_display_name + "</label>"));
                        k && N && (P = "perma_on" === w.socialSharePrivacy_twitter ? ' checked="checked"' : "", U.find("form fieldset").append('<input type="checkbox" name="perma_status_twitter" id="' + y + '_perma_status_twitter"' + P + ' /><label for="' + y + '_perma_status_twitter">' + n.services.twitter.perma_display_name +
                        "</label>"));
                        s && v && (P = "perma_on" === w.socialSharePrivacy_gplus ? ' checked="checked"' : "", U.find("form fieldset").append('<input type="checkbox" name="perma_status_gplus" id="' + y + '_perma_status_gplus"' + P + ' /><label for="' + y + '_perma_status_gplus">' + n.services.gplus.perma_display_name + "</label>"));
                        a(c).on("click", "li.settings_info .settings", function(e) {
                            e.preventDefault();
                            "on" == a(this).data("keyb") ? (a("li.settings_info", c).trigger("mouseleave"), a(this).data("keyb", "off")) : (a("li.settings_info .settings",
                            c).trigger("mouseenter"), a(this).data("keyb", "on"))
                        });
                        a(c).on("mouseenter", "li.settings_info .settings", function() {
                            var c = window.setTimeout(function() {
                                U.find(".settings_info_menu").removeClass("off").addClass("on")
                            }, 500);
                            a(this).data("timeout_id", c)
                        });
                        a(c).on("mouseleave", "li.settings_info", function() {
                            var c = a(this).data("timeout_id");
                            window.clearTimeout(c);
                            U.find(".settings_info_menu").removeClass("on").addClass("off")
                        });
                        a(c).on("click", "li.settings_info fieldset input", function(g) {
                            var h = g.target.id,
                            j = "socialSharePrivacy_" + h.substr(h.lastIndexOf("_") + 1, h.length);
                            if (a("#" + g.target.id + ":checked").length) {
                                var g = e.cookie_expires, k = e.cookie_path, m = e.cookie_domain, n = new Date;
                                n.setTime(n.getTime() + 864E5 * g);
                                document.cookie = j + "=perma_on; expires=" + n.toUTCString() + "; path=" + k + "; domain=" + m;
                                a("form fieldset label[for=" + h + "]", c).addClass("checked")
                            } else 
                                g = e.cookie_path, k = e.cookie_domain, m = new Date, m.setTime(m.getTime()-100), document.cookie = j + "=perma_on; expires=" + m.toUTCString() + "; path=" + g + "; domain=" +
                            k, a("form fieldset label[for=" + h + "]", c).removeClass("checked")
                        });
                        g && r && "perma_on" === w.socialSharePrivacy_facebook && a("li.facebook .switch", c).click();
                        k && N && "perma_on" === w.socialSharePrivacy_twitter && a("li.twitter .switch", c).click();
                        s && v && "perma_on" === w.socialSharePrivacy_gplus && a("li.gplus .switch", c).click()
                    }
                })
            })
        }
    }
})(jQuery);

var BO = {
    init: {}
};
jQuery(function(a) {
    for (var j in BO.init)
        BO.init[j].apply(window, [a])
});


BO.init.mypopover = function(a) {
    a("#zentral-popover-link").popover({
        html: !0,
        placement: "bottom",
        toggle: "popover",
        title: "",
        content: function() {
            return a("#popover-login-content").html()
        }
    });
    a(":not(.container)").on("click", function(j) {
        a(".popover-link").each(function() {
            !a(this).is(j.target) && 0 === a(this).has(j.target).length && 0 === a(".popover").has(j.target).length && a(this).popover("hide")
        })
    });
    a(".popover-container .event-popover").popover({
        html: !0,
        trigger: "hover",
        placement: "bottom",
        animation: !1
    }).on({
        show: function(j) {
            var s =
            a(this);
            s.data("hoveringPopover", !0);
            s.data("waitingForPopoverTO") && j.stopImmediatePropagation()
        },
        hide: function(j) {
            var s = a(this);
            if (s.data("forceHidePopover"))
                return s.data("forceHidePopover", !1), !0;
            j.stopImmediatePropagation();
            clearTimeout(s.data("popoverTO"));
            s.data("hoveringPopover", !1);
            s.data("waitingForPopoverTO", !0);
            s.data("popoverTO", setTimeout(function() {
                s.data("hoveringPopover") || (s.data("forceHidePopover", !0), s.data("waitingForPopoverTO", !1), s.popover("hide"))
            }, 50));
            return !1
        }
    }).on({
        show: function() {},
        hide: function() {}
    })
};


/* STS - gepatch für BO um auch transitions im IE7/8/9 zu unterstützen */

/* ========================================================================
* Bootstrap: transition.js v3.0.0
* http://twbs.github.com/bootstrap/javascript.html#transitions
* ========================================================================
* Copyright 2013 Twitter, Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* ======================================================================== */


+ function ($) {
    "use strict";

    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================

    function transitionEnd() {
        var el = document.createElement('bootstrap')
        var transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd'
            ,
            'MozTransition' : 'transitionend'
            ,
            'OTransition' : 'oTransitionEnd otransitionend'
            ,
            'transition' : 'transitionend'
        }

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name] 
                }
            }
        }
    }

    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function (duration) {
        var called = false, $el = this
        $(this).one($.support.transition.end, function () {
            called = true 
        })
        var callback = function () {
            if (!called) 
                $($el).trigger($.support.transition.end) 
        }
        setTimeout(callback, duration)
        return this
    }

    $(function () {
        $.support.transition = transitionEnd()
    })
}(window.jQuery);


/* STS - gepatch für BO um auch transitions im IE7/8/9 zu unterstützen */

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+ function ($) {
    "use strict";

    // CAROUSEL CLASS DEFINITION
    // =========================

    var Carousel = function (element, options) {
        this.$element = $(element)
        this.$indicators = this.$element.find('.carousel-indicators')
        this.options = options
        this.paused =
        this.sliding =
        this.interval =
        this.$active =
        this.$items = null
        this.options.pause == 'hover' && this.$element
        .on('mouseenter', $.proxy(this.pause, this))
        .on('mouseleave', $.proxy(this.cycle, this))
    }

    Carousel.DEFAULTS = {
        interval: 5000
        ,
        pause: 'hover'
    }

    Carousel.prototype.cycle = function (e) {
        e || (this.paused = false)
        this.interval && clearInterval(this.interval)
        this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
        return this
    }

    Carousel.prototype.getActiveIndex = function () {
        this.$active = this.$element.find('.item.active')
        this.$items = this.$active.parent().children()
        return this.$items.index(this.$active)
    }

    Carousel.prototype.to = function (pos) {
        var that = this
        var activeIndex = this.getActiveIndex()
        if (pos > (this.$items.length - 1) || pos < 0) 
            return
            if (this.sliding) return this.$element.one('slid', function () {
            that.to(pos) 
        })
        if (activeIndex == pos) 
            return this.pause().cycle()
        return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

    Carousel.prototype.pause = function (e) {
        e || (this.paused = true)
        if ($.support.transition && this.$element.find('.next, .prev').length && $.support.transition.end) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }

        this.interval = clearInterval(this.interval)
        return this
    }

    Carousel.prototype.next = function () {
        if (this.sliding) 
            return
            return this.slide('next')
    }

    Carousel.prototype.prev = function () {
        if (this.sliding) 
            return
            return this.slide('prev')
    }

    Carousel.prototype.slide = function (type, next) {
        var $active = this.$element.find('.item.active')
        var $next = next || $active[type]()
        var isCycling = this.interval
        var direction = type == 'next' ? 'left' : 'right'
        var fallback = type == 'next' ? 'first' : 'last'
        var that = this
        this.sliding = true
        isCycling && this.pause()
        $next = $next.length ? $next : this.$element.find('.item')[fallback]()
        var e = $.Event('slide.bs.carousel', {
            relatedTarget: $next[0],
            direction: direction 
        })
        if ($next.hasClass('active')) 
            return
            if (this.$indicators.length) {
            this.$indicators.find('.active').removeClass('active')
            this.$element.one('slid', function () {
                var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
                $nextIndicator && $nextIndicator.addClass('active')
            })
        }

        if ($.support.transition && this.$element.hasClass('slide')) {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) 
                return
                $next.addClass(type)
            $next[0].offsetWidth // force reflow
            $active.addClass(direction)
            $next.addClass(direction)
            $active
            .one($.support.transition.end, function () {
                $next.removeClass([type, direction].join(' ')).addClass('active')
                $active.removeClass(['active', direction].join(' '))
                that.sliding = false
                setTimeout(function () {
                    that.$element.trigger('slid') 
                }, 0)
            })
            .emulateTransitionEnd(600)
        } else if (this.$element.hasClass('slide')) {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) 
                return
                $active.animate({
                    left: (direction == 'right' ? '100%' : '-100%')
                }, 600, function() {
                    $active.removeClass('active')
                    that.sliding = false
                    setTimeout(function () {
                        that.$element.trigger('slid') 
                    }, 0)
                })
                $next.addClass(type).css({
                    left: (direction == 'right' ? '-100%' : '100%')
                }).animate({
                    left: 0
                }, 600, function() {
                    $next.removeClass(type).addClass('active')
                })
        } else {
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) 
                return
                $active.removeClass('active')
                $next.addClass('active')
                this.sliding = false
                this.$element.trigger('slid')
        }

        isCycling && this.cycle()
        return this
    }


    // CAROUSEL PLUGIN DEFINITION
    // ==========================

    var old = $.fn.carousel
    $.fn.carousel = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.carousel')
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide
            if (!data) 
                $this.data('bs.carousel', (data = new Carousel(this, options)))
            if (typeof option == 'number') 
                data.to(option)
            else if (action) 
                data[action]()
            else if (options.interval) 
                data.pause().cycle()
        })
    }

    $.fn.carousel.Constructor = Carousel

    // CAROUSEL NO CONFLICT
    // ====================

    $.fn.carousel.noConflict = function () {
        $.fn.carousel = old
        return this
    }


    // CAROUSEL DATA-API
    // =================

    $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
        var $this = $(this), href
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if (slideIndex) 
            options.interval = false
        $target.carousel(options)
        if (slideIndex = $this.attr('data-slide-to')) {
            $target.data('bs.carousel').to(slideIndex)
        }

        e.preventDefault()
    })
    $(window).on('load', function () {
        $('[data-ride="carousel"]').each(function () {
            var $carousel = $(this)
            $carousel.carousel($carousel.data())
        })
    })
}(window.jQuery);

/* ===========================================================
 * bootstrap-tooltip.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

    "use strict"; // jshint ;_;


    /* TOOLTIP PUBLIC CLASS DEFINITION
      * =============================== */

    var Tooltip = function (element, options) {
        this.init('tooltip', element, options)
    }

    Tooltip.prototype = {

        constructor: Tooltip
        ,
        init: function (type, element, options) {
            var eventIn
            , eventOut
            , triggers
            , trigger
            , i
            this.type = type
            this.$element = $(element)
            this.options = this.getOptions(options)
            this.enabled = true
            triggers = this.options.trigger.split(' ')
            for (i = triggers.length; i--;) {
                trigger = triggers[i]
                if (trigger == 'click') {
                    this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
                } else if (trigger != 'manual') {
                    eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
                    eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
                    this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                    this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
                }
            }

            this.options.selector ?
            (this._options = $.extend({}, this.options, {
                trigger: 'manual',
                selector: '' 
            })) :
            this.fixTitle()
        }
,
        getOptions: function (options) {
            options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)
            if (options.delay && typeof options.delay == 'number') {
                options.delay = {
                    show: options.delay
                    ,
                    hide: options.delay
                }
            }

            return options
        }
,
        enter: function (e) {
            var defaults = $.fn[this.type].defaults
            , options = {}, self
            this._options && $.each(this._options, function (key, value) {
                if (defaults[key] != value) 
                    options[key] = value
            }, this)
            self = $(e.currentTarget)[this.type](options).data(this.type)
            if (!self.options.delay || !self.options.delay.show) 
                return self.show()
            clearTimeout(this.timeout)
            self.hoverState = 'in'
            this.timeout = setTimeout(function() {
                if (self.hoverState == 'in') 
                    self.show()
            }, self.options.delay.show)
        }
,
        leave: function (e) {
            var self = $(e.currentTarget)[this.type](this._options).data(this.type)
            if (this.timeout) 
                clearTimeout(this.timeout)
            if (!self.options.delay || !self.options.delay.hide) 
                return self.hide()
            self.hoverState = 'out'
            this.timeout = setTimeout(function() {
                if (self.hoverState == 'out') 
                    self.hide()
            }, self.options.delay.hide)
        }
,
        show: function () {
            var $tip
            , pos
            , actualWidth
            , actualHeight
            , placement
            , tp
            , e = $.Event('show')
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(e)
                if (e.isDefaultPrevented()) 
                    return
                    $tip = this.tip()
                this.setContent()
                if (this.options.animation) {
                    $tip.addClass('fade')
                }

                placement = typeof this.options.placement == 'function' ?
                this.options.placement.call(this, $tip[0], this.$element[0]) :
                this.options.placement
                $tip
                .detach()
                .css({
                    top: 0,
                    left: 0,
                    display: 'block' 
                })
                this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
                pos = this.getPosition()
                actualWidth = $tip[0].offsetWidth
                actualHeight = $tip[0].offsetHeight
                switch (placement) {
                case 'bottom':
                    tp = {
                        top: pos.top + pos.height,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    }
                    break
                case 'top' :
                    tp = {
                        top: pos.top - actualHeight,
                        left: pos.left + pos.width / 2 - actualWidth / 2
                    }
                    break
                case 'left' :
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left - actualWidth
                    }
                    break
                case 'right' :
                    tp = {
                        top: pos.top + pos.height / 2 - actualHeight / 2,
                        left: pos.left + pos.width
                    }
                    break
                }

                this.applyPlacement(tp, placement)
                this.$element.trigger('shown')
            }
        }
,
        applyPlacement: function(offset, placement) {
            var $tip = this.tip()
            , width = $tip[0].offsetWidth
            , height = $tip[0].offsetHeight
            , actualWidth
            , actualHeight
            , delta
            , replace
            $tip
            .offset(offset)
            .addClass(placement)
            .addClass('in')
            actualWidth = $tip[0].offsetWidth
            actualHeight = $tip[0].offsetHeight
            if (placement == 'top' && actualHeight != height) {
                offset.top = offset.top + height - actualHeight
                replace = true
            }

            if (placement == 'bottom' || placement == 'top') {
                delta = 0
                if (offset.left < 0) {
                    delta = offset.left * -2
                    offset.left = 0
                    $tip.offset(offset)
                    actualWidth = $tip[0].offsetWidth
                    actualHeight = $tip[0].offsetHeight
                }

                this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
            } else {
                this.replaceArrow(actualHeight - height, actualHeight, 'top')
            }

            if (replace) 
                $tip.offset(offset)
        }
,
        replaceArrow: function(delta, dimension, position) {
            this
            .arrow()
            .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
        }
,
        setContent: function () {
            var $tip = this.tip()
            , title = this.getTitle()
            $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
            $tip.removeClass('fade in top bottom left right')
        }
,
        hide: function () {
            var that = this
            , $tip = this.tip()
            , e = $.Event('hide')
            this.$element.trigger(e)
            if (e.isDefaultPrevented()) 
                return
                $tip.removeClass('in')
            function removeWithAnimation() {
                var timeout = setTimeout(function () {
                    $tip.off($.support.transition.end).detach()
                }, 500)
                $tip.one($.support.transition.end, function () {
                    clearTimeout(timeout)
                    $tip.detach()
                })
            }

            $.support.transition && this.$tip.hasClass('fade') ?
            removeWithAnimation() :
            $tip.detach()
            this.$element.trigger('hidden')
            return this
        }
,
        fixTitle: function () {
            var $e = this.$element
            if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
                $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
            }
        }
,
        hasContent: function () {
            return this.getTitle()
        }
,
        getPosition: function () {
            var el = this.$element[0]
            return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
                width: el.offsetWidth
                ,
                height: el.offsetHeight
            }, this.$element.offset())
        }
,
        getTitle: function () {
            var title
            , $e = this.$element
            , o = this.options
            title = $e.attr('data-original-title')
            || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)
            return title
        }
,
        tip: function () {
            return this.$tip = this.$tip || $(this.options.template)
        }
,
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }
,
        validate: function () {
            if (!this.$element[0].parentNode) {
                this.hide()
                this.$element = null
                this.options = null
            }
        }
,
        enable: function () {
            this.enabled = true
        }
,
        disable: function () {
            this.enabled = false
        }
,
        toggleEnabled: function () {
            this.enabled = !this.enabled
        }
,
        toggle: function (e) {
            var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
            self.tip().hasClass('in') ? self.hide() : self.show()
        }
,
        destroy: function () {
            this.hide().$element.off('.' + this.type).removeData(this.type)
        }

    }


    /* TOOLTIP PLUGIN DEFINITION
      * ========================= */

    var old = $.fn.tooltip
    $.fn.tooltip = function ( option ) {
        return this.each(function () {
            var $this = $(this)
            , data = $this.data('tooltip')
            , options = typeof option == 'object' && option
            if (!data) 
                $this.data('tooltip', (data = new Tooltip(this, options)))
            if (typeof option == 'string') 
                data[option]()
        })
    }

    $.fn.tooltip.Constructor = Tooltip
    $.fn.tooltip.defaults = {
        animation: true
        ,
        placement: 'top'
        ,
        selector: false
        ,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
        ,
        trigger: 'hover focus'
        ,
        title: ''
        ,
        delay: 0
        ,
        html: false
        ,
        container: false
    }


    /* TOOLTIP NO CONFLICT
      * =================== */

    $.fn.tooltip.noConflict = function () {
        $.fn.tooltip = old
        return this
    }

}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

    "use strict"; // jshint ;_;


    /* POPOVER PUBLIC CLASS DEFINITION
      * =============================== */

    var Popover = function (element, options) {
        this.init('popover', element, options)
    }


    /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
         ========================================== */

    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

        constructor: Popover
        ,
        setContent: function () {
            var $tip = this.tip()
            , title = this.getTitle()
            , content = this.getContent()
            $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
            $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)
            $tip.removeClass('fade top bottom left right in')
        }
,
        hasContent: function () {
            return this.getTitle() || this.getContent()
        }
,
        getContent: function () {
            var content
            , $e = this.$element
            , o = this.options
            content = (typeof o.content == 'function' ? o.content.call($e[0]) : o.content)
            || $e.attr('data-content')
            return content
        }
,
        tip: function () {
            if (!this.$tip) {
                this.$tip = $(this.options.template)
            }
            return this.$tip
        }
,
        destroy: function () {
            this.hide().$element.off('.' + this.type).removeData(this.type)
        }

    })

    /* POPOVER PLUGIN DEFINITION
      * ======================= */

    var old = $.fn.popover
    $.fn.popover = function (option) {
        return this.each(function () {
            var $this = $(this)
            , data = $this.data('popover')
            , options = typeof option == 'object' && option
            if (!data) 
                $this.data('popover', (data = new Popover(this, options)))
            if (typeof option == 'string') 
                data[option]()
        })
    }

    $.fn.popover.Constructor = Popover
    $.fn.popover.defaults = $.extend({}, $.fn.tooltip.defaults, {
        placement: 'right'
        ,
        trigger: 'click'
        ,
        content: ''
        ,
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })

    /* POPOVER NO CONFLICT
      * =================== */

    $.fn.popover.noConflict = function () {
        $.fn.popover = old
        return this
    }

}(window.jQuery);
/* =============================================================
 * bootstrap-collapse.js v2.3.1
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

    "use strict"; // jshint ;_;


    /* COLLAPSE PUBLIC CLASS DEFINITION
      * ================================ */

    var Collapse = function (element, options) {
        this.$element = $(element)
        this.options = $.extend({}, $.fn.collapse.defaults, options)
        if (this.options.parent) {
            this.$parent = $(this.options.parent)
        }

        this.options.toggle && this.toggle()
    }

    Collapse.prototype = {

        constructor: Collapse
        ,
        dimension: function () {
            var hasWidth = this.$element.hasClass('width')
            return hasWidth ? 'width' : 'height'
        }
,
        show: function () {
            var dimension
            , scroll
            , actives
            , hasData
            if (this.transitioning || this.$element.hasClass('in')) 
                return
                dimension = this.dimension()
            scroll = $.camelCase(['scroll', dimension].join('-'))
            actives = this.$parent && this.$parent.find('> .accordion-group > .in')
            if (actives && actives.length) {
                hasData = actives.data('collapse')
                if (hasData && hasData.transitioning) 
                    return
                    actives.collapse('hide')
                hasData || actives.data('collapse', null)
            }

            this.$element[dimension](0)
            this.transition('addClass', $.Event('show'), 'shown')
            $.support.transition && this.$element[dimension](this.$element[0][scroll])
        }
,
        hide: function () {
            var dimension
            if (this.transitioning || !this.$element.hasClass('in')) 
                return
                dimension = this.dimension()
            this.reset(this.$element[dimension]())
            this.transition('removeClass', $.Event('hide'), 'hidden')
            this.$element[dimension](0)
        }
,
        reset: function (size) {
            var dimension = this.dimension()
            this.$element
            .removeClass('collapse')
            [dimension](size || 'auto')
            [0].offsetWidth
            this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')
            return this
        }
,
        transition: function (method, startEvent, completeEvent) {
            var that = this
            , complete = function () {
                if (startEvent.type == 'show') 
                    that.reset()
                that.transitioning = 0
                that.$element.trigger(completeEvent)
            }

            this.$element.trigger(startEvent)
            if (startEvent.isDefaultPrevented()) 
                return
                this.transitioning = 1
            this.$element[method]('in')
            $.support.transition && this.$element.hasClass('collapse') ?
            this.$element.one($.support.transition.end, complete) :
            complete()
        }
,
        toggle: function () {
            this[this.$element.hasClass('in') ? 'hide' : 'show']()
        }

    }


    /* COLLAPSE PLUGIN DEFINITION
      * ========================== */

    var old = $.fn.collapse
    $.fn.collapse = function (option) {
        return this.each(function () {
            var $this = $(this)
            , data = $this.data('collapse')
            , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
            if (!data) 
                $this.data('collapse', (data = new Collapse(this, options)))
            if (typeof option == 'string') 
                data[option]()
        })
    }

    $.fn.collapse.defaults = {
        toggle: true
    }

    $.fn.collapse.Constructor = Collapse

    /* COLLAPSE NO CONFLICT
      * ==================== */

    $.fn.collapse.noConflict = function () {
        $.fn.collapse = old
        return this
    }


    /* COLLAPSE DATA-API
      * ================= */

    $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
        var $this = $(this), href
        , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
        , option = $(target).data('collapse') ? 'toggle' : $this.data()
        $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
        $(target).collapse(option)
    })
}(window.jQuery);

