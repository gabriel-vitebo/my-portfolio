<template>
  <div>
    <header class="fixed inset-x-0 top-0 z-50 w-full border-b border-border bg-[rgb(var(--color-background-rgb)/0.62)] backdrop-blur-xl backdrop-saturate-150">
      <div class="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <nav class="grid gap-3 sm:grid-cols-[minmax(0,min(48vw,34rem))_auto] sm:items-center sm:justify-between">
          <NuxtLink
            class="block min-w-0 truncate text-[15px] font-semibold text-foreground transition duration-300 hover:text-primary"
            to="/#hero"
            @click.prevent="scrollToSection('hero')"
          >
            {{ name }}
          </NuxtLink>

          <ul class="flex max-w-full shrink-0 items-center gap-3 overflow-x-auto pb-1 text-[13px] text-muted sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:gap-6 sm:overflow-visible sm:pb-0 sm:text-[15px]">
            <li>
              <NuxtLink :class="navLinkClass('hero')" to="/#hero" @click.prevent="scrollToSection('hero')">Início</NuxtLink>
            </li>
            <li>
              <NuxtLink :class="navLinkClass('projects')" to="/#projects" @click.prevent="scrollToSection('projects')">Projetos</NuxtLink>
            </li>
            <li>
              <NuxtLink :class="routeLinkClass('/sobre-mim')" to="/sobre-mim">Sobre</NuxtLink>
            </li>
            <li>
              <NuxtLink :class="routeLinkClass('/blog')" to="/blog">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink :class="routeLinkClass('/changelog')" to="/changelog">Changelog</NuxtLink>
            </li>
          </ul>

          <AppBreadcrumb class="w-full sm:col-start-1 sm:row-start-2 sm:max-w-[34rem]" :items="breadcrumbs" />
        </nav>
      </div>
    </header>

    <div aria-hidden="true" class="h-36 sm:h-28" />
  </div>
</template>

<script setup lang="ts">
import AppBreadcrumb from '~/components/layout/AppBreadcrumb.vue'
import { blogArticles } from '~/data/blog'
import { portfolio } from '~/data/portfolio'

defineProps<{
  name: string
}>()

const route = useRoute()
const { scrollToSection } = useSectionNavigation()
const activeSection = ref('hero')
const sectionIds = ['hero', 'projects']
let sectionObserver: IntersectionObserver | null = null

const navLinkClass = (sectionId: string) => [
  'transition duration-300 hover:text-primary',
  route.path === '/' && activeSection.value === sectionId ? 'text-primary' : '',
]

const routeLinkClass = (path: string) => [
  'transition duration-300 hover:text-primary',
  route.path === path || route.path.startsWith(`${path}/`) ? 'text-primary' : '',
]

const breadcrumbs = computed(() => {
  if (route.path === '/') {
    if (activeSection.value === 'projects') {
      return [
        { label: '/home', to: '/#hero' },
        { label: 'projetos' },
      ]
    }

    return [{ label: '/home' }]
  }

  if (route.path === '/blog') {
    return [
      { label: '/home', to: '/#hero' },
      { label: 'blogs' },
    ]
  }

  if (route.path.startsWith('/blog/')) {
    const articleSlug = String(route.params.slug ?? '')
    const article = blogArticles.find(item => item.slug === articleSlug)

    return [
      { label: '/home', to: '/#hero' },
      { label: 'blogs', to: '/blog' },
      { label: article?.title ?? articleSlug },
    ]
  }

  if (route.path.startsWith('/projetos/')) {
    const projectSlug = String(route.params.slug ?? '')
    const project = portfolio.projects.find(item => item.slug === projectSlug)

    return [
      { label: '/home', to: '/#hero' },
      { label: 'projetos', to: '/#projects' },
      { label: project?.title ?? projectSlug },
    ]
  }

  if (route.path === '/changelog') {
    return [
      { label: '/home', to: '/#hero' },
      { label: 'changelog' },
    ]
  }

  if (route.path === '/sobre-mim') {
    return [
      { label: '/home', to: '/#hero' },
      { label: 'sobre mim' },
    ]
  }

  return [
    { label: '/home', to: '/#hero' },
    { label: route.path.replace(/^\//, '') },
  ]
})

const syncActiveSection = () => {
  if (route.path !== '/') return

  const viewportCenter = window.innerHeight / 2
  const sections = sectionIds
    .map((id) => {
      const element = document.getElementById(id)
      if (!element) return null

      const rect = element.getBoundingClientRect()

      return {
        id,
        containsViewportCenter: rect.top <= viewportCenter && rect.bottom >= viewportCenter,
        distance: Math.abs(rect.top + rect.height / 2 - viewportCenter),
      }
    })
    .filter((section): section is {
      id: string
      containsViewportCenter: boolean
      distance: number
    } => Boolean(section))

  const activeViewportSection = sections.find(section => section.containsViewportCenter)
  const closestSection = activeViewportSection
    ?? sections.sort((sectionA, sectionB) => sectionA.distance - sectionB.distance)[0]

  if (closestSection) {
    activeSection.value = closestSection.id
  }
}

onMounted(() => {
  if (route.path !== '/') return

  syncActiveSection()

  sectionObserver = new IntersectionObserver(syncActiveSection, {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0,
  })

  sectionIds.forEach((id) => {
    const section = document.getElementById(id)
    if (section) sectionObserver?.observe(section)
  })

  window.addEventListener('scroll', syncActiveSection, { passive: true })
  window.addEventListener('resize', syncActiveSection)
})

onBeforeUnmount(() => {
  sectionObserver?.disconnect()
  window.removeEventListener('scroll', syncActiveSection)
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
