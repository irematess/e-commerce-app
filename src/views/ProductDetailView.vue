<script setup>
import { ref, onMounted } from 'vue'
import { fetchProductsDetail } from '@/services/ProductService'
import { useRoute } from 'vue-router'
import ProductGallery from '@/components/ProductGallery.vue'
import ProductAttribute from '@/components/ProductAttribute.vue'

const route = useRoute()

const product = ref()

onMounted(() => {
  fetchProductsDetail(route.params.productId).then((data) => (product.value = data))
})
</script>
<template>
  <div v-if="product" class="grid grid-cols-3 container justify-center items-center mx-20">
    <ProductGallery :images="[product.thumbnail, ...product.images]" />
    <ProductAttribute :product="product" />
  </div>
</template>
