import { computed, ref, toValue, type MaybeRefOrGetter } from 'vue'

export const normalizeSearch = (value: string): string =>
  value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().trim()

/** The caller owns the dataset and decides which fields are searchable. */
export const useSearch = <T>(
  items: MaybeRefOrGetter<readonly T[]>,
  getFields: (item: T) => readonly string[],
) => {
  const query = ref('')
  const terms = computed(() => normalizeSearch(query.value).split(/\s+/u).filter(Boolean))
  const index = computed(() => toValue(items).map(item => ({
    item,
    fields: getFields(item).map(normalizeSearch),
  })))
  const filteredItems = computed(() => terms.value.length === 0
    ? toValue(items)
    : index.value
        .filter(({ fields }) => terms.value.every(term => fields.some(field => field.includes(term))))
        .map(({ item }) => item))

  return { query, filteredItems }
}
