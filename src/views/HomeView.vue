<script setup>
import { fetchTopSellerProducts } from '@/services/ProductService'
import { fetchProducts } from '@/services/ProductService'
import { fetchProductsPage } from '@/services/ProductService'
import { onMounted, ref, watch } from 'vue'
import Product from '@/components/Product.vue'
import ProductList from '@/components/ProductList.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Pagination from '@/components/Pagination.vue'

const topSellerproducts = ref()
const products = ref()
const productsPage = ref()
const page = ref(1)


function handleChangePage(pageNumber) {
  page.value = pageNumber
  console.log('degis artık')
  console.log(page.value)
}
const fetchPage = () => {
  fetchProductsPage(page.value).then((data) => productsPage.value = data)
}
onMounted(() => {
  fetchTopSellerProducts().then((data) => (topSellerproducts.value = data)),
    fetchProducts().then((data) => (products.value = data)),
    fetchPage()
})

watch(() => page.value, fetchPage)
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
    <ProductList :products="productsPage?.data" />
    <!-- <div class="flex container mx-auto justify-center gap-1 items-center">
      <div class="p-1 border-2 rounded-lg" @click="handleChangePage(productsPage?.prev)"><i class="fa-solid fa-chevron-left"></i></div>
      <div>{{ productsPage?.first }}</div>
      <div>{{ productsPage?.first + 1}}</div>
      <button v-for="(pageNumber, index) in productsPage?.pages " :key="index"
      class="border-2 p-1 rounded-lg"
      @click="handleChangePage(pageNumber)"
      >
      {{pageNumber}}</button>
      <div>...</div>
      <div>{{ productsPage?.last -1 }}</div>
      <div>{{ productsPage?.last}}</div>
      <div class="p-1 border-2 rounded-lg" @click="handleChangePage(productsPage?.next)"><i class="fa-solid fa-chevron-right"></i></div>
    </div> -->
    <Pagination @changePage="handleChangePage" :productsPage="productsPage"/>
  </div>
</template>
