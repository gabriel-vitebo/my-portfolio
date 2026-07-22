<template>
  <ul class="flex flex-wrap gap-2" :aria-label="label">
    <UBadge
      v-for="technology in technologies"
      :key="technology"
      as="li"
      class="rounded-full border border-border bg-surface px-3 py-1 text-sm text-secondary"
      color="neutral"
      variant="outline"
    >
      {{ technology }}
    </UBadge>
  </ul>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  label?: string
  technologies: string[]
}>(), {
  label: 'Tecnologias utilizadas',
})
</script>
