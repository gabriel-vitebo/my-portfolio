<template>
  <div class="min-h-screen overflow-x-hidden scroll-smooth bg-background text-foreground">
    <AppNavbar :name="portfolio.hero.name" />
    <main>
      <AboutHeroSection
        :image="portfolio.hero.image"
        :name="portfolio.hero.name"
        :socials="portfolio.socials"
      />
      <AboutStorySection :milestones="milestones" />
      <AboutWorkSection :principles="workPrinciples" />
      <AboutSkillsSection
        :front-end-skills="frontEndSkills"
        :back-end-skills="backEndSkills"
        :tool-skills="toolSkills"
      />
      <AboutEducationSection :items="educationItems" />
      <AboutContactSection :contact-links="contactLinks" />
    </main>
    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import AboutContactSection from '~/components/about/sections/AboutContactSection.vue'
import AboutEducationSection from '~/components/about/sections/AboutEducationSection.vue'
import AboutHeroSection from '~/components/about/sections/AboutHeroSection.vue'
import AboutSkillsSection from '~/components/about/sections/AboutSkillsSection.vue'
import AboutStorySection from '~/components/about/sections/AboutStorySection.vue'
import AboutWorkSection from '~/components/about/sections/AboutWorkSection.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import { frontEndSkills, backEndSkills, toolSkills } from '~/data/aboutSkills'
import { identityId, socialImagePath } from '~/data/constants'
import { portfolio } from '~/data/portfolio'

const site = useSiteConfig()
const aboutUrl = `${site.url}/sobre-mim`
const socialImage = `${site.url}${socialImagePath}`
const description = 'Conheça Gabriel Vitebo, desenvolvedor Full Stack com experiência em front-end, back-end e produtos web.'

interface TimelineItem {
  label: string
  title: string
  description: string
  icon: string
  highlight?: boolean
}

interface WorkPrinciple {
  title: string
  description: string
  icon: string
}

interface EducationItem {
  title: string
  institution?: string
  status: string
  icon: string
}

const contactLinks = portfolio.socials

const milestones: TimelineItem[] = [
  {
    label: 'Formação',
    title: 'Tecnologia + Design',
    description: 'ADS, Design Gráfico, Ciência da Computação e pós-graduação conectando produto, código e experiência.',
    icon: 'lucide:graduation-cap',
  },
  {
    label: 'Primeira experiência',
    title: 'Quero Educação',
    description: 'Entrada como estagiário e evolução para desenvolvedor júnior em produtos reais.',
    icon: 'lucide:briefcase-business',
  },
  {
    label: 'Stack',
    title: 'Front-end e Back-end',
    description: 'Vue, Nuxt, TypeScript, React, Ruby on Rails, Node.js, PostgreSQL e Prisma.',
    icon: 'lucide:code-2',
  },
  {
    label: 'Agora',
    title: 'Evolução Full Stack',
    description: 'Ciência da Computação, pós-graduação em IA aplicada, projetos próprios e visão completa de produto.',
    icon: 'lucide:layers-3',
    highlight: true,
  },
]

const workPrinciples: WorkPrinciple[] = [
  {
    title: 'Problema primeiro',
    description: 'Antes de codar, procuro entender contexto, objetivo e impacto da solução.',
    icon: 'lucide:search-check',
  },
  {
    title: 'Camadas conectadas',
    description: 'Gosto de entender dados, regras, APIs e interface como partes do mesmo produto.',
    icon: 'lucide:scale',
  },
  {
    title: 'Cuidado de ponta a ponta',
    description: 'Experiência, performance, acessibilidade, modelagem e manutenção entram na decisão.',
    icon: 'lucide:sliders-horizontal',
  },
  {
    title: 'Curiosidade prática',
    description: 'Gosto de pesquisar, testar e entender por que uma solução funciona.',
    icon: 'lucide:flask-conical',
  },
]

const educationItems: EducationItem[] = [
  {
    title: 'Design Gráfico',
    institution: 'UNICID',
    status: 'Concluído em 2019',
    icon: 'lucide:palette',
  },
  {
    title: 'Explorer Full Stack',
    institution: 'Rocketseat',
    status: 'Concluído em 2023',
    icon: 'lucide:rocket',
  },
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Cruzeiro do Sul',
    status: 'Concluído em 2024',
    icon: 'lucide:monitor-cog',
  },
  {
    title: 'Ciência da Computação',
    institution: 'ETEP',
    status: 'Em andamento',
    icon: 'lucide:graduation-cap',
  },
  {
    title: 'Engenharia de Software com IA Aplicada',
    institution: 'UNIPDS',
    status: 'Em andamento',
    icon: 'lucide:brain-circuit',
  },
]

useSchemaOrg([
  {
    '@type': 'ProfilePage',
    mainEntity: {
      '@id': identityId
    }
  }
])

useSeoMeta({
  title: 'Sobre mim',
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
