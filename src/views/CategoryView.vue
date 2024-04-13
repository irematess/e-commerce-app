<script setup>
import { fetchCategoryProduct } from '@/services/ProductService'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Product from '@/components/Product.vue'

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
  <div class="container mx-auto w-3/4 pt-6">
    <h1>
      "{{ category[1].category.title }}" kategorisi için {{ category.length }} sonuç listeleniyor
    </h1>
    <div class="container mx-auto grid grid-cols-5 w-full gap-10 py-8" v-if="category">
      <Product v-for="(product, index) in category" :key="index" :product="product" />
    </div>
  </div>
</template>
