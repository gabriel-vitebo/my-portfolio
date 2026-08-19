<template>
  <div class="min-h-screen scroll-smooth bg-background text-foreground">
    <AppNavbar :name="portfolio.hero.name" />
    <main>
      <section
        id="sobre-mim"
        class="grid min-h-[calc(100svh-9rem)] place-items-center bg-background px-4 pb-14 pt-8 sm:min-h-[calc(100svh-7rem)] sm:px-6 sm:pb-20 sm:pt-10 md:pb-20 md:pt-12"
      >
        <div class="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div class="max-w-3xl text-center lg:text-left">
            <p class="text-sm font-medium uppercase tracking-widest text-subtle">Sobre mim</p>
            <h1 class="mt-5 text-[40px] font-black leading-none text-foreground md:text-[54px] lg:text-7xl">
              Olá, eu sou o Gabriel Vitebo
            </h1>

            <div class="mx-auto mt-7 space-y-5 text-lg leading-8 text-muted lg:mx-0">
              <p>
                Sou desenvolvedor
                <strong class="font-semibold text-primary">Full Stack</strong>,
                com experiência profissional construindo aplicações com
                <strong class="font-semibold text-primary">Vue.js, Nuxt e TypeScript</strong>.
              </p>
              <p>
                Gosto de transformar ideias e problemas em interfaces que sejam simples de usar, bem construídas e fáceis
                de manter, sempre tentando entender não apenas
                <strong class="font-semibold text-foreground">como fazer</strong>,
                mas
                <strong class="font-semibold text-foreground">por que fazer daquele jeito</strong>.
              </p>
              <p>
                Atualmente curso
                <strong class="font-semibold text-primary">Ciência da Computação</strong>
                e sigo estudando e explorando novas tecnologias, tanto no front-end quanto no back-end.
              </p>
            </div>
          </div>

          <HeroPortrait :src="portfolio.hero.image" :alt="portfolio.hero.name" :socials="portfolio.socials" />
        </div>
      </section>
    </main>
    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import HeroPortrait from '~/components/hero/HeroPortrait.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import { siteUrl } from '~/data/constants'
import { portfolio } from '~/data/portfolio'

const aboutUrl = `${siteUrl}/sobre-mim`
const socialImage = `${siteUrl}/images/social-cover.jpg`
const description = 'Conheça Gabriel Vitebo, desenvolvedor Full Stack com experiência em Vue.js, Nuxt e TypeScript.'

useSeoMeta({
  title: `Sobre mim | ${portfolio.hero.name}`,
  description,
  ogTitle: `Sobre mim | ${portfolio.hero.name}`,
  ogDescription: description,
  ogType: 'profile',
  ogUrl: aboutUrl,
  ogImage: socialImage,
  ogImageAlt: `${portfolio.hero.name} — Sobre mim`,
  twitterCard: 'summary_large_image',
  twitterTitle: `Sobre mim | ${portfolio.hero.name}`,
  twitterDescription: description,
  twitterImage: socialImage,
  twitterImageAlt: `${portfolio.hero.name} — Sobre mim`,
})

useHead({
  link: [
    { rel: 'canonical', href: aboutUrl },
  ],
})
</script>
