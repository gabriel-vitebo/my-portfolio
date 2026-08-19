<template>
  <div
    class="relative mx-auto w-full max-w-[17rem] rounded-3xl border border-border bg-surface p-3 shadow-lg sm:max-w-sm lg:max-w-md"
  >
    <div class="absolute inset-0 -z-10 rounded-3xl shadow-glow" />
    <NuxtImg
      class="aspect-[4/5] w-full rounded-2xl object-cover"
      :src="src"
      :alt="alt"
      width="1024"
      height="1280"
      sizes="(max-width: 1023px) 384px, 448px"
      format="avif"
      quality="82"
      preload
      fetchpriority="high"
    />

    <nav
      v-if="socials?.length"
      class="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3"
      aria-label="Links sociais"
    >
      <a
        v-for="social in socials"
        :key="social.url"
        class="group relative grid size-11 place-items-center rounded-full border border-border bg-background/80 text-foreground shadow-lg backdrop-blur transition duration-300 hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        :href="social.url"
        :aria-label="social.label"
        rel="noreferrer"
        target="_blank"
      >
        <AppIcon :name="getSocialIcon(social.label)" />
        <span
          class="pointer-events-none absolute bottom-[calc(100%+0.75rem)] left-1/2 w-max max-w-[min(17rem,80vw)] -translate-x-1/2 rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          {{ social.url }}
        </span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '~/components/ui/Icon.vue'
import type { SocialLink } from '~/types/portfolio'

defineProps<{
  src: string
  alt: string
  socials?: SocialLink[]
}>()

function getSocialIcon(label: string) {
  const normalizedLabel = label.toLowerCase()

  if (normalizedLabel.includes('github')) {
    return 'simple-icons:github'
  }

  if (normalizedLabel.includes('linkedin')) {
    return 'simple-icons:linkedin'
  }

  return 'lucide:mail'
}
</script>
