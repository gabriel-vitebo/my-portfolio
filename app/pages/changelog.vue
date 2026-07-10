<template>
  <div class="min-h-screen bg-background text-primary">
    <AppNavbar :name="portfolio.hero.name" />

    <main class="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:px-6">
      <header class="border-b border-border pb-10">
        <p class="text-sm font-medium uppercase tracking-widest text-tertiary">Release notes</p>
        <h1 class="mt-4 text-4xl font-bold text-primary sm:text-5xl">Changelog</h1>
        <p class="mt-5 max-w-2xl text-base leading-8 text-secondary">
          Histórico de versões gerado a partir dos commits do projeto, seguindo Semantic Versioning e Conventional Commits.
        </p>
      </header>

      <article class="changelog-content mt-10" v-html="renderedChangelog" />
    </main>

    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import changelog from '../../CHANGELOG.md?raw'
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import { portfolio } from '~/data/portfolio'

const siteUrl = 'https://gabriel-vitebo.vercel.app'
const canonicalUrl = `${siteUrl}/changelog`

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

const renderedChangelog = computed(() => markdown.render(changelog))

useSeoMeta({
  title: `Changelog | ${portfolio.hero.name}`,
  description: 'Histórico de versões e mudanças do portfólio.',
  ogTitle: `Changelog | ${portfolio.hero.name}`,
  ogDescription: 'Histórico de versões e mudanças do portfólio.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary',
  twitterTitle: `Changelog | ${portfolio.hero.name}`,
  twitterDescription: 'Histórico de versões e mudanças do portfólio.',
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>

<style scoped>
.changelog-content :deep(h1) {
  display: none;
}

.changelog-content :deep(p) {
  color: rgb(var(--color-text-secondary-rgb) / 1);
  line-height: 1.8;
}

.changelog-content :deep(h2) {
  margin-top: 2.5rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.75rem;
  color: rgb(var(--color-text-primary-rgb) / 1);
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.2;
}

.changelog-content :deep(h2:first-of-type) {
  margin-top: 0;
}

.changelog-content :deep(h3) {
  margin-top: 2rem;
  color: var(--color-primary);
  font-size: 1.125rem;
  font-weight: 700;
}

.changelog-content :deep(ul) {
  margin-top: 1rem;
  display: grid;
  gap: 0.75rem;
}

.changelog-content :deep(li) {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: rgb(var(--color-surface-rgb) / 0.5);
  padding: 1rem;
  color: rgb(var(--color-text-secondary-rgb) / 1);
  line-height: 1.7;
}

.changelog-content :deep(code) {
  border-radius: var(--radius-sm);
  background: rgb(var(--color-surface-elevated-rgb) / 1);
  padding: 0.15rem 0.35rem;
  color: rgb(var(--color-text-primary-rgb) / 1);
  font-size: 0.9em;
}

.changelog-content :deep(a) {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.changelog-content :deep(a:hover) {
  color: var(--color-primary-hover);
}
</style>
