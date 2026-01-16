<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useReveal } from '../../../composables/useReveal'

const el = ref<HTMLElement | null>(null)

onMounted(() => {
  useReveal(el.value)
})
</script>

<template>
  <SectionContainer>
    <div ref="el" class="reveal max-w-2xl">
      <p class="text-xl leading-relaxed">
        Sou desenvolvedor front-end com foco em engenharia de aplicações.
        Gosto de estruturar projetos, pensar em arquitetura, SEO e DX
        antes de escrever o primeiro componente.
      </p>
    </div>
  </SectionContainer>
</template>
