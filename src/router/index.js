import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Activate',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivateApp.vue')
  },
  {
    path: '/gifts',
    name: 'Gifts',
    component: () => import(/* webpackChunkName: "about" */ '../views/GiftsPage.vue')
  },
  {
    path: '/birthday-gift-link',
    name: 'GiftLink',
    component: () => import(/* webpackChunkName: "about" */ '../views/BirthdayLink.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
