<template>
  <div class="grid w-full max-w-full gap-3 sm:grid-cols-2 lg:grid-cols-1">
    <article
      v-for="principle in principles"
      :key="principle.title"
      class="group min-w-0 rounded-lg border border-border bg-surface/70 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/40"
    >
      <div class="flex items-start gap-3">
        <span class="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary transition duration-300 group-hover:border-primary/60">
          <AppIcon :name="principle.icon" class-name="size-4" />
        </span>

        <div class="min-w-0">
          <h3 class="text-base font-semibold text-foreground">{{ principle.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-muted">{{ principle.description }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '~/components/ui/Icon.vue'

interface WorkPrinciple {
  title: string
  description: string
  icon: string
}

defineProps<{
  principles: WorkPrinciple[]
}>()
</script>
