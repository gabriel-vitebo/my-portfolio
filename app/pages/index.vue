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

useSeoMeta({
  title: `${portfolio.hero.name} | ${portfolio.hero.role}`,
  description: portfolio.hero.description,
  ogTitle: `${portfolio.hero.name} | ${portfolio.hero.role}`,
  ogDescription: portfolio.hero.description,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>
