<template>
  <nav
    aria-label="Caminho da página"
    class="flex min-w-0 items-center gap-2 overflow-hidden rounded-md border border-border bg-surface/70 px-3 py-1.5 text-xs font-medium text-subtle shadow-sm"
  >
    <template v-for="(item, index) in items" :key="`${item.label}-${index}`">
      <span v-if="index > 0" class="text-border">-&gt;</span>

      <NuxtLink
        v-if="item.to && index < items.length - 1"
        class="shrink-0 text-muted transition duration-300 hover:text-primary"
        :to="item.to"
      >
        {{ item.label }}
      </NuxtLink>

      <span v-else class="truncate text-foreground">
        {{ item.label }}
      </span>
    </template>
  </nav>
</template>

<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>
