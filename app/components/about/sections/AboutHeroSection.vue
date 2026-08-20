<template>
  <section
    id="sobre-mim"
    class="grid min-h-[calc(100svh-9rem)] place-items-center bg-background px-4 pb-14 pt-8 sm:min-h-[calc(100svh-7rem)] sm:px-6 sm:pb-20 sm:pt-10 md:pb-20 md:pt-12"
  >
    <div class="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr]">
      <div class="min-w-0 max-w-3xl text-center lg:text-left">
        <p class="text-sm font-medium uppercase tracking-widest text-subtle">Sobre mim</p>
        <h1 class="mt-5 text-4xl font-black leading-none text-foreground sm:text-[40px] md:text-[54px] lg:text-7xl">
          Olá, eu sou o Gabriel
        </h1>

        <div class="mx-auto mt-7 space-y-5 text-lg leading-8 text-muted lg:mx-0">
          <p>
            Sou desenvolvedor
            <strong class="font-semibold text-primary">Full Stack</strong>,
            com experiência na construção e manutenção de aplicações web, trabalhando desde a interface e experiência
            do usuário até APIs, regras de negócio e integração com dados.
          </p>
          <p>
            No front-end, minha principal experiência está no ecossistema
            <strong class="font-semibold text-primary">Vue.js, Nuxt e TypeScript</strong>.
            No back-end, já trabalhei profissionalmente com
            <strong class="font-semibold text-primary">Ruby on Rails</strong>
            e também desenvolvo projetos utilizando
            <strong class="font-semibold text-primary">Node.js, PostgreSQL e Prisma</strong>.
          </p>
          <p>
            Gosto de entender o produto como um todo e transformar problemas em soluções que sejam boas tanto para quem
            usa quanto para quem desenvolve e mantém.
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
