<script setup>
import { fetchTopSeller } from '@/services/ProductService'
import { ref, onMounted } from 'vue'
import Product from '@/components/Product.vue'
import ProductList from '@/components/ProductList.vue'

const products = ref()

onMounted(() => {
  fetchTopSeller().then((data) => (products.value = data))
})
</script>
<template>
  <div class="container mx-auto py-8">
    <ProductList :products="products" />
  </div>
</template>
