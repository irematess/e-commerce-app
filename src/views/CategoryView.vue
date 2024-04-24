<script setup>
import { fetchCategoryProduct } from '@/services/CategoryService'
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
  <div class="container mx-auto w-3/4 pt-6" v-if="category">
    <h1>
      "{{ category[1].category.title }}" kategorisi için {{ category.length }} sonuç listeleniyor
    </h1>
    <div class="container mx-auto grid grid-cols-5 w-full gap-10 py-8" v-if="category">
      <Product
        v-for="(product, index) in category"
        :key="index"
        :thumbnail="product.thumbnail"
        :seller_title="product.seller?.title"
        :title="product.title"
        :price="product.price"
        :topSeller="product.topSeller"
        :id="product.id"
      />
    </div>
  </div>
</template>
