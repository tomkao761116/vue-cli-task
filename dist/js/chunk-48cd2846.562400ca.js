(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-48cd2846'], { '1dde': function (t, e, r) { var n = r('d039'); var o = r('b622'); var a = r('2d00'); var s = o('species'); t.exports = function (t) { return a >= 51 || !n(function () { var e = []; var r = e.constructor = {}; return r[s] = function () { return { foo: 1 } }, e[t](Boolean).foo !== 1 }) } }, '65f0': function (t, e, r) { var n = r('861d'); var o = r('e8b5'); var a = r('b622'); var s = a('species'); t.exports = function (t, e) { var r; return o(t) && (r = t.constructor, typeof r !== 'function' || r !== Array && !o(r.prototype) ? n(r) && (r = r[s], r === null && (r = void 0)) : r = void 0), new (void 0 === r ? Array : r)(e === 0 ? 0 : e) } }, 8418: function (t, e, r) { 'use strict'; var n = r('c04e'); var o = r('9bf2'); var a = r('5c6c'); t.exports = function (t, e, r) { var s = n(e); s in t ? o.f(t, s, a(0, r)) : t[s] = r } }, '99af': function (t, e, r) { 'use strict'; var n = r('23e7'); var o = r('d039'); var a = r('e8b5'); var s = r('861d'); var i = r('7b0b'); var c = r('50c4'); var u = r('8418'); var l = r('65f0'); var d = r('1dde'); var p = r('b622'); var f = r('2d00'); var m = p('isConcatSpreadable'); var v = 9007199254740991; var h = 'Maximum allowed index exceeded'; var b = f >= 51 || !o(function () { var t = []; return t[m] = !1, t.concat()[0] !== t }); var w = d('concat'); var g = function (t) { if (!s(t)) return !1; var e = t[m]; return void 0 !== e ? !!e : a(t) }; var y = !b || !w; n({ target: 'Array', proto: !0, forced: y }, { concat: function (t) { var e; var r; var n; var o; var a; var s = i(this); var d = l(s, 0); var p = 0; for (e = -1, n = arguments.length; e < n; e++) if (a = e === -1 ? s : arguments[e], g(a)) { if (o = c(a.length), p + o > v) throw TypeError(h); for (r = 0; r < o; r++, p++)r in a && u(d, p, a[r]) } else { if (p >= v) throw TypeError(h); u(d, p++, a) } return d.length = p, d } }) }, aa92: function (t, e, r) { 'use strict'; r.r(e); var n = function () { var t = this; var e = t.$createElement; var r = t._self._c || e; return r('div', [r('div', { staticClass: 'container text-center' }, [r('form', { staticClass: 'form-signIn my-5', on: { submit: function (e) { return e.preventDefault(), t.login(e) } } }, [r('h1', { staticClass: 'h3 mb-3 font-weight-normal' }, [t._v("Aiden's Garden")]), r('label', { staticClass: 'sr-only', attrs: { for: 'inputEmail' } }, [t._v('Email address')]), r('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.user.email, expression: 'user.email' }], staticClass: 'form-control', attrs: { type: 'email', id: 'inputEmail', placeholder: 'Email address', required: '', autofocus: '' }, domProps: { value: t.user.email }, on: { input: function (e) { e.target.composing || t.$set(t.user, 'email', e.target.value) } } }), r('label', { staticClass: 'sr-only', attrs: { for: 'inputPassword' } }, [t._v('Password')]), r('input', { directives: [{ name: 'model', rawName: 'v-model', value: t.user.password, expression: 'user.password' }], staticClass: 'form-control', attrs: { type: 'password', id: 'inputPassword', placeholder: 'Password', required: '' }, domProps: { value: t.user.password }, on: { input: function (e) { e.target.composing || t.$set(t.user, 'password', e.target.value) } } }), r('button', { staticClass: 'btn btn-lg btn-info btn-block mt-5', attrs: { type: 'submit' } }, [t._v('登入')]), r('p', { staticClass: 'mt-5 mb-3 text-muted' }, [t._v("© 2020 Aiden's Garden")])])])]) }; var o = []; var a = (r('99af'), { name: 'Login', data: function () { return { user: { email: '', password: '' } } }, methods: { login: function () { var t = this; var e = ''.concat('https://course-ec-api.hexschool.io/', 'api/auth/login'); console.log(this.user), this.$http.post(e, this.user).then(function (e) { var r = e.data.token; var n = e.data.expired; console.log(r, n), document.cookie = 'token='.concat(r, '; expires=').concat(new Date(1e3 * n), '; path = /'), t.$router.push('/admin/products') }).catch(function (t) { alert('帳號或密碼錯誤，請重新輸入') }) } } }); var s = a; var i = r('2877'); var c = Object(i.a)(s, n, o, !1, null, null, null); e.default = c.exports }, e8b5: function (t, e, r) { var n = r('c6b6'); t.exports = Array.isArray || function (t) { return n(t) == 'Array' } } }])
// # sourceMappingURL=chunk-48cd2846.562400ca.js.map
