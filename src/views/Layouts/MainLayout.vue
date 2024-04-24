<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <figure>
    <img
      src=".../assets/web-product-detail-top-tr-TR-1711957500000-gz5ise9dk0b3psa50b14g4.webp"
      alt=""
    />
  </figure>
  <Header />

  <RouterView />
  <Footer />
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
body {
  /* font-family: 'Source Sans 3'; */
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input::placeholder {
  font-weight: 400;
  font-size: 0.9rem;
  color: #535252;
}
</style>
