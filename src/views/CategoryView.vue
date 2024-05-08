<script setup>
import { fetchCategoryDetail, fetchCategoryProduct } from '@/services/CategoryService'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductList from '@/components/ProductList.vue'
import { fetchProducts } from '@/services/ProductService'
import Breadcrumb from '@/components/Breadcrumb.vue'

const categoryProducts = ref([])
const category = ref()
const productsTopSeller = ref()
const route = useRoute()

const fetchPage = () => {
  fetchCategoryProduct(route.params.categoryId).then((data) => (categoryProducts.value = data)),
    fetchProducts().then((data) => (productsTopSeller.value = data)),
    fetchCategoryDetail(route.params.categoryId).then((data) => (category.value = data))
}
onMounted(() => {
  fetchPage()
})
watch(() => route.params.categoryId, fetchPage)
</script>
<template>
  <Breadcrumb
    :paths="[
      { path: '/', name: 'Anasayfa ' },
      { path: `/category/${category?.id}`, name: category?.title }
    ]"
  />
  <div v-if="categoryProducts?.length == 0" class="justify-center items-center text-center py-16">
    <i class="fa-solid fa-cart-shopping text-9xl text-center mb-8"></i>
    <p>Bu kategoriye ait ürün bulunamadı</p>
  </div>
  <div v-else>
    <div class="container mx-auto pt-8 -mb-14">
      <h1>
        "{{ category?.title }}" kategorisi için {{ categoryProducts.length }} sonuç listeleniyor
      </h1>
    </div>
    <ProductList :products="categoryProducts" />
  </div>
</template>
