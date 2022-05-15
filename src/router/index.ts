import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homepage/HomeView.vue'
import Dashboard from "../views/dashboard/dashboard.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

export default router
