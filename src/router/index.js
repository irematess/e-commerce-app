import { createRouter, createWebHistory } from 'vue-router'
// import MainLayout from '@/views/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:productId',
      name: 'productDetail',
      component: ProductDetailView
    }
  ]
})

export default router
