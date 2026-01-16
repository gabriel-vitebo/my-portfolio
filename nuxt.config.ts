import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
    '~/styles/base.css'
  ],
  app: {
    head: {
      title: 'My Portfolio',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },

  typescript: {
    strict: true,
  },

  // Keep default `@` and `~` aliases supplied by Nuxt — do not override them here.

  compatibilityDate: '2024-01-01',

  // Move PostCSS config here to avoid Nuxt warning about postcss.config.cjs
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
})