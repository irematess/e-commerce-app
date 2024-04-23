<script setup>
import { fetchCategories } from '@/services/ProductService.js'
import { onMounted, ref } from 'vue'

const categories = ref()

onMounted(() => {
  fetchCategories().then((data) => (categories.value = data))
})
</script>

<template>
  <header class="container flex flex-col mx-auto pt-2 text-[#999999] text-[12px] border-b-[1px]">
    <div class="flex justify-end items-center gap-6 text-xs font-normal">
      <a href="/">İndirim Kuponlarım</a>
      <a href="/">Trendyol'da Satış Yap</a>
      <a href="/">Hakkımızda</a>
      <a href="/">Yardım&Destek</a>
    </div>
    <div class="flex items-center justify-around px-16">
      <figure>
        <a href="/"><img src="../assets/ty-web.svg" alt="" class="w-36" /></a>
      </figure>
      <div
        class="flex items-center justify-center w-1/2 bg-[#F3F3F3] focus:outline rounded-md relative"
      >
        <input
          class="flex w-full p-2 bg-[#F3F3F3] focus:outline-[#F27A1A] px-4 py-3 rounded-md"
          placeholder="Aradığınız ürün, kategori veya markayı yazın"
          maxlength="50"
        />
        <i class="fa-solid fa-magnifying-glass text-[#F27A1A] absolute right-2"></i>
      </div>
      <div class="flex gap-8 text-black text-[13px] font-medium">
        <a href="/" class="hover:text-[#F27A1A]"><i class="fa-regular fa-user"></i> Hesabım</a>
        <a href="/" class="hover:text-[#F27A1A]"><i class="fa-regular fa-heart"></i> Favorilerim</a>
        <a href="/" class="hover:text-[#F27A1A]"
          ><i class="fa-solid fa-cart-shopping"></i> Sepetim
        </a>
      </div>
    </div>
    <nav class="flex justify-between w-full text-black text-[14px] font-semibold px-28 py-2">
      <router-link
        :to="`/category/${category?.id}`"
        v-for="(category, index) in categories"
        :key="index"
        class="hover:text-[#F27A1A]"
        >{{ category.title }}
      </router-link>
    </nav>
  </header>
</template>
