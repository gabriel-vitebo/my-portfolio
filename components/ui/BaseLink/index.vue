<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a
    :href="href"
    class="
      inline-flex
      items-center
      gap-2
      text-[color:var(--color-primary)]
      transition-colors
      duration-200
      hover:opacity-80
    "
  >
    <slot />
  </a>
</template>
