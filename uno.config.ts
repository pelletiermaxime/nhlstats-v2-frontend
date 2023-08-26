import { defineConfig, presetUno } from 'unocss'
import extractorSvelte from '@unocss/extractor-svelte'

export default defineConfig({
  extractors: [
    extractorSvelte(),
  ],
  shortcuts: [],
  presets: [
    presetUno(),
  ],
})