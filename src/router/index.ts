import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '../components/L4/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  { path: '/:notFound(.*)', component: NotFound },
  {
    path: '/home',
    name: 'HomeView',
    component: () => import('../views/Home/HomeView.vue'),
    children: [
      {
        path: '/echarts',
        name: 'Echarts',
        component: () => import('../views/Home/HomeChildren/Echarts.vue')
      },
      {
        path: '/pay',
        name: 'Pay',
        component: () => import('../views/Home/HomeChildren/Pay.vue')
      },
      {
        path: '/user-info',
        name: 'UserInfo',
        component: () => import('../views/Home/HomeChildren/UserInfo.vue'),
        children: [
          {
            path: '/user-info/user',
            name: 'User',
            component: () => import('../views/Home/HomeChildren/User.vue')
          },
          {
            path: '/user-info/update',
            name: 'UpdateUser',
            component: () => import('../views/Home/HomeChildren/UpdateUser.vue')
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
