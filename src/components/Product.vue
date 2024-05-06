<script setup>
const props = defineProps({
  thumbnail: { type: String },
  seller_title: { type: String, required: false, default: 'Trendyol' },
  title: { type: String },
  price: { type: Number },
  topSeller: { type: Boolean },
  id: { type: String }
})
</script>
<template>
  <router-link :to="`/product/${id}`">
    <div class="card border-[1px] rounded-md h-full flex flex-col pb-2">
      <figure class="h-2/3 relative">
        <img src="../assets/en-cok-satan.webp" alt="" class="absolute w-20 m-2" v-if="topSeller" />
        <img :src="thumbnail" alt="" class="h-full w-full" />
      </figure>

      <p class="px-2 pt-2 font-normal">
        <span class="font-bold">{{ seller_title }}</span>
        {{ title }}
      </p>
      <p class="text-primary px-2">{{ price }} TL</p>
    </div>
  </router-link>
</template>
<style></style>
