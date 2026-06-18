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
import focusTimerCoverImage from '~/assets/images/projects/focus-timer/cover.png'
import focusTimerPreviewDarkModeImage from '~/assets/images/projects/focus-timer/preview-darkmode.png'
import focusTimerPreviewLightModeImage from '~/assets/images/projects/focus-timer/preview-lightmode.png'
import questLogCoverImage from '~/assets/images/projects/quest-log/cover.png'
import questLogLoginPageImage from '~/assets/images/projects/quest-log/login-page.jpeg'
import questLogMissionPageImage from '~/assets/images/projects/quest-log/mission-page.jpeg'
import questLogPainelPageImage from '~/assets/images/projects/quest-log/painel-page.jpeg'
import questLogProfilePageImage from '~/assets/images/projects/quest-log/profile-page.jpeg'


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
    gallery: [
      { type: 'image', src: curriculoAiHomePageImage },
      { type: 'image', src: curriculoAiResultsPageImage },
    ],
    githubLinks: [{ url: `${githubUrl}/curriculo-ai` }],
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
    gallery: [{ type: 'image', src: checknumbersHomePageImage }],
    githubLinks: [{ url: `${githubUrl}/checkNumbers` }],
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
    gallery: [
      { type: 'image', src: foodExplorerHomePageImage },
      { type: 'image', src: foodExplorerContentImage },
      { type: 'image', src: foodExplorerCreateImage },
      { type: 'image', src: foodExplorerEditPageImage },
      { type: 'image', src: foodExplorerSearchPageImage },
      { type: 'youtube', url: 'https://youtu.be/q3YN-PIgiAs', title: 'Demonstração do Food Explorer' },
    ],
    githubLinks: [{ label: 'Front-end', url: `${githubUrl}/food-explorer` }, { label: 'Back-end', url: `${githubUrl}/api-food-explorer` }],
    technologies: ['React', 'MySql', 'Node.js', 'Express', 'JWT', 'Styled Components'],
  },
  {
    slug: 'rocket-pay',
    title: 'Rocket Pay',
    shortDescription: 'Sistema de adicionar cartão',
    description:
      'Projeto de exemplo com foco em performance, navegação fluida e componentes reutilizáveis para e-commerce.',
    image: rocketPayCoverImage,
    gallery: [{ type: 'image', src: rocketPayProductImage }],
    githubLinks: [{ url: `${githubUrl}/Rocketpay` }],
    demoUrl: 'https://rocketpay-swart.vercel.app/',
    technologies: ['HTML', 'CSS', 'Regex', 'JavaScript'],
  },
  {
    slug: 'desafio-focus-timer',
    title: 'Focus Timer',
    shortDescription: 'Aplicação de temporizador para foco e produtividade.',
    description:
      'Projeto de exemplo com foco em arquitetura de componentes, estados e interações para aplicações modernas.',
    image: focusTimerCoverImage,
    gallery: [
      { type: 'image', src: focusTimerPreviewDarkModeImage },
      { type: 'image', src: focusTimerPreviewLightModeImage },
    ],
    githubLinks: [{ url: `${githubUrl}/Desafio-focus-timer-2.0` }],
    demoUrl: 'https://gabriel-vitebo.github.io/Desafio-focus-timer-2.0/',
    technologies: ['JavaScript', 'CSS', 'HTML'],
  },
  {
    slug: 'quest-log',
    title: 'Quest Log',
    shortDescription: 'API para centralizar projetos, métricas e conteúdo público.',
    description:
      'Back-end de exemplo para organizar conteúdo, expor endpoints públicos e preparar integrações futuras.',
    image: questLogCoverImage,
    gallery: [
      { type: 'image', src: questLogLoginPageImage },
      { type: 'image', src: questLogMissionPageImage },
      { type: 'image', src: questLogPainelPageImage },
      { type: 'image', src: questLogProfilePageImage },
      { type: 'youtube', url: 'https://youtube.com/shorts/YtVXiPXary0?feature=share', title: 'Demonstração do Quest Log' },
    ],
    githubLinks: [{ url: `${githubUrl}/questlog` }],
    technologies: ['React Native', 'TypeScript', 'Firebase'],
  },
]
