import type { Project, ProjectsData } from '~/types/portfolio'
import { githubUrl } from './constants'
import curriculoAiHomePageImage from '~/assets/images/projects/curriculo-ai/home-page.png'
import curriculoAiResultsPageImage from '~/assets/images/projects/curriculo-ai/result-page.png'
import curriculoAiCoverImage from '~/assets/images/projects/curriculo-ai/cover.png'
import checknumbersHomePageImage from '~/assets/images/projects/check-numbers/home-page.png'
import checknumbersCoverImage from '~/assets/images/projects/check-numbers/cover.png'
import foodExplorerHomePageImage from '~/assets/images/projects/food-explorer/home.png'
import foodExplorerContentImage from '~/assets/images/projects/food-explorer/content.png'
import foodExplorerCreateImage from '~/assets/images/projects/food-explorer/create-page.png'
import foodExplorerEditPageImage from '~/assets/images/projects/food-explorer/edit-page.png'
import foodExplorerSearchPageImage from '~/assets/images/projects/food-explorer/search.png'
import foodExplorerCoverImage from '~/assets/images/projects/food-explorer/cover.png'
import rocketPayProductImage from '~/assets/images/projects/rocket-pay/home.png'
import rocketPayCoverImage from '~/assets/images/projects/rocket-pay/cover.png'

export const projectsSection: ProjectsData = {
  title: 'Projetos',
  subtitle: 'Uma seleção de interfaces, produtos e ferramentas construídos com foco em execução, clareza e qualidade técnica.',
}

export const projects: Project[] = [
  {
    slug: 'curriculo-ai',
    title: 'Currículo AI',
    shortDescription: 'Plataforma para analisar curriculos em PDF com IA.',
    description:
      'Projeto realizado na faculdade, onde desenvolvi uma aplicação que utiliza inteligência artificial para extrair e analisar informações de currículos em formato PDF, retornando feedback sobre a qualidade do currículo.',
    image: curriculoAiCoverImage,
    images: [
      curriculoAiHomePageImage,
      curriculoAiResultsPageImage,
    ],
    githubUrl: `${githubUrl}/curriculo-ai`,
    demoUrl: 'https://curriculo-ai-sepia.vercel.app',
    technologies: ['Nuxt', 'TypeScript', 'Tailwind CSS', 'OpenAI API'],
  },
  {
    slug: 'check-numbers',
    title: 'Check Numbers',
    shortDescription: 'Plataforma para verificar números e validar jogos como mega da virada.',
    description:
      'Projeto de exemplo com foco em arquitetura de páginas, conteúdo centralizado e navegação simples.',
    image: checknumbersCoverImage,
    images: [checknumbersHomePageImage],
    githubUrl: `${githubUrl}/checkNumbers`,
    demoUrl: 'https://gabriel-vitebo.github.io/checkNumbers/',
    technologies: ['React', 'Vite', 'Typescript', 'Styled Components'],
  },
  {
    slug: 'food-explorer',
    title: 'Food Explorer',
    shortDescription: 'Plataforma para descobrir e explorar restaurantes e pratos deliciosos.',
    description:
      'Aplicação de exemplo para demonstrar fluxos de dashboard, organização de módulos e padrões de UI para produtos SaaS.',
    image: foodExplorerCoverImage,
    images: [
      foodExplorerHomePageImage,
      foodExplorerContentImage,
      foodExplorerCreateImage,
      foodExplorerEditPageImage,
      foodExplorerSearchPageImage,
    ],
    githubUrl: 'https://github.com/gabriel-vitebo/food-explorer',
    technologies: ['React', 'MySql', 'Node.js', 'Express', 'JWT', 'Styled Components'],
  },
  {
    slug: 'rocket-pay',
    title: 'Rocket Pay',
    shortDescription: 'Sistema de adicionar cartão',
    description:
      'Projeto de exemplo com foco em performance, navegação fluida e componentes reutilizáveis para e-commerce.',
    image: rocketPayCoverImage,
    images: [rocketPayProductImage],
    githubUrl: `${githubUrl}/Rocketpay`,
    demoUrl: 'https://rocketpay-swart.vercel.app/',
    technologies: ['HTML', 'CSS', 'Regex', 'JavaScript'],
  },
  {
    slug: 'desafio-focus-timer',
    title: 'Focus Timer',
    shortDescription: 'Aplicação de temporizador para foco e produtividade.',
    description:
      'Projeto de exemplo com foco em arquitetura de componentes, estados e interações para aplicações modernas.',
    image: '/images/projects/focus-timer/cover.png',
    images: [
      '/images/projects/focus-timer/cover.png',
      '/images/projects/focus-timer/components.png',
    ],
    githubUrl: 'https://github.com/gabriel-vitebo/focus-timer',
    demoUrl: 'https://exemplo.com/focus-timer',
    technologies: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    slug: 'api-portfolio',
    title: 'API Portfolio',
    shortDescription: 'API para centralizar projetos, métricas e conteúdo público.',
    description:
      'Back-end de exemplo para organizar conteúdo, expor endpoints públicos e preparar integrações futuras.',
    image: '/images/projects/api-portfolio/cover.png',
    images: [
      '/images/projects/api-portfolio/cover.png',
      '/images/projects/api-portfolio/docs.png',
    ],
    githubUrl: 'https://github.com/gabriel-vitebo/api-portfolio',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL'],
  },
]
