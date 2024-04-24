<script setup>
import { ref, onMounted } from 'vue'
import { fetchProductsDetail } from '@/services/ProductService'
import { useRoute } from 'vue-router'
import ProductGallery from '@/components/ProductGallery.vue'
import ProductAttribute from '@/components/ProductAttribute.vue'
import Seller from '@/components/Seller.vue'

const route = useRoute()

const product = ref()

onMounted(() => {
  fetchProductsDetail(route.params.productId).then((data) => (product.value = data))
})
</script>
<template>
  <div v-if="product" class="container mx-auto mt-8 text[#333333] text-sm font-light w-4/5">
    <div class="flex items-center">
      <router-link to="/" class="mr-2 hover:underline">Anasayfa</router-link>
      <i class="fa-solid fa-chevron-right text-[#F27A1A] mr-2"></i>
      <router-link
        :to="`/category/${product.categoryId}`"
        class="ml-1 font-normal hover:underline"
        >{{ product.category.title }}</router-link
      >
      <i class="fa-solid fa-chevron-right text-[#F27A1A] mr-2"></i>
      <router-link :to="`/product/${product.id}`" class="ml-1 font-semibold hover:underline">{{
        product.title
      }}</router-link>
    </div>

    <div v-if="product" class="flex flex-row container justify-between items-start w-full mt-4">
      <ProductGallery
        :images="[product.thumbnail, ...product.images]"
        :topSeller="product.topSeller"
        class="w-2/6"
      />
      <ProductAttribute
        :seller_title="product.seller?.title"
        :title="product.title"
        :price="product.price"
        :rating="product.rating"
        :description="product.description"
        :attributes="product.attributes"
        class="w-5/12"
      />
      <Seller
        :title="product.seller?.title"
        :rating="product.seller?.rating"
        :id="product.seller?.id"
        class="w-2/12"
      />
    </div>
  </div>
</template>
