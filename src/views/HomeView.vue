<script setup>
import { fetchTopSellerProducts } from '@/services/ProductService'
import { fetchProducts } from '@/services/ProductService'
import { onMounted, ref, watch } from 'vue'
import Product from '@/components/Product.vue'
import ProductList from '@/components/ProductList.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const topSellerproducts = ref()
const products = ref()

onMounted(() => {
  fetchTopSellerProducts().then((data) => (topSellerproducts.value = data)),
    fetchProducts().then((data) => (products.value = data))
})
</script>
<template>
  <Breadcrumb :paths="[{ path: '/', name: 'Anasayfa ' }]" />
  <div class="py-8 mt-8">
    <div class="container mx-auto w-4/5 gap-8 pt-4 py-8 bg-[#f8dfdf5c] px-8 rounded-md">
      <div class="flex justify-between items-center text-xl font-medium pb-2">
        <h4 class="mb-2 text-xl font-medium">Çok Satan Ürünler</h4>
        <router-link to="/category/cok-satanlar"
          >Tüm Ürünler <i class="fa-solid fa-chevron-right"></i
        ></router-link>
      </div>

      <div class="grid grid-cols-5 gap-8 w-full">
        <Product
          v-for="(product, index) in topSellerproducts"
          :key="index"
          :thumbnail="product.thumbnail"
          :seller_title="product.seller?.title"
          :title="product.title"
          :price="product.price"
          :topSeller="product.topSeller"
          :id="product.id"
          class="bg-white"
        />
      </div>
    </div>
    <ProductList :products="products" />
  </div>
</template>
