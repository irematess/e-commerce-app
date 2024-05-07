<script setup>
import { fetchTopSeller } from '@/services/ProductService'
import { ref, onMounted } from 'vue'
import ProductList from '@/components/ProductList.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const products = ref()

onMounted(() => {
  fetchTopSeller().then((data) => (products.value = data))
})
</script>
<template>
  <Breadcrumb
    :paths="[
      { path: '/', name: 'Anasayfa ' },
      { path: `/category/cok-satanlar`, name: 'Çok Satanlar' }
    ]"
  />
  <div class="container mx-auto -mt-8">
    <ProductList :products="products" />
  </div>
</template>
