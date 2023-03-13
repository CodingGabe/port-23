<template>
    <div>
        <div class="flex flex-col gap-2 lg:gap-2">
            <h3 class="text-lg sm:text-xl md:text-2xl">Featured Projects</h3>
            <p class="text-md lg:text-lg slg:leading-8 leading-relaxed">Check out some of my favorite projects.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 pt-8 mx-auto sm:gap-6">
                <NuxtLink href="https://gabes-shopping-list.netlify.app" class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-sm transition bg-zinc-900 md:hover:scale-110" target="_blank">
                    <img src="../assets/img/shopping-app.png" alt="Shopping App" class="w-full object-cover rounded-sm">
                    <div class="flex-flex-col justify-between gap-4">
                        <h3 class="text-lg sm:text-xl md:text-2xl mb-3 text-slate-50">Vue Shopping List App</h3>
                        <p class="text-md lg:text-lg slg:leading-8 text-zinc-400">A small shopping list app that showcases my knowledge of the basics of Vue.</p>
                        
                    </div>
                </NuxtLink>
                <NuxtLink href="https://sombruh.webflow.io/" class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-sm bg-zinc-900 transition md:hover:scale-110" target="_blank">
                    <img src="../assets/img/zarya.png" alt="Zarya Creative" class="w-full object-cover rounded-sm">
                    <div class="flex-flex-col justify-between gap-4">
                        <h3 class="text-lg sm:text-xl md:text-2xl mb-3 text-slate-50">Zarya Creative Studio</h3>
                        <p class="text-md lg:text-lg slg:leading-8 text-zinc-400">This creative studio was created with the goal of helping small business create beautiful websites at an affordable price while not sacrificing creativity.</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Featured Projects',
    }
</script>