import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { usePagination } from '~/composables/usePagination'

describe('usePagination', () => {
  it.each([[0, 1], [6, 1], [7, 2], [12, 2], [13, 3], [15, 3]])('paginates %i items into %i pages', (count, pages) => {
    const items = Array.from({ length: count }, (_, index) => index)
    const pagination = usePagination(items)
    expect(pagination.totalPages.value).toBe(pages)
    const displayed: number[] = []
    for (let page = 1; page <= pages; page++) {
      pagination.setPage(page)
      expect(pagination.paginatedItems.value.length).toBeLessThanOrEqual(6)
      displayed.push(...pagination.paginatedItems.value)
    }
    expect(displayed).toEqual(items)
  })

  it('clamps page changes and ignores non-finite input', () => {
    const pagination = usePagination(Array.from({ length: 13 }, (_, index) => index))
    pagination.setPage(99)
    expect(pagination.currentPage.value).toBe(3)
    expect(pagination.paginatedItems.value).toEqual([12])
    pagination.setPage(-1)
    expect(pagination.currentPage.value).toBe(1)
    pagination.setPage(NaN)
    expect(pagination.currentPage.value).toBe(1)
  })

  it('reacts to additions and removals and supports other page sizes', () => {
    const items = ref([1, 2, 3])
    const pagination = usePagination(items, 2)
    pagination.setPage(2)
    items.value.push(4, 5)
    expect(pagination.totalPages.value).toBe(3)
    pagination.setPage(3)
    items.value = [1]
    expect(pagination.currentPage.value).toBe(1)
    expect(pagination.paginatedItems.value).toEqual([1])
  })

  it.each([0, -1, 1.5, Infinity])('rejects invalid page size %s', size => {
    expect(() => usePagination([], size)).toThrow(RangeError)
  })
})
