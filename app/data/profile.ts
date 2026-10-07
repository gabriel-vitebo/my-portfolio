import type { HeroData, SocialLink } from '~/types/portfolio'
import { socialLinks } from './socialLinks'

export const hero: HeroData = {
  greeting: 'Olá, eu sou',
  name: 'Gabriel Vitebo',
  role: 'Desenvolvedor Full Stack',
  description:
    'Transformo ideias em produtos digitais escaláveis, combinando engenharia de software, experiência do usuário e foco em resultados.',
  image: '/images/profile/my-photo.png',
}

export const socials: SocialLink[] = [socialLinks.github, socialLinks.linkedin, socialLinks.email]
