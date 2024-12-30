/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (C, e) {
  'use strict';
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        'function' == typeof e &&
        'number' != typeof e.nodeType &&
        'function' != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement('script');
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
        ? n[o.call(e)] || 'object'
        : typeof e;
  }
  var f = '3.6.0',
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
            ? this[e + this.length]
            : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                            ? n
                            : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || '[object Object]' !== o.call(e)) &&
          (!(t = r(e)) ||
            ('function' ==
              typeof (n = v.call(t, 'constructor') && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, 'string' == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    'function' == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        n['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = 'sizzle' + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      I =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        M +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      W =
        '\\[' +
        M +
        '*(' +
        I +
        ')(?:' +
        M +
        '*([*^$|!~]?=)' +
        M +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        I +
        '))|)' +
        M +
        '*\\]',
      F =
        ':(' +
        I +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        W +
        ')*)|.*)\\)|)',
      B = new RegExp(M + '+', 'g'),
      $ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      _ = new RegExp('^' + M + '*,' + M + '*'),
      z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp(M + '|>'),
      X = new RegExp(F),
      V = new RegExp('^' + I + '$'),
      G = {
        ID: new RegExp('^#(' + I + ')'),
        CLASS: new RegExp('^\\.(' + I + ')'),
        TAG: new RegExp('^(' + I + '|[*])'),
        ATTR: new RegExp('^' + W),
        PSEUDO: new RegExp('^' + F),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            M +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            M +
            '*(?:([+-]|)' +
            M +
            '*(\\d+)|))' +
            M +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + R + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            M +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            M +
            '*((?:-\\d)?\\d*)' +
            M +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + ' '] &&
          (!v || !v.test(t)) &&
          (1 !== p || 'object' !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute('id'))
                ? (s = s.replace(re, ie))
                : e.setAttribute('id', (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o]);
            c = l.join(',');
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute('id');
          }
        }
      }
      return g(t.replace($, '$1'), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split('|'),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ('input' === t || 'button' === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || 'HTML');
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener('unload', oe, !1)
                : n.attachEvent && n.attachEvent('onunload', oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement('div')),
                'undefined' != typeof e.querySelectorAll &&
                  !e.querySelectorAll(':scope fieldset div').length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment('')),
                !e.getElementsByTagName('*').length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      'undefined' != typeof e.getAttributeNode &&
                      e.getAttributeNode('id');
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return 'undefined' != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                      ? t.querySelectorAll(e)
                      : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    v.push('\\[' + M + '*(?:value|' + R + ')'),
                  e.querySelectorAll('[id~=' + S + '-]').length || v.push('~='),
                  (t = C.createElement('input')).setAttribute('name', ''),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll(':checked').length || v.push(':checked'),
                  e.querySelectorAll('a#' + S + '+*').length ||
                    v.push('.#.+[+~]'),
                  e.querySelectorAll('\\\f'),
                  v.push('[\\r\\n\\f]');
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    v.push('name' + M + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    v.push(':enabled', ':disabled'),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    v.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  v.push(',.*:');
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, '*')),
                  c.call(e, "[s!='']:x"),
                  s.push('!=', F);
              }),
            (v = v.length && new RegExp(v.join('|'))),
            (s = s.length && new RegExp(s.join('|'))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                          ? 1
                          : u
                            ? P(u, e) - P(u, t)
                            : 0
                      : 4 & n
                        ? -1
                        : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                        ? 1
                        : i
                          ? -1
                          : o
                            ? 1
                            : u
                              ? P(u, e) - P(u, t)
                              : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                      ? -1
                      : s[r] == p
                        ? 1
                        : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + ' '] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
          ? e.getAttribute(t)
          : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                m(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      ('undefined' != typeof e.getAttribute &&
                        e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? '!=' === r
                : !r ||
                    ((t += ''),
                    '=' === r
                      ? t === i
                      : '!=' === r
                        ? t !== i
                        : '^=' === r
                          ? i && 0 === t.indexOf(i)
                          : '*=' === r
                            ? i && -1 < t.indexOf(i)
                            : '$=' === r
                              ? i && t.slice(-i.length) === i
                              : '~=' === r
                                ? -1 <
                                  (' ' + t.replace(B, ' ') + ' ').indexOf(i)
                                : '|=' === r &&
                                  (t === i ||
                                    t.slice(0, i.length + 1) === i + '-'));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = 'nth' !== h.slice(0, 3),
              m = 'last' !== h.slice(-4),
              x = 'of-type' === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? 'nextSibling' : 'previousSibling',
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = 'only' === h && !u && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error('unsupported pseudo: ' + e);
            return a[S]
              ? a(o)
              : 1 < a.length
                ? ((t = [e, e, '', o]),
                  b.setFilters.hasOwnProperty(e.toLowerCase())
                    ? le(function (e, t) {
                        var n,
                          r = a(e, o),
                          i = r.length;
                        while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                      })
                    : function (e) {
                        return a(e, 0, t);
                      })
                : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, '$1'));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || '') || se.error('unsupported lang: ' + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && 'parentNode' === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || '*', n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else
            (p = Te(p === t ? p.splice(l, p.length) : p)),
              y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[' '],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                ).replace($, '$1'),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + ' '];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, ' ') }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + ' '];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG('*', i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = 'function' == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              'ID' === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split('').sort(j).join('') === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        );
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          );
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
                ? r.value
                : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[':'] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
        ? S.grep(e, function (e) {
            return (e === n) !== r;
          })
        : 'string' != typeof n
          ? S.grep(e, function (e) {
              return -1 < i.call(n, e) !== r;
            })
          : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, 'string' == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), 'string' == typeof e)) {
      if (
        !(r =
          '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(S)
        : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return h(e, 'parentNode', n);
        },
        next: function (e) {
          return O(e, 'nextSibling');
        },
        prev: function (e) {
          return O(e, 'previousSibling');
        },
        nextAll: function (e) {
          return h(e, 'nextSibling');
        },
        prevAll: function (e) {
          return h(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return h(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return h(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            'Until' !== r.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
          ? i.call(e, t, n)
          : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      'string' == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && 'string' !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ''), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              S.Callbacks('memory'),
              S.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + 'With'](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError('Thenable self-resolution');
                        (t =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + 'With'] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          'pending' === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener('DOMContentLoaded', B),
      C.removeEventListener('load', B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)['catch'](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    'complete' === E.readyState ||
    ('loading' !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener('DOMContentLoaded', B),
        C.addEventListener('load', B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, 'ms-').replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
                ? [t]
                : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === (i = n) ||
            ('false' !== i &&
              ('null' === i
                ? null
                : i === +i + ''
                  ? +i
                  : J.test(i)
                    ? JSON.parse(i)
                    : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf('data-') &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                      ? t
                      : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
              ? this
              : this.each(function () {
                  var e = S.queue(this, t, n);
                  S._queueHooks(this, t),
                    'fx' === t && 'inprogress' !== e[0] && S.dequeue(this, t);
                })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
        while (a--)
          (n = Y.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && ie(e) && 'none' === S.css(e, 'display'))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ('px' !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((l[c] = Y.get(r, 'display') || null),
              l[c] || (r.style.display = '')),
            '' === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, 'display')),
                  o.parentNode.removeChild(o),
                  'none' === u && (u = 'block'),
                  (ue[s] = u)))))
          : 'none' !== n && ((l[c] = 'none'), Y.set(r, 'display', n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement('div'))),
    (fe = E.createElement('input')).setAttribute('type', 'radio'),
    fe.setAttribute('checked', 'checked'),
    fe.setAttribute('name', 't'),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = '<textarea>x</textarea>'),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = '<option></option>'),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
            ? e.querySelectorAll(t || '*')
            : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", '</select>']);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement('div'))),
            (s = (de.exec(o) || ['', ''])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    (f.textContent = ''), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), 'script')), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || '') && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return 'undefined' != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || '').match(P) || ['']).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || '').match(P) || ['']).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, 'events') || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click', we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click'), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, 'input') &&
              Y.get(t, 'click')) ||
            A(t, 'a')
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (
      (A(e, 'table') &&
        A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        S(e).children('tbody')[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function qe(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, 'handle events'), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && 'string' == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, 'script'), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, 'script'))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || '') &&
              !Y.access(u, 'globalEval') &&
              S.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute('nonce') },
                    l
                  )
                : b(u.textContent.replace(Ne, ''), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              'string' == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join('|'), 'i');
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = '1%' !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = '60%'),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = 'absolute'),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement('div'),
      l = E.createElement('div');
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement('table')),
              (t = E.createElement('tr')),
              (n = E.createElement('div')),
              (e.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ['Webkit', 'Moz', 'ms'],
    $e = E.createElement('div').style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ge = { letterSpacing: '0', fontWeight: '400' };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= S.css(e, 'padding' + ne[a], !0, i)),
            'margin' !== n &&
              (u -= S.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += S.css(e, 'padding' + ne[a], !0, i)),
            'padding' !== n
              ? (u += S.css(e, 'border' + ne[a] + 'Width', !0, i))
              : (s += S.css(e, 'border' + ne[a] + 'Width', !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        'border-box' === S.css(e, 'boxSizing', !1, r),
      o = i,
      a = We(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
            y.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        'normal' === i && t in Ge && (i = Ge[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(['height', 'width'], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === S.css(e, 'boxSizing', !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, 'border', !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    S.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        'margin' !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
              ? t
              : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
                (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
              ? (e.elem[e.prop] = e.now)
              : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing',
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = ne[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, 'display')),
            'none' === (c = S.css(e, 'display')) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, 'display')),
                  le([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === S.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? 'hidden' in v && (g = v.hidden)
                : (v = Y.access(e, 'fxshow', { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, 'fxshow'), d))
                  S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, 'finish')) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: st('show'),
        slideUp: st('hide'),
        slideToggle: st('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement('input')),
    (nt = E.createElement('select').appendChild(E.createElement('option'))),
    (tt.type = 'checkbox'),
    (y.checkOn = '' !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement('input')).value = 't'),
    (tt.type = 'radio'),
    (y.radioValue = 't' === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                  ? r
                  : null == (r = S.find.attr(e, t))
                    ? void 0
                    : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        );
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(' ');
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function vt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, 'tabindex');
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
                ? 0
                : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
              i !== (s = ht(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(' ' + o + ' '))
                  r = r.replace(' ' + o + ' ', ' ');
              i !== (s = ht(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = 'string' === o || Array.isArray(i);
        return 'boolean' == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
            ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t);
              })
            : this.each(function () {
                var e, t, n, r;
                if (a) {
                  (t = 0), (n = S(this)), (r = vt(i));
                  while ((e = r[t++]))
                    n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else
                  (void 0 !== i && 'boolean' !== o) ||
                    ((e = gt(this)) && Y.set(this, '__className__', e),
                    this.setAttribute &&
                      this.setAttribute(
                        'class',
                        e || !1 === i ? '' : Y.get(this, '__className__') || ''
                      ));
              });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = ' ' + e + ' ';
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (' ' + ht(gt(n)) + ' ').indexOf(t))
            return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                  ? (t += '')
                  : Array.isArray(t) &&
                    (t = S.map(t, function (e) {
                      return null == e ? '' : e + '';
                    })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in r &&
                void 0 !== r.set(this, t, 'value')) ||
                (this.value = t));
          }))
        : t
          ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
            'get' in r &&
            void 0 !== (e = r.get(t, 'value'))
            ? e
            : 'string' == typeof (e = t.value)
              ? e.replace(yt, '')
              : null == e
                ? ''
                : e
          : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, 'value');
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(['radio', 'checkbox'], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (y.focusin = 'onfocusin' in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, 'type') ? e.type : e,
        h = v.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
          (u = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, 'events') || Object.create(null))[e.type] &&
              Y.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (t && !n) ||
        S.error(
          'Invalid XML: ' +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join('\n')
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
              t,
              r,
              i
            );
      });
    else if (r || 'object' !== w(e)) i(n, e);
    else for (t in e) At(n + '[' + t + ']', e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join('&');
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, 'elements');
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(':disabled') &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
                ? S.map(n, function (e) {
                    return { name: t.name, value: e.replace(Et, '\r\n') };
                  })
                : { name: t.name, value: n.replace(Et, '\r\n') };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = '*/'.concat('*'),
    Mt = E.createElement('a');
  function It(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return 'string' != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Rt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks('once memory'),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + '').replace(
            Ht,
            bt.protocol + '//'
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || '*').toLowerCase().match(P) || ['']),
          null == v.crossDomain)
        ) {
          r = E.createElement('a');
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + '//' + Mt.host != r.protocol + '//' + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            'string' != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger('ajaxStart'),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, '')),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (v.data = v.data.replace(Nt, '+'))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || 'string' == typeof v.data) &&
              ((f += (Tt.test(f) ? '&' : '?') + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, '$1')),
              (o = (Tt.test(f) ? '&' : '?') + '_=' + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader('If-Modified-Since', S.lastModified[f]),
          S.etag[f] && T.setRequestHeader('If-None-Match', S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader('Content-Type', v.contentType),
        T.setRequestHeader(
          'Accept',
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ('*' !== v.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '')
            : v.accepts['*']
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = 'abort'),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort('timeout');
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, 'No Transport');
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ('*' === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray('script', v.dataTypes) &&
              S.inArray('json', v.dataTypes) < 0 &&
              (v.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e['throws']) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          };
                        }
                  }
              return { state: 'success', data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader('Last-Modified')) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader('etag')) && (S.etag[f] = u)),
                204 === e || 'HEAD' === v.type
                  ? (l = 'nocontent')
                  : 304 === e
                    ? (l = 'notmodified')
                    : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger('ajaxComplete', [T, v]),
              --S.active || S.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, 'script');
      },
    }),
    S.each(['get', 'post'], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '');
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && 'withCredentials' in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                      ? 'number' != typeof r.status
                        ? t(0, 'error')
                        : t(r.status, r.statusText)
                      : t(
                          Bt[r.status] || r.status,
                          r.statusText,
                          'text' !== (r.responseType || 'text') ||
                            'string' != typeof r.responseText
                            ? { binary: r.response }
                            : { text: r.responseText },
                          r.getAllResponseHeaders()
                        ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o('abort'));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    S.ajaxTransport('script', function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S('<script>')
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + '_' + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Ut.test(e.data) &&
              'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || S.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          'script'
        );
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          S.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, 'position'),
          c = S(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = S.css(e, 'top')),
          (u = S.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === S.css(e, 'position')
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)),
              (i.left += S.css(e, 'borderLeftWidth', !0)));
          }
          return {
            top: t.top - i.top - S.css(r, 'marginTop', !0),
            left: t.left - i.left - S.css(r, 'marginLeft', !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && 'static' === S.css(e, 'position')) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (t, i) {
        var o = 'pageYOffset' === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(['top', 'left'], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t)
          return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + 'px' : t;
      });
    }),
    S.each({ Height: 'height', Width: 'width' }, function (a, s) {
      S.each(
        { padding: 'inner' + a, content: s, '': 'outer' + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || 'boolean' != typeof e),
              i = r || (!0 === e || !0 === t ? 'margin' : 'border');
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf('outer')
                    ? e['inner' + a]
                    : e.document.documentElement['client' + a]
                  : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body['scroll' + a],
                        r['scroll' + a],
                        e.body['offset' + a],
                        r['offset' + a],
                        r['client' + a]
                      ))
                    : void 0 === n
                      ? S.css(e, t, i)
                      : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? '' : (e + '').replace(Xt, '');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    'undefined' == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
'undefined' == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(['jquery'], function (e) {
          return t(e, window);
        })
      : 'object' == typeof module && module.exports
        ? (module.exports = t(require('jquery'), window))
        : t(jQuery, window);
  })(function (s, n) {
    'use strict';
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              i = 1;
            i <= 3;
            i++
          ) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = '3.3.2'),
      n.console &&
        n.console.log &&
        ((s && e('3.0.0')) ||
          n.console.log('JQMIGRATE: jQuery 3.0.0+ REQUIRED'),
        s.migrateWarnings &&
          n.console.log('JQMIGRATE: Migrate plugin loaded multiple times'),
        n.console.log(
          'JQMIGRATE: Migrate is installed' +
            (s.migrateMute ? '' : ' with logging active') +
            ', version ' +
            s.migrateVersion
        ));
    var r = {};
    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) ||
        ((r[e] = !0),
        s.migrateWarnings.push(e),
        t &&
          t.warn &&
          !s.migrateMute &&
          (t.warn('JQMIGRATE: ' + e), s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r;
        },
        set: function (e) {
          u(n), (r = e);
        },
      });
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      'BackCompat' === n.document.compatMode &&
        u('jQuery is not compatible with Quirks Mode');
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return (
        'string' == typeof e &&
          '#' === e &&
          (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        l.apply(this, t)
      );
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ('string' == typeof t && f.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return '[' + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t),
              u("Attribute selector with '#' must be quoted: " + r[0]),
              (r[0] = t);
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return p.apply(this, r);
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
      s.fn,
      'size',
      function () {
        return this.length;
      },
      'jQuery.fn.size() is deprecated and removed; use the .length property'
    ),
      o(
        s,
        'parseJSON',
        function () {
          return JSON.parse.apply(null, arguments);
        },
        'jQuery.parseJSON is deprecated; use JSON.parse'
      ),
      o(s, 'holdReady', s.holdReady, 'jQuery.holdReady is deprecated'),
      o(
        s,
        'unique',
        s.uniqueSort,
        'jQuery.unique is deprecated; use jQuery.uniqueSort'
      ),
      t(
        s.expr,
        'filters',
        s.expr.pseudos,
        'jQuery.expr.filters is deprecated; use jQuery.expr.pseudos'
      ),
      t(
        s.expr,
        ':',
        s.expr.pseudos,
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e('3.1.1') &&
        o(
          s,
          'trim',
          function (e) {
            return null == e ? '' : (e + '').replace(m, '');
          },
          'jQuery.trim is deprecated; use String.prototype.trim'
        ),
      e('3.2.0') &&
        (o(
          s,
          'nodeName',
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          'jQuery.nodeName is deprecated'
        ),
        o(
          s,
          'isArray',
          Array.isArray,
          'jQuery.isArray is deprecated; use Array.isArray'
        )),
      e('3.3.0') &&
        (o(
          s,
          'isNumeric',
          function (e) {
            var t = typeof e;
            return (
              ('number' == t || 'string' == t) && !isNaN(e - parseFloat(e))
            );
          },
          'jQuery.isNumeric() is deprecated'
        ),
        s.each(
          'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
            ' '
          ),
          function (e, t) {
            d['[object ' + t + ']'] = t.toLowerCase();
          }
        ),
        o(
          s,
          'type',
          function (e) {
            return null == e
              ? e + ''
              : 'object' == typeof e || 'function' == typeof e
                ? d[Object.prototype.toString.call(e)] || 'object'
                : typeof e;
          },
          'jQuery.type is deprecated'
        ),
        o(
          s,
          'isFunction',
          function (e) {
            return 'function' == typeof e;
          },
          'jQuery.isFunction() is deprecated'
        ),
        o(
          s,
          'isWindow',
          function (e) {
            return null != e && e === e.window;
          },
          'jQuery.isWindow() is deprecated'
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
              (o(
                e,
                'success',
                e.done,
                'jQXHR.success is deprecated and removed'
              ),
              o(e, 'error', e.fail, 'jQXHR.error is deprecated and removed'),
              o(
                e,
                'complete',
                e.always,
                'jQXHR.complete is deprecated and removed'
              )),
            e
          );
        }),
        e('4.0.0') ||
          s.ajaxPrefilter('+json', function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) ||
                ('string' == typeof e.data &&
                  0 ===
                    (e.contentType || '').indexOf(
                      'application/x-www-form-urlencoded'
                    ) &&
                  c.test(e.data))) &&
              u('JSON-to-JSONP auto-promotion is deprecated');
          }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) &&
            (u('jQuery.fn.removeAttr no longer sets boolean properties: ' + t),
            r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && 'boolean' != typeof t
          ? h.apply(this, arguments)
          : (u('jQuery.fn.toggleClass( boolean ) is deprecated'),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute('class')) || '';
              e && s.data(this, '__className__', e),
                this.setAttribute &&
                  this.setAttribute(
                    'class',
                    (!e && !1 !== t && s.data(this, '__className__')) || ''
                  );
            }));
      }),
      w = /^[a-z]/,
      x =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(['height', 'width', 'reliableMarginRight'], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u('jQuery.swap() is undocumented and deprecated'), t))
          (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e('3.4.0') &&
        'undefined' != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u('JQMIGRATE: jQuery.cssProps is deprecated'),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this;
        return e && 'object' == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t);
            }),
            this)
          : ('number' == typeof t &&
              ((r = j(e)),
              (n = r),
              (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                s.cssNumber[r] ||
                u(
                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                    e +
                    '", value )'
                )),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function (e, t, r) {
      var n, o, i;
      if (t && 'object' == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
          i !== j(i)
            ? (u('jQuery.data() always sets/gets camelCased names: ' + i),
              (n[i] = t[i]))
            : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t &&
        'string' == typeof t &&
        t !== j(t) &&
        (n = s.hasData(e) && N.call(this, e)) &&
        t in n
        ? (u('jQuery.data() always sets/gets camelCased names: ' + t),
          2 < arguments.length && (n[t] = r),
          n[t])
        : N.apply(this, arguments);
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e;
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length &&
            (u(
              "'jQuery.easing." +
                this.easing.toString() +
                "' should use only one argument"
            ),
            (s.easing[this.easing] = M)),
            S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = 'jQuery.fx.interval is deprecated'),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, 'interval', {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A;
            },
            set: function (e) {
              u(k), (A = e);
            },
          }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      t(
        s.event.props,
        'concat',
        s.event.props.concat,
        'jQuery.event.props.concat() is deprecated and removed'
      ),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u('jQuery.event.props are deprecated and removed: ' + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (
          n &&
          !n._migrated_ &&
          ((n._migrated_ = !0),
          u('jQuery.event.fixHooks are deprecated and removed: ' + r),
          (o = n.props) && o.length)
        )
          while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function (e, t) {
        return (
          e === n &&
            'load' === t &&
            'complete' === n.document.readyState &&
            u("jQuery(window).on('load'...) called after load event occurred"),
          H.apply(this, arguments)
        );
      }),
      s.each(['load', 'unload', 'error'], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return 'load' === t && 'string' == typeof e[0]
            ? R.apply(this, e)
            : (u('jQuery.fn.' + t + '() is deprecated'),
              e.splice(0, 0, t),
              arguments.length
                ? this.on.apply(this, e)
                : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' '
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return (
              u('jQuery.fn.' + r + '() event shorthand is deprecated'),
              0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            );
          };
        }
      ),
      s(function () {
        s(n.document).triggerHandler('ready');
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated");
        },
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u('jQuery.fn.bind() is deprecated'), this.on(e, null, t, r);
        },
        unbind: function (e, t) {
          return u('jQuery.fn.unbind() is deprecated'), this.off(e, null, t);
        },
        delegate: function (e, t, r, n) {
          return u('jQuery.fn.delegate() is deprecated'), this.on(t, e, r, n);
        },
        undelegate: function (e, t, r) {
          return (
            u('jQuery.fn.undelegate() is deprecated'),
            1 === arguments.length
              ? this.off(e, '**')
              : this.off(t, e || '**', r)
          );
        },
        hover: function (e, t) {
          return (
            u('jQuery.fn.hover() is deprecated'),
            this.on('mouseenter', e).on('mouseleave', t || e)
          );
        },
      });
    function T(e) {
      var t = n.document.implementation.createHTMLDocument('');
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    function P(e) {
      var t = e.replace(O, '<$1></$2>');
      t !== e &&
        T(e) !== T(t) &&
        u('HTML tags must be properly nested and closed: ' + e);
    }
    var O =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, '<$1></$2>');
      };
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e);
      });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function () {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect)
        ? _.apply(this, arguments)
        : (u('jQuery.fn.offset() requires a valid DOM element'),
          arguments.length ? this : void 0);
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return (
            void 0 === t &&
              r &&
              (u(
                'jQuery.param() no longer uses jQuery.ajaxSettings.traditional'
              ),
              (t = r)),
            D.call(this, e, t)
          );
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function () {
        return (
          u(
            'jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()'
          ),
          J.apply(this, arguments)
        );
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          [
            'resolve',
            'done',
            s.Callbacks('once memory'),
            s.Callbacks('once memory'),
            'resolved',
          ],
          [
            'reject',
            'fail',
            s.Callbacks('once memory'),
            s.Callbacks('once memory'),
            'rejected',
          ],
          ['notify', 'progress', s.Callbacks('memory'), s.Callbacks('memory')],
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments;
                return (
                  u('deferred.pipe() is deprecated'),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = 'function' == typeof o[e] && o[e];
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && 'function' == typeof e.promise
                            ? e
                                .promise()
                                .done(n.resolve)
                                .fail(n.reject)
                                .progress(n.notify)
                            : n[t[0] + 'With'](
                                this === a ? n.promise() : this,
                                r ? [e] : arguments
                              );
                        });
                      }),
                        (o = null);
                    })
                    .promise()
                );
              }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });

