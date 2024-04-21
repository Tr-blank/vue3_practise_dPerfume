<script setup>
import axios from 'axios'
import Header from '@/components/Header.vue'
import HeaderMobile from '@/components/HeaderMobile.vue'
import Footer from '@/components/Footer.vue'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const apiBaseUrl = 'https://express-dperfume-api.onrender.com'
const categories = ref([])
const route = useRoute()
const isBackstage = computed(() => route.name === 'backstage')

const getCategories = async () => {
  try {
    const { data } = await axios.get(`${apiBaseUrl}/categories`)
    categories.value = data
  } catch (error) {
    console.log(error)
  }
}
getCategories()
</script>

<template>
  <div v-if="isBackstage" class="main-container flex justify-between items-center">
    <h1 class="py-2 flex items-center">
      <RouterLink to="/">
        <img src="@/assets/img/dPerfume.png" alt="d'Perfume logo" />
      </RouterLink>
      <span class="pl-4 text-xl">後台</span>
    </h1>
    <RouterLink to="/" class="text-sm"> 回前台 </RouterLink>
  </div>
  <template v-else>
    <Header :categories="categories" class="hidden md:block" />
    <HeaderMobile :categories="categories" class="md:hidden" />
  </template>
  <div :class="{ 'pt-14 md:pt-24': !isBackstage }">
    <RouterView />
  </div>
  <Footer />
</template>
