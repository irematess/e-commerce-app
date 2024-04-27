<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  raiting: { type: Number }
})
</script>
<template>
  <p class="font-bold items-center flex gap-1">
    {{ raiting }}
    <i
      class="fa-solid fa-star text-xs text-slate-500"
      :class="{ 'text-yellow-500': raiting > 1 }"
    ></i>
    <i
      class="fa-solid fa-star text-slate-500 text-xs"
      :class="{ 'text-yellow-500': raiting > 2 }"
    ></i>
    <i
      class="fa-solid fa-star text-slate-500 text-xs"
      :class="{ 'text-yellow-500': raiting > 3 }"
    ></i>
    <i
      class="fa-solid fa-star text-slate-500 text-xs"
      :class="{ 'text-yellow-500': raiting > 4 }"
    ></i>
    <i
      class="fa-solid fa-star text-slate-500 text-xs"
      :class="{ 'text-yellow-500': raiting == 5 }"
    ></i>
  </p>
</template>
