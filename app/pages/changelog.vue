<template>
  <div class="min-h-screen bg-background text-foreground">
    <AppNavbar :name="portfolio.hero.name" />

    <div class="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
      <Header
        legend="Release notes"
        title="Changelog"
        subtitle="Histórico de versões publicado manualmente com Changesets."
      />

      <main>
        <article
          class="mt-10 [&_a:hover]:text-primary-hover [&_a]:text-primary [&_a]:no-underline [&_a]:transition-colors [&_a]:duration-300 [&_code]:rounded-sm [&_code]:bg-surface-elevated [&_code]:px-[0.35rem] [&_code]:py-[0.15rem] [&_code]:text-[0.9em] [&_code]:text-foreground [&_h1]:hidden [&_h2:first-of-type]:mt-0 [&_h2]:mt-10 [&_h2]:border-b [&_h2]:border-border [&_h2]:pb-3 [&_h2]:text-[1.75rem] [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-primary [&_li]:rounded-md [&_li]:border [&_li]:border-border [&_li]:bg-surface/50 [&_li]:p-4 [&_li]:leading-7 [&_li]:text-muted [&_p]:leading-8 [&_p]:text-muted [&_ul]:mt-4 [&_ul]:grid [&_ul]:gap-3"
          v-html="renderedChangelog"
        />
      </main>
    </div>

    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import changelog from '../../CHANGELOG.md?raw'
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import Header from '~/components/header/index.vue'
import { portfolio } from '~/data/portfolio'
import { createMarkdownRenderer } from '~/utils/markdown'

const site = useSiteConfig()
const canonicalUrl = `${site.url}/changelog`

const markdown = createMarkdownRenderer()

const renderedChangelog = computed(() => markdown.render(changelog))

useSeoMeta({
  title: 'Changelog',
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
