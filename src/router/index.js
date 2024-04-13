import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import CategoryView from '@/views/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:productId',
      name: 'productDetail',
      component: ProductDetailView
    },
    {
      path: '/category/:categoryId',
      name: 'categoryView',
      component: CategoryView
    }
  ]
})

export default router
