import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wien',
    name: 'Wien',
    component: () => import('../views/wien.vue')
  },
  {
    path: '/ARANZE',
    name: 'ARANZE',
    component: () => import('../views/aranze.vue')
  },
  {
    path: '/st',
    name: 'sharp&texture',
    component: () => import('../views/st.vue')
  },
  {
    path: '/whoami',
    name: 'whoami',
    component: () => import('../views/who am i.vue')
  },
  {
    path: '/modernism',
    name: 'modernism',
    component: () => import('../views/modernism.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
