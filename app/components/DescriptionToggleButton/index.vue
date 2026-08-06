<template>
  <UButton
    class="mt-3 text-sm font-medium text-primary transition duration-300 hover:text-primary-hover"
    type="button"
    color="neutral"
    variant="link"
    :aria-controls="controls"
    :aria-expanded="expanded"
    @click="$emit('toggle')"
  >
    {{ expanded ? 'Ler menos' : 'Leia mais' }}
  </UButton>
</template>

<script setup lang="ts">
defineProps<{
  controls: string
  expanded: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>
