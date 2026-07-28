<template>
  <footer class="border-t border-border bg-background px-4 py-6 sm:px-6">
    <div class="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
      <p>{{ name }}</p>

      <NuxtLink
        class="w-fit font-medium uppercase tracking-wide text-muted transition duration-300 hover:text-primary"
        to="/changelog"
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
</script>
