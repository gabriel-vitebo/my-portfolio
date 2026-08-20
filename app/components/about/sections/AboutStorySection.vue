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
            <strong class="font-semibold text-primary">Análise e Desenvolvimento de Sistemas</strong>,
            tenho formação em
            <strong class="font-semibold text-primary">Design Gráfico</strong>
            e atualmente curso
            <strong class="font-semibold text-primary">Ciência da Computação</strong>.
          </p>
          <p>
            Minha experiência profissional começou como estagiário na
            <strong class="font-semibold text-primary">Quero Educação</strong>,
            onde posteriormente fui promovido a desenvolvedor júnior. Durante esse período, participei do desenvolvimento
            e manutenção de produtos reais, trabalhando em equipe e lidando com código em produção.
          </p>
          <p>
            No front-end, trabalhei principalmente com
            <strong class="font-semibold text-primary">Vue.js, Nuxt e TypeScript</strong>,
            desenvolvendo interfaces, componentes e novas funcionalidades. Também tive contato profissional com
            <strong class="font-semibold text-foreground">React</strong>.
          </p>
          <p>
            Minha atuação não ficou limitada à interface. Também trabalhei no back-end com
            <strong class="font-semibold text-primary">Ruby on Rails</strong>,
            participando de implementações que envolviam regras de negócio, dados e a comunicação entre diferentes
            partes das aplicações.
          </p>
          <p>
            Fora do ambiente profissional, continuo expandindo esse lado Full Stack através dos meus próprios projetos,
            principalmente com
            <strong class="font-semibold text-primary">Node.js, PostgreSQL e Prisma</strong>,
            o que me permite trabalhar desde a modelagem e construção da aplicação até a experiência final no navegador.
          </p>
          <p>
            Hoje busco continuar evoluindo como desenvolvedor Full Stack, aprofundando meus conhecimentos tanto no
            front-end quanto no back-end e, principalmente, entendendo cada vez melhor como todas essas partes se
            conectam na construção de um produto.
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
