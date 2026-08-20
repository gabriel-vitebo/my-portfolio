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
import { siteUrl } from '~/data/constants'
import { portfolio } from '~/data/portfolio'

const aboutUrl = `${siteUrl}/sobre-mim`
const socialImage = `${siteUrl}/images/social-cover.jpg`
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

interface SkillItem {
  name: string
  icon: string
}

interface EducationItem {
  title: string
  institution?: string
  status: string
  icon: string
}

interface ContactLink {
  label: string
  url: string
  icon: string
}

const getSocialIcon = (label: string) => {
  const normalizedLabel = label.toLowerCase()

  if (normalizedLabel.includes('github')) {
    return 'simple-icons:github'
  }

  if (normalizedLabel.includes('linkedin')) {
    return 'simple-icons:linkedin'
  }

  return 'lucide:mail'
}

const contactLinks: ContactLink[] = portfolio.socials.map(social => ({
  ...social,
  icon: getSocialIcon(social.label),
}))

const milestones: TimelineItem[] = [
  {
    label: 'Formação',
    title: 'Tecnologia + Design',
    description: 'ADS, Design Gráfico e Ciência da Computação conectando produto, código e experiência.',
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
    description: 'Estudo contínuo, projetos próprios e visão cada vez mais completa de produto.',
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

const frontEndSkills: SkillItem[] = [
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { name: 'Nuxt', icon: 'simple-icons:nuxt' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'JavaScript', icon: 'simple-icons:javascript' },
  { name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
  { name: 'HTML', icon: 'simple-icons:html5' },
  { name: 'CSS', icon: 'simple-icons:css' },
]

const backEndSkills: SkillItem[] = [
  { name: 'Ruby on Rails', icon: 'simple-icons:rubyonrails' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
  { name: 'Prisma', icon: 'simple-icons:prisma' },
  { name: 'REST APIs', icon: 'lucide:route' },
]

const toolSkills: SkillItem[] = [
  { name: 'Git', icon: 'simple-icons:git' },
  { name: 'GitHub', icon: 'simple-icons:github' },
  { name: 'Docker', icon: 'simple-icons:docker' },
  { name: 'Jest', icon: 'simple-icons:jest' },
  { name: 'Storybook', icon: 'simple-icons:storybook' },
  { name: 'Figma', icon: 'simple-icons:figma' },
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
    institution: "ETEP",
    status: 'Cursando',
    icon: 'lucide:graduation-cap',
  },
]

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
