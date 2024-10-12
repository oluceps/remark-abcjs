import p from "abcjs";
function b(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var l = Object.getOwnPropertySymbols, v = Object.prototype.hasOwnProperty, m = Object.prototype.propertyIsEnumerable;
function O(r) {
  if (r == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(r);
}
function g() {
  try {
    if (!Object.assign)
      return !1;
    var r = new String("abc");
    if (r[5] = "de", Object.getOwnPropertyNames(r)[0] === "5")
      return !1;
    for (var t = {}, e = 0; e < 10; e++)
      t["_" + String.fromCharCode(e)] = e;
    var o = Object.getOwnPropertyNames(t).map(function(n) {
      return t[n];
    });
    if (o.join("") !== "0123456789")
      return !1;
    var a = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(n) {
      a[n] = n;
    }), Object.keys(Object.assign({}, a)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var j = g() ? Object.assign : function(r, t) {
  for (var e, o = O(r), a, n = 1; n < arguments.length; n++) {
    e = Object(arguments[n]);
    for (var c in e)
      v.call(e, c) && (o[c] = e[c]);
    if (l) {
      a = l(e);
      for (var u = 0; u < a.length; u++)
        m.call(e, a[u]) && (o[a[u]] = e[a[u]]);
    }
  }
  return o;
}, d = j, h = y;
function y(r, t) {
  return e(r, null, null);
  function e(o, a, n) {
    var c = o.children, u = d({}, t(o, a, n));
    return c && (u.children = c.map(s)), u;
    function s(i, f) {
      return e(i, f, o);
    }
  }
}
const w = /* @__PURE__ */ b(h), C = () => (r) => w(r, (t) => {
  if (t.type === "code" && t.lang === "abc") {
    const e = p.renderAbc(null, t.value, { returnString: !0 });
    return {
      type: "abc",
      value: t.value,
      data: {
        hName: "div",
        hProperties: {
          className: ["abcjsContainer"]
        },
        hChildren: [
          {
            type: "text",
            value: e
          }
        ]
      }
    };
  } else
    return t;
});
export {
  C as default
};
