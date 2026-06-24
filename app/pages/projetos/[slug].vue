<template>
  <div class="min-h-screen bg-background text-primary">
    <AppNavbar :name="portfolio.hero.name" />

    <main class="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <NuxtLink class="text-sm text-secondary transition duration-300 hover:text-accent" to="/#projects">
        Voltar para projetos
      </NuxtLink>

      <article class="mt-10">
        <ProjectHero :project="project" @open-media="openMedia" />
        <ProjectGallery :items="project.gallery" :project-title="project.title" @open-media="openMedia" />
      </article>
    </main>

    <LazyMediaLightbox
      v-if="selectedMedia"
      :fallback-title="project.title"
      :media="selectedMedia"
      @close="closeMedia"
    />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '~/components/layout/AppNavbar.vue'
import ProjectGallery from '~/components/projects/ProjectGallery.vue'
import ProjectHero from '~/components/projects/ProjectHero.vue'
import { portfolio } from '~/data/portfolio'
import type { ProjectGalleryItem } from '~/types/portfolio'

const route = useRoute()
const slug = route.params.slug

const project = portfolio.projects.find((item) => item.slug === slug)
const selectedMedia = ref<ProjectGalleryItem | null>(null)

const openMedia = (media: ProjectGalleryItem) => {
  selectedMedia.value = media
}

const closeMedia = () => {
  selectedMedia.value = null
}

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projeto não encontrado',
  })
}

useSeoMeta({
  title: `${project.title} | ${portfolio.hero.name}`,
  description: project.shortDescription,
  ogTitle: `${project.title} | ${portfolio.hero.name}`,
  ogDescription: project.shortDescription,
  ogType: 'article',
  twitterCard: 'summary_large_image',
})
</script>
