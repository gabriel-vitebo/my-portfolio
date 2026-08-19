<template>
  <section class="bg-surface/35 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <div class="max-w-3xl">
        <p class="text-sm font-medium uppercase tracking-widest text-subtle">Skills</p>
        <h2 class="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Tecnologias que fazem parte do meu dia a dia
        </h2>
      </div>

      <AboutSkills
        class="mt-9"
        :primary-skills="primarySkills"
        :secondary-skills="secondarySkills"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutSkills from '~/components/about/AboutSkills.vue'

interface SkillItem {
  name: string
  icon: string
}

defineProps<{
  primarySkills: SkillItem[]
  secondarySkills: SkillItem[]
}>()
</script>
