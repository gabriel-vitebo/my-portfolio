<template>
  <article class="h-full overflow-hidden rounded-2xl border border-border bg-surface/50 transition duration-300 hover:-translate-y-1 hover:border-primary/50">
    <NuxtLink class="flex h-full flex-col" :aria-label="`Abrir projeto ${project.title}`" :to="`/projetos/${project.slug}`">
      <img
        class="aspect-[16/9] w-full object-cover"
        :src="project.image"
        :alt="project.title"
      >

      <div class="flex flex-1 flex-col p-4">
        <h3 class="text-base font-semibold text-primary">{{ project.title }}</h3>
        <p v-if="project.shortDescription" class="mt-2 line-clamp-2 text-sm leading-6 text-secondary">
          {{ project.shortDescription }}
        </p>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/types/portfolio'

defineProps<{
  project: Project
}>()
</script>
