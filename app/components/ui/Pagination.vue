<template>
  <nav v-if="totalPages > 1" :aria-label="label" class="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
    <button type="button" class="pagination-button" aria-label="Página anterior" :disabled="page <= 1" @click="selectPage(page - 1)">
      <span aria-hidden="true">←</span>
    </button>
    <template v-for="item in visiblePages" :key="item">
      <span v-if="typeof item === 'string'" aria-hidden="true" class="px-1 text-muted">…</span>
      <button
        v-else
        type="button"
        class="pagination-button"
        :aria-label="`Página ${item}`"
        :aria-current="item === page ? 'page' : undefined"
        @click="selectPage(item)"
      >
        {{ item }}
      </button>
    </template>
    <button type="button" class="pagination-button" aria-label="Próxima página" :disabled="page >= totalPages" @click="selectPage(page + 1)">
      <span aria-hidden="true">→</span>
    </button>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  page: number
  totalPages: number
  label?: string
}>(), { label: 'Paginação' })

const emit = defineEmits<{ 'update:page': [page: number] }>()
const selectPage = (page: number) => {
  if (page >= 1 && page <= props.totalPages && page !== props.page) {
    emit('update:page', page)
  }
}

const visiblePages = computed(() => {
  if (props.totalPages <= 5) {
    return Array.from({ length: props.totalPages }, (_, index) => index + 1)
  }

  const pages = new Set([1, props.totalPages, props.page])
  if (props.page <= 3) {
    pages.add(2)
    pages.add(3)
  }
  else if (props.page >= props.totalPages - 2) {
    pages.add(props.totalPages - 2)
    pages.add(props.totalPages - 1)
  }

  const result: (number | string)[] = []
  let previous = 0
  for (const page of [...pages].sort((a, b) => a - b)) {
    if (page - previous > 1) result.push(`gap-${page}`)
    result.push(page)
    previous = page
  }
  return result
})
</script>

<style scoped>
.pagination-button {
  min-width: 2.25rem;
  min-height: 2.75rem;
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
}

.pagination-button:hover:not(:disabled),
.pagination-button[aria-current='page'] {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-text-primary);
}

.pagination-button:disabled {
  cursor: not-allowed;
  opacity: 0.4;
}
</style>
