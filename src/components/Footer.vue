<template>
  <footer class="bg-perfumes-main">
    <div class="main-container flex justify-between">
      <div class="py-5 flex items-center">
        <RouterLink to="/" class="pr-5">
          <img src="@/assets/img/dPerfume-w.png" alt="d'Perfume logo" />
        </RouterLink>
        <span class="text-white text-sm">© 2020. All Rights Reserved.</span>
      </div>
      <div class="flex items-center">
        <RouterLink
          :to="{ name: 'categories', params: { category: 'CHANEL' } }"
          class="inline-block text-xl text-white pl-7 py-5"
        >
          Product
        </RouterLink>
        <RouterLink
          :to="{ name: 'categories', params: { category: 'CHANEL' } }"
          class="inline-block text-xl text-white pl-7 py-5"
        >
          Blog
        </RouterLink>
        <RouterLink
          :to="{ name: 'categories', params: { category: 'CHANEL' } }"
          class="inline-block text-xl text-white pl-7 py-5"
        >
          Contact
        </RouterLink>
      </div>
    </div>
  </footer>
</template>
