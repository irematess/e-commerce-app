<script setup>
import { ref } from 'vue'

const props = defineProps({
  images: { type: Array },
  topSeller: { type: Boolean }
})

const currentIndex = ref(0)

const nextClick = () => {
  if (currentIndex.value == props.images.length - 1) {
    return (currentIndex.value = 0)
  }
  currentIndex.value += 1
}

const backClick = () => {
  if (currentIndex.value == 0) {
    return (currentIndex.value = props.images.length - 1)
  }
  currentIndex.value -= 1
}
</script>

<template>
  <div class="w-96 flex-col pt-4 relative">
    <div class="mb-8 border-2 rounded-md">
      <figure class="rounded-xl relative">
        <img
          src="../assets/EnCokSatan_202012091129.webp"
          alt=""
          v-if="topSeller"
          class="absolute w-20 m-6"
        />
        <img :src="images[currentIndex]" class="rounded-md" />
      </figure>
    </div>
    <div class="images flex flex-cols-4 gap-7 justify-center items-center">
      <img
        class="w-8 rounded-md cursor-pointer border-2"
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :class="{ 'border-red-400': index == currentIndex }"
        @click="currentIndex = index"
        @mouseover="currentIndex = index"
      />
    </div>
    <button
      class="px-3 py-2 rounded-full bg-white text-slate-400 text-xl flex items-center justify-center z-50 absolute top-1/2 right-3"
      @click="nextClick"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>
    <button
      class="px-3 py-2 rounded-full bg-white text-slate-400 text-xl flex items-center justify-center z-50 absolute top-1/2 left-3"
      @click="backClick"
    >
      <i class="fa-solid fa-chevron-left"></i>
    </button>
  </div>
</template>
