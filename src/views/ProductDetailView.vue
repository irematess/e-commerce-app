<script setup>
import { ref, onMounted } from 'vue'
import { fetchProductsDetail } from '@/services/ProductService'
import { useRoute } from 'vue-router'
import ProductGallery from '@/components/ProductGallery.vue'

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
      <i class="fa-solid fa-chevron-right text-primary mr-2"></i>
      <router-link
        :to="`/category/${product.categoryId}`"
        class="ml-1 font-normal hover:underline"
        >{{ product.category.title }}</router-link
      >
      <i class="fa-solid fa-chevron-right text-primary mr-2"></i>
      <router-link :to="`/product/${product.id}`" class="ml-1 font-semibold hover:underline">{{
        product.title
      }}</router-link>
    </div>

    <div
      v-if="product"
      class="flex flex-row container justify-between items-start w-full mt-4 pb-64"
    >
      <ProductGallery
        :images="[product.thumbnail, ...product.images]"
        :topSeller="product.topSeller"
        class="w-2/6"
      />

      <div class="w-5/12">
        <div class="font-normal">
          <div class="border-b-[1px] border-slate-200 pb-6">
            <h2 class="text-xl">
              <span class="font-semibold">{{ seller_title }}</span>
              {{ product.title }}
            </h2>
            <p class="font-bold items-center flex gap-1">
              {{ product.raiting }}
              <i class="fa-solid fa-star text-slate-500 text-xs"></i>
              <i class="fa-solid fa-star text-slate-500 text-xs"></i>
              <i class="fa-solid fa-star text-slate-500 text-xs"></i>
              <i class="fa-solid fa-star text-slate-500 text-xs"></i>
              <i class="fa-solid fa-star text-slate-500 text-xs"></i>
            </p>
            <p class="text-xl font-bold text-primary mb-2">{{ product.price }} TL</p>
            <span class="bg-[#fa838318] p-1 rounded-md text-xs">Peşin Fiyatına 3 Taksit!</span>
          </div>
          <div class="flex text-center">
            <button class="bg-primary mt-4 w-10/12 py-4 text-white rounded-lg mr-2">
              Sepete Ekle
            </button>
            <button class="hover:text-primary">
              <i class="fa-regular fa-heart border-[1px] py-3 px-4 rounded-full text-2xl mt-4"></i>
            </button>
          </div>
          <div class="bg-slate-100 mt-4 px-1 py-1 mb-7 rounded-lg text-zinc-800">
            <i class="fa-solid fa-box mr-4 px-2"></i> Tahmini Kargoya Teslim: 3 gün içinde
          </div>
          <div class="flex flex-col mb-8">
            <span>Ürününüz için uygun fiyatlara ek hizmet seçebilirsiniz.</span>
            <div class="border-[1px] border-slate-300 p-2 rounded-xl flex flex-col gap-2">
              <span class="font-bold">
                <input type="checkbox" name="" id="" />
                trendyol<span class="text-primary">sigorta</span>
              </span>
              <span class="font-medium pl-4"
                >Kapsamlı Onarım Paketi <i class="fa-solid fa-circle-info mx-2 text-slate-400"></i>
                <span class="text-primary">185 TL</span></span
              >
              <span class="pl-4"
                ><span class="mr-2">·Ekran Tamiri</span
                ><span> ·Kaza,Sıvı Teması Onarımı</span></span
              >
            </div>
          </div>
          <h5 class="font-bold mb-2">Öne Çıkan Özellikler:</h5>
          <div class="grid grid-cols-4 gap-2">
            <div
              v-for="(attribute, index) in product.attributes"
              :key="index"
              class="bg-[#f27b1a1b] rounded-md flex flex-col justify-center items-center text-center p-1"
            >
              <span>{{ attribute.title }}</span>
              <span class="font-bold">{{ attribute.value }}</span>
            </div>
          </div>
          <p class="mt-8 text-md">{{ product.description }}</p>
        </div>
      </div>
      <Seller
        :title="product.seller?.title"
        :rating="product.seller?.rating"
        :id="product.seller?.id"
        class="w-2/12"
      />
    </div>
  </div>
</template>
