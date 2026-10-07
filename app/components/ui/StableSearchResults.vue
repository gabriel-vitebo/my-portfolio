<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ active: boolean }>()
const content = ref<HTMLElement | null>(null)
const baseline = ref<HTMLElement | null>(null)

// Capture the rendered page BEFORE Vue replaces it with filtered results. CSS
// lays out this inert copy at the current width, including cards and pagination.
// No pixel measurements are frozen across responsive breakpoints.
watch(() => props.active, (active) => {
  if (!baseline.value || !content.value) return
  baseline.value.replaceChildren()
  if (!active) return

  const snapshot = content.value.cloneNode(true) as HTMLElement
  snapshot.removeAttribute('data-search-results-content')
  // Blog cards contain heading IDs. The layout-only copy must not duplicate them.
  snapshot.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'))
  baseline.value.append(snapshot)
}, { flush: 'pre' })
</script>

<template>
  <div class="grid" data-search-results>
    <div
      ref="baseline"
      class="invisible pointer-events-none col-start-1 row-start-1 min-w-0 self-start"
      aria-hidden="true"
      inert
      data-search-results-baseline
    />
    <div
      ref="content"
      class="col-start-1 row-start-1 flow-root min-w-0 self-start"
      data-search-results-content
    >
      <slot />
    </div>
  </div>
</template>
