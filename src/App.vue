<script setup>
import Header from '@/components/Header.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'
import Footer from '@/components/Footer.vue'
import { getCategories } from '@/composables/useApi'
const { data } = getCategories()
const categories = data
</script>

<template>
  <Header :categories="categories" class="hidden md:block" />
  <HeaderMobile :categories="categories" class="md:hidden" />
  <div class="pt-14 md:pt-24">
    <RouterView />
  </div>
  <Footer />
</template>
