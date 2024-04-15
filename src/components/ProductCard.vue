<script setup>
defineProps(['product'])
</script>

<template>
  <div class="">
    <div class="relative w-full pt-[100%]">
      <img
        :src="product.image"
        :alt="product.title"
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
    <div class="text-2xl font-semibold pt-1">{{ product.title }}</div>
    <div class="font-light">{{ product.category }}</div>
    <div>
      <span>{{ $currencyFormat(product.price) }}</span>
      <span class="text-perfumes-gray line-through ml-2">{{
        $currencyFormat(product.origin_price)
      }}</span>
    </div>
    <div class="text-perfumes-main">
      <span class="material-icons align-middle text-xl cursor-pointer"> favorite </span>
      <span class="material-icons align-middle text-xl ml-1 cursor-pointer"> shopping_cart </span>
    </div>
  </div>
</template>
