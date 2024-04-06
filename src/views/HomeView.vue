<script setup>
import { fetchProducts } from '@/services/ProductService.js'
import { onMounted, ref } from 'vue'
import Product from '@/components/Product.vue'

const products = ref()
onMounted(() => {
  fetchProducts().then((data) => (products.value = data))
})
</script>
<template>
  <div class="container mx-auto grid grid-cols-5 w-3/4 gap-10 py-8" v-if="products">
    <Product v v-for="(product, index) in products" :key="index" :product="product" />
  </div>
</template>
<style scoped>
.topSeller {
  background: rgb(254, 0, 89);
  background: linear-gradient(90deg, rgba(254, 0, 89, 1) 0%, rgba(255, 142, 181, 1) 48%);
}
</style>
