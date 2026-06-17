import type { PortfolioData } from '~/types/portfolio'
import profileImage from '~/assets/images/profile/my-photo.png'
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
const githubUrl = 'https://github.com/gabriel-vitebo'

export const portfolio: PortfolioData = {
  hero: {
    greeting: 'Olá, eu sou',
    name: 'Gabriel Vitebo',
    role: 'Desenvolvedor Full Stack',
    description:
      'Construo produtos digitais com foco em interfaces precisas, performance, acessibilidade e arquitetura sustentável.',
    image: profileImage,
  },
  socials: [
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
  ],
  about: {
    title: 'Sobre mim',
    paragraphs: [
      'Sou desenvolvedor com atenção especial à qualidade da experiência, à clareza do código e à evolução saudável de produtos digitais.',
      'Trabalho conectando estratégia, design e engenharia para entregar interfaces rápidas, acessíveis e preparadas para crescer.',
    ],
    highlights: ['Nuxt', 'Vue', 'React', 'TypeScript', 'Node', 'Rails', 'SEO', 'Performance'],
  },
  projectsSection: {
    title: 'Projetos',
    subtitle: 'Uma seleção de interfaces, produtos e ferramentas construídos com foco em execução, clareza e qualidade técnica.',
  },
  projects: [
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
      slug: 'commerce-headless',
      title: 'Commerce Headless',
      shortDescription: 'Experiência de compra rápida com vitrine, busca e checkout.',
      description:
        'Projeto de exemplo com foco em performance, navegação fluida e componentes reutilizáveis para e-commerce.',
      image: '/images/projects/commerce-headless/cover.png',
      images: [
        '/images/projects/commerce-headless/cover.png',
        '/images/projects/commerce-headless/product.png',
      ],
      githubUrl: 'https://github.com/gabriel-vitebo/commerce-headless',
      technologies: ['Vue', 'Nuxt', 'API REST'],
    },
    {
      slug: 'design-system',
      title: 'Design System',
      shortDescription: 'Biblioteca de componentes documentada para acelerar interfaces.',
      description:
        'Sistema de componentes de exemplo com tokens, variações reutilizáveis e documentação pensada para equipes de produto.',
      image: '/images/projects/design-system/cover.png',
      images: [
        '/images/projects/design-system/cover.png',
        '/images/projects/design-system/components.png',
      ],
      githubUrl: 'https://github.com/gabriel-vitebo/design-system',
      demoUrl: 'https://exemplo.com/design-system',
      technologies: ['TypeScript', 'Vue', 'Tailwind CSS'],
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
  ],
}
