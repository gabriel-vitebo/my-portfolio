<script setup lang="ts">
import { computed } from 'vue'

const buttonClasses = 'min-w-9 min-h-11 rounded-sm border border-border p-2 text-muted enabled:hover:bg-primary! enabled:hover:border-primary enabled:hover:text-foreground aria-[current=page]:bg-primary! aria-[current=page]:border-primary aria-[current=page]:text-foreground disabled:cursor-not-allowed! disabled:opacity-40'

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

<template>
  <nav v-if="totalPages > 1" :aria-label="label" class="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
    <button type="button" :class="buttonClasses" aria-label="Página anterior" :disabled="page <= 1" @click="selectPage(page - 1)">
      <span aria-hidden="true">←</span>
    </button>
    <template v-for="item in visiblePages" :key="item">
      <span v-if="typeof item === 'string'" aria-hidden="true" class="px-1 text-muted">…</span>
      <button
        v-else
        type="button"
        :class="buttonClasses"
        :aria-label="`Página ${item}`"
        :aria-current="item === page ? 'page' : undefined"
        @click="selectPage(item)"
      >
        {{ item }}
      </button>
    </template>
    <button type="button" :class="buttonClasses" aria-label="Próxima página" :disabled="page >= totalPages" @click="selectPage(page + 1)">
      <span aria-hidden="true">→</span>
    </button>
  </nav>
</template>
