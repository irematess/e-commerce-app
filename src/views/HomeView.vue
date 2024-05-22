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
const sort = ref()

function handleChangePage(pageNumber) {
  page.value = pageNumber
  console.log('degis artık')
  console.log(page.value)
}
const fetchPage = () => {
  fetchProductsPage(page.value, sort.value).then((data) => productsPage.value = data)
}
onMounted(() => {
  fetchPage() 
  fetchTopSellerProducts().then((data) => (topSellerproducts.value = data))
  fetchProducts().then((data) => (products.value = data))
    
})

watch(() => page.value, fetchPage)
watch(() => sort.value, fetchPage)

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
    <div class="container mx-auto mt-8 -mb-16">
      <select v-model="sort"  class="border-2 border-black">
        <option disabled value="" >Varsayılan Sıralama</option>
        <option value="title" >A-Z</option>
        <option value="-title">Z-A</option>
        <option value="price">Artan Fiyat</option>
        <option value="-price">Azalan Fiyat</option>
        <option value="topSeller">Çok Satanlar</option>
      </select>
    </div>
    <ProductList :products="productsPage?.data" />
    <Pagination @changePage="handleChangePage" :productsPage="productsPage"/>
  </div>
</template>
