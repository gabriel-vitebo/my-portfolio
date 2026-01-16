<template>
  <component
    :is="as"
    class="mx-auto max-w-[1200px] px-6 py-24"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: 'section' | 'div' | 'main'
  }>(),
  {
    as: 'section',
  }
)
</script>
