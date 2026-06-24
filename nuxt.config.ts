// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/theme.css'],
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
  ],
  image: {
    format: ['avif', 'webp'],
    quality: 80,
  },
  routeRules: {
    '/**': { prerender: true },
  },
  nitro: {
    prerender: {
      routes: [
        '/projetos/curriculo-ai',
        '/projetos/check-numbers',
        '/projetos/food-explorer',
        '/projetos/rocket-pay',
        '/projetos/desafio-focus-timer',
        '/projetos/quest-log',
      ],
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR',
      },
      meta: [
        { name: 'theme-color', content: '#09090b' },
      ],
    },
  },
})
