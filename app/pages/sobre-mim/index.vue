<template>
  <div class="min-h-screen overflow-x-hidden scroll-smooth bg-background text-foreground">
    <AppNavbar :name="portfolio.hero.name" />
    <main>
      <section
        id="sobre-mim"
        class="grid min-h-[calc(100svh-9rem)] place-items-center bg-background px-4 pb-14 pt-8 sm:min-h-[calc(100svh-7rem)] sm:px-6 sm:pb-20 sm:pt-10 md:pb-20 md:pt-12"
      >
        <div class="mx-auto grid w-full max-w-6xl items-center gap-8 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div class="min-w-0 max-w-3xl text-center lg:text-left">
            <p class="text-sm font-medium uppercase tracking-widest text-subtle">Sobre mim</p>
            <h1 class="mt-5 text-4xl font-black leading-none text-foreground sm:text-[40px] md:text-[54px] lg:text-7xl">
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

      <section class="bg-surface/35 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div class="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start">
          <div class="min-w-0">
            <p class="text-sm font-medium uppercase tracking-widest text-subtle">Trajetória</p>
            <h2 class="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Um pouco da minha história
            </h2>

            <div class="mt-7 space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                Minha relação com tecnologia começou antes mesmo de trabalhar profissionalmente com desenvolvimento. Sou
                formado em
                <strong class="font-semibold text-primary">Análise e Desenvolvimento de Sistemas</strong>
                e também tenho formação em
                <strong class="font-semibold text-primary">Design Gráfico</strong>,
                duas áreas que acabaram se encontrando naturalmente no front-end.
              </p>
              <p>
                Minha experiência profissional começou como
                <strong class="font-semibold text-primary">estagiário em desenvolvimento na Quero Educação</strong>,
                onde posteriormente fui promovido a desenvolvedor júnior.
              </p>
              <p>
                Foi lá que tive contato com aplicações reais, código em produção e trabalho em equipe. Trabalhei
                principalmente com
                <strong class="font-semibold text-primary">Vue.js, Nuxt e TypeScript</strong>,
                além de participar de projetos envolvendo
                <strong class="font-semibold text-foreground">React</strong>
                e contribuir em partes do back-end com
                <strong class="font-semibold text-foreground">Ruby on Rails</strong>.
              </p>
              <p>
                Com o tempo, passei a me interessar cada vez mais não apenas por fazer uma funcionalidade funcionar, mas
                por entender arquitetura, qualidade de código, acessibilidade, performance e as decisões por trás de um
                produto.
              </p>
              <p>
                Hoje continuo aprofundando esses conhecimentos enquanto curso
                <strong class="font-semibold text-primary">Ciência da Computação</strong>,
                construo meus próprios projetos e compartilho parte do que aprendo através do meu blog.
              </p>
            </div>
          </div>

          <div class="min-w-0 lg:sticky lg:top-32 lg:pt-[7.75rem]">
            <AboutTimeline :items="milestones" />
          </div>
        </div>
      </section>

      <section class="bg-background px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div class="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
          <div class="min-w-0">
            <p class="text-sm font-medium uppercase tracking-widest text-subtle">Como eu trabalho</p>
            <h2 class="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Mais do que fazer funcionar
            </h2>

            <div class="mt-7 space-y-5 text-base leading-8 text-muted sm:text-lg">
              <p>
                Eu gosto de entender o problema antes de começar a escrever código.
              </p>
              <p>
                Durante o desenvolvimento, tento encontrar um equilíbrio entre uma boa experiência para quem usa o
                produto e um código que continue compreensível para quem precisar trabalhar nele depois.
              </p>
              <p>
                Tenho bastante atenção a detalhes de interface e usabilidade, algo em que minha experiência com Design
                também acaba contribuindo, mas sem deixar de lado aspectos como
                <strong class="font-semibold text-primary">performance, acessibilidade, responsividade e manutenção</strong>.
              </p>
              <p>
                Também sou bastante curioso. Se encontro algo que não conheço, dificilmente fico satisfeito apenas
                copiando uma solução. Gosto de pesquisar, testar e entender o motivo dela funcionar.
              </p>
              <p>
                No fim, meu objetivo não é simplesmente entregar uma tela. É construir algo que faça sentido.
              </p>
            </div>
          </div>

          <div class="min-w-0 lg:sticky lg:top-32 lg:pt-[7.75rem]">
            <WorkPrinciples :principles="workPrinciples" />
          </div>
        </div>
      </section>

      <section class="bg-surface/35 px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div class="mx-auto w-full max-w-6xl">
          <div class="max-w-3xl">
            <p class="text-sm font-medium uppercase tracking-widest text-subtle">Skills</p>
            <h2 class="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Tecnologias que fazem parte do meu dia a dia
            </h2>
          </div>

          <AboutSkills
            class="mt-9"
            :primary-skills="primarySkills"
            :secondary-skills="secondarySkills"
          />
        </div>
      </section>

      <section class="bg-background px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div class="mx-auto w-full max-w-6xl">
          <div class="max-w-3xl">
            <p class="text-sm font-medium uppercase tracking-widest text-subtle">Formações</p>
            <h2 class="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Caminhos que ajudaram a formar minha base
            </h2>
          </div>

          <EducationCards class="mt-9" :items="educationItems" />
        </div>
      </section>
    </main>
    <AppFooter :name="portfolio.hero.name" />
  </div>
