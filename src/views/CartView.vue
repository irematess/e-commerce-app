<script setup>
import { inject, ref } from "vue";
import SellerRaiting from '@/components/SellerRaiting.vue'
const cart = inject('cart')
const piece = ref(1)

function handleAddItem(product) {   
    cart.push(product) 
}

</script>
<template>
    <div class="container mx-auto py-6 flex justify-center gap-4">
        <div class=" flex flex-col gap-2">
            <p class="text-2xl text-black mb-6">Sepetim ({{ cart.length }} Ürün)</p>
            <div v-for="(product, index) in cart" :key="index" class="w-full border-2 rounded-lg ">
            <div class="flex bg-[#FAFAFA] px-8 items-center text-sm py-2 border-b-2">
                <input type="checkbox" class="accent-primary text-white mr-2"  name="" id="">
                <span class=" text-[#999999] mr-3">Satıcı:</span> 
                <span class="text-black">{{ product?.seller?.title }}</span>
                <SellerRaiting :rating=" product?.seller?.raiting"/>
            </div>
            <div class="flex flex-row p-8 items-center justify-between text-sm  ">
                <div class="flex items-center gap-2">
                    <input type="checkbox" name="" id="" class="mr-2">
                    <figure>
                        <img :src="product?.thumbnail" alt="" class="h-24">
                    </figure>
                    <span class="font-semibold">{{ product?.seller?.title }}</span>
                    <span>{{ product?.title }}</span>
                </div>
                <div class="border-2 rounded-md">
                    <button class="w-6 h-8 border-r-2 bg-[#FAFAFA] "
                    :class="{'text-primary font-bold':  piece > 0  }"
                    
                    >-</button>
                    <input type="text" maxlength="2" class="w-8 h-8 text-center" v-model="piece">
                    <button class="w-6 h-8 border-l-2 bg-[#FAFAFA] text-primary font-bold"
                    @click="handleAddItem(product)">+</button>
                </div>
                <span class="text-primary text-base font-semibold">{{ product?.price }} TL</span>
            </div>
        </div>
        </div>
        <div class="w-1/6 flex flex-col gap-4">
            <button class="w-full bg-primary py-4 text-white rounded-lg font-bold">Sepeti Onayla</button>
            <div class="border-2 rounded-lg p-2 text-xs flex flex-col gap-1">
                <p class="text-xl mb-2">Sipariş Özeti</p >
                <p class="flex justify-between">Ürünün Toplamı <span>900 TL</span></p>
                <p class="flex justify-between">Kargo Toplamı <span>35 TL</span></p>
                <p class="flex justify-between text-lg border-t-2">Toplam <span>935 TL</span></p>
            </div>  
            <button class="w-full bg-primary py-4 text-white rounded-lg font-bold">Sepeti Onayla</button>
        </div>
    </div>
        
</template>