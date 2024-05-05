<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  value: { type: Number }
})
</script>
<template>
  <div class="w-[20px] h-[20px] relative">
    <div class="w-[20px] h-[20px]">
      <div
        class="w-[20px] h-[20px] bg-[url('./assets/grey-star.svg')] bg-no-repeat bg-center bg-cover"
      ></div>
    </div>

    <div
      class="w-[20px] h-[20px] absolute top-0 left-0 overflow-hidden"
      :style="`max-width: ${value <= 0 ? 0 : value * 100}%`"
    >
      <div
        class="w-[20px] h-[20px] bg-[url('./assets/yellow-star.svg')] bg-no-repeat bg-center bg-cover"
      ></div>
    </div>
  </div>
</template>
