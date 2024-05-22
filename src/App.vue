<script setup>
import { provide } from 'vue'
import MainLayout from './views/Layouts/MainLayout.vue'
const cart = ([])
const favorites = ([])

provide('cart', cart)
provide('favorites', favorites)

</script>

<template>
  <MainLayout />
</template>
