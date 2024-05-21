<script setup>
import {  inject, onMounted, ref} from "vue";
import SellerRaiting from '@/components/SellerRaiting.vue'
import Product from "@/components/Product.vue";
import { fetchTopSeller } from "@/services/ProductService";
const cart = ref([])
const showTopSeller = ref(false)
const showFavorites = ref(false)
const topSellerproducts = ref()

function showDiv (item) {
    if(item === 'showFavorites'){
        showFavorites.value = !showFavorites.value
    }
    showTopSeller.value = !showTopSeller.value
}

function handleAddItem(product) {  
    product.quantity = product.quantity + 1
    cart.value.push(product)
}

function handleDeleteItem(product, index) {
    if(product.quantity >= 1){
        cart.value.splice(index,1)
        product.quantity = product.quantity - 1
    }
}

const fetchCart = () => {
    cart.value =   inject('cart')
}

function totalPrice() {
    return cart.value.reduce((acc, obj) => acc + obj.price , 0    ) 
}


onMounted(() => {
   fetchCart(),
   fetchTopSeller().then((data) => (topSellerproducts.value = data))
})
</script>
<template>
    <div class="container mx-auto py-6 my-6 text-lg border-[1px] flex justify-between items-center px-4" v-if="cart.length == 0" ><span> <i class="fa-solid fa-cart-shopping text-primary text-2xl bg-[#FFF1E6] p-3 rounded-full"></i>   Sepetinde ürün bulunmamaktadır</span><router-link class="bg-primary text-white px-16 py-3 rounded-lg font-semibold" to="/">Alışverişe Başla</router-link></div>
    <div class="container mx-auto py-6 flex justify-center gap-4">      
        <div class=" flex flex-col gap-2" >
            <p class="text-2xl text-black mb-6"
            v-if="cart?.length > 0">Sepetim ({{ cart?.length }} Ürün)</p>
            <div v-if="cart?.length > 0">
            <div v-for="(product, index) in Array.from(new Set(cart))   " :key="index" class="w-full border-2 rounded-lg " >
            <div class="flex bg-[#FAFAFA] px-8 items-center text-sm py-2 border-b-2">
                <input type="checkbox" class="accent-primary text-white mr-2"  name="" id="">
                <span class=" text-[#999999] mr-3">Satıcı:</span> 
                <span class="text-black">{{ product?.seller?.title }}</span>
                <SellerRaiting :rating=" product?.seller?.raiting"/>
            </div>
            <div
            v-if="product.price*product.quantity <200"
             class="flex bg-[#FFFEF4] p-1 text-[#333333] text-xs font-semibold text-center justify-center items-center border-b-2"><i class="fa-solid fa-cube mr-2"></i> Kargonuzun bedava olması için <span class="text-primary mx-1 " >{{ 200 - product.price * product.quantity }} TL</span>  daha ürün ekleyin <i class="fa-solid fa-chevron-right ml-2"></i></div>
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
                    :class="{'text-primary font-bold':  product.quantity > 0  }"
                    @click="handleDeleteItem(product,index)"
                    >-</button>
                    
                    <input type="text" maxlength="2" class="w-8 h-8 text-center" :value="product?.quantity">
                    <button class="w-6 h-8 border-l-2 bg-[#FAFAFA] text-primary font-bold"
                    @click="handleAddItem(product, index)">+</button>
                </div>
                <span class="text-primary text-base font-semibold">{{ product?.price }} TL</span>
            </div>
            </div>
            </div>
            
            <!-- Suggestions -->
            <div class="">
                <div class="border-b-2  text-lg text-[#333333] font-normal flex gap-4">
                    <button class="focus:border-b-2 focus:border-primary focus:text-primary py-2"
                    @click="showDiv('showTopSeller')"
                    >Önerilen Ürünler</button>
                    <button class="focus:border-b-2 focus:border-primary focus:text-primary py-2"
                    @click="showDiv('showFavorites')">Favorilerim</button>
                </div>
                <!-- Topseller -->
                
                <div v-if="showTopSeller" class="p-2 grid grid-cols-4 gap-4">
                    <Product
                        v-for="(product, index) in topSellerproducts.slice(0,8)"
                        :key="index"
                        :thumbnail="product.thumbnail"
                        :seller_title="product.seller?.title"
                        :title="product.title"
                        :price="product.price"
                        :topSeller="product.topSeller"
                        :id="product.id"
                        class="w-52"
                        />
                </div>
                <!-- Favorites -->
                <div v-if="showFavorites">
                    FAVORİLERİM
                </div>
            </div>
        </div>
        <div class="w-1/6 flex flex-col gap-4" v-show="cart?.length > 0">
            <button class="w-full bg-primary py-4 text-white rounded-lg font-bold">Sepeti Onayla</button>
            <div class="border-2 rounded-lg p-2 text-xs flex flex-col gap-1">
                <p class="text-xl mb-2">Sipariş Özeti</p >
                <p class="flex justify-between">Ürünün Toplamı <span>{{totalPrice()}} TL</span></p>
                <p class="flex justify-between">Kargo Toplamı <span>35 TL</span></p>
                <p class="flex justify-between text-lg border-t-2">Toplam <span>{{totalPrice() + 35}} TL</span></p>
            </div>  
            <button class="w-full bg-primary py-4 text-white rounded-lg font-bold">Sepeti Onayla</button>
        </div>
    </div>
        <router-link
        v-if="Array.from(new Set(cart)).length > 2 || showFavorites || showTopSeller"
        to="/cart" class="flex justify-end text-end items-center  my-2 px-1 mx-1 " ><span class="border-[1px] rounded-3xl py-3 px-2 "><i class="fa-solid fa-chevron-up"
         ></i> Yukarı Çık</span></router-link>    
</template>
