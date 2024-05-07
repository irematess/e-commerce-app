<script setup>
import { ref, onMounted } from 'vue'
import { fetchSellerProduct } from '@/services/SellerService'
import { fetchSeller } from '@/services/SellerService'
import { useRoute } from 'vue-router'
import ProductList from '@/components/ProductList.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const route = useRoute()
const seller = ref()
const products = ref()
onMounted(() => {
  fetchSellerProduct(route.params.sellerId).then((data) => (products.value = data)),
    fetchSeller(route.params.sellerId).then((data) => (seller.value = data))
})
</script>
<template>
  <Breadcrumb
    :paths="[
      { path: '/', name: 'Anasayfa ' },
      { path: `/seller/${seller?.id}`, name: seller?.title }
    ]"
  />
  <div
    v-if="seller"
    class="container flex flex-row mx-auto py-4 bg-[#1642ba7b] mt-8 rounded-md justify-start items-center pl-4"
  >
    <figure class="">
      <img :src="seller.thumbnail" alt="" class="h-16 rounded-full mr-2" />
    </figure>
    <div>
      {{ seller.title }}
      <span
        class="bg-[#38C400] text-white rounded-md p-[1px] mx-4 px-2"
        :class="[
          { 'bg-red-500': seller.raiting > 0 && seller.raiting <= 3 },
          { 'bg-orange-500': seller.raiting > 3 && seller.raiting <= 7 },
          { 'bg-[#38C400]': seller.raiting > 7 && seller.raiting <= 10 }
        ]"
        >{{ seller.raiting }}</span
      >
    </div>
  </div>
  <div class="container mx-auto" v-if="products">
    <ProductList :products="products" />
  </div>
</template>