/*!
 * Bootstrap v5.2.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
      ? define(e)
      : ((t =
          'undefined' != typeof globalThis ? globalThis : t || self).bootstrap =
          e());
})(this, function () {
  'use strict';
  const t = 'transitionend',
    e = (t) => {
      let e = t.getAttribute('data-bs-target');
      if (!e || '#' === e) {
        let i = t.getAttribute('href');
        if (!i || (!i.includes('#') && !i.startsWith('.'))) return null;
        i.includes('#') && !i.startsWith('#') && (i = `#${i.split('#')[1]}`),
          (e = i && '#' !== i ? i.trim() : null);
      }
      return e;
    },
    i = (t) => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = (t) => {
      const i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = (e) => {
      e.dispatchEvent(new Event(t));
    },
    o = (t) =>
      !(!t || 'object' != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = (t) =>
      o(t)
        ? t.jquery
          ? t[0]
          : t
        : 'string' == typeof t && t.length > 0
          ? document.querySelector(t)
          : null,
    a = (t) => {
      if (!o(t) || 0 === t.getClientRects().length) return !1;
      const e =
          'visible' === getComputedStyle(t).getPropertyValue('visibility'),
        i = t.closest('details:not([open])');
      if (!i) return e;
      if (i !== t) {
        const e = t.closest('summary');
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    l = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains('disabled') ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute('disabled') && 'false' !== t.getAttribute('disabled')),
    c = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ('function' == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
          ? c(t.parentNode)
          : null;
    },
    h = () => {},
    d = (t) => {
      t.offsetHeight;
    },
    u = () =>
      window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')
        ? window.jQuery
        : null,
    f = [],
    p = () => 'rtl' === document.documentElement.dir,
    g = (t) => {
      var e;
      (e = () => {
        const e = u();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        'loading' === document.readyState
          ? (f.length ||
              document.addEventListener('DOMContentLoaded', () => {
                for (const t of f) t();
              }),
            f.push(e))
          : e();
    },
    m = (t) => {
      'function' == typeof t && t();
    },
    _ = (e, i, n = !0) => {
      if (!n) return void m(e);
      const o =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(',')[0]),
              (i = i.split(',')[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(i) + 5;
      let r = !1;
      const a = ({ target: n }) => {
        n === i && ((r = !0), i.removeEventListener(t, a), m(e));
      };
      i.addEventListener(t, a),
        setTimeout(() => {
          r || s(i);
        }, o);
    },
    b = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o
        ? !i && n
          ? t[s - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          n && (o = (o + s) % s),
          t[Math.max(0, Math.min(o, s - 1))]);
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    A = {};
  let E = 1;
  const T = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
    C = new Set([
      'click',
      'dblclick',
      'mouseup',
      'mousedown',
      'contextmenu',
      'mousewheel',
      'DOMMouseScroll',
      'mouseover',
      'mouseout',
      'mousemove',
      'selectstart',
      'selectend',
      'keydown',
      'keypress',
      'keyup',
      'orientationchange',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointerleave',
      'pointercancel',
      'gesturestart',
      'gesturechange',
      'gestureend',
      'focus',
      'blur',
      'change',
      'reset',
      'select',
      'submit',
      'focusin',
      'focusout',
      'load',
      'unload',
      'beforeunload',
      'resize',
      'move',
      'DOMContentLoaded',
      'readystatechange',
      'error',
      'abort',
      'scroll',
    ]);
  function O(t, e) {
    return (e && `${e}::${E++}`) || t.uidEvent || E++;
  }
  function x(t) {
    const e = O(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function k(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function L(t, e, i) {
    const n = 'string' == typeof e,
      s = n ? i : e || i;
    let o = N(t);
    return C.has(o) || (o = t), [n, s, o];
  }
  function D(t, e, i, n, s) {
    if ('string' != typeof e || !t) return;
    let [o, r, a] = L(e, i, n);
    if (e in T) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      r = t(r);
    }
    const l = x(t),
      c = l[a] || (l[a] = {}),
      h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = O(r, e.replace(v, '')),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      j(s, { delegateTarget: r }),
                      n.oneOff && P.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
            };
          })(t, i, r)
        : (function (t, e) {
            return function i(n) {
              return (
                j(n, { delegateTarget: t }),
                i.oneOff && P.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, r);
    (u.delegationSelector = o ? i : null),
      (u.callable = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function S(t, e, i, n, s) {
    const o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function I(t, e, i, n) {
    const s = e[i] || {};
    for (const o of Object.keys(s))
      if (o.includes(n)) {
        const n = s[o];
        S(t, e, i, n.callable, n.delegationSelector);
      }
  }
  function N(t) {
    return (t = t.replace(y, '')), T[t] || t;
  }
  const P = {
    on(t, e, i, n) {
      D(t, e, i, n, !1);
    },
    one(t, e, i, n) {
      D(t, e, i, n, !0);
    },
    off(t, e, i, n) {
      if ('string' != typeof e || !t) return;
      const [s, o, r] = L(e, i, n),
        a = r !== e,
        l = x(t),
        c = l[r] || {},
        h = e.startsWith('.');
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) I(t, l, i, e.slice(1));
        for (const i of Object.keys(c)) {
          const n = i.replace(w, '');
          if (!a || e.includes(n)) {
            const e = c[i];
            S(t, l, r, e.callable, e.delegationSelector);
          }
        }
      } else {
        if (!Object.keys(c).length) return;
        S(t, l, r, o, s ? i : null);
      }
    },
    trigger(t, e, i) {
      if ('string' != typeof e || !t) return null;
      const n = u();
      let s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== N(e) &&
        n &&
        ((s = n.Event(e, i)),
        n(t).trigger(s),
        (o = !s.isPropagationStopped()),
        (r = !s.isImmediatePropagationStopped()),
        (a = s.isDefaultPrevented()));
      let l = new Event(e, { bubbles: o, cancelable: !0 });
      return (
        (l = j(l, i)),
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && s && s.preventDefault(),
        l
      );
    },
  };
  function j(t, e) {
    for (const [i, n] of Object.entries(e || {}))
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, { configurable: !0, get: () => n });
      }
    return t;
  }
  const M = new Map(),
    H = {
      set(t, e, i) {
        M.has(t) || M.set(t, new Map());
        const n = M.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`
            );
      },
      get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
      remove(t, e) {
        if (!M.has(t)) return;
        const i = M.get(t);
        i.delete(e), 0 === i.size && M.delete(t);
      },
    };
  function $(t) {
    if ('true' === t) return !0;
    if ('false' === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ('' === t || 'null' === t) return null;
    if ('string' != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function W(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const B = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${W(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${W(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith('bs') && !t.startsWith('bsConfig')
        );
      for (const n of i) {
        let i = n.replace(/^bs/, '');
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = $(t.dataset[n]));
      }
      return e;
    },
    getDataAttribute: (t, e) => $(t.getAttribute(`data-bs-${W(e)}`)),
  };
  class F {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = o(e) ? B.getDataAttribute(e, 'config') : {};
      return {
        ...this.constructor.Default,
        ...('object' == typeof i ? i : {}),
        ...(o(e) ? B.getDataAttributes(e) : {}),
        ...('object' == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const n of Object.keys(e)) {
        const s = e[n],
          r = t[n],
          a = o(r)
            ? 'element'
            : null == (i = r)
              ? `${i}`
              : Object.prototype.toString
                  .call(i)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      }
      var i;
    }
  }
  class z extends F {
    constructor(t, e) {
      super(),
        (t = r(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          H.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      H.remove(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      _(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return H.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, 'object' == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return '5.2.2';
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  const q = (t, e = 'hide') => {
    const i = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    P.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
      if ((['A', 'AREA'].includes(this.tagName) && i.preventDefault(), l(this)))
        return;
      const o = n(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(o)[e]();
    });
  };
  class R extends z {
    static get NAME() {
      return 'alert';
    }
    close() {
      if (P.trigger(this._element, 'close.bs.alert').defaultPrevented) return;
      this._element.classList.remove('show');
      const t = this._element.classList.contains('fade');
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        P.trigger(this._element, 'closed.bs.alert'),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = R.getOrCreateInstance(this);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  q(R, 'close'), g(R);
  const V = '[data-bs-toggle="button"]';
  class K extends z {
    static get NAME() {
      return 'button';
    }
    toggle() {
      this._element.setAttribute(
        'aria-pressed',
        this._element.classList.toggle('active')
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = K.getOrCreateInstance(this);
        'toggle' === t && e[t]();
      });
    }
  }
  P.on(document, 'click.bs.button.data-api', V, (t) => {
    t.preventDefault();
    const e = t.target.closest(V);
    K.getOrCreateInstance(e).toggle();
  }),
    g(K);
  const Q = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n; ) i.push(n), (n = n.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          'a',
          'button',
          'input',
          'textarea',
          'select',
          'details',
          '[tabindex]',
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(',');
        return this.find(e, t).filter((t) => !l(t) && a(t));
      },
    },
    X = { endCallback: null, leftCallback: null, rightCallback: null },
    Y = {
      endCallback: '(function|null)',
      leftCallback: '(function|null)',
      rightCallback: '(function|null)',
    };
  class U extends F {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          U.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return X;
    }
    static get DefaultType() {
      return Y;
    }
    static get NAME() {
      return 'swipe';
    }
    dispose() {
      P.off(this._element, '.bs.swipe');
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        m(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (P.on(this._element, 'pointerdown.bs.swipe', (t) => this._start(t)),
          P.on(this._element, 'pointerup.bs.swipe', (t) => this._end(t)),
          this._element.classList.add('pointer-event'))
        : (P.on(this._element, 'touchstart.bs.swipe', (t) => this._start(t)),
          P.on(this._element, 'touchmove.bs.swipe', (t) => this._move(t)),
          P.on(this._element, 'touchend.bs.swipe', (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ('pen' === t.pointerType || 'touch' === t.pointerType)
      );
    }
    static isSupported() {
      return (
        'ontouchstart' in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const G = 'next',
    J = 'prev',
    Z = 'left',
    tt = 'right',
    et = 'slid.bs.carousel',
    it = 'carousel',
    nt = 'active',
    st = { ArrowLeft: tt, ArrowRight: Z },
    ot = {
      interval: 5e3,
      keyboard: !0,
      pause: 'hover',
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    rt = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      pause: '(string|boolean)',
      ride: '(boolean|string)',
      touch: 'boolean',
      wrap: 'boolean',
    };
  class at extends z {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = Q.findOne(
          '.carousel-indicators',
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === it && this.cycle();
    }
    static get Default() {
      return ot;
    }
    static get DefaultType() {
      return rt;
    }
    static get NAME() {
      return 'carousel';
    }
    next() {
      this._slide(G);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(J);
    }
    pause() {
      this._isSliding && s(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? P.one(this._element, et, () => this.cycle())
          : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding)
        return void P.one(this._element, et, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? G : J;
      this._slide(n, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard &&
        P.on(this._element, 'keydown.bs.carousel', (t) => this._keydown(t)),
        'hover' === this._config.pause &&
          (P.on(this._element, 'mouseenter.bs.carousel', () => this.pause()),
          P.on(this._element, 'mouseleave.bs.carousel', () =>
            this._maybeEnableCycle()
          )),
        this._config.touch && U.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of Q.find('.carousel-item img', this._element))
        P.on(t, 'dragstart.bs.carousel', (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(Z)),
        rightCallback: () => this._slide(this._directionToOrder(tt)),
        endCallback: () => {
          'hover' === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new U(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = st[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = Q.findOne('.active', this._indicatorsElement);
      e.classList.remove(nt), e.removeAttribute('aria-current');
      const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(nt), i.setAttribute('aria-current', 'true'));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === G,
        s = e || b(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = (e) =>
          P.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (r('slide.bs.carousel').defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = s);
      const l = n ? 'carousel-item-start' : 'carousel-item-end',
        c = n ? 'carousel-item-next' : 'carousel-item-prev';
      s.classList.add(c),
        d(s),
        i.classList.add(l),
        s.classList.add(l),
        this._queueCallback(
          () => {
            s.classList.remove(l, c),
              s.classList.add(nt),
              i.classList.remove(nt, c, l),
              (this._isSliding = !1),
              r(et);
          },
          i,
          this._isAnimated()
        ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains('slide');
    }
    _getActive() {
      return Q.findOne('.active.carousel-item', this._element);
    }
    _getItems() {
      return Q.find('.carousel-item', this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return p() ? (t === Z ? J : G) : t === Z ? G : J;
    }
    _orderToDirection(t) {
      return p() ? (t === J ? Z : tt) : t === J ? tt : Z;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = at.getOrCreateInstance(this, t);
        if ('number' != typeof t) {
          if ('string' == typeof t) {
            if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }
  }
  P.on(
    document,
    'click.bs.carousel.data-api',
    '[data-bs-slide], [data-bs-slide-to]',
    function (t) {
      const e = n(this);
      if (!e || !e.classList.contains(it)) return;
      t.preventDefault();
      const i = at.getOrCreateInstance(e),
        s = this.getAttribute('data-bs-slide-to');
      return s
        ? (i.to(s), void i._maybeEnableCycle())
        : 'next' === B.getDataAttribute(this, 'slide')
          ? (i.next(), void i._maybeEnableCycle())
          : (i.prev(), void i._maybeEnableCycle());
    }
  ),
    P.on(window, 'load.bs.carousel.data-api', () => {
      const t = Q.find('[data-bs-ride="carousel"]');
      for (const e of t) at.getOrCreateInstance(e);
    }),
    g(at);
  const lt = 'show',
    ct = 'collapse',
    ht = 'collapsing',
    dt = '[data-bs-toggle="collapse"]',
    ut = { parent: null, toggle: !0 },
    ft = { parent: '(null|element)', toggle: 'boolean' };
  class pt extends z {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const n = Q.find(dt);
      for (const t of n) {
        const e = i(t),
          n = Q.find(e).filter((t) => t === this._element);
        null !== e && n.length && this._triggerArray.push(t);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return ut;
    }
    static get DefaultType() {
      return ft;
    }
    static get NAME() {
      return 'collapse';
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            '.collapse.show, .collapse.collapsing'
          )
            .filter((t) => t !== this._element)
            .map((t) => pt.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      if (P.trigger(this._element, 'show.bs.collapse').defaultPrevented) return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(ct),
        this._element.classList.add(ht),
        (this._element.style[e] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(ht),
            this._element.classList.add(ct, lt),
            (this._element.style[e] = ''),
            P.trigger(this._element, 'shown.bs.collapse');
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, 'hide.bs.collapse').defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] =
        `${this._element.getBoundingClientRect()[t]}px`),
        d(this._element),
        this._element.classList.add(ht),
        this._element.classList.remove(ct, lt);
      for (const t of this._triggerArray) {
        const e = n(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ''),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(ht),
              this._element.classList.add(ct),
              P.trigger(this._element, 'hidden.bs.collapse');
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(lt);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = r(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains('collapse-horizontal')
        ? 'width'
        : 'height';
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(dt);
      for (const e of t) {
        const t = n(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = Q.find(':scope .collapse .collapse', this._config.parent);
      return Q.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle('collapsed', !e),
            i.setAttribute('aria-expanded', e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        'string' == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = pt.getOrCreateInstance(this, e);
          if ('string' == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  P.on(document, 'click.bs.collapse.data-api', dt, function (t) {
    ('A' === t.target.tagName ||
      (t.delegateTarget && 'A' === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = i(this),
      n = Q.find(e);
    for (const t of n) pt.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    g(pt);
  var gt = 'top',
    mt = 'bottom',
    _t = 'right',
    bt = 'left',
    vt = 'auto',
    yt = [gt, mt, _t, bt],
    wt = 'start',
    At = 'end',
    Et = 'clippingParents',
    Tt = 'viewport',
    Ct = 'popper',
    Ot = 'reference',
    xt = yt.reduce(function (t, e) {
      return t.concat([e + '-' + wt, e + '-' + At]);
    }, []),
    kt = [].concat(yt, [vt]).reduce(function (t, e) {
      return t.concat([e, e + '-' + wt, e + '-' + At]);
    }, []),
    Lt = 'beforeRead',
    Dt = 'read',
    St = 'afterRead',
    It = 'beforeMain',
    Nt = 'main',
    Pt = 'afterMain',
    jt = 'beforeWrite',
    Mt = 'write',
    Ht = 'afterWrite',
    $t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht];
  function Wt(t) {
    return t ? (t.nodeName || '').toLowerCase() : null;
  }
  function Bt(t) {
    if (null == t) return window;
    if ('[object Window]' !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Ft(t) {
    return t instanceof Bt(t).Element || t instanceof Element;
  }
  function zt(t) {
    return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement;
  }
  function qt(t) {
    return (
      'undefined' != typeof ShadowRoot &&
      (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const Rt = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        zt(s) &&
          Wt(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? '' : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: '0',
            top: '0',
            margin: '0',
          },
          arrow: { position: 'absolute' },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ''), t;
              }, {});
            zt(n) &&
              Wt(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ['computeStyles'],
  };
  function Vt(t) {
    return t.split('-')[0];
  }
  var Kt = Math.max,
    Qt = Math.min,
    Xt = Math.round;
  function Yt() {
    var t = navigator.userAgentData;
    return null != t && t.brands
      ? t.brands
          .map(function (t) {
            return t.brand + '/' + t.version;
          })
          .join(' ')
      : navigator.userAgent;
  }
  function Ut() {
    return !/^((?!chrome|android).)*safari/i.test(Yt());
  }
  function Gt(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e &&
      zt(t) &&
      ((s = (t.offsetWidth > 0 && Xt(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && Xt(n.height) / t.offsetHeight) || 1));
    var r = (Ft(t) ? Bt(t) : window).visualViewport,
      a = !Ut() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c,
    };
  }
  function Jt(t) {
    var e = Gt(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function Zt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && qt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function te(t) {
    return Bt(t).getComputedStyle(t);
  }
  function ee(t) {
    return ['table', 'td', 'th'].indexOf(Wt(t)) >= 0;
  }
  function ie(t) {
    return ((Ft(t) ? t.ownerDocument : t.document) || window.document)
      .documentElement;
  }
  function ne(t) {
    return 'html' === Wt(t)
      ? t
      : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || ie(t);
  }
  function se(t) {
    return zt(t) && 'fixed' !== te(t).position ? t.offsetParent : null;
  }
  function oe(t) {
    for (var e = Bt(t), i = se(t); i && ee(i) && 'static' === te(i).position; )
      i = se(i);
    return i &&
      ('html' === Wt(i) || ('body' === Wt(i) && 'static' === te(i).position))
      ? e
      : i ||
          (function (t) {
            var e = /firefox/i.test(Yt());
            if (/Trident/i.test(Yt()) && zt(t) && 'fixed' === te(t).position)
              return null;
            var i = ne(t);
            for (
              qt(i) && (i = i.host);
              zt(i) && ['html', 'body'].indexOf(Wt(i)) < 0;

            ) {
              var n = te(i);
              if (
                'none' !== n.transform ||
                'none' !== n.perspective ||
                'paint' === n.contain ||
                -1 !== ['transform', 'perspective'].indexOf(n.willChange) ||
                (e && 'filter' === n.willChange) ||
                (e && n.filter && 'none' !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function re(t) {
    return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
  }
  function ae(t, e, i) {
    return Kt(t, Qt(e, i));
  }
  function le(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function ce(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const he = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = Vt(i.placement),
        l = re(a),
        c = [bt, _t].indexOf(a) >= 0 ? 'height' : 'width';
      if (o && r) {
        var h = (function (t, e) {
            return le(
              'number' !=
                typeof (t =
                  'function' == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : ce(t, yt)
            );
          })(s.padding, i),
          d = Jt(o),
          u = 'y' === l ? gt : bt,
          f = 'y' === l ? mt : _t,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          g = r[l] - i.rects.reference[l],
          m = oe(o),
          _ = m ? ('y' === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
          b = p / 2 - g / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = ae(v, w, y),
          E = l;
        i.modifiersData[n] = (((e = {})[E] = A), (e.centerOffset = A - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? '[data-popper-arrow]' : i;
      null != n &&
        ('string' != typeof n || (n = e.elements.popper.querySelector(n))) &&
        Zt(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  };
  function de(t) {
    return t.split('-')[1];
  }
  var ue = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
  function fe(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      g = void 0 === p ? 0 : p,
      m = 'function' == typeof h ? h({ x: f, y: g }) : { x: f, y: g };
    (f = m.x), (g = m.y);
    var _ = r.hasOwnProperty('x'),
      b = r.hasOwnProperty('y'),
      v = bt,
      y = gt,
      w = window;
    if (c) {
      var A = oe(i),
        E = 'clientHeight',
        T = 'clientWidth';
      A === Bt(i) &&
        'static' !== te((A = ie(i))).position &&
        'absolute' === a &&
        ((E = 'scrollHeight'), (T = 'scrollWidth')),
        (s === gt || ((s === bt || s === _t) && o === At)) &&
          ((y = mt),
          (g -=
            (d && A === w && w.visualViewport
              ? w.visualViewport.height
              : A[E]) - n.height),
          (g *= l ? 1 : -1)),
        (s !== bt && ((s !== gt && s !== mt) || o !== At)) ||
          ((v = _t),
          (f -=
            (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) -
            n.width),
          (f *= l ? 1 : -1));
    }
    var C,
      O = Object.assign({ position: a }, c && ue),
      x =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: Xt(e * n) / n || 0, y: Xt(i * n) / n || 0 };
            })({ x: f, y: g })
          : { x: f, y: g };
    return (
      (f = x.x),
      (g = x.y),
      l
        ? Object.assign(
            {},
            O,
            (((C = {})[y] = b ? '0' : ''),
            (C[v] = _ ? '0' : ''),
            (C.transform =
              (w.devicePixelRatio || 1) <= 1
                ? 'translate(' + f + 'px, ' + g + 'px)'
                : 'translate3d(' + f + 'px, ' + g + 'px, 0)'),
            C)
          )
        : Object.assign(
            {},
            O,
            (((e = {})[y] = b ? g + 'px' : ''),
            (e[v] = _ ? f + 'px' : ''),
            (e.transform = ''),
            e)
          )
    );
  }
  const pe = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: Vt(e.placement),
          variation: de(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: 'fixed' === e.options.strategy,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          fe(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            fe(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: 'absolute',
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          'data-popper-placement': e.placement,
        }));
    },
    data: {},
  };
  var ge = { passive: !0 };
  const me = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Bt(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener('scroll', i.update, ge);
          }),
        a && l.addEventListener('resize', i.update, ge),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener('scroll', i.update, ge);
            }),
            a && l.removeEventListener('resize', i.update, ge);
        }
      );
    },
    data: {},
  };
  var _e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  function be(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return _e[t];
    });
  }
  var ve = { start: 'end', end: 'start' };
  function ye(t) {
    return t.replace(/start|end/g, function (t) {
      return ve[t];
    });
  }
  function we(t) {
    var e = Bt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Ae(t) {
    return Gt(ie(t)).left + we(t).scrollLeft;
  }
  function Ee(t) {
    var e = te(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Te(t) {
    return ['html', 'body', '#document'].indexOf(Wt(t)) >= 0
      ? t.ownerDocument.body
      : zt(t) && Ee(t)
        ? t
        : Te(ne(t));
  }
  function Ce(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Te(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Bt(n),
      r = s ? [o].concat(o.visualViewport || [], Ee(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Ce(ne(r)));
  }
  function Oe(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function xe(t, e, i) {
    return e === Tt
      ? Oe(
          (function (t, e) {
            var i = Bt(t),
              n = ie(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              (o = s.width), (r = s.height);
              var c = Ut();
              (c || (!c && 'fixed' === e)) &&
                ((a = s.offsetLeft), (l = s.offsetTop));
            }
            return { width: o, height: r, x: a + Ae(t), y: l };
          })(t, i)
        )
      : Ft(e)
        ? (function (t, e) {
            var i = Gt(t, !1, 'fixed' === e);
            return (
              (i.top = i.top + t.clientTop),
              (i.left = i.left + t.clientLeft),
              (i.bottom = i.top + t.clientHeight),
              (i.right = i.left + t.clientWidth),
              (i.width = t.clientWidth),
              (i.height = t.clientHeight),
              (i.x = i.left),
              (i.y = i.top),
              i
            );
          })(e, i)
        : Oe(
            (function (t) {
              var e,
                i = ie(t),
                n = we(t),
                s = null == (e = t.ownerDocument) ? void 0 : e.body,
                o = Kt(
                  i.scrollWidth,
                  i.clientWidth,
                  s ? s.scrollWidth : 0,
                  s ? s.clientWidth : 0
                ),
                r = Kt(
                  i.scrollHeight,
                  i.clientHeight,
                  s ? s.scrollHeight : 0,
                  s ? s.clientHeight : 0
                ),
                a = -n.scrollLeft + Ae(t),
                l = -n.scrollTop;
              return (
                'rtl' === te(s || i).direction &&
                  (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o),
                { width: o, height: r, x: a, y: l }
              );
            })(ie(t))
          );
  }
  function ke(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? Vt(s) : null,
      r = s ? de(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case gt:
        e = { x: a, y: i.y - n.height };
        break;
      case mt:
        e = { x: a, y: i.y + i.height };
        break;
      case _t:
        e = { x: i.x + i.width, y: l };
        break;
      case bt:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? re(o) : null;
    if (null != c) {
      var h = 'y' === c ? 'height' : 'width';
      switch (r) {
        case wt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case At:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? Et : a,
      c = i.rootBoundary,
      h = void 0 === c ? Tt : c,
      d = i.elementContext,
      u = void 0 === d ? Ct : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      g = i.padding,
      m = void 0 === g ? 0 : g,
      _ = le('number' != typeof m ? m : ce(m, yt)),
      b = u === Ct ? Ot : Ct,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = (function (t, e, i, n) {
        var s =
            'clippingParents' === e
              ? (function (t) {
                  var e = Ce(ne(t)),
                    i =
                      ['absolute', 'fixed'].indexOf(te(t).position) >= 0 &&
                      zt(t)
                        ? oe(t)
                        : t;
                  return Ft(i)
                    ? e.filter(function (t) {
                        return Ft(t) && Zt(t, i) && 'body' !== Wt(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(
            function (e, i) {
              var s = xe(t, i, n);
              return (
                (e.top = Kt(s.top, e.top)),
                (e.right = Qt(s.right, e.right)),
                (e.bottom = Qt(s.bottom, e.bottom)),
                (e.left = Kt(s.left, e.left)),
                e
              );
            },
            xe(t, r, n)
          );
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      })(Ft(y) ? y : y.contextElement || ie(t.elements.popper), l, h, r),
      A = Gt(t.elements.reference),
      E = ke({ reference: A, element: v, strategy: 'absolute', placement: s }),
      T = Oe(Object.assign({}, v, E)),
      C = u === Ct ? T : A,
      O = {
        top: w.top - C.top + _.top,
        bottom: C.bottom - w.bottom + _.bottom,
        left: w.left - C.left + _.left,
        right: C.right - w.right + _.right,
      },
      x = t.modifiersData.offset;
    if (u === Ct && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [_t, mt].indexOf(t) >= 0 ? 1 : -1,
          i = [gt, mt].indexOf(t) >= 0 ? 'y' : 'x';
        O[t] += k[i] * e;
      });
    }
    return O;
  }
  function De(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? kt : l,
      h = de(n),
      d = h
        ? a
          ? xt
          : xt.filter(function (t) {
              return de(t) === h;
            })
        : yt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = Le(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[Vt(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const Se = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            g = i.allowedAutoPlacements,
            m = e.options.placement,
            _ = Vt(m),
            b =
              l ||
              (_ !== m && p
                ? (function (t) {
                    if (Vt(t) === vt) return [];
                    var e = be(t);
                    return [ye(t), e, ye(e)];
                  })(m)
                : [be(m)]),
            v = [m].concat(b).reduce(function (t, i) {
              return t.concat(
                Vt(i) === vt
                  ? De(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: g,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            A = new Map(),
            E = !0,
            T = v[0],
            C = 0;
          C < v.length;
          C++
        ) {
          var O = v[C],
            x = Vt(O),
            k = de(O) === wt,
            L = [gt, mt].indexOf(x) >= 0,
            D = L ? 'width' : 'height',
            S = Le(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            I = L ? (k ? _t : bt) : k ? mt : gt;
          y[D] > w[D] && (I = be(I));
          var N = be(I),
            P = [];
          if (
            (o && P.push(S[x] <= 0),
            a && P.push(S[I] <= 0, S[N] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (T = O), (E = !1);
            break;
          }
          A.set(O, P);
        }
        if (E)
          for (
            var j = function (t) {
                var e = v.find(function (e) {
                  var i = A.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), 'break';
              },
              M = p ? 3 : 1;
            M > 0 && 'break' !== j(M);
            M--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 },
  };
  function Ie(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function Ne(t) {
    return [gt, _t, mt, bt].some(function (e) {
      return t[e] >= 0;
    });
  }
  const Pe = {
      name: 'hide',
      enabled: !0,
      phase: 'main',
      requiresIfExists: ['preventOverflow'],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Le(e, { elementContext: 'reference' }),
          a = Le(e, { altBoundary: !0 }),
          l = Ie(r, n),
          c = Ie(a, s, o),
          h = Ne(l),
          d = Ne(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            'data-popper-reference-hidden': h,
            'data-popper-escaped': d,
          }));
      },
    },
    je = {
      name: 'offset',
      enabled: !0,
      phase: 'main',
      requires: ['popperOffsets'],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = kt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = Vt(t),
                  s = [bt, gt].indexOf(n) >= 0 ? -1 : 1,
                  o =
                    'function' == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  r = o[0],
                  a = o[1];
                return (
                  (r = r || 0),
                  (a = (a || 0) * s),
                  [bt, _t].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                );
              })(i, e.rects, o)),
              t
            );
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += l),
          (e.modifiersData.popperOffsets.y += c)),
          (e.modifiersData[n] = r);
      },
    },
    Me = {
      name: 'popperOffsets',
      enabled: !0,
      phase: 'read',
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = ke({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: 'absolute',
          placement: e.placement,
        });
      },
      data: {},
    },
    He = {
      name: 'preventOverflow',
      enabled: !0,
      phase: 'main',
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          g = void 0 === p ? 0 : p,
          m = Le(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h,
          }),
          _ = Vt(e.placement),
          b = de(e.placement),
          v = !b,
          y = re(_),
          w = 'x' === y ? 'y' : 'x',
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C =
            'function' == typeof g
              ? g(Object.assign({}, e.rects, { placement: e.placement }))
              : g,
          O =
            'number' == typeof C
              ? { mainAxis: C, altAxis: C }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
          x = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null,
          k = { x: 0, y: 0 };
        if (A) {
          if (o) {
            var L,
              D = 'y' === y ? gt : bt,
              S = 'y' === y ? mt : _t,
              I = 'y' === y ? 'height' : 'width',
              N = A[y],
              P = N + m[D],
              j = N - m[S],
              M = f ? -T[I] / 2 : 0,
              H = b === wt ? E[I] : T[I],
              $ = b === wt ? -T[I] : -E[I],
              W = e.elements.arrow,
              B = f && W ? Jt(W) : { width: 0, height: 0 },
              F = e.modifiersData['arrow#persistent']
                ? e.modifiersData['arrow#persistent'].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              z = F[D],
              q = F[S],
              R = ae(0, E[I], B[I]),
              V = v
                ? E[I] / 2 - M - R - z - O.mainAxis
                : H - R - z - O.mainAxis,
              K = v
                ? -E[I] / 2 + M + R + q + O.mainAxis
                : $ + R + q + O.mainAxis,
              Q = e.elements.arrow && oe(e.elements.arrow),
              X = Q ? ('y' === y ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = N + K - Y,
              G = ae(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j);
            (A[y] = G), (k[y] = G - N);
          }
          if (a) {
            var J,
              Z = 'x' === y ? gt : bt,
              tt = 'x' === y ? mt : _t,
              et = A[w],
              it = 'y' === w ? 'height' : 'width',
              nt = et + m[Z],
              st = et - m[tt],
              ot = -1 !== [gt, bt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct =
                f && ot
                  ? (function (t, e, i) {
                      var n = ae(t, e, i);
                      return n > i ? i : n;
                    })(at, et, lt)
                  : ae(f ? at : nt, et, f ? lt : st);
            (A[w] = ct), (k[w] = ct - et);
          }
          e.modifiersData[n] = k;
        }
      },
      requiresIfExists: ['offset'],
    };
  function $e(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = zt(e),
      r =
        zt(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = Xt(e.width) / t.offsetWidth || 1,
            n = Xt(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      a = ie(e),
      l = Gt(t, r, i),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (o || (!o && !i)) &&
        (('body' !== Wt(e) || Ee(a)) &&
          (c =
            (n = e) !== Bt(n) && zt(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : we(n)),
        zt(e)
          ? (((h = Gt(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : a && (h.x = Ae(a))),
      {
        x: l.left + c.scrollLeft - h.x,
        y: l.top + c.scrollTop - h.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function We(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Be = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
  function Fe() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && 'function' == typeof t.getBoundingClientRect);
    });
  }
  function ze(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Be : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: 'bottom',
          orderedModifiers: [],
          options: Object.assign({}, Be, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = 'function' == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: Ft(t)
                  ? Ce(t)
                  : t.contextElement
                    ? Ce(t.contextElement)
                    : [],
                popper: Ce(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = We(t);
                return $t.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ('function' == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (Fe(e, i)) {
                (a.rects = {
                  reference: $e(e, oe(i), 'fixed' === a.options.strategy),
                  popper: Jt(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    'function' == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!Fe(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var qe = ze(),
    Re = ze({ defaultModifiers: [me, Me, pe, Rt] }),
    Ve = ze({ defaultModifiers: [me, Me, pe, Rt, je, Se, He, he, Pe] });
  const Ke = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          popperGenerator: ze,
          detectOverflow: Le,
          createPopperBase: qe,
          createPopper: Ve,
          createPopperLite: Re,
          top: gt,
          bottom: mt,
          right: _t,
          left: bt,
          auto: vt,
          basePlacements: yt,
          start: wt,
          end: At,
          clippingParents: Et,
          viewport: Tt,
          popper: Ct,
          reference: Ot,
          variationPlacements: xt,
          placements: kt,
          beforeRead: Lt,
          read: Dt,
          afterRead: St,
          beforeMain: It,
          main: Nt,
          afterMain: Pt,
          beforeWrite: jt,
          write: Mt,
          afterWrite: Ht,
          modifierPhases: $t,
          applyStyles: Rt,
          arrow: he,
          computeStyles: pe,
          eventListeners: me,
          flip: Se,
          hide: Pe,
          offset: je,
          popperOffsets: Me,
          preventOverflow: He,
        },
        Symbol.toStringTag,
        { value: 'Module' }
      )
    ),
    Qe = 'dropdown',
    Xe = 'ArrowUp',
    Ye = 'ArrowDown',
    Ue = 'click.bs.dropdown.data-api',
    Ge = 'keydown.bs.dropdown.data-api',
    Je = 'show',
    Ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    ti = `${Ze}.show`,
    ei = '.dropdown-menu',
    ii = p() ? 'top-end' : 'top-start',
    ni = p() ? 'top-start' : 'top-end',
    si = p() ? 'bottom-end' : 'bottom-start',
    oi = p() ? 'bottom-start' : 'bottom-end',
    ri = p() ? 'left-start' : 'right-start',
    ai = p() ? 'right-start' : 'left-start',
    li = {
      autoClose: !0,
      boundary: 'clippingParents',
      display: 'dynamic',
      offset: [0, 2],
      popperConfig: null,
      reference: 'toggle',
    },
    ci = {
      autoClose: '(boolean|string)',
      boundary: '(string|element)',
      display: 'string',
      offset: '(array|string|function)',
      popperConfig: '(null|object|function)',
      reference: '(string|element|object)',
    };
  class hi extends z {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          Q.next(this._element, ei)[0] ||
          Q.prev(this._element, ei)[0] ||
          Q.findOne(ei, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return li;
    }
    static get DefaultType() {
      return ci;
    }
    static get NAME() {
      return Qe;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (l(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!P.trigger(this._element, 'show.bs.dropdown', t).defaultPrevented) {
        if (
          (this._createPopper(),
          'ontouchstart' in document.documentElement &&
            !this._parent.closest('.navbar-nav'))
        )
          for (const t of [].concat(...document.body.children))
            P.on(t, 'mouseover', h);
        this._element.focus(),
          this._element.setAttribute('aria-expanded', !0),
          this._menu.classList.add(Je),
          this._element.classList.add(Je),
          P.trigger(this._element, 'shown.bs.dropdown', t);
      }
    }
    hide() {
      if (l(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!P.trigger(this._element, 'hide.bs.dropdown', t).defaultPrevented) {
        if ('ontouchstart' in document.documentElement)
          for (const t of [].concat(...document.body.children))
            P.off(t, 'mouseover', h);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(Je),
          this._element.classList.remove(Je),
          this._element.setAttribute('aria-expanded', 'false'),
          B.removeDataAttribute(this._menu, 'popper'),
          P.trigger(this._element, 'hidden.bs.dropdown', t);
      }
    }
    _getConfig(t) {
      if (
        'object' == typeof (t = super._getConfig(t)).reference &&
        !o(t.reference) &&
        'function' != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === Ke)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      'parent' === this._config.reference
        ? (t = this._parent)
        : o(this._config.reference)
          ? (t = r(this._config.reference))
          : 'object' == typeof this._config.reference &&
            (t = this._config.reference);
      const e = this._getPopperConfig();
      this._popper = Ve(t, this._menu, e);
    }
    _isShown() {
      return this._menu.classList.contains(Je);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains('dropend')) return ri;
      if (t.classList.contains('dropstart')) return ai;
      if (t.classList.contains('dropup-center')) return 'top';
      if (t.classList.contains('dropdown-center')) return 'bottom';
      const e =
        'end' ===
        getComputedStyle(this._menu).getPropertyValue('--bs-position').trim();
      return t.classList.contains('dropup') ? (e ? ni : ii) : e ? oi : si;
    }
    _detectNavbar() {
      return null !== this._element.closest('.navbar');
    }
    _getOffset() {
      const { offset: t } = this._config;
      return 'string' == typeof t
        ? t.split(',').map((t) => Number.parseInt(t, 10))
        : 'function' == typeof t
          ? (e) => t(e, this._element)
          : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: 'preventOverflow',
            options: { boundary: this._config.boundary },
          },
          { name: 'offset', options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || 'static' === this._config.display) &&
          (B.setDataAttribute(this._menu, 'popper', 'static'),
          (t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
        {
          ...t,
          ...('function' == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = Q.find(
        '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
        this._menu
      ).filter((t) => a(t));
      i.length && b(i, e, t === Ye, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = hi.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ('keyup' === t.type && 'Tab' !== t.key)) return;
      const e = Q.find(ti);
      for (const i of e) {
        const e = hi.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
          s = n.includes(e._menu);
        if (
          n.includes(e._element) ||
          ('inside' === e._config.autoClose && !s) ||
          ('outside' === e._config.autoClose && s)
        )
          continue;
        if (
          e._menu.contains(t.target) &&
          (('keyup' === t.type && 'Tab' === t.key) ||
            /input|select|option|textarea|form/i.test(t.target.tagName))
        )
          continue;
        const o = { relatedTarget: e._element };
        'click' === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = 'Escape' === t.key,
        n = [Xe, Ye].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = this.matches(Ze)
          ? this
          : Q.prev(this, Ze)[0] ||
            Q.next(this, Ze)[0] ||
            Q.findOne(Ze, t.delegateTarget.parentNode),
        o = hi.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
    }
  }
  P.on(document, Ge, Ze, hi.dataApiKeydownHandler),
    P.on(document, Ge, ei, hi.dataApiKeydownHandler),
    P.on(document, Ue, hi.clearMenus),
    P.on(document, 'keyup.bs.dropdown.data-api', hi.clearMenus),
    P.on(document, Ue, Ze, function (t) {
      t.preventDefault(), hi.getOrCreateInstance(this).toggle();
    }),
    g(hi);
  const di = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    ui = '.sticky-top',
    fi = 'padding-right',
    pi = 'margin-right';
  class gi {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, fi, (e) => e + t),
        this._setElementAttributes(di, fi, (e) => e + t),
        this._setElementAttributes(ui, pi, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow'),
        this._resetElementAttributes(this._element, fi),
        this._resetElementAttributes(di, fi),
        this._resetElementAttributes(ui, pi);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow'),
        (this._element.style.overflow = 'hidden');
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && B.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = B.getDataAttribute(t, e);
        null !== i
          ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if (o(t)) e(t);
      else for (const i of Q.find(t, this._element)) e(i);
    }
  }
  const mi = 'show',
    _i = 'mousedown.bs.backdrop',
    bi = {
      className: 'modal-backdrop',
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: 'body',
    },
    vi = {
      className: 'string',
      clickCallback: '(function|null)',
      isAnimated: 'boolean',
      isVisible: 'boolean',
      rootElement: '(element|string)',
    };
  class yi extends F {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return bi;
    }
    static get DefaultType() {
      return vi;
    }
    static get NAME() {
      return 'backdrop';
    }
    show(t) {
      if (!this._config.isVisible) return void m(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && d(e),
        e.classList.add(mi),
        this._emulateAnimation(() => {
          m(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(mi),
          this._emulateAnimation(() => {
            this.dispose(), m(t);
          }))
        : m(t);
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, _i),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement('div');
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add('fade'),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = r(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        P.on(t, _i, () => {
          m(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      _(t, this._getElement(), this._config.isAnimated);
    }
  }
  const wi = '.bs.focustrap',
    Ai = 'backward',
    Ei = { autofocus: !0, trapElement: null },
    Ti = { autofocus: 'boolean', trapElement: 'element' };
  class Ci extends F {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return Ei;
    }
    static get DefaultType() {
      return Ti;
    }
    static get NAME() {
      return 'focustrap';
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        P.off(document, wi),
        P.on(document, 'focusin.bs.focustrap', (t) => this._handleFocusin(t)),
        P.on(document, 'keydown.tab.bs.focustrap', (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), P.off(document, wi));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = Q.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === Ai
          ? i[i.length - 1].focus()
          : i[0].focus();
    }
    _handleKeydown(t) {
      'Tab' === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Ai : 'forward');
    }
  }
  const Oi = 'hidden.bs.modal',
    xi = 'show.bs.modal',
    ki = 'modal-open',
    Li = 'show',
    Di = 'modal-static',
    Si = { backdrop: !0, focus: !0, keyboard: !0 },
    Ii = {
      backdrop: '(boolean|string)',
      focus: 'boolean',
      keyboard: 'boolean',
    };
  class Ni extends z {
    constructor(t, e) {
      super(t, e),
        (this._dialog = Q.findOne('.modal-dialog', this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new gi()),
        this._addEventListeners();
    }
    static get Default() {
      return Si;
    }
    static get DefaultType() {
      return Ii;
    }
    static get NAME() {
      return 'modal';
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        P.trigger(this._element, xi, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(ki),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (P.trigger(this._element, 'hide.bs.modal').defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(Li),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated()
          )));
    }
    dispose() {
      for (const t of [window, this._dialog]) P.off(t, '.bs.modal');
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new yi({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Ci({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = 'block'),
        this._element.removeAttribute('aria-hidden'),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        (this._element.scrollTop = 0);
      const e = Q.findOne('.modal-body', this._dialog);
      e && (e.scrollTop = 0),
        d(this._element),
        this._element.classList.add(Li),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              P.trigger(this._element, 'shown.bs.modal', { relatedTarget: t });
          },
          this._dialog,
          this._isAnimated()
        );
    }
    _addEventListeners() {
      P.on(this._element, 'keydown.dismiss.bs.modal', (t) => {
        if ('Escape' === t.key)
          return this._config.keyboard
            ? (t.preventDefault(), void this.hide())
            : void this._triggerBackdropTransition();
      }),
        P.on(window, 'resize.bs.modal', () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        P.on(this._element, 'mousedown.dismiss.bs.modal', (t) => {
          P.one(this._element, 'click.dismiss.bs.modal', (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ('static' !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = 'none'),
        this._element.setAttribute('aria-hidden', !0),
        this._element.removeAttribute('aria-modal'),
        this._element.removeAttribute('role'),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(ki),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            P.trigger(this._element, Oi);
        });
    }
    _isAnimated() {
      return this._element.classList.contains('fade');
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, 'hidePrevented.bs.modal').defaultPrevented)
        return;
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      'hidden' === e ||
        this._element.classList.contains(Di) ||
        (t || (this._element.style.overflowY = 'hidden'),
        this._element.classList.add(Di),
        this._queueCallback(() => {
          this._element.classList.remove(Di),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = p() ? 'paddingLeft' : 'paddingRight';
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = p() ? 'paddingRight' : 'paddingLeft';
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ''),
        (this._element.style.paddingRight = '');
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Ni.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  P.on(
    document,
    'click.bs.modal.data-api',
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = n(this);
      ['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
        P.one(e, xi, (t) => {
          t.defaultPrevented ||
            P.one(e, Oi, () => {
              a(this) && this.focus();
            });
        });
      const i = Q.findOne('.modal.show');
      i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this);
    }
  ),
    q(Ni),
    g(Ni);
  const Pi = 'show',
    ji = 'showing',
    Mi = 'hiding',
    Hi = '.offcanvas.show',
    $i = 'hidePrevented.bs.offcanvas',
    Wi = 'hidden.bs.offcanvas',
    Bi = { backdrop: !0, keyboard: !0, scroll: !1 },
    Fi = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      scroll: 'boolean',
    };
  class zi extends z {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return Bi;
    }
    static get DefaultType() {
      return Fi;
    }
    static get NAME() {
      return 'offcanvas';
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        P.trigger(this._element, 'show.bs.offcanvas', { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new gi().hide(),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        this._element.classList.add(ji),
        this._queueCallback(
          () => {
            (this._config.scroll && !this._config.backdrop) ||
              this._focustrap.activate(),
              this._element.classList.add(Pi),
              this._element.classList.remove(ji),
              P.trigger(this._element, 'shown.bs.offcanvas', {
                relatedTarget: t,
              });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (P.trigger(this._element, 'hide.bs.offcanvas').defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add(Mi),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.classList.remove(Pi, Mi),
                this._element.removeAttribute('aria-modal'),
                this._element.removeAttribute('role'),
                this._config.scroll || new gi().reset(),
                P.trigger(this._element, Wi);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new yi({
        className: 'offcanvas-backdrop',
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              'static' !== this._config.backdrop
                ? this.hide()
                : P.trigger(this._element, $i);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new Ci({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, 'keydown.dismiss.bs.offcanvas', (t) => {
        'Escape' === t.key &&
          (this._config.keyboard ? this.hide() : P.trigger(this._element, $i));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = zi.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(
    document,
    'click.bs.offcanvas.data-api',
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = n(this);
      if ((['A', 'AREA'].includes(this.tagName) && t.preventDefault(), l(this)))
        return;
      P.one(e, Wi, () => {
        a(this) && this.focus();
      });
      const i = Q.findOne(Hi);
      i && i !== e && zi.getInstance(i).hide(),
        zi.getOrCreateInstance(e).toggle(this);
    }
  ),
    P.on(window, 'load.bs.offcanvas.data-api', () => {
      for (const t of Q.find(Hi)) zi.getOrCreateInstance(t).show();
    }),
    P.on(window, 'resize.bs.offcanvas', () => {
      for (const t of Q.find('[aria-modal][class*=show][class*=offcanvas-]'))
        'fixed' !== getComputedStyle(t).position &&
          zi.getOrCreateInstance(t).hide();
    }),
    q(zi),
    g(zi);
  const qi = new Set([
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ]),
    Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Vi =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ki = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !qi.has(i) || Boolean(Ri.test(t.nodeValue) || Vi.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    Qi = {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Xi = {
      allowList: Qi,
      content: {},
      extraClass: '',
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: '<div></div>',
    },
    Yi = {
      allowList: 'object',
      content: 'object',
      extraClass: '(string|function)',
      html: 'boolean',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      template: 'string',
    },
    Ui = {
      entry: '(string|element|function|null)',
      selector: '(string|element)',
    };
  class Gi extends F {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return Xi;
    }
    static get DefaultType() {
      return Yi;
    }
    static get NAME() {
      return 'TemplateFactory';
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement('div');
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(' ')), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, Ui);
    }
    _setContent(t, e, i) {
      const n = Q.findOne(i, t);
      n &&
        ((e = this._resolvePossibleFunction(e))
          ? o(e)
            ? this._putElementInTemplate(r(e), n)
            : this._config.html
              ? (n.innerHTML = this._maybeSanitize(e))
              : (n.textContent = e)
          : n.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && 'function' == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, 'text/html'),
              s = [].concat(...n.body.querySelectorAll('*'));
            for (const t of s) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue;
              }
              const n = [].concat(...t.attributes),
                s = [].concat(e['*'] || [], e[i] || []);
              for (const e of n) Ki(e, s) || t.removeAttribute(e.nodeName);
            }
            return n.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return 'function' == typeof t ? t(this) : t;
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ''), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const Ji = new Set(['sanitize', 'allowList', 'sanitizeFn']),
    Zi = 'fade',
    tn = 'show',
    en = '.modal',
    nn = 'hide.bs.modal',
    sn = 'hover',
    on = 'focus',
    rn = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: p() ? 'left' : 'right',
      BOTTOM: 'bottom',
      LEFT: p() ? 'right' : 'left',
    },
    an = {
      allowList: Qi,
      animation: !0,
      boundary: 'clippingParents',
      container: !1,
      customClass: '',
      delay: 0,
      fallbackPlacements: ['top', 'right', 'bottom', 'left'],
      html: !1,
      offset: [0, 0],
      placement: 'top',
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: '',
      trigger: 'hover focus',
    },
    ln = {
      allowList: 'object',
      animation: 'boolean',
      boundary: '(string|element)',
      container: '(string|element|boolean)',
      customClass: '(string|function)',
      delay: '(number|object)',
      fallbackPlacements: 'array',
      html: 'boolean',
      offset: '(array|string|function)',
      placement: '(string|function)',
      popperConfig: '(null|object|function)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      selector: '(string|boolean)',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
    };
  class cn extends z {
    constructor(t, e) {
      if (void 0 === Ke)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return an;
    }
    static get DefaultType() {
      return ln;
    }
    static get NAME() {
      return 'tooltip';
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(this._element.closest(en), nn, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._element.getAttribute('data-bs-original-title') &&
          this._element.setAttribute(
            'title',
            this._element.getAttribute('data-bs-original-title')
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ('none' === this._element.style.display)
        throw new Error('Please use show on visible elements');
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.eventName('show')),
        e = (
          c(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this.tip && (this.tip.remove(), (this.tip = null));
      const i = this._getTipElement();
      this._element.setAttribute('aria-describedby', i.getAttribute('id'));
      const { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          P.trigger(this._element, this.constructor.eventName('inserted'))),
        this._popper
          ? this._popper.update()
          : (this._popper = this._createPopper(i)),
        i.classList.add(tn),
        'ontouchstart' in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          P.on(t, 'mouseover', h);
      this._queueCallback(
        () => {
          P.trigger(this._element, this.constructor.eventName('shown')),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (!this._isShown()) return;
      if (
        P.trigger(this._element, this.constructor.eventName('hide'))
          .defaultPrevented
      )
        return;
      const t = this._getTipElement();
      if ((t.classList.remove(tn), 'ontouchstart' in document.documentElement))
        for (const t of [].concat(...document.body.children))
          P.off(t, 'mouseover', h);
      (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1),
        (this._isHovered = null),
        this._queueCallback(
          () => {
            this._isWithActiveTrigger() ||
              (this._isHovered || t.remove(),
              this._element.removeAttribute('aria-describedby'),
              P.trigger(this._element, this.constructor.eventName('hidden')),
              this._disposePopper());
          },
          this.tip,
          this._isAnimated()
        );
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(Zi, tn),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute('id', i), this._isAnimated() && e.classList.add(Zi), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new Gi({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { '.tooltip-inner': this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute('data-bs-original-title')
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(Zi))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(tn);
    }
    _createPopper(t) {
      const e =
          'function' == typeof this._config.placement
            ? this._config.placement.call(this, t, this._element)
            : this._config.placement,
        i = rn[e.toUpperCase()];
      return Ve(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return 'string' == typeof t
        ? t.split(',').map((t) => Number.parseInt(t, 10))
        : 'function' == typeof t
          ? (e) => t(e, this._element)
          : t;
    }
    _resolvePossibleFunction(t) {
      return 'function' == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: 'flip',
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: 'offset', options: { offset: this._getOffset() } },
          {
            name: 'preventOverflow',
            options: { boundary: this._config.boundary },
          },
          {
            name: 'arrow',
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: 'preSetPlacement',
            enabled: !0,
            phase: 'beforeMain',
            fn: (t) => {
              this._getTipElement().setAttribute(
                'data-popper-placement',
                t.state.placement
              );
            },
          },
        ],
      };
      return {
        ...e,
        ...('function' == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _setListeners() {
      const t = this._config.trigger.split(' ');
      for (const e of t)
        if ('click' === e)
          P.on(
            this._element,
            this.constructor.eventName('click'),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle();
            }
          );
        else if ('manual' !== e) {
          const t =
              e === sn
                ? this.constructor.eventName('mouseenter')
                : this.constructor.eventName('focusin'),
            i =
              e === sn
                ? this.constructor.eventName('mouseleave')
                : this.constructor.eventName('focusout');
          P.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger['focusin' === t.type ? on : sn] = !0), e._enter();
          }),
            P.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger['focusout' === t.type ? on : sn] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        P.on(this._element.closest(en), nn, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute('title');
      t &&
        (this._element.getAttribute('aria-label') ||
          this._element.textContent.trim() ||
          this._element.setAttribute('aria-label', t),
        this._element.setAttribute('data-bs-original-title', t),
        this._element.removeAttribute('title'));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = B.getDataAttributes(this._element);
      for (const t of Object.keys(e)) Ji.has(t) && delete e[t];
      return (
        (t = { ...e, ...('object' == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : r(t.container)),
        'number' == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        'number' == typeof t.title && (t.title = t.title.toString()),
        'number' == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return (t.selector = !1), (t.trigger = 'manual'), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = cn.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(cn);
  const hn = {
      ...cn.Default,
      content: '',
      offset: [0, 8],
      placement: 'right',
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: 'click',
    },
    dn = { ...cn.DefaultType, content: '(null|string|element|function)' };
  class un extends cn {
    static get Default() {
      return hn;
    }
    static get DefaultType() {
      return dn;
    }
    static get NAME() {
      return 'popover';
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        '.popover-header': this._getTitle(),
        '.popover-body': this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = un.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(un);
  const fn = 'click.bs.scrollspy',
    pn = 'active',
    gn = '[href]',
    mn = {
      offset: null,
      rootMargin: '0px 0px -25%',
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    _n = {
      offset: '(number|null)',
      rootMargin: 'string',
      smoothScroll: 'boolean',
      target: 'element',
      threshold: 'array',
    };
  class bn extends z {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          'visible' === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return mn;
    }
    static get DefaultType() {
      return _n;
    }
    static get NAME() {
      return 'scrollspy';
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = r(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        'string' == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(',')
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (P.off(this._config.target, fn),
        P.on(this._config.target, fn, gn, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo)
              return void i.scrollTo({ top: n, behavior: 'smooth' });
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if ((i(o), !n)) return;
        } else s || t || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = Q.find(gn, this._config.target);
      for (const e of t) {
        if (!e.hash || l(e)) continue;
        const t = Q.findOne(e.hash, this._element);
        a(t) &&
          (this._targetLinks.set(e.hash, e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(pn),
        this._activateParents(t),
        P.trigger(this._element, 'activate.bs.scrollspy', {
          relatedTarget: t,
        }));
    }
    _activateParents(t) {
      if (t.classList.contains('dropdown-item'))
        Q.findOne('.dropdown-toggle', t.closest('.dropdown')).classList.add(pn);
      else
        for (const e of Q.parents(t, '.nav, .list-group'))
          for (const t of Q.prev(
            e,
            '.nav-link, .nav-item > .nav-link, .list-group-item'
          ))
            t.classList.add(pn);
    }
    _clearActiveClass(t) {
      t.classList.remove(pn);
      const e = Q.find('[href].active', t);
      for (const t of e) t.classList.remove(pn);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = bn.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, 'load.bs.scrollspy.data-api', () => {
    for (const t of Q.find('[data-bs-spy="scroll"]')) bn.getOrCreateInstance(t);
  }),
    g(bn);
  const vn = 'ArrowLeft',
    yn = 'ArrowRight',
    wn = 'ArrowUp',
    An = 'ArrowDown',
    En = 'active',
    Tn = 'fade',
    Cn = 'show',
    On =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    xn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`;
  class kn extends z {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          P.on(this._element, 'keydown.bs.tab', (t) => this._keydown(t)));
    }
    static get NAME() {
      return 'tab';
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? P.trigger(e, 'hide.bs.tab', { relatedTarget: t }) : null;
      P.trigger(t, 'show.bs.tab', { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      t &&
        (t.classList.add(En),
        this._activate(n(t)),
        this._queueCallback(
          () => {
            'tab' === t.getAttribute('role')
              ? (t.removeAttribute('tabindex'),
                t.setAttribute('aria-selected', !0),
                this._toggleDropDown(t, !0),
                P.trigger(t, 'shown.bs.tab', { relatedTarget: e }))
              : t.classList.add(Cn);
          },
          t,
          t.classList.contains(Tn)
        ));
    }
    _deactivate(t, e) {
      t &&
        (t.classList.remove(En),
        t.blur(),
        this._deactivate(n(t)),
        this._queueCallback(
          () => {
            'tab' === t.getAttribute('role')
              ? (t.setAttribute('aria-selected', !1),
                t.setAttribute('tabindex', '-1'),
                this._toggleDropDown(t, !1),
                P.trigger(t, 'hidden.bs.tab', { relatedTarget: e }))
              : t.classList.remove(Cn);
          },
          t,
          t.classList.contains(Tn)
        ));
    }
    _keydown(t) {
      if (![vn, yn, wn, An].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = [yn, An].includes(t.key),
        i = b(
          this._getChildren().filter((t) => !l(t)),
          t.target,
          e,
          !0
        );
      i && (i.focus({ preventScroll: !0 }), kn.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return Q.find(xn, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, 'role', 'tablist');
      for (const t of e) this._setInitialAttributesOnChild(t);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute('aria-selected', e),
        i !== t && this._setAttributeIfNotExists(i, 'role', 'presentation'),
        e || t.setAttribute('tabindex', '-1'),
        this._setAttributeIfNotExists(t, 'role', 'tab'),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = n(t);
      e &&
        (this._setAttributeIfNotExists(e, 'role', 'tabpanel'),
        t.id &&
          this._setAttributeIfNotExists(e, 'aria-labelledby', `#${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains('dropdown')) return;
      const n = (t, n) => {
        const s = Q.findOne(t, i);
        s && s.classList.toggle(n, e);
      };
      n('.dropdown-toggle', En),
        n('.dropdown-menu', Cn),
        i.setAttribute('aria-expanded', e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(En);
    }
    _getInnerElement(t) {
      return t.matches(xn) ? t : Q.findOne(xn, t);
    }
    _getOuterElement(t) {
      return t.closest('.nav-item, .list-group-item') || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = kn.getOrCreateInstance(this);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(document, 'click.bs.tab', On, function (t) {
    ['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
      l(this) || kn.getOrCreateInstance(this).show();
  }),
    P.on(window, 'load.bs.tab', () => {
      for (const t of Q.find(
        '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
      ))
        kn.getOrCreateInstance(t);
    }),
    g(kn);
  const Ln = 'hide',
    Dn = 'show',
    Sn = 'showing',
    In = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
    Nn = { animation: !0, autohide: !0, delay: 5e3 };
  class Pn extends z {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return Nn;
    }
    static get DefaultType() {
      return In;
    }
    static get NAME() {
      return 'toast';
    }
    show() {
      P.trigger(this._element, 'show.bs.toast').defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add('fade'),
        this._element.classList.remove(Ln),
        d(this._element),
        this._element.classList.add(Dn, Sn),
        this._queueCallback(
          () => {
            this._element.classList.remove(Sn),
              P.trigger(this._element, 'shown.bs.toast'),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this.isShown() &&
        (P.trigger(this._element, 'hide.bs.toast').defaultPrevented ||
          (this._element.classList.add(Sn),
          this._queueCallback(
            () => {
              this._element.classList.add(Ln),
                this._element.classList.remove(Sn, Dn),
                P.trigger(this._element, 'hidden.bs.toast');
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(Dn),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(Dn);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = e;
          break;
        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, 'mouseover.bs.toast', (t) =>
        this._onInteraction(t, !0)
      ),
        P.on(this._element, 'mouseout.bs.toast', (t) =>
          this._onInteraction(t, !1)
        ),
        P.on(this._element, 'focusin.bs.toast', (t) =>
          this._onInteraction(t, !0)
        ),
        P.on(this._element, 'focusout.bs.toast', (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Pn.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    q(Pn),
    g(Pn),
    {
      Alert: R,
      Button: K,
      Carousel: at,
      Collapse: pt,
      Dropdown: hi,
      Modal: Ni,
      Offcanvas: zi,
      Popover: un,
      ScrollSpy: bn,
      Tab: kn,
      Toast: Pn,
      Tooltip: cn,
    }
  );
});

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 */
!(function (a) {
  'use strict';
  'function' == typeof define && define.amd ? define(['jquery'], a) : a(jQuery);
})(function (a) {
  'use strict';
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g))
      return (
        String(a).match(/^[0-9]*$/) && (a = Number(a)),
        String(a).match(/\-/) && (a = String(a).replace(/\-/g, '/')),
        new Date(a)
      );
    throw new Error("Couldn't cast `" + a + '` to a date object.');
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || '',
            l = h[3] || '',
            m = null;
          (h = h[2]),
            i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
            null !== m &&
              ('!' === k && (m = e(l, m)),
              '' === k && m < 10 && (m = '0' + m.toString()),
              (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, '%'));
    };
  }
  function e(a, b) {
    var c = 's',
      d = '';
    return (
      a &&
        ((a = a.replace(/(:|;|\s)/gi, '').split(/\,/)),
        1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
      Math.abs(b) > 1 ? c : d
    );
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1, defer: !1 };
  g.push(/^[0-9]*$/.source),
    g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    (g = new RegExp(g.join('|')));
  var i = {
      Y: 'years',
      m: 'months',
      n: 'daysToMonth',
      d: 'daysToWeek',
      w: 'weeks',
      W: 'weeksToMonth',
      H: 'hours',
      M: 'minutes',
      S: 'seconds',
      D: 'totalDays',
      I: 'totalHours',
      N: 'totalMinutes',
      T: 'totalSeconds',
    },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data('countdown-instance', this.instanceNumber),
        d &&
          ('function' == typeof d
            ? (this.$el.on('update.countdown', d),
              this.$el.on('stoped.countdown', d),
              this.$el.on('finish.countdown', d))
            : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval),
        (this.interval = null),
        this.dispatchEvent('stoped');
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this),
        (f[this.instanceNumber] = null),
        delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest('html').length) return void this.remove();
      var b,
        c = void 0 !== a._data(this.el, 'events'),
        d = new Date();
      (b = this.finalDate.getTime() - d.getTime()),
        (b = Math.ceil(b / 1e3)),
        (b = !this.options.elapse && b < 0 ? 0 : Math.abs(b)),
        this.totalSecsLeft !== b &&
          c &&
          ((this.totalSecsLeft = b),
          (this.elapsed = d >= this.finalDate),
          (this.offset = {
            seconds: this.totalSecsLeft % 60,
            minutes: Math.floor(this.totalSecsLeft / 60) % 60,
            hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
            days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToMonth: Math.floor(
              (this.totalSecsLeft / 60 / 60 / 24) % 30.4368
            ),
            weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
            weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
            months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
            years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
            totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
            totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
            totalMinutes: Math.floor(this.totalSecsLeft / 60),
            totalSeconds: this.totalSecsLeft,
          }),
          this.options.elapse || 0 !== this.totalSecsLeft
            ? this.dispatchEvent('update')
            : (this.stop(), this.dispatchEvent('finish')));
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + '.countdown');
      (c.finalDate = this.finalDate),
        (c.elapsed = this.elapsed),
        (c.offset = a.extend({}, this.offset)),
        (c.strftime = d(this.offset)),
        this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data('countdown-instance');
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e)
            ? d[e].apply(d, b.slice(1))
            : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
              ? (d.setFinalDate.call(d, e), d.start())
              : a.error(
                  'Method %s does not exist on jQuery.countdown'.replace(
                    /\%s/gi,
                    e
                  )
                );
        } else new j(this, b[0], b[1]);
      });
    });
});
// End Coundown JS

