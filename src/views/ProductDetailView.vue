<script setup>
import { fetchProductsDetail } from '@/services/ProductService'
import { ref, onMounted, inject } from 'vue'
import { useRoute } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Comments from '@/components/Comments.vue'
import ProductGallery from '@/components/ProductGallery.vue'
import Raiting from '@/components/Raiting.vue'
import Seller from '@/components/Seller.vue'


const route = useRoute()
const product = ref()
const cart = inject('cart')

onMounted(() => {
  fetchProductsDetail(route.params.productId).then((data) => (product.value = data))
})
</script>
<template>
  <Breadcrumb
    :paths="[
      { path: '/', name: 'Home ' },
      { path: `/category/${product?.category?.id}`, name: product?.category?.title },
      { path: `/product/${product?.id}`, name: product?.title }
    ]"
  />
  <div v-if="product" class="container mx-auto mt-8 text[#333333] text-sm font-light w-4/5">
    <div
      v-if="product"
      class="flex flex-row container justify-between items-start w-full mt-4 pb-20"
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
            <span class="flex gap-2 text-lg font-semibold items-center">
              <Raiting :value="product.raiting" />{{ product.raiting }}
            </span>

            <p class="text-xl font-bold text-primary mb-2">{{ product.price }} TL</p>
            <span class="bg-[#fa838318] p-1 rounded-md text-xs">Peşin Fiyatına 3 Taksit!</span>
          </div>
          <div class="flex text-center">
            <button class="bg-primary mt-4 w-10/12 py-4 text-white rounded-lg mr-2" @click="cart.push(product)">
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
              v-for="(attribute, index) in product.attributes.slice(0, 8)"
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
        :title="product?.seller?.title"
        :rating="product?.seller?.raiting"
        :id="product?.seller?.id"
        class="w-2/12"
      />
    </div>
    <!-- Comments -->
    <div class="container mx-auto flex flex-col w-full justify-start mb-36">
      <span class="text-start text-lg mb-2 text-black font-bold">Ürün Değerlendirmeleri</span>
      <div class="border-[1px] border-slate-200 w-full rounded-lg">
        <div
          class="flex items-center justify-between border-b-[1px] border-slate-200 py-8 px-4 text-2xl"
        >
          <div class="flex items-center">
            <Raiting :value="product.raiting" /><i class="fa-solid fa-chevron-down ml-2"></i>
          </div>
          <div>{{ product?.comments?.length }} Yorum</div>
        </div>
        <div>
          <div class="bg-slate-200 mx-2 my-3 p-2 rounded-lg flex justify-center items-center">
            <i class="fa-solid fa-person-dress m-1 p-1 rounded-full bg-primary px-2 text-white"></i
            >Kullanıcıların çoğu bedeninizi almanızı öneriyor
          </div>
        </div>
        <Comments
          v-for="(comment, index) in product?.comments"
          :key="index"
          :comments="comment"
          :seller_id="product.seller.id"
          class=""
        />
      </div>
    </div>
    <!-- Product Attribute -->
    <div class="container mx-auto mb-36">
      <span class="text-lg font-medium">Ürün Özellikleri</span>
      <div class="grid grid-cols-2 gap-4 border-[1px] border-slate-200 p-8 rounded-md">
        <div
          v-for="(attribute, index) in product.attributes.slice(0, 8)"
          :key="index"
          class="bg-[#f8b2781b] rounded-md flex flex-row justify-between px-4 py-3 items-center text-center p-1"
        >
          <span>{{ attribute.title }}</span>
          <span class="font-bold">{{ attribute.value }}</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>ürün bulunamadı</div>
</template>
