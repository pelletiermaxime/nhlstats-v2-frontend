import { defineConfig, presetUno } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  shortcuts: {
    'title': 'text-white text-4xl text-center',
  },
  presets: [
    presetUno(),
  ],
})
