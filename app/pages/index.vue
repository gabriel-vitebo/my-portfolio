<template>
  <div class="h-screen min-h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-background text-primary">
    <AppNavbar :name="portfolio.hero.name" />
    <main>
      <HeroSection :hero="portfolio.hero" />
      <ProjectsSection
        :projects="portfolio.projects"
        :subtitle="portfolio.projectsSection.subtitle"
        :title="portfolio.projectsSection.title"
      />
      <AboutSection :about="portfolio.about" :socials="portfolio.socials" />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '~/components/layout/AppNavbar.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import { portfolio } from '~/data/portfolio'

const siteUrl = 'https://gabriel-vitebo.vercel.app'
const socialImage = `${siteUrl}/images/social-cover.jpg`

useSeoMeta({
  title: `${portfolio.hero.name} | ${portfolio.hero.role}`,
  description: portfolio.hero.description,
  ogTitle: `${portfolio.hero.name} | ${portfolio.hero.role}`,
  ogDescription: portfolio.hero.description,
  ogType: 'website',
  ogUrl: siteUrl,
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
    { rel: 'canonical', href: siteUrl },
  ],
})
</script>
