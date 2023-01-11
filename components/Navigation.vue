<template lang="">
    <div>
        <!-- Navigation -->
        <nav
        class="px-3 py-3 flex justify-between items-center fixed w-full backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4 border-b-1 border-nav--color bottom-0">
        <div class="top-0 absolute left-0 w-full bg-topbar"></div>
        <NuxtLink to="/"><span class="rounded-md transition-all">Home</span></NuxtLink>
        <div class="flex items-center gap-1 sm:gap-2">
            <NuxtLink to="/about"><span
                class="px-3 py-1 pb-2 pt-2 rounded-md transition-all sm:px-6 sm:py-2">About</span></NuxtLink>
            <NuxtLink to="/projects"><span
                class="px-3 py-1 pb-2 pt-2 rounded-md transition-all sm:px-6 sm:py-2">Projects</span></NuxtLink>
            <NuxtLink to="/shop"><span
                class="px-3 py-1 pb-2 pt-2 rounded-md transition-all sm:px-6 sm:py-2">Shop</span></NuxtLink>
        </div>
        </nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    
</style>