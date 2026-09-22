<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <article
      v-for="education in items"
      :key="education.title"
      class="group relative flex min-h-52 min-w-0 flex-col justify-between overflow-hidden rounded-lg border bg-background/70 p-5 shadow-sm transition duration-300 hover:-translate-y-0.5"
      :class="isOngoing(education) ? 'border-primary/40 ring-1 ring-primary/10 hover:border-primary/60' : 'border-border hover:border-primary/30'"
    >
      <span
        v-if="isOngoing(education)"
        class="absolute inset-x-0 top-0 h-1 bg-primary"
        aria-hidden="true"
      />

      <div>
        <span class="grid size-10 place-items-center rounded-lg border border-border bg-surface text-primary transition duration-300 group-hover:border-primary/60">
          <AppIcon :name="education.icon" class-name="size-4" />
        </span>

        <h3 class="mt-4 text-lg font-semibold leading-snug text-foreground">{{ education.title }}</h3>
        <p v-if="education.institution" class="mt-2 text-sm leading-6 text-muted">{{ education.institution }}</p>
      </div>

      <div class="mt-6 flex flex-wrap items-center gap-2">
        <p
          class="inline-flex w-fit items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium uppercase tracking-widest"
          :class="isOngoing(education) ? 'border-primary/40 bg-primary/5 text-primary' : 'border-border text-subtle'"
        >
          <AppIcon
            :name="isOngoing(education) ? 'lucide:loader-circle' : 'lucide:check'"
            class-name="size-3.5"
          />
          {{ education.status }}
        </p>
      </div>
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

const isOngoing = (education: EducationItem) => education.status === 'Em andamento'
</script>
