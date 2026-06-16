<template>
  <section
    id="hero"
    class="relative grid min-h-screen snap-start place-items-center overflow-hidden bg-background px-4 py-24 sm:px-6"
  >
    <div class="absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.10),transparent_68%)] blur-2xl" />

    <div class="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="text-center lg:text-left">
        <p class="text-sm font-medium uppercase tracking-widest text-tertiary">{{ hero.greeting }}</p>
        <h1 class="heading-hero mt-5 text-primary">
          <span class="block">{{ hero.name }}</span>
        </h1>
        <p class="role-hero mt-5 text-secondary">{{ hero.role }}</p>
        <p class="paragraph-lg mx-auto mt-6 max-w-2xl text-secondary lg:mx-0">
          {{ hero.description }}
        </p>

        <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <NuxtLink
            class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-primary-hover"
            to="#projects"
          >
            Ver projetos
          </NuxtLink>
          <NuxtLink
            class="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-primary transition duration-300 hover:border-primary hover:text-accent"
            to="#about"
          >
            Sobre mim
          </NuxtLink>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-sm rounded-3xl border border-border bg-surface p-3 shadow-lg transition duration-300 hover:scale-[1.02] lg:max-w-md">
        <div class="absolute inset-0 -z-10 rounded-3xl shadow-glow" />
        <img
          class="aspect-[4/5] w-full rounded-2xl object-cover"
          :src="hero.image"
          :alt="hero.name"
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { HeroData } from '~/types/portfolio'

defineProps<{
  hero: HeroData
}>()
</script>
