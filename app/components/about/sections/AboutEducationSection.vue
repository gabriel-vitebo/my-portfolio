<template>
  <section class="bg-background px-4 py-16 sm:px-6 sm:py-20 md:py-24">
    <div class="mx-auto w-full max-w-6xl">
      <div class="max-w-3xl">
        <p class="text-sm font-medium uppercase tracking-widest text-subtle">Formações</p>
        <h2 class="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Caminhos que ajudaram a formar minha base
        </h2>
      </div>

      <EducationCards class="mt-9" :items="items" />
    </div>
  </section>
</template>

<script setup lang="ts">
import EducationCards from '~/components/about/EducationCards.vue'

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
