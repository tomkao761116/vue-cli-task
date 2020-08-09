import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/frontend/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // path 這個路徑是自己定義的
    name: 'Home',
    component: Home,
    children: [
      {
        path: '', // 有點不明白這邊空白的意思是...囧>
        name: 'Index',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/frontend/Index.vue')
      },
      {
        path: '/products',
        name: 'Products',
        component: () => import('../views/frontend/Products.vue')
      },
      { // 動態路由(路徑最後面加上一個 ":"，再加上一個參數的暱稱)
        path: '/product/:id',
        name: 'Product',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/frontend/About.vue')
      },
      {
        path: '/cart',
        name: 'Cart',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: '/checkout',
        name: 'CheckOut',
        component: () => import('../views/frontend/CheckOut.vue')
      },
      {
        path: '/confirmorder',
        name: 'ConfirmOrder',
        component: () => import('../views/frontend/ConfirmOrder.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/frontend/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin 頁面',
    component: () => import('../views/backend/Layout/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backend/Coupons.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/backend/Orders.vue')
      },
      {
        path: 'images',
        name: 'Images',
        component: () => import('../views/backend/Images.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
