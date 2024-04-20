<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import Newsletter from '@/components/Newsletter.vue'
import { getPerfumes } from '@/composables/useApi'
const route = useRoute()
const { data } = getPerfumes()
const perfumes = data

const isLoading = computed(() => !perfumes.value)
const currentCategory = computed(() => route.params.category)
const currentPerfumes = computed(() => {
  if (isLoading.value || currentCategory.value === 'all') return perfumes.value
  return perfumes.value.filter((perfume) => perfume.category === currentCategory.value)
})
</script>

<template>
  <main>
    <div v-if="isLoading" class="p-40 text-3xl text-center">loading ...</div>
    <template v-else>
      <div
        v-if="currentPerfumes"
        class="main-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[30px] -mx-2 pt-10 md:pt-20"
      >
        <ProductCard v-for="perfume in currentPerfumes" :key="perfume.id" :product="perfume" />
      </div>
      <div class="py-16 text-center">
        <RouterLink
          to="/"
          class="text-xl p-3 hover:text-perfumes-main-light underline text-perfumes-main-light"
          >1</RouterLink
        >
      </div>
    </template>
    <Newsletter />
  </main>
</template>