/*! jQuery UI - v1.12.1 - 2018-11-27
 * http://jqueryui.com
 * Includes: widget.js, keycode.js, widgets/mouse.js, widgets/slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
  'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery);
})(function (t) {
  (t.ui = t.ui || {}), (t.ui.version = '1.12.1');
  var e = 0,
    i = Array.prototype.slice;
  (t.cleanData = (function (e) {
    return function (i) {
      var s, n, o;
      for (o = 0; null != (n = i[o]); o++)
        try {
          (s = t._data(n, 'events')),
            s && s.remove && t(n).triggerHandler('remove');
        } catch (a) {}
      e(i);
    };
  })(t.cleanData)),
    (t.widget = function (e, i, s) {
      var n,
        o,
        a,
        r = {},
        l = e.split('.')[0];
      e = e.split('.')[1];
      var h = l + '-' + e;
      return (
        s || ((s = i), (i = t.Widget)),
        t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))),
        (t.expr[':'][h.toLowerCase()] = function (e) {
          return !!t.data(e, h);
        }),
        (t[l] = t[l] || {}),
        (n = t[l][e]),
        (o = t[l][e] =
          function (t, e) {
            return this._createWidget
              ? (arguments.length && this._createWidget(t, e), void 0)
              : new o(t, e);
          }),
        t.extend(o, n, {
          version: s.version,
          _proto: t.extend({}, s),
          _childConstructors: [],
        }),
        (a = new i()),
        (a.options = t.widget.extend({}, a.options)),
        t.each(s, function (e, s) {
          return t.isFunction(s)
            ? ((r[e] = (function () {
                function t() {
                  return i.prototype[e].apply(this, arguments);
                }
                function n(t) {
                  return i.prototype[e].apply(this, t);
                }
                return function () {
                  var e,
                    i = this._super,
                    o = this._superApply;
                  return (
                    (this._super = t),
                    (this._superApply = n),
                    (e = s.apply(this, arguments)),
                    (this._super = i),
                    (this._superApply = o),
                    e
                  );
                };
              })()),
              void 0)
            : ((r[e] = s), void 0);
        }),
        (o.prototype = t.widget.extend(
          a,
          { widgetEventPrefix: n ? a.widgetEventPrefix || e : e },
          r,
          { constructor: o, namespace: l, widgetName: e, widgetFullName: h }
        )),
        n
          ? (t.each(n._childConstructors, function (e, i) {
              var s = i.prototype;
              t.widget(s.namespace + '.' + s.widgetName, o, i._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        t.widget.bridge(e, o),
        o
      );
    }),
    (t.widget.extend = function (e) {
      for (var s, n, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
        for (s in o[a])
          (n = o[a][s]),
            o[a].hasOwnProperty(s) &&
              void 0 !== n &&
              (e[s] = t.isPlainObject(n)
                ? t.isPlainObject(e[s])
                  ? t.widget.extend({}, e[s], n)
                  : t.widget.extend({}, n)
                : n);
      return e;
    }),
    (t.widget.bridge = function (e, s) {
      var n = s.prototype.widgetFullName || e;
      t.fn[e] = function (o) {
        var a = 'string' == typeof o,
          r = i.call(arguments, 1),
          l = this;
        return (
          a
            ? this.length || 'instance' !== o
              ? this.each(function () {
                  var i,
                    s = t.data(this, n);
                  return 'instance' === o
                    ? ((l = s), !1)
                    : s
                      ? t.isFunction(s[o]) && '_' !== o.charAt(0)
                        ? ((i = s[o].apply(s, r)),
                          i !== s && void 0 !== i
                            ? ((l = i && i.jquery ? l.pushStack(i.get()) : i),
                              !1)
                            : void 0)
                        : t.error(
                            "no such method '" +
                              o +
                              "' for " +
                              e +
                              ' widget instance'
                          )
                      : t.error(
                          'cannot call methods on ' +
                            e +
                            ' prior to initialization; ' +
                            "attempted to call method '" +
                            o +
                            "'"
                        );
                })
              : (l = void 0)
            : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))),
              this.each(function () {
                var e = t.data(this, n);
                e
                  ? (e.option(o || {}), e._init && e._init())
                  : t.data(this, n, new s(o, this));
              })),
          l
        );
      };
    }),
    (t.Widget = function () {}),
    (t.Widget._childConstructors = []),
    (t.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      defaultElement: '<div>',
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (i, s) {
        (s = t(s || this.defaultElement || this)[0]),
          (this.element = t(s)),
          (this.uuid = e++),
          (this.eventNamespace = '.' + this.widgetName + this.uuid),
          (this.bindings = t()),
          (this.hoverable = t()),
          (this.focusable = t()),
          (this.classesElementLookup = {}),
          s !== this &&
            (t.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === s && this.destroy();
              },
            }),
            (this.document = t(s.style ? s.ownerDocument : s.document || s)),
            (this.window = t(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = t.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            i
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger('create', null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function () {
        var e = this;
        this._destroy(),
          t.each(this.classesElementLookup, function (t, i) {
            e._removeClass(i, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr('aria-disabled'),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: t.noop,
      widget: function () {
        return this.element;
      },
      option: function (e, i) {
        var s,
          n,
          o,
          a = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ('string' == typeof e)
          if (((a = {}), (s = e.split('.')), (e = s.shift()), s.length)) {
            for (
              n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
              s.length - 1 > o;
              o++
            )
              (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
            if (((e = s.pop()), 1 === arguments.length))
              return void 0 === n[e] ? null : n[e];
            n[e] = i;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[e] ? null : this.options[e];
            a[e] = i;
          }
        return this._setOptions(a), this;
      },
      _setOptions: function (t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          'classes' === t && this._setOptionClasses(e),
          (this.options[t] = e),
          'disabled' === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (e) {
        var i, s, n;
        for (i in e)
          (n = this.classesElementLookup[i]),
            e[i] !== this.options.classes[i] &&
              n &&
              n.length &&
              ((s = t(n.get())),
              this._removeClass(n, i),
              s.addClass(
                this._classes({ element: s, keys: i, classes: e, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + '-disabled',
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, 'ui-state-hover'),
            this._removeClass(this.focusable, null, 'ui-state-focus'));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (e) {
        function i(i, o) {
          var a, r;
          for (r = 0; i.length > r; r++)
            (a = n.classesElementLookup[i[r]] || t()),
              (a = e.add
                ? t(t.unique(a.get().concat(e.element.get())))
                : t(a.not(e.element).get())),
              (n.classesElementLookup[i[r]] = a),
              s.push(i[r]),
              o && e.classes[i[r]] && s.push(e.classes[i[r]]);
        }
        var s = [],
          n = this;
        return (
          (e = t.extend(
            { element: this.element, classes: this.options.classes || {} },
            e
          )),
          this._on(e.element, { remove: '_untrackClassesElement' }),
          e.keys && i(e.keys.match(/\S+/g) || [], !0),
          e.extra && i(e.extra.match(/\S+/g) || []),
          s.join(' ')
        );
      },
      _untrackClassesElement: function (e) {
        var i = this;
        t.each(i.classesElementLookup, function (s, n) {
          -1 !== t.inArray(e.target, n) &&
            (i.classesElementLookup[s] = t(n.not(e.target).get()));
        });
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, s) {
        s = 'boolean' == typeof s ? s : i;
        var n = 'string' == typeof t || null === t,
          o = {
            extra: n ? e : i,
            keys: n ? t : e,
            element: n ? this.element : t,
            add: s,
          };
        return o.element.toggleClass(this._classes(o), s), this;
      },
      _on: function (e, i, s) {
        var n,
          o = this;
        'boolean' != typeof e && ((s = i), (i = e), (e = !1)),
          s
            ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
            : ((s = i), (i = this.element), (n = this.widget())),
          t.each(s, function (s, a) {
            function r() {
              return e ||
                (o.options.disabled !== !0 &&
                  !t(this).hasClass('ui-state-disabled'))
                ? ('string' == typeof a ? o[a] : a).apply(o, arguments)
                : void 0;
            }
            'string' != typeof a &&
              (r.guid = a.guid = a.guid || r.guid || t.guid++);
            var l = s.match(/^([\w:-]*)\s*(.*)$/),
              h = l[1] + o.eventNamespace,
              c = l[2];
            c ? n.on(h, c, r) : i.on(h, r);
          });
      },
      _off: function (e, i) {
        (i =
          (i || '').split(' ').join(this.eventNamespace + ' ') +
          this.eventNamespace),
          e.off(i).off(i),
          (this.bindings = t(this.bindings.not(e).get())),
          (this.focusable = t(this.focusable.not(e).get())),
          (this.hoverable = t(this.hoverable.not(e).get()));
      },
      _delay: function (t, e) {
        function i() {
          return ('string' == typeof t ? s[t] : t).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, e || 0);
      },
      _hoverable: function (e) {
        (this.hoverable = this.hoverable.add(e)),
          this._on(e, {
            mouseenter: function (e) {
              this._addClass(t(e.currentTarget), null, 'ui-state-hover');
            },
            mouseleave: function (e) {
              this._removeClass(t(e.currentTarget), null, 'ui-state-hover');
            },
          });
      },
      _focusable: function (e) {
        (this.focusable = this.focusable.add(e)),
          this._on(e, {
            focusin: function (e) {
              this._addClass(t(e.currentTarget), null, 'ui-state-focus');
            },
            focusout: function (e) {
              this._removeClass(t(e.currentTarget), null, 'ui-state-focus');
            },
          });
      },
      _trigger: function (e, i, s) {
        var n,
          o,
          a = this.options[e];
        if (
          ((s = s || {}),
          (i = t.Event(i)),
          (i.type = (
            e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
          ).toLowerCase()),
          (i.target = this.element[0]),
          (o = i.originalEvent))
        )
          for (n in o) n in i || (i[n] = o[n]);
        return (
          this.element.trigger(i, s),
          !(
            (t.isFunction(a) &&
              a.apply(this.element[0], [i].concat(s)) === !1) ||
            i.isDefaultPrevented()
          )
        );
      },
    }),
    t.each({ show: 'fadeIn', hide: 'fadeOut' }, function (e, i) {
      t.Widget.prototype['_' + e] = function (s, n, o) {
        'string' == typeof n && (n = { effect: n });
        var a,
          r = n ? (n === !0 || 'number' == typeof n ? i : n.effect || i) : e;
        (n = n || {}),
          'number' == typeof n && (n = { duration: n }),
          (a = !t.isEmptyObject(n)),
          (n.complete = o),
          n.delay && s.delay(n.delay),
          a && t.effects && t.effects.effect[r]
            ? s[e](n)
            : r !== e && s[r]
              ? s[r](n.duration, n.easing, o)
              : s.queue(function (i) {
                  t(this)[e](), o && o.call(s[0]), i();
                });
      };
    }),
    t.widget,
    (t.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()));
  var s = !1;
  t(document).on('mouseup', function () {
    s = !1;
  }),
    t.widget('ui.mouse', {
      version: '1.12.1',
      options: {
        cancel: 'input, textarea, button, select, option',
        distance: 1,
        delay: 0,
      },
      _mouseInit: function () {
        var e = this;
        this.element
          .on('mousedown.' + this.widgetName, function (t) {
            return e._mouseDown(t);
          })
          .on('click.' + this.widgetName, function (i) {
            return !0 === t.data(i.target, e.widgetName + '.preventClickEvent')
              ? (t.removeData(i.target, e.widgetName + '.preventClickEvent'),
                i.stopImmediatePropagation(),
                !1)
              : void 0;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.off('.' + this.widgetName),
          this._mouseMoveDelegate &&
            this.document
              .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .off('mouseup.' + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (e) {
        if (!s) {
          (this._mouseMoved = !1),
            this._mouseStarted && this._mouseUp(e),
            (this._mouseDownEvent = e);
          var i = this,
            n = 1 === e.which,
            o =
              'string' == typeof this.options.cancel && e.target.nodeName
                ? t(e.target).closest(this.options.cancel).length
                : !1;
          return n && !o && this._mouseCapture(e)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  i.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = this._mouseStart(e) !== !1),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + '.preventClickEvent') &&
                    t.removeData(
                      e.target,
                      this.widgetName + '.preventClickEvent'
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                  }),
                  this.document
                    .on('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                    .on('mouseup.' + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (s = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (e) {
        if (this._mouseMoved) {
          if (
            t.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) &&
            !e.button
          )
            return this._mouseUp(e);
          if (!e.which)
            if (
              e.originalEvent.altKey ||
              e.originalEvent.ctrlKey ||
              e.originalEvent.metaKey ||
              e.originalEvent.shiftKey
            )
              this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e);
        }
        return (
          (e.which || e.button) && (this._mouseMoved = !0),
          this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  this._mouseStart(this._mouseDownEvent, e) !== !1),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted)
        );
      },
      _mouseUp: function (e) {
        this.document
          .off('mousemove.' + this.widgetName, this._mouseMoveDelegate)
          .off('mouseup.' + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted &&
            ((this._mouseStarted = !1),
            e.target === this._mouseDownEvent.target &&
              t.data(e.target, this.widgetName + '.preventClickEvent', !0),
            this._mouseStop(e)),
          this._mouseDelayTimer &&
            (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer),
          (this.ignoreMissingWhich = !1),
          (s = !1),
          e.preventDefault();
      },
      _mouseDistanceMet: function (t) {
        return (
          Math.max(
            Math.abs(this._mouseDownEvent.pageX - t.pageX),
            Math.abs(this._mouseDownEvent.pageY - t.pageY)
          ) >= this.options.distance
        );
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      },
    }),
    t.widget('ui.slider', t.ui.mouse, {
      version: '1.12.1',
      widgetEventPrefix: 'slide',
      options: {
        animate: !1,
        classes: {
          'ui-slider': 'ui-corner-all',
          'ui-slider-handle': 'ui-corner-all',
          'ui-slider-range': 'ui-corner-all ui-widget-header',
        },
        distance: 0,
        max: 100,
        min: 0,
        orientation: 'horizontal',
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      numPages: 5,
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this._calculateNewMax(),
          this._addClass(
            'ui-slider ui-slider-' + this.orientation,
            'ui-widget ui-widget-content'
          ),
          this._refresh(),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var e,
          i,
          s = this.options,
          n = this.element.find('.ui-slider-handle'),
          o = "<span tabindex='0'></span>",
          a = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            e = n.length;
          i > e;
          e++
        )
          a.push(o);
        (this.handles = n.add(t(a.join('')).appendTo(this.element))),
          this._addClass(this.handles, 'ui-slider-handle', 'ui-state-default'),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (e) {
            t(this).data('ui-slider-handle-index', e).attr('tabIndex', 0);
          });
      },
      _createRange: function () {
        var e = this.options;
        e.range
          ? (e.range === !0 &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? (this._removeClass(
                  this.range,
                  'ui-slider-range-min ui-slider-range-max'
                ),
                this.range.css({ left: '', bottom: '' }))
              : ((this.range = t('<div>').appendTo(this.element)),
                this._addClass(this.range, 'ui-slider-range')),
            ('min' === e.range || 'max' === e.range) &&
              this._addClass(this.range, 'ui-slider-range-' + e.range))
          : (this.range && this.range.remove(), (this.range = null));
      },
      _setupEvents: function () {
        this._off(this.handles),
          this._on(this.handles, this._handleEvents),
          this._hoverable(this.handles),
          this._focusable(this.handles);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range && this.range.remove(),
          this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          l,
          h,
          c = this,
          u = this.options;
        return u.disabled
          ? !1
          : ((this.elementSize = {
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
            }),
            (this.elementOffset = this.element.offset()),
            (i = { x: e.pageX, y: e.pageY }),
            (s = this._normValueFromMouse(i)),
            (n = this._valueMax() - this._valueMin() + 1),
            this.handles.each(function (e) {
              var i = Math.abs(s - c.values(e));
              (n > i ||
                (n === i &&
                  (e === c._lastChangedValue || c.values(e) === u.min))) &&
                ((n = i), (o = t(this)), (a = e));
            }),
            (r = this._start(e, a)),
            r === !1
              ? !1
              : ((this._mouseSliding = !0),
                (this._handleIndex = a),
                this._addClass(o, null, 'ui-state-active'),
                o.trigger('focus'),
                (l = o.offset()),
                (h = !t(e.target).parents().addBack().is('.ui-slider-handle')),
                (this._clickOffset = h
                  ? { left: 0, top: 0 }
                  : {
                      left: e.pageX - l.left - o.width() / 2,
                      top:
                        e.pageY -
                        l.top -
                        o.height() / 2 -
                        (parseInt(o.css('borderTopWidth'), 10) || 0) -
                        (parseInt(o.css('borderBottomWidth'), 10) || 0) +
                        (parseInt(o.css('marginTop'), 10) || 0),
                    }),
                this.handles.hasClass('ui-state-hover') || this._slide(e, a, s),
                (this._animateOff = !0),
                !0));
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1;
      },
      _mouseStop: function (t) {
        return (
          this._removeClass(this.handles, null, 'ui-state-active'),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          'vertical' === this.options.orientation ? 'vertical' : 'horizontal';
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n, o;
        return (
          'horizontal' === this.orientation
            ? ((e = this.elementSize.width),
              (i =
                t.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (i =
                t.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / e),
          s > 1 && (s = 1),
          0 > s && (s = 0),
          'vertical' === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + s * n),
          this._trimAlignValue(o)
        );
      },
      _uiHash: function (t, e, i) {
        var s = {
          handle: this.handles[t],
          handleIndex: t,
          value: void 0 !== e ? e : this.value(),
        };
        return (
          this._hasMultipleValues() &&
            ((s.value = void 0 !== e ? e : this.values(t)),
            (s.values = i || this.values())),
          s
        );
      },
      _hasMultipleValues: function () {
        return this.options.values && this.options.values.length;
      },
      _start: function (t, e) {
        return this._trigger('start', t, this._uiHash(e));
      },
      _slide: function (t, e, i) {
        var s,
          n,
          o = this.value(),
          a = this.values();
        this._hasMultipleValues() &&
          ((n = this.values(e ? 0 : 1)),
          (o = this.values(e)),
          2 === this.options.values.length &&
            this.options.range === !0 &&
            (i = 0 === e ? Math.min(n, i) : Math.max(n, i)),
          (a[e] = i)),
          i !== o &&
            ((s = this._trigger('slide', t, this._uiHash(e, i, a))),
            s !== !1 &&
              (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
      },
      _stop: function (t, e) {
        this._trigger('stop', t, this._uiHash(e));
      },
      _change: function (t, e) {
        this._keySliding ||
          this._mouseSliding ||
          ((this._lastChangedValue = e),
          this._trigger('change', t, this._uiHash(e)));
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            this._change(null, 0),
            void 0)
          : this._value();
      },
      values: function (e, i) {
        var s, n, o;
        if (arguments.length > 1)
          return (
            (this.options.values[e] = this._trimAlignValue(i)),
            this._refreshValue(),
            this._change(null, e),
            void 0
          );
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0]))
          return this._hasMultipleValues() ? this._values(e) : this.value();
        for (
          s = this.options.values, n = arguments[0], o = 0;
          s.length > o;
          o += 1
        )
          (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function (e, i) {
        var s,
          n = 0;
        switch (
          ('range' === e &&
            this.options.range === !0 &&
            ('min' === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : 'max' === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          t.isArray(this.options.values) && (n = this.options.values.length),
          this._super(e, i),
          e)
        ) {
          case 'orientation':
            this._detectOrientation(),
              this._removeClass(
                'ui-slider-horizontal ui-slider-vertical'
              )._addClass('ui-slider-' + this.orientation),
              this._refreshValue(),
              this.options.range && this._refreshRange(i),
              this.handles.css('horizontal' === i ? 'bottom' : 'left', '');
            break;
          case 'value':
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case 'values':
            for (
              this._animateOff = !0, this._refreshValue(), s = n - 1;
              s >= 0;
              s--
            )
              this._change(null, s);
            this._animateOff = !1;
            break;
          case 'step':
          case 'min':
          case 'max':
            (this._animateOff = !0),
              this._calculateNewMax(),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case 'range':
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _setOptionDisabled: function (t) {
        this._super(t), this._toggleClass(null, 'ui-state-disabled', !!t);
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i, s;
        if (arguments.length)
          return (e = this.options.values[t]), (e = this._trimAlignValue(e));
        if (this._hasMultipleValues()) {
          for (i = this.options.values.slice(), s = 0; i.length > s; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (this._valueMin() >= t) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
        return (
          2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
          parseFloat(s.toFixed(5))
        );
      },
      _calculateNewMax: function () {
        var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step,
          s = Math.round((t - e) / i) * i;
        (t = s + e),
          t > this.options.max && (t -= i),
          (this.max = parseFloat(t.toFixed(this._precision())));
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = '' + t,
          i = e.indexOf('.');
        return -1 === i ? 0 : e.length - i - 1;
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.max;
      },
      _refreshRange: function (t) {
        'vertical' === t && this.range.css({ width: '', left: '' }),
          'horizontal' === t && this.range.css({ height: '', bottom: '' });
      },
      _refreshValue: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          l = this,
          h = this._animateOff ? !1 : r.animate,
          c = {};
        this._hasMultipleValues()
          ? this.handles.each(function (s) {
              (i =
                100 *
                ((l.values(s) - l._valueMin()) /
                  (l._valueMax() - l._valueMin()))),
                (c['horizontal' === l.orientation ? 'left' : 'bottom'] =
                  i + '%'),
                t(this).stop(1, 1)[h ? 'animate' : 'css'](c, r.animate),
                l.options.range === !0 &&
                  ('horizontal' === l.orientation
                    ? (0 === s &&
                        l.range
                          .stop(1, 1)
                          [h ? 'animate' : 'css']({ left: i + '%' }, r.animate),
                      1 === s &&
                        l.range[h ? 'animate' : 'css'](
                          { width: i - e + '%' },
                          { queue: !1, duration: r.animate }
                        ))
                    : (0 === s &&
                        l.range
                          .stop(1, 1)
                          [
                            h ? 'animate' : 'css'
                          ]({ bottom: i + '%' }, r.animate),
                      1 === s &&
                        l.range[h ? 'animate' : 'css'](
                          { height: i - e + '%' },
                          { queue: !1, duration: r.animate }
                        ))),
                (e = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== n ? 100 * ((s - n) / (o - n)) : 0),
            (c['horizontal' === this.orientation ? 'left' : 'bottom'] =
              i + '%'),
            this.handle.stop(1, 1)[h ? 'animate' : 'css'](c, r.animate),
            'min' === a &&
              'horizontal' === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ width: i + '%' }, r.animate),
            'max' === a &&
              'horizontal' === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ width: 100 - i + '%' }, r.animate),
            'min' === a &&
              'vertical' === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ height: i + '%' }, r.animate),
            'max' === a &&
              'vertical' === this.orientation &&
              this.range
                .stop(1, 1)
                [h ? 'animate' : 'css']({ height: 100 - i + '%' }, r.animate));
      },
      _handleEvents: {
        keydown: function (e) {
          var i,
            s,
            n,
            o,
            a = t(e.target).data('ui-slider-handle-index');
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  this._addClass(t(e.target), null, 'ui-state-active'),
                  (i = this._start(e, a)),
                  i === !1))
              )
                return;
          }
          switch (
            ((o = this.options.step),
            (s = n = this._hasMultipleValues() ? this.values(a) : this.value()),
            e.keyCode)
          ) {
            case t.ui.keyCode.HOME:
              n = this._valueMin();
              break;
            case t.ui.keyCode.END:
              n = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              n = this._trimAlignValue(
                s + (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.PAGE_DOWN:
              n = this._trimAlignValue(
                s - (this._valueMax() - this._valueMin()) / this.numPages
              );
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (s === this._valueMax()) return;
              n = this._trimAlignValue(s + o);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (s === this._valueMin()) return;
              n = this._trimAlignValue(s - o);
          }
          this._slide(e, a, n);
        },
        keyup: function (e) {
          var i = t(e.target).data('ui-slider-handle-index');
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            this._removeClass(t(e.target), null, 'ui-state-active'));
        },
      },
    });
});

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */ (function (e) {
  'use strict';
  e.fn.counterUp = function (t) {
    var n = e.extend({ time: 400, delay: 10 }, t);
    return this.each(function () {
      var t = e(this),
        r = n,
        i = function () {
          var e = [],
            n = r.time / r.delay,
            i = t.text(),
            s = /[0-9]+,[0-9]+/.test(i);
          i = i.replace(/,/g, '');
          var o = /^[0-9]+$/.test(i),
            u = /^[0-9]+\.[0-9]+$/.test(i),
            a = u ? (i.split('.')[1] || []).length : 0;
          for (var f = n; f >= 1; f--) {
            var l = parseInt((i / n) * f);
            u && (l = parseFloat((i / n) * f).toFixed(a));
            if (s)
              while (/(\d+)(\d{3})/.test(l.toString()))
                l = l.toString().replace(/(\d+)(\d{3})/, '$1,$2');
            e.unshift(l);
          }
          t.data('counterup-nums', e);
          t.text('0');
          var c = function () {
            t.text(t.data('counterup-nums').shift());
            if (t.data('counterup-nums').length)
              setTimeout(t.data('counterup-func'), r.delay);
            else {
              delete t.data('counterup-nums');
              t.data('counterup-nums', null);
              t.data('counterup-func', null);
            }
          };
          t.data('counterup-func', c);
          setTimeout(t.data('counterup-func'), r.delay);
        };
      t.waypoint(i, { offset: '100%', triggerOnce: !0 });
    });
  };
})(jQuery);

