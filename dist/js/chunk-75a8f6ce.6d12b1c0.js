(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75a8f6ce"],{1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],r={name:"Pagination",props:{pages:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{emitPages:function(t){this.$emit("emitPages",t)}}},n=r,c=e("2877"),l=Object(c["a"])(n,i,s,!1,null,null,null);a["a"]=l.exports},"81b1":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"container"},[e("main",{staticClass:"mt-5",attrs:{role:"main"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row position-relative"},[e("nav",{staticClass:"col-md-3",attrs:{id:"typeSideBar"}},[e("ul",{staticClass:"list-group sticky-top"},[e("li",{staticClass:"list-group-item p-xy-0"},[e("a",{staticClass:"list-btn active",attrs:{"data-toggle":"tab",href:"#"},on:{click:function(a){return a.preventDefault(),t.getFilter(t.filterType="All")}}},[t._v("全部商品")])]),e("li",{staticClass:"list-group-item p-xy-0"},[e("a",{staticClass:"list-btn",attrs:{"data-toggle":"tab",href:"#"},on:{click:function(a){return a.preventDefault(),t.getFilter(t.filterType="多肉植物")}}},[t._v("多肉植物")])]),e("li",{staticClass:"list-group-item p-xy-0"},[e("a",{staticClass:"list-btn",attrs:{"data-toggle":"tab",href:"#"},on:{click:function(a){return a.preventDefault(),t.getFilter(t.filterType="觀葉植物")}}},[t._v("觀葉植物")])]),e("li",{staticClass:"list-group-item p-xy-0"},[e("a",{staticClass:"list-btn",attrs:{"data-toggle":"tab",href:"#"},on:{click:function(a){return a.preventDefault(),t.getFilter(t.filterType="香草植物")}}},[t._v("香草植物")])])])]),e("div",{staticClass:"col-md-9",attrs:{id:"productsList"}},["All"===t.filterType|!t.filterType?e("h4",{staticClass:"dispaly-5 text-left"},[t._v(" 全部商品 ")]):e("h4",{staticClass:"dispaly-5 text-left"},[t._v(" "+t._s(t.filterType)+" ")]),e("hr"),e("div",{staticClass:"row justify-content-start"},[t._l(t.filterProducts,(function(a){return e("div",{key:a.id,staticClass:"col-md-4"},[e("div",{staticClass:"card mb-4 shadow-sm",attrs:{"data-id":a.id}},[e("img",{staticClass:"bd-placeholder-img card-img-top imagetoHover",attrs:{src:a.imageUrl[0],alt:"商品圖片"}}),e("div",{staticClass:"middleButton"},[e("router-link",{attrs:{to:"/product/"+a.id}},[e("div",{staticClass:"hoverText"},[t._v("查看商品")])])],1),e("div",{staticClass:"card-body"},[e("p",{staticClass:"productTitle text-left font-weight-bold"},[t._v(t._s(a.title))]),e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",{staticClass:"price-group"},[e("small",{staticClass:"orignal-price text-muted mr-1"},[t._v("NT. "),e("span",[t._v(t._s(t._f("currency")(a.origin_price)))])]),e("span",{staticClass:"activity-price"},[t._v("NT. "),e("span",[t._v(t._s(t._f("currency")(a.price)))])])]),e("div",{staticClass:"action-group"},[e("span",{attrs:{"data-toggle":"tooltip",title:"加入購物車"}},[e("a",{staticClass:"p-1",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addtoCart(a.id)}}},[e("i",{staticClass:"fas fa-shopping-cart"})])])])])])])])})),e("div",{staticClass:"col-md-12 d-flex justify-content-center"},[e("pagination",{staticClass:" mt-4",attrs:{pages:t.pagination},on:{"emit-pages":t.getProducts}})],1)],2)])])])])])],1)},s=[],r=(e("99af"),e("4de4"),e("4160"),e("159b"),e("1799")),n={data:function(){return{isLoading:!1,fullPage:!0,products:[],filterType:"",filterProducts:[],pagination:{},carts:{},uuid:"ea556ec5-4643-415e-96a7-36c78142eb82"}},components:{Pagination:r["a"]},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io/","api/").concat(this.uuid,"/ec/products?page=").concat(a)).then((function(a){t.isLoading=!1,t.products=a.data.data,t.filterProducts=t.products,t.pagination=a.data.meta.pagination;var e=t.$route.params.categoryName;e&&(t.filterType=e)}))},addtoCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io/","api/").concat(this.uuid,"/ec/shopping"),s={product:t,quantity:e};this.$http.post(i,s).then((function(){a.isLoading=!1,a.$bus.$emit("update-total"),a.$bus.$emit("message:push","已成功加入購物車","success")})).catch((function(t){var e=t.response.data.errors;e.forEach((function(t){a.isLoading=!1,a.$bus.$emit("message:push","加入購物車失敗\n            ".concat(t),"danger")}))}))},getFilter:function(){switch(this.filterType){case"All":this.filterProducts=this.products;break;case"多肉植物":this.filterProducts=this.products.filter((function(t){return"多肉植物"===t.category})),console.log(this.filterProducts);break;case"觀葉植物":this.filterProducts=this.products.filter((function(t){return"觀葉植物"===t.category}));break;case"香草植物":this.filterProducts=this.products.filter((function(t){return"香草植物"===t.category}));break;default:break}}}},c=n,l=e("2877"),o=Object(l["a"])(c,i,s,!1,null,null,null);a["default"]=o.exports},"99af":function(t,a,e){"use strict";var i=e("23e7"),s=e("d039"),r=e("e8b5"),n=e("861d"),c=e("7b0b"),l=e("50c4"),o=e("8418"),u=e("65f0"),d=e("1dde"),p=e("b622"),f=e("2d00"),g=p("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",m=f>=51||!s((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),C=d("concat"),b=function(t){if(!n(t))return!1;var a=t[g];return void 0!==a?!!a:r(t)},y=!m||!C;i({target:"Array",proto:!0,forced:y},{concat:function(t){var a,e,i,s,r,n=c(this),d=u(n,0),p=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?n:arguments[a],b(r)){if(s=l(r.length),p+s>h)throw TypeError(v);for(e=0;e<s;e++,p++)e in r&&o(d,p,r[e])}else{if(p>=h)throw TypeError(v);o(d,p++,r)}return d.length=p,d}})}}]);
//# sourceMappingURL=chunk-75a8f6ce.6d12b1c0.js.map