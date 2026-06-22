<template>
  <header class="fixed inset-x-0 top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <NuxtLink
        class="text-[15px] font-semibold text-primary transition duration-300 hover:text-accent"
        to="/#hero"
        @click.prevent="scrollToSection('hero')"
      >
        {{ name }}
      </NuxtLink>

      <ul class="flex items-center gap-3 text-[13px] text-secondary sm:gap-6 sm:text-[15px]">
        <li>
          <NuxtLink :class="navLinkClass('hero')" to="/#hero" @click.prevent="scrollToSection('hero')">Início</NuxtLink>
        </li>
        <li>
          <NuxtLink :class="navLinkClass('projects')" to="/#projects" @click.prevent="scrollToSection('projects')">Projetos</NuxtLink>
        </li>
        <li>
          <NuxtLink :class="navLinkClass('about')" to="/#about" @click.prevent="scrollToSection('about')">Sobre</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()

const route = useRoute()
const { scrollToSection } = useSectionNavigation()
const activeSection = ref('hero')
const sectionIds = ['hero', 'projects', 'about']
let sectionObserver: IntersectionObserver | null = null

const navLinkClass = (sectionId: string) => [
  'transition duration-300 hover:text-accent',
  route.path === '/' && activeSection.value === sectionId ? 'text-accent' : '',
]

const syncActiveSection = () => {
  if (route.path !== '/') return

  const viewportCenter = window.innerHeight / 2
  const closestSection = sectionIds
    .map((id) => {
      const element = document.getElementById(id)
      if (!element) return null

      const rect = element.getBoundingClientRect()

      return {
        id,
        distance: Math.abs(rect.top + rect.height / 2 - viewportCenter),
      }
    })
    .filter((section): section is { id: string, distance: number } => Boolean(section))
    .sort((sectionA, sectionB) => sectionA.distance - sectionB.distance)[0]

  if (closestSection) {
    activeSection.value = closestSection.id
  }
}

onMounted(() => {
  syncActiveSection()

  sectionObserver = new IntersectionObserver(syncActiveSection, {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0,
  })

  sectionIds.forEach((id) => {
    const section = document.getElementById(id)
    if (section) sectionObserver?.observe(section)
  })

  window.addEventListener('resize', syncActiveSection)
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
  window.removeEventListener('resize', syncActiveSection)
})

watch(
  () => route.fullPath,
  async () => {
    if (route.path !== '/') return

    await nextTick()
    syncActiveSection()
  },
)
</script>
