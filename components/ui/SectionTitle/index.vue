<script setup lang="ts">
defineProps<{
  label?: string
}>()
</script>

<template>
  <div class="mb-12">
    <p
      v-if="label"
      class="mb-2 text-sm uppercase tracking-wide text-[color:var(--color-text-secondary)]"
    >
      {{ label }}
    </p>

    <h2 class="text-3xl font-medium text-[color:var(--color-text-primary)]">
      <slot />
    </h2>
  </div>
</template>
