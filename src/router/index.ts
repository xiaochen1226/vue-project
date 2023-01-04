import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../components/layout/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    redirect: 'home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "home" */ '../views/home/index.vue')
      },
      {
        path: '/chat',
        name: 'chat',
        component: () =>
          import(/* webpackChunkName: "chat" */ '../views/chat/index.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () =>
          import(/* webpackChunkName: "cart" */ '../views/cart/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/user/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/user/login/index.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () =>
      import(
        /* webpackChunkName: "register" */ '../views/user/register/index.vue'
      )
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/product/index.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () =>
      import(
        /* webpackChunkName: "setting" */ '../views/user/setting/index.vue'
      )
  },
  {
    path: '/info',
    name: 'info',
    component: () =>
      import(/* webpackChunkName: "info" */ '../views/user/info/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
