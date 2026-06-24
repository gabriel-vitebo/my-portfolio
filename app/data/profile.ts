import type { AboutData, HeroData, SocialLink } from '~/types/portfolio'
import { githubUrl } from './constants'

export const hero: HeroData = {
  greeting: 'Olá, eu sou',
  name: 'Gabriel Vitebo',
  role: 'Desenvolvedor Full Stack',
  description:
    'Transformo ideias em produtos digitais escaláveis, combinando engenharia de software, experiência do usuário e foco em resultados.',
  image: '/images/profile/my-photo.png',
}

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    url: githubUrl,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gabriel-alves-vitebo-2978ab177/',
  },
  {
    label: 'E-mail',
    url: 'mailto:gabrielvitebo@gmail.com',
  },
]

export const about: AboutData = {
  title: 'Sobre mim',
  paragraphs: [
    'Sou desenvolvedor Full Stack com experiência na construção e evolução de produtos digitais, atuando principalmente com Vue, Nuxt, React e TypeScript.',
    'Participei do desenvolvimento de marketplaces, checkouts, páginas com foco em SEO e ferramentas internas, sempre buscando equilibrar qualidade técnica, experiência do usuário e impacto no negócio.',
  ],
  highlights: [
    {
      slug: 'nuxt',
      title: 'Nuxt',
      link: 'https://nuxt.com/',
    },
    {
      slug: 'vue',
      title: 'Vue',
      link: 'https://vuejs.org/',
    },
    {
      slug: 'react',
      title: 'React',
      link: 'https://react.dev/',
    },
    {
      slug: 'typescript',
      title: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      slug: 'nodejs',
      title: 'Node.js',
      link: 'https://nodejs.org/pt-br',
    },
    {
      slug: 'ruby-on-rails',
      title: 'Ruby on Rails',
      link: 'https://rubyonrails.org/',
    },
    {
      slug: 'seo',
      title: 'SEO',
      link: 'https://developer.mozilla.org/pt-BR/docs/Glossary/SEO',
    },
    {
      slug: 'performance',
      title: 'Performance',
      link: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/What_is_web_performance',
    },
  ],
}
