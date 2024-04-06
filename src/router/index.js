import { createRouter, createWebHistory } from 'vue-router'
// import MainLayout from '@/views/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: MainLayout
    // },
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
