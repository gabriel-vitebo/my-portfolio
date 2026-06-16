<template>
  <header class="fixed inset-x-0 top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <NuxtLink class="text-[15px] font-semibold text-primary transition duration-300 hover:text-accent" to="#hero">
        {{ name }}
      </NuxtLink>

      <ul class="flex items-center gap-3 text-[13px] text-secondary sm:gap-6 sm:text-[15px]">
        <li>
          <NuxtLink class="text-accent transition duration-300 hover:text-accent-hover" to="#hero">Início</NuxtLink>
        </li>
        <li>
          <NuxtLink class="transition duration-300 hover:text-accent" to="#projects">Projetos</NuxtLink>
        </li>
        <li>
          <NuxtLink class="transition duration-300 hover:text-accent" to="#about">Sobre</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
