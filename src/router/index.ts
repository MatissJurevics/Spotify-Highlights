import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homepage/HomeView.vue'
import Dashboard from "../views/dashboard/dashboard.vue"
import Proof from "../views/poc/proofOfConcept.vue"

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
      
    },
    {
      path: '/dashboard/proof',
      name: 'proof',
      component: Proof
    }
  ]
})

export default router
