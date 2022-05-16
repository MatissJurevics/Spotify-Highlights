import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homepage/HomeView.vue'
import Dashboard from "../views/dashboard/dashboard.vue"
import ProofOfConcept from "../views/poc/proofOfConcept.vue"

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
      children: [
        {
          path: 'poc',
          component: ProofOfConcept
        }
      ],
      component: Dashboard
    }
  ]
})

export default router
