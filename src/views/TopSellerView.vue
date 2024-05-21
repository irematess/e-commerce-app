<script setup>
import { fetchTopSeller } from '@/services/ProductService'
import { ref, onMounted, watch } from 'vue'
import ProductList from '@/components/ProductList.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Pagination from '@/components/Pagination.vue'
const products = ref()
const page = ref(1)

function handleChangePage(pageNumber) {
  page.value = pageNumber
  console.log('degis artık')
  console.log(page.value)
}

onMounted(() => {
  fetchTopSeller(page.value).then((data) => (products.value = data))
})
watch(() => page.value, fetchTopSeller(page.value))
</script>
<template>
  <Breadcrumb
    :paths="[
      { path: '/', name: 'Anasayfa ' },
      { path: `/category/cok-satanlar`, name: 'Çok Satanlar' }
    ]"
  />
  <div class="container mx-auto -mt-8">
    <ProductList :products="products?.data" />
  </div>
  <Pagination @changePage="handleChangePage" :productsPage="products"/>
</template>
