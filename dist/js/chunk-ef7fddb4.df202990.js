(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef7fddb4"],{"81b1":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),i("div",{staticClass:"container"},[i("main",{attrs:{role:"main"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row",attrs:{id:"productsList"}},t._l(t.products,(function(a){return i("div",{key:a.id,staticClass:"col-md-4"},[i("div",{staticClass:"card mb-4 shadow-sm",attrs:{"data-id":a.id}},[i("router-link",{attrs:{to:"/product/"+a.id}},[i("span",{attrs:{"data-toggle":"tooltip",title:"了解商品"}},[i("img",{staticClass:"bd-placeholder-img card-img-top",attrs:{width:"100%",height:"350px",src:a.imageUrl[0],alt:"商品圖片"}})])]),i("div",{staticClass:"card-body"},[i("p",{staticClass:"productTitle text-left text-sensaicha font-weight-bold"},[t._v(t._s(a.title))]),i("p",{staticClass:"productDescription text-left card-text text-muted"},[t._v(t._s(a.content))]),i("div",{staticClass:"d-flex justify-content-between align-items-center"},[i("div",{staticClass:"price-group"},[i("small",{staticClass:"orignal-price text-muted mr-1"},[t._v("NT. "),i("span",[t._v(t._s(a.origin_price))])]),i("span",{staticClass:"activity-price text-sensaicha"},[t._v("NT. "),i("span",[t._v(t._s(a.price))])])]),i("div",{staticClass:"action-group"},[i("span",{attrs:{"data-toggle":"tooltip",title:"加入購物車"}},[i("a",{staticClass:"text-sensaicha p-1",attrs:{href:"#"}},[i("font-awesome-icon",{attrs:{icon:"shopping-cart"}})],1)])])])])],1)])})),0)])])])],1)},s=[],c=(i("99af"),{data:function(){return{isLoading:!1,fullPage:!0,products:[]}},created:function(){var t=this;this.isLoading=!0,console.log("UUID","ea556ec5-4643-415e-96a7-36c78142eb82"),console.log("APIPATH","https://course-ec-api.hexschool.io/"),this.$http.get("".concat("https://course-ec-api.hexschool.io/","api/").concat("ea556ec5-4643-415e-96a7-36c78142eb82","/ec/products")).then((function(a){t.isLoading=!1,console.log(a),t.products=a.data.data}))}}),o=c,n=i("2877"),r=Object(n["a"])(o,e,s,!1,null,null,null);a["default"]=r.exports},"99af":function(t,a,i){"use strict";var e=i("23e7"),s=i("d039"),c=i("e8b5"),o=i("861d"),n=i("7b0b"),r=i("50c4"),d=i("8418"),l=i("65f0"),p=i("1dde"),u=i("b622"),f=i("2d00"),g=u("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",m=f>=51||!s((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=p("concat"),x=function(t){if(!o(t))return!1;var a=t[g];return void 0!==a?!!a:c(t)},C=!m||!b;e({target:"Array",proto:!0,forced:C},{concat:function(t){var a,i,e,s,c,o=n(this),p=l(o,0),u=0;for(a=-1,e=arguments.length;a<e;a++)if(c=-1===a?o:arguments[a],x(c)){if(s=r(c.length),u+s>h)throw TypeError(v);for(i=0;i<s;i++,u++)i in c&&d(p,u,c[i])}else{if(u>=h)throw TypeError(v);d(p,u++,c)}return p.length=u,p}})}}]);
//# sourceMappingURL=chunk-ef7fddb4.df202990.js.map