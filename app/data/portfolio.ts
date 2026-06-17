import type { PortfolioData } from '~/types/portfolio'
import profileImage from '~/assets/images/profile/my-photo.png'

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
      url: 'https://github.com/gabriel-vitebo',
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
      slug: 'dashboard-analitico',
      title: 'Dashboard Analítico',
      shortDescription: 'Painel para visualização de métricas e indicadores de produto.',
      description:
        'Projeto de exemplo para apresentar organização de dados, filtros e componentes reutilizáveis em uma aplicação web.',
      image: '/images/projects/dashboard-analitico/cover.png',
      images: [
        '/images/projects/dashboard-analitico/cover.png',
        '/images/projects/dashboard-analitico/details.png',
      ],
      githubUrl: 'https://github.com/gabriel-vitebo/dashboard-analitico',
      demoUrl: 'https://exemplo.com/dashboard-analitico',
      technologies: ['Nuxt', 'TypeScript', 'Tailwind CSS'],
    },
    {
      slug: 'site-institucional',
      title: 'Site Institucional',
      shortDescription: 'Site responsivo para apresentar uma marca e seus principais serviços.',
      description:
        'Projeto de exemplo com foco em arquitetura de páginas, conteúdo centralizado e navegação simples.',
      image: '/images/projects/site-institucional/cover.png',
      images: [
        '/images/projects/site-institucional/cover.png',
        '/images/projects/site-institucional/mobile.png',
      ],
      githubUrl: 'https://github.com/gabriel-vitebo/site-institucional',
      technologies: ['Vue', 'Nuxt', 'Tailwind CSS'],
    },
    {
      slug: 'plataforma-saas',
      title: 'Plataforma SaaS',
      shortDescription: 'Área autenticada para gestão de clientes, planos e relatórios.',
      description:
        'Aplicação de exemplo para demonstrar fluxos de dashboard, organização de módulos e padrões de UI para produtos SaaS.',
      image: '/images/projects/plataforma-saas/cover.png',
      images: [
        '/images/projects/plataforma-saas/cover.png',
        '/images/projects/plataforma-saas/customers.png',
      ],
      githubUrl: 'https://github.com/gabriel-vitebo/plataforma-saas',
      demoUrl: 'https://exemplo.com/plataforma-saas',
      technologies: ['Nuxt', 'TypeScript', 'Node.js'],
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
