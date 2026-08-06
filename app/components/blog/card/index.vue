<template>
  <article
    aria-labelledby="featured-blog-title"
    class="relative rounded-2xl border border-border bg-surface/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/50"
  >
    <NuxtLink
      aria-label="Ler artigo completo: Como construir interfaces mais acessíveis com Vue"
      class="absolute inset-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      to="/blog/como-construir-interfaces-mais-acessiveis-com-vue"
    />

    <div class="pointer-events-none relative flex h-full flex-col gap-4">
      <div>
        <h2 id="featured-blog-title" class="text-xl font-semibold text-foreground">
          Como construir interfaces mais acessíveis com Vue
        </h2>

        <p class="mt-3 line-clamp-3 text-sm leading-6 text-muted">
          Um guia prático sobre escolhas semânticas, estados de foco e pequenos cuidados de implementação
          que melhoram a experiência de leitura e navegação para todas as pessoas. A proposta é mostrar
          como decisões simples, aplicadas desde a estrutura HTML até os estados interativos, tornam a
          interface mais previsível, confortável e inclusiva no uso real.
        </p>
      </div>

      <NuxtLink
        aria-label="Ler artigo completo: Como construir interfaces mais acessíveis com Vue"
        class="pointer-events-auto mt-auto inline-flex w-fit items-center text-sm font-semibold text-primary transition hover:text-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        to="/blog/como-construir-interfaces-mais-acessiveis-com-vue"
      >
        Ler artigo completo
      </NuxtLink>
    </div>
  </article>
</template>
