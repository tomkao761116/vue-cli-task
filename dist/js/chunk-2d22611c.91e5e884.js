(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22611c"],{e6a6:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("Navbar"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("Sidebar"),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-md-4",attrs:{role:"main"}},[t.checkSuccess?s("router-view",{attrs:{token:t.token}}):t._e()],1)],1)])],1)},n=[],i=(s("ac1f"),s("5319"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"},[s("a",{staticClass:"navbar-brand col-md-3 col-lg-2 mr-0 px-3 ",attrs:{href:"#"}},[t._v("Aiden's Garden 管理後台")]),t._m(0),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.signOut(a)}}},[t._v("登出")])])])])])}),c=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler position-absolute d-md-none collapsed",attrs:{type:"button","data-toggle":"collapse","data-target":"#sidebarMenu","aria-controls":"sidebarMenu","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],l={name:"Navbar",data:function(){return{}},methods:{signOut:function(){this.$cookies.remove("token"),this.$bus.$emit("message:push","登出成功","success"),this.$router.push("/login")}}},o=l,r=s("2877"),u=Object(r["a"])(o,i,c,!1,null,null,null),d=u.exports,v=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse",attrs:{id:"sidebarMenu"}},[s("div",{staticClass:"sidebar-sticky pt-3"},[s("ul",{staticClass:"nav flex-column"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"backendProducts"}}},[t._v(" 商品管理 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Coupons"}}},[t._v(" 優惠卷列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Orders"}}},[t._v(" 訂單列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Images"}}},[t._v(" 圖片列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Index"}}},[t._v(" 回到前台 ")])],1)])])])])},m=[],h={name:"Sidebar",data:function(){return{}}},p=h,k=Object(r["a"])(p,v,m,!1,null,null,null),b=k.exports,f={name:"Dashboard",components:{Navbar:d,Sidebar:b},data:function(){return{token:"",uuid:"ea556ec5-4643-415e-96a7-36c78142eb82",checkSuccess:!1}},created:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1"),console.log(this.token);var a="".concat("https://course-ec-api.hexschool.io/","api/auth/check");this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token),this.$http.post(a,{api_token:this.token}).then((function(a){console.log(a),a.data.success&&(t.checkSuccess=!0)})).catch((function(a){t.$bus.$emit("message:push","發生錯誤，請重新登入\n          ".concat(a,".data.message}"),"danger"),t.$router.push("/login")}))}},g=f,C=Object(r["a"])(g,e,n,!1,null,null,null);a["default"]=C.exports}}]);
//# sourceMappingURL=chunk-2d22611c.91e5e884.js.map