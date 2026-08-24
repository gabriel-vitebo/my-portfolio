// https://nuxt.com/docs/api/configuration/nuxt-config
import { blogArticleRoutes } from './app/data/blogMetadata'
import { projectRoutes } from './app/data/projects'
import pkg from './package.json' with { type: 'json' }

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/theme.css'],
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/ui', '@nuxtjs/seo'],
  site: {
    url: 'https://gabrielvitebo.dev',
    name: 'Gabriel Vitebo',
    defaultLocale: 'pt-BR',
    currentLocale: 'pt-BR'
  },
  schemaOrg: {
    identity: {
      type: 'Person',
      '@id': 'https://gabrielvitebo.dev/#identity',

      name: 'Gabriel Vitebo',

      url: 'https://gabrielvitebo.dev',

      jobTitle: 'Desenvolvedor Full Stack',

      description: 'Desenvolvedor Full Stack com experiência no desenvolvimento de aplicações web modernas, atuando com tecnologias de front-end e back-end.',

      image: 'https://gabrielvitebo.dev/images/profile/my-photo.png',

      sameAs: [
        'https://www.linkedin.com/in/gabriel-alves-vitebo-2978ab177/',
        'https://github.com/gabriel-vitebo'
      ]
    }
  },
  icon: {
    componentName: 'NuxtIcon',
    clientBundle: {
      icons: [
        'lucide:mail',
        'simple-icons:github',
        'simple-icons:linkedin',
      ],
      scan: false,
    },
  },
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
