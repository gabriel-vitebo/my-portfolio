<script setup lang="ts">
const feedbacks = [
  {
    text: 'Tem muita atenção à qualidade e organização do código.',
    author: 'Colega de equipe',
  },
  {
    text: 'Prefere entregar soluções bem pensadas e sustentáveis.',
    author: 'Colega de equipe',
  },
  {
    text: 'Resolve problemas com persistência, independente da complexidade.',
    author: 'Colega de equipe',
  },
]
</script>

<template>
  <SectionContainer>
    <SectionTitle label="Feedbacks">
      O que dizem sobre mim
    </SectionTitle>

    <div class="mt-16 space-y-12">
      <blockquote
        v-for="(feedback, index) in feedbacks"
        :key="index"
        class="border-l border-border pl-6"
      >
        <p class="text-xl leading-relaxed">
          “{{ feedback.text }}”
        </p>

        <footer class="mt-4 text-sm text-text-secondary">
          — {{ feedback.author }}
        </footer>
      </blockquote>
    </div>
  </SectionContainer>
</template>
