<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Preload critical CSS to prevent FOUC
useHead({
  titleTemplate: '%s - NHL Stats',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style>
/* Prevent unstyled flash by setting base styles */
body {
  background-color: #27272a; /* zinc-800 */
  visibility: visible;
  opacity: 1;
}
</style>
