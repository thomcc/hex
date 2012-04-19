function b(a) {
  throw a;
}
var i = !0, k = null, l = !1;
function aa() {
  return function(a) {
    return a
  }
}
function m(a) {
  return function() {
    return this[a]
  }
}
function n(a) {
  return function() {
    return a
  }
}
var o, ba = this;
function q(a) {
  var c = typeof a;
  if("object" == c) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return c
      }
      var d = Object.prototype.toString.call(a);
      if("[object Window]" == d) {
        return"object"
      }
      if("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == c && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return c
}
function r(a) {
  return void 0 !== a
}
function ca(a) {
  return"string" == typeof a
}
function da(a) {
  return"function" == q(a)
}
function ea(a) {
  return a[fa] || (a[fa] = ++ga)
}
var fa = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ga = 0;
var ha = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"}, ia = {"'":"\\'"};
function ja(a) {
  var p;
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0), g = c, h = d + 1, j;
    if(!(j = ha[e])) {
      if(!(31 < f && 127 > f)) {
        if(e in ia) {
          e = ia[e]
        }else {
          if(e in ha) {
            p = ia[e] = ha[e], e = p
          }else {
            f = e;
            j = e.charCodeAt(0);
            if(31 < j && 127 > j) {
              f = e
            }else {
              if(256 > j) {
                if(f = "\\x", 16 > j || 256 < j) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > j && (f += "0")
              }
              f += j.toString(16).toUpperCase()
            }
            e = ia[e] = f
          }
        }
      }
      j = e
    }
    g[h] = j
  }
  c.push('"');
  return c.join("")
}
function ka(a) {
  return("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function la(a) {
  for(var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= 4294967296
  }
  return c
}
;var ma, na, oa, pa, qa;
(qa = "ScriptEngine" in ba && "JScript" == ba.ScriptEngine()) && (ba.ScriptEngineMajorVersion(), ba.ScriptEngineMinorVersion(), ba.ScriptEngineBuildVersion());
function ra(a, c) {
  this.q = qa ? [] : "";
  a != k && this.append.apply(this, arguments)
}
qa ? (ra.prototype.ga = 0, ra.prototype.append = function(a, c, d) {
  c == k ? this.q[this.ga++] = a : (this.q.push.apply(this.q, arguments), this.ga = this.q.length);
  return this
}) : ra.prototype.append = function(a, c, d) {
  this.q += a;
  if(c != k) {
    for(var e = 1;e < arguments.length;e++) {
      this.q += arguments[e]
    }
  }
  return this
};
ra.prototype.clear = function() {
  qa ? this.ga = this.q.length = 0 : this.q = ""
};
ra.prototype.toString = function() {
  if(qa) {
    var a = this.q.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.q
};
function sa() {
  b(Error("No *print-fn* fn set for evaluation environment"))
}
function s(a) {
  return a != k && a !== l
}
function ua(a, c) {
  var d = a[q.call(k, c)];
  if(s(d)) {
    return d
  }
  d = a._;
  return s(d) ? d : l
}
function t(a, c) {
  return Error("No protocol method " + a + " defined for type " + q.call(k, c) + ": " + c)
}
function va(a) {
  return Array.prototype.slice.call(a)
}
function wa(a) {
  return Array.prototype.slice.call(arguments)
}
function xa(a) {
  return Array(a)
}
function v(a) {
  if(a ? a.C : a) {
    a = a.C(a)
  }else {
    var c;
    var d = v[q.call(k, a)];
    d ? c = d : (d = v._) ? c = d : b(t.call(k, "ICounted.-count", a));
    a = c.call(k, a)
  }
  return a
}
var ya = {};
function za(a, c) {
  var d;
  if(a ? a.B : a) {
    d = a.B(a, c)
  }else {
    var e = za[q.call(k, a)];
    e ? d = e : (e = za._) ? d = e : b(t.call(k, "ICollection.-conj", a));
    d = d.call(k, a, c)
  }
  return d
}
var w = function() {
  function a(a, c, d) {
    if(a ? a.V : a) {
      a = a.V(a, c, d)
    }else {
      var h;
      var j = w[q.call(k, a)];
      j ? h = j : (j = w._) ? h = j : b(t.call(k, "IIndexed.-nth", a));
      a = h.call(k, a, c, d)
    }
    return a
  }
  function c(a, c) {
    var d;
    if(a ? a.U : a) {
      d = a.U(a, c)
    }else {
      var h = w[q.call(k, a)];
      h ? d = h : (h = w._) ? d = h : b(t.call(k, "IIndexed.-nth", a));
      d = d.call(k, a, c)
    }
    return d
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}(), Aa = {};
function Ba(a) {
  if(a ? a.D : a) {
    a = a.D(a)
  }else {
    var c;
    var d = Ba[q.call(k, a)];
    d ? c = d : (d = Ba._) ? c = d : b(t.call(k, "ISeq.-first", a));
    a = c.call(k, a)
  }
  return a
}
function Ca(a) {
  if(a ? a.F : a) {
    a = a.F(a)
  }else {
    var c;
    var d = Ca[q.call(k, a)];
    d ? c = d : (d = Ca._) ? c = d : b(t.call(k, "ISeq.-rest", a));
    a = c.call(k, a)
  }
  return a
}
var x = function() {
  function a(a, c, d) {
    if(a ? a.S : a) {
      a = a.S(a, c, d)
    }else {
      var h;
      var j = x[q.call(k, a)];
      j ? h = j : (j = x._) ? h = j : b(t.call(k, "ILookup.-lookup", a));
      a = h.call(k, a, c, d)
    }
    return a
  }
  function c(a, c) {
    var d;
    if(a ? a.R : a) {
      d = a.R(a, c)
    }else {
      var h = x[q.call(k, a)];
      h ? d = h : (h = x._) ? d = h : b(t.call(k, "ILookup.-lookup", a));
      d = d.call(k, a, c)
    }
    return d
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}();
function Da(a, c) {
  var d;
  if(a ? a.ka : a) {
    d = a.ka(0, c)
  }else {
    var e = Da[q.call(k, a)];
    e ? d = e : (e = Da._) ? d = e : b(t.call(k, "IAssociative.-contains-key?", a));
    d = d.call(k, a, c)
  }
  return d
}
function Ea(a, c, d) {
  if(a ? a.ha : a) {
    a = a.ha(a, c, d)
  }else {
    var e;
    var f = Ea[q.call(k, a)];
    f ? e = f : (f = Ea._) ? e = f : b(t.call(k, "IAssociative.-assoc", a));
    a = e.call(k, a, c, d)
  }
  return a
}
var Fa = {};
function Ga(a, c) {
  var d;
  if(a ? a.ma : a) {
    d = a.ma(a, c)
  }else {
    var e = Ga[q.call(k, a)];
    e ? d = e : (e = Ga._) ? d = e : b(t.call(k, "IMap.-dissoc", a));
    d = d.call(k, a, c)
  }
  return d
}
var Ha = {};
function Ia(a, c) {
  var d;
  if(a ? a.qa : a) {
    d = a.qa(0, c)
  }else {
    var e = Ia[q.call(k, a)];
    e ? d = e : (e = Ia._) ? d = e : b(t.call(k, "ISet.-disjoin", a));
    d = d.call(k, a, c)
  }
  return d
}
var Ja = {};
function Ka(a) {
  if(a ? a.ua : a) {
    a = a.state
  }else {
    var c;
    var d = Ka[q.call(k, a)];
    d ? c = d : (d = Ka._) ? c = d : b(t.call(k, "IDeref.-deref", a));
    a = c.call(k, a)
  }
  return a
}
var La = {};
function Ma(a) {
  if(a ? a.v : a) {
    a = a.g
  }else {
    var c;
    var d = Ma[q.call(k, a)];
    d ? c = d : (d = Ma._) ? c = d : b(t.call(k, "IMeta.-meta", a));
    a = c.call(k, a)
  }
  return a
}
function Na(a, c) {
  var d;
  if(a ? a.w : a) {
    d = a.w(a, c)
  }else {
    var e = Na[q.call(k, a)];
    e ? d = e : (e = Na._) ? d = e : b(t.call(k, "IWithMeta.-with-meta", a));
    d = d.call(k, a, c)
  }
  return d
}
var Oa = function() {
  function a(a, c, d) {
    if(a ? a.X : a) {
      a = a.X(a, c, d)
    }else {
      var h;
      var j = Oa[q.call(k, a)];
      j ? h = j : (j = Oa._) ? h = j : b(t.call(k, "IReduce.-reduce", a));
      a = h.call(k, a, c, d)
    }
    return a
  }
  function c(a, c) {
    var d;
    if(a ? a.W : a) {
      d = a.W(a, c)
    }else {
      var h = Oa[q.call(k, a)];
      h ? d = h : (h = Oa._) ? d = h : b(t.call(k, "IReduce.-reduce", a));
      d = d.call(k, a, c)
    }
    return d
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}();
function Pa(a, c) {
  var d;
  if(a ? a.l : a) {
    d = a.l(a, c)
  }else {
    var e = Pa[q.call(k, a)];
    e ? d = e : (e = Pa._) ? d = e : b(t.call(k, "IEquiv.-equiv", a));
    d = d.call(k, a, c)
  }
  return d
}
function Qa(a) {
  if(a ? a.r : a) {
    a = a.r(a)
  }else {
    var c;
    var d = Qa[q.call(k, a)];
    d ? c = d : (d = Qa._) ? c = d : b(t.call(k, "IHash.-hash", a));
    a = c.call(k, a)
  }
  return a
}
function Ra(a) {
  if(a ? a.n : a) {
    a = a.n(a)
  }else {
    var c;
    var d = Ra[q.call(k, a)];
    d ? c = d : (d = Ra._) ? c = d : b(t.call(k, "ISeqable.-seq", a));
    a = c.call(k, a)
  }
  return a
}
var Sa = {}, Ta = {};
function Ua(a, c) {
  var d;
  if(a ? a.m : a) {
    d = a.m(a, c)
  }else {
    var e = Ua[q.call(k, a)];
    e ? d = e : (e = Ua._) ? d = e : b(t.call(k, "IPrintable.-pr-seq", a));
    d = d.call(k, a, c)
  }
  return d
}
function Va(a, c, d) {
  if(a ? a.ta : a) {
    a = a.ta(a, c, d)
  }else {
    var e;
    var f = Va[q.call(k, a)];
    f ? e = f : (f = Va._) ? e = f : b(t.call(k, "IWatchable.-notify-watches", a));
    a = e.call(k, a, c, d)
  }
  return a
}
function Wa(a) {
  if(a ? a.la : a) {
    a = a.la()
  }else {
    var c;
    var d = Wa[q.call(k, a)];
    d ? c = d : (d = Wa._) ? c = d : b(t.call(k, "IEditableCollection.-as-transient", a));
    a = c.call(k, a)
  }
  return a
}
function Xa(a) {
  if(a ? a.sa : a) {
    a = a.sa(a)
  }else {
    var c;
    var d = Xa[q.call(k, a)];
    d ? c = d : (d = Xa._) ? c = d : b(t.call(k, "ITransientCollection.-persistent!", a));
    a = c.call(k, a)
  }
  return a
}
function Ya(a, c, d) {
  if(a ? a.ra : a) {
    a = a.ra(a, c, d)
  }else {
    var e;
    var f = Ya[q.call(k, a)];
    f ? e = f : (f = Ya._) ? e = f : b(t.call(k, "ITransientAssociative.-assoc!", a));
    a = e.call(k, a, c, d)
  }
  return a
}
var D = function() {
  function a(a, c) {
    var d = a === c;
    return d ? d : Pa.call(k, a, c)
  }
  var c = k, d = function() {
    function a(c, e, j) {
      var p = k;
      r(j) && (p = z(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, c, e, p)
    }
    function d(a, e, f) {
      for(;;) {
        if(s(c.call(k, a, e))) {
          if(s(A.call(k, f))) {
            a = e, e = B.call(k, f), f = A.call(k, f)
          }else {
            return c.call(k, e, B.call(k, f))
          }
        }else {
          return l
        }
      }
    }
    a.e = 2;
    a.b = function(a) {
      var c = B(a), e = B(A(a)), a = C(A(a));
      return d.call(this, c, e, a)
    };
    return a
  }(), c = function(c, f, g) {
    switch(arguments.length) {
      case 1:
        return i;
      case 2:
        return a.call(this, c, f);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 2;
  c.b = d.b;
  c.h = n(i);
  c.f = a;
  c.c = d;
  return c
}();
Qa["null"] = n(0);
x["null"] = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return k;
      case 3:
        return d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
Ea["null"] = function(a, c, d) {
  return Za.call(k, c, d)
};
ya["null"] = i;
za["null"] = function(a, c) {
  return E.call(k, c)
};
Oa["null"] = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.call(k);
      case 3:
        return d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
Ta["null"] = i;
Ua["null"] = function() {
  return E.call(k, "nil")
};
Ha["null"] = i;
Ia["null"] = n(k);
v["null"] = n(0);
Aa["null"] = i;
Ba["null"] = n(k);
Ca["null"] = function() {
  return E.call(k)
};
Pa["null"] = function(a, c) {
  return c === k
};
Na["null"] = n(k);
La["null"] = i;
Ma["null"] = n(k);
w["null"] = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return k;
      case 3:
        return d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
Fa["null"] = i;
Ga["null"] = n(k);
Date.prototype.l = function(a, c) {
  return a.toString() === c.toString()
};
Qa.number = aa();
Pa.number = function(a, c) {
  return a === c
};
Qa["boolean"] = function(a) {
  return a === i ? 1 : 0
};
Qa["function"] = function(a) {
  return ea.call(k, a)
};
var $a = function() {
  function a(a, c, d, e) {
    for(;;) {
      if(e < v.call(k, a)) {
        d = c.call(k, d, w.call(k, a, e)), e += 1
      }else {
        return d
      }
    }
  }
  function c(a, c, d) {
    for(var e = 0;;) {
      if(e < v.call(k, a)) {
        d = c.call(k, d, w.call(k, a, e)), e += 1
      }else {
        return d
      }
    }
  }
  function d(a, c) {
    if(D.call(k, 0, v.call(k, a))) {
      return c.call(k)
    }
    for(var d = w.call(k, a, 0), e = 1;;) {
      if(e < v.call(k, a)) {
        d = c.call(k, d, w.call(k, a, e)), e += 1
      }else {
        return d
      }
    }
  }
  var e = k, e = function(e, g, h, j) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, h);
      case 4:
        return a.call(this, e, g, h, j)
    }
    b("Invalid arity: " + arguments.length)
  };
  e.f = d;
  e.c = c;
  e.N = a;
  return e
}();
function ab(a, c) {
  this.u = a;
  this.j = c
}
o = ab.prototype;
o.r = function(a) {
  return bb.call(k, a)
};
o.G = i;
o.K = i;
o.B = function(a, c) {
  return F.call(k, c, a)
};
o.toString = function() {
  return cb.call(k, this)
};
o.W = function(a, c) {
  return $a.call(k, this.u, c, this.u[this.j], this.j + 1)
};
o.X = function(a, c, d) {
  return $a.call(k, this.u, c, d, this.j)
};
o.n = aa();
o.C = function() {
  return this.u.length - this.j
};
o.L = i;
o.D = function() {
  return this.u[this.j]
};
o.F = function() {
  return this.j + 1 < this.u.length ? new ab(this.u, this.j + 1) : E.call(k)
};
o.l = function(a, c) {
  return db.call(k, a, c)
};
o.U = function(a, c) {
  var d = c + this.j;
  return d < this.u.length ? this.u[d] : k
};
o.V = function(a, c, d) {
  a = c + this.j;
  return a < this.u.length ? this.u[a] : d
};
function eb(a, c) {
  return D.call(k, 0, a.length) ? k : new ab(a, c)
}
function z(a, c) {
  return eb.call(k, a, c)
}
Oa.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return $a.call(k, a, c);
      case 3:
        return $a.call(k, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
x.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return w.call(k, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
w.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < a.length ? a[c] : k;
      case 3:
        return c < a.length ? a[c] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
v.array = function(a) {
  return a.length
};
Ra.array = function(a) {
  return z.call(k, a, 0)
};
function H(a) {
  return s(a) ? Ra.call(k, a) : k
}
function B(a) {
  a = H.call(k, a);
  return s(a) ? Ba.call(k, a) : k
}
function C(a) {
  return Ca.call(k, H.call(k, a))
}
function A(a) {
  return s(a) ? H.call(k, C.call(k, a)) : k
}
function fb(a) {
  return B.call(k, A.call(k, a))
}
function gb(a) {
  return A.call(k, A.call(k, a))
}
v._ = function(a) {
  for(var a = H.call(k, a), c = 0;;) {
    if(s(a)) {
      a = A.call(k, a), c += 1
    }else {
      return c
    }
  }
};
Pa._ = function(a, c) {
  return a === c
};
function I(a) {
  return s(a) ? l : i
}
var J = function() {
  function a(a, c) {
    return za.call(k, a, c)
  }
  var c = k, d = function() {
    function a(c, e, j) {
      var p = k;
      r(j) && (p = z(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, c, e, p)
    }
    function d(a, e, f) {
      for(;;) {
        if(s(f)) {
          a = c.call(k, a, e), e = B.call(k, f), f = A.call(k, f)
        }else {
          return c.call(k, a, e)
        }
      }
    }
    a.e = 2;
    a.b = function(a) {
      var c = B(a), e = B(A(a)), a = C(A(a));
      return d.call(this, c, e, a)
    };
    return a
  }(), c = function(c, f, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, f);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 2;
  c.b = d.b;
  c.f = a;
  c.c = d;
  return c
}();
function K(a) {
  return v.call(k, a)
}
var L = function() {
  function a(a, c, d) {
    return w.call(k, a, Math.floor(c), d)
  }
  function c(a, c) {
    return w.call(k, a, Math.floor(c))
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}(), M = function() {
  function a(a, c, d) {
    return x.call(k, a, c, d)
  }
  function c(a, c) {
    return x.call(k, a, c)
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}(), hb = function() {
  function a(a, c, d) {
    return Ea.call(k, a, c, d)
  }
  var c = k, d = function() {
    function a(c, e, j, p) {
      var u = k;
      r(p) && (u = z(Array.prototype.slice.call(arguments, 3), 0));
      return d.call(this, c, e, j, u)
    }
    function d(a, e, f, p) {
      for(;;) {
        if(a = c.call(k, a, e, f), s(p)) {
          e = B.call(k, p), f = fb.call(k, p), p = gb.call(k, p)
        }else {
          return a
        }
      }
    }
    a.e = 3;
    a.b = function(a) {
      var c = B(a), e = B(A(a)), p = B(A(A(a))), a = C(A(A(a)));
      return d.call(this, c, e, p, a)
    };
    return a
  }(), c = function(c, f, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 3;
  c.b = d.b;
  c.c = a;
  c.N = d;
  return c
}(), ib = function() {
  function a(a, c) {
    return Ga.call(k, a, c)
  }
  var c = k, d = function() {
    function a(c, e, j) {
      var p = k;
      r(j) && (p = z(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, c, e, p)
    }
    function d(a, e, f) {
      for(;;) {
        if(a = c.call(k, a, e), s(f)) {
          e = B.call(k, f), f = A.call(k, f)
        }else {
          return a
        }
      }
    }
    a.e = 2;
    a.b = function(a) {
      var c = B(a), e = B(A(a)), a = C(A(a));
      return d.call(this, c, e, a)
    };
    return a
  }(), c = function(c, f, g) {
    switch(arguments.length) {
      case 1:
        return c;
      case 2:
        return a.call(this, c, f);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 2;
  c.b = d.b;
  c.h = aa();
  c.f = a;
  c.c = d;
  return c
}();
function jb() {
  var a = E("\ufdd1'validate", "\ufdd1'new-value"), c = Za("\ufdd0'line", 4210);
  return Na.call(k, a, c)
}
function kb(a) {
  var c;
  s(a) ? (c = a.s, c = s(c) ? I.call(k, a.hasOwnProperty("cljs$core$IMeta$")) : c) : c = a;
  c = s(c) ? i : ua.call(k, La, a);
  return s(c) ? Ma.call(k, a) : k
}
var lb = function() {
  function a(a, c) {
    return Ia.call(k, a, c)
  }
  var c = k, d = function() {
    function a(c, e, j) {
      var p = k;
      r(j) && (p = z(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, c, e, p)
    }
    function d(a, e, f) {
      for(;;) {
        if(a = c.call(k, a, e), s(f)) {
          e = B.call(k, f), f = A.call(k, f)
        }else {
          return a
        }
      }
    }
    a.e = 2;
    a.b = function(a) {
      var c = B(a), e = B(A(a)), a = C(A(a));
      return d.call(this, c, e, a)
    };
    return a
  }(), c = function(c, f, g) {
    switch(arguments.length) {
      case 1:
        return c;
      case 2:
        return a.call(this, c, f);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 2;
  c.b = d.b;
  c.h = aa();
  c.f = a;
  c.c = d;
  return c
}();
function N(a) {
  return Qa.call(k, a)
}
function mb(a) {
  return I.call(k, H.call(k, a))
}
function nb(a) {
  if(a === k) {
    a = l
  }else {
    var c;
    s(a) ? (c = a.K, c = s(c) ? I.call(k, a.hasOwnProperty("cljs$core$ICollection$")) : c) : c = a;
    a = s(c) ? i : ua.call(k, ya, a)
  }
  return a
}
function ob(a) {
  if(a === k) {
    a = l
  }else {
    var c;
    s(a) ? (c = a.wa, c = s(c) ? I.call(k, a.hasOwnProperty("cljs$core$ISet$")) : c) : c = a;
    a = s(c) ? i : ua.call(k, Ha, a)
  }
  return a
}
function pb(a) {
  var c;
  s(a) ? (c = a.G, c = s(c) ? I.call(k, a.hasOwnProperty("cljs$core$ISequential$")) : c) : c = a;
  return s(c) ? i : ua.call(k, Sa, a)
}
function qb(a) {
  if(a === k) {
    a = l
  }else {
    var c;
    s(a) ? (c = a.va, c = s(c) ? I.call(k, a.hasOwnProperty("cljs$core$IMap$")) : c) : c = a;
    a = s(c) ? i : ua.call(k, Fa, a)
  }
  return a
}
function rb(a) {
  var c;
  s(a) ? (c = a.xa, c = s(c) ? I.call(k, a.hasOwnProperty("cljs$core$IVector$")) : c) : c = a;
  return s(c) ? i : ua.call(k, Ja, a)
}
function sb() {
  return{}
}
var tb = sb.call(k);
function ub(a) {
  if(a === k) {
    a = l
  }else {
    var c;
    s(a) ? (c = a.L, c = s(c) ? I.call(k, a.hasOwnProperty("cljs$core$ISeq$")) : c) : c = a;
    a = s(c) ? i : ua.call(k, Aa, a)
  }
  return a
}
function vb(a) {
  return s(a) ? i : l
}
function wb(a) {
  var c = ca.call(k, a);
  return s(c) ? I.call(k, function() {
    var c = D.call(k, a.charAt(0), "\ufdd0");
    return c ? c : D.call(k, a.charAt(0), "\ufdd1")
  }()) : c
}
function xb(a) {
  var c = ca.call(k, a);
  return s(c) ? D.call(k, a.charAt(0), "\ufdd0") : c
}
function yb(a) {
  var c = ca.call(k, a);
  return s(c) ? D.call(k, a.charAt(0), "\ufdd1") : c
}
function zb(a) {
  return da.call(k, a)
}
function Ab(a, c) {
  return x.call(k, a, c, tb) === tb ? l : i
}
var O = function() {
  function a(a, c, d) {
    return Oa.call(k, d, a, c)
  }
  function c(a, c) {
    return Oa.call(k, c, a)
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}(), Bb = function() {
  function a(a, c, d) {
    for(d = H.call(k, d);;) {
      if(s(d)) {
        c = a.call(k, c, B.call(k, d)), d = A.call(k, d)
      }else {
        return c
      }
    }
  }
  function c(a, c) {
    var d = H.call(k, c);
    return s(d) ? O.call(k, a, B.call(k, d), A.call(k, d)) : a.call(k)
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}();
Oa._ = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Bb.call(k, c, a);
      case 3:
        return Bb.call(k, c, d, a)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Cb = function() {
  var a = k, c = function() {
    function a(d, g, h) {
      var j = k;
      r(h) && (j = z(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, d, g, j)
    }
    function c(a, d, e) {
      for(;;) {
        if(a < d) {
          if(s(A.call(k, e))) {
            a = d, d = B.call(k, e), e = A.call(k, e)
          }else {
            return d < B.call(k, e)
          }
        }else {
          return l
        }
      }
    }
    a.e = 2;
    a.b = function(a) {
      var d = B(a), h = B(A(a)), a = C(A(a));
      return c.call(this, d, h, a)
    };
    return a
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return i;
      case 2:
        return a < e;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.e = 2;
  a.b = c.b;
  a.h = n(i);
  a.f = function(a, c) {
    return a < c
  };
  a.c = c;
  return a
}(), Db = function() {
  var a = k, c = function() {
    function a(d, g, h) {
      var j = k;
      r(h) && (j = z(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, d, g, j)
    }
    function c(a, d, e) {
      for(;;) {
        if(a > d) {
          if(s(A.call(k, e))) {
            a = d, d = B.call(k, e), e = A.call(k, e)
          }else {
            return d > B.call(k, e)
          }
        }else {
          return l
        }
      }
    }
    a.e = 2;
    a.b = function(a) {
      var d = B(a), h = B(A(a)), a = C(A(a));
      return c.call(this, d, h, a)
    };
    return a
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return i;
      case 2:
        return a > e;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.e = 2;
  a.b = c.b;
  a.h = n(i);
  a.f = function(a, c) {
    return a > c
  };
  a.c = c;
  return a
}();
function Eb(a) {
  return 0 <= a ? Math.floor.call(k, a) : Math.ceil.call(k, a)
}
function Fb(a, c) {
  return Eb.call(k, (a - a % c) / c)
}
var Gb = function() {
  function a(a) {
    return a * d.call(k)
  }
  function c() {
    return Math.random.call(k)
  }
  var d = k, d = function(d) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return a.call(this, d)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.Y = c;
  d.h = a;
  return d
}();
function Hb(a) {
  return Eb.call(k, Gb.call(k, a))
}
function Ib(a) {
  for(var c = 0;;) {
    if(0 === a) {
      return c
    }
    a &= a - 1;
    c += 1
  }
}
function Jb(a, c) {
  for(var d = c, e = H.call(k, a);;) {
    var f = e;
    if(s(s(f) ? 0 < d : f)) {
      d -= 1, e = A.call(k, e)
    }else {
      return e
    }
  }
}
w._ = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        var f = Jb.call(k, a, c);
        s(f) ? e = B.call(k, f) : b(Error("Index out of bounds"));
        return e;
      case 3:
        return e = Jb.call(k, a, c), s(e) ? B.call(k, e) : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Kb = function() {
  function a(a) {
    return a === k ? "" : a.toString()
  }
  var c = k, d = function() {
    function a(c, e) {
      var j = k;
      r(e) && (j = z(Array.prototype.slice.call(arguments, 1), 0));
      return d.call(this, c, j)
    }
    function d(a, e) {
      return function(a, d) {
        for(;;) {
          if(s(d)) {
            var e = a.append(c.call(k, B.call(k, d))), f = A.call(k, d), a = e, d = f
          }else {
            return c.call(k, a)
          }
        }
      }.call(k, new ra(c.call(k, a)), e)
    }
    a.e = 1;
    a.b = function(a) {
      var c = B(a), a = C(a);
      return d.call(this, c, a)
    };
    return a
  }(), c = function(c, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, c);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 1;
  c.b = d.b;
  c.Y = n("");
  c.h = a;
  c.f = d;
  return c
}(), P = function() {
  function a(a) {
    return yb.call(k, a) ? a.substring(2, a.length) : xb.call(k, a) ? Kb.call(k, ":", a.substring(2, a.length)) : a === k ? "" : a.toString()
  }
  var c = k, d = function() {
    function a(c, e) {
      var j = k;
      r(e) && (j = z(Array.prototype.slice.call(arguments, 1), 0));
      return d.call(this, c, j)
    }
    function d(a, e) {
      return function(a, d) {
        for(;;) {
          if(s(d)) {
            var e = a.append(c.call(k, B.call(k, d))), f = A.call(k, d), a = e, d = f
          }else {
            return Kb.call(k, a)
          }
        }
      }.call(k, new ra(c.call(k, a)), e)
    }
    a.e = 1;
    a.b = function(a) {
      var c = B(a), a = C(a);
      return d.call(this, c, a)
    };
    return a
  }(), c = function(c, f) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, c);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 1;
  c.b = d.b;
  c.Y = n("");
  c.h = a;
  c.f = d;
  return c
}(), Lb = function() {
  var a = k, a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return a.substring(d);
      case 3:
        return a.substring(d, e)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.f = function(a, d) {
    return a.substring(d)
  };
  a.c = function(a, d, e) {
    return a.substring(d, e)
  };
  return a
}(), Mb = function() {
  function a(a, c) {
    return d.call(k, Kb.call(k, a, "/", c))
  }
  function c(a) {
    return xb.call(k, a) ? a : yb.call(k, a) ? Kb.call(k, "\ufdd0", "'", Lb.call(k, a, 2)) : Kb.call(k, "\ufdd0", "'", a)
  }
  var d = k, d = function(d, f) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return a.call(this, d, f)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.h = c;
  d.f = a;
  return d
}();
function db(a, c) {
  return vb.call(k, pb.call(k, c) ? function() {
    for(var d = H.call(k, a), e = H.call(k, c);;) {
      if(d === k) {
        return e === k
      }
      if(e !== k && D.call(k, B.call(k, d), B.call(k, e))) {
        d = A.call(k, d), e = A.call(k, e)
      }else {
        return l
      }
    }
  }() : k)
}
function Nb(a, c) {
  return a ^ c + 2654435769 + (a << 6) + (a >> 2)
}
function bb(a) {
  return O.call(k, function(a, d) {
    return Nb.call(k, a, N.call(k, d))
  }, N.call(k, B.call(k, a)), A.call(k, a))
}
function Ob(a, c, d, e) {
  this.g = a;
  this.first = c;
  this.T = d;
  this.H = e
}
o = Ob.prototype;
o.r = function(a) {
  return bb.call(k, a)
};
o.G = i;
o.K = i;
o.B = function(a, c) {
  return new Ob(this.g, c, a, this.H + 1)
};
o.toString = function() {
  return cb.call(k, this)
};
o.n = aa();
o.C = m("H");
o.L = i;
o.D = m("first");
o.F = m("T");
o.l = function(a, c) {
  return db.call(k, a, c)
};
o.w = function(a, c) {
  return new Ob(c, this.first, this.T, this.H)
};
o.s = i;
o.v = m("g");
function Pb(a) {
  this.g = a
}
o = Pb.prototype;
o.r = function(a) {
  return bb.call(k, a)
};
o.G = i;
o.K = i;
o.B = function(a, c) {
  return new Ob(this.g, c, k, 1)
};
o.toString = function() {
  return cb.call(k, this)
};
o.n = n(k);
o.C = n(0);
o.L = i;
o.D = n(k);
o.F = n(k);
o.l = function(a, c) {
  return db.call(k, a, c)
};
o.w = function(a, c) {
  return new Pb(c)
};
o.s = i;
o.v = m("g");
var Qb = new Pb(k);
function Rb(a) {
  return O.call(k, J, Qb, a)
}
var E = function() {
  function a(a) {
    var d = k;
    r(a) && (d = z(Array.prototype.slice.call(arguments, 0), 0));
    return O.call(k, J, Qb, Rb.call(k, d))
  }
  a.e = 0;
  a.b = function(a) {
    a = H(a);
    return O.call(k, J, Qb, Rb.call(k, a))
  };
  return a
}();
function Sb(a, c, d) {
  this.g = a;
  this.first = c;
  this.T = d
}
o = Sb.prototype;
o.r = function(a) {
  return bb.call(k, a)
};
o.G = i;
o.K = i;
o.B = function(a, c) {
  return new Sb(k, c, a)
};
o.toString = function() {
  return cb.call(k, this)
};
o.n = aa();
o.L = i;
o.D = m("first");
o.F = function() {
  return this.T === k ? Qb : this.T
};
o.l = function(a, c) {
  return db.call(k, a, c)
};
o.w = function(a, c) {
  return new Sb(c, this.first, this.T)
};
o.s = i;
o.v = m("g");
function F(a, c) {
  return new Sb(k, a, c)
}
Oa.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return $a.call(k, a, c);
      case 3:
        return $a.call(k, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
x.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return w.call(k, a, c);
      case 3:
        return w.call(k, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
w.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c < v.call(k, a) ? a.charAt(c) : k;
      case 3:
        return c < v.call(k, a) ? a.charAt(c) : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
v.string = function(a) {
  return a.length
};
Ra.string = function(a) {
  return eb.call(k, a, 0)
};
Qa.string = function(a) {
  return la.call(k, a)
};
String.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return M.call(k, c, this.toString());
      case 3:
        return M.call(k, c, this.toString(), d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, c) {
  return 2 > K.call(k, c) ? M.call(k, c[0], a) : M.call(k, c[0], a, c[1])
};
function Tb(a) {
  var c = a.x;
  if(s(a.ja)) {
    return c
  }
  a.x = c.call(k);
  a.ja = i;
  return a.x
}
function Q(a, c, d) {
  this.g = a;
  this.ja = c;
  this.x = d
}
o = Q.prototype;
o.r = function(a) {
  return bb.call(k, a)
};
o.G = i;
o.K = i;
o.B = function(a, c) {
  return F.call(k, c, a)
};
o.toString = function() {
  return cb.call(k, this)
};
o.n = function(a) {
  return H.call(k, Tb.call(k, a))
};
o.L = i;
o.D = function(a) {
  return B.call(k, Tb.call(k, a))
};
o.F = function(a) {
  return C.call(k, Tb.call(k, a))
};
o.l = function(a, c) {
  return db.call(k, a, c)
};
o.w = function(a, c) {
  return new Q(c, this.ja, this.x)
};
o.s = i;
o.v = m("g");
function Ub(a) {
  for(var c = [];;) {
    if(s(H.call(k, a))) {
      c.push(B.call(k, a)), a = A.call(k, a)
    }else {
      return c
    }
  }
}
function Vb(a, c) {
  for(var d = a, e = c, f = 0;;) {
    var g;
    g = (g = 0 < e) ? H.call(k, d) : g;
    if(s(g)) {
      d = A.call(k, d), e -= 1, f += 1
    }else {
      return f
    }
  }
}
var Xb = function Wb(c) {
  return c === k ? k : A.call(k, c) === k ? H.call(k, B.call(k, c)) : F.call(k, B.call(k, c), Wb.call(k, A.call(k, c)))
}, Yb = function() {
  function a(a, c) {
    return new Q(k, l, function() {
      var d = H.call(k, a);
      return s(d) ? F.call(k, B.call(k, d), e.call(k, C.call(k, d), c)) : c
    })
  }
  function c(a) {
    return new Q(k, l, function() {
      return a
    })
  }
  function d() {
    return new Q(k, l, n(k))
  }
  var e = k, f = function() {
    function a(d, e, f) {
      var g = k;
      r(f) && (g = z(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, d, e, g)
    }
    function c(a, d, f) {
      return function G(a, c) {
        return new Q(k, l, function() {
          var d = H.call(k, a);
          return s(d) ? F.call(k, B.call(k, d), G.call(k, C.call(k, d), c)) : s(c) ? G.call(k, B.call(k, c), A.call(k, c)) : k
        })
      }.call(k, e.call(k, a, d), f)
    }
    a.e = 2;
    a.b = function(a) {
      var d = B(a), e = B(A(a)), a = C(A(a));
      return c.call(this, d, e, a)
    };
    return a
  }(), e = function(e, h, j) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return a.call(this, e, h);
      default:
        return f.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  e.e = 2;
  e.b = f.b;
  e.Y = d;
  e.h = c;
  e.f = a;
  e.c = f;
  return e
}(), Zb = function() {
  function a(a, c, d, e) {
    return F.call(k, a, F.call(k, c, F.call(k, d, e)))
  }
  function c(a, c, d) {
    return F.call(k, a, F.call(k, c, d))
  }
  function d(a, c) {
    return F.call(k, a, c)
  }
  function e(a) {
    return H.call(k, a)
  }
  var f = k, g = function() {
    function a(d, e, f, g, h) {
      var ta = k;
      r(h) && (ta = z(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, e, f, g, ta)
    }
    function c(a, d, e, f, g) {
      return F.call(k, a, F.call(k, d, F.call(k, e, F.call(k, f, Xb.call(k, g)))))
    }
    a.e = 4;
    a.b = function(a) {
      var d = B(a), e = B(A(a)), f = B(A(A(a))), g = B(A(A(A(a)))), a = C(A(A(A(a))));
      return c.call(this, d, e, f, g, a)
    };
    return a
  }(), f = function(f, j, p, u, y) {
    switch(arguments.length) {
      case 1:
        return e.call(this, f);
      case 2:
        return d.call(this, f, j);
      case 3:
        return c.call(this, f, j, p);
      case 4:
        return a.call(this, f, j, p, u);
      default:
        return g.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  f.e = 4;
  f.b = g.b;
  f.h = e;
  f.f = d;
  f.c = c;
  f.N = a;
  f.Z = g;
  return f
}(), R = function() {
  function a(a, c, d, e, f) {
    c = Zb.call(k, c, d, e, f);
    d = a.e;
    return s(a.b) ? Vb.call(k, c, d) <= d ? a.apply(a, Ub.call(k, c)) : a.b(c) : a.apply(a, Ub.call(k, c))
  }
  function c(a, c, d, e) {
    c = Zb.call(k, c, d, e);
    d = a.e;
    return s(a.b) ? Vb.call(k, c, d) <= d ? a.apply(a, Ub.call(k, c)) : a.b(c) : a.apply(a, Ub.call(k, c))
  }
  function d(a, c, d) {
    c = Zb.call(k, c, d);
    d = a.e;
    return s(a.b) ? Vb.call(k, c, d) <= d ? a.apply(a, Ub.call(k, c)) : a.b(c) : a.apply(a, Ub.call(k, c))
  }
  function e(a, c) {
    var d = a.e;
    return s(a.b) ? Vb.call(k, c, d + 1) <= d ? a.apply(a, Ub.call(k, c)) : a.b(c) : a.apply(a, Ub.call(k, c))
  }
  var f = k, g = function() {
    function a(d, e, f, g, h, ta) {
      var Nc = k;
      r(ta) && (Nc = z(Array.prototype.slice.call(arguments, 5), 0));
      return c.call(this, d, e, f, g, h, Nc)
    }
    function c(a, d, e, f, g, h) {
      d = F.call(k, d, F.call(k, e, F.call(k, f, F.call(k, g, Xb.call(k, h)))));
      e = a.e;
      return s(a.b) ? Vb.call(k, d, e) <= e ? a.apply(a, Ub.call(k, d)) : a.b(d) : a.apply(a, Ub.call(k, d))
    }
    a.e = 5;
    a.b = function(a) {
      var d = B(a), e = B(A(a)), f = B(A(A(a))), g = B(A(A(A(a)))), h = B(A(A(A(A(a))))), a = C(A(A(A(A(a)))));
      return c.call(this, d, e, f, g, h, a)
    };
    return a
  }(), f = function(f, j, p, u, y, G) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, j);
      case 3:
        return d.call(this, f, j, p);
      case 4:
        return c.call(this, f, j, p, u);
      case 5:
        return a.call(this, f, j, p, u, y);
      default:
        return g.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  f.e = 5;
  f.b = g.b;
  f.f = e;
  f.c = d;
  f.N = c;
  f.Z = a;
  f.ia = g;
  return f
}();
function $b(a) {
  return s(H.call(k, a)) ? a : k
}
function ac(a, c) {
  for(;;) {
    if(H.call(k, c) === k) {
      return i
    }
    if(s(a.call(k, B.call(k, c)))) {
      var d = a, e = A.call(k, c), a = d, c = e
    }else {
      return l
    }
  }
}
function bc(a, c) {
  for(;;) {
    if(s(H.call(k, c))) {
      var d = a.call(k, B.call(k, c));
      if(s(d)) {
        return d
      }
      var d = a, e = A.call(k, c), a = d, c = e
    }else {
      return k
    }
  }
}
function cc(a) {
  return a
}
var S = function() {
  function a(a, c, d, f) {
    return new Q(k, l, function() {
      var u = H.call(k, c), y = H.call(k, d), G = H.call(k, f);
      return s(s(u) ? s(y) ? G : y : u) ? F.call(k, a.call(k, B.call(k, u), B.call(k, y), B.call(k, G)), e.call(k, a, C.call(k, u), C.call(k, y), C.call(k, G))) : k
    })
  }
  function c(a, c, d) {
    return new Q(k, l, function() {
      var f = H.call(k, c), u = H.call(k, d);
      return s(s(f) ? u : f) ? F.call(k, a.call(k, B.call(k, f), B.call(k, u)), e.call(k, a, C.call(k, f), C.call(k, u))) : k
    })
  }
  function d(a, c) {
    return new Q(k, l, function() {
      var d = H.call(k, c);
      return s(d) ? F.call(k, a.call(k, B.call(k, d)), e.call(k, a, C.call(k, d))) : k
    })
  }
  var e = k, f = function() {
    function a(d, e, f, g, G) {
      var Mc = k;
      r(G) && (Mc = z(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, e, f, g, Mc)
    }
    function c(a, d, f, g, h) {
      return e.call(k, function(c) {
        return R.call(k, a, c)
      }, function ta(a) {
        return new Q(k, l, function() {
          var c = e.call(k, H, a);
          return ac.call(k, cc, c) ? F.call(k, e.call(k, B, c), ta.call(k, e.call(k, C, c))) : k
        })
      }.call(k, J.call(k, h, g, f, d)))
    }
    a.e = 4;
    a.b = function(a) {
      var d = B(a), e = B(A(a)), f = B(A(A(a))), g = B(A(A(A(a)))), a = C(A(A(A(a))));
      return c.call(this, d, e, f, g, a)
    };
    return a
  }(), e = function(e, h, j, p, u) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, j);
      case 4:
        return a.call(this, e, h, j, p);
      default:
        return f.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  e.e = 4;
  e.b = f.b;
  e.f = d;
  e.c = c;
  e.N = a;
  e.Z = f;
  return e
}(), ec = function dc(c, d) {
  return new Q(k, l, function() {
    if(0 < c) {
      var e = H.call(k, d);
      return s(e) ? F.call(k, B.call(k, e), dc.call(k, c - 1, C.call(k, e))) : k
    }
    return k
  })
};
function fc(a, c) {
  function d(a, c) {
    for(;;) {
      var d = H.call(k, c), h = 0 < a;
      if(s(h ? d : h)) {
        h = a - 1, d = C.call(k, d), a = h, c = d
      }else {
        return d
      }
    }
  }
  return new Q(k, l, function() {
    return d.call(k, a, c)
  })
}
var gc = function() {
  function a(a, c) {
    return ec.call(k, a, d.call(k, c))
  }
  function c(a) {
    return new Q(k, l, function() {
      return F.call(k, a, d.call(k, a))
    })
  }
  var d = k, d = function(d, f) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return a.call(this, d, f)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.h = c;
  d.f = a;
  return d
}(), hc = function() {
  function a(a, d) {
    return new Q(k, l, function() {
      var g = H.call(k, a), h = H.call(k, d);
      return s(s(g) ? h : g) ? F.call(k, B.call(k, g), F.call(k, B.call(k, h), c.call(k, C.call(k, g), C.call(k, h)))) : k
    })
  }
  var c = k, d = function() {
    function a(c, e, j) {
      var p = k;
      r(j) && (p = z(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, c, e, p)
    }
    function d(a, e, f) {
      return new Q(k, l, function() {
        var d = S.call(k, H, J.call(k, f, e, a));
        return ac.call(k, cc, d) ? Yb.call(k, S.call(k, B, d), R.call(k, c, S.call(k, C, d))) : k
      })
    }
    a.e = 2;
    a.b = function(a) {
      var c = B(a), e = B(A(a)), a = C(A(a));
      return d.call(this, c, e, a)
    };
    return a
  }(), c = function(c, f, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, f);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 2;
  c.b = d.b;
  c.f = a;
  c.c = d;
  return c
}();
function ic(a, c) {
  return fc.call(k, 1, hc.call(k, gc.call(k, a), c))
}
function jc(a) {
  return function d(a, f) {
    return new Q(k, l, function() {
      var g = H.call(k, a);
      return s(g) ? F.call(k, B.call(k, g), d.call(k, C.call(k, g), f)) : s(H.call(k, f)) ? d.call(k, B.call(k, f), C.call(k, f)) : k
    })
  }.call(k, k, a)
}
var kc = function() {
  function a(a, c) {
    return jc.call(k, S.call(k, a, c))
  }
  var c = k, d = function() {
    function a(c, d, e) {
      var j = k;
      r(e) && (j = z(Array.prototype.slice.call(arguments, 2), 0));
      return jc.call(k, R.call(k, S, c, d, j))
    }
    a.e = 2;
    a.b = function(a) {
      var c = B(a), d = B(A(a)), a = C(A(a));
      return jc.call(k, R.call(k, S, c, d, a))
    };
    return a
  }(), c = function(c, f, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, f);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 2;
  c.b = d.b;
  c.f = a;
  c.c = d;
  return c
}(), mc = function lc(c, d) {
  return new Q(k, l, function() {
    var e = H.call(k, d);
    if(s(e)) {
      var f = B.call(k, e), e = C.call(k, e);
      return s(c.call(k, f)) ? F.call(k, f, lc.call(k, c, e)) : lc.call(k, c, e)
    }
    return k
  })
};
function nc(a, c) {
  return O.call(k, za, a, c)
}
var oc = function() {
  function a(a, c, d) {
    for(var h = tb, c = H.call(k, c);;) {
      if(s(c)) {
        a = M.call(k, a, B.call(k, c), h);
        if(h === a) {
          return d
        }
        c = A.call(k, c)
      }else {
        return a
      }
    }
  }
  function c(a, c) {
    return O.call(k, M, a, c)
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}(), pc = function() {
  function a(a, e, f, g) {
    var h = k;
    r(g) && (h = z(Array.prototype.slice.call(arguments, 3), 0));
    return c.call(this, a, e, f, h)
  }
  function c(c, e, f, g) {
    var h = L.call(k, e, 0, k), e = Jb.call(k, e, 1);
    return s(e) ? hb.call(k, c, h, R.call(k, a, M.call(k, c, h), e, f, g)) : hb.call(k, c, h, R.call(k, f, M.call(k, c, h), g))
  }
  a.e = 3;
  a.b = function(a) {
    var e = B(a), f = B(A(a)), g = B(A(A(a))), a = C(A(A(a)));
    return c.call(this, e, f, g, a)
  };
  return a
}();
function qc(a) {
  a = a.d;
  return 32 > a ? 0 : a - 1 >> 5 << 5
}
function rc(a, c) {
  for(var d = a, e = c;;) {
    if(0 === d) {
      return e
    }
    var f = va.call(k, sc);
    f[0] = e;
    e = f;
    d -= 5
  }
}
var uc = function tc(c, d, e, f) {
  var g = va.call(k, e), h = c.d - 1 >> d & 31;
  5 === d ? g[h] = f : (e = e[h], c = s(e) ? tc.call(k, c, d - 5, e, f) : rc.call(k, d - 5, f), g[h] = c);
  return g
};
function vc(a, c) {
  var d = 0 <= c;
  if(d ? c < a.d : d) {
    if(c >= qc.call(k, a)) {
      return a.Q
    }
    for(var d = a.root, e = a.shift;;) {
      if(0 < e) {
        var f = e - 5, d = d[c >> e & 31], e = f
      }else {
        return d
      }
    }
  }else {
    b(Error(P.call(k, "No item ", c, " in vector of length ", a.d)))
  }
}
var xc = function wc(c, d, e, f, g) {
  var h = va.call(k, e);
  if(0 === d) {
    h[f & 31] = g
  }else {
    var j = f >> d & 31;
    h[j] = wc.call(k, c, d - 5, e[j], f, g)
  }
  return h
};
function yc(a, c, d, e, f) {
  this.g = a;
  this.d = c;
  this.shift = d;
  this.root = e;
  this.Q = f
}
o = yc.prototype;
o.r = function(a) {
  return bb.call(k, a)
};
o.R = function(a, c) {
  return w.call(k, a, c, k)
};
o.S = function(a, c, d) {
  return w.call(k, a, c, d)
};
o.ha = function(a, c, d) {
  var e = 0 <= c;
  if(e ? c < this.d : e) {
    return qc.call(k, a) <= c ? (a = va.call(k, this.Q), a[c & 31] = d, new yc(this.g, this.d, this.shift, this.root, a)) : new yc(this.g, this.d, this.shift, xc.call(k, a, this.shift, this.root, c, d), this.Q)
  }
  if(c === this.d) {
    return za.call(k, a, d)
  }
  b(Error(P.call(k, "Index ", c, " out of bounds  [0,", this.d, "]")))
};
o.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(k, this, c);
      case 3:
        return x.call(k, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.G = i;
o.K = i;
o.B = function(a, c) {
  if(32 > this.d - qc.call(k, a)) {
    var d = va.call(k, this.Q);
    d.push(c);
    return new yc(this.g, this.d + 1, this.shift, this.root, d)
  }
  var e = this.d >> 5 > 1 << this.shift, d = e ? this.shift + 5 : this.shift;
  e ? (e = va.call(k, sc), e[0] = this.root, e[1] = rc.call(k, this.shift, this.Q)) : e = uc.call(k, a, this.shift, this.root, this.Q);
  return new yc(this.g, this.d + 1, d, e, [c])
};
o.toString = function() {
  return cb.call(k, this)
};
o.W = function(a, c) {
  return $a.call(k, a, c)
};
o.X = function(a, c, d) {
  return $a.call(k, a, c, d)
};
o.n = function(a) {
  var c = this;
  return 0 < c.d ? function e(f) {
    return new Q(k, l, function() {
      return f < c.d ? F.call(k, w.call(k, a, f), e.call(k, f + 1)) : k
    })
  }.call(k, 0) : k
};
o.C = m("d");
o.xa = i;
o.l = function(a, c) {
  return db.call(k, a, c)
};
o.w = function(a, c) {
  return new yc(c, this.d, this.shift, this.root, this.Q)
};
o.s = i;
o.v = m("g");
o.U = function(a, c) {
  return vc.call(k, a, c)[c & 31]
};
o.V = function(a, c, d) {
  var e = 0 <= c;
  return(e ? c < this.d : e) ? w.call(k, a, c) : d
};
var sc = xa.call(k, 32), zc = new yc(k, 0, 5, sc, []);
function T(a) {
  return nc.call(k, zc, a)
}
function Ac(a) {
  return O.call(k, J, zc, a)
}
T([]);
function Bc() {
}
Bc.prototype.l = n(l);
var Cc = new Bc;
function Dc(a, c) {
  return vb.call(k, qb.call(k, c) ? D.call(k, K.call(k, a), K.call(k, c)) ? ac.call(k, cc, S.call(k, function(a) {
    return D.call(k, M.call(k, c, B.call(k, a), Cc), fb.call(k, a))
  }, a)) : k : k)
}
function Ec(a) {
  return Wa.call(k, a)
}
function Fc(a) {
  return Xa.call(k, a)
}
function Gc(a, c, d) {
  return Ya.call(k, a, c, d)
}
var Hc = function() {
  function a(a, c, d, h, j) {
    a = va.call(k, a);
    a[c] = d;
    a[h] = j;
    return a
  }
  function c(a, c, d) {
    a = va.call(k, a);
    a[c] = d;
    return a
  }
  var d = k, d = function(d, f, g, h, j) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 5:
        return a.call(this, d, f, g, h, j)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.c = c;
  d.Z = a;
  return d
}();
function Ic(a, c, d, e, f) {
  for(;;) {
    if(0 === f) {
      return d
    }
    d[e] = a[c];
    e += 1;
    f -= 1;
    c += 1
  }
}
function Jc(a, c, d, e, f) {
  c += f - 1;
  for(e += f - 1;;) {
    if(0 === f) {
      return d
    }
    d[e] = a[c];
    e -= 1;
    f -= 1;
    c -= 1
  }
}
function Kc(a, c) {
  var d = xa.call(k, a.length - 2);
  Ic.call(k, a, 0, d, 0, 2 * c);
  Ic.call(k, a, 2 * (c + 1), d, 2 * c, d.length - 2 * c);
  return d
}
function Lc(a, c) {
  return Ib.call(k, a & c - 1)
}
var Oc = function() {
  function a(a, c, d, h, j, p) {
    a = a.P(c);
    a.a[d] = h;
    a.a[j] = p;
    return a
  }
  function c(a, c, d, h) {
    a = a.P(c);
    a.a[d] = h;
    return a
  }
  var d = k, d = function(d, f, g, h, j, p) {
    switch(arguments.length) {
      case 4:
        return c.call(this, d, f, g, h);
      case 6:
        return a.call(this, d, f, g, h, j, p)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.N = c;
  d.ia = a;
  return d
}();
function U(a, c, d) {
  this.o = a;
  this.i = c;
  this.a = d
}
o = U.prototype;
o.z = function(a, c, d, e, f) {
  var g = 1 << (c >>> a & 31), h = Lc.call(k, this.i, g);
  if(0 === (this.i & g)) {
    var j = Ib.call(k, this.i);
    if(16 <= j) {
      h = xa.call(k, 32);
      h[c >>> a & 31] = Pc.z(a + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.i >>> d & 1) && (h[d] = k != this.a[e] ? Pc.z(a + 5, N.call(k, this.a[e]), this.a[e], this.a[e + 1], f) : this.a[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Qc(k, j + 1, h)
    }
    a = xa.call(k, 2 * (j + 1));
    Ic.call(k, this.a, 0, a, 0, 2 * h);
    a[2 * h] = d;
    f[0] = i;
    a[2 * h + 1] = e;
    Ic.call(k, this.a, 2 * h, a, 2 * (h + 1), 2 * (j - h));
    return new U(k, this.i | g, a)
  }
  g = this.a[2 * h];
  j = this.a[2 * h + 1];
  if(k == g) {
    return f = j.z(a + 5, c, d, e, f), f === j ? this : new U(k, this.i, Hc.call(k, this.a, 2 * h + 1, f))
  }
  if(D.call(k, d, g)) {
    return e === j ? this : new U(k, this.i, Hc.call(k, this.a, 2 * h + 1, e))
  }
  f[0] = i;
  return new U(k, this.i, Hc.call(k, this.a, 2 * h, k, 2 * h + 1, Rc.call(k, a + 5, g, j, c, d, e)))
};
o.ba = function(a, c, d) {
  var e = 1 << (c >>> a & 31);
  if(0 === (this.i & e)) {
    return this
  }
  var f = Lc.call(k, this.i, e), g = this.a[2 * f], h = this.a[2 * f + 1];
  return k == g ? (a = h.ba(a + 5, c, d), a === h ? this : k != a ? new U(k, this.i, Hc.call(k, this.a, 2 * f + 1, a)) : this.i === e ? k : new U(k, this.i ^ e, Kc.call(k, this.a, f))) : D.call(k, d, g) ? new U(k, this.i ^ e, Kc.call(k, this.a, f)) : this
};
o.I = function() {
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 3:
        var f;
        f = 1 << (c >>> a & 31);
        if(0 === (this.i & f)) {
          f = k
        }else {
          var g = Lc.call(k, this.i, f);
          f = this.a[2 * g];
          g = this.a[2 * g + 1];
          f = k == f ? g.I(a + 5, c, d) : D.call(k, d, f) ? T([f, g]) : k
        }
        return f;
      case 4:
        return f = 1 << (c >>> a & 31), 0 === (this.i & f) ? f = e : (g = Lc.call(k, this.i, f), f = this.a[2 * g], g = this.a[2 * g + 1], f = k == f ? g.I(a + 5, c, d, e) : D.call(k, d, f) ? T([f, g]) : e), f
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.aa = function() {
  return Sc.call(k, this.a)
};
o.P = function(a) {
  if(a === this.o) {
    return this
  }
  var c = Ib.call(k, this.i), d = xa.call(k, 0 > c ? 4 : 2 * (c + 1));
  Ic.call(k, this.a, 0, d, 0, 2 * c);
  return new U(a, this.i, d)
};
o.A = function(a, c, d, e, f, g) {
  var h = 1 << (d >>> c & 31), j = Lc.call(k, this.i, h);
  if(0 === (this.i & h)) {
    var p = Ib.call(k, this.i);
    if(2 * p < this.a.length) {
      return a = this.P(a), c = a.a, g[0] = i, Jc.call(k, c, 2 * j, c, 2 * (j + 1), 2 * (p - j)), c[2 * j] = e, c[2 * j + 1] = f, a.i |= h, a
    }
    if(16 <= p) {
      j = xa.call(k, 32);
      j[d >>> c & 31] = Pc.A(a, c + 5, d, e, f, g);
      for(f = e = 0;;) {
        if(32 > e) {
          0 !== (this.i >>> e & 1) && (j[e] = k != this.a[f] ? Pc.A(a, c + 5, N.call(k, this.a[f]), this.a[f], this.a[f + 1], g) : this.a[f + 1], f += 2), e += 1
        }else {
          break
        }
      }
      return new Qc(a, p + 1, j)
    }
    c = xa.call(k, 2 * (p + 4));
    Ic.call(k, this.a, 0, c, 0, 2 * j);
    c[2 * j] = e;
    g[0] = i;
    c[2 * j + 1] = f;
    Ic.call(k, this.a, 2 * j, c, 2 * (j + 1), 2 * (p - j));
    g = this.P(a);
    g.a = c;
    g.i |= h;
    return g
  }
  p = this.a[2 * j];
  h = this.a[2 * j + 1];
  if(k == p) {
    return h.A(a, c + 5, d, e, f, g) === h ? this : Oc.call(k, this, a, 2 * j + 1, f)
  }
  if(D.call(k, e, p)) {
    return f === h ? this : Oc.call(k, this, a, 2 * j + 1, f)
  }
  g[0] = i;
  return Oc.call(k, this, a, 2 * j, k, 2 * j + 1, Rc.call(k, a, c + 5, p, h, d, e, f))
};
var Pc = new U(k, 0, xa.call(k, 0));
function Tc(a, c, d) {
  for(var e = a.a, a = 2 * (a.d - 1), f = xa.call(k, a), g = 0, h = 1, j = 0;;) {
    if(g < a) {
      var p = g != d;
      if(p ? k != e[g] : p) {
        f[h] = e[g], h += 2, j |= 1 << g
      }
      g += 1
    }else {
      return new U(c, j, f)
    }
  }
}
function Qc(a, c, d) {
  this.o = a;
  this.d = c;
  this.a = d
}
o = Qc.prototype;
o.z = function(a, c, d, e, f) {
  var g = c >>> a & 31, h = this.a[g];
  if(k == h) {
    return new Qc(k, this.d + 1, Hc.call(k, this.a, g, Pc.z(a + 5, c, d, e, f)))
  }
  a = h.z(a + 5, c, d, e, f);
  return a === h ? this : new Qc(k, this.d, Hc.call(k, this.a, g, a))
};
o.ba = function(a, c, d) {
  var e = c >>> a & 31, f = this.a[e];
  return k != f ? (a = f.ba(a + 5, c, d), a === f ? this : a === k ? 8 >= this.d ? Tc.call(k, this, e) : new Qc(k, this.d - 1, Hc.call(k, this.a, e, a)) : new Qc(k, this.d, Hc.call(k, this.a, e, a))) : this
};
o.I = function() {
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 3:
        var f = this.a[c >>> a & 31];
        return k != f ? f.I(a + 5, c, d) : k;
      case 4:
        return f = this.a[c >>> a & 31], k != f ? f.I(a + 5, c, d, e) : e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.aa = function() {
  return Uc.call(k, this.a)
};
o.P = function(a) {
  return a === this.o ? this : new Qc(a, this.d, va.call(k, this.a))
};
o.A = function(a, c, d, e, f, g) {
  var h = d >>> c & 31, j = this.a[h];
  if(k == j) {
    return a = Oc.call(k, this, a, h, Pc.A(a, c + 5, d, e, f, g)), a.d += 1, a
  }
  c = j.A(a, c + 5, d, e, f, g);
  return c === j ? this : Oc.call(k, this, a, h, c)
};
function Vc(a, c, d) {
  for(var c = 2 * c, e = 0;;) {
    if(e < c) {
      if(D.call(k, d, a[e])) {
        return e
      }
      e += 2
    }else {
      return-1
    }
  }
}
function Wc(a, c, d, e) {
  this.o = a;
  this.J = c;
  this.d = d;
  this.a = e
}
o = Wc.prototype;
o.z = function(a, c, d, e, f) {
  if(c === this.J) {
    a = Vc.call(k, this.a, this.d, d);
    return-1 === a ? (a = this.a.length, c = xa.call(k, a + 2), Ic.call(k, this.a, 0, c, 0, a), c[a] = d, c[a + 1] = e, f[0] = i, new Wc(k, this.J, this.d + 1, c)) : D.call(k, this.a[a], e) ? this : new Wc(k, this.J, this.d, Hc.call(k, this.a, a + 1, e))
  }
  return(new U(k, 1 << (this.J >>> a & 31), [k, this])).z(a, c, d, e, f)
};
o.ba = function(a, c, d) {
  a = Vc.call(k, this.a, this.d, d);
  return-1 === a ? this : 1 === this.d ? k : new Wc(k, this.J, this.d - 1, Kc.call(k, this.a, Fb.call(k, a, 2)))
};
o.I = function() {
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 3:
        var f = Vc.call(k, this.a, this.d, d);
        return 0 > f ? k : D.call(k, d, this.a[f]) ? T([this.a[f], this.a[f + 1]]) : k;
      case 4:
        return f = Vc.call(k, this.a, this.d, d), 0 > f ? k : D.call(k, d, this.a[f]) ? T([this.a[f], this.a[f + 1]]) : e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.aa = function() {
  return Sc.call(k, this.a)
};
o.P = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 1:
        var e;
        a === this.o ? e = this : (e = xa.call(k, 2 * (this.d + 1)), Ic.call(k, this.a, 0, e, 0, 2 * this.d), e = new Wc(a, this.J, this.d, e));
        return e;
      case 3:
        return a === this.o ? (this.a = d, this.d = c, e = this) : e = new Wc(this.o, this.J, c, d), e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.A = function(a, c, d, e, f, g) {
  if(d === this.J) {
    c = Vc.call(k, this.a, this.d, e);
    if(-1 === c) {
      if(this.a.length > 2 * this.d) {
        return a = Oc.call(k, this, a, 2 * this.d, e, 2 * this.d + 1, f), g[0] = i, a.d += 1, a
      }
      c = this.a.length;
      d = xa.call(k, c + 2);
      Ic.call(k, this.a, 0, d, 0, c);
      d[c] = e;
      d[c + 1] = f;
      g[0] = i;
      return this.P(a, this.d + 1, d)
    }
    return D.call(k, this.a[c + 1], f) ? this : Oc.call(k, this, a, c + 1, f)
  }
  return(new U(a, 1 << (this.J >>> c & 31), [k, this, k, k])).A(a, c, d, e, f, g)
};
var Rc = function() {
  function a(a, c, d, h, j, p, u) {
    var y = N.call(k, d);
    if(y === j) {
      return new Wc(k, y, 2, [d, h, p, u])
    }
    var G = [l];
    return Pc.A(a, c, y, d, h, G).A(a, c, j, p, u, G)
  }
  function c(a, c, d, h, j, p) {
    var u = N.call(k, c);
    if(u === h) {
      return new Wc(k, u, 2, [c, d, j, p])
    }
    var y = [l];
    return Pc.z(a, u, c, d, y).z(a, h, j, p, y)
  }
  var d = k, d = function(d, f, g, h, j, p, u) {
    switch(arguments.length) {
      case 6:
        return c.call(this, d, f, g, h, j, p);
      case 7:
        return a.call(this, d, f, g, h, j, p, u)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.ia = c;
  d.Fa = a;
  return d
}();
function Xc(a, c, d, e) {
  this.g = a;
  this.O = c;
  this.j = d;
  this.M = e
}
o = Xc.prototype;
o.l = function(a, c) {
  return db.call(k, a, c)
};
o.n = aa();
o.L = i;
o.D = function() {
  return this.M === k ? T([this.O[this.j], this.O[this.j + 1]]) : B.call(k, this.M)
};
o.F = function() {
  return this.M === k ? Sc.call(k, this.O, this.j + 2, k) : Sc.call(k, this.O, this.j, A.call(k, this.M))
};
o.G = i;
o.w = function(a, c) {
  return new Xc(c, this.O, this.j, this.M)
};
o.s = i;
o.v = m("g");
var Sc = function() {
  function a(a, c, d) {
    if(d === k) {
      for(d = a.length;;) {
        if(c < d) {
          if(k != a[c]) {
            return new Xc(k, a, c, k)
          }
          var h = a[c + 1];
          if(s(h) && (h = h.aa(), s(h))) {
            return new Xc(k, a, c + 2, h)
          }
          c += 2
        }else {
          return k
        }
      }
    }else {
      return new Xc(k, a, c, d)
    }
  }
  function c(a) {
    return d.call(k, a, 0, k)
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.h = c;
  d.c = a;
  return d
}();
function Yc(a, c, d, e) {
  this.g = a;
  this.O = c;
  this.j = d;
  this.M = e
}
o = Yc.prototype;
o.l = function(a, c) {
  return db.call(k, a, c)
};
o.n = aa();
o.L = i;
o.D = function() {
  return B.call(k, this.M)
};
o.F = function() {
  return Uc.call(k, k, this.O, this.j, A.call(k, this.M))
};
o.G = i;
o.w = function(a, c) {
  return new Yc(c, this.O, this.j, this.M)
};
o.s = i;
o.v = m("g");
var Uc = function() {
  function a(a, c, d, h) {
    if(h === k) {
      for(h = c.length;;) {
        if(d < h) {
          var j = c[d];
          if(s(j) && (j = j.aa(), s(j))) {
            return new Yc(a, c, d + 1, j)
          }
          d += 1
        }else {
          return k
        }
      }
    }else {
      return new Yc(a, c, d, h)
    }
  }
  function c(a) {
    return d.call(k, k, a, 0, k)
  }
  var d = k, d = function(d, f, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 4:
        return a.call(this, d, f, g, h)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.h = c;
  d.N = a;
  return d
}();
function Zc(a, c, d, e, f) {
  this.g = a;
  this.d = c;
  this.root = d;
  this.k = e;
  this.p = f
}
o = Zc.prototype;
o.la = function() {
  return new $c(sb.call(k), this.root, this.d, this.k, this.p)
};
o.r = function(a) {
  return bb.call(k, a)
};
o.R = function(a, c) {
  return x.call(k, a, c, k)
};
o.S = function(a, c, d) {
  return c === k ? s(this.k) ? this.p : d : this.root === k ? d : L.call(k, this.root.I(0, N.call(k, c), c, [k, d]), 1)
};
o.ha = function(a, c, d) {
  if(c === k) {
    var e = this.k;
    return s(s(e) ? d === this.p : e) ? a : new Zc(this.g, s(this.k) ? this.d : this.d + 1, this.root, i, d)
  }
  e = [l];
  d = (this.root === k ? Pc : this.root).z(0, N.call(k, c), c, d, e);
  return d === this.root ? a : new Zc(this.g, s(e[0]) ? this.d + 1 : this.d, d, this.k, this.p)
};
o.ka = function(a, c) {
  return c === k ? this.k : this.root === k ? l : I.call(k, this.root.I(0, N.call(k, c), c, tb) === tb)
};
o.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(k, this, c);
      case 3:
        return x.call(k, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.K = i;
o.B = function(a, c) {
  return rb.call(k, c) ? Ea.call(k, a, w.call(k, c, 0), w.call(k, c, 1)) : O.call(k, za, a, c)
};
o.toString = function() {
  return cb.call(k, this)
};
o.n = function() {
  if(0 < this.d) {
    var a = k != this.root ? this.root.aa() : k;
    return s(this.k) ? F.call(k, T([k, this.p]), a) : a
  }
  return k
};
o.C = m("d");
o.l = function(a, c) {
  return Dc.call(k, a, c)
};
o.w = function(a, c) {
  return new Zc(c, this.d, this.root, this.k, this.p)
};
o.s = i;
o.v = m("g");
o.va = i;
o.ma = function(a, c) {
  if(c === k) {
    return s(this.k) ? new Zc(this.g, this.d - 1, this.root, l, k) : a
  }
  if(this.root === k) {
    return a
  }
  var d = this.root.ba(0, N.call(k, c), c);
  return d === this.root ? a : new Zc(this.g, this.d - 1, d, this.k, this.p)
};
var ad = new Zc(k, 0, k, l, k);
function V(a, c) {
  for(var d = a.length, e = 0, f = Ec.call(k, ad);;) {
    if(e < d) {
      var g = e + 1, f = Gc.call(k, f, a[e], c[e]), e = g
    }else {
      return Fc.call(k, f)
    }
  }
}
function $c(a, c, d, e, f) {
  this.o = a;
  this.root = c;
  this.H = d;
  this.k = e;
  this.p = f
}
o = $c.prototype;
o.ra = function(a, c, d) {
  if(s(a.o)) {
    if(c === k) {
      if(a.p !== d) {
        a.p = d
      }
      if(!s(a.k)) {
        a.H += 1, a.k = i
      }
    }else {
      var e = [l], c = (a.root === k ? Pc : a.root).A(a.o, 0, N.call(k, c), c, d, e);
      if(c !== a.root) {
        a.root = c
      }
      s(e[0]) && (a.H += 1)
    }
  }else {
    b(Error("assoc! after persistent!"))
  }
  return a
};
o.sa = function(a) {
  var c;
  s(a.o) ? (a.o = k, c = new Zc(k, a.H, a.root, a.k, a.p)) : b(Error("persistent! called twice"));
  return c
};
o.R = function(a, c) {
  return c === k ? s(this.k) ? this.p : k : this.root === k ? k : this.root.I(0, N.call(k, c), c)[1]
};
o.S = function(a, c, d) {
  return c === k ? s(this.k) ? this.p : d : this.root === k ? d : this.root.I(0, N.call(k, c), c, d)[1]
};
o.C = function() {
  if(s(this.o)) {
    return this.H
  }
  b(Error("count after persistent!"))
};
var Za = function() {
  function a(a) {
    var e = k;
    r(a) && (e = z(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    for(var a = H.call(k, a), c = Ec.call(k, ad);;) {
      if(s(a)) {
        var f = gb.call(k, a), c = Gc.call(k, c, B.call(k, a), fb.call(k, a)), a = f
      }else {
        return Fc.call(k, c)
      }
    }
  }
  a.e = 0;
  a.b = function(a) {
    a = H(a);
    return c.call(this, a)
  };
  return a
}();
function bd(a) {
  return H.call(k, S.call(k, B, a))
}
var cd = function() {
  function a(a) {
    var e = k;
    r(a) && (e = z(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    return s(bc.call(k, cc, a)) ? O.call(k, function(a, c) {
      return J.call(k, s(a) ? a : V([], []), c)
    }, a) : k
  }
  a.e = 0;
  a.b = function(a) {
    a = H(a);
    return c.call(this, a)
  };
  return a
}();
function dd(a, c) {
  this.g = a;
  this.$ = c
}
o = dd.prototype;
o.r = function(a) {
  return bb.call(k, a)
};
o.R = function(a, c) {
  return x.call(k, a, c, k)
};
o.S = function(a, c, d) {
  return s(Da.call(k, this.$, c)) ? c : d
};
o.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(k, this, c);
      case 3:
        return x.call(k, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
o.K = i;
o.B = function(a, c) {
  return new dd(this.g, hb.call(k, this.$, c, k))
};
o.toString = function() {
  return cb.call(k, this)
};
o.n = function() {
  return bd.call(k, this.$)
};
o.wa = i;
o.qa = function(a, c) {
  return new dd(this.g, ib.call(k, this.$, c))
};
o.C = function(a) {
  return K.call(k, H.call(k, a))
};
o.l = function(a, c) {
  var d = ob.call(k, c);
  return d ? (d = D.call(k, K.call(k, a), K.call(k, c))) ? ac.call(k, function(c) {
    return Ab.call(k, a, c)
  }, c) : d : d
};
o.w = function(a, c) {
  return new dd(c, this.$)
};
o.s = i;
o.v = m("g");
var ed = new dd(k, Za.call(k));
function fd(a) {
  for(var a = H.call(k, a), c = ed;;) {
    if(I.call(k, mb.call(k, a))) {
      var d = C.call(k, a), c = J.call(k, c, B.call(k, a)), a = d
    }else {
      return c
    }
  }
}
function W(a) {
  if(wb.call(k, a)) {
    return a
  }
  var c = xb.call(k, a);
  if(c ? c : yb.call(k, a)) {
    return c = a.lastIndexOf("/"), 0 > c ? Lb.call(k, a, 2) : Lb.call(k, a, c + 1)
  }
  b(Error(P.call(k, "Doesn't support name: ", a)))
}
function gd(a) {
  var c = xb.call(k, a);
  if(c ? c : yb.call(k, a)) {
    return c = a.lastIndexOf("/"), -1 < c ? Lb.call(k, a, 2, c) : k
  }
  b(Error(P.call(k, "Doesn't support namespace: ", a)))
}
function hd(a, c, d, e) {
  this.g = a;
  this.start = c;
  this.end = d;
  this.step = e
}
o = hd.prototype;
o.r = function(a) {
  return bb.call(k, a)
};
o.G = i;
o.K = i;
o.B = function(a, c) {
  return F.call(k, c, a)
};
o.toString = function() {
  return cb.call(k, this)
};
o.W = function(a, c) {
  return $a.call(k, a, c)
};
o.X = function(a, c, d) {
  return $a.call(k, a, c, d)
};
o.n = function(a) {
  return s((0 < this.step ? Cb : Db).call(k, this.start, this.end)) ? a : k
};
o.C = function(a) {
  return I.call(k, Ra.call(k, a)) ? 0 : Math.ceil((this.end - this.start) / this.step)
};
o.L = i;
o.D = m("start");
o.F = function(a) {
  return s(Ra.call(k, a)) ? new hd(this.g, this.start + this.step, this.end, this.step) : E.call(k)
};
o.l = function(a, c) {
  return db.call(k, a, c)
};
o.w = function(a, c) {
  return new hd(c, this.start, this.end, this.step)
};
o.s = i;
o.v = m("g");
o.U = function(a, c) {
  if(c < v.call(k, a)) {
    return this.start + c * this.step
  }
  var d = this.start > this.end;
  if(d ? D.call(k, this.step, 0) : d) {
    return this.start
  }
  b(Error("Index out of bounds"))
};
o.V = function(a, c, d) {
  d = c < v.call(k, a) ? this.start + c * this.step : ((a = this.start > this.end) ? D.call(k, this.step, 0) : a) ? this.start : d;
  return d
};
var id = function() {
  function a(a, c, d) {
    return new hd(k, a, c, d)
  }
  function c(a, c) {
    return f.call(k, a, c, 1)
  }
  function d(a) {
    return f.call(k, 0, a, 1)
  }
  function e() {
    return f.call(k, 0, Number.MAX_VALUE, 1)
  }
  var f = k, f = function(f, h, j) {
    switch(arguments.length) {
      case 0:
        return e.call(this);
      case 1:
        return d.call(this, f);
      case 2:
        return c.call(this, f, h);
      case 3:
        return a.call(this, f, h, j)
    }
    b("Invalid arity: " + arguments.length)
  };
  f.Y = e;
  f.h = d;
  f.f = c;
  f.c = a;
  return f
}();
function jd(a) {
  return O.call(k, function(a, d) {
    return hb.call(k, a, d, M.call(k, a, d, 0) + 1)
  }, V([], []), a)
}
function kd(a, c) {
  var d = a.exec(c);
  return D.call(k, B.call(k, d), c) ? D.call(k, K.call(k, d), 1) ? B.call(k, d) : Ac.call(k, d) : k
}
function ld(a, c) {
  var d = a.exec(c);
  return d === k ? k : D.call(k, K.call(k, d), 1) ? B.call(k, d) : Ac.call(k, d)
}
function md(a, c, d, e, f, g) {
  return Yb.call(k, T([c]), jc.call(k, ic.call(k, T([d]), S.call(k, function(c) {
    return a.call(k, c, f)
  }, g))), T([e]))
}
function nd(a) {
  sa.call(k, a);
  return k
}
function od() {
  return k
}
var X = function pd(c, d) {
  return c === k ? E.call(k, "nil") : void 0 === c ? E.call(k, "#<undefined>") : Yb.call(k, s(function() {
    var e = M.call(k, d, "\ufdd0'meta");
    return s(e) ? (s(c) ? (e = c.s, e = s(e) ? I.call(k, c.hasOwnProperty("cljs$core$IMeta$")) : e) : e = c, e = s(e) ? i : ua.call(k, La, c), s(e) ? kb.call(k, c) : e) : e
  }()) ? Yb.call(k, T(["^"]), pd.call(k, kb.call(k, c), d), T([" "])) : k, s(function() {
    var d;
    s(c) ? (d = c.t, d = s(d) ? I.call(k, c.hasOwnProperty("cljs$core$IPrintable$")) : d) : d = c;
    return s(d) ? i : ua.call(k, Ta, c)
  }()) ? Ua.call(k, c, d) : E.call(k, "#<", P.call(k, c), ">"))
};
function qd(a, c) {
  var d = B.call(k, a), e = new ra, f = H.call(k, a);
  if(s(f)) {
    for(var g = B.call(k, f);;) {
      g !== d && e.append(" ");
      var h = H.call(k, X.call(k, g, c));
      if(s(h)) {
        for(g = B.call(k, h);;) {
          if(e.append(g), g = A.call(k, h), s(g)) {
            h = g, g = B.call(k, h)
          }else {
            break
          }
        }
      }
      f = A.call(k, f);
      if(s(f)) {
        g = f, f = B.call(k, g), h = g, g = f, f = h
      }else {
        break
      }
    }
  }
  return e
}
function rd(a, c) {
  return P.call(k, qd.call(k, a, c))
}
function sd(a, c) {
  var d = B.call(k, a), e = H.call(k, a);
  if(s(e)) {
    for(var f = B.call(k, e);;) {
      f !== d && nd.call(k, " ");
      var g = H.call(k, X.call(k, f, c));
      if(s(g)) {
        for(f = B.call(k, g);;) {
          if(nd.call(k, f), f = A.call(k, g), s(f)) {
            g = f, f = B.call(k, g)
          }else {
            break
          }
        }
      }
      e = A.call(k, e);
      if(s(e)) {
        f = e, e = B.call(k, f), g = f, f = e, e = g
      }else {
        return k
      }
    }
  }else {
    return k
  }
}
function td(a) {
  nd.call(k, "\n");
  return s(M.call(k, a, "\ufdd0'flush-on-newline")) ? od.call(k) : k
}
function ud() {
  return V(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], [i, i, l, l])
}
var cb = function() {
  function a(a) {
    var d = k;
    r(a) && (d = z(Array.prototype.slice.call(arguments, 0), 0));
    return rd.call(k, d, ud.call(k))
  }
  a.e = 0;
  a.b = function(a) {
    a = H(a);
    return rd.call(k, a, ud.call(k))
  };
  return a
}(), vd = function() {
  function a(a) {
    var e = k;
    r(a) && (e = z(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    sd.call(k, a, ud.call(k));
    return td.call(k, ud.call(k))
  }
  a.e = 0;
  a.b = function(a) {
    a = H(a);
    return c.call(this, a)
  };
  return a
}();
Ta.number = i;
Ua.number = function(a) {
  return E.call(k, P.call(k, a))
};
ab.prototype.t = i;
ab.prototype.m = function(a, c) {
  return md.call(k, X, "(", " ", ")", c, a)
};
Q.prototype.t = i;
Q.prototype.m = function(a, c) {
  return md.call(k, X, "(", " ", ")", c, a)
};
Ta["boolean"] = i;
Ua["boolean"] = function(a) {
  return E.call(k, P.call(k, a))
};
dd.prototype.t = i;
dd.prototype.m = function(a, c) {
  return md.call(k, X, "#{", " ", "}", c, a)
};
Ta.string = i;
Ua.string = function(a, c) {
  return xb.call(k, a) ? E.call(k, P.call(k, ":", function() {
    var c = gd.call(k, a);
    return s(c) ? P.call(k, c, "/") : k
  }(), W.call(k, a))) : yb.call(k, a) ? E.call(k, P.call(k, function() {
    var c = gd.call(k, a);
    return s(c) ? P.call(k, c, "/") : k
  }(), W.call(k, a))) : E.call(k, s("\ufdd0'readably".call(k, c)) ? ja.call(k, a) : a)
};
Xc.prototype.t = i;
Xc.prototype.m = function(a, c) {
  return md.call(k, X, "(", " ", ")", c, a)
};
Zc.prototype.t = i;
Zc.prototype.m = function(a, c) {
  return md.call(k, function(a) {
    return md.call(k, X, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
yc.prototype.t = i;
yc.prototype.m = function(a, c) {
  return md.call(k, X, "[", " ", "]", c, a)
};
Ob.prototype.t = i;
Ob.prototype.m = function(a, c) {
  return md.call(k, X, "(", " ", ")", c, a)
};
Ta.array = i;
Ua.array = function(a, c) {
  return md.call(k, X, "#<Array [", ", ", "]>", c, a)
};
Ta["function"] = i;
Ua["function"] = function(a) {
  return E.call(k, "#<", P.call(k, a), ">")
};
Pb.prototype.t = i;
Pb.prototype.m = function() {
  return E.call(k, "()")
};
Sb.prototype.t = i;
Sb.prototype.m = function(a, c) {
  return md.call(k, X, "(", " ", ")", c, a)
};
hd.prototype.t = i;
hd.prototype.m = function(a, c) {
  return md.call(k, X, "(", " ", ")", c, a)
};
Yc.prototype.t = i;
Yc.prototype.m = function(a, c) {
  return md.call(k, X, "(", " ", ")", c, a)
};
function wd(a, c, d, e) {
  this.state = a;
  this.g = c;
  this.Ca = d;
  this.Da = e
}
o = wd.prototype;
o.r = function(a) {
  return ea.call(k, a)
};
o.ta = function(a, c, d) {
  var e = H.call(k, this.Da);
  if(s(e)) {
    var f = B.call(k, e);
    L.call(k, f, 0, k);
    for(L.call(k, f, 1, k);;) {
      var g = f, f = L.call(k, g, 0, k), g = L.call(k, g, 1, k);
      g.call(k, f, a, c, d);
      e = A.call(k, e);
      if(s(e)) {
        f = e, e = B.call(k, f), g = f, f = e, e = g
      }else {
        return k
      }
    }
  }else {
    return k
  }
};
o.t = i;
o.m = function(a, c) {
  return Yb.call(k, T(["#<Atom: "]), Ua.call(k, this.state, c), ">")
};
o.s = i;
o.v = m("g");
o.ua = m("state");
o.l = function(a, c) {
  return a === c
};
var xd = function() {
  function a(a) {
    return new wd(a, k, k, k)
  }
  var c = k, d = function() {
    function a(d, e) {
      var j = k;
      r(e) && (j = z(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, d, j)
    }
    function c(a, d) {
      var e = ub.call(k, d) ? R.call(k, Za, d) : d, f = M.call(k, e, "\ufdd0'validator"), e = M.call(k, e, "\ufdd0'meta");
      return new wd(a, e, f, k)
    }
    a.e = 1;
    a.b = function(a) {
      var d = B(a), a = C(a);
      return c.call(this, d, a)
    };
    return a
  }(), c = function(c, f) {
    switch(arguments.length) {
      case 1:
        return a.call(this, c);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.e = 1;
  c.b = d.b;
  c.h = a;
  c.f = d;
  return c
}();
function yd(a, c) {
  var d = a.Ca;
  s(d) && !s(d.call(k, c)) && b(Error(P.call(k, "Assert failed: ", "Validator rejected reference state", "\n", cb.call(k, jb()))));
  d = a.state;
  a.state = c;
  Va.call(k, a, d, c);
  return c
}
var zd = function() {
  function a(a, c, d, e, f) {
    return yd.call(k, a, c.call(k, a.state, d, e, f))
  }
  function c(a, c, d, e) {
    return yd.call(k, a, c.call(k, a.state, d, e))
  }
  function d(a, c, d) {
    return yd.call(k, a, c.call(k, a.state, d))
  }
  function e(a, c) {
    return yd.call(k, a, c.call(k, a.state))
  }
  var f = k, g = function() {
    function a(c, d, e, f, g, h) {
      var ta = k;
      r(h) && (ta = z(Array.prototype.slice.call(arguments, 5), 0));
      return yd.call(k, c, R.call(k, d, c.state, e, f, g, ta))
    }
    a.e = 5;
    a.b = function(a) {
      var c = B(a), d = B(A(a)), e = B(A(A(a))), f = B(A(A(A(a)))), g = B(A(A(A(A(a))))), a = C(A(A(A(A(a)))));
      return yd.call(k, c, R.call(k, d, c.state, e, f, g, a))
    };
    return a
  }(), f = function(f, j, p, u, y, G) {
    switch(arguments.length) {
      case 2:
        return e.call(this, f, j);
      case 3:
        return d.call(this, f, j, p);
      case 4:
        return c.call(this, f, j, p, u);
      case 5:
        return a.call(this, f, j, p, u, y);
      default:
        return g.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  f.e = 5;
  f.b = g.b;
  f.f = e;
  f.c = d;
  f.N = c;
  f.Z = a;
  f.ia = g;
  return f
}();
function Y(a) {
  return Ka.call(k, a)
}
var Gb = function() {
  function a(a) {
    return Math.random() * a
  }
  function c() {
    return d.call(k, 1)
  }
  var d = k, d = function(d) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return a.call(this, d)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.Y = c;
  d.h = a;
  return d
}(), Hb = function(a) {
  return Math.floor(Math.random() * a)
}, Ad = xd.call(k, function() {
  return V(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], [V([], []), V([], []), V([], [])])
}.call(k)), Bd = function() {
  function a(a, c, g) {
    var h = D.call(k, c, g);
    if(h || (h = Ab.call(k, "\ufdd0'ancestors".call(k, a).call(k, c), g))) {
      return h
    }
    if(h = rb.call(k, g)) {
      if(h = rb.call(k, c)) {
        if(h = D.call(k, K.call(k, g), K.call(k, c))) {
          for(var h = i, j = 0;;) {
            var p = I.call(k, h);
            if(p ? p : D.call(k, j, K.call(k, g))) {
              return h
            }
            h = d.call(k, a, c.call(k, j), g.call(k, j));
            j += 1
          }
        }else {
          return h
        }
      }else {
        return h
      }
    }else {
      return h
    }
  }
  function c(a, c) {
    return d.call(k, Y.call(k, Ad), a, c)
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}(), Cd = function() {
  function a(a, c) {
    return $b.call(k, M.call(k, "\ufdd0'parents".call(k, a), c))
  }
  function c(a) {
    return d.call(k, Y.call(k, Ad), a)
  }
  var d = k, d = function(d, f) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return a.call(this, d, f)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.h = c;
  d.f = a;
  return d
}();
function Dd(a, c, d, e) {
  zd.call(k, a, function() {
    return Y.call(k, c)
  });
  return zd.call(k, d, function() {
    return Y.call(k, e)
  })
}
var Fd = function Ed(c, d, e) {
  var f = Y.call(k, e).call(k, c), f = s(s(f) ? f.call(k, d) : f) ? i : k;
  if(s(f)) {
    return f
  }
  f = function() {
    for(var f = Cd.call(k, d);;) {
      if(0 < K.call(k, f)) {
        Ed.call(k, c, B.call(k, f), e), f = C.call(k, f)
      }else {
        return k
      }
    }
  }();
  if(s(f)) {
    return f
  }
  f = function() {
    for(var f = Cd.call(k, c);;) {
      if(0 < K.call(k, f)) {
        Ed.call(k, B.call(k, f), d, e), f = C.call(k, f)
      }else {
        return k
      }
    }
  }();
  return s(f) ? f : l
};
function Gd(a, c, d) {
  d = Fd.call(k, a, c, d);
  return s(d) ? d : Bd.call(k, a, c)
}
var Id = function Hd(c, d, e, f, g, h, j) {
  var p = O.call(k, function(e, f) {
    var h = L.call(k, f, 0, k);
    L.call(k, f, 1, k);
    if(Bd.call(k, d, h)) {
      var j;
      j = (j = e === k) ? j : Gd.call(k, h, B.call(k, e), g);
      j = s(j) ? f : e;
      s(Gd.call(k, B.call(k, j), h, g)) || b(Error(P.call(k, "Multiple methods in multimethod '", c, "' match dispatch value: ", d, " -> ", h, " and ", B.call(k, j), ", and neither is preferred")));
      return j
    }
    return e
  }, k, Y.call(k, f));
  if(s(p)) {
    if(D.call(k, Y.call(k, j), Y.call(k, e))) {
      return zd.call(k, h, hb, d, fb.call(k, p)), fb.call(k, p)
    }
    Dd.call(k, h, f, j, e);
    return Hd.call(k, c, d, e, f, g, h, j)
  }
  return k
};
function Jd(a, c, d) {
  if(a ? a.na : a) {
    a = a.na(a, c, d)
  }else {
    var e;
    var f = Jd[q.call(k, a)];
    f ? e = f : (f = Jd._) ? e = f : b(t.call(k, "IMultiFn.-add-method", a));
    a = e.call(k, a, c, d)
  }
  return a
}
function Kd(a, c) {
  var d;
  if(a ? a.pa : a) {
    d = a.pa(0, c)
  }else {
    var e = Kd[q.call(k, a)];
    e ? d = e : (e = Kd._) ? d = e : b(t.call(k, "IMultiFn.-get-method", a));
    d = d.call(k, a, c)
  }
  return d
}
function Ld(a, c) {
  var d;
  if(a ? a.oa : a) {
    d = a.oa(a, c)
  }else {
    var e = Ld[q.call(k, a)];
    e ? d = e : (e = Ld._) ? d = e : b(t.call(k, "IMultiFn.-dispatch", a));
    d = d.call(k, a, c)
  }
  return d
}
function Md(a, c, d) {
  c = R.call(k, c, d);
  a = Kd.call(k, a, c);
  s(a) || b(Error(P.call(k, "No method in multimethod '", W, "' for dispatch value: ", c)));
  return R.call(k, a, d)
}
function Nd(a, c, d, e, f, g, h, j) {
  this.name = a;
  this.Aa = c;
  this.za = d;
  this.ea = e;
  this.ca = f;
  this.Ba = g;
  this.fa = h;
  this.da = j
}
o = Nd.prototype;
o.r = function(a) {
  return ea.call(k, a)
};
o.na = function(a, c, d) {
  zd.call(k, this.ca, hb, c, d);
  Dd.call(k, this.fa, this.ca, this.da, this.ea);
  return a
};
o.pa = function(a, c) {
  D.call(k, Y.call(k, this.da), Y.call(k, this.ea)) || Dd.call(k, this.fa, this.ca, this.da, this.ea);
  var d = Y.call(k, this.fa).call(k, c);
  if(s(d)) {
    return d
  }
  d = Id.call(k, this.name, c, this.ea, this.ca, this.Ba, this.fa, this.da);
  return s(d) ? d : Y.call(k, this.ca).call(k, this.za)
};
o.oa = function(a, c) {
  return Md.call(k, a, this.Aa, c)
};
o.call = function() {
  function a(a, d) {
    var e = k;
    r(d) && (e = z(Array.prototype.slice.call(arguments, 1), 0));
    return Ld.call(k, this, e)
  }
  a.e = 1;
  a.b = function(a) {
    B(a);
    a = C(a);
    return Ld.call(k, this, a)
  };
  return a
}();
o.apply = function(a, c) {
  return Ld.call(k, this, c)
};
function Od(a, c, d) {
  if(wb.call(k, c)) {
    return a.replace(RegExp(ka.call(k, c), "g"), d)
  }
  if(s(c.hasOwnProperty("source"))) {
    return a.replace(RegExp(c.source, "g"), d)
  }
  b(P.call(k, "Invalid match arg: ", c))
}
var Pd = function() {
  function a(a, c) {
    return R.call(k, P, ic.call(k, a, c))
  }
  function c(a) {
    return R.call(k, P, a)
  }
  var d = k, d = function(d, f) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return a.call(this, d, f)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.h = c;
  d.f = a;
  return d
}();
function Qd(a) {
  return a.toUpperCase()
}
function Rd(a) {
  return a.toLowerCase()
}
function Sd(a) {
  return 2 > K.call(k, a) ? Qd.call(k, a) : P.call(k, Qd.call(k, Lb.call(k, a, 0, 1)), Rd.call(k, Lb.call(k, a, 1)))
}
var Td = function() {
  function a(a, c, d) {
    if(1 > d) {
      return Ac.call(k, P.call(k, a).split(c))
    }
    for(var h = T([]);;) {
      if(D.call(k, d, 1)) {
        return J.call(k, h, a)
      }
      var j = ld.call(k, c, a);
      if(s(j)) {
        var p = j, j = a.indexOf(p), p = a.substring(j + K.call(k, p)), d = d - 1, h = J.call(k, h, a.substring(0, j)), a = p
      }else {
        return J.call(k, h, a)
      }
    }
  }
  function c(a, c) {
    return Ac.call(k, P.call(k, a).split(c))
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}();
function Ud() {
  return ba.navigator ? ba.navigator.userAgent : k
}
pa = oa = na = ma = l;
var Vd;
if(Vd = Ud()) {
  var Wd = ba.navigator;
  ma = 0 == Vd.indexOf("Opera");
  na = !ma && -1 != Vd.indexOf("MSIE");
  oa = !ma && -1 != Vd.indexOf("WebKit");
  pa = !ma && !oa && "Gecko" == Wd.product
}
var Xd = na, Yd = pa, Zd = oa, $d;
a: {
  var ae = "", be;
  if(ma && ba.opera) {
    var ce = ba.opera.version, ae = "function" == typeof ce ? ce() : ce
  }else {
    if(Yd ? be = /rv\:([^\);]+)(\)|;)/ : Xd ? be = /MSIE\s+([^\);]+)(\)|;)/ : Zd && (be = /WebKit\/(\S+)/), be) {
      var de = be.exec(Ud()), ae = de ? de[1] : ""
    }
  }
  if(Xd) {
    var ee, fe = ba.document;
    ee = fe ? fe.documentMode : void 0;
    if(ee > parseFloat(ae)) {
      $d = "" + ee;
      break a
    }
  }
  $d = ae
}
var ge = {};
function he(a) {
  var c;
  if(!(c = ge[a])) {
    c = 0;
    for(var d = ("" + $d).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0;0 == c && g < f;g++) {
      var h = d[g] || "", j = e[g] || "", p = RegExp("(\\d*)(\\D*)", "g"), u = RegExp("(\\d*)(\\D*)", "g");
      do {
        var y = p.exec(h) || ["", "", ""], G = u.exec(j) || ["", "", ""];
        if(0 == y[0].length && 0 == G[0].length) {
          break
        }
        c = ((0 == y[1].length ? 0 : parseInt(y[1], 10)) < (0 == G[1].length ? 0 : parseInt(G[1], 10)) ? -1 : (0 == y[1].length ? 0 : parseInt(y[1], 10)) > (0 == G[1].length ? 0 : parseInt(G[1], 10)) ? 1 : 0) || ((0 == y[2].length) < (0 == G[2].length) ? -1 : (0 == y[2].length) > (0 == G[2].length) ? 1 : 0) || (y[2] < G[2] ? -1 : y[2] > G[2] ? 1 : 0)
      }while(0 == c)
    }
    c = ge[a] = 0 <= c
  }
  return c
}
;!Xd || he("9");
!Yd && !Xd || Xd && he("9") || Yd && he("1.9.1");
Xd && he("9");
function ie(a) {
  return document.createTextNode(a)
}
function je(a, c) {
  a.appendChild(c)
}
;var ke = V(["\ufdd0'xhtml", "\ufdd0'svg"], ["http://www.w3.org/1999/xhtml", "http://www.w3.org/2000/svg"]);
xd.call(k, 0);
var le = function() {
  function a(a, c, d) {
    a.setAttribute(W.call(k, c), d);
    return a
  }
  function c(a, c) {
    if(s(a)) {
      if(I.call(k, qb.call(k, c))) {
        return a.getAttribute(W.call(k, c))
      }
      var g = H.call(k, c);
      if(s(g)) {
        var h = B.call(k, g);
        L.call(k, h, 0, k);
        for(L.call(k, h, 1, k);;) {
          var j = h, h = L.call(k, j, 0, k), j = L.call(k, j, 1, k);
          d.call(k, a, h, j);
          g = A.call(k, g);
          if(s(g)) {
            h = g, g = B.call(k, h), j = h, h = g, g = j
          }else {
            break
          }
        }
      }
      return a
    }
    return k
  }
  var d = k, d = function(d, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    b("Invalid arity: " + arguments.length)
  };
  d.f = c;
  d.c = a;
  return d
}(), oe = function me(c, d) {
  var e = H.call(k, d);
  if(s(e)) {
    for(var f = B.call(k, e);;) {
      if(f === k ? f = k : (qb.call(k, f) && b("Maps cannot be used as content"), f = wb.call(k, f) ? ie.call(k, f) : rb.call(k, f) ? ne.call(k, f) : ub.call(k, f) ? me.call(k, c, f) : s(f.nodeName) ? f : k), s(f) && je.call(k, c, f), f = A.call(k, e), s(f)) {
        e = f, f = B.call(k, e)
      }else {
        return k
      }
    }
  }else {
    return k
  }
}, pe = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function qe(a) {
  var c = L.call(k, a, 0, k), a = Jb.call(k, a, 1);
  I.call(k, function() {
    var a = xb.call(k, c);
    return a ? a : (a = yb.call(k, c)) ? a : wb.call(k, c)
  }()) && b(P.call(k, c, " is not a valid tag name."));
  var d = kd.call(k, pe, W.call(k, c));
  L.call(k, d, 0, k);
  var e = L.call(k, d, 1, k), f = L.call(k, d, 2, k), g = L.call(k, d, 3, k), h = function() {
    var a = Td.call(k, e, /:/), c = L.call(k, a, 0, k), a = L.call(k, a, 1, k), d = ke.call(k, Mb.call(k, c));
    return s(a) ? T([s(d) ? d : c, a]) : T(["\ufdd0'xhtml".call(k, ke), c])
  }(), d = L.call(k, h, 0, k), h = L.call(k, h, 1, k), f = nc.call(k, V([], []), mc.call(k, function(a) {
    return I.call(k, fb.call(k, a) === k)
  }, V(["\ufdd0'id", "\ufdd0'class"], [s(f) ? f : k, s(g) ? Od.call(k, g, /\./, " ") : k]))), g = B.call(k, a);
  return qb.call(k, g) ? T([d, h, cd.call(k, f, g), A.call(k, a)]) : T([d, h, f, a])
}
function re(a, c) {
  return document.createElementNS(a, c)
}
function ne(a) {
  var c = qe.call(k, a), d = L.call(k, c, 0, k), e = L.call(k, c, 1, k), a = L.call(k, c, 2, k), c = L.call(k, c, 3, k), d = re.call(k, d, e);
  le.call(k, d, a);
  oe.call(k, d, c);
  return d
}
var se = function() {
  function a(a) {
    var e = k;
    r(a) && (e = z(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    a = S.call(k, ne, a);
    return s(fb.call(k, a)) ? a : B.call(k, a)
  }
  a.e = 0;
  a.b = function(a) {
    a = H(a);
    return c.call(this, a)
  };
  return a
}();
var ue = function te(c) {
  return wb.call(k, c) ? c : xb.call(k, c) ? W.call(k, c) : qb.call(k, c) ? O.call(k, function(c, e) {
    var f = L.call(k, e, 0, k), g = L.call(k, e, 1, k);
    return hb.call(k, c, te.call(k, f), te.call(k, g))
  }, V([], []), c).Ga : nb.call(k, c) ? R.call(k, wa, S.call(k, te, c)) : c
};
var ve = {};
function we(a) {
  return a.prototype.Ea
}
function xe(a) {
  if(wb.call(k, a)) {
    return a
  }
  if(zb.call(k, a)) {
    var c = we.call(k, a);
    return s(c) ? P.call(k, "[crateGroup=", c, "]") : a
  }
  return xb.call(k, a) ? W.call(k, a) : a
}
var ye = function() {
  function a(a, e) {
    var f = k;
    r(e) && (f = z(Array.prototype.slice.call(arguments, 1), 0));
    return c.call(this, a, f)
  }
  function c(a, c) {
    var f = L.call(k, c, 0, k);
    return I.call(k, f) ? jQuery(xe.call(k, a)) : jQuery(xe.call(k, a), f)
  }
  a.e = 1;
  a.b = function(a) {
    var e = B(a), a = C(a);
    return c.call(this, e, a)
  };
  return a
}();
o = jQuery.prototype;
o.W = function(a, c) {
  return $a.call(k, ve.ya, c, B.call(k, a), K.call(k, a))
};
o.X = function(a, c, d) {
  return $a.call(k, ve.ya, c, d, ve.j)
};
o.R = function(a, c) {
  var d = a.slice(c, c + 1);
  return s(d) ? d : k
};
o.S = function(a, c, d) {
  return w.call(k, a, c, d)
};
o.G = i;
o.U = function(a, c) {
  return c < K.call(k, a) ? a.slice(c, c + 1) : k
};
o.V = function(a, c, d) {
  return c < K.call(k, a) ? a.slice(c, c + 1) : void 0 === d ? k : d
};
o.C = function(a) {
  return a.size()
};
o.L = i;
o.D = function(a) {
  return a.get(0)
};
o.F = function(a) {
  return 1 < K.call(k, a) ? a.slice(1) : E.call(k)
};
o.n = function(a) {
  return s(a.get(0)) ? a : k
};
o.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(k, this, c);
      case 3:
        return x.call(k, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var ze = function() {
  function a(a, e, f) {
    var g = k;
    r(f) && (g = z(Array.prototype.slice.call(arguments, 2), 0));
    return c.call(this, a, e, g)
  }
  function c(a, c, f) {
    f = L.call(k, f, 0, k);
    c = W.call(k, c);
    return I.call(k, f) ? a.attr(c) : a.attr(c, f)
  }
  a.e = 2;
  a.b = function(a) {
    var e = B(a), f = B(A(a)), a = C(A(a));
    return c.call(this, e, f, a)
  };
  return a
}();
function Ae(a) {
  if(xb.call(k, a)) {
    return W.call(k, a)
  }
  if(qb.call(k, a)) {
    return ue.call(k, a)
  }
  if(nb.call(k, a)) {
    return Pd.call(k, " ", S.call(k, W, a))
  }
  b(Error(P.call(k, "Unknown event type: ", a)))
}
var Be = function() {
  function a(a, e, f) {
    var g = k;
    r(f) && (g = z(Array.prototype.slice.call(arguments, 2), 0));
    return c.call(this, a, e, g)
  }
  function c(a, c, f) {
    var g = L.call(k, f, 0, k), h = L.call(k, f, 1, k), f = L.call(k, f, 2, k);
    return a.on(Ae.call(k, c), xe.call(k, g), h, f)
  }
  a.e = 2;
  a.b = function(a) {
    var e = B(a), f = B(A(a)), a = C(A(a));
    return c.call(this, e, f, a)
  };
  return a
}(), Ce = function() {
  function a(a, e, f) {
    var g = k;
    r(f) && (g = z(Array.prototype.slice.call(arguments, 2), 0));
    return c.call(this, a, e, g)
  }
  function c(a, c, f) {
    var g = L.call(k, f, 0, k), f = L.call(k, f, 1, k);
    return a.off(Ae.call(k, c), xe.call(k, g), f)
  }
  a.e = 2;
  a.b = function(a) {
    var e = B(a), f = B(A(a)), a = C(A(a));
    return c.call(this, e, f, a)
  };
  return a
}();
function De(a, c, d) {
  return Be(a, c, k, k, d)
}
var sa = function(a) {
  return console.log(a)
}, Ee = V(["\ufdd0'off", "\ufdd0'on"], ["hsl(0, 0%, 27%)", "hsl(60,70%,45%)"]), Z = Math.floor.call(k, 20 * Math.sqrt.call(k, 3));
function Fe(a) {
  var c = L.c(a, 0, k), d = L.c(a, 1, k);
  return S.f(function(a) {
    var f = L.c(a, 0, k), a = L.c(a, 1, k);
    return T([c + f, d + a])
  }, T([T([10, 0]), T([30, 0]), T([40, Z / 2]), T([30, Z]), T([10, Z]), T([0, Z / 2])]))
}
function Ge(a) {
  var c = L.c(a, 0, k), d = L.c(a, 1, k);
  return S.f(function(a) {
    var f = T([T([0, T([-1, -1])]), T([1, T([-1, 0])]), T([1, T([0, 1])]), T([0, T([1, 1])]), T([-1, T([0, 1])]), T([-1, T([-1, 0])])]).call(k, a), a = L.c(f, 0, k), f = L.c(f, 1, k);
    return T([c + a, d + f.call(k, c % 2)])
  }, id.h(6))
}
function He(a, c) {
  var d = Math.floor.call(k, a / 30), e = a - 30 * d, f = c - d % 2 * (Z / 2), g = Math.floor.call(k, f / Z), f = f - Z * g;
  return e > 20 * Math.abs.call(k, 0.5 - f / Z) ? T([d, g]) : T([d - 1, g + (d % 2 - (f < Z / 2 ? 1 : 0))])
}
function Ie() {
  for(var a = Je, c = Y(Ke), d = a.getContext(W.call(k, "\ufdd0'2d")), e = a.height / Z, f = 0;;) {
    if(f < e) {
      for(var g = a.width / 20, h = 0;;) {
        if(h < g) {
          var j = Fe(T([30 * h, Z * ((2 * f + h % 2) / 2)])), p = L.c(j, 0, k), u = L.c(p, 0, k), p = L.c(p, 1, k), j = Jb(j, 1), y = d;
          y.beginPath();
          y.moveTo(u, p);
          u = H(j);
          if(s(u)) {
            j = p = B(u);
            L.c(j, 0, k);
            for(L.c(j, 1, k);;) {
              if(j = p, p = L.c(j, 0, k), j = L.c(j, 1, k), d.lineTo(p, j), u = A(u), s(u)) {
                p = u, u = B(p), j = p, p = u, u = j
              }else {
                break
              }
            }
          }
          u = d;
          u.closePath();
          u.stroke();
          p = Ee.call(k, s(c.call(k, T([h, f]))) ? "\ufdd0'on" : "\ufdd0'off");
          u.fillStyle = p;
          u.fill();
          h += 1
        }else {
          break
        }
      }
      f += 1
    }else {
      return k
    }
  }
}
var Le = xd.h(V(["\ufdd0'alive", "\ufdd0'dead"], [T([l, i, l, l, i, l]), T([l, i, l, l, l, l])]));
function Me(a, c) {
  return oc.f(Y(Le), T([s(c) ? "\ufdd0'alive" : "\ufdd0'dead", a - 1]))
}
var Ne = ye("\ufdd0'body"), Oe = se(T(["\ufdd0'div#wrap", T(["\ufdd0'div#control", S.f(function(a) {
  return T(["\ufdd0'ul", T(["\ufdd0'li.head", Sd(W(a))]), S.f(function(c) {
    return T([s(Me(c, D.f(a, "\ufdd0'alive"))) ? "\ufdd0'li.num.active" : "\ufdd0'li.num", V(["\ufdd0'data-num", "\ufdd0'data-status"], [c, W(a)]), P.h(c)])
  }, id.f(1, 7))])
}, T(["\ufdd0'alive", "\ufdd0'dead"])), T(["\ufdd0'ul.command", S.f(function(a) {
  return T(["\ufdd0'li", V(["\ufdd0'data-action"], [W(a)]), Sd(W(a))])
}, T(["\ufdd0'run", "\ufdd0'step", "\ufdd0'randomize", "\ufdd0'clear"]))]), T(["\ufdd0'ul", T(["\ufdd0'li", T(["\ufdd0'a", V(["\ufdd0'href", "\ufdd0'target"], ["https://github.com/thomcc/hex", "_blank"]), "Source"])])])]), T(["\ufdd0'canvas#canvas"])]));
Ne.append(Oe);
function Pe(a, c, d) {
  var e = L.c(a, 0, k), f = L.c(a, 1, k);
  return I(function() {
    var a = 0 > e;
    if(a || (a = 0 > f)) {
      return a
    }
    return(a = e > c) ? a : f > d
  }())
}
function Qe(a, c, d, e) {
  return fd(function() {
    return function g(h) {
      return new Q(k, l, function() {
        for(var j = h;;) {
          if(s(H(j))) {
            var p = B(j), u = L.c(p, 0, k), p = L.c(p, 1, k), y = Pe(u, d, e), p = s(y) ? c.call(k, p, a.call(k, u)) : y;
            if(s(p)) {
              return F(u, g.call(k, C(j)))
            }
            j = C(j)
          }else {
            return k
          }
        }
      })
    }.call(k, jd(kc.f(Ge, a)))
  }())
}
var Re = xd.h(l), Ke = xd.h(fd([])), Se = ye("\ufdd0'#canvas"), Je = Se.get(0), Te = ye(window), We = function Ue() {
  if(s(Y(Re))) {
    var c = (new Date).getTime();
    Ve();
    c = (new Date).getTime() - c;
    vd(P("took ", c, " ms."));
    return setTimeout(Ue, 0 < 200 - c ? 200 - c : 0)
  }
  return k
};
function Ve() {
  zd.Z(Ke, Qe, Me, Je.width / 20, Je.height / Z);
  return Ie()
}
var Xe = function() {
  var a = xd.h(V([], [])), c = xd.h(V([], [])), d = xd.h(V([], [])), e = xd.h(V([], [])), f = M.c(V([], []), "\ufdd0'hierarchy", Ad);
  return new Nd("clicked", function(a) {
    return Mb.h(ze(a, "\ufdd0'data-action"))
  }, "\ufdd0'default", f, a, c, d, e)
}();
Jd(Xe, "\ufdd0'step", function() {
  return Ve()
});
Jd(Xe, "\ufdd0'clear", function() {
  yd(Ke, fd([]));
  return Ie()
});
Jd(Xe, "\ufdd0'randomize", function() {
  yd(Ke, fd([]));
  for(var a = T([Math.floor.call(k, Te.width() / 20), Math.floor.call(k, Te.height() / Z)]), c = L.c(a, 0, k), a = L.c(a, 1, k), d = 0;;) {
    if(d < a) {
      for(var e = c, f = 0;;) {
        if(f < e) {
          0 === Hb(2) && zd.c(Ke, J, T([f, d])), f += 1
        }else {
          break
        }
      }
      d += 1
    }else {
      break
    }
  }
  return Ie()
});
Jd(Xe, "\ufdd0'run", function(a) {
  var c = a.hasClass("active");
  a.toggleClass("active").text(s(c) ? "Run" : "Stop");
  I(c) ? (yd(Re, i), a = We()) : a = yd(Re, l);
  return a
});
De(Se, "\ufdd0'mousedown", function(a) {
  function c(a) {
    a = He(a.pageX, a.pageY);
    if(s(Y(e).call(k, a))) {
      return k
    }
    zd.c(e, J, a);
    zd.c(Ke, d, a);
    return Ie()
  }
  var d = s(M.f(Y(Ke), He(a.pageX, a.pageY))) ? lb : J, e = xd.h(fd([]));
  c.call(k, a);
  return De(Se, "\ufdd0'mousemove", c)
});
De(Se, "\ufdd0'mouseup", function() {
  return Ce(Se, "\ufdd0'mousemove", k)
});
De(Te, "\ufdd0'resize", function(a) {
  a.preventDefault();
  Je.width = Te.width();
  Je.height = Te.height();
  return Ie()
});
De(ye("[data-action]"), "\ufdd0'click", function(a) {
  a.preventDefault();
  return Xe.call(k, ye(this), a)
});
De(ye("\ufdd0'.num"), "\ufdd0'click", function(a) {
  var c = ye(this), d = ze(c, "\ufdd0'data-num"), e = ze(c, "\ufdd0'data-status");
  a.preventDefault();
  c.toggleClass("active");
  return zd.N(Le, pc, T([Mb.h(e), d - 1]), I)
});
var Ye = T([T([20, 7]), T([21, 6]), T([21, 7]), T([22, 7]), T([24, 7]), T([24, 5]), T([24, 9]), T([10, 5]), T([10, 7]), T([10, 9]), T([13, 7]), T([13, 6]), T([12, 7]), T([14, 7])]), Ze = H(Ye);
if(s(Ze)) {
  var $e = B(Ze);
  L.c($e, 0, k);
  L.c($e, 1, k);
  for(var af = $e, bf = Ze;;) {
    var cf = af, df = L.c(cf, 0, k), ef = L.c(cf, 1, k), ff = bf;
    zd.c(Ke, J, T([df, ef]));
    var gf = A(ff);
    if(s(gf)) {
      var hf = gf, jf = B(hf), kf = hf, af = jf, bf = kf
    }else {
      break
    }
  }
}
Te.trigger(W.call(k, "\ufdd0'resize"));
