import type { AboutData, HeroData, SocialLink } from '~/types/portfolio'
import { githubUrl } from './constants'
import profileImage from '~/assets/images/profile/my-photo.png'

export const hero: HeroData = {
  greeting: 'Olá, eu sou',
  name: 'Gabriel Vitebo',
  role: 'Desenvolvedor Full Stack',
  description:
    'Transformo ideias em produtos digitais escaláveis, combinando engenharia de software, experiência do usuário e foco em resultados.',
  image: profileImage,
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
    'Nuxt',
    'Vue',
    'React',
    'TypeScript',
    'Node.js',
    'Ruby on Rails',
    'SEO',
    'Performance',
  ],
}
