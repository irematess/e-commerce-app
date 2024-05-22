<script setup>
import { inject } from 'vue';

const favorite = inject('favorites')
</script>
<template>
    <div class=" border-b-[1px]">
        <div class="container mx-auto flex justify-between items-center">
            <div class=" flex gap-4 text-lg  ">
                <span class="text-primary border-b-2 border-primary  py-4"><i class="fa-solid fa-heart mr-1"></i>Favorilerim</span>
                <span class=" py-4"><i class="fa-solid fa-bookmark mr-1 " > </i>Koleksiyonlarım</span>
            </div>
            <input
            class="flex w-1/5 p-2 bg-[#F3F3F3] focus:outline-primary px-4 py-3 rounded-md"
            placeholder="Favorilerde ara"
            maxlength="50"
            />
        </div>
       
        <div class="container mx-auto grid grid-cols-5 gap-4">
        <div v-for="(product, index) in favorite" :key="index" >
            <router-link :to="`/product/${product.id}`">
            <div class="card border-[1px] rounded-md h-full flex flex-col pb-2">
                <figure class="h-2/3 relative">
                    <img src="../assets/en-cok-satan.webp" alt="" class="absolute w-20 m-2" v-if="product.topSeller" />
                    <img :src="product.thumbnail" alt="" class="h-full w-full" />
                </figure>
                <p class="px-2 pt-2 font-normal">
                <span class="font-bold">{{ product.seller_title }}</span>
                {{ product.title }}
      </p>
      <p class="text-primary px-2">{{ product.price }} TL</p>
    </div>

  </router-link>
        
        </div>
    </div>

    </div>
  
</template>