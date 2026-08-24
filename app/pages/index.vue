<template>
  <div class="min-h-screen scroll-smooth bg-background text-foreground">
    <AppNavbar :name="portfolio.hero.name" />
    <main>
      <HeroSection :hero="portfolio.hero" :socials="portfolio.socials" />
      <ProjectsSection
        :projects="portfolio.projects"
        :subtitle="portfolio.projectsSection.subtitle"
        :title="portfolio.projectsSection.title"
      />
    </main>
    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import { portfolio } from '~/data/portfolio'

const site = useSiteConfig()
const canonicalUrl = site.url
const socialImage = `${site.url}/images/social-cover.jpg`

useSeoMeta({
  title: portfolio.hero.role,
  description: portfolio.hero.description,
  ogTitle: `${portfolio.hero.name} | ${portfolio.hero.role}`,
  ogDescription: portfolio.hero.description,
  ogType: 'website',
  ogUrl: canonicalUrl,
  ogImage: socialImage,
  ogImageAlt: `${portfolio.hero.name} — ${portfolio.hero.role}`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/jpeg',
  twitterCard: 'summary_large_image',
  twitterTitle: `${portfolio.hero.name} | ${portfolio.hero.role}`,
  twitterDescription: portfolio.hero.description,
  twitterImage: socialImage,
  twitterImageAlt: `${portfolio.hero.name} — ${portfolio.hero.role}`,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>
