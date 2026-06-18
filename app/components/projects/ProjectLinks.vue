<template>
  <div class="flex flex-wrap gap-3 text-sm" aria-label="Links do projeto">
    <a
      v-for="githubLink in githubLinks"
      :key="githubLink.url"
      class="inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-black transition duration-300 hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :href="githubLink.url"
      rel="noreferrer"
      target="_blank"
    >
      {{ githubLink.label ? `GitHub: ${githubLink.label}` : 'GitHub' }}
    </a>
    <a
      v-if="demoUrl"
      class="inline-flex rounded-full border border-border px-5 py-3 font-semibold text-primary transition duration-300 hover:border-primary hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      :href="demoUrl"
      rel="noreferrer"
      target="_blank"
    >
      Demo
    </a>
  </div>
</template>

<script setup lang="ts">
import type { ProjectGithubLink } from '~/types/portfolio'

defineProps<{
  demoUrl?: string
  githubLinks: ProjectGithubLink[]
}>()
</script>
