<template>
  <section class="bg-background px-4 py-16 sm:px-6 sm:py-20 md:py-24">
    <div class="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
      <div class="min-w-0">
        <p class="text-sm font-medium uppercase tracking-widest text-subtle">Como eu trabalho</p>
        <h2 class="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Do banco de dados à interface
        </h2>

        <div class="mt-7 space-y-5 text-base leading-8 text-muted sm:text-lg">
          <p>Gosto de entender o problema como um todo antes de começar a escrever código.</p>
          <p>
            No front-end, tenho atenção especial à experiência do usuário, responsividade, acessibilidade, performance e
            à construção de componentes que sejam fáceis de entender e manter.
          </p>
          <p>
            No back-end, procuro aplicar o mesmo cuidado à organização do código, separação de responsabilidades, regras
            de negócio, modelagem dos dados e construção de APIs.
          </p>
          <p>
            É justamente essa visão entre as diferentes camadas que mais me interessa no desenvolvimento
            <strong class="font-semibold text-primary">Full Stack</strong>.
            Gosto de entender de onde os dados vêm, como são processados e como chegam até a interface que será
            utilizada pelo usuário.
          </p>
          <p>
            Mais do que fazer uma funcionalidade funcionar, busco entender as decisões por trás dela e construir
            soluções que continuem fazendo sentido conforme o produto evolui.
          </p>
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
