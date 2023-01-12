<script lang="ts" setup></script>

<template>
  <div class="w-full max-w-screen-lg mx-auto pb-24 sm:px-16 slg:px-24 px-4">
      <div class="flex flex-col gap-8 w-full lg:gap-12">
        <h1 class="text-2xl sm:text-3xl md:text-5xl">My Projects</h1>
        <p class="text-md lg:text-lg slg:leading-8 leading-relaxed">Full list of my most recent projects showcasing my skills in Development and Design.</p>
        <hr class="border-0 opacity-25 h-[4px] bg-zinc-400">
        <!-- Projects container -->
        <div class="flex flex-col items-center justify-center gap-28">
          <!-- Project -->
          <div class="flex flex-col gap-8 items-center">
            <!-- Image of Project -->
            <img src="../assets/img/shopping-app.png" alt="Shopping App" class="rounded-md w-full object-cover">
            <!-- Project content -->
            <div class="flex flex-col items-left gap-6">
              <h3 class="text-xl sm:text-2xl md:text-4xl">Vue Shopping App</h3>
              <p class="text-md lg:text-lg slg:leading-8 leading-relaxed">A simple shopping app built with Vue JS. I learned the basics on how to filter through json files data to load in content along with components, router and the fundamentals of Options API.</p>
              <NuxtLink href="https://gabes-shopping-list.netlify.app" class="px-2 py-2 rounded-md transition-colors border-[1px] w-fit text-sm md:px-4 slg:px-6 bg-teal-500 border-black hover:bg-teal-700">View App</NuxtLink>
            </div>
          </div>
          <!-- Project -->
          <div class="flex flex-col gap-8 items-center">
            <!-- Image of Project -->
            <img src="../assets/img/zarya.png" alt="Zarya Creative Studio" class="rounded-md w-full object-cover">
            <!-- Project content -->
            <div class="flex flex-col items-left gap-6">
              <h3>Zarya Creative Studio</h3>
              <p class="text-md lg:text-lg slg:leading-8 leading-relaxed">A beautiful website crafted by me in Webflow.  Main goal was to really flex my design skills and think outside of the norm. This agency is for small business' to hire my friend and I for creative services at an affordable rate.</p>
              <NuxtLink href="https://gabes-shopping-list.netlify.app" class="px-2 py-2 rounded-md transition-colors border-[1px] w-fit text-sm md:px-4 slg:px-6 bg-teal-500 border-black hover:bg-teal-700">View Site</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
