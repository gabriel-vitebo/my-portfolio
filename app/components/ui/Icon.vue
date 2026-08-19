<template>
  <NuxtIcon
    :name="name"
    :class="className"
    :size="size"
    mode="svg"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  className?: string
  size?: string
}>(), {
  className: 'size-5',
  size: '1em',
})
</script>
