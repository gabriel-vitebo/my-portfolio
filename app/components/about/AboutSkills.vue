<template>
  <div class="grid w-full max-w-full gap-5">
    <div class="grid min-w-0 gap-5 lg:grid-cols-2">
      <section class="min-w-0 rounded-lg border border-primary/35 bg-primary/5 p-5 shadow-sm">
        <div class="flex items-center gap-3">
          <span class="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-black">
            <AppIcon name="lucide:monitor-smartphone" class-name="size-4" />
          </span>
          <div class="min-w-0">
            <p class="text-xs font-medium uppercase tracking-widest text-primary">Front-end</p>
            <h3 class="mt-1 text-lg font-semibold text-foreground">Interfaces, componentes e experiência</h3>
          </div>
        </div>

        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="skill in frontEndSkills"
            :key="skill.name"
            class="inline-flex min-w-0 items-center gap-2 rounded-lg border border-primary/35 bg-background/80 px-3 py-2 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-primary/70"
          >
            <AppIcon :name="skill.icon" class-name="size-4 shrink-0 text-primary" />
            <span class="break-words">{{ skill.name }}</span>
          </li>
        </ul>
      </section>

      <section class="min-w-0 rounded-lg border border-primary/35 bg-primary/5 p-5 shadow-sm">
        <div class="flex items-center gap-3">
          <span class="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-black">
            <AppIcon name="lucide:server-cog" class-name="size-4" />
          </span>
          <div class="min-w-0">
            <p class="text-xs font-medium uppercase tracking-widest text-primary">Back-end</p>
            <h3 class="mt-1 text-lg font-semibold text-foreground">APIs, dados e regras de negócio</h3>
          </div>
        </div>

        <ul class="mt-5 flex flex-wrap gap-2">
          <li
            v-for="skill in backEndSkills"
            :key="skill.name"
            class="inline-flex min-w-0 items-center gap-2 rounded-lg border border-primary/35 bg-background/80 px-3 py-2 text-sm font-semibold text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-primary/70"
          >
            <AppIcon :name="skill.icon" class-name="size-4 shrink-0 text-primary" />
            <span class="break-words">{{ skill.name }}</span>
          </li>
        </ul>
      </section>
    </div>

    <section class="min-w-0 rounded-lg border border-border bg-surface/70 p-5 shadow-sm">
      <div class="flex items-center gap-3">
        <span class="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary">
          <AppIcon name="lucide:blocks" class-name="size-4" />
        </span>
        <div class="min-w-0">
          <p class="text-xs font-medium uppercase tracking-widest text-subtle">Ferramentas & Ecossistema</p>
          <h3 class="mt-1 text-lg font-semibold text-foreground">Ferramentas que apoiam meu fluxo de desenvolvimento</h3>
        </div>
      </div>

      <ul class="mt-5 flex flex-wrap gap-2">
        <li
          v-for="skill in toolSkills"
          :key="skill.name"
          class="inline-flex min-w-0 items-center gap-2 rounded-lg border border-border bg-background/70 px-3 py-2 text-sm font-medium text-muted transition duration-300 hover:border-primary/50 hover:text-foreground"
        >
          <AppIcon :name="skill.icon" class-name="size-4 shrink-0 text-primary" />
          <span class="break-words">{{ skill.name }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import AppIcon from '~/components/ui/Icon.vue'

interface SkillItem {
  name: string
  icon: string
}

defineProps<{
  frontEndSkills: SkillItem[]
  backEndSkills: SkillItem[]
  toolSkills: SkillItem[]
}>()
</script>
