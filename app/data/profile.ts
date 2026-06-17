import type { AboutData, HeroData, SocialLink } from '~/types/portfolio'
import { githubUrl } from './constants'
import profileImage from '~/assets/images/profile/my-photo.png'

export const hero: HeroData = {
  greeting: 'Olá, eu sou',
  name: 'Gabriel Vitebo',
  role: 'Desenvolvedor Full Stack',
  description:
    'Construo produtos digitais com foco em interfaces precisas, performance, acessibilidade e arquitetura sustentável.',
  image: profileImage,
}

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    url: githubUrl,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gabriel-vitebo',
  },
  {
    label: 'E-mail',
    url: 'mailto:contato@gabrielvitebo.com',
  },
]

export const about: AboutData = {
  title: 'Sobre mim',
  paragraphs: [
    'Sou desenvolvedor com atenção especial à qualidade da experiência, à clareza do código e à evolução saudável de produtos digitais.',
    'Trabalho conectando estratégia, design e engenharia para entregar interfaces rápidas, acessíveis e preparadas para crescer.',
  ],
  highlights: ['Nuxt', 'Vue', 'React', 'TypeScript', 'Node', 'Rails', 'SEO', 'Performance'],
}
