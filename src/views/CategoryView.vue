<script setup>
import { fetchCategoryProduct } from '@/services/ProductService'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Product from '@/components/Product.vue'

// const page = ref()
const category = ref()
const route = useRoute()

const fetchPage = () => {
  fetchCategoryProduct(route.params.categoryId).then((data) => (category.value = data))
}
onMounted(() => {
  fetchPage()
})
watch(() => route.params.categoryId, fetchPage)
</script>
<template>
  <div class="container mx-auto grid grid-cols-5 w-3/4 gap-10 py-8" v-if="category">
    <Product v-for="(product, index) in category" :key="index" :product="product" />
  </div>
</template>
