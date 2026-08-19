<template>
  <section
    id="hero"
    class="relative grid min-h-[calc(100svh-4.5rem)] place-items-center overflow-hidden bg-background px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-10 md:pb-20 md:pt-12"
  >
    <div class="absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.10),transparent_68%)] blur-2xl" />

    <div class="relative mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      <div class="text-center lg:text-left">
        <p class="text-sm font-medium uppercase tracking-widest text-subtle">{{ hero.greeting }}</p>
        <h1 class="mt-5 text-[42px] font-black leading-none text-foreground md:text-[56px] lg:text-7xl">
          <span class="block">{{ hero.name }}</span>
        </h1>
        <p class="mt-5 text-[22px] font-semibold leading-tight text-muted lg:text-[28px]">{{ hero.role }}</p>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted lg:mx-0">
          {{ hero.description }}
        </p>

        <div class="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <NuxtLink
            class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-primary-hover"
            to="#projects"
            @click.prevent="scrollToSection('projects')"
          >
            Ver projetos
          </NuxtLink>
          <NuxtLink
            class="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition duration-300 hover:border-primary hover:text-primary"
            to="#about"
            @click.prevent="scrollToSection('about')"
          >
            Sobre mim
          </NuxtLink>
          <NuxtLink
            class="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition duration-300 hover:border-primary hover:text-primary"
            to="/blog"
          >
            Blog
          </NuxtLink>
        </div>
      </div>

      <HeroPortrait :src="hero.image" :alt="hero.name" :socials="socials" />
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroPortrait from '~/components/hero/HeroPortrait.vue'
import type { HeroData, SocialLink } from '~/types/portfolio'

defineProps<{
  hero: HeroData
  socials?: SocialLink[]
}>()

const { scrollToSection } = useSectionNavigation()
</script>
