<script setup>
import Raiting from './Raiting.vue'

const props = defineProps({
  comments: { type: Array },
  seller_id: { type: String }
})
</script>
<template>
  <div class="px-4 py-4 my-5 w-full flex flex-col items-start justify-start text-start">
    <span class="flex py-1 gap-4 text-zinc-800 font-medium justify-start items-center text-start">
      <Raiting :value="comments?.raiting" />
      {{ comments?.comment }}
    </span>
    <div class="flex w-full justify-between">
      <div class="text-zinc-600 font-normal mt-2 text-xs flex">
        {{ comments?.id }} | {{ comments?.date }} |
        <div class="text-blue-500 px-1">{{ seller_id }}</div>
        satıcısından alındı
      </div>
      <div
        class="text-zinc-600 cursor-pointer hover:text-primary flex gap-2 justify-center items-center"
      >
        <i class="fa-solid fa-thumbs-up"></i> Yorumu Beğen (0 )
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    </div>

    <p></p>
    <p></p>
  </div>
</template>
