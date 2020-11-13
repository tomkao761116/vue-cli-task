import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jquery from 'jquery'
import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend
} from 'vee-validate' // 驗證套件
import * as rules from 'vee-validate/dist/rules' // 規則檔案（ex: email...）
import zhTW from 'vee-validate/dist/locale/zh_TW.json' // 語系檔案
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
// Import component
import Loading from 'vue-loading-overlay'
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css'

// Import vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/css/swiper.css'

// Bus
import './bus'
// Import VueCookies
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router'
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'

import '../src/assets/all.css'
import '../src/assets/stepProgressbar.scss'

window.$ = jquery

Vue.use(VueRouter)
// 將套件宣告成全域元件
// 將套件加入到 Vue 的藍圖內
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)

Vue.use(Loading)
Vue.component('Loading', Loading)

Vue.use(VueCookies)
Vue.use(VueAwesomeSwiper)

// vee-validate
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
}) // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})
localize('tw', zhTW)
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
