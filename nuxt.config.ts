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
  modules: ['@unocss/nuxt', 'convex-nuxt', '@nuxt/hints'],
  css: ['@unocss/reset/tailwind-compat.css'],
  ssr: true,
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL || 'https://api.nhlstats.org'
    }
  },
  devtools: { enabled: true },
  convex: {
    url: process.env.CONVEX_URL
  }
})