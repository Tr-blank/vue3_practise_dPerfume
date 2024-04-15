<template>
  <div class="newsletter h-[600px] bg-center bg-fixed">
    <div class="main-container pt-[300px]">
      <div class="text-perfumes-gray text-3xl font-semibold pb-4">
        記得<br />訂閱以獲取更多資訊！
      </div>
      <div class="border-2 border-perfumes-main inline-block rounded-md overflow-hidden">
        <input
          type="text"
          name="newsletter"
          id="newsletter"
          placeholder="Your email address"
          class="py-5 px-4"
        />
        <button
          type="button"
          class="bg-perfumes-main text-white px-7 py-5 hover:bg-perfumes-main-dark"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.newsletter {
  background-image: url('@/assets/img/newsletter-bg.webp');
}
</style>
