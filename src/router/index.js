import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import NewUserData from '../components/NewUserData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-component',
      component: Home
    },
    {
      path: '/new',
      name: 'new-data-user',
      component: NewUserData
    }
  ]
})

export default router
