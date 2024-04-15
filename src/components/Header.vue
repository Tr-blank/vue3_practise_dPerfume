<script setup>
const categories = ['CHANEL', 'Jo Malone', 'Curology', 'Dior', 'Chloe', 'ZARA']
</script>

<template>
  <header class="bg-white">
    <div class="main-container flex justify-between">
      <h1 class="py-2">
        <RouterLink to="/">
          <img src="@/assets/img/dPerfume.png" alt="d'Perfume logo" />
        </RouterLink>
      </h1>
      <div>
        <RouterLink
          :to="{ name: 'categories', params: { category: categories[0] } }"
          class="inline-block text-xl text-perfumes-gray pl-7 py-2 hover:text-perfumes-main-light"
        >
          <span class="material-icons align-middle text-lg"> store </span>
          <span class="align-middle">Product</span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'categories', params: { category: categories[0] } }"
          class="inline-block text-xl text-perfumes-gray pl-7 py-2 hover:text-perfumes-main-light"
        >
          <span class="material-icons align-middle text-lg"> person </span>
          <span class="align-middle">log in</span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'categories', params: { category: categories[0] } }"
          class="inline-block text-xl text-perfumes-gray pl-7 py-2 hover:text-perfumes-main-light"
        >
          <span class="material-icons align-middle text-lg"> favorite </span>
          <span class="align-middle">Wishlist</span>
        </RouterLink>
        <RouterLink
          :to="{ name: 'categories', params: { category: categories[0] } }"
          class="inline-block text-xl text-perfumes-gray pl-7 py-2 hover:text-perfumes-main-light"
        >
          <span class="material-icons align-middle text-lg"> shopping_cart </span>
          <span class="align-middle">Cart(3)</span>
        </RouterLink>
      </div>
    </div>
    <div class="bg-perfumes-main">
      <div class="main-container">
        <RouterLink
          v-for="category in categories"
          :key="category"
          :to="{ name: 'categories', params: { category: category } }"
          class="inline-block text-xl text-white pr-7 py-2"
        >
          {{ category }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>
