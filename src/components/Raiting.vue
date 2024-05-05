<script setup>
import Star from './Star.vue'
const props = defineProps({
  value: { type: Number }
})

const defaultStars = [0, 1, 2, 3, 4]
</script>
<template>
  <div class="flex gap-2">
    <Star
      v-for="index in defaultStars"
      :key="index"
      :value="value - index >= 1 ? 1 : value - index"
    />
  </div>
</template>
