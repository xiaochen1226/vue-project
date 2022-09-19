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
          import(/* webpackChunkName: "about" */ '../views/home/index.vue')
      },
      {
        path: '/chat',
        name: 'chat',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/chat/index.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/cart/index.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/user/index.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
