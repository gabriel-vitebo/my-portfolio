<script setup lang="ts">
defineProps<{
  as?: 'section' | 'div' | 'main'
}>()
</script>

<template>
  <component
    :is="as ?? 'section'"
    class="
      mx-auto
      max-w-[1200px]
      px-6
      py-24
    "
  >
    <slot />
  </component>
</template>
