<script setup>
import { fetchCategoryProduct } from '@/services/CategoryService'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import Product from '@/components/Product.vue'
import { fetchProducts } from '@/services/ProductService'

const category = ref()
const productsTopSeller = ref()
const route = useRoute()
const gridNumber = ref(['five'])

const fetchPage = () => {
  fetchCategoryProduct(route.params.categoryId).then((data) => (category.value = data)),
    fetchProducts().then((data) => (productsTopSeller.value = data))
}
onMounted(() => {
  fetchPage()
})
watch(() => route.params.categoryId, fetchPage)
watch(() => gridNumber, fetchPage)
</script>
<template>
  <div class="container mx-auto w-3/4 pt-6" v-if="category">
    <h1 v-if="category.length > 0">
      "{{ category[0].category.title }}" kategorisi için {{ category.length }} sonuç listeleniyor
    </h1>
    <div class="container mx-auto w-full font-thin justify-end text-end gap-2 flex">
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
      class="container mx-auto grid w-full gap-10 py-8"
      v-if="category"
      :class="[
        { 'grid-cols-3 gap-16': gridNumber == 'three' },
        { 'grid-cols-4': gridNumber == 'four' },
        { 'grid-cols-5': gridNumber == 'five' }
      ]"
    >
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
    <div
      v-if="category.length == 0 && !(route.params.categoryId == 'cok-satanlar')"
      class="justify-center items-center text-center py-16"
    >
      <i class="fa-solid fa-cart-shopping text-9xl text-center mb-8"></i>
      <p>Bu kategoriye ait ürün bulunamadı</p>
    </div>
    <div
      v-if="route.params.categoryId == 'cok-satanlar'"
      class="container mx-auto grid grid-cols-5 w-full gap-10 py-8"
    >
      <Product
        v-for="(product, index) in productsTopSeller.filter((product) => product.topSeller)"
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
