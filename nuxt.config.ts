// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: [
        '@/assets/css/main.css',
      ],
    app: {
      head: {
        title: "Gabe Amaya | Portfolio '23",
        link: [
          { rel: "icon", type: "image/x-icon", href: "/favicon.ico"}
        ]
      }
    }
})
