<script setup>
import { ref, onMounted } from 'vue'
import { fetchSellerProduct } from '@/services/SellerService'
import { fetchSeller } from '@/services/SellerService'
import { useRoute } from 'vue-router'
import ProductList from '@/components/ProductList.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import SellerRaiting from '@/components/SellerRaiting.vue'

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
      <SellerRaiting :rating="seller.raiting" />
    </div>
  </div>
  <div class="container mx-auto" v-if="products">
    <ProductList :products="products" />
  </div>
</template>
