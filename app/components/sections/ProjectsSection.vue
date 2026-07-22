<template>
  <section id="projects" class="grid min-h-screen place-items-center bg-background px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:min-h-0 lg:py-16">
    <div class="mx-auto w-full max-w-6xl">
      <div class="max-w-2xl">
        <h2 class="text-3xl font-bold text-primary sm:text-4xl">{{ title }}</h2>
        <p class="mt-4 text-sm leading-6 text-secondary sm:text-base">
          {{ subtitle }}
        </p>
      </div>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/projects/ProjectCard.vue'
import type { Project } from '~/types/portfolio'

defineProps<{
  projects: Project[]
  subtitle: string
  title: string
}>()
</script>
