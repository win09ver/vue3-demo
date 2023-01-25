import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '../components/L4/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/login' },
  { path: '/:notFound(.*)', component: NotFound },
  {
    path: '/home',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue')
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
