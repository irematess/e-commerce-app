<script setup>
import { ref } from 'vue'
import Product from './Product.vue'

const gridNumber = ref('five')

const props = defineProps({
  products: { type: Object }
})
</script>

<template>
  <div class="container mx-auto py-8 font-thin justify-end text-end gap-2 flex" v-if="products">
    <input type="radio" id="fşve" value="five" v-model="gridNumber" />
    <label for="three">5'li |</label>
    <input type="radio" id="six" value="six" v-model="gridNumber" />
    <label for="four">6'lı |</label>
    <input type="radio" id="seven" value="seven" v-model="gridNumber" />
    <label for="seven">7'li </label>
  </div>
  <div
    class="container mx-auto grid gap-8 py-8"
    v-if="products"
    :class="[
      { 'grid-cols-5 gap-20': gridNumber == 'five' },
      { 'grid-cols-6': gridNumber == 'six' },
      { 'grid-cols-7': gridNumber == 'seven' }
    ]"
  >
    <Product
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
