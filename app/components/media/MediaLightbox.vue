<template>
  <Teleport to="body">
    <div
      v-if="media"
      ref="dialogElement"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      :aria-label="dialogLabel"
      tabindex="-1"
      @click.self="$emit('close')"
      @keydown="handleDialogKeydown"
    >
      <button
        ref="closeButton"
        class="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl leading-none text-white transition duration-300 hover:border-primary hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        type="button"
        aria-label="Fechar mídia"
        @click="$emit('close')"
      >
        ×
      </button>

      <img
        v-if="media.type === 'image'"
        class="h-auto max-h-[90vh] w-auto max-w-[92vw] rounded-2xl border border-white/10 bg-surface object-contain shadow-lg"
        :src="media.src"
        :alt="media.alt || fallbackTitle"
        width="1600"
        height="1200"
        decoding="async"
      />
      <iframe
        v-else
        class="aspect-video w-[92vw] max-w-5xl rounded-2xl border border-white/10 bg-surface shadow-lg"
        :src="getYoutubeEmbedUrl(media.url)"
        :title="media.title"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { ProjectGalleryItem } from '~/types/portfolio'

const props = defineProps<{
  fallbackTitle: string
  media: ProjectGalleryItem | null
}>()

const emit = defineEmits<{
  close: []
}>()

const { getYoutubeEmbedUrl } = useYoutubeMedia()
const closeButton = ref<HTMLButtonElement | null>(null)
const dialogElement = ref<HTMLElement | null>(null)
let previouslyFocusedElement: HTMLElement | null = null

const dialogLabel = computed(() => {
  if (!props.media) return 'Mídia do projeto'

  return props.media.type === 'image'
    ? `Imagem de ${props.fallbackTitle}`
    : props.media.title
})

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const getFocusableElements = () => (
  Array.from(dialogElement.value?.querySelectorAll<HTMLElement>(focusableSelector) || [])
    .filter((element) => {
      const style = window.getComputedStyle(element)

      return !element.hasAttribute('disabled') && style.visibility !== 'hidden' && style.display !== 'none'
    })
)

const handleDialogKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('close')
    return
  }

  if (event.key !== 'Tab') return

  const focusableElements = getFocusableElements()
  if (!focusableElements.length) {
    event.preventDefault()
    dialogElement.value?.focus()
    return
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (!firstElement || !lastElement) return

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault()
    lastElement.focus()
  }

  if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

watch(
  () => props.media,
  async (media) => {
    if (!import.meta.client) return

    if (media) {
      previouslyFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null
      document.body.style.overflow = 'hidden'

      await nextTick()
      closeButton.value?.focus()
      return
    }

    document.body.style.overflow = ''
    previouslyFocusedElement?.focus()
    previouslyFocusedElement = null
  },
)

onBeforeUnmount(() => {
  if (!import.meta.client) return

  document.body.style.overflow = ''
  previouslyFocusedElement?.focus()
})
</script>
