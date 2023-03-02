<template>
  <div class="w-full max-w-screen-lg mx-auto pb-24 sm:px-16 slg:px-24 px-4">
    <h2 class="text-3xl sm:2xl md:3xl mb-8 lg:mb-12">My Shop</h2>
    <p class="text-md lg:text-lg mb-8 lg:mb-12">Check out my featured Merch! Originally designed by me and inspired from the cities culture.</p>
    <div class="w-full h-[2px] lg:w-96 mx-auto mb-12 lg:mb-16" style="background: linear-gradient(90deg, #050505,#A9C9FF,#FFBBEC,#050505);"></div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
      <div v-for="shirt in shirts" :key="shirt.id" class="flex flex-col">
      <div class="flex flex-col gap-8">
      <NuxtLink :to="`${shirt.url}`" target="_blank"><img :src="`${shirt.image}`" class="rounded-md w-full object-cover max-w-md content-center"></NuxtLink>
        <div class="flex flex-col items-left">
          <h3 class="text-xl lg:text-2xl mb-4">{{ shirt.name }}</h3>
          <p class="text-lg font-bold">${{ shirt.price }}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import shopData from '../assets/shop.json'
console.log(shopData)

export default {
  data() {
    return {
      shirts: shopData
    }
  }
}

</script>

<style scoped></style>
