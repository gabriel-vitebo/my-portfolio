<template>
  <section class="mt-14" aria-labelledby="project-gallery-title">
    <h2 id="project-gallery-title" class="text-2xl font-semibold text-primary">Galeria</h2>
    <div class="mt-6 grid gap-4 md:grid-cols-2">
      <UButton
        v-for="media in items"
        :key="getMediaKey(media)"
        class="group relative block w-full overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:scale-[1.02] hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        type="button"
        color="neutral"
        variant="outline"
        :aria-label="getMediaLabel(media)"
        @click="$emit('open-media', media)"
      >
        <NuxtImg
          v-if="media.type === 'image'"
          class="aspect-video w-full rounded-2xl object-cover"
          loading="lazy"
          decoding="async"
          :src="media.src"
          :alt="media.alt || `${projectTitle} - imagem do projeto`"
          width="1280"
          height="720"
          sizes="(max-width: 767px) 100vw, 576px"
          format="avif"
        />
        <template v-else>
          <img
            class="aspect-video w-full rounded-2xl object-cover"
            loading="lazy"
            decoding="async"
            :src="getYoutubeThumbnail(media.url)"
            :alt="media.title"
            width="1280"
            height="720"
          >
          <span class="absolute inset-0 grid place-items-center bg-black/20 transition duration-300 group-hover:bg-black/10" aria-hidden="true">
            <span class="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-black/65">
              <span class="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
            </span>
          </span>
        </template>
      </UButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProjectGalleryItem } from '~/types/portfolio'

const props = defineProps<{
  items: ProjectGalleryItem[]
  projectTitle: string
}>()

defineEmits<{
  'open-media': [media: ProjectGalleryItem]
}>()

const { getYoutubeThumbnail } = useYoutubeMedia()

const getMediaKey = (media: ProjectGalleryItem) => media.type === 'image' ? media.src : media.url

const getMediaLabel = (media: ProjectGalleryItem) => (
  media.type === 'image'
    ? `Abrir imagem da galeria de ${props.projectTitle}`
    : `Assistir vídeo ${media.title}`
)
</script>
