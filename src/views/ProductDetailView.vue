<template>
  <div v-if="product" class="flex container mx-auto justify-center">
    <ProductGallery :images="[product.thumbnail, ...product.images]" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchProductsDetail } from '@/services/ProductService'
import { useRoute } from 'vue-router'
import ProductGallery from '@/components/ProductGallery.vue'

const route = useRoute()

const product = ref()

onMounted(() => {
  fetchProductsDetail(route.params.productId).then((data) => (product.value = data))
})
</script>
