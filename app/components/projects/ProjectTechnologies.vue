<template>
  <ul class="flex flex-wrap gap-2" :aria-label="label">
    <li
      v-for="technology in technologies"
      :key="technology"
      class="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
    >
      {{ technologyLabels?.[technology] ?? getProjectTechnologyName(technology) }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { getProjectTechnologyName, type SkillId } from '~/data/skills'

withDefaults(defineProps<{
  label?: string
  technologies: SkillId[]
  technologyLabels?: Partial<Record<SkillId, string>>
}>(), {
  label: 'Tecnologias utilizadas',
})
</script>
