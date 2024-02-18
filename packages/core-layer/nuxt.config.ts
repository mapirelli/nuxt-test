// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    compressPublicAssets: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/i18n'],
  tailwindcss: {
    configPath: join(currentDir, './config/tailwind.config'),
    cssPath: join(currentDir, './assets/css/tailwind.css'),
    viewer: true,
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '',
  },
})
