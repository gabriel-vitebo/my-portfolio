<template>
  <header class="border-b border-border pb-10">
    <p
      v-if="props.legend"
      class="text-sm font-medium uppercase tracking-widest text-subtle"
    >
    {{ props.legend }}
    </p>
    <h1 class="mt-4 text-4xl font-bold text-foreground sm:text-5xl">{{ props.title }}</h1>
    <p
      v-if="props.subtitle"
      class="mt-5 max-w-2xl text-base leading-8 text-muted"
    >
      {{ props.subtitle }}
    </p>
  </header>
</template>

<script setup lang="ts">

const props = defineProps({
  title: String,
  subtitle: String,
  legend: String,
})
</script>