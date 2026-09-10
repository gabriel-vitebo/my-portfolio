<template>
  <button
    class="mt-3 text-sm font-medium text-primary transition duration-300 hover:text-primary-hover"
    type="button"
    :aria-controls="controls"
    :aria-expanded="expanded"
    @click="$emit('toggle')"
  >
    {{ expanded ? 'Ler menos' : 'Leia mais' }}
  </button>
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
