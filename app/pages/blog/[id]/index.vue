<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppNavbar :name="portfolio.hero.name" />

    <main class="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6">
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

        <div class="mt-10 space-y-10">
          <section
            v-for="section in article.sections"
            :key="section.title"
            class="space-y-4"
          >
            <h2 class="text-2xl font-bold leading-tight text-foreground">
              {{ section.title }}
            </h2>

            <p
              v-for="paragraph in section.paragraphs"
              :key="paragraph"
              class="text-base leading-8 text-muted"
            >
              {{ paragraph }}
            </p>
          </section>
        </div>
      </article>
    </main>

    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import Header from '~/components/header/index.vue'
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
