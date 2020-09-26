import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // path 這個路徑是自己定義的
    component: () => import('../views/frontend/Home.vue'),
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
        path: '/order',
        name: 'Order',
        component: () => import('../views/frontend/Order.vue')
      },
      {
        path: '/checkout/:orderId',
        name: 'CheckOut',
        component: () => import('../views/frontend/CheckOut.vue')
      },
      {
        path: '/purchaseSuccessful/:orderId',
        name: 'PurchaseSuccessful',
        component: () => import('../views/frontend/PurchaseSuccessful.vue')
      },
      {
        path: '*', redirect: '/'
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
    name: 'Dashboard',
    component: () => import('../views/backend/Layout/Dashboard.vue'),
    children: [
      {
        path: 'products',
        name: 'backendProducts',
        component: () => import('../views/backend/Products.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/backend/Coupons.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/backend/Orders.vue'),
        meta: { requiresAuth: true }
      },
      {
        path: 'images',
        name: 'Images',
        component: () => import('../views/backend/Images.vue'),
        meta: { requiresAuth: true }
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  // 設定每次 router change 自動返回頁面頂端
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
