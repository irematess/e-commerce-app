<script setup>
const emit = defineEmits({changePage:(pageNumber)=>{
    return pageNumber
}})
const props = defineProps({
    productsPage:{type:Object}
})
const handleChangePage = (pageNumber) => {
    emit("changePage",pageNumber)
}
</script>
<template>
    <div class="flex container mx-auto justify-center gap-1 items-center mb-2">
      <button class="p-1 px-2 border-2 rounded-lg" @click="handleChangePage(productsPage?.prev)"><i class="fa-solid fa-chevron-left"></i></button>
      <button class="p-1 px-2 border-2 rounded-lg" @click="handleChangePage(productsPage?.first)">{{ productsPage?.first }}</button>
      <button class="p-1 px-2 border-2 rounded-lg" @click="handleChangePage((productsPage?.first)+1)">{{ productsPage?.first + 1}}</button>
      <!-- <button v-for="(pageNumber, index) in productsPage?.pages " :key="index"
      class="border-2 p-1 rounded-lg"
      @click="handleChangePage(pageNumber)"
      >
      {{pageNumber}}</button> -->
      <button class="p-1 px-2 border-2 rounded-lg" >...</button>
      <button class="p-1 px-2 border-2 rounded-lg" @click="handleChangePage((productsPage?.last)-1)">{{ productsPage?.last -1 }}</button>
      <button class="p-1 px-2 border-2 rounded-lg" @click="handleChangePage(productsPage?.last)">{{ productsPage?.last}}</button>
      <button class="p-1 border-2 rounded-lg" @click="handleChangePage(productsPage?.next)"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
</template>