import type { HeroData, SocialLink } from '~/types/portfolio'
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
    label: 'contact@gabrielvitebo.dev',
    url: 'mailto:contact@gabrielvitebo.dev',
  },
]
