<script setup>
defineProps(['product'])
</script>

<template>
  <div class="w-1/4 p-4">
    <div class="">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div>{{ product.title }}</div>
    <div>{{ product.category }}</div>
    <div>
      <span>{{ product.price }}</span>
      <span class="underline">{{ product.origin_price }}</span>
    </div>
    <div>
      <span class="material-icons align-middle text-lg"> favorite </span>
      <span class="material-icons align-middle text-lg"> shopping_cart </span>
    </div>
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
