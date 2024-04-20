<script setup>
defineProps(['categories'])
import { ref } from 'vue'
let isOpenMenu = ref(false)

const clickBars = () => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
  <header class="fixed top-0 z-50 bg-white w-full">
    <div class="main-container w-full flex justify-between">
      <h1 class="py-2">
        <RouterLink to="/">
          <img src="@/assets/img/dPerfume.png" alt="d'Perfume logo" />
        </RouterLink>
      </h1>
      <div class="flex items-center">
        <RouterLink
          :to="{ name: 'categories', params: { category: 'all' } }"
          class="relative inline-block text-xl text-perfumes-gray pl-3 py-2 hover:text-perfumes-main-light"
        >
          <span class="material-icons align-middle text-2xl"> shopping_cart </span>
          <span
            class="absolute rounded-full top-2 left-7 bg-perfumes-main text-white text-sm px-1 leading-4"
            >3</span
          >
        </RouterLink>
        <span
          @click="clickBars"
          class="inline-block text-xl text-perfumes-gray pl-7 py-2 cursor-pointer"
        >
          <img src="@/assets/img/bars.svg" alt="" />
        </span>
      </div>
    </div>
    <div v-if="isOpenMenu" class="bg-perfumes-main">
      <RouterLink
        :to="{ name: 'categories', params: { category: 'all' } }"
        class="block bg-perfumes-gray-dark text-xl py-5 border-t border-white font-light text-white pr-7 text-center"
      >
        Product
      </RouterLink>
      <RouterLink
        to="/"
        class="block bg-perfumes-gray-dark text-xl py-5 border-t border-white font-light text-white pr-7 text-center"
      >
        Wishlist
      </RouterLink>
      <RouterLink
        to="/"
        class="block bg-perfumes-gray-dark text-xl py-5 border-t border-white font-light text-white pr-7 text-center"
      >
        Blog
      </RouterLink>
      <RouterLink
        to="/"
        class="block bg-perfumes-gray-dark text-xl py-5 border-t border-white font-light text-white pr-7 text-center"
      >
        Contact
      </RouterLink>
      <RouterLink
        to="/"
        class="block bg-perfumes-gray-dark text-xl py-5 border-t border-white font-light text-white pr-7 text-center"
      >
        log in
      </RouterLink>
    </div>
  </header>
</template>