// fancyBox v3.5.6
// Copyright 2018 fancyApps
//
// ==================================================
!(function (t, e, n, o) {
  'use strict';
  function i(t, e) {
    var o,
      i,
      a,
      s = [],
      r = 0;
    (t && t.isDefaultPrevented()) ||
      (t.preventDefault(),
      (e = e || {}),
      t && t.data && (e = h(t.data.options, e)),
      (o = e.$target || n(t.currentTarget).trigger('blur')),
      ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
        (e.selector
          ? (s = n(e.selector))
          : ((i = o.attr('data-fancybox') || ''),
            i
              ? ((s = t.data ? t.data.items : []),
                (s = s.length
                  ? s.filter('[data-fancybox="' + i + '"]')
                  : n('[data-fancybox="' + i + '"]')))
              : (s = [o])),
        (r = n(s).index(o)),
        r < 0 && (r = 0),
        (a = n.fancybox.open(s, e, r)),
        (a.$trigger = o)));
  }
  if (((t.console = t.console || { info: function (t) {} }), n)) {
    if (n.fn.fancybox) return void console.info('fancyBox already initialized');
    var a = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: 'auto',
        toolbar: 'auto',
        buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: { preload: !1 },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: 'auto' },
        },
        video: {
          tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: '',
          autoStart: !0,
        },
        defaultType: 'image',
        animationEffect: 'zoom',
        animationDuration: 366,
        zoomOpacity: 'auto',
        transitionEffect: 'fade',
        transitionDuration: 366,
        slideClass: '',
        baseClass: '',
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download:
            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>',
        },
        parentEl: 'body',
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 3e3 },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: '.fancybox-container',
          axis: 'y',
        },
        wheel: 'auto',
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return 'image' === t.type && 'zoom';
        },
        clickSlide: 'close',
        clickOutside: 'close',
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1,
          idleTime: !1,
          clickContent: function (t, e) {
            return 'image' === t.type && 'toggleControls';
          },
          clickSlide: function (t, e) {
            return 'image' === t.type ? 'toggleControls' : 'close';
          },
          dblclickContent: function (t, e) {
            return 'image' === t.type && 'zoom';
          },
          dblclickSlide: function (t, e) {
            return 'image' === t.type && 'zoom';
          },
        },
        lang: 'en',
        i18n: {
          en: {
            CLOSE: 'Close',
            NEXT: 'Next',
            PREV: 'Previous',
            ERROR:
              'The requested content cannot be loaded. <br/> Please try again later.',
            PLAY_START: 'Start slideshow',
            PLAY_STOP: 'Pause slideshow',
            FULL_SCREEN: 'Full screen',
            THUMBS: 'Thumbnails',
            DOWNLOAD: 'Download',
            SHARE: 'Share',
            ZOOM: 'Zoom',
          },
          de: {
            CLOSE: 'Schlie&szlig;en',
            NEXT: 'Weiter',
            PREV: 'Zur&uuml;ck',
            ERROR:
              'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.',
            PLAY_START: 'Diaschau starten',
            PLAY_STOP: 'Diaschau beenden',
            FULL_SCREEN: 'Vollbild',
            THUMBS: 'Vorschaubilder',
            DOWNLOAD: 'Herunterladen',
            SHARE: 'Teilen',
            ZOOM: 'Vergr&ouml;&szlig;ern',
          },
        },
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n;
      },
      d = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      u = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      f = (function () {
        var t,
          n = e.createElement('fakeelement'),
          o = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd',
          };
        for (t in o) if (void 0 !== n.style[t]) return o[t];
        return 'transitionend';
      })(),
      p = function (t) {
        return t && t.length && t[0].offsetHeight;
      },
      h = function (t, e) {
        var o = n.extend(!0, {}, t, e);
        return (
          n.each(e, function (t, e) {
            n.isArray(e) && (o[t] = e);
          }),
          o
        );
      },
      g = function (t) {
        var o, i;
        return (
          !(!t || t.ownerDocument !== e) &&
          (n('.fancybox-container').css('pointer-events', 'none'),
          (o = {
            x: t.getBoundingClientRect().left + t.offsetWidth / 2,
            y: t.getBoundingClientRect().top + t.offsetHeight / 2,
          }),
          (i = e.elementFromPoint(o.x, o.y) === t),
          n('.fancybox-container').css('pointer-events', ''),
          i)
        );
      },
      b = function (t, e, o) {
        var i = this;
        (i.opts = h({ index: o }, n.fancybox.defaults)),
          n.isPlainObject(e) && (i.opts = h(i.opts, e)),
          n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
          (i.id = i.opts.id || ++c),
          (i.currIndex = parseInt(i.opts.index, 10) || 0),
          (i.prevIndex = null),
          (i.prevPos = null),
          (i.currPos = 0),
          (i.firstRun = !0),
          (i.group = []),
          (i.slides = {}),
          i.addContent(t),
          i.group.length && i.init();
      };
    n.extend(b.prototype, {
      init: function () {
        var o,
          i,
          a = this,
          s = a.group[a.currIndex],
          r = s.opts;
        r.closeExisting && n.fancybox.close(!0),
          n('body').addClass('fancybox-active'),
          !n.fancybox.getInstance() &&
            !1 !== r.hideScrollbar &&
            !n.fancybox.isMobile &&
            e.body.scrollHeight > t.innerHeight &&
            (n('head').append(
              '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                (t.innerWidth - e.documentElement.clientWidth) +
                'px;}</style>'
            ),
            n('body').addClass('compensate-for-scrollbar')),
          (i = ''),
          n.each(r.buttons, function (t, e) {
            i += r.btnTpl[e] || '';
          }),
          (o = n(
            a.translate(
              a,
              r.baseTpl
                .replace('{{buttons}}', i)
                .replace('{{arrows}}', r.btnTpl.arrowLeft + r.btnTpl.arrowRight)
            )
          )
            .attr('id', 'fancybox-container-' + a.id)
            .addClass(r.baseClass)
            .data('FancyBox', a)
            .appendTo(r.parentEl)),
          (a.$refs = { container: o }),
          [
            'bg',
            'inner',
            'infobar',
            'toolbar',
            'stage',
            'caption',
            'navigation',
          ].forEach(function (t) {
            a.$refs[t] = o.find('.fancybox-' + t);
          }),
          a.trigger('onInit'),
          a.activate(),
          a.jumpTo(a.currIndex);
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e];
        });
      },
      addContent: function (t) {
        var e,
          o = this,
          i = n.makeArray(t);
        n.each(i, function (t, e) {
          var i,
            a,
            s,
            r,
            c,
            l = {},
            d = {};
          n.isPlainObject(e)
            ? ((l = e), (d = e.opts || e))
            : 'object' === n.type(e) && n(e).length
              ? ((i = n(e)),
                (d = i.data() || {}),
                (d = n.extend(!0, {}, d, d.options)),
                (d.$orig = i),
                (l.src = o.opts.src || d.src || i.attr('href')),
                l.type || l.src || ((l.type = 'inline'), (l.src = e)))
              : (l = { type: 'html', src: e + '' }),
            (l.opts = n.extend(!0, {}, o.opts, d)),
            n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
            n.fancybox.isMobile &&
              l.opts.mobile &&
              (l.opts = h(l.opts, l.opts.mobile)),
            (a = l.type || l.opts.type),
            (r = l.src || ''),
            !a &&
              r &&
              ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((a = 'video'),
                  l.opts.video.format ||
                    (l.opts.video.format =
                      'video/' + ('ogv' === s[1] ? 'ogg' : s[1])))
                : r.match(
                      /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                    )
                  ? (a = 'image')
                  : r.match(/\.(pdf)((\?|#).*)?$/i)
                    ? ((a = 'iframe'),
                      (l = n.extend(!0, l, {
                        contentType: 'pdf',
                        opts: { iframe: { preload: !1 } },
                      })))
                    : '#' === r.charAt(0) && (a = 'inline')),
            a ? (l.type = a) : o.trigger('objectNeedsType', l),
            l.contentType ||
              (l.contentType =
                n.inArray(l.type, ['html', 'inline', 'ajax']) > -1
                  ? 'html'
                  : l.type),
            (l.index = o.group.length),
            'auto' == l.opts.smallBtn &&
              (l.opts.smallBtn =
                n.inArray(l.type, ['html', 'inline', 'ajax']) > -1),
            'auto' === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
            (l.$thumb = l.opts.$thumb || null),
            l.opts.$trigger &&
              l.index === o.opts.index &&
              ((l.$thumb = l.opts.$trigger.find('img:first')),
              l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
            (l.$thumb && l.$thumb.length) ||
              !l.opts.$orig ||
              (l.$thumb = l.opts.$orig.find('img:first')),
            l.$thumb && !l.$thumb.length && (l.$thumb = null),
            (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
            'function' === n.type(l.opts.caption) &&
              (l.opts.caption = l.opts.caption.apply(e, [o, l])),
            'function' === n.type(o.opts.caption) &&
              (l.opts.caption = o.opts.caption.apply(e, [o, l])),
            l.opts.caption instanceof n ||
              (l.opts.caption =
                void 0 === l.opts.caption ? '' : l.opts.caption + ''),
            'ajax' === l.type &&
              ((c = r.split(/\s+/, 2)),
              c.length > 1 &&
                ((l.src = c.shift()), (l.opts.filter = c.shift()))),
            l.opts.modal &&
              (l.opts = n.extend(!0, l.opts, {
                trapFocus: !0,
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
              })),
            o.group.push(l);
        }),
          Object.keys(o.slides).length &&
            (o.updateControls(),
            (e = o.Thumbs) && e.isActive && (e.create(), e.focus()));
      },
      addEvents: function () {
        var e = this;
        e.removeEvents(),
          e.$refs.container
            .on('click.fb-close', '[data-fancybox-close]', function (t) {
              t.stopPropagation(), t.preventDefault(), e.close(t);
            })
            .on(
              'touchstart.fb-prev click.fb-prev',
              '[data-fancybox-prev]',
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.previous();
              }
            )
            .on(
              'touchstart.fb-next click.fb-next',
              '[data-fancybox-next]',
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.next();
              }
            )
            .on('click.fb', '[data-fancybox-zoom]', function (t) {
              e[e.isScaledDown() ? 'scaleToActual' : 'scaleToFit']();
            }),
          s.on('orientationchange.fb resize.fb', function (t) {
            t && t.originalEvent && 'resize' === t.originalEvent.type
              ? (e.requestId && u(e.requestId),
                (e.requestId = d(function () {
                  e.update(t);
                })))
              : (e.current &&
                  'iframe' === e.current.type &&
                  e.$refs.stage.hide(),
                setTimeout(
                  function () {
                    e.$refs.stage.show(), e.update(t);
                  },
                  n.fancybox.isMobile ? 600 : 250
                ));
          }),
          r.on('keydown.fb', function (t) {
            var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which;
            if (9 == a) return void (i.opts.trapFocus && e.focus(t));
            if (
              !(
                !i.opts.keyboard ||
                t.ctrlKey ||
                t.altKey ||
                t.shiftKey ||
                n(t.target).is('input,textarea,video,audio')
              )
            )
              return 8 === a || 27 === a
                ? (t.preventDefault(), void e.close(t))
                : 37 === a || 38 === a
                  ? (t.preventDefault(), void e.previous())
                  : 39 === a || 40 === a
                    ? (t.preventDefault(), void e.next())
                    : void e.trigger('afterKeydown', t, a);
          }),
          e.group[e.currIndex].opts.idleTime &&
            ((e.idleSecondsCounter = 0),
            r.on(
              'mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',
              function (t) {
                (e.idleSecondsCounter = 0),
                  e.isIdle && e.showControls(),
                  (e.isIdle = !1);
              }
            ),
            (e.idleInterval = t.setInterval(function () {
              ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                !e.isDragging &&
                ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls());
            }, 1e3)));
      },
      removeEvents: function () {
        var e = this;
        s.off('orientationchange.fb resize.fb'),
          r.off('keydown.fb .fb-idle'),
          this.$refs.container.off('.fb-close .fb-prev .fb-next'),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null));
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t);
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t);
      },
      jumpTo: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          d,
          u,
          f = this,
          h = f.group.length;
        if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
              (t < 0 || t >= h))
          )
            return !1;
          if (
            ((o = f.firstRun = !Object.keys(f.slides).length),
            (r = f.current),
            (f.prevIndex = f.currIndex),
            (f.prevPos = f.currPos),
            (s = f.createSlide(t)),
            h > 1 &&
              ((a || s.index < h - 1) && f.createSlide(t + 1),
              (a || s.index > 0) && f.createSlide(t - 1)),
            (f.current = s),
            (f.currIndex = s.index),
            (f.currPos = s.pos),
            f.trigger('beforeShow', o),
            f.updateControls(),
            (s.forcedDuration = void 0),
            n.isNumeric(e)
              ? (s.forcedDuration = e)
              : (e = s.opts[o ? 'animationDuration' : 'transitionDuration']),
            (e = parseInt(e, 10)),
            (i = f.isMoved(s)),
            s.$slide.addClass('fancybox-slide--current'),
            o)
          )
            return (
              s.opts.animationEffect &&
                e &&
                f.$refs.container.css('transition-duration', e + 'ms'),
              f.$refs.container.addClass('fancybox-is-open').trigger('focus'),
              f.loadSlide(s),
              void f.preload('image')
            );
          (c = n.fancybox.getTranslate(r.$slide)),
            (l = n.fancybox.getTranslate(f.$refs.stage)),
            n.each(f.slides, function (t, e) {
              n.fancybox.stop(e.$slide, !0);
            }),
            r.pos !== s.pos && (r.isComplete = !1),
            r.$slide.removeClass(
              'fancybox-slide--complete fancybox-slide--current'
            ),
            i
              ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                n.each(f.slides, function (t, o) {
                  o.$slide
                    .removeClass('fancybox-animated')
                    .removeClass(function (t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(
                        ' '
                      );
                    });
                  var i = o.pos * c.width + o.pos * o.opts.gutter;
                  n.fancybox.setTranslate(o.$slide, {
                    top: 0,
                    left: i - l.left + u,
                  }),
                    o.pos !== s.pos &&
                      o.$slide.addClass(
                        'fancybox-slide--' +
                          (o.pos > s.pos ? 'next' : 'previous')
                      ),
                    p(o.$slide),
                    n.fancybox.animate(
                      o.$slide,
                      {
                        top: 0,
                        left:
                          (o.pos - s.pos) * c.width +
                          (o.pos - s.pos) * o.opts.gutter,
                      },
                      e,
                      function () {
                        o.$slide
                          .css({ transform: '', opacity: '' })
                          .removeClass(
                            'fancybox-slide--next fancybox-slide--previous'
                          ),
                          o.pos === f.currPos && f.complete();
                      }
                    );
                }))
              : e &&
                s.opts.transitionEffect &&
                ((d =
                  'fancybox-animated fancybox-fx-' + s.opts.transitionEffect),
                r.$slide.addClass(
                  'fancybox-slide--' + (r.pos > s.pos ? 'next' : 'previous')
                ),
                n.fancybox.animate(
                  r.$slide,
                  d,
                  e,
                  function () {
                    r.$slide
                      .removeClass(d)
                      .removeClass(
                        'fancybox-slide--next fancybox-slide--previous'
                      );
                  },
                  !1
                )),
            s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
            f.preload('image');
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this;
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1,
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        );
      },
      scaleToActual: function (t, e, o) {
        var i,
          a,
          s,
          r,
          c,
          l = this,
          d = l.current,
          u = d.$content,
          f = n.fancybox.getTranslate(d.$slide).width,
          p = n.fancybox.getTranslate(d.$slide).height,
          h = d.width,
          g = d.height;
        l.isAnimating ||
          l.isMoved() ||
          !u ||
          'image' != d.type ||
          !d.isLoaded ||
          d.hasError ||
          ((l.isAnimating = !0),
          n.fancybox.stop(u),
          (t = void 0 === t ? 0.5 * f : t),
          (e = void 0 === e ? 0.5 * p : e),
          (i = n.fancybox.getTranslate(u)),
          (i.top -= n.fancybox.getTranslate(d.$slide).top),
          (i.left -= n.fancybox.getTranslate(d.$slide).left),
          (r = h / i.width),
          (c = g / i.height),
          (a = 0.5 * f - 0.5 * h),
          (s = 0.5 * p - 0.5 * g),
          h > f &&
            ((a = i.left * r - (t * r - t)),
            a > 0 && (a = 0),
            a < f - h && (a = f - h)),
          g > p &&
            ((s = i.top * c - (e * c - e)),
            s > 0 && (s = 0),
            s < p - g && (s = p - g)),
          l.updateCursor(h, g),
          n.fancybox.animate(
            u,
            { top: s, left: a, scaleX: r, scaleY: c },
            o || 366,
            function () {
              l.isAnimating = !1;
            }
          ),
          l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop());
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content;
        o.isAnimating ||
          o.isMoved() ||
          !a ||
          'image' != i.type ||
          !i.isLoaded ||
          i.hasError ||
          ((o.isAnimating = !0),
          n.fancybox.stop(a),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            a,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / a.width(),
              scaleY: e.height / a.height(),
            },
            t || 366,
            function () {
              o.isAnimating = !1;
            }
          ));
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$content,
          c = t.$slide,
          l = t.width || t.opts.width,
          d = t.height || t.opts.height,
          u = {};
        return (
          !!(t.isLoaded && r && r.length) &&
          ((e = n.fancybox.getTranslate(s.$refs.stage).width),
          (o = n.fancybox.getTranslate(s.$refs.stage).height),
          (e -=
            parseFloat(c.css('paddingLeft')) +
            parseFloat(c.css('paddingRight')) +
            parseFloat(r.css('marginLeft')) +
            parseFloat(r.css('marginRight'))),
          (o -=
            parseFloat(c.css('paddingTop')) +
            parseFloat(c.css('paddingBottom')) +
            parseFloat(r.css('marginTop')) +
            parseFloat(r.css('marginBottom'))),
          (l && d) || ((l = e), (d = o)),
          (i = Math.min(1, e / l, o / d)),
          (l *= i),
          (d *= i),
          l > e - 0.5 && (l = e),
          d > o - 0.5 && (d = o),
          'image' === t.type
            ? ((u.top =
                Math.floor(0.5 * (o - d)) + parseFloat(c.css('paddingTop'))),
              (u.left =
                Math.floor(0.5 * (e - l)) + parseFloat(c.css('paddingLeft'))))
            : 'video' === t.contentType &&
              ((a =
                t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9),
              d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
          (u.width = l),
          (u.height = d),
          u)
        );
      },
      update: function (t) {
        var e = this;
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t);
        });
      },
      updateSlide: function (t, e) {
        var o = this,
          i = t && t.$content,
          a = t.width || t.opts.width,
          s = t.height || t.opts.height,
          r = t.$slide;
        o.adjustCaption(t),
          i &&
            (a || s || 'video' === t.contentType) &&
            !t.hasError &&
            (n.fancybox.stop(i),
            n.fancybox.setTranslate(i, o.getFitPos(t)),
            t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
          o.adjustLayout(t),
          r.length &&
            (r.trigger('refresh'),
            t.pos === o.currPos &&
              o.$refs.toolbar
                .add(o.$refs.navigation.find('.fancybox-button--arrow_right'))
                .toggleClass(
                  'compensate-for-scrollbar',
                  r.get(0).scrollHeight > r.get(0).clientHeight
                )),
          o.trigger('onUpdate', t, e);
      },
      centerSlide: function (t) {
        var e = this,
          o = e.current,
          i = o.$slide;
        !e.isClosing &&
          o &&
          (i.siblings().css({ transform: '', opacity: '' }),
          i
            .parent()
            .children()
            .removeClass('fancybox-slide--previous fancybox-slide--next'),
          n.fancybox.animate(
            i,
            { top: 0, left: 0, opacity: 1 },
            void 0 === t ? 0 : t,
            function () {
              i.css({ transform: '', opacity: '' }),
                o.isComplete || e.complete();
            },
            !1
          ));
      },
      isMoved: function (t) {
        var e,
          o,
          i = t || this.current;
        return (
          !!i &&
          ((o = n.fancybox.getTranslate(this.$refs.stage)),
          (e = n.fancybox.getTranslate(i.$slide)),
          !i.$slide.hasClass('fancybox-animated') &&
            (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5))
        );
      },
      updateCursor: function (t, e) {
        var o,
          i,
          a = this,
          s = a.current,
          r = a.$refs.container;
        s &&
          !a.isClosing &&
          a.Guestures &&
          (r.removeClass(
            'fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan'
          ),
          (o = a.canPan(t, e)),
          (i = !!o || a.isZoomable()),
          r.toggleClass('fancybox-is-zoomable', i),
          n('[data-fancybox-zoom]').prop('disabled', !i),
          o
            ? r.addClass('fancybox-can-pan')
            : i &&
                ('zoom' === s.opts.clickContent ||
                  (n.isFunction(s.opts.clickContent) &&
                    'zoom' == s.opts.clickContent(s)))
              ? r.addClass('fancybox-can-zoomIn')
              : s.opts.touch &&
                (s.opts.touch.vertical || a.group.length > 1) &&
                'video' !== s.contentType &&
                r.addClass('fancybox-can-swipe'));
      },
      isZoomable: function () {
        var t,
          e = this,
          n = e.current;
        if (n && !e.isClosing && 'image' === n.type && !n.hasError) {
          if (!n.isLoaded) return !0;
          if (
            (t = e.getFitPos(n)) &&
            (n.width > t.width || n.height > t.height)
          )
            return !0;
        }
        return !1;
      },
      isScaledDown: function (t, e) {
        var o = this,
          i = !1,
          a = o.current,
          s = a.$content;
        return (
          void 0 !== t && void 0 !== e
            ? (i = t < a.width && e < a.height)
            : s &&
              ((i = n.fancybox.getTranslate(s)),
              (i = i.width < a.width && i.height < a.height)),
          i
        );
      },
      canPan: function (t, e) {
        var o = this,
          i = o.current,
          a = null,
          s = !1;
        return (
          'image' === i.type &&
            (i.isComplete || (t && e)) &&
            !i.hasError &&
            ((s = o.getFitPos(i)),
            void 0 !== t && void 0 !== e
              ? (a = { width: t, height: e })
              : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
            a &&
              s &&
              (s =
                Math.abs(a.width - s.width) > 1.5 ||
                Math.abs(a.height - s.height) > 1.5)),
          s
        );
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this;
        if (!t.isLoading && !t.isLoaded) {
          if (((t.isLoading = !0), !1 === a.trigger('beforeLoad', t)))
            return (t.isLoading = !1), !1;
          switch (
            ((e = t.type),
            (o = t.$slide),
            o.off('refresh').trigger('onReset').addClass(t.opts.slideClass),
            e)
          ) {
            case 'image':
              a.setImage(t);
              break;
            case 'iframe':
              a.setIframe(t);
              break;
            case 'html':
              a.setContent(t, t.src || t.content);
              break;
            case 'video':
              a.setContent(
                t,
                t.opts.video.tpl
                  .replace(/\{\{src\}\}/gi, t.src)
                  .replace(
                    '{{format}}',
                    t.opts.videoFormat || t.opts.video.format || ''
                  )
                  .replace('{{poster}}', t.thumb || '')
              );
              break;
            case 'inline':
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t);
              break;
            case 'ajax':
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      'success' === n && a.setContent(t, e);
                    },
                    error: function (e, n) {
                      e && 'abort' !== n && a.setError(t);
                    },
                  })
                )),
                o.one('onReset', function () {
                  i.abort();
                });
              break;
            default:
              a.setError(t);
          }
          return !0;
        }
      },
      setImage: function (t) {
        var o,
          i = this;
        setTimeout(function () {
          var e = t.$image;
          i.isClosing ||
            !t.isLoading ||
            (e && e.length && e[0].complete) ||
            t.hasError ||
            i.showLoading(t);
        }, 50),
          i.checkSrcset(t),
          (t.$content = n('<div class="fancybox-content"></div>')
            .addClass('fancybox-is-hidden')
            .appendTo(t.$slide.addClass('fancybox-slide--image'))),
          !1 !== t.opts.preload &&
            t.opts.width &&
            t.opts.height &&
            t.thumb &&
            ((t.width = t.opts.width),
            (t.height = t.opts.height),
            (o = e.createElement('img')),
            (o.onerror = function () {
              n(this).remove(), (t.$ghost = null);
            }),
            (o.onload = function () {
              i.afterLoad(t);
            }),
            (t.$ghost = n(o)
              .addClass('fancybox-image')
              .appendTo(t.$content)
              .attr('src', t.thumb))),
          i.setBigImage(t);
      },
      checkSrcset: function (e) {
        var n,
          o,
          i,
          a,
          s = e.opts.srcset || e.opts.image.srcset;
        if (s) {
          (i = t.devicePixelRatio || 1),
            (a = t.innerWidth * i),
            (o = s.split(',').map(function (t) {
              var e = {};
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10);
                    if (0 === n) return (e.url = t);
                    o && ((e.value = o), (e.postfix = t[t.length - 1]));
                  }),
                e
              );
            })),
            o.sort(function (t, e) {
              return t.value - e.value;
            });
          for (var r = 0; r < o.length; r++) {
            var c = o[r];
            if (
              ('w' === c.postfix && c.value >= a) ||
              ('x' === c.postfix && c.value >= i)
            ) {
              n = c;
              break;
            }
          }
          !n && o.length && (n = o[o.length - 1]),
            n &&
              ((e.src = n.url),
              e.width &&
                e.height &&
                'w' == n.postfix &&
                ((e.height = (e.width / e.height) * n.value),
                (e.width = n.value)),
              (e.opts.srcset = s));
        }
      },
      setBigImage: function (t) {
        var o = this,
          i = e.createElement('img'),
          a = n(i);
        (t.$image = a
          .one('error', function () {
            o.setError(t);
          })
          .one('load', function () {
            var e;
            t.$ghost ||
              (o.resolveImageSlideSize(
                t,
                this.naturalWidth,
                this.naturalHeight
              ),
              o.afterLoad(t)),
              o.isClosing ||
                (t.opts.srcset &&
                  ((e = t.opts.sizes),
                  (e && 'auto' !== e) ||
                    (e =
                      (t.width / t.height > 1 && s.width() / s.height() > 1
                        ? '100'
                        : Math.round((t.width / t.height) * 100)) + 'vw'),
                  a.attr('sizes', e).attr('srcset', t.opts.srcset)),
                t.$ghost &&
                  setTimeout(
                    function () {
                      t.$ghost && !o.isClosing && t.$ghost.hide();
                    },
                    Math.min(300, Math.max(1e3, t.height / 1600))
                  ),
                o.hideLoading(t));
          })
          .addClass('fancybox-image')
          .attr('src', t.src)
          .appendTo(t.$content)),
          (i.complete || 'complete' == i.readyState) &&
          a.naturalWidth &&
          a.naturalHeight
            ? a.trigger('load')
            : i.error && a.trigger('error');
      },
      resolveImageSlideSize: function (t, e, n) {
        var o = parseInt(t.opts.width, 10),
          i = parseInt(t.opts.height, 10);
        (t.width = e),
          (t.height = n),
          o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
          i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i));
      },
      setIframe: function (t) {
        var e,
          o = this,
          i = t.opts.iframe,
          a = t.$slide;
        (t.$content = n(
          '<div class="fancybox-content' +
            (i.preload ? ' fancybox-is-hidden' : '') +
            '"></div>'
        )
          .css(i.css)
          .appendTo(a)),
          a.addClass('fancybox-slide--' + t.contentType),
          (t.$iframe = e =
            n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
              .attr(i.attr)
              .appendTo(t.$content)),
          i.preload
            ? (o.showLoading(t),
              e.on('load.fb error.fb', function (e) {
                (this.isReady = 1), t.$slide.trigger('refresh'), o.afterLoad(t);
              }),
              a.on('refresh.fb', function () {
                var n,
                  o,
                  s = t.$content,
                  r = i.css.width,
                  c = i.css.height;
                if (1 === e[0].isReady) {
                  try {
                    (n = e.contents()), (o = n.find('body'));
                  } catch (t) {}
                  o &&
                    o.length &&
                    o.children().length &&
                    (a.css('overflow', 'visible'),
                    s.css({
                      width: '100%',
                      'max-width': '100%',
                      height: '9999px',
                    }),
                    void 0 === r &&
                      (r = Math.ceil(
                        Math.max(o[0].clientWidth, o.outerWidth(!0))
                      )),
                    s.css('width', r || '').css('max-width', ''),
                    void 0 === c &&
                      (c = Math.ceil(
                        Math.max(o[0].clientHeight, o.outerHeight(!0))
                      )),
                    s.css('height', c || ''),
                    a.css('overflow', 'auto')),
                    s.removeClass('fancybox-is-hidden');
                }
              }))
            : o.afterLoad(t),
          e.attr('src', t.src),
          a.one('onReset', function () {
            try {
              n(this)
                .find('iframe')
                .hide()
                .unbind()
                .attr('src', '//about:blank');
            } catch (t) {}
            n(this).off('refresh.fb').empty(),
              (t.isLoaded = !1),
              (t.isRevealed = !1);
          });
      },
      setContent: function (t, e) {
        var o = this;
        o.isClosing ||
          (o.hideLoading(t),
          t.$content && n.fancybox.stop(t.$content),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? ((e.hasClass('fancybox-content') ||
                e.parent().hasClass('fancybox-content')) &&
                e.parents('.fancybox-slide').trigger('onReset'),
              (t.$placeholder = n('<div>').hide().insertAfter(e)),
              e.css('display', 'inline-block'))
            : t.hasError ||
              ('string' === n.type(e) &&
                (e = n('<div>').append(n.trim(e)).contents()),
              t.opts.filter && (e = n('<div>').html(e).find(t.opts.filter))),
          t.$slide.one('onReset', function () {
            n(this).find('video,audio').trigger('pause'),
              t.$placeholder &&
                (t.$placeholder
                  .after(e.removeClass('fancybox-content').hide())
                  .remove(),
                (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError ||
                (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1));
          }),
          n(e).appendTo(t.$slide),
          n(e).is('video,audio') &&
            (n(e).addClass('fancybox-video'),
            n(e).wrap('<div></div>'),
            (t.contentType = 'video'),
            (t.opts.width = t.opts.width || n(e).attr('width')),
            (t.opts.height = t.opts.height || n(e).attr('height'))),
          (t.$content = t.$slide
            .children()
            .filter('div,form,main,video,audio,article,.fancybox-content')
            .first()),
          t.$content.siblings().hide(),
          t.$content.length ||
            (t.$content = t.$slide.wrapInner('<div></div>').children().first()),
          t.$content.addClass('fancybox-content'),
          t.$slide.addClass('fancybox-slide--' + t.contentType),
          o.afterLoad(t));
      },
      setError: function (t) {
        (t.hasError = !0),
          t.$slide
            .trigger('onReset')
            .removeClass('fancybox-slide--' + t.contentType)
            .addClass('fancybox-slide--error'),
          (t.contentType = 'html'),
          this.setContent(t, this.translate(t, t.opts.errorTpl)),
          t.pos === this.currPos && (this.isAnimating = !1);
      },
      showLoading: function (t) {
        var e = this;
        (t = t || e.current) &&
          !t.$spinner &&
          (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
            .appendTo(t.$slide)
            .hide()
            .fadeIn('fast'));
      },
      hideLoading: function (t) {
        var e = this;
        (t = t || e.current) &&
          t.$spinner &&
          (t.$spinner.stop().remove(), delete t.$spinner);
      },
      afterLoad: function (t) {
        var e = this;
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger('afterLoad', t),
          e.hideLoading(t),
          !t.opts.smallBtn ||
            (t.$smallBtn && t.$smallBtn.length) ||
            (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content
            )),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on('contextmenu.fb', function (t) {
              return 2 == t.button && t.preventDefault(), !0;
            }),
            'image' === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.adjustCaption(t),
          e.adjustLayout(t),
          t.pos === e.currPos && e.updateCursor(),
          e.revealContent(t));
      },
      adjustCaption: function (t) {
        var e,
          n = this,
          o = t || n.current,
          i = o.opts.caption,
          a = o.opts.preventCaptionOverlap,
          s = n.$refs.caption,
          r = !1;
        s.toggleClass('fancybox-caption--separate', a),
          a &&
            i &&
            i.length &&
            (o.pos !== n.currPos
              ? ((e = s.clone().appendTo(s.parent())),
                e.children().eq(0).empty().html(i),
                (r = e.outerHeight(!0)),
                e.empty().remove())
              : n.$caption && (r = n.$caption.outerHeight(!0)),
            o.$slide.css('padding-bottom', r || ''));
      },
      adjustLayout: function (t) {
        var e,
          n,
          o,
          i,
          a = this,
          s = t || a.current;
        s.isLoaded &&
          !0 !== s.opts.disableLayoutFix &&
          (s.$content.css('margin-bottom', ''),
          s.$content.outerHeight() > s.$slide.height() + 0.5 &&
            ((o = s.$slide[0].style['padding-bottom']),
            (i = s.$slide.css('padding-bottom')),
            parseFloat(i) > 0 &&
              ((e = s.$slide[0].scrollHeight),
              s.$slide.css('padding-bottom', 0),
              Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
              s.$slide.css('padding-bottom', o))),
          s.$content.css('margin-bottom', n));
      },
      revealContent: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$slide,
          c = !1,
          l = !1,
          d = s.isMoved(t),
          u = t.isRevealed;
        return (
          (t.isRevealed = !0),
          (e = t.opts[s.firstRun ? 'animationEffect' : 'transitionEffect']),
          (i = t.opts[s.firstRun ? 'animationDuration' : 'transitionDuration']),
          (i = parseInt(
            void 0 === t.forcedDuration ? i : t.forcedDuration,
            10
          )),
          (!d && t.pos === s.currPos && i) || (e = !1),
          'zoom' === e &&
            (t.pos === s.currPos &&
            i &&
            'image' === t.type &&
            !t.hasError &&
            (l = s.getThumbPos(t))
              ? (c = s.getFitPos(t))
              : (e = 'fade')),
          'zoom' === e
            ? ((s.isAnimating = !0),
              (c.scaleX = c.width / l.width),
              (c.scaleY = c.height / l.height),
              (a = t.opts.zoomOpacity),
              'auto' == a &&
                (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
              a && ((l.opacity = 0.1), (c.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass('fancybox-is-hidden'),
                l
              ),
              p(t.$content),
              void n.fancybox.animate(t.$content, c, i, function () {
                (s.isAnimating = !1), s.complete();
              }))
            : (s.updateSlide(t),
              e
                ? (n.fancybox.stop(r),
                  (o =
                    'fancybox-slide--' +
                    (t.pos >= s.prevPos ? 'next' : 'previous') +
                    ' fancybox-animated fancybox-fx-' +
                    e),
                  r.addClass(o).removeClass('fancybox-slide--current'),
                  t.$content.removeClass('fancybox-is-hidden'),
                  p(r),
                  'image' !== t.type && t.$content.hide().show(0),
                  void n.fancybox.animate(
                    r,
                    'fancybox-slide--current',
                    i,
                    function () {
                      r.removeClass(o).css({ transform: '', opacity: '' }),
                        t.pos === s.currPos && s.complete();
                    },
                    !0
                  ))
                : (t.$content.removeClass('fancybox-is-hidden'),
                  u ||
                    !d ||
                    'image' !== t.type ||
                    t.hasError ||
                    t.$content.hide().fadeIn('fast'),
                  void (t.pos === s.currPos && s.complete())))
        );
      },
      getThumbPos: function (t) {
        var e,
          o,
          i,
          a,
          s,
          r = !1,
          c = t.$thumb;
        return (
          !(!c || !g(c[0])) &&
          ((e = n.fancybox.getTranslate(c)),
          (o = parseFloat(c.css('border-top-width') || 0)),
          (i = parseFloat(c.css('border-right-width') || 0)),
          (a = parseFloat(c.css('border-bottom-width') || 0)),
          (s = parseFloat(c.css('border-left-width') || 0)),
          (r = {
            top: e.top + o,
            left: e.left + s,
            width: e.width - i - s,
            height: e.height - o - a,
            scaleX: 1,
            scaleY: 1,
          }),
          e.width > 0 && e.height > 0 && r)
        );
      },
      complete: function () {
        var t,
          e = this,
          o = e.current,
          i = {};
        !e.isMoved() &&
          o.isLoaded &&
          (o.isComplete ||
            ((o.isComplete = !0),
            o.$slide.siblings().trigger('onReset'),
            e.preload('inline'),
            p(o.$slide),
            o.$slide.addClass('fancybox-slide--complete'),
            n.each(e.slides, function (t, o) {
              o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                ? (i[o.pos] = o)
                : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove());
            }),
            (e.slides = i)),
          (e.isAnimating = !1),
          e.updateCursor(),
          e.trigger('afterShow'),
          o.opts.video.autoStart &&
            o.$slide
              .find('video,audio')
              .filter(':visible:first')
              .trigger('play')
              .one('ended', function () {
                this.webkitExitFullscreen && this.webkitExitFullscreen(),
                  e.next();
              }),
          o.opts.autoFocus &&
            'html' === o.contentType &&
            ((t = o.$content.find('input[autofocus]:enabled:visible:first')),
            t.length ? t.trigger('focus') : e.focus(null, !0)),
          o.$slide.scrollTop(0).scrollLeft(0));
      },
      preload: function (t) {
        var e,
          n,
          o = this;
        o.group.length < 2 ||
          ((n = o.slides[o.currPos + 1]),
          (e = o.slides[o.currPos - 1]),
          e && e.type === t && o.loadSlide(e),
          n && n.type === t && o.loadSlide(n));
      },
      focus: function (t, o) {
        var i,
          a,
          s = this,
          r = [
            'a[href]',
            'area[href]',
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            'select:not([disabled]):not([aria-hidden])',
            'textarea:not([disabled]):not([aria-hidden])',
            'button:not([disabled]):not([aria-hidden])',
            'iframe',
            'object',
            'embed',
            'video',
            'audio',
            '[contenteditable]',
            '[tabindex]:not([tabindex^="-"])',
          ].join(',');
        s.isClosing ||
          ((i =
            !t && s.current && s.current.isComplete
              ? s.current.$slide.find(
                  '*:visible' + (o ? ':not(.fancybox-close-small)' : '')
                )
              : s.$refs.container.find('*:visible')),
          (i = i.filter(r).filter(function () {
            return (
              'hidden' !== n(this).css('visibility') &&
              !n(this).hasClass('disabled')
            );
          })),
          i.length
            ? ((a = i.index(e.activeElement)),
              t && t.shiftKey
                ? (a < 0 || 0 == a) &&
                  (t.preventDefault(), i.eq(i.length - 1).trigger('focus'))
                : (a < 0 || a == i.length - 1) &&
                  (t && t.preventDefault(), i.eq(0).trigger('focus')))
            : s.$refs.container.trigger('focus'));
      },
      activate: function () {
        var t = this;
        n('.fancybox-container').each(function () {
          var e = n(this).data('FancyBox');
          e &&
            e.id !== t.id &&
            !e.isClosing &&
            (e.trigger('onDeactivate'), e.removeEvents(), (e.isVisible = !1));
        }),
          (t.isVisible = !0),
          (t.current || t.isIdle) && (t.update(), t.updateControls()),
          t.trigger('onActivate'),
          t.addEvents();
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          u = this,
          f = u.current,
          h = function () {
            u.cleanUp(t);
          };
        return (
          !u.isClosing &&
          ((u.isClosing = !0),
          !1 === u.trigger('beforeClose', t)
            ? ((u.isClosing = !1),
              d(function () {
                u.update();
              }),
              !1)
            : (u.removeEvents(),
              (a = f.$content),
              (o = f.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
              f.$slide.removeClass(
                'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated'
              ),
              !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
              f.$slide.siblings().trigger('onReset').remove(),
              i &&
                u.$refs.container
                  .removeClass('fancybox-is-open')
                  .addClass('fancybox-is-closing')
                  .css('transition-duration', i + 'ms'),
              u.hideLoading(f),
              u.hideControls(!0),
              u.updateCursor(),
              'zoom' !== o ||
                (a &&
                  i &&
                  'image' === f.type &&
                  !u.isMoved() &&
                  !f.hasError &&
                  (l = u.getThumbPos(f))) ||
                (o = 'fade'),
              'zoom' === o
                ? (n.fancybox.stop(a),
                  (s = n.fancybox.getTranslate(a)),
                  (c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height,
                  }),
                  (r = f.opts.zoomOpacity),
                  'auto' == r &&
                    (r =
                      Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                  r && (l.opacity = 0),
                  n.fancybox.setTranslate(a, c),
                  p(a),
                  n.fancybox.animate(a, l, i, h),
                  !0)
                : (o && i
                    ? n.fancybox.animate(
                        f.$slide
                          .addClass('fancybox-slide--previous')
                          .removeClass('fancybox-slide--current'),
                        'fancybox-animated fancybox-fx-' + o,
                        i,
                        h
                      )
                    : !0 === t
                      ? setTimeout(h, i)
                      : h(),
                  !0)))
        );
      },
      cleanUp: function (e) {
        var o,
          i,
          a,
          s = this,
          r = s.current.opts.$orig;
        s.current.$slide.trigger('onReset'),
          s.$refs.container.empty().remove(),
          s.trigger('afterClose', e),
          s.current.opts.backFocus &&
            ((r && r.length && r.is(':visible')) || (r = s.$trigger),
            r &&
              r.length &&
              ((i = t.scrollX),
              (a = t.scrollY),
              r.trigger('focus'),
              n('html, body').scrollTop(a).scrollLeft(i))),
          (s.current = null),
          (o = n.fancybox.getInstance()),
          o
            ? o.activate()
            : (n('body').removeClass(
                'fancybox-active compensate-for-scrollbar'
              ),
              n('#fancybox-style-noscroll').remove());
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current;
        if (
          (s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          !1 === o)
        )
          return o;
        'afterClose' !== t && a.$refs
          ? a.$refs.container.trigger(t + '.fb', i)
          : r.trigger(t + '.fb', i);
      },
      updateControls: function () {
        var t = this,
          o = t.current,
          i = o.index,
          a = t.$refs.container,
          s = t.$refs.caption,
          r = o.opts.caption;
        o.$slide.trigger('refresh'),
          r && r.length
            ? ((t.$caption = s), s.children().eq(0).html(r))
            : (t.$caption = null),
          t.hasHiddenControls || t.isIdle || t.showControls(),
          a.find('[data-fancybox-count]').html(t.group.length),
          a.find('[data-fancybox-index]').html(i + 1),
          a
            .find('[data-fancybox-prev]')
            .prop('disabled', !o.opts.loop && i <= 0),
          a
            .find('[data-fancybox-next]')
            .prop('disabled', !o.opts.loop && i >= t.group.length - 1),
          'image' === o.type
            ? a
                .find('[data-fancybox-zoom]')
                .show()
                .end()
                .find('[data-fancybox-download]')
                .attr('href', o.opts.image.src || o.src)
                .show()
            : o.opts.toolbar &&
              a.find('[data-fancybox-download],[data-fancybox-zoom]').hide(),
          n(e.activeElement).is(':hidden,[disabled]') &&
            t.$refs.container.trigger('focus');
      },
      hideControls: function (t) {
        var e = this,
          n = ['infobar', 'toolbar', 'nav'];
        (!t && e.current.opts.preventCaptionOverlap) || n.push('caption'),
          this.$refs.container.removeClass(
            n
              .map(function (t) {
                return 'fancybox-show-' + t;
              })
              .join(' ')
          ),
          (this.hasHiddenControls = !0);
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container;
        (t.hasHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass('fancybox-show-toolbar', !(!e.toolbar || !e.buttons))
            .toggleClass(
              'fancybox-show-infobar',
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass('fancybox-show-caption', !!t.$caption)
            .toggleClass(
              'fancybox-show-nav',
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass('fancybox-is-modal', !!e.modal);
      },
      toggleControls: function () {
        this.hasHiddenControls ? this.showControls() : this.hideControls();
      },
    }),
      (n.fancybox = {
        version: '3.5.6',
        defaults: a,
        getInstance: function (t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):last'
            ).data('FancyBox'),
            o = Array.prototype.slice.call(arguments, 1);
          return (
            e instanceof b &&
            ('string' === n.type(t)
              ? e[t].apply(e, o)
              : 'function' === n.type(t) && t.apply(e, o),
            e)
          );
        },
        open: function (t, e, n) {
          return new b(t, e, n);
        },
        close: function (t) {
          var e = this.getInstance();
          e && (e.close(), !0 === t && this.close(t));
        },
        destroy: function () {
          this.close(!0), r.add('body').off('click.fb-start', '**');
        },
        isMobile:
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        use3d: (function () {
          var n = e.createElement('div');
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n) &&
            t.getComputedStyle(n).getPropertyValue('transform') &&
            !(e.documentMode && e.documentMode < 11)
          );
        })(),
        getTranslate: function (t) {
          var e;
          return (
            !(!t || !t.length) &&
            ((e = t[0].getBoundingClientRect()),
            {
              top: e.top || 0,
              left: e.left || 0,
              width: e.width,
              height: e.height,
              opacity: parseFloat(t.css('opacity')),
            })
          );
        },
        setTranslate: function (t, e) {
          var n = '',
            o = {};
          if (t && e)
            return (
              (void 0 === e.left && void 0 === e.top) ||
                ((n =
                  (void 0 === e.left ? t.position().left : e.left) +
                  'px, ' +
                  (void 0 === e.top ? t.position().top : e.top) +
                  'px'),
                (n = this.use3d
                  ? 'translate3d(' + n + ', 0px)'
                  : 'translate(' + n + ')')),
              void 0 !== e.scaleX && void 0 !== e.scaleY
                ? (n += ' scale(' + e.scaleX + ', ' + e.scaleY + ')')
                : void 0 !== e.scaleX && (n += ' scaleX(' + e.scaleX + ')'),
              n.length && (o.transform = n),
              void 0 !== e.opacity && (o.opacity = e.opacity),
              void 0 !== e.width && (o.width = e.width),
              void 0 !== e.height && (o.height = e.height),
              t.css(o)
            );
        },
        animate: function (t, e, o, i, a) {
          var s,
            r = this;
          n.isFunction(o) && ((i = o), (o = null)),
            r.stop(t),
            (s = r.getTranslate(t)),
            t.on(f, function (c) {
              (!c ||
                !c.originalEvent ||
                (t.is(c.originalEvent.target) &&
                  'z-index' != c.originalEvent.propertyName)) &&
                (r.stop(t),
                n.isNumeric(o) && t.css('transition-duration', ''),
                n.isPlainObject(e)
                  ? void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    r.setTranslate(t, {
                      top: e.top,
                      left: e.left,
                      width: s.width * e.scaleX,
                      height: s.height * e.scaleY,
                      scaleX: 1,
                      scaleY: 1,
                    })
                  : !0 !== a && t.removeClass(e),
                n.isFunction(i) && i(c));
            }),
            n.isNumeric(o) && t.css('transition-duration', o + 'ms'),
            n.isPlainObject(e)
              ? (void 0 !== e.scaleX &&
                  void 0 !== e.scaleY &&
                  (delete e.width,
                  delete e.height,
                  t.parent().hasClass('fancybox-slide--image') &&
                    t.parent().addClass('fancybox-is-scaling')),
                n.fancybox.setTranslate(t, e))
              : t.addClass(e),
            t.data(
              'timer',
              setTimeout(function () {
                t.trigger(f);
              }, o + 33)
            );
        },
        stop: function (t, e) {
          t &&
            t.length &&
            (clearTimeout(t.data('timer')),
            e && t.trigger(f),
            t.off(f).css('transition-duration', ''),
            t.parent().removeClass('fancybox-is-scaling'));
        },
      }),
      (n.fn.fancybox = function (t) {
        var e;
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n('body')
                .off('click.fb-start', e)
                .on('click.fb-start', e, { options: t }, i)
            : this.off('click.fb-start').on(
                'click.fb-start',
                { items: this, options: t },
                i
              ),
          this
        );
      }),
      r.on('click.fb-start', '[data-fancybox]', i),
      r.on('click.fb-start', '[data-fancybox-trigger]', function (t) {
        n('[data-fancybox="' + n(this).attr('data-fancybox-trigger') + '"]')
          .eq(n(this).attr('data-fancybox-index') || 0)
          .trigger('click.fb-start', { $trigger: n(this) });
      }),
      (function () {
        var t = null;
        r.on('mousedown mouseup focus blur', '.fancybox-button', function (e) {
          switch (e.type) {
            case 'mousedown':
              t = n(this);
              break;
            case 'mouseup':
              t = null;
              break;
            case 'focusin':
              n('.fancybox-button').removeClass('fancybox-focus'),
                n(this).is(t) ||
                  n(this).is('[disabled]') ||
                  n(this).addClass('fancybox-focus');
              break;
            case 'focusout':
              n('.fancybox-button').removeClass('fancybox-focus');
          }
        });
      })();
  }
})(window, document, jQuery),
  (function (t) {
    'use strict';
    var e = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: 'transparent',
            enablejsapi: 1,
            html5: 1,
          },
          paramPlace: 8,
          type: 'iframe',
          url: 'https://www.youtube-nocookie.com/embed/$4',
          thumb: 'https://img.youtube.com/vi/$4/hqdefault.jpg',
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1,
          },
          paramPlace: 3,
          type: 'iframe',
          url: '//player.vimeo.com/video/$2',
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: 'image',
          url: '//$1/p/$2/media/?size=l',
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: 'iframe',
          url: function (t) {
            return (
              '//maps.google.' +
              t[2] +
              '/?ll=' +
              (t[9]
                ? t[9] +
                  '&z=' +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, '&') : '')
                : t[12] + ''
              ).replace(/\?/, '&') +
              '&output=' +
              (t[12] && t[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed')
            );
          },
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: 'iframe',
          url: function (t) {
            return (
              '//maps.google.' +
              t[2] +
              '/maps?q=' +
              t[5].replace('query=', 'q=').replace('api=1', '') +
              '&output=embed'
            );
          },
        },
      },
      n = function (e, n, o) {
        if (e)
          return (
            (o = o || ''),
            'object' === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace('$' + t, n || '');
            }),
            o.length && (e += (e.indexOf('?') > 0 ? '&' : '?') + o),
            e
          );
      };
    t(document).on('objectNeedsType.fb', function (o, i, a) {
      var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || '',
        h = !1;
      (s = t.extend(!0, {}, e, a.opts.media)),
        t.each(s, function (e, o) {
          if ((c = p.match(o.matcher))) {
            if (
              ((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])
            ) {
              (d = c[o.paramPlace]),
                '?' == d[0] && (d = d.substring(1)),
                (d = d.split('&'));
              for (var i = 0; i < d.length; ++i) {
                var s = d[i].split('=', 2);
                2 == s.length &&
                  (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, ' ')));
              }
            }
            return (
              (l = t.extend(!0, {}, o.params, a.opts[e], u)),
              (p =
                'function' === t.type(o.url)
                  ? o.url.call(this, c, l, a)
                  : n(o.url, c, l)),
              (r =
                'function' === t.type(o.thumb)
                  ? o.thumb.call(this, c, l, a)
                  : n(o.thumb, c)),
              'youtube' === e
                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return (
                      '&start=' +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                    );
                  }))
                : 'vimeo' === e && (p = p.replace('&%23', '#')),
              !1
            );
          }
        }),
        h
          ? (a.opts.thumb ||
              (a.opts.$thumb && a.opts.$thumb.length) ||
              (a.opts.thumb = r),
            'iframe' === h &&
              (a.opts = t.extend(!0, a.opts, {
                iframe: { preload: !1, attr: { scrolling: 'no' } },
              })),
            t.extend(a, {
              type: h,
              src: p,
              origSrc: a.src,
              contentSource: f,
              contentType:
                'image' === h
                  ? 'image'
                  : 'gmap_place' == f || 'gmap_search' == f
                    ? 'map'
                    : 'video',
            }))
          : p && (a.type = a.opts.defaultType);
    });
    var o = {
      youtube: {
        src: 'https://www.youtube.com/iframe_api',
        class: 'YT',
        loading: !1,
        loaded: !1,
      },
      vimeo: {
        src: 'https://player.vimeo.com/api/player.js',
        class: 'Vimeo',
        loading: !1,
        loaded: !1,
      },
      load: function (t) {
        var e,
          n = this;
        if (this[t].loaded)
          return void setTimeout(function () {
            n.done(t);
          });
        this[t].loading ||
          ((this[t].loading = !0),
          (e = document.createElement('script')),
          (e.type = 'text/javascript'),
          (e.src = this[t].src),
          'youtube' === t
            ? (window.onYouTubeIframeAPIReady = function () {
                (n[t].loaded = !0), n.done(t);
              })
            : (e.onload = function () {
                (n[t].loaded = !0), n.done(t);
              }),
          document.body.appendChild(e));
      },
      done: function (e) {
        var n, o, i;
        'youtube' === e && delete window.onYouTubeIframeAPIReady,
          (n = t.fancybox.getInstance()) &&
            ((o = n.current.$content.find('iframe')),
            'youtube' === e && void 0 !== YT && YT
              ? (i = new YT.Player(o.attr('id'), {
                  events: {
                    onStateChange: function (t) {
                      0 == t.data && n.next();
                    },
                  },
                }))
              : 'vimeo' === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                ((i = new Vimeo.Player(o)),
                i.on('ended', function () {
                  n.next();
                })));
      },
    };
    t(document).on({
      'afterShow.fb': function (t, e, n) {
        e.group.length > 1 &&
          ('youtube' === n.contentSource || 'vimeo' === n.contentSource) &&
          o.load(n.contentSource);
      },
    });
  })(jQuery),
  (function (t, e, n) {
    'use strict';
    var o = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60);
          }
        );
      })(),
      i = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e);
          }
        );
      })(),
      a = function (e) {
        var n = [];
        (e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
                ? e.changedTouches
                : [e]);
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY });
        return n;
      },
      s = function (t, e, n) {
        return e && t
          ? 'x' === n
            ? t.x - e.x
            : 'y' === n
              ? t.y - e.y
              : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0;
      },
      r = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data('selectable')
        )
          return !0;
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ('data-fancybox-' === o[e].nodeName.substr(0, 14)) return !0;
        return !1;
      },
      c = function (e) {
        var n = t.getComputedStyle(e)['overflow-y'],
          o = t.getComputedStyle(e)['overflow-x'],
          i =
            ('scroll' === n || 'auto' === n) && e.scrollHeight > e.clientHeight,
          a = ('scroll' === o || 'auto' === o) && e.scrollWidth > e.clientWidth;
        return i || a;
      },
      l = function (t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break;
          if (
            ((t = t.parent()),
            !t.length || t.hasClass('fancybox-stage') || t.is('body'))
          )
            break;
        }
        return e;
      },
      d = function (t) {
        var e = this;
        (e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            'touchstart.fb.touch mousedown.fb.touch',
            n.proxy(e, 'ontouchstart')
          );
      };
    (d.prototype.destroy = function () {
      var t = this;
      t.$container.off('.fb.touch'),
        n(e).off('.fb.touch'),
        t.requestId && (i(t.requestId), (t.requestId = null)),
        t.tapped && (clearTimeout(t.tapped), (t.tapped = null));
    }),
      (d.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          d = i.instance,
          u = d.current,
          f = u.$slide,
          p = u.$content,
          h = 'touchstart' == o.type;
        if (
          (h && i.$container.off('mousedown.fb.touch'),
          (!o.originalEvent || 2 != o.originalEvent.button) &&
            f.length &&
            c.length &&
            !r(c) &&
            !r(c.parent()) &&
            (c.is('img') ||
              !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
        ) {
          if (!u || d.isAnimating || u.$slide.hasClass('fancybox-animated'))
            return o.stopPropagation(), void o.preventDefault();
          (i.realPoints = i.startPoints = a(o)),
            i.startPoints.length &&
              (u.touch && o.stopPropagation(),
              (i.startEvent = o),
              (i.canTap = !0),
              (i.$target = c),
              (i.$content = p),
              (i.opts = u.opts.touch),
              (i.isPanning = !1),
              (i.isSwiping = !1),
              (i.isZooming = !1),
              (i.isScrolling = !1),
              (i.canPan = d.canPan()),
              (i.startTime = new Date().getTime()),
              (i.distanceX = i.distanceY = i.distance = 0),
              (i.canvasWidth = Math.round(f[0].clientWidth)),
              (i.canvasHeight = Math.round(f[0].clientHeight)),
              (i.contentLastPos = null),
              (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0,
              }),
              (i.sliderStartPos = n.fancybox.getTranslate(f)),
              (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
              (i.sliderStartPos.top -= i.stagePos.top),
              (i.sliderStartPos.left -= i.stagePos.left),
              (i.contentStartPos.top -= i.stagePos.top),
              (i.contentStartPos.left -= i.stagePos.left),
              n(e)
                .off('.fb.touch')
                .on(
                  h
                    ? 'touchend.fb.touch touchcancel.fb.touch'
                    : 'mouseup.fb.touch mouseleave.fb.touch',
                  n.proxy(i, 'ontouchend')
                )
                .on(
                  h ? 'touchmove.fb.touch' : 'mousemove.fb.touch',
                  n.proxy(i, 'ontouchmove')
                ),
              n.fancybox.isMobile &&
                e.addEventListener('scroll', i.onscroll, !0),
              (((i.opts || i.canPan) &&
                (c.is(i.$stage) || i.$stage.find(c).length)) ||
                (c.is('.fancybox-image') && o.preventDefault(),
                n.fancybox.isMobile &&
                  c.parents('.fancybox-caption').length)) &&
                ((i.isScrollable = l(c) || l(c.parent())),
                (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                (1 === i.startPoints.length || u.hasError) &&
                  (i.canPan
                    ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                    : (i.isSwiping = !0),
                  i.$container.addClass('fancybox-is-grabbing')),
                2 === i.startPoints.length &&
                  'image' === u.type &&
                  (u.isLoaded || u.$ghost) &&
                  ((i.canTap = !1),
                  (i.isSwiping = !1),
                  (i.isPanning = !1),
                  (i.isZooming = !0),
                  n.fancybox.stop(i.$content),
                  (i.centerPointStartX =
                    0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                    n(t).scrollLeft()),
                  (i.centerPointStartY =
                    0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                    n(t).scrollTop()),
                  (i.percentageOfImageAtPinchPointX =
                    (i.centerPointStartX - i.contentStartPos.left) /
                    i.contentStartPos.width),
                  (i.percentageOfImageAtPinchPointY =
                    (i.centerPointStartY - i.contentStartPos.top) /
                    i.contentStartPos.height),
                  (i.startDistanceBetweenFingers = s(
                    i.startPoints[0],
                    i.startPoints[1]
                  )))));
        }
      }),
      (d.prototype.onscroll = function (t) {
        var n = this;
        (n.isScrolling = !0), e.removeEventListener('scroll', n.onscroll, !0);
      }),
      (d.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
          ? void e.ontouchend(t)
          : e.isScrolling
            ? void (e.canTap = !1)
            : ((e.newPoints = a(t)),
              void (
                (e.opts || e.canPan) &&
                e.newPoints.length &&
                e.newPoints.length &&
                ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
                (e.distanceX = s(e.newPoints[0], e.startPoints[0], 'x')),
                (e.distanceY = s(e.newPoints[0], e.startPoints[0], 'y')),
                (e.distance = s(e.newPoints[0], e.startPoints[0])),
                e.distance > 0 &&
                  (e.isSwiping
                    ? e.onSwipe(t)
                    : e.isPanning
                      ? e.onPan()
                      : e.isZooming && e.onZoom()))
              ));
      }),
      (d.prototype.onSwipe = function (e) {
        var a,
          s = this,
          r = s.instance,
          c = s.isSwiping,
          l = s.sliderStartPos.left || 0;
        if (!0 !== c)
          'x' == c &&
            (s.distanceX > 0 &&
            (s.instance.group.length < 2 ||
              (0 === s.instance.current.index && !s.instance.current.opts.loop))
              ? (l += Math.pow(s.distanceX, 0.8))
              : s.distanceX < 0 &&
                  (s.instance.group.length < 2 ||
                    (s.instance.current.index === s.instance.group.length - 1 &&
                      !s.instance.current.opts.loop))
                ? (l -= Math.pow(-s.distanceX, 0.8))
                : (l += s.distanceX)),
            (s.sliderLastPos = {
              top: 'x' == c ? 0 : s.sliderStartPos.top + s.distanceY,
              left: l,
            }),
            s.requestId && (i(s.requestId), (s.requestId = null)),
            (s.requestId = o(function () {
              s.sliderLastPos &&
                (n.each(s.instance.slides, function (t, e) {
                  var o = e.pos - s.instance.currPos;
                  n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left:
                      s.sliderLastPos.left +
                      o * s.canvasWidth +
                      o * e.opts.gutter,
                  });
                }),
                s.$container.addClass('fancybox-is-sliding'));
            }));
        else if (Math.abs(s.distance) > 10) {
          if (
            ((s.canTap = !1),
            r.group.length < 2 && s.opts.vertical
              ? (s.isSwiping = 'y')
              : r.isDragging ||
                  !1 === s.opts.vertical ||
                  ('auto' === s.opts.vertical && n(t).width() > 800)
                ? (s.isSwiping = 'x')
                : ((a = Math.abs(
                    (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                  )),
                  (s.isSwiping = a > 45 && a < 135 ? 'y' : 'x')),
            'y' === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
          )
            return void (s.isScrolling = !0);
          (r.isDragging = s.isSwiping),
            (s.startPoints = s.newPoints),
            n.each(r.slides, function (t, e) {
              var o, i;
              n.fancybox.stop(e.$slide),
                (o = n.fancybox.getTranslate(e.$slide)),
                (i = n.fancybox.getTranslate(r.$refs.stage)),
                e.$slide
                  .css({
                    transform: '',
                    opacity: '',
                    'transition-duration': '',
                  })
                  .removeClass('fancybox-animated')
                  .removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(' ');
                  }),
                e.pos === r.current.pos &&
                  ((s.sliderStartPos.top = o.top - i.top),
                  (s.sliderStartPos.left = o.left - i.left)),
                n.fancybox.setTranslate(e.$slide, {
                  top: o.top - i.top,
                  left: o.left - i.left,
                });
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop();
        }
      }),
      (d.prototype.onPan = function () {
        var t = this;
        if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5))
          return void (t.startPoints = t.newPoints);
        (t.canTap = !1),
          (t.contentLastPos = t.limitMovement()),
          t.requestId && i(t.requestId),
          (t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos);
          }));
      }),
      (d.prototype.limitMovement = function () {
        var t,
          e,
          n,
          o,
          i,
          a,
          s = this,
          r = s.canvasWidth,
          c = s.canvasHeight,
          l = s.distanceX,
          d = s.distanceY,
          u = s.contentStartPos,
          f = u.left,
          p = u.top,
          h = u.width,
          g = u.height;
        return (
          (i = h > r ? f + l : f),
          (a = p + d),
          (t = Math.max(0, 0.5 * r - 0.5 * h)),
          (e = Math.max(0, 0.5 * c - 0.5 * g)),
          (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
          (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
          l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
          l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
          d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
          d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
          { top: a, left: i }
        );
      }),
      (d.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight;
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        );
      }),
      (d.prototype.onZoom = function () {
        var e = this,
          a = e.contentStartPos,
          r = a.width,
          c = a.height,
          l = a.left,
          d = a.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          f = u / e.startDistanceBetweenFingers,
          p = Math.floor(r * f),
          h = Math.floor(c * f),
          g = (r - p) * e.percentageOfImageAtPinchPointX,
          b = (c - h) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = m - e.centerPointStartX,
          x = v - e.centerPointStartY,
          w = l + (g + y),
          $ = d + (b + x),
          S = { top: $, left: w, scaleX: f, scaleY: f };
        (e.canTap = !1),
          (e.newWidth = p),
          (e.newHeight = h),
          (e.contentLastPos = S),
          e.requestId && i(e.requestId),
          (e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos);
          }));
      }),
      (d.prototype.ontouchend = function (t) {
        var o = this,
          s = o.isSwiping,
          r = o.isPanning,
          c = o.isZooming,
          l = o.isScrolling;
        if (
          ((o.endPoints = a(t)),
          (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
          o.$container.removeClass('fancybox-is-grabbing'),
          n(e).off('.fb.touch'),
          e.removeEventListener('scroll', o.onscroll, !0),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          (o.isScrolling = !1),
          (o.instance.isDragging = !1),
          o.canTap)
        )
          return o.onTap(t);
        (o.speed = 100),
          (o.velocityX = (o.distanceX / o.dMs) * 0.5),
          (o.velocityY = (o.distanceY / o.dMs) * 0.5),
          r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l);
      }),
      (d.prototype.endSwiping = function (t, e) {
        var o = this,
          i = !1,
          a = o.instance.group.length,
          s = Math.abs(o.distanceX),
          r = 'x' == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50);
        (o.sliderLastPos = null),
          'y' == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(
                o.instance.current.$slide,
                {
                  top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                  opacity: 0,
                },
                200
              ),
              (i = o.instance.close(!0, 250)))
            : r && o.distanceX > 0
              ? (i = o.instance.previous(300))
              : r && o.distanceX < 0 && (i = o.instance.next(300)),
          !1 !== i || ('x' != t && 'y' != t) || o.instance.centerSlide(200),
          o.$container.removeClass('fancybox-is-sliding');
      }),
      (d.prototype.endPanning = function () {
        var t,
          e,
          o,
          i = this;
        i.contentLastPos &&
          (!1 === i.opts.momentum || i.dMs > 350
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + 500 * i.velocityX),
              (e = i.contentLastPos.top + 500 * i.velocityY)),
          (o = i.limitPosition(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (o.width = i.contentStartPos.width),
          (o.height = i.contentStartPos.height),
          n.fancybox.animate(i.$content, o, 366));
      }),
      (d.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight;
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
          (e = a.contentLastPos.top),
          (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(a.$content, i),
          r < a.canvasWidth && c < a.canvasHeight
            ? a.instance.scaleToFit(150)
            : r > s.width || c > s.height
              ? a.instance.scaleToActual(
                  a.centerPointStartX,
                  a.centerPointStartY,
                  150
                )
              : ((o = a.limitPosition(t, e, r, c)),
                n.fancybox.animate(a.$content, o, 150)));
      }),
      (d.prototype.onTap = function (e) {
        var o,
          i = this,
          s = n(e.target),
          r = i.instance,
          c = r.current,
          l = (e && a(e)) || i.startPoints,
          d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
          u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
          f = function (t) {
            var o = c.opts[t];
            if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
              switch (o) {
                case 'close':
                  r.close(i.startEvent);
                  break;
                case 'toggleControls':
                  r.toggleControls();
                  break;
                case 'next':
                  r.next();
                  break;
                case 'nextOrClose':
                  r.group.length > 1 ? r.next() : r.close(i.startEvent);
                  break;
                case 'zoom':
                  'image' == c.type &&
                    (c.isLoaded || c.$ghost) &&
                    (r.canPan()
                      ? r.scaleToFit()
                      : r.isScaledDown()
                        ? r.scaleToActual(d, u)
                        : r.group.length < 2 && r.close(i.startEvent));
              }
          };
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (s.is('img') || !(d > s[0].clientWidth + s.offset().left))
        ) {
          if (
            s.is(
              '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container'
            )
          )
            o = 'Outside';
          else if (s.is('.fancybox-slide')) o = 'Slide';
          else {
            if (
              !r.current.$content ||
              !r.current.$content.find(s).addBack().filter(s).length
            )
              return;
            o = 'Content';
          }
          if (i.tapped) {
            if (
              (clearTimeout(i.tapped),
              (i.tapped = null),
              Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
            )
              return this;
            f('dblclick' + o);
          } else
            (i.tapX = d),
              (i.tapY = u),
              c.opts['dblclick' + o] &&
              c.opts['dblclick' + o] !== c.opts['click' + o]
                ? (i.tapped = setTimeout(function () {
                    (i.tapped = null), r.isAnimating || f('click' + o);
                  }, 500))
                : f('click' + o);
          return this;
        }
      }),
      n(e)
        .on('onActivate.fb', function (t, e) {
          e && !e.Guestures && (e.Guestures = new d(e));
        })
        .on('beforeClose.fb', function (t, e) {
          e && e.Guestures && e.Guestures.destroy();
        });
  })(window, document, jQuery),
  (function (t, e) {
    'use strict';
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>',
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 },
    });
    var n = function (t) {
      (this.instance = t), this.init();
    };
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow;
        (t.$button = n.$refs.toolbar
          .find('[data-fancybox-play]')
          .on('click', function () {
            t.toggle();
          })),
          n.group.length < 2 || !o
            ? t.$button.hide()
            : o.progress &&
              (t.$progress = e(
                '<div class="fancybox-progress"></div>'
              ).appendTo(n.$refs.inner));
      },
      set: function (t) {
        var n = this,
          o = n.instance,
          i = o.current;
        i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
          ? n.isActive &&
            'video' !== i.contentType &&
            (n.$progress &&
              e.fancybox.animate(
                n.$progress.show(),
                { scaleX: 1 },
                i.opts.slideShow.speed
              ),
            (n.timer = setTimeout(function () {
              o.current.opts.loop || o.current.index != o.group.length - 1
                ? o.next()
                : o.jumpTo(0);
            }, i.opts.slideShow.speed)))
          : (n.stop(), (o.idleSecondsCounter = 0), o.showControls());
      },
      clear: function () {
        var t = this;
        clearTimeout(t.timer),
          (t.timer = null),
          t.$progress && t.$progress.removeAttr('style').hide();
      },
      start: function () {
        var t = this,
          e = t.instance.current;
        e &&
          (t.$button
            .attr(
              'title',
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
            )
            .removeClass('fancybox-button--play')
            .addClass('fancybox-button--pause'),
          (t.isActive = !0),
          e.isComplete && t.set(!0),
          t.instance.trigger('onSlideShowChange', !0));
      },
      stop: function () {
        var t = this,
          e = t.instance.current;
        t.clear(),
          t.$button
            .attr(
              'title',
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
            )
            .removeClass('fancybox-button--pause')
            .addClass('fancybox-button--play'),
          (t.isActive = !1),
          t.instance.trigger('onSlideShowChange', !1),
          t.$progress && t.$progress.removeAttr('style').hide();
      },
      toggle: function () {
        var t = this;
        t.isActive ? t.stop() : t.start();
      },
    }),
      e(t).on({
        'onInit.fb': function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e));
        },
        'beforeShow.fb': function (t, e, n, o) {
          var i = e && e.SlideShow;
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear();
        },
        'afterShow.fb': function (t, e, n) {
          var o = e && e.SlideShow;
          o && o.isActive && o.set();
        },
        'afterKeydown.fb': function (n, o, i, a, s) {
          var r = o && o.SlideShow;
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is('button,a,input') ||
            (a.preventDefault(), r.toggle());
        },
        'beforeClose.fb onDeactivate.fb': function (t, e) {
          var n = e && e.SlideShow;
          n && n.stop();
        },
      }),
      e(t).on('visibilitychange', function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow;
        o && o.isActive && (t.hidden ? o.clear() : o.set());
      });
  })(document, jQuery),
  (function (t, e) {
    'use strict';
    var n = (function () {
      for (
        var e = [
            [
              'requestFullscreen',
              'exitFullscreen',
              'fullscreenElement',
              'fullscreenEnabled',
              'fullscreenchange',
              'fullscreenerror',
            ],
            [
              'webkitRequestFullscreen',
              'webkitExitFullscreen',
              'webkitFullscreenElement',
              'webkitFullscreenEnabled',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'webkitRequestFullScreen',
              'webkitCancelFullScreen',
              'webkitCurrentFullScreenElement',
              'webkitCancelFullScreen',
              'webkitfullscreenchange',
              'webkitfullscreenerror',
            ],
            [
              'mozRequestFullScreen',
              'mozCancelFullScreen',
              'mozFullScreenElement',
              'mozFullScreenEnabled',
              'mozfullscreenchange',
              'mozfullscreenerror',
            ],
            [
              'msRequestFullscreen',
              'msExitFullscreen',
              'msFullscreenElement',
              'msFullscreenEnabled',
              'MSFullscreenChange',
              'MSFullscreenError',
            ],
          ],
          n = {},
          o = 0;
        o < e.length;
        o++
      ) {
        var i = e[o];
        if (i && i[1] in t) {
          for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a];
          return n;
        }
      }
      return !1;
    })();
    if (n) {
      var o = {
        request: function (e) {
          (e = e || t.documentElement),
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT);
        },
        exit: function () {
          t[n.exitFullscreen]();
        },
        toggle: function (e) {
          (e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e);
        },
        isFullscreen: function () {
          return Boolean(t[n.fullscreenElement]);
        },
        enabled: function () {
          return Boolean(t[n.fullscreenEnabled]);
        },
      };
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>',
        },
        fullScreen: { autoStart: !1 },
      }),
        e(t).on(n.fullscreenchange, function () {
          var t = o.isFullscreen(),
            n = e.fancybox.getInstance();
          n &&
            (n.current &&
              'image' === n.current.type &&
              n.isAnimating &&
              ((n.isAnimating = !1),
              n.update(!0, !0, 0),
              n.isComplete || n.complete()),
            n.trigger('onFullscreenChange', t),
            n.$refs.container.toggleClass('fancybox-is-fullscreen', t),
            n.$refs.toolbar
              .find('[data-fancybox-fullscreen]')
              .toggleClass('fancybox-button--fsenter', !t)
              .toggleClass('fancybox-button--fsexit', t));
        });
    }
    e(t).on({
      'onInit.fb': function (t, e) {
        var i;
        if (!n)
          return void e.$refs.toolbar
            .find('[data-fancybox-fullscreen]')
            .remove();
        e && e.group[e.currIndex].opts.fullScreen
          ? ((i = e.$refs.container),
            i.on(
              'click.fb-fullscreen',
              '[data-fancybox-fullscreen]',
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle();
              }
            ),
            e.opts.fullScreen &&
              !0 === e.opts.fullScreen.autoStart &&
              o.request(),
            (e.FullScreen = o))
          : e && e.$refs.toolbar.find('[data-fancybox-fullscreen]').hide();
      },
      'afterKeydown.fb': function (t, e, n, o, i) {
        e &&
          e.FullScreen &&
          70 === i &&
          (o.preventDefault(), e.FullScreen.toggle());
      },
      'beforeClose.fb': function (t, e) {
        e &&
          e.FullScreen &&
          e.$refs.container.hasClass('fancybox-is-fullscreen') &&
          o.exit();
      },
    });
  })(document, jQuery),
  (function (t, e) {
    'use strict';
    var n = 'fancybox-thumbs';
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>',
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: '.fancybox-container',
          axis: 'y',
        },
      },
      e.fancybox.defaults
    );
    var o = function (t) {
      this.init(t);
    };
    e.extend(o.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this,
          n = t.group,
          o = 0;
        (e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          (t.Thumbs = e),
          (e.$button = t.$refs.toolbar.find('[data-fancybox-thumbs]'));
        for (
          var i = 0, a = n.length;
          i < a && (n[i].thumb && o++, !(o > 1));
          i++
        );
        o > 1 && e.opts
          ? (e.$button.removeAttr('style').on('click', function () {
              e.toggle();
            }),
            (e.isActive = !0))
          : e.$button.hide();
      },
      create: function () {
        var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = [];
        o.$grid ||
          ((o.$grid = e(
            '<div class="' + n + ' ' + n + '-' + o.opts.axis + '"></div>'
          ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
          o.$grid.on('click', 'a', function () {
            i.jumpTo(e(this).attr('data-index'));
          })),
          o.$list ||
            (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
          e.each(i.group, function (e, n) {
            (t = n.thumb),
              t || 'image' !== n.type || (t = n.src),
              s.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  '></a>'
              );
          }),
          (o.$list[0].innerHTML = s.join('')),
          'x' === o.opts.axis &&
            o.$list.width(
              parseInt(o.$grid.css('padding-right'), 10) +
                i.group.length * o.$list.children().eq(0).outerWidth(!0)
            );
      },
      focus: function (t) {
        var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid;
        o.instance.current &&
          ((e = i
            .children()
            .removeClass('fancybox-thumbs-active')
            .filter('[data-index="' + o.instance.current.index + '"]')
            .addClass('fancybox-thumbs-active')),
          (n = e.position()),
          'y' === o.opts.axis &&
          (n.top < 0 || n.top > i.height() - e.outerHeight())
            ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
            : 'x' === o.opts.axis &&
              (n.left < a.scrollLeft() ||
                n.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
              i.parent().stop().animate({ scrollLeft: n.left }, t));
      },
      update: function () {
        var t = this;
        t.instance.$refs.container.toggleClass(
          'fancybox-show-thumbs',
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger('onThumbsShow'),
              t.focus(0))
            : t.$grid && t.instance.trigger('onThumbsHide'),
          t.instance.update();
      },
      hide: function () {
        (this.isVisible = !1), this.update();
      },
      show: function () {
        (this.isVisible = !0), this.update();
      },
      toggle: function () {
        (this.isVisible = !this.isVisible), this.update();
      },
    }),
      e(t).on({
        'onInit.fb': function (t, e) {
          var n;
          e &&
            !e.Thumbs &&
            ((n = new o(e)), n.isActive && !0 === n.opts.autoStart && n.show());
        },
        'beforeShow.fb': function (t, e, n, o) {
          var i = e && e.Thumbs;
          i && i.isVisible && i.focus(o ? 0 : 250);
        },
        'afterKeydown.fb': function (t, e, n, o, i) {
          var a = e && e.Thumbs;
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle());
        },
        'beforeClose.fb': function (t, e) {
          var n = e && e.Thumbs;
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide();
        },
      });
  })(document, jQuery),
  (function (t, e) {
    'use strict';
    function n(t) {
      var e = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;',
      };
      return String(t).replace(/[&<>"'`=\/]/g, function (t) {
        return e[t];
      });
    }
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>',
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              'inline' !== e.type &&
              'html' !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          );
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>',
      },
    }),
      e(t).on('click', '[data-fancybox-share]', function () {
        var t,
          o,
          i = e.fancybox.getInstance(),
          a = i.current || null;
        a &&
          ('function' === e.type(a.opts.share.url) &&
            (t = a.opts.share.url.apply(a, [i, a])),
          (o = a.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              'image' === a.type ? encodeURIComponent(a.src) : ''
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(/\{\{url_raw\}\}/g, n(t))
            .replace(
              /\{\{descr\}\}/g,
              i.$caption ? encodeURIComponent(i.$caption.text()) : ''
            )),
          e.fancybox.open({
            src: i.translate(i, o),
            type: 'html',
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (t, e) {
                i.$refs.container.one('beforeClose.fb', function () {
                  t.close(null, 0);
                }),
                  e.$content.find('.fancybox-share__button').click(function () {
                    return (
                      window.open(this.href, 'Share', 'width=550, height=450'),
                      !1
                    );
                  });
              },
              mobile: { autoFocus: !1 },
            },
          }));
      });
  })(document, jQuery),
  (function (t, e, n) {
    'use strict';
    function o() {
      var e = t.location.hash.substr(1),
        n = e.split('-'),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join('-');
      return { hash: e, index: o < 1 ? 1 : o, gallery: i };
    }
    function i(t) {
      '' !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger('click.fb-start');
    }
    function a(t) {
      var e, n;
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        '' !==
          (n =
            e.hash ||
            (e.$orig
              ? e.$orig.data('fancybox') || e.$orig.data('fancybox-trigger')
              : '')) && n)
      );
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        return (t + '').replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? '\0' === t
                ? 'Ã¯Â¿Â½'
                : t.slice(0, -1) +
                  '\\' +
                  t.charCodeAt(t.length - 1).toString(16) +
                  ' '
              : '\\' + t;
          }
        );
      }),
      n(function () {
        !1 !== n.fancybox.defaults.hash &&
          (n(e).on({
            'onInit.fb': function (t, e) {
              var n, i;
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = o()),
                (i = a(e)) &&
                  n.gallery &&
                  i == n.gallery &&
                  (e.currIndex = n.index - 1));
            },
            'beforeShow.fb': function (n, o, i, s) {
              var r;
              i &&
                !1 !== i.opts.hash &&
                (r = a(o)) &&
                ((o.currentHash =
                  r + (o.group.length > 1 ? '-' + (i.index + 1) : '')),
                t.location.hash !== '#' + o.currentHash &&
                  (s && !o.origHash && (o.origHash = t.location.hash),
                  o.hashTimer && clearTimeout(o.hashTimer),
                  (o.hashTimer = setTimeout(function () {
                    'replaceState' in t.history
                      ? (t.history[s ? 'pushState' : 'replaceState'](
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            '#' +
                            o.currentHash
                        ),
                        s && (o.hasCreatedHistory = !0))
                      : (t.location.hash = o.currentHash),
                      (o.hashTimer = null);
                  }, 300))));
            },
            'beforeClose.fb': function (n, o, i) {
              i &&
                !1 !== i.opts.hash &&
                (clearTimeout(o.hashTimer),
                o.currentHash && o.hasCreatedHistory
                  ? t.history.back()
                  : o.currentHash &&
                    ('replaceState' in t.history
                      ? t.history.replaceState(
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            (o.origHash || '')
                        )
                      : (t.location.hash = o.origHash)),
                (o.currentHash = null));
            },
          }),
          n(t).on('hashchange.fb', function () {
            var t = o(),
              e = null;
            n.each(n('.fancybox-container').get().reverse(), function (t, o) {
              var i = n(o).data('FancyBox');
              if (i && i.currentHash) return (e = i), !1;
            }),
              e
                ? e.currentHash === t.gallery + '-' + t.index ||
                  (1 === t.index && e.currentHash == t.gallery) ||
                  ((e.currentHash = null), e.close())
                : '' !== t.gallery && i(t);
          }),
          setTimeout(function () {
            n.fancybox.getInstance() || i(o());
          }, 50));
      });
  })(window, document, jQuery),
  (function (t, e) {
    'use strict';
    var n = new Date().getTime();
    e(t).on({
      'onInit.fb': function (t, e, o) {
        e.$refs.stage.on(
          'mousewheel DOMMouseScroll wheel MozMousePixelScroll',
          function (t) {
            var o = e.current,
              i = new Date().getTime();
            e.group.length < 2 ||
              !1 === o.opts.wheel ||
              ('auto' === o.opts.wheel && 'image' !== o.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              o.$slide.hasClass('fancybox-animated') ||
                ((t = t.originalEvent || t),
                i - n < 250 ||
                  ((n = i),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? 'next'
                      : 'previous'
                  ]())));
          }
        );
      },
    });
  })(document, jQuery);

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e('<div></div>')
          .addClass('nice-select')
          .addClass(t.attr('class') || '')
          .addClass(t.attr('disabled') ? 'disabled' : '')
          .attr('tabindex', t.attr('disabled') ? null : '0')
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find('option'),
        i = t.find('option:selected');
      s.find('.current').html(i.data('display') || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data('display');
          s.find('ul').append(
            e('<li></li>')
              .attr('data-value', n.val())
              .attr('data-display', i || null)
              .addClass(
                'option' +
                  (n.is(':selected') ? ' selected' : '') +
                  (n.is(':disabled') ? ' disabled' : '')
              )
              .html(n.text())
          );
        });
    }
    if ('string' == typeof t)
      return (
        'update' == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next('.nice-select'),
                i = n.hasClass('open');
              n.length && (n.remove(), s(t), i && t.next().trigger('click'));
            })
          : 'destroy' == t
            ? (this.each(function () {
                var t = e(this),
                  s = e(this).next('.nice-select');
                s.length && (s.remove(), t.css('display', ''));
              }),
              0 == e('.nice-select').length && e(document).off('.nice_select'))
            : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass('nice-select') || s(t);
      }),
      e(document).off('.nice_select'),
      e(document).on('click.nice_select', '.nice-select', function (t) {
        var s = e(this);
        e('.nice-select').not(s).removeClass('open'),
          s.toggleClass('open'),
          s.hasClass('open')
            ? (s.find('.option'),
              s.find('.focus').removeClass('focus'),
              s.find('.selected').addClass('focus'))
            : s.focus();
      }),
      e(document).on('click.nice_select', function (t) {
        0 === e(t.target).closest('.nice-select').length &&
          e('.nice-select').removeClass('open').find('.option');
      }),
      e(document).on(
        'click.nice_select',
        '.nice-select .option:not(.disabled)',
        function (t) {
          var s = e(this),
            n = s.closest('.nice-select');
          n.find('.selected').removeClass('selected'), s.addClass('selected');
          var i = s.data('display') || s.text();
          n.find('.current').text(i),
            n.prev('select').val(s.data('value')).trigger('change');
        }
      ),
      e(document).on('keydown.nice_select', '.nice-select', function (t) {
        var s = e(this),
          n = e(s.find('.focus') || s.find('.list .option.selected'));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass('open') ? n.trigger('click') : s.trigger('click'), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass('open')) {
            var i = n.nextAll('.option:not(.disabled)').first();
            i.length > 0 &&
              (s.find('.focus').removeClass('focus'), i.addClass('focus'));
          } else s.trigger('click');
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass('open')) {
            var l = n.prevAll('.option:not(.disabled)').first();
            l.length > 0 &&
              (s.find('.focus').removeClass('focus'), l.addClass('focus'));
          } else s.trigger('click');
          return !1;
        }
        if (27 == t.keyCode) s.hasClass('open') && s.trigger('click');
        else if (9 == t.keyCode && s.hasClass('open')) return !1;
      });
    var n = document.createElement('a').style;
    return (
      (n.cssText = 'pointer-events:auto'),
      'auto' !== n.pointerEvents && e('html').addClass('no-csspointerevents'),
      this
    );
  };
})(jQuery);

