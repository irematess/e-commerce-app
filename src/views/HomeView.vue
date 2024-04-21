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
  <div class="container mx-auto grid grid-cols-5 w-4/5 gap-8 py-8" v-if="products">
    <Product v v-for="(product, index) in products" :key="index" :product="product" />
  </div>
</template>
<style scoped></style>
