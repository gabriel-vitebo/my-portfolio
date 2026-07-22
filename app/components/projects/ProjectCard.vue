<template>
  <UCard
    as="article"
    class="h-full overflow-hidden rounded-2xl border border-border bg-surface/50 transition duration-300 hover:-translate-y-1 hover:border-primary/50"
    :ui="{ body: 'p-0 sm:p-0' }"
  >
    <NuxtLink class="flex h-full flex-col" :aria-label="`Abrir projeto ${project.title}`" :to="`/projetos/${project.slug}`">
      <NuxtImg
        class="aspect-[16/9] w-full bg-surface object-cover"
        :src="project.image"
        :alt="project.title"
        width="768"
        height="432"
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 384px"
        densities="x1"
        format="webp"
        quality="70"
        loading="lazy"
        decoding="async"
      />

      <div class="flex flex-1 flex-col p-4">
        <h3 class="text-base font-semibold text-primary">{{ project.title }}</h3>
        <p v-if="project.shortDescription" class="mt-2 line-clamp-3 text-sm leading-6 text-secondary">
          {{ project.shortDescription }}
        </p>
      </div>
    </NuxtLink>
  </UCard>
</template>

<script setup lang="ts">
import type { Project } from '~/types/portfolio'

defineProps<{
  project: Project
}>()
</script>