</template>

<script setup lang="ts">
import AboutTimeline from '~/components/about/AboutTimeline.vue'
import AboutSkills from '~/components/about/AboutSkills.vue'
import EducationCards from '~/components/about/EducationCards.vue'
import WorkPrinciples from '~/components/about/WorkPrinciples.vue'
import HeroPortrait from '~/components/hero/HeroPortrait.vue'
import AppFooter from '~/components/layout/AppFooter.vue'
import AppNavbar from '~/components/layout/AppNavbar.vue'
import { siteUrl } from '~/data/constants'
import { portfolio } from '~/data/portfolio'

const aboutUrl = `${siteUrl}/sobre-mim`
const socialImage = `${siteUrl}/images/social-cover.jpg`
const description = 'Conheça Gabriel Vitebo, desenvolvedor Full Stack com experiência em Vue.js, Nuxt e TypeScript.'

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

const milestones: TimelineItem[] = [
  {
    label: 'Formação',
    title: 'Tecnologia + Design',
    description: 'ADS e Design Gráfico se encontrando naturalmente no front-end.',
    icon: 'lucide:graduation-cap',
  },
  {
    label: 'Primeira experiência',
    title: 'Quero Educação',
    description: 'Entrada como estagiário Front-end e evolução para desenvolvedor júnior.',
    icon: 'lucide:briefcase-business',
  },
  {
    label: 'Stack',
    title: 'Produto em produção',
    description: 'Vue, Nuxt, TypeScript, React e contribuições com Ruby on Rails.',
    icon: 'lucide:code-2',
  },
  {
    label: 'Agora',
    title: 'Ciência da Computação',
    description: 'Estudo contínuo, projetos próprios e aprendizados compartilhados no blog.',
    icon: 'lucide:sparkles',
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
    title: 'Experiência e código',
    description: 'Busco equilibrar uma interface boa de usar com uma base simples de manter.',
    icon: 'lucide:scale',
  },
  {
    title: 'Detalhes importam',
    description: 'Performance, acessibilidade, responsividade e manutenção entram na decisão.',
    icon: 'lucide:sliders-horizontal',
  },
  {
    title: 'Curiosidade prática',
    description: 'Gosto de pesquisar, testar e entender por que uma solução funciona.',
    icon: 'lucide:flask-conical',
  },
]

const primarySkills: SkillItem[] = [
  { name: 'Vue.js', icon: 'simple-icons:vuedotjs' },
  { name: 'Nuxt', icon: 'simple-icons:nuxt' },
  { name: 'TypeScript', icon: 'simple-icons:typescript' },
  { name: 'JavaScript', icon: 'simple-icons:javascript' },
  { name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
]

const secondarySkills: SkillItem[] = [
  { name: 'React', icon: 'simple-icons:react' },
  { name: 'Node.js', icon: 'simple-icons:nodedotjs' },
  { name: 'Java', icon: 'simple-icons:openjdk' },
  { name: 'Ruby on Rails', icon: 'simple-icons:rubyonrails' },
  { name: 'PostgreSQL', icon: 'simple-icons:postgresql' },
  { name: 'Prisma', icon: 'simple-icons:prisma' },
  { name: 'Docker', icon: 'simple-icons:docker' },
  { name: 'Storybook', icon: 'simple-icons:storybook' },
  { name: 'Jest', icon: 'simple-icons:jest' },
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
