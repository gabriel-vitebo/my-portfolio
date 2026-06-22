<template>
  <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
    <div>
      <h1 class="text-4xl font-bold leading-tight text-primary sm:text-6xl">{{ project.title }}</h1>
      <div class="mt-6 max-w-2xl">
        <p
          :id="descriptionId"
          class="paragraph-lg text-secondary"
          :class="{ 'line-clamp-4': shouldCollapseDescription }"
        >
          {{ project.description }}
        </p>

        <button
          v-if="canToggleDescription"
          class="mt-3 text-sm font-medium text-accent transition duration-300 hover:text-accent-hover"
          type="button"
          :aria-controls="descriptionId"
          :aria-expanded="isDescriptionExpanded"
          @click="isDescriptionExpanded = !isDescriptionExpanded"
        >
          {{ isDescriptionExpanded ? 'Ler menos' : 'Leia mais' }}
        </button>
      </div>

      <ProjectTechnologies class="mt-8" :technologies="project.technologies" />
      <ProjectLinks class="mt-8" :demo-url="project.demoUrl" :github-links="project.githubLinks" />
    </div>

    <button
      class="group block w-full rounded-3xl border border-border bg-surface shadow-lg transition duration-300 hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:sticky lg:top-28"
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

const props = defineProps<{
  project: Project
}>()

defineEmits<{
  'open-media': [media: ProjectGalleryItem]
}>()

const isDescriptionExpanded = ref(false)
const descriptionId = computed(() => `project-page-description-${props.project.slug}`)
const canToggleDescription = computed(() => props.project.description.length > 260)
const shouldCollapseDescription = computed(() => canToggleDescription.value && !isDescriptionExpanded.value)
</script>
