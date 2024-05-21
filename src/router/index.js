import { createRouter, createWebHistory } from 'vue-router'
import CartView from '@/views/CartView.vue'
import CategoryView from '@/views/CategoryView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import SellerView from '@/views/SellerView.vue'
import TopSellerView from '@/views/TopSellerView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/product/:productId',
      name: 'productDetail',
      component: ProductDetailView
    },
    {
      path: '/category/cok-satanlar',
      name: 'cokSatanlar',
      component: TopSellerView
    },
    {
      path: '/category/:categoryId',
      name: 'categoryView',
      component: CategoryView
    },
    {
      path: '/seller/:sellerId',
      name: 'sellerView',
      component: SellerView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0,
      behavior: 'smooth'
     }
    
  }
})

export default router
