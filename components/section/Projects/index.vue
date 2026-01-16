<script setup lang="ts">
const projects = [
  {
    title: 'Rocketpay',
    description: 'UX, validação e engenharia de formulários',
    slug: 'rocketpay',
  },
  {
    title: 'Food Explorer',
    description: 'Aplicação full-stack com foco em estrutura',
    slug: 'food-explorer',
  },
]
</script>

<template>
  <SectionContainer>
    <SectionTitle label="Projetos">
      Selecionados
    </SectionTitle>

    <div class="mt-16 space-y-16">
      <article
        v-for="project in projects"
        :key="project.slug"
        class="group"
      >
        <h3
          class="
            text-2xl
            font-medium
            text-text-primary
          "
        >
          {{ project.title }}
        </h3>

        <p class="mt-3 text-lg text-text-secondary">
          {{ project.description }}
        </p>

        <BaseLink
          :href="`/#${project.slug}`"
          class="mt-6 inline-block"
        >
          Ver projeto →
        </BaseLink>
      </article>
    </div>
  </SectionContainer>
</template>
