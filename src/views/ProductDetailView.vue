<script setup>
import { ref, onMounted } from 'vue'
import { fetchProductsDetail } from '@/services/ProductService'

import { useRoute } from 'vue-router'
import ProductGallery from '@/components/ProductGallery.vue'
import ProductAttribute from '@/components/ProductAttribute.vue'
import Seller from '@/components/Seller.vue'

const route = useRoute()

const product = ref()

onMounted(() => {
  fetchProductsDetail(route.params.productId).then((data) => (product.value = data))
})
</script>
<template>
  <div v-if="product" class="container mx-auto w-3/4 mt-8 text-zinc-500 text-xs font-normal">
    <router-link to="/" class="mr-2">Anasayfa</router-link>
    <i class="fa-solid fa-chevron-right text-red-500 mr-2"></i>
    <router-link :to="`/category/${product.categoryId}`" class="text-zinc-800 ml-1">{{
      product.category.title
    }}</router-link>
  </div>
  <div
    v-if="product"
    class="grid grid-cols-3 gap-3 container justify-center items-center mx-20 w-screen"
  >
    <ProductGallery :images="[product.thumbnail, ...product.images]" />
    <ProductAttribute :product="product" />
    <Seller :seller="product.seller" />
  </div>
</template>
