<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  product: { type: Object }
})
</script>
<template>
  <router-link :to="`/product/${product?.id}`">
    <div class="card border-[1px] rounded-md h-full flex flex-col pb-2">
      <figure class="h-2/3 relative">
        <img
          src="../assets/EnCokSatan_202012091129.webp"
          alt=""
          class="absolute w-20 m-2"
          v-if="product.topSeller"
        />
        <img :src="product?.thumbnail" alt="" class="h-full w-full" />
      </figure>

      <p class="px-2 pt-2 font-normal">
        <span class="font-bold">{{ product.seller?.title }}</span>
        {{ product?.title }}
      </p>
      <p class="text-[#F27A1A] px-2">{{ product?.price }} TL</p>
    </div>
  </router-link>
</template>
<style></style>
