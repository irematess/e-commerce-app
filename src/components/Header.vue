<script setup>
import { fetchCategories } from '@/services/CategoryService'
import { onMounted, ref } from 'vue'

const categories = ref()

onMounted(async () => {
  const [reqErr, categoriesData] = await fetchCategories()
  if (reqErr) {
    console.log('hata')
  }
  categories.value = categoriesData
  
})
</script>

<template>
  <header
    class="flex flex-col mx-auto pt-2 text-[#999999] text-[12px] border-b-[1px] border-slate-200 justify-center items-center"
  >
    <div class="container flex justify-end items-center gap-6 text-xs font-normal">
      <a href="/">İndirim Kuponlarım</a>
      <a href="/">Trendyol'da Satış Yap</a>
      <a href="/">Hakkımızda</a>
      <a href="/">Yardım&Destek</a>
    </div>
    <div class="container flex items-center justify-around">
      <figure>
        <a href="/"><img src="../assets/ty-web.svg" alt="" class="w-36" /></a>
      </figure>
      <div
        class="flex items-center justify-center w-1/2 bg-[#F3F3F3] focus:outline rounded-md relative"
      >
        <input
          class="flex w-full p-2 bg-[#F3F3F3] focus:outline-primary px-4 py-3 rounded-md"
          placeholder="Aradığınız ürün, kategori veya markayı yazın"
          maxlength="50"
        />
        <i class="fa-solid fa-magnifying-glass text-primary absolute right-2"></i>
      </div>
      <div class="flex gap-8 text-black text-[13px] font-medium">
        <a href="/" class="hover:text-primary"><i class="fa-regular fa-user"></i> Hesabım</a>
        <a href="/" class="hover:text-primary"><i class="fa-regular fa-heart"></i> Favorilerim</a>
        <router-link to="/cart" class="hover:text-primary"
          ><i class="fa-solid fa-cart-shopping"></i> Sepetim
        </router-link>
      </div>
    </div>
    <nav class="container flex justify-around w-full text-black text-[14px] font-semibold py-2">
      <router-link
        :to="`/category/${category?.id}`"
        v-for="(category, index) in categories"
        :key="index"
        class="hover:text-primary"
      >
        <span
          v-if="category.id == 'cok-satanlar'"
          class="bg-red-500 text-white text-xs rounded-lg p-[1px] px-1 -ml-10"
          >Yeni</span
        >
        {{ category.title }}
      </router-link>
    </nav>
  </header>
</template>
