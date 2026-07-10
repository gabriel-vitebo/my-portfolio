<template>
  <footer class="border-t border-border bg-background px-4 py-6 sm:px-6">
    <div class="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-tertiary sm:flex-row sm:items-center sm:justify-between">
      <p>{{ name }}</p>

      <NuxtLink
        class="w-fit font-medium uppercase tracking-wide text-secondary transition duration-300 hover:text-accent"
        to="/changelog"
        @click.stop.prevent="goToChangelog"
      >
        V{{ version }}
      </NuxtLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()

const config = useRuntimeConfig()
const version = config.public.appVersion

const goToChangelog = () => {
  return navigateTo('/changelog')
}
</script>
