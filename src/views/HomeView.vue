<script setup>
import { fetchProducts } from '@/services/ProductService.js'
import { onMounted, ref, watch } from 'vue'
import Product from '@/components/Product.vue'

const products = ref()
const gridNumber = ref(['four'])

const fetchPage = () => {
  fetchProducts().then((data) => (products.value = data))
}
onMounted(() => {
  fetchPage()
})

watch(() => gridNumber, fetchPage)
</script>
<template>
  <div class="container mx-auto w-4/5 py-8 font-thin justify-end text-end gap-2 flex">
    <input
      type="radio"
      id="three"
      value="three"
      v-model="gridNumber"
      class="checked:bg-red-500 indeterminate:bg-gray-300 in-range:bg-red-500"
    />
    <label for="three">3'lü |</label>
    <input type="radio" id="four" value="four" v-model="gridNumber" />
    <label for="four">4'lü |</label>
    <input type="radio" id="five" value="five" v-model="gridNumber" />
    <label for="five">5'li </label>
  </div>

  <div
    class="container mx-auto grid w-4/5 gap-8 py-8"
    v-if="products"
    :class="[
      { 'grid-cols-3 gap-16': gridNumber == 'three' },
      { 'grid-cols-4': gridNumber == 'four' },
      { 'grid-cols-5': gridNumber == 'five' }
    ]"
  >
    <Product
      v
      v-for="(product, index) in products"
      :key="index"
      :thumbnail="product.thumbnail"
      :seller_title="product.seller?.title"
      :title="product.title"
      :price="product.price"
      :topSeller="product.topSeller"
      :id="product.id"
    />
  </div>
</template>
<style scoped>
input[type='radio'] {
  padding: 10rem;
}
</style>
