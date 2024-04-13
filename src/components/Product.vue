<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  product: { type: Object }
})
</script>
<template>
  <router-link :to="`/product/${product?.id}`">
    <div class="card border-[1px] rounded-md h-full flex flex-col pb-2">
      <figure class="h-3/5">
        <img :src="product?.thumbnail" alt="" class="h-full w-full" />
      </figure>
      <div v-if="product?.topSeller" class="topSeller text-white text-center">
        En Çok Satan Ürünler
      </div>

      <p class="px-2 pt-2 font-normal">
        <span class="font-bold">{{ product.seller?.title }}</span>
        {{ product?.title }}
      </p>
      <p class="text-[#fe0059] px-2">{{ product?.price }} TL</p>
    </div>
  </router-link>
</template>
<style>
.topSeller {
  background: #fe0059;
  background: linear-gradient(90deg, rgba(254, 0, 89, 1) 0%, rgba(255, 142, 181, 1) 48%);
}
</style>
