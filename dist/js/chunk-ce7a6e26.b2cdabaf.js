(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce7a6e26"],{2355:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main-area"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center align-items-center"},[a("div",{staticClass:"col-sm-10 align-self-center"},[t._m(0),t.carts.length>0?a("div",{attrs:{calss:"cartContent"}},[a("div",{staticClass:"cartTable border"},[a("div",{staticClass:"row d-flex justify-content-end "},[a("div",{staticClass:"col-3 col-header d-flex justify-content-end align-items-center"},[a("div",{staticClass:"pl-3 pr-3"},[a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(s){return t.removeAllCartItem()}}},[a("i",{staticClass:"far fa-trash-alt mr-1"}),a("span",[t._v("清空購物車")])])])])]),t._l(t.carts,(function(s){return a("div",{key:s.product.id+1,staticClass:"row justify-content-between "},[a("div",{staticClass:"col-3 col-content d-flex justify-content-start align-items-center"},[a("div",{staticClass:"pl-3"},[t._v(" "+t._s(s.product.title)+" ")])]),a("div",{staticClass:"col-xs-4 col-content d-flex justify-content-center align-items-center text-center"},[a("div",{staticClass:"numbox input-group input-group-sm m-0"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn",attrs:{type:"button",disabled:s.quantity<=1},on:{click:function(a){return t.updateQuantity(s.product.id,s.quantity-1)}}},[a("i",{staticClass:"fas fa-minus"})])]),a("input",{staticClass:"numbox-input form-control text-center ",attrs:{type:"number"},domProps:{value:s.quantity},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.updateQuantity(s.product.id,a.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn",attrs:{type:"button",disabled:s.quantity>=10},on:{click:function(a){return t.updateQuantity(s.product.id,s.quantity+1)}}},[a("i",{staticClass:"fas fa-plus"})])])])]),a("div",{staticClass:"col-2 col-content d-flex justify-content-center align-items-center"},[t._v(" "+t._s(s.quantity)+" "+t._s(s.product.unit)+" ")]),a("div",{staticClass:"col-2 col-content d-flex justify-content-center align-items-center"},[t._v(" NT"+t._s(t._f("currency")(s.product.price)))]),a("div",{staticClass:"col-1 col-content d-flex justify-content-center align-items-center"},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeCartItem(s.product.id)}}},[a("i",{staticClass:"fas fa-times text-danger"})])])])}))],2),a("div",{staticClass:"sumTable d-flex justify-content-end "},[a("div",{staticClass:"col-md-8 d-flex justify-content-end align-items-center"},[a("div",{staticClass:"row justify-content-end align-items-start"},[a("div",{staticClass:"pl-3 pr-3 pb-2"},[a("table",{staticClass:"table text-right"},[a("tbody",[a("tr",[a("td",{staticClass:"border-top-0",attrs:{scoped:"col"}},[t._v("共 "+t._s(t.quantityTatol)+" 件商品")]),a("td",{staticClass:"border-top-0",attrs:{scoped:"col"}},[t._v("商品金額")]),a("td",{staticClass:"border-top-0",attrs:{scoped:"col"}},[t._v("NT"+t._s(t._f("currency")(t.cartTotal)))])]),a("tr",[a("td",{staticClass:"border-top-0",attrs:{scoped:"col"}}),t._m(1),a("td",{staticClass:"border-top-0",attrs:{scoped:"col"}},[t.cartTotal>=999?a("span",[t._v(" NT"+t._s(t._f("currency")(0))+" ")]):a("span",[t._v(" NT"+t._s(t._f("currency")(80))+" ")])])]),a("tr",[a("td",{attrs:{scoped:"col"}}),a("td",{attrs:{scoped:"col"}},[t._v("總計")]),a("td",{staticClass:"text-danger",attrs:{scoped:"col"}},[t.cartTotal>=999?a("span",[t._v(" NT"+t._s(t._f("currency")(t.cartTotal))+" ")]):a("span",[t._v(" NT"+t._s(t._f("currency")(t.cartTotal+80))+" ")])])])])])])])])]),a("div",{staticClass:"fnbar row d-flex justify-content-between align-items-center mt-3"},[a("div",{staticClass:"col-xs-4 d-flex justify-content-start align-items-center"},[a("div",{staticClass:"pl-3"},[a("router-link",{staticClass:"btn btn-outline-primary",attrs:{to:"/products"}},[t._v("繼續購物")])],1)]),a("div",{staticClass:"col-xs-4 d-flex justify-content-end align-items-center"},[a("div",{staticClass:"pr-3"},[a("router-link",{staticClass:"btn btn-primary",class:{disabled:t.cartTotal<=0},attrs:{to:"/order"}},[t._v("我要買單")])],1)])])]):a("div",{staticClass:"noCartContent row d-flex justify-content-center align-items-center mt-3"},[a("div",{staticClass:"col-12 noContentBox align-self-center"},[a("h5",{staticClass:"mb-5"},[t._v("您的購物車目前是空的喔，趕快去挑選幾位盆栽好朋友吧！")]),a("router-link",{staticClass:"btn btn-secondary",attrs:{to:"/products"}},[t._v("繼續購物")])],1)])])])])],1)},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"progressBar my-3"},[a("ul",{staticClass:"progressBarList"},[a("li",{staticClass:"active"},[t._v("確認購物車")]),a("li",[t._v("填寫訂購資料")]),a("li",[t._v("確認訂單並付款")]),a("li",[t._v("付款成功")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("td",{staticClass:"border-top-0",attrs:{scoped:"col"}},[a("span",{staticClass:"text-instructions mr-3"},[a("small",[t._v("消費金額達 999 元免運")])]),a("span",[t._v("運費")])])}],i=(a("99af"),a("4160"),a("159b"),{name:"Cart",data:function(){return{isLoading:!1,fullPage:!0,products:{},coupon:{},coupon_code:"",carts:{},cartTotal:0,quantityTatol:0,orignalTotal:0,uuid:"ea556ec5-4643-415e-96a7-36c78142eb82"}},created:function(){this.getCart()},methods:{getCart:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/","api/").concat(this.uuid,"/ec/shopping");this.$http.get(s).then((function(s){t.carts=s.data.data,t.calTotal(),t.isLoading=!1})).catch((function(s){t.isLoading=!1,t.$bus.$emit("message:push","資料讀取失敗，請稍後再試\n            ".concat(s),"danger")}))},calTotal:function(){var t=0,s=0;this.carts.forEach((function(a){t+=a.product.price*a.quantity,s+=a.quantity})),this.cartTotal=t,this.quantityTatol=s},updateQuantity:function(t,s){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat(this.uuid,"/ec/shopping"),n={product:t,quantity:s};this.$http.patch(e,n).then((function(){a.isLoading=!1,a.getCart()}))},removeCartItem:function(t){var s=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/","api/").concat(this.uuid,"/ec/shopping/").concat(t);this.$http.delete(a).then((function(){s.$bus.$emit("update-total"),s.getCart(),s.isLoading=!1,s.$bus.$emit("message:push","商品已刪除","success")})).catch((function(t){s.isLoading=!1,s.$bus.$emit("message:push","商品刪除失敗\n          ".concat(t),"danger")}))},removeAllCartItem:function(){var t=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/","api/").concat(this.uuid,"/ec/shopping/all/product");this.$http.delete(s).then((function(){t.$bus.$emit("update-total"),t.getCart(),t.cartTotal=0,t.isLoading=!1,t.$bus.$emit("message:push","商品已全部刪除，將返回產品頁面","success"),t.$router.push("/products")})).catch((function(s){t.isLoading=!1,t.$bus.$emit("message:push","商品刪除失敗\n          ".concat(s),"danger")}))}}}),c=i,o=a("2877"),r=Object(o["a"])(c,e,n,!1,null,null,null);s["default"]=r.exports},"99af":function(t,s,a){"use strict";var e=a("23e7"),n=a("d039"),i=a("e8b5"),c=a("861d"),o=a("7b0b"),r=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),p=a("b622"),f=a("2d00"),v=p("isConcatSpreadable"),h=9007199254740991,C="Maximum allowed index exceeded",g=f>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!c(t))return!1;var s=t[v];return void 0!==s?!!s:i(t)},y=!g||!m;e({target:"Array",proto:!0,forced:y},{concat:function(t){var s,a,e,n,i,c=o(this),d=u(c,0),p=0;for(s=-1,e=arguments.length;s<e;s++)if(i=-1===s?c:arguments[s],b(i)){if(n=r(i.length),p+n>h)throw TypeError(C);for(a=0;a<n;a++,p++)a in i&&l(d,p,i[a])}else{if(p>=h)throw TypeError(C);l(d,p++,i)}return d.length=p,d}})}}]);
//# sourceMappingURL=chunk-ce7a6e26.b2cdabaf.js.map