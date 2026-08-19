<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <article
      v-for="education in items"
      :key="education.title"
      class="group flex min-h-44 min-w-0 flex-col justify-between rounded-lg border border-border bg-background/70 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/40"
    >
      <div>
        <span class="grid size-10 place-items-center rounded-lg border border-border bg-surface text-primary transition duration-300 group-hover:border-primary/60">
          <AppIcon :name="education.icon" class-name="size-4" />
        </span>

        <h3 class="mt-4 text-lg font-semibold leading-snug text-foreground">{{ education.title }}</h3>
        <p v-if="education.institution" class="mt-2 text-sm leading-6 text-muted">{{ education.institution }}</p>
      </div>

      <p
        class="mt-5 w-fit rounded-lg border px-3 py-1.5 text-xs font-medium uppercase tracking-widest"
        :class="education.status === 'Cursando' ? 'border-primary/40 text-primary' : 'border-border text-subtle'"
      >
        {{ education.status }}
      </p>
    </article>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '~/components/ui/Icon.vue'

interface EducationItem {
  title: string
  institution?: string
  status: string
  icon: string
}

defineProps<{
  items: EducationItem[]
}>()
</script>
