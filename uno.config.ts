import { defineConfig, presetUno } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  shortcuts: {
    'menu-active': 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium',
    'menu-inactive': 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
    'menu-mobile-active': 'bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium',
    'menu-mobile-inactive': 'text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium',
    'title': 'text-white text-4xl text-center',
  },
  presets: [
    presetUno(),
  ],
})
