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

        <UButton
          v-if="canToggleDescription"
          class="mt-3 text-sm font-medium text-accent transition duration-300 hover:text-accent-hover"
          type="button"
          color="neutral"
          variant="link"
          :aria-controls="descriptionId"
          :aria-expanded="isDescriptionExpanded"
          @click="toggleDescription"
        >
          {{ isDescriptionExpanded ? 'Ler menos' : 'Leia mais' }}
        </UButton>
      </div>

      <ProjectTechnologies class="mt-8" :technologies="project.technologies" />
      <ProjectLinks class="mt-8" :demo-url="project.demoUrl" :github-links="project.githubLinks" />
    </div>

    <UButton
      class="group block w-full rounded-3xl border border-border bg-surface shadow-lg transition duration-300 hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:sticky lg:top-28"
      type="button"
      color="neutral"
      variant="outline"
      :aria-label="`Abrir imagem principal de ${project.title}`"
      @click="openHeroImage"
    >
      <NuxtImg
        class="aspect-video w-full rounded-3xl object-cover"
        fetchpriority="high"
        loading="eager"
        decoding="async"
        :src="project.image"
        :alt="project.title"
        width="1280"
        height="720"
        sizes="(max-width: 1023px) 100vw, 640px"
        format="webp"
        quality="75"
        preload
      />
    </UButton>
  </div>
</template>

<script setup lang="ts">
import ProjectLinks from '~/components/projects/ProjectLinks.vue'
import ProjectTechnologies from '~/components/projects/ProjectTechnologies.vue'
import type { Project, ProjectGalleryItem } from '~/types/portfolio'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  'open-media': [media: ProjectGalleryItem]
}>()

const isDescriptionExpanded = ref(false)
const descriptionId = computed(() => `project-page-description-${props.project.slug}`)
const canToggleDescription = computed(() => props.project.description.length > 260)
const shouldCollapseDescription = computed(() => canToggleDescription.value && !isDescriptionExpanded.value)

function toggleDescription() {
  isDescriptionExpanded.value = !isDescriptionExpanded.value
}

function openHeroImage() {
  emit('open-media', { type: 'image', src: props.project.image, alt: props.project.title })
}
</script>
