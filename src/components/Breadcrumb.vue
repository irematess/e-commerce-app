<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const props = defineProps({
  paths: { type: Array }
})
</script>
<template>
  <div class="flex container mx-auto pt-8">
    <div class="flex flex-row" v-for="(path, index) in paths" :key="index">
      <router-link :to="path.path"
        >{{ path.name }}<i class="fa-solid fa-chevron-right text-primary mr-2"></i
      ></router-link>
    </div>
  </div>
</template>
