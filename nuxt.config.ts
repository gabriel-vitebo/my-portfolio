import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "My Portfolio",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ]
    }
  },

  typescript: {
    strict: true,
  },

  alias: {
    '@': '/',
    '~': '/',
  },

  compatibilityDate: '2024-01-01',
});