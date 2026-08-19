<template>
  <section class="bg-surface/35 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
    <div class="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
      <div class="min-w-0">
        <p class="text-sm font-medium uppercase tracking-widest text-subtle">Trajetória</p>
        <h2 class="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Um pouco da minha história
        </h2>

        <div class="mt-7 space-y-5 text-base leading-8 text-muted sm:text-lg">
          <p>
            Minha relação com tecnologia começou antes mesmo de trabalhar profissionalmente com desenvolvimento. Sou
            formado em
            <strong class="font-semibold text-primary">Análise e Desenvolvimento de Sistemas</strong>
            e também tenho formação em
            <strong class="font-semibold text-primary">Design Gráfico</strong>,
            duas áreas que acabaram se encontrando naturalmente no front-end.
          </p>
          <p>
            Minha experiência profissional começou como
            <strong class="font-semibold text-primary">estagiário em desenvolvimento na Quero Educação</strong>,
            onde posteriormente fui promovido a desenvolvedor júnior.
          </p>
          <p>
            Foi lá que tive contato com aplicações reais, código em produção e trabalho em equipe. Trabalhei
            principalmente com
            <strong class="font-semibold text-primary">Vue.js, Nuxt e TypeScript</strong>,
            além de participar de projetos envolvendo
            <strong class="font-semibold text-foreground">React</strong>
            e contribuir em partes do back-end com
            <strong class="font-semibold text-foreground">Ruby on Rails</strong>.
          </p>
          <p>
            Com o tempo, passei a me interessar cada vez mais não apenas por fazer uma funcionalidade funcionar, mas
            por entender arquitetura, qualidade de código, acessibilidade, performance e as decisões por trás de um
            produto.
          </p>
          <p>
            Hoje continuo aprofundando esses conhecimentos enquanto curso
            <strong class="font-semibold text-primary">Ciência da Computação</strong>,
            construo meus próprios projetos e compartilho parte do que aprendo através do meu blog.
          </p>
        </div>
      </div>

      <div class="min-w-0 lg:sticky lg:top-32 lg:pt-[7.75rem]">
        <AboutTimeline :items="milestones" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutTimeline from '~/components/about/AboutTimeline.vue'

interface TimelineItem {
  label: string
  title: string
  description: string
  icon: string
  highlight?: boolean
}

defineProps<{
  milestones: TimelineItem[]
}>()
</script>