/*------------------------------------
    scrollup js
--------------------------------------*/

!(function (l, o, e) {
  'use strict';
  (l.fn.scrollUp = function (o) {
    l.data(e.body, 'scrollUp') ||
      (l.data(e.body, 'scrollUp', !0), l.fn.scrollUp.init(o));
  }),
    (l.fn.scrollUp.init = function (r) {
      var s,
        t,
        c,
        i,
        n,
        a,
        d,
        p = (l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r)),
        f = !1;
      switch (
        ((d = p.scrollTrigger
          ? l(p.scrollTrigger)
          : l('<a/>', {
              id: p.scrollName,
              href: '#top',
            })),
        p.scrollTitle && d.attr('title', p.scrollTitle),
        d.appendTo('body'),
        p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
        d.css({
          display: 'none',
          position: 'fixed',
          zIndex: p.zIndex,
        }),
        p.activeOverlay &&
          l('<div/>', {
            id: p.scrollName + '-active',
          })
            .css({
              position: 'absolute',
              top: p.scrollDistance + 'px',
              width: '100%',
              borderTop: '1px dotted' + p.activeOverlay,
              zIndex: p.zIndex,
            })
            .appendTo('body'),
        p.animation)
      ) {
        case 'fade':
          (s = 'fadeIn'), (t = 'fadeOut'), (c = p.animationSpeed);
          break;
        case 'slide':
          (s = 'slideDown'), (t = 'slideUp'), (c = p.animationSpeed);
          break;
        default:
          (s = 'show'), (t = 'hide'), (c = 0);
      }
      (i =
        'top' === p.scrollFrom
          ? p.scrollDistance
          : l(e).height() - l(o).height() - p.scrollDistance),
        (n = l(o).scroll(function () {
          l(o).scrollTop() > i
            ? f || (d[s](c), (f = !0))
            : f && (d[t](c), (f = !1));
        })),
        p.scrollTarget
          ? 'number' == typeof p.scrollTarget
            ? (a = p.scrollTarget)
            : 'string' == typeof p.scrollTarget &&
              (a = Math.floor(l(p.scrollTarget).offset().top))
          : (a = 0),
        d.click(function (o) {
          o.preventDefault(),
            l('html, body').animate(
              {
                scrollTop: a,
              },
              p.scrollSpeed,
              p.easingType
            );
        });
    }),
    (l.fn.scrollUp.defaults = {
      scrollName: 'scrollUp',
      scrollDistance: 300,
      scrollFrom: 'top',
      scrollSpeed: 300,
      easingType: 'linear',
      animation: 'fade',
      animationSpeed: 200,
      scrollTrigger: !1,
      scrollTarget: !1,
      scrollText: 'Scroll to top',
      scrollTitle: !1,
      scrollImg: !1,
      activeOverlay: !1,
      zIndex: 2147483647,
    }),
    (l.fn.scrollUp.destroy = function (r) {
      l.removeData(e.body, 'scrollUp'),
        l('#' + l.fn.scrollUp.settings.scrollName).remove(),
        l('#' + l.fn.scrollUp.settings.scrollName + '-active').remove(),
        l.fn.jquery.split('.')[1] >= 7
          ? l(o).off('scroll', r)
          : l(o).unbind('scroll', r);
    }),
    (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function (i) {
  'use strict';
  'function' == typeof define && define.amd
    ? define(['jquery'], i)
    : 'undefined' != typeof exports
      ? (module.exports = i(require('jquery')))
      : i(jQuery);
})(function (i) {
  'use strict';
  var e = window.Slick || {};
  (e = (function () {
    function e(e, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(e),
        appendDots: i(e),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: 'slick-dots',
        draggable: !0,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = 'hidden'),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(e)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = 'visibilitychange'),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(e).data('slick') || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        'undefined' != typeof document.mozHidden
          ? ((n.hidden = 'mozHidden'),
            (n.visibilityChange = 'mozvisibilitychange'))
          : 'undefined' != typeof document.webkitHidden &&
            ((n.hidden = 'webkitHidden'),
            (n.visibilityChange = 'webkitvisibilitychange')),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = t++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    }
    var t = 0;
    return e;
  })()),
    (e.prototype.activateADA = function () {
      var i = this;
      i.$slideTrack
        .find('.slick-active')
        .attr({ 'aria-hidden': 'false' })
        .find('a, input, button, select')
        .attr({ tabindex: '0' });
    }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ('boolean' == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          'number' == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
                ? i(e).insertBefore(s.$slides.eq(t))
                : i(e).insertAfter(s.$slides.eq(t))
            : o === !0
              ? i(e).prependTo(s.$slideTrack)
              : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr('data-slick-index', e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        s.options.rtl === !0 && s.options.vertical === !1 && (e = -e),
        s.transformsEnabled === !1
          ? s.options.vertical === !1
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : s.cssTransitions === !1
            ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
              i({ animStart: s.currentLeft }).animate(
                { animStart: e },
                {
                  duration: s.options.speed,
                  easing: s.options.easing,
                  step: function (i) {
                    (i = Math.ceil(i)),
                      s.options.vertical === !1
                        ? ((o[s.animType] = 'translate(' + i + 'px, 0px)'),
                          s.$slideTrack.css(o))
                        : ((o[s.animType] = 'translate(0px,' + i + 'px)'),
                          s.$slideTrack.css(o));
                  },
                  complete: function () {
                    t && t.call();
                  },
                }
              ))
            : (s.applyTransition(),
              (e = Math.ceil(e)),
              s.options.vertical === !1
                ? (o[s.animType] = 'translate3d(' + e + 'px, 0px, 0px)')
                : (o[s.animType] = 'translate3d(0px,' + e + 'px, 0px)'),
              s.$slideTrack.css(o),
              t &&
                setTimeout(function () {
                  s.disableTransition(), t.call();
                }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this,
        o = t.getNavTarget();
      null !== o &&
        'object' == typeof o &&
        o.each(function () {
          var t = i(this).slick('getSlick');
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      e.options.fade === !1
        ? (t[e.transitionType] =
            e.transformType + ' ' + e.options.speed + 'ms ' + e.options.cssEase)
        : (t[e.transitionType] =
            'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (i.options.infinite === !1 &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 === 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      e.options.arrows === !0 &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass('slick-arrow')),
        (e.$nextArrow = i(e.options.nextArrow).addClass('slick-arrow')),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            e.$nextArrow
              .removeClass('slick-hidden')
              .removeAttr('aria-hidden tabindex'),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            e.options.infinite !== !0 &&
              e.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass('slick-hidden')
              .attr({ 'aria-disabled': 'true', tabindex: '-1' }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (o.options.dots === !0 && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass('slick-dotted'),
            t = i('<ul />').addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i('<li />').append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find('li').first().addClass('slick-active');
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ':not(.slick-cloned)')
        .addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr('data-slick-index', e)
            .data('originalStyling', i(t).attr('style') || '');
        }),
        e.$slider.addClass('slick-slider'),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css('opacity', 0),
        (e.options.centerMode !== !0 && e.options.swipeToSlide !== !0) ||
          (e.options.slidesToScroll = 1),
        i('img[data-lazy]', e.$slider).not('[src]').addClass('slick-loading'),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          'number' == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.options.draggable === !0 && e.$list.addClass('draggable');
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement('div');
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement('div');
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + '%',
              display: 'inline-block',
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ('window' === r.respondTo
          ? (n = a)
          : 'slider' === r.respondTo
            ? (n = d)
            : 'min' === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (r.originalSettings.mobileFirst === !1
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              'unslick' === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  e === !0 && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            e === !0 && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || l === !1 || r.$slider.trigger('breakpoint', [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is('a') && e.preventDefault(),
        l.is('li') || (l = l.closest('li')),
        (n = r.slideCount % r.options.slidesToScroll !== 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case 'previous':
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case 'next':
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case 'index':
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger('focus');
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e,
        t,
        o = this;
      if (((e = o.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var s in e) {
          if (i < e[s]) {
            i = t;
            break;
          }
          t = e[s];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i('li', e.$dots)
          .off('click.slick', e.changeSlide)
          .off('mouseenter.slick', i.proxy(e.interrupt, e, !0))
          .off('mouseleave.slick', i.proxy(e.interrupt, e, !1)),
        e.options.accessibility === !0 &&
          e.$dots.off('keydown.slick', e.keyHandler)),
        e.$slider.off('focus.slick blur.slick'),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
          e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide),
          e.options.accessibility === !0 &&
            (e.$prevArrow && e.$prevArrow.off('keydown.slick', e.keyHandler),
            e.$nextArrow && e.$nextArrow.off('keydown.slick', e.keyHandler))),
        e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
        e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
        e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
        e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
        e.$list.off('click.slick', e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        e.options.accessibility === !0 &&
          e.$list.off('keydown.slick', e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().off('click.slick', e.selectHandler),
        i(window).off(
          'orientationchange.slick.slick-' + e.instanceUid,
          e.orientationChange
        ),
        i(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
        i('[draggable!=true]', e.$slideTrack).off(
          'dragstart',
          e.preventDefault
        ),
        i(window).off('load.slick.slick-' + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.off('mouseleave.slick', i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 0 &&
        ((i = e.$slides.children().children()),
        i.removeAttr('style'),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      var e = this;
      e.shouldClick === !1 &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i('.slick-cloned', t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass('slick-disabled slick-arrow slick-hidden')
            .removeAttr('aria-hidden aria-disabled tabindex')
            .css('display', ''),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              'slick-slide slick-active slick-center slick-visible slick-current'
            )
            .removeAttr('aria-hidden')
            .removeAttr('data-slick-index')
            .each(function () {
              i(this).attr('style', i(this).data('originalStyling'));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass('slick-slider'),
        t.$slider.removeClass('slick-initialized'),
        t.$slider.removeClass('slick-dotted'),
        (t.unslicked = !0),
        e || t.$slider.trigger('destroy', [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ''),
        e.options.fade === !1 ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      t.cssTransitions === !1
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      e.cssTransitions === !1
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off('focus.slick blur.slick')
        .on('focus.slick', '*', function (t) {
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              o.is(':focus') &&
              ((e.focussed = !0), e.autoPlay());
          }, 0);
        })
        .on('blur.slick', '*', function (t) {
          i(this);
          e.options.pauseOnFocus && ((e.focussed = !1), e.autoPlay());
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        var i = this;
        return i.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (i.options.infinite === !0)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (i.options.centerMode === !0) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        n.options.infinite === !0
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              n.options.vertical === !0 &&
                n.options.centerMode === !0 &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll !== 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        n.options.centerMode === !0 && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : n.options.centerMode === !0 && n.options.infinite === !0
            ? (n.slideOffset +=
                n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
                n.slideWidth)
            : n.options.centerMode === !0 &&
              ((n.slideOffset = 0),
              (n.slideOffset +=
                n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          n.options.vertical === !1
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        n.options.variableWidth === !0 &&
          ((o =
            n.slideCount <= n.options.slidesToShow || n.options.infinite === !1
              ? n.$slideTrack.children('.slick-slide').eq(i)
              : n.$slideTrack
                  .children('.slick-slide')
                  .eq(i + n.options.slidesToShow)),
          (e =
            n.options.rtl === !0
              ? o[0]
                ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                : 0
              : o[0]
                ? o[0].offsetLeft * -1
                : 0),
          n.options.centerMode === !0 &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              n.options.infinite === !1
                ? n.$slideTrack.children('.slick-slide').eq(i)
                : n.$slideTrack
                    .children('.slick-slide')
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              n.options.rtl === !0
                ? o[0]
                  ? (n.$slideTrack.width() - o[0].offsetLeft - o.width()) * -1
                  : 0
                : o[0]
                  ? o[0].offsetLeft * -1
                  : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        var e = this;
        return e.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        e.options.infinite === !1
          ? (i = e.slideCount)
          : ((t = e.options.slidesToScroll * -1),
            (o = e.options.slidesToScroll * -1),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o,
        s,
        n = this;
      return (
        (s = n.options.centerMode === !0 ? Math.floor(n.$list.width() / 2) : 0),
        (o = n.swipeLeft * -1 + s),
        n.options.swipeToSlide === !0
          ? (n.$slideTrack.find('.slick-slide').each(function (e, s) {
              var r, l, d;
              if (
                ((r = i(s).outerWidth()),
                (l = s.offsetLeft),
                n.options.centerMode !== !0 && (l += r / 2),
                (d = l + r),
                o < d)
              )
                return (t = s), !1;
            }),
            (e = Math.abs(i(t).attr('data-slick-index') - n.currentSlide) || 1))
          : n.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        var t = this;
        t.changeSlide({ data: { message: 'index', index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass('slick-initialized') ||
        (i(t.$slider).addClass('slick-initialized'),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger('init', [t]),
        t.options.accessibility === !0 && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find('.slick-cloned'))
        .attr({ 'aria-hidden': 'true', tabindex: '-1' })
        .find('a, input, button, select')
        .attr({ tabindex: '-1' }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find('.slick-cloned'))
            .each(function (t) {
              var s = o.indexOf(t);
              if (
                (i(this).attr({
                  role: 'tabpanel',
                  id: 'slick-slide' + e.instanceUid + t,
                  tabindex: -1,
                }),
                s !== -1)
              ) {
                var n = 'slick-slide-control' + e.instanceUid + s;
                i('#' + n).length && i(this).attr({ 'aria-describedby': n });
              }
            }),
          e.$dots
            .attr('role', 'tablist')
            .find('li')
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: 'presentation' }),
                i(this)
                  .find('button')
                  .first()
                  .attr({
                    role: 'tab',
                    id: 'slick-slide-control' + e.instanceUid + s,
                    'aria-controls': 'slick-slide' + e.instanceUid + n,
                    'aria-label': s + 1 + ' of ' + t,
                    'aria-selected': null,
                    tabindex: '-1',
                  });
            })
            .eq(e.currentSlide)
            .find('button')
            .attr({ 'aria-selected': 'true', tabindex: '0' })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.options.focusOnChange
          ? e.$slides.eq(s).attr({ tabindex: '0' })
          : e.$slides.eq(s).removeAttr('tabindex');
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off('click.slick')
          .on('click.slick', { message: 'previous' }, i.changeSlide),
        i.$nextArrow
          .off('click.slick')
          .on('click.slick', { message: 'next' }, i.changeSlide),
        i.options.accessibility === !0 &&
          (i.$prevArrow.on('keydown.slick', i.keyHandler),
          i.$nextArrow.on('keydown.slick', i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      e.options.dots === !0 &&
        e.slideCount > e.options.slidesToShow &&
        (i('li', e.$dots).on(
          'click.slick',
          { message: 'index' },
          e.changeSlide
        ),
        e.options.accessibility === !0 &&
          e.$dots.on('keydown.slick', e.keyHandler)),
        e.options.dots === !0 &&
          e.options.pauseOnDotsHover === !0 &&
          e.slideCount > e.options.slidesToShow &&
          i('li', e.$dots)
            .on('mouseenter.slick', i.proxy(e.interrupt, e, !0))
            .on('mouseleave.slick', i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
        e.$list.on('mouseleave.slick', i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          'touchstart.slick mousedown.slick',
          { action: 'start' },
          e.swipeHandler
        ),
        e.$list.on(
          'touchmove.slick mousemove.slick',
          { action: 'move' },
          e.swipeHandler
        ),
        e.$list.on(
          'touchend.slick mouseup.slick',
          { action: 'end' },
          e.swipeHandler
        ),
        e.$list.on(
          'touchcancel.slick mouseleave.slick',
          { action: 'end' },
          e.swipeHandler
        ),
        e.$list.on('click.slick', e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        e.options.accessibility === !0 &&
          e.$list.on('keydown.slick', e.keyHandler),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on('click.slick', e.selectHandler),
        i(window).on(
          'orientationchange.slick.slick-' + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          'resize.slick.slick-' + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i('[draggable!=true]', e.$slideTrack).on('dragstart', e.preventDefault),
        i(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
        (37 === i.keyCode && e.options.accessibility === !0
          ? e.changeSlide({
              data: { message: e.options.rtl === !0 ? 'next' : 'previous' },
            })
          : 39 === i.keyCode &&
            e.options.accessibility === !0 &&
            e.changeSlide({
              data: { message: e.options.rtl === !0 ? 'previous' : 'next' },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i('img[data-lazy]', e).each(function () {
          var e = i(this),
            t = i(this).attr('data-lazy'),
            o = i(this).attr('data-srcset'),
            s = i(this).attr('data-sizes') || r.$slider.attr('data-sizes'),
            n = document.createElement('img');
          (n.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr('srcset', o), s && e.attr('sizes', s)),
                e.attr('src', t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr('data-lazy data-srcset data-sizes').removeClass(
                    'slick-loading'
                  );
                }),
                r.$slider.trigger('lazyLoaded', [r, e, t]);
            });
          }),
            (n.onerror = function () {
              e
                .removeAttr('data-lazy')
                .removeClass('slick-loading')
                .addClass('slick-lazyload-error'),
                r.$slider.trigger('lazyLoadError', [r, e, t]);
            }),
            (n.src = t);
        });
      }
      var t,
        o,
        s,
        n,
        r = this;
      if (
        (r.options.centerMode === !0
          ? r.options.infinite === !0
            ? ((s = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
              (n = s + r.options.slidesToShow + 2))
            : ((s = Math.max(
                0,
                r.currentSlide - (r.options.slidesToShow / 2 + 1)
              )),
              (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
          : ((s = r.options.infinite
              ? r.options.slidesToShow + r.currentSlide
              : r.currentSlide),
            (n = Math.ceil(s + r.options.slidesToShow)),
            r.options.fade === !0 && (s > 0 && s--, n <= r.slideCount && n++)),
        (t = r.$slider.find('.slick-slide').slice(s, n)),
        'anticipated' === r.options.lazyLoad)
      )
        for (
          var l = s - 1, d = n, a = r.$slider.find('.slick-slide'), c = 0;
          c < r.options.slidesToScroll;
          c++
        )
          l < 0 && (l = r.slideCount - 1),
            (t = t.add(a.eq(l))),
            (t = t.add(a.eq(d))),
            l--,
            d++;
      e(t),
        r.slideCount <= r.options.slidesToShow
          ? ((o = r.$slider.find('.slick-slide')), e(o))
          : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? ((o = r.$slider
                .find('.slick-cloned')
                .slice(0, r.options.slidesToShow)),
              e(o))
            : 0 === r.currentSlide &&
              ((o = r.$slider
                .find('.slick-cloned')
                .slice(r.options.slidesToShow * -1)),
              e(o));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass('slick-loading'),
        i.initUI(),
        'progressive' === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        var i = this;
        i.changeSlide({ data: { message: 'next' } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      if (
        !t.unslicked &&
        (t.$slider.trigger('afterChange', [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        t.options.accessibility === !0 &&
          (t.initADA(), t.options.focusOnChange))
      ) {
        var o = i(t.$slides.get(t.currentSlide));
        o.attr('tabindex', 0).focus();
      }
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        var i = this;
        i.changeSlide({ data: { message: 'previous' } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i('img[data-lazy]', l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr('data-lazy')),
          (s = t.attr('data-srcset')),
          (n = t.attr('data-sizes') || l.$slider.attr('data-sizes')),
          (r = document.createElement('img')),
          (r.onload = function () {
            s && (t.attr('srcset', s), n && t.attr('sizes', n)),
              t
                .attr('src', o)
                .removeAttr('data-lazy data-srcset data-sizes')
                .removeClass('slick-loading'),
              l.options.adaptiveHeight === !0 && l.setPosition(),
              l.$slider.trigger('lazyLoaded', [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr('data-lazy')
                  .removeClass('slick-loading')
                  .addClass('slick-lazyload-error'),
                l.$slider.trigger('lazyLoadError', [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger('allImagesLoaded', [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: 'index', index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ('array' === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || 'window';
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass('slick-slide')),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        e.options.focusOnSelect === !0 &&
          i(e.$slideTrack).children().on('click.slick', e.selectHandler),
        e.setSlideClasses(
          'number' == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger('reInit', [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        return (
          'boolean' == typeof i
            ? ((e = i), (i = e === !0 ? 0 : o.slideCount - 1))
            : (i = e === !0 ? --i : i),
          !(o.slideCount < 1 || i < 0 || i > o.slideCount - 1) &&
            (o.unload(),
            t === !0
              ? o.$slideTrack.children().remove()
              : o.$slideTrack.children(this.options.slide).eq(i).remove(),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            (o.$slidesCache = o.$slides),
            void o.reinit())
        );
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      o.options.rtl === !0 && (i = -i),
        (e = 'left' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (t = 'top' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
        (s[o.positionProp] = i),
        o.transformsEnabled === !1
          ? o.$slideTrack.css(s)
          : ((s = {}),
            o.cssTransitions === !1
              ? ((s[o.animType] = 'translate(' + e + ', ' + t + ')'),
                o.$slideTrack.css(s))
              : ((s[o.animType] = 'translate3d(' + e + ', ' + t + ', 0px)'),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      i.options.vertical === !1
        ? i.options.centerMode === !0 &&
          i.$list.css({ padding: '0px ' + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          i.options.centerMode === !0 &&
            i.$list.css({ padding: i.options.centerPadding + ' 0px' })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        i.options.vertical === !1 && i.options.variableWidth === !1
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children('.slick-slide').length
              )
            ))
          : i.options.variableWidth === !0
            ? i.$slideTrack.width(5e3 * i.slideCount)
            : ((i.slideWidth = Math.ceil(i.listWidth)),
              i.$slideTrack.height(
                Math.ceil(
                  i.$slides.first().outerHeight(!0) *
                    i.$slideTrack.children('.slick-slide').length
                )
              ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      i.options.variableWidth === !1 &&
        i.$slideTrack.children('.slick-slide').width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          t.options.rtl === !0
            ? i(s).css({
                position: 'relative',
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: 'relative',
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        i.options.adaptiveHeight === !0 &&
        i.options.vertical === !1
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css('height', e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ('object' === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = 'multiple'))
            : 'string' === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              'responsive' === arguments[0] && 'array' === i.type(arguments[1])
                ? (n = 'responsive')
                : 'undefined' != typeof arguments[1] && (n = 'single')),
          'single' === n)
        )
          r.options[o] = s;
        else if ('multiple' === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ('responsive' === n)
          for (t in s)
            if ('array' !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        i.options.fade === !1
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger('setPosition', [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = i.options.vertical === !0 ? 'top' : 'left'),
        'top' === i.positionProp
          ? i.$slider.addClass('slick-vertical')
          : i.$slider.removeClass('slick-vertical'),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (i.options.useCSS === !0 && (i.cssTransitions = !0)),
        i.options.fade &&
          ('number' == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = 'OTransform'),
          (i.transformType = '-o-transform'),
          (i.transitionType = 'OTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = 'MozTransform'),
          (i.transformType = '-moz-transform'),
          (i.transitionType = 'MozTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = 'webkitTransform'),
          (i.transformType = '-webkit-transform'),
          (i.transitionType = 'webkitTransition'),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = 'msTransform'),
          (i.transformType = '-ms-transform'),
          (i.transitionType = 'msTransition'),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          i.animType !== !1 &&
          ((i.animType = 'transform'),
          (i.transformType = 'transform'),
          (i.transitionType = 'transition')),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && i.animType !== !1);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
        n.$slides.eq(i).addClass('slick-current'),
        n.options.centerMode === !0)
      ) {
        var r = n.options.slidesToShow % 2 === 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          n.options.infinite === !0 &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass('slick-active')
                  .attr('aria-hidden', 'false')),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass('slick-center')
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass('slick-center')),
          n.$slides.eq(i).addClass('slick-center');
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass('slick-active')
              .attr('aria-hidden', 'false')
          : t.length <= n.options.slidesToShow
            ? t.addClass('slick-active').attr('aria-hidden', 'false')
            : ((s = n.slideCount % n.options.slidesToShow),
              (o = n.options.infinite === !0 ? n.options.slidesToShow + i : i),
              n.options.slidesToShow == n.options.slidesToScroll &&
              n.slideCount - i < n.options.slidesToShow
                ? t
                    .slice(o - (n.options.slidesToShow - s), o + s)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : t
                    .slice(o, o + n.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false'));
      ('ondemand' !== n.options.lazyLoad &&
        'anticipated' !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (s.options.fade === !0 && (s.options.centerMode = !1),
        s.options.infinite === !0 &&
          s.options.fade === !1 &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            s.options.centerMode === !0
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass('slick-cloned');
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr('id', '')
              .attr('data-slick-index', t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass('slick-cloned');
        s.$slideTrack
          .find('.slick-cloned')
          .find('[id]')
          .each(function () {
            i(this).attr('id', '');
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is('.slick-slide')
          ? i(e.target)
          : i(e.target).parents('.slick-slide'),
        s = parseInt(o.attr('data-slick-index'));
      return (
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? void t.slideHandler(s, !1, !0)
          : void t.slideHandler(s)
      );
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (a.animating === !0 && a.options.waitForAnimate === !0) ||
          (a.options.fade === !0 && a.currentSlide === i)
        ))
      )
        return (
          e === !1 && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          a.options.infinite === !1 &&
          a.options.centerMode === !1 &&
          (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)
            ? void (
                a.options.fade === !1 &&
                ((o = a.currentSlide),
                t !== !0 && a.slideCount > a.options.slidesToShow
                  ? a.animateSlide(r, function () {
                      a.postSlide(o);
                    })
                  : a.postSlide(o))
              )
            : a.options.infinite === !1 &&
                a.options.centerMode === !0 &&
                (i < 0 || i > a.slideCount - a.options.slidesToScroll)
              ? void (
                  a.options.fade === !1 &&
                  ((o = a.currentSlide),
                  t !== !0 && a.slideCount > a.options.slidesToShow
                    ? a.animateSlide(r, function () {
                        a.postSlide(o);
                      })
                    : a.postSlide(o))
                )
              : (a.options.autoplay && clearInterval(a.autoPlayTimer),
                (s =
                  o < 0
                    ? a.slideCount % a.options.slidesToScroll !== 0
                      ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                      : a.slideCount + o
                    : o >= a.slideCount
                      ? a.slideCount % a.options.slidesToScroll !== 0
                        ? 0
                        : o - a.slideCount
                      : o),
                (a.animating = !0),
                a.$slider.trigger('beforeChange', [a, a.currentSlide, s]),
                (n = a.currentSlide),
                (a.currentSlide = s),
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor &&
                  ((l = a.getNavTarget()),
                  (l = l.slick('getSlick')),
                  l.slideCount <= l.options.slidesToShow &&
                    l.setSlideClasses(a.currentSlide)),
                a.updateDots(),
                a.updateArrows(),
                a.options.fade === !0
                  ? (t !== !0
                      ? (a.fadeSlideOut(n),
                        a.fadeSlide(s, function () {
                          a.postSlide(s);
                        }))
                      : a.postSlide(s),
                    void a.animateHeight())
                  : void (t !== !0 && a.slideCount > a.options.slidesToShow
                      ? a.animateSlide(d, function () {
                          a.postSlide(s);
                        })
                      : a.postSlide(s)))
        );
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      i.options.arrows === !0 &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        i.options.dots === !0 &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass('slick-loading');
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)),
        o < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? s.options.rtl === !1
            ? 'left'
            : 'right'
          : o <= 360 && o >= 315
            ? s.options.rtl === !1
              ? 'left'
              : 'right'
            : o >= 135 && o <= 225
              ? s.options.rtl === !1
                ? 'right'
                : 'left'
              : s.options.verticalSwiping === !0
                ? o >= 35 && o <= 135
                  ? 'down'
                  : 'up'
                : 'vertical'
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (o.touchObject.edgeHit === !0 &&
          o.$slider.trigger('edge', [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case 'left':
          case 'down':
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case 'right':
          case 'up':
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        'vertical' != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger('swipe', [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          e.options.swipe === !1 ||
          ('ontouchend' in document && e.options.swipe === !1) ||
          (e.options.draggable === !1 && i.type.indexOf('mouse') !== -1)
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          e.options.verticalSwiping === !0 &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case 'start':
            e.swipeStart(i);
            break;
          case 'move':
            e.swipeMove(i);
            break;
          case 'end':
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (l.options.verticalSwiping === !0 &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (l.options.rtl === !1 ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              l.options.verticalSwiping === !0 &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              l.options.infinite === !1 &&
                ((0 === l.currentSlide && 'right' === t) ||
                  (l.currentSlide >= l.getDotCount() && 'left' === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              l.options.vertical === !1
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              l.options.verticalSwiping === !0 && (l.swipeLeft = e + o * s),
              l.options.fade !== !0 &&
                l.options.touchMove !== !1 &&
                (l.animating === !0
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      return (
        (t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
        t.slideCount <= t.options.slidesToShow
          ? ((t.touchObject = {}), !1)
          : (void 0 !== i.originalEvent &&
              void 0 !== i.originalEvent.touches &&
              (e = i.originalEvent.touches[0]),
            (t.touchObject.startX = t.touchObject.curX =
              void 0 !== e ? e.pageX : i.clientX),
            (t.touchObject.startY = t.touchObject.curY =
              void 0 !== e ? e.pageY : i.clientY),
            void (t.dragging = !0))
      );
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i('.slick-cloned', e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass('slick-slide slick-active slick-visible slick-current')
          .attr('aria-hidden', 'true')
          .css('width', '');
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger('unslick', [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i,
        e = this;
      (i = Math.floor(e.options.slidesToShow / 2)),
        e.options.arrows === !0 &&
          e.slideCount > e.options.slidesToShow &&
          !e.options.infinite &&
          (e.$prevArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          e.$nextArrow
            .removeClass('slick-disabled')
            .attr('aria-disabled', 'false'),
          0 === e.currentSlide
            ? (e.$prevArrow
                .addClass('slick-disabled')
                .attr('aria-disabled', 'true'),
              e.$nextArrow
                .removeClass('slick-disabled')
                .attr('aria-disabled', 'false'))
            : e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                e.options.centerMode === !1
              ? (e.$nextArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$prevArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false'))
              : e.currentSlide >= e.slideCount - 1 &&
                e.options.centerMode === !0 &&
                (e.$nextArrow
                  .addClass('slick-disabled')
                  .attr('aria-disabled', 'true'),
                e.$prevArrow
                  .removeClass('slick-disabled')
                  .attr('aria-disabled', 'false')));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find('li').removeClass('slick-active').end(),
        i.$dots
          .find('li')
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass('slick-active'));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ('object' == typeof s || 'undefined' == typeof s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          'undefined' != typeof t)
        )
          return t;
      return o;
    });
});
