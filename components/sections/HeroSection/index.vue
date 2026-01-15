<template>
  <section
    class="
      min-h-screen
      flex
      items-center
      bg-[color:var(--color-bg)]
    "
  >
    <SectionContainer as="main">
      <div class="max-w-3xl">
        <!-- Nome -->
        <h1
          class="
            text-5xl
            sm:text-6xl
            font-medium
            leading-tight
            text-[color:var(--color-text-primary)]
          "
        >
          Gabriel Vitebo
        </h1>

        <!-- Cargo -->
        <p
          class="
            mt-4
            text-xl
            text-[color:var(--color-text-secondary)]
          "
        >
          Front-end Engineer
        </p>

        <!-- Descrição -->
        <p
          class="
            mt-10
            text-2xl
            leading-relaxed
            text-[color:var(--color-text-primary)]
          "
        >
          Arquitetura, performance e DX<br />
          em aplicações web bem estruturadas
        </p>

        <!-- Indicador de scroll -->
        <div
          class="
            mt-20
            text-sm
            text-[color:var(--color-text-secondary)]
          "
        >
          ↓ scroll
        </div>
      </div>
    </SectionContainer>
  </section>
</template>
