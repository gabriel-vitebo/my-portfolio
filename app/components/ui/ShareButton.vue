<template>
  <a
    :href="shareUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
  >
    <Icon name="simple-icons:linkedin" />
    Compartilhar no LinkedIn
    <span class="sr-only">(abre em uma nova aba)</span>
  </a>
</template>

<script setup lang="ts">
import Icon from '~/components/ui/Icon.vue'

const props = defineProps<{
  url: string
  shortSlug: string
}>()

const shareUrl = computed(() => {
  const sharedUrl = new URL(props.url)
  sharedUrl.searchParams.set('utm_source', 'linkedin')
  sharedUrl.searchParams.set('utm_campaign', props.shortSlug)

  return `https://www.linkedin.com/sharing/share-offsite/?${new URLSearchParams({ url: sharedUrl.toString() })}`
})
</script>
