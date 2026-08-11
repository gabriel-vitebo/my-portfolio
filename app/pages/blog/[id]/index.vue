<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppNavbar :name="portfolio.hero.name" />

    <main class="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
      <NuxtLink
        class="inline-flex w-fit items-center text-sm font-medium text-muted transition duration-300 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        to="/blog"
      >
        Voltar para o blog
      </NuxtLink>

      <article class="mt-10">
        <Header
          :legend="article.date"
          :title="article.title"
          :subtitle="article.description"
        />

        <div
          class="mt-10 [&_a:hover]:text-primary-hover [&_a]:text-primary [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-300 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_blockquote]:text-muted [&_code]:rounded-sm [&_code]:bg-surface-elevated [&_code]:px-[0.35rem] [&_code]:py-[0.15rem] [&_code]:text-[0.9em] [&_code]:text-foreground [&_h2:first-of-type]:mt-0 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-primary [&_li]:leading-8 [&_li]:text-muted [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6 [&_p]:mt-4 [&_p]:text-base [&_p]:leading-8 [&_p]:text-muted [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-surface [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6"
          v-html="renderedArticle"
        />
      </article>
    </main>

    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import Header from '~/components/header/index.vue'
import MarkdownIt from 'markdown-it'
import { blogArticles } from '~/data/blog'
import { portfolio } from '~/data/portfolio'

const route = useRoute()
const articleId = route.params.id

const article = blogArticles.find((item) => item.id === articleId)

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artigo não encontrado',
  })
}

const siteUrl = 'https://gabriel-vitebo.vercel.app'
const canonicalUrl = `${siteUrl}/blog/${article.id}`

const markdown = new MarkdownIt({
  html: false,
  linkify: true,
  typographer: true,
})

const defaultLinkOpenRenderer = markdown.renderer.rules.link_open

markdown.renderer.rules.link_open = (tokens, index, options, env, self) => {
  const href = tokens[index].attrGet('href') ?? ''
  const isExternal = /^https?:\/\//.test(href)

  if (isExternal) {
    tokens[index].attrSet('target', '_blank')
    tokens[index].attrSet('rel', 'noreferrer')
  }

  return defaultLinkOpenRenderer
    ? defaultLinkOpenRenderer(tokens, index, options, env, self)
    : self.renderToken(tokens, index, options)
}

const renderedArticle = computed(() => markdown.render(article.content))

useSeoMeta({
  title: `${article.title} | ${portfolio.hero.name}`,
  description: article.description,
  ogTitle: `${article.title} | ${portfolio.hero.name}`,
  ogDescription: article.description,
  ogType: 'article',
  ogUrl: canonicalUrl,
  twitterCard: 'summary',
  twitterTitle: `${article.title} | ${portfolio.hero.name}`,
  twitterDescription: article.description,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>
