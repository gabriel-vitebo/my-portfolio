<template>
  <section class="bg-background px-4 py-16 sm:px-6 sm:py-20 md:py-24">
    <div class="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
      <div class="min-w-0">
        <p class="text-sm font-medium uppercase tracking-widest text-subtle">Como eu trabalho</p>
        <h2 class="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Mais do que fazer funcionar
        </h2>

        <div class="mt-7 space-y-5 text-base leading-8 text-muted sm:text-lg">
          <p>Eu gosto de entender o problema antes de começar a escrever código.</p>
          <p>
            Durante o desenvolvimento, tento encontrar um equilíbrio entre uma boa experiência para quem usa o
            produto e um código que continue compreensível para quem precisar trabalhar nele depois.
          </p>
          <p>
            Tenho bastante atenção a detalhes de interface e usabilidade, algo em que minha experiência com Design
            também acaba contribuindo, mas sem deixar de lado aspectos como
            <strong class="font-semibold text-primary">performance, acessibilidade, responsividade e manutenção</strong>.
          </p>
          <p>
            Também sou bastante curioso. Se encontro algo que não conheço, dificilmente fico satisfeito apenas
            copiando uma solução. Gosto de pesquisar, testar e entender o motivo dela funcionar.
          </p>
          <p>No fim, meu objetivo não é simplesmente entregar uma tela. É construir algo que faça sentido.</p>
        </div>
      </div>

      <div class="min-w-0 lg:sticky lg:top-32 lg:pt-[7.75rem]">
        <WorkPrinciples :principles="principles" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import WorkPrinciples from '~/components/about/WorkPrinciples.vue'

interface WorkPrinciple {
  title: string
  description: string
  icon: string
}

defineProps<{
  principles: WorkPrinciple[]
}>()
</script>
