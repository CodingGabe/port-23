<script>
  import Navigation from "./components/Navigation.vue"
  export default {
    components: { Navigation }
  }
</script>

<template>
  <div>
    <Navigation/>
    <div class="w-full">
      <div class="max-w-screen-lg w-full mt-16 mb-20 px-8 mx-auto pb-24 sm:mt-28 sm:px-16 slg:px-24 lg:mt-48 lg:mt-58">
        <NuxtPage/>
      </div>
    </div>
  </div>
</template>
