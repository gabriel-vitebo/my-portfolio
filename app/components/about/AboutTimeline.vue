<template>
  <aside class="relative w-full max-w-full" aria-label="Marcos da trajetória">
    <div class="absolute left-5 top-9 h-[calc(100%-4.5rem)] w-px bg-border sm:left-7 sm:top-10 sm:h-[calc(100%-5rem)]" aria-hidden="true" />

    <ol class="relative space-y-4">
      <li
        v-for="item in items"
        :key="item.title"
        class="group grid min-w-0 grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-3 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-4"
      >
        <div class="relative grid size-10 place-items-center rounded-full border border-border bg-background text-primary shadow-md transition duration-300 group-hover:border-primary/60 sm:size-14">
          <span class="absolute inset-0 rounded-full bg-primary/10 opacity-0 transition duration-300 group-hover:opacity-100" />
          <span
            v-if="item.highlight"
            class="absolute inset-0 animate-ping rounded-full border border-primary/30 motion-reduce:hidden"
            aria-hidden="true"
          />
          <AppIcon :name="item.icon" />
        </div>

        <div class="min-w-0 rounded-lg border border-border bg-background/70 p-4 shadow-sm transition duration-300 group-hover:border-primary/40">
          <p class="text-xs font-medium uppercase tracking-widest text-subtle">{{ item.label }}</p>
          <h3 class="mt-2 text-base font-semibold text-foreground">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-muted">{{ item.description }}</p>
        </div>
      </li>
    </ol>
  </aside>
</template>

<script setup lang="ts">
import AppIcon from '~/components/ui/Icon.vue'

interface TimelineItem {
  label: string
  title: string
  description: string
  icon: string
  highlight?: boolean
}

defineProps<{
  items: TimelineItem[]
}>()
</script>
