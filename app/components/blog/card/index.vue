<template>
  <article
    :aria-labelledby="titleId"
    class="relative rounded-2xl border border-border bg-surface/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/50"
  >
    <NuxtLink
      :aria-label="`Ler artigo completo: ${article.title}`"
      class="absolute inset-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      :to="`/blog/${article.id}`"
    />

    <div class="pointer-events-none relative flex h-full flex-col gap-4">
      <div>
        <p class="text-xs font-medium uppercase tracking-widest text-subtle">
          {{ article.date }}
        </p>

        <h2 :id="titleId" class="mt-3 text-xl font-semibold text-foreground">
          {{ article.title }}
        </h2>

        <p class="mt-3 line-clamp-3 text-sm leading-6 text-muted">
          {{ article.description }}
        </p>
      </div>

      <NuxtLink
        :aria-label="`Ler artigo completo: ${article.title}`"
        class="pointer-events-auto mt-auto inline-flex w-fit items-center text-sm font-semibold text-primary transition hover:text-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        :to="`/blog/${article.id}`"
      >
        Ler artigo completo
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { BlogArticle } from '~/types/blog'

const props = defineProps<{
  article: BlogArticle
}>()

const titleId = `blog-article-${props.article.id}`
</script>
