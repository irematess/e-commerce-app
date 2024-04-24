<script setup>
import Product from '@/components/Product.vue'
import { ref, onMounted } from 'vue'
import { fetchSellerProduct } from '@/services/SellerService'
import { fetchSeller } from '@/services/SellerService'
import { useRoute } from 'vue-router'

const route = useRoute()
const seller = ref()
const products = ref()
onMounted(() => {
  fetchSellerProduct(route.params.sellerId).then((data) => (products.value = data)),
    fetchSeller(route.params.sellerId).then((data) => (seller.value = data))
})
</script>
<template>
  <div
    v-if="seller"
    class="container flex flex-row mx-auto w-3/4 py-4 bg-[#1642ba7b] mt-8 rounded-md justify-start items-center pl-4"
  >
    <figure class="">
      <img src="https://picsum.photos/200" alt="" class="h-16 rounded-full mr-2" />
    </figure>
    <div>
      {{ seller.title }}
      <span class="bg-[#38C400] text-white rounded-md p-[1px] mx-4 px-2">{{ seller.rating }}</span>
    </div>
  </div>
  <div class="container mx-auto grid grid-cols-5 w-3/4 gap-10 py-8" v-if="products">
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
