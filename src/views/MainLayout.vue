<script setup>
import NavbarCategories from '@/components/NavbarCategories.vue'
</script>

<template>
  <div class="border-b-[1px] flex flex-col justify-center">
    <img
      src="../assets/web-product-detail-top-tr-TR-1711957500000-gz5ise9dk0b3psa50b14g4.webp"
      alt=""
    />
    <div class="container mx-auto flex flex-col items-center pt-2 text-[#999999] text-[12px] w-4/5">
      <header class="w-full">
        <div class="flex justify-end items-center gap-6 text-xs font-normal">
          <a href="/">İndirim Kuponlarım</a>
          <a href="/">Trendyol'da Satış Yap</a>
          <a href="/">Hakkımızda</a>
          <a href="/">Yardım&Destek</a>
        </div>
        <div class="flex items-center justify-between">
          <figure>
            <a href="/"><img src="../assets/ty-web.svg" alt="" class="w-36" /></a>
          </figure>
          <div
            class="flex items-center justify-between w-1/2 bg-[#F3F3F3] focus:outline rounded-md relative"
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
            <a href="/" class="hover:text-[#F27A1A]"
              ><i class="fa-regular fa-heart"></i> Favorilerim</a
            >
            <a href="/" class="hover:text-[#F27A1A]"
              ><i class="fa-solid fa-cart-shopping"></i> Sepetim
            </a>
          </div>
        </div>
      </header>
      <NavbarCategories class="my-2" />
    </div>
  </div>
  <RouterView />
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
body {
  font-family: 'Source Sans 3';
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input::placeholder {
  font-weight: 400;
  font-size: 0.9rem;
  color: #535252;
}
</style>
