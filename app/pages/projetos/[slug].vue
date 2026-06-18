<template>
  <div class="min-h-screen bg-background text-primary">
    <AppNavbar :name="portfolio.hero.name" />

    <main class="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
      <NuxtLink class="text-sm text-secondary transition duration-300 hover:text-accent" to="/#projects">
        Voltar para projetos
      </NuxtLink>

      <article class="mt-10">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h1 class="text-4xl font-bold leading-tight text-primary sm:text-6xl">{{ project.title }}</h1>
            <p class="paragraph-lg mt-6 max-w-2xl text-secondary">
              {{ project.description }}
            </p>

            <ul class="mt-8 flex flex-wrap gap-2">
              <li
                v-for="technology in project.technologies"
                :key="technology"
                class="rounded-full border border-border bg-surface px-3 py-1 text-sm text-secondary"
              >
                {{ technology }}
              </li>
            </ul>

            <div class="mt-8 flex flex-wrap gap-3 text-sm">
              <a
                v-for="githubLink in project.githubLinks"
                :key="githubLink.url"
                class="inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-black transition duration-300 hover:bg-primary-hover"
                :href="githubLink.url"
                rel="noreferrer"
                target="_blank"
              >
                {{ githubLink.label ? `GitHub: ${githubLink.label}` : 'GitHub' }}
              </a>
              <a
                v-if="project.demoUrl"
                class="inline-flex rounded-full border border-border px-5 py-3 font-semibold text-primary transition duration-300 hover:border-primary hover:text-accent"
                :href="project.demoUrl"
                rel="noreferrer"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </div>

          <button
            class="group block w-full rounded-3xl border border-border bg-surface shadow-lg transition duration-300 hover:border-primary/50"
            type="button"
            :aria-label="`Abrir imagem principal de ${project.title}`"
            @click="openMedia({ type: 'image', src: project.image, alt: project.title })"
          >
            <img
              class="aspect-video w-full rounded-3xl object-cover"
              :src="project.image"
              :alt="project.title"
            >
          </button>
        </div>

        <section class="mt-14" aria-labelledby="project-gallery-title">
          <h2 id="project-gallery-title" class="text-2xl font-semibold text-primary">Galeria</h2>
          <div class="mt-6 grid gap-4 md:grid-cols-2">
            <button
              v-for="media in project.gallery"
              :key="getMediaKey(media)"
              class="group relative block w-full overflow-hidden rounded-2xl border border-border bg-surface transition duration-300 hover:scale-[1.02] hover:border-primary/50"
              type="button"
              :aria-label="getMediaLabel(media)"
              @click="openMedia(media)"
            >
              <img
                v-if="media.type === 'image'"
                class="aspect-video w-full rounded-2xl object-cover"
                :src="media.src"
                :alt="media.alt || `${project.title} - imagem do projeto`"
              >
              <template v-else>
                <img
                  class="aspect-video w-full rounded-2xl object-cover"
                  :src="getYoutubeThumbnail(media.url)"
                  :alt="media.title"
                >
                <span class="absolute inset-0 grid place-items-center bg-black/20 transition duration-300 group-hover:bg-black/10">
                  <span class="grid h-14 w-14 place-items-center rounded-full border border-white/30 bg-black/65">
                    <span class="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
                  </span>
                </span>
              </template>
            </button>
          </div>
        </section>
      </article>
    </main>

    <Teleport to="body">
      <div
        v-if="selectedMedia"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        @click.self="closeMedia"
      >
        <button
          class="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl leading-none text-white transition duration-300 hover:border-primary hover:text-accent"
          type="button"
          aria-label="Fechar mídia"
          @click="closeMedia"
        >
          ×
        </button>

        <img
          v-if="selectedMedia.type === 'image'"
          class="max-h-[90vh] max-w-[92vw] rounded-2xl border border-white/10 bg-surface object-contain shadow-lg"
          :src="selectedMedia.src"
          :alt="selectedMedia.alt || project.title"
        >
        <iframe
          v-else
          class="aspect-video w-[92vw] max-w-5xl rounded-2xl border border-white/10 bg-surface shadow-lg"
          :src="getYoutubeEmbedUrl(selectedMedia.url)"
          :title="selectedMedia.title"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '~/components/layout/AppNavbar.vue'
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

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMedia()
  }
}

const getYoutubeId = (url: string) => {
  const patterns = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
  ]

  return patterns
    .map((pattern) => url.match(pattern)?.[1])
    .find(Boolean)
}

const getYoutubeEmbedUrl = (url: string) => {
  const videoId = getYoutubeId(url)

  return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : url
}

const getYoutubeThumbnail = (url: string) => {
  const videoId = getYoutubeId(url)

  return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : ''
}

const getMediaKey = (media: ProjectGalleryItem) => media.type === 'image' ? media.src : media.url

const getMediaLabel = (media: ProjectGalleryItem) => (
  media.type === 'image'
    ? `Abrir imagem da galeria de ${project?.title}`
    : `Assistir vídeo ${media.title}`
)

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Projeto não encontrado',
  })
}

watch(selectedMedia, (media) => {
  if (!import.meta.client) return

  document.body.style.overflow = media ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})
</script>
