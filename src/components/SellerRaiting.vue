<script setup>
const props = defineProps({
  rating: { type: Number }
})
</script>
<template>
  <span
    class="bg-[#38C400] text-white rounded-md p-[1px] mx-4 px-2"
    :class="[
      { 'bg-red-500': rating <= 3 },
      { 'bg-orange-500': rating > 3 && rating <= 7 },
      { 'bg-[#38C400]': rating > 7 }
    ]"
    >{{ rating }}</span
  >
</template>
