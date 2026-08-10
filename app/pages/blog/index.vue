<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppNavbar :name="portfolio.hero.name" />

    <main class="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <Header
        title="Blog"
        subtitle="Aqui você encontra artigos sobre desenvolvimento web, programação, tecnologia e muito mais."
      />

      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <BlogCard
          v-for="article in blogArticles"
          :key="article.id"
          :article="article"
        />
      </div>
    </main>

    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import Header from '~/components/header/index.vue'
import BlogCard from '~/components/blog/card/index.vue'
import { blogArticles } from '~/data/blog'
import { portfolio } from '~/data/portfolio'
</script>
