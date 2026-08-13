// https://nuxt.com/docs/api/configuration/nuxt-config
import { blogArticleRoutes } from './app/data/blogMetadata'
import { projectRoutes } from './app/data/projects'
import pkg from './package.json' with { type: 'json' }

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/theme.css'],
  modules: [
    '@nuxt/image',
    '@nuxt/ui'
  ],
  image: {
    format: ['avif', 'webp'],
    quality: 80,
  },
  routeRules: {
    '/**': { prerender: true },
  },
  vite: {
    optimizeDeps: {
      include: [
        'markdown-it',
      ],
    },
  },
  runtimeConfig: {
    public: {
      appVersion: pkg.version,
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/changelog',
        ...projectRoutes,
        ...blogArticleRoutes,
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
