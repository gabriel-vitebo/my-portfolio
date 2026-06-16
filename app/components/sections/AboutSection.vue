<template>
  <section id="about" class="grid min-h-screen snap-start place-items-center bg-background px-4 py-24 sm:px-6">
    <div class="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <p class="text-sm font-medium uppercase tracking-widest text-tertiary">Profile</p>
        <h2 class="mt-4 text-3xl font-bold text-primary sm:text-4xl">{{ about.title }}</h2>

        <div class="mt-6 space-y-4 text-base leading-8 text-secondary">
          <p v-for="paragraph in about.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <ul class="mt-8 flex flex-wrap gap-3 text-sm">
          <li v-for="social in socials" :key="social.url">
            <a
              class="inline-flex rounded-full border border-border px-4 py-2 text-secondary transition duration-300 hover:border-primary hover:text-accent"
              :href="social.url"
              rel="noreferrer"
              target="_blank"
            >
              {{ social.label }}
            </a>
          </li>
        </ul>
      </div>

      <div class="grid content-center gap-4 sm:grid-cols-2">
        <article
          v-for="highlight in about.highlights"
          :key="highlight"
          class="rounded-xl border border-border bg-surface/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50"
        >
          <h3 class="text-lg font-semibold text-primary">{{ highlight }}</h3>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AboutData, SocialLink } from '~/types/portfolio'

defineProps<{
  about: AboutData
  socials: SocialLink[]
}>()
</script>
