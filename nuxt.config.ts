export default defineNuxtConfig({
  compatibilityDate: '2025-01-10',
  routeRules: {
    '/': { redirect: '/standings' },
    '/**': {
      swr: 14400
    }
  },
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
