export default defineNuxtConfig({
  nitro: {
    preset: 'cloudflare_pages'
  },
  modules: ['@unocss/nuxt'],
  css: ['@unocss/reset/tailwind-compat.css'],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'https://api.nhlstats.org'
    }
  },
  devtools: { enabled: true }
})
