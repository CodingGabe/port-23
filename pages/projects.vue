<script lang="ts" setup></script>

<template>
  <div class="w-full max-w-screen-lg mx-auto pb-24 sm:px-16 slg:px-24 px-4">
      <div class="flex flex-col gap-8 w-full lg:gap-12">
        <h1 class="text-2xl sm:text-3xl md:text-5xl">My Projects</h1>
        <p class="text-md lg:text-lg slg:leading-8 leading-relaxed">Full list of my most recent projects showcasing my skills in Development and Design.</p>
        <div class="w-full h-[2px] lg:w-96 mx-auto" style="background: linear-gradient(90deg, #050505,#A9C9FF,#FFBBEC,#050505);"></div>
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
              <NuxtLink href="https://gabes-shopping-list.netlify.app" class="bg-zinc-900 hover:bg-zinc-700 px-2 py-2 rounded-sm w-fit md:px-4 slg:px-6 slg:py3 transition-colors border-0 font-bold">View App <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right inline"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></NuxtLink>
            </div>
          </div>
          <!-- Project -->
          <div class="flex flex-col gap-8 items-center">
            <!-- Image of Project -->
            <img src="../assets/img/zarya.png" alt="Zarya Creative Studio" class="rounded-md w-full object-cover">
            <!-- Project content -->
            <div class="flex flex-col items-left gap-6">
              <h3 class="text-xl sm:text-2xl md:text-4xl">Zarya Creative Studio</h3>
              <p class="text-md lg:text-lg slg:leading-8 leading-relaxed">A beautiful website crafted by me in Webflow.  Main goal was to really flex my design skills and think outside of the norm. This agency is for small business' to hire my friend and I for creative services at an affordable rate.</p>
              <NuxtLink href="https://sombruh.webflow.io/" class="bg-zinc-900 hover:bg-zinc-700 px-2 py-2 rounded-sm w-fit md:px-4 slg:px-6 slg:py3 transition-colors border-0 font-bold">View Site <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right inline"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></NuxtLink>
            </div>
          </div>
          <!-- Project -->
          <div class="flex flex-col gap-8 items-center">
            <!-- Image of Project -->
            <img src="../assets/img/asianmarket.png" alt="Asian Night Market" class="rounded-md w-full object-cover">
            <!-- Project content -->
            <div class="flex flex-col items-left gap-6">
              <h3 class="text-xl sm:text-2xl md:text-4xl">Asian Night Market Website</h3>
              <p class="text-md lg:text-lg slg:leading-8 leading-relaxed">Done custom in Wordpress for a local business. Goal was to create a website for an event that features advanced custom fields and custom design.</p>
              <NuxtLink href="https://asianworldnightmarket.com/" class="bg-zinc-900 hover:bg-zinc-700 px-2 py-2 rounded-sm w-fit md:px-4 slg:px-6 slg:py3 transition-colors border-0 font-bold">View Site <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right inline"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></NuxtLink>
            </div>
          </div>
          <!-- Project -->
          <div class="flex flex-col gap-8 items-center">
            <!-- Image of Project -->
            <img src="../assets/img/old-port.png" alt="Old Portfolio" class="rounded-md w-full object-cover">
            <!-- Project content -->
            <div class="flex flex-col items-left gap-6">
              <h3 class="text-xl sm:text-2xl md:text-4xl">Old Portfolio '21</h3>
              <p class="text-md lg:text-lg slg:leading-8 leading-relaxed">Created in Weblow to flex my design and abstract creativity. More of a design site showing a few UX designs.</p>
              <NuxtLink href="https://gabeamaya.webflow.io/" class="bg-zinc-900 hover:bg-zinc-700 px-2 py-2 rounded-sm w-fit md:px-4 slg:px-6 slg:py3 transition-colors border-0 font-bold">View Site <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right inline"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped></style>
