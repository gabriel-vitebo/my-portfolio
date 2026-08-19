<template>
  <section
    id="sobre-mim"
    class="grid min-h-[calc(100svh-9rem)] place-items-center bg-background px-4 pb-14 pt-8 sm:min-h-[calc(100svh-7rem)] sm:px-6 sm:pb-20 sm:pt-10 md:pb-20 md:pt-12"
  >
    <div class="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr]">
      <div class="min-w-0 max-w-3xl text-center lg:text-left">
        <p class="text-sm font-medium uppercase tracking-widest text-subtle">Sobre mim</p>
        <h1 class="mt-5 text-4xl font-black leading-none text-foreground sm:text-[40px] md:text-[54px] lg:text-7xl">
          Olá, eu sou o Gabriel Vitebo
        </h1>

        <div class="mx-auto mt-7 space-y-5 text-lg leading-8 text-muted lg:mx-0">
          <p>
            Sou desenvolvedor
            <strong class="font-semibold text-primary">Full Stack</strong>,
            com experiência profissional construindo aplicações com
            <strong class="font-semibold text-primary">Vue.js, Nuxt e TypeScript</strong>.
          </p>
          <p>
            Gosto de transformar ideias e problemas em interfaces que sejam simples de usar, bem construídas e fáceis
            de manter, sempre tentando entender não apenas
            <strong class="font-semibold text-foreground">como fazer</strong>,
            mas
            <strong class="font-semibold text-foreground">por que fazer daquele jeito</strong>.
          </p>
          <p>
            Atualmente curso
            <strong class="font-semibold text-primary">Ciência da Computação</strong>
            e sigo estudando e explorando novas tecnologias, tanto no front-end quanto no back-end.
          </p>
        </div>
      </div>

      <HeroPortrait :src="image" :alt="name" :socials="socials" />
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroPortrait from '~/components/hero/HeroPortrait.vue'
import type { SocialLink } from '~/types/portfolio'

defineProps<{
  image: string
  name: string
  socials: SocialLink[]
}>()
</script>
