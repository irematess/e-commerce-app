<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  seller: { type: Object }
})
</script>
<template>
  <div class="w-2/4">
    <div class="bg-cyan-100 flex flex-col text-sm p-2 rounded-md gap-2">
      <span
        ><i class="fa-solid fa-file bg-sky-800 p-1 px-2 text-white mr-2 rounded-md"></i>Kurumsal
        Fatura</span
      >
      <span>Kurumsal Faturaya Uygun. <a href="/" class="text-sky-800">İncele ></a></span>
    </div>
    <p class="text-slate-400 font-normal text-sm mt-2">ÜRÜNÜN KAMPANYALARI</p>
    <div
      class="font-medium flex items-start justify-center p-2 border-2 border-slate-200 rounded-lg mt-2 text-xs gap-2"
    >
      <span><i class="fa-solid fa-box text-slate-800 bg-slate-200 p-2 rounded-md"></i></span>
      <span><span>200TL ve Üzeri Kargo Bedava</span> <span>(Satıcı Karşılar)</span></span>
      <span>></span>
    </div>
    <div class="border-[1px] border-slate-300 mt-4 rounded-lg px-2 pb-4 relative">
      <div
        class="bg-cyan-100 text-sm mt-4 py-2 justify-start items-center flex text-center px-2 rounded-md"
      >
        <div class="text-sky-800 text-center">
          <span>{{ seller.title }}</span>
          <span class="bg-[#38C400] text-white rounded-md p-[1px] mx-4 px-2">{{
            seller.rating
          }}</span>
          <i><i class="fa-solid fa-circle-info"></i></i>
        </div>
      </div>
      <div class="text-xs text-zinc-800 mt-4">
        <i class="fa-solid fa-gift bg-slate-200 p-1 rounded-md"></i> Takip Et Kazan
      </div>
      <div class="text-xs text-zinc-800 mt-2">
        <i class="fa-solid fa-message bg-slate-200 p-1 rounded-md"></i> Satıcı Soruları
      </div>
      <button
        class="absolute z-50 inset-x-12 text-zinc-800 bg-red-100 rounded-xl w-2/3 mt-1 py-2 px-2"
      >
        <router-link :to="`/${seller.id}`">MAĞAZAYA GİT ></router-link>
      </button>
    </div>
    <div class="bg-red-100 mt-10 p-2 text-xs flex justify-between items-center rounded-md">
      <span
        ><i class="fa-solid fa-bookmark bg-[#FE0000] p-2 rounded-md mr-2 text-white"></i>
        Koleksiyona Ekle</span
      >
      <span>+</span>
    </div>
  </div>
</template>
