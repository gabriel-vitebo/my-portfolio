<template>
  <section class="grid min-h-[70svh] place-items-center bg-surface/35 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
    <div class="mx-auto max-w-4xl text-center">
      <p class="text-sm font-medium uppercase tracking-widest text-subtle">Contato</p>
      <h2 class="mt-4 text-4xl font-black leading-tight text-foreground sm:text-5xl">
        Vamos construir alguma coisa juntos?
      </h2>

      <div class="mx-auto mt-7 max-w-3xl space-y-5 text-base leading-8 text-muted sm:text-lg">
        <p>Estou sempre aberto a conhecer novos projetos, pessoas e oportunidades.</p>
        <p>
          Se você acha que meu perfil pode fazer sentido para sua equipe ou simplesmente quer trocar uma ideia sobre
          desenvolvimento, tecnologia ou algum dos projetos que viu por aqui, fique à vontade para entrar em contato.
        </p>
      </div>

      <div class="mt-9">
        <p class="text-sm font-medium uppercase tracking-widest text-subtle">Entre em contato</p>
        <nav class="mt-4 flex flex-wrap justify-center gap-3" aria-label="Links de contato">
          <a
            v-for="link in contactLinks"
            :key="link.url"
            class="inline-flex min-w-0 items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2.5 text-sm font-semibold text-foreground transition duration-300 hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            :href="link.url"
            :aria-label="link.label"
            rel="noreferrer"
            target="_blank"
          >
            <AppIcon :name="link.icon" class-name="size-4 shrink-0" />
            <span class="truncate">{{ link.label }}</span>
          </a>
        </nav>
      </div>

      <div class="mt-8 border-t border-border pt-8">
        <NuxtLink
          class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          to="/#projects"
        >
          Veja meus projetos
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppIcon from '~/components/ui/Icon.vue'

interface ContactLink {
  label: string
  url: string
  icon: string
}

defineProps<{
  contactLinks: ContactLink[]
}>()
</script>
