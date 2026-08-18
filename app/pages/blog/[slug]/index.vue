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
          :title="article.title"
        />

        <p class="mt-6 text-sm font-medium text-muted">
          Data de publicação:
          <time class="text-foreground">{{ article.publishedAt }}</time>
        </p>

        <NuxtImg
          class="mt-8 aspect-[16/9] w-full rounded-2xl border border-border bg-surface object-cover"
          :src="article.image"
          :alt="article.title"
          width="960"
          height="540"
          sizes="(max-width: 767px) 100vw, 768px"
          densities="x1"
          format="webp"
          quality="80"
          fetchpriority="high"
        />

        <div
          class="mt-10 [&_a:hover]:text-primary-hover [&_a]:text-primary [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-300 [&_blockquote]:border-l-2 [&_blockquote]:border-primary [&_blockquote]:pl-5 [&_blockquote]:text-muted [&_code]:rounded-sm [&_code]:bg-surface-elevated [&_code]:px-[0.35rem] [&_code]:py-[0.15rem] [&_code]:text-[0.9em] [&_code]:text-foreground [&_h2:first-of-type]:mt-0 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-primary [&_hr]:my-10 [&_hr]:border-border [&_img]:mt-6 [&_img]:w-full [&_img]:rounded-lg [&_img]:border [&_img]:border-border [&_img]:bg-surface [&_li]:leading-8 [&_li]:text-muted [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:space-y-3 [&_ol]:pl-6 [&_p]:mt-4 [&_p]:text-base [&_p]:leading-8 [&_p]:text-muted [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:border [&_pre]:border-border [&_pre]:bg-surface [&_pre]:p-4 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_table]:mt-6 [&_table]:w-full [&_table]:table-fixed [&_td]:align-top [&_td]:text-sm [&_td]:font-medium [&_td]:text-muted [&_td]:not-last:pr-2 [&_th]:pb-2 [&_th]:text-left [&_th]:text-sm [&_th]:font-medium [&_th]:text-muted [&_th]:not-last:pr-2 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-3 [&_ul]:pl-6"
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
import { blogArticles } from '~/data/blog'
import { siteUrl } from '~/data/constants'
import { portfolio } from '~/data/portfolio'
import { createMarkdownRenderer } from '~/utils/markdown'

const route = useRoute()
const articleSlug = route.params.slug

const article = blogArticles.find((item) => item.slug === articleSlug)

if (!article) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Artigo não encontrado',
  })
}

const canonicalUrl = `${siteUrl}/blog/${article.slug}`
const socialImage = `${siteUrl}${article.image}`

const markdown = createMarkdownRenderer()

const renderedArticle = computed(() => markdown.render(article.content))

useSeoMeta({
  title: `${article.title} | ${portfolio.hero.name}`,
  description: article.description,
  ogTitle: `${article.title} | ${portfolio.hero.name}`,
  ogDescription: article.description,
  ogType: 'article',
  ogUrl: canonicalUrl,
  ogImage: socialImage,
  ogImageAlt: article.title,
  ogImageWidth: 1536,
  ogImageHeight: 1024,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image',
  twitterTitle: `${article.title} | ${portfolio.hero.name}`,
  twitterDescription: article.description,
  twitterImage: socialImage,
  twitterImageAlt: article.title,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>
