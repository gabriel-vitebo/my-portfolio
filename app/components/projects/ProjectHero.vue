<template>
  <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
    <div>
      <h1 class="text-4xl font-bold leading-tight text-primary sm:text-6xl">{{ project.title }}</h1>
      <p class="paragraph-lg mt-6 max-w-2xl text-secondary">
        {{ project.description }}
      </p>

      <ProjectTechnologies class="mt-8" :technologies="project.technologies" />
      <ProjectLinks class="mt-8" :demo-url="project.demoUrl" :github-links="project.githubLinks" />
    </div>

    <button
      class="group block w-full rounded-3xl border border-border bg-surface shadow-lg transition duration-300 hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      type="button"
      :aria-label="`Abrir imagem principal de ${project.title}`"
      @click="$emit('open-media', { type: 'image', src: project.image, alt: project.title })"
    >
      <img
        class="aspect-video w-full rounded-3xl object-cover"
        fetchpriority="high"
        :src="project.image"
        :alt="project.title"
      >
    </button>
  </div>
</template>

<script setup lang="ts">
import ProjectLinks from '~/components/projects/ProjectLinks.vue'
import ProjectTechnologies from '~/components/projects/ProjectTechnologies.vue'
import type { Project, ProjectGalleryItem } from '~/types/portfolio'

defineProps<{
  project: Project
}>()

defineEmits<{
  'open-media': [media: ProjectGalleryItem]
}>()
</script>
