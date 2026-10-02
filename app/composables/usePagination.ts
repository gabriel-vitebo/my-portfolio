import { computed, ref, toValue, watch, type MaybeRefOrGetter } from 'vue'

export const usePagination = <T>(items: MaybeRefOrGetter<readonly T[]>, pageSize = 6) => {
  if (!Number.isInteger(pageSize) || pageSize < 1) {
    throw new RangeError('pageSize must be a positive integer')
  }

  const currentPage = ref(1)
  const totalPages = computed(() => Math.max(1, Math.ceil(toValue(items).length / pageSize)))
  const setPage = (page: number) => {
    if (Number.isFinite(page)) {
      currentPage.value = Math.min(totalPages.value, Math.max(1, Math.trunc(page)))
    }
  }

  watch(totalPages, () => setPage(currentPage.value), { flush: 'sync' })

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    return toValue(items).slice(start, start + pageSize)
  })

  return { currentPage: computed(() => currentPage.value), totalPages, paginatedItems, setPage }
}
