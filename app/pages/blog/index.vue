<template>
<AppNavbar :name="portfolio.hero.name" />
<main class="mx-auto max-w-6xl px-4 pb-20 pt-28 sm:px-6">
  <Header 
    title="Blog"
    subtitle="Aqui você encontra artigos sobre desenvolvimento web, programação, tecnologia e muito mais."
  />
</main>
</template>

<script setup lang="ts">
import AppNavbar from '~/components/layout/AppNavbar.vue'
import Header from '~/components/header/index.vue'
import { portfolio } from '~/data/portfolio'

</script>