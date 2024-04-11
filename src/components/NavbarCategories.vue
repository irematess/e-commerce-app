<script setup>
import { fetchCategories } from '@/services/ProductService.js'
import { onMounted, ref } from 'vue'

const categories = ref()
onMounted(() => {
  fetchCategories().then((data) => (categories.value = data))
})
</script>
<template>
  <nav class="flex justify-between w-full text-black text-[14px]">
    <a href="/" v-for="(category, index) in categories" :key="index" class="hover:text-[#fe0059]">{{
      category.title
    }}</a>
  </nav>
</template>
