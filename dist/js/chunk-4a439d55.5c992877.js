(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a439d55"],{"99af":function(t,e,a){"use strict";var s=a("23e7"),n=a("d039"),o=a("e8b5"),r=a("861d"),i=a("7b0b"),u=a("50c4"),c=a("8418"),d=a("65f0"),l=a("1dde"),p=a("b622"),m=a("2d00"),f=p("isConcatSpreadable"),h=9007199254740991,v="Maximum allowed index exceeded",g=m>=51||!n((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),w=l("concat"),b=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},x=!g||!w;s({target:"Array",proto:!0,forced:x},{concat:function(t){var e,a,s,n,o,r=i(this),l=d(r,0),p=0;for(e=-1,s=arguments.length;e<s;e++)if(o=-1===e?r:arguments[e],b(o)){if(n=u(o.length),p+n>h)throw TypeError(v);for(a=0;a<n;a++,p++)a in o&&c(l,p,o[a])}else{if(p>=h)throw TypeError(v);c(l,p++,o)}return l.length=p,l}})},aa92:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container text-center"},[a("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("form",{staticClass:"form-signIn my-5",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Aiden's Garden")]),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),a("button",{staticClass:"btn btn-lg btn-info btn-block mt-5",attrs:{type:"submit"}},[t._v("登入")]),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2020 Aiden's Garden")])])],1)},n=[],o=(a("99af"),{name:"Login",data:function(){return{user:{email:"",password:""},isLoading:!1}},methods:{login:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/auth/login");this.$http.post(e,this.user).then((function(e){var a=e.data.token,s=e.data.expired;console.log(a,s),document.cookie="token=".concat(a,"; expires=").concat(new Date(1e3*s),";"),t.$bus.$emit("message:push","登入成功","success"),t.isLoading=!1,t.$router.push("/admin/products")})).catch((function(e){t.$bus.$emit("message:push","帳號或密碼錯誤，請重新登入\n            ".concat(e),"danger"),t.isLoading=!1}))}}}),r=o,i=a("2877"),u=Object(i["a"])(r,s,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-4a439d55.5c992877.js.map