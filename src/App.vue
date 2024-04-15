<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header class="sticky top-0 z-50" />

  <RouterView />
  <Footer />
</template>
