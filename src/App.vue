<script setup>
import Header from '@/components/Header.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header class="hidden md:block" />
  <HeaderMobile class="md:hidden" />
  <div class="pt-14 md:pt-24">
    <RouterView />
  </div>
  <Footer />
</template>
