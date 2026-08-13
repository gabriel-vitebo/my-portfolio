<template>
  <nav
    ref="breadcrumbElement"
    aria-label="Caminho da página"
    class="relative flex min-w-0 max-w-full items-center gap-2 overflow-hidden rounded-md border border-border bg-surface/70 px-3 py-1.5 text-xs font-medium text-subtle shadow-sm"
  >
    <template v-for="(item, index) in visibleItems" :key="`${item.label}-${index}`">
      <span v-if="index > 0" class="text-border">-&gt;</span>

      <NuxtLink
        v-if="item.to && index < visibleItems.length - 1"
        class="shrink-0 text-muted transition duration-300 hover:text-primary"
        :to="item.to"
      >
        {{ item.label }}
      </NuxtLink>

      <span
        v-else
        :class="[
          item.isEllipsis ? 'shrink-0 text-subtle' : 'truncate text-foreground',
        ]"
      >
        {{ item.label }}
      </span>
    </template>

    <span
      ref="measurementElement"
      aria-hidden="true"
      class="pointer-events-none invisible absolute left-0 top-0 flex items-center gap-2 whitespace-nowrap px-3 py-1.5 text-xs font-medium"
    >
      <template v-for="(item, index) in items" :key="`measure-${item.label}-${index}`">
        <span v-if="index > 0">-&gt;</span>
        <span>{{ item.label }}</span>
      </template>
    </span>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
  isEllipsis?: boolean
}

const props = defineProps<{
  items: BreadcrumbItem[]
}>()

const breadcrumbElement = ref<HTMLElement | null>(null)
const measurementElement = ref<HTMLElement | null>(null)
const isCompact = ref(false)
let resizeObserver: ResizeObserver | null = null

const compactItems = computed<BreadcrumbItem[]>(() => {
  if (props.items.length <= 2) return props.items

  return [
    props.items[0]!,
    { label: '...', isEllipsis: true },
    props.items[props.items.length - 1]!,
  ]
})

const visibleItems = computed(() => isCompact.value ? compactItems.value : props.items)

const updateCompactMode = async () => {
  await nextTick()

  const breadcrumb = breadcrumbElement.value
  const measurement = measurementElement.value
  if (!breadcrumb || !measurement || props.items.length <= 2) {
    isCompact.value = false
    return
  }

  isCompact.value = measurement.scrollWidth > breadcrumb.clientWidth
}

watch(() => props.items, updateCompactMode, { deep: true, immediate: true })

onMounted(() => {
  updateCompactMode()

  if (!breadcrumbElement.value || typeof ResizeObserver === 'undefined') return

  resizeObserver = new ResizeObserver(updateCompactMode)
  resizeObserver.observe(breadcrumbElement.value)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})
</script>
