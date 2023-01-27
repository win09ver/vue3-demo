import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '../components/L4/NotFound.vue'
import {
  Management,
  User,
  Histogram
} from '@element-plus/icons-vue'

export const HOME_VIEW = "HomeView"

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  {
    path: '/home',
    name: HOME_VIEW,
    component: () => import('../views/Home/HomeView.vue'),
    children: [
      {
        path: '/echarts',
        name: 'Echarts',
        meta: {
          title: "Echarts",
          icon: Histogram
        },
        component: () => import('../views/Home/HomeChildren/Echarts.vue')
      },
      {
        path: '/pay',
        name: 'Pay',
        meta: {
          title: "Pay",
          icon: Management
        },
        component: () => import('../views/Home/HomeChildren/Pay.vue')
      },
      {
        path: '/user-info',
        name: 'UserInfo',
        meta: {
          title: "UserInfo",
          icon: User
        },
        component: () => import('../views/Home/HomeChildren/UserInfo.vue'),
        children: [
          {
            path: '/user-info/user',
            name: 'User',
            meta: {
              title: "User",
              icon: ""
            },
            component: () => import('../views/Home/HomeChildren/User.vue')
          },
          {
            path: '/user-info/update',
            name: 'UpdateUser',
            meta: {
              title: "UpdateUser",
              icon: ""
            },
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
  { path: '/:notFound(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
