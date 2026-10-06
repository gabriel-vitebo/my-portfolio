<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppNavbar :name="portfolio.hero.name" />

    <main class="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <Header
        title="Blog"
        subtitle="Aqui você encontra artigos sobre desenvolvimento web, programação, tecnologia e muito mais."
      />

      <SearchInput
        v-model="query"
        class="mt-8"
        label="Pesquisar blogs"
        placeholder="Título ou descrição"
      />
      <StableSearchResults :active="Boolean(query.trim())" class="mt-10">
        <p role="status" aria-live="polite" class="text-sm text-muted">
          <span v-if="blogArticles.length && !filteredItems.length" class="block px-4 py-8 text-center">Nenhum resultado encontrado para “{{ query.trim() }}”.</span>
        </p>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            v-for="article in paginatedItems"
            :key="article.slug"
            :article="article"
          />
        </div>
        <Pagination
          class="mt-8"
          :page="currentPage"
          :total-pages="totalPages"
          label="Paginação dos blogs"
          @update:page="setPage"
        />
        <p v-if="totalPages > 1" class="sr-only" role="status">Página {{ currentPage }} de {{ totalPages }}</p>
      </StableSearchResults>
    </main>

    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { socialImagePath } from '~/data/constants'
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import Header from '~/components/header/index.vue'
import BlogCard from '~/components/blog/card/index.vue'
import SearchInput from '~/components/ui/SearchInput.vue'
import StableSearchResults from '~/components/ui/StableSearchResults.vue'
import { useSearch } from '~/composables/useSearch'
import { getBlogSearchFields } from '~/utils/searchFields'
import Pagination from '~/components/ui/Pagination.vue'
import { usePagination } from '~/composables/usePagination'
import { blogArticles } from '~/data/blog'
import { portfolio } from '~/data/portfolio'

const { query, filteredItems } = useSearch(blogArticles, getBlogSearchFields)
const { currentPage, totalPages, paginatedItems, setPage } = usePagination(filteredItems, 6)
watch(query, () => setPage(1), { flush: 'sync' })

const site = useSiteConfig()
const canonicalUrl = `${site.url}/blog`
const description = 'Artigos sobre desenvolvimento web, programação, tecnologia e decisões práticas de produto.'
const socialImage = `${site.url}${socialImagePath}`

useSeoMeta({
  title: 'Blog',
  description,
  ogTitle: `Blog | ${portfolio.hero.name}`,
  ogDescription: description,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: socialImage,
  ogImageAlt: `${portfolio.hero.name} — Blog`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/jpeg',
  twitterCard: 'summary_large_image',
  twitterTitle: `Blog | ${portfolio.hero.name}`,
  twitterDescription: description,
  twitterImage: socialImage,
  twitterImageAlt: `${portfolio.hero.name} — Blog`,
})

useSchemaOrg([
  {
    '@type': 'Blog',
    name: `Blog | ${portfolio.hero.name}`,
    description,
    url: canonicalUrl,
  },
])

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>
