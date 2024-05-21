<script setup>
import { provide } from 'vue'
import MainLayout from './views/Layouts/MainLayout.vue'
const cart = ([])

provide('cart', cart)

</script>

<template>
  <MainLayout />
</template>
