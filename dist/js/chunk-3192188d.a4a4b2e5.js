(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3192188d"],{"057f":function(t,e,r){var a=r("fc6a"),s=r("241c").f,o={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return s(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==o.call(t)?i(t):s(a(t))}},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var a=r("428f"),s=r("5135"),o=r("e538"),n=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});s(e,t)||n(e,t,{value:o.f(t)})}},"99af":function(t,e,r){"use strict";var a=r("23e7"),s=r("d039"),o=r("e8b5"),n=r("861d"),i=r("7b0b"),c=r("50c4"),l=r("8418"),u=r("65f0"),d=r("1dde"),f=r("b622"),p=r("2d00"),m=f("isConcatSpreadable"),v=9007199254740991,b="Maximum allowed index exceeded",g=p>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),h=d("concat"),y=function(t){if(!n(t))return!1;var e=t[m];return void 0!==e?!!e:o(t)},_=!g||!h;a({target:"Array",proto:!0,forced:_},{concat:function(t){var e,r,a,s,o,n=i(this),d=u(n,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?n:arguments[e],y(o)){if(s=c(o.length),f+s>v)throw TypeError(b);for(r=0;r<s;r++,f++)r in o&&l(d,f,o[r])}else{if(f>=v)throw TypeError(b);l(d,f++,o)}return d.length=f,d}})},a4d3:function(t,e,r){"use strict";var a=r("23e7"),s=r("da84"),o=r("d066"),n=r("c430"),i=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),p=r("861d"),m=r("825a"),v=r("7b0b"),b=r("fc6a"),g=r("c04e"),h=r("5c6c"),y=r("7c73"),_=r("df75"),C=r("241c"),w=r("057f"),x=r("7418"),O=r("06cf"),j=r("9bf2"),T=r("d1e7"),P=r("9112"),S=r("6eeb"),$=r("5692"),N=r("f772"),k=r("d012"),E=r("90e3"),L=r("b622"),q=r("e538"),A=r("746f"),D=r("d44e"),M=r("69f3"),J=r("b727").forEach,W=N("hidden"),I="Symbol",B="prototype",F=L("toPrimitive"),G=M.set,Q=M.getterFor(I),V=Object[B],z=s.Symbol,H=o("JSON","stringify"),K=O.f,R=j.f,U=w.f,X=T.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),rt=$("wks"),at=s.QObject,st=!at||!at[B]||!at[B].findChild,ot=i&&u((function(){return 7!=y(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=K(V,e);a&&delete V[e],R(t,e,r),a&&t!==V&&R(V,e,a)}:R,nt=function(t,e){var r=Y[t]=y(z[B]);return G(r,{type:I,tag:t,description:e}),i||(r.description=e),r},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,r){t===V&&ct(Z,e,r),m(t);var a=g(e,!0);return m(r),d(Y,a)?(r.enumerable?(d(t,W)&&t[W][a]&&(t[W][a]=!1),r=y(r,{enumerable:h(0,!1)})):(d(t,W)||R(t,W,h(1,{})),t[W][a]=!0),ot(t,a,r)):R(t,a,r)},lt=function(t,e){m(t);var r=b(e),a=_(r).concat(mt(r));return J(a,(function(e){i&&!dt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=g(t,!0),r=X.call(this,e);return!(this===V&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,W)&&this[W][e])||r)},ft=function(t,e){var r=b(t),a=g(e,!0);if(r!==V||!d(Y,a)||d(Z,a)){var s=K(r,a);return!s||!d(Y,a)||d(r,W)&&r[W][a]||(s.enumerable=!0),s}},pt=function(t){var e=U(b(t)),r=[];return J(e,(function(t){d(Y,t)||d(k,t)||r.push(t)})),r},mt=function(t){var e=t===V,r=U(e?Z:b(t)),a=[];return J(r,(function(t){!d(Y,t)||e&&!d(V,t)||a.push(Y[t])})),a};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===V&&r.call(Z,t),d(this,W)&&d(this[W],e)&&(this[W][e]=!1),ot(this,e,h(1,t))};return i&&st&&ot(V,e,{configurable:!0,set:r}),nt(e,t)},S(z[B],"toString",(function(){return Q(this).tag})),S(z,"withoutSetter",(function(t){return nt(E(t),t)})),T.f=dt,j.f=ct,O.f=ft,C.f=w.f=pt,x.f=mt,q.f=function(t){return nt(L(t),t)},i&&(R(z[B],"description",{configurable:!0,get:function(){return Q(this).description}}),n||S(V,"propertyIsEnumerable",dt,{unsafe:!0}))),a({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),J(_(rt),(function(t){A(t)})),a({target:I,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=z(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),a({target:"Object",stat:!0,forced:!c,sham:!i},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),a({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:mt}),a({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(v(t))}}),H){var vt=!c||u((function(){var t=z();return"[null]"!=H([t])||"{}"!=H({a:t})||"{}"!=H(Object(t))}));a({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var a,s=[t],o=1;while(arguments.length>o)s.push(arguments[o++]);if(a=e,(p(e)||void 0!==t)&&!it(t))return f(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!it(e))return e}),s[1]=e,H.apply(null,s)}})}z[B][F]||P(z[B],F,z[B].valueOf),D(z,I),k[W]=!0},dbb4:function(t,e,r){var a=r("23e7"),s=r("83ab"),o=r("56ef"),n=r("fc6a"),i=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,r,a=n(t),s=i.f,l=o(a),u={},d=0;while(l.length>d)r=s(a,e=l[d++]),void 0!==r&&c(u,e,r);return u}})},e439:function(t,e,r){var a=r("23e7"),s=r("d039"),o=r("fc6a"),n=r("06cf").f,i=r("83ab"),c=s((function(){n(1)})),l=!i||c;a({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(t,e){return n(o(t),e)}})},e538:function(t,e,r){var a=r("b622");e.f=a},e90b:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-area container"},[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"row justify-content-center align-items-center"},[r("div",{staticClass:"col-sm-10 align-self-center"},[t._m(0),r("div",{staticClass:"cartContent"},[r("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid;return[r("form",{staticClass:"text-left",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"purchaseInfo col-lg-6 align-self-start"},[r("h6",{staticClass:"text-left"},[t._v("訂購資訊")]),r("hr"),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,s=e.classes;return[r("label",{attrs:{for:"username"}},[t._v("訂購人姓名"),r("span",{staticClass:"text-danger"},[t._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:s,attrs:{type:"text",id:"username",name:"訂購人姓名"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),a[0]?r("span",{staticClass:"text-danger"},[r("small",[t._v(t._s(a[0]))])]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,s=e.classes;return[r("label",{attrs:{for:"email"}},[t._v("訂購人信箱"),r("span",{staticClass:"text-danger"},[t._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:s,attrs:{type:"email",id:"email",name:"訂購人信箱"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),a[0]?r("span",{staticClass:"text-danger"},[r("small",[t._v(t._s(a[0]))])]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required|min:8|max:10"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,s=e.classes;return[r("label",{attrs:{for:"phone"}},[t._v("訂購人電話"),r("span",{staticClass:"text-danger"},[t._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:s,attrs:{id:"phone",name:"訂購人電話",type:"tel"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),a[0]?r("span",{staticClass:"text-danger"},[r("small",[t._v(t._s(a[0]))])]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,s=e.classes;return[r("label",{attrs:{for:"address"}},[t._v("地址"),r("span",{staticClass:"text-danger"},[t._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:s,attrs:{id:"address",name:"訂購地址",type:"text"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),a[0]?r("span",{staticClass:"text-danger"},[r("small",[t._v(t._s(a[0]))])]):t._e()]}}],null,!0)})],1),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"payment"}},[t._v("付款方式")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",attrs:{id:"payment",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v(" 請選擇付款方式 ")]),r("option",{attrs:{value:"WebATM"}},[t._v(" WebATM ")]),r("option",{attrs:{value:"ATM"}},[t._v(" ATM轉帳付款 ")]),r("option",{attrs:{value:"CVS"}},[t._v(" 超商取貨付款 ")]),r("option",{attrs:{value:"Barcode"}},[t._v(" Barcode ")]),r("option",{attrs:{value:"Credit"}},[t._v(" 信用卡 ")]),r("option",{attrs:{value:"ApplePay"}},[t._v(" ApplePay ")]),r("option",{attrs:{value:"GooglePay"}},[t._v(" GooglePay ")])])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"message"}},[t._v("備註")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})])]),r("div",{staticClass:"orderInfo col-lg-6 align-self-start"},[r("h6",{staticClass:"text-left"},[t._v("您的訂單")]),r("hr"),r("div",{staticClass:"pl-3 pr-3"},[r("div",{staticClass:"row d-flex justify-content-between align-items-center font-weight-bold"},[r("div",{staticClass:"col-header col-9 d-flex justify-content-center align-items-center border"},[t._v("品項")]),r("div",{staticClass:"col-header col-3 d-flex justify-content-center align-items-center border-top border-bottom border-right"},[t._v("小計")])]),t._l(t.carts,(function(e){return r("div",{key:e.product.id+1,staticClass:"row d-flex justify-content-between"},[r("div",{staticClass:"col-content col-9 d-flex justify-content-start align-items-center border-left border-right border-bottom"},[t._v(" "+t._s(e.product.title)+" x "+t._s(e.quantity)+" ")]),r("div",{staticClass:"col-content col-3 d-flex justify-content-center align-items-center border-right border-bottom"},[t._v(" NT"+t._s(t._f("currency")(e.product.price))+" ")])])}))],2),r("div",{staticClass:"sumTable col-12 d-flex justify-content-center align-items-center"},[r("table",{staticClass:"table text-right"},[r("tbody",[r("tr",[r("td",{staticClass:"border-top-0",attrs:{scope:"col"}},[t._v("共 "+t._s(t.quantityTatol)+" 件商品")]),r("td",{staticClass:"border-top-0",attrs:{scope:"col"}},[t._v("商品金額")]),r("td",{staticClass:"border-top-0",attrs:{scope:"col"}},[t._v("NT"+t._s(t._f("currency")(t.orignalTotal)))])]),r("tr",[r("td",{staticClass:"border-top-0",attrs:{colspan:"2",scope:"col"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:"請輸入優惠碼","aria-label":"coupon"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}})]),r("td",{staticClass:"border-top-0",attrs:{scope:"col"}},[r("button",{staticClass:"btn btn-outline-primary btn-sm",attrs:{type:"button"},on:{click:t.addCoupon}},[t._v("套用")])])]),r("tr",{staticClass:"text-danger"},[r("td",{staticClass:"border-top-0",attrs:{colspan:"2",scope:"col"}},[t._v(" 優惠券 ")]),r("td",{staticClass:"border-top-0",attrs:{scope:"col"}},[t.coupon.enabled?r("span",[t._v(" "+t._s(t.coupon.title)+" ")]):r("span",[t._v(" 未使用 ")])])]),r("tr",[r("td",{staticClass:"border-top-0",attrs:{colspan:"2",scope:"col"}},[t._v("運費")]),r("td",{staticClass:"border-top-0",attrs:{scope:"col"}},[t.cartTotal>=999?r("span",[t._v(" NT"+t._s(t._f("currency")(0))+" ")]):r("span",[t._v(" NT"+t._s(t._f("currency")(80))+" ")])])]),r("tr",[r("td",{attrs:{colspan:"2",scope:"col"}},[t._v("總計")]),r("td",{staticClass:"text-danger",attrs:{scope:"col"}},[t.cartTotal>=999?r("span",[t._v(" NT"+t._s(t._f("currency")(t.cartTotal))+" ")]):r("span",[t._v(" NT"+t._s(t._f("currency")(t.cartTotal+80))+" ")])])])])])]),r("div",{staticClass:"fnbar row d-flex justify-content-between align-items-center mt-3"},[r("div",{staticClass:"col-xs-4 d-flex justify-content-start align-items-center"},[r("div",{staticClass:"pl-3"},[r("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"/cart"}},[t._v("回購物車")])],1)]),r("div",{staticClass:"col-xs-4 d-flex justify-content-end align-items-center"},[r("div",{staticClass:"pr-3"},[r("button",a?{staticClass:"btn btn-primary btn-denied",attrs:{type:"submit",disabled:a}}:{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:a}},[t._v(" 確認訂購 ")])])])])])])])]}}])})],1)])])],1)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"step-progressbar py-3"},[r("li",{staticClass:"step-progressbar__item step-progressbar__item--complete"},[r("small",[t._v("確認購物車")])]),r("li",{staticClass:"step-progressbar__item step-progressbar__item--active"},[r("small",[t._v("填寫資料")])]),r("li",{staticClass:"step-progressbar__item"},[r("small",[t._v("確認付款")])]),r("li",{staticClass:"step-progressbar__item"},[r("small",[t._v("訂購完成")])])])}],o=(r("99af"),r("4160"),r("159b"),r("5530")),n={name:"Order",data:function(){return{isLoading:!1,fullPage:!0,form:{email:"",name:"",tel:"",address:"",payment:"WebATM",message:""},coupon:{},coupon_code:"",carts:{},cartTotal:0,quantityTatol:0,orignalTotal:0,uuid:"ea556ec5-4643-415e-96a7-36c78142eb82"}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat(this.uuid,"/ec/shopping");this.$http.get(e).then((function(e){t.carts=e.data.data,t.calTotal(),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.$bus.$emit("message:push","資料讀取失敗，請稍後再試\n            ".concat(e),"danger")}))},calTotal:function(){var t=0,e=0;this.carts.forEach((function(r){t+=r.product.price*r.quantity,e+=r.quantity})),!0===this.coupon.enabled?this.cartTotal=t*(this.coupon.percent/100):this.cartTotal=t,this.orignalTotal=t,this.quantityTatol=e},addCoupon:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat(this.uuid,"/ec/coupon/search");this.$http.post(e,{code:this.coupon_code}).then((function(e){t.coupon=e.data.data,t.calTotal(),t.$bus.$emit("message:push","優惠碼已套用","success"),t.isLoading=!1})).catch((function(e){var r=e.response.data.errors;if(r)r.code.forEach((function(e){t.$bus.$emit("message:push","優惠碼套用失敗\n              ".concat(e),"danger")})),t.isLoading=!1;else{var a=e.response.data.message;t.$bus.$emit("message:push","優惠碼套用失敗\n              ".concat(a),"danger"),t.isLoading=!1}}))},createOrder:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat(this.uuid,"/ec/orders"),r=Object(o["a"])({},this.form);this.coupon.enabled&&(r.coupon=this.coupon.code),this.$http.post(e,r).then((function(e){e.data.data.id&&(t.$bus.$emit("message:push","訂單建立成功","success"),t.$router.push("/checkout/".concat(e.data.data.id))),t.isLoading=!1})).catch((function(e){var r=e.response.data.errors;r.forEach((function(e){t.$bus.$emit("message:push","建立訂單發生錯誤\n            ".concat(e),"danger")})),t.isLoading=!1}))}}},i=n,c=r("2877"),l=Object(c["a"])(i,a,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-3192188d.a4a4b2e5.js.map