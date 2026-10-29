// https://nuxt.com/docs/api/configuration/nuxt-config
import { hero } from './app/data/profile'
import { socialLinks } from './app/data/socialLinks'
import { siteUrl, identityId } from './app/data/constants'
import { blogArticlesMetadata, blogArticleRoutes } from './app/data/blogMetadata'
import { projectRoutes } from './app/data/projects'
import pkg from './package.json' with { type: 'json' }

const blogArticleSitemapUrls = blogArticlesMetadata.map((article) => ({
  loc: `/blog/${article.slug}`,
  lastmod: article.updatedAtIso ?? article.publishedAtIso,
  images: [
    {
      loc: article.image,
      title: article.title,
    },
  ],
}))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/theme.css'],
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/ui', '@nuxtjs/seo', '@nuxt/scripts'],
  site: {
    url: siteUrl,
    name: hero.name,
    defaultLocale: 'pt-BR',
    currentLocale: 'pt-BR'
  },
  schemaOrg: {
    identity: {
      type: 'Person',
      '@id': identityId,

      name: hero.name,

      url: siteUrl,

      jobTitle: hero.role,

      description: 'Desenvolvedor Full Stack com experiência no desenvolvimento de aplicações web modernas, atuando com tecnologias de front-end e back-end.',

      image: `${siteUrl}${hero.image}`,

      sameAs: [
        socialLinks.linkedin.url,
        socialLinks.github.url
      ]
    }
  },
  sitemap: {
    urls: blogArticleSitemapUrls,
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
      gaId: 'G-5F6Z5B03CF',
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
