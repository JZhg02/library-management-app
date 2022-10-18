import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/library',
    name: 'library',
    component: () => import('../views/MyLibrary.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
